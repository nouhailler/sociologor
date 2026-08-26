/**
 * Couche éditoriale des domaines.
 *
 * `authors.js` porte les quatorze domaines extraits du prototype. Ce fichier
 * ajoute les dix-huit autres, range les trente-deux en familles, et donne à
 * chacun ses inspirateurs hors corpus.
 *
 * Règle de rédaction : un domaine nomme d'abord les fiches du corpus qui le
 * travaillent (`a`, cliquables), puis les fondateurs qui n'ont pas de fiche
 * (`inspirateurs`, texte libre, non cliquables — même convention que les
 * influences hors corpus d'une fiche auteur). Beaucoup de ces domaines n'ont
 * aucun fondateur parmi les quinze : les nommer sans fiche vaut mieux que de
 * les taire ou de leur en inventer une.
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
    a: ['comte', 'durkheim', 'weber'],
  },
  {
    id: 'economique',
    t: 'Économique',
    nom: 'Sociologie économique',
    d: "Le marché n'est pas un état de nature : c'est une institution, avec ses règles et ses croyances.",
    a: ['weber', 'marx', 'boltanski'],
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
    a: ['bourdieu', 'simmel', 'francfort'],
  },
  {
    id: 'genre',
    t: 'Genre',
    nom: 'Sociologie du genre',
    d: "Ce que le masculin et le féminin doivent à la nature, et ce qu'ils doivent à l'ordre social.",
    a: ['bourdieu', 'goffman'],
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
    a: ['simmel', 'elias'],
  },
  {
    id: 'crime',
    t: 'Crime',
    nom: 'Sociologie du crime',
    d: "Durkheim tient le crime pour un fait normal, et même utile : reste à comprendre pourquoi.",
    a: ['durkheim', 'merton', 'becker'],
  },
  {
    id: 'mouvements-sociaux',
    t: 'Mouvements sociaux',
    nom: 'Sociologie des mouvements sociaux',
    d: "Se révolter ne suffit pas : il faut des ressources, des mots et un moment favorable.",
    a: ['marx', 'tocqueville', 'boltanski'],
  },
  {
    id: 'medias',
    t: 'Médias',
    nom: 'Sociologie des médias',
    d: "Ce que les médias font aux publics, et ce que les publics font des médias.",
    a: ['francfort', 'bourdieu', 'merton'],
  },
  {
    id: 'numerique',
    t: 'Numérique',
    nom: 'Sociologie du numérique',
    d: "Les plateformes ne sont pas un décor : elles redistribuent l'attention, le travail et la surveillance.",
    a: ['goffman', 'francfort'],
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
    a: ['simmel'],
  },
  {
    id: 'environnement',
    t: 'Environnement',
    nom: "Sociologie de l'environnement",
    d: "La nature comme problème social : qui subit les dégâts, qui décide des risques.",
    a: ['francfort', 'boltanski'],
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
    inspirateurs: [
      "Herbert Spencer — la société lue comme un organisme qui se différencie en grandissant",
      "Raymond Aron — la mise en ordre du canon, et l'idée que la discipline se raconte par ses querelles",
      "Anthony Giddens — la structuration : les structures contraignent l'action et n'existent que par elle",
    ],
  },
  methode: {
    nom: 'Méthode sociologique',
    famille: 'fondations',
    inspirateurs: [
      "Jean-Claude Passeron — le raisonnement sociologique, ni démonstration logique ni récit libre",
      "Alfred Schütz — le sens commun comme donnée première, et non comme obstacle à écarter",
      "Aaron Cicourel — la mesure en question : ce que les catégories du questionnaire fabriquent",
    ],
  },
  interactions: {
    nom: 'Sociologie des interactions',
    famille: 'fondations',
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
    inspirateurs: [
      "Frédéric Le Play — les monographies de familles ouvrières, l'enquête avant la théorie",
      "Philippe Ariès — l'enfance comme invention historique, pas comme évidence de nature",
      "François de Singly — la famille contemporaine, où le lien se justifie au lieu d'aller de soi",
    ],
  },
  education: {
    nom: "Sociologie de l'éducation",
    famille: 'institutions',
    inspirateurs: [
      "Basil Bernstein — les codes linguistiques : l'école demande une langue qu'elle n'enseigne pas",
      "Christian Baudelot et Roger Establet — les deux réseaux de scolarisation derrière l'école unique",
      "Ivan Illich — la déscolarisation, thèse minoritaire mais utile pour dénaturaliser l'institution",
    ],
  },
  religion: {
    nom: 'Sociologie de la religion',
    famille: 'institutions',
    inspirateurs: [
      "Ernst Troeltsch — la distinction de l'Église et de la secte, reprise par toute la sociologie religieuse",
      "Marcel Mauss — le sacrifice et le don, où le sacré s'échange comme le reste",
      "Peter Berger — le dais sacré, puis sa révision : la sécularisation n'était pas le destin annoncé",
    ],
  },
  politique: {
    nom: 'Sociologie politique',
    famille: 'institutions',
    inspirateurs: [
      "Robert Michels — la loi d'airain de l'oligarchie : même un parti démocratique se donne des chefs",
      "Vilfredo Pareto — la circulation des élites, qui remplace une domination par une autre",
      "Maurice Duverger — les partis politiques comme organisations, avec leur logique propre",
    ],
  },
  organisations: {
    nom: 'Sociologie des organisations',
    famille: 'institutions',
    inspirateurs: [
      "Michel Crozier — l'acteur et le système : la zone d'incertitude est la vraie monnaie du pouvoir",
      "Herbert Simon — la rationalité limitée, qui remplace l'optimum par le satisfaisant",
      "James March — la décision comme rencontre d'occasions plus que comme calcul",
    ],
  },
  professions: {
    famille: 'institutions',
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
    inspirateurs: [
      "Georges Friedmann — le travail en miettes : la parcellisation vue de l'atelier",
      "Harry Braverman — la déqualification comme projet, non comme effet secondaire de la technique",
      "Donald Roy — l'observation directe des jeux d'atelier, qui rendent le temps tenable",
    ],
  },
  economique: {
    famille: 'economie',
    inspirateurs: [
      "Karl Polanyi — l'encastrement : le marché autorégulateur est une construction politique",
      "Mark Granovetter — les liens faibles, et l'économie tenue par des réseaux de relations",
      "Viviana Zelizer — l'argent n'est pas neutre : on le marque, on le range, on le destine",
    ],
  },
  consommation: {
    famille: 'economie',
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
    inspirateurs: [
      "Maurice Halbwachs — les niveaux de vie ouvriers, la classe saisie par les budgets",
      "Nicos Poulantzas — les classes définies par la place dans les rapports de production, non par le revenu",
      "Erik Olin Wright — les positions contradictoires : le cadre commande et obéit à la fois",
    ],
  },
  inegalites: {
    nom: 'Sociologie de la mobilité sociale',
    famille: 'inegalites',
    inspirateurs: [
      "Pitirim Sorokin — la mobilité sociale comme objet, dès 1927",
      "John Goldthorpe — les tables de mobilité, et la classe de service qui se reproduit le mieux",
      "Claude Thélot — « Tel père, tel fils ? », la mesure française de l'héritage des positions",
    ],
  },
  genre: {
    famille: 'inegalites',
    inspirateurs: [
      "Ann Oakley — la distinction du sexe et du genre, qui ouvre le domaine",
      "Christine Delphy — le travail domestique comme rapport de production, non comme don d'amour",
      "Judith Butler — le genre comme performance répétée plutôt que comme propriété",
    ],
  },
  jeunesse: {
    famille: 'inegalites',
    inspirateurs: [
      "Karl Mannheim — le problème des générations : une classe d'âge n'est pas une génération",
      "Paul Willis — les gars d'atelier qui refusent l'école et se ferment eux-mêmes les portes",
      "Olivier Galland — l'entrée dans la vie adulte, allongée et désordonnée",
    ],
  },
  vieillissement: {
    famille: 'inegalites',
    inspirateurs: [
      "Simone de Beauvoir — « La Vieillesse » : l'âge comme condition faite, non comme déclin naturel",
      "Peter Townsend — la dépendance structurée, produite par les institutions censées la traiter",
      "Anne-Marie Guillemard — la retraite comme construction sociale et politique",
    ],
  },
  immigration: {
    famille: 'inegalites',
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
    inspirateurs: [
      "Edwin Lemert — la déviance secondaire : c'est la réaction qui installe la carrière",
      "David Matza — la dérive, contre l'idée d'un déviant durablement différent",
      "Kai Erikson — la communauté qui a besoin de ses déviants pour tracer ses frontières",
    ],
  },
  crime: {
    famille: 'normes',
    inspirateurs: [
      "Cesare Lombroso — le criminel-né, thèse abandonnée mais fondatrice par contraste",
      "Edwin Sutherland — le crime en col blanc, qui déplace la question loin des quartiers pauvres",
      "Travis Hirschi — le lien social : la question n'est pas pourquoi on transgresse, mais pourquoi on s'abstient",
    ],
  },
  'mouvements-sociaux': {
    famille: 'normes',
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
    inspirateurs: [
      "Raymond Williams — la culture est ordinaire, pas seulement ce qui se conserve au musée",
      "Stuart Hall — encodage et décodage : un message reçu n'est pas le message émis",
      "Michel de Certeau — les arts de faire, ces usages qui détournent ce qu'on leur impose",
    ],
  },
  medias: {
    famille: 'cultures',
    inspirateurs: [
      "Paul Lazarsfeld — l'influence en deux étapes : les médias passent par des relais humains",
      "Elihu Katz — les usages et gratifications, le public actif plutôt que la cible",
      "Marshall McLuhan — le médium comme message, formule discutée et jamais évacuée",
    ],
  },
  numerique: {
    famille: 'cultures',
    inspirateurs: [
      "Manuel Castells — la société en réseaux, où le flux compte plus que le lieu",
      "Dominique Cardon — les algorithmes comme choix éditoriaux qui ne disent pas leur nom",
      "Shoshana Zuboff — le capitalisme de surveillance : le comportement devenu matière première",
    ],
  },
  loisirs: {
    famille: 'cultures',
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
    inspirateurs: [
      "Marcel Mauss — les techniques du corps : marcher, nager, s'asseoir s'apprennent",
      "Michel Foucault — les corps dociles, dressés par la discipline plus que par la loi",
      "David Le Breton — la sociologie du corps constituée en domaine",
    ],
  },
  sante: {
    famille: 'corps',
    inspirateurs: [
      "Eliot Freidson — le monopole médical sur la définition de ce qui est une maladie",
      "Anselm Strauss — la trajectoire de maladie, travail partagé entre soignants et malade",
      "Ivan Illich — la médecine qui produit elle-même une partie des maux qu'elle traite",
    ],
  },
  emotions: {
    famille: 'corps',
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
    inspirateurs: [
      "Robert Park et l'École de Chicago — la ville comme laboratoire, arpentée quartier par quartier",
      "Louis Wirth — l'urbanisme comme mode de vie : taille, densité, hétérogénéité",
      "Henri Lefebvre — le droit à la ville, et l'espace comme produit social",
    ],
  },
  rurale: {
    famille: 'territoires',
    inspirateurs: [
      "Ferdinand Tönnies — communauté et société, le couple qui a servi à penser le village",
      "Henri Mendras — « La fin des paysans », l'annonce d'une disparition de classe",
      "Robert Redfield — le continuum du folk à l'urbain, contre la coupure nette",
    ],
  },
  mobilites: {
    famille: 'territoires',
    inspirateurs: [
      "John Urry — le tournant des mobilités : le déplacement comme objet, non comme trajet entre deux objets",
      "Marc Augé — les non-lieux, ces espaces de passage où personne n'habite",
      "Vincent Kaufmann — la motilité : la capacité de se déplacer est elle-même une ressource inégale",
    ],
  },
  environnement: {
    famille: 'territoires',
    inspirateurs: [
      "Ulrich Beck — la société du risque, où les dangers produits remplacent les dangers subis",
      "Bruno Latour — la coupure nature/société tenue pour un artefact à défaire",
      "Michel Callon — les controverses techniques, où profanes et experts négocient le vrai",
    ],
  },
};
