/**
 * Études fondatrices : les grandes enquêtes qui ont fait la sociologie —
 * Hawthorne, Milgram, Asylums, La Distinction… — distinctes des « études »
 * plus courtes de `etudes.js`, citées elles comme ressources d'une
 * problématique sociale précise (`{ t, auteur, annee, methode, d, detail,
 * theories }`, sans lien vers les concepts). Une étude fondatrice a un
 * gabarit bien plus riche et sert d'abord la relation concepts → études que
 * `getConcept()` (src/data/index.js) résout en sens inverse.
 *
 * `auteurs`/`inspirateurs` suivent la même convention que `methodes.js` :
 * `auteurs` ne cite que des fiches du corpus (cliquables), `inspirateurs`
 * que des figures qui n'en ont pas (texte libre « Nom — apport »). `concepts`
 * ne doit jamais être vide — c'est le cœur de la rubrique. `methodes` et
 * `processus` sont optionnels, résolus vers `methodes.js`/`processus.js`.
 */

/** Catégories d'affichage, dans l'ordre de la liste. */
export const CATEGORIES_ETUDES_FONDATRICES = [
  {
    id: 'autorite-et-obeissance',
    t: 'Autorité et obéissance',
    d: "Jusqu'où va-t-on quand une autorité l'exige ?",
  },
  {
    id: 'travail-et-organisations',
    t: 'Travail et organisations',
    d: "Ce qui se joue réellement derrière l'organigramme et la fiche de poste.",
  },
  {
    id: 'terrain-et-marges-urbaines',
    t: 'Terrain et marges urbaines',
    d: "Des mondes entiers, observés de l'intérieur, à l'échelle d'un quartier ou d'une ville.",
  },
  {
    id: 'migration-institutions-interaction',
    t: 'Migration, institutions et interaction',
    d: "Comment un individu se définit, ou se voit défini, face à une institution ou à un inconnu.",
  },
  {
    id: 'ecole-et-reproduction',
    t: 'École et reproduction',
    d: "Ce que l'école transmet vraiment, au-delà des diplômes qu'elle délivre.",
  },
  {
    id: 'opinion-et-culture',
    t: 'Opinion et culture',
    d: "Comment se forme une opinion, et ce qui distingue un goût d'un autre.",
  },
];

