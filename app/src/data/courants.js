/**
 * Les courants sociologiques, et leur descendance.
 *
 * Le graphe des filiations relie des personnes : qui a lu qui. Cette carte
 * relie des courants : d'où vient une manière de faire de la sociologie, et ce
 * qu'elle a produit. Les deux ne se recouvrent pas — Parsons et Merton tiennent
 * chacun leur fiche mais partagent un courant, et l'École de Chicago est un
 * courant que personne n'incarne dans le corpus.
 *
 * Règles de rédaction :
 * - `auteurs` ne cite que des fiches du corpus, `inspirateurs` que des auteurs
 *   qui n'en ont pas — même convention que les domaines et les fiches auteurs.
 * - `vientDe` déclare la filiation vers l'amont. La descendance est déduite,
 *   jamais recopiée : voir `COURANTS` dans `index.js`.
 * - Une filiation entre courants n'est pas une filiation entre personnes.
 *   Weber n'a pas lu les interactionnistes ; sa sociologie compréhensive leur a
 *   pourtant donné leur point de départ.
 * - `niveau` classe le courant sur l'échelle paradigme → courant → école →
 *   variante (voir `NIVEAUX`). `parent` — optionnel — nomme le nœud dont il
 *   relève sur cette échelle ; un paradigme n'en a pas. Cette échelle est un
 *   axe de classement, distinct de `vientDe` : un paradigme peut devoir
 *   beaucoup à un autre sans lui être subordonné dans la hiérarchie. La
 *   théorie critique doit à Marx et à Weber (`vientDe`), elle reste un
 *   paradigme à part entière (`niveau: 'paradigme'`, sans `parent`).
 */

/**
 * Les quatre niveaux de la hiérarchie, du plus général au plus spécifique.
 * Un paradigme n'a jamais de `parent` ; les trois autres niveaux en portent
 * un, qui peut être n'importe quel nœud de niveau supérieur — un courant peut
 * relever directement d'un paradigme, une variante d'une école ou d'un
 * paradigme, selon ce que les quinze fiches permettent réellement de motiver.
 */
export const NIVEAUX = [
  { id: 'paradigme', t: 'Paradigme', d: "Une manière autonome de faire de la sociologie, qui ne relève d'aucune autre." },
  { id: 'courant', t: 'Courant', d: "Une branche théorique reconnue à l'intérieur d'un paradigme." },
  { id: 'ecole', t: 'École', d: "Un foyer institutionnel — chercheurs, revue, méthode partagée." },
  { id: 'variante', t: 'Variante', d: "Une théorie précise, appliquée à un objet circonscrit." },
];

/** Périodes d'affichage, de la plus ancienne à la plus récente. */
export const PERIODES = [
  {
    id: 'fondations',
    t: 'XIXᵉ siècle — les fondations',
    d: "Quatre manières de faire de la société un objet de science, sans se lire toutes.",
  },
  {
    id: 'premiere-moitie',
    t: 'Première moitié du XXᵉ siècle',
    d: "Les fondations deviennent des écoles, avec leurs revues, leurs élèves et leurs querelles.",
  },
  {
    id: 'seconde-moitie',
    t: 'Seconde moitié du XXᵉ siècle',
    d: "Le moment des grands systèmes, et des critiques qui viennent de l'intérieur.",
  },
  {
    id: 'contemporain',
    t: 'Tournant contemporain',
    d: "La critique change de camp : on décrit ce que les acteurs eux-mêmes critiquent.",
  },
];

/**
 * Les quinze courants. `auteurs` : fiches du corpus. `vientDe` : courants dont
 * celui-ci procède.
 */
