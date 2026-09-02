/**
 * Couche éditoriale des domaines.
 *
 * `authors.js` porte les quatorze domaines extraits du prototype. Ce fichier
 * ajoute les dix-huit autres, range les trente-deux en familles, leur donne
 * un paragraphe de contexte (`detail`) et leurs inspirateurs hors corpus.
 *
 * Règles de rédaction :
 * - Un domaine nomme d'abord les fiches du corpus qui le travaillent (`a`,
 *   cliquables), puis les fondateurs qui n'ont pas de fiche (`inspirateurs`,
 *   texte libre, non cliquables — même convention que les influences hors
 *   corpus d'une fiche auteur). Beaucoup de ces domaines n'ont aucun
 *   fondateur parmi les quinze : les nommer sans fiche vaut mieux que de les
 *   taire ou de leur en inventer une.
 * - `detail` ne cite que des auteurs déjà déclarés dans `a` (corpus) ou dans
 *   `inspirateurs` de ce même domaine : jamais un nom qui n'apparaîtrait nulle
 *   part ailleurs sur l'écran.
 */

/** Familles d'affichage. L'ordre est celui de l'accueil. */
export const FAMILIES = [
  { id: 'fondations', t: 'Fondations', d: "Ce que la discipline se demande avant de choisir un objet." },
  { id: 'institutions', t: 'Institutions', d: "Les cadres durables qui encadrent une vie : famille, école, État, Église." },
  { id: 'economie', t: 'Travail et économie', d: "Produire, échanger, consommer — et ce que ces gestes doivent à la société." },
  { id: 'inegalites', t: 'Inégalités et identités', d: "Les positions héritées, assignées ou conquises." },
  { id: 'normes', t: 'Normes et conflits', d: "Ce qu'une société interdit, punit, ou finit par accepter sous la pression." },
  { id: 'cultures', t: 'Cultures et médias', d: "Ce qui se regarde, s'écoute, se partage — et ce que cela classe." },
  { id: 'corps', t: 'Corps, santé et émotions', d: "Le plus intime est encore réglé du dehors." },
  { id: 'territoires', t: 'Territoires et environnement', d: "Où l'on vit, comment on s'y déplace, ce qu'on fait du milieu." },
];

/**
 * Les dix-huit domaines ajoutés à la liste d'origine. Même forme que `DOMAINS`
 * dans `authors.js` : identifiant, titre, phrase de présentation, auteurs du
 * corpus.
 */
export const DOMAINS_ADDED = [
  {
    id: 'generale',
    t: 'Générale',
    nom: 'Sociologie générale',
    d: "Avant de découper la société en objets, savoir ce qui la tient ensemble.",
    a: ['comte', 'durkheim', 'weber', 'giddens', 'schutz', 'luhmann'],
  },
  {
    id: 'economique',
    t: 'Économique',
    nom: 'Sociologie économique',
    d: "Le marché n'est pas un état de nature : c'est une institution, avec ses règles et ses croyances.",
    a: ['weber', 'marx', 'boltanski', 'castells'],
  },
  {
    id: 'professions',
    t: 'Professions',
    nom: 'Sociologie des professions',
    d: "Un métier devient une profession le jour où il obtient le droit de dire qui peut l'exercer.",
    a: ['weber', 'becker', 'boltanski'],
  },
  {
    id: 'consommation',
    t: 'Consommation',
    nom: 'Sociologie de la consommation',
    d: "Acheter, c'est se situer : le goût trie ceux qui l'affichent.",
    a: ['bourdieu', 'simmel', 'francfort', 'bauman'],
  },
  {
    id: 'genre',
    t: 'Genre',
    nom: 'Sociologie du genre',
    d: "Ce que le masculin et le féminin doivent à la nature, et ce qu'ils doivent à l'ordre social.",
    a: ['bourdieu', 'goffman', 'fraser', 'butler', 'haraway'],
  },
  {
    id: 'jeunesse',
    t: 'Jeunesse',
    nom: 'Sociologie de la jeunesse',
    d: "« La jeunesse n'est qu'un mot » — reste à expliquer pourquoi ce mot classe si bien.",
    a: ['bourdieu', 'becker'],
  },
  {
    id: 'vieillissement',
    t: 'Vieillissement',
    nom: 'Sociologie du vieillissement',
    d: "Vieillir est un fait biologique ; être vieux est une position que la société assigne.",
    a: ['elias', 'goffman'],
  },
  {
    id: 'immigration',
    t: 'Immigration',
    nom: "Sociologie de l'immigration",
    d: "Émigrer et immigrer sont un seul mouvement, que deux sociétés racontent différemment.",
    a: ['simmel', 'elias', 'bauman'],
  },
  {
    id: 'crime',
    t: 'Crime',
    nom: 'Sociologie du crime',
    d: "Durkheim tient le crime pour un fait normal, et même utile : reste à comprendre pourquoi.",
    a: ['durkheim', 'merton', 'becker', 'foucault'],
  },
  {
    id: 'mouvements-sociaux',
    t: 'Mouvements sociaux',
    nom: 'Sociologie des mouvements sociaux',
    d: "Se révolter ne suffit pas : il faut des ressources, des mots et un moment favorable.",
    a: ['marx', 'tocqueville', 'boltanski', 'castells', 'fraser'],
  },
  {
    id: 'medias',
    t: 'Médias',
    nom: 'Sociologie des médias',
    d: "Ce que les médias font aux publics, et ce que les publics font des médias.",
    a: ['francfort', 'bourdieu', 'merton', 'luhmann'],
  },
  {
    id: 'numerique',
    t: 'Numérique',
    nom: 'Sociologie du numérique',
    d: "Les plateformes ne sont pas un décor : elles redistribuent l'attention, le travail et la surveillance.",
    a: ['goffman', 'francfort', 'castells'],
  },
  {
    id: 'loisirs',
    t: 'Loisirs',
    nom: 'Sociologie des loisirs',
    d: "Le temps libre n'est pas du temps vide : il s'organise, et il distingue.",
    a: ['becker', 'elias', 'bourdieu'],
  },
  {
    id: 'sante',
    t: 'Santé',
    nom: 'Sociologie de la santé',
    d: "La maladie n'est pas qu'un fait biologique : elle se déclare, se classe et s'endure socialement.",
    a: ['parsons', 'goffman'],
  },
  {
    id: 'emotions',
    t: 'Émotions',
    nom: 'Sociologie des émotions',
    d: "Rougir, se contenir, s'émouvoir au bon moment : les émotions ont une grammaire sociale.",
    a: ['elias', 'goffman', 'simmel'],
  },
  {
    id: 'rurale',
    t: 'Rurale',
    nom: 'Sociologie rurale',
    d: "Le village n'est pas une ville en plus petit : d'autres rythmes, d'autres liens, d'autres silences.",
    a: ['bourdieu'],
  },
  {
    id: 'mobilites',
    t: 'Mobilités',
    nom: 'Sociologie des mobilités',
    d: "Se déplacer n'est jamais neutre : les vitesses et les trajets ont leurs privilégiés.",
    a: ['simmel', 'giddens', 'beck'],
  },
  {
    id: 'environnement',
    t: 'Environnement',
    nom: "Sociologie de l'environnement",
    d: "La nature comme problème social : qui subit les dégâts, qui décide des risques.",
    a: ['francfort', 'boltanski', 'beck', 'haraway'],
  },
];

