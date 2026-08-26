/**
 * Résolution des portraits embarqués.
 *
 * Vite réécrit ces imports en URL hachées au build ; les fichiers atterrissent
 * dans dist/assets/ et sont précachés par le service worker (le motif `webp`
 * est déclaré dans `workbox.globPatterns`, vite.config.js). Aucun appel réseau
 * à l'exécution : les six images sont dans le bundle.
 *
 * Ce module est volontairement séparé de `authors.js`, qui doit rester un
 * module de données lisible par Node — `import.meta.glob` n'existe que sous Vite.
 */
const FILES = import.meta.glob('../assets/portraits/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
});

/** Table `nom de fichier sans extension` → URL servie. */
export const PORTRAIT_URLS = Object.fromEntries(
  Object.entries(FILES).map(([path, url]) => [path.split('/').pop().replace('.webp', ''), url]),
);

/** URL du portrait d'une fiche, ou `null` si elle assume le monogramme. */
export function portraitUrl(portrait) {
  if (!portrait || portrait.kind !== 'photo') return null;
  return PORTRAIT_URLS[portrait.file] || null;
}
