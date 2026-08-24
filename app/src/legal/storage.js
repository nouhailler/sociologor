/**
 * Mémorisation de la lecture de l'avertissement légal.
 * Réutilise l'accès tolérant aux pannes de `src/lib/storage.js` : en
 * navigation privée, l'avertissement se réaffichera à chaque session plutôt
 * que de bloquer l'application.
 */
import { readJSON, removeKeys, writeJSON } from '../lib/storage.js';
import { LEGAL_NOTICE_VERSION } from './content.js';

export const LEGAL_KEYS = {
  acknowledged: 'legal_notice_acknowledged',
  version: 'legal_notice_acknowledged_version',
};

export function getAcknowledged() {
  return readJSON(LEGAL_KEYS.acknowledged, false) === true;
}

export function getAcknowledgedVersion() {
  return readJSON(LEGAL_KEYS.version, null);
}

export function setAcknowledged() {
  writeJSON(LEGAL_KEYS.acknowledged, true);
  writeJSON(LEGAL_KEYS.version, LEGAL_NOTICE_VERSION);
}

export function resetAcknowledged() {
  removeKeys(Object.values(LEGAL_KEYS));
}

/**
 * Faut-il afficher l'avertissement ?
 *
 * Mode non strict (celui utilisé) : une notice déjà acceptée le reste, même si
 * `LEGAL_NOTICE_VERSION` change — monter la version ne remet pas la modale
 * devant tout le monde. Le jour où une modification le mérite vraiment,
 * appeler `shouldShowNotice({ strict: true })` depuis `LegalGate`.
 */
export function shouldShowNotice({ strict = false } = {}) {
  if (!getAcknowledged()) return true;
  if (strict) return getAcknowledgedVersion() !== LEGAL_NOTICE_VERSION;
  return false;
}
