/**
 * Méthodes sociologiques : comment les sociologues savent ce qu'ils savent,
 * distinct de ce qu'ils pensent (`concepts.js`, `fondamentaux.js`…). Une
 * entrée n'est jamais rattachée à un auteur unique — elle cite les auteurs du
 * corpus qui l'illustrent (`auteurs`, cliquables) et les figures qui n'en ont
 * pas (`inspirateurs`, texte libre au format « Nom — apport », comme
 * `domains.js`/`courants.js`).
 *
 * Schéma fixe en huit rubriques, sur le gabarit demandé : `objectif` joue le
 * rôle de `d` ailleurs (carte de liste, recherche, bandeau « En une phrase »)
 * ; `quand`, `donnees` et `exempleCelebre` sont des paragraphes ; `avantages`
 * et `limites` sont des listes à puces.
 */

/** Catégories d'affichage, dans l'ordre de la liste. */
export const CATEGORIES_METHODES = [
  {
    id: 'observer-le-terrain',
    t: 'Observer le terrain',
    d: "Regarder ce qui se passe, sans le déformer par une question.",
  },
  {
    id: 'sentretenir',
    t: "S'entretenir",
    d: "Faire raconter, plus ou moins librement, une expérience ou un point de vue.",
  },
  {
    id: 'recueillir-recits-et-reponses',
    t: 'Recueillir des récits et des réponses',
    d: "Recueillir une parole ou une réponse écrite, individuelle ou en série.",
  },
  {
    id: 'enqueter-a-grande-echelle',
    t: 'Enquêter à grande échelle',
    d: "Interroger un grand nombre de personnes pour généraliser un résultat.",
  },
  {
    id: 'analyser-des-donnees-chiffrees',
    t: 'Analyser des données chiffrées',
    d: "Traiter des chiffres pour en tirer des régularités et des comparaisons.",
  },
  {
    id: 'simmerger-dans-un-milieu',
    t: "S'immerger dans un milieu",
    d: "Vivre ou provoquer une situation pour en comprendre le fonctionnement.",
  },
  {
    id: 'analyser-textes-et-echanges',
    t: 'Analyser des textes et des échanges',
    d: "Décortiquer des mots, des discours ou des liens plutôt que des chiffres.",
  },
  {
    id: 'exploiter-des-sources-existantes',
    t: 'Exploiter des sources existantes',
    d: "Repartir de ce qui a déjà été écrit, archivé ou mesuré par d'autres.",
  },
  {
    id: 'combiner-les-approches',
    t: 'Combiner les approches',
    d: "Croiser plusieurs méthodes plutôt que de s'en tenir à une seule.",
  },
];