export const ETUDES_FONDATRICES = [
  /* — Autorité et obéissance — */
  {
    id: 'experience-de-milgram',
    t: 'Expérience de Milgram',
    categorie: 'autorite-et-obeissance',
    date: '1961–1963',
    lieu: 'Laboratoire de psychologie sociale, université Yale',
    population: 'Environ 780 volontaires adultes, recrutés par petite annonce, de tous milieux sociaux',
    question:
      "Jusqu'où un individu ordinaire est-il prêt à obéir à une autorité légitime, même quand elle lui ordonne de faire du mal à autrui ?",
    methode:
      "Chaque participant, dans le rôle d'un « enseignant », doit infliger des chocs électriques croissants à un « élève » — en réalité un acteur, jamais réellement électrocuté — chaque fois qu'il se trompe, sous la pression verbale d'un expérimentateur en blouse blanche qui répète que l'expérience doit continuer.",
    resultats:
      "Environ deux tiers des participants sont allés jusqu'au choc maximal, malgré les cris de douleur simulés et leur propre malaise visible, simplement parce qu'une figure d'autorité le leur demandait.",
    limites: [
      "Le dispositif de laboratoire, artificiel et théâtral, ne reproduit pas les conditions d'une obéissance réelle en contexte institutionnel ou historique.",
      "Les participants n'étaient pas représentatifs de la population générale, recrutés parmi les habitants d'une seule ville américaine.",
    ],
    critiques: [
      "L'expérience a exposé les participants à une détresse psychologique réelle sans consentement éclairé complet, ce qui a durablement marqué les débats sur l'éthique de la recherche.",
      "Des analyses plus récentes des enregistrements montrent que l'obéissance a été plus laborieuse et négociée que le résumé habituel ne le laisse penser.",
    ],
    posterite:
      "Elle reste la référence empirique la plus citée sur la soumission à l'autorité, mobilisée aussi bien en sociologie qu'en histoire pour interroger l'obéissance ordinaire aux ordres illégitimes.",
    auteurs: [],
    inspirateurs: ["Stanley Milgram — la conception et la direction de l'expérience sur la soumission à l'autorité (1963)"],
    concepts: ['domination-legitime'],
    methodes: ['experimentation-sociale'],
    processus: [],
  },
  {
    id: 'experience-de-stanford',
    t: 'Expérience de Stanford',
    categorie: 'autorite-et-obeissance',
    date: 'Août 1971',
    lieu: 'Sous-sol du département de psychologie, université Stanford, transformé en fausse prison',
    population: '24 étudiants volontaires, en bonne santé psychologique, répartis au hasard entre gardiens et prisonniers',
    question:
      "Le comportement brutal parfois observé chez des gardiens de prison tient-il à leur personnalité, ou à la situation et au rôle qu'on leur attribue ?",
    methode:
      "Les participants tirés au sort comme « gardiens » reçoivent un uniforme et une autorité quasi totale sur les « prisonniers », incarcérés dans des cellules improvisées, pour une durée prévue de deux semaines, sous l'observation continue de l'équipe de recherche.",
    resultats:
      "Les gardiens adoptent en quelques jours des conduites humiliantes et parfois cruelles envers les prisonniers, qui manifestent à leur tour une détresse psychologique si marquée que l'expérience est interrompue après six jours seulement.",
    limites: [
      "L'échantillon est très restreint et non représentatif, composé uniquement d'étudiants volontaires d'un même profil.",
      "Le chercheur principal jouait lui-même le rôle du directeur de la prison, ce qui brouille la frontière entre observation et mise en scène.",
    ],
    critiques: [
      "Des travaux plus récents, notamment ceux à l'origine de la réplication télévisée britannique, ont montré que les gardiens avaient reçu des consignes explicites orientant leur comportement, ce qui affaiblit la thèse d'un simple effet de rôle spontané.",
      "L'expérience n'a jamais été formellement publiée dans une revue à comité de lecture selon les standards actuels.",
    ],
    posterite:
      "Malgré les controverses méthodologiques qui ont fini par largement la discréditer comme preuve scientifique stricte, elle reste un cas d'école, cité dans presque tous les cursus de sociologie et de psychologie sociale, sur le pouvoir des rôles et des institutions à transformer la conduite ordinaire.",
    auteurs: [],
    inspirateurs: ["Philip Zimbardo — la conception et la direction de l'expérience de la prison de Stanford (1971)"],
    concepts: ['institution-totale', 'domination-legitime'],
    methodes: ['experimentation-sociale'],
    processus: [],
  },

  /* — Travail et organisations — */
  {
    id: 'hawthorne-studies',
    t: 'Hawthorne Studies',
    categorie: 'travail-et-organisations',
    date: '1924–1932',
    lieu: 'Usine Hawthorne de la Western Electric, Cicero (Illinois)',
    population: "Ouvrières de l'atelier d'assemblage de relais téléphoniques, puis l'ensemble du personnel de production",
    question:
      "L'éclairage, les pauses et les conditions matérielles de travail suffisent-ils à expliquer la productivité des ouvrières ?",
    methode:
      "Une série d'expériences contrôlées fait varier l'éclairage, la durée des pauses et les horaires d'un petit groupe d'ouvrières isolé dans une salle de test, avec un groupe témoin resté dans les conditions ordinaires ; la seconde phase, dirigée par Elton Mayo, y ajoute des milliers d'entretiens non directifs avec le reste du personnel.",
    resultats:
      "La productivité augmente à chaque changement testé — y compris quand l'éclairage est réduit — parce que les ouvrières se savent observées et valorisées par l'attention que leur porte l'étude, plutôt qu'en raison des conditions matérielles elles-mêmes ; ce constat donnera son nom à l'« effet Hawthorne ».",
    limites: [
      "Le groupe test est trop petit et trop particulier pour généraliser à l'ensemble de l'usine.",
      "L'étude ne contrôle pas plusieurs changements survenus en parallèle (composition du groupe, supervision), ce qui rend l'attribution causale fragile.",
    ],
    critiques: [
      "Des réanalyses plus tardives des données brutes ont relativisé l'ampleur de l'effet Hawthorne lui-même, sans l'annuler complètement.",
      "L'étude a aussi servi à justifier un management plus paternaliste, en déplaçant l'attention des conditions matérielles vers le seul climat relationnel.",
    ],
    posterite:
      "Elle fonde le courant des relations humaines en sociologie du travail et donne son nom à un biais méthodologique désormais classique : le simple fait d'être observé modifie le comportement observé.",
    auteurs: [],
    inspirateurs: [
      "Elton Mayo — la direction de la seconde phase de l'étude et la théorisation du courant des relations humaines",
      "Fritz Roethlisberger et William Dickson — la direction empirique du protocole et sa publication de référence (1939)",
    ],
    concepts: ['consequences-inattendues', 'fonction-latente'],
    methodes: ['experimentation-sociale'],
    processus: [],
  },
  {
    id: 'the-managed-heart',
    t: 'The Managed Heart',
    categorie: 'travail-et-organisations',
    date: 'Fin des années 1970 (terrain), publié en 1983',
    lieu: 'Une compagnie aérienne américaine et une agence de recouvrement de créances',
    population: "Hôtesses de l'air en formation et agents chargés du recouvrement de créances impayées",
    question: "Que devient une émotion quand un métier exige de la produire ou de la masquer sur commande ?",
    methode:
      "Des entretiens approfondis avec des hôtesses de l'air et des agents de recouvrement, complétés par l'observation de sessions de formation où l'entreprise enseigne explicitement aux salariés comment sourire ou se montrer intimidant sur demande.",
    resultats:
      "L'étude montre que ces métiers exigent un authentique travail émotionnel : produire, sur commande et de façon crédible, un sourire chaleureux ou une fermeté menaçante, au risque d'un épuisement particulier quand l'émotion jouée s'éloigne trop durablement de l'émotion réellement ressentie.",
    limites: [
      "Deux professions seulement, aux exigences émotionnelles opposées (chaleur contre fermeté), ne couvrent pas toute la diversité des métiers de service.",
      "L'étude, menée aux États-Unis à la fin des années 1970, décrit un contexte professionnel et culturel déjà daté.",
    ],
    critiques: [
      "Des travaux ultérieurs ont nuancé l'opposition entre émotion « vraie » et émotion « jouée », plus poreuse que le modèle initial ne le suggérait.",
      "Le concept de travail émotionnel a parfois été appliqué de façon si extensive, à des métiers très différents, qu'il en a perdu une partie de sa précision analytique.",
    ],
    posterite:
      "Elle fonde la sociologie du travail émotionnel, devenue un outil central pour analyser tous les métiers de service et de care où la gestion des émotions fait explicitement partie de la tâche à accomplir.",
    auteurs: [],
    inspirateurs: ["Arlie Russell Hochschild — la conception et la conduite de l'étude sur le travail émotionnel (1983)"],
    concepts: ['interaction-en-face-a-face'],
    methodes: ['entretien-semi-directif', 'observation-non-participante'],
    processus: [],
  },

  /* — Terrain et marges urbaines — */
  {
    id: 'etude-de-middletown',
    t: 'Étude de Middletown',
    categorie: 'terrain-et-marges-urbaines',
    date: '1924–1925 (terrain), publiée en 1929',
    lieu: "Muncie, petite ville industrielle de l'Indiana, présentée sous le nom fictif de Middletown",
    population:
      "L'ensemble des habitants d'une ville moyenne américaine, en particulier ses deux grandes catégories sociales : la classe ouvrière et la classe des affaires",
    question:
      "Comment vit, travaille et pense une ville américaine ordinaire, et comment ce mode de vie se transforme-t-il sous l'effet de l'industrialisation ?",
    methode:
      'Une enquête de terrain complète mêlant observation directe de la vie quotidienne, entretiens, dépouillement de la presse locale et des registres municipaux, et administration de questionnaires, organisée autour de six grands domaines de la vie sociale (travail, foyer, éducation, loisirs, religion, vie civique).',
    resultats:
      "L'étude documente un fossé net entre la classe ouvrière et la classe des affaires dans presque tous les aspects de la vie quotidienne — logement, loisirs, éducation des enfants, participation religieuse — et montre que ce clivage structure la ville bien plus que ne le laissait supposer son image d'une communauté homogène.",
    limites: [
      "Une seule ville, choisie pour sa taille moyenne et sa faible diversité, ne permet pas de généraliser directement à l'ensemble des États-Unis.",
      "L'étude minore la question raciale, la ville choisie comptant une population noire très réduite au moment du terrain.",
    ],
    critiques: [
      "Le choix de présenter la ville sous un nom fictif, tout en publiant des détails très précis, a fini par la rendre identifiable et a exposé ses habitants réels à un regard extérieur qu'ils n'avaient pas anticipé.",
      "Une étude ultérieure des mêmes auteurs, Middletown in Transition (1937), a montré que certaines conclusions de la première enquête avaient vieilli plus vite que prévu.",
    ],
    posterite:
      'Elle reste la première grande étude de communauté américaine à combiner systématiquement plusieurs méthodes, et une référence directe pour toute la tradition des « community studies » qui suivra pendant tout le XXᵉ siècle.',
    auteurs: [],
    inspirateurs: ["Robert S. Lynd et Helen Merrell Lynd — la conception et la conduite de l'étude de Middletown (1929)"],
    concepts: ['position-sociale'],
    methodes: ['etude-de-cas'],
    processus: [],
  },
  {
    id: 'street-corner-society',
    t: 'Street Corner Society',
    categorie: 'terrain-et-marges-urbaines',
    date: '1936–1940 (terrain), publiée en 1943',
    lieu: 'Quartier italo-américain de North End, Boston',
    population: "Jeunes hommes d'un quartier pauvre italo-américain, réunis en petits groupes de rue (« corner gangs »)",
    question: "Comment un quartier considéré comme désorganisé de l'extérieur organise-t-il en réalité sa propre vie sociale ?",
    methode:
      "Une immersion de plusieurs années au sein d'un groupe de rue, où le chercheur devient un membre reconnu du quartier, accepté par ses habitants au point de participer lui-même à leurs activités quotidiennes et à leurs enjeux internes.",
    resultats:
      "L'étude révèle une hiérarchie interne précise et stable au sein des groupes de rue, avec ses propres règles de loyauté et de statut, contredisant l'image d'un quartier livré au chaos et à l'absence de structure sociale.",
    limites: [
      "Un seul quartier et un seul groupe principal ne permettent pas de généraliser à d'autres quartiers pauvres urbains.",
      "L'intégration très poussée du chercheur au groupe l'expose au risque de perdre la distance nécessaire à l'analyse.",
    ],
    critiques: [
      "Des travaux ultérieurs ont questionné jusqu'où l'engagement du chercheur avait pu influencer la dynamique même du groupe qu'il prétendait seulement observer.",
      "L'identité réelle du quartier et de certains informateurs, mal dissimulée malgré des noms fictifs, a fini par être découverte.",
    ],
    posterite:
      "Elle reste l'un des exemples les plus cités d'observation participante réussie, et un jalon de l'école de Chicago dans l'étude des quartiers urbains pauvres, loin des explications par la seule pathologie sociale.",
    auteurs: [],
    inspirateurs: ['William Foote Whyte — la conception et la conduite du terrain de Street Corner Society (1943)'],
    concepts: ['zone-d-incertitude'],
    methodes: ['observation-participante'],
    processus: [],
  },
  {
    id: 'the-hobo',
    t: 'The Hobo',
    categorie: 'terrain-et-marges-urbaines',
    date: '1921–1922 (terrain), publié en 1923',
    lieu: 'Quartier de Hobohemia, Chicago',
    population: 'Hommes sans domicile fixe, migrants et travailleurs itinérants du centre de Chicago',
    question: "Comment un mode de vie marginal et itinérant s'organise-t-il en un véritable monde social, avec ses propres règles ?",
    methode:
      "Une immersion directe dans le quartier étudié, l'auteur ayant lui-même vécu comme hobo avant de mener cette enquête, complétée par des entretiens et une cartographie précise des lieux fréquentés par cette population.",
    resultats:
      "L'étude montre que la vie du hobo n'est ni chaotique ni purement subie : elle obéit à des trajectoires typiques, à une hiérarchie interne entre catégories de travailleurs itinérants, et à des règles de sociabilité propres à ce monde, largement invisibles depuis l'extérieur.",
    limites: [
      "Un seul quartier d'une seule ville ne permet pas de généraliser à toutes les formes de marginalité urbaine américaine.",
      "L'implication personnelle très forte de l'auteur dans le milieu étudié complique la distinction entre son expérience vécue et son analyse de chercheur.",
    ],
    critiques: [
      'Certains ont objecté que la typologie proposée, en distinguant des catégories nettes de travailleurs itinérants, lissait des trajectoires en réalité plus mouvantes et moins stables.',
      "L'étude a été critiquée pour son attention presque exclusive aux hommes, laissant de côté la marginalité urbaine féminine de la même période.",
    ],
    posterite:
      "Elle fonde l'étude de la déviance et de la marginalité urbaine à l'école de Chicago, et ouvre la voie aux méthodes d'observation participante que Howard Becker développera ensuite sur d'autres mondes marginaux.",
    auteurs: [],
    inspirateurs: [
      'Nels Anderson — la conduite du terrain et la rédaction de The Hobo (1923)',
      "Robert Park — la direction du programme de recherche urbaine de l'école de Chicago dont l'étude est issue",
    ],
    concepts: ['etiquetage', 'carriere-deviante'],
    methodes: ['ethnographie', 'observation-participante'],
    processus: [],
  },

  /* — Migration, institutions et interaction — */
  {
    id: 'polish-peasant',
    t: 'The Polish Peasant in Europe and America',
    categorie: 'migration-institutions-interaction',
    date: '1918–1920',
    lieu: 'Communautés polonaises de Pologne et des États-Unis (notamment Chicago)',
    population: 'Familles paysannes polonaises restées au pays et immigrées aux États-Unis',
    question:
      "Comment l'immigration transforme-t-elle les valeurs, les liens familiaux et les repères d'un groupe déplacé d'un monde social à un autre ?",
    methode:
      "Une analyse de documents personnels — lettres échangées entre la Pologne et l'Amérique, journaux intimes, dossiers d'assistance sociale — complétée par une longue autobiographie recueillie auprès d'un jeune immigré, Wladek, retranscrite presque intégralement dans l'ouvrage.",
    resultats:
      "L'étude montre que la désorganisation sociale observée chez les immigrés — délinquance, ruptures familiales — ne s'explique ni par une nature déficiente du groupe ni par la seule pauvreté, mais par l'écart entre les règles du monde quitté et celles du monde d'accueil, dont chacun doit se redéfinir la signification.",
    limites: [
      "Le corpus de documents personnels, très riche, ne permet aucune mesure quantitative de l'ampleur des phénomènes décrits.",
      "Le cas de Wladek, aussi détaillé soit-il, reste un cas singulier dont la représentativité n'est jamais établie.",
    ],
    critiques: [
      'Le recours massif à des documents choisis par les auteurs eux-mêmes laisse une place importante à leur propre sélection et interprétation.',
      "Robert Merton objectera plus tard que la définition d'une situation, même fausse, ne suffit pas à expliquer pourquoi elle a été posée ainsi plutôt qu'autrement.",
    ],
    posterite:
      "Elle fonde la méthode des documents personnels et des récits de vie en sociologie américaine, et donne naissance au concept de définition de la situation — puis au théorème de Thomas — qui reste l'un des outils les plus cités de toute la discipline.",
    auteurs: ['thomas'],
    inspirateurs: ["Florian Znaniecki — la co-direction de l'étude et l'élaboration conjointe de sa méthode"],
    concepts: ['definition-de-la-situation'],
    methodes: ['recit-de-vie', 'entretien-biographique'],
    processus: [],
  },
  {
    id: 'asylums',
    t: 'Asylums',
    categorie: 'migration-institutions-interaction',
    date: '1955–1956 (terrain), publié en 1961',
    lieu: 'St. Elizabeths Hospital, hôpital psychiatrique public de Washington D.C.',
    population: "Patients internés en psychiatrie et personnel soignant d'un grand hôpital public",
    question: "Comment une institution qui prend en charge la totalité de l'existence d'une personne transforme-t-elle son identité ?",
    methode:
      "Une année d'observation quasi participante, où le chercheur se fait passer pour un membre du personnel administratif afin d'observer sans distance imposée la vie quotidienne des patients et du personnel de l'hôpital.",
    resultats:
      "L'étude décrit un processus systématique de dépouillement de l'identité antérieure du patient à son entrée — vêtements, objets personnels, habitudes — suivi de tactiques d'adaptation secrète par lesquelles les internés reconstruisent malgré tout un espace de dignité et d'autonomie.",
    limites: [
      'Un seul établissement psychiatrique ne permet pas de généraliser directement à toutes les institutions totales (prisons, internats, casernes).',
      "L'accès obtenu sous un rôle dissimulé pose la question du consentement des personnes observées, jamais informées de la véritable qualité de l'observateur.",
    ],
    critiques: [
      "Le déguisement du chercheur en membre du personnel a été critiqué comme une tromperie éthiquement problématique, à une époque où la déontologie de la recherche était moins codifiée qu'aujourd'hui.",
      "Certains ont reproché à l'analyse de sous-estimer les différences réelles entre types d'institutions totales, réunies sous un même concept peut-être trop large.",
    ],
    posterite:
      "Elle fonde le concept d'institution totale, devenu un outil d'analyse appliqué bien au-delà de la psychiatrie — prisons, internats, casernes, couvents — partout où une organisation prend en charge la totalité de la vie de ceux qu'elle héberge.",
    auteurs: ['goffman'],
    inspirateurs: [],
    concepts: ['institution-totale', 'stigmate'],
    methodes: ['ethnographie'],
    processus: [],
  },
  {
    id: 'presentation-of-self',
    t: 'The Presentation of Self in Everyday Life',
    categorie: 'migration-institutions-interaction',
    date: '1949–1951 (terrain aux Shetland), publié en 1959',
    lieu: "Une petite île de l'archipel des Shetland, en Écosse",
    population: 'Les habitants d’une communauté insulaire rurale, observés dans leurs interactions quotidiennes',
    question: "Comment un individu gère-t-il l'image qu'il donne de lui-même dans ses interactions ordinaires avec autrui ?",
    methode:
      "Une observation de terrain prolongée dans une communauté rurale isolée, menée dans le cadre d'une thèse de doctorat, dont les observations sur les échanges quotidiens nourriront ensuite l'ouvrage théorique qui en tire un cadre d'analyse général — la métaphore théâtrale de la scène et des coulisses.",
    resultats:
      "L'étude montre que toute interaction sociale s'organise comme une représentation : chacun gère une façade adaptée à la situation, ménage des coulisses où il peut se relâcher, et coopère tacitement avec autrui pour maintenir une définition commune et crédible de la situation.",
    limites: [
      "Une communauté rurale isolée ne permet pas de vérifier directement si la métaphore théâtrale s'applique de la même façon aux interactions urbaines ou numériques.",
      "L'analyse reste largement descriptive et peu quantifiable, ce qui rend ses propositions difficiles à tester formellement.",
    ],
    critiques: [
      "Certains sociologues ont reproché à la métaphore théâtrale de réduire l'acteur social à un simple stratège de son image, sans laisser de place à une sincérité non calculée.",
      "Le lien exact entre le terrain empirique des Shetland et les généralisations théoriques de l'ouvrage reste, avec le recul, difficile à retracer précisément.",
    ],
    posterite:
      "Elle fonde toute la sociologie dramaturgique des interactions, et son vocabulaire — façade, coulisses, mise en scène de soi — a largement dépassé la sociologie pour irriguer jusqu'à l'analyse contemporaine des réseaux sociaux numériques.",
    auteurs: ['goffman'],
    inspirateurs: [],
    concepts: ['interaction-en-face-a-face'],
    methodes: ['ethnographie'],
    processus: [],
  },

  /* — École et reproduction — */
  {
    id: 'etudes-de-mobilite-sociale',
    t: 'Études de mobilité sociale (Blau & Duncan)',
    categorie: 'ecole-et-reproduction',
    date: '1962 (enquête), publié en 1967',
    lieu: 'États-Unis, enquête nationale',
    population: 'Plus de 20 000 hommes américains âgés de 20 à 64 ans',
    question: "Quel poids relatif l'origine familiale et le parcours scolaire exercent-ils sur la position professionnelle finalement atteinte ?",
    methode:
      "Une vaste enquête par questionnaire, exploitée par une technique statistique alors nouvelle en sociologie — l'analyse de cheminement (path analysis) — pour décomposer, étape par étape, l'effet de l'origine sociale du père, du niveau d'études et du premier emploi sur la position professionnelle atteinte à l'âge adulte.",
    resultats:
      "L'étude établit que l'éducation constitue le principal canal par lequel l'origine sociale se transmet à la position professionnelle, sans effacer pour autant un effet direct et persistant de l'origine familiale, indépendant du niveau de diplôme atteint.",
    limites: [
      "L'enquête ne porte que sur des hommes, laissant entièrement de côté la mobilité sociale des femmes.",
      "Le modèle statistique linéaire simplifie des trajectoires professionnelles souvent plus heurtées et moins régulières que ne le suggère une simple chaîne de causes.",
    ],
    critiques: [
      "Des sociologues plus critiques ont reproché au modèle de traiter la mobilité comme un processus presque mécanique, minorant le rôle des rapports de classe et des rapports de pouvoir dans l'accès aux positions.",
      "Les catégories professionnelles utilisées, propres au contexte américain des années 1960, se transposent mal à d'autres pays et à d'autres époques.",
    ],
    posterite:
      "Elle fonde le modèle dit du statut atteint (status attainment), devenu la référence méthodologique de toute une génération d'études internationales sur la mobilité sociale, y compris les grandes enquêtes françaises de l'INSEE sur la formation et la qualification professionnelle.",
    auteurs: [],
    inspirateurs: ['Peter Blau et Otis Dudley Duncan — The American Occupational Structure (1967), fondateur du modèle statistique de la mobilité sociale'],
    concepts: ['position-sociale'],
    methodes: ['enquete-quantitative', 'analyse-statistique'],
    processus: ['mobilite-sociale'],
  },
  {
    id: 'la-reproduction',
    t: 'La Reproduction',
    categorie: 'ecole-et-reproduction',
    date: '1970',
    lieu: 'France',
    population: "Le système scolaire et universitaire français, ses élèves et étudiants de différentes origines sociales",
    question:
      "Par quel mécanisme précis l'école, censée offrir l'égalité des chances, contribue-t-elle en réalité à reproduire les inégalités sociales d'une génération à l'autre ?",
    methode:
      'Une synthèse théorique appuyée sur les données statistiques et les entretiens déjà rassemblés pour Les Héritiers (1964), organisée cette fois en un modèle général de la reproduction, articulé aux concepts de capital culturel et de violence symbolique.',
    resultats:
      "L'ouvrage montre que l'école, en évaluant tous les élèves selon des critères qui supposent déjà un capital culturel inégalement réparti dès le départ, transforme des inégalités sociales héritées en inégalités scolaires qui semblent, elles, procéder du seul mérite individuel.",
    limites: [
      "Le raisonnement, très général, s'appuie sur un nombre limité de données empiriques nouvelles par rapport aux Héritiers, ce qui lui vaut d'être davantage lu comme un cadre théorique que comme une enquête à proprement parler.",
      "Le modèle décrit un système scolaire français des années 1960-1970, dont l'ouverture et les filières ont depuis nettement changé.",
    ],
    critiques: [
      "Raymond Boudon reprochera au modèle de sous-estimer les choix rationnels des familles à chaque palier scolaire, au profit d'une reproduction présentée comme presque automatique.",
      "D'autres ont objecté que la notion de violence symbolique, difficile à mesurer directement, résiste mal à une vérification empirique stricte.",
    ],
    posterite:
      "Elle reste l'un des textes les plus cités de toute la sociologie de l'éducation, et le point de départ obligé de tout débat français sur l'égalité des chances à l'école.",
    auteurs: ['bourdieu'],
    inspirateurs: ['Jean-Claude Passeron — la co-écriture du modèle de la reproduction scolaire'],
    concepts: ['habitus', 'capital-culturel'],
    methodes: ['enquete-quantitative'],
    processus: ['reproduction-sociale'],
  },
  {
    id: 'ecole-capitaliste-en-france',
    t: "L'École capitaliste en France",
    categorie: 'ecole-et-reproduction',
    date: '1971',
    lieu: 'France',
    population: "L'ensemble du système scolaire français du secondaire, et les élèves qui le traversent",
    question:
      "L'école française forme-t-elle une seule jeunesse selon un même parcours, ou organise-t-elle dès le départ deux trajectoires scolaires séparées selon l'origine sociale ?",
    methode:
      "Une analyse statistique des filières et des taux de passage à chaque niveau du système scolaire secondaire français, croisée avec l'origine sociale des élèves, mobilisant les catégories du matérialisme historique pour interpréter les résultats.",
    resultats:
      "L'étude soutient que l'école française organise dès le premier cycle du secondaire deux réseaux d'enseignement distincts — l'un menant aux études longues, l'autre aux filières courtes et professionnelles — répartissant les élèves selon leur origine sociale bien plus que selon leurs seules aptitudes déclarées.",
    limites: [
      "Le cadre théorique marxiste choisi oriente fortement la lecture des données statistiques, au risque de confirmer ce qu'il cherchait déjà à démontrer.",
      "Le système des deux réseaux, décrit pour la France du début des années 1970, a été profondément restructuré depuis par la création du collège unique.",
    ],
    critiques: [
      'Le modèle des deux réseaux a été jugé trop rigide par des sociologues plus attentifs aux marges et aux trajectoires individuelles échappant à cette bipartition.',
      "D'autres travaux, dont ceux de Bourdieu et Passeron, insisteront davantage sur les mécanismes culturels et symboliques de la reproduction que sur sa seule lecture en termes de classes économiques.",
    ],
    posterite:
      "Elle reste une référence majeure de la sociologie marxiste de l'éducation en France, et un jalon du débat, toujours vivant, sur la part du diplôme et celle de l'origine sociale dans la trajectoire scolaire.",
    auteurs: [],
    inspirateurs: ["Christian Baudelot et Roger Establet — L'École capitaliste en France (1971)"],
    concepts: ['classe-dominante'],
    methodes: ['analyse-statistique'],
    processus: ['reproduction-sociale'],
  },

  /* — Opinion et culture — */
  {
    id: 'the-peoples-choice',
    t: 'The People’s Choice (enquêtes de Lazarsfeld)',
    categorie: 'opinion-et-culture',
    date: '1940',
    lieu: "Comté d'Erie, Ohio",
    population: 'Environ 600 électeurs interrogés à plusieurs reprises au cours de la campagne présidentielle américaine',
    question: "Comment les électeurs forment-ils leur décision de vote au cours d'une campagne électorale, et par quels canaux l'information les atteint-elle ?",
    methode:
      "Une enquête par panel — les mêmes électeurs interrogés à plusieurs mois d'intervalle, plutôt qu'un sondage ponctuel — pour observer, plutôt que supposer, les évolutions réelles d'opinion tout au long de la campagne.",
    resultats:
      "L'étude montre que la plupart des électeurs avaient déjà arrêté leur choix avant même le début officiel de la campagne, et que l'information circule le plus souvent en deux temps : des médias vers des « leaders d'opinion » plus attentifs à l'actualité, puis de ces leaders vers leur entourage proche — plutôt que directement des médias vers chaque individu.",
    limites: [
      'Un seul comté américain, choisi pour sa stabilité électorale, ne permet pas de généraliser à toutes les configurations politiques.',
      "Le modèle du double flux de communication a été élaboré avant l'essor de la télévision, puis d'internet, qui modifient profondément la circulation de l'information.",
    ],
    critiques: [
      "Des travaux plus récents ont relativisé la netteté du rôle des leaders d'opinion, montrant une circulation de l'information plus diffuse et moins hiérarchisée que ne le suggérait le modèle initial.",
      "L'étude a été critiquée pour sa focalisation presque exclusive sur les effets limités des médias, minorant leur capacité à façonner sur le temps long les cadres mêmes du débat public.",
    ],
    posterite:
      "Elle fonde la sociologie empirique des communications de masse et le modèle du double flux de communication (two-step flow), qui reste une référence pour penser la diffusion de l'information bien au-delà du seul contexte électoral.",
    auteurs: [],
    inspirateurs: ["Paul Lazarsfeld — la direction de l'enquête par panel sur le comté d'Erie et la théorisation du double flux de communication (1944)"],
    concepts: ['espace-public'],
    methodes: ['sondage', 'enquete-quantitative'],
    processus: [],
  },
  {
    id: 'la-distinction',
    t: 'La Distinction (enquêtes sur les pratiques culturelles)',
    categorie: 'opinion-et-culture',
    date: '1963–1967 (enquêtes), publié en 1979',
    lieu: 'France',
    population: 'Environ 1 200 personnes enquêtées, représentatives de l’éventail des positions sociales françaises',
    question: "Le goût — en matière de musique, de nourriture, de loisirs, d'ameublement — relève-t-il d'une sensibilité personnelle libre, ou d'une position sociale ?",
    methode:
      "Un vaste questionnaire sur les pratiques et préférences culturelles, croisé avec la position sociale de chaque enquêté (volume et structure de ses capitaux économique et culturel), complété d'entretiens et d'une analyse statistique multidimensionnelle des correspondances entre pratiques.",
    resultats:
      "L'étude montre que les préférences culturelles, loin d'être un pur jugement personnel, dessinent un espace social organisé où chaque style de vie correspond étroitement à une position déterminée par le volume et la composition du capital économique et culturel détenu.",
    limites: [
      "Les données ont été recueillies dans les années 1960, dans une France dont le paysage culturel et médiatique a depuis profondément changé.",
      "Le classement des pratiques culturelles en légitimes ou non repose en partie sur des hiérarchies déjà établies par l'institution scolaire française, ce que l'étude documente sans toujours s'en distancier entièrement.",
    ],
    critiques: [
      "Des travaux ultérieurs ont montré une diversification croissante des goûts au sein des catégories sociales supérieures (l'« omnivorisme culturel »), moins nettement hiérarchisée que ne le décrivait le modèle initial.",
      "Sa transposition à d'autres pays, aux hiérarchies culturelles différentes de celles de la France, reste débattue.",
    ],
    posterite:
      "Elle reste l'étude la plus citée de toute la sociologie de la culture, et le point de départ obligé de toute discussion sur le lien entre position sociale et pratiques culturelles, en France comme à l'étranger.",
    auteurs: ['bourdieu'],
    inspirateurs: [],
    concepts: ['capital-culturel', 'habitus', 'position-sociale'],
    methodes: ['questionnaire', 'methodes-mixtes'],
    processus: [],
  },
];
