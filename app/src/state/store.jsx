import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { readJSON, removeKeys, writeJSON } from '../lib/storage.js';
import { checkForUpdate as pwaCheckForUpdate } from '../pwa.js';

export const STORAGE_KEYS = {
  favs: 'sociologor.favs.v1',
  settings: 'sociologor.settings.v1',
};

export const DEFAULT_SETTINGS = {
  showCitations: true,
  startView: 'home', // 'home' | 'graph'
};

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [favs, setFavs] = useState(() => {
    const v = readJSON(STORAGE_KEYS.favs, []);
    return Array.isArray(v) ? v.filter((x) => typeof x === 'string') : [];
  });
  const [settings, setSettings] = useState(() => ({
    ...DEFAULT_SETTINGS,
    ...(readJSON(STORAGE_KEYS.settings, null) || {}),
  }));
  const [toast, setToast] = useState(null);
  const [persistFailed, setPersistFailed] = useState(false);
  const [online, setOnline] = useState(() =>
    typeof navigator === 'undefined' ? true : navigator.onLine,
  );
  const [updateReady, setUpdateReady] = useState(false);
  const [checkingUpdate, setCheckingUpdate] = useState(false);

  // État réseau : sert le bandeau « hors connexion » et la doc du mode offline.
  // Aux événements `online`/`offline` s'ajoute une relecture au retour d'onglet
  // et à la restauration de la page : un document servi depuis le cache du
  // service worker peut être monté avec une valeur déjà périmée.
  useEffect(() => {
    const sync = () => setOnline(navigator.onLine);
    const up = () => setOnline(true);
    const down = () => setOnline(false);
    window.addEventListener('online', up);
    window.addEventListener('offline', down);
    window.addEventListener('pageshow', sync);
    document.addEventListener('visibilitychange', sync);
    sync();
    return () => {
      window.removeEventListener('online', up);
      window.removeEventListener('offline', down);
      window.removeEventListener('pageshow', sync);
      document.removeEventListener('visibilitychange', sync);
    };
  }, []);

  // Le service worker signale une version en attente (voir src/pwa.js).
  useEffect(() => {
    const onNeedRefresh = () => setUpdateReady(true);
    window.addEventListener('sociologor:update-ready', onNeedRefresh);
    return () => window.removeEventListener('sociologor:update-ready', onNeedRefresh);
  }, []);

  const applyUpdate = useCallback(() => {
    setUpdateReady(false);
    window.dispatchEvent(new CustomEvent('sociologor:apply-update'));
  }, []);

  useEffect(() => {
    if (!writeJSON(STORAGE_KEYS.favs, favs)) setPersistFailed(true);
  }, [favs]);

  useEffect(() => {
    if (!writeJSON(STORAGE_KEYS.settings, settings)) setPersistFailed(true);
  }, [settings]);

  const flash = useCallback((message) => {
    setToast({ message, at: Date.now() });
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  // Mise à jour forcée (Paramètres) : vérifie tout de suite plutôt que
  // d'attendre le prochain contrôle passif du navigateur, puis applique
  // automatiquement si une version plus récente est trouvée — l'utilisateur
  // a déjà donné son accord en déclenchant la vérification lui-même.
  const forceUpdateCheck = useCallback(() => {
    if (!online) {
      flash('Hors connexion : impossible de vérifier une mise à jour.');
      return;
    }
    const started = pwaCheckForUpdate();
    if (!started) {
      flash("Rien à vérifier : le service worker n'est actif qu'en production.");
      return;
    }
    setCheckingUpdate(true);
    flash('Vérification de la dernière version…');
  }, [flash, online]);

  useEffect(() => {
    if (checkingUpdate && updateReady) {
      setCheckingUpdate(false);
      applyUpdate();
    }
  }, [checkingUpdate, updateReady, applyUpdate]);

  useEffect(() => {
    if (!checkingUpdate) return undefined;
    const t = setTimeout(() => {
      setCheckingUpdate(false);
      flash('Vous avez déjà la dernière version.');
    }, 6000);
    return () => clearTimeout(t);
  }, [checkingUpdate, flash]);

  const toggleFav = useCallback(
    (id) => {
      setFavs((cur) => {
        const on = cur.includes(id);
        flash(on ? 'Retirée de vos fiches' : 'Épinglée — disponible hors connexion');
        return on ? cur.filter((x) => x !== id) : [...cur, id];
      });
    },
    [flash],
  );

  const updateSetting = useCallback((key, value) => {
    setSettings((cur) => ({ ...cur, [key]: value }));
  }, []);

  const resetAll = useCallback(() => {
    removeKeys(Object.values(STORAGE_KEYS));
    setFavs([]);
    setSettings(DEFAULT_SETTINGS);
    flash('Données locales effacées');
  }, [flash]);

  const value = useMemo(
    () => ({
      favs,
      toggleFav,
      settings,
      updateSetting,
      resetAll,
      toast,
      flash,
      persistFailed,
      online,
      updateReady,
      applyUpdate,
      checkingUpdate,
      forceUpdateCheck,
    }),
    [
      favs,
      toggleFav,
      settings,
      updateSetting,
      resetAll,
      toast,
      flash,
      persistFailed,
      online,
      updateReady,
      applyUpdate,
      checkingUpdate,
      forceUpdateCheck,
    ],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore doit être utilisé dans <StoreProvider>');
  return ctx;
}