export const METHODES = [
  /* — Observer le terrain — */
  {
    id: 'observation-participante',
    t: 'Observation participante',
    categorie: 'observer-le-terrain',
    objectif:
      "S'immerger dans un milieu pour en saisir le fonctionnement de l'intérieur, en y prenant soi-même un rôle.",
    quand:
      "Quand le chercheur veut comprendre des pratiques que les acteurs eux-mêmes ne sauraient pas forcément verbaliser en entretien — des routines, des complicités, des règles tacites — et qu'un accès prolongé au terrain est possible.",
    donnees:
      "Des notes de terrain rédigées au fil de l'immersion, souvent complétées par des documents recueillis sur place et des entretiens informels.",
    avantages: [
      "Accède à des pratiques et des non-dits qu'un entretien seul ne révèle pas.",
      "Permet de confronter ce que les acteurs disent à ce qu'ils font réellement.",
    ],
    limites: [
      "Le chercheur transforme un peu le terrain par sa seule présence.",
      "Une immersion longue coûte du temps et expose à perdre la distance nécessaire à l'analyse.",
    ],
    exempleCelebre:
      "Howard Becker a passé des mois auprès de musiciens de jazz pour écrire Outsiders (1963), en partageant leur vie nocturne plutôt qu'en les interrogeant de l'extérieur.",
    auteurs: ['becker', 'thomas'],
    inspirateurs: [
      "Bronisław Malinowski — les Argonautes du Pacifique occidental (1922), l'acte fondateur de l'enquête de terrain prolongée",
      "William Foote Whyte — Street Corner Society (1943), une immersion de plusieurs années dans un quartier italo-américain de Boston",
    ],
  },
  {
    id: 'observation-directe',
    t: 'Observation directe',
    categorie: 'observer-le-terrain',
    objectif:
      "Observer des comportements dans leur cadre naturel, sans intervenir ni s'intégrer au groupe observé.",
    quand:
      "Quand on veut décrire précisément des conduites publiques ou des interactions visibles — dans un lieu public, une salle d'attente, un lieu de travail — sans avoir besoin ni la possibilité de s'y intégrer durablement.",
    donnees:
      "Des grilles d'observation, des comptages de fréquences, des descriptions chronométrées de séquences de comportement.",
    avantages: [
      "Ne demande pas d'accès prolongé ni d'intégration au groupe.",
      "Limite l'effet du chercheur sur les conduites observées, si l'observation reste discrète.",
    ],
    limites: [
      "Reste extérieure aux significations que les acteurs donnent à leurs gestes.",
      "Ne capte que ce qui est visible en public, jamais ce qui se dit ou se pense en privé.",
    ],
    exempleCelebre:
      "Erving Goffman a bâti Comportements en public (1971) sur l'observation minutieuse des rituels d'inattention et de civilité entre inconnus dans la rue.",
    auteurs: ['goffman'],
    inspirateurs: [],
  },
  {
    id: 'observation-non-participante',
    t: 'Observation non participante',
    categorie: 'observer-le-terrain',
    objectif:
      "Observer un groupe ou une situation en restant identifié comme observateur extérieur, sans jouer aucun rôle dans l'activité observée.",
    quand:
      "Quand on veut suivre le déroulement d'une réunion, d'une classe ou d'un procès sans y prendre part, en général avec l'accord explicite des personnes observées.",
    donnees:
      "Des comptes rendus détaillés de séances, parfois horodatés, assortis de schémas de placement ou de tours de parole.",
    avantages: [
      "Garde une position claire, connue de tous, qui limite les ambiguïtés éthiques de l'immersion.",
      "Facilite la prise de notes systématique puisque le chercheur n'est pas absorbé par un rôle à jouer.",
    ],
    limites: [
      "La présence déclarée d'un observateur modifie souvent le comportement du groupe.",
      "L'accès reste limité à ce que le groupe accepte de montrer devant un tiers.",
    ],
    exempleCelebre:
      "Michel Crozier a observé le fonctionnement quotidien d'agences administratives sans s'y intégrer pour écrire Le Phénomène bureaucratique (1963).",
    auteurs: ['crozier'],
    inspirateurs: [],
  },

  /* — S'entretenir — */
  {
    id: 'entretien-semi-directif',
    t: 'Entretien semi-directif',
    categorie: 'sentretenir',
    objectif:
      "Recueillir la parole d'une personne à partir d'un guide de thèmes, en laissant l'ordre et la formulation s'ajuster au fil de l'échange.",
    quand:
      "Quand on veut comparer les réponses de plusieurs personnes sur les mêmes thèmes tout en laissant chacune développer ce qui lui importe, sans enfermer l'échange dans des questions fermées.",
    donnees:
      "Des enregistrements retranscrits intégralement, découpés ensuite en verbatims classés par thème.",
    avantages: [
      "Combine la comparabilité d'un guide commun et la liberté de parole d'un entretien ouvert.",
      "Permet de relancer sur un point imprévu sans perdre le fil des thèmes prévus.",
    ],
    limites: [
      "La retranscription et le codage thématique prennent beaucoup de temps.",
      "La présence de l'enquêteur influence toujours, même discrètement, ce que la personne choisit de dire.",
    ],
    exempleCelebre:
      "Pierre Bourdieu et son équipe ont mené des dizaines d'entretiens semi-directifs pour La Misère du monde (1993), en publiant de larges extraits de la parole recueillie.",
    auteurs: ['bourdieu'],
    inspirateurs: [],
  },
  {
    id: 'entretien-directif',
    t: 'Entretien directif',
    categorie: 'sentretenir',
    objectif:
      "Poser à chaque personne une série de questions identiques, dans un ordre et une formulation fixés à l'avance.",
    quand:
      "Quand on veut garantir une stricte comparabilité entre répondants, en général pour un grand nombre d'entretiens administrés par plusieurs enquêteurs différents.",
    donnees:
      "Des réponses codées directement pendant l'entretien, proches d'un questionnaire administré oralement.",
    avantages: [
      "Assure une comparabilité maximale entre les personnes interrogées.",
      "Peut être administré par plusieurs enquêteurs sans que leur style personnel n'introduise de variation.",
    ],
    limites: [
      "Empêche la personne interrogée de développer un point qui ne figure pas dans la grille.",
      "Se rapproche d'un questionnaire oral, avec la même rigidité face à l'imprévu.",
    ],
    exempleCelebre:
      "Les grandes enquêtes de l'INSEE administrent des entretiens directifs standardisés à des dizaines de milliers de ménages chaque année.",
    auteurs: [],
    inspirateurs: [
      "Paul Lazarsfeld — la codification des techniques d'enquête par entretien dans la sociologie américaine des années 1940",
    ],
  },
  {
    id: 'entretien-comprehensif',
    t: 'Entretien compréhensif',
    categorie: 'sentretenir',
    objectif:
      "Faire raconter à une personne le sens qu'elle donne elle-même à son expérience, plutôt que de vérifier des hypothèses posées d'avance.",
    quand:
      "Quand l'enjeu est de restituer une logique d'acteur de l'intérieur, en laissant l'entretien évoluer librement plutôt que de suivre un plan fixé au préalable.",
    donnees:
      "De longs entretiens retranscrits presque intégralement, souvent cités en larges extraits dans le texte final.",
    avantages: [
      "Restitue la cohérence propre d'un point de vue, plutôt que de le découper en variables.",
      "S'adapte à ce que chaque personne juge important, sans grille imposée d'avance.",
    ],
    limites: [
      "La comparaison entre entretiens devient plus difficile, faute de trame commune.",
      "Demande une longue formation à l'écoute pour éviter d'orienter le récit sans s'en rendre compte.",
    ],
    exempleCelebre:
      "Jean-Claude Kaufmann a théorisé et illustré cette méthode dans L'Entretien compréhensif (1996), qui lui a donné son nom.",
    auteurs: ['weber', 'schutz'],
    inspirateurs: ["Jean-Claude Kaufmann — L'Entretien compréhensif (1996), qui a donné son nom à la méthode"],
  },
  {
    id: 'entretien-biographique',
    t: 'Entretien biographique',
    categorie: 'sentretenir',
    objectif:
      "Retracer le parcours d'une personne à travers le récit qu'elle fait elle-même de sa vie, ou d'une partie de sa vie.",
    quand:
      "Quand on veut comprendre comment une trajectoire individuelle s'articule à des transformations sociales plus larges — un métier qui disparaît, une migration, un déclassement.",
    donnees:
      "Un récit retranscrit, souvent complété de documents personnels (photos, lettres, papiers administratifs) apportés par la personne elle-même.",
    avantages: [
      "Restitue une trajectoire dans sa durée, avec ses bifurcations et ses justifications a posteriori.",
      "Donne accès à des expériences anciennes qu'aucune autre méthode ne peut observer directement.",
    ],
    limites: [
      "Le récit reconstruit le passé à la lumière du présent, ce qui n'est jamais un simple compte rendu des faits.",
      "Un seul parcours ne généralise rien sans être recoupé avec d'autres sources.",
    ],
    exempleCelebre:
      "William I. Thomas et Florian Znaniecki ont fondé Le Paysan polonais en Europe et en Amérique (1918-1920) sur l'autobiographie d'un immigré polonais, Wladek.",
    auteurs: ['thomas'],
    inspirateurs: ["Daniel Bertaux — Le Récit de vie (1997), qui systématise la méthode en sociologie française"],
  },

  /* — Recueillir des récits et des réponses — */
  {
    id: 'recit-de-vie',
    t: 'Récit de vie',
    categorie: 'recueillir-recits-et-reponses',
    objectif:
      "Recueillir le récit qu'une personne fait de son existence, pour en dégager la logique interne plutôt que pour vérifier des faits.",
    quand:
      "Quand on veut saisir comment un individu met lui-même en cohérence les événements de sa vie, ou constituer un corpus de récits comparables sur un même type de trajectoire.",
    donnees:
      "Des récits enregistrés et retranscrits, parfois recoupés entre plusieurs personnes ayant vécu des situations comparables jusqu'à saturation.",
    avantages: [
      "Fait entendre une parole au long cours, rarement recueillie par d'autres méthodes.",
      "Permet de repérer des régularités en comparant plusieurs récits d'un même type de parcours.",
    ],
    limites: [
      "Un récit de vie reste une reconstruction, jamais un enregistrement neutre du passé.",
      "Le choix des personnes qui acceptent de raconter leur vie n'est jamais représentatif d'une population entière.",
    ],
    exempleCelebre:
      "Daniel Bertaux a démontré la portée du récit de vie en reconstituant, à travers les récits de boulangers, la logique de reproduction d'un métier artisanal.",
    auteurs: ['thomas'],
    inspirateurs: ["Daniel Bertaux — Le Récit de vie (1997)"],
  },
  {
    id: 'questionnaire',
    t: 'Questionnaire',
    categorie: 'recueillir-recits-et-reponses',
    objectif:
      "Poser à un grand nombre de personnes les mêmes questions fermées ou semi-fermées, pour produire des données chiffrables.",
    quand:
      "Quand on veut mesurer la fréquence d'une opinion, d'une pratique ou d'une caractéristique dans une population, avec une taille d'échantillon suffisante pour généraliser.",
    donnees: "Des tableaux de réponses codées, exploitables statistiquement dès la collecte terminée.",
    avantages: [
      "Permet de toucher un grand nombre de répondants à coût raisonnable.",
      "Produit des données directement comparables et chiffrables.",
    ],
    limites: [
      "Les questions fermées enferment la réponse dans des catégories fixées d'avance par le chercheur.",
      "Le taux de non-réponse et la formulation des questions peuvent biaiser fortement les résultats.",
    ],
    exempleCelebre:
      "Pierre Bourdieu a fait administrer un vaste questionnaire sur les pratiques culturelles pour construire les données de La Distinction (1979).",
    auteurs: ['bourdieu'],
    inspirateurs: [],
  },
  {
    id: 'sondage',
    t: 'Sondage',
    categorie: 'recueillir-recits-et-reponses',
    objectif:
      "Interroger un échantillon réduit mais représentatif d'une population pour estimer rapidement une opinion ou une intention à l'échelle de la population entière.",
    quand:
      "Quand on a besoin d'une estimation rapide, souvent conjoncturelle — une intention de vote, une opinion sur l'actualité — plus que d'une compréhension fine des raisons données.",
    donnees:
      "Des pourcentages de réponses assortis d'une marge d'erreur statistique, calculés sur un échantillon représentatif.",
    avantages: [
      "Produit des résultats rapides et régulièrement répétables, utiles pour suivre une évolution dans le temps.",
      "S'appuie sur des méthodes d'échantillonnage éprouvées qui limitent la taille nécessaire de l'enquête.",
    ],
    limites: [
      "La représentativité dépend entièrement de la qualité de l'échantillonnage, souvent invisible pour le public.",
      "Une question posée différemment peut faire varier fortement le résultat, sans que la population n'ait changé d'avis.",
    ],
    exempleCelebre:
      "Les instituts de sondage ont bâti leur méthode sur les techniques d'échantillonnage que George Gallup a mises au point dans les années 1930 aux États-Unis.",
    auteurs: [],
    inspirateurs: [
      "George Gallup — la formalisation du sondage d'opinion par échantillon représentatif, dans les années 1930",
    ],
  },

  /* — Enquêter à grande échelle — */
  {
    id: 'enquete-quantitative',
    t: 'Enquête quantitative',
    categorie: 'enqueter-a-grande-echelle',
    objectif:
      "Mesurer, sur un grand nombre de cas, la fréquence, l'intensité ou la corrélation d'un phénomène social.",
    quand:
      "Quand la question posée appelle une réponse chiffrée et généralisable — combien, à quelle fréquence, corrélé à quoi — plutôt qu'une compréhension fine d'un petit nombre de cas.",
    donnees:
      "Des bases de données statistiques exploitables par des logiciels de traitement, souvent croisées avec des variables sociodémographiques.",
    avantages: [
      "Permet de généraliser des résultats à une population entière, avec une marge d'erreur calculable.",
      "Facilite la comparaison entre groupes, périodes ou pays sur des indicateurs identiques.",
    ],
    limites: [
      "Réduit des réalités sociales complexes à des variables mesurables, au risque d'en perdre le sens.",
      "Une corrélation statistique ne prouve jamais, à elle seule, un lien de causalité.",
    ],
    exempleCelebre:
      "Émile Durkheim a fondé l'enquête quantitative en sociologie en exploitant des statistiques administratives pour Le Suicide (1897).",
    auteurs: ['durkheim', 'boudon'],
    inspirateurs: [],
  },
  {
    id: 'enquete-qualitative',
    t: 'Enquête qualitative',
    categorie: 'enqueter-a-grande-echelle',
    objectif:
      "Comprendre en profondeur un nombre limité de cas, pour restituer des logiques, des significations ou des processus plutôt que des fréquences.",
    quand:
      "Quand la question posée porte sur le comment et le pourquoi d'un phénomène, et qu'une compréhension fine importe plus qu'une généralisation chiffrée.",
    donnees: "Des entretiens, des observations et des documents, analysés par thèmes plutôt que par calculs statistiques.",
    avantages: [
      "Restitue la complexité et les nuances d'une situation, souvent perdues par le chiffrage.",
      "S'adapte en cours de route si le terrain révèle des enjeux imprévus par le chercheur.",
    ],
    limites: [
      "Les résultats se généralisent difficilement à une population entière.",
      "L'analyse dépend davantage de l'interprétation du chercheur, ce qui expose à la critique de subjectivité.",
    ],
    exempleCelebre:
      "Howard Becker et l'école de Chicago ont bâti toute une tradition d'enquête qualitative sur la déviance, les professions et les mondes de l'art.",
    auteurs: ['becker', 'blumer'],
    inspirateurs: [],
  },

  /* — Analyser des données chiffrées — */
  {
    id: 'analyse-statistique',
    t: 'Analyse statistique',
    categorie: 'analyser-des-donnees-chiffrees',
    objectif:
      "Traiter mathématiquement des données chiffrées pour en dégager des régularités, des corrélations ou des écarts significatifs.",
    quand:
      "Une fois les données quantitatives recueillies (questionnaire, sondage, statistiques administratives), pour en tirer des résultats interprétables plutôt que de simples tableaux bruts.",
    donnees:
      "Des tableaux croisés, des coefficients de corrélation, des tests de significativité, souvent produits par un logiciel statistique.",
    avantages: [
      "Permet de distinguer un écart significatif d'une simple fluctuation du hasard.",
      "Rend les résultats vérifiables et reproductibles par d'autres chercheurs à partir des mêmes données.",
    ],
    limites: [
      "Une bonne maîtrise technique ne garantit pas une interprétation sociologiquement juste des résultats.",
      "Le choix des variables retenues oriente déjà, avant tout calcul, ce que l'analyse pourra montrer.",
    ],
    exempleCelebre:
      "Émile Durkheim a comparé des taux de suicide entre groupes religieux, régions et périodes pour établir des régularités statistiques dans Le Suicide (1897).",
    auteurs: ['durkheim'],
    inspirateurs: [],
  },
  {
    id: 'analyse-longitudinale',
    t: 'Analyse longitudinale',
    categorie: 'analyser-des-donnees-chiffrees',
    objectif:
      "Suivre les mêmes personnes ou les mêmes unités dans le temps, pour observer comment une situation évolue plutôt que la photographier à un instant donné.",
    quand:
      "Quand la question porte sur un changement, une trajectoire ou un effet à retardement, qu'une seule mesure ponctuelle ne pourrait pas capter.",
    donnees:
      "Des données répétées dans le temps sur les mêmes individus (panels, cohortes), permettant de reconstituer des trajectoires.",
    avantages: [
      "Distingue ce qui relève d'un effet d'âge, de génération ou de période — une confusion fréquente des enquêtes ponctuelles.",
      "Permet d'observer de véritables trajectoires plutôt que des situations reconstituées après coup.",
    ],
    limites: [
      "Suivre les mêmes personnes pendant des années coûte cher et expose à perdre une partie de l'échantillon en cours de route.",
      "Les résultats ne sont souvent disponibles qu'après un délai très long.",
    ],
    exempleCelebre:
      "Les grandes cohortes de naissance britanniques, suivies depuis 1946, ont permis d'étudier sur plusieurs décennies la mobilité sociale d'une même génération.",
    auteurs: ['boudon'],
    inspirateurs: [],
  },
  {
    id: 'analyse-comparative',
    t: 'Analyse comparative',
    categorie: 'analyser-des-donnees-chiffrees',
    objectif:
      "Confronter plusieurs cas — sociétés, périodes, groupes — pour isoler ce qui tient au contexte de ce qui relève d'une régularité plus générale.",
    quand:
      "Quand on veut vérifier si une explication tient au-delà d'un seul cas, en la mettant à l'épreuve d'autres contextes suffisamment proches pour être comparables.",
    donnees: "Des dossiers de cas mis en regard les uns des autres selon une même grille d'analyse, chiffrés ou non.",
    avantages: [
      "Permet de distinguer ce qui est propre à un cas de ce qui vaut plus largement.",
      "Renforce la solidité d'une explication en la confrontant à des contre-exemples potentiels.",
    ],
    limites: [
      "Deux cas ne sont jamais comparables sur tous les points à la fois, ce qui fragilise toujours un peu la comparaison.",
      "Exige une connaissance approfondie de chaque cas, ce qui limite en pratique le nombre de cas traités.",
    ],
    exempleCelebre:
      "Max Weber a comparé l'éthique protestante à d'autres grandes religions du monde pour isoler ce qui, dans le protestantisme, a favorisé l'essor du capitalisme.",
    auteurs: ['weber', 'tocqueville', 'elias'],
    inspirateurs: [],
  },

  /* — S'immerger dans un milieu — */
  {
    id: 'experimentation-sociale',
    t: 'Expérimentation sociale',
    categorie: 'simmerger-dans-un-milieu',
    objectif:
      "Provoquer une situation contrôlée, avec un groupe témoin, pour isoler l'effet d'un facteur précis sur un comportement social.",
    quand:
      "Quand on veut établir un lien de cause à effet que la seule observation du monde réel ne permettrait pas de démêler des autres facteurs en jeu.",
    donnees:
      "Des mesures comparées entre un groupe expérimental et un groupe témoin, dans des conditions aussi identiques que possible hormis le facteur testé.",
    avantages: [
      "Permet d'isoler un effet précis, ce qu'une observation en milieu naturel ne peut pas garantir.",
      "Les résultats sont réplicables par d'autres chercheurs dans des conditions comparables.",
    ],
    limites: [
      "Une situation provoquée en laboratoire ne se déroule jamais tout à fait comme en contexte réel.",
      "Pose des questions éthiques dès que l'expérience implique de tromper ou de mettre sous pression les participants.",
    ],
    exempleCelebre:
      "Stanley Milgram a mesuré, par une expérience contrôlée, jusqu'où des participants ordinaires obéissaient à un ordre d'infliger une douleur à autrui (1963).",
    auteurs: [],
    inspirateurs: [
      "Stanley Milgram — l'expérience sur la soumission à l'autorité (1963)",
      "Philip Zimbardo — l'expérience de la prison de Stanford (1971)",
    ],
  },
  {
    id: 'ethnographie',
    t: 'Ethnographie',
    categorie: 'simmerger-dans-un-milieu',
    objectif:
      "Décrire en détail, de l'intérieur, les manières de faire et de penser d'un groupe social, en général au terme d'une immersion prolongée.",
    quand:
      "Quand on veut restituer une culture de groupe dans son ensemble — ses rites, son vocabulaire, ses hiérarchies informelles — plutôt qu'isoler un seul comportement.",
    donnees:
      "Des carnets de terrain détaillés, tenus au jour le jour, souvent enrichis de photographies et de documents propres au groupe étudié.",
    avantages: [
      "Restitue la cohérence d'ensemble d'un mode de vie, plutôt qu'un comportement isolé de son contexte.",
      "Révèle des règles informelles qu'aucun document officiel ne mentionne jamais.",
    ],
    limites: [
      "La restitution passe toujours par le regard et l'écriture du chercheur, jamais neutres.",
      "Un seul terrain, même bien décrit, ne permet aucune généralisation directe à d'autres groupes.",
    ],
    exempleCelebre:
      "Bronisław Malinowski a passé plusieurs années aux îles Trobriand pour écrire Les Argonautes du Pacifique occidental (1922), fondant l'ethnographie moderne.",
    auteurs: ['becker', 'goffman'],
    inspirateurs: ["Bronisław Malinowski — Les Argonautes du Pacifique occidental (1922)"],
  },
  {
    id: 'netnographie',
    t: 'Netnographie',
    categorie: 'simmerger-dans-un-milieu',
    objectif: "Transposer les méthodes de l'ethnographie aux communautés et aux échanges qui se déroulent en ligne.",
    quand:
      "Quand le terrain étudié — un forum, un réseau social, une communauté de jeu — existe d'abord ou uniquement sur internet.",
    donnees:
      "Des captures d'échanges publics, des observations de fils de discussion, parfois complétées d'entretiens en ligne avec les membres de la communauté.",
    avantages: [
      "Donne accès à des communautés qui n'existeraient pas, ou peu, hors ligne.",
      "Laisse une trace écrite déjà disponible, sans passer par la retranscription d'un entretien oral.",
    ],
    limites: [
      "Pose des questions inédites de consentement quand les échanges observés n'ont pas été écrits pour être étudiés.",
      "L'identité des personnes en ligne reste souvent incertaine, ce qui fragilise l'interprétation.",
    ],
    exempleCelebre:
      "Robert Kozinets a formalisé la netnographie en étudiant des communautés de fans et de consommateurs actives sur les premiers forums en ligne, à la fin des années 1990.",
    auteurs: ['castells'],
    inspirateurs: ["Robert Kozinets — la formalisation de la netnographie à la fin des années 1990"],
  },

  /* — Analyser des textes et des échanges — */
  {
    id: 'analyse-de-contenu',
    t: 'Analyse de contenu',
    categorie: 'analyser-textes-et-echanges',
    objectif:
      "Classer et quantifier systématiquement le contenu d'un ensemble de documents — articles, discours, images — selon des catégories définies à l'avance.",
    quand:
      "Quand on dispose d'un grand corpus de documents et qu'on veut en dégager des tendances générales, plutôt qu'interpréter chaque texte un par un.",
    donnees:
      "Des grilles de codage appliquées systématiquement au corpus, converties ensuite en fréquences et en tableaux.",
    avantages: [
      "Permet de traiter de très grands corpus de façon systématique et reproductible.",
      "Réduit la part d'interprétation subjective en fixant les catégories avant l'analyse.",
    ],
    limites: [
      "Le découpage en catégories fixées d'avance peut appauvrir des nuances de sens.",
      "Compte des occurrences sans toujours restituer le contexte dans lequel elles apparaissent.",
    ],
    exempleCelebre:
      "Paul Lazarsfeld et Robert K. Merton ont développé l'analyse de contenu des médias de masse dans leurs études sur la propagande et la persuasion, dans les années 1940.",
    auteurs: ['merton'],
    inspirateurs: ["Paul Lazarsfeld — le développement de l'analyse de contenu des médias de masse, dans les années 1940"],
  },
  {
    id: 'analyse-de-discours',
    t: 'Analyse de discours',
    categorie: 'analyser-textes-et-echanges',
    objectif: "Étudier comment un texte ou une parole construit une vision du monde, au-delà de son seul contenu explicite.",
    quand:
      "Quand on veut comprendre comment un discours institutionnel, politique ou scientifique catégorise, légitime ou exclut, plutôt que seulement ce qu'il affirme au premier degré.",
    donnees:
      "Des corpus de textes ou de transcriptions, analysés phrase par phrase pour leurs choix de vocabulaire, leurs présupposés et leurs silences.",
    avantages: [
      "Révèle des rapports de pouvoir et des présupposés que le contenu explicite du texte ne dit jamais directement.",
      "S'applique à toute forme de discours — écrit, oral, institutionnel — avec les mêmes outils.",
    ],
    limites: [
      "L'interprétation reste fortement dépendante du cadre théorique choisi par le chercheur.",
      "Deux analystes peuvent lire des présupposés différents dans un même texte, sans critère simple pour trancher.",
    ],
    exempleCelebre:
      "Michel Foucault a construit L'Archéologie du savoir (1969) et Histoire de la folie (1961) sur l'analyse des discours qui, à chaque époque, définissent ce qui est vrai, sain ou normal.",
    auteurs: ['foucault', 'habermas'],
    inspirateurs: [],
  },
  {
    id: 'analyse-conversationnelle',
    t: 'Analyse conversationnelle',
    categorie: 'analyser-textes-et-echanges',
    objectif: "Étudier l'organisation fine d'une conversation — tours de parole, hésitations, réparations — pour en dégager les règles implicites.",
    quand:
      "Quand on veut comprendre comment l'ordre d'une interaction se construit dans le détail de l'échange lui-même, seconde par seconde.",
    donnees:
      "Des enregistrements audio ou vidéo transcrits selon une notation précise, qui conserve les pauses, les chevauchements et les hésitations.",
    avantages: [
      "Rend visibles des règles d'interaction que les participants eux-mêmes ne sauraient pas décrire.",
      "S'appuie sur des données brutes vérifiables, plutôt que sur le seul souvenir ou récit des participants.",
    ],
    limites: [
      "La transcription fine est longue et technique, ce qui limite la taille des corpus traités.",
      "Se concentre sur la mécanique de l'échange, parfois au détriment de son contenu ou de son contexte social.",
    ],
    exempleCelebre:
      "Harvey Sacks a fondé l'analyse conversationnelle dans les années 1960 en étudiant, minute par minute, des enregistrements d'appels à un centre d'écoute.",
    auteurs: ['goffman'],
    inspirateurs: [
      "Harvey Sacks — la fondation de l'analyse conversationnelle dans les années 1960, dans le prolongement de l'ethnométhodologie",
    ],
  },
  {
    id: 'analyse-de-reseaux-sociaux',
    t: 'Analyse de réseaux sociaux',
    categorie: 'analyser-textes-et-echanges',
    objectif:
      "Cartographier les liens entre individus ou organisations pour comprendre comment la position dans un réseau influence les ressources et les comportements.",
    quand:
      "Quand ce qui compte n'est pas tant les attributs d'un individu que ses relations — qui il connaît, qui le relie à qui — pour expliquer une opportunité ou une influence.",
    donnees:
      "Des graphes de relations, des matrices de liens, des indicateurs de centralité calculés pour chaque nœud du réseau.",
    avantages: [
      "Rend visibles des structures relationnelles invisibles dans une simple description individu par individu.",
      "Permet de mesurer précisément des notions autrement floues, comme la centralité ou l'intermédiation.",
    ],
    limites: [
      "Exige de délimiter clairement les frontières du réseau étudié, ce qui n'est jamais évident.",
      "Peut réduire des relations riches de sens à un simple lien binaire présent ou absent.",
    ],
    exempleCelebre:
      "Manuel Castells a analysé la structure des réseaux mondiaux d'information et de capitaux pour La Société en réseaux (1996).",
    auteurs: ['castells', 'simmel', 'bourdieu'],
    inspirateurs: [],
  },

  /* — Exploiter des sources existantes — */
  {
    id: 'analyse-secondaire-de-donnees',
    t: 'Analyse secondaire de données',
    categorie: 'exploiter-des-sources-existantes',
    objectif:
      "Réexploiter des données déjà recueillies par d'autres — enquêtes officielles, statistiques administratives, archives — pour répondre à une nouvelle question.",
    quand:
      "Quand des données pertinentes existent déjà, en quantité ou en qualité suffisante, et qu'une nouvelle collecte serait redondante ou hors de portée.",
    donnees: "Des bases de données ou des archives préexistantes, retraitées selon une nouvelle grille de lecture.",
    avantages: [
      "Évite le coût et le délai d'une nouvelle collecte de données.",
      "Permet parfois de travailler sur des séries longues, impossibles à reconstituer autrement.",
    ],
    limites: [
      "Le chercheur ne contrôle pas la façon dont les données ont été recueillies à l'origine.",
      "Les catégories utilisées lors de la collecte initiale ne correspondent pas toujours à la question posée aujourd'hui.",
    ],
    exempleCelebre:
      "Émile Durkheim a exploité des statistiques administratives de suicide collectées par les États européens, sans en organiser lui-même la collecte, pour Le Suicide (1897).",
    auteurs: ['durkheim'],
    inspirateurs: [],
  },
  {
    id: 'methode-historique',
    t: 'Méthode historique',
    categorie: 'exploiter-des-sources-existantes',
    objectif:
      "Reconstituer, à partir d'archives et de documents d'époque, l'évolution d'une institution, d'une pratique ou d'un rapport social dans la durée.",
    quand:
      "Quand la question posée porte sur une origine, une transformation ou une longue durée qu'aucune enquête sur le présent ne peut à elle seule éclairer.",
    donnees: "Des archives, des correspondances, des documents administratifs ou juridiques d'époque, croisés et datés.",
    avantages: [
      "Donne une profondeur temporelle qu'aucune enquête sur le présent ne peut atteindre.",
      "Permet de vérifier si un phénomène présenté comme nouveau a en réalité des précédents.",
    ],
    limites: [
      "Dépend entièrement de ce que les archives ont conservé, souvent de façon inégale selon les groupes sociaux.",
      "Les catégories d'une autre époque ne se traduisent jamais parfaitement dans le vocabulaire d'aujourd'hui.",
    ],
    exempleCelebre:
      "Norbert Elias a retracé sur plusieurs siècles l'évolution des manières de table et des seuils de pudeur pour La Civilisation des mœurs (1939).",
    auteurs: ['elias', 'tocqueville', 'marx'],
    inspirateurs: [],
  },
  {
    id: 'prosopographie',
    t: 'Prosopographie',
    categorie: 'exploiter-des-sources-existantes',
    objectif:
      "Établir la biographie collective d'un groupe défini, en croisant des données individuelles standardisées sur chacun de ses membres.",
    quand:
      "Quand on veut caractériser un groupe social par ses trajectoires communes — une génération de hauts fonctionnaires, une profession, une élite locale — plutôt qu'un seul parcours exemplaire.",
    donnees:
      "Des fiches biographiques standardisées (origine, formation, carrière, alliances) pour chaque membre du groupe, agrégées ensuite en tableau.",
    avantages: [
      "Révèle des régularités de trajectoire invisibles dans une seule biographie prise isolément.",
      "S'appuie sur des sources souvent déjà disponibles — annuaires, registres, actes officiels.",
    ],
    limites: [
      "Exige de délimiter précisément le groupe étudié, ce qui suppose déjà de savoir ce qu'on cherche à démontrer.",
      "Les données disponibles sont rarement aussi complètes pour chaque membre du groupe.",
    ],
    exempleCelebre:
      "L'historien Lawrence Stone a théorisé la prosopographie en reconstituant la biographie collective de l'aristocratie anglaise du XVIᵉ au XVIIIᵉ siècle.",
    auteurs: [],
    inspirateurs: ["Lawrence Stone — la théorisation de la prosopographie comme biographie collective d'un groupe"],
  },

  /* — Combiner les approches — */
  {
    id: 'etude-de-cas',
    t: 'Étude de cas',
    categorie: 'combiner-les-approches',
    objectif:
      "Analyser en profondeur un cas unique — une organisation, un événement, un groupe — pour en tirer des enseignements qui dépassent ce seul cas.",
    quand:
      "Quand le cas choisi est particulièrement révélateur d'un mécanisme plus général, ou quand un phénomène rare ne permet pas de constituer un échantillon plus large.",
    donnees: "Un dossier complet mêlant souvent plusieurs méthodes — entretiens, documents, observation — toutes centrées sur le même cas.",
    avantages: [
      "Permet une compréhension fine et détaillée qu'une comparaison entre nombreux cas ne pourrait pas atteindre.",
      "Convient aux phénomènes rares ou uniques, pour lesquels aucun échantillon large n'existe.",
    ],
    limites: [
      "Un seul cas ne permet jamais de généraliser directement à d'autres situations.",
      "Le choix du cas étudié oriente déjà fortement ce que l'analyse pourra montrer.",
    ],
    exempleCelebre:
      "Michel Crozier et Erhard Friedberg ont bâti leur théorie de l'analyse stratégique sur l'étude approfondie du cas d'une agence comptable dans Le Phénomène bureaucratique (1963) puis L'Acteur et le système (1977).",
    auteurs: ['crozier', 'friedberg'],
    inspirateurs: [],
  },
  {
    id: 'methodes-mixtes',
    t: 'Méthodes mixtes',
    categorie: 'combiner-les-approches',
    objectif:
      "Combiner données quantitatives et qualitatives au sein d'une même enquête, pour que chacune compense les limites de l'autre.",
    quand:
      "Quand une seule méthode ne suffit pas à répondre à la question posée — par exemple mesurer l'ampleur d'un phénomène tout en comprenant les logiques qui le produisent.",
    donnees:
      "Des données de nature différente (statistiques et entretiens, par exemple), analysées séparément puis mises en regard l'une de l'autre.",
    avantages: [
      "Permet de vérifier si des résultats statistiques et les logiques d'acteurs recueillies en entretien se confirment mutuellement.",
      "Compense les limites propres à chaque méthode prise isolément.",
    ],
    limites: [
      "Demande une double compétence, statistique et qualitative, rarement maîtrisée au même niveau par un seul chercheur.",
      "Allonge considérablement le temps et le coût de l'enquête.",
    ],
    exempleCelebre:
      "Pierre Bourdieu a combiné un vaste questionnaire statistique et des entretiens qualitatifs pour construire à la fois La Distinction (1979) et La Misère du monde (1993).",
    auteurs: ['bourdieu', 'boudon'],
    inspirateurs: [],
  },
];
