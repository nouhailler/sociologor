// Données des fiches — extraites telles quelles du prototype Claude Design
// (sociologor-pwa-prototype/project/Sociologor.dc.html). Ne pas retaper à la main :
// toute correction de contenu se fait ici, puis se répercute dans la doc (app/docs/).

export const DOMAINS = [
  { id: 'classes', t: 'Classes sociales', d: "Comment une société se hiérarchise, et pourquoi la position héritée pèse encore si lourd.", a: ['marx', 'bourdieu', 'weber'] },
  { id: 'education', t: 'Éducation', d: "L'école promet l'égalité des chances et distribue pourtant des destins très prévisibles.", a: ['bourdieu', 'durkheim', 'boudon'] },
  { id: 'travail', t: 'Travail', d: "Diviser les tâches lie les individus autant que cela les épuise.", a: ['durkheim', 'marx', 'becker'] },
  { id: 'religion', t: 'Religion', d: "Le sacré comme ciment collectif — et comme moteur inattendu du capitalisme.", a: ['durkheim', 'weber'] },
  { id: 'deviance', t: 'Déviance', d: "Personne n'est déviant tout seul : il faut un public, une règle et un étiquetage.", a: ['becker', 'goffman', 'merton'] },
  { id: 'interactions', t: 'Interactions', d: "La vie sociale se joue en face à face, dans des micro-scènes très codées.", a: ['goffman', 'simmel'] },
  { id: 'culture', t: 'Culture', d: "Les goûts ne sont jamais purement personnels : ils classent celui qui les affiche.", a: ['bourdieu', 'simmel'] },
  { id: 'organisations', t: 'Organisations', d: "Règles, hiérarchies et bureaucratie : la machine froide de la modernité.", a: ['weber', 'merton', 'parsons'] },
  { id: 'urbaine', t: 'Urbaine', d: "La ville fabrique une manière d'être ensemble : dense, anonyme, nerveuse.", a: ['simmel', 'becker'] },
  { id: 'corps', t: 'Corps', d: "Se tenir, se retenir, se laver : l'histoire longue de la contrainte de soi.", a: ['elias', 'goffman', 'bourdieu', 'boltanski'] },
  { id: 'politique', t: 'Politique', d: "Qui a le droit de commander, et au nom de quoi obéit-on ?", a: ['weber', 'marx', 'tocqueville'] },
  { id: 'methode', t: 'Méthode', d: "Traiter les faits sociaux comme des choses — ou comprendre le sens que les acteurs y mettent.", a: ['durkheim', 'weber', 'comte'] },
  { id: 'inegalites', t: 'Mobilité sociale', d: "Monter, descendre, rester : la circulation entre positions et ses illusions.", a: ['boudon', 'bourdieu', 'merton'] },
  { id: 'famille', t: 'Famille', d: "L'institution la plus intime est aussi la plus transmettrice.", a: ['durkheim', 'bourdieu', 'tocqueville', 'parsons'] },
];

