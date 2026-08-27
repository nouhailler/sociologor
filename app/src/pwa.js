/**
 * Enregistrement du service worker (Workbox via vite-plugin-pwa).
 *
 * - `registerSW` précharge la coquille et les fiches : l'application démarre
 *   sans réseau dès la deuxième visite.
 * - Une nouvelle version n'est jamais appliquée dans le dos de l'utilisateur :
 *   elle est signalée par un bandeau, et n'est activée qu'à sa demande.
 */
import { registerSW } from 'virtual:pwa-register';

let registration = null;

export function setupPWA() {
  if (import.meta.env.DEV) return;

  const updateSW = registerSW({
    onNeedRefresh() {
      window.dispatchEvent(new CustomEvent('sociologor:update-ready'));
    },
    onRegisteredSW(_url, reg) {
      registration = reg || null;
    },
  });

  window.addEventListener('sociologor:apply-update', () => {
    updateSW(true);
  });
}

/**
 * Force une vérification immédiate auprès du serveur, au lieu d'attendre le
 * prochain contrôle passif du navigateur (jusqu'à 24 h). Une mise à jour
 * trouvée retombe sur le même circuit que la détection automatique —
 * `onNeedRefresh` ci-dessus — donc sur le même événement `update-ready`.
 * Retourne `false` sans rien faire si aucun service worker n'est enregistré
 * (mode développement, ou tout premier chargement).
 */
export function checkForUpdate() {
  if (!registration) return false;
  // Échoue silencieusement hors connexion : le minuteur du store affiche
  // alors le même message que si le serveur n'avait rien de plus récent.
  registration.update().catch(() => {});
  return true;
}
