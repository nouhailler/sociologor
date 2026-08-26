import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AUTHOR_COUNT } from '../data/index.js';
import { useStore } from '../state/store.jsx';
import {
  IconBack,
  IconBook,
  IconDownload,
  IconGear,
  IconGraph,
  IconHome,
  IconOffline,
  IconSearch,
  IconStar,
} from './Icons.jsx';

const NAV = [
  { to: '/', label: 'Accueil', hint: 'Domaines et notion du jour', tab: 'Accueil', Icon: IconHome },
  { to: '/graphe', label: 'Graphe', hint: 'Filiations intellectuelles', tab: 'Graphe', Icon: IconGraph },
  { to: '/recherche', label: 'Recherche', hint: 'Auteurs, concepts, œuvres', tab: 'Chercher', Icon: IconSearch },
  { to: '/mes-fiches', label: 'Mes fiches', hint: null, tab: 'Fiches', Icon: IconStar },
  { to: '/documentation', label: 'Documentation', hint: 'Aide et guide complet', tab: 'Aide', Icon: IconBook },
];

/**
 * Onglet actif. Les fiches (`/a/:id`) et les domaines (`/d/:id`) s'atteignent
 * depuis l'accueil : ils gardent l'accueil surligné, comme dans la maquette.
 */
function sectionOf(pathname) {
  // La carte des courants est la seconde carte : elle garde l'onglet Graphe
  // surligné plutôt que d'ajouter un sixième onglet à la barre mobile.
  if (pathname.startsWith('/graphe') || pathname.startsWith('/courants')) return '/graphe';
  if (pathname.startsWith('/recherche')) return '/recherche';
  if (pathname.startsWith('/mes-fiches')) return '/mes-fiches';
  if (pathname.startsWith('/documentation')) return '/documentation';
  if (pathname.startsWith('/parametres')) return '/parametres';
  return '/';
}

/**
 * Coquille commune : rail latéral (≥ 900 px) ou barre d'onglets (< 900 px),
 * en-tête contextuel, bandeaux d'état réseau et de mise à jour, toast.
 * L'écran actif est rendu en `children` par la route.
 */
export default function Shell({ title, subtitle, actions, canBack = false, children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { favs, toast, online, updateReady, applyUpdate } = useStore();

  const favHint = `${favs.length} épinglée${favs.length > 1 ? 's' : ''}`;
  const section = sectionOf(location.pathname);

  return (
    <div className="soc-app">
      {!online && (
        <div className="soc-banner" role="status">
          <IconOffline />
          <span>Hors connexion — les {AUTHOR_COUNT} fiches restent consultables.</span>
        </div>
      )}
      {updateReady && (
        <div className="soc-banner" role="status">
          <IconDownload />
          <span>Une nouvelle version est disponible.</span>
          <button type="button" className="btn btn-primary" style={{ fontSize: 12 }} onClick={applyUpdate}>
            Mettre à jour
          </button>
        </div>
      )}

      <div className="soc-body">
        <nav className="soc-rail" aria-label="Navigation principale">
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '4px 8px 22px' }}>
            <span
              aria-hidden="true"
              style={{
                width: 9,
                height: 9,
                borderRadius: '50%',
                background: 'var(--color-accent)',
                boxShadow: '0 0 10px var(--color-accent)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--font-heading-weight)',
                fontSize: 17,
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              Sociologor
            </span>
          </div>

          {NAV.map(({ to, label, hint }) => (
            <Link
              key={to}
              to={to}
              className="soc-rail-item"
              aria-current={section === to ? 'page' : undefined}
            >
              <span className="soc-rail-label">{label}</span>
              <span className="soc-rail-hint">{to === '/mes-fiches' ? favHint : hint}</span>
            </Link>
          ))}

          <Link
            to="/parametres"
            className="soc-rail-item"
            style={{ marginTop: 'auto' }}
            aria-current={section === '/parametres' ? 'page' : undefined}
          >
            <span className="soc-rail-label">Paramètres</span>
            <span className="soc-rail-hint">Affichage, données, à propos</span>
          </Link>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              padding: '12px 8px',
              fontSize: 10.5,
              color: 'color-mix(in srgb, var(--color-text) 42%, transparent)',
              letterSpacing: '0.03em',
            }}
          >
            <span style={{ color: 'var(--color-accent)', display: 'flex' }}>
              <IconDownload />
            </span>
            {AUTHOR_COUNT} fiches hors connexion
          </div>
        </nav>

        <div className="soc-main-col">
          <header className="soc-header">
            {canBack && (
              <button
                type="button"
                className="btn btn-secondary soc-icon-btn"
                aria-label="Revenir à l'écran précédent"
                onClick={() => (location.key === 'default' ? navigate('/') : navigate(-1))}
              >
                <IconBack />
              </button>
            )}
            <div style={{ flex: 1, minWidth: 0 }}>
              <h1 className="soc-header-title">{title}</h1>
              <div className="soc-header-sub">{subtitle}</div>
            </div>
            {actions}
          </header>

          <main className="soc-main soc-scroll" id="contenu">
            <div className="soc-pad">{children}</div>
          </main>
        </div>
      </div>

      <nav className="soc-tabbar" aria-label="Navigation principale">
        {NAV.map(({ to, tab, Icon }) => (
          <Link key={to} to={to} className="soc-tab" aria-current={section === to ? 'page' : undefined}>
            <Icon />
            <span>{tab}</span>
          </Link>
        ))}
      </nav>

      {toast && (
        <div className="soc-toast soc-enter" role="status" aria-live="polite">
          {toast.message}
        </div>
      )}
    </div>
  );
}
