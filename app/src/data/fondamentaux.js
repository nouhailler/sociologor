/**
 * Concepts fondamentaux : le vocabulaire de base de la sociologie, distinct
 * des concepts du corpus (`concepts.js`) qui sont chacun rattachés à un
 * auteur précis. Une entrée d'ici est une définition courte et autonome —
 * jamais un doublon d'une fiche concept déjà écrite.
 *
 * Sur les trente-sept termes couverts, seize recoupent une fiche concept ou
 * un processus déjà présents dans le corpus (Action sociale de Weber,
 * Socialisation de Parsons, Exclusion de Bauman…) : l'entrée reste courte et
 * renvoie explicitement, via `concepts` ou `processus`, vers cette fiche plus
 * riche plutôt que de la répéter. Les termes qui n'ont pas d'équivalent direct
 * reçoivent un paragraphe plus développé, et pointent, quand c'est honnête,
 * vers des concepts du corpus qui les éclairent sans les épuiser.
 *
 * Règles de rédaction, par symétrie avec `phenomenes.js` :
 * - `concepts` et `processus` ne citent que des fiches déjà décrites
 *   (cliquables) ; aucun champ « notions » ici, une entrée fait sens seule.
 * - Le lien reste à sens unique : une fiche concept ne sait pas qu'un terme
 *   fondamental la cite, exactement comme un concept ignore les phénomènes
 *   qu'il éclaire.
 */

/** Catégories d'affichage, dans l'ordre de la liste. */
export const CATEGORIES_FONDAMENTAUX = [
  {
    id: 'action-interaction',
    t: 'Action, interaction et socialisation',
    d: "Comment on agit, on échange et on devient membre d'une société.",
  },
  {
    id: 'normes-controle',
    t: 'Normes, valeurs et contrôle',
    d: "Ce qu'une société attend, permet ou sanctionne — et comment elle le fait respecter.",
  },
  {
    id: 'cadres-structures',
    t: 'Cadres et structures sociales',
    d: "Les positions, les groupes et les cadres durables qui organisent la vie collective.",
  },
  {
    id: 'pouvoir-rapports',
    t: 'Pouvoir et rapports sociaux',
    d: "Qui impose sa volonté à qui, et au nom de quoi on lui obéit.",
  },
  {
    id: 'dynamiques-collectives',
    t: 'Dynamiques collectives',
    d: "Comment des groupes s'allient, s'affrontent ou se tiennent à distance les uns des autres.",
  },
  {
    id: 'transformations',
    t: 'Grandes transformations sociales',
    d: "Les trajectoires qui font passer une société d'un état à un autre.",
  },
];

