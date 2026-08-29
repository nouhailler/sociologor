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
  {
    id: 'glass-londres-1964',
    t: 'Observation de quartiers ouvriers londoniens',
    auteur: 'Ruth Glass',
    annee: '1964',
    methode:
      "Observation de plusieurs quartiers ouvriers de Londres (Islington notamment) au moment où des ménages de la classe moyenne commencent à y racheter et rénover des logements anciens.",
    d: "L'observation qui donne son nom à la gentrification : Glass y décrit, quartier par quartier, le remplacement progressif des habitants d'origine par des ménages plus aisés attirés par le charme de l'ancien et sa proximité du centre.",
    detail:
      "L'étude reste largement descriptive selon les standards actuels, mais son vocabulaire — la gentry qui s'installe — s'est imposé internationalement pour désigner un phénomène depuis mesuré statistiquement dans la plupart des grandes métropoles.",
    theories: ['gentrification-glass'],
  },
  {
    id: 'kain-etude-1968',
    t: 'Étude sur la ségrégation résidentielle et l’emploi à Détroit et Chicago',
    auteur: 'John Kain',
    annee: '1968',
    methode:
      "Analyse croisée de données de localisation des emplois et de données de ségrégation résidentielle dans les agglomérations de Détroit et Chicago.",
    d: "L'étude qui fonde l'hypothèse de l'inadéquation spatiale : Kain y mesure la corrélation entre l'éloignement résidentiel des emplois et le taux de chômage des populations concernées par la ségrégation.",
    detail:
      "L'étude a été critiquée pour la difficulté à isoler l'effet propre de la localisation de celui d'autres facteurs — qualification, réseau, discrimination directe — mais son intuition centrale, la distance compte en elle-même, a résisté à plusieurs décennies de débats méthodologiques.",
    theories: ['inadequation-spatiale-kain'],
  },
  {
    id: 'chicago-cartographie-park-burgess',
    t: 'Cartographie sociale de Chicago',
    auteur: 'Robert Park, Ernest Burgess et l’école de Chicago',
    annee: '1920–1930',
    methode:
      "Relevé systématique, quartier par quartier, des taux de délinquance, de pauvreté et de composition de la population de Chicago, superposé à un découpage de la ville en zones concentriques.",
    d: "Le travail cartographique qui fonde le modèle des zones concentriques : une génération d'étudiants de l'école de Chicago documente, rue par rue, la répartition sociale d'une grande ville industrielle en pleine croissance.",
    detail:
      "La méthode, combinant statistiques officielles et observation de terrain directe, deviendra le modèle de toute la sociologie urbaine américaine ultérieure, bien après que le modèle des zones concentriques lui-même ait été nuancé pour d'autres villes que Chicago.",
    theories: ['ecole-de-chicago-park-burgess'],
  },
  {
    id: 'standing-recherche-oit',
    t: 'Recherches sur la flexibilisation du marché du travail',
    auteur: 'Guy Standing',
    annee: '1975–2010 (carrière au Bureau international du travail)',
    methode:
      "Compilation et analyse de données comparatives sur l'emploi informel, les contrats courts et la protection sociale dans une centaine de pays, menées durant plusieurs décennies au sein d'une organisation internationale.",
    d: "Le travail de terrain international qui fonde la théorie du précariat : une longue carrière consacrée à documenter, pays par pays, la montée de formes d'emploi instables et faiblement protégées.",
    detail:
      "L'ampleur comparative de cette recherche donne à la thèse du précariat une portée internationale que peu de travaux sociologiques centrés sur un seul pays peuvent revendiquer, au prix d'une définition parfois large de ce qui compte comme situation précaire.",
    theories: ['precariat-standing'],
  },
  {
    id: 'bourdieu-precarite-1997',
    t: 'Discours sur la précarité comme mode de domination',
    auteur: 'Pierre Bourdieu',
    annee: '1997',
    methode:
      "Analyse sociologique et politique, appuyée sur l'observation de la diffusion des contrats courts et de l'intérim en France durant les années 1980 et 1990, présentée sous forme de discours puis publiée.",
    d: "Le texte qui fonde la thèse de la précarité comme mode de domination : un discours prononcé devant des militants syndicaux et associatifs à Grenoble, republié depuis dans plusieurs recueils.",
    detail:
      "Le texte reste plus argumentatif qu'empirique au sens strict, mais s'appuie sur des données de l'époque concernant la progression des contrats courts et de l'intérim en France, qu'il interprète à la lumière de sa théorie de la domination symbolique.",
    theories: ['precarite-domination-bourdieu'],
  },
  {
    id: 'kansas-city-study-cumming-henry',
    t: 'Kansas City Study of Adult Life',
    auteur: 'Elaine Cumming et William Henry',
    annee: '1952–1961',
    methode:
      "Étude longitudinale par entretiens répétés auprès de plusieurs centaines d'adultes de 50 à 90 ans résidant à Kansas City, portant sur leur niveau de participation sociale et leur satisfaction de vie au fil du temps.",
    d: "L'enquête de terrain qui fonde empiriquement la théorie du désengagement : le suivi dans la durée d'un même groupe d'adultes vieillissants, pour observer comment leur rapport aux rôles et aux relations sociales évolue avec l'âge.",
    detail:
      "L'étude documente une baisse mesurable de l'interaction sociale à mesure que ses enquêtés avancent en âge, que Cumming et Henry interprètent comme un retrait mutuellement consenti. Des relectures ultérieures des mêmes données ont souligné que cette baisse recoupait aussi des contraintes externes — perte d'emploi imposée, deuils, mobilité réduite — que l'interprétation initiale minorait.",
    theories: ['desengagement-cumming-henry'],
  },
  {
    id: 'enquete-care-drees',
    t: 'Enquête CARE (Capacités, Aides et REssources des seniors)',
    auteur: 'DREES',
    annee: '2015',
    methode:
      "Enquête statistique nationale en deux volets — personnes âgées vivant à domicile et personnes âgées en établissement — croisée avec un questionnaire adressé à leurs proches aidants, sur la perte d'autonomie et l'aide reçue.",
    d: "La principale source française sur la dépendance et l'aide informelle aux personnes âgées, construite pour mesurer conjointement l'ampleur de la perte d'autonomie et la charge qui repose sur l'entourage familial.",
    detail:
      "L'enquête met en évidence le poids central des aidants familiaux, en particulier des conjointes et des filles, dans la prise en charge quotidienne de la dépendance, bien avant tout recours à une aide professionnelle ou à un établissement — un rôle largement invisible dans les statistiques d'aide publique.",
    theories: [],
  },
  {
    id: 'polish-peasant-thomas-znaniecki',
    t: 'The Polish Peasant in Europe and America',
    auteur: 'William I. Thomas et Florian Znaniecki',
    annee: '1918–1920',
    methode:
      "Analyse de correspondances familiales, de récits de vie et de journaux intimes de paysans polonais émigrés aux États-Unis, croisée avec des archives institutionnelles — la première grande étude de sociologie de la migration fondée sur ce type de matériau.",
    d: "L'enquête fondatrice de la sociologie de la migration et de la méthode biographique : reconstituer, à partir de la parole même des migrants, ce qu'un déplacement transforme dans une existence, plutôt que de la déduire de statistiques agrégées.",
    detail:
      "Thomas et Znaniecki documentent la désorganisation puis la réorganisation progressive des attitudes et des valeurs d'une communauté paysanne polonaise confrontée à l'urbanisation industrielle américaine, une méthode et un objet qui inspireront directement l'école de Chicago naissante.",
    theories: [],
  },
  {
    id: 'cils-portes-rumbaut',
    t: 'Children of Immigrants Longitudinal Study (CILS)',
    auteur: 'Alejandro Portes et Rubén Rumbaut',
    annee: '1992–2006',
    methode:
      "Enquête longitudinale menée à trois reprises auprès de plusieurs milliers d'enfants d'immigrés à San Diego et à Miami-Fort Lauderdale, suivis de l'adolescence au début de l'âge adulte.",
    d: "L'enquête empirique qui fonde la théorie de l'assimilation segmentée : suivre dans la durée une même cohorte d'enfants d'immigrés pour observer laquelle des trois trajectoires — ascendante, descendante, ou sélective — se dessine réellement.",
    detail:
      "L'étude met en évidence l'importance du capital communautaire et de la structure familiale, bien plus que de la seule volonté d'intégration, pour expliquer pourquoi des enfants d'immigrés aux origines nationales comparables connaissent des destins scolaires et professionnels très différents une fois adultes.",
    theories: ['assimilation-segmentee-portes-zhou'],
  },
  {
    id: 'enquete-teo-insee-ined',
    t: 'Enquête Trajectoires et Origines (TeO)',
    auteur: 'INSEE et INED',
    annee: '2008–2009',
    methode:
      "Enquête statistique nationale menée en France auprès de plus de vingt mille personnes, immigrées, descendantes d'immigrés ou natives, portant sur leurs trajectoires scolaires, professionnelles, résidentielles et sur les discriminations déclarées.",
    d: "La principale source française sur les trajectoires des immigrés et de leurs descendants, construite précisément pour distinguer ces deux populations et mesurer si les inégalités observées se prolongent, s'atténuent ou se recomposent d'une génération à l'autre.",
    detail:
      "L'enquête permet, pour la première fois à cette échelle en France, de comparer directement les trajectoires des immigrés, de leurs enfants nés en France et de la population sans ascendance migratoire récente, sur des critères identiques — plutôt que de déduire l'intégration de statistiques d'origine indirectes.",
    theories: [],
  },
  {
    id: 'les-heritiers-bourdieu-passeron-1964',
    t: 'Les Héritiers. Les étudiants et la culture',
    auteur: 'Pierre Bourdieu et Jean-Claude Passeron',
    annee: '1964',
    methode:
      "Enquête statistique et par entretiens auprès d'étudiants français, croisant leurs résultats et leurs pratiques culturelles avec l'origine sociale de leur famille.",
    d: "L'enquête empirique qui précède et fonde la théorie de la reproduction scolaire : montrer, chiffres à l'appui, que l'accès et la réussite dans l'enseignement supérieur restent statistiquement liés à l'origine sociale, malgré la gratuité et l'ouverture formelle du système.",
    detail:
      "L'étude documente que les étudiants d'origine populaire, minoritaires et souvent en difficulté dans un système scolaire qui valorise des codes culturels transmis en famille, ne doivent pas leur moindre réussite à un moindre talent mais à un désajustement entre leur capital culturel et celui qu'exige, sans le déclarer, l'institution.",
    theories: ['reproduction-bourdieu-passeron'],
  },
  {
    id: 'panel-eleves-depp',
    t: 'Panels d’élèves du second degré',
    auteur: 'DEPP (ministère de l’Éducation nationale)',
    annee: '1995–',
    methode:
      "Suivi longitudinal de cohortes d'élèves entrant en sixième une même année, observés jusqu'à leur sortie du système scolaire, avec relevé de leur parcours, de leurs résultats et de leur origine sociale.",
    d: "La principale source française pour suivre, dans la durée, comment un retard scolaire ou une orientation précoce se transforme, ou non, en décrochage plusieurs années plus tard.",
    detail:
      "Le suivi d'une même cohorte sur l'ensemble d'un cursus permet d'isoler les facteurs de risque qu'une simple photographie annuelle ne peut pas révéler, en particulier le poids du redoublement précoce, largement confirmé par ces données comme le plus puissant prédicteur statistique du décrochage ultérieur.",
    theories: [],
  },
  {
    id: 'conflict-tactics-scale-straus',
    t: 'Conflict Tactics Scale',
    auteur: 'Murray A. Straus',
    annee: '1979',
    methode:
      "Questionnaire standardisé mesurant la fréquence de différentes tactiques de résolution de conflit au sein du couple ou de la famille, du raisonnement verbal jusqu'à la violence physique grave, administré à grande échelle et traduit dans de nombreux pays.",
    d: "Le premier outil de mesure comparable internationalement pour quantifier la violence conjugale et familiale, conçu pour être posé systématiquement plutôt que de dépendre du seul signalement spontané des victimes.",
    detail:
      "L'échelle a permis les premières comparaisons statistiques rigoureuses entre pays et entre périodes, mais son principe même — compter des actes sans toujours en mesurer le contexte, la gravité ou qui en a pris l'initiative — a été critiqué pour risquer de mettre sur un même plan des situations très différentes, notamment entre violence défensive et violence offensive.",
    theories: [],
  },
  {
    id: 'enquete-virage-ined',
    t: 'Enquête Violences et rapports de genre (VIRAGE)',
    auteur: 'INED',
    annee: '2015',
    methode:
      "Enquête statistique nationale menée en France auprès de plusieurs dizaines de milliers de personnes, mesurant les violences subies au cours de la vie dans plusieurs contextes distincts — couple, famille, travail, espace public, milieu scolaire — plutôt qu'un seul.",
    d: "La principale source française pour comparer, avec une méthode commune, la fréquence des violences selon le contexte où elles se produisent et selon le genre de la personne qui les subit.",
    detail:
      "L'enquête confirme une asymétrie de genre marquée mais non uniforme selon le contexte : les femmes déclarent nettement plus de violences sexuelles et conjugales, les hommes davantage de violences physiques en espace public, ce qu'une mesure agrégée, tous contextes confondus, aurait masqué.",
    theories: [],
  },
];
