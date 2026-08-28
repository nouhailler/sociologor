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
];
