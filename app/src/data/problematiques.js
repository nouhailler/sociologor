/**
 * Les problématiques sociales : le niveau le plus englobant du corpus, celui
 * qui fait le lien entre tout le reste. Une problématique est une question ou
 * un enjeu qui fait débat, objet de recherches et de politiques publiques —
 * la pauvreté, le chômage, les inégalités scolaires. Elle ne se confond avec
 * aucune des catégories déjà présentes :
 *
 * - un phénomène (`phenomenes.js`) est un état observable — être pauvre ;
 * - un processus (`processus.js`) est la trajectoire qui y mène — s'appauvrir ;
 * - un mécanisme (`mecanismes.js`) est un rouage de cette trajectoire — la
 *   trappe à pauvreté ;
 * - une problématique embrasse tout cela à la fois, plus la façon dont la
 *   société la mesure, en débat et y répond par des politiques publiques.
 *
 * Une fiche répond à six questions, dans l'ordre où ses rubriques les posent :
 * de quoi parle-t-on ? qui est concerné ? pourquoi cela se produit-il ?
 * comment cela se manifeste-t-il ? quelles conséquences ? comment la société
 * y répond-elle ?
 *
 * Chaque rubrique cite des identifiants d'autres fichiers de données quand
 * une fiche existe déjà (`concepts.js`, `mecanismes.js`, `processus.js`,
 * `phenomenes.js`, `theories.js`, `etudes.js`, `statistiques.js`,
 * `politiques-publiques.js`, `AUTHORS`), jamais de texte libre à leur place —
 * contrairement aux phénomènes et processus, une problématique ne connaît pas
 * de champ « notions » : toute mention already nommée dans le corpus doit
 * pointer vers sa fiche.
 */

/** Catégories d'affichage, dans l'ordre de la liste. */
export const CATEGORIES_PROBLEMATIQUES = [
  {
    id: 'inegalites-et-conditions-de-vie',
    t: 'Inégalités et conditions de vie',
    d: "Ce qui prive durablement d'une part des ressources ou des droits que la société tient pour ordinaires.",
  },
  {
    id: 'age-et-generations',
    t: 'Âge et générations',
    d: "Comment une société organise le passage du temps entre ses générations, et ce qu'elle doit à celles qui l'ont précédée.",
  },
  {
    id: 'migration-et-alterite',
    t: 'Migration et altérité',
    d: "Ce que déplacer sa vie change, pour celui qui part comme pour la société qui l'accueille.",
  },
  {
    id: 'ecole-et-education',
    t: 'École et éducation',
    d: "Ce que l'école promet, ce qu'elle transmet, et ceux qu'elle laisse au bord du chemin.",
  },
  {
    id: 'violences-et-securite',
    t: 'Violences et sécurité',
    d: "Ce qu'une société inflige, tolère ou refuse de nommer comme violence — et ce que ce choix change pour qui la subit.",
  },
];

