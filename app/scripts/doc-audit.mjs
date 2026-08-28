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
 *  7. aucun secret n'a été recopié dans la documentation ;
 *  8. les fiches concepts sont complètes et leurs renvois pointent quelque part ;
 *  9. aucun voisinage de concepts ne se contredit ;
 * 10. chaque domaine a une famille, un nom et de quoi remplir son écran ;
 * 11. la carte des courants est complète, et chaque fiche a un courant ;
 * 12. chaque phénomène a une catégorie, des dimensions et des notions bien
 *     formées, et concepts/notions ne sont jamais mélangés dans un même champ ;
 * 13. chaque processus a une catégorie, au moins deux étapes, et ses éventuels
 *     phénomènes liés existent bien parmi les phénomènes déjà décrits ;
 * 14. chaque mécanisme a une catégorie, au moins un concept et au moins un
 *     processus qu'il alimente, et ses éventuels phénomènes liés existent.
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
const APP_ROUTES = [/^\/$/, /^\/accueil$/, /^\/graphe$/, /^\/courants$/, /^\/sociologues$/, /^\/concepts$/, /^\/phenomenes$/, /^\/mecanismes$/, /^\/processus$/, /^\/recherche$/, /^\/mes-fiches$/, /^\/parametres$/, /^\/documentation$/, /^\/a\/[a-z]+$/, /^\/d\/[a-z]+$/, /^\/c\/[a-z-]+$/, /^\/p\/[a-z-]+$/, /^\/m\/[a-z-]+$/, /^\/pr\/[a-z-]+$/];
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
// Le code de l'application, mais aussi ce qui part dans le bundle sans passer
// par `src/` : la page hôte et la configuration du service worker, qui décide
// quels domaines sont mis en cache.
const srcFiles = [
  ...walk(SRC, (f) => /\.(jsx?|css)$/.test(f)),
  join(ROOT, 'index.html'),
  join(ROOT, 'vite.config.js'),
];
// Un hôte s'y écrit parfois échappé, dans une expression régulière de cache
// (`https:\/\/fonts\.gstatic\.com`) : on cherche sur une copie sans antislash,
// sinon l'hôte passe pour absent du code alors qu'il est bel et bien joint.
const srcText = srcFiles.map((f) => readFileSync(f, 'utf8')).join('\n').replace(/\\/g, '');

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

/* — 8. intégrité des fiches concepts — */
// La fiche concept promet dix rubriques : si l'une manque, l'écran affiche un
// trou. Et un renvoi vers un identifiant inexistant produit un lien mort.
const { AUTHORS } = await import('../src/data/authors.js');
const { CONCEPTS } = await import('../src/data/concepts.js');

const conceptBase = new Map();
Object.values(AUTHORS).forEach((a) =>
  a.concepts.forEach((c) => conceptBase.set(c.id, { ...c, authorId: a.id })),
);

const CONCEPT_FIELDS = ['detaille', 'origine', 'exemples', 'oeuvres', 'associes', 'opposes', 'critiques', 'evolution'];

for (const id of conceptBase.keys()) {
  if (!CONCEPTS[id]) fail(`Concept sans fiche complète : ${id}`);
}
for (const id of Object.keys(CONCEPTS)) {
  if (!conceptBase.has(id)) fail(`Fiche concept orpheline (aucun auteur ne porte ce concept) : ${id}`);
}
for (const [id, c] of Object.entries(CONCEPTS)) {
  if (!conceptBase.has(id)) continue;
  for (const f of CONCEPT_FIELDS) {
    if (c[f] === undefined || (Array.isArray(c[f]) && c[f].length === 0)) {
      fail(`Fiche concept ${id} : rubrique « ${f} » vide ou absente.`);
    }
  }
  for (const k of ['oeuvre', 'annee', 'contexte']) {
    if (!c.origine?.[k]) fail(`Fiche concept ${id} : origine.${k} manquant.`);
  }
  for (const k of ['associes', 'opposes']) {
    for (const other of c[k] || []) {
      if (!conceptBase.has(other)) fail(`Fiche concept ${id} : ${k} renvoie à un identifiant inconnu « ${other} ».`);
      if (other === id) fail(`Fiche concept ${id} : ${k} se référence lui-même.`);
    }
  }
  // L'exemple de la fiche auteur est ajouté en tête par getConcept : le
  // recopier ici l'afficherait deux fois.
  if ((c.exemples || []).includes(conceptBase.get(id).ex)) {
    fail(`Fiche concept ${id} : l'exemple de la fiche auteur est recopié dans « exemples ».`);
  }
}

