/** Sérialise une fiche auteur en Markdown — le même contenu que l'écran, sans mise en forme d'interface. */
export function authorToMarkdown(a, { includeCitations = true } = {}) {
  const L = [];
  L.push(`# ${a.name}`, '');
  L.push(`*${a.dates} · ${a.nat} · ${a.periode} · ${a.courant}*`, '');
  L.push(`> ${a.resume}`, '');

  L.push('## Repères', '');
  a.reperes.forEach((r) => L.push(`- **${r.k}** : ${r.v}`));
  L.push('');

  L.push('## Concepts majeurs', '');
  a.concepts.forEach((c) => {
    L.push(`### ${c.t} (${c.year})`, '');
    L.push(c.simple, '');
    L.push(`*Exemple —* ${c.ex}`, '');
  });

  L.push('## Filiation', '');
  L.push(`- **Hérite de** : ${a.upLinks.length ? a.upLinks.map((l) => l.label).join(', ') : '—'}`);
  L.push(`- **A influencé** : ${a.downLinks.length ? a.downLinks.map((l) => l.label).join(', ') : '—'}`);
  L.push('');

  if (a.horsCorpus?.length) {
    L.push('### Influences hors corpus', '');
    a.horsCorpus.forEach((h) => L.push(`- ${h}`));
    L.push('');
  }

  L.push('## Œuvres principales', '');
  a.oeuvres.forEach((o) => L.push(`- ${o.y} — ${o.t}`));
  L.push('');

  if (includeCitations && a.citations?.length) {
    L.push('## Citations', '');
    a.citations.forEach((q) => L.push(`> « ${q.t} »`, `> — ${q.src}`, ''));
  }

  L.push('## Critiques', '');
  a.critiques.forEach((c) => L.push(`- ${c}`));
  L.push('');

  if (a.disc?.length) {
    L.push("## Liens avec d'autres disciplines", '');
    a.disc.forEach((d) => L.push(`- ${d}`));
    L.push('');
  }

  if (a.biblio?.length) {
    L.push('## Bibliographie critique', '');
    a.biblio.forEach((b) => L.push(`- ${b}`));
    L.push('');
  }

  L.push('---', '', `Fiche exportée depuis Sociologor — ${new Date().toLocaleDateString('fr-FR')}.`);
  return L.join('\n');
}

/** Sérialise une fiche concept en Markdown — les dix sections de l'écran, sans mise en forme d'interface. */
export function conceptToMarkdown(c) {
  const L = [];
  L.push(`# ${c.t}`, '');
  L.push(`*${c.year} · ${c.auteur.name} · ${c.auteur.courant}*`, '');
  L.push(`> ${c.simple}`, '');

  L.push('## Définition détaillée', '');
  c.detaille.forEach((p) => L.push(p, ''));

  L.push('## Origine', '');
  L.push(`- **Œuvre** : ${c.origine.oeuvre} (${c.origine.annee})`);
  L.push(`- **Contexte** : ${c.origine.contexte}`);
  L.push('');

  L.push('## Exemples concrets', '');
  c.exemples.forEach((e) => L.push(`- ${e}`));
  L.push('');

  L.push('## Œuvres où il apparaît', '');
  c.oeuvres.forEach((o) => L.push(`- ${o.y} — ${o.t}`));
  L.push('');

  L.push('## Évolution historique', '');
  c.evolution.forEach((s) => L.push(`- **${s.p}** — ${s.f}`));
  L.push('');

  L.push('## Critiques', '');
  c.critiques.forEach((k) => L.push(`- ${k}`));
  L.push('');

  L.push('## Voisinage', '');
  const names = (links) => (links.length ? links.map((l) => l.label).join(', ') : '—');
  L.push(`- **Auteur associé** : ${c.auteur.name}`);
  L.push(`- **Concepts associés** : ${names(c.associesLinks)}`);
  L.push(`- **Concepts opposés** : ${names(c.opposesLinks)}`);
  L.push('');

  if (c.problematiquesLinks.length) {
    L.push('## Problématiques qui le mobilisent', '');
    L.push(c.problematiquesLinks.map((p) => p.label).join(', '));
    L.push('');
  }

  L.push('---', '', `Concept exporté depuis Sociologor — ${new Date().toLocaleDateString('fr-FR')}.`);
  return L.join('\n');
}