export const FONDAMENTAUX = [
  /* — Action, interaction et socialisation — */
  {
    id: 'action-sociale',
    t: 'Action sociale',
    categorie: 'action-interaction',
    d: "Un comportement devient une action sociale dès qu'il porte un sens visé par celui qui agit et qu'il tient compte de la conduite d'autrui.",
    detail:
      "C'est la définition la plus classique du sens que l'on donne à ce qu'on fait en société : saluer quelqu'un est une action sociale, alors que tousser par réflexe n'en est pas une, à moins de le faire exprès pour signifier quelque chose. Max Weber en fait le point de départ de toute sa sociologie compréhensive.",
    concepts: ['action-sociale'],
  },
  {
    id: 'interaction-sociale',
    t: 'Interaction sociale',
    categorie: 'action-interaction',
    d: "L'échange réciproque de conduites entre au moins deux personnes en présence l'une de l'autre, chacune ajustant ses gestes à ce qu'elle perçoit de l'autre.",
    detail:
      "Toute vie sociale se joue d'abord dans ces échanges à petite échelle — un regard, une salutation, une négociation de la parole — avant même de se cristalliser en institutions durables. Goffman en a fait un objet d'étude à part entière, la coprésence physique obéissant à des règles propres, irréductibles aux institutions plus larges qui l'entourent ; Mead, de son côté, y voit le lieu même où se forme le soi, par l'échange de symboles dont le sens est partagé.",
    concepts: ['interaction-en-face-a-face', 'interaction-symbolique'],
  },
  {
    id: 'socialisation',
    t: 'Socialisation',
    categorie: 'action-interaction',
    d: "Le processus, jamais achevé, par lequel un individu apprend et intériorise les normes, les valeurs et les manières de faire de sa société, au point de les vivre comme siennes.",
    detail:
      "Elle commence dès la naissance — la socialisation primaire, la plus décisive, transmise par la famille — et se poursuit toute la vie à travers l'école, le travail ou de nouveaux groupes d'appartenance. Talcott Parsons en fait le mécanisme central par lequel une société se reproduit d'une génération à l'autre.",
    concepts: ['socialisation'],
  },
  {
    id: 'role-social',
    t: 'Rôle social',
    categorie: 'action-interaction',
    d: "L'ensemble des conduites qu'une société attend de quiconque occupe une position donnée — parent, salarié, patient — indépendamment de la personnalité de qui l'occupe.",
    detail:
      "Le rôle précède et déborde toujours l'individu qui l'endosse : deux personnes très différentes, placées dans le même rôle de médecin ou d'enseignant, se retrouvent à répondre à des attentes largement identiques. Parsons en fait l'unité de base de son système social ; Goffman, plus tard, montre qu'un rôle ne se contente jamais d'être occupé, il se joue, avec une distance que l'acteur garde toujours vis-à-vis du personnage qu'il incarne.",
    concepts: ['role-et-attentes', 'role-joue'],
  },
  {
    id: 'identite-sociale',
    t: 'Identité sociale',
    categorie: 'action-interaction',
    d: "La manière dont un individu est situé, catégorisé et reconnu par les autres au sein de la vie sociale, distincte de l'image qu'il se fait lui-même de qui il est.",
    detail:
      "Elle se joue à la fois dans l'attribution — ce que les autres perçoivent et présument d'emblée — et dans la vérification — ce que l'on découvre ensuite d'une personne une fois l'interaction engagée. Goffman distingue précisément l'identité sociale virtuelle, le personnage qu'une première impression attribue à quelqu'un, de l'identité sociale réelle, les attributs qu'elle possède effectivement une fois vérifiés — l'écart entre les deux étant la source de bien des malentendus, et parfois d'une stigmatisation durable.",
    concepts: ['identite-sociale-virtuelle', 'identite-sociale-reelle'],
  },

  /* — Normes, valeurs et contrôle — */
  {
    id: 'norme-sociale',
    t: 'Norme sociale',
    categorie: 'normes-controle',
    d: "Une règle de conduite, le plus souvent implicite, qui indique ce qu'il convient de faire dans une situation donnée et dont le non-respect expose à une sanction, formelle ou non.",
    detail:
      "Une norme n'a pas besoin d'être écrite pour contraindre : elle se reconnaît d'abord au malaise ou à la réprobation qu'entraîne son infraction. Talcott Parsons en fait la traduction concrète, situation par situation, de valeurs plus générales qu'une société tient pour désirables.",
    concepts: ['normes-sociales'],
  },
  {
    id: 'valeur',
    t: 'Valeur',
    categorie: 'normes-controle',
    d: "Un idéal général qu'une société ou un groupe tient pour désirable — la réussite, l'égalité, la loyauté — et qui oriente, sans jamais les dicter en détail, les normes concrètes de conduite.",
    detail:
      "Une même valeur — la réussite, par exemple — se décline en normes très différentes selon le domaine : à l'école, au sport, ou au travail. Les valeurs d'une société ne sont jamais unanimement partagées ; elles restent souvent l'objet de conflits, de hiérarchies concurrentes et de réinterprétations selon les groupes sociaux et les générations.",
    concepts: ['valeurs-sociales'],
  },
  {
    id: 'controle-social',
    t: 'Contrôle social',
    categorie: 'normes-controle',
    d: "L'ensemble des mécanismes, formels et informels, par lesquels une société ramène les conduites déviantes vers la norme et maintient un ordre partagé.",
    detail:
      "Le contrôle social le plus efficace n'est presque jamais le plus visible : un simple regard désapprobateur corrige souvent un comportement sans qu'aucune sanction formelle n'ait besoin d'intervenir. Il ne se limite pas à la police ou à la justice : la famille, l'école, le regard des pairs en sont des rouages au moins aussi puissants.",
    concepts: ['controle-social'],
  },
  {
    id: 'deviance',
    t: 'Déviance',
    categorie: 'normes-controle',
    d: "Une conduite qui s'écarte des normes qu'un groupe ou une société tiennent pour légitimes, au point d'appeler une réaction sociale — réprobation, sanction, exclusion.",
    detail:
      "La sociologie de la déviance a longtemps cherché ce qui, chez le déviant, expliquerait son écart à la norme, avant qu'Howard Becker ne retourne la question : la déviance n'est pas une propriété de l'acte lui-même, mais le produit d'une étiquette que certains groupes ont le pouvoir d'imposer à d'autres. Un même comportement peut ainsi être toléré dans un contexte et sévèrement puni dans un autre, sans avoir changé de nature.",
    concepts: ['etiquetage', 'carriere-deviante'],
  },
  {
    id: 'stigmatisation',
    t: 'Stigmatisation',
    categorie: 'normes-controle',
    d: "Le processus par lequel un attribut — visible ou caché — déclasse une personne aux yeux des autres et la contraint à gérer en permanence l'information qu'elle donne sur elle-même.",
    detail:
      "Erving Goffman distingue trois grandes sources de stigmate : les difformités physiques, les tares de caractère perçues (addiction, maladie mentale, passé carcéral) et les stigmates tribaux liés à l'appartenance (race, religion, nationalité). Dans les trois cas, la personne stigmatisée doit composer en permanence avec l'écart entre l'identité qu'on lui prête et celle qu'elle voudrait faire reconnaître.",
    concepts: ['stigmate'],
  },
  {
    id: 'legitimite',
    t: 'Légitimité',
    categorie: 'normes-controle',
    d: "La reconnaissance, par ceux qui y sont soumis, du bien-fondé d'un pouvoir, d'une règle ou d'une institution — ce qui la distingue d'une simple contrainte de fait.",
    detail:
      "Un pouvoir peut s'exercer par la seule force ; il ne devient légitime que lorsque ceux sur qui il s'exerce le tiennent, au moins en partie, pour justifié. Max Weber distingue trois grands fondements possibles de cette légitimité — la tradition, le charisme d'une personne, ou la règle légale-rationnelle — et Berger et Luckmann montrent, de leur côté, comment des institutions déjà là se voient sans cesse redotées d'une explication qui les justifie aux yeux de la génération suivante.",
    concepts: ['domination-legitime', 'legitimation'],
  },

  /* — Cadres et structures sociales — */
  {
    id: 'statut-social',
    t: 'Statut social',
    categorie: 'cadres-structures',
    d: "L'estime sociale partagée qui s'attache à un style de vie, distincte de la seule richesse — une considération qu'elle habille souvent de manières, de goûts et de savoir-être reconnus.",
    detail:
      "Deux personnes peuvent gagner le même revenu sans jouir du même statut : un professeur mal payé garde souvent une considération que n'obtient pas un commerçant plus riche mais jugé moins « distingué ». Max Weber distingue précisément le statut, affaire d'honneur et de style de vie, de la classe, affaire de position économique — les deux hiérarchies ne coïncidant que partiellement.",
    concepts: ['statut-social'],
  },
  {
    id: 'position-sociale',
    t: 'Position sociale',
    categorie: 'cadres-structures',
    d: "La place qu'occupe une personne ou un groupe dans un espace social défini par le volume et la nature des ressources — économiques, culturelles, sociales — qu'il détient, relativement à toutes les autres places.",
    detail:
      "Deux salaires égaux n'occupent pas nécessairement la même position sociale, selon que l'un vient avec un titre reconnu et l'autre sans. Pierre Bourdieu construit cet espace des positions comme un outil pour cartographier une société entière plutôt que de se limiter à un classement en quelques grandes classes.",
    concepts: ['position-sociale'],
  },
  {
    id: 'groupe-social',
    t: 'Groupe social',
    categorie: 'cadres-structures',
    d: "Un ensemble de personnes liées par des interactions régulières, un sentiment d'appartenance partagé et des attentes réciproques, ce qui le distingue d'une simple catégorie statistique.",
    detail:
      "Être compté dans une même catégorie — les plus de soixante ans, les habitants d'une ville — ne suffit pas à former un groupe social : il y faut en plus un lien vécu, une conscience d'appartenir ensemble à quelque chose, même minimale. Un groupe peut rester informel, comme un cercle d'amis, ou se structurer en organisation durable, avec des règles et des rôles stables.",
    concepts: [],
  },
  {
    id: 'organisation',
    t: 'Organisation',
    categorie: 'cadres-structures',
    d: "Un groupe social durablement structuré autour d'un but explicite, avec une division du travail, une hiérarchie et des règles formelles qui coordonnent l'action de ses membres.",
    detail:
      "Une entreprise, une administration, une association sont des organisations : leur fonctionnement réel ne se réduit jamais à leur seul organigramme officiel. Max Weber en décrit la forme la plus aboutie avec la bureaucratie — des règles impersonnelles plutôt que des faveurs — quand Michel Crozier montre, à l'inverse, que ces mêmes règles produisent toujours des marges d'incertitude où se rejouent des rapports de pouvoir informels.",
    concepts: ['bureaucratie', 'systeme-d-action-concret'],
  },
  {
    id: 'communaute',
    t: 'Communauté',
    categorie: 'cadres-structures',
    d: "Un groupe social fondé sur la proximité, la ressemblance ou l'attachement affectif entre ses membres, par opposition aux liens plus impersonnels et contractuels d'une société.",
    detail:
      "La distinction remonte à Ferdinand Tönnies, qui oppose la communauté (Gemeinschaft), fondée sur des liens organiques et affectifs, à la société (Gesellschaft), fondée sur l'échange et le contrat. Émile Durkheim en tire une version voisine avec la solidarité mécanique, propre aux sociétés peu différenciées, où l'on est lié parce qu'on se ressemble plutôt que parce qu'on dépend de fonctions différentes les unes des autres.",
    concepts: ['solidarite-mecanique'],
  },
  {
    id: 'societe',
    t: 'Société',
    categorie: 'cadres-structures',
    d: "Un ensemble d'individus durablement liés par des institutions, des règles et des échanges communs, qui excède la somme des personnes qui la composent.",
    detail:
      "Pour Durkheim, une société n'est pas réductible aux consciences individuelles qui la composent : elle exerce sur chacune d'elles une contrainte extérieure, comparable à celle d'une chose. C'est ce constat — qu'un fait social s'explique par d'autres faits sociaux, non par la seule psychologie individuelle — qui fonde, pour beaucoup, la sociologie comme discipline autonome.",
    concepts: ['fait-social'],
  },
  {
    id: 'culture',
    t: 'Culture',
    categorie: 'cadres-structures',
    d: "L'ensemble des manières de penser, de sentir et d'agir, transmises et partagées au sein d'un groupe, qui distingue son mode de vie de celui d'un autre groupe.",
    detail:
      "La culture ne se limite pas aux beaux-arts : elle recouvre aussi bien les goûts alimentaires, les manières de table ou l'humour qu'une société tient pour normaux, sans même y penser. Pierre Bourdieu montre qu'elle n'est jamais neutre : elle se transmet inégalement selon le milieu d'origine, sous forme de capital culturel, et sert à classer autant qu'à relier ceux qui la partagent.",
    concepts: ['capital-culturel'],
  },
  {
    id: 'institution',
    t: 'Institution',
    categorie: 'cadres-structures',
    d: "Une pratique ou une organisation durable, dotée de règles reconnues, qui structure la vie collective au point de sembler aller de soi — la famille, l'école, le mariage, l'État.",
    detail:
      "Une institution n'a pas toujours existé sous la forme où on la connaît : elle est le produit sédimenté d'une activité humaine répétée, qui a fini par se figer en un cadre transmis aux générations suivantes, sans que celles-ci en connaissent toujours l'origine. Peter Berger et Thomas Luckmann décrivent précisément ce processus d'institutionnalisation, par lequel des pratiques répétées se transforment en évidences que plus personne ne songe à discuter.",
    concepts: ['institutionnalisation-des-pratiques'],
  },

  /* — Pouvoir et rapports sociaux — */
  {
    id: 'pouvoir',
    t: 'Pouvoir',
    categorie: 'pouvoir-rapports',
    d: "La chance qu'a une personne ou un groupe d'imposer sa volonté dans une relation sociale, même contre résistance, que cela soit jugé légitime ou non.",
    detail:
      "Max Weber en donne la définition la plus large et la plus citée de la discipline : le pouvoir ne suppose ni consentement, ni légitimité — un actionnaire minoritaire qui bloque une décision grâce à une clause juridique exerce un pouvoir, sans avoir ni la majorité ni l'onction du vote. Michel Foucault en propose, plus tard, une lecture radicalement différente : moins une chose que l'on posséderait qu'une relation qui se joue partout, y compris dans les institutions les plus quotidiennes.",
    concepts: ['pouvoir'],
  },
  {
    id: 'domination',
    t: 'Domination',
    categorie: 'pouvoir-rapports',
    d: "Une relation de pouvoir devenue stable et durable, où un groupe impose régulièrement sa volonté à un autre, indépendamment d'un rapport de force ponctuel.",
    detail:
      "Max Weber distingue trois types purs de domination selon la source de son acceptation : la domination traditionnelle, fondée sur le caractère sacré de coutumes anciennes ; la domination charismatique, fondée sur les qualités hors du commun prêtées à un chef ; et la domination légale-rationnelle, fondée sur la croyance en la validité de règles impersonnelles.",
    concepts: ['domination-traditionnelle', 'domination-charismatique', 'domination-legitime'],
  },
  {
    id: 'autorite',
    t: 'Autorité',
    categorie: 'pouvoir-rapports',
    d: "Un pouvoir reconnu comme légitime par ceux qui s'y soumettent, ce qui la distingue de la contrainte pure — on obéit à une autorité par adhésion, plus que par seule crainte.",
    detail:
      "L'autorité n'a besoin ni de force ni de persuasion permanente une fois établie : elle repose sur une croyance partagée en son bien-fondé, que Max Weber range parmi les trois grandes sources de domination légitime — la tradition, le charisme ou la règle légale-rationnelle. Une autorité qui perd cette croyance ne devient pas immédiatement impuissante, mais elle doit alors recourir de plus en plus à la contrainte directe pour se faire obéir.",
    concepts: ['domination-legitime'],
  },
  {
    id: 'conflit',
    t: 'Conflit',
    categorie: 'pouvoir-rapports',
    d: "Un affrontement ouvert entre des personnes ou des groupes aux intérêts, aux valeurs ou aux positions incompatibles.",
    detail:
      "Contrairement à une intuition répandue, le conflit n'oppose pas nécessairement la société à elle-même : Georg Simmel y voit une forme d'association à part entière, qui engage et relie ceux qu'il oppose autant qu'il les divise — deux services d'une même entreprise peuvent rivaliser ouvertement pour un budget sans cesser, le reste de l'année, de collaborer étroitement.",
    concepts: ['conflit'],
  },
  {
    id: 'solidarite',
    t: 'Solidarité',
    categorie: 'pouvoir-rapports',
    d: "Le lien qui tient une société ensemble et fait que ses membres se sentent, et sont, mutuellement dépendants.",
    detail:
      "Émile Durkheim distingue deux grandes formes historiques de solidarité : la solidarité mécanique, propre aux sociétés peu différenciées, où l'on est lié parce qu'on se ressemble ; et la solidarité organique, née de la division du travail, où l'on est lié précisément parce qu'on diffère et qu'on dépend de fonctions que l'on ne sait pas remplir soi-même.",
    concepts: ['solidarite-mecanique', 'solidarite-organique'],
  },

  /* — Dynamiques collectives — */
  {
    id: 'cooperation',
    t: 'Coopération',
    categorie: 'dynamiques-collectives',
    d: "Le mécanisme par lequel des personnes accomplissent des tâches interdépendantes selon des manières de faire convenues, sans qu'un accord explicite ou une intention commune soit nécessaire.",
    detail:
      "Howard Becker en fait un principe d'explication concurrent de la seule lutte pour le pouvoir : l'essentiel de la vie collective tiendrait moins à la domination qu'à ce travail d'ajustement mutuel, discret et permanent, par lequel chacun, en poursuivant son propre intérêt, produit des résultats compatibles avec ce qu'attendent les autres.",
    concepts: ['cooperation'],
  },
  {
    id: 'competition',
    t: 'Compétition',
    categorie: 'dynamiques-collectives',
    d: "Une forme de conflit indirect, où plusieurs acteurs poursuivent un même objectif rare — un poste, un marché, un statut — sans nécessairement s'affronter directement.",
    detail:
      "À la différence d'un conflit ouvert, la compétition n'exige pas toujours que les concurrents se connaissent ou interagissent : chacun ajuste sa conduite à une règle du jeu commune, plus qu'à un adversaire précisément identifié. Elle reste néanmoins une forme sociale à part entière, dont les règles — qui a le droit de concourir, selon quels critères — sont elles-mêmes toujours socialement construites, jamais simplement naturelles.",
    concepts: ['conflit'],
  },
  {
    id: 'integration',
    t: 'Intégration',
    categorie: 'dynamiques-collectives',
    d: "Le degré auquel les membres d'une société se sentent liés à elle et régulés par des normes communes suffisamment partagées.",
    detail:
      "Émile Durkheim en fait une des deux grandes variables qui expliquent le taux de suicide d'une société : ni trop, ni trop peu d'intégration — un excès isolant tout autant qu'un manque, chacun à sa manière, désorientant l'individu. L'intégration ne se limite pas au seul lien affectif : Talcott Parsons en fait aussi l'une des quatre fonctions que tout système social doit remplir pour durer, aux côtés de l'adaptation, de la poursuite des buts et du maintien des modèles culturels.",
    concepts: ['anomie', 'integration-sociale'],
  },
  {
    id: 'exclusion',
    t: 'Exclusion',
    categorie: 'dynamiques-collectives',
    d: "Le processus par lequel des individus ou des groupes se voient privés, durablement, des ressources, des liens et de la reconnaissance qui permettent de participer pleinement à la vie collective.",
    detail:
      "Zygmunt Bauman y voit un trait structurel de la modernité tardive : une part croissante de la population devient un surplus humain que l'économie ne parvient plus à réabsorber comme elle le faisait autrefois, faute d'avoir encore besoin de son travail.",
    concepts: ['exclusion'],
  },
  {
    id: 'segregation',
    t: 'Ségrégation',
    categorie: 'dynamiques-collectives',
    d: "La séparation, dans l'espace ou dans les institutions, de groupes sociaux distincts — par l'origine, la classe ou le statut — qui limite leurs occasions de se côtoyer.",
    detail:
      "Une ségrégation peut être imposée par la loi, comme dans les régimes qui l'ont institutionnalisée ouvertement, ou produite de façon plus discrète par le seul jeu du marché du logement et des prix : deux quartiers d'une même ville peuvent rester presque entièrement séparés selon l'origine ou le revenu de leurs habitants, sans qu'aucune règle ne l'impose explicitement.",
    concepts: [],
  },

  /* — Grandes transformations sociales — */
  {
    id: 'mobilite-sociale',
    t: 'Mobilité sociale',
    categorie: 'transformations',
    d: "Le déplacement d'un individu ou d'une famille d'une position sociale à une autre, vers le haut, vers le bas, ou latéralement, au fil d'une vie ou d'une génération à l'autre.",
    detail:
      "La mobilité sociale intergénérationnelle — comparer la position des enfants à celle de leurs parents — reste l'indicateur le plus utilisé pour mesurer si une société tient réellement sa promesse d'égalité des chances, au-delà des discours qui l'affirment.",
    processus: ['mobilite-sociale'],
    concepts: ['position-sociale'],
  },
  {
    id: 'reproduction-sociale',
    t: 'Reproduction sociale',
    categorie: 'transformations',
    d: "Le processus par lequel une société transmet, d'une génération à l'autre, les positions sociales et les inégalités qui les séparent, sans que cette transmission soit jamais annoncée comme telle.",
    detail:
      "L'école, en particulier, joue un rôle central et paradoxal dans cette reproduction : censée offrir l'égalité des chances, elle reconduit le plus souvent les hiérarchies sociales préexistantes, en les faisant passer pour le seul résultat du mérite de chacun.",
    processus: ['reproduction-sociale'],
    concepts: ['habitus', 'capital-culturel'],
  },
  {
    id: 'acculturation',
    t: 'Acculturation',
    categorie: 'transformations',
    d: "Le processus par lequel un groupe ou un individu emprunte, au contact prolongé d'une autre culture, des traits — langue, habitudes, croyances — qu'il intègre à sa propre culture d'origine.",
    detail:
      "L'acculturation n'est presque jamais à sens unique : le groupe qui reçoit une influence en transforme le plus souvent des éléments à sa manière, plutôt que de les copier tels quels, et le groupe dominant se trouve lui aussi, en retour, discrètement transformé par ce contact prolongé.",
    concepts: [],
  },
  {
    id: 'assimilation',
    t: 'Assimilation',
    categorie: 'transformations',
    d: "La forme la plus poussée d'acculturation, où un groupe minoritaire finit par adopter la culture majoritaire au point de perdre progressivement les traits distinctifs de sa culture d'origine.",
    detail:
      "L'assimilation a longtemps servi de modèle implicite aux politiques d'intégration des migrants, avant d'être contestée : elle suppose une culture d'accueil elle-même figée et homogène, ce que l'observation empirique dément le plus souvent, et elle exige d'un groupe minoritaire un effacement que d'autres modèles, plus pluralistes, ne réclament pas.",
    concepts: [],
  },
  {
    id: 'individualisation',
    t: 'Individualisation',
    categorie: 'transformations',
    d: "Le processus par lequel les trajectoires de vie se détachent des cadres collectifs — classe, religion, famille élargie — qui les scénarisaient autrefois d'avance.",
    detail:
      "L'individualisation ne signifie pas la disparition des déterminismes sociaux : elle signale plutôt leur reformulation en termes de choix individuels, dont les effets agrégés restent, eux, largement prévisibles et souvent inégalement répartis selon le milieu d'origine.",
    processus: ['individualisation'],
    concepts: ['individualisme-methodologique'],
  },
  {
    id: 'modernisation',
    t: 'Modernisation',
    categorie: 'transformations',
    d: "Le processus par lequel une société passe de formes d'organisation traditionnelles — fondées sur la coutume et la proximité — à des formes rationalisées, différenciées et tournées vers le changement continu.",
    detail:
      "La modernisation a longtemps été pensée comme une trajectoire unique que toute société devait tôt ou tard emprunter, sur le modèle occidental — une hypothèse aujourd'hui largement contestée au profit de l'idée de modernités multiples, aux formes et aux rythmes différents selon les sociétés concernées.",
    concepts: ['rationalisation', 'modernite-reflexive'],
  },
  {
    id: 'secularisation',
    t: 'Sécularisation',
    categorie: 'transformations',
    d: "Le recul de la religion comme cadre englobant de la vie sociale, à mesure que le droit, l'école ou la politique s'en émancipent progressivement.",
    detail:
      "Max Weber en fait l'un des grands traits du désenchantement du monde moderne : un mariage civil, valide sans aucune cérémonie religieuse, tient aujourd'hui seul lieu d'union reconnue, là où le mariage religieux fondait autrefois l'union à lui seul.",
    concepts: ['secularisation'],
  },
  {
    id: 'rationalisation',
    t: 'Rationalisation',
    categorie: 'transformations',
    d: "La tendance moderne à soumettre toujours davantage de domaines de la vie sociale au calcul, à la règle et à l'efficacité mesurable.",
    detail:
      "Max Weber en fait le processus central de la modernité occidentale, à l'œuvre aussi bien dans la bureaucratie que dans la science ou l'économie capitaliste — un hôpital où le temps passé par patient devient un indicateur à optimiser illustre le risque qu'il y associe : ce qui ne se compte pas finit par compter pour rien.",
    concepts: ['rationalisation'],
  },
];
