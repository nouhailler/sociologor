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
  {
    id: 'loi-1998-lutte-exclusions',
    t: 'Loi d’orientation relative à la lutte contre les exclusions',
    pays: 'France',
    annee: '1998',
    type: 'Loi-cadre transversale',
    d: "Une loi qui affirme pour la première fois un droit à des moyens convenables d'existence et rassemble, dans un même texte, l'accès à l'emploi, au logement, à la santé et à la culture plutôt que de traiter chaque manque séparément.",
    detail:
      "Le texte reprend explicitement le vocabulaire de l'exclusion popularisé depuis les années 1970, et cherche à en tirer une réponse elle aussi transversale : il crée ou renforce des dispositifs dans presque tous les domaines de la vie quotidienne plutôt qu'un seul guichet.",
    resultats:
      "La loi a durablement installé « exclusion » comme catégorie d'action publique en France, au prix, selon ses critiques, d'une addition de mesures plus que d'une politique unifiée.",
    limites:
      "Beaucoup de ses dispositions renvoient à des décrets d'application ou à des plans ultérieurs, ce qui a étalé leur mise en œuvre réelle sur plusieurs années après le vote de la loi.",
  },
  {
    id: 'logement-dabord',
    t: 'Logement d’abord',
    pays: 'France',
    annee: '2017–2018 (plan quinquennal)',
    type: 'Stratégie de lutte contre le sans-abrisme',
    d: "Une stratégie qui propose un logement autonome et durable dès le début de l'accompagnement d'une personne sans domicile, plutôt qu'un parcours obligé par l'hébergement d'urgence puis les étapes intermédiaires.",
    detail:
      "Le principe s'inspire de programmes nord-américains et scandinaves : offrir d'abord un logement stable, sans exiger au préalable un traitement des difficultés (addiction, santé mentale) qui l'accompagnent souvent, sur l'idée qu'un logement est plus souvent une condition de ce traitement qu'une récompense à mériter après lui.",
    resultats:
      "Les programmes pilotes affichent des taux de maintien dans le logement nettement supérieurs aux parcours classiques par étapes, avec des effets positifs mesurés sur la santé et l'usage des services d'urgence.",
    limites:
      "Le déploiement à grande échelle se heurte à l'offre de logements abordables disponibles, très inférieure aux besoins dans les zones où la demande est la plus forte.",
  },
  {
    id: 'bareme-progressif-irpp',
    t: 'Barème progressif de l’impôt sur le revenu',
    pays: 'France',
    annee: '1914 (création), barème actuel régulièrement révisé',
    type: 'Fiscalité directe progressive',
    d: "Un impôt dont le taux s'élève par tranches à mesure que le revenu augmente, pour que la charge fiscale pèse proportionnellement plus sur les hauts revenus que sur les revenus modestes.",
    detail:
      "Le principe de progressivité, contesté à sa création, reste l'outil de redistribution le plus direct dont dispose un État : il ne redistribue pas de ressources, il prélève différemment selon la position dans l'échelle des revenus.",
    resultats:
      "Son effet redistributif reste, en France, inférieur à celui des prestations sociales et des cotisations : la progressivité de l'impôt sur le revenu réduit les inégalités de revenus moins que le système de transferts sociaux dans son ensemble.",
    limites:
      "La multiplication des niches fiscales et des régimes dérogatoires réduit la progressivité effective par rapport à la progressivité affichée par le seul barème.",
  },
  {
    id: 'impot-sur-la-fortune',
    t: 'Impôt sur la fortune (ISF puis IFI)',
    pays: 'France',
    annee: '1982 (création), remplacé par l’IFI en 2018',
    type: 'Fiscalité directe sur le patrimoine',
    d: "Un impôt annuel assis sur le patrimoine des ménages les plus fortunés, resserré en 2018 au seul patrimoine immobilier sous le nom d'impôt sur la fortune immobilière.",
    detail:
      "Le passage de l'ISF, qui portait sur l'ensemble du patrimoine, à l'IFI, limité à l'immobilier, répondait à l'argument selon lequel l'ancien impôt pousserait les détenteurs de capital mobile à quitter le pays ou à sous-investir dans les entreprises.",
    resultats:
      "L'évaluation de la réforme reste disputée : les études disponibles ne s'accordent ni sur l'ampleur de l'effet sur l'investissement productif, ni sur celle de son coût en recettes fiscales perdues.",
    limites:
      "Un impôt assis sur le seul patrimoine immobilier laisse hors de son assiette les patrimoines financiers, pourtant les plus concentrés au sommet de la distribution.",
  },
  {
    id: 'assurance-chomage-are',
    t: 'Assurance chômage (allocation de retour à l’emploi)',
    pays: 'France',
    annee: '1958 (création du régime), règles régulièrement renégociées',
    type: 'Assurance sociale financée par cotisations, gérée paritairement',
    d: "Un revenu de remplacement versé aux personnes ayant perdu un emploi salarié, financé par les cotisations des employeurs et des salariés plutôt que par l'impôt, et dont le niveau dépend des salaires antérieurs.",
    detail:
      "Le régime distingue explicitement l'assurance chômage, contributive et réservée à ceux qui ont cotisé, des minima sociaux comme le RSA, non contributifs : deux logiques de protection qui coexistent pour des publics en partie différents.",
    resultats:
      "Le régime protège efficacement les personnes ayant eu un emploi stable avant leur perte d'emploi, mais laisse à découvert une partie des travailleurs précaires qui n'ont pas cotisé assez longtemps pour ouvrir des droits.",
    limites:
      "Les règles d'indemnisation font l'objet de renégociations fréquentes entre partenaires sociaux et gouvernement, ce qui rend le niveau de protection moins stable dans le temps que celui d'autres prestations sociales.",
  },
  {
    id: 'france-travail',
    t: 'France Travail (ex-Pôle emploi)',
    pays: 'France',
    annee: '2008 (création de Pôle emploi), 2024 (renommage et élargissement des missions)',
    type: 'Service public de l’emploi',
    d: "L'opérateur public chargé d'indemniser les chômeurs, de les accompagner dans leur recherche et de mettre en relation offres et demandes d'emploi, né de la fusion de l'ANPE et des Assedic.",
    detail:
      "La réforme de 2024 étend l'inscription automatique à l'ensemble des demandeurs d'un revenu de solidarité, dans l'idée de rapprocher accompagnement social et retour à l'emploi, longtemps traités par des circuits séparés.",
    resultats:
      "La fusion de 2008 a simplifié le point d'entrée unique pour les demandeurs d'emploi, au prix, selon les évaluations, d'un temps de suivi individuel resté contraint par le nombre de dossiers suivis par chaque conseiller.",
    limites:
      "L'efficacité de l'accompagnement reste très inégale selon le profil des demandeurs : les publics les plus éloignés de l'emploi bénéficient rarement du suivi le plus intensif, pourtant celui dont ils auraient le plus besoin.",
  },
  {
    id: 'defenseur-des-droits',
    t: 'Défenseur des droits',
    pays: 'France',
    annee: '2011 (fusion de la HALDE et de trois autres autorités)',
    type: 'Autorité administrative indépendante',
    d: "Une institution indépendante que toute personne peut saisir gratuitement en cas de discrimination, chargée d'instruire les réclamations, de proposer une médiation et de porter des recommandations devant les tribunaux.",
    detail:
      "L'institution reprend et élargit les missions de la HALDE, créée en 2004 pour la seule lutte contre les discriminations, en les regroupant avec la défense des droits de l'enfant, la déontologie de la sécurité et les relations avec les administrations.",
    resultats:
      "Le nombre de réclamations reçues chaque année dépasse largement le nombre de discriminations réellement vécues, signe d'un non-recours massif documenté par ailleurs par les enquêtes de perception.",
    limites:
      "L'institution ne dispose d'aucun pouvoir de sanction direct : elle instruit, recommande et peut saisir la justice, mais ne peut contraindre elle-même un employeur ou un bailleur reconnu responsable d'une discrimination.",
  },
  {
    id: 'loi-lutte-discriminations-2001',
    t: 'Lois de lutte contre les discriminations (2001 et extensions)',
    pays: 'France',
    annee: '2001 (loi fondatrice), critères étendus par lois successives jusqu\'en 2016',
    type: 'Cadre législatif',
    d: "Le socle législatif qui définit juridiquement la discrimination en droit français, aménage la charge de la preuve en faveur du plaignant, et énumère les critères prohibés — au nombre de vingt-cinq depuis les dernières extensions.",
    detail:
      "La loi de 2001 transpose des directives européennes et introduit un aménagement de la preuve : le plaignant doit seulement présenter des éléments laissant supposer une discrimination, à charge ensuite pour la partie mise en cause de prouver que sa décision reposait sur des éléments objectifs étrangers à toute discrimination.",
    resultats:
      "L'aménagement de la preuve a facilité l'instruction des dossiers, mais le nombre de condamnations pénales pour discrimination reste très inférieur au nombre de situations mesurées par les enquêtes et le testing.",
    limites:
      "La loi interdit par principe la constitution de statistiques ethniques, ce qui prive la mesure française d'un outil que d'autres pays utilisent pour objectiver l'ampleur des discriminations fondées sur l'origine.",
  },
  {
    id: 'loi-sru-2000',
    t: 'Loi relative à la solidarité et au renouvellement urbains (SRU)',
    pays: 'France',
    annee: '2000',
    type: 'Loi imposant des quotas de logement social',
    d: "Une loi qui impose aux communes urbaines de compter, à terme, un quota minimal de logements sociaux dans leur parc total, sous peine de pénalités financières croissantes en cas de non-respect.",
    detail:
      "L'objectif affiché est double : accroître l'offre de logement social là où elle manque, et éviter la concentration de la pauvreté dans un petit nombre de communes qui en construiraient seules l'essentiel.",
    resultats:
      "De nombreuses communes ont rattrapé une partie de leur retard, mais un nombre significatif préfère encore payer les pénalités financières plutôt que de construire le quota exigé.",
    limites:
      "La loi impose un quota global sans garantir la répartition fine des logements construits au sein même d'une commune, ce qui peut laisser se reconstituer une ségrégation à une échelle plus locale.",
  },
  {
    id: 'loi-dalo-2007',
    t: 'Droit au logement opposable (DALO)',
    pays: 'France',
    annee: '2007',
    type: 'Droit garanti, recours devant une commission puis la justice administrative',
    d: "Une loi qui fait du logement un droit que les personnes prioritaires (sans domicile, mal logées, en attente excessive) peuvent faire valoir devant une commission de médiation, puis devant un tribunal si l'État ne les reloge pas dans les délais.",
    detail:
      "La loi renverse la logique habituelle de l'aide sociale : elle ne se contente pas de proposer un dispositif, elle ouvre un droit dont le non-respect par l'État peut être sanctionné financièrement par la justice administrative.",
    resultats:
      "Le nombre de ménages reconnus prioritaires dépasse largement le nombre de relogements effectifs, l'État étant régulièrement condamné à indemniser des ménages non relogés dans les délais légaux.",
    limites:
      "Le droit reconnu se heurte à l'insuffisance de l'offre de logements sociaux disponibles : une décision de justice favorable ne crée, par elle-même, aucun logement supplémentaire.",
  },
  {
    id: 'prime-de-precarite',
    t: 'Indemnité de fin de contrat (prime de précarité)',
    pays: 'France',
    annee: '1990',
    type: 'Compensation légale obligatoire',
    d: "Une indemnité égale à un pourcentage du salaire brut total perçu, versée obligatoirement à la fin d'un CDD ou d'une mission d'intérim non poursuivis en contrat stable, pour compenser l'instabilité de l'emploi occupé.",
    detail:
      "Le nom même du dispositif reconnaît légalement l'existence d'un préjudice propre à la précarité du contrat, distinct du salaire dû pour le travail effectué — une rare mesure qui indemnise directement l'instabilité en tant que telle.",
    resultats:
      "La prime atténue le coût de l'instabilité sans la corriger : elle n'ouvre aucun droit supplémentaire à la continuité de l'emploi, ni à la protection sociale attachée à un contrat stable.",
    limites:
      "Plusieurs exceptions légales (contrats saisonniers, emplois d'usage dans certains secteurs) excluent une partie des situations les plus précaires du bénéfice de cette indemnité.",
  },
  {
    id: 'bonus-malus-contrats-courts',
    t: 'Bonus-malus sur la contribution chômage',
    pays: 'France',
    annee: '2019',
    type: 'Modulation des cotisations employeurs',
    d: "Un dispositif qui module la cotisation chômage payée par une entreprise selon son recours réel aux contrats courts, comparé aux entreprises de son secteur : plus une entreprise en abuse, plus elle cotise.",
    detail:
      "Le principe cherche à corriger un effet pervers du système d'assurance chômage : sans ce mécanisme, une entreprise qui alterne contrats courts et périodes de chômage indemnisé fait porter le coût de cette instabilité sur la collectivité plutôt que sur elle-même.",
    resultats:
      "Ciblé sur un nombre limité de secteurs à fort recours aux contrats courts, le dispositif a d'abord suscité une forte opposition patronale avant sa mise en œuvre progressive.",
    limites:
      "Le calcul par comparaison sectorielle peut inciter une entreprise à réduire son recours aux contrats courts sans que cela change la précarité globale du secteur, si toutes les entreprises du secteur ajustent leur comportement de façon comparable.",
  },
  {
    id: 'apa-2002',
    t: 'Allocation personnalisée d’autonomie (APA)',
    pays: 'France',
    annee: '2002',
    type: 'Prestation sociale financée par les départements, sous condition de perte d’autonomie',
    d: "Une aide versée aux personnes de 60 ans ou plus en perte d'autonomie, évaluée selon une grille nationale (AGGIR), pour financer les dépenses liées à leur maintien à domicile ou leur séjour en établissement.",
    detail:
      "L'APA remplace une prestation antérieure plus restrictive et ouvre le droit à toute personne dépendante selon la grille AGGIR, sans condition de ressources pour l'accès — seul le montant de l'aide varie ensuite selon le revenu. Financée et gérée par les départements, avec une compensation nationale partielle, elle distingue explicitement une APA à domicile et une APA en établissement.",
    resultats:
      "Le dispositif a permis une prise en charge très élargie de la dépendance par rapport à la situation antérieure, et a contribué à retarder l'entrée en établissement pour une partie des bénéficiaires.",
    limites:
      "Le reste à charge demeure important pour de nombreuses familles, en particulier en établissement, et le montant effectif de l'aide varie sensiblement d'un département à l'autre, malgré un cadre national commun.",
  },
  {
    id: 'loi-adaptation-societe-vieillissement-2015',
    t: 'Loi relative à l’adaptation de la société au vieillissement',
    pays: 'France',
    annee: '2015',
    type: 'Loi-cadre articulant prévention, domicile et soutien aux aidants',
    d: "Un texte qui déplace la politique du grand âge vers la prévention de la perte d'autonomie et le maintien à domicile, plutôt que de la centrer sur le seul hébergement en établissement.",
    detail:
      "La loi revalorise l'APA à domicile, crée un droit au répit pour les proches aidants, encourage le développement de formes de logement intermédiaires entre le domicile ordinaire et l'établissement médicalisé, et pose un cadre pour la prévention de la perte d'autonomie avant qu'elle ne s'installe.",
    resultats:
      "Premier texte français à structurer la politique de la vieillesse autour du maintien à domicile et de la reconnaissance des aidants plutôt que du seul hébergement, il a servi de référence à l'ensemble des réformes ultérieures du secteur.",
    limites:
      "Plusieurs volets plus coûteux, notamment le financement structurel des établissements et les ratios de personnel soignant, sont restés hors de son champ, reportés à une loi « grand âge » annoncée à plusieurs reprises depuis mais jamais adoptée.",
  },
  {
    id: 'reforme-retraites-2023',
    t: 'Réforme des retraites de 2023',
    pays: 'France',
    annee: '2023',
    type: 'Relèvement de l’âge légal de départ et accélération de la durée de cotisation',
    d: "Un relèvement progressif de l'âge légal de départ à la retraite, de 62 à 64 ans, combiné à une accélération du calendrier d'allongement de la durée de cotisation déjà engagé par une réforme antérieure.",
    detail:
      "Le texte vise à rééquilibrer financièrement à moyen terme un système de retraite par répartition, dont le rapport entre cotisants actifs et retraités continue de se dégrader avec le vieillissement démographique. Il a été adopté dans un contexte parlementaire contesté et a donné lieu à l'un des mouvements sociaux les plus prolongés des dernières décennies en France.",
    resultats:
      "L'effet sur l'équilibre financier du système est présenté comme substantiel par ses défenseurs, mais reste débattu selon les hypothèses économiques et démographiques retenues pour le mesurer.",
    limites:
      "La réforme est critiquée pour son impact jugé disproportionné sur les carrières longues commencées tôt, sur les métiers pénibles à l'espérance de vie plus courte, et sur les femmes aux carrières interrompues par des périodes non ou peu cotisées.",
  },
  {
    id: 'regroupement-familial-cadre-legal',
    t: 'Regroupement familial',
    pays: 'France',
    annee: '1976',
    type: 'Droit reconnu par décret puis confirmé comme principe fondamental par le Conseil d’État',
    d: "Le droit, pour une personne étrangère installée régulièrement, de faire venir son conjoint et ses enfants mineurs, sous conditions de ressources et de logement.",
    detail:
      "Institué par décret en 1976, le regroupement familial est confirmé comme un principe à valeur constitutionnelle par le Conseil d'État en 1978, après une tentative de suspension temporaire du gouvernement de l'époque : le droit de mener une vie familiale normale l'emporte sur la seule maîtrise des flux migratoires.",
    resultats:
      "Le dispositif est devenu l'une des principales voies légales d'entrée sur le territoire, transformant durablement la composition de l'immigration, d'abord majoritairement masculine et de travail, vers une immigration plus familiale et plus féminine.",
    limites:
      "Les conditions de ressources et de logement exigées, régulièrement durcies, excluent de fait une partie des personnes qui rempliraient les conditions de résidence mais pas les conditions matérielles, prolongeant d'autant la séparation des familles.",
  },
  {
    id: 'contrat-integration-republicaine-2016',
    t: 'Contrat d’intégration républicaine (CIR)',
    pays: 'France',
    annee: '2016',
    type: 'Parcours d’accueil obligatoire pour les primo-arrivants en séjour régulier',
    d: "Un parcours obligatoire de formation linguistique et civique que doit suivre toute personne étrangère admise pour la première fois au séjour durable en France, comme condition du renouvellement de son titre de séjour.",
    detail:
      "Le CIR remplace le contrat d'accueil et d'intégration de 2006, avec des exigences linguistiques renforcées et une formation civique sur les institutions et les valeurs de la République, sanctionnées par une évaluation qui conditionne la suite du parcours administratif.",
    resultats:
      "Le dispositif a formalisé et généralisé un parcours d'intégration jusque-là plus disparate, en le rendant obligatoire plutôt que volontaire pour l'ensemble des nouveaux arrivants en séjour durable.",
    limites:
      "Le niveau de langue exigé, régulièrement relevé, est jugé par plusieurs études trop ambitieux pour être atteint dans le volume d'heures de formation effectivement proposé, en particulier pour les personnes les moins scolarisées dans leur pays d'origine.",
  },
  {
    id: 'loi-immigration-2024',
    t: 'Loi pour contrôler l’immigration, améliorer l’intégration',
    pays: 'France',
    annee: '2024',
    type: 'Réforme du droit des étrangers et de l’asile',
    d: "Une loi qui durcit plusieurs conditions d'entrée, de séjour et d'éloignement, tout en créant une voie de régularisation facilitée pour certains métiers en tension.",
    detail:
      "Le texte, très débattu lors de son adoption, combine des dispositions présentées comme relevant à la fois du contrôle des flux migratoires (conditions de séjour, éloignement facilité) et de l'intégration (nouvelles obligations linguistiques), avant qu'une partie de ses articles ne soit censurée par le Conseil constitutionnel pour défaut de lien avec le texte initial.",
    resultats:
      "La censure partielle du Conseil constitutionnel a réduit la portée effective du texte par rapport à la version votée par le Parlement, tout en laissant subsister l'essentiel des dispositions relatives au séjour et à l'éloignement.",
    limites:
      "L'épisode de la censure constitutionnelle a lui-même relancé le débat sur la méthode législative employée, autant que sur le contenu des mesures adoptées.",
  },
  {
    id: 'siei-2011',
    t: 'Système interministériel d’échange d’informations (SIEI)',
    pays: 'France',
    annee: '2011',
    type: 'Dispositif de repérage administratif des décrocheurs',
    d: "Un système qui croise les fichiers scolaires pour identifier nommément, plusieurs fois par an, les jeunes qui ont quitté le système scolaire sans diplôme ni inscription en formation.",
    detail:
      "Avant sa création, aucun dispositif ne permettait de savoir, de façon fiable et à l'échelle nationale, qui avait décroché : le repérage reposait sur des remontées locales incomplètes. Le SIEI transmet ensuite les listes de jeunes repérés aux missions locales et aux établissements scolaires pour une prise de contact.",
    resultats:
      "Le dispositif a permis un repérage systématique là où il restait auparavant largement approximatif, condition préalable à toute politique de raccrochage ciblée.",
    limites:
      "Le repérage ne garantit pas la prise de contact effective avec chaque jeune identifié, ni son adhésion à une proposition d'accompagnement une fois contacté.",
  },
  {
    id: 'ecole-de-la-deuxieme-chance-1997',
    t: 'École de la deuxième chance',
    pays: 'France',
    annee: '1997',
    type: 'Dispositif de raccrochage hors cursus scolaire classique',
    d: "Un parcours de remobilisation et de formation, hors du cadre scolaire ordinaire, destiné aux jeunes de 16 à 25 ans sortis du système sans diplôme ni qualification.",
    detail:
      "Le premier site pilote ouvre à Marseille en 1997, dans la lignée d'une proposition du Livre blanc européen sur l'éducation de 1995 ; le réseau s'est depuis étendu à plusieurs dizaines de sites en France, combinant remise à niveau, immersion en entreprise et accompagnement individualisé, sans reproduire le cadre scolaire que les jeunes concernés ont souvent rejeté.",
    resultats:
      "Une majorité des jeunes accueillis accèdent, à l'issue du parcours, à un emploi ou à une formation qualifiante, dans un cadre pédagogique explicitement différent de celui qui n'avait pas fonctionné pour eux.",
    limites:
      "La capacité d'accueil reste limitée au regard du nombre total de jeunes sortis sans qualification chaque année, et l'admission suppose déjà une démarche volontaire que tous les décrocheurs n'engagent pas.",
  },
  {
    id: 'obligation-formation-18-ans-2019',
    t: 'Obligation de formation jusqu’à 18 ans',
    pays: 'France',
    annee: '2019',
    type: 'Extension de l’obligation scolaire par la loi pour une école de la confiance',
    d: "L'obligation, non plus seulement de scolarisation jusqu'à 16 ans mais de formation jusqu'à 18 ans, sous une forme scolaire, en apprentissage, en service civique ou en accompagnement vers l'emploi.",
    detail:
      "Le texte élargit le filet de sécurité au-delà de la seule fin de la scolarité obligatoire, en imposant aux missions locales de proposer une solution à tout jeune de 16 à 18 ans qui ne serait ni scolarisé, ni en formation, ni en emploi.",
    resultats:
      "Le dispositif a permis d'identifier et de recontacter des jeunes qui, avant 2019, sortaient du radar administratif dès leurs 16 ans sans qu'aucune obligation ne s'applique plus à leur situation.",
    limites:
      "L'obligation repose sur la capacité effective des missions locales à proposer une solution concrète à chaque jeune signalé, une capacité inégale selon les territoires et les moyens qui leur sont alloués.",
  },
];
