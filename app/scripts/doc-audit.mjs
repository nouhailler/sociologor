#!/usr/bin/env node
/**
 * Audit documentaire (DOCUMENTATION_SPEC §38, §47, §52).
 *
 * Vérifie mécaniquement ce qu'une relecture ne voit pas :
 *  1. toute page du sommaire a un contenu, et aucun fichier n'est orphelin ;
 *  2. aucun lien interne ne pointe vers une page inexistante ;
 *  3. tout hôte externe joint par le code est nommé dans les textes légaux ;
 *  4. toute clé de stockage écrite par le code y est nommée aussi ;
 *  5. la section « Précision de la localisation » est présente si et seulement
 *     si le code lit vraiment la position de l'appareil ;
 *  6. aucune section légale n'est vide ;
 *  7. aucun secret n'a été recopié dans la documentation.
 *
 * Sort en code 1 si un contrôle échoue : le build doit s'arrêter.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DOCS = join(ROOT, 'docs');
const SRC = join(ROOT, 'src');

const problems = [];
const notes = [];
const fail = (m) => problems.push(m);

function walk(dir, filter) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full, filter));
    else if (filter(full)) out.push(full);
  }
  return out;
}

const { CHAPTERS, FLAT_PAGES } = await import('../src/docs/manifest.js');
const legal = await import('../src/legal/content.js');

/* — 1. couverture du sommaire — */
const mdFiles = walk(DOCS, (f) => f.endsWith('.md')).map((f) => relative(DOCS, f));
const expected = FLAT_PAGES.filter((p) => !p.render).map((p) => p.file);
const rendered = FLAT_PAGES.filter((p) => p.render);

const missing = expected.filter((f) => !mdFiles.includes(f));
const orphans = mdFiles.filter((f) => !expected.includes(f));
missing.forEach((f) => fail(`Page annoncée au sommaire mais absente du disque : docs/${f}`));
orphans.forEach((f) => fail(`Fichier présent mais absent du sommaire : docs/${f}`));

/* — 2. liens internes — */
const validPaths = new Set(FLAT_PAGES.map((p) => p.path));
const APP_ROUTES = [/^\/$/, /^\/accueil$/, /^\/graphe$/, /^\/recherche$/, /^\/mes-fiches$/, /^\/parametres$/, /^\/documentation$/, /^\/a\/[a-z]+$/, /^\/d\/[a-z]+$/];
let linkCount = 0;
for (const rel of mdFiles) {
  const body = readFileSync(join(DOCS, rel), 'utf8');
  for (const m of body.matchAll(/\]\((\/[^)\s]*)\)/g)) {
    const href = m[1];
    linkCount += 1;
    if (validPaths.has(href)) continue;
    if (APP_ROUTES.some((r) => r.test(href))) continue;
    fail(`Lien cassé dans docs/${rel} : ${href}`);
  }
}

/* — 3 & 4. la doc légale décrit-elle ce build ? — */
const srcFiles = walk(SRC, (f) => /\.(jsx?|css)$/.test(f));
const srcText = srcFiles.map((f) => readFileSync(f, 'utf8')).join('\n');

const hosts = new Set(
  [...srcText.matchAll(/https:\/\/([a-z0-9.-]+\.[a-z]{2,})/gi)]
    .map((m) => m[1].toLowerCase())
    .filter((h) => !h.endsWith('w3.org')),
);
const declaredHosts = new Set(legal.HOTES_EXTERNES);
const legalText = JSON.stringify([legal.MENTIONS_LEGALES, legal.CONFIDENTIALITE, legal.HOTES_EXTERNES]);
for (const h of hosts) {
  if (!declaredHosts.has(h)) {
    fail(`Hôte externe joint par le code mais absent de HOTES_EXTERNES : ${h}`);
  } else if (!legalText.includes(h)) {
    fail(`Hôte ${h} déclaré mais nommé dans aucun texte légal.`);
  }
}
for (const h of declaredHosts) {
  if (!hosts.has(h)) notes.push(`Hôte déclaré mais introuvable dans le code : ${h}`);
}

