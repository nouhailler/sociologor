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
  {
    id: 'sans-domicile-insee',
    t: 'Nombre de personnes sans domicile',
    source: 'INSEE / INED, enquête auprès des personnes sans domicile',
    valeur: "De l'ordre de plusieurs centaines de milliers de personnes en France, en nette hausse sur longue période selon les trois vagues d'enquête disponibles",
    d: "La forme la plus visible et la plus sévère d'exclusion — l'absence de logement personnel, mesurée par une enquête directe faute de recensement administratif continu.",
    detail:
      "L'écart entre les vagues d'enquête (2001, 2012, 2021) montre une progression continue, portée notamment par l'allongement des files d'attente en hébergement d'urgence et par la composante familiale, en forte hausse.",
    limites:
      "L'enquête ne compte que les personnes en contact avec un service d'aide au moment du passage des enquêteurs : elle laisse hors champ celles qui dorment dans un lieu totalement invisible aux dispositifs.",
  },
  {
    id: 'non-recours-aux-droits',
    t: 'Taux de non-recours aux prestations sociales',
    source: 'DREES / Observatoire des non-recours aux droits et services (Odenore)',
    valeur: "Selon la prestation, de l'ordre d'un tiers à la moitié des personnes éligibles n'en font pas la demande",
    d: "La part des personnes qui auraient droit à une aide et ne la perçoivent pas — un indicateur qui mesure moins la générosité d'un système que sa capacité réelle à atteindre ceux qu'il vise.",
    detail:
      "Le non-recours se décompose en plusieurs mécanismes distincts : ignorer son droit, renoncer à le faire valoir par lassitude administrative, ou refuser sciemment de le demander pour ne pas être identifié comme bénéficiaire de l'aide sociale.",
    limites:
      "La mesure elle-même est délicate : il faut d'abord estimer combien de personnes seraient éligibles, ce qui suppose de connaître des situations que l'absence même de demande rend difficiles à recenser.",
  },
  {
    id: 'isolement-relationnel',
    t: 'Taux d’isolement relationnel',
    source: 'Fondation de France / INSEE, enquêtes sur les réseaux de sociabilité',
    valeur: "Une part significative et croissante de la population déclare des réseaux de sociabilité très restreints, plus marquée après 75 ans et chez les personnes déjà en difficulté sociale",
    d: "La part de la population qui ne dispose que de très peu, voire d'aucun contact régulier hors de son foyer — un indicateur relationnel plutôt que matériel de l'exclusion.",
    detail:
      "L'isolement mesuré recoupe partiellement, sans s'y confondre, la pauvreté et le grand âge : on peut être isolé sans être pauvre, et inversement, ce qui en fait une dimension à suivre pour elle-même.",
    limites:
      "Le seuil à partir duquel un réseau relationnel compte comme « restreint » reste conventionnel, et varie sensiblement d'une enquête à l'autre selon la définition retenue du contact social.",
  },
  {
    id: 'chomage-longue-duree',
    t: 'Taux de chômage de longue durée',
    source: 'INSEE, enquête Emploi',
    valeur: "Une part substantielle des chômeurs le sont depuis un an ou plus, la part augmentant sensiblement avec l'âge",
    d: "La part des chômeurs inscrits depuis au moins un an — un des principaux facteurs d'éloignement durable de l'emploi et, au-delà, du reste de la vie sociale.",
    detail:
      "Au-delà d'un an, chaque mois supplémentaire d'éloignement réduit statistiquement les chances de retour à l'emploi, indépendamment des qualifications : les recruteurs lisent la durée elle-même comme un signal défavorable.",
    limites:
      "L'indicateur ne distingue pas les chômeurs qui alternent de courtes reprises d'activité de ceux qui restent continûment sans emploi, alors que les deux trajectoires n'ont pas les mêmes conséquences sociales.",
  },
  {
    id: 'coefficient-de-gini',
    t: 'Coefficient de Gini',
    source: 'INSEE / Eurostat / Banque mondiale',
    valeur: "Compris entre 0 (égalité parfaite) et 1 (un seul individu détiendrait tout) ; les revenus disponibles des pays développés se situent le plus souvent entre 0,25 et 0,40, le patrimoine affichant des valeurs nettement plus élevées",
    d: "L'indicateur de synthèse le plus utilisé pour résumer en un seul chiffre l'ensemble d'une distribution de revenus ou de patrimoine, du plus égalitaire au plus concentré.",
    detail:
      "Le coefficient se lit comme l'écart entre la répartition observée et une répartition parfaitement égale : plus il se rapproche de 1, plus une petite part de la population concentre une grande part du total mesuré.",
    limites:
      "Un chiffre unique masque où se situe l'inégalité dans la distribution : deux pays au même Gini peuvent différer fortement selon que l'écart se creuse surtout au sommet, à la base, ou entre le milieu et les extrêmes.",
  },
  {
    id: 'rapport-interdecile',
    t: 'Rapport interdécile (D9/D1)',
    source: 'INSEE',
    valeur: "Le rapport entre le niveau de vie plancher des 10 % les plus aisés (D9) et le niveau de vie plafond des 10 % les plus modestes (D1) ; de l'ordre de 3 à 3,5 en France selon les années",
    d: "Le rapport entre le haut et le bas de l'échelle des niveaux de vie, sans tenir compte de ce qui se passe entre les deux — une mesure plus lisible que le Gini, mais plus partielle.",
    detail:
      "Un rapport interdécile stable peut coexister avec une évolution très différente au sommet de la distribution : il ne dit rien de ce qui se passe, par exemple, entre les 1 % et les 0,1 % les plus riches.",
    limites:
      "En ignorant tout ce qui n'est pas aux deux extrémités mesurées, l'indicateur peut manquer une concentration croissante des revenus ou du patrimoine au sein même du dernier décile.",
  },
  {
    id: 'quantiles-de-revenu',
    t: 'Quantiles de revenu (déciles, quartiles, centiles)',
    source: 'INSEE / Eurostat',
    valeur: "La population classée par niveau de vie croissant et découpée en groupes de taille égale — dix déciles, quatre quartiles, cent centiles — chacun servant de brique aux autres indicateurs",
    d: "Moins un indicateur en soi qu'une méthode : ranger toute une population par niveau de vie croissant et la découper en tranches égales, sur lesquelles se construisent la plupart des mesures d'inégalité.",
    detail:
      "Le choix du découpage change ce qu'on voit : les déciles suffisent pour une vue d'ensemble, mais seuls les centiles, voire les millièmes, révèlent la concentration au tout sommet de la distribution, largement invisible à l'échelle des déciles.",
    limites:
      "Un découpage en tranches égales en nombre de personnes masque des écarts de valeur très inégaux entre tranches : l'écart entre le premier et le deuxième décile n'a rien à voir, en euros, avec celui entre le neuvième et le dixième.",
  },
  {
    id: 'ecarts-de-revenus',
    t: 'Part du revenu total détenue par les plus aisés',
    source: 'INSEE / World Inequality Database',
    valeur: "Les 10 % les plus aisés concentrent, selon les pays et les années, entre un quart et un tiers du revenu total ; le 1 % le plus aisé en concentre à lui seul une part à deux chiffres dans plusieurs grandes économies",
    d: "Une autre façon de lire la concentration des revenus : non plus un rapport entre deux points de la distribution, mais la part du total captée par une fraction donnée de la population.",
    detail:
      "Cette mesure se prête particulièrement bien au suivi historique sur longue période, à partir des données fiscales : c'est la méthode popularisée par les travaux de Thomas Piketty et ses coauteurs.",
    limites:
      "Les données fiscales sous-estiment généralement le very haut de la distribution, en partie soustrait à l'impôt par l'optimisation et l'évasion fiscales — la concentration réelle est donc probablement supérieure à la mesure disponible.",
  },
  {
    id: 'mobilite-sociale-indice',
    t: 'Élasticité intergénérationnelle du revenu',
    source: 'OCDE / INSEE',
    valeur: "La part du revenu parental qui se retrouve mécaniquement dans le revenu de l'enfant à l'âge adulte ; plus proche de 0 dans les pays les plus mobiles (pays nordiques), plus proche de 0,5 dans les moins mobiles",
    d: "La mesure la plus citée de la mobilité sociale entre générations : plus l'indice est élevé, plus le revenu des parents détermine celui des enfants, indépendamment de leur propre parcours.",
    detail:
      "L'indicateur a donné lieu à une image devenue classique, la « courbe du Grand Gatsby » : les pays les plus inégalitaires à un instant donné sont statistiquement aussi les moins mobiles d'une génération à l'autre.",
    limites:
      "La mesure demande de suivre les mêmes familles sur deux générations, ce qui limite les pays et les périodes pour lesquels elle est disponible, et retarde de plusieurs décennies la mesure de la mobilité la plus récente.",
  },
  {
    id: 'taux-de-chomage-bit',
    t: 'Taux de chômage au sens du BIT',
    source: 'INSEE, enquête Emploi, définition harmonisée par le Bureau international du travail',
    valeur: "Part de la population active sans emploi, disponible pour en occuper un et en recherchant activement ; de l'ordre de 7 à 8 % de la population active en France ces dernières années, avec de fortes variations dans le temps et entre pays",
    d: "L'indicateur de référence internationale, construit pour permettre les comparaisons entre pays plutôt que pour refléter au plus près le nombre de personnes inscrites auprès des services de l'emploi.",
    detail:
      "La définition du BIT exige à la fois l'absence d'emploi, la disponibilité immédiate et une recherche active récente : elle exclut de fait des personnes qui se considèrent elles-mêmes au chômage sans remplir ces trois critères à la lettre.",
    limites:
      "L'écart entre le nombre de demandeurs d'emploi inscrits et le taux de chômage au sens du BIT surprend souvent le public, alors qu'il tient simplement à deux définitions différentes, construites pour des usages distincts.",
  },
  {
    id: 'halo-du-chomage',
    t: 'Halo autour du chômage',
    source: 'INSEE, enquête Emploi',
    valeur: "Un volant de personnes supplémentaire par rapport au chômage au sens du BIT, qui souhaitent travailler sans remplir strictement les critères de disponibilité ou de recherche active",
    d: "Les personnes qui voudraient travailler mais que la définition stricte du chômage laisse de côté — parce qu'elles ne cherchent pas activement, ou ne seraient pas disponibles immédiatement, souvent faute de solution de garde ou de transport.",
    detail:
      "L'indicateur révèle une frontière poreuse entre chômage, inactivité subie et découragement : une partie du halo bascule dans le chômage mesuré dès que les conditions matérielles de la recherche s'améliorent, sans qu'aucun événement économique nouveau ne l'explique.",
    limites:
      "Le halo reste plus difficile à mesurer avec précision que le chômage lui-même, car il repose sur des déclarations d'intention (« souhaiterait travailler ») plus délicates à objectiver qu'une recherche active constatée.",
  },
  {
    id: 'taux-de-chomage-des-jeunes',
    t: 'Taux de chômage des 15-24 ans',
    source: 'INSEE / Eurostat, enquête Emploi',
    valeur: "Nettement supérieur au taux de chômage de l'ensemble de la population active, souvent proche du double ou plus selon les pays et les années",
    d: "Le taux de chômage calculé sur la seule population active des 15-24 ans, structurellement plus élevé que la moyenne parce que cette tranche d'âge inclut surtout des personnes en début de parcours professionnel, plus exposées aux contrats courts et aux premières recherches d'emploi.",
    detail:
      "L'indicateur se lit souvent de travers : comme l'essentiel des jeunes de cet âge sont encore scolarisés et donc hors de la population active, le taux rapporte les chômeurs à un groupe d'actifs restreint, ce qui mécaniquement le gonfle par rapport à un taux calculé sur l'ensemble de la classe d'âge.",
    limites:
      "Comparer ce taux entre pays est trompeur si les systèmes éducatifs retiennent très différemment les jeunes en études : un pays qui scolarise plus longtemps affiche mécaniquement moins de jeunes actifs, donc une base de calcul plus restreinte et plus fragile statistiquement.",
  },
  {
    id: 'ecart-de-callback-testing',
    t: 'Écart de taux de réponse mesuré par testing',
    source: 'DARES, ISM Corum, et études académiques de type Bertrand-Mullainathan',
    valeur: "Selon les études et les critères testés, les candidatures perçues comme issues de l'immigration ou de quartiers stigmatisés doivent être envoyées significativement plus souvent que des candidatures identiques par ailleurs pour obtenir un même nombre de réponses positives",
    d: "L'écart de rappel entre candidatures rigoureusement identiques, sauf sur un critère testé (nom, adresse, photo) — la mesure la plus directe dont dispose la recherche pour établir une discrimination sans avoir à en démontrer l'intention.",
    detail:
      "Le testing isole un seul critère à la fois en gardant tout le reste identique, ce qui en fait une preuve statistique difficile à contester sur le principe, même si le débat reste vif sur l'ampleur exacte de l'écart selon les métiers, les secteurs et les méthodes.",
    limites:
      "Un testing mesure un écart à un instant donné, sur un échantillon d'offres et de métiers donné : il ne dit rien de ce qui se passe après l'entretien, ni des discriminations qui ne passent jamais par une candidature écrite comparable.",
  },
  {
    id: 'indice-discrimination-percue',
    t: 'Part de la population déclarant avoir vécu une discrimination',
    source: 'Défenseur des droits / OIT, baromètre de la perception des discriminations',
    valeur: "Une part significative de la population déclare avoir personnellement vécu au moins une situation de discrimination au cours des cinq dernières années, la proportion étant nettement plus élevée dans certains groupes minoritaires",
    d: "La mesure déclarative de la discrimination, obtenue en demandant directement aux personnes si elles estiment en avoir été victimes — complémentaire du testing, qui mesure un écart de traitement sans jamais interroger qui que ce soit.",
    detail:
      "L'écart entre discrimination déclarée et discrimination mesurée par testing va dans les deux sens : certaines personnes ne perçoivent pas comme discriminatoire un traitement qui l'est statistiquement, d'autres attribuent à la discrimination des refus qui tiennent à d'autres causes.",
    limites:
      "Une mesure déclarative dépend de ce que chacun reconnaît ou nomme comme une discrimination, une catégorie elle-même inégalement connue et mobilisée selon le niveau d'information et l'expérience antérieure des personnes interrogées.",
  },
];
