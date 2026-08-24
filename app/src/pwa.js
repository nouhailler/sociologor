/**
 * Enregistrement du service worker (Workbox via vite-plugin-pwa).
 *
 * - `registerSW` précharge la coquille et les fiches : l'application démarre
 *   sans réseau dès la deuxième visite.
 * - Une nouvelle version n'est jamais appliquée dans le dos de l'utilisateur :
 *   elle est signalée par un bandeau, et n'est activée qu'à sa demande.
 */
import { registerSW } from 'virtual:pwa-register';

export function setupPWA() {
  if (import.meta.env.DEV) return;

  const updateSW = registerSW({
    onNeedRefresh() {
      window.dispatchEvent(new CustomEvent('sociologor:update-ready'));
    },
  });

  window.addEventListener('sociologor:apply-update', () => {
    updateSW(true);
  });
}