const keys = new Set([
  ...[...srcText.matchAll(/['"`](sociologor\.[a-z]+\.v\d+)['"`]/g)].map((m) => m[1]),
  ...[...srcText.matchAll(/['"`](legal_notice_[a-z_]+)['"`]/g)].map((m) => m[1]),
]);
for (const k of keys) {
  if (!legal.CLES_STOCKAGE.includes(k)) fail(`Clé de stockage écrite par le code mais non documentée : ${k}`);
  if (!legalText.includes(k)) fail(`Clé ${k} absente des textes légaux.`);
}

/* — 5. la section sur la position de l'appareil, si et seulement si — */
// Le nom de l'interface recherchée n'est volontairement pas écrit dans ce
// commentaire : il satisferait le test qu'il décrit.
const usesDeviceLocation = /navigator\s*\.\s*geolocation|getCurrentPosition|watchPosition/.test(srcText);
const hasLocationSection = [...legal.MENTIONS_LEGALES.sections, ...legal.CONFIDENTIALITE.sections].some((s) =>
  /Précision de la localisation/i.test(s.title),
);
if (usesDeviceLocation && !hasLocationSection) {
  fail("Le code lit la position de l'appareil : la section « Précision de la localisation » est obligatoire.");
}
if (!usesDeviceLocation && hasLocationSection) {
  fail("Section « Précision de la localisation » présente alors que le code ne lit aucune position.");
}

/* — 6. aucune section légale vide — */
for (const doc of [legal.MENTIONS_LEGALES, legal.CONFIDENTIALITE]) {
  for (const s of doc.sections) {
    const empty = (!s.body || s.body.length === 0) && (!s.fields || s.fields.length === 0);
    if (empty) fail(`Section légale vide : ${doc.title} → ${s.title}`);
    (s.body || []).forEach((p, i) => {
      if (!p || p.trim().length < 20) fail(`Paragraphe légal trop court : ${doc.title} → ${s.title} [${i}]`);
    });
  }
}
const toComplete = JSON.stringify([legal.EDITEUR, legal.HEBERGEUR]).match(/À COMPLÉTER/g);
if (toComplete) notes.push(`${toComplete.length} champ(s) légaux restent à compléter avant publication.`);

/* — 7. pas de secret dans la documentation — */
const SECRETS = /(API_KEY|APIKEY|SECRET|PRIVATE_KEY|PASSWORD|BEARER\s+[A-Za-z0-9._-]{12,})/i;
for (const rel of mdFiles) {
  const body = readFileSync(join(DOCS, rel), 'utf8');
  if (SECRETS.test(body)) fail(`Chaîne ressemblant à un secret dans docs/${rel}`);
}

/* — rapport — */
const line = (l, v) => `${l.padEnd(16)}: ${v}`;
console.log('\nDOCUMENTATION AUDIT\n');
console.log(line('Chapitres', CHAPTERS.length));
console.log(line('Pages', `${expected.length - missing.length + rendered.length} / ${FLAT_PAGES.length} disponibles (dont ${rendered.length} rendues par composant)`));
console.log(line('Liens internes', `${linkCount} vérifiés`));
console.log(line('Hôtes externes', `${hosts.size} dans le code, ${declaredHosts.size} déclarés`));
console.log(line('Clés stockage', `${keys.size} détectées, ${legal.CLES_STOCKAGE.length} documentées`));
console.log(line('Sections légales', legal.MENTIONS_LEGALES.sections.length + legal.CONFIDENTIALITE.sections.length));

if (notes.length) {
  console.log('\nÀ vérifier :');
  notes.forEach((n) => console.log(`  - ${n}`));
}

if (problems.length) {
  console.log(`\nSTATUT : ❌ DOCUMENTATION INCOMPLÈTE (${problems.length})\n`);
  problems.forEach((p) => console.log(`  - ${p}`));
  console.log('');
  process.exit(1);
}

console.log('\nSTATUT : ✅ DOCUMENTATION COMPLÈTE\n');