export const PROBLEMATIQUES = [
  {
    id: 'pauvrete',
    categorie: 'inegalites-et-conditions-de-vie',

    /* — 1. Identité — */
    t: 'Pauvreté',
    synonymes: ['Paupérisme (usage historique)', 'Dénuement', 'Indigence (usage administratif ancien)'],
    simple:
      "L'insuffisance durable de ressources — monétaires, matérielles, sociales — qui prive de la capacité à vivre selon les normes minimales de sa société et à choisir son existence.",
    detaille: [
      "La pauvreté n'est pas un manque d'argent isolé : c'est un manque de ressources qui se répercute sur tous les autres registres de l'existence — se loger, se soigner, se nourrir, participer à la vie sociale — et qui, prolongé, finit par se transmettre à la génération suivante.",
      "Aucune définition ne fait l'unanimité. Un seuil de subsistance absolu (de quoi survivre) et un seuil relatif (de quoi ne pas être exclu des habitudes de vie de sa société) désignent rarement les mêmes personnes, et le choix entre les deux n'est jamais neutre : il détermine qui compte, statistiquement, comme pauvre.",
    ],
    sousCategories: [
      {
        t: 'Pauvreté absolue',
        d: "Un seuil de subsistance physique minimal — se nourrir, se loger, se vêtir — indépendant du niveau de vie de la société environnante. Norme historique (Booth, Rowntree), aujourd'hui surtout utilisée pour les comparaisons internationales entre pays très inégalement développés.",
      },
      {
        t: 'Pauvreté relative',
        d: "Un seuil défini par rapport au niveau de vie médian d'une société donnée, à un moment donné — la norme statistique européenne actuelle, héritée de Peter Townsend.",
      },
      {
        t: 'Pauvreté monétaire',
        d: "Mesurée par le revenu ou le niveau de vie d'un ménage rapporté à un seuil — l'approche la plus citée, et la plus réductrice.",
      },
      {
        t: 'Pauvreté en conditions de vie',
        d: "Mesurée par les privations matérielles et sociales effectivement subies — chauffage, vacances, remplacement d'équipements usés — indépendamment du revenu déclaré.",
      },
      {
        t: 'Pauvreté multidimensionnelle',
        d: "Combine plusieurs dimensions non monétaires — santé, éducation, logement — en un indice unique, dans la lignée de l'approche par les capabilités d'Amartya Sen.",
      },
      {
        t: 'Pauvreté extrême',
        d: "La forme la plus sévère, cumulant plusieurs privations à la fois — logement, alimentation, accès aux soins — souvent associée à la grande exclusion.",
      },
    ],
    motsCles: [
      'seuil de pauvreté',
      'précarité',
      'exclusion',
      'inégalités',
      'redistribution',
      'minima sociaux',
      'privation',
      'niveau de vie',
    ],
    gravite:
      "Un des indicateurs sociaux les plus anciens et les plus suivis dans le monde développé — mesuré en France depuis les années 1970. Sur les derniers chiffres publiés, il touche de l'ordre d'une personne sur sept, et sensiblement plus chez les enfants et dans les familles monoparentales : voir la rubrique Mesurer pour les sources et leurs limites.",

    /* — 2. Comprendre la problématique — */
    description: [
      "La pauvreté d'aujourd'hui n'est plus, dans les pays développés, principalement rurale ou liée à l'absence totale de travail : une part croissante des personnes pauvres occupent un emploi, à temps partiel ou faiblement rémunéré — ce qu'on appelle les travailleurs pauvres.",
      "Elle se distingue de la précarité, qui désigne une instabilité de statut, et de l'exclusion, qui désigne une rupture des liens sociaux : les trois se recoupent souvent sans se confondre — voir la rubrique Liens.",
    ],
    origineEmergence:
      "La pauvreté comme fait social distinct, mesuré et débattu publiquement, émerge avec l'industrialisation du XIXᵉ siècle : le paupérisme urbain, visible et massif dans les villes industrielles, appelle les premières enquêtes sociales — Charles Booth à Londres (1889), Seebohm Rowntree à York (1901) — qui inventent la notion de seuil de pauvreté calculé.",
    contexteHistorique:
      "Avant l'industrialisation, la pauvreté rurale existait mais restait largement absorbée par l'entraide villageoise et la charité religieuse ; l'exode vers les villes industrielles rend visible une pauvreté de masse, sans ces amortisseurs traditionnels, à un moment où l'État ne s'en estime pas encore responsable.",
    evolutionHistorique: [
      { p: '1889–1901', f: "Booth puis Rowntree mesurent la pauvreté urbaine britannique par des enquêtes de terrain systématiques, et inventent le seuil calculé." },
      { p: '1945–1975', f: "Les Trente Glorieuses et la construction de l'État-providence font reculer la pauvreté de masse dans les pays développés, sans l'éliminer." },
      { p: '1979', f: "Townsend publie Poverty in the United Kingdom et impose la mesure relative, calée sur le niveau de vie médian plutôt que sur un minimum de subsistance." },
      { p: '1980–1990', f: "Le chômage de masse fait émerger une « nouvelle pauvreté », urbaine et liée à l'exclusion du marché du travail plus qu'à l'agriculture ou à l'industrie en déclin." },
      { p: '2000–2020', f: "La pauvreté laborieuse — des personnes pauvres bien qu'en emploi — devient un objet de recherche et de politique à part entière." },
    ],
    situationActuelle:
      "Dans les pays développés, la pauvreté touche de façon disproportionnée les enfants, les familles monoparentales et les jeunes adultes, tandis que les politiques de redistribution ont fait reculer la pauvreté relative des retraités par rapport aux décennies précédentes.",
    dimensionIndividuelle:
      "Vécue comme une contrainte quotidienne sur chaque choix — se soigner, sortir, se déplacer — et souvent comme une atteinte à l'estime de soi, dans des sociétés qui valorisent la réussite matérielle.",
    dimensionCollective:
      "Une position partagée par des millions de personnes, statistiquement mesurable, qui structure des marchés (logement social, aide alimentaire) et mobilise des institutions dédiées.",
    dimensionStructurelle:
      "Un effet attendu, non un accident, de la façon dont un marché du travail, un système scolaire et une fiscalité distribuent les positions et les ressources — ce que la rubrique Facteurs détaille.",

    /* — 3. Population concernée — */
    population: {
      generale:
        "Aucune catégorie n'en est à l'abri sur une vie entière — une part significative de la population connaît un épisode de pauvreté au moins une fois — mais son exposition et sa durée restent très inégalement réparties.",
      groupesExposes: [
        'Enfants et familles monoparentales',
        'Jeunes adultes en insertion professionnelle',
        'Personnes peu qualifiées ou sans diplôme',
        'Chômeurs de longue durée',
        'Travailleurs à temps partiel subi ou en contrats courts',
        'Personnes immigrées récemment arrivées',
        'Habitants de certains territoires désindustrialisés ou ruraux isolés',
      ],
      age: "Les enfants et les jeunes adultes sont surreprésentés ; les retraités le sont nettement moins que par le passé, grâce aux systèmes de retraite.",
      genre: "Les femmes sont plus souvent pauvres après une séparation ou à la tête d'une famille monoparentale, du fait d'écarts de revenus et de temps de travail antérieurs.",
      csp: "Ouvriers, employés peu qualifiés et personnes sans activité professionnelle sont les plus exposés ; les indépendants aux revenus irréguliers le sont aussi, de façon moins visible statistiquement.",
      revenu: "Par construction de l'indicateur monétaire, la pauvreté se concentre dans le premier décile de niveau de vie — mais des ménages un peu au-dessus du seuil vivent des privations comparables.",
      education: "Le risque de pauvreté décroît fortement avec le niveau de diplôme, sans jamais s'annuler : des diplômés restent pauvres, notamment en début de carrière ou en cas de déclassement.",
      territoire: "Surreprésentée dans certains quartiers urbains sensibles, dans des zones rurales isolées et dans les territoires d'outre-mer, où le taux de pauvreté dépasse largement la moyenne nationale.",
      situationFamiliale: "Les familles monoparentales et les familles nombreuses sont particulièrement exposées, la charge d'enfants réduisant le niveau de vie par unité de consommation.",
      statutProfessionnel: "Chômeurs, inactifs, mais aussi salariés à temps partiel ou en contrats courts — la pauvreté laborieuse touche des personnes en emploi.",
    },

    /* — 4. Causes et facteurs — */
    facteurs: {
      economiques: [
        'Chômage, en particulier de longue durée',
        'Faibles revenus et bas salaires',
        'Emplois précaires, temps partiel subi',
        'Coût du logement élevé rapporté au revenu',
      ],
      sociaux: [
        'Monoparentalité et charge de famille non partagée',
        'Isolement et faible réseau relationnel mobilisable',
        'Maladie ou handicap réduisant la capacité de travail',
      ],
      culturels: [
        'Faible capital culturel et scolaire hérité',
        'Aspirations et attentes réduites, transmises en famille',
      ],
      politiques: [
        "Niveau et générosité de la redistribution et des minima sociaux",
        "Priorités budgétaires données ou non à la lutte contre la pauvreté",
      ],
      institutionnels: [
        'Non-recours aux droits et aux prestations existantes',
        'Complexité administrative des démarches',
        'Trappes à pauvreté intégrées au calcul des aides',
      ],
      territoriaux: [
        'Concentration territoriale dans certains quartiers ou zones rurales',
        'Éloignement des bassins d\'emploi et des services publics',
      ],
      demographiques: [
        'Taille et composition du ménage',
        "Âge (entrée dans la vie active, veuvage tardif)",
      ],
      historiques: [
        "Désindustrialisation de certains bassins d'emploi",
        'Crises économiques successives et leurs séquelles sur l\'emploi',
      ],
    },

    /* — 5. Manifestations — */
    manifestations: {
      comportements: ['Restriction volontaire des repas', 'Renoncement aux soins non urgents', 'Limitation du chauffage'],
      situations: ['Impayés de loyer ou de charges', 'Surendettement', 'Recours régulier au découvert bancaire'],
      indicateurs: ['Taux de pauvreté monétaire', 'Taux de privation matérielle', 'Taux de surpeuplement du logement'],
      pratiques: ["Recours à l'aide alimentaire", 'Entraide familiale et informelle', "Petits travaux d'appoint non déclarés"],
      evenements: ['Expulsions locatives', "Coupures d'énergie pour impayés", 'Recours aux associations caritatives'],
      statistiques: [
        "Un enfant sur cinq environ vit sous le seuil de pauvreté monétaire en France, selon les dernières données publiées par l'INSEE — voir la rubrique Mesurer pour la méthode et ses limites.",
        "Les familles monoparentales affichent un taux de pauvreté nettement supérieur à la moyenne nationale, quel que soit le seuil retenu.",
      ],
    },

    /* — 6. Mécanismes sociaux — */
    mecanismeSchema: [
      'Pauvreté',
      'Accès réduit aux ressources',
      'Difficultés scolaires',
      'Moindre qualification',
      'Emploi moins rémunérateur',
      'Reproduction sociale',
    ],
    mecanismes: [
      'epuisement-des-ressources',
      'cumul-des-desavantages',
      'trappe-a-pauvrete',
      'transmission-des-aspirations',
      'choc-biographique',
      'ajustement-des-aspirations',
      'devaluation-des-diplomes',
      'segregation-residentielle',
      'discrimination-statistique',
    ],

    /* — 7. Conséquences — */
    consequences: {
      individuelles: ['Stress chronique', "Perte d'estime de soi", 'Restriction des choix de vie'],
      familiales: ['Tensions conjugales accrues', 'Moindre disponibilité pour les enfants', 'Séparations plus fréquentes'],
      professionnelles: ['Employabilité réduite', 'Découragement dans la recherche d\'emploi', 'Moindre mobilité géographique'],
      economiques: ['Consommation restreinte', 'Épargne quasi nulle', 'Dépendance prolongée aux aides'],
      sanitaires: ['Santé physique dégradée', 'Santé mentale fragilisée', 'Renoncement aux soins'],
      scolaires: ['Résultats scolaires plus faibles en moyenne', 'Orientation vers des filières courtes', 'Risque de décrochage accru'],
      territoriales: ['Concentration spatiale de la pauvreté', 'Dévalorisation de certains quartiers'],
      politiques: ['Abstention électorale plus fréquente', 'Défiance envers les institutions'],
      intergenerationnelles: ['Transmission du risque de pauvreté', 'Reproduction des inégalités scolaires et professionnelles'],
    },

    /* — 8. Dynamiques — */
    dynamiques: {
      aggravation: "Le cumul des désavantages : un premier manque (revenu, santé, réseau) augmente la probabilité d'en subir d'autres, qui aggravent à leur tour le premier.",
      reduction: "Le retour à un emploi stable, une formation qualifiante ou une aide ciblée peuvent faire sortir durablement de la pauvreté.",
      stabilisation: "Une installation dans une pauvreté durable, ni aggravée ni résorbée, notamment chez les bénéficiaires de longue durée des minima sociaux.",
      transformation: "Le déplacement des formes de pauvreté dans le temps : rurale puis industrielle, aujourd'hui davantage liée à l'emploi précaire qu'à l'absence totale de travail.",
      cycles: "Des entrées et des sorties répétées, au fil des accidents de la vie — perte d'emploi, séparation, maladie — plutôt qu'un état figé.",
      effetsDeSeuil: "Le franchissement d'un seuil de ressources peut faire perdre d'un coup une aide, pour un gain de revenu inférieur à la perte — voir le mécanisme Trappe à pauvreté.",
      effetsCumulatifs: "Un petit écart initial de ressources se creuse mécaniquement à chaque étape de la trajectoire — voir le mécanisme Cumul des désavantages.",
      reproductionIntergenerationnelle: "Le risque de pauvreté à l'âge adulte reste statistiquement lié à celui vécu dans l'enfance — voir le processus Reproduction intergénérationnelle.",
    },

    /* — 9. Mesurer la problématique — */
    mesure: {
      description:
        "Aucun indicateur unique ne fait consensus : le choix du seuil, de son niveau et de la dimension mesurée (revenu ou conditions de vie) change le nombre de personnes comptées comme pauvres, sans qu'aucune situation réelle n'ait changé.",
      statistiques: [
        'taux-de-pauvrete-monetaire-france',
        'seuil-de-pauvrete-60',
        'intensite-de-la-pauvrete',
        'taux-de-pauvrete-en-conditions-de-vie',
        'arope-eurostat',
      ],
      limites: [
        "Un seuil relatif ne peut, par construction, jamais atteindre zéro : il mesure un écart à la médiane, pas un niveau de dénuement absolu.",
        "Le revenu déclaré dit peu du patrimoine, des dettes ou de la stabilité dans le temps des ressources d'un ménage.",
        "Les enquêtes s'appuient sur des données parfois anciennes de deux ans au moment de leur publication.",
      ],
    },

    /* — 10. Débats sociologiques — */
    debats: [
      {
        t: 'Responsabilité individuelle vs structure sociale',
        d: "Faut-il expliquer la pauvreté par des choix, des comportements ou un manque d'effort individuels, ou par une structure économique et sociale qui la produit indépendamment de la volonté de qui la subit ? Le débat traverse aussi bien la recherche que le discours politique.",
      },
      {
        t: 'Redistribution',
        d: "Jusqu'où la fiscalité et les transferts sociaux doivent-ils corriger les inégalités de marché, et à quel coût pour l'incitation au travail et la croissance économique ?",
      },
      {
        t: 'Revenu minimum',
        d: "Faut-il remplacer les minima sociaux conditionnés par un revenu minimum garanti ou universel, versé sans condition de recherche d'emploi ni de ressources ?",
      },
      {
        t: 'Assistance vs activation',
        d: "Une aide doit-elle être inconditionnelle, ou subordonnée à des contreparties — recherche d'emploi, formation, insertion — au risque d'exclure ceux qui n'y parviennent pas ?",
      },
      {
        t: 'Pauvreté absolue vs relative',
        d: "Le choix méthodologique n'est jamais neutre : une définition absolue peut minimiser la pauvreté dans les pays riches, une définition relative peut la déclarer stable même quand le niveau de vie de tous augmente.",
      },
    ],

    /* — 11. Politiques publiques — */
    politiquesPubliques: ['rsa', 'prime-activite', 'strategie-nationale-pauvrete-2018', 'aides-personnelles-au-logement'],

    /* — 12. Liens avec Sociologor — */
    phenomenes: [
      'pauvrete',
      'exclusion-sociale',
      'precarite-professionnelle',
      'chomage',
      'inegalites-de-sante',
      'inegalites-scolaires',
      'declassement-social',
      'stratification-sociale',
      'concentration-des-richesses',
      'monoparentalite',
    ],
    concepts: [
      'anomie',
      'tension-anomique',
      'capital-economique',
      'capital-social',
      'capital-culturel',
      'classe-sociale',
      'individualisme-methodologique',
      'effets-pervers',
      'ressources-sociales',
    ],
    processus: ['declassement', 'precarisation', 'desaffiliation', 'reproduction-sociale', 'reproduction-intergenerationnelle'],
    theories: ['culture-de-la-pauvrete', 'privation-relative', 'approche-par-les-capabilites', 'underclass'],
    auteurs: ['durkheim', 'merton', 'bourdieu', 'boudon', 'weber', 'marx'],
    etudes: ['poverty-in-the-uk-enquete', 'five-families-terrain', 'truly-disadvantaged-chicago', 'erfs-insee'],
    problematiquesConnexes: [],
  },
  {
    id: 'exclusion-sociale',
    categorie: 'inegalites-et-conditions-de-vie',

    /* — 1. Identité — */
    t: 'Exclusion sociale',
    synonymes: ['Désinsertion sociale (usage du travail social)'],
    simple:
      "La rupture progressive des liens qui rattachent un individu aux institutions et aux échanges ordinaires de la vie sociale — travail, logement, santé, droits, relations — au point de ne plus y participer normalement.",
    detaille: [
      "L'exclusion ne se réduit à aucune de ses dimensions prise isolément : on peut être pauvre sans être exclu, ou exclu sans être le plus pauvre — c'est le cumul et la durée qui font basculer une difficulté ponctuelle en rupture installée.",
      "Le mot se distingue de plusieurs notions voisines, avec lesquelles il se confond souvent. La pauvreté est une insuffisance de ressources économiques, qui peut exister sans rupture des liens sociaux, et inversement. La marginalisation, plus large, recouvre aussi des positions choisies ou assumées, quand l'exclusion est presque toujours subie. La précarité désigne une instabilité de statut — professionnel, résidentiel — qui expose au risque d'exclusion sans y mener nécessairement. La désaffiliation, chez Castel, n'est pas un état mais le processus précis qui y conduit, quand se perdent à la fois le travail et les liens sociaux — c'est la trajectoire dont l'exclusion sociale est le point d'arrivée. L'isolement, enfin, n'en est qu'une dimension : purement relationnelle, il peut toucher une personne par ailleurs insérée dans l'emploi et le logement.",
    ],
    sousCategories: [
      { t: 'Dimension économique', d: "L'absence ou l'insuffisance de ressources qui permettent de subvenir à ses besoins et de participer à la vie économique ordinaire." },
      { t: 'Dimension professionnelle', d: "L'éloignement durable de l'emploi, au-delà du seul chômage : perte des routines, des collègues et du statut que le travail procurait." },
      { t: 'Dimension résidentielle', d: "L'absence de logement stable, du sans-abrisme à l'hébergement précaire, qui prive du point d'ancrage à partir duquel se reconstruisent les autres liens." },
      { t: 'Dimension scolaire', d: "Le décrochage ou l'échec scolaire précoce, qui hypothèque l'accès ultérieur à la qualification et à l'emploi." },
      { t: 'Dimension numérique', d: "L'incapacité à utiliser les outils et services devenus indispensables — démarches administratives, recherche d'emploi — par manque d'équipement, de connexion ou de compétence." },
      { t: 'Dimension culturelle', d: "L'éloignement des pratiques et des codes culturels dominants, qui complique l'accès à certains espaces sociaux et professionnels." },
      { t: 'Dimension politique', d: "La perte de participation citoyenne — vote, engagement associatif, syndical — et le sentiment de ne compter pour rien dans les décisions collectives." },
      { t: 'Dimension relationnelle', d: "L'appauvrissement ou la rupture des liens familiaux, amicaux et de voisinage, jusqu'à l'isolement complet." },
    ],
    motsCles: ['désaffiliation', 'stigmatisation', 'non-recours', 'isolement', 'marginalisation', 'liens sociaux', 'institution totale', 'inclusion'],
    gravite:
      "Popularisée en France depuis le milieu des années 1970 — l'estimation initiale de 1974 avançait un Français sur dix — la notion reste aujourd'hui suivie à l'échelle européenne via l'indicateur AROPE, qui l'associe explicitement à la pauvreté dans les objectifs sociaux de l'Union : voir la rubrique Mesurer pour les sources et leurs limites.",

    /* — 2. Comprendre la problématique — */
    description: [
      "L'exclusion sociale se comprend mieux comme une trajectoire que comme une case : Castel distingue une zone d'intégration, où travail et liens sociaux se soutiennent, une zone de vulnérabilité, où l'un des deux se fragilise, et une zone de désaffiliation, où les deux manquent à la fois.",
      "Contrairement à la pauvreté, mesurable par un seuil monétaire unique, l'exclusion n'a pas d'indicateur de référence incontesté : elle se reconstruit en croisant plusieurs dimensions — emploi, logement, santé, liens, droits — dont aucune, prise seule, ne suffit à la définir.",
    ],
    origineEmergence:
      "Le terme entre dans le débat public français en 1974, quand René Lenoir, alors secrétaire d'État à l'Action sociale, additionne des catégories jusque-là comptées séparément par l'administration — handicapés, personnes âgées dépendantes, inadaptés, marginaux — pour en tirer un chiffre unique : un Français sur dix.",
    contexteHistorique:
      "La notion émerge au moment où la croissance des Trente Glorieuses s'achève et où le chômage de masse commence à toucher des catégories jusque-là épargnées, remettant en cause l'idée que l'emploi suffit à intégrer.",
    evolutionHistorique: [
      { p: '1974', f: "Lenoir popularise le terme en additionnant des catégories administratives disparates, dans Les Exclus." },
      { p: '1980–1988', f: "La crise du chômage de masse fait émerger la notion de « nouveaux pauvres », et prépare la création du RMI." },
      { p: '1988', f: "Le RMI institutionnalise en France une logique d'insertion, censée répondre à l'exclusion par un droit et un accompagnement plutôt que par la seule assistance." },
      { p: '1995', f: "Castel publie Les Métamorphoses de la question sociale et déplace l'exclusion, bloc figé, vers la désaffiliation, un processus réversible." },
      { p: '1998', f: "La loi de lutte contre les exclusions installe la notion comme catégorie transversale de l'action publique française." },
      { p: '2010', f: "L'Union européenne adopte l'indicateur AROPE, qui associe formellement pauvreté et exclusion sociale dans ses objectifs communs." },
    ],
    situationActuelle:
      "L'exclusion est aujourd'hui pensée comme cumulative et multidimensionnelle plus que comme un état binaire, avec une attention croissante portée à sa dimension numérique, apparue avec la dématérialisation des services publics.",
    dimensionIndividuelle:
      "Vécue comme une perte progressive de prise sur son existence, et souvent comme une invisibilité sociale — ne plus être vu, sollicité ou attendu par personne.",
    dimensionCollective:
      "Une population statistiquement difficile à cerner d'un bloc, tant les situations regroupées sous le même mot restent hétérogènes, ce qui complique aussi bien la mesure que l'action publique.",
    dimensionStructurelle:
      "Le produit attendu d'une combinaison de transformations du marché du travail, de l'habitat et de l'accès aux droits, plus qu'un accident individuel — ce que la rubrique Facteurs détaille.",

    /* — 3. Population concernée — */
    population: {
      generale:
        "Aucun profil unique ne résume l'exclusion : elle touche des situations très différentes — grand âge isolé, sans-abrisme, chômage de très longue durée, handicap non accompagné — réunies moins par une cause commune que par un même défaut de participation à la vie ordinaire.",
      groupesExposes: [
        'Personnes sans domicile ou en hébergement précaire',
        'Chômeurs de très longue durée',
        'Personnes âgées isolées, notamment après un veuvage',
        'Personnes en situation de handicap peu accompagnées',
        'Jeunes sortis du système scolaire sans qualification ni soutien familial',
        'Personnes sortant d\'une institution fermée (prison, hôpital psychiatrique)',
        'Personnes immigrées en situation administrative précaire',
      ],
      age: "Deux pics d'exposition se dessinent : les jeunes adultes sans soutien familial à la sortie de l'école ou de l'aide sociale à l'enfance, et les personnes âgées isolées après un veuvage ou une perte de mobilité.",
      genre: "Les femmes âgées seules et les hommes en rupture familiale après une séparation figurent parmi les profils d'isolement les plus fréquemment décrits.",
      csp: "Surreprésentation des personnes durablement éloignées de l'emploi et de celles n'ayant jamais eu d'activité professionnelle stable.",
      revenu: "Concentrée dans le bas de la distribution des revenus, sans s'y réduire : certaines situations d'exclusion — isolement, rupture de droits — touchent aussi des personnes aux revenus modestes mais non les plus faibles.",
      education: "Le décrochage scolaire précoce, sans diplôme ni qualification reconnue, est un facteur de risque documenté de bascule ultérieure vers l'exclusion.",
      territoire: "Concentrée dans certains quartiers urbains prioritaires et dans des zones rurales isolées, mal desservies par les transports et les services publics.",
      situationFamiliale: "Les personnes seules, sans réseau familial mobilisable, sont les plus exposées ; les familles monoparentales cumulent souvent plusieurs facteurs de risque à la fois.",
      statutProfessionnel: "Chômeurs de très longue durée, inactifs sans droits ouverts, et personnes sorties du marché du travail sans y être jamais revenues.",
    },

    /* — 4. Causes et facteurs — */
    facteurs: {
      economiques: ['Chômage de longue durée', 'Absence ou insuffisance de ressources stables', 'Coexistence avec une pauvreté installée'],
      sociaux: ['Isolement relationnel', 'Rupture des liens familiaux', 'Maladie ou handicap peu accompagné', 'Discrimination dans l\'accès à l\'emploi ou au logement'],
      culturels: ['Faible qualification scolaire', 'Éloignement des codes et pratiques culturelles dominantes', 'Maîtrise insuffisante des outils numériques'],
      politiques: ['Non-recours aux droits sociaux existants', 'Faible représentation des personnes concernées dans le débat public'],
      institutionnels: ['Complexité administrative des démarches d\'accès aux droits', 'Cloisonnement des dispositifs d\'aide entre eux', 'Sortie d\'institution sans accompagnement suffisant'],
      territoriaux: ['Absence de logement stable', 'Éloignement des services publics et des bassins d\'emploi', 'Concentration spatiale des situations de précarité'],
      demographiques: ['Grand âge et perte d\'autonomie', 'Rupture familiale (veuvage, séparation)'],
      historiques: ['Désindustrialisation de certains territoires', 'Transformations du marché du travail depuis les années 1970'],
    },

    /* — 5. Manifestations — */
    manifestations: {
      comportements: ['Retrait progressif des sollicitations sociales', 'Évitement des démarches administratives', 'Renoncement à demander de l\'aide'],
      situations: ['Absence de logement personnel', 'Rupture prolongée avec la famille', 'Fin de droits sociaux non renouvelés'],
      indicateurs: ['Nombre de personnes sans domicile', 'Taux de non-recours aux prestations sociales', 'Taux d\'isolement relationnel'],
      pratiques: ['Recours exclusif aux structures d\'urgence', 'Évitement des lieux et interactions sociales ordinaires'],
      evenements: ['Sortie d\'institution sans relais', 'Perte d\'un logement à la suite d\'un impayé', 'Fin de droits au chômage'],
      statistiques: [
        "Le sans-abrisme a fortement augmenté en France entre les vagues d'enquête successives de l'INSEE et de l'INED — voir la rubrique Mesurer pour la méthode et ses limites.",
        "Une part substantielle des personnes éligibles à certaines prestations sociales n'en font jamais la demande, selon les travaux de l'Observatoire des non-recours aux droits et services.",
      ],
    },

    /* — 6. Mécanismes sociaux — */
    mecanismeSchema: [
      'Intégration (travail et liens stables)',
      'Vulnérabilité (l\'un des deux se fragilise)',
      'Désaffiliation (les deux manquent à la fois)',
      'Exclusion sociale installée',
    ],
    mecanismes: [
      'cumul-des-desavantages',
      'rupture-du-lien-social',
      'stigmatisation',
      'institutionnalisation',
      'perte-des-liens-faibles',
      'discrimination-statistique',
      'cumul-des-ruptures',
    ],

    /* — 7. Conséquences — */
    consequences: {
      individuelles: ['Perte d\'autonomie', 'Bascule vers une marginalisation durable', 'Sentiment d\'invisibilité sociale'],
      familiales: ['Affaiblissement ou rupture des liens familiaux', 'Isolement au sein même du foyer'],
      professionnelles: ['Éloignement durable de l\'emploi', 'Perte des routines et repères professionnels'],
      economiques: ['Dépendance prolongée aux dispositifs d\'aide', 'Appauvrissement cumulatif'],
      sanitaires: ['Renoncement aux soins', 'Dégradation de la santé physique et mentale'],
      scolaires: ['Décrochage scolaire des enfants du foyer', 'Difficultés d\'insertion éducative durables'],
      territoriales: ['Concentration dans des quartiers ou zones eux-mêmes marginalisés', 'Éloignement croissant des services'],
      politiques: ['Difficultés d\'accès aux droits', 'Perte de participation citoyenne', 'Défiance envers les institutions'],
      intergenerationnelles: ['Transmission du risque d\'exclusion', 'Reproduction de la marginalisation sociale'],
    },

    /* — 8. Dynamiques — */
    dynamiques: {
      aggravation: "Le cumul des désavantages et la rupture des liens sociaux se renforcent mutuellement : chaque perte rend la suivante plus probable.",
      reduction: "Un accès stabilisé au logement, à l'emploi ou à un réseau de soutien peut inverser la trajectoire, à condition d'intervenir avant que les liens ne se rompent tous à la fois.",
      stabilisation: "Une installation durable dans la zone de désaffiliation, sans dégradation supplémentaire ni sortie, notamment chez les personnes en grande exclusion depuis plusieurs années.",
      transformation: "L'apparition d'une dimension numérique de l'exclusion, liée à la dématérialisation des démarches administratives, s'ajoute aux formes plus anciennes.",
      cycles: "Des allers-retours entre hébergement d'urgence, logement précaire et rue, plutôt qu'une trajectoire à sens unique.",
      effetsDeSeuil: "La fin d'un droit ou d'un hébergement temporaire peut faire basculer brutalement une situation stabilisée, sans dégradation progressive préalable.",
      effetsCumulatifs: "La perte d'un lien — l'emploi, le logement, un proche — fragilise les autres liens restants, jusqu'à leur rupture complète.",
      reproductionIntergenerationnelle: "Grandir dans un foyer en situation d'exclusion accroît le risque, à l'âge adulte, de connaître soi-même une trajectoire de désaffiliation.",
    },

    /* — 9. Mesurer la problématique — */
    mesure: {
      description:
        "Aucun indicateur unique ne couvre l'exclusion : la mesure croise des sources hétérogènes — enquêtes ponctuelles sur le sans-abrisme, statistiques administratives de non-recours, enquêtes de sociabilité — plus difficiles à harmoniser qu'un simple seuil de revenu.",
      statistiques: [
        'arope-eurostat',
        'sans-domicile-insee',
        'non-recours-aux-droits',
        'isolement-relationnel',
        'chomage-longue-duree',
      ],
      limites: [
        "Les enquêtes sur le sans-abrisme et l'isolement reposent sur un contact avec des dispositifs ou des enquêteurs, ce qui laisse hors champ les situations les plus coupées de toute institution.",
        "Le non-recours est par nature difficile à mesurer : il faut d'abord estimer une population éligible que l'absence même de demande rend mal connue.",
        "Aucune de ces sources n'est reconduite aussi régulièrement que les enquêtes de revenu, ce qui rend le suivi dans le temps plus grossier que pour la pauvreté monétaire.",
      ],
    },

    /* — 10. Débats sociologiques — */
    debats: [
      {
        t: 'Une notion unique ou une pluralité de situations',
        d: "Faut-il garder un mot unique pour des situations aussi différentes que le grand âge isolé et le sans-abrisme, au risque de l'effet fourre-tout reproché à Lenoir, ou lui préférer des notions plus précises comme la désaffiliation de Castel ?",
      },
      {
        t: 'Cause économique ou rupture relationnelle',
        d: "L'exclusion procède-t-elle d'abord d'un manque de ressources, ou de la rupture des liens sociaux qui rendent ce manque supportable ou non ? Les deux lectures appellent des politiques très différentes.",
      },
      {
        t: 'Inclusion par l\'emploi ou inclusion par les droits',
        d: "Faut-il viser le retour à l'emploi comme voie principale de réintégration, ou garantir d'abord des droits inconditionnels — logement, santé — indépendamment de la situation professionnelle ?",
      },
      {
        t: 'Exclusion choisie ou subie',
        d: "Certaines situations de marge sont revendiquées plutôt que subies ; les distinguer des exclusions imposées reste un exercice délicat, qui engage la légitimité même de l'intervention publique.",
      },
      {
        t: 'Échelle individuelle ou échelle de quartier',
        d: "Les politiques doivent-elles cibler des individus en difficulté, ou des territoires entiers marqués par la concentration de l'exclusion — au risque, dans ce second cas, de stigmatiser un lieu autant que d'aider ses habitants ?",
      },
    ],

    /* — 11. Politiques publiques — */
    politiquesPubliques: ['loi-1998-lutte-exclusions', 'logement-dabord', 'rsa', 'strategie-nationale-pauvrete-2018'],

    /* — 12. Liens avec Sociologor — */
    phenomenes: [
      'exclusion-sociale',
      'pauvrete',
      'precarite-professionnelle',
      'chomage',
      'incarceration-de-masse',
      'inegalites-numeriques',
      'declassement-social',
      'monoparentalite',
    ],
    concepts: [
      'anomie',
      'etiquetage',
      'stigmate',
      'capital-social',
      'ressources-sociales',
      'domination-legitime',
      'role-et-attentes',
      'individualisme-methodologique',
    ],
    processus: ['desaffiliation', 'declassement', 'precarisation', 'declin-social'],
    theories: ['exclusion-lenoir', 'desaffiliation-castel', 'institution-totale', 'underclass'],
    auteurs: ['durkheim', 'goffman', 'becker', 'bourdieu', 'weber'],
    etudes: ['lenoir-recensement-1974', 'castel-etude-historique', 'enquete-sans-domicile-insee'],
    problematiquesConnexes: ['pauvrete'],
  },
  {
    id: 'inegalites',
    categorie: 'inegalites-et-conditions-de-vie',

    /* — 1. Identité — */
    t: 'Inégalités',
    synonymes: ['Disparités sociales', 'Écarts sociaux'],
    simple:
      "Les écarts, entre individus ou entre groupes, dans l'accès aux ressources, aux droits et aux positions qu'une société distribue — écarts que rien dans la nature des personnes concernées ne suffit à expliquer.",
    detaille: [
      "Les inégalités ne se résument pas à un seul écart de revenu : elles traversent presque tous les domaines de l'existence, se recoupent souvent sans se confondre, et se cumulent plus qu'elles ne s'additionnent — être né dans un milieu modeste pèse à la fois sur les études, la santé, le patrimoine et la participation politique.",
      "Les analyser suppose de répondre à quatre questions distinctes, qui ne donnent pas toujours la même réponse. La distribution demande qui possède quoi, à un instant donné — la photographie d'un patrimoine ou d'un revenu. L'accès demande qui peut atteindre quoi — une école, un soin, un logement — indépendamment de ce qu'il possède déjà. Les opportunités demandent qui dispose des mêmes chances de départ, avant que la compétition ne commence. Les résultats demandent enfin qui obtient quoi, une fois la compétition achevée — une distinction cruciale pour le débat politique, puisqu'on peut vouloir égaliser les chances sans vouloir égaliser les résultats, ou l'inverse.",
    ],
    sousCategories: [
      { t: 'Inégalités économiques', d: "Le terme le plus général, qui recouvre à la fois les écarts de revenus et les écarts de patrimoine, sans toujours les distinguer." },
      { t: 'Inégalités de revenus', d: "Les écarts de ce qui entre chaque mois ou chaque année — salaires, revenus du capital, prestations — mesurés le plus souvent par le coefficient de Gini ou le rapport interdécile." },
      { t: 'Inégalités de patrimoine', d: "Les écarts de ce qui est possédé — immobilier, épargne, entreprise — généralement bien plus marqués que les inégalités de revenus, et transmis d'une génération à l'autre par héritage." },
      { t: 'Inégalités sociales', d: "Les écarts de position, de statut et de considération dans la hiérarchie sociale, qui ne se réduisent ni au revenu ni au patrimoine." },
      { t: 'Inégalités scolaires', d: "Les écarts de résultats et d'orientation selon l'origine sociale, à niveau scolaire égal au départ." },
      { t: 'Inégalités culturelles', d: "Les écarts d'accès et de familiarité avec les biens et pratiques culturels légitimes, transmis en famille avant même l'école." },
      { t: 'Inégalités territoriales', d: "Les écarts entre lieux de vie — quartiers, villes, régions — dans l'accès aux emplois, aux services publics et aux équipements." },
      { t: 'Inégalités numériques', d: "Les écarts d'équipement, de connexion et de compétence face à des services devenus largement dématérialisés." },
      { t: 'Inégalités sanitaires', d: "Les écarts d'état de santé et d'espérance de vie selon la position sociale, mesurables jusque dans l'espérance de vie en bonne santé." },
      { t: 'Inégalités professionnelles', d: "Les écarts de rémunération, de statut d'emploi et de perspective de carrière, y compris à poste et diplôme comparables." },
      { t: 'Inégalités politiques', d: "Les écarts de participation, de représentation et de poids réel dans les décisions collectives, souvent corrélés aux autres inégalités." },
      { t: 'Inégalités environnementales', d: "Les écarts d'exposition aux nuisances et aux risques environnementaux, et de capacité à s'en protéger ou à s'y adapter." },
      { t: 'Inégalités générationnelles', d: "Les écarts de conditions de vie et de perspectives entre générations, à âge comparable, à mesure que les trajectoires économiques d'ensemble se transforment." },
      { t: 'Inégalités entre femmes et hommes', d: "Les écarts de revenu, de temps de travail domestique, de carrière et de représentation, qui traversent transversalement presque toutes les autres inégalités." },
    ],
    motsCles: ['distribution', 'redistribution', 'égalité des chances', 'mérite', 'mobilité sociale', 'stratification', 'justice sociale'],
    gravite:
      "Un objet d'étude aussi ancien que la sociologie elle-même, et l'un des plus suivis statistiquement : coefficient de Gini, rapport interdécile et tables de mobilité sont calculés et comparés entre pays depuis plusieurs décennies — voir la rubrique Mesurer pour le détail de ces indicateurs et leurs limites.",

    /* — 2. Comprendre la problématique — */
    description: [
      "Toute société connue hiérarchise ses membres d'une manière ou d'une autre ; ce qui varie, historiquement et entre pays, c'est l'ampleur de cette hiérarchisation, les critères qui la justifient, et la part qu'elle laisse à la naissance plutôt qu'au parcours propre de chacun.",
      "La sociologie s'oppose ici à une lecture strictement économique : Weber ajoute au seul critère de classe le statut et le pouvoir politique, Bourdieu ajoute le capital culturel et social au capital économique, et chacun de ces ajouts change ce que « réduire les inégalités » peut vouloir dire.",
    ],
    origineEmergence:
      "La mesure moderne des inégalités économiques naît avec les premières statistiques fiscales et les travaux de Vilfredo Pareto sur la distribution des revenus, à la toute fin du XIXᵉ siècle ; la sociologie des inégalités sociales, elle, doit ses outils fondateurs à Marx et Weber, à la même période.",
    contexteHistorique:
      "L'industrialisation rend les écarts de revenus statistiquement mesurables pour la première fois à grande échelle, au moment même où elle rend aussi les inégalités de position visibles et contestées, entre bourgeoisie industrielle et classe ouvrière naissante.",
    evolutionHistorique: [
      { p: '1896', f: "Pareto observe une régularité statistique dans la distribution des revenus, qu'il croit universelle — la loi de Pareto, aujourd'hui nuancée." },
      { p: '1913–1955', f: "Les premières statistiques fiscales permettent de suivre l'évolution des hauts revenus sur longue période dans quelques pays." },
      { p: '1955', f: "Kuznets propose l'hypothèse d'une courbe en cloche entre développement économique et inégalités." },
      { p: '1971', f: "Rawls publie A Theory of Justice et déplace le débat vers ce que la justice exige, plus seulement vers ce que les faits montrent." },
      { p: '1979', f: "Bourdieu publie La Distinction et étend la mesure des inégalités au-delà du seul revenu, jusqu'aux goûts et aux pratiques culturelles." },
      { p: '2013', f: "Piketty publie Le Capital au XXIᵉ siècle et relance le débat sur la concentration du patrimoine à partir de données fiscales historiques." },
    ],
    situationActuelle:
      "Les inégalités de revenus se sont stabilisées ou légèrement accrues dans la plupart des pays développés depuis les années 1980, tandis que les inégalités de patrimoine, elles, se sont creusées plus nettement, avec une attention croissante portée aux inégalités environnementales et numériques.",
    dimensionIndividuelle:
      "Vécue comme un sentiment de position relative — se comparer à ceux qui ont plus ou moins — autant que comme un manque de ressources en valeur absolue.",
    dimensionCollective:
      "Une structure qui organise l'ensemble d'une société en positions hiérarchisées, indépendamment de la trajectoire de chaque individu qui l'occupe à un moment donné.",
    dimensionStructurelle:
      "Le produit attendu de la manière dont le marché du travail, le système scolaire, la fiscalité et le droit à l'héritage distribuent et redistribuent les ressources — ce que la rubrique Facteurs détaille.",

    /* — 3. Population concernée — */
    population: {
      generale:
        "Par définition relationnelle, l'inégalité concerne l'ensemble d'une société : chacun y occupe une position, mesurée par rapport à toutes les autres, ce qui distingue la question des inégalités de celle de la pauvreté ou de l'exclusion, concentrées sur une partie de la population.",
      groupesExposes: [
        'Ménages du bas de la distribution des revenus et du patrimoine',
        'Enfants de familles peu dotées en capital économique, culturel ou social',
        'Femmes, pour les inégalités professionnelles et patrimoniales',
        'Habitants de territoires éloignés des grands bassins d\'emploi',
        'Jeunes générations, pour les inégalités patrimoniales et environnementales à venir',
        'Personnes peu qualifiées, pour les inégalités numériques et professionnelles',
      ],
      age: "Les écarts de patrimoine augmentent mécaniquement avec l'âge, quand les inégalités de revenus d'activité sont plus marquées en début et en fin de carrière.",
      genre: "Les femmes restent, en moyenne, moins bien rémunérées à poste comparable, davantage à temps partiel, et héritent de patrimoines en moyenne inférieurs à ceux des hommes.",
      csp: "Les écarts de revenus et de patrimoine restent structurés par la catégorie socioprofessionnelle, avec un creusement particulièrement net entre indépendants et cadres supérieurs d'un côté, employés et ouvriers de l'autre.",
      revenu: "Le dernier décile concentre une part disproportionnée du revenu total, et plus encore du patrimoine, une asymétrie que la plupart des indicateurs usuels tendent à sous-estimer.",
      education: "Le diplôme reste le facteur le plus corrélé au niveau de revenu futur, sans que le lien entre origine sociale et diplôme obtenu ne se soit refermé.",
      territoire: "Les grandes métropoles concentrent une part croissante des emplois qualifiés et des hauts revenus, creusant l'écart avec les villes moyennes et les zones rurales.",
      situationFamiliale: "La composition du ménage — nombre d'enfants, biactivité ou non des parents — pèse directement sur le niveau de vie par unité de consommation.",
      statutProfessionnel: "Les inégalités professionnelles se sont recomposées entre statuts stables et statuts précaires, ce dernier groupe cumulant souvent plusieurs formes d'inégalités à la fois.",
    },

    /* — 4. Causes et facteurs — */
    facteurs: {
      economiques: ['Rendement du capital supérieur à la croissance sur longue période', 'Transformations du marché du travail et polarisation des emplois', 'Mondialisation et concurrence internationale'],
      sociaux: ['Homogamie sociale et transmission cumulée des capitaux au sein du couple', 'Réseaux relationnels inégalement dotés en ressources mobilisables'],
      culturels: ['Transmission différenciée du capital culturel dès la petite enfance', 'Normes de réussite scolaire calées sur la culture des classes dominantes'],
      politiques: ['Niveau et progressivité de la redistribution fiscale', 'Poids inégal des groupes sociaux dans la décision publique'],
      institutionnels: ['Hiérarchisation et sélectivité du système scolaire', 'Règles fiscales et successorales favorisant la transmission du patrimoine', 'Accès inégal aux institutions et filières les plus prestigieuses'],
      territoriaux: ['Concentration des emplois qualifiés dans quelques métropoles', 'Écarts d\'équipements et de services publics entre territoires'],
      demographiques: ['Structure par âge et poids relatif des générations', 'Taille et composition des ménages'],
      historiques: ['Trajectoires de développement économique inégales entre régions et pays', 'Héritages historiques (coloniaux, industriels) pesant encore sur certains territoires'],
    },

    /* — 5. Manifestations — */
    manifestations: {
      comportements: ['Entre-soi résidentiel et scolaire', 'Stratégies d\'évitement de certains établissements ou quartiers'],
      situations: ['Écarts de rémunération à poste et diplôme comparables', 'Files d\'attente et délais différenciés selon le capital social mobilisé'],
      indicateurs: ['Coefficient de Gini', 'Rapport interdécile', 'Taux de pauvreté'],
      pratiques: ['Fréquentation différenciée des lieux et institutions culturels', 'Recours différencié aux soins et à la prévention'],
      evenements: ['Mouvements sociaux de contestation des inégalités', 'Réformes fiscales ou successorales débattues publiquement'],
      statistiques: [
        "Les 10 % les plus aisés concentrent, selon les pays, entre un quart et un tiers du revenu total — voir la rubrique Mesurer pour la méthode et ses limites.",
        "Les inégalités de patrimoine restent nettement plus marquées que les inégalités de revenus dans la plupart des pays développés.",
      ],
    },

    /* — 6. Mécanismes sociaux — */
    mecanismeSchema: [
      'Position sociale des parents',
      'Transmission inégale des capitaux (économique, culturel, social)',
      'Accès différencié aux institutions (école, marché du travail)',
      'Résultats inégaux (diplôme, emploi, revenu)',
      'Reproduction des inégalités à la génération suivante',
    ],
    mecanismes: [
      'transmission-patrimoniale',
      'transmission-capital-culturel',
      'reseau-relationnel',
      'discrimination-statistique',
      'segregation-residentielle',
      'socialisation-familiale',
      'effet-de-structure',
      'selection-scolaire',
    ],

    /* — 7. Conséquences — */
    consequences: {
      individuelles: ['Écarts de bien-être subjectif et de sentiment de dignité', 'Écarts d\'espérance de vie en bonne santé'],
      familiales: ['Transmission différenciée du patrimoine et des dispositions aux enfants', 'Stratégies familiales très inégalement dotées pour les affronter'],
      professionnelles: ['Carrières et rémunérations disparates selon l\'origine sociale', 'Accès inégal aux postes à responsabilité'],
      economiques: ['Sous-investissement dans le capital humain des plus modestes', 'Moindre mobilité du capital productif vers les projets portés par les moins dotés'],
      sanitaires: ['Écarts d\'espérance de vie selon la position sociale', 'Écarts de morbidité et de recours aux soins'],
      scolaires: ['Écarts de réussite et d\'orientation selon l\'origine sociale', 'Reproduction des positions scolaires d\'une génération à l\'autre'],
      territoriales: ['Polarisation entre territoires gagnants et perdants des transformations économiques', 'Écarts croissants de valeur immobilière entre zones'],
      politiques: ['Défiance différenciée envers les institutions selon la position sociale', 'Abstention électorale plus marquée dans les catégories les moins dotées'],
      intergenerationnelles: ['Reproduction des positions sociales d\'une génération à l\'autre', 'Transmission inégale des risques et des protections face aux aléas de la vie'],
    },

    /* — 8. Dynamiques — */
    dynamiques: {
      aggravation: "Quand le rendement du capital dépasse durablement la croissance, le patrimoine hérité progresse mécaniquement plus vite que les revenus du travail, et les inégalités de patrimoine se creusent.",
      reduction: "Une redistribution fiscale plus progressive, un accès plus large à l'éducation ou une croissance forte et partagée peuvent réduire les écarts mesurés, sans qu'aucun de ces leviers ne suffise isolément.",
      stabilisation: "Un niveau d'inégalité qui se maintient sur longue période, quand les mécanismes de reproduction et les politiques de redistribution s'équilibrent à peu près.",
      transformation: "Le déplacement du centre de gravité des inégalités, du revenu vers le patrimoine dans plusieurs pays développés depuis les années 1980, à mesure que la part du capital dans le revenu national augmente.",
      cycles: "Des phases historiques de creusement puis de réduction des écarts, souvent liées à des chocs macroéconomiques ou politiques plus qu'à une tendance continue.",
      effetsDeSeuil: "Certains avantages (accès à une filière sélective, à un premier emploi qualifiant) ne produisent leurs effets qu'au-delà d'un certain niveau de ressources préalables, en deçà duquel ils restent hors d'atteinte.",
      effetsCumulatifs: "Un avantage initial — capital culturel, réseau, patrimoine — facilite l'acquisition d'avantages supplémentaires, ce qui tend à accroître l'écart avec ceux qui en étaient dépourvus au départ.",
      reproductionIntergenerationnelle: "La position sociale des parents reste, dans la plupart des pays mesurés, l'un des meilleurs prédicteurs de la position sociale des enfants à l'âge adulte.",
    },

    /* — 9. Mesurer la problématique — */
    mesure: {
      description:
        "Aucun indicateur unique ne résume les inégalités : le coefficient de Gini résume toute une distribution en un chiffre, le rapport interdécile compare seulement les deux extrémités, et la mobilité sociale mesure un mouvement dans le temps plutôt qu'un état à un instant donné — chacun répond à une question différente.",
      statistiques: [
        'coefficient-de-gini',
        'rapport-interdecile',
        'quantiles-de-revenu',
        'ecarts-de-revenus',
        'mobilite-sociale-indice',
        'taux-de-pauvrete-monetaire-france',
      ],
      limites: [
        "Les indicateurs usuels portent sur le revenu ou le patrimoine déclaré, et sous-estiment systématiquement la concentration au tout sommet de la distribution, en partie soustraite à la mesure fiscale ordinaire.",
        "Résumer une distribution entière en un seul chiffre (Gini) fait perdre l'information sur où se situe précisément l'écart, qu'un même chiffre peut masquer des configurations très différentes.",
        "Les comparaisons internationales restent sensibles aux différences de définition du ménage, de la période de mesure et du système de protection sociale.",
      ],
    },

    /* — 10. Débats sociologiques — */
    debats: [
      {
        t: 'Égalité des chances ou égalité des résultats',
        d: "Faut-il garantir à chacun un même point de départ et laisser ensuite le mérite et l'effort produire des résultats inégaux, ou viser directement une réduction des écarts de résultats, quelles qu'en soient les causes en amont ?",
      },
      {
        t: 'Redistribution',
        d: "Jusqu'où l'État doit-il corriger, après coup, des inégalités produites par le marché — et avec quels effets sur l'incitation à produire cette richesse en premier lieu ?",
      },
      {
        t: 'Mérite',
        d: "Un système qui récompense le mérite est-il juste s'il ne corrige pas les inégalités de départ qui déterminent, en bonne partie, qui a les moyens de mériter ?",
      },
      {
        t: 'Justice sociale',
        d: "Les principes de justice de Rawls — libertés égales, puis inégalités tolérées seulement si elles profitent aux plus désavantagés — font-ils consensus, ou d'autres conceptions de la justice (mérite, besoin, égalité stricte) leur sont-elles préférables ?",
      },
      {
        t: 'Égalitarisme',
        d: "Vouloir réduire les inégalités suppose-t-il de viser une égalité stricte, ou seulement de ramener les écarts sous un seuil jugé acceptable — deux objectifs très différents dans leurs implications politiques ?",
      },
    ],

    /* — 11. Politiques publiques — */
    politiquesPubliques: ['bareme-progressif-irpp', 'impot-sur-la-fortune', 'rsa', 'strategie-nationale-pauvrete-2018'],

    /* — 12. Liens avec Sociologor — */
    phenomenes: [
      'stratification-sociale',
      'inegalites-scolaires',
      'inegalites-culturelles',
      'inegalites-territoriales',
      'inegalites-numeriques',
      'inegalites-de-sante',
      'inegalites-de-revenus',
      'inegalites-generationnelles',
      'ecart-salarial',
      'concentration-des-richesses',
      'pauvrete',
      'exclusion-sociale',
    ],
    concepts: [
      'classe-sociale',
      'capital-economique',
      'capital-culturel',
      'capital-social',
      'capital-symbolique',
      'statut-social',
      'domination-legitime',
      'meritocratie',
      'position-sociale',
      'egalisation-des-conditions',
      'individualisme-methodologique',
      'effets-pervers',
    ],
    processus: ['reproduction-sociale', 'reproduction-intergenerationnelle', 'mobilite-sociale', 'reproduction-des-elites', 'ascension-sociale'],
    theories: ['theorie-de-la-justice-rawls', 'courbe-de-kuznets', 'capital-au-21e-siecle-piketty', 'approche-par-les-capabilites'],
    auteurs: ['marx', 'weber', 'bourdieu', 'boudon', 'durkheim', 'tocqueville'],
    etudes: ['kuznets-donnees-historiques', 'world-inequality-database'],
    problematiquesConnexes: ['pauvrete', 'exclusion-sociale'],
  },
  {
    id: 'chomage',
    categorie: 'inegalites-et-conditions-de-vie',

    /* — 1. Identité — */
    t: 'Chômage',
    synonymes: [],
    simple:
      "L'absence d'emploi pour une personne qui en cherche un et se déclare disponible pour l'occuper — une situation qui ne prive pas seulement d'un revenu, mais aussi du temps structuré, du statut et des liens sociaux que le travail procure.",
    detaille: [
      "Le chômage n'est pas seulement un problème économique : c'est aussi ce que Marie Jahoda appelle une privation de fonctions latentes — le travail structure le temps, impose des contacts sociaux réguliers, inscrit dans un but collectif, confère un statut et impose une activité. Perdre un emploi, c'est perdre d'un coup ces cinq fonctions, pas seulement un salaire.",
      "Le mot recouvre des réalités très différentes selon sa cause et sa durée : un chômage frictionnel de quelques semaines entre deux postes n'a ni les mêmes ressorts ni les mêmes conséquences qu'un chômage structurel qui dure des années — voir la rubrique Sous-catégories.",
    ],
    sousCategories: [
      { t: 'Chômage de longue durée', d: "Une absence d'emploi qui se prolonge au-delà d'un an, avec un risque croissant que chaque mois supplémentaire réduise les chances de retour à l'emploi, indépendamment des qualifications." },
      { t: 'Chômage frictionnel', d: "Le temps, normal et généralement bref, que prend la transition entre deux emplois — recherche, période de préavis, délai d'embauche — inévitable même dans une économie proche du plein emploi." },
      { t: 'Chômage structurel', d: "Une inadéquation durable entre les emplois disponibles et les compétences ou la localisation de la main-d'œuvre, qui ne se résorbe pas avec la seule reprise de l'activité économique." },
      { t: 'Chômage conjoncturel', d: "Le chômage qui suit les fluctuations de l'activité économique — il augmente en récession, recule en période de croissance, sans changement structurel du marché du travail." },
      { t: 'Chômage des jeunes', d: "Une difficulté particulière à l'entrée sur le marché du travail, liée au manque d'expérience et à la surreprésentation des jeunes actifs dans les contrats courts et précaires." },
      { t: 'Chômage des seniors', d: "Une sortie souvent précoce de l'emploi après 50 ans, suivie d'une réinsertion beaucoup plus difficile qu'aux âges plus jeunes, malgré l'expérience accumulée." },
      { t: 'Chômage technologique', d: "Les emplois supprimés par l'automatisation ou l'intelligence artificielle, plus vite que de nouveaux emplois équivalents ne se créent pour les personnes concernées." },
    ],
    motsCles: ['emploi', 'indemnisation', 'employabilité', 'insertion', 'marché du travail', 'fonctions latentes'],
    gravite:
      "Un indicateur macroéconomique suivi mensuellement dans la plupart des pays développés, et l'un des plus anciens objets de la sociologie du travail — l'étude de Marienthal, en 1933, en reste la référence fondatrice : voir la rubrique Mesurer pour les indicateurs actuels et leurs limites.",

    /* — 2. Comprendre la problématique — */
    description: [
      "Le chômage touche à la fois l'identité, le statut, les relations sociales et l'intégration — pas seulement le budget. C'est ce que documente depuis 1933 la sociologie du chômage, à partir de l'étude de Marienthal : au-delà d'un certain seuil de durée, la détresse observée ne s'explique plus par le seul niveau de l'indemnisation.",
      "L'économie distingue plusieurs origines — frictionnelle, structurelle, conjoncturelle — parce que chacune appelle une réponse différente : on ne traite pas un chômage frictionnel, normal et bref, comme un chômage structurel, qui suppose une inadéquation plus profonde entre l'offre et la demande de travail.",
    ],
    origineEmergence:
      "Le chômage de masse comme objet social distinct émerge avec l'industrialisation, quand le salariat devient la norme et que perdre son emploi cesse d'être un accident individuel pour devenir un risque social de grande ampleur, notamment lors des crises économiques du XIXᵉ et du XXᵉ siècle.",
    contexteHistorique:
      "La crise de 1929 et la Grande Dépression donnent au chômage de masse sa première ampleur statistique et sociale moderne, et suscitent les premières études sociologiques de terrain, dont celle de Marienthal en 1933.",
    evolutionHistorique: [
      { p: '1929–1933', f: "La Grande Dépression fait exploser le chômage dans les pays industrialisés et suscite les premières études sociologiques de terrain, dont Marienthal." },
      { p: '1936', f: "Keynes distingue le chômage volontaire, choisi, du chômage involontaire, subi faute de demande suffisante dans l'économie." },
      { p: '1945–1975', f: "Les Trente Glorieuses ramènent le chômage à un niveau historiquement bas dans la plupart des pays développés, proche du plein emploi." },
      { p: '1971', f: "Doeringer et Piore formulent la théorie du marché du travail segmenté, à partir de l'observation des marchés internes en entreprise." },
      { p: '1973–1980', f: "Les chocs pétroliers mettent fin au plein emploi et installent un chômage de masse durable dans la plupart des économies occidentales." },
      { p: '1981', f: "Jahoda formalise la théorie des fonctions latentes de l'emploi, dans le prolongement direct de l'étude de Marienthal." },
      { p: '2008', f: "La fusion de l'ANPE et des Assedic donne naissance à Pôle emploi en France, renommé France Travail en 2024." },
    ],
    situationActuelle:
      "Le chômage reste concentré sur certains profils — jeunes, seniors, peu qualifiés, certains territoires — plus que réparti uniformément dans la population active, avec une attention croissante portée au risque de chômage technologique lié à l'automatisation.",
    dimensionIndividuelle:
      "Vécue comme une perte de repères autant que de revenu, avec un risque de détresse psychologique documenté dès les premières semaines et s'aggravant avec la durée.",
    dimensionCollective:
      "Un indicateur macroéconomique suivi comme baromètre de la santé d'une économie, et un enjeu électoral central dans la plupart des démocraties.",
    dimensionStructurelle:
      "Le produit attendu des cycles économiques, des transformations technologiques et de l'organisation du marché du travail — ce que la rubrique Facteurs détaille.",

    /* — 3. Population concernée — */
    population: {
      generale:
        "Le risque de connaître un épisode de chômage touche, sur une carrière entière, une large part de la population active, mais son exposition, sa durée et ses conséquences restent très inégalement réparties.",
      groupesExposes: [
        'Jeunes actifs en début de parcours professionnel',
        'Salariés de plus de 50 ans après une perte d\'emploi',
        'Personnes peu qualifiées ou sans diplôme reconnu',
        'Salariés de secteurs en restructuration ou en délocalisation',
        'Habitants de bassins d\'emploi en reconversion industrielle',
        'Personnes en situation de handicap',
      ],
      age: "Le chômage touche proportionnellement plus les jeunes actifs, à l'entrée sur le marché du travail, et les salariés de plus de 50 ans, dont la réinsertion après une perte d'emploi est statistiquement plus longue.",
      genre: "Les femmes restent, selon les périodes et les pays, plus souvent touchées par le sous-emploi et le temps partiel subi que par le chômage au sens strict.",
      csp: "Les ouvriers et les employés peu qualifiés affichent des taux de chômage nettement supérieurs à ceux des cadres, avec un écart qui se maintient à chaque phase du cycle économique.",
      revenu: "Le chômage touche plus fréquemment les ménages déjà modestes, ce qui explique une large part du lien statistique entre chômage et pauvreté.",
      education: "Le risque de chômage décroît fortement avec le niveau de diplôme, sans jamais s'annuler complètement, y compris pour les diplômés en début de carrière.",
      territoire: "Très inégalement réparti entre bassins d'emploi, avec des écarts durables entre métropoles dynamiques et territoires en reconversion industrielle.",
      situationFamiliale: "Les familles monoparentales sont particulièrement vulnérables à la perte de revenu qu'entraîne un épisode de chômage, faute de second revenu pour amortir le choc.",
      statutProfessionnel: "Les salariés en contrat court ou en intérim connaissent des épisodes de chômage plus fréquents, bien que souvent plus courts, que les salariés en contrat stable.",
    },

    /* — 4. Causes et facteurs — */
    facteurs: {
      economiques: ['Cycle économique (récessions et reprises)', 'Restructurations sectorielles', 'Automatisation des tâches', 'Délocalisation d\'activités vers des pays à moindre coût'],
      sociaux: ['Discriminations à l\'embauche liées à l\'âge, à l\'origine ou au genre', 'Isolement progressif consécutif à une perte d\'emploi prolongée'],
      culturels: ['Inadéquation entre compétences détenues et compétences recherchées', 'Obsolescence de qualifications anciennes face aux évolutions techniques'],
      politiques: ['Niveau et conditions de l\'indemnisation chômage', 'Priorités données ou non aux politiques actives de l\'emploi'],
      institutionnels: ['Rigidités ou fluidité du marché du travail selon les pays', 'Complexité et intensité de l\'accompagnement vers l\'emploi'],
      territoriaux: ['Concentration des emplois disponibles dans certains bassins', 'Éloignement des zones en reconversion industrielle'],
      demographiques: ['Structure par âge de la population active', 'Arrivée de nouvelles cohortes nombreuses sur le marché du travail'],
      historiques: ['Vagues successives de désindustrialisation', 'Transformations technologiques de longue durée (informatisation, automatisation, intelligence artificielle)'],
    },

    /* — 5. Manifestations — */
    manifestations: {
      comportements: ['Recherche active d\'emploi', 'Découragement et retrait progressif de la recherche', 'Acceptation d\'emplois en deçà de la qualification'],
      situations: ['Inscription auprès du service public de l\'emploi', 'Fin de droits à l\'assurance chômage', 'Reconversion professionnelle'],
      indicateurs: ['Taux de chômage au sens du BIT', 'Taux de chômage de longue durée', 'Halo autour du chômage'],
      pratiques: ['Formation ou reconversion pendant la période de chômage', 'Activités bénévoles ou informelles pour occuper le temps disponible'],
      evenements: ['Plan de licenciement collectif', 'Fermeture ou délocalisation d\'un site', 'Fin de contrat non renouvelé'],
      statistiques: [
        "Le taux de chômage des jeunes actifs est structurellement plus élevé que celui de l'ensemble de la population active — voir la rubrique Mesurer pour la méthode et ses limites.",
        "Une part substantielle des chômeurs le sont depuis un an ou plus, la part augmentant sensiblement avec l'âge au moment de la perte d'emploi.",
      ],
    },

    /* — 6. Mécanismes sociaux — */
    mecanismeSchema: [
      'Choc économique (récession, restructuration, automatisation)',
      'Destruction nette d\'emplois dans certains secteurs ou territoires',
      'Segmentation du marché du travail (les moins qualifiés en subissent le plus)',
      'Chômage de longue durée',
      'Déclassement puis désaffiliation',
    ],
    mecanismes: [
      'destruction-creatrice-d-emplois',
      'segmentation-du-marche-du-travail',
      'choc-biographique',
      'devaluation-des-diplomes',
      'discrimination-statistique',
      'stigmatisation',
      'ajustement-des-aspirations',
      'rupture-du-lien-social',
    ],

    /* — 7. Conséquences — */
    consequences: {
      individuelles: ['Perte d\'identité professionnelle', 'Perte de statut social', 'Rétrécissement de la sociabilité amicale'],
      familiales: ['Tensions ou recompositions au sein du foyer', 'Report de la charge économique sur le conjoint'],
      professionnelles: ['Dévalorisation de la trajectoire professionnelle', 'Employabilité qui se dégrade avec la durée du chômage'],
      economiques: ['Baisse durable de revenu', 'Épuisement progressif de l\'épargne disponible'],
      sanitaires: ['Dégradation de la santé mentale (anxiété, dépression)', 'Renoncement aux soins non urgents'],
      scolaires: ['Moindres ressources consacrées à la scolarité des enfants', 'Orientation des enfants vers des filières jugées plus sûres'],
      territoriales: ['Concentration du chômage dans certains bassins d\'emploi', 'Dévitalisation économique locale'],
      politiques: ['Défiance accrue envers les institutions', 'Abstention électorale plus fréquente'],
      intergenerationnelles: ['Transmission du risque de chômage', 'Moindres ressources transmises aux enfants'],
    },

    /* — 8. Dynamiques — */
    dynamiques: {
      aggravation: "Chaque mois de chômage supplémentaire réduit statistiquement les chances de retour à l'emploi, indépendamment des qualifications : la durée devient elle-même un signal défavorable pour les recruteurs.",
      reduction: "Une reprise économique, une formation qualifiante ou un accompagnement intensif peuvent inverser la trajectoire, à condition d'intervenir avant que le chômage ne s'installe durablement.",
      stabilisation: "Une installation dans un chômage de longue durée, ni aggravé ni résorbé, notamment en fin de carrière quand le retour à l'emploi devient statistiquement rare.",
      transformation: "Le déplacement progressif du risque, du seul chômage vers des formes hybrides d'emploi précaire et de sous-emploi, plus difficiles à mesurer par les seuls indicateurs classiques.",
      cycles: "Des alternances entre emploi et chômage tout au long d'une carrière, plus fréquentes dans certains secteurs, plutôt qu'un épisode unique et définitif.",
      effetsDeSeuil: "La fin des droits à l'assurance chômage peut faire basculer brutalement une situation stabilisée vers les minima sociaux, sans dégradation progressive de la situation elle-même.",
      effetsCumulatifs: "La durée du chômage dévalorise l'expérience acquise plus vite qu'elle ne se construit, ce qui rend chaque mois supplémentaire plus coûteux que le précédent.",
      reproductionIntergenerationnelle: "Grandir dans un foyer durablement touché par le chômage accroît, selon plusieurs études, le risque de connaître soi-même des épisodes de chômage à l'âge adulte.",
    },

    /* — 9. Mesurer la problématique — */
    mesure: {
      description:
        "Le chômage se mesure de plusieurs façons qui ne se recoupent pas exactement : le nombre d'inscrits auprès du service public de l'emploi, le taux au sens du Bureau international du travail, et le halo qui entoure ce dernier répondent à des définitions différentes et donnent des chiffres différents pour une même réalité.",
      statistiques: [
        'taux-de-chomage-bit',
        'halo-du-chomage',
        'taux-de-chomage-des-jeunes',
        'chomage-longue-duree',
      ],
      limites: [
        "Le taux au sens du BIT exige à la fois l'absence d'emploi, la disponibilité et une recherche active récente, ce qui exclut des personnes qui se considèrent elles-mêmes comme au chômage.",
        "Le nombre d'inscrits auprès du service public de l'emploi dépend aussi des règles d'indemnisation et de contrôle, qui influencent qui s'inscrit et qui ne s'inscrit pas, indépendamment de la situation réelle sur le marché du travail.",
        "Aucun de ces indicateurs ne dit rien de la qualité des emplois retrouvés après une période de chômage, ni du sous-emploi qui touche certaines personnes techniquement en emploi.",
      ],
    },

    /* — 10. Débats sociologiques — */
    debats: [
      {
        t: 'Chômage volontaire ou involontaire',
        d: "Keynes distingue un chômage volontaire, où la personne refuse un emploi au salaire proposé, d'un chômage involontaire, où elle ne trouve aucun emploi malgré une disposition à travailler au salaire courant — une distinction toujours disputée entre économistes.",
      },
      {
        t: 'Indemnisation et incitation au retour à l\'emploi',
        d: "Une indemnisation plus généreuse protège-t-elle mieux les personnes sans emploi, ou retarde-t-elle leur retour au travail en réduisant l'urgence de la recherche ? Les études empiriques restent partagées selon les contextes.",
      },
      {
        t: 'Flexibilité ou protection de l\'emploi',
        d: "Un marché du travail plus flexible facilite-t-il l'embauche en réduisant le risque perçu par l'employeur, ou fragilise-t-il davantage les salariés sans réduire durablement le chômage global ?",
      },
      {
        t: 'Insuffisance de la demande ou inadéquation structurelle',
        d: "Le chômage vient-il d'abord d'un manque de demande dans l'économie, qui se résorbe avec la croissance, ou d'une inadéquation plus profonde entre les compétences disponibles et les emplois proposés, que la croissance seule ne corrige pas ?",
      },
      {
        t: 'Fin du travail ou transformation du travail',
        d: "L'automatisation et l'intelligence artificielle annoncent-elles une réduction durable du volume total de travail disponible, ou seulement sa transformation vers d'autres activités, comme l'ont fait toutes les vagues technologiques précédentes ?",
      },
    ],

    /* — 11. Politiques publiques — */
    politiquesPubliques: ['assurance-chomage-are', 'france-travail', 'prime-activite', 'rsa'],

    /* — 12. Liens avec Sociologor — */
    phenomenes: ['chomage', 'precarite-professionnelle', 'declassement-social', 'exclusion-sociale', 'pauvrete', 'inegalites-generationnelles'],
    concepts: ['anomie', 'tension-anomique', 'alienation', 'role-et-attentes', 'etiquetage', 'stigmate', 'individualisme-methodologique', 'effets-pervers'],
    processus: ['declassement', 'desaffiliation', 'precarisation'],
    theories: ['fonctions-latentes-emploi-jahoda', 'marche-du-travail-segmente-doeringer-piore', 'destruction-creatrice-schumpeter'],
    auteurs: ['durkheim', 'merton', 'marx', 'goffman', 'becker'],
    etudes: ['marienthal-etude', 'doeringer-piore-terrain'],
    problematiquesConnexes: ['pauvrete', 'exclusion-sociale', 'inegalites'],
  },
  {
    id: 'discrimination',
    categorie: 'inegalites-et-conditions-de-vie',

    /* — 1. Identité — */
    t: 'Discrimination',
    synonymes: [],
    simple:
      "Le traitement défavorable et injustifié d'une personne en raison d'une caractéristique — réelle ou supposée — plutôt qu'en raison de ses actes ou de ses compétences, sur un critère que le droit ou la morale jugent illégitime.",
    detaille: [
      "Le droit français reconnaît vingt-cinq critères de discrimination prohibés, parmi lesquels l'origine, le sexe, l'âge, le handicap, la religion, l'apparence physique, l'orientation sexuelle ou le lieu de résidence ne sont que les plus documentés — voir la rubrique Population concernée pour les principaux.",
      "Discriminer ne suppose pas toujours une intention hostile déclarée. La discrimination directe traite ouvertement différemment sur un critère prohibé ; l'indirecte applique une règle en apparence neutre qui désavantage en pratique un groupe donné ; l'institutionnelle et la systémique se logent dans le fonctionnement ordinaire des organisations, sans acte isolé identifiable ; la statistique traite une moyenne de groupe comme une information individuelle ; l'intersectionnelle, enfin, résulte du croisement de plusieurs critères à la fois, sans se réduire à la somme de chacun pris séparément — voir la rubrique Sous-catégories.",
    ],
    sousCategories: [
      { t: 'Discrimination directe', d: "Un traitement ouvertement différent, fondé explicitement sur un critère prohibé — refuser un logement en raison de l'origine déclarée du candidat." },
      { t: 'Discrimination indirecte', d: "Une règle formellement neutre qui désavantage en pratique un groupe donné, sans le viser nommément — une exigence de taille minimale qui écarte disproportionnellement les femmes." },
      { t: 'Discrimination institutionnelle', d: "Une discrimination logée dans les règles et procédures ordinaires d'une organisation, reproduite sans qu'aucun individu n'ait besoin d'exprimer une intention hostile à aucune étape." },
      { t: 'Discrimination systémique', d: "Le même mécanisme que l'institutionnelle, mais étendu à l'ensemble d'un système social — marché du travail, logement, justice — au-delà d'une seule organisation." },
      { t: 'Discrimination statistique', d: "Le fait de traiter une caractéristique de groupe comme une information individuelle fiable, faute de connaître réellement la personne évaluée." },
      { t: 'Discrimination intersectionnelle', d: "Une discrimination qui résulte du croisement de plusieurs critères à la fois — origine et genre, par exemple — et qui ne se réduit à la discrimination que subirait chaque critère pris isolément." },
    ],
    motsCles: ['stéréotype', 'préjugé', 'testing', 'égalité de traitement', 'critères prohibés', 'biais'],
    gravite:
      "Un phénomène mesuré depuis les années 2000 en France par des méthodes expérimentales (testing) autant que déclaratives, suivi par une autorité indépendante dédiée depuis 2004 : voir la rubrique Mesurer pour le détail des méthodes et leurs limites.",

    /* — 2. Comprendre la problématique — */
    description: [
      "La discrimination se distingue du préjugé, une attitude, et du stéréotype, une croyance : elle en est l'effet observable sur une décision réelle — une candidature écartée, un logement refusé, un contrôle déclenché.",
      "Elle se distingue aussi des inégalités en général : toute inégalité n'est pas une discrimination — un écart de salaire lié à l'ancienneté ne l'est pas — mais toute discrimination avérée produit, en s'accumulant, des inégalités mesurables entre les groupes qui en sont la cible et les autres.",
    ],
    origineEmergence:
      "La discrimination comme catégorie juridique et sociale distincte émerge avec les mouvements pour les droits civiques du XXᵉ siècle, en particulier aux États-Unis, où elle donne lieu aux premiers cadres légaux et aux premiers outils de mesure sociologique.",
    contexteHistorique:
      "Les luttes pour l'égalité des droits civiques dans les années 1950 et 1960 imposent l'idée qu'un traitement inégal, même sans loi le formalisant explicitement, peut constituer une injustice à corriger par le droit et l'action publique.",
    evolutionHistorique: [
      { p: '1954', f: "Allport publie The Nature of Prejudice et distingue catégorisation ordinaire et préjugé proprement dit." },
      { p: '1954', f: "Sherif mène l'expérience de la caverne des voleurs, qui montre la formation rapide de préjugés intergroupes." },
      { p: '1967', f: "Carmichael et Hamilton forgent la notion de racisme institutionnel, au-delà des seuls actes individuels." },
      { p: '1972–1973', f: "Arrow et Phelps formalisent la théorie de la discrimination statistique." },
      { p: '1989', f: "Crenshaw formule la théorie de l'intersectionnalité à partir de jurisprudences américaines." },
      { p: '2001', f: "La France adopte sa première loi transversale de lutte contre les discriminations, avec aménagement de la charge de la preuve." },
      { p: '2004', f: "Bertrand et Mullainathan publient leur étude de testing sur les prénoms à consonance raciale, largement reprise depuis." },
      { p: '2011', f: "Le Défenseur des droits reprend et élargit les missions de la HALDE, créée en 2004." },
    ],
    situationActuelle:
      "La mesure de la discrimination s'appuie aujourd'hui à la fois sur des méthodes expérimentales (testing) et déclaratives (enquêtes de perception), avec une attention croissante portée aux discriminations intersectionnelles et aux formes institutionnelles ou systémiques, plus difficiles à établir qu'un acte isolé.",
    dimensionIndividuelle:
      "Vécue comme une atteinte à la dignité et une incertitude permanente — ne jamais savoir avec certitude si tel refus tient à une discrimination ou à une autre cause.",
    dimensionCollective:
      "Un phénomène statistiquement mesurable par comparaison entre groupes, qui structure l'accès collectif à l'emploi, au logement et aux services, au-delà de chaque situation individuelle.",
    dimensionStructurelle:
      "Le produit attendu de catégorisations sociales ordinaires, de rapports de domination hérités et de procédures institutionnelles peu contrôlées — ce que la rubrique Facteurs détaille.",

    /* — 3. Population concernée — */
    population: {
      generale:
        "Toute personne peut en principe subir une discrimination sur l'un des critères reconnus, mais l'exposition reste très concentrée sur certains groupes, identifiables par les vingt-cinq critères que le droit français reconnaît.",
      groupesExposes: [
        "Personnes perçues comme d'origine étrangère ou ultramarine",
        "Femmes, et personnes ne correspondant pas aux normes de genre attendues",
        "Jeunes actifs et seniors, aux deux extrémités de la pyramide des âges",
        "Personnes en situation de handicap visible ou déclaré",
        "Personnes perçues comme pratiquantes d'une religion minoritaire",
        "Personnes dont l'apparence physique s'écarte des normes dominantes (poids, tenue, signes visibles)",
        "Personnes LGBT+",
        "Personnes des classes populaires, perçues à l'adresse, à l'accent ou au vocabulaire",
        "Habitants de quartiers stigmatisés, notamment de la politique de la ville",
      ],
      age: "Les jeunes actifs et les salariés de plus de 50 ans figurent parmi les groupes d'âge les plus souvent cités dans les études de discrimination à l'embauche.",
      genre: "Les femmes restent davantage exposées aux discriminations liées à la maternité et à la progression de carrière ; les personnes ne correspondant pas aux attentes de genre le sont dans des registres plus larges encore.",
      csp: "Les personnes perçues comme issues des classes populaires, à l'adresse, à l'accent ou à la présentation, rapportent des discriminations dans l'accès à certains emplois ou services indépendamment de l'origine ou du genre.",
      revenu: "Le niveau de revenu module la capacité à contourner une discrimination — changer de quartier, recourir à un avocat — plus qu'il n'en détermine directement l'exposition.",
      education: "Un niveau de diplôme élevé réduit certaines discriminations sans les annuler : les études de testing montrent des écarts de traitement y compris à diplôme égal ou supérieur.",
      territoire: "Les habitants de quartiers associés dans l'opinion à une origine ou à une classe sociale particulière rapportent des discriminations liées à leur seule adresse, y compris à CV par ailleurs identique.",
      situationFamiliale: "La grossesse et la parentalité restent citées parmi les motifs de discrimination professionnelle les plus fréquemment rapportés par les femmes.",
      statutProfessionnel: "Les personnes en recherche d'emploi ou en contrat précaire sont les plus exposées aux discriminations à l'embauche, faute de statut stable qui protège des décisions arbitraires.",
    },

    /* — 4. Causes et facteurs — */
    facteurs: {
      economiques: ['Rareté relative de certains emplois ou logements, qui accroît le tri sur des critères informels', 'Coûts d\'adaptation perçus, à tort ou à raison, comme liés à la différence'],
      sociaux: ['Préjugés diffusés par la socialisation ordinaire', 'Entre-soi social qui limite les contacts réguliers entre groupes'],
      culturels: ['Normes esthétiques et comportementales dominantes érigées en référence implicite', 'Stéréotypes véhiculés par les représentations culturelles et médiatiques'],
      politiques: ['Ancienneté et portée inégale du cadre légal antidiscrimination selon les critères', 'Priorité politique inégale donnée à la lutte contre la discrimination selon les périodes'],
      institutionnels: ['Procédures de sélection peu encadrées, laissant place au jugement subjectif', 'Absence de contrôle systématique des pratiques de recrutement ou d\'attribution'],
      territoriaux: ['Ségrégation résidentielle préexistante qui associe origine sociale et lieu de résidence', 'Concentration de certains groupes dans des quartiers eux-mêmes stigmatisés'],
      demographiques: ['Visibilité et taille relative de certains groupes minoritaires', 'Évolution de la composition de la population active'],
      historiques: ['Héritages coloniaux et migratoires jamais pleinement soldés', 'Discriminations passées inscrites dans des habitudes institutionnelles anciennes'],
    },

    /* — 5. Manifestations — */
    manifestations: {
      comportements: ['Autocensure dans les candidatures ou les démarches', 'Évitement anticipé de certains lieux ou services', 'Vigilance accrue dans les interactions avec les institutions'],
      situations: [
        "Emploi : écarts de convocation à l'entretien selon le nom, l'adresse ou la photo apparaissant sur un CV par ailleurs identique",
        "Logement : refus de visite ou de bail fondés sur l'origine perçue du nom ou du profil du candidat locataire",
        "École : orientation différenciée à compétences égales selon l'origine sociale ou perçue",
        "Santé : écoute clinique ou prise en charge différenciée selon l'origine, le poids ou le genre du patient",
        "Police : contrôles d'identité disproportionnés selon l'apparence physique",
        "Justice : décisions statistiquement corrélées à l'origine ou au statut social du prévenu, à faits comparables",
        "Services publics : traitement différencié des démarches administratives selon l'accent, le nom ou l'apparence",
        "Consommation : refus de service ou tarification différenciée dans le commerce ou les loisirs",
      ],
      indicateurs: ['Écart de taux de réponse mesuré par testing', 'Part de la population déclarant avoir vécu une discrimination'],
      pratiques: ['Recrutement par cooptation plutôt que par annonce ouverte', 'Recours à des critères informels non déclarés (présentation, adresse)'],
      evenements: ['Saisine du Défenseur des droits', 'Procès pour discrimination', 'Testing rendu public par une association ou un média'],
      statistiques: [
        "Les candidatures perçues comme issues de l'immigration doivent, selon plusieurs études de testing françaises et internationales, être envoyées significativement plus souvent pour obtenir un même taux de réponse positive — voir la rubrique Mesurer pour la méthode et ses limites.",
        "Une part significative de la population déclare avoir personnellement vécu une situation de discrimination, la proportion étant nettement plus élevée dans certains groupes minoritaires.",
      ],
    },

    /* — 6. Mécanismes sociaux — */
    mecanismeSchema: [
      'Catégorisation sociale ordinaire (origine, genre, âge…)',
      'Stéréotype et préjugé attachés à la catégorie',
      'Biais dans une décision concrète (embauche, logement, contrôle)',
      'Discrimination répétée et cumulée',
      'Inégalités mesurables entre groupes',
    ],
    mecanismes: [
      'categorisation-sociale',
      'discrimination-statistique',
      'stigmatisation',
      'segregation-residentielle',
      'naturalisation-des-inegalites',
    ],

    /* — 7. Conséquences — */
    consequences: {
      individuelles: ['Autocensure et perte de confiance en soi', 'Vigilance chronique face à l\'anticipation d\'un refus'],
      familiales: ['Transmission de stratégies de prudence ou de méfiance envers certaines institutions'],
      professionnelles: ['Perte d\'opportunités d\'embauche ou de promotion à compétences égales', 'Orientation contrainte vers des postes ou secteurs perçus comme plus accessibles'],
      economiques: ['Creusement des inégalités de revenu déjà présentes', 'Moindre valorisation salariale de qualifications pourtant équivalentes'],
      sanitaires: ['Stress chronique lié à l\'anticipation de la discrimination', 'Moindre recours aux soins par méfiance envers certaines institutions'],
      scolaires: ['Orientation subie plutôt que choisie', 'Découragement scolaire face à un traitement perçu comme inéquitable'],
      territoriales: ['Renforcement de la ségrégation résidentielle déjà présente'],
      politiques: ['Défiance envers les institutions perçues comme discriminantes', 'Désengagement civique et électoral'],
      intergenerationnelles: ['Transmission du risque de discrimination', 'Transmission de stratégies d\'évitement ou d\'adaptation aux enfants'],
    },

    /* — 8. Dynamiques — */
    dynamiques: {
      aggravation: "Le cumul de discriminations sur plusieurs critères à la fois (intersectionnalité) aggrave l'exposition au-delà de ce que chaque critère produirait séparément.",
      reduction: "Un cadre légal appliqué, des procédures de recrutement encadrées et un contact intergroupe organisé autour d'un but commun réduisent mesurablement le préjugé et la discrimination qui en découle.",
      stabilisation: "Un niveau de discrimination mesuré qui se maintient dans le temps malgré un cadre légal établi, quand son application reste peu contrôlée en pratique.",
      transformation: "Le déplacement progressif de l'attention, des discriminations directes et déclarées vers les formes institutionnelles, systémiques et intersectionnelles, plus difficiles à établir mais tout aussi mesurables par testing.",
      cycles: "Des phases de mobilisation publique et judiciaire, suivies de périodes de relâchement de l'attention institutionnelle, sans que le niveau réel mesuré ne suive nécessairement le même rythme.",
      effetsDeSeuil: "La visibilité d'un critère (accent, tenue, nom) peut déclencher un traitement défavorable au-delà d'un certain seuil de perceptibilité, sans gradation progressive en deçà.",
      effetsCumulatifs: "Chaque discrimination subie augmente la probabilité d'anticiper et donc d'éviter certaines démarches, ce qui réduit d'autant les occasions de contester la discrimination suivante.",
      reproductionIntergenerationnelle: "Les stratégies d'évitement et de prudence apprises face à la discrimination se transmettent souvent d'une génération à l'autre, au même titre que l'exposition au risque lui-même.",
    },

    /* — 9. Mesurer la problématique — */
    mesure: {
      description:
        "Deux grandes familles de méthodes se complètent sans se recouvrir : les méthodes expérimentales, comme le testing, mesurent un écart de traitement sans jamais interroger personne ; les enquêtes déclaratives mesurent ce que les personnes concernées perçoivent et nomment elles-mêmes comme une discrimination.",
      statistiques: ['ecart-de-callback-testing', 'indice-discrimination-percue'],
      limites: [
        "Le testing isole un seul critère à la fois et ne mesure qu'une étape du parcours (l'obtention d'un entretien, par exemple), sans rien dire de ce qui se passe ensuite.",
        "Les enquêtes déclaratives dépendent de ce que chacun reconnaît comme une discrimination, une catégorie inégalement connue et mobilisée selon l'information et l'expérience de la personne interrogée.",
        "La loi française interdit par principe la constitution de statistiques ethniques, ce qui prive la recherche française d'un outil que d'autres pays utilisent pour objectiver certaines discriminations.",
      ],
    },

    /* — 10. Débats sociologiques — */
    debats: [
      {
        t: 'Discrimination intentionnelle ou discrimination sans intention',
        d: "Faut-il une intention hostile identifiable pour qualifier une discrimination, ou le seul résultat inégal d'une procédure en apparence neutre suffit-il, comme l'admettent les notions de discrimination indirecte et systémique ?",
      },
      {
        t: 'Le testing comme preuve',
        d: "Un écart statistique mesuré par testing suffit-il à établir juridiquement une discrimination dans un cas individuel, ou seulement à révéler une tendance générale sans valeur de preuve pour une situation particulière ?",
      },
      {
        t: 'Statistiques ethniques',
        d: "Faut-il autoriser des statistiques fondées sur l'origine pour mieux mesurer et combattre la discrimination, au risque de figer juridiquement des catégories raciales, ou maintenir l'interdiction actuelle par principe d'égalité formelle ?",
      },
      {
        t: 'Actions positives',
        d: "Faut-il corriger des discriminations avérées par des politiques qui traitent différemment certains groupes pour rétablir un équilibre, au risque d'être elles-mêmes qualifiées de discriminantes envers d'autres ?",
      },
      {
        t: 'Intersectionnalité comme grille d\'action publique',
        d: "Une grille d'analyse qui combine plusieurs critères à la fois rend-elle l'action publique plus juste et plus précise, ou trop complexe à traduire en politiques concrètes et en catégories juridiques opérationnelles ?",
      },
    ],

    /* — 11. Politiques publiques — */
    politiquesPubliques: ['defenseur-des-droits', 'loi-lutte-discriminations-2001'],

    /* — 12. Liens avec Sociologor — */
    phenomenes: ['discrimination-a-l-embauche', 'grossophobie', 'incarceration-de-masse', 'segregation-urbaine', 'ecart-salarial', 'exclusion-sociale'],
    concepts: ['etiquetage', 'stigmate', 'domination-legitime', 'violence-symbolique', 'ideologie', 'statut-social', 'classe-sociale', 'capital-symbolique'],
    processus: ['desaffiliation', 'declassement', 'precarisation'],
    theories: [
      'nature-du-prejuge-allport',
      'discrimination-statistique-arrow-phelps',
      'racisme-institutionnel-carmichael-hamilton',
      'intersectionnalite-crenshaw',
    ],
    auteurs: ['goffman', 'becker', 'weber', 'bourdieu', 'marx'],
    etudes: ['bertrand-mullainathan-testing', 'crenshaw-analyse-juridique', 'robbers-cave-sherif'],
    problematiquesConnexes: ['exclusion-sociale', 'inegalites', 'chomage'],
  },
  {
    id: 'logement',
    categorie: 'inegalites-et-conditions-de-vie',

    /* — 1. Identité — */
    t: 'Logement',
    synonymes: [],
    simple:
      "L'accès inégal à un habitat stable, décent et abordable — un enjeu qui conditionne, plus qu'aucun autre, l'accès à l'emploi, à l'école, à la santé et aux relations sociales.",
    detaille: [
      "Le logement n'est pas qu'un toit : c'est le point d'ancrage à partir duquel se construisent ou se referment presque tous les autres accès — une adresse détermine l'école de secteur, la distance à l'emploi, et jusqu'à la manière dont un dossier de location ou une candidature sont reçus ailleurs.",
      "La question du logement se décline en plusieurs difficultés distinctes qui se recoupent sans se confondre — l'absence de toit, l'insalubrité, le surpeuplement, le coût excessif, la difficulté d'accès — chacune appelant des réponses différentes, même si elles touchent souvent les mêmes ménages à la fois.",
    ],
    sousCategories: [
      { t: 'Mal-logement', d: "Le terme générique qui recouvre l'ensemble des situations où le logement occupé ne permet pas de vivre dans des conditions dignes, de l'absence de toit au logement simplement inadapté." },
      { t: 'Sans-abrisme', d: "L'absence de tout logement personnel, la forme la plus visible et la plus sévère du mal-logement." },
      { t: 'Logement insalubre', d: "Un logement dont l'état — humidité, moisissures, installations dangereuses — présente un risque direct pour la santé de ses occupants." },
      { t: 'Surpeuplement', d: "Un logement dont le nombre de pièces ne correspond pas à la taille du ménage qui l'occupe, faute de moyens pour accéder à plus grand." },
      { t: 'Précarité énergétique', d: "La difficulté à chauffer correctement son logement à un coût raisonnable, entre mauvaise isolation du bâti et faiblesse des revenus." },
      { t: 'Difficulté d\'accès au logement', d: "Les obstacles rencontrés pour obtenir un logement — garanties exigées, discrimination, délais d'attente — indépendamment de l'état du logement finalement occupé." },
      { t: 'Logement social', d: "Le parc de logements à loyer encadré, réservé sous conditions de ressources, dont l'insuffisance dans certains territoires allonge les délais d'attente." },
      { t: 'Coût du logement', d: "Le poids du loyer ou du remboursement dans le budget d'un ménage, devenu le premier poste de dépense pour une large part des locataires du parc privé." },
      { t: 'Gentrification', d: "La transformation d'un quartier populaire par l'arrivée de ménages plus aisés, qui en fait monter les prix jusqu'à évincer progressivement les habitants d'origine." },
    ],
    motsCles: ['mal-logement', 'ségrégation résidentielle', 'gentrification', 'logement social', 'taux d\'effort', 'précarité énergétique'],
    gravite:
      "Une problématique suivie chaque année par l'enquête Logement de l'INSEE et par des associations spécialisées, avec des indicateurs allant du taux d'effort au nombre de personnes sans domicile : voir la rubrique Mesurer pour le détail et ses limites.",

    /* — 2. Comprendre la problématique — */
    description: [
      "Le logement concentre, plus qu'aucun autre domaine, l'effet cumulatif des inégalités : le prix d'un logement dépend du quartier, le quartier détermine l'école et la distance à l'emploi, et ce que l'on peut payer dépend de l'emploi déjà obtenu — une boucle qui se referme sur elle-même plus qu'elle ne s'ouvre.",
      "L'école de Chicago, dans les années 1920, a la première cartographié la ville comme un espace socialement trié plutôt que neutre : ce que Park et Burgess observaient à l'échelle d'anneaux concentriques se retrouve aujourd'hui, sous des formes différentes, dans la plupart des grandes métropoles.",
    ],
    origineEmergence:
      "La question du logement comme problème social distinct émerge avec l'urbanisation industrielle du XIXᵉ siècle, quand l'afflux de population vers les villes fait apparaître des taudis urbains et les premières politiques de logement social, d'abord portées par le patronat et les œuvres charitables.",
    contexteHistorique:
      "La reconstruction d'après-guerre et les Trente Glorieuses donnent naissance aux grands ensembles, conçus pour résorber la crise du logement, avant que leur relégation progressive n'en fasse, plusieurs décennies plus tard, un symbole de la ségrégation urbaine qu'ils devaient combattre.",
    evolutionHistorique: [
      { p: '1920–1930', f: "L'école de Chicago cartographie la ville en zones concentriques et fonde la sociologie urbaine moderne." },
      { p: '1945–1975', f: "La construction massive de grands ensembles répond à la crise du logement d'après-guerre." },
      { p: '1964', f: "Ruth Glass observe à Londres le remplacement des habitants populaires par des ménages plus aisés, et forge le mot gentrification." },
      { p: '1968', f: "Kain formule l'hypothèse de l'inadéquation spatiale entre lieux de résidence et lieux d'emploi." },
      { p: '2000', f: "La loi SRU impose des quotas de logement social aux communes urbaines françaises." },
      { p: '2007', f: "La loi DALO fait du logement un droit opposable devant la justice administrative." },
    ],
    situationActuelle:
      "Le coût du logement absorbe une part croissante du budget des ménages locataires du parc privé, tandis que la gentrification de certains centres-villes repousse une partie des ménages modestes vers des périphéries plus mal desservies par l'emploi et les services.",
    dimensionIndividuelle:
      "Vécue comme une insécurité résidentielle permanente pour certains, et comme une contrainte budgétaire de premier ordre pour beaucoup, qui pèse sur toutes les autres dépenses du foyer.",
    dimensionCollective:
      "Un marché où l'offre et la demande ne s'ajustent pas librement, tant les règles d'urbanisme, la fiscalité et les politiques de logement social pèsent sur qui peut se loger, et où.",
    dimensionStructurelle:
      "Le produit attendu de la rareté du foncier, des prix de l'immobilier et de l'ampleur — ou de l'insuffisance — de l'intervention publique sur le marché du logement — ce que la rubrique Facteurs détaille.",

    /* — 3. Population concernée — */
    population: {
      generale:
        "Le poids du logement dans le budget touche la quasi-totalité des ménages, mais son ampleur et ses formes les plus sévères — insalubrité, surpeuplement, absence de toit — restent concentrées sur une partie de la population.",
      groupesExposes: [
        'Ménages locataires du parc privé dans les grandes métropoles',
        'Familles nombreuses ou monoparentales à revenus modestes',
        'Jeunes actifs et étudiants en début de parcours résidentiel',
        'Personnes sans domicile ou en hébergement précaire',
        'Ménages candidats à un logement social en zone tendue',
        'Personnes discriminées dans l\'accès à la location',
      ],
      age: "Les jeunes actifs et les étudiants sont particulièrement exposés à la difficulté d'accès au logement, faute de garanties financières suffisantes ; les personnes âgées peuvent l'être à l'inadaptation du logement à la perte de mobilité.",
      genre: "Les femmes seules, notamment à la tête d'une famille monoparentale, sont plus souvent exposées à un taux d'effort logement élevé, à revenu comparable.",
      csp: "Les ouvriers et employés consacrent, en proportion de leur revenu, une part plus importante au logement que les cadres, à qualité de logement souvent inférieure.",
      revenu: "Le taux d'effort logement croît fortement à mesure que le revenu baisse, ce qui absorbe une part disproportionnée du budget des ménages les plus modestes.",
      education: "Le niveau de diplôme influence indirectement l'accès au logement, via son effet sur le revenu et la stabilité de l'emploi, deux critères déterminants pour un dossier de location.",
      territoire: "Le poids du logement varie fortement selon le territoire : très élevé dans les métropoles tendues, plus faible mais parfois couplé à un habitat dégradé dans certaines zones rurales ou périurbaines.",
      situationFamiliale: "Les familles nombreuses sont les plus exposées au surpeuplement, faute de logements suffisamment grands et abordables à la fois.",
      statutProfessionnel: "Les personnes en contrat précaire ou en recherche d'emploi rencontrent des difficultés accrues pour constituer un dossier de location jugé solvable par les bailleurs.",
    },

    /* — 4. Causes et facteurs — */
    facteurs: {
      economiques: ['Hausse des prix immobiliers dans les zones tendues', 'Écart croissant entre revenus des ménages et prix du logement', 'Insuffisance de l\'offre de logements neufs', 'Spéculation immobilière'],
      sociaux: ['Discrimination dans l\'accès à la location', 'Réseaux relationnels mobilisés pour trouver un logement'],
      culturels: ['Normes de confort et de surface jugées nécessaires', 'Aspirations résidentielles différenciées selon les générations'],
      politiques: ['Niveau d\'investissement public dans le logement social', 'Régulation ou non des loyers selon les territoires'],
      institutionnels: ['Règles d\'urbanisme limitant la construction', 'Lenteur des procédures d\'attribution de logement social'],
      territoriaux: ['Concentration urbaine et rareté du foncier disponible', 'Écarts de prix considérables entre métropoles et zones rurales'],
      demographiques: ['Croissance et décohabitation des ménages', 'Vieillissement de la population et taille décroissante des foyers'],
      historiques: ['Héritage du parc de grands ensembles construit pendant les Trente Glorieuses', 'Politiques de rénovation urbaine successives'],
    },

    /* — 5. Manifestations — */
    manifestations: {
      comportements: ['Renoncement à déménager malgré des besoins nouveaux', 'Sur-occupation acceptée faute d\'alternative abordable'],
      situations: ['Impayés de loyer', 'Files d\'attente pour un logement social', 'Coupures d\'énergie liées à la précarité énergétique'],
      indicateurs: ['Taux d\'effort logement', 'Taux de surpeuplement', 'Demandes de logement social en attente'],
      pratiques: ['Recours à la colocation ou à l\'hébergement chez des proches', 'Renoncement au confort thermique pour limiter la facture d\'énergie'],
      evenements: ['Expulsion locative', 'Vente à la découpe d\'un immeuble', 'Opération de rénovation urbaine'],
      statistiques: [
        "Le taux d'effort logement dépasse le seuil d'un tiers du revenu pour une part substantielle des locataires du parc privé — voir la rubrique Mesurer pour la méthode et ses limites.",
        "Le surpeuplement touche une part minoritaire mais non négligeable des ménages, nettement plus élevée en Île-de-France que dans le reste du territoire.",
      ],
    },

    /* — 6. Mécanismes sociaux — */
    mecanismeSchema: [
      'Hausse des prix et rareté de l\'offre dans les zones attractives',
      'Éloignement des ménages modestes vers des zones moins chères',
      'Ségrégation résidentielle et exclusion territoriale',
      'Éloignement des emplois, des écoles et des services',
      'Difficultés cumulées (scolaires, professionnelles, sanitaires)',
    ],
    mecanismes: ['segregation-residentielle', 'exclusion-territoriale', 'gentrification', 'mobilite-residentielle'],

    /* — 7. Conséquences — */
    consequences: {
      individuelles: ['Insécurité résidentielle chronique', 'Rétrécissement de la sociabilité lié à l\'éloignement ou à la honte du logement'],
      familiales: ['Tensions liées à la promiscuité et au surpeuplement', 'Vie familiale contrainte par le manque d\'espace'],
      professionnelles: ['Difficulté à accepter un emploi trop éloigné faute de logement abordable à proximité', 'Fatigue et coût liés à l\'allongement des trajets domicile-travail'],
      economiques: ['Part croissante du budget absorbée par le logement', 'Moindre épargne disponible pour les autres postes de dépense'],
      sanitaires: ['Problèmes respiratoires liés à l\'humidité et à l\'insalubrité', 'Stress chronique lié à l\'insécurité résidentielle'],
      scolaires: ['Moindres conditions de travail scolaire faute d\'espace calme', 'Fatigue liée à l\'allongement des trajets vers l\'école'],
      territoriales: ['Immobilité résidentielle forcée faute de moyens pour déménager', 'Éloignement croissant des bassins d\'emploi et des services'],
      politiques: ['Défiance envers des pouvoirs publics jugés inactifs face à la crise du logement'],
      intergenerationnelles: ['Transmission de conditions de logement dégradées', 'Héritage très inégal en matière de patrimoine immobilier'],
    },

    /* — 8. Dynamiques — */
    dynamiques: {
      aggravation: "La hausse des prix dans les zones les plus recherchées repousse continûment les ménages modestes vers des zones moins chères mais aussi moins bien desservies, ce qui aggrave l'éloignement des emplois et des services.",
      reduction: "Une offre de logements plus abondante, une régulation efficace des loyers ou un investissement soutenu dans le logement social peuvent desserrer la contrainte, sans qu'aucun levier isolé n'y suffise généralement.",
      stabilisation: "Un marché tendu qui se maintient sur longue période, sans amélioration ni dégradation nette, notamment dans les métropoles où la demande dépasse durablement l'offre disponible.",
      transformation: "Le déplacement progressif de la crise du logement, des grandes métropoles historiquement les plus chères vers des villes moyennes désormais elles-mêmes touchées par la hausse des prix.",
      cycles: "Des phases de gentrification qui, une fois un quartier devenu inabordable, en déplacent la pression vers un quartier voisin encore accessible, dans un mouvement qui se répète plutôt qu'il ne s'arrête.",
      effetsDeSeuil: "Le franchissement d'un taux d'effort logement trop élevé peut faire basculer brutalement un budget équilibré vers l'impayé, sans dégradation progressive préalable des autres revenus du ménage.",
      effetsCumulatifs: "Un logement mal situé éloigne de l'emploi, ce qui fragilise le revenu, ce qui réduit d'autant les possibilités de déménager vers un logement mieux situé.",
      reproductionIntergenerationnelle: "Les conditions de logement de l'enfance restent statistiquement liées à la position résidentielle occupée à l'âge adulte, notamment via le patrimoine immobilier transmis ou non par la famille.",
    },

    /* — 9. Mesurer la problématique — */
    mesure: {
      description:
        "La mesure croise plusieurs approches complémentaires : le coût rapporté au revenu (taux d'effort), la qualité du bâti (insalubrité, précarité énergétique), l'occupation (surpeuplement) et l'accès (files d'attente en logement social) — aucune ne suffit seule à décrire l'ensemble de la problématique.",
      statistiques: ['taux-effort-logement', 'taux-de-precarite-energetique', 'taux-de-surpeuplement', 'demande-logement-social-en-attente'],
      limites: [
        "Le taux d'effort logement ne tient pas compte du reste à vivre réel, très différent à taux d'effort identique selon le niveau de revenu du ménage.",
        "La demande de logement social en attente peut inclure des demandes anciennes non activement suivies, ce qui tend à surestimer la tension réellement observée.",
        "Aucun de ces indicateurs ne mesure directement la qualité de vie dans le logement, qui dépend aussi de facteurs non couverts comme le bruit, la luminosité ou l'état des parties communes.",
      ],
    },

    /* — 10. Débats sociologiques — */
    debats: [
      {
        t: 'Logement, bien marchand ou droit fondamental',
        d: "Le logement doit-il être traité comme un bien économique ordinaire, dont le prix s'ajuste à l'offre et à la demande, ou comme un droit fondamental que la collectivité doit garantir indépendamment du marché ?",
      },
      {
        t: 'Mixité sociale imposée ou libre choix résidentiel',
        d: "Des quotas de logement social comme ceux de la loi SRU sont-ils un outil légitime de mixité sociale, ou une atteinte au libre choix résidentiel des communes et de leurs habitants ?",
      },
      {
        t: 'Gentrification, renouvellement bénéfique ou déplacement forcé',
        d: "La transformation d'un quartier populaire par l'arrivée de ménages plus aisés améliore-t-elle les conditions de vie du quartier, ou déplace-t-elle simplement le problème vers les habitants qu'elle finit par évincer ?",
      },
      {
        t: 'Encadrement des loyers',
        d: "Plafonner les loyers protège-t-il les locataires en place, ou décourage-t-il l'investissement locatif et réduit-il, à terme, l'offre de logements disponibles ?",
      },
      {
        t: 'Construire plus ou mieux répartir l\'existant',
        d: "Faut-il d'abord augmenter l'offre de logements neufs, ou mieux répartir et mieux utiliser le parc déjà construit — logements vacants, sous-occupation — avant d'artificialiser de nouveaux terrains ?",
      },
    ],

    /* — 11. Politiques publiques — */
    politiquesPubliques: ['loi-sru-2000', 'loi-dalo-2007', 'aides-personnelles-au-logement', 'logement-dabord'],

    /* — 12. Liens avec Sociologor — */
    phenomenes: ['gentrification', 'segregation-urbaine', 'etalement-urbain', 'inegalites-territoriales', 'pauvrete', 'exclusion-sociale'],
    concepts: ['capital-economique', 'capital-social', 'capital-culturel', 'classe-sociale', 'position-sociale', 'blasement-urbain', 'domination-legitime'],
    processus: ['declassement', 'declin-social', 'mobilite-sociale', 'desaffiliation'],
    theories: ['gentrification-glass', 'inadequation-spatiale-kain', 'ecole-de-chicago-park-burgess', 'underclass'],
    auteurs: ['simmel', 'weber', 'bourdieu', 'marx'],
    etudes: ['glass-londres-1964', 'kain-etude-1968', 'chicago-cartographie-park-burgess'],
    problematiquesConnexes: ['pauvrete', 'exclusion-sociale', 'inegalites', 'chomage', 'discrimination'],
  },
  {
    id: 'precarite',
    categorie: 'inegalites-et-conditions-de-vie',

    /* — 1. Identité — */
    t: 'Précarité',
    synonymes: ['Instabilité sociale'],
    simple:
      "L'instabilité et l'incertitude d'une situation — d'emploi, de logement, de statut — plutôt que l'insuffisance de ses ressources : on peut être précaire sans être pauvre, et pauvre sans être précaire.",
    detaille: [
      "La distinction avec la pauvreté est essentielle, et souvent brouillée dans le langage courant. La pauvreté se définit par un niveau insuffisant de ressources, mesurable par un seuil : elle répond à la question combien. La précarité se définit par l'instabilité et l'incertitude d'une situation, quel que soit son niveau : elle répond à la question pour combien de temps, et avec quelle garantie. Un cadre en contrat court bien rémunéré est précaire sans être pauvre ; un retraité aux revenus modestes mais stables peut être pauvre sans être précaire.",
      "Les deux se recoupent statistiquement — la précarité expose au risque de pauvreté, et la pauvreté rend plus vulnérable à toute instabilité supplémentaire — sans jamais se confondre complètement : c'est précisément cet écart qui rend la distinction utile plutôt que purement académique.",
    ],
    sousCategories: [
      { t: "Précarité de l'emploi", d: "L'enchaînement de contrats courts, de missions d'intérim ou de temps partiel subi, sans garantie de continuité ni de perspective de carrière." },
      { t: 'Précarité des revenus', d: "Des ressources qui varient d'un mois à l'autre, rendant impossible toute prévision budgétaire fiable, même quand leur niveau moyen reste correct." },
      { t: 'Précarité du logement', d: "Une occupation instable — hébergement temporaire, bail précaire, risque d'expulsion — indépendamment du confort ou de la salubrité du logement occupé." },
      { t: 'Précarité familiale', d: "Des configurations familiales fragilisées ou en recomposition, qui privent d'un appui stable au moment où il serait le plus nécessaire." },
      { t: 'Précarité de santé', d: "Une couverture de soins incertaine ou interrompue, qui expose à renoncer aux soins par crainte du coût ou de la complexité des démarches." },
      { t: 'Précarité du statut administratif', d: "Un titre de séjour, un statut ou des droits sociaux dont le renouvellement n'est jamais acquis, ce qui installe une incertitude permanente sur la légalité même de la situation." },
      { t: "Précarité de l'accès aux droits", d: "Des droits théoriquement ouverts mais dont l'accès reste incertain, faute d'information, de démarches simples ou de continuité administrative." },
    ],
    motsCles: ['instabilité', 'incertitude', 'contrats courts', 'vulnérabilité', 'flexibilité', 'précariat'],
    gravite:
      "Une notion popularisée en France par le discours de Pierre Bourdieu en 1997 sur la précarité comme mode de domination, et théorisée à l'échelle internationale par Guy Standing sous le nom de précariat en 2011 : voir la rubrique Mesurer pour les indicateurs disponibles et leurs limites.",

    /* — 2. Comprendre la problématique — */
    description: [
      "Castel situe la précarité dans une zone intermédiaire de vulnérabilité, entre l'intégration (travail et liens stables) et la désaffiliation (les deux manquent à la fois) : ni installée, ni rompue, mais exposée à la moindre rupture supplémentaire que la zone d'intégration aurait absorbée sans peine.",
      "La précarité n'est pas propre aux situations de faible revenu : elle a gagné, depuis les années 1980, des catégories auparavant protégées par un statut stable, ce qui en fait un objet d'étude distinct de la seule pauvreté, avec ses mécanismes et ses conséquences propres.",
    ],
    origineEmergence:
      "Le mot s'impose en France dans les années 1970-1980, à mesure que la fin du plein emploi et la multiplication des contrats courts font émerger des situations d'instabilité que le seul vocabulaire de la pauvreté ne suffisait plus à décrire.",
    contexteHistorique:
      "La crise économique des années 1970 met fin à plusieurs décennies de croissance et de plein emploi, et les entreprises recourent de plus en plus à des formes d'emploi flexibles pour s'adapter à une conjoncture devenue incertaine.",
    evolutionHistorique: [
      { p: '1970–1980', f: "La fin du plein emploi et la multiplication des contrats courts font émerger le vocabulaire de la précarité en France." },
      { p: '1990', f: "La prime de précarité devient obligatoire en France, reconnaissant légalement un préjudice propre à l'instabilité du contrat." },
      { p: '1995', f: "Castel situe la vulnérabilité comme zone intermédiaire entre intégration et désaffiliation." },
      { p: '1997', f: "Bourdieu prononce à Grenoble son discours sur la précarité comme mode de domination généralisé." },
      { p: '2011', f: "Standing publie The Precariat et théorise une nouvelle classe sociale définie par l'instabilité plutôt que par le revenu." },
      { p: '2019', f: "La France instaure un bonus-malus sur la cotisation chômage pour limiter le recours abusif aux contrats courts." },
    ],
    situationActuelle:
      "La part des contrats courts dans les embauches a fortement progressé, tandis que le sujet reste au cœur des débats sur la réforme du droit du travail et de l'assurance chômage.",
    dimensionIndividuelle:
      "Vécue comme une incapacité à se projeter — dans un logement, une carrière, un projet familial — plus que comme un manque immédiat de ressources.",
    dimensionCollective:
      "Une transformation du rapport salarial observée à l'échelle de catégories entières, au-delà des seules situations individuelles, que Standing propose de lire comme l'émergence d'une classe sociale nouvelle.",
    dimensionStructurelle:
      "Le produit attendu de la flexibilisation du marché du travail et de droits sociaux encore largement construits autour du contrat stable — ce que la rubrique Facteurs détaille.",

    /* — 3. Population concernée — */
    population: {
      generale:
        "La précarité touche, à un moment ou un autre, une part croissante de la population active, dans des proportions et des durées très variables selon le secteur d'activité, l'âge et le niveau de qualification.",
      groupesExposes: [
        'Salariés enchaînant contrats courts et missions d\'intérim',
        'Salariés à temps partiel subi',
        'Jeunes actifs en insertion professionnelle',
        'Familles monoparentales ou en recomposition récente',
        'Personnes en situation administrative incertaine (titre de séjour à renouveler)',
        'Travailleurs indépendants aux revenus irréguliers',
      ],
      age: "Les jeunes actifs cumulent souvent plusieurs formes de précarité à la fois (emploi, logement, revenus) au moment de leur insertion professionnelle.",
      genre: "Les femmes sont surreprésentées parmi les salariés à temps partiel subi, une des formes les plus répandues de précarité de revenu.",
      csp: "Les employés et ouvriers sont plus exposés aux contrats courts que les cadres, dont l'emploi reste statistiquement plus stable même en période de ralentissement économique.",
      revenu: "La précarité touche des niveaux de revenu très divers : elle expose davantage au risque de pauvreté qu'elle n'en est la conséquence directe.",
      education: "Un diplôme élevé réduit l'exposition à la précarité de l'emploi sans l'annuler, notamment en tout début de carrière ou dans certains secteurs très concurrentiels.",
      territoire: "Certains territoires concentrent des activités structurellement précaires (saisonnier, tourisme), ce qui y installe une précarité récurrente plus qu'accidentelle.",
      situationFamiliale: "Une séparation ou une recomposition familiale récente fragilise souvent plusieurs dimensions à la fois — logement, revenu, garde d'enfants.",
      statutProfessionnel: "Les indépendants et micro-entrepreneurs aux revenus irréguliers cumulent souvent une précarité de revenu avec une protection sociale plus limitée que le salariat.",
    },

    /* — 4. Causes et facteurs — */
    facteurs: {
      economiques: ['Multiplication des contrats courts', 'Développement du temps partiel', 'Chômage récurrent ou de longue durée', 'Revenus faibles ou irréguliers'],
      sociaux: ['Séparation ou rupture familiale', 'Maladie ou accident réduisant la capacité de travail'],
      culturels: ['Faible qualification limitant l\'accès à des postes stables', 'Méconnaissance des droits sociaux disponibles'],
      politiques: ['Niveau de protection offert par le droit du travail', 'Générosité et conditions d\'accès des dispositifs de solidarité'],
      institutionnels: ['Absence ou insuffisance de protection sociale attachée à certains statuts d\'emploi', 'Complexité et durée des démarches de renouvellement de droits'],
      territoriaux: ['Concentration de l\'emploi précaire dans certains secteurs et territoires (saisonnier, tourisme)'],
      demographiques: ['Recomposition des trajectoires familiales et professionnelles sur une vie active'],
      historiques: ['Transformation du marché du travail depuis la fin du plein emploi des années 1970', 'Flexibilisation croissante des formes d\'emploi depuis les années 1980'],
    },

    /* — 5. Manifestations — */
    manifestations: {
      comportements: ['Renoncement à des projets de long terme (logement, enfant)', 'Vigilance budgétaire permanente'],
      situations: ['Enchaînement de contrats courts', 'Changements fréquents de logement', 'Démarches répétées pour renouveler des droits ou un statut'],
      indicateurs: ['Part des contrats courts dans les embauches', 'Taux de temps partiel subi'],
      pratiques: ['Cumul de plusieurs activités pour stabiliser un revenu', 'Recours à des aides ponctuelles ou à l\'entraide familiale'],
      evenements: ['Fin de contrat non renouvelé', 'Échéance d\'un droit social ou d\'un titre de séjour', 'Changement soudain de statut administratif'],
      statistiques: [
        "Une très large majorité des embauches se font aujourd'hui en contrat court plutôt qu'en contrat stable — voir la rubrique Mesurer pour la méthode et ses limites.",
        "Une part significative des personnes à temps partiel déclarent souhaiter travailler davantage sans y parvenir.",
      ],
    },

    /* — 6. Mécanismes sociaux — */
    mecanismeSchema: [
      'Situation initiale stable',
      'Choc ou fragilisation (contrat non renouvelé, séparation, maladie)',
      'Cumul de plusieurs instabilités à la fois',
      'Vulnérabilité installée',
      'Bascule possible vers le déclassement ou la pauvreté',
    ],
    mecanismes: ['normalisation-de-l-instabilite', 'cumul-de-precarites', 'vulnerabilite-sociale', 'choc-biographique', 'flexibilisation-du-travail', 'trappe-a-pauvrete'],

    /* — 7. Conséquences — */
    consequences: {
      individuelles: ['Incertitude permanente sur l\'avenir', 'Stress chronique', 'Difficulté à se projeter dans un projet de vie'],
      familiales: ['Report ou renoncement à des projets familiaux (enfant, installation commune)'],
      professionnelles: ['Alternance de contrats sans continuité de carrière', 'Renoncement à négocier ses conditions de travail par crainte du non-renouvellement'],
      economiques: ['Endettement pour compenser l\'irrégularité des revenus', 'Impossibilité de constituer une épargne de précaution'],
      sanitaires: ['Stress chronique et troubles du sommeil', 'Renoncement aux soins non urgents faute de couverture stable'],
      scolaires: ['Instabilité résidentielle et scolaire des enfants du foyer'],
      territoriales: ['Déménagements fréquents liés aux changements de situation professionnelle ou familiale'],
      politiques: ['Défiance envers des institutions perçues comme peu protectrices'],
      intergenerationnelles: ['Transmission d\'une insécurité économique et d\'un rapport anxieux à l\'avenir'],
    },

    /* — 8. Dynamiques — */
    dynamiques: {
      aggravation: "Le cumul de plusieurs précarités à la fois (emploi, logement, santé) aggrave chacune d'elles, dans un enchaînement qui dépasse la somme de leurs effets pris séparément.",
      reduction: "Un accès à un contrat stable, un logement pérenne ou une protection sociale continue peut interrompre la spirale, à condition d'intervenir avant que plusieurs instabilités ne se cumulent.",
      stabilisation: "Une installation durable dans la précarité, sans dégradation supplémentaire ni retour à la stabilité, notamment dans les secteurs où l'emploi précaire est devenu la norme plutôt que l'exception.",
      transformation: "L'extension de la précarité à des catégories auparavant protégées par un statut stable, au-delà des seuls emplois traditionnellement précaires.",
      cycles: "Des allers-retours entre stabilité et instabilité tout au long d'une trajectoire, plutôt qu'une bascule unique et définitive.",
      effetsDeSeuil: "La fin d'un contrat, d'un droit ou d'un statut peut faire basculer brutalement une situation stabilisée, sans dégradation progressive préalable.",
      effetsCumulatifs: "Chaque instabilité supplémentaire réduit la capacité à absorber la suivante, ce qui rend chaque nouveau choc plus coûteux que le précédent.",
      reproductionIntergenerationnelle: "Grandir dans un foyer marqué par l'instabilité de l'emploi ou du logement est associé à un risque accru de connaître soi-même des trajectoires précaires à l'âge adulte.",
    },

    /* — 9. Mesurer la problématique — */
    mesure: {
      description:
        "Mesurer la précarité suppose de mesurer une instabilité dans le temps, pas seulement un niveau à un instant donné : la part des contrats courts dans les embauches et le taux de temps partiel subi en sont les indicateurs les plus directs, complétés par les indicateurs de chômage de longue durée et de chômage au sens du BIT qui en mesurent une partie.",
      statistiques: ['part-contrats-courts-embauches', 'taux-temps-partiel-subi', 'chomage-longue-duree', 'taux-de-chomage-bit'],
      limites: [
        "Les statistiques d'emploi mesurent des stocks à un instant donné, quand la précarité se définit surtout par une instabilité dans le temps, plus difficile à capter par une photographie ponctuelle.",
        "Aucun indicateur usuel ne mesure directement le cumul de plusieurs précarités à la fois (emploi et logement, par exemple), pourtant central dans la définition sociologique du phénomène.",
        "La frontière entre précarité choisie et précarité subie reste largement déclarative et varie selon la situation personnelle de la personne interrogée au moment de l'enquête.",
      ],
    },

    /* — 10. Débats sociologiques — */
    debats: [
      {
        t: 'Précarité choisie ou subie',
        d: "Une part de la flexibilité observée est-elle recherchée par certains actifs (indépendance, économie de plateformes), ou la plupart des situations précaires restent-elles imposées faute d'alternative stable disponible ?",
      },
      {
        t: 'Flexibilité et sécurité (flexicurité)',
        d: "Une flexibilité accrue pour les employeurs peut-elle se combiner avec une sécurité réelle pour les salariés, comme le prétendent les modèles scandinaves, ou l'une se fait-elle nécessairement au détriment de l'autre ?",
      },
      {
        t: 'Le CDI comme norme ou comme anachronisme',
        d: "Faut-il continuer à faire du contrat à durée indéterminée la référence du droit du travail, ou adapter la protection sociale à des trajectoires professionnelles devenues structurellement plus fragmentées ?",
      },
      {
        t: 'Le précariat, une classe sociale ou une addition de situations',
        d: "Les personnes en situation de précarité partagent-elles des intérêts communs suffisants pour former une classe sociale au sens plein, comme le soutient Standing, ou seulement des situations juxtaposées trop diverses pour agir ensemble ?",
      },
      {
        t: 'Protection liée au statut ou protection universelle',
        d: "Faut-il détacher les droits sociaux du statut d'emploi occupé — portabilité des droits, revenu universel — pour mieux protéger des trajectoires précaires, ou maintenir des droits attachés à un statut, au risque d'en exclure ceux qui en changent trop souvent ?",
      },
    ],

    /* — 11. Politiques publiques — */
    politiquesPubliques: ['prime-de-precarite', 'bonus-malus-contrats-courts', 'rsa', 'assurance-chomage-are'],

    /* — 12. Liens avec Sociologor — */
    phenomenes: ['precarite-professionnelle', 'pauvrete', 'chomage', 'monoparentalite', 'exclusion-sociale', 'inegalites-de-sante'],
    concepts: ['tension-anomique', 'anomie', 'capital-social', 'ressources-sociales', 'nouvel-esprit-du-capitalisme', 'alienation', 'individualisme-methodologique', 'effets-pervers'],
    processus: ['precarisation', 'declassement', 'desaffiliation'],
    theories: ['precariat-standing', 'precarite-domination-bourdieu', 'desaffiliation-castel'],
    auteurs: ['boltanski', 'bourdieu', 'durkheim', 'merton', 'marx'],
    etudes: ['standing-recherche-oit', 'bourdieu-precarite-1997'],
    problematiquesConnexes: ['pauvrete', 'exclusion-sociale', 'inegalites', 'chomage', 'discrimination', 'logement'],
  },
  {
    id: 'vieillissement',
    categorie: 'age-et-generations',

    /* — 1. Identité — */
    t: 'Vieillissement',
    synonymes: ['Grand âge', 'Troisième et quatrième âge'],
    simple:
      "Deux réalités distinctes se cachent sous un même mot. Le vieillissement démographique désigne la part croissante des personnes âgées dans la population d'une société, un fait de structure mesurable statistiquement. Le vieillissement social désigne la manière dont cette société définit, traite et positionne ses membres âgés — statuts, rôles, représentations — indépendamment du seul âge biologique de chacun.",
    detaille: [
      "La distinction importe parce qu'elle sépare deux questions différentes. Le vieillissement démographique répond à combien : quelle proportion d'une population a franchi tel seuil d'âge, sous l'effet de l'allongement de l'espérance de vie et de la baisse de la fécondité. Le vieillissement social répond à comment : quelle place, quels droits, quelle utilité une société reconnaît-elle à ses membres les plus âgés, une construction sociale qui varie fortement d'une époque et d'un pays à l'autre, à structure démographique comparable.",
      "À l'intérieur même de la vieillesse, un gradient sépare deux âges très différents. Le troisième âge, à partir de la sortie de la vie active, correspond le plus souvent à une période d'autonomie préservée, parfois même de disponibilité nouvelle. Le quatrième âge, au-delà de 85 ans environ, concentre l'essentiel du risque de perte d'autonomie et de dépendance. Confondre les deux revient à traiter comme un bloc homogène des situations qui n'ont, en pratique, presque rien en commun.",
    ],
    sousCategories: [
      { t: 'Dimension démographique', d: "La part croissante des personnes âgées dans la population totale, sous l'effet conjoint de l'allongement de l'espérance de vie et du recul de la fécondité." },
      { t: 'Dimension économique', d: "Le financement des retraites et de la dépendance, et l'évolution du niveau de vie des personnes âgées comparé au reste de la population." },
      { t: 'Dimension familiale', d: "La réorganisation des solidarités entre générations au sein de la famille, de la garde des petits-enfants à l'aide apportée à un parent âgé." },
      { t: 'Dimension professionnelle', d: "Le maintien ou l'éviction des seniors du marché du travail, entre allongement de la vie active et discrimination liée à l'âge." },
      { t: 'Dimension sanitaire', d: "L'évolution de l'état de santé avec l'âge, la prévention de la perte d'autonomie et l'organisation des soins de longue durée." },
      { t: 'Dimension résidentielle', d: "Le choix, ou son absence, entre maintien à domicile, habitat adapté et entrée en établissement médicalisé." },
      { t: 'Dimension culturelle', d: "Les représentations sociales de la vieillesse, entre valorisation de l'expérience accumulée et dévalorisation liée au culte contemporain de la jeunesse." },
    ],
    motsCles: ['vieillissement démographique', 'retraite', 'dépendance', 'autonomie', 'âgisme', 'solidarité intergénérationnelle', 'grand âge'],
    gravite:
      "Un phénomène suivi de longue date par la démographie, et devenu un enjeu de politique publique majeur à mesure que les personnes de 65 ans ou plus représentent une part croissante et durablement installée de la population française — voir la rubrique Mesurer pour les indicateurs disponibles et leurs limites.",

    /* — 2. Comprendre la problématique — */
    description: [
      "La sociologie du vieillissement s'est longtemps organisée autour d'un débat entre deux thèses opposées : le désengagement, pour qui un retrait progressif des rôles sociaux est normal et même souhaitable de part et d'autre, et l'activité, pour qui bien vieillir suppose au contraire de maintenir le plus longtemps possible des rôles, des relations et des occupations comparables à ceux de la vie active.",
      "Aucune des deux thèses ne rend seule compte de la diversité des trajectoires : certaines personnes âgées se retirent sans le regretter, d'autres subissent un retrait qu'elles n'ont pas choisi — perte d'emploi, veuvage, mobilité réduite — et le confondent après coup avec un choix. La rubrique Débats revient sur cette tension.",
    ],
    origineEmergence:
      "La sociologie du vieillissement comme domaine de recherche distinct émerge dans l'après-guerre, quand la généralisation des systèmes de retraite transforme la fin de vie active, jusque-là une exception réservée à une minorité, en une étape de vie standardisée et massive.",
    contexteHistorique:
      "Avant la généralisation de la retraite, la plupart des travailleurs continuaient une activité jusqu'à ce que leurs forces les en empêchent, ou dépendaient directement de leur famille faute de revenu de remplacement ; l'invention d'une retraite financée collectivement crée, pour la première fois à cette échelle, un âge de la vie détaché du travail.",
    evolutionHistorique: [
      { p: '1945–1975', f: "La généralisation progressive de la sécurité sociale et de la retraite par répartition installe en France la retraite comme une étape de vie distincte, plutôt qu'une exception réservée à quelques-uns." },
      { p: '1952–1961', f: "Cumming et Henry mènent le Kansas City Study of Adult Life, base empirique de la théorie du désengagement qu'ils publient en 1961." },
      { p: '1972', f: "Lemon, Bengtson et Peterson formalisent la théorie de l'activité, en réponse directe à la thèse du désengagement." },
      { p: '1982', f: "Elias publie La Solitude des mourants et déplace l'analyse vers l'isolement produit par la médicalisation et l'institutionnalisation de la fin de vie." },
      { p: '2002', f: "La France crée l'allocation personnalisée d'autonomie (APA), premier dispositif national dédié à la perte d'autonomie des personnes âgées." },
      { p: '2015', f: "La loi relative à l'adaptation de la société au vieillissement réoriente la politique publique vers la prévention et le maintien à domicile." },
      { p: '2023', f: "La réforme des retraites relève l'âge légal de départ à 64 ans, dans un contexte de tension démographique croissante entre actifs et retraités." },
    ],
    situationActuelle:
      "Le vieillissement démographique s'accélère à mesure que les générations nombreuses de l'après-guerre atteignent le grand âge, tandis que le débat public reste concentré sur le financement des retraites et de la dépendance, sans consensus sur la répartition de cet effort entre générations.",
    dimensionIndividuelle:
      "Vécue comme une redéfinition progressive de soi après la perte du rôle professionnel, entre gains — temps disponible, fin de certaines contraintes — et pertes, à mesure que la santé et le réseau relationnel se fragilisent avec l'avancée en âge.",
    dimensionCollective:
      "Une transformation mesurable à l'échelle d'une société entière, qui redistribue le poids relatif des générations dans la population, l'électorat et les arbitrages budgétaires publics.",
    dimensionStructurelle:
      "Le produit attendu d'institutions — retraite, santé, marché du travail — construites autour d'un modèle en trois âges rigides (formation, travail, retraite) qui s'ajuste plus lentement que l'allongement réel de la durée de vie ne le voudrait — ce que la rubrique Facteurs détaille.",

    /* — 3. Population concernée — */
    population: {
      generale:
        "Le vieillissement concerne, par définition, l'ensemble d'une société qui vieillit et non une seule catégorie isolée du reste de la population — mais l'exposition à ses risques (perte d'autonomie, isolement, pauvreté) reste très inégalement répartie selon le parcours social de chacun.",
      groupesExposes: [
        'Personnes de 85 ans ou plus, les plus exposées à la perte d\'autonomie',
        'Femmes âgées vivant seules, notamment après un veuvage',
        'Anciens ouvriers et employés, aux pensions plus faibles et à l\'espérance de vie en bonne santé plus courte',
        'Personnes âgées isolées en zone rurale, éloignées des services de proximité',
        'Seniors sans emploi en fin de carrière, entre chômage de longue durée et retraite non encore accessible',
        'Aidants familiaux, souvent eux-mêmes avancés en âge',
      ],
      age: "Un gradient net sépare le troisième âge, à partir de la sortie de la vie active et généralement autonome, du quatrième âge, au-delà de 85 ans environ, où le risque de perte d'autonomie augmente fortement.",
      genre: "Les femmes, dont l'espérance de vie reste supérieure à celle des hommes, sont surreprésentées parmi les personnes très âgées et parmi les personnes seules après un veuvage, avec des pensions en moyenne inférieures du fait de carrières souvent plus courtes ou interrompues.",
      csp: "Les écarts de pension et d'espérance de vie en bonne santé restent fortement structurés par la catégorie socioprofessionnelle occupée pendant la vie active, au désavantage des ouvriers et des employés.",
      revenu: "Le niveau de vie des retraités s'est globalement rapproché de celui de l'ensemble de la population depuis les années 1970, sans effacer une pauvreté résiduelle chez les titulaires des pensions les plus faibles.",
      education: "Un niveau de diplôme plus élevé est associé à une espérance de vie en bonne santé plus longue et à un accès plus large aux dispositifs de prévention du vieillissement.",
      territoire: "Certains territoires ruraux concentrent une population âgée disproportionnée, du fait du départ des générations plus jeunes, dans des zones souvent moins bien dotées en services de santé et de proximité.",
      situationFamiliale: "Vivre seul, notamment après un veuvage, expose davantage à l'isolement ; à l'inverse, la proximité géographique ou la cohabitation avec des enfants reste une ressource importante face à la perte d'autonomie.",
      statutProfessionnel: "Retraités, actifs seniors en fin de carrière et chômeurs de longue durée proches de l'âge de la retraite connaissent des situations très différentes, entre stabilité acquise et incertitude prolongée.",
    },

    /* — 4. Causes et facteurs — */
    facteurs: {
      economiques: ['Coût croissant des systèmes de retraite par répartition', 'Dépenses de santé et de dépendance en hausse avec l\'âge', 'Écarts de pension hérités des écarts de carrière antérieurs'],
      sociaux: ['Réduction du réseau relationnel après la sortie de la vie active', 'Veuvage et isolement croissant avec l\'avancée en âge', 'Moindre sollicitation sociale des personnes très âgées'],
      culturels: ['Valorisation sociale de la jeunesse et de la performance physique', 'Représentations dévalorisantes de la vieillesse dans les médias et la publicité', 'Faible place accordée à la transmission des savoirs anciens'],
      politiques: ['Arbitrages budgétaires entre retraite, dépendance et autres dépenses sociales', 'Débats récurrents sur l\'âge légal de départ à la retraite'],
      institutionnels: ['Organisation de la vie en trois âges rigides (formation, travail, retraite)', 'Cloisonnement des dispositifs entre maintien à domicile et hébergement en établissement', 'Grille d\'évaluation de la dépendance (AGGIR) qui conditionne l\'accès aux aides'],
      territoriaux: ['Déficit de services de proximité (santé, transport) dans certaines zones rurales', 'Éloignement des personnes âgées isolées des commerces et services essentiels'],
      demographiques: ['Allongement de l\'espérance de vie', 'Baisse de la fécondité, qui réduit le rapport entre actifs et retraités', 'Arrivée à l\'âge avancé des générations nombreuses de l\'après-guerre'],
      historiques: ['Généralisation de la retraite par répartition après-guerre', 'Recul progressif de la cohabitation intergénérationnelle au sein d\'un même logement'],
    },

    /* — 5. Manifestations — */
    manifestations: {
      comportements: ['Retrait progressif de certaines activités sociales', 'Adaptation du rythme de vie aux capacités physiques', 'Réorganisation du quotidien après le départ à la retraite'],
      situations: ['Veuvage et vie seule après plusieurs décennies en couple', 'Passage du domicile ordinaire à un logement adapté ou à un établissement', 'Recours croissant à une aide extérieure pour les gestes du quotidien'],
      indicateurs: ['Espérance de vie à la naissance', 'Taux de dépendance démographique', 'Taux d\'emploi des seniors'],
      pratiques: ['Recours à une aide à domicile ou à un service de téléassistance', 'Engagement associatif ou bénévole en début de retraite', 'Aide informelle apportée aux petits-enfants (garde, soutien financier)'],
      evenements: ['Départ à la retraite', 'Perte du conjoint', 'Entrée en établissement médicalisé', 'Diagnostic d\'une perte d\'autonomie'],
      statistiques: [
        "Les personnes de 65 ans ou plus représentent une part croissante et durablement installée de la population française — voir la rubrique Mesurer pour la méthode et ses limites.",
        "Une majorité des bénéficiaires de l'allocation personnalisée d'autonomie vivent à domicile plutôt qu'en établissement, selon les dernières données publiées par la DREES.",
      ],
    },

    /* — 6. Mécanismes sociaux — */
    mecanismeSchema: [
      'Avancée en âge et sortie de la vie active (retraite)',
      'Rétrécissement du réseau relationnel et perte de rôles sociaux',
      'Transmission patrimoniale vers les générations suivantes',
      'Fragilisation progressive de l\'autonomie',
      'Bascule vers la dépendance et une prise en charge institutionnelle ou familiale',
    ],
    mecanismes: [
      'transmission-patrimoniale',
      'rupture-du-lien-social',
      'vulnerabilite-sociale',
      'institutionnalisation',
      'discrimination-statistique',
      'categorisation-sociale',
      'cumul-des-desavantages',
    ],

    /* — 7. Conséquences — */
    consequences: {
      individuelles: ['Redéfinition de l\'identité après la perte du rôle professionnel', 'Fragilisation progressive de la santé physique et cognitive', 'Sentiment d\'utilité sociale diminué ou au contraire retrouvé, selon les trajectoires'],
      familiales: ['Réorganisation des solidarités familiales autour de l\'aidant', 'Tensions liées à la charge de l\'aide apportée à un parent âgé', 'Rôle accru des grands-parents dans la garde des petits-enfants'],
      professionnelles: ['Difficultés de reclassement après un licenciement en fin de carrière', 'Aménagements de poste ou temps partiel de fin de carrière'],
      economiques: ['Baisse de revenu au moment du passage à la retraite', 'Coût du reste à charge en cas de perte d\'autonomie', 'Transmission différée du patrimoine vers des héritiers eux-mêmes avancés en âge'],
      sanitaires: ['Prévalence croissante des maladies chroniques et des polypathologies', 'Risque de perte d\'autonomie fonctionnelle', 'Vulnérabilité accrue face à l\'isolement et à la dépression'],
      scolaires: ['Rôle des grands-parents dans la garde périscolaire et l\'accompagnement des petits-enfants', 'Concurrence budgétaire entre dépenses liées au vieillissement et dépenses d\'éducation dans les arbitrages publics'],
      territoriales: ['Concentration de personnes âgées isolées dans des territoires ruraux désertés par les services', 'Nécessité d\'adapter le parc de logements et les espaces publics au vieillissement de la population'],
      politiques: ['Poids électoral croissant des personnes âgées dans une population qui vieillit', 'Tensions générationnelles autour du partage des ressources publiques'],
      intergenerationnelles: ['Transmission du patrimoine à des héritiers déjà avancés en âge', 'Report de la charge de la dépendance sur les générations suivantes', 'Solidarité intergénérationnelle mise à l\'épreuve par l\'allongement de la durée de vie avec dépendance'],
    },

    /* — 8. Dynamiques — */
    dynamiques: {
      aggravation: "L'isolement relationnel et la perte d'autonomie s'alimentent mutuellement : moins de liens rend la perte d'autonomie plus difficile à compenser, et la perte d'autonomie réduit à son tour les occasions de maintenir des liens.",
      reduction: "Un réseau relationnel entretenu, une activité maintenue et une prévention précoce de la perte d'autonomie peuvent retarder sensiblement la bascule vers la dépendance.",
      stabilisation: "Une large part du troisième âge se stabilise durablement dans l'autonomie, sans dégradation ni retour en arrière, parfois pendant plusieurs décennies après le départ à la retraite.",
      transformation: "Le déplacement progressif de l'âge moyen d'entrée dans la dépendance, repoussé par les progrès de la prévention et des soins, sans que l'écart entre espérance de vie totale et espérance de vie en bonne santé ne se referme pour autant.",
      cycles: "Des allers-retours entre autonomie et fragilité temporaire, au fil des accidents de santé et de leur récupération, plutôt qu'une dégradation continue et irréversible.",
      effetsDeSeuil: "Le franchissement d'un seuil de dépendance reconnu par la grille AGGIR peut faire basculer brutalement l'accès aux aides, sans que la situation réelle n'ait changé du jour au lendemain.",
      effetsCumulatifs: "Chaque perte — un rôle, un proche, une capacité physique — réduit la capacité à compenser la suivante, ce qui rend chaque nouvelle épreuve plus coûteuse à surmonter que la précédente.",
      reproductionIntergenerationnelle: "Les inégalités de pension et de patrimoine accumulées pendant la vie active se transmettent à la génération suivante, sous forme d'héritage différé ou de charge d'aide reportée sur les enfants.",
    },

    /* — 9. Mesurer la problématique — */
    mesure: {
      description:
        "Mesurer le vieillissement suppose de croiser plusieurs échelles : des indicateurs démographiques agrégés (espérance de vie, taux de dépendance), des indicateurs de participation (emploi des seniors) et des indicateurs administratifs de perte d'autonomie (bénéficiaires de l'APA), qu'aucun indice unique ne résume.",
      statistiques: ['taux-de-dependance-demographique', 'esperance-de-vie-a-la-naissance', 'taux-d-emploi-des-seniors', 'beneficiaires-apa'],
      limites: [
        "Un ratio démographique ne dit rien de l'état de santé réel ni de l'autonomie effective des personnes qu'il compte.",
        "Le nombre de bénéficiaires de l'APA dépend d'une démarche administrative engagée et d'une grille d'évaluation, ce qui laisse hors champ le non-recours et les situations de fragilité pas encore reconnues.",
        "Les moyennes nationales d'espérance de vie masquent des écarts sociaux et territoriaux aussi marqués que ceux qu'elles sont censées résumer.",
      ],
    },

    /* — 10. Débats sociologiques — */
    debats: [
      {
        t: 'Financement des retraites',
        d: "Faut-il financer les retraites par répartition, où les actifs paient pour les retraités du moment, ou par capitalisation, où chacun épargne pour sa propre retraite ? Le débat porte aussi sur les leviers pour équilibrer un système sous tension démographique — âge légal, durée de cotisation, niveau des cotisations.",
      },
      {
        t: 'La dépendance, un risque à part ou une extension de la solidarité existante',
        d: "Faut-il organiser un risque de protection sociale à part entière, dédié à la dépendance et financé collectivement, ou continuer à faire reposer une large part de sa prise en charge sur la solidarité familiale et les assurances privées ?",
      },
      {
        t: 'Maintien à domicile ou entrée en établissement',
        d: "Le maintien à domicile, largement plébiscité, est-il toujours un choix librement exprimé, ou parfois une solution par défaut faute de moyens suffisants pour financer un hébergement adapté ?",
      },
      {
        t: 'Emploi des seniors',
        d: "Prolonger la vie active répond-il d'abord à un besoin d'équilibrer financièrement les systèmes de retraite, ou à une aspiration réelle des seniors eux-mêmes à rester en emploi, dans un marché du travail qui continue pourtant de les évincer en pratique ?",
      },
      {
        t: 'Désengagement ou activité : quelle place pour les personnes âgées',
        d: "La société doit-elle organiser un retrait progressif des personnes âgées de la vie active et sociale, comme le suggérait la théorie du désengagement, ou au contraire favoriser le maintien de leurs rôles et de leur activité aussi longtemps que possible ?",
      },
      {
        t: 'Âgisme, une discrimination minorée',
        d: "La discrimination liée à l'âge reste-t-elle moins reconnue et moins sanctionnée que d'autres discriminations, alors qu'elle touche l'accès à l'emploi, aux soins et à certains services, du seul fait d'un chiffre porté à l'état civil ?",
      },
    ],

    /* — 11. Politiques publiques — */
    politiquesPubliques: ['apa-2002', 'loi-adaptation-societe-vieillissement-2015', 'reforme-retraites-2023'],

    /* — 12. Liens avec Sociologor — */
    phenomenes: ['vieillissement-demographique', 'inegalites-generationnelles', 'chomage'],
    concepts: ['configuration', 'tension-anomique', 'statut-social', 'role-et-attentes', 'anomie', 'capital-social', 'capital-economique', 'domination-legitime', 'etiquetage'],
    processus: ['declin-social', 'desaffiliation', 'reproduction-intergenerationnelle'],
    theories: ['desengagement-cumming-henry', 'theorie-de-l-activite-havighurst', 'solitude-des-mourants-elias'],
    auteurs: ['elias', 'durkheim', 'merton', 'weber', 'goffman', 'bourdieu'],
    etudes: ['kansas-city-study-cumming-henry', 'enquete-care-drees'],
    problematiquesConnexes: ['pauvrete', 'inegalites', 'chomage', 'exclusion-sociale', 'discrimination'],
  },
  {
    id: 'immigration',
    categorie: 'migration-et-alterite',

    /* — 1. Identité — */
    t: 'Immigration',
    synonymes: ['Migration internationale (vue du pays d’arrivée)'],
    simple:
      "L'installation durable, dans un pays, de personnes qui n'en ont pas la nationalité d'origine — un phénomène que le langage courant confond souvent avec plusieurs notions voisines, dont la distinction précise compte autant socialement que juridiquement.",
    detaille: [
      "Migration est le terme le plus général : tout déplacement durable d'un lieu à un autre, sans préjuger du sens du mouvement ni de ses raisons. Immigration et émigration désignent la même trajectoire vue de deux côtés opposés — on émigre de son pays d'origine, on immigre dans le pays d'arrivée : une même personne est, au même moment, émigrée pour l'un et immigrée pour l'autre. L'exil ajoute une dimension que la migration seule n'implique pas : un départ contraint par un danger ou une persécution, souvent vécu sans perspective de retour, plus proche d'une rupture existentielle que d'un projet.",
      "Réfugié et demandeur d'asile ne sont pas des synonymes, malgré un usage courant qui les confond : le réfugié est un statut juridique précis, défini par la Convention de Genève de 1951, reconnu à une personne craignant avec raison d'être persécutée du fait de sa race, de sa religion, de sa nationalité, de son appartenance à un groupe social ou de ses opinions politiques ; le demandeur d'asile est une personne qui a sollicité ce statut, dans l'attente d'une décision qui peut prendre plusieurs années et n'aboutit pas toujours à une reconnaissance. La diaspora, enfin, déborde la première génération migrante : une communauté dispersée dans plusieurs pays, qui conserve un lien identitaire, culturel ou économique avec un pays ou un peuple d'origine commun, parfois sur plusieurs générations nées loin de ce pays.",
    ],
    sousCategories: [
      { t: 'Dimension économique', d: "Les écarts de niveau de vie et d'opportunités qui motivent une part des départs, les besoins de main-d'œuvre du pays d'accueil, et les transferts de fonds qui relient les deux économies." },
      { t: 'Dimension démographique', d: "L'effet de l'immigration sur la structure par âge et le renouvellement de la population active du pays d'accueil, et sur la structure démographique du pays de départ." },
      { t: 'Dimension familiale', d: "Le regroupement familial, la séparation parfois prolongée des familles pendant la migration, et la transformation des rôles familiaux à distance comme après réunification." },
      { t: 'Dimension politique', d: "Le cadre légal qui organise l'entrée et le séjour — droit d'asile, politiques migratoires, frontières — et l'accès à la citoyenneté." },
      { t: 'Dimension culturelle', d: "La langue, les pratiques religieuses et culturelles transmises ou transformées, et la transformation réciproque des cultures d'origine et d'accueil." },
      { t: 'Dimension territoriale', d: "La répartition spatiale de l'installation, sa concentration dans certains quartiers ou villes, et les effets de cette concentration sur les décennies suivantes." },
    ],
    motsCles: ['diaspora', 'intégration', 'assimilation', 'acculturation', 'transnationalisme', 'regroupement familial', 'asile', 'frontières'],
    gravite:
      "Un phénomène mondial ancien, mais dont l'ampleur et la nature ont profondément changé depuis les grandes migrations de travail de l'après-guerre : les personnes immigrées représentent aujourd'hui une part significative et durable de la population dans la plupart des pays développés — voir la rubrique Mesurer pour les indicateurs disponibles et leurs limites.",

    /* — 2. Comprendre la problématique — */
    description: [
      "La sociologie de l'immigration s'est longtemps organisée autour d'un modèle linéaire de l'assimilation, où l'installation mène presque mécaniquement, en plusieurs étapes et sur plusieurs générations, à une absorption complète dans la société d'accueil. Ce modèle a été profondément nuancé : Gordon montre que ses différentes composantes — culturelle, structurelle, matrimoniale, identificationnelle — peuvent avancer à des rythmes très inégaux chez une même personne, et Portes et Zhou montrent, à partir des enfants d'immigrés, que la trajectoire peut tout aussi bien être ascendante, descendante, ou fondée sur un maintien choisi des ressources communautaires d'origine plutôt que sur leur abandon.",
      "Le transnationalisme ajoute une nuance supplémentaire : une part croissante des personnes immigrées ne choisit plus entre pays d'origine et pays d'accueil, mais construit une double présence active dans les deux à la fois, ce qu'un modèle pensé pour une rupture unique et définitive ne permettait pas de décrire.",
    ],
    origineEmergence:
      "La sociologie de la migration comme domaine de recherche distinct naît avec l'école de Chicago dans les années 1920, dont l'enquête fondatrice de Thomas et Znaniecki sur les paysans polonais émigrés invente à la fois son objet et sa méthode : suivre, par les lettres et les récits de vie, ce qu'une migration transforme dans une existence.",
    contexteHistorique:
      "Les grandes migrations de travail de l'entre-deux-guerres puis de l'après-guerre, en Europe comme aux États-Unis, posent pour la première fois à grande échelle la question de ce qu'une société doit à ceux qu'elle accueille — main-d'œuvre, droits, intégration — sans qu'aucun cadre théorique préexistant ne suffise à en rendre compte.",
    evolutionHistorique: [
      { p: '1918–1920', f: "Thomas et Znaniecki publient The Polish Peasant in Europe and America, fondateur de la sociologie de la migration et de la méthode biographique." },
      { p: '1926', f: "Park formule le cycle des relations raciales (contact, compétition, accommodation, assimilation) au sein de l'école de Chicago." },
      { p: '1945–1975', f: "Les Trente Glorieuses organisent en Europe une immigration de travail massive, longtemps pensée comme provisoire par les pays d'accueil comme par les migrants eux-mêmes." },
      { p: '1964', f: "Gordon publie Assimilation in American Life et formalise le modèle classique de l'assimilation en plusieurs étapes distinctes." },
      { p: '1976–1978', f: "La France institue le regroupement familial par décret, confirmé comme un droit par le Conseil d'État malgré une tentative de suspension gouvernementale." },
      { p: '1993', f: "Portes et Zhou formulent la théorie de l'assimilation segmentée, à partir de l'observation des enfants d'immigrés aux États-Unis." },
      { p: '1994', f: "Basch, Glick Schiller et Szanton Blanc théorisent le transnationalisme migratoire." },
      { p: '2008–2009', f: "L'enquête Trajectoires et Origines (INSEE-INED) mesure pour la première fois en France, à cette échelle, les trajectoires et les discriminations vécues par les immigrés et leurs descendants." },
    ],
    situationActuelle:
      "L'immigration reste un sujet de débat public intense, tandis que les données disponibles montrent des trajectoires d'intégration très diverses selon l'origine, la génération et le contexte local d'installation, loin de la trajectoire unique que le débat public suppose parfois.",
    dimensionIndividuelle:
      "Vécue comme une redéfinition profonde de l'identité, entre attachement au pays d'origine et appartenance construite dans le pays d'accueil, dans des proportions et à des rythmes qui varient énormément d'une personne à l'autre.",
    dimensionCollective:
      "Une transformation démographique, économique et culturelle mesurable à l'échelle d'une société entière, qui redistribue la composition de sa population active et de son paysage culturel sur plusieurs générations.",
    dimensionStructurelle:
      "Le produit attendu d'écarts globaux de richesse et de sécurité entre régions du monde, filtrés et redistribués par des cadres juridiques nationaux qui décident, au cas par cas, qui peut rester et à quelles conditions — ce que la rubrique Facteurs détaille.",

    /* — 3. Population concernée — */
    population: {
      generale:
        "L'immigration touche une diversité de profils bien plus large qu'un stéréotype unique ne le suggère : travailleurs qualifiés et peu qualifiés, étudiants, familles rejoignant un proche déjà installé, personnes fuyant un danger — des motifs et des statuts juridiques très différents, aux trajectoires d'intégration elles-mêmes très variées.",
      groupesExposes: [
        'Demandeurs d\'asile en attente de statut, dans une situation juridique et matérielle précaire',
        'Travailleurs immigrés peu qualifiés, surexposés au chômage et à la déqualification',
        'Enfants et petits-enfants d\'immigrés nés dans le pays d\'accueil, confrontés à des discriminations malgré leur nationalité',
        'Personnes en situation administrative irrégulière, privées d\'une partie des droits sociaux',
        'Femmes immigrées, parfois isolées par un cumul de barrières linguistiques et de charges familiales',
        'Réfugiés ayant fui un conflit ou une persécution, souvent marqués par un traumatisme antérieur au parcours migratoire lui-même',
      ],
      age: "Les flux migratoires concernent en majorité des personnes en âge d'activité, ce qui contribue au renouvellement démographique de la population active du pays d'accueil ; les enfants arrivés jeunes et les enfants nés sur place connaissent des trajectoires d'intégration très différentes de celles de leurs parents.",
      genre: "La part des femmes dans les flux migratoires a fortement progressé, notamment via le regroupement familial et une migration économique désormais elle-même féminine, alors que la migration a longtemps été pensée comme majoritairement masculine.",
      csp: "La catégorie socioprofessionnelle occupée au pays d'origine ne prédit pas toujours celle occupée à l'arrivée : la déqualification touche particulièrement les migrants les plus diplômés, dont les titres ne sont pas toujours reconnus.",
      revenu: "Les niveaux de revenu sont très hétérogènes selon l'ancienneté d'installation, le statut juridique et la qualification, avec une pauvreté monétaire statistiquement plus fréquente chez les immigrés récents que chez la population installée de longue date.",
      education: "Le niveau de diplôme des personnes immigrées est, en moyenne, aussi dispersé que celui de la population non immigrée, ce qui contredit l'image d'une immigration uniformément peu qualifiée ; les enfants d'immigrés connaissent des trajectoires scolaires très variables selon l'origine et le milieu social des parents.",
      territoire: "L'installation se concentre historiquement dans certaines régions et certains quartiers urbains, souvent à proximité des premiers emplois disponibles à l'arrivée, ce qui façonne durablement la géographie de l'immigration bien après l'installation initiale.",
      situationFamiliale: "Le regroupement familial, la construction d'une famille dans le pays d'accueil ou au contraire une famille restée au pays d'origine dessinent des situations très différentes, notamment quant à la disponibilité de soutiens proches lors de l'installation.",
      statutProfessionnel: "Actifs en emploi, demandeurs d'emploi, étudiants ou personnes encore en attente d'un droit au travail lié à leur statut administratif : la situation professionnelle dépend étroitement du statut juridique au moment considéré.",
    },

    /* — 4. Causes et facteurs — */
    facteurs: {
      economiques: ['Écarts de niveau de vie et d\'opportunités d\'emploi entre pays de départ et d\'arrivée', 'Besoins de main-d\'œuvre du pays d\'accueil dans certains secteurs', 'Transferts de fonds qui incitent à migrer pour soutenir la famille restée au pays'],
      sociaux: ['Regroupement familial et réseaux migratoires déjà installés', 'Réseaux communautaires qui réduisent le coût et le risque d\'un premier départ', 'Rupture ou maintien des liens avec le pays d\'origine'],
      culturels: ['Maîtrise ou non de la langue du pays d\'accueil', 'Proximité ou distance entre les normes culturelles d\'origine et d\'arrivée', 'Représentations, parfois idéalisées, du pays de destination'],
      politiques: ['Conflits armés, persécutions ou instabilité politique dans le pays d\'origine', 'Cadre légal et politiques migratoires du pays d\'accueil', 'Accords bilatéraux ou régionaux de libre circulation'],
      institutionnels: ['Complexité et durée des démarches administratives d\'installation', 'Reconnaissance ou non des diplômes et qualifications obtenus à l\'étranger', 'Accès inégal aux droits sociaux selon le statut juridique'],
      territoriaux: ['Concentration historique de certaines communautés dans des villes ou quartiers précis', 'Disponibilité du logement abordable dans les zones d\'installation'],
      demographiques: ['Structure par âge du pays d\'origine, avec un excédent de population active jeune', 'Écarts de fécondité et de structure familiale entre pays de départ et d\'arrivée'],
      historiques: ['Héritages coloniaux et liens linguistiques ou administratifs anciens entre certains pays', 'Vagues migratoires antérieures qui facilitent, par leurs réseaux, les migrations suivantes'],
    },

    /* — 5. Manifestations — */
    manifestations: {
      comportements: ['Apprentissage de la langue du pays d\'accueil', 'Maintien de pratiques culturelles et religieuses d\'origine', 'Envoi régulier de transferts financiers vers la famille restée au pays'],
      situations: ['Attente prolongée d\'une décision administrative sur le statut', 'Emploi occupé en dessous du niveau de qualification réel', 'Regroupement familial différé de plusieurs années'],
      indicateurs: ['Part des immigrés dans la population totale', 'Nombre annuel de demandes d\'asile', 'Écart de taux de chômage entre immigrés et non-immigrés'],
      pratiques: ['Recours aux réseaux communautaires pour trouver un logement ou un emploi', 'Maintien de liens réguliers avec le pays d\'origine (visites, communications, transferts financiers)', 'Participation à des associations de la diaspora'],
      evenements: ['Obtention ou refus d\'un titre de séjour', 'Décision de la Cour nationale du droit d\'asile', 'Naturalisation', 'Réunification familiale'],
      statistiques: [
        "Les personnes immigrées représentent une part significative et stable de la population française depuis plusieurs décennies — voir la rubrique Mesurer pour la méthode et ses limites.",
        "Le taux de chômage des personnes immigrées reste sensiblement supérieur à celui de la population non immigrée, y compris à diplôme comparable, selon les enquêtes de l'INSEE.",
      ],
    },

    /* — 6. Mécanismes sociaux — */
    mecanismeSchema: ['Migration', 'Installation', 'Accès au logement', 'Éducation', 'Emploi', 'Intégration', 'Génération suivante'],
    mecanismes: [
      'reseau-relationnel',
      'segregation-residentielle',
      'non-reconnaissance-des-diplomes-etrangers',
      'discrimination-statistique',
      'categorisation-sociale',
      'stigmatisation',
      'transmission-des-aspirations',
    ],

    /* — 7. Conséquences — */
    consequences: {
      individuelles: ['Redéfinition de l\'identité entre culture d\'origine et culture d\'accueil', 'Sentiment de double appartenance ou, à l\'inverse, de double absence', 'Isolement lié à la barrière linguistique, notamment en début de parcours'],
      familiales: ['Séparation prolongée des familles avant un regroupement', 'Transformation des rôles au sein du couple et entre générations', 'Transmission ou perte progressive de la langue et des pratiques d\'origine chez les enfants'],
      professionnelles: ['Déqualification à l\'arrivée, notamment chez les migrants les plus diplômés', 'Concentration dans certains secteurs peu qualifiés ou pénibles', 'Discrimination à l\'embauche à compétences égales'],
      economiques: ['Transferts de fonds qui soutiennent l\'économie du pays d\'origine', 'Contribution à l\'activité économique et aux régimes sociaux du pays d\'accueil', 'Précarité économique accrue durant les premières années d\'installation'],
      sanitaires: ['Vulnérabilité psychologique liée au parcours migratoire, en particulier pour les personnes exilées ou réfugiées', 'Accès parfois retardé au système de santé faute de couverture ou d\'information', 'Écarts de santé qui se réduisent progressivement avec l\'ancienneté d\'installation'],
      scolaires: ['Trajectoires scolaires très variables des enfants d\'immigrés selon l\'origine et le milieu social', 'Effet positif du bilinguisme précoce sur certaines compétences, longtemps sous-estimé par l\'école', 'Orientation parfois biaisée par des représentations liées à l\'origine plutôt qu\'au niveau réel'],
      territoriales: ['Concentration résidentielle dans certains quartiers, par choix communautaire autant que par contrainte économique', 'Transformation économique et culturelle de certains quartiers ou villes d\'installation'],
      politiques: ['Poids croissant des questions migratoires dans le débat politique', 'Accès différencié à la citoyenneté et à la participation électorale selon le statut', 'Mobilisations associatives et communautaires autour des droits des personnes immigrées'],
      intergenerationnelles: ['Trajectoires ascendantes, stables ou descendantes très contrastées à la deuxième génération, selon la théorie de l\'assimilation segmentée', 'Transmission sélective, choisie ou subie, de la langue et de la culture d\'origine', 'Écart d\'intégration parfois plus marqué entre parents et enfants qu\'entre générations natives comparables'],
    },

    /* — 8. Dynamiques — */
    dynamiques: {
      aggravation: "L'isolement linguistique, la déqualification professionnelle et la ségrégation résidentielle se renforcent mutuellement : chacun réduit les occasions de sortir des deux autres, notamment durant les premières années d'installation.",
      reduction: "L'apprentissage de la langue, la reconnaissance des qualifications et un réseau relationnel diversifié au-delà de la seule communauté d'origine accélèrent nettement la trajectoire d'intégration.",
      stabilisation: "Une installation durable, ni pleinement intégrée ni marginalisée, notamment chez des personnes qui conservent un mode de vie proche de celui du pays d'origine sans connaître de dégradation supplémentaire.",
      transformation: "Le passage d'une migration pensée comme provisoire, avec un projet de retour, à une installation durable, souvent constatée après coup plutôt que décidée d'emblée.",
      cycles: "Des allers-retours entre pays d'origine et pays d'accueil, notamment dans les migrations de travail saisonnières ou circulaires, plutôt qu'un déplacement unique et définitif.",
      effetsDeSeuil: "L'obtention ou le refus d'un titre de séjour peut faire basculer brutalement l'accès à l'emploi, au logement ou aux soins, sans que la situation personnelle n'ait changé la veille.",
      effetsCumulatifs: "Chaque année passée sans reconnaissance des qualifications ni maîtrise suffisante de la langue éloigne un peu plus d'un retour à l'emploi correspondant au niveau initial de qualification.",
      reproductionIntergenerationnelle: "Selon la théorie de l'assimilation segmentée, la deuxième génération ne prolonge pas uniformément la trajectoire de ses parents : elle peut connaître une ascension sociale rapide, un déclassement vers des positions précaires, ou une acculturation sélective qui combine réussite scolaire et maintien des ressources communautaires d'origine.",
    },

    /* — 9. Mesurer la problématique — */
    mesure: {
      description:
        "Mesurer l'immigration suppose de distinguer plusieurs catégories que le langage courant confond souvent : les immigrés (nés étrangers à l'étranger, qu'ils aient ou non acquis la nationalité française depuis), les étrangers (une catégorie de nationalité, indépendante du lieu de naissance) et les descendants d'immigrés (nés en France de parents immigrés) — trois populations statistiques distinctes bien que largement associées dans le débat public.",
      statistiques: ['part-immigres-population-france', 'demandes-asile-france', 'taux-de-chomage-immigres', 'part-immigres-diplomes-emploi-non-qualifie', 'ecart-de-callback-testing'],
      limites: [
        "La catégorie statistique « immigré » de l'INSEE est fixée une fois pour toutes à la naissance et ne change pas même après une naturalisation, ce qui la distingue de la catégorie juridique « étranger », plus fluctuante.",
        "Le droit français interdit les statistiques ethniques : les données disponibles reposent sur le pays de naissance et la nationalité, jamais sur une origine ethnique ou raciale déclarée, ce qui limite la mesure fine des discriminations vécues par certains descendants d'immigrés pourtant nés français.",
        "Les statistiques sur les demandes d'asile ne mesurent qu'une partie des trajectoires migratoires, en laissant de côté l'immigration économique, familiale et étudiante, pourtant numériquement plus importantes.",
      ],
    },

    /* — 10. Débats sociologiques — */
    debats: [
      {
        t: 'Intégration ou assimilation',
        d: "Le pays d'accueil doit-il attendre des personnes immigrées qu'elles adoptent pleinement ses normes et sa culture (assimilation), ou seulement qu'elles participent à la vie sociale et économique commune tout en conservant leurs pratiques propres (intégration) ? Gordon distingue plusieurs sous-processus — culturel, structurel, matrimonial, identificationnel — qui peuvent avancer à des rythmes très différents chez une même personne.",
      },
      {
        t: 'Multiculturalisme',
        d: "Une société doit-elle reconnaître et organiser institutionnellement la diversité culturelle en son sein, ou viser au contraire une culture commune à laquelle chacun est appelé à se rattacher ? Le débat oppose des traditions nationales très différentes, du multiculturalisme canadien à l'universalisme républicain français.",
      },
      {
        t: 'Politiques migratoires',
        d: "Faut-il piloter l'immigration principalement par les besoins du marché du travail et des quotas, ou maintenir une approche fondée sur des droits — asile, regroupement familial — indépendants de la conjoncture économique ?",
      },
      {
        t: 'Frontières',
        d: "Une frontière doit-elle avant tout filtrer et contrôler les entrées, ou rester un lieu de passage aussi ouvert que possible ? Le débat porte aussi sur ses effets pratiques : durcir un contrôle frontalier déplace souvent les trajectoires migratoires vers des routes plus dangereuses, sans réduire nettement le nombre de départs.",
      },
      {
        t: 'Citoyenneté',
        d: "L'accès à la nationalité doit-il venir valider un parcours d'intégration déjà accompli, ou en être au contraire un levier, facilitant l'intégration en amont plutôt que la sanctionnant après coup ?",
      },
      {
        t: 'Immigration économique',
        d: "L'immigration doit-elle être pensée d'abord comme une réponse à des besoins de main-d'œuvre du pays d'accueil, au risque de la réduire à sa seule utilité économique, ou intégrer pleinement d'autres motifs — familial, humanitaire — sans les subordonner à un calcul de rentabilité ?",
      },
    ],

    /* — 11. Politiques publiques — */
    politiquesPubliques: ['regroupement-familial-cadre-legal', 'contrat-integration-republicaine-2016', 'loi-immigration-2024'],

    /* — 12. Liens avec Sociologor — */
    phenomenes: ['migration-internationale', 'migration-climatique', 'discrimination-a-l-embauche', 'segregation-urbaine'],
    concepts: ['formes-de-socialisation', 'habitus', 'capital-culturel', 'capital-social', 'etiquetage', 'stigmate', 'domination-legitime', 'violence-symbolique', 'tyrannie-de-la-majorite'],
    processus: ['mobilite-sociale', 'declassement', 'reproduction-intergenerationnelle'],
    theories: ['cycle-des-relations-raciales-park', 'assimilation-gordon', 'assimilation-segmentee-portes-zhou', 'transnationalisme-basch-glick-schiller'],
    auteurs: ['simmel', 'bourdieu', 'becker', 'goffman'],
    etudes: ['polish-peasant-thomas-znaniecki', 'cils-portes-rumbaut', 'enquete-teo-insee-ined'],
    problematiquesConnexes: ['discrimination', 'exclusion-sociale', 'logement', 'chomage', 'inegalites'],
  },
  {
    id: 'decrochage-scolaire',
    categorie: 'ecole-et-education',

    /* — 1. Identité — */
    t: 'Décrochage scolaire',
    synonymes: ['Sortie précoce sans qualification', 'Rupture scolaire'],
    simple:
      "Le processus par lequel un jeune quitte le système scolaire ou de formation sans avoir obtenu de diplôme ni de qualification reconnue — une sortie qui est presque toujours l'aboutissement d'une spirale entamée bien avant, plutôt qu'une décision prise en un seul jour.",
    detaille: [
      "Le mot se distingue de plusieurs notions voisines avec lesquelles il se confond souvent. L'échec scolaire est un jugement sur un résultat — de mauvaises notes, un redoublement — qui n'entraîne pas nécessairement une sortie du système. L'absentéisme est un symptôme précoce, souvent le premier signe visible, mais qui ne débouche pas toujours sur un décrochage complet. La déscolarisation, la forme la plus radicale, désigne l'absence de toute inscription dans un établissement, quand une part du décrochage reste, elle, invisible à l'intérieur même de la classe.",
      "Cette dernière forme, dite décrochage larvé ou « décrochage sur les chaises », concerne des élèves physiquement présents mais qui n'investissent plus aucun travail scolaire réel — une situation que les statistiques officielles, centrées sur la sortie effective du système, ont longtemps sous-estimée. Le décrochage se comprend ainsi mieux comme une spirale que comme un événement : la rubrique Mécanismes détaille l'enchaînement qui, des premières difficultés à la sortie, transforme un désajustement ponctuel en rupture durable.",
    ],
    sousCategories: [
      { t: 'Décrochage manifeste', d: "L'absence prolongée puis la rupture complète de la scolarisation — la forme la plus visible, et la plus directement mesurée par les statistiques officielles." },
      { t: 'Décrochage larvé', d: "Une présence physique en classe sans plus aucun investissement scolaire réel — une forme discrète, longtemps sous-évaluée, que certains chercheurs qualifient de « décrochage sur les chaises »." },
      { t: 'Déscolarisation', d: "L'absence de toute inscription dans un établissement scolaire, la forme la plus radicale, distincte d'un absentéisme même prolongé mais accompagné d'une inscription maintenue." },
      { t: 'Décrochage différé', d: "L'abandon en cours de formation professionnelle, d'apprentissage ou dans l'enseignement supérieur, après une scolarité obligatoire menée à son terme." },
      { t: 'Rupture temporaire', d: "Une interruption suivie d'un raccrochage, à distinguer d'une sortie définitive — une trajectoire réversible que les indicateurs annuels peinent parfois à distinguer d'un décrochage installé." },
      { t: 'Sortie précoce sans qualification', d: "La définition statistique la plus utilisée, centrée sur l'absence de diplôme au moment de la sortie du système, sans toujours capter les formes larvées ou temporaires du décrochage." },
    ],
    motsCles: ['absentéisme', 'désengagement', 'orientation', 'raccrochage', 'déscolarisation', 'échec scolaire', 'insertion professionnelle'],
    gravite:
      "Un phénomène suivi de près par les pouvoirs publics depuis la mise en place d'un repérage administratif systématique en 2011 : le taux de sortants précoces sans diplôme a nettement reculé en France depuis, sans que l'écart selon l'origine sociale et le territoire ne se soit refermé pour autant — voir la rubrique Mesurer pour les indicateurs disponibles et leurs limites.",

    /* — 2. Comprendre la problématique — */
    description: [
      "Le décrochage se comprend mieux comme une spirale qui s'auto-entretient que comme un choix isolé. Finn décrit un cycle où une participation en classe qui faiblit fragilise les résultats, ce qui affaiblit à son tour l'identification à l'école — le sentiment d'y avoir sa place — jusqu'à ce que le lien se rompe presque de lui-même, souvent bien avant toute décision explicite de partir.",
      "Cette lecture processuelle entre en tension avec une autre question, plus ancienne : le décrochage relève-t-il d'abord d'un désajustement individuel, ou du fonctionnement même d'une institution qui trie à chaque palier ? Bourdieu et Passeron y voient la forme la plus radicale d'un désajustement entre l'habitus scolaire attendu et celui que l'élève a reçu en famille — une sortie du jeu que l'institution a elle-même rendu improbable de gagner, plus qu'une défaillance strictement individuelle.",
    ],
    origineEmergence:
      "Le décrochage devient un objet de recherche et de politique publique distinct à mesure que la scolarité prolongée cesse d'être l'exception pour devenir la norme : tant que la sortie précoce restait le sort commun de la majorité, elle n'appelait pas de nom à part.",
    contexteHistorique:
      "La généralisation de la scolarité au-delà du primaire, en France comme ailleurs, rend pour la première fois visible et nommable un écart entre ce que l'école promet désormais à tous et ce qu'une partie des élèves en retire réellement — un écart resté largement invisible tant que peu d'élèves poursuivaient au-delà de l'école obligatoire.",
    evolutionHistorique: [
      { p: '1964', f: "Bourdieu et Passeron publient Les Héritiers, première enquête statistique à grande échelle sur l'origine sociale des étudiants français." },
      { p: '1970', f: "Bourdieu et Passeron publient La Reproduction et formalisent la théorie de la reproduction scolaire." },
      { p: '1973', f: "Boudon publie L'Inégalité des chances et distingue effets primaires et effets secondaires de l'origine sociale sur le parcours scolaire." },
      { p: '1975', f: "La loi Haby institue le collège unique en France, généralisant la scolarisation jusqu'à 16 ans et rendant visible, à cette échelle nouvelle, l'abandon en cours de scolarité obligatoire." },
      { p: '1989', f: "Finn formule le modèle participation-identification, qui décrit le décrochage comme une spirale plutôt qu'un événement isolé." },
      { p: '1997', f: "Le premier site de l'École de la deuxième chance ouvre à Marseille, dans la lignée du Livre blanc européen sur l'éducation de 1995." },
      { p: '2011', f: "La France crée le Système interministériel d'échange d'informations pour repérer nommément les jeunes décrocheurs." },
      { p: '2019', f: "La loi pour une école de la confiance porte l'obligation de formation de 16 à 18 ans." },
    ],
    situationActuelle:
      "Le taux de sortants précoces sans diplôme a nettement reculé en France depuis le début des années 2010, sous l'effet conjoint du repérage statistique et de la multiplication des dispositifs de raccrochage, sans que l'écart selon l'origine sociale et le territoire de scolarisation ne se soit refermé pour autant.",
    dimensionIndividuelle:
      "Vécu comme un sentiment d'échec personnel bien avant d'être nommé décrochage, souvent accompagné d'une perte d'estime de soi que le vocabulaire scolaire lui-même — redoublement, orientation par défaut — contribue à installer.",
    dimensionCollective:
      "Une perte mesurable de qualification à l'échelle d'une génération, qui pèse sur l'insertion professionnelle collective bien après la sortie du système scolaire de chaque décrocheur pris isolément.",
    dimensionStructurelle:
      "Le produit attendu d'un système scolaire qui trie à chaque palier — orientation, redoublement, filières — sans toujours distinguer un manque réel de compétences d'un désajustement entre l'élève et une institution pensée pour un habitus qui n'est pas toujours le sien — ce que la rubrique Facteurs détaille.",

    /* — 3. Population concernée — */
    population: {
      generale:
        "Le décrochage touche, à des degrés divers, tous les milieux sociaux et toutes les filières, mais son risque et sa fréquence restent très inégalement répartis selon l'origine sociale, le parcours scolaire antérieur et le territoire de scolarisation.",
      groupesExposes: [
        'Élèves ayant déjà redoublé au moins une fois',
        'Élèves de familles peu diplômées ou en situation de précarité économique',
        'Élèves en filière professionnelle ou en apprentissage, plus exposés que ceux de la voie générale',
        'Élèves victimes de harcèlement scolaire, y compris sous sa forme numérique',
        'Élèves en situation de handicap ou de trouble des apprentissages non ou mal accompagné',
        'Élèves de zones rurales isolées ou de quartiers prioritaires, plus éloignés de certaines filières et de leur offre de soutien',
      ],
      age: "Le risque de décrochage augmente nettement à partir de 15-16 ans, au moment où la scolarité cesse d'être obligatoire et où se jouent les premières orientations vers la voie professionnelle ou l'apprentissage ; une minorité de décrochages se prépare toutefois dès le collège.",
      genre: "Les garçons décrochent statistiquement plus souvent que les filles, un écart qui recoupe celui, plus large, observé dans l'ensemble de la réussite scolaire.",
      csp: "Les enfants de familles peu diplômées ou occupant des positions socioprofessionnelles peu qualifiées restent statistiquement les plus exposés, la voie professionnelle et l'apprentissage accueillant eux-mêmes une population socialement moins favorisée que la voie générale.",
      revenu: "La précarité économique du foyer, au-delà de la seule catégorie socioprofessionnelle des parents, pèse directement sur la capacité à financer un maintien dans une filière longue ou éloignée du domicile.",
      education: "Un retard scolaire déjà accumulé — un ou plusieurs redoublements — reste le meilleur prédicteur statistique d'un décrochage ultérieur, avant même l'origine sociale prise isolément.",
      territoire: "Le risque varie sensiblement selon le territoire de scolarisation : zones rurales isolées, quartiers prioritaires de la politique de la ville et académies d'outre-mer affichent des taux de sortants sans diplôme sensiblement supérieurs à la moyenne nationale.",
      situationFamiliale: "Une monoparentalité, une recomposition familiale récente ou un environnement familial instable fragilisent souvent, en se cumulant à d'autres facteurs, l'investissement scolaire.",
      statutProfessionnel: "Sans objet au sens strict pour des élèves mineurs, sauf pour les décrocheurs déjà engagés en apprentissage ou en contrat de professionnalisation, dont le statut mixte complique parfois le repérage administratif.",
    },

    /* — 4. Causes et facteurs — */
    facteurs: {
      economiques: ['Précarité économique du foyer', 'Coût indirect de la scolarité (transport, matériel, filière éloignée du domicile)', "Nécessité, dans certaines familles, d'une contribution financière précoce de l'adolescent"],
      sociaux: ['Environnement familial instable ou peu mobilisé sur le suivi scolaire', "Sentiment d'exclusion au sein de l'établissement", 'Harcèlement entre pairs, y compris sous sa forme numérique'],
      culturels: ["Écart entre les codes et les attentes de l'école et ceux transmis en famille", "Rapport à l'institution scolaire marqué par la défiance plutôt que par l'adhésion"],
      politiques: ['Ambition et moyens réellement alloués aux dispositifs de prévention du décrochage', "Arbitrages budgétaires sur l'accompagnement psychologique et social en milieu scolaire"],
      institutionnels: ['Orientation vécue comme subie plutôt que choisie', "Réponse parfois punitive de l'établissement à l'absentéisme naissant, qui accélère le désengagement plutôt qu'elle ne le prévient", 'Accompagnement insuffisant des difficultés psychologiques ou des troubles des apprentissages'],
      territoriaux: ["Éloignement de l'établissement ou de la filière souhaitée, notamment en zone rurale", 'Moindre densité de dispositifs de soutien dans certains territoires'],
      demographiques: ['Redoublement antérieur, principal facteur de risque statistique', "Âge d'entrée dans un cycle d'enseignement, plus jeune ou plus âgé que la moyenne de la classe"],
      historiques: ['Difficultés scolaires accumulées depuis le primaire, rarement corrigées une fois installées', 'Trajectoire familiale elle-même marquée par une sortie précoce du système scolaire'],
    },

    /* — 5. Manifestations — */
    manifestations: {
      comportements: ["Absentéisme croissant, d'abord ponctuel puis répété", 'Désinvestissement progressif du travail scolaire', 'Repli sur soi ou, à l\'inverse, comportements perturbateurs en classe'],
      situations: ['Multiplication des incidents disciplinaires', "Isolement social au sein de l'établissement", 'Nouveau désinvestissement du travail scolaire après un redoublement'],
      indicateurs: ['Taux de sortants précoces sans diplôme', "Taux d'absentéisme scolaire", 'Taux de retard scolaire (redoublement)'],
      pratiques: ['Recours à des dispositifs de raccrochage (École de la deuxième chance, missions de lutte contre le décrochage)', "Accompagnement par un conseiller d'orientation ou un assistant social scolaire", 'Mobilisation associative ou familiale pour un maintien dans un cursus'],
      evenements: ['Conseil de discipline', "Décision d'orientation contestée", 'Sortie du système scolaire sans inscription à la rentrée suivante', "Repérage par le Système interministériel d'échange d'informations"],
      statistiques: [
        "Le taux de sortants précoces sans diplôme a nettement reculé en France depuis le début des années 2010 — voir la rubrique Mesurer pour la méthode et ses limites.",
        "Le taux de chômage des jeunes sortis sans diplôme reste plusieurs fois supérieur à celui des diplômés de l'enseignement supérieur, selon les enquêtes de l'INSEE.",
      ],
    },

    /* — 6. Mécanismes sociaux — */
    mecanismeSchema: ['Difficultés scolaires', 'Découragement', 'Absentéisme', 'Désengagement', 'Décrochage', 'Faible qualification', 'Insertion professionnelle difficile'],
    mecanismes: [
      'selection-scolaire',
      'autocensure-scolaire',
      'orientation-subie',
      'effet-de-pairs',
      'strategies-educatives',
      'cumul-des-desavantages',
      'stigmatisation',
      'desengagement-scolaire',
    ],

    /* — 7. Conséquences — */
    consequences: {
      individuelles: ["Perte d'estime de soi durable", 'Difficulté à se projeter dans un projet professionnel', "Sentiment d'échec qui peut se prolonger bien après la sortie du système scolaire"],
      familiales: ["Tensions autour de l'échec scolaire, parfois vécu comme un échec familial partagé", "Réorganisation du foyer autour d'un accompagnement rapproché, quand les ressources le permettent"],
      professionnelles: ['Accès restreint aux emplois qualifiés', 'Insertion professionnelle plus lente et plus instable que pour les diplômés', "Surreprésentation dans les contrats courts et l'intérim"],
      economiques: ["Revenus durablement inférieurs à ceux des personnes diplômées, à âge égal", 'Moindre progression salariale au fil de la carrière'],
      sanitaires: ['Vulnérabilité psychologique accrue, en particulier dans les mois suivant la sortie', "Moindre accès à l'information de prévention habituellement relayée par le milieu scolaire"],
      scolaires: ['Absence de qualification reconnue au moment de la sortie', "Difficulté à reprendre une formation plusieurs années après l'interruption", 'Écart croissant avec les pairs restés scolarisés'],
      territoriales: ['Concentration des sortants sans diplôme dans certains territoires, qui peut renforcer leur image dévalorisée', "Moindre mobilité géographique pour l'emploi, faute de qualification reconnue au-delà du bassin local"],
      politiques: ['Sur-mobilisation de dispositifs publics de raccrochage et d\'insertion, à un coût croissant', "Défiance envers l'institution scolaire prolongée à l'âge adulte"],
      intergenerationnelles: ['Risque accru de décrochage chez les enfants de personnes elles-mêmes sorties sans diplôme', 'Transmission d\'un rapport distancié, voire défiant, à l\'institution scolaire'],
    },

    /* — 8. Dynamiques — */
    dynamiques: {
      aggravation: "Le découragement et l'absentéisme se renforcent mutuellement : chaque absence supplémentaire élargit l'écart avec la classe, ce qui rend le retour plus coûteux et le désengagement plus probable.",
      reduction: "Un repérage précoce de l'absentéisme, un accompagnement individualisé et une orientation choisie plutôt que subie peuvent interrompre la spirale avant qu'elle ne mène à une sortie complète.",
      stabilisation: "Une installation dans un décrochage larvé — une présence physique sans investissement réel — qui peut durer plusieurs mois ou années sans déboucher ni sur une sortie complète ni sur un raccrochage.",
      transformation: "Le déplacement d'une partie du décrochage vers l'enseignement professionnel et l'apprentissage, à mesure que la voie générale concentre une population de plus en plus homogène socialement.",
      cycles: "Des allers-retours entre absentéisme, retour temporaire et nouvelle absence, plutôt qu'une sortie unique et définitive, notamment dans les premiers mois du désengagement.",
      effetsDeSeuil: "Le franchissement d'un seuil d'absences peut déclencher un signalement administratif qui accélère, selon la réponse apportée, soit un accompagnement soutenu, soit un sentiment d'exclusion supplémentaire.",
      effetsCumulatifs: "Chaque échec ou redoublement supplémentaire réduit un peu plus la probabilité de rattraper le niveau attendu, rendant chaque nouvelle difficulté plus coûteuse à surmonter que la précédente.",
      reproductionIntergenerationnelle: "Le niveau de diplôme des parents reste, avec le retard scolaire déjà accumulé, l'un des meilleurs prédicteurs statistiques du risque de décrochage de leurs enfants.",
    },

    /* — 9. Mesurer la problématique — */
    mesure: {
      description:
        "Mesurer le décrochage suppose de distinguer plusieurs indicateurs proches mais non identiques : le taux de sortants précoces sans diplôme (une mesure de stock, à un âge donné), l'absentéisme scolaire (un symptôme précoce, pas toujours suivi d'une sortie) et le nombre de jeunes repérés par le Système interministériel d'échange d'informations (une mesure administrative, dépendante de la qualité du repérage lui-même).",
      statistiques: ['taux-de-decrocheurs-scolaires', 'taux-absenteisme-scolaire', 'taux-de-chomage-sans-diplome', 'part-decrocheurs-raccroches'],
      limites: [
        "Le taux de sortants précoces sans diplôme ne capte pas le décrochage larvé — une présence physique sans investissement scolaire réel — pourtant considéré par plusieurs chercheurs comme une étape antérieure et plus fréquente.",
        "L'absentéisme mesuré administrativement ne distingue pas toujours un absentéisme ponctuel, sans gravité particulière, d'un désengagement plus profond en cours d'installation.",
        "Le repérage par le Système interministériel d'échange d'informations dépend de la qualité des données transmises par chaque établissement, ce qui peut faire varier le nombre de jeunes identifiés d'un territoire à l'autre sans que le phénomène réel ne varie autant.",
      ],
    },

    /* — 10. Débats sociologiques — */
    debats: [
      {
        t: 'Échec individuel ou fabrication institutionnelle',
        d: "Le décrochage doit-il se lire comme l'échec, ou le manque d'effort, d'un élève pris isolément, ou comme le produit d'un système scolaire qui trie à chaque palier sans toujours distinguer un manque réel de compétences d'un désajustement avec ses propres attentes ?",
      },
      {
        t: 'Redoublement : un outil de rattrapage ou un facteur de décrochage',
        d: "Faire recommencer une année à un élève en difficulté lui donne-t-il le temps de rattraper son retard, ou installe-t-il un sentiment d'échec et un décalage d'âge avec sa classe qui augmentent, au contraire, le risque de décrochage ultérieur ?",
      },
      {
        t: "Réponse punitive ou accompagnement de l'absentéisme naissant",
        d: "Faut-il répondre aux premières absences par une sanction disciplinaire, au risque d'accélérer le sentiment d'exclusion, ou par un accompagnement social et psychologique renforcé, plus coûteux et plus lent à produire des effets visibles ?",
      },
      {
        t: 'Voie professionnelle : filière choisie ou filière de relégation',
        d: "L'orientation vers la voie professionnelle ou l'apprentissage répond-elle à un projet réellement choisi par l'élève, ou fonctionne-t-elle souvent comme une orientation par défaut pour les élèves en difficulté dans la voie générale ?",
      },
      {
        t: "Jusqu'à quel âge l'obligation scolaire",
        d: "Prolonger l'obligation de formation au-delà de 16 ans protège-t-elle mieux les jeunes les plus fragiles, ou maintient-elle sous contrainte des jeunes déjà désengagés, au risque de déplacer le problème plutôt que de le résoudre ?",
      },
    ],

    /* — 11. Politiques publiques — */
    politiquesPubliques: ['obligation-formation-18-ans-2019', 'siei-2011', 'ecole-de-la-deuxieme-chance-1997'],

    /* — 12. Liens avec Sociologor — */
    phenomenes: ['decrochage-scolaire', 'inegalites-scolaires', 'inegalites-culturelles', 'cyberharcelement'],
    concepts: ['capital-culturel', 'habitus', 'violence-symbolique', 'effets-pervers', 'individualisme-methodologique', 'capital-social', 'etiquetage', 'anomie'],
    processus: ['mobilite-sociale', 'declassement', 'reproduction-sociale', 'reproduction-intergenerationnelle', 'desaffiliation'],
    theories: ['reproduction-bourdieu-passeron', 'inegalite-des-chances-boudon', 'participation-identification-finn'],
    auteurs: ['bourdieu', 'boudon', 'durkheim', 'becker', 'merton'],
    etudes: ['les-heritiers-bourdieu-passeron-1964', 'panel-eleves-depp'],
    problematiquesConnexes: ['pauvrete', 'inegalites', 'chomage', 'exclusion-sociale'],
  },
  {
    id: 'violences',
    categorie: 'violences-et-securite',

    /* — 1. Identité — */
    t: 'Violences',
    synonymes: ['Violences sociales'],
    simple:
      "L'atteinte, physique ou non, portée à l'intégrité d'une personne ou d'un groupe — un mot unique qui recouvre des réalités si différentes qu'aucune définition ne les épuise toutes à la fois, d'un coup porté dans une rue à une règle administrative qui prive durablement de droits sans qu'aucun coup ne soit jamais donné.",
    detaille: [
      "Galtung distingue trois strates que le sens commun confond souvent sous le seul mot violence. La violence directe est un acte identifiable, commis par un ou plusieurs auteurs contre une ou plusieurs victimes — un coup, une agression, un meurtre. La violence structurelle ne suppose aucun agresseur identifiable : elle est le tort que produit le fonctionnement ordinaire d'un système économique ou social, qui prive durablement certains de ressources ou de droits que d'autres tiennent pour acquis. La violence culturelle, enfin, désigne ce qui rend les deux précédentes acceptables — les représentations, les récits, les normes qui les présentent comme normales, méritées ou inévitables.",
      "S'y ajoute une distinction politique et juridique tout aussi structurante : Weber définit l'État précisément par le monopole qu'il revendique sur l'usage légitime de la violence physique. Ce qui compte comme violence, au sens fort et condamnable du terme, dépend alors de qui l'exerce et au nom de quoi — une frontière entre force légitime et violence illégitime qui reste, dans les faits, un objet de contestation permanente plutôt qu'une ligne fixée une fois pour toutes.",
    ],
    sousCategories: [
      { t: 'Violence physique', d: "Une atteinte directe portée au corps d'autrui — coup, blessure, séquestration — la forme la plus immédiatement reconnue comme telle." },
      { t: 'Violence psychologique', d: "Une atteinte à l'intégrité mentale et émotionnelle — dévalorisation répétée, menaces, manipulation — qui ne laisse aucune trace visible mais peut durablement fragiliser." },
      { t: 'Violence sexuelle', d: "Toute atteinte à l'intégrité sexuelle commise sans le consentement de la personne qui la subit, du harcèlement au viol." },
      { t: 'Violence économique', d: "La privation ou le contrôle des ressources matérielles d'une personne — confiscation de revenus, interdiction de travailler, dettes imposées — souvent un des premiers leviers de l'emprise conjugale." },
      { t: 'Violence verbale', d: "Insultes, humiliations et menaces exprimées par la parole, qui peuvent précéder ou accompagner d'autres formes de violence sans jamais y mener nécessairement." },
      { t: 'Violence symbolique', d: "Une domination acceptée par ceux qui la subissent au point de ne plus la percevoir comme telle — la forme la plus difficile à nommer, parce qu'elle ne s'exerce jamais à visage découvert." },
      { t: 'Violence institutionnelle', d: "Une violence produite par le fonctionnement ordinaire d'une institution — administration, hôpital, lieu de détention — sans qu'aucun individu isolé n'ait besoin d'en porter seul la responsabilité." },
      { t: 'Violence politique', d: "Une violence exercée à des fins politiques — répression d'État, action armée, terrorisme — dont la légitimité reste, par nature, l'objet même du conflit qu'elle exprime." },
      { t: 'Violence criminelle', d: "Une violence commise dans le cadre d'une activité délictuelle ou criminelle organisée, distincte par son mobile de la violence interpersonnelle ou politique." },
      { t: 'Violence domestique', d: "Une violence exercée au sein du foyer, entre conjoints ou envers des enfants ou des personnes âgées à charge, le plus souvent en huis clos et sur la durée." },
      { t: 'Violence scolaire', d: "Une violence exercée en milieu scolaire, entre élèves ou impliquant le personnel, du harcèlement répété à l'agression isolée." },
      { t: 'Violence urbaine', d: "Une violence qui se déploie dans l'espace public urbain — agressions, incivilités, émeutes — souvent concentrée dans certains quartiers et certaines périodes." },
      { t: 'Cyberviolence', d: "Une violence exercée par l'intermédiaire des outils numériques — harcèlement en ligne, diffusion non consentie de contenus — qui prolonge et amplifie des violences déjà présentes hors ligne." },
    ],
    motsCles: ['domination', 'pouvoir', 'contrôle social', 'emprise', 'stigmatisation', 'monopole de la violence légitime'],
    gravite:
      "Un objet mesuré depuis 2007 en France par une enquête annuelle de victimation, en complément des statistiques de plaintes enregistrées, qui révèlent un écart persistant et documenté entre le nombre de victimes déclarées et celui des faits portés à la connaissance de la justice — voir la rubrique Mesurer pour le détail des sources et leurs limites.",

    /* — 2. Comprendre la problématique — */
    description: [
      "Le triptyque de Galtung — violence directe, structurelle, culturelle — déplace la question de savoir « qui a frappé » vers celle de savoir ce qu'une société laisse subsister sans jamais avoir besoin de frapper : un accès aux soins durablement inégal ne suppose aucun agresseur, mais produit des torts mesurables, que la violence culturelle environnante présente souvent comme une fatalité plutôt que comme un choix collectif.",
      "Cette lecture élargie entre en tension avec la définition weberienne de l'État par le monopole de la violence légitime : reconnaître une violence structurelle ou institutionnelle suppose d'admettre qu'une institution peut produire un tort sans jamais commettre d'acte que le droit qualifierait lui-même de violence — un décalage entre la mesure sociologique du phénomène et sa reconnaissance juridique qui traverse presque tous les débats contemporains sur le sujet.",
    ],
    origineEmergence:
      "La sociologie de la violence comme objet distinct de la seule criminologie se constitue dans la seconde moitié du XXᵉ siècle, à mesure que les mouvements féministes, les recherches sur la paix et la sociologie historique convergent pour montrer que le mot recouvre des mécanismes sociaux bien plus larges que le seul crime de sang.",
    contexteHistorique:
      "L'après-guerre et la recherche sur la paix, née des deux conflits mondiaux, poussent à interroger la violence au-delà du seul acte de guerre déclarée ; au même moment, les mouvements féministes des années 1970 imposent la violence conjugale et sexuelle comme un fait social à mesurer, longtemps tenu pour une affaire strictement privée.",
    evolutionHistorique: [
      { p: '1919', f: "Weber définit l'État par le monopole de la violence physique légitime, dans Le Savant et le politique." },
      { p: '1939', f: "Elias documente, dans Sur le processus de civilisation, le recul historique de la violence interpersonnelle en Europe." },
      { p: '1969', f: "Galtung distingue violence directe et violence structurelle dans Violence, Peace, and Peace Research." },
      { p: '1979', f: "Straus met au point la Conflict Tactics Scale, premier outil de mesure standardisé de la violence familiale." },
      { p: '1990', f: "Galtung ajoute la violence culturelle à sa typologie." },
      { p: '1998', f: "Bourdieu publie La Domination masculine." },
      { p: '2007', f: "La France crée l'enquête Cadre de vie et sécurité, principale source annuelle de mesure de la victimation." },
      { p: '2019', f: "Le Grenelle des violences conjugales relance les politiques publiques françaises de lutte contre les violences au sein du couple." },
    ],
    situationActuelle:
      "La mesure combine aujourd'hui des enquêtes de victimation déclaratives et des statistiques administratives de plaintes, avec une attention croissante portée à la cyberviolence et à la violence scolaire, deux formes longtemps restées en marge des outils de mesure conçus pour d'autres contextes.",
    dimensionIndividuelle:
      "Vécue de façon extrêmement variable selon la forme de violence en cause, d'une blessure ponctuelle à une emprise durable qui redéfinit, jour après jour, ce qui paraît encore normal.",
    dimensionCollective:
      "Un fait social mesurable à l'échelle d'une population entière, dont la répartition entre groupes — selon le genre, l'âge, le territoire — révèle des rapports de pouvoir qu'aucun acte isolé ne suffit à expliquer.",
    dimensionStructurelle:
      "Le produit attendu de rapports de pouvoir inégaux, de normes sociales qui légitiment certaines formes de violence tout en en condamnant d'autres, et d'institutions dont le fonctionnement ordinaire peut lui-même produire un tort — ce que la rubrique Facteurs détaille.",

    /* — 3. Population concernée — */
    population: {
      generale:
        "Personne n'est à l'abri de toute forme de violence, mais l'exposition varie considérablement selon le type considéré : les hommes sont statistiquement plus souvent victimes de violences physiques dans l'espace public, les femmes de violences sexuelles et conjugales, et les mineurs de violences intrafamiliales et scolaires.",
      groupesExposes: [
        'Femmes, pour les violences conjugales et sexuelles',
        'Enfants et adolescents, pour les violences intrafamiliales et scolaires',
        'Jeunes hommes, pour les violences physiques et criminelles dans l\'espace public',
        'Personnes LGBT+, pour les violences liées à l\'orientation ou à l\'identité de genre',
        'Personnes en situation de handicap, plus exposées à plusieurs formes de violence à la fois',
        'Habitants de quartiers marqués par une délinquance installée',
      ],
      age: "Le risque de violence varie fortement selon l'âge et le type considéré : les mineurs concentrent l'essentiel des violences intrafamiliales et scolaires, les jeunes adultes les violences physiques et criminelles en espace public, les personnes âgées certaines formes de maltraitance moins souvent déclarées.",
      genre: "L'asymétrie de genre traverse presque toutes les formes de violence, mais pas toujours dans le même sens : les femmes sont très majoritairement les victimes des violences conjugales et sexuelles, les hommes des violences physiques hors cadre familial.",
      csp: "Les violences institutionnelles et symboliques touchent statistiquement davantage les classes populaires, tandis que les violences conjugales et intrafamiliales traversent l'ensemble des catégories sociales, avec des taux de signalement inégaux selon les ressources disponibles pour y échapper.",
      revenu: "La précarité économique limite les ressources permettant d'échapper à une situation de violence, en particulier conjugale, sans en être la cause initiale.",
      education: "Le niveau de diplôme ne protège pas de la violence conjugale ou sexuelle, mais influe sur les ressources mobilisables pour la signaler et y échapper.",
      territoire: "Certains types de violence se concentrent territorialement — violence urbaine dans certains quartiers, violences intrafamiliales en huis clos partout — ce qui rend leur répartition géographique très inégale selon la forme considérée.",
      situationFamiliale: "La cohabitation avec l'auteur des violences, notamment conjugales ou intrafamiliales, complique fortement le signalement et l'échappement à la situation.",
      statutProfessionnel: "Le lien de subordination hiérarchique expose spécifiquement aux violences et au harcèlement en milieu professionnel, avec un risque de représailles qui limite le signalement.",
    },

    /* — 4. Causes et facteurs — */
    facteurs: {
      economiques: ['Précarité qui limite les ressources pour échapper à une situation de violence', 'Dépendance économique au sein du couple ou de la famille'],
      sociaux: ['Inégalités de pouvoir entre les personnes en présence', 'Conflits sociaux non régulés autrement', 'Marginalisation qui expose davantage à la violence sans protection sociale suffisante'],
      culturels: ['Socialisation différenciée qui valorise l\'agressivité ou la domination selon le genre', 'Normes sociales qui tolèrent ou minimisent certaines formes de violence selon leur contexte'],
      politiques: ['Rapports de pouvoir institutionnalisés entre gouvernants et gouvernés', 'Usage de la violence comme moyen d\'action politique ou de répression'],
      institutionnels: ['Fonctionnement ordinaire d\'institutions qui peut produire une violence sans acte individuel isolé', 'Insuffisance des dispositifs de signalement et de protection'],
      territoriaux: ['Concentration de la marginalisation économique et sociale dans certains territoires', 'Désinvestissement des services publics dans certains quartiers'],
      demographiques: ['Surreprésentation des jeunes hommes parmi les auteurs de violences physiques et criminelles', 'Vulnérabilité accrue aux âges extrêmes de la vie (enfance, grand âge)'],
      historiques: ['Normes de genre héritées qui ont historiquement légitimé certaines formes de domination', 'Conflits et ruptures historiques dont la violence continue de se transmettre'],
    },

    /* — 5. Manifestations — */
    manifestations: {
      comportements: ['Vigilance accrue et évitement de certains lieux ou situations', 'Silence ou non-signalement, par peur, honte ou dépendance', 'Reproduction de comportements violents appris dans l\'enfance'],
      situations: [
        "Famille — violences intrafamiliales, envers les enfants ou les personnes âgées à charge",
        "Couple — emprise et violences conjugales, jusqu'au féminicide dans les cas les plus graves",
        "École — harcèlement entre élèves, violence envers ou de la part du personnel",
        "Travail — harcèlement moral ou sexuel, violence hiérarchique",
        "Espace public — agressions, incivilités, violence urbaine",
        "Institutions — violence institutionnelle dans le fonctionnement ordinaire d'une administration, d'un hôpital ou d'un lieu de détention",
        "Internet — cyberharcèlement, diffusion non consentie de contenus",
        "Conflits politiques — répression, violence d'État, violence politique organisée",
      ],
      indicateurs: ['Taux de victimation déclarée en enquête', 'Nombre de plaintes enregistrées', 'Nombre de féminicides recensés'],
      pratiques: ['Recours à une association d\'aide aux victimes', 'Dépôt de plainte ou de main courante', 'Recherche d\'un hébergement d\'urgence pour échapper à une situation de danger'],
      evenements: ['Dépôt de plainte', 'Obtention d\'une ordonnance de protection', 'Signalement à une institution (école, employeur, services sociaux)'],
      statistiques: [
        "Une part significative de la population française se déclare victime de violences physiques ou sexuelles au cours d'une année donnée, selon l'enquête Cadre de vie et sécurité — voir la rubrique Mesurer pour la méthode et ses limites.",
        "Une minorité seulement des victimes de violences sexuelles déclarées en enquête indiquent avoir déposé plainte, l'un des écarts les plus documentés entre violence subie et violence enregistrée.",
      ],
    },

    /* — 6. Mécanismes sociaux — */
    mecanismeSchema: [
      'Rapports de pouvoir inégaux',
      'Normes qui légitiment ou banalisent la violence',
      'Passage à l\'acte',
      'Silence ou non-dénonciation',
      'Répétition et escalade',
      'Conséquences durables pour la victime',
    ],
    mecanismes: ['naturalisation-des-inegalites', 'stigmatisation', 'categorisation-sociale', 'institutionnalisation', 'emprise', 'banalisation-de-la-violence'],

    /* — 7. Conséquences — */
    consequences: {
      individuelles: ['Blessures physiques, parfois durables ou invalidantes', 'Traumatismes psychologiques durables', 'Perte de confiance en soi et en autrui'],
      familiales: ['Isolement progressif de la victime au sein même de son entourage', 'Reproduction de schémas de violence au sein du foyer'],
      professionnelles: ['Absentéisme et perte de performance liés au traumatisme', 'Perte d\'emploi ou interruption de carrière'],
      economiques: ['Coût direct des soins et de l\'accompagnement', 'Perte de revenu liée à une incapacité de travail'],
      sanitaires: ['Troubles du stress post-traumatique', 'Dépression et troubles anxieux', 'Recours accru aux soins somatiques sans lien apparent avec l\'origine réelle du trouble'],
      scolaires: ['Décrochage scolaire consécutif à un harcèlement ou une violence subie', 'Difficultés de concentration et baisse des résultats'],
      territoriales: ['Évitement de certains lieux ou quartiers jugés dangereux', 'Concentration de la délinquance dans certains territoires déjà marginalisés'],
      politiques: ['Défiance envers les institutions censées protéger', 'Mobilisations collectives contre certaines formes de violence longtemps tolérées'],
      intergenerationnelles: ['Risque accru de reproduire ou de subir à nouveau une violence à l\'âge adulte après une exposition dans l\'enfance', 'Transmission de stratégies de méfiance ou de silence face à la violence'],
    },

    /* — 8. Dynamiques — */
    dynamiques: {
      aggravation: "L'emprise et l'isolement se renforcent mutuellement : moins la victime dispose de liens extérieurs, moins elle dispose de points de comparaison pour nommer ce qu'elle vit, ce qui approfondit encore l'isolement.",
      reduction: "Un signalement précoce, un réseau relationnel maintenu et un cadre légal effectivement appliqué peuvent interrompre l'escalade avant qu'elle ne s'installe durablement.",
      stabilisation: "Une installation dans une violence chronique de faible intensité, ni dénoncée ni aggravée, notamment dans les formes symboliques ou institutionnelles les moins visibles.",
      transformation: "Le déplacement d'une partie de la violence vers des formes numériques, qui prolongent au-delà de l'espace physique des dynamiques de harcèlement déjà connues hors ligne.",
      cycles: "Le cycle de la violence conjugale — tension, agression, réconciliation, accalmie — qui se répète plutôt qu'il ne s'arrête, chaque phase de rémission rendant la suivante plus difficile à anticiper.",
      effetsDeSeuil: "Le franchissement d'un seuil de gravité peut déclencher un signalement ou une intervention qui n'aurait pas eu lieu pour des faits pourtant déjà installés depuis longtemps.",
      effetsCumulatifs: "Chaque épisode de violence non traité fragilise davantage la capacité de la victime à se protéger du suivant, dans un enchaînement qui rend chaque nouvelle atteinte plus coûteuse à surmonter.",
      reproductionIntergenerationnelle: "Grandir dans un foyer marqué par la violence est associé à un risque statistiquement accru, à l'âge adulte, de reproduire ou de subir à nouveau une violence comparable.",
    },

    /* — 9. Mesurer la problématique — */
    mesure: {
      description:
        "Mesurer la violence suppose de croiser deux sources qui ne coïncident jamais complètement : la victimation déclarée, mesurée par des enquêtes en population générale indépendantes de tout dépôt de plainte, et la violence enregistrée, mesurée par les statistiques administratives de plaintes et de condamnations — l'écart entre les deux, documenté et persistant, porte le nom de chiffre noir de la violence.",
      statistiques: ['taux-de-victimation-violences-physiques-sexuelles', 'nombre-de-feminicides-france', 'taux-de-harcelement-scolaire', 'ecart-plaintes-victimation'],
      limites: [
        "Une enquête déclarative dépend de ce que chacun accepte de nommer comme violence, et sous-estime probablement les formes les plus intimes, les moins facilement verbalisées.",
        "Les statistiques de plaintes ne mesurent que ce qui a été signalé, très en deçà du nombre réel de victimes pour la plupart des violences sexuelles et conjugales.",
        "Aucune de ces sources ne mesure directement la violence structurelle ou culturelle au sens de Galtung, qui échappe par nature à un comptage d'actes individuels.",
      ],
    },

    /* — 10. Débats sociologiques — */
    debats: [
      {
        t: 'Définir la violence : acte ou structure',
        d: "Faut-il réserver le mot violence aux actes directs et intentionnels, ou l'étendre aux effets d'une structure sociale qui prive durablement certains de ressources ou de droits, même sans agresseur identifiable — la distinction proposée par Galtung entre violence directe et violence structurelle ?",
      },
      {
        t: 'Le monopole de la violence légitime',
        d: "Où passe la frontière entre l'usage légitime de la force par l'État — police, justice — et la violence proprement dite ? Le débat traverse aussi bien les controverses sur le maintien de l'ordre que celles sur la légitime défense.",
      },
      {
        t: 'Violence, nature ou construction sociale',
        d: "La violence procède-t-elle d'une agressivité humaine en partie innée, que la socialisation contient plus ou moins bien, ou est-elle d'abord apprise et transmise par des normes sociales et une éducation différenciée selon le genre ?",
      },
      {
        t: 'Répression ou prévention',
        d: "Faut-il concentrer les moyens publics sur la sanction des actes de violence une fois commis, ou sur leur prévention en amont — éducation, accompagnement, détection précoce des situations à risque ?",
      },
      {
        t: 'Le chiffre noir de la violence',
        d: "L'écart persistant entre le nombre de victimes déclarées en enquête et le nombre de plaintes enregistrées reflète-t-il d'abord la défiance envers les institutions, la crainte de représailles, ou la difficulté même à nommer certains actes comme une violence ?",
      },
    ],

    /* — 11. Politiques publiques — */
    politiquesPubliques: ['ordonnance-de-protection-2010', 'grenelle-violences-conjugales-2019', 'loi-contre-harcelement-scolaire-2022'],

    /* — 12. Liens avec Sociologor — */
    phenomenes: ['violences-conjugales', 'cyberharcelement', 'delinquance-juvenile'],
    concepts: ['domination-legitime', 'pouvoir', 'violence-symbolique', 'etiquetage', 'stigmate', 'anomie', 'carriere-deviante', 'entrepreneur-de-morale'],
    processus: ['desaffiliation', 'individualisation', 'reproduction-intergenerationnelle'],
    theories: ['violence-structurelle-galtung', 'monopole-violence-legitime-weber', 'domination-masculine-bourdieu', 'processus-de-civilisation-elias-violence'],
    auteurs: ['weber', 'bourdieu', 'elias', 'becker', 'goffman', 'durkheim'],
    etudes: ['conflict-tactics-scale-straus', 'enquete-virage-ined'],
    problematiquesConnexes: ['exclusion-sociale', 'discrimination', 'decrochage-scolaire', 'precarite'],
  },
];
