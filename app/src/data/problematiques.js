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
];
