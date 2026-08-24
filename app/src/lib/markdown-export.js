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
