import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconClose } from './Icons.jsx';

/**
 * Fonctionnalités de l'application, classées par catégorie. Distinct de la
 * navigation principale (rail / barre d'onglets) : celle-ci reste à cinq
 * entrées pour tenir sur un téléphone (voir `Shell.jsx`), ce menu donne accès
 * à tout le reste — la carte des courants et les phénomènes sociaux
 * notamment, qui n'ont sinon qu'un bouton enfoui sur un autre écran.
 */
const CATEGORIES = [
  {
    id: 'explorer',
    t: 'Explorer le corpus',
    items: [
      { to: '/', label: 'Accueil', hint: 'Domaines et notion du jour' },
      { to: '/graphe', label: 'Graphe', hint: 'Filiations, et réseau de concepts' },
      { to: '/courants', label: 'Carte des courants', hint: "D'où vient une manière de faire de la sociologie" },
      { to: '/sociologues', label: 'Sociologues', hint: 'Les trente-quatre fiches, par leur portrait' },
      { to: '/concepts', label: 'Concepts sociaux', hint: 'Les outils théoriques, par auteur' },
      { to: '/fondamentaux', label: 'Concepts fondamentaux', hint: 'Le vocabulaire de base de la discipline' },
      { to: '/phenomenes', label: 'Phénomènes sociaux', hint: 'Faits concrets, éclairés par les concepts' },
      { to: '/mecanismes', label: 'Mécanismes sociaux', hint: "Les rouages qui expliquent comment un phénomène se produit" },
      { to: '/processus', label: 'Processus sociaux', hint: 'Les trajectoires qui mènent à ces faits' },
      { to: '/problematiques', label: 'Problématiques sociales', hint: 'Les enjeux qui font débat, avec leur graphe de liens' },
      { to: '/methodes', label: 'Méthodes sociologiques', hint: "Comment les sociologues savent ce qu'ils savent" },
      { to: '/etudes-fondatrices', label: 'Études fondatrices', hint: 'Les grandes enquêtes qui ont fait la sociologie' },
    ],
  },
  {
    id: 'ressources',
    t: 'Ressources des problématiques',
    items: [
      { to: '/theories', label: 'Théories', hint: 'Des cadres explicatifs signés et datés' },
      { to: '/etudes', label: 'Études', hint: 'Les enquêtes et terrains qui les fondent' },
      { to: '/statistiques', label: 'Statistiques', hint: 'Indicateurs, sources et limites de mesure' },
      { to: '/politiques-publiques', label: 'Politiques publiques', hint: 'Dispositifs, résultats et limites' },
    ],
  },
  {
    id: 'retrouver',
    t: 'Retrouver',
    items: [
      { to: '/recherche', label: 'Recherche', hint: 'Auteurs, concepts, phénomènes, mécanismes, processus, problématiques' },
      { to: '/mes-fiches', label: 'Mes fiches', hint: 'Fiches épinglées' },
    ],
  },
  {
    id: 'aide',
    t: 'Aide et réglages',
    items: [
      { to: '/documentation', label: 'Documentation', hint: 'Aide et guide complet' },
      { to: '/parametres', label: 'Paramètres', hint: 'Affichage, données, à propos' },
    ],
  },
];

/** L'entrée du menu que l'écran courant met en évidence, s'il y en a une. */
function activeTo(pathname) {
  if (pathname === '/' || pathname === '/accueil') return '/';
  if (pathname.startsWith('/sociologues') || pathname.startsWith('/a/')) return '/sociologues';
  if (pathname.startsWith('/concepts') || pathname.startsWith('/c/')) return '/concepts';
  if (pathname.startsWith('/fondamentaux') || pathname.startsWith('/f/')) return '/fondamentaux';
  if (pathname.startsWith('/phenomenes') || pathname.startsWith('/p/')) return '/phenomenes';
  if (pathname.startsWith('/mecanismes') || pathname.startsWith('/m/')) return '/mecanismes';
  if (pathname.startsWith('/processus') || pathname.startsWith('/pr/')) return '/processus';
  if (pathname.startsWith('/problematiques') || pathname.startsWith('/pb/')) return '/problematiques';
  if (pathname.startsWith('/methodes') || pathname.startsWith('/me/')) return '/methodes';
  if (pathname.startsWith('/etudes-fondatrices') || pathname.startsWith('/ef/')) return '/etudes-fondatrices';
  if (pathname.startsWith('/theories') || pathname.startsWith('/th/')) return '/theories';
  if (pathname.startsWith('/etudes') || pathname.startsWith('/et/')) return '/etudes';
  if (pathname.startsWith('/statistiques') || pathname.startsWith('/st/')) return '/statistiques';
  if (pathname.startsWith('/politiques-publiques') || pathname.startsWith('/pp/')) return '/politiques-publiques';
  if (pathname.startsWith('/courants')) return '/courants';
  if (pathname.startsWith('/graphe')) return '/graphe';
  if (pathname.startsWith('/recherche')) return '/recherche';
  if (pathname.startsWith('/mes-fiches')) return '/mes-fiches';
  if (pathname.startsWith('/documentation')) return '/documentation';
  if (pathname.startsWith('/parametres')) return '/parametres';
  return null;
}

export default function MenuDrawer({ open, onClose, triggerRef }) {
  const location = useLocation();
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const active = activeTo(location.pathname);

  // Focus la fermeture à l'ouverture ; le rend au déclencheur à la fermeture.
  useEffect(() => {
    if (open) {
      closeRef.current?.focus();
    } else {
      triggerRef?.current?.focus();
    }
  }, [open, triggerRef]);

  // Échap ferme ; Tab reste piégé dans le panneau tant qu'il est ouvert.
  useEffect(() => {
    if (!open) return undefined;
    function onKey(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const focusables = panelRef.current?.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="soc-menu-backdrop" role="presentation" onClick={onClose}>
      <div
        className="soc-menu-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Fonctionnalités de Sociologor"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="soc-menu-head">
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--font-heading-weight)',
              fontSize: 15,
              letterSpacing: '-0.01em',
            }}
          >
            Sociologor
          </span>
          <button
            type="button"
            className="btn btn-secondary soc-icon-btn"
            aria-label="Fermer le menu"
            ref={closeRef}
            onClick={onClose}
          >
            <IconClose />
          </button>
        </div>

        <nav className="soc-menu-scroll soc-scroll" aria-label="Fonctionnalités par catégorie">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="soc-menu-category">
              <p className="soc-menu-category-title">{cat.t}</p>
              {cat.items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="soc-menu-item"
                  aria-current={active === item.to ? 'page' : undefined}
                  onClick={onClose}
                >
                  <span className="soc-menu-item-label">{item.label}</span>
                  <span className="soc-menu-item-hint">{item.hint}</span>
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