/** Sérialise une fiche phénomène en Markdown — les mêmes rubriques que l'écran. */
export function phenomeneToMarkdown(p) {
  const L = [];
  L.push(`# ${p.t}`, '');
  L.push(`*${p.categorieT} · ${p.dimensionsT.join(', ')}*`, '');
  L.push(`> ${p.d}`, '');

  L.push('## Ce que la sociologie en dit', '');
  L.push(p.detail, '');

  L.push('## Concepts du corpus', '');
  L.push(
    p.conceptsLinks.length
      ? p.conceptsLinks.map((c) => `${c.label} (${c.authorName})`).join(', ')
      : 'Aucun.',
  );
  L.push('');

  if (p.mecanismesLinks.length) {
    L.push("## Mécanismes qui l'expliquent", '');
    L.push(p.mecanismesLinks.map((m) => m.label).join(', '));
    L.push('');
  }

  if (p.notions.length) {
    L.push('## Notions associées', '');
    p.notions.forEach((n) => L.push(`- ${n}`));
    L.push('');
  }

  if (p.problematiquesLinks.length) {
    L.push('## Problématiques liées', '');
    L.push(p.problematiquesLinks.map((pb) => pb.label).join(', '));
    L.push('');
  }

  L.push('---', '', `Phénomène exporté depuis Sociologor — ${new Date().toLocaleDateString('fr-FR')}.`);
  return L.join('\n');
}

/** Sérialise une fiche processus en Markdown — les mêmes rubriques que l'écran. */
export function processusToMarkdown(p) {
  const L = [];
  L.push(`# ${p.t}`, '');
  L.push(`*${p.categorieT}*`, '');
  L.push(`> ${p.d}`, '');

  L.push('## Ce que la sociologie en dit', '');
  L.push(p.detail, '');

  L.push('## Étapes types', '');
  p.etapes.forEach((e, i) => L.push(`${i + 1}. ${e}`));
  L.push('');

  if (p.mecanismesLinks.length) {
    L.push("## Mécanismes qui l'alimentent", '');
    L.push(p.mecanismesLinks.map((m) => m.label).join(', '));
    L.push('');
  }

  L.push('## Concepts du corpus', '');
  L.push(
    p.conceptsLinks.length
      ? p.conceptsLinks.map((c) => `${c.label} (${c.authorName})`).join(', ')
      : 'Aucun.',
  );
  L.push('');

  if (p.phenomenesLinks.length) {
    L.push('## Phénomènes liés', '');
    L.push(p.phenomenesLinks.map((ph) => ph.label).join(', '));
    L.push('');
  }

  if (p.notions.length) {
    L.push('## Notions associées', '');
    p.notions.forEach((n) => L.push(`- ${n}`));
    L.push('');
  }

  if (p.problematiquesLinks.length) {
    L.push('## Problématiques liées', '');
    L.push(p.problematiquesLinks.map((pb) => pb.label).join(', '));
    L.push('');
  }

  L.push('---', '', `Processus exporté depuis Sociologor — ${new Date().toLocaleDateString('fr-FR')}.`);
  return L.join('\n');
}

/** Sérialise une fiche mécanisme en Markdown — les mêmes rubriques que l'écran. */
export function mecanismeToMarkdown(m) {
  const L = [];
  L.push(`# ${m.t}`, '');
  L.push(`*${m.categorieT}*`, '');
  L.push(`> ${m.d}`, '');

  L.push('## Ce que la sociologie en dit', '');
  L.push(m.detail, '');

  L.push('## Concepts du corpus', '');
  L.push(
    m.conceptsLinks.length
      ? m.conceptsLinks.map((c) => `${c.label} (${c.authorName})`).join(', ')
      : 'Aucun.',
  );
  L.push('');

  L.push('## Processus alimentés', '');
  L.push(m.processusLinks.length ? m.processusLinks.map((pr) => pr.label).join(', ') : 'Aucun.');
  L.push('');

  if (m.phenomenesLinks.length) {
    L.push('## Phénomènes liés', '');
    L.push(m.phenomenesLinks.map((ph) => ph.label).join(', '));
    L.push('');
  }

  if (m.problematiquesLinks.length) {
    L.push('## Problématiques liées', '');
    L.push(m.problematiquesLinks.map((pb) => pb.label).join(', '));
    L.push('');
  }

  L.push('---', '', `Mécanisme exporté depuis Sociologor — ${new Date().toLocaleDateString('fr-FR')}.`);
  return L.join('\n');
}

