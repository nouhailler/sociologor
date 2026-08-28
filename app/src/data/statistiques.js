/**
 * Indicateurs statistiques cités par les fiches problématique — la définition
 * d'une mesure, sa source, et une valeur d'ordre de grandeur plutôt qu'un
 * chiffre figé : ces séries sont révisées chaque année par leur producteur,
 * et une valeur exacte recopiée ici deviendrait fausse dès la publication
 * suivante. `valeur` donne donc un ordre de grandeur explicitement daté ;
 * pour un chiffre à jour, la fiche renvoie vers la source.
 */
export const STATISTIQUES = [
  {
    id: 'taux-de-pauvrete-monetaire-france',
    t: 'Taux de pauvreté monétaire en France',
    source: 'INSEE, enquête Revenus fiscaux et sociaux',
    valeur: "De l'ordre de 14 à 15 % de la population (seuil à 60 % du niveau de vie médian), millésime le plus récemment publié",
    d: "La part de la population dont le niveau de vie est inférieur au seuil de pauvreté — l'indicateur le plus cité, et le plus souvent confondu avec « la » mesure de la pauvreté alors qu'il n'en couvre que la dimension monétaire.",
    detail:
      "Le taux dépend entièrement du choix du seuil : à 50 % du niveau de vie médian, norme internationale alternative, il est mécaniquement plus bas qu'à 60 %, norme européenne — sans qu'aucune pauvreté supplémentaire n'ait disparu entre les deux calculs.",
    limites:
      "Un revenu déclaré ne dit rien du patrimoine, de la stabilité dans le temps, ni des privations réellement subies : deux ménages au même niveau de vie peuvent vivre des situations très différentes selon leurs charges fixes et leurs à-côtés.",
  },
  {
    id: 'seuil-de-pauvrete-60',
    t: 'Seuil de pauvreté à 60 % du niveau de vie médian',
    source: 'INSEE / Eurostat',
    valeur: "Un niveau de vie mensuel fixé chaque année à 60 % du niveau de vie médian national, pour une personne seule",
    d: "La ligne qui sépare, par convention statistique, les pauvres des non-pauvres au sens monétaire — un choix méthodologique autant qu'une mesure.",
    detail:
      "Le seuil se recalcule chaque année sur la distribution des revenus de l'année de référence : il monte quand le niveau de vie médian monte, ce qui peut faire passer sous le seuil des ménages dont le revenu, lui, n'a pas baissé.",
    limites:
      "Un seuil relatif ne peut, par construction, jamais atteindre zéro : même une société où tous les revenus doublent conserve mécaniquement le même taux de pauvreté si la distribution reste identique.",
  },
  {
    id: 'intensite-de-la-pauvrete',
    t: 'Intensité de la pauvreté',
    source: 'INSEE / Eurostat',
    valeur: "L'écart relatif entre le niveau de vie médian des personnes pauvres et le seuil de pauvreté, exprimé en pourcentage",
    d: "Un indicateur complémentaire au taux de pauvreté : il dit non pas combien de personnes sont pauvres, mais à quelle distance du seuil elles se trouvent en moyenne.",
    detail:
      "Deux pays peuvent afficher le même taux de pauvreté et des intensités très différentes : dans l'un, les pauvres se situent juste sous le seuil ; dans l'autre, beaucoup plus loin en dessous — une différence que le seul taux ne montre pas.",
    limites:
      "L'indicateur se lit mal isolément : une intensité en hausse peut signaler un appauvrissement réel des plus pauvres, ou simplement un déplacement statistique du seuil.",
  },
  {
    id: 'taux-de-pauvrete-en-conditions-de-vie',
    t: 'Taux de pauvreté en conditions de vie',
    source: 'INSEE, enquête Statistiques sur les ressources et conditions de vie',
    valeur: "Part des ménages cumulant plusieurs privations matérielles et sociales sur une liste normée d'items",
    d: "Une mesure non monétaire de la pauvreté, directement héritée de la méthode de Townsend : compter ce dont un ménage se prive faute de moyens, plutôt que son seul revenu.",
    detail:
      "Le taux en conditions de vie et le taux monétaire ne désignent pas toujours les mêmes ménages : un revenu tout juste au-dessus du seuil peut coexister avec des privations réelles, notamment chez les indépendants ou les propriétaires endettés.",
    limites:
      "La liste des privations retenues — partir en vacances, chauffer son logement, remplacer des meubles usés — reflète des normes de confort qui évoluent dans le temps, ce qui complique les comparaisons sur longue période.",
  },
  {
    id: 'arope-eurostat',
    t: 'Indicateur AROPE (risque de pauvreté ou d’exclusion sociale)',
    source: 'Eurostat',
    valeur: "Part de la population cumulant au moins un des trois risques : pauvreté monétaire, privation matérielle et sociale sévère, ou très faible intensité de travail dans le ménage",
    d: "L'indicateur composite utilisé par l'Union européenne pour son objectif de réduction de la pauvreté, qui élargit le seul critère monétaire à deux dimensions supplémentaires.",
    detail:
      "En cumulant trois risques distincts sans les pondérer, l'indicateur compte une personne une seule fois même si elle en cumule plusieurs — ce qui peut masquer les situations de pauvreté les plus sévères, où plusieurs risques se superposent.",
    limites:
      "La comparaison entre pays reste sensible aux différences de systèmes de protection sociale, qui affectent différemment chacune des trois composantes.",
  },
];
