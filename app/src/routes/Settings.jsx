import { useState } from 'react';
import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { AUTHOR_COUNT, DOMAIN_COUNT } from '../data/index.js';
import { DEFAULT_SETTINGS, STORAGE_KEYS, useStore } from '../state/store.jsx';
import { LEGAL_KEYS, resetAcknowledged } from '../legal/storage.js';

const APP_VERSION = __APP_VERSION__;
const BUILD_DATE = __BUILD_DATE__;

export default function Settings() {
  const { settings, updateSetting, resetAll, favs, persistFailed, online } = useStore();
  const [confirming, setConfirming] = useState(false);

  return (
    <Shell title="Paramètres" subtitle="Affichage, données, à propos">
      <div style={{ maxWidth: 640 }}>
        <h2 className="soc-h2" style={{ marginBottom: 20 }}>
          Paramètres
        </h2>

        {persistFailed && (
          <p
            className="soc-banner"
            style={{ borderRadius: 'var(--radius-md)', marginBottom: 20, border: '1px solid var(--color-accent-800)' }}
          >
            Le stockage local est indisponible (navigation privée ou site data bloqué) : vos réglages et vos
            fiches épinglées ne survivront pas à la fermeture de l&apos;onglet.
          </p>
        )}

        <h3 className="soc-kicker" style={{ margin: '0 0 12px' }}>
          Affichage
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
          <label className="radio" style={{ alignItems: 'flex-start', gap: 10 }}>
            <input
              type="checkbox"
              checked={settings.showCitations}
              onChange={(e) => updateSetting('showCitations', e.target.checked)}
              style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
            />
            <span
              className="dot"
              aria-hidden="true"
              style={{
                borderRadius: 4,
                marginTop: 2,
                borderColor: settings.showCitations ? 'var(--color-accent)' : 'var(--color-divider)',
                background: settings.showCitations ? 'var(--color-accent)' : 'transparent',
                boxShadow: settings.showCitations ? 'inset 0 0 0 3px var(--color-bg)' : 'none',
              }}
            />
            <span>
              <span style={{ display: 'block' }}>Afficher les citations</span>
              <span className="text-muted" style={{ display: 'block', fontSize: 12 }}>
                Masque ou affiche la section « Citations » des fiches, et l&apos;inclut ou non dans l&apos;export
                Markdown.
              </span>
            </span>
          </label>

          <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
            <legend style={{ fontSize: 14, marginBottom: 4 }}>Écran de démarrage</legend>
            <p className="text-muted" style={{ fontSize: 12, margin: '0 0 8px' }}>
              L&apos;écran ouvert au lancement de l&apos;application.
            </p>
            <div className="seg">
              {[
                { v: 'home', label: 'Accueil' },
                { v: 'graph', label: 'Graphe' },
              ].map((o) => (
                <label key={o.v} className="seg-opt">
                  <input
                    type="radio"
                    name="startView"
                    value={o.v}
                    checked={settings.startView === o.v}
                    onChange={() => updateSetting('startView', o.v)}
                  />
                  {o.label}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <h3 className="soc-kicker" style={{ margin: '0 0 12px' }}>
          Données locales
        </h3>
        <table className="table" style={{ marginBottom: 16 }}>
          <tbody>
            <tr>
              <td>Fiches épinglées</td>
              <td style={{ textAlign: 'right' }}>{favs.length}</td>
            </tr>
            <tr>
              <td>
                Clés utilisées <code style={{ fontSize: 11 }}>{Object.values(STORAGE_KEYS).join(', ')}</code>
              </td>
              <td style={{ textAlign: 'right' }}>localStorage</td>
            </tr>
            <tr>
              <td>
                Lecture de l&apos;avertissement légal{' '}
                <code style={{ fontSize: 11 }}>{Object.values(LEGAL_KEYS).join(', ')}</code>
              </td>
              <td style={{ textAlign: 'right' }}>localStorage</td>
            </tr>
            <tr>
              <td>Compte utilisateur, télémétrie</td>
              <td style={{ textAlign: 'right' }}>aucun</td>
            </tr>
          </tbody>
        </table>

        {confirming ? (
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            <button
              type="button"
              className="btn btn-primary"
              style={{ fontSize: 12.5 }}
              onClick={() => {
                resetAll();
                setConfirming(false);
              }}
            >
              Confirmer l&apos;effacement
            </button>
            <button type="button" className="btn btn-secondary" style={{ fontSize: 12.5 }} onClick={() => setConfirming(false)}>
              Annuler
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="btn btn-secondary"
            style={{ fontSize: 12.5, marginBottom: 32 }}
            onClick={() => setConfirming(true)}
          >
            Effacer mes données locales
          </button>
        )}

        <h3 className="soc-kicker" style={{ margin: '0 0 12px' }}>
          À propos
        </h3>
        <table className="table" style={{ marginBottom: 20 }}>
          <tbody>
            <tr>
              <td>Version de l&apos;application</td>
              <td style={{ textAlign: 'right' }}>{APP_VERSION}</td>
            </tr>
            <tr>
              <td>Date de build</td>
              <td style={{ textAlign: 'right' }}>{BUILD_DATE}</td>
            </tr>
            <tr>
              <td>Contenu embarqué</td>
              <td style={{ textAlign: 'right' }}>
                {AUTHOR_COUNT} fiches · {DOMAIN_COUNT} domaines
              </td>
            </tr>
            <tr>
              <td>État du réseau</td>
              <td style={{ textAlign: 'right' }}>{online ? 'en ligne' : 'hors connexion'}</td>
            </tr>
          </tbody>
        </table>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Link className="btn btn-primary" to="/documentation" style={{ fontSize: 12.5 }}>
            📚 Aide &amp; documentation
          </Link>
          <Link className="btn btn-secondary" to="/documentation/legal/mentions-legales" style={{ fontSize: 12.5 }}>
            Informations légales
          </Link>
        </div>

        {import.meta.env.DEV && (
          <p style={{ marginTop: 20 }}>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ fontSize: 12 }}
              onClick={() => {
                resetAcknowledged();
                window.location.reload();
              }}
            >
              [dev] Réinitialiser les mentions légales
            </button>
          </p>
        )}

        <p className="text-muted" style={{ fontSize: 11.5, marginTop: 16 }}>
          Réglages par défaut : citations {DEFAULT_SETTINGS.showCitations ? 'affichées' : 'masquées'}, démarrage
          sur l&apos;{DEFAULT_SETTINGS.startView === 'home' ? 'accueil' : 'écran du graphe'}.
        </p>
      </div>
    </Shell>
  );
}
