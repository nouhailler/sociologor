/**
 * Sommaire de la documentation intégrée.
 * L'ordre défini ici est celui du sommaire, de l'accordéon et de la
 * navigation précédent/suivant. Chaque `page` doit correspondre à un fichier
 * `app/docs/<chapitre>/<page>.md` — l'absence de fichier est détectée par
 * `npm run doc:audit`.
 */
export const CHAPTERS = [
  {
    slug: 'getting-started',
    title: 'Bien démarrer',
    icon: '🚀',
    pages: [
      { slug: 'presentation', title: "Présentation de l'application" },
      { slug: 'installation', title: 'Installer Sociologor (PWA)' },
      { slug: 'premier-lancement', title: 'Premier lancement' },
      { slug: 'mise-a-jour-desinstallation', title: 'Mise à jour et désinstallation' },
    ],
  },
  {
    slug: 'guide',
    title: 'Guide utilisateur',
    icon: '📖',
    pages: [
      { slug: 'navigation', title: 'Navigation générale' },
      { slug: 'accueil', title: 'Écran Accueil' },
      { slug: 'domaine', title: 'Écran Domaine' },
      { slug: 'fiche-auteur', title: 'Écran Fiche auteur' },
      { slug: 'fiche-concept', title: 'Écran Fiche concept' },
      { slug: 'graphe', title: 'Écran Graphe' },
      { slug: 'courants', title: 'Écran Carte des courants' },
      { slug: 'phenomenes', title: 'Écran Phénomènes sociaux' },
      { slug: 'recherche', title: 'Écran Recherche' },
      { slug: 'mes-fiches', title: 'Écran Mes fiches' },
      { slug: 'parametres', title: 'Écran Paramètres' },
    ],
  },
  {
    slug: 'features',
    title: 'Fonctionnalités',
    icon: '🧩',
    pages: [
      { slug: 'fiches-auteurs', title: 'Fiches auteurs' },
      { slug: 'fiches-concepts', title: 'Fiches concepts' },
      { slug: 'domaines', title: 'Entrée par domaines' },
      { slug: 'notion-du-jour', title: 'Notion du jour' },
      { slug: 'graphe-filiations', title: 'Graphe des filiations' },
      { slug: 'graphe-concepts', title: 'Graphe des concepts' },
      { slug: 'carte-courants', title: 'Carte des courants' },
      { slug: 'phenomenes-sociaux', title: 'Phénomènes sociaux' },
      { slug: 'recherche', title: 'Recherche' },
      { slug: 'favoris', title: 'Fiches épinglées' },
      { slug: 'export-markdown', title: 'Export Markdown' },
      { slug: 'partage', title: 'Partage' },
    ],
  },
  {
    slug: 'settings',
    title: 'Paramètres',
    icon: '⚙️',
    pages: [{ slug: 'index', title: 'Tous les paramètres' }],
  },
  {
    slug: 'permissions',
    title: 'Permissions',
    icon: '🔐',
    pages: [{ slug: 'index', title: 'Permissions demandées' }],
  },
  {
    slug: 'data',
    title: 'Données et confidentialité',
    icon: '🗃️',
    pages: [
      { slug: 'donnees', title: 'Données utilisées' },
      { slug: 'stockage-local', title: 'Stockage local' },
    ],
  },
  {
    slug: 'offline',
    title: 'Hors connexion',
    icon: '📴',
    pages: [
      { slug: 'index', title: 'Fonctionnement hors connexion' },
      { slug: 'synchronisation', title: 'Synchronisation' },
    ],
  },
  {
    slug: 'troubleshooting',
    title: 'Dépannage',
    icon: '🛠️',
    pages: [
      { slug: 'app-ne-souvre-pas-hors-ligne', title: "L'application ne s'ouvre pas hors ligne" },
      { slug: 'fiches-epinglees-perdues', title: 'Mes fiches épinglées ont disparu' },
      { slug: 'partage-indisponible', title: 'Le partage ne fonctionne pas' },
      { slug: 'export-ne-se-telecharge-pas', title: "L'export Markdown ne se télécharge pas" },
      { slug: 'mise-a-jour-bloquee', title: "L'application n'est pas à jour" },
      { slug: 'installation-impossible', title: "Je n'arrive pas à installer l'application" },
    ],
  },
  {
    slug: 'faq',
    title: 'FAQ',
    icon: '❓',
    pages: [{ slug: 'index', title: 'Questions fréquentes' }],
  },
  {
    slug: 'reference',
    title: 'Référence',
    icon: '📘',
    pages: [
      { slug: 'parametres', title: 'Référence des paramètres' },
      { slug: 'erreurs', title: 'Messages et états' },
      { slug: 'glossaire', title: 'Glossaire' },
      { slug: 'compatibilite', title: 'Compatibilité' },
      { slug: 'limites', title: 'Limites connues' },
      { slug: 'contenu', title: 'Contenu embarqué' },
    ],
  },
  {
    slug: 'versions',
    title: 'Versions',
    icon: '🔄',
    pages: [{ slug: 'index', title: 'Journal des versions' }],
  },
  {
    slug: 'legal',
    title: 'Informations légales',
    icon: '⚖️',
    pages: [
      // Rendues depuis src/legal/content.js — source unique, partagée avec la
      // modale du premier lancement. Pas de fichier .md correspondant.
      { slug: 'mentions-legales', title: 'Mentions légales', render: 'legal-notice' },
      { slug: 'confidentialite', title: 'Politique de confidentialité', render: 'legal-privacy' },
      { slug: 'licences-credits', title: 'Licences et crédits' },
    ],
  },
  {
    slug: 'support',
    title: 'Support',
    icon: '📩',
    pages: [{ slug: 'index', title: "Obtenir de l'aide" }],
  },
];

/** Liste à plat, dans l'ordre du sommaire — sert au précédent/suivant et à la recherche. */
export const FLAT_PAGES = CHAPTERS.flatMap((c) =>
  c.pages.map((p) => ({
    ...p,
    chapterSlug: c.slug,
    chapterTitle: c.title,
    path: `/documentation/${c.slug}/${p.slug}`,
    file: `${c.slug}/${p.slug}.md`,
  })),
);

export const PAGE_COUNT = FLAT_PAGES.length;