export const AUTHORS = {
  comte: {
    id: 'comte', name: 'Auguste Comte', initials: 'AC', dates: '1798–1857', nat: 'France', periode: 'XIXᵉ siècle',
    courant: 'Positivisme',
    hook: "Il baptise la discipline et lui promet la rigueur des sciences de la nature.",
    resume: "Comte invente le mot « sociologie » et un pari : la société peut s'étudier avec la même rigueur qu'un phénomène physique.",
    concepts: [
      { id: 'physique-sociale', t: 'Physique sociale', year: '1830', simple: "L'idée que la vie collective obéit à des régularités observables, pas au hasard des volontés individuelles.", ex: "Les taux de mariage d'un pays varient peu d'une année sur l'autre, alors que chaque mariage semble une décision intime." },
      { id: 'loi-des-trois-etats', t: 'Loi des trois états', year: '1842', simple: "L'humanité expliquerait le monde d'abord par les dieux, puis par des principes abstraits, enfin par l'observation.", ex: "Une épidémie lue successivement comme punition divine, comme déséquilibre des humeurs, puis comme chaîne de contaminations." },
    ],
    oeuvres: [{ y: '1830', t: 'Cours de philosophie positive (1830–1842)' }, { y: '1851', t: 'Système de politique positive' }],
    citations: [{ t: "Savoir pour prévoir, afin de pouvoir.", src: 'Cours de philosophie positive' }],
    critiques: ["Sa foi dans le progrès linéaire a mal vieilli.", "Un programme plus philosophique qu'empirique : presque aucune enquête."],
    up: [], down: ['durkheim'], x: 30, y: 40,
  },
  marx: {
    id: 'marx', name: 'Karl Marx', initials: 'KM', dates: '1818–1883', nat: 'Allemagne', periode: 'XIXᵉ siècle',
    courant: 'Matérialisme historique',
    hook: "Il lit l'histoire comme un conflit d'intérêts matériels, pas comme un débat d'idées.",
    resume: "Pour Marx, ce qui structure une société n'est pas ce qu'elle pense d'elle-même, mais qui possède les moyens de produire.",
    concepts: [
      { id: 'classe-sociale', t: 'Classe sociale', year: '1848', simple: "Un groupe défini par sa place dans la production — posséder l'outil, ou vendre son temps pour l'utiliser.", ex: "Deux personnes au même salaire n'ont pas la même position si l'une détient l'entreprise et l'autre un contrat de travail." },
      { id: 'alienation', t: 'Aliénation', year: '1844', simple: "Quand le travail, censé être l'expression de soi, devient une activité étrangère qu'on subit.", ex: "Un opérateur qui répète un geste sur un produit qu'il ne verra jamais fini, ni ne pourra s'offrir." },
      { id: 'ideologie', t: 'Idéologie', year: '1846', simple: "Les idées qui font passer un ordre social particulier pour l'ordre naturel des choses.", ex: "« Chacun réussit à la mesure de son mérite » — une phrase qui rend invisible ce que le point de départ a apporté." },
    ],
    oeuvres: [{ y: '1848', t: 'Manifeste du parti communiste' }, { y: '1867', t: 'Le Capital, livre I' }, { y: '1846', t: "L'Idéologie allemande" }],
    citations: [{ t: "Les hommes font leur propre histoire, mais dans des conditions qu'ils n'ont pas choisies.", src: 'Le 18 Brumaire de Louis Bonaparte, 1852' }],
    critiques: ["La prédiction d'une polarisation en deux classes ne s'est pas vérifiée : les classes moyennes ont grossi.", "Weber lui reproche de sous-estimer le rôle propre des croyances et du prestige."],
    up: [], down: ['bourdieu', 'francfort'], x: 30, y: 205,
  },
  weber: {
    id: 'weber', name: 'Max Weber', initials: 'MW', dates: '1864–1920', nat: 'Allemagne', periode: 'Tournant du XXᵉ',
    courant: 'Sociologie compréhensive',
    hook: "Comprendre le sens que les acteurs donnent à leurs actes, avant d'en chercher les causes.",
    resume: "Weber refuse de choisir entre les idées et l'économie : il montre comment une croyance religieuse a pu produire une machine économique.",
    concepts: [
      { id: 'ideal-type', t: 'Idéal-type', year: '1904', simple: "Une caricature volontaire, construite par le chercheur, pour rendre un phénomène comparable.", ex: "« La bureaucratie » n'existe nulle part à l'état pur, mais le modèle permet de mesurer l'écart d'une administration réelle." },
      { id: 'rationalisation', t: 'Rationalisation', year: '1920', simple: "La tendance moderne à tout soumettre au calcul, à la règle et à l'efficacité mesurable.", ex: "Un hôpital où le temps par patient devient un indicateur, au risque d'évincer ce qui ne se compte pas." },
      { id: 'domination-legitime', t: 'Domination légitime', year: '1922', simple: "On obéit rarement par peur seule : on obéit à la tradition, au charisme, ou à la règle écrite.", ex: "Un salarié suit une consigne parce qu'elle vient du poste, pas de la personne qui l'occupe." },
      { id: 'pouvoir', t: 'Pouvoir', year: '1922', simple: "La chance d'imposer sa volonté dans une relation sociale, même contre résistance — que ce soit jugé légitime ou non.", ex: "Un actionnaire minoritaire qui bloque une décision grâce à une clause, sans avoir ni la majorité ni l'onction du vote." },
      { id: 'statut-social', t: 'Statut social', year: '1922', simple: "Une estime sociale partagée, attachée à un style de vie — distincte de la richesse, qu'elle habille souvent de manières et de goûts.", ex: "Un professeur mal payé garde une considération que n'obtient pas un commerçant plus riche mais jugé moins « distingué »." },
      { id: 'prestige-social', t: 'Prestige social', year: '1922', simple: "La valeur comparative qu'une société attache à une position, indépendamment du salaire qu'elle procure.", ex: "Un métier de la fonction publique recherché pour sa considération, alors qu'un poste mieux payé dans le privé inspire moins de respect." },
      { id: 'elitisme', t: 'Élitisme', year: '1919', simple: "Même une organisation démocratique finit gouvernée par une poignée de dirigeants professionnels — la « loi d'airain de l'oligarchie ».", ex: "Un syndicat né pour représenter sa base voit ses permanents, mieux informés et mieux organisés, décider seuls de l'orientation à suivre." },
    ],
    oeuvres: [{ y: '1904', t: "L'Éthique protestante et l'esprit du capitalisme" }, { y: '1922', t: 'Économie et société' }, { y: '1919', t: 'Le Savant et le politique' }],
    citations: [{ t: "L'homme est un animal suspendu dans les toiles de signification qu'il a lui-même tissées.", src: "d'après L'Éthique protestante, 1904" }],
    critiques: ["Le lien protestantisme–capitalisme a été contesté par les historiens économistes.", "Sa neutralité axiologique est jugée intenable par les sociologies critiques."],
    up: [], down: ['goffman', 'parsons', 'bourdieu'], x: 30, y: 375,
  },
  simmel: {
    id: 'simmel', name: 'Georg Simmel', initials: 'GS', dates: '1858–1918', nat: 'Allemagne', periode: 'Tournant du XXᵉ',
    courant: 'Sociologie des formes',
    hook: "La société n'est pas une chose : c'est ce qui se passe entre les gens.",
    resume: "Simmel regarde les petites formes — la dispute, le secret, la mode, le passage en ville — et y trouve la structure du social.",
    concepts: [
      { id: 'formes-de-socialisation', t: 'Formes de socialisation', year: '1908', simple: "Ce qui compte n'est pas le contenu d'une relation mais sa forme : à deux, à trois, en foule, on n'agit pas pareil.", ex: "L'arrivée d'un troisième dans un duo crée aussitôt un arbitre, un allié possible, un exclu." },
      { id: 'blasement-urbain', t: 'Blasement urbain', year: '1903', simple: "La grande ville sature les sens, et l'indifférence devient une technique de survie.", ex: "Dans un métro bondé, on partage un corps à corps total en évitant soigneusement tous les regards." },
    ],
    oeuvres: [{ y: '1900', t: 'Philosophie de l\'argent' }, { y: '1903', t: 'Les Grandes villes et la vie de l\'esprit' }, { y: '1908', t: 'Sociologie' }],
    citations: [{ t: "La société n'est qu'une somme d'interactions.", src: 'Sociologie, 1908' }],
    critiques: ["Une œuvre en éclats, sans système, longtemps jugée trop essayiste.", "Peu d'outils pour penser les inégalités durables."],
    up: [], down: ['goffman', 'elias'], x: 30, y: 530,
  },
  durkheim: {
    id: 'durkheim', name: 'Émile Durkheim', initials: 'ED', dates: '1858–1917', nat: 'France', periode: 'IIIᵉ République',
    courant: 'Fonctionnalisme, holisme',
    hook: "Il fait entrer la sociologie à l'université en lui donnant des règles et des statistiques.",
    resume: "Durkheim démontre que les actes les plus intimes — jusqu'au suicide — se distribuent selon des régularités qui dépassent les individus.",
    concepts: [
      { id: 'fait-social', t: 'Fait social', year: '1895', simple: "Une manière de faire extérieure aux individus, qui s'impose à eux et se traite comme un objet.", ex: "Personne ne choisit sa langue maternelle, et pourtant elle contraint chaque phrase que l'on prononce." },
      { id: 'anomie', t: 'Anomie', year: '1897', simple: "Ce qui arrive quand les règles se brouillent : plus rien ne borne les attentes, et le vertige s'installe.", ex: "Un secteur en pleine dérégulation où les repères de carrière disparaissent, et où l'usure psychique grimpe." },
      { id: 'solidarite-organique', t: 'Solidarité organique', year: '1893', simple: "Dans les sociétés modernes, on tient ensemble parce qu'on est différents et dépendants les uns des autres.", ex: "Une ville tient debout parce que personne n'y produit son pain, son électricité et ses soins." },
    ],
    oeuvres: [{ y: '1893', t: 'De la division du travail social' }, { y: '1895', t: 'Les Règles de la méthode sociologique' }, { y: '1897', t: 'Le Suicide' }, { y: '1912', t: 'Les Formes élémentaires de la vie religieuse' }],
    citations: [{ t: "Il faut traiter les faits sociaux comme des choses.", src: 'Les Règles de la méthode sociologique, 1895' }, { t: "Chaque société a un penchant défini au suicide.", src: 'Le Suicide, 1897' }],
    critiques: ["Un holisme qui laisse peu de place à l'action individuelle.", "La lecture fonctionnaliste tend à justifier l'ordre existant."],
    up: ['comte'], down: ['parsons', 'bourdieu', 'merton'], x: 250, y: 60,
  },
  francfort: {
    id: 'francfort', name: 'École de Francfort', initials: 'ÉF', dates: '1923–1970', nat: 'Allemagne', periode: 'XXᵉ siècle',
    courant: 'Théorie critique',
    hook: "Marx relu à l'âge des mass media et de la catastrophe.",
    resume: "Adorno, Horkheimer et Marcuse déplacent la critique du travail vers la culture : la domination passe désormais par le divertissement.",
    concepts: [
      { id: 'industrie-culturelle', t: 'Industrie culturelle', year: '1944', simple: "Quand la culture est produite en série, elle vend surtout du consentement.", ex: "Des formats de divertissement calibrés pour ne jamais heurter, qui laissent le spectateur exactement là où il était." },
      { id: 'raison-instrumentale', t: 'Raison instrumentale', year: '1947', simple: "Une rationalité qui sait parfaitement comment faire, et ne se demande plus pourquoi.", ex: "Une organisation qui optimise chaque indicateur sans jamais interroger sa finalité." },
    ],
    oeuvres: [{ y: '1944', t: 'La Dialectique de la raison — Adorno & Horkheimer' }, { y: '1964', t: "L'Homme unidimensionnel — Marcuse" }],
    citations: [{ t: "Le divertissement est la prolongation du travail sous le capitalisme tardif.", src: 'La Dialectique de la raison, 1944' }],
    critiques: ["Un mépris marqué pour la culture populaire et ses publics.", "Peu d'enquêtes empiriques au regard de l'ampleur du diagnostic."],
    up: ['marx'], down: ['bourdieu'], x: 250, y: 205,
  },
  parsons: {
    id: 'parsons', name: 'Talcott Parsons', initials: 'TP', dates: '1902–1979', nat: 'États-Unis', periode: 'Après-guerre',
    courant: 'Fonctionnalisme systémique',
    hook: "Il tente la grande théorie : un seul schéma pour toute société.",
    resume: "Parsons voit la société comme un système dont chaque partie remplit une fonction et se tient en équilibre.",
    concepts: [
      { id: 'systeme-social', t: 'Système social', year: '1951', simple: "Un ensemble de rôles articulés, où chaque pièce contribue au maintien de l'ensemble.", ex: "L'école lue comme le sas qui transforme un enfant de famille en futur travailleur évalué au mérite." },
      { id: 'role-et-attentes', t: 'Rôle et attentes', year: '1951', simple: "Agir socialement, c'est occuper une position et répondre à ce que les autres en attendent.", ex: "Un médecin autorisé à poser des questions très intimes, uniquement dans le cadre du cabinet." },
    ],
    oeuvres: [{ y: '1937', t: 'La Structure de l\'action sociale' }, { y: '1951', t: 'Le Système social' }],
    citations: [{ t: "Aucune société ne survit sans intégrer ses membres à un système commun de valeurs.", src: 'Le Système social, 1951' }],
    critiques: ["Un modèle qui explique mal le conflit et le changement.", "Une abstraction si haute qu'elle devient difficile à tester."],
    up: ['durkheim', 'weber'], down: ['merton'], x: 250, y: 375,
  },
  elias: {
    id: 'elias', name: 'Norbert Elias', initials: 'NE', dates: '1897–1990', nat: 'Allemagne', periode: 'XXᵉ siècle',
    courant: 'Sociologie historique',
    hook: "Il suit sur cinq siècles la manière dont on apprend à se retenir.",
    resume: "Elias montre que la maîtrise de soi n'est pas une vertu naturelle mais le produit d'une longue histoire de l'État et des mœurs.",
    concepts: [
      { id: 'processus-de-civilisation', t: 'Processus de civilisation', year: '1939', simple: "Les contraintes venues de l'extérieur deviennent peu à peu des contraintes qu'on s'impose soi-même.", ex: "Personne ne surveille plus votre manière de manger : c'est vous qui ne supporteriez pas de le faire autrement." },
      { id: 'configuration', t: 'Configuration', year: '1970', simple: "Ni individu ni société d'abord : un tissu de relations d'interdépendance où chacun tient les autres.", ex: "Une équipe où le retard d'une seule personne réorganise la journée de dix autres." },
    ],
    oeuvres: [{ y: '1939', t: 'La Civilisation des mœurs' }, { y: '1939', t: 'La Dynamique de l\'Occident' }, { y: '1970', t: "Qu'est-ce que la sociologie ?" }],
    citations: [{ t: "La société n'est ni un amas d'individus ni une entité au-dessus d'eux.", src: "Qu'est-ce que la sociologie ?, 1970" }],
    critiques: ["Un récit occidental, accusé de laisser entendre un progrès moral.", "Les sources — traités de savoir-vivre — reflètent l'élite plus que le peuple."],
    up: ['simmel'], down: ['bourdieu'], x: 250, y: 530,
  },
  merton: {
    id: 'merton', name: 'Robert K. Merton', initials: 'RM', dates: '1910–2003', nat: 'États-Unis', periode: 'Après-guerre',
    courant: 'Fonctionnalisme critique',
    hook: "Il préfère les théories de portée moyenne aux grands systèmes.",
    resume: "Merton corrige son maître Parsons : les institutions ont aussi des effets non voulus, et parfois contraires à leur but.",
    concepts: [
      { id: 'fonction-latente', t: 'Fonction latente', year: '1949', simple: "L'effet réel d'une pratique, distinct de la raison affichée pour la faire.", ex: "Une réunion hebdomadaire dont la fonction déclarée est d'informer, et la fonction réelle de rappeler qui décide." },
      { id: 'prophetie-autorealisatrice', t: 'Prophétie autoréalisatrice', year: '1948', simple: "Une croyance fausse peut devenir vraie, simplement parce qu'on agit comme si elle l'était.", ex: "Un élève étiqueté faible, moins sollicité, qui finit par produire les résultats attendus de lui." },
      { id: 'tension-anomique', t: 'Tension anomique', year: '1938', simple: "Quand une société promet à tous un but qu'elle ne donne pas à tous les moyens d'atteindre.", ex: "La réussite matérielle érigée en norme là où les voies légitimes d'y accéder sont fermées." },
    ],
    oeuvres: [{ y: '1949', t: 'Éléments de théorie et de méthode sociologiques' }, { y: '1938', t: 'Social Structure and Anomie' }],
    citations: [{ t: "Une définition fausse d'une situation en engendre les conséquences qui la rendent vraie.", src: 'The Self-Fulfilling Prophecy, 1948' }],
    critiques: ["Reste dans le cadre fonctionnaliste qu'il critique.", "La notion de fonction latente est difficile à prouver empiriquement."],
    up: ['parsons', 'durkheim'], down: ['becker'], x: 470, y: 60,
  },
  bourdieu: {
    id: 'bourdieu', name: 'Pierre Bourdieu', initials: 'PB', dates: '1930–2002', nat: 'France', periode: 'XXᵉ siècle',
    courant: 'Structuralisme génétique',
    hook: "Il montre comment les goûts, l'école et le corps reconduisent l'ordre social.",
    resume: "Bourdieu explique la reproduction sociale sans complot : elle passe par des dispositions incorporées si tôt qu'elles semblent naturelles.",
    concepts: [
      { id: 'habitus', t: 'Habitus', year: '1972', simple: "Des manières de penser, de percevoir et d'agir incorporées par le milieu, qui agissent sans qu'on y pense.", ex: "Deux enfants de milieux différents n'ont ni le même rapport à la prise de parole en classe, ni le même sentiment d'y avoir droit." },
      { id: 'capital-culturel', t: 'Capital culturel', year: '1979', simple: "Un patrimoine non financier — diplômes, aisance verbale, familiarité avec la culture légitime — qui se transmet et rapporte.", ex: "Un dossier scolaire soutenu à la maison par des références que l'école valorise sans jamais les enseigner." },
      { id: 'champ', t: 'Champ', year: '1976', simple: "Un espace de jeu autonome, avec ses enjeux et sa monnaie de prestige propres.", ex: "Dans le champ artistique, le succès commercial peut coûter de la reconnaissance entre pairs." },
      { id: 'violence-symbolique', t: 'Violence symbolique', year: '1970', simple: "Une domination acceptée par ceux qui la subissent, parce qu'ils en partagent les critères.", ex: "Un élève qui explique son échec par son manque de capacités plutôt que par l'écart entre l'école et son milieu." },
      { id: 'capital-economique', t: 'Capital économique', year: '1979', simple: "La richesse directement convertible en argent — revenus, patrimoine, biens — que Bourdieu prend comme base avant d'y ajouter les autres capitaux.", ex: "Deux héritages transmis en une génération : un compte en banque d'un côté, un carnet d'adresses et des manières de l'autre." },
      { id: 'capital-social', t: 'Capital social', year: '1980', simple: "L'ensemble des relations durables qu'un agent peut mobiliser, et qui valent d'autant plus qu'elles sont entretenues.", ex: "Un poste pourvu avant même d'être publié, par la recommandation d'une relation qui a suffi à garantir." },
      { id: 'capital-symbolique', t: 'Capital symbolique', year: '1972', simple: "N'importe quel capital, une fois reconnu et perçu comme légitime — ce qui le rend méconnaissable comme rapport de force.", ex: "Une réputation d'expert qui vaut avis d'autorité, quelle que soit la solidité de l'argument avancé ce jour-là." },
      { id: 'position-sociale', t: 'Position sociale', year: '1979', simple: "La place qu'occupe un agent dans un espace défini par le volume et la nature de ses capitaux, relativement à toutes les autres places.", ex: "Deux salaires égaux qui n'occupent pas la même position, selon que l'un vient avec un titre et l'autre sans." },
    ],
    oeuvres: [{ y: '1970', t: 'La Reproduction (avec J.-C. Passeron)' }, { y: '1979', t: 'La Distinction' }, { y: '1980', t: 'Le Sens pratique' }, { y: '1993', t: 'La Misère du monde' }],
    citations: [{ t: "Le goût classe, et classe celui qui classe.", src: 'La Distinction, 1979' }, { t: "Le plus clair de notre action nous échappe, et pourtant elle a un sens.", src: "d'après Le Sens pratique, 1980" }],
    critiques: ["Un déterminisme jugé trop lourd : où reste la marge de manœuvre ?", "Boudon lui oppose des acteurs qui calculent leurs chances au lieu de subir leur habitus.", "Un vocabulaire dense, souvent reproché à l'entrée."],
    up: ['marx', 'weber', 'durkheim', 'francfort', 'elias'], down: ['boltanski'], x: 470, y: 210,
  },
  goffman: {
    id: 'goffman', name: 'Erving Goffman', initials: 'EG', dates: '1922–1982', nat: 'Canada / É.-U.', periode: 'XXᵉ siècle',
    courant: 'Interactionnisme',
    hook: "Il traite la vie quotidienne comme une scène de théâtre très sérieuse.",
    resume: "Goffman démontre qu'un simple échange de politesses est un travail minutieux pour sauver la face de chacun.",
    concepts: [
      { id: 'mise-en-scene-de-soi', t: 'Mise en scène de soi', year: '1959', simple: "En public, on joue un rôle sur une scène, avec des coulisses où l'on relâche la tenue.", ex: "Le ton d'un serveur en salle, puis en cuisine : deux personnes, un seul individu." },
      { id: 'stigmate', t: 'Stigmate', year: '1963', simple: "Un attribut qui déclasse celui qui le porte et le contraint à gérer l'information sur lui-même.", ex: "Un trou dans un CV que l'on apprend à raconter, contourner ou taire selon l'interlocuteur." },
      { id: 'cadre-de-l-experience', t: 'Cadre de l\'expérience', year: '1974', simple: "Chaque situation vient avec une clé de lecture implicite qui indique ce qui s'y passe vraiment.", ex: "La même bourrade est un jeu entre amis et une agression à l'arrêt de bus." },
    ],
    oeuvres: [{ y: '1959', t: 'La Mise en scène de la vie quotidienne' }, { y: '1961', t: 'Asiles' }, { y: '1963', t: 'Stigmate' }, { y: '1974', t: 'Les Cadres de l\'expérience' }],
    citations: [{ t: "Le monde est un mariage.", src: 'La Mise en scène de la vie quotidienne, 1959' }],
    critiques: ["Une focale micro qui laisse les inégalités structurelles hors champ.", "Des matériaux hétéroclites, difficiles à répliquer."],
    up: ['simmel', 'weber'], down: ['becker'], x: 470, y: 375,
  },
  becker: {
    id: 'becker', name: 'Howard S. Becker', initials: 'HB', dates: '1928–2023', nat: 'États-Unis', periode: 'XXᵉ–XXIᵉ',
    courant: 'École de Chicago, étiquetage',
    hook: "Il renverse la question : ce n'est pas l'acte qui fait le déviant, c'est la réaction.",
    resume: "Becker suit des musiciens de jazz et des fumeurs de cannabis pour montrer que la déviance est une carrière, apprise et étiquetée.",
    concepts: [
      { id: 'etiquetage', t: 'Étiquetage', year: '1963', simple: "Un comportement ne devient déviant que lorsqu'un groupe le désigne comme tel et sanctionne son auteur.", ex: "Le même geste toléré dans un milieu et poursuivi dans un autre, selon qui l'observe." },
      { id: 'carriere-deviante', t: 'Carrière déviante', year: '1963', simple: "On ne devient pas marginal d'un coup : par étapes, apprentissages et portes qui se ferment.", ex: "Une première sanction qui restreint les fréquentations, et rapproche de ceux qui sont déjà sanctionnés." },
      { id: 'entrepreneur-de-morale', t: 'Entrepreneur de morale', year: '1963', simple: "Il faut des militants du bien pour qu'une règle nouvelle existe — et des agents pour l'appliquer.", ex: "Une campagne qui transforme une pratique banale en problème public, puis en infraction." },
    ],
    oeuvres: [{ y: '1963', t: 'Outsiders' }, { y: '1982', t: 'Les Mondes de l\'art' }, { y: '1998', t: 'Les Ficelles du métier' }],
    citations: [{ t: "La déviance n'est pas une qualité de l'acte, mais la conséquence de la réaction des autres.", src: 'Outsiders, 1963' }],
    critiques: ["L'étiquetage explique la réaction, moins le passage à l'acte initial.", "Une sympathie pour les étiquetés qui a valu à Becker le reproche de parti pris."],
    up: ['goffman', 'merton'], down: [], x: 700, y: 375,
  },
  boudon: {
    id: 'boudon', name: 'Raymond Boudon', initials: 'RB', dates: '1934–2013', nat: 'France', periode: 'XXᵉ siècle',
    courant: 'Individualisme méthodologique',
    hook: "Le contre-modèle français de Bourdieu : des acteurs qui calculent, pas des habitus.",
    resume: "Boudon explique les inégalités scolaires par une succession de paris rationnels, faits sous des contraintes très inégales.",
    concepts: [
      { id: 'individualisme-methodologique', t: 'Individualisme méthodologique', year: '1979', simple: "Expliquer un phénomène collectif en repartant des raisons que les individus avaient d'agir ainsi.", ex: "Une file d'attente qui s'allonge parce que chacun, rationnellement, préfère attendre plutôt que changer de guichet." },
      { id: 'effets-pervers', t: 'Effets pervers', year: '1977', simple: "Des décisions individuellement sensées qui produisent un résultat collectif que personne ne voulait.", ex: "Tous les élèves visant le même diplôme : sa valeur sur le marché du travail baisse pour tout le monde." },
      { id: 'meritocratie', t: 'Méritocratie', year: '1973', simple: "L'idée qu'une société juste distribue les positions au mérite — et l'écart, mesurable, entre cette promesse et ce qu'elle produit.", ex: "Un concours ouvert à tous dont les lauréats viennent, année après année, des mêmes lycées et des mêmes quartiers." },
      { id: 'ressources-sociales', t: 'Ressources sociales', year: '1979', simple: "Les moyens — relations, informations, temps, argent — qu'un acteur peut mobiliser pour agir, inégalement répartis avant même que le jeu ne commence.", ex: "Deux candidats à un même poste, dont l'un sait par un contact quelles questions poser, l'autre pas." },
    ],
    oeuvres: [{ y: '1973', t: "L'Inégalité des chances" }, { y: '1977', t: 'Effets pervers et ordre social' }, { y: '1979', t: 'La Logique du social' }],
    citations: [{ t: "Les inégalités scolaires résultent moins d'un héritage culturel que d'une suite de décisions sous contrainte.", src: "d'après L'Inégalité des chances, 1973" }],
    critiques: ["Suppose une information et un calcul dont les acteurs disposent rarement.", "Laisse peu de place à l'incorporation précoce des dispositions."],
    up: ['weber'], down: [], x: 700, y: 210,
  },
  boltanski: {
    id: 'boltanski', name: 'Luc Boltanski', initials: 'LB', dates: '1940–', nat: 'France', periode: 'Contemporain',
    courant: 'Sociologie pragmatique',
    hook: "Après Bourdieu : rendre aux acteurs leur capacité de critique.",
    resume: "Boltanski déplace l'attention vers les disputes ordinaires, où les gens argumentent, justifient et dénoncent l'injustice.",
    concepts: [
      { id: 'regimes-de-justification', t: 'Régimes de justification', year: '1991', simple: "Dans un désaccord, on mobilise des principes de grandeur concurrents pour avoir raison.", ex: "Un conflit au travail où l'un invoque l'ancienneté, l'autre la performance mesurée : deux mondes, un seul bureau." },
      { id: 'nouvel-esprit-du-capitalisme', t: 'Nouvel esprit du capitalisme', year: '1999', simple: "Le capitalisme absorbe les critiques qu'on lui adresse et s'en fait une nouvelle légitimité.", ex: "L'autonomie réclamée contre la hiérarchie, revenue en management par projet et en responsabilisation individuelle." },
    ],
    oeuvres: [{ y: '1991', t: 'De la justification (avec L. Thévenot)' }, { y: '1999', t: 'Le Nouvel Esprit du capitalisme (avec È. Chiapello)' }],
    citations: [{ t: "Les acteurs sont capables de critique : la sociologie n'en a pas le monopole.", src: "d'après De la justification, 1991" }],
    critiques: ["En suivant les justifications, on risque de perdre de vue les rapports de force.", "Un appareil conceptuel jugé difficile à opérationnaliser."],
    up: ['bourdieu'], down: [], x: 700, y: 60,
  },
  tocqueville: {
    id: 'tocqueville', name: 'Alexis de Tocqueville', initials: 'AT', dates: '1805–1859', nat: 'France', periode: 'XIXᵉ siècle',
    courant: 'Sociologie politique comparée',
    hook: "Il va voir l'Amérique pour comprendre ce que l'égalité fait aux mœurs.",
    resume: "Tocqueville découvre que l'égalité des conditions transforme la famille, la religion et le rapport à l'autorité avant de toucher aux lois.",
    concepts: [
      { id: 'egalisation-des-conditions', t: 'Égalisation des conditions', year: '1835', simple: "Un mouvement de fond qui rapproche les statuts et rend toute différence plus insupportable.", ex: "Des écarts objectivement réduits vécus comme plus injustes qu'auparavant, parce que rien ne les justifie plus." },
      { id: 'tyrannie-de-la-majorite', t: 'Tyrannie de la majorité', year: '1840', simple: "En démocratie, la pression du plus grand nombre peut étouffer la voix minoritaire sans aucune violence.", ex: "Une opinion majoritaire si évidente localement que la contredire coûte socialement plus que légalement." },
    ],
    oeuvres: [{ y: '1835', t: 'De la démocratie en Amérique, I' }, { y: '1840', t: 'De la démocratie en Amérique, II' }, { y: '1856', t: "L'Ancien Régime et la Révolution" }],
    citations: [{ t: "Le despotisme qui menace les démocraties serait plus étendu et plus doux.", src: "d'après De la démocratie en Amérique, 1840" }],
    critiques: ["Une aristocratie nostalgique perce sous l'analyse.", "L'Amérique observée est celle des hommes blancs libres."],
    up: [], down: ['durkheim'], x: 30, y: 690,
  },
};

