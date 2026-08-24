/**
 * Accès localStorage tolérant aux pannes : navigation privée, stockage plein
 * ou site data bloqué ne doivent jamais empêcher l'app de démarrer.
 * En cas d'échec, l'app fonctionne pour la session en cours sans rien persister.
 */
export function readJSON(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function writeJSON(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function removeKeys(keys) {
  let ok = true;
  keys.forEach((k) => {
    try {
      window.localStorage.removeItem(k);
    } catch {
      ok = false;
    }
  });
  return ok;
}
