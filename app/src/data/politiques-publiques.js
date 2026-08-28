/**
 * Politiques publiques citées par les fiches problématique — un dispositif
 * réel, daté, avec ses résultats et ses limites documentés, à distinguer des
 * débats (texte libre sur la fiche problématique) qui portent sur des
 * orientations plutôt que sur des dispositifs existants.
 */
export const POLITIQUES_PUBLIQUES = [
  {
    id: 'rsa',
    t: 'Revenu de solidarité active (RSA)',
    pays: 'France',
    annee: '2009',
    type: 'Minimum social sous condition, avec incitation au retour à l’emploi',
    d: "Un revenu minimum garanti aux personnes sans ressources ou à faibles ressources, qui remplace le RMI en ajoutant un mécanisme censé rendre la reprise d'un emploi toujours financièrement avantageuse.",
    detail:
      "Le RSA fusionne un ancien minimum d'assistance (le RMI) et un dispositif d'incitation au travail, pour répondre au reproche fait au RMI de créer une trappe à inactivité : sous l'ancien système, reprendre un emploi à temps partiel pouvait faire perdre plus en aides que ce que le salaire rapportait.",
    resultats:
      "Le non-recours reste la principale difficulté observée : une part importante des personnes éligibles ne demande jamais la prestation, par méconnaissance du droit, complexité des démarches ou crainte du stigmate attaché à l'aide sociale.",
    limites:
      "Le montant du RSA reste très inférieur au seuil de pauvreté : le dispositif protège d'un dénuement complet, il ne fait pas sortir de la pauvreté monétaire à lui seul.",
  },
  {
    id: 'prime-activite',
    t: "Prime d'activité",
    pays: 'France',
    annee: '2016',
    type: 'Complément de revenu pour travailleurs modestes',
    d: "Un complément versé aux personnes en emploi dont les revenus restent modestes, pour que l'activité professionnelle se traduise toujours par un gain net par rapport à l'inactivité.",
    detail:
      "Elle remplace le RSA activité et la prime pour l'emploi, deux dispositifs jugés trop peu utilisés ou trop dilués, en ciblant plus directement les travailleurs proches du SMIC.",
    resultats:
      "Le taux de recours s'est nettement amélioré par rapport aux dispositifs qu'elle remplace, notamment grâce à une demande simplifiée en ligne.",
    limites:
      "Le dispositif ne concerne que les personnes déjà en emploi : il ne répond pas à la situation de qui en est le plus éloigné, et laisse ouvert le débat sur l'articulation entre assistance et activation.",
  },
  {
    id: 'strategie-nationale-pauvrete-2018',
    t: 'Stratégie nationale de prévention et de lutte contre la pauvreté',
    pays: 'France',
    annee: '2018',
    type: 'Plan gouvernemental pluriannuel',
    d: "Un plan qui affiche une priorité donnée à la prévention — petite enfance, sortie de l'aide sociale à l'enfance, formation — plutôt qu'à la seule compensation monétaire de la pauvreté déjà installée.",
    detail:
      "Le texte insiste sur la lutte contre la pauvreté des enfants et sur l'articulation entre les dispositifs existants, jugés trop cloisonnés entre eux pour accompagner un même parcours.",
    resultats:
      "Plusieurs mesures — petits déjeuners gratuits à l'école, tarification sociale des cantines — ont été mises en œuvre localement avec des résultats inégaux selon les collectivités.",
    limites:
      "Le financement annoncé reste modeste rapporté à l'ampleur du phénomène, et le projet de revenu universel d'activité censé simplifier les minima sociaux, annoncé dans la même stratégie, n'a pas abouti.",
  },
  {
    id: 'aides-personnelles-au-logement',
    t: 'Aides personnelles au logement (APL et assimilées)',
    pays: 'France',
    annee: '1977 (réforme unifiant les aides existantes)',
    type: 'Allocation sous condition de ressources, versée au titre du logement',
    d: "Une aide qui réduit le reste à charge d'un loyer ou d'un remboursement de prêt, calculée selon les ressources, la composition du ménage et la zone géographique.",
    detail:
      "Le dispositif touche une part importante des ménages les plus modestes, et compte parmi les transferts sociaux qui réduisent le plus mécaniquement le taux de pauvreté mesuré, puisqu'il allège une charge fixe généralement incompressible.",
    resultats:
      "Les études d'incidence indiquent qu'une partie de l'aide se répercute dans les loyers pratiqués, en particulier dans les zones où l'offre de logement est la plus tendue.",
    limites:
      "Le calcul sur les ressources d'une année passée retarde l'ajustement de l'aide en cas de changement brutal de situation, un défaut que des réformes de contemporanéisation ont cherché à corriger.",
  },
];