/* — 9. un voisinage ne se contredit pas — */
// Les voisinages sont symétrisés à l'affichage : une paire déclarée des deux
// côtés, une fois comme associée et une fois comme opposée, place le même
// concept dans les deux listes de la fiche. Le lecteur y lit une contradiction,
// pas une nuance.
const conceptPair = (a, b) => [a, b].sort().join(' ↔ ');
const voisinage = { associes: new Set(), opposes: new Set() };
for (const [id, c] of Object.entries(CONCEPTS)) {
  for (const k of ['associes', 'opposes']) {
    for (const other of c[k] || []) {
      if (conceptBase.has(other) && other !== id) voisinage[k].add(conceptPair(id, other));
    }
  }
}
for (const p of voisinage.associes) {
  if (voisinage.opposes.has(p)) fail(`Voisinage contradictoire, à la fois associé et opposé : ${p}`);
}

/* — 10. intégrité des domaines — */
// Un domaine sans famille n'apparaît sur aucun écran : il existe à son adresse
// et nulle part ailleurs. Un domaine sans auteur ni inspirateur est une page
// vide, et un inspirateur mal formé se lit comme une liste de noms sans raison.
const { DOMAINS: DOMAINS_BASE } = await import('../src/data/authors.js');
const { DOMAINS_ADDED, DOMAIN_EXTRA, FAMILIES } = await import('../src/data/domains.js');

const allDomains = [...DOMAINS_BASE, ...DOMAINS_ADDED];
const familyIds = new Set(FAMILIES.map((f) => f.id));
const seenDomain = new Set();

for (const d of allDomains) {
  if (seenDomain.has(d.id)) fail(`Domaine en double : ${d.id}`);
  seenDomain.add(d.id);

  const extra = DOMAIN_EXTRA[d.id];
  if (!extra) {
    fail(`Domaine ${d.id} : ni famille ni inspirateurs déclarés dans domains.js.`);
    continue;
  }
  if (!familyIds.has(extra.famille)) fail(`Domaine ${d.id} : famille inconnue « ${extra.famille} ».`);
  if (!(d.nom || extra.nom)) fail(`Domaine ${d.id} : nom complet manquant.`);
  if (!d.d) fail(`Domaine ${d.id} : phrase de présentation manquante.`);
  if (!extra.detail) fail(`Domaine ${d.id} : paragraphe de contexte (« detail ») manquant.`);

  const corpus = (d.a || []).filter((x) => AUTHORS[x]);
  (d.a || []).forEach((x) => {
    if (!AUTHORS[x]) fail(`Domaine ${d.id} : auteur inconnu « ${x} ».`);
  });
  if (corpus.length === 0 && (extra.inspirateurs || []).length === 0) {
    fail(`Domaine ${d.id} : aucun auteur du corpus ni inspirateur — l'écran serait vide.`);
  }
  for (const i of extra.inspirateurs || []) {
    if (!i.includes(' — ')) fail(`Domaine ${d.id} : inspirateur sans apport « ${i.slice(0, 40)}… ».`);
  }
}

for (const id of Object.keys(DOMAIN_EXTRA)) {
  if (!seenDomain.has(id)) fail(`Complément de domaine orphelin (aucun domaine de ce nom) : ${id}`);
}
for (const f of FAMILIES) {
  if (!allDomains.some((d) => DOMAIN_EXTRA[d.id]?.famille === f.id)) {
    fail(`Famille vide, elle s'afficherait sans carte : ${f.id}`);
  }
}

/* — 11. intégrité de la carte des courants — */
// Chaque fiche renvoie à son courant depuis son en-tête : un auteur rattaché à
// aucun courant, ou à deux, casse ce renvoi. Un parent inconnu casse la carte.
const { COURANTS, PERIODES, NIVEAUX } = await import('../src/data/courants.js');

const courantIds = new Set();
const periodeIds = new Set(PERIODES.map((p) => p.id));
const niveauIds = new Set(NIVEAUX.map((n) => n.id));
const porteurs = new Map();