export const COURANTS = [
  /* — XIXᵉ siècle — */
  {
    id: 'positivisme',
    t: 'Positivisme',
    periode: 'fondations',
    d: "La société relève de lois observables, comme la nature : il faut une physique sociale.",
    detail:
      "Comte fonde le mot et le programme. La sociologie couronne la hiérarchie des sciences, et l'ordre social se décrit avant de se réformer. Le mot « positivisme » a depuis servi d'étiquette à des adversaires plus qu'à des héritiers.",
    auteurs: ['comte'],
    vientDe: [],
    inspirateurs: ["Henri de Saint-Simon — le projet de réorganisation sociale dont Comte fut le secrétaire"],
    niveau: 'paradigme',
  },
  {
    id: 'materialisme-historique',
    t: 'Matérialisme historique',
    periode: 'fondations',
    d: "Ce sont les rapports de production qui expliquent les idées, et non l'inverse.",
    detail:
      "Marx ne se dit pas sociologue, mais fournit à la discipline sa question la plus durable : à qui profite l'ordre établi, et par quels mécanismes se reproduit-il sans être voulu par personne ?",
    auteurs: ['marx'],
    vientDe: [],
    inspirateurs: [
      "Hegel — la dialectique, remise « sur ses pieds »",
      "Adam Smith et David Ricardo — l'économie politique dont Marx retourne la valeur-travail",
    ],
    niveau: 'paradigme',
  },
  {
    id: 'sociologie-politique-comparee',
    t: 'Sociologie politique comparée',
    periode: 'fondations',
    d: "Comparer deux sociétés pour voir ce qu'une seule ne montre jamais.",
    detail:
      "Tocqueville lit l'Amérique pour comprendre la France. L'égalisation des conditions y apparaît comme un mouvement de fond, avec ses libertés et sa tyrannie douce.",
    auteurs: ['tocqueville'],
    vientDe: [],
    inspirateurs: ["Montesquieu — la comparaison des régimes et l'esprit des lois"],
    niveau: 'courant',
    parent: 'sociologie-comprehensive',
  },
  {
    id: 'sociologie-des-formes',
    t: 'Sociologie des formes',
    periode: 'fondations',
    d: "Ce qui fait société n'est pas le contenu des échanges, mais leur forme.",
    detail:
      "Simmel décrit le conflit, le secret, la mode ou la vie de métropole comme des formes qui se retrouvent sous des contenus très différents. Sans école ni successeur direct, il irrigue l'interactionnisme et la sociologie des interactions.",
    auteurs: ['simmel'],
    vientDe: [],
    inspirateurs: [],
    niveau: 'paradigme',
  },
  {
    id: 'holisme',
    t: 'Holisme durkheimien',
    periode: 'fondations',
    d: "Traiter les faits sociaux comme des choses, extérieures aux individus et contraignantes.",
    detail:
      "Durkheim donne à la discipline sa méthode, sa revue et sa première preuve — le suicide s'explique socialement. Le fonctionnalisme naîtra de l'idée que chaque institution remplit une fonction dans un ensemble.",
    auteurs: ['durkheim'],
    vientDe: ['positivisme'],
    inspirateurs: [],
    niveau: 'courant',
    parent: 'positivisme',
  },
  {
    id: 'sociologie-comprehensive',
    t: 'Sociologie compréhensive',
    periode: 'fondations',
    d: "Expliquer une conduite suppose de comprendre le sens que l'acteur y met.",
    detail:
      "Weber oppose au fait-chose l'action dotée de sens, et se donne l'idéal-type pour outil. C'est le courant le plus largement hérité : il mène aussi bien au fonctionnalisme de Parsons qu'à l'interactionnisme ou à l'individualisme méthodologique.",
    auteurs: ['weber'],
    vientDe: [],
    inspirateurs: ["Wilhelm Dilthey — la distinction du comprendre et de l'expliquer"],
    niveau: 'paradigme',
  },

  /* — Première moitié du XXᵉ siècle — */
  {
    id: 'ecole-de-chicago',
    t: 'École de Chicago',
    periode: 'premiere-moitie',
    d: "La ville comme laboratoire : on enquête à pied, carnet en main.",
    detail:
      "Aucune des quinze fiches n'appartient à la première École de Chicago, mais elle fournit à Goffman comme à Becker leur méthode : l'observation directe, la monographie de quartier, l'attention aux marges.",
    auteurs: [],
    vientDe: [],
    inspirateurs: [
      "Robert Park — la ville comme écologie humaine, arpentée quartier par quartier",
      "William Thomas et Florian Znaniecki — « Le Paysan polonais », l'enquête par les documents personnels",
      "Everett Hughes — le métier saisi par son sale boulot, professeur de Becker et de Goffman",
    ],
    niveau: 'ecole',
    parent: 'interactionnisme',
  },
  {
    id: 'theorie-critique',
    t: 'Théorie critique',
    periode: 'premiere-moitie',
    d: "Prolonger Marx quand la révolution n'a pas eu lieu et que la culture est devenue une industrie.",
    detail:
      "L'École de Francfort tient ensemble l'héritage marxien, la rationalisation wébérienne et la psychanalyse. La raison devenue instrumentale, la domination n'a plus besoin de contrainte : elle se vend.",
    auteurs: ['francfort'],
    vientDe: ['materialisme-historique', 'sociologie-comprehensive'],
    inspirateurs: ["Sigmund Freud — l'appareil psychique, pour comprendre l'adhésion volontaire à la domination"],
    niveau: 'paradigme',
  },
  {
    id: 'sociologie-historique',
    t: 'Sociologie historique des processus',
    periode: 'premiere-moitie',
    d: "Les structures mentales ont une histoire longue, qu'il faut suivre sur des siècles.",
    detail:
      "Elias refuse l'opposition de l'individu et de la société : il n'y a que des configurations, où la contrainte extérieure devient peu à peu contrainte de soi.",
    auteurs: ['elias'],
    vientDe: ['sociologie-des-formes', 'sociologie-comprehensive'],
    inspirateurs: ["Sigmund Freud — le refoulement, relu comme un processus historique et non individuel"],
    niveau: 'courant',
    parent: 'sociologie-comprehensive',
  },
  {
    id: 'fonctionnalisme',
    t: 'Fonctionnalisme',
    periode: 'premiere-moitie',
    d: "Une institution s'explique par la fonction qu'elle remplit dans un ensemble.",
    detail:
      "Parsons bâtit le système général — les fonctions qu'une société doit remplir pour durer. Merton en rabat l'ambition sur des théories de moyenne portée, et retourne l'outil contre la thèse : une pratique peut avoir une fonction que personne ne lui prête, ou n'en avoir aucune.",
    auteurs: ['parsons', 'merton'],
    vientDe: ['holisme', 'sociologie-comprehensive'],
    inspirateurs: ["Bronisław Malinowski et Radcliffe-Brown — le fonctionnalisme anthropologique dont Parsons hérite"],
    niveau: 'paradigme',
  },

  /* — Seconde moitié du XXᵉ siècle — */
  {
    id: 'interactionnisme',
    t: 'Interactionnisme symbolique',
    periode: 'seconde-moitie',
    d: "L'ordre social se joue en face à face, dans des scènes très codées.",
    detail:
      "Goffman décrit la vie quotidienne comme une mise en scène où chacun tient un rôle, protège sa face et celle des autres. Le microscopique n'y est pas un détail : c'est le lieu où l'ordre se fabrique.",
    auteurs: ['goffman'],
    vientDe: ['sociologie-des-formes', 'sociologie-comprehensive', 'ecole-de-chicago'],
    inspirateurs: [
      "George Herbert Mead — le soi comme produit du regard d'autrui",
      "Herbert Blumer — le nom du courant, et son programme méthodologique",
    ],
    niveau: 'paradigme',
  },
  {
    id: 'etiquetage',
    t: "Théorie de l'étiquetage",
    periode: 'seconde-moitie',
    d: "La déviance n'est pas dans l'acte : elle est dans la réaction qu'il provoque.",
    detail:
      "Becker déplace la question du déviant vers ceux qui font les règles et les appliquent. Une carrière déviante commence souvent le jour où l'étiquette est posée.",
    auteurs: ['becker'],
    vientDe: ['ecole-de-chicago', 'interactionnisme'],
    inspirateurs: ["Edwin Lemert — la déviance secondaire, celle qui suit la réaction sociale"],
    niveau: 'variante',
    parent: 'interactionnisme',
  },
  {
    id: 'structuralisme-genetique',
    t: 'Structuralisme génétique',
    periode: 'seconde-moitie',
    d: "Les structures sociales s'incorporent : on les porte en soi sans les avoir choisies.",
    detail:
      "Bourdieu tient ensemble ce que la discipline sépare — la contrainte durkheimienne, la domination marxienne et le sens wébérien. L'habitus est le nom de cette rencontre.",
    auteurs: ['bourdieu'],
    vientDe: ['holisme', 'materialisme-historique', 'sociologie-comprehensive'],
    inspirateurs: ["Claude Lévi-Strauss — la structure, dont Bourdieu garde le mot en refusant l'immobilité"],
    niveau: 'paradigme',
  },
  {
    id: 'individualisme-methodologique',
    t: 'Individualisme méthodologique',
    periode: 'seconde-moitie',
    d: "Tout effet collectif doit se reconstruire à partir des raisons des individus.",
    detail:
      "Boudon retourne l'exigence wébérienne contre les explications holistes : ni le système ni l'habitus n'expliquent, seules les bonnes raisons des acteurs — dont les effets s'agrègent en résultats que personne n'a voulus.",
    auteurs: ['boudon'],
    vientDe: ['sociologie-comprehensive'],
    inspirateurs: ["Alexis de Tocqueville — que Boudon revendique comme premier praticien de la méthode"],
    niveau: 'courant',
    parent: 'sociologie-comprehensive',
  },

  /* — Tournant contemporain — */
  {
    id: 'sociologie-pragmatique',
    t: 'Sociologie pragmatique',
    periode: 'contemporain',
    d: "Prendre au sérieux la critique que les acteurs formulent eux-mêmes.",
    detail:
      "Boltanski rompt avec le sociologue qui détient la vérité de ce que les gens ne voient pas. Les acteurs justifient, dénoncent, se disputent : leurs opérations critiques sont l'objet, non l'obstacle.",
    auteurs: ['boltanski'],
    vientDe: ['structuralisme-genetique', 'theorie-critique'],
    inspirateurs: ["Laurent Thévenot — les économies de la grandeur, écrites avec lui"],
    niveau: 'paradigme',
  },
];