// Champs complémentaires : état civil séparé, ponts disciplinaires, bibliographie
// secondaire, portrait et influences extérieures au corpus.
//
// `portrait` — `kind: 'photo'` renvoie à src/assets/portraits/<file>.webp, résolu
// par src/data/portraits.js ; `kind: 'monogram'` assume le monogramme d'initiales
// faute d'image libre de droits. Aucune URL ici : les sources sont créditées dans
// docs/legal/licences-credits.md (l'audit lit tout https:// de src/ comme un hôte
// que le code contacterait).
//
// `horsCorpus` — les influences qui ne sont pas parmi les quinze fiches, donc
// absentes du graphe `up`/`down`. Texte libre, sans lien de navigation.
export const EXTRA = {
  comte: {
    prenom: 'Auguste', nom: 'Comte', disc: ['Philosophie des sciences — la sociologie naît comme couronnement de la hiérarchie des savoirs', 'Histoire — la loi des trois états est une périodisation avant d\'être une théorie'], biblio: ["A. Petit, Le Système d'Auguste Comte, Vrin, 2016", 'M. Bourdeau, Les Trois États, Cerf, 2006'],
    portrait: { kind: 'photo', file: 'comte', alt: "Auguste Comte, daguerréotype, vers 1849", credit: 'Daguerréotype de J. H. Hoffmeister, v. 1849 — Wikimedia Commons, domaine public' },
    horsCorpus: [
      "Henri de Saint-Simon — dont il fut le secrétaire, et dont il reprend le projet de réorganisation sociale avant de rompre",
      "Condorcet et Turgot — l'idée d'un progrès réglé de l'esprit humain, que la loi des trois états met en forme",
      "Joseph de Maistre et Bonald — les contre-révolutionnaires, pour la critique de l'individualisme et le besoin d'un ordre commun"
    ],
  },
  marx: {
    prenom: 'Karl', nom: 'Marx', disc: ['Économie politique — critique de Smith et Ricardo', 'Philosophie — héritage et renversement de Hegel', 'Histoire — le mode de production comme clé de périodisation'], biblio: ['G. Duménil & M. Löwy, Lire Marx, PUF, 2009', 'J. Bidet, Que faire du Capital ?, PUF, 2000'],
    portrait: { kind: 'photo', file: 'marx', alt: 'Karl Marx, photographie de 1875', credit: 'Photographie de John Jabez Edwin Mayall, 1875 (restaurée) — Wikimedia Commons, domaine public' },
    horsCorpus: [
      "Hegel — la dialectique, que Marx dit avoir remise « sur ses pieds »",
      "Ludwig Feuerbach — la religion lue comme projection humaine, modèle de la critique de l'idéologie",
      "Adam Smith et David Ricardo — l'économie politique anglaise, dont il tire puis retourne la valeur-travail",
      "Saint-Simon, Fourier, Proudhon — le socialisme français, repoussoir autant que source"
    ],
  },
  weber: {
    prenom: 'Max', nom: 'Weber', disc: ['Droit — sa formation initiale nourrit l\'analyse de la légalité', 'Histoire économique comparée', 'Sciences des religions — comparaison des éthiques économiques'], biblio: ['C. Colliot-Thélène, Max Weber et l\'histoire, PUF, 1990', 'P. Raynaud, Max Weber et les dilemmes de la raison moderne, PUF, 1987'],
    portrait: { kind: 'photo', file: 'weber', alt: 'Max Weber en 1894', credit: 'Photographe inconnu, 1894 — Wikimedia Commons, domaine public' },
    horsCorpus: [
      "Kant et le néokantisme de Rickert — la coupure entre sciences de la nature et sciences de la culture",
      "Wilhelm Dilthey — la compréhension (Verstehen) comme méthode propre aux sciences de l'esprit",
      "Nietzsche — la généalogie des valeurs et la méfiance envers les morales affichées",
      "L'école historique allemande d'économie (Roscher, Schmoller) — contre laquelle il forge l'idéal-type"
    ],
  },
  simmel: {
    prenom: 'Georg', nom: 'Simmel', disc: ['Philosophie — une esthétique de la modernité', 'Économie — la monnaie comme forme sociale', 'Géographie urbaine'], biblio: ['P. Watier, Georg Simmel sociologue, Circé, 2003', 'F. Léger, La Pensée de Georg Simmel, Kimé, 1989'],
    portrait: { kind: 'photo', file: 'simmel', alt: 'Georg Simmel, photographie vers 1901', credit: 'Photographie de Julius Cornelius Schaarwächter, v. 1901 — Wikimedia Commons, domaine public' },
    horsCorpus: [
      "Kant — la forme comme condition de l'expérience, transposée du sujet connaissant à la relation sociale",
      "Schopenhauer et Nietzsche — la vie et la valeur, objets de son dernier enseignement",
      "Goethe — le regard morphologique, qui cherche la forme derrière la variété des cas"
    ],
  },
  durkheim: {
    prenom: 'Émile', nom: 'Durkheim', disc: ['Statistique — l\'usage démographique fonde la preuve sociologique', 'Anthropologie — les formes religieuses australiennes', 'Droit — la solidarité lue dans les types de sanction'], biblio: ['P. Steiner, La Sociologie de Durkheim, La Découverte, 2011', 'S. Lukes, Émile Durkheim, sa vie, son œuvre, PUF, 1985'],
    portrait: { kind: 'photo', file: 'durkheim', alt: 'Émile Durkheim, photographie avant 1917', credit: 'Photographe inconnu, avant 1917 — Wikimedia Commons, domaine public' },
    horsCorpus: [
      "Charles Renouvier — le rationalisme moral néokantien, transmis à l'École normale",
      "Fustel de Coulanges — l'histoire des institutions religieuses antiques comme méthode",
      "Wilhelm Wundt — le laboratoire de Leipzig, visité en 1885, et l'idée d'une psychologie des peuples",
      "Herbert Spencer — l'évolutionnisme utilitariste, discuté pied à pied dans La Division du travail social"
    ],
  },
  francfort: {
    prenom: '—', nom: 'Institut für Sozialforschung', disc: ['Philosophie — dialectique hégélienne relue par Marx', 'Psychanalyse — Freud mobilisé contre la personnalité autoritaire', 'Esthétique et musicologie (Adorno)'], biblio: ['M. Jay, L\'Imagination dialectique, Payot, 1977', 'Y. Cusset & S. Haber, Habermas / Honneth, Ellipses, 2008'],
    portrait: { kind: 'monogram', alt: "Monogramme de l'École de Francfort", credit: "Aucun portrait : la fiche porte sur un collectif, pas sur une personne." },
    horsCorpus: [
      "Hegel — la dialectique, gardée comme méthode quand le sujet révolutionnaire fait défaut",
      "Sigmund Freud — la psychanalyse, mobilisée pour expliquer l'adhésion à la personnalité autoritaire",
      "Georg Lukács — la réification, chaînon entre l'aliénation de Marx et la critique de la culture",
      "Nietzsche — la critique de la raison et de la civilisation, reprise dans La Dialectique de la raison"
    ],
  },
  parsons: {
    prenom: 'Talcott', nom: 'Parsons', disc: ['Biologie — le vocabulaire systémique et fonctionnel', 'Économie — reprise de Marshall et Pareto', 'Psychanalyse — l\'intériorisation des normes'], biblio: ['F. Bourricaud, L\'Individualisme institutionnel, PUF, 1977', 'B. Valade, Introduction aux sciences sociales, PUF, 1996'],
    portrait: { kind: 'monogram', alt: 'Monogramme de Talcott Parsons', credit: "Photographies sous droits : aucune image libre disponible." },
    horsCorpus: [
      "Vilfredo Pareto — le système social pensé comme un équilibre entre forces",
      "Alfred Marshall — l'économie néoclassique, dont il discute les présupposés sur l'action",
      "Sigmund Freud — l'intériorisation des normes, qui explique comment le rôle tient de l'intérieur",
      "Malinowski et Radcliffe-Brown — le fonctionnalisme anthropologique rencontré à la London School of Economics"
    ],
  },
  elias: {
    prenom: 'Norbert', nom: 'Elias', disc: ['Histoire — cinq siècles de traités de civilité', 'Psychologie — la formation de l\'économie psychique', 'Science politique — monopole fiscal et monopole de la violence'], biblio: ['R. Chartier, préface à La Civilisation des mœurs, Pocket, 1973', 'N. Heinich, La Sociologie de Norbert Elias, La Découverte, 1997'],
    portrait: { kind: 'monogram', alt: 'Monogramme de Norbert Elias', credit: "Photographies sous droits : aucune image libre disponible." },
    horsCorpus: [
      "Sigmund Freud — l'économie psychique et le refoulement, replacés dans une histoire longue",
      "Karl Mannheim — dont il fut l'assistant à Francfort, et la sociologie de la connaissance",
      "Johan Huizinga — l'histoire des mœurs et des sensibilités comme objet légitime"
    ],
  },
  merton: {
    prenom: 'Robert King', nom: 'Merton', disc: ['Histoire des sciences — le fondateur de la sociologie des sciences', 'Statistique — méthodes d\'enquête avec Lazarsfeld', 'Criminologie'], biblio: ['P. Sztompka, Robert K. Merton, Macmillan, 1986', 'M. Cherkaoui, Naissance d\'une science sociale, Droz, 1998'],
    portrait: { kind: 'monogram', alt: 'Monogramme de Robert K. Merton', credit: "Photographies sous droits : aucune image libre disponible." },
    horsCorpus: [
      "Pitirim Sorokin — son directeur à Harvard, contre l'ambition systématique duquel il se règle",
      "Paul Lazarsfeld — le compagnonnage méthodologique de Columbia, qui ancre la théorie dans l'enquête",
      "George Sarton — l'histoire des sciences, matrice de sa sociologie des sciences"
    ],
  },
  bourdieu: {
    prenom: 'Pierre', nom: 'Bourdieu', disc: ['Anthropologie — le terrain kabyle est sa matrice', 'Linguistique — critique de Saussure et Austin', 'Histoire de l\'art et esthétique', 'Statistique — analyse des correspondances'], biblio: ['P. Mounier, Pierre Bourdieu, une introduction, Pocket, 2001', 'L. Pinto, Pierre Bourdieu et la théorie du monde social, Albin Michel, 1998', 'B. Lahire (dir.), Le Travail sociologique de Pierre Bourdieu, La Découverte, 1999'],
    portrait: { kind: 'monogram', alt: 'Monogramme de Pierre Bourdieu', credit: "Photographies sous droits : aucune image libre disponible." },
    horsCorpus: [
      "Claude Lévi-Strauss — le structuralisme, matrice de départ puis cible de la critique de la règle",
      "Maurice Merleau-Ponty — le corps et l'habitude incorporée, socle phénoménologique de l'habitus",
      "Ludwig Wittgenstein — suivre une règle sans l'avoir formulée",
      "Gaston Bachelard — la rupture épistémologique, érigée en discipline de métier"
    ],
  },
  goffman: {
    prenom: 'Erving', nom: 'Goffman', disc: ['Théâtre et dramaturgie — la métaphore centrale', 'Ethnologie — observation directe à Shetland', 'Linguistique — analyse de conversation'], biblio: ['Y. Winkin, Erving Goffman : les moments et leurs hommes, Seuil, 1988', 'D. Cefaï & L. Perreau (dir.), Erving Goffman et l\'ordre de l\'interaction, CURAPP, 2012'],
    portrait: { kind: 'monogram', alt: 'Monogramme d’Erving Goffman', credit: "Photographies sous droits : aucune image libre disponible." },
    horsCorpus: [
      "George Herbert Mead — le soi qui se construit dans le regard d'autrui",
      "W. Lloyd Warner — son directeur à Chicago, et l'ethnographie des communautés",
      "Kenneth Burke — la dramaturgie comme grille d'analyse de l'action"
    ],
  },
  becker: {
    prenom: 'Howard Saul', nom: 'Becker', disc: ['Musique — musicien de jazz avant d\'être sociologue', 'Criminologie — refondation par l\'étiquetage', 'Histoire de l\'art — les mondes de l\'art comme travail collectif'], biblio: ['A. Blanc & A. Pessin (dir.), L\'Art du terrain, L\'Harmattan, 2004', 'H. Peretz, Les Méthodes en sociologie : l\'observation, La Découverte, 2004'],
    portrait: { kind: 'monogram', alt: 'Monogramme de Howard S. Becker', credit: "Photographies sous droits : aucune image libre disponible." },
    horsCorpus: [
      "Everett C. Hughes — son maître à Chicago, d'où vient la notion de carrière appliquée au travail",
      "Herbert Blumer — l'interactionnisme symbolique et le refus des variables abstraites",
      "Robert E. Park — la première école de Chicago et son terrain urbain"
    ],
  },
  boudon: {
    prenom: 'Raymond', nom: 'Boudon', disc: ['Économie — théorie du choix rationnel', 'Mathématiques — modélisation formelle des effets d\'agrégation', 'Philosophie morale — les raisons ordinaires du juste'], biblio: ['M. Cherkaoui, Le Désenchantement du monde social, Bord de l\'eau, 2010', 'A. Bouvier, Raymond Boudon, La Découverte, 2011'],
    portrait: { kind: 'monogram', alt: 'Monogramme de Raymond Boudon', credit: "Photographies sous droits : aucune image libre disponible." },
    horsCorpus: [
      "Paul Lazarsfeld — l'analyse quantitative apprise à Columbia",
      "Karl Popper — l'individualisme méthodologique et l'explication par les raisons des acteurs",
      "Herbert Simon — la rationalité limitée, qui rend le calcul plausible sans le rendre parfait"
    ],
  },
  boltanski: {
    prenom: 'Luc', nom: 'Boltanski', disc: ['Philosophie morale — les grammaires du juste', 'Sciences de gestion — la littérature managériale comme corpus', 'Sciences politiques — critique et institutions'], biblio: ['B. Frère, Le Tournant de la théorie critique, Desclée de Brouwer, 2015', 'M. Nachi, Introduction à la sociologie pragmatique, Armand Colin, 2006'],
    portrait: { kind: 'monogram', alt: 'Monogramme de Luc Boltanski', credit: "Photographies sous droits : aucune image libre disponible." },
    horsCorpus: [
      "Paul Ricœur — l'herméneutique et la question du juste, contre une critique surplombante",
      "Harold Garfinkel et l'ethnométhodologie — les compétences ordinaires des acteurs prises au sérieux",
      "Michael Walzer — les sphères de justice, modèle des ordres de grandeur"
    ],
  },
  tocqueville: {
    prenom: 'Alexis', nom: 'de Tocqueville', disc: ['Science politique — le comparatisme institutionnel', 'Histoire — la Révolution relue par les continuités', 'Droit constitutionnel'], biblio: ['R. Aron, Les Étapes de la pensée sociologique, Gallimard, 1967', 'F. Furet, Penser la Révolution française, Gallimard, 1978'],
    portrait: { kind: 'photo', file: 'tocqueville', alt: 'Alexis de Tocqueville, portrait de 1850', credit: 'Portrait par Théodore Chassériau, 1850, château de Versailles — Wikimedia Commons, domaine public' },
    horsCorpus: [
      "Montesquieu — le comparatisme des régimes et l'attention aux mœurs plutôt qu'aux lois seules",
      "François Guizot — ses cours d'histoire de la civilisation en Europe, suivis à la Sorbonne",
      "Blaise Pascal — la lucidité sur l'inquiétude humaine, sensible dans les pages sur l'agitation démocratique",
      "Jean-Jacques Rousseau — l'égalité comme problème politique autant que comme fait social"
    ],
  },
};

export const EXTRA_EDGES = [['weber', 'bourdieu', 0], ['durkheim', 'merton', 0], ['merton', 'becker', 1], ['elias', 'bourdieu', 0], ['francfort', 'bourdieu', 0], ['weber', 'boudon', 0]];