for (const c of COURANTS) {
  if (courantIds.has(c.id)) fail(`Courant en double : ${c.id}`);
  courantIds.add(c.id);
  if (!periodeIds.has(c.periode)) fail(`Courant ${c.id} : période inconnue « ${c.periode} ».`);
  for (const f of ['t', 'd', 'detail']) {
    if (!c[f]) fail(`Courant ${c.id} : rubrique « ${f} » vide ou absente.`);
  }
  if ((c.auteurs || []).length === 0 && (c.inspirateurs || []).length === 0) {
    fail(`Courant ${c.id} : ni fiche du corpus ni inspirateur — la carte l'afficherait vide.`);
  }
  for (const a of c.auteurs || []) {
    if (!AUTHORS[a]) fail(`Courant ${c.id} : auteur inconnu « ${a} ».`);
    if (porteurs.has(a)) fail(`Auteur dans deux courants, son en-tête ne saurait où renvoyer : ${a}`);
    porteurs.set(a, c.id);
  }
  for (const i of c.inspirateurs || []) {
    if (!i.includes(' — ')) fail(`Courant ${c.id} : inspirateur sans apport « ${i.slice(0, 40)}… ».`);
  }
  if (!niveauIds.has(c.niveau)) fail(`Courant ${c.id} : niveau inconnu « ${c.niveau} ».`);
  if (c.niveau === 'paradigme' && c.parent) fail(`Courant ${c.id} : un paradigme n'a pas de parent, « ${c.parent} » déclaré.`);
  if (c.niveau !== 'paradigme' && !c.parent) fail(`Courant ${c.id} : niveau « ${c.niveau} » sans parent — la hiérarchie n'aurait rien au-dessus.`);
}

for (const c of COURANTS) {
  for (const parent of c.vientDe || []) {
    if (!courantIds.has(parent)) fail(`Courant ${c.id} : vientDe renvoie à un courant inconnu « ${parent} ».`);
    if (parent === c.id) fail(`Courant ${c.id} : se déclare issu de lui-même.`);
  }
  if (c.parent) {
    if (!courantIds.has(c.parent)) fail(`Courant ${c.id} : parent renvoie à un courant inconnu « ${c.parent} ».`);
    if (c.parent === c.id) fail(`Courant ${c.id} : se déclare hiérarchiquement issu de lui-même.`);
  }
}

// La hiérarchie doit rester un arbre : en remontant les `parent` depuis
// n'importe quel courant, on doit toujours atteindre un paradigme sans
// boucler. Une boucle romprait le fil d'ariane de la carte.
const byIdForNiveau = new Map(COURANTS.map((c) => [c.id, c]));
for (const c of COURANTS) {
  const seen = new Set([c.id]);
  let cur = c;
  while (cur.parent) {
    if (seen.has(cur.parent)) {
      fail(`Courant ${c.id} : boucle dans la hiérarchie des parents (« ${cur.parent} » déjà visité).`);
      break;
    }
    seen.add(cur.parent);
    cur = byIdForNiveau.get(cur.parent);
    if (!cur) break;
  }
}

for (const id of Object.keys(AUTHORS)) {
  if (!porteurs.has(id)) fail(`Fiche sans courant, son en-tête n'aurait rien à pointer : ${id}`);
}
for (const p of PERIODES) {
  if (!COURANTS.some((c) => c.periode === p.id)) fail(`Période vide dans la carte des courants : ${p.id}`);
}

/* — 12. intégrité des phénomènes sociaux — */
// Un phénomène ne doit jamais mélanger un concept du corpus (cliquable, dans
// `concepts`) et une notion sans fiche (texte libre, dans `notions`) : chaque
// id de `concepts` doit exister comme fiche concept, chaque notion doit
// porter son apport après un tiret cadratin, comme un inspirateur de domaine.
const { CATEGORIES_PHENOMENES, DIMENSIONS_PHENOMENES, PHENOMENES } = await import('../src/data/phenomenes.js');

const catIds = new Set(CATEGORIES_PHENOMENES.map((c) => c.id));
const dimIds = new Set(DIMENSIONS_PHENOMENES.map((d) => d.id));
const phenIds = new Set();
const conceptTitles = new Set([...conceptBase.values()].map((c) => c.t));

