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
  {
    id: 'sociologie-de-la-question-sociale',
    t: 'Sociologie de la question sociale',
    periode: 'contemporain',
    d: "Le salariat stable n'est pas qu'un contrat de travail : c'est ce qui a longtemps tenu lieu de statut social et de protection contre les aléas de l'existence.",
    detail:
      "Castel reprend la préoccupation durkheimienne pour ce qui tient une société ensemble, et la déplace vers l'histoire longue de l'assistance et du salariat : la « société salariale » du XXᵉ siècle a offert, pour la première fois à cette échelle, une intégration par le travail assortie de droits sociaux. Sa fragilisation depuis les années 1970 redessine toute la question sociale, entre zones d'intégration, de vulnérabilité et de désaffiliation.",
    auteurs: ['castel'],
    vientDe: ['holisme', 'structuralisme-genetique', 'genealogie-du-pouvoir'],
    inspirateurs: [],
    niveau: 'paradigme',
  },
  {
    id: 'theorie-de-l-agir-communicationnel',
    t: "Théorie de l'agir communicationnel",
    periode: 'contemporain',
    d: "Contre le pessimisme de ses aînés, la raison garde une ressource intacte : la capacité, inscrite dans le langage lui-même, à s'entendre sur ce qui vaut d'être fait ensemble.",
    detail:
      "Habermas reprend le programme de la théorie critique sans en partager le constat sans issue : là où Adorno et Horkheimer ne voyaient plus, dans la raison instrumentale généralisée, aucune ressource pour la critique, Habermas en trouve une dans la pragmatique du langage — chaque acte de communication authentique présuppose des conditions de validité qui, une fois explicitées, fondent une rationalité communicationnelle irréductible au seul calcul.",
    auteurs: ['habermas'],
    vientDe: ['theorie-critique', 'sociologie-comprehensive', 'fonctionnalisme'],
    inspirateurs: [
      "John Austin et John Searle — la théorie des actes de langage, socle de la pragmatique universelle",
      "Niklas Luhmann — la théorie des systèmes, dont Habermas retient le concept en le limitant à l'argent et au pouvoir",
    ],
    niveau: 'paradigme',
  },
  {
    id: 'theorie-de-la-structuration',
    t: 'Théorie de la structuration',
    periode: 'contemporain',
    d: "Ni l'acteur ne fabrique seul la structure, ni la structure ne détermine seule l'acteur : chaque pratique reproduit ou transforme les règles mêmes qui la rendent possible.",
    detail:
      "Giddens refuse le partage classique entre une sociologie de la structure, qui traite l'acteur comme un simple support des règles, et une sociologie de l'action, qui traite la structure comme un décor secondaire. Il en fait une dualité : la structure est à la fois le médium et le résultat des pratiques qu'elle organise, jamais l'un sans l'autre.",
    auteurs: ['giddens'],
    vientDe: ['sociologie-comprehensive', 'holisme', 'interactionnisme'],
    inspirateurs: [
      "Harold Garfinkel — l'ethnométhodologie et la conscience pratique des acteurs ordinaires",
      "Ludwig Wittgenstein — suivre une règle sans avoir besoin de la formuler",
    ],
    niveau: 'paradigme',
  },
  {
    id: 'genealogie-du-pouvoir',
    t: 'Généalogie du pouvoir',
    periode: 'contemporain',
    d: "Ne pas demander qui détient le pouvoir, mais comment il s'exerce — dans des techniques concrètes, diffuses, bien en deçà de l'État.",
    detail:
      "Foucault refuse de traiter le pouvoir comme une chose qu'on posséderait, à conquérir ou à confisquer. Il le retrace plutôt dans son fonctionnement le plus concret — la prison, l'hôpital, l'école, la caserne — pour montrer qu'il y produit des savoirs autant qu'il en dépend, et des sujets autant que des corps dressés. Cette généalogie, méfiante envers toute origine unique, préfère une histoire faite de ruptures à un récit continu de progrès.",
    auteurs: ['foucault'],
    vientDe: ['materialisme-historique', 'sociologie-comprehensive'],
    inspirateurs: [
      "Friedrich Nietzsche — la généalogie comme méthode, contre la recherche d'une origine pure",
      "Georges Canguilhem — le normal et le pathologique, matrice de la normalisation",
    ],
    niveau: 'paradigme',
  },
  {
    id: 'phenomenologie-sociale',
    t: 'Phénoménologie sociale',
    periode: 'premiere-moitie',
    d: "Avant toute théorie savante, il y a le monde tel que les acteurs le vivent et le tiennent pour allant de soi.",
    detail:
      "Schutz reproche à Weber d'avoir posé la compréhension du sens sans jamais expliquer d'où ce sens vient ni comment deux acteurs parviennent à se comprendre. Il lui fournit les fondations qui manquaient, empruntées à la phénoménologie de Husserl : un monde vécu partagé, un stock de connaissances accumulé par l'expérience, des typifications qui permettent de reconnaître le nouveau sans jamais avoir à tout redécouvrir.",
    auteurs: ['schutz'],
    vientDe: ['sociologie-comprehensive'],
    inspirateurs: [
      "Edmund Husserl — la phénoménologie, dont Schutz importe les outils en sociologie",
      "Henri Bergson — la durée vécue, matrice de l'expérience du temps chez Schutz",
    ],
    niveau: 'paradigme',
  },
  {
    id: 'constructivisme-social',
    t: 'Constructivisme social',
    periode: 'seconde-moitie',
    d: "La réalité la plus objective en apparence reste un produit humain — à condition de ne jamais oublier qu'elle l'est.",
    detail:
      "Berger et Luckmann réconcilient dans un même geste Durkheim, pour qui la société est une chose extérieure et contraignante, et Weber, pour qui elle n'existe que par le sens que les acteurs y mettent : les deux sont vrais, à des moments différents d'un même cycle. L'homme produit un monde qui, à force d'habitude, se fige en institutions ; ces institutions, une fois oubliées comme produits humains, s'imposent à la génération suivante comme une réalité déjà là, qu'elle n'aura plus qu'à intérioriser.",
    auteurs: ['berger-luckmann'],
    vientDe: ['phenomenologie-sociale', 'sociologie-comprehensive', 'holisme'],
    inspirateurs: [
      "Karl Mannheim — la sociologie de la connaissance, dont Berger et Luckmann élargissent le programme à toute réalité sociale",
      "Arnold Gehlen — l'homme comme être inachevé, qui a besoin d'institutions pour stabiliser son monde",
    ],
    niveau: 'paradigme',
  },
  {
    id: 'analyse-strategique',
    t: 'Analyse stratégique',
    periode: 'seconde-moitie',
    d: "Même dans l'organisation la plus rigide, chacun garde une carte à jouer — et le pouvoir appartient à qui sait la faire durer.",
    detail:
      "Crozier reprend la bureaucratie de Weber pour en faire, non plus un modèle d'efficacité rationnelle, mais un objet d'enquête empirique : les règles impersonnelles censées éliminer l'arbitraire produisent en réalité de nouvelles zones d'incertitude, autour desquelles se rejouent sans fin des rapports de pouvoir informels. L'organisation réelle n'est jamais tout à fait l'organigramme officiel : c'est un système d'action concret, fait de jeux et de stratégies que la seule structure formelle ne suffit jamais à expliquer.",
    auteurs: ['crozier', 'friedberg'],
    vientDe: ['sociologie-comprehensive', 'fonctionnalisme'],
    inspirateurs: [
      "Herbert Simon — la rationalité limitée, socle du modèle de l'acteur stratégique",
    ],
    niveau: 'paradigme',
  },
  {
    id: 'societe-informationnelle',
    t: 'Société informationnelle',
    periode: 'contemporain',
    d: "Internet n'a pas aboli la géographie : il l'a redoublée d'un second espace, fait de flux plutôt que de lieux.",
    detail:
      "Castells montre que la révolution des technologies de l'information réorganise la société entière autour de réseaux : le pouvoir, l'économie et même l'identité s'y jouent désormais autant dans un espace de flux mondialisé que dans l'espace des lieux hérité de l'histoire. Le capitalisme n'a pas disparu, il s'est reconfiguré autour de cette nouvelle logique informationnelle, creusant un écart croissant entre ceux qui habitent les réseaux et ceux qui restent assignés à un lieu.",
    auteurs: ['castells'],
    vientDe: ['materialisme-historique', 'sociologie-comprehensive'],
    inspirateurs: [
      "Alain Touraine — la société post-industrielle et l'action des mouvements sociaux, dont Castells fut l'élève",
      "Daniel Bell — la société de l'information comme rupture avec la société industrielle",
    ],
    niveau: 'paradigme',
  },
  {
    id: 'sociologie-de-la-liquidite',
    t: 'Sociologie de la liquidité',
    periode: 'contemporain',
    d: "Rien, dans le monde contemporain, n'a plus le temps de prendre une forme stable avant de déjà se transformer.",
    detail:
      "Bauman file la métaphore du solide et du liquide pour décrire un basculement : la modernité industrielle voulait construire des cadres durables — l'usine, la carrière, le mariage à vie — quand la modernité tardive dissout ces cadres plus vite qu'elle ne les remplace. Rien n'est fait pour durer, ni les institutions, ni les identités, ni les liens affectifs, dans un monde où la seule chose stable devient l'exigence de changement permanent.",
    auteurs: ['bauman'],
    vientDe: ['materialisme-historique', 'sociologie-des-formes'],
    inspirateurs: [
      "Georg Simmel — la sociologie des formes et de l'argent, dont Bauman prolonge la sensibilité à la fluidité du social",
      "Jean-François Lyotard — la condition postmoderne, matrice du diagnostic d'une modernité qui doute d'elle-même",
    ],
    niveau: 'paradigme',
  },
];
