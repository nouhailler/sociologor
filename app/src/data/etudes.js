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
];
