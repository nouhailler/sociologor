/**
 * Études empiriques citées par les fiches problématique — des enquêtes ou des
 * terrains précis, datés et sourcés, à distinguer des théories (`theories.js`)
 * qu'ils fondent ou mettent à l'épreuve. Une étude peut fonder une théorie
 * (Townsend fonde la privation relative) ou simplement mesurer un phénomène
 * (l'enquête Revenus fiscaux et sociaux).
 */
export const ETUDES = [
  {
    id: 'poverty-in-the-uk-enquete',
    t: 'Enquête nationale sur les styles de vie (Poverty in the United Kingdom)',
    auteur: 'Peter Townsend',
    annee: '1979',
    methode:
      "Enquête par questionnaire auprès de plus de 2 000 ménages britanniques, portant sur soixante indicateurs de mode de vie et de participation sociale, pas seulement sur le revenu déclaré.",
    d: "L'enquête qui fonde empiriquement la théorie de la privation relative : elle construit un indice de privation à partir de ce dont les ménages se privent, faute de ressources, par rapport aux habitudes de vie de leur société.",
    detail:
      "Townsend croise le revenu de chaque ménage avec son score de privation et observe un seuil au-delà duquel la privation augmente brusquement quand le revenu baisse — un argument empirique en faveur d'un seuil de pauvreté relatif, plutôt que d'une échelle continue. La méthode, discutée dès sa publication, inspirera directement les indicateurs européens actuels de pauvreté en conditions de vie.",
    theories: ['privation-relative'],
  },
  {
    id: 'five-families-terrain',
    t: 'Terrain ethnographique à Mexico et San Juan',
    auteur: 'Oscar Lewis',
    annee: '1959–1966',
    methode:
      "Observation participante et entretiens biographiques approfondis auprès de familles pauvres, publiés sous forme de récits de vie plutôt que de statistiques agrégées.",
    d: "Le terrain qui fonde la théorie de la culture de la pauvreté : des mois d'observation au plus près de familles précises, à Mexico d'abord (Five Families, 1959) puis à San Juan et New York (La Vida, 1966).",
    detail:
      "La méthode ethnographique de Lewis restitue la parole et le quotidien de ses enquêtés avec un luxe de détails inhabituel pour l'époque, mais elle a aussi été critiquée pour son faible nombre de familles étudiées et pour la généralisation qu'il en a tirée — une culture de la pauvreté valable, selon lui, dans des sociétés très différentes les unes des autres.",
    theories: ['culture-de-la-pauvrete'],
  },
  {
    id: 'truly-disadvantaged-chicago',
    t: 'Étude des quartiers pauvres de Chicago',
    auteur: 'William Julius Wilson',
    annee: '1987',
    methode:
      "Analyse de données de recensement croisée avec des enquêtes de terrain sur plusieurs quartiers du South Side de Chicago, avant et après la désindustrialisation des années 1970.",
    d: "L'étude qui fonde la théorie de l'underclass : elle mesure la concentration croissante de la pauvreté dans certains quartiers, à mesure que les emplois industriels disparaissent et que les familles mieux loties s'en vont.",
    detail:
      "Wilson y montre que la part de ménages pauvres vivant dans des quartiers eux-mêmes majoritairement pauvres a fortement augmenté entre 1970 et 1980 à Chicago, ce qui isole les habitants restants d'un accès à l'emploi autant que de modèles de réussite par le travail.",
    theories: ['underclass'],
  },
  {
    id: 'erfs-insee',
    t: 'Enquête Revenus fiscaux et sociaux',
    auteur: 'INSEE',
    annee: 'annuelle depuis 1996',
    methode:
      "Appariement des données de l'enquête Emploi avec les déclarations fiscales et les fichiers des caisses d'allocations, pour reconstituer le revenu disponible de chaque ménage.",
    d: "La source statistique de référence pour mesurer le taux de pauvreté monétaire en France, reconduite chaque année et harmonisée avec la méthode européenne du seuil relatif.",
    detail:
      "Le décalage entre l'année de perception des revenus et la date de publication — généralement deux ans — est la principale limite pratique de l'enquête : le taux de pauvreté publié une année donnée décrit toujours une situation déjà un peu ancienne.",
    theories: ['privation-relative'],
  },
  {
    id: 'lenoir-recensement-1974',
    t: 'Recensement des catégories exclues',
    auteur: 'René Lenoir',
    annee: '1974',
    methode:
      "Compilation de statistiques administratives déjà existantes — handicap, vieillesse dépendante, inadaptation, marginalité, délinquance — additionnées en une seule catégorie pour la première fois.",
    d: "Le calcul qui fonde la théorie de l'exclusion de Lenoir : un chiffre unique, un Français sur dix, obtenu en additionnant des populations jusque-là comptées séparément par des administrations différentes.",
    detail:
      "La méthode elle-même vaudra à la théorie sa critique la plus durable : additionner des catégories aussi disparates masque des causes et des trajectoires très différentes derrière un chiffre unique, facile à retenir mais difficile à traduire en politique publique ciblée.",
    theories: ['exclusion-lenoir'],
  },
  {
    id: 'castel-etude-historique',
    t: 'Analyse historique de la question sociale',
    auteur: 'Robert Castel',
    annee: '1995',
    methode:
      "Analyse socio-historique des dispositifs d'assistance et de protection sociale en France, de l'Ancien Régime au salariat industriel puis à l'État-providence du XXᵉ siècle.",
    d: "Le travail historique qui fonde la théorie de la désaffiliation : Castel y retrace comment le salariat stable a longtemps servi de socle à l'intégration sociale, et ce qu'il advient quand ce socle se fissure.",
    detail:
      "En repartant de l'assistance aux pauvres sous l'Ancien Régime, Castel montre que la vulnérabilité sociale n'est pas propre à notre époque, mais que la forme qu'elle prend — liée à l'effritement du salariat stable plutôt qu'à l'absence de travail agricole ou artisanal — est, elle, spécifiquement contemporaine.",
    theories: ['desaffiliation-castel'],
  },
  {
    id: 'enquete-sans-domicile-insee',
    t: 'Enquête auprès des personnes sans domicile',
    auteur: 'INSEE / INED',
    annee: '2001, 2012, 2021',
    methode:
      "Enquête directe auprès des usagers des services d'hébergement et de distribution de repas, dans un échantillon de communes urbaines représentatif du territoire.",
    d: "La principale source française pour mesurer le sans-abrisme et son évolution, reconduite tous les dix ans environ faute de recensement administratif continu de cette population.",
    detail:
      "La méthode ne peut compter que les personnes qui recourent aux services d'aide au moment de l'enquête : elle sous-estime nécessairement les personnes qui échappent à tout contact avec ces dispositifs.",
    theories: ['desaffiliation-castel'],
  },
  {
    id: 'kuznets-donnees-historiques',
    t: 'Compilation historique des revenus déclarés',
    auteur: 'Simon Kuznets',
    annee: '1955',
    methode:
      "Rassemblement et harmonisation de séries fiscales américaines et britanniques sur plusieurs décennies, à une époque où aucune base de données internationale comparable n'existait encore.",
    d: "Le travail statistique fondateur derrière la courbe de Kuznets : une reconstitution, encore partielle selon les standards actuels, de l'évolution des inégalités de revenus sur longue période.",
    detail:
      "La rareté des données disponibles à l'époque a longtemps limité la possibilité de tester l'hypothèse hors des deux pays étudiés — un chantier que les grandes bases de données historiques constituées depuis les années 2000 ont considérablement élargi.",
    theories: ['courbe-de-kuznets'],
  },
  {
    id: 'world-inequality-database',
    t: 'World Inequality Database',
    auteur: 'Thomas Piketty, Emmanuel Saez, Gabriel Zucman et al.',
    annee: 'constituée depuis 2011, mise à jour en continu',
    methode:
      "Compilation et harmonisation de données fiscales, comptables et d'enquêtes sur près de deux siècles et une centaine de pays, pour reconstituer des séries longues de revenus et de patrimoine comparables entre pays.",
    d: "La base de données la plus complète pour suivre l'évolution des inégalités de revenus et de patrimoine dans le temps et entre pays, à l'origine des travaux de Piketty sur le rendement du capital.",
    detail:
      "En croisant des sources que les enquêtes de revenu classiques ne couvrent pas — déclarations fiscales des plus hauts revenus, statistiques de patrimoine — la base capte mieux la concentration au sommet de la distribution que les enquêtes déclaratives ordinaires.",
    theories: ['capital-au-21e-siecle-piketty'],
  },
  {
    id: 'marienthal-etude',
    t: 'Les Chômeurs de Marienthal',
    auteur: 'Marie Jahoda, Paul Lazarsfeld, Hans Zeisel',
    annee: '1933',
    methode:
      "Enquête de terrain approfondie dans un village industriel autrichien où la fermeture de l'unique usine textile avait laissé la quasi-totalité des familles sans emploi, croisant observation, journaux de temps et données administratives.",
    d: "L'étude fondatrice de la sociologie du chômage : elle documente, dans un village entièrement touché par la fermeture d'une usine, l'effritement du rapport au temps et à l'activité que le seul manque de revenu n'explique pas.",
    detail:
      "L'équipe observe une désorganisation progressive du temps quotidien, indépendante du niveau des allocations perçues : plus le chômage se prolonge, moins les journées se structurent, ce qui posera les bases de la théorie des fonctions latentes de l'emploi développée par Jahoda cinquante ans plus tard.",
    theories: ['fonctions-latentes-emploi-jahoda'],
  },
  {
    id: 'doeringer-piore-terrain',
    t: 'Observation des marchés internes en entreprise',
    auteur: 'Peter Doeringer et Michael Piore',
    annee: '1971',
    methode:
      "Étude de cas dans plusieurs entreprises manufacturières américaines, portant sur les règles effectives de recrutement, de promotion et de licenciement observées de l'intérieur.",
    d: "Le travail de terrain qui fonde la théorie du marché du travail segmenté : Doeringer et Piore y documentent des règles de carrière internes aux entreprises, largement indépendantes du marché du travail externe.",
    detail:
      "L'étude montre que la mobilité entre entreprises compte souvent moins, pour la trajectoire d'un salarié, que la position occupée dans la hiérarchie interne d'une seule entreprise — un résultat qui a pesé durablement sur l'analyse économique du marché du travail.",
    theories: ['marche-du-travail-segmente-doeringer-piore'],
  },
  {
    id: 'bertrand-mullainathan-testing',
    t: 'Are Emily and Greg More Employable Than Lakisha and Jamal?',
    auteur: 'Marianne Bertrand et Sendhil Mullainathan',
    annee: '2004',
    methode:
      "Envoi de plus de 5 000 CV fictifs, strictement identiques en compétences et en expérience, à des offres d'emploi réelles, en ne faisant varier que le prénom porté — perçu comme typiquement blanc ou typiquement afro-américain.",
    d: "L'étude de testing la plus citée sur la discrimination à l'embauche : à CV rigoureusement identique, seul le prénom change le taux de réponse des employeurs.",
    detail:
      "Les CV à prénom perçu comme blanc reçoivent significativement plus de rappels que les CV à prénom perçu comme afro-américain, à qualification affichée strictement égale — un écart que ni l'expérience ni le diplôme ne suffisent à effacer dans l'étude.",
    theories: ['discrimination-statistique-arrow-phelps', 'nature-du-prejuge-allport'],
  },
  {
    id: 'crenshaw-analyse-juridique',
    t: 'Analyse de jurisprudences américaines sur la discrimination',
    auteur: 'Kimberlé Crenshaw',
    annee: '1989',
    methode:
      "Analyse de décisions de justice américaines, en particulier l'affaire DeGraffenreid contre General Motors, où des plaignantes noires avaient vu leur plainte rejetée faute de cadre juridique reconnaissant une discrimination combinant race et sexe.",
    d: "Le travail juridique qui fonde la théorie de l'intersectionnalité : en étudiant des cas où le droit américain avait explicitement refusé de reconnaître une discrimination croisée, Crenshaw en tire l'argument théorique.",
    detail:
      "Dans l'affaire étudiée, le tribunal avait jugé qu'aucune discrimination raciale n'existait, puisque des hommes noirs étaient employés, et qu'aucune discrimination sexuelle n'existait non plus, puisque des femmes blanches étaient employées — sans jamais examiner la situation spécifique des femmes noires, cumulant les deux critères.",
    theories: ['intersectionnalite-crenshaw'],
  },
  {
    id: 'robbers-cave-sherif',
    t: "Expérience de la caverne des voleurs (Robbers Cave)",
    auteur: 'Muzafer Sherif',
    annee: '1954',
    methode:
      "Expérience de terrain dans un camp de vacances, où des garçons répartis en deux groupes séparés développent une hostilité intergroupe rapide, avant qu'un objectif commun forcé ne la réduise.",
    d: "Une expérience fondatrice sur la formation rapide des préjugés intergroupes : la seule appartenance à deux groupes en compétition suffit à engendrer stéréotypes et hostilité, sans aucune différence réelle préexistante entre les garçons.",
    detail:
      "La seconde phase de l'expérience montre que le contact seul entre les deux groupes ne suffit pas à réduire l'hostilité : il faut leur donner un but commun, que ni l'un ni l'autre ne peut atteindre seul, pour que la coopération remplace la rivalité — un résultat qui nourrira directement l'hypothèse du contact d'Allport.",
    theories: ['nature-du-prejuge-allport'],
  },
];