for (const p of PHENOMENES) {
  if (phenIds.has(p.id)) fail(`Phénomène en double : ${p.id}`);
  phenIds.add(p.id);
  for (const f of ['t', 'd', 'detail']) {
    if (!p[f]) fail(`Phénomène ${p.id} : rubrique « ${f} » vide ou absente.`);
  }
  if (!catIds.has(p.categorie)) fail(`Phénomène ${p.id} : catégorie inconnue « ${p.categorie} ».`);
  for (const d of p.dimensions || []) {
    if (!dimIds.has(d)) fail(`Phénomène ${p.id} : dimension inconnue « ${d} ».`);
  }
  if ((p.dimensions || []).length === 0) fail(`Phénomène ${p.id} : aucune dimension déclarée.`);
  for (const c of p.concepts || []) {
    if (!conceptBase.has(c)) fail(`Phénomène ${p.id} : concept inconnu « ${c} » — ce champ n'admet que des fiches du corpus.`);
  }
  if ((p.concepts || []).length === 0 && (p.notions || []).length === 0) {
    fail(`Phénomène ${p.id} : ni concept ni notion — la fiche s'afficherait vide.`);
  }
  for (const n of p.notions || []) {
    if (!n.includes(' — ')) fail(`Phénomène ${p.id} : notion sans apport « ${n.slice(0, 40)}… ».`);
    const notionTitle = n.split(' — ')[0];
    if (conceptTitles.has(notionTitle)) {
      fail(`Phénomène ${p.id} : « ${notionTitle} » est une fiche concept, elle appartient à « concepts », pas à « notions ».`);
    }
  }
}
for (const cat of CATEGORIES_PHENOMENES) {
  if (!PHENOMENES.some((p) => p.categorie === cat.id)) fail(`Catégorie de phénomènes vide : ${cat.id}`);
}
for (const dim of DIMENSIONS_PHENOMENES) {
  if (!PHENOMENES.some((p) => (p.dimensions || []).includes(dim.id))) {
    fail(`Dimension de phénomène jamais utilisée : ${dim.id}`);
  }
}

/* — 13. intégrité des processus sociaux — */
// Même discipline que les phénomènes : `concepts` n'admet que des fiches du
// corpus, `notions` que du texte libre, jamais les deux confondus. `phenomenes`
// est le seul champ propre aux processus : il pointe vers un état déjà décrit
// dans `phenomenes.js`, jamais vers un identifiant inconnu.
const { CATEGORIES_PROCESSUS, PROCESSUS } = await import('../src/data/processus.js');

const procCatIds = new Set(CATEGORIES_PROCESSUS.map((c) => c.id));
const procIds = new Set();

for (const p of PROCESSUS) {
  if (procIds.has(p.id)) fail(`Processus en double : ${p.id}`);
  procIds.add(p.id);
  for (const f of ['t', 'd', 'detail']) {
    if (!p[f]) fail(`Processus ${p.id} : rubrique « ${f} » vide ou absente.`);
  }
  if (!procCatIds.has(p.categorie)) fail(`Processus ${p.id} : catégorie inconnue « ${p.categorie} ».`);
  if ((p.etapes || []).length < 2) fail(`Processus ${p.id} : moins de deux étapes — ce n'est pas une trajectoire.`);
  for (const c of p.concepts || []) {
    if (!conceptBase.has(c)) fail(`Processus ${p.id} : concept inconnu « ${c} » — ce champ n'admet que des fiches du corpus.`);
  }
  for (const ph of p.phenomenes || []) {
    if (!phenIds.has(ph)) fail(`Processus ${p.id} : phénomène inconnu « ${ph} ».`);
  }
  if ((p.concepts || []).length === 0 && (p.notions || []).length === 0) {
    fail(`Processus ${p.id} : ni concept ni notion — la fiche s'afficherait vide.`);
  }
  for (const n of p.notions || []) {
    if (!n.includes(' — ')) fail(`Processus ${p.id} : notion sans apport « ${n.slice(0, 40)}… ».`);
    const notionTitle = n.split(' — ')[0];
    if (conceptTitles.has(notionTitle)) {
      fail(`Processus ${p.id} : « ${notionTitle} » est une fiche concept, elle appartient à « concepts », pas à « notions ».`);
    }
  }
}
for (const cat of CATEGORIES_PROCESSUS) {
  if (!PROCESSUS.some((p) => p.categorie === cat.id)) fail(`Catégorie de processus vide : ${cat.id}`);
}

