/**
 * Partage d'une fiche. Trois niveaux, du plus intégré au plus universel :
 * 1. Web Share API (Android, iOS, Safari) — feuille de partage du système ;
 * 2. presse-papiers ;
 * 3. échec silencieux signalé à l'appelant, qui affiche l'URL.
 * Retourne 'shared' | 'copied' | 'failed'.
 */
export async function shareUrl({ title, text, url }) {
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return 'shared';
    } catch (err) {
      // L'utilisateur a fermé la feuille de partage : ce n'est pas une erreur.
      if (err && err.name === 'AbortError') return 'shared';
    }
  }
  try {
    await navigator.clipboard.writeText(url);
    return 'copied';
  } catch {
    return 'failed';
  }
}
