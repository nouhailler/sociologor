/**
 * Théories sociologiques citées par les fiches problématique — des cadres
 * explicatifs signés, datés, attribuables à un auteur ou un courant, à
 * distinguer des concepts du corpus (`concepts.js`) : une théorie articule
 * plusieurs concepts en une explication d'ensemble d'un phénomène donné, elle
 * n'est pas elle-même un outil qu'on retrouve dans d'autres fiches.
 *
 * Contrairement aux quinze auteurs du corpus, ces théories ne portent pas
 * toutes une fiche auteur : `auteur` reste alors un nom de champ libre, non
 * cliquable.
 */
export const THEORIES = [
  {
    id: 'culture-de-la-pauvrete',
    t: 'Théorie de la culture de la pauvreté',
    auteur: 'Oscar Lewis',
    annee: '1959',
    oeuvre: 'Five Families: Mexican Case Studies in the Culture of Poverty',
    d: "La pauvreté prolongée engendrerait un ensemble de valeurs, de comportements et d'attentes adaptatifs qui finissent par se transmettre d'une génération à l'autre, indépendamment des conditions économiques qui les ont fait naître.",
    detail:
      "Lewis observe des familles pauvres à Mexico et à San Juan et y décrit des traits récurrents — fatalisme, désengagement des institutions, gratification immédiate — qu'il présente comme une adaptation à la précarité, devenue ensuite une culture transmise par la socialisation plutôt que reproduite par la seule contrainte économique. La thèse a été largement reprise, et tout aussi largement retournée contre son objet : dans le débat public américain des années 1960-1980, elle a servi à expliquer la pauvreté par les pauvres eux-mêmes, ce que Lewis ne voulait pas dire — il insistait sur l'origine structurelle du phénomène, la culture n'étant pour lui qu'un mécanisme de transmission, pas une cause première.",
    concepts: ['habitus', 'anomie'],
  },
  {
    id: 'privation-relative',
    t: 'Théorie de la privation relative',
    auteur: 'Peter Townsend',
    annee: '1979',
    oeuvre: 'Poverty in the United Kingdom',
    d: "La pauvreté ne se mesure pas à un minimum de subsistance absolu, mais à l'écart avec les ressources, les biens et les activités que la société environnante tient pour normaux.",
    detail:
      "Townsend rompt avec les seuils de subsistance calorique hérités de Booth et Rowntree : est pauvre, selon lui, quiconque manque des ressources nécessaires pour participer aux habitudes de vie ordinaires de sa société — se chauffer, recevoir, offrir un cadeau, prendre des vacances. La pauvreté devient ainsi relative à une époque et à une société données, et se mesure par un indice de privation (styles de vie, biens possédés) plutôt que par le seul revenu. La théorie fonde la mesure européenne actuelle du taux de pauvreté, calée sur un pourcentage du niveau de vie médian national.",
    concepts: ['anomie'],
  },
  {
    id: 'approche-par-les-capabilites',
    t: 'Approche par les capabilités',
    auteur: 'Amartya Sen',
    annee: '1985',
    oeuvre: 'Commodities and Capabilities',
    d: "La pauvreté est une privation de capabilités — les libertés réelles d'être et de faire ce qu'une personne a des raisons de valoriser — et non un simple manque de revenu.",
    detail:
      "Sen déplace l'attention du revenu, un moyen, vers ce que ce revenu permet réellement de faire compte tenu des contraintes propres à chacun : un revenu identique n'ouvre pas les mêmes possibilités à une personne handicapée, à une femme dans une société qui restreint sa mobilité, ou à un habitant d'une zone sans transport. L'approche fonde la pauvreté dite multidimensionnelle, mesurée par des indices qui combinent santé, éducation et niveau de vie plutôt que le seul revenu monétaire — l'indice de développement humain du PNUD, puis l'indice de pauvreté multidimensionnelle, en sont les applications les plus connues.",
    concepts: ['individualisme-methodologique'],
  },
  {
    id: 'underclass',
    t: "Théorie de l'underclass",
    auteur: 'William Julius Wilson',
    annee: '1987',
    oeuvre: 'The Truly Disadvantaged',
    d: "La désindustrialisation et le départ des classes moyennes noires ont concentré, dans certains quartiers des grandes villes américaines, une pauvreté urbaine coupée à la fois de l'emploi et des réseaux qui y donnent accès.",
    detail:
      "Wilson observe à Chicago une population que ni le marché du travail ni les réseaux sociaux ne relient plus à l'emploi stable : la disparition des emplois industriels et le départ des familles mieux loties ont laissé des quartiers homogènes en pauvreté, où manque tout modèle de réussite par le travail. À la différence de la culture de la pauvreté, Wilson situe la cause dans la structure économique et spatiale — pas dans des valeurs — même si les deux thèses seront souvent confondues dans le débat public, notamment face à la lecture plus moralisatrice défendue par Charles Murray à la même période.",
    concepts: ['blasement-urbain', 'capital-social'],
  },
];