/* — 14. intégrité des mécanismes sociaux — */
// Un mécanisme sans processus n'expliquerait rien : ce champ n'admet donc pas
// la liste vide, à la différence de `phenomenes`, qui peut rester vide si le
// mécanisme n'aboutit à aucun état déjà décrit.
const { CATEGORIES_MECANISMES, MECANISMES } = await import('../src/data/mecanismes.js');

const mecaCatIds = new Set(CATEGORIES_MECANISMES.map((c) => c.id));
const mecaIds = new Set();

for (const m of MECANISMES) {
  if (mecaIds.has(m.id)) fail(`Mécanisme en double : ${m.id}`);
  mecaIds.add(m.id);
  for (const f of ['t', 'd', 'detail']) {
    if (!m[f]) fail(`Mécanisme ${m.id} : rubrique « ${f} » vide ou absente.`);
  }
  if (!mecaCatIds.has(m.categorie)) fail(`Mécanisme ${m.id} : catégorie inconnue « ${m.categorie} ».`);
  if ((m.concepts || []).length === 0) fail(`Mécanisme ${m.id} : aucun concept — la fiche s'afficherait sans ancrage théorique.`);
  for (const c of m.concepts || []) {
    if (!conceptBase.has(c)) fail(`Mécanisme ${m.id} : concept inconnu « ${c} ».`);
  }
  if ((m.processus || []).length === 0) fail(`Mécanisme ${m.id} : aucun processus — un mécanisme doit alimenter au moins une trajectoire.`);
  for (const pr of m.processus || []) {
    if (!procIds.has(pr)) fail(`Mécanisme ${m.id} : processus inconnu « ${pr} ».`);
  }
  for (const ph of m.phenomenes || []) {
    if (!phenIds.has(ph)) fail(`Mécanisme ${m.id} : phénomène inconnu « ${ph} ».`);
  }
}
for (const cat of CATEGORIES_MECANISMES) {
  if (!MECANISMES.some((m) => m.categorie === cat.id)) fail(`Catégorie de mécanisme vide : ${cat.id}`);
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
console.log(line('Fiches concepts', `${Object.keys(CONCEPTS).length} / ${conceptBase.size}, ${CONCEPT_FIELDS.length} rubriques chacune`));
console.log(line('Voisinages', `${voisinage.associes.size} paires associées, ${voisinage.opposes.size} opposées`));
console.log(
  line(
    'Domaines',
    `${allDomains.length} en ${FAMILIES.length} familles, ${Object.values(DOMAIN_EXTRA).reduce((n, e) => n + (e.inspirateurs || []).length, 0)} inspirateurs hors corpus`,
  ),
);

console.log(
  line(
    'Courants',
    `${COURANTS.length} en ${PERIODES.length} périodes, ${COURANTS.reduce((n, c) => n + (c.vientDe || []).length, 0)} filiations, ${NIVEAUX.map((n) => `${COURANTS.filter((c) => c.niveau === n.id).length} ${n.t.toLowerCase()}(s)`).join(', ')}`,
  ),
);
console.log(
  line(
    'Phénomènes',
    `${PHENOMENES.length} en ${CATEGORIES_PHENOMENES.length} catégories, ${PHENOMENES.reduce((n, p) => n + (p.concepts || []).length, 0)} liens vers des concepts, ${PHENOMENES.reduce((n, p) => n + (p.notions || []).length, 0)} notions`,
  ),
);
console.log(
  line(
    'Processus',
    `${PROCESSUS.length} en ${CATEGORIES_PROCESSUS.length} catégories, ${PROCESSUS.reduce((n, p) => n + (p.concepts || []).length, 0)} liens vers des concepts, ${PROCESSUS.reduce((n, p) => n + (p.phenomenes || []).length, 0)} liens vers des phénomènes, ${PROCESSUS.reduce((n, p) => n + (p.notions || []).length, 0)} notions`,
  ),
);
console.log(
  line(
    'Mécanismes',
    `${MECANISMES.length} en ${CATEGORIES_MECANISMES.length} catégories, ${MECANISMES.reduce((n, m) => n + (m.concepts || []).length, 0)} liens vers des concepts, ${MECANISMES.reduce((n, m) => n + (m.processus || []).length, 0)} liens vers des processus, ${MECANISMES.reduce((n, m) => n + (m.phenomenes || []).length, 0)} liens vers des phénomènes`,
  ),
);

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