/** Sérialise une fiche problématique en Markdown — les douze rubriques de l'écran. */
export function problematiqueToMarkdown(p) {
  const L = [];
  const listOrDash = (items) => (items && items.length ? items.join(', ') : '—');
  const linksOrDash = (items) => (items.length ? items.map((i) => i.label || i.name).join(', ') : '—');

  L.push(`# ${p.t}`, '');
  L.push(`*${p.categorieT}*`, '');
  L.push(`> ${p.simple}`, '');

  L.push('## 1. Identité', '');
  p.detaille.forEach((para) => L.push(para, ''));
  p.sousCategories.forEach((sc) => L.push(`- **${sc.t}** — ${sc.d}`));
  L.push('');

  L.push('## 2. Comprendre la problématique', '');
  p.description.forEach((para) => L.push(para, ''));
  L.push(`**Situation actuelle** — ${p.situationActuelle}`, '');

  L.push('## 3. Population concernée', '');
  L.push(p.population.generale, '');
  p.population.groupesExposes.forEach((g) => L.push(`- ${g}`));
  L.push('');

  L.push('## 4. Causes et facteurs', '');
  Object.entries(p.facteurs).forEach(([k, items]) => L.push(`- **${k}** : ${listOrDash(items)}`));
  L.push('');

  L.push('## 5. Manifestations', '');
  Object.entries(p.manifestations).forEach(([k, items]) => L.push(`- **${k}** : ${listOrDash(items)}`));
  L.push('');

  L.push('## 6. Mécanismes sociaux', '');
  L.push(p.mecanismeSchema.join(' → '), '');
  L.push(linksOrDash(p.mecanismesLinks), '');

  L.push('## 7. Conséquences', '');
  Object.entries(p.consequences).forEach(([k, items]) => L.push(`- **${k}** : ${listOrDash(items)}`));
  L.push('');

  L.push('## 8. Dynamiques', '');
  Object.entries(p.dynamiques).forEach(([k, v]) => L.push(`- **${k}** : ${v}`));
  L.push('');

  L.push('## 9. Mesurer la problématique', '');
  L.push(p.mesure.description, '');
  L.push(linksOrDash(p.mesure.statistiquesLinks), '');

  L.push('## 10. Débats sociologiques', '');
  p.debats.forEach((d) => L.push(`- **${d.t}** — ${d.d}`));
  L.push('');

  L.push('## 11. Politiques publiques', '');
  L.push(linksOrDash(p.politiquesPubliquesLinks), '');

  L.push('## 12. Liens avec Sociologor', '');
  L.push(`- **Phénomènes** : ${linksOrDash(p.phenomenesLinks)}`);
  L.push(`- **Concepts** : ${linksOrDash(p.conceptsLinks)}`);
  L.push(`- **Processus** : ${linksOrDash(p.processusLinks)}`);
  L.push(`- **Théories** : ${linksOrDash(p.theoriesLinks)}`);
  L.push(`- **Auteurs** : ${linksOrDash(p.auteursLinks)}`);
  L.push(`- **Études** : ${linksOrDash(p.etudesLinks)}`);
  L.push(`- **Problématiques connexes** : ${linksOrDash(p.problematiquesConnexesLinks)}`);
  L.push('');

  L.push('---', '', `Problématique exportée depuis Sociologor — ${new Date().toLocaleDateString('fr-FR')}.`);
  return L.join('\n');
}

/** Nom de fichier sûr : sans accent, sans espace, sans caractère interdit. */
export function slugify(name) {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

/** Déclenche le téléchargement d'un fichier texte généré côté client. */
export function downloadText(filename, text) {
  const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