/**
 * Famille d'appartenance et inspirateurs hors corpus, pour les trente-deux
 * domaines. Un inspirateur s'écrit « Nom — ce qu'on lui doit ici ».
 */
export const DOMAIN_EXTRA = {
  /* — Fondations — */
  generale: {
    famille: 'fondations',
    detail:
      "Comte fonde le mot et le projet ; avant que Durkheim et Weber ne lui donnent chacun sa méthode, la discipline devait d'abord prouver qu'un fait social s'explique par d'autres faits sociaux, non par la psychologie individuelle ou la providence. La sociologie générale porte cette question fondatrice — qu'est-ce qui fait tenir une société ensemble, malgré la diversité des intérêts et des croyances qui la traversent ? Elle est aussi le terrain de la grande querelle de méthode entre expliquer de l'extérieur, comme une chose, et comprendre de l'intérieur, par le sens que les acteurs y mettent — une querelle que Giddens tentera plus tard de dépasser plutôt que de trancher, en montrant que structure et action se fabriquent l'une l'autre. Luhmann répond autrement à la même question fondatrice : ce qui tient une société ensemble n'est ni un système de valeurs partagées ni le sens que lui donnent ses membres, mais la seule continuité des communications qui s'enchaînent, indépendamment de qui les porte.",
    inspirateurs: [
      "Herbert Spencer — la société lue comme un organisme qui se différencie en grandissant",
      "Raymond Aron — la mise en ordre du canon, et l'idée que la discipline se raconte par ses querelles",
    ],
  },
  methode: {
    nom: 'Méthode sociologique',
    famille: 'fondations',
    detail:
      "Deux gestes fondateurs s'y opposent depuis Durkheim et Weber : traiter le social comme un objet extérieur, observable et mesurable, ou comme un tissu de significations qu'il faut comprendre depuis l'intérieur des acteurs. De ce désaccord dépendent des choix très concrets — enquête statistique ou entretien, distance ou immersion, explication causale ou interprétation du sens. La méthode n'est donc jamais un simple outil neutre : elle engage une théorie de ce qu'est le social. Schutz pousse ce second geste jusqu'à son fondement : avant toute méthode savante, il y a le sens commun des acteurs eux-mêmes, que la sociologie doit prendre comme son matériau premier plutôt que comme un obstacle à corriger.",
    inspirateurs: [
      "Jean-Claude Passeron — le raisonnement sociologique, ni démonstration logique ni récit libre",
      "Aaron Cicourel — la mesure en question : ce que les catégories du questionnaire fabriquent",
    ],
  },
  interactions: {
    nom: 'Sociologie des interactions',
    famille: 'fondations',
    detail:
      "Goffman et Simmel partagent une conviction : l'ordre social ne se décide pas seulement en haut, dans les institutions, il se joue aussi en bas, dans chaque échange de regards, chaque salutation, chaque silence gênant. Une file d'attente, un ascenseur, une salle d'attente sont déjà des scènes sociales complètes, avec leurs règles tacites et leurs sanctions immédiates. Étudier les interactions, c'est parier que le détail le plus microscopique révèle une grammaire aussi contraignante que la loi.",
    inspirateurs: [
      "George Herbert Mead — le soi comme produit du regard d'autrui, non comme point de départ",
      "Herbert Blumer — l'interactionnisme symbolique, et le nom qui lui reste",
      "Harold Garfinkel — l'ethnométhodologie : les règles se voient mieux quand on les rompt",
    ],
  },

  /* — Institutions — */
  famille: {
    nom: 'Sociologie de la famille',
    famille: 'institutions',
    detail:
      "Durkheim y voit une solidarité qui s'adapte aux sociétés modernes, à mesure que la famille se resserre sans perdre sa fonction. Bourdieu, lui, y voit un mécanisme plus discret de reproduction sociale, où l'héritage culturel compte autant que l'héritage matériel. Tocqueville, enfin, en fait un laboratoire de l'égalisation des conditions : l'autorité du père y recule à mesure que la démocratie progresse.",
    inspirateurs: [
      "Frédéric Le Play — les monographies de familles ouvrières, l'enquête avant la théorie",
      "Philippe Ariès — l'enfance comme invention historique, pas comme évidence de nature",
      "François de Singly — la famille contemporaine, où le lien se justifie au lieu d'aller de soi",
    ],
  },
  education: {
    nom: "Sociologie de l'éducation",
    famille: 'institutions',
    detail:
      "L'école promet de corriger les inégalités de naissance par le mérite scolaire ; Bourdieu montre qu'elle les reconduit plutôt, en récompensant un capital culturel que toutes les familles ne transmettent pas également. Durkheim, avant lui, en avait fait l'institution qui fabrique la solidarité d'une société en formant ses membres à des valeurs communes. Boudon ajoute une pièce au débat : même à ressources égales, des familles différentes évaluent différemment le risque et le coût des études, ce qui suffit à produire des trajectoires scolaires très inégales.",
    inspirateurs: [
      "Basil Bernstein — les codes linguistiques : l'école demande une langue qu'elle n'enseigne pas",
      "Christian Baudelot et Roger Establet — les deux réseaux de scolarisation derrière l'école unique",
      "Ivan Illich — la déscolarisation, thèse minoritaire mais utile pour dénaturaliser l'institution",
    ],
  },
  religion: {
    nom: 'Sociologie de la religion',
    famille: 'institutions',
    detail:
      "Durkheim traite le religieux comme un fait social au même titre qu'un autre : le sacré est ce qu'une collectivité se donne pour se représenter elle-même. Weber, lui, s'intéresse à ce que la religion produit en retour — comment l'éthique protestante, en valorisant le travail et l'épargne, a involontairement fourni un terreau à l'esprit du capitalisme. Entre ces deux lectures, la religion apparaît moins comme une affaire de croyance individuelle que comme une force qui organise, sans le vouloir, l'économie et le lien social.",
    inspirateurs: [
      "Ernst Troeltsch — la distinction de l'Église et de la secte, reprise par toute la sociologie religieuse",
      "Marcel Mauss — le sacrifice et le don, où le sacré s'échange comme le reste",
      "Peter Berger — le dais sacré, puis sa révision : la sécularisation n'était pas le destin annoncé",
    ],
  },
  politique: {
    nom: 'Sociologie politique',
    famille: 'institutions',
    detail:
      "Weber pose la question la plus simple et la plus difficile : pourquoi obéit-on ? Sa typologie de la domination — traditionnelle, charismatique, légale-rationnelle — reste l'outil de référence pour comprendre pourquoi un ordre est suivi sans qu'il faille sans cesse recourir à la force. Marx déplace la question vers les intérêts de classe qu'un pouvoir politique sert ou dissimule, et Tocqueville vers le risque inverse — qu'une majorité démocratique, légitime par construction, écrase les minorités en son nom. Habermas, plus récemment, déplace la légitimité de la seule croyance des dominés vers la discussion elle-même : une norme n'est pleinement légitime que si elle pourrait recueillir l'accord de tous ceux qu'elle engage. Foucault, enfin, renverse la question de départ : plutôt que de chercher qui détient le pouvoir et pourquoi on lui obéit, il demande comment le pouvoir s'exerce concrètement, dans des techniques diffuses bien en deçà de l'État. Fraser ajoute une question que la discussion habermassienne laisse ouverte : qui a seulement le droit d'y participer, et selon quelles frontières se décide, au préalable, la communauté politique appelée à trancher.",
    inspirateurs: [
      "Robert Michels — la loi d'airain de l'oligarchie : même un parti démocratique se donne des chefs",
      "Vilfredo Pareto — la circulation des élites, qui remplace une domination par une autre",
      "Maurice Duverger — les partis politiques comme organisations, avec leur logique propre",
    ],
  },
  organisations: {
    nom: 'Sociologie des organisations',
    famille: 'institutions',
    detail:
      "Weber décrit la bureaucratie comme l'aboutissement logique de la rationalisation moderne — des règles impersonnelles plutôt que des faveurs, une compétence plutôt qu'un statut hérité. Merton retourne l'outil contre son inventeur : appliquées à la lettre, ces mêmes règles produisent un formalisme rigide, où respecter la procédure devient plus important que remplir la mission. Parsons, enfin, place l'organisation dans un système plus large de rôles et d'attentes, où chacun sait ce qu'on attend de lui sans que cela soit jamais entièrement écrit.",
    inspirateurs: [
      "Michel Crozier — l'acteur et le système : la zone d'incertitude est la vraie monnaie du pouvoir",
      "Herbert Simon — la rationalité limitée, qui remplace l'optimum par le satisfaisant",
      "James March — la décision comme rencontre d'occasions plus que comme calcul",
    ],
  },
  professions: {
    famille: 'institutions',
    detail:
      "Toutes les activités rémunérées ne deviennent pas des professions au sens fort : il y faut un savoir spécialisé, une formation contrôlée, et surtout le droit de dire qui a la légitimité de l'exercer. Weber fournit le cadre — la profession comme une forme de domination fondée sur la compétence reconnue, non sur la tradition ou la force. Boltanski montre que ce statut se négocie et se justifie sans cesse, à mesure que de nouveaux métiers réclament la reconnaissance que d'autres défendent jalousement.",
    inspirateurs: [
      "Everett Hughes — le sale boulot, et la licence que la profession se fait reconnaître",
      "Eliot Freidson — l'autonomie professionnelle, obtenue et défendue plus que méritée",
      "Andrew Abbott — le système des professions : chacune vit des frontières qu'elle dispute aux autres",
    ],
  },

  /* — Travail et économie — */
  travail: {
    nom: 'Sociologie du travail',
    famille: 'economie',
    detail:
      "Durkheim voit dans la division du travail la source d'une solidarité nouvelle : on tient ensemble parce qu'on est devenus différents et interdépendants, non plus semblables. Marx y voit au contraire le lieu d'une aliénation, quand le geste productif cesse d'appartenir à celui qui le fait. Becker ajoute une dimension trop souvent oubliée : un travail n'est pas seulement une tâche, c'est aussi une carrière, faite d'apprentissages, de collègues et d'une identité qui s'y construit. Castel, enfin, montre que le salariat stable a fini par tenir lieu de statut social à part entière, une fois chargé des droits sociaux qui s'y sont accumulés au XXᵉ siècle.",
    inspirateurs: [
      "Georges Friedmann — le travail en miettes : la parcellisation vue de l'atelier",
      "Harry Braverman — la déqualification comme projet, non comme effet secondaire de la technique",
      "Donald Roy — l'observation directe des jeux d'atelier, qui rendent le temps tenable",
    ],
  },
  economique: {
    famille: 'economie',
    detail:
      "Le marché a longtemps été pensé comme une mécanique naturelle, régie par l'offre et la demande ; la sociologie économique y voit au contraire une construction sociale, tenue par des règles de droit, des conventions et des croyances partagées. Weber montre que le calcul économique lui-même a une histoire — celle d'une rationalisation qui gagne peu à peu toutes les sphères de la vie. Boltanski, plus récemment, décrit comment le capitalisme absorbe les critiques qu'on lui adresse et s'en fait une nouvelle légitimité, plutôt que de s'effondrer sous leur poids.",
    inspirateurs: [
      "Karl Polanyi — l'encastrement : le marché autorégulateur est une construction politique",
      "Mark Granovetter — les liens faibles, et l'économie tenue par des réseaux de relations",
      "Viviana Zelizer — l'argent n'est pas neutre : on le marque, on le range, on le destine",
    ],
  },
  consommation: {
    famille: 'economie',
    detail:
      "Simmel remarque le premier que la mode n'est pas futile : elle permet à la fois d'imiter un groupe et de s'en distinguer, dans un même geste. Bourdieu systématise l'intuition — les goûts ne sont jamais innocents, ils classent celui qui les affiche autant qu'ils décrivent l'objet choisi. L'École de Francfort ajoute une inquiétude : dans une société où la culture se produit en série, consommer et se distraire peuvent aussi devenir des manières de ne plus rien questionner.",
    inspirateurs: [
      "Thorstein Veblen — la consommation ostentatoire, dépense faite pour être vue",
      "Jean Baudrillard — les objets comme système de signes avant d'être des usages",
      "Mary Douglas — les biens comme langage : consommer, c'est classer le monde et les siens",
    ],
  },

  /* — Inégalités et identités — */
  classes: {
    nom: 'Sociologie des classes sociales',
    famille: 'inegalites',
    detail:
      "Marx et Weber ne mesurent pas la même chose sous le mot « classe » : la place dans les rapports de production pour l'un, un faisceau de position économique, de statut social et de pouvoir politique pour l'autre. Bourdieu ajoute un troisième axe, moins visible — le capital culturel, cette aisance avec la culture légitime qui se transmet sans jamais s'enseigner vraiment. Ensemble, ces trois lectures expliquent pourquoi la position sociale continue de peser lourd, bien après la disparition des ordres et des castes.",
    inspirateurs: [
      "Maurice Halbwachs — les niveaux de vie ouvriers, la classe saisie par les budgets",
      "Nicos Poulantzas — les classes définies par la place dans les rapports de production, non par le revenu",
      "Erik Olin Wright — les positions contradictoires : le cadre commande et obéit à la fois",
    ],
  },
  inegalites: {
    nom: 'Sociologie de la mobilité sociale',
    famille: 'inegalites',
    detail:
      "Boudon montre qu'un système peut être juste dans ses règles et pourtant produire des trajectoires très inégales, simplement parce que chaque famille évalue différemment le risque des études. Bourdieu insiste sur ce que les tables de mobilité ne disent pas : la reconversion d'un capital économique en capital culturel, qui permet à une position de se maintenir même quand elle change de forme. Merton, enfin, rappelle qu'une société qui promet la réussite à tous sans donner à tous les mêmes moyens de l'atteindre installe une tension durable entre ce qu'elle affiche et ce qu'elle permet.",
    inspirateurs: [
      "Pitirim Sorokin — la mobilité sociale comme objet, dès 1927",
      "John Goldthorpe — les tables de mobilité, et la classe de service qui se reproduit le mieux",
      "Claude Thélot — « Tel père, tel fils ? », la mesure française de l'héritage des positions",
    ],
  },
  genre: {
    famille: 'inegalites',
    detail:
      "Bourdieu décrit une domination masculine si bien incorporée qu'elle ne se vit pas comme une contrainte, y compris par celles qui la subissent. Goffman montre, à une autre échelle, comment le masculin et le féminin se jouent et se rejouent dans chaque interaction, par des gestes et des postures apprises plus que décidées. Fraser refuse d'y voir une seule sorte de tort : l'injustice de genre est pour elle à la fois économique — l'écart de salaire, le travail domestique non rémunéré — et culturelle — le mépris ou l'invisibilisation —, si bien qu'aucun remède, redistributif seul ou symbolique seul, ne suffit à la réparer entièrement. Butler va plus loin encore : le genre lui-même n'est pas une propriété qu'on aurait, mais une performance qu'on répète sous contrainte, ce qui déplace la question de savoir ce qu'on est vers celle de savoir ce que la répétition d'une norme peut, ou non, laisser espérer d'autre. Le domaine interroge ainsi ce que la biologie explique réellement des différences observées, et ce que l'ordre social y ajoute — ou y invente.",
    inspirateurs: [
      "Ann Oakley — la distinction du sexe et du genre, qui ouvre le domaine",
      "Christine Delphy — le travail domestique comme rapport de production, non comme don d'amour",
    ],
  },
  jeunesse: {
    famille: 'inegalites',
    detail:
      "Bourdieu réduit la formule à sa juste portée : « la jeunesse n'est qu'un mot », une catégorie sociale plus qu'un fait naturel, dont les frontières et la durée varient selon le milieu. Becker, de son côté, s'intéresse à ce qui se transmet entre pairs à cet âge — des goûts, des pratiques, parfois des carrières déviantes, qui échappent largement au contrôle des institutions. Entre l'allongement des études et l'entrée toujours plus tardive dans l'emploi stable, la jeunesse est aussi devenue une étape qui s'étire, différemment selon qu'on hérite ou non des moyens de l'attendre.",
    inspirateurs: [
      "Karl Mannheim — le problème des générations : une classe d'âge n'est pas une génération",
      "Paul Willis — les gars d'atelier qui refusent l'école et se ferment eux-mêmes les portes",
      "Olivier Galland — l'entrée dans la vie adulte, allongée et désordonnée",
    ],
  },
  vieillissement: {
    famille: 'inegalites',
    detail:
      "Elias rappelle qu'aucun individu n'existe seul : la vieillesse se vit dans un tissu de dépendances réciproques, qui se resserre ou se distend selon que la société organise ou non la solidarité entre générations. Goffman ajoute une dimension plus discrète — la vieillesse comme un stigmate qu'il faut gérer en public, entre le déni et l'acceptation. Le domaine interroge ainsi ce qui, dans le grand âge, relève du corps qui décline et ce qui relève d'une position sociale que la collectivité assigne, souvent bien avant que le corps ne l'impose.",
    inspirateurs: [
      "Simone de Beauvoir — « La Vieillesse » : l'âge comme condition faite, non comme déclin naturel",
      "Peter Townsend — la dépendance structurée, produite par les institutions censées la traiter",
      "Anne-Marie Guillemard — la retraite comme construction sociale et politique",
    ],
  },
  immigration: {
    famille: 'inegalites',
    detail:
      "Simmel, avec sa figure de l'étranger, pose l'intuition centrale : migrer, ce n'est pas seulement traverser une frontière, c'est occuper une position sociale particulière, ni tout à fait dedans ni tout à fait dehors. Elias montre comment cette position se stabilise ou se transforme selon les configurations de pouvoir entre groupes établis et nouveaux arrivants. Le domaine touche autant à l'intégration économique et scolaire qu'aux discriminations qui la freinent, et à ce qu'un pays d'arrivée doit, sans toujours le reconnaître, à ceux qui y sont venus.",
    inspirateurs: [
      "William Thomas et Florian Znaniecki — « Le Paysan polonais », l'enquête fondatrice par les lettres",
      "Abdelmalek Sayad — la double absence : absent de là-bas, jamais tout à fait présent ici",
      "Alejandro Portes — les enclaves ethniques, ressource autant qu'assignation",
    ],
  },

  /* — Normes et conflits — */
  deviance: {
    nom: 'Sociologie de la déviance',
    famille: 'normes',
    detail:
      "Becker déplace la question : la déviance n'est pas une propriété de l'acte, elle naît de la réaction qu'il provoque et de l'étiquette qu'on lui pose. Merton, de son côté, l'explique par une tension entre les buts qu'une société valorise et les moyens légitimes, inégalement distribués, d'y parvenir. Goffman ajoute la question du stigmate : une fois l'étiquette posée, il faut la gérer au quotidien, en public, bien après que l'acte qui l'a déclenchée soit oublié.",
    inspirateurs: [
      "Edwin Lemert — la déviance secondaire : c'est la réaction qui installe la carrière",
      "David Matza — la dérive, contre l'idée d'un déviant durablement différent",
      "Kai Erikson — la communauté qui a besoin de ses déviants pour tracer ses frontières",
    ],
  },
  crime: {
    famille: 'normes',
    detail:
      "Durkheim ouvre le domaine par un paradoxe qui a fait date : le crime est un fait normal, présent dans toute société, et même utile — il rappelle les limites que la collectivité s'est fixées. Merton en explique la fréquence par une tension anomique : promettre à tous la réussite sans donner à tous les moyens légitimes de l'atteindre pousse certains vers des moyens illégitimes. Becker referme la boucle en rappelant que la loi elle-même est un produit social, porté par des groupes qui ont intérêt à faire reconnaître certains actes comme crimes plutôt que d'autres. Foucault déplace enfin la question de l'acte vers la peine : la prison moderne ne punit pas seulement, elle dresse un corps docile selon des techniques précises, et son échec apparent — la récidive — sert peut-être la fonction qu'on ne lui prête jamais.",
    inspirateurs: [
      "Cesare Lombroso — le criminel-né, thèse abandonnée mais fondatrice par contraste",
      "Edwin Sutherland — le crime en col blanc, qui déplace la question loin des quartiers pauvres",
      "Travis Hirschi — le lien social : la question n'est pas pourquoi on transgresse, mais pourquoi on s'abstient",
    ],
  },
  'mouvements-sociaux': {
    famille: 'normes',
    detail:
      "Se révolter ne suffit jamais : Tocqueville notait déjà qu'une société se soulève rarement au pire moment de sa condition, mais souvent quand une amélioration récente rend l'injustice restante plus insupportable. Marx fournit le moteur de classe — des intérêts communs, une conscience qui se forme, un rapport de force qui se cherche. Boltanski, plus contemporain, s'intéresse à la manière dont les acteurs eux-mêmes justifient leur cause, mobilisent des principes de grandeur concurrents, et voient parfois leur critique absorbée par ce qu'elle combattait.",
    inspirateurs: [
      "Charles Tilly — les répertoires d'action, qui changent lentement et se transmettent",
      "Alain Touraine — le mouvement social comme conflit central d'un type de société",
      "Doug McAdam — les opportunités politiques : le moment compte autant que la colère",
    ],
  },

  /* — Cultures et médias — */
  culture: {
    nom: 'Sociologie de la culture',
    famille: 'cultures',
    detail:
      "Simmel note que la forme d'un échange culturel compte souvent plus que son contenu : ce qui circule importe moins que la manière dont cela circule, et entre qui. Bourdieu en tire un système complet — la culture légitime se transmet et se reconnaît entre initiés, et sert autant à s'exprimer qu'à se distinguer de ceux qui n'en ont pas les codes. Le domaine touche autant aux productions savantes qu'aux cultures populaires, et à la frontière — toujours disputée — entre les deux.",
    inspirateurs: [
      "Raymond Williams — la culture est ordinaire, pas seulement ce qui se conserve au musée",
      "Stuart Hall — encodage et décodage : un message reçu n'est pas le message émis",
      "Michel de Certeau — les arts de faire, ces usages qui détournent ce qu'on leur impose",
    ],
  },
  medias: {
    famille: 'cultures',
    detail:
      "L'École de Francfort ouvre le débat avec l'industrie culturelle : des contenus produits en série, pensés pour vendre du consentement plus que pour informer ou émanciper. Bourdieu prolonge l'inquiétude du côté du champ journalistique, pris entre logique commerciale et exigence d'indépendance. Merton, plus mesuré, rappelle qu'un média a toujours des effets qu'il n'affiche pas — ses fonctions latentes comptent parfois plus que sa mission déclarée. Luhmann déplace entièrement la question : les médias de masse ne sont, pour lui, ni un instrument de manipulation ni un simple canal, mais un sous-système autopoïétique de plus, qui décide seul de ce qui compte comme information selon son propre code — nouveau ou déjà connu — sans jamais avoir besoin d'être vrai pour continuer de fonctionner.",
    inspirateurs: [
      "Paul Lazarsfeld — l'influence en deux étapes : les médias passent par des relais humains",
      "Elihu Katz — les usages et gratifications, le public actif plutôt que la cible",
      "Marshall McLuhan — le médium comme message, formule discutée et jamais évacuée",
    ],
  },
  numerique: {
    famille: 'cultures',
    detail:
      "Les plateformes ne sont pas un simple décor technique : elles redistribuent l'attention, organisent un travail souvent invisible, et rendent possible une surveillance d'une échelle inédite. Goffman, sans avoir connu les réseaux sociaux, en a pourtant fourni le vocabulaire — la mise en scène de soi, la façade entretenue pour un public, désormais permanente et mesurée en likes. L'École de Francfort, à sa manière, avait anticipé le problème : une industrie qui produit de l'attention à grande échelle a toujours intérêt à la capter plus qu'à la libérer.",
    inspirateurs: [
      "Manuel Castells — la société en réseaux, où le flux compte plus que le lieu",
      "Dominique Cardon — les algorithmes comme choix éditoriaux qui ne disent pas leur nom",
      "Shoshana Zuboff — le capitalisme de surveillance : le comportement devenu matière première",
    ],
  },
  loisirs: {
    famille: 'cultures',
    detail:
      "Becker montre que le temps libre est aussi un temps d'apprentissage : des goûts, des techniques, parfois des carrières entières, se construisent en dehors du travail rémunéré. Elias, avec Eric Dunning, étudie le sport comme une quête maîtrisée d'excitation — un des rares espaces où une société autorise, sous contrôle, ce qu'elle interdit ailleurs. Bourdieu ajoute que le loisir n'échappe pas à la logique de distinction : le choix d'un sport ou d'une pratique culturelle classe son pratiquant autant qu'un vêtement ou un livre.",
    inspirateurs: [
      "Joffre Dumazedier — le loisir comme temps social à part entière",
      "Eric Dunning — le sport comme quête maîtrisée d'excitation, avec Elias",
      "Robert Stebbins — le loisir sérieux, qui exige autant qu'un métier",
    ],
  },

  /* — Corps, santé et émotions — */
  corps: {
    nom: 'Sociologie du corps',
    famille: 'corps',
    detail:
      "Elias montre que la maîtrise du corps a une histoire longue : des gestes autrefois publics — cracher, se moucher, manger avec les mains — sont devenus des interdits qu'on s'impose à soi-même, sans plus avoir besoin de surveillance extérieure. Goffman ajoute que le corps se gère aussi en temps réel, dans chaque interaction, comme une façade qu'il faut tenir. Bourdieu, enfin, rappelle que cette maîtrise n'est pas répartie également : la façon de se tenir, de parler, d'occuper l'espace trahit un habitus de classe avant même qu'on ait prononcé un mot. Foucault déplace encore la question : le corps discipliné ne l'est pas seulement par les autres ou par soi, il l'est par des techniques précises — l'emploi du temps, l'exercice, le rang — qui le dressent sans jamais avoir besoin d'invoquer la loi. Butler radicalise encore ce déplacement : le corps genré lui-même n'est jamais un support neutre sur lequel viendrait s'inscrire une discipline extérieure, il est déjà, dans son moindre geste, la répétition d'une norme qu'aucun corps n'a jamais choisie librement. Haraway déplace la frontière une dernière fois, hors du seul social : le corps contemporain n'est déjà plus seulement organique, mais un composé de chair, de prothèses et de dispositifs techniques dont on ne peut plus dire où l'un finit et où l'autre commence.",
    inspirateurs: [
      "Marcel Mauss — les techniques du corps : marcher, nager, s'asseoir s'apprennent",
      "David Le Breton — la sociologie du corps constituée en domaine",
    ],
  },
  sante: {
    famille: 'corps',
    detail:
      "La maladie n'est jamais seulement un fait biologique : Parsons décrit dès les années 1950 un « rôle de malade », socialement défini, avec ses droits et ses devoirs propres. Goffman ajoute la question du stigmate — certaines maladies ou handicaps déclassent socialement bien plus que d'autres, à gravité clinique égale. Le domaine touche enfin aux inégalités de santé, où l'espérance de vie elle-même se lit à travers la position sociale plus qu'à travers la seule biologie.",
    inspirateurs: [
      "Eliot Freidson — le monopole médical sur la définition de ce qui est une maladie",
      "Anselm Strauss — la trajectoire de maladie, travail partagé entre soignants et malade",
      "Ivan Illich — la médecine qui produit elle-même une partie des maux qu'elle traite",
    ],
  },
  emotions: {
    famille: 'corps',
    detail:
      "Elias montre que le contrôle des émotions a lui aussi une histoire : la colère ou la douleur, autrefois exprimées publiquement, sont devenues des mouvements qu'on apprend à retenir soi-même. Goffman ajoute que même une émotion sincère se joue devant un public, avec des règles de convenance qui varient selon la scène. Arlie Hochschild, enfin, nomme ce que ce travail a de coûteux : le travail émotionnel, cet effort souvent invisible et genré de produire le sourire ou la compassion qu'un emploi exige, indépendamment de ce qu'on ressent réellement.",
    inspirateurs: [
      "Arlie Hochschild — le travail émotionnel : sourire fait partie de la tâche",
      "Thomas Scheff — la honte comme émotion du lien social, discrète et centrale",
      "Eva Illouz — les sentiments pris dans les formes du marché",
    ],
  },

  /* — Territoires et environnement — */
  urbaine: {
    nom: 'Sociologie urbaine',
    famille: 'territoires',
    detail:
      "Simmel ouvre le domaine avec l'idée du blasement urbain : la densité et la stimulation constante de la grande ville obligent à une forme de réserve, presque une indifférence de survie face à des sollicitations trop nombreuses. Becker montre ce que la ville rend possible en retour — l'anonymat qui permet à des mondes marginaux, artistiques ou déviants, de trouver leur public sans être immédiatement récupérés. La ville n'est ainsi jamais un simple décor : sa densité, ses quartiers et ses trajets redistribuent en silence qui côtoie qui.",
    inspirateurs: [
      "Robert Park et l'École de Chicago — la ville comme laboratoire, arpentée quartier par quartier",
      "Louis Wirth — l'urbanisme comme mode de vie : taille, densité, hétérogénéité",
      "Henri Lefebvre — le droit à la ville, et l'espace comme produit social",
    ],
  },
  rurale: {
    famille: 'territoires',
    detail:
      "Le village n'est pas une ville en réduction : Tönnies en avait fait, par contraste avec la société urbaine, le lieu de la communauté — des liens directs, personnels, fondés sur la proximité plus que sur le contrat. La sociologie rurale contemporaine interroge ce qu'il reste de cette différence à mesure que le monde agricole se restructure, se dépeuple par endroits et se recompose ailleurs, sous la pression de la métropole voisine. Bourdieu, originaire du monde paysan béarnais, y a consacré une part de son travail — sur le célibat, l'héritage et la disparition d'un ordre social entier.",
    inspirateurs: [
      "Ferdinand Tönnies — communauté et société, le couple qui a servi à penser le village",
      "Henri Mendras — « La fin des paysans », l'annonce d'une disparition de classe",
      "Robert Redfield — le continuum du folk à l'urbain, contre la coupure nette",
    ],
  },
  mobilites: {
    famille: 'territoires',
    detail:
      "Se déplacer n'a jamais été neutre : Simmel notait déjà que la vitesse et l'étendue des déplacements d'un individu disaient quelque chose de sa position sociale. Le domaine s'est étendu bien au-delà du seul transport : migrations, trajets domicile-travail, tourisme, nomadisme numérique dessinent aujourd'hui une carte des inégalités où certains circulent librement quand d'autres restent assignés à un territoire réduit. La mobilité elle-même — la capacité de se déplacer quand on le souhaite — est ainsi devenue une ressource, inégalement distribuée comme les autres.",
    inspirateurs: [
      "John Urry — le tournant des mobilités : le déplacement comme objet, non comme trajet entre deux objets",
      "Marc Augé — les non-lieux, ces espaces de passage où personne n'habite",
      "Vincent Kaufmann — la motilité : la capacité de se déplacer est elle-même une ressource inégale",
    ],
  },
  environnement: {
    famille: 'territoires',
    detail:
      "Longtemps traitée comme une question purement technique ou naturelle, la crise écologique est aussi un fait social : qui décide des risques à courir, qui en subit les dégâts, et selon quelles inégalités ces deux positions se distribuent. Beck a donné au domaine son concept le plus cité — la société du risque, où les dangers que l'on produit soi-même remplacent peu à peu ceux que l'on subissait de la nature. Boltanski y ajoute une dimension politique : les controverses environnementales sont aussi des lieux où des principes de justification concurrents s'affrontent, entre croissance, précaution et responsabilité. Haraway va plus loin encore : elle refuse jusqu'à la distinction entre nature et société qui organise ce domaine depuis son origine, pour décrire des mondes déjà toujours faits d'humains, d'animaux et de techniques mêlés.",
    inspirateurs: [
      "Bruno Latour — la coupure nature/société tenue pour un artefact à défaire",
      "Michel Callon — les controverses techniques, où profanes et experts négocient le vrai",
    ],
  },
};
