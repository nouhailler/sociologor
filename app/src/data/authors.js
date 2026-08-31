// Données des fiches — extraites telles quelles du prototype Claude Design
// (sociologor-pwa-prototype/project/Sociologor.dc.html). Ne pas retaper à la main :
// toute correction de contenu se fait ici, puis se répercute dans la doc (app/docs/).

export const DOMAINS = [
  { id: 'classes', t: 'Classes sociales', d: "Comment une société se hiérarchise, et pourquoi la position héritée pèse encore si lourd.", a: ['marx', 'bourdieu', 'weber'] },
  { id: 'education', t: 'Éducation', d: "L'école promet l'égalité des chances et distribue pourtant des destins très prévisibles.", a: ['bourdieu', 'durkheim', 'boudon'] },
  { id: 'travail', t: 'Travail', d: "Diviser les tâches lie les individus autant que cela les épuise.", a: ['durkheim', 'marx', 'becker', 'castel'] },
  { id: 'religion', t: 'Religion', d: "Le sacré comme ciment collectif — et comme moteur inattendu du capitalisme.", a: ['durkheim', 'weber'] },
  { id: 'deviance', t: 'Déviance', d: "Personne n'est déviant tout seul : il faut un public, une règle et un étiquetage.", a: ['becker', 'goffman', 'merton'] },
  { id: 'interactions', t: 'Interactions', d: "La vie sociale se joue en face à face, dans des micro-scènes très codées.", a: ['goffman', 'simmel'] },
  { id: 'culture', t: 'Culture', d: "Les goûts ne sont jamais purement personnels : ils classent celui qui les affiche.", a: ['bourdieu', 'simmel'] },
  { id: 'organisations', t: 'Organisations', d: "Règles, hiérarchies et bureaucratie : la machine froide de la modernité.", a: ['weber', 'merton', 'parsons'] },
  { id: 'urbaine', t: 'Urbaine', d: "La ville fabrique une manière d'être ensemble : dense, anonyme, nerveuse.", a: ['simmel', 'becker'] },
  { id: 'corps', t: 'Corps', d: "Se tenir, se retenir, se laver : l'histoire longue de la contrainte de soi.", a: ['elias', 'goffman', 'bourdieu', 'boltanski'] },
  { id: 'politique', t: 'Politique', d: "Qui a le droit de commander, et au nom de quoi obéit-on ?", a: ['weber', 'marx', 'tocqueville'] },
  { id: 'methode', t: 'Méthode', d: "Traiter les faits sociaux comme des choses — ou comprendre le sens que les acteurs y mettent.", a: ['durkheim', 'weber', 'comte'] },
  { id: 'inegalites', t: 'Mobilité sociale', d: "Monter, descendre, rester : la circulation entre positions et ses illusions.", a: ['boudon', 'bourdieu', 'merton'] },
  { id: 'famille', t: 'Famille', d: "L'institution la plus intime est aussi la plus transmettrice.", a: ['durkheim', 'bourdieu', 'tocqueville', 'parsons'] },
];

export const AUTHORS = {
  comte: {
    id: 'comte', name: 'Auguste Comte', initials: 'AC', dates: '1798–1857', nat: 'France', periode: 'XIXᵉ siècle',
    courant: 'Positivisme',
    hook: "Il baptise la discipline et lui promet la rigueur des sciences de la nature.",
    resume: "Comte invente le mot « sociologie » et un pari : la société peut s'étudier avec la même rigueur qu'un phénomène physique.",
    concepts: [
      { id: 'physique-sociale', t: 'Physique sociale', year: '1830', simple: "L'idée que la vie collective obéit à des régularités observables, pas au hasard des volontés individuelles.", ex: "Les taux de mariage d'un pays varient peu d'une année sur l'autre, alors que chaque mariage semble une décision intime." },
      { id: 'loi-des-trois-etats', t: 'Loi des trois états', year: '1842', simple: "L'humanité expliquerait le monde d'abord par les dieux, puis par des principes abstraits, enfin par l'observation.", ex: "Une épidémie lue successivement comme punition divine, comme déséquilibre des humeurs, puis comme chaîne de contaminations." },
    ],
    oeuvres: [{ y: '1830', t: 'Cours de philosophie positive (1830–1842)' }, { y: '1851', t: 'Système de politique positive' }],
    citations: [{ t: "Savoir pour prévoir, afin de pouvoir.", src: 'Cours de philosophie positive' }],
    critiques: ["Sa foi dans le progrès linéaire a mal vieilli.", "Un programme plus philosophique qu'empirique : presque aucune enquête."],
    up: [], down: ['durkheim'], x: 30, y: 40,
  },
  marx: {
    id: 'marx', name: 'Karl Marx', initials: 'KM', dates: '1818–1883', nat: 'Allemagne', periode: 'XIXᵉ siècle',
    courant: 'Matérialisme historique',
    hook: "Il lit l'histoire comme un conflit d'intérêts matériels, pas comme un débat d'idées.",
    resume: "Pour Marx, ce qui structure une société n'est pas ce qu'elle pense d'elle-même, mais qui possède les moyens de produire.",
    concepts: [
      { id: 'classe-sociale', t: 'Classe sociale', year: '1848', simple: "Un groupe défini par sa place dans la production — posséder l'outil, ou vendre son temps pour l'utiliser.", ex: "Deux personnes au même salaire n'ont pas la même position si l'une détient l'entreprise et l'autre un contrat de travail." },
      { id: 'alienation', t: 'Aliénation', year: '1844', simple: "Quand le travail, censé être l'expression de soi, devient une activité étrangère qu'on subit.", ex: "Un opérateur qui répète un geste sur un produit qu'il ne verra jamais fini, ni ne pourra s'offrir." },
      { id: 'ideologie', t: 'Idéologie', year: '1846', simple: "Les idées qui font passer un ordre social particulier pour l'ordre naturel des choses.", ex: "« Chacun réussit à la mesure de son mérite » — une phrase qui rend invisible ce que le point de départ a apporté." },
      { id: 'lutte-des-classes', t: 'Lutte des classes', year: '1848', simple: "Le moteur de l'histoire : l'affrontement, ouvert ou larvé, entre ceux qui possèdent les moyens de production et ceux qui n'ont que leur travail à vendre.", ex: "Une grève qui bloque une usine rend visible, le temps d'un conflit, un rapport de force habituellement recouvert par la routine du travail." },
      { id: 'conflit-de-classes', t: 'Conflit de classes', year: '1847', simple: "L'antagonisme structurel d'intérêts entre classes, présent même quand aucune lutte ouverte ne l'exprime.", ex: "Un patron et ses salariés s'opposent sur le partage de la valeur produite, même dans une entreprise sans aucun conflit social déclaré." },
      { id: 'bourgeoisie', t: 'Bourgeoisie', year: '1848', simple: "La classe qui possède les moyens de production et vit de la valeur que le travail d'autrui y ajoute.", ex: "Un actionnaire qui touche des dividendes sans jamais mettre les pieds dans l'entreprise qui les génère." },
      { id: 'proletariat', t: 'Prolétariat', year: '1848', simple: "La classe qui, dépourvue de moyens de production, ne peut vivre qu'en vendant sa force de travail.", ex: "Un salarié qui n'a rien d'autre à proposer sur le marché que ses heures et ses compétences." },
      { id: 'plus-value', t: 'Plus-value', year: '1867', simple: "L'écart entre la valeur que le travail produit et le salaire qui le rémunère — la source du profit capitaliste.", ex: "Un ouvrier dont la journée produit largement plus que ce que son salaire lui restitue en fin de mois." },
      { id: 'exploitation', t: 'Exploitation', year: '1867', simple: "L'appropriation, par celui qui possède les moyens de production, de la plus-value créée par celui qui travaille.", ex: "Deux entreprises concurrentes, aussi respectueuses l'une que l'autre du droit du travail, mais où le rapport reste structurellement le même." },
      { id: 'fetichisme-de-la-marchandise', t: 'Fétichisme de la marchandise', year: '1867', simple: "Un rapport social entre producteurs en vient à paraître un rapport entre choses — le prix d'un objet semble lui appartenir en propre.", ex: "Un vêtement dont l'étiquette de prix ne dit rien des mains qui l'ont cousu, ni des conditions dans lesquelles elles l'ont fait." },
      { id: 'mode-de-production', t: 'Mode de production', year: '1859', simple: "La manière dont une société combine ses forces productives et ses rapports de production à une époque donnée.", ex: "Le servage médiéval et le salariat industriel organisent tous deux un travail, mais selon des rapports de production entièrement différents." },
      { id: 'rapports-de-production', t: 'Rapports de production', year: '1859', simple: "Les relations sociales — de propriété, de pouvoir — qui organisent qui travaille pour qui, et qui décide du résultat.", ex: "Un métayer et un salarié produisent tous deux de la valeur, mais selon des rapports de production qui ne leur laissent pas la même part." },
      { id: 'forces-productives', t: 'Forces productives', year: '1859', simple: "L'ensemble des moyens techniques et des savoir-faire qu'une société mobilise pour produire.", ex: "L'arrivée de la machine à vapeur transforme ce qu'une seule journée de travail permet de produire." },
      { id: 'infrastructure-et-superstructure', t: 'Infrastructure et superstructure', year: '1859', simple: "L'organisation économique d'une société (l'infrastructure) façonne en dernière instance son droit, ses idées et ses institutions (la superstructure).", ex: "Un droit de propriété qui protège d'abord ce qu'une société produit et échange réellement, avant de se présenter comme un principe intemporel." },
      { id: 'conscience-de-classe', t: 'Conscience de classe', year: '1848', simple: "Le moment où une classe cesse de subir sa position et se pense, s'organise et agit collectivement pour la défendre.", ex: "Des salariés dispersés dans des entreprises différentes qui se découvrent des intérêts communs et se syndiquent." },
      { id: 'fausse-conscience', t: 'Fausse conscience', year: '1846', simple: "Une représentation du monde qui empêche un groupe de percevoir ses propres intérêts de classe.", ex: "Un salarié qui s'identifie aux intérêts de son entreprise au point de défendre une mesure qui réduit ses propres droits." },
      { id: 'accumulation-du-capital', t: 'Accumulation du capital', year: '1867', simple: "Le réinvestissement de la plus-value en nouveau capital, qui concentre la richesse et intensifie la concurrence entre capitalistes eux-mêmes.", ex: "Une entreprise qui réinvestit ses profits dans des machines plus productives, ce qui pousse ses concurrentes à en faire autant ou à disparaître." },
      { id: 'pauperisation', t: 'Paupérisation', year: '1867', simple: "La tendance du système capitaliste à appauvrir relativement les travailleurs à mesure que le capital s'accumule à l'autre pôle.", ex: "Une croissance économique réelle qui s'accompagne d'une part toujours plus faible de la valeur produite reversée en salaires." },
    ],
    oeuvres: [{ y: '1847', t: 'Misère de la philosophie' }, { y: '1848', t: 'Manifeste du parti communiste' }, { y: '1859', t: "Contribution à la critique de l'économie politique" }, { y: '1867', t: 'Le Capital, livre I' }, { y: '1846', t: "L'Idéologie allemande" }],
    citations: [{ t: "Les hommes font leur propre histoire, mais dans des conditions qu'ils n'ont pas choisies.", src: 'Le 18 Brumaire de Louis Bonaparte, 1852' }],
    critiques: ["La prédiction d'une polarisation en deux classes ne s'est pas vérifiée : les classes moyennes ont grossi.", "Weber lui reproche de sous-estimer le rôle propre des croyances et du prestige."],
    up: [], down: ['bourdieu', 'francfort'], x: 30, y: 205,
  },
  weber: {
    id: 'weber', name: 'Max Weber', initials: 'MW', dates: '1864–1920', nat: 'Allemagne', periode: 'Tournant du XXᵉ',
    courant: 'Sociologie compréhensive',
    hook: "Comprendre le sens que les acteurs donnent à leurs actes, avant d'en chercher les causes.",
    resume: "Weber refuse de choisir entre les idées et l'économie : il montre comment une croyance religieuse a pu produire une machine économique.",
    concepts: [
      { id: 'ideal-type', t: 'Idéal-type', year: '1904', simple: "Une caricature volontaire, construite par le chercheur, pour rendre un phénomène comparable.", ex: "« La bureaucratie » n'existe nulle part à l'état pur, mais le modèle permet de mesurer l'écart d'une administration réelle." },
      { id: 'rationalisation', t: 'Rationalisation', year: '1920', simple: "La tendance moderne à tout soumettre au calcul, à la règle et à l'efficacité mesurable.", ex: "Un hôpital où le temps par patient devient un indicateur, au risque d'évincer ce qui ne se compte pas." },
      { id: 'domination-legitime', t: 'Domination légitime', year: '1922', simple: "On obéit rarement par peur seule : on obéit à la tradition, au charisme, ou à la règle écrite.", ex: "Un salarié suit une consigne parce qu'elle vient du poste, pas de la personne qui l'occupe." },
      { id: 'pouvoir', t: 'Pouvoir', year: '1922', simple: "La chance d'imposer sa volonté dans une relation sociale, même contre résistance — que ce soit jugé légitime ou non.", ex: "Un actionnaire minoritaire qui bloque une décision grâce à une clause, sans avoir ni la majorité ni l'onction du vote." },
      { id: 'statut-social', t: 'Statut social', year: '1922', simple: "Une estime sociale partagée, attachée à un style de vie — distincte de la richesse, qu'elle habille souvent de manières et de goûts.", ex: "Un professeur mal payé garde une considération que n'obtient pas un commerçant plus riche mais jugé moins « distingué »." },
      { id: 'prestige-social', t: 'Prestige social', year: '1922', simple: "La valeur comparative qu'une société attache à une position, indépendamment du salaire qu'elle procure.", ex: "Un métier de la fonction publique recherché pour sa considération, alors qu'un poste mieux payé dans le privé inspire moins de respect." },
      { id: 'elitisme', t: 'Élitisme', year: '1919', simple: "Même une organisation démocratique finit gouvernée par une poignée de dirigeants professionnels — la « loi d'airain de l'oligarchie ».", ex: "Un syndicat né pour représenter sa base voit ses permanents, mieux informés et mieux organisés, décider seuls de l'orientation à suivre." },
      { id: 'action-sociale', t: 'Action sociale', year: '1922', simple: "Un comportement devient une action sociale dès qu'il porte un sens visé par son auteur et qu'il tient compte du comportement d'autrui.", ex: "Deux cyclistes qui manquent de se percuter et se rattrapent tous deux d'un même geste : une action sociale, quand une simple collision physique n'en serait pas une." },
      { id: 'verstehen', t: 'Compréhension (Verstehen)', year: '1913', simple: "Comprendre une conduite suppose de restituer le sens que celui qui agit lui donne, pas seulement d'en repérer les causes extérieures.", ex: "Voir quelqu'un lever le bras ne dit rien : voter, saluer ou s'étirer sont trois actions différentes que seul le sens visé permet de distinguer." },
      { id: 'types-d-action-sociale', t: "Types d'action sociale", year: '1922', simple: "Quatre logiques distinctes peuvent motiver un même geste : la tradition, l'émotion, une valeur défendue pour elle-même, ou le calcul d'une fin à atteindre.", ex: "Faire un don peut relever de l'habitude familiale, de l'élan du moment, d'une conviction religieuse, ou d'un calcul de déduction fiscale — quatre types, un seul geste." },
      { id: 'domination-traditionnelle', t: 'Domination traditionnelle', year: '1922', simple: "On obéit parce que les choses ont toujours été ainsi, et que l'autorité en place en hérite légitimement.", ex: "Un chef coutumier dont personne ne conteste l'autorité, transmise de génération en génération sans qu'aucun texte ne la fonde." },
      { id: 'domination-charismatique', t: 'Domination charismatique', year: '1922', simple: "On obéit à une personne tenue pour extraordinaire, porteuse d'une qualité hors du commun que rien d'autre qu'elle-même ne garantit.", ex: "Un mouvement qui se délite ou se transforme du jour au lendemain à la mort de son fondateur, faute d'autre source d'autorité que sa seule personne." },
      { id: 'domination-legale-rationnelle', t: 'Domination légale-rationnelle', year: '1922', simple: "On obéit à une règle impersonnelle et à la fonction qu'elle définit, jamais à la personne qui l'occupe.", ex: "Un fonctionnaire suit une procédure identique quel que soit son supérieur du moment, parce qu'elle vient du poste et non de qui le tient." },
      { id: 'bureaucratie', t: 'Bureaucratie', year: '1922', simple: "L'organisation la plus efficace jamais inventée pour appliquer des règles écrites de façon impersonnelle, par des agents qualifiés et hiérarchisés.", ex: "Un dossier traité selon la même procédure, dans le même ordre d'arrivée, quel que soit l'agent qui le prend en charge ce jour-là." },
      { id: 'ethique-protestante', t: 'Éthique protestante', year: '1904', simple: "L'angoisse du salut, chez certains protestants, se résout par un travail méthodique et une vie sobre, plutôt que par des rites ou des indulgences.", ex: "Un entrepreneur qui réinvestit ses profits au lieu de les dépenser, par discipline plus que par calcul de rentabilité." },
      { id: 'esprit-du-capitalisme', t: 'Esprit du capitalisme', year: '1904', simple: "Une éthique qui fait du gain méthodique et du travail bien fait un devoir moral, détachée de sa matrice religieuse d'origine.", ex: "« Le temps, c'est de l'argent » : une maxime qui a gardé la rigueur morale de son origine religieuse bien après qu'elle a cessé d'en avoir besoin." },
      { id: 'desenchantement-du-monde', t: 'Désenchantement du monde', year: '1919', simple: "Le monde moderne cesse d'être habité de forces mystérieuses : tout, en principe, peut être calculé et maîtrisé par la raison.", ex: "Une panne de voiture qui appelle un diagnostic technique plutôt qu'une explication surnaturelle, même chez qui n'y connaît rien en mécanique." },
      { id: 'secularisation', t: 'Sécularisation', year: '1919', simple: "Le recul de la religion comme cadre englobant de la vie sociale, à mesure que le droit, l'école ou la politique s'en émancipent.", ex: "Un mariage civil, valide sans aucune cérémonie religieuse, là où le mariage religieux fondait autrefois seul l'union reconnue." },
      { id: 'parti', t: 'Parti', year: '1922', simple: "Un groupement organisé pour conquérir ou influencer le pouvoir, indépendamment de la classe économique ou du statut social de ses membres.", ex: "Une coalition politique qui rassemble des personnes de conditions économiques très différentes, unies par un même objectif de pouvoir." },
      { id: 'classe', t: 'Classe', year: '1922', simple: "Une situation partagée sur le marché, qui détermine des chances de vie comparables — un axe distinct du statut ou du parti.", ex: "Deux salariés au même niveau de vie mais dans des secteurs très différents peuvent partager la même classe sans partager le même statut." },
      { id: 'ordres-sociaux', t: 'Ordres sociaux', year: '1922', simple: "La position sociale se joue sur trois plans distincts et non réductibles l'un à l'autre : la classe économique, le statut, et le parti.", ex: "Un très riche entrepreneur récemment enrichi peut occuper une classe élevée sans jouir du même statut qu'une vieille famille moins fortunée." },
      { id: 'rationalite-en-valeur', t: 'Rationalité en valeur', year: '1922', simple: "Agir pour rester fidèle à une valeur ou une conviction, sans égard pour les conséquences ni le coût que cela suppose.", ex: "Refuser un compromis avantageux au nom d'un principe, en assumant pleinement le prix de ce refus." },
      { id: 'rationalite-instrumentale', t: 'Rationalité instrumentale', year: '1922', simple: "Choisir les moyens les plus efficaces pour atteindre un but donné, en évaluant froidement coûts et bénéfices.", ex: "Comparer plusieurs itinéraires pour ne retenir que le plus rapide, sans considération pour autre chose que le temps gagné." },
    ],
    oeuvres: [{ y: '1904', t: "L'Éthique protestante et l'esprit du capitalisme" }, { y: '1913', t: 'Essai sur quelques catégories de la sociologie compréhensive' }, { y: '1919', t: 'Le Savant et le politique' }, { y: '1922', t: 'Économie et société' }],
    citations: [{ t: "L'homme est un animal suspendu dans les toiles de signification qu'il a lui-même tissées.", src: "d'après L'Éthique protestante, 1904" }],
    critiques: ["Le lien protestantisme–capitalisme a été contesté par les historiens économistes.", "Sa neutralité axiologique est jugée intenable par les sociologies critiques."],
    up: [], down: ['goffman', 'parsons', 'bourdieu'], x: 30, y: 375,
  },
  simmel: {
    id: 'simmel', name: 'Georg Simmel', initials: 'GS', dates: '1858–1918', nat: 'Allemagne', periode: 'Tournant du XXᵉ',
    courant: 'Sociologie des formes',
    hook: "La société n'est pas une chose : c'est ce qui se passe entre les gens.",
    resume: "Simmel regarde les petites formes — la dispute, le secret, la mode, le passage en ville — et y trouve la structure du social.",
    concepts: [
      { id: 'formes-de-socialisation', t: 'Formes de socialisation', year: '1908', simple: "Ce qui compte n'est pas le contenu d'une relation mais sa forme : à deux, à trois, en foule, on n'agit pas pareil.", ex: "L'arrivée d'un troisième dans un duo crée aussitôt un arbitre, un allié possible, un exclu." },
      { id: 'blasement-urbain', t: 'Blasement urbain', year: '1903', simple: "La grande ville sature les sens, et l'indifférence devient une technique de survie.", ex: "Dans un métro bondé, on partage un corps à corps total en évitant soigneusement tous les regards." },
    ],
    oeuvres: [{ y: '1900', t: 'Philosophie de l\'argent' }, { y: '1903', t: 'Les Grandes villes et la vie de l\'esprit' }, { y: '1908', t: 'Sociologie' }],
    citations: [{ t: "La société n'est qu'une somme d'interactions.", src: 'Sociologie, 1908' }],
    critiques: ["Une œuvre en éclats, sans système, longtemps jugée trop essayiste.", "Peu d'outils pour penser les inégalités durables."],
    up: [], down: ['goffman', 'elias'], x: 30, y: 530,
  },
  durkheim: {
    id: 'durkheim', name: 'Émile Durkheim', initials: 'ED', dates: '1858–1917', nat: 'France', periode: 'IIIᵉ République',
    courant: 'Fonctionnalisme, holisme',
    hook: "Il fait entrer la sociologie à l'université en lui donnant des règles et des statistiques.",
    resume: "Durkheim démontre que les actes les plus intimes — jusqu'au suicide — se distribuent selon des régularités qui dépassent les individus.",
    concepts: [
      { id: 'fait-social', t: 'Fait social', year: '1895', simple: "Une manière de faire extérieure aux individus, qui s'impose à eux et se traite comme un objet.", ex: "Personne ne choisit sa langue maternelle, et pourtant elle contraint chaque phrase que l'on prononce." },
      { id: 'anomie', t: 'Anomie', year: '1897', simple: "Ce qui arrive quand les règles se brouillent : plus rien ne borne les attentes, et le vertige s'installe.", ex: "Un secteur en pleine dérégulation où les repères de carrière disparaissent, et où l'usure psychique grimpe." },
      { id: 'solidarite-organique', t: 'Solidarité organique', year: '1893', simple: "Dans les sociétés modernes, on tient ensemble parce qu'on est différents et dépendants les uns des autres.", ex: "Une ville tient debout parce que personne n'y produit son pain, son électricité et ses soins." },
      { id: 'solidarite-mecanique', t: 'Solidarité mécanique', year: '1893', simple: "Dans les sociétés peu différenciées, on tient ensemble parce qu'on se ressemble : mêmes croyances, mêmes gestes, mêmes façons de vivre.", ex: "Un petit village où chacun connaît les mêmes règles non écrites, et où l'écart à la norme se voit et se sanctionne immédiatement." },
      { id: 'conscience-collective', t: 'Conscience collective', year: '1893', simple: "L'ensemble des croyances et des sentiments communs à une société, qui existe indépendamment de chaque individu qui la porte.", ex: "Un scandale qui indigne toute une société de la même manière, avant même que chacun n'en ait discuté avec qui que ce soit." },
      { id: 'representations-collectives', t: 'Représentations collectives', year: '1898', simple: "Les catégories mêmes avec lesquelles une société pense — le temps, l'espace, la cause — sont d'origine sociale, pas seulement individuelle.", ex: "Le découpage de la semaine en sept jours, hérité d'un calendrier religieux, continue d'organiser des vies qui n'ont plus rien de religieux." },
      { id: 'division-du-travail-social', t: 'Division du travail social', year: '1893', simple: "La spécialisation croissante des tâches et des fonctions dans une société, qui en transforme le mode même de cohésion.", ex: "Un hôpital moderne emploie des dizaines de métiers si spécialisés qu'aucun ne pourrait remplacer un autre, et pourtant tous dépendent les uns des autres." },
      { id: 'integration-sociale', t: 'Intégration sociale', year: '1897', simple: "Le degré auquel un individu est rattaché à des groupes et des liens sociaux stables.", ex: "Une personne mariée, active dans une paroisse et un club sportif, dispose de plus d'attaches qu'une personne isolée dans les trois domaines à la fois." },
      { id: 'regulation-sociale', t: 'Régulation sociale', year: '1897', simple: "Le degré auquel les désirs et les attentes d'un individu sont encadrés par des normes sociales reconnues.", ex: "Un cadre horaire de travail contesté mais accepté encadre les attentes, quand son absence totale laisserait chacun fixer seul une limite qu'il ne trouve jamais." },
      { id: 'densite-morale', t: 'Densité morale', year: '1893', simple: "L'intensité des interactions sociales réellement vécues entre les membres d'une société, distincte de leur simple proximité physique.", ex: "Deux immeubles aussi peuplés l'un que l'autre peuvent avoir une vie collective très différente selon la fréquence réelle des échanges entre voisins." },
      { id: 'densite-dynamique', t: 'Densité dynamique', year: '1893', simple: "L'accélération de la fréquence et de la facilité des contacts entre individus, portée par le transport et la communication.", ex: "L'arrivée du chemin de fer multiplie en quelques décennies le nombre d'échanges possibles entre deux villes jusque-là peu reliées." },
      { id: 'suicide-anomique', t: 'Suicide anomique', year: '1897', simple: "Le suicide dont le taux augmente quand la régulation sociale se relâche brutalement, dans la crise comme dans la prospérité soudaine.", ex: "Un krach boursier suivi d'une hausse mesurable des suicides, aussi bien que certains booms économiques trop rapides." },
      { id: 'suicide-egoiste', t: 'Suicide égoïste', year: '1897', simple: "Le suicide dont le taux augmente quand l'intégration sociale est trop faible, et l'individu insuffisamment rattaché à des groupes.", ex: "Les personnes vivant seules et sans pratique religieuse affichent, dans les statistiques de Durkheim, un taux de suicide plus élevé que les personnes mariées et pratiquantes." },
      { id: 'suicide-altruiste', t: 'Suicide altruiste', year: '1897', simple: "Le suicide dont le taux augmente quand l'intégration sociale est si forte que l'individu s'efface entièrement devant le groupe.", ex: "Un soldat qui se sacrifie pour son unité, ou une pratique rituelle qui exige de l'individu qu'il donne sa vie pour le collectif." },
      { id: 'suicide-fataliste', t: 'Suicide fataliste', year: '1897', simple: "Le suicide dont le taux augmente quand la régulation sociale est si oppressante qu'elle ne laisse plus aucun avenir concevable.", ex: "Une évocation, en note de bas de page chez Durkheim, des personnes dont l'existence entière est enserrée dans une discipline sans aucune issue." },
      { id: 'effervescence-collective', t: 'Effervescence collective', year: '1912', simple: "Un rassemblement peut porter ses membres à un état d'exaltation partagée, où le groupe se ressent lui-même comme une force supérieure à chacun.", ex: "La ferveur d'un concert ou d'un stade, où l'émotion collective dépasse largement ce que chaque spectateur pris isolément aurait ressenti seul." },
      { id: 'sacre-et-profane', t: 'Sacré et profane', year: '1912', simple: "Toute société trace une frontière entre ce qui relève du sacré, protégé et intouchable, et ce qui relève du profane, l'ordinaire de la vie quotidienne.", ex: "Un drapeau, simple morceau de tissu, devient intouchable dès qu'il incarne une nation — la même différence que l'hostie pour un croyant." },
      { id: 'religion-comme-fait-social', t: 'Religion comme fait social', year: '1912', simple: "La religion n'est pas d'abord une croyance en des dieux : c'est la façon dont une société se représente et se célèbre elle-même.", ex: "Un rituel laïque (cérémonie civile, hommage national) qui remplit la même fonction sociale qu'un rite religieux, sans invoquer aucun dieu." },
      { id: 'fonction-sociale', t: 'Fonction sociale', year: '1893', simple: "Comprendre une institution suppose de chercher le besoin collectif qu'elle sert, distinct de la cause historique qui l'a fait naître.", ex: "La peine de prison a pu naître d'une volonté de vengeance, et remplir aujourd'hui la fonction sociale de réaffirmer la règle transgressée." },
      { id: 'individualisme-moral', t: 'Individualisme moral', year: '1898', simple: "L'individu lui-même peut devenir un objet sacré, collectivement défendu — un individualisme qui unit plutôt qu'il ne dissout.", ex: "Une société qui ne partage plus aucune croyance religieuse commune peut encore s'unir tout entière pour défendre les droits d'une seule personne accusée à tort." },
    ],
    oeuvres: [{ y: '1893', t: 'De la division du travail social' }, { y: '1895', t: 'Les Règles de la méthode sociologique' }, { y: '1897', t: 'Le Suicide' }, { y: '1898', t: "L'individualisme et les intellectuels" }, { y: '1912', t: 'Les Formes élémentaires de la vie religieuse' }],
    citations: [{ t: "Il faut traiter les faits sociaux comme des choses.", src: 'Les Règles de la méthode sociologique, 1895' }, { t: "Chaque société a un penchant défini au suicide.", src: 'Le Suicide, 1897' }],
    critiques: ["Un holisme qui laisse peu de place à l'action individuelle.", "La lecture fonctionnaliste tend à justifier l'ordre existant."],
    up: ['comte'], down: ['parsons', 'bourdieu', 'merton'], x: 250, y: 60,
  },
  francfort: {
    id: 'francfort', name: 'École de Francfort', initials: 'ÉF', dates: '1923–1970', nat: 'Allemagne', periode: 'XXᵉ siècle',
    courant: 'Théorie critique',
    hook: "Marx relu à l'âge des mass media et de la catastrophe.",
    resume: "Adorno, Horkheimer et Marcuse déplacent la critique du travail vers la culture : la domination passe désormais par le divertissement.",
    concepts: [
      { id: 'industrie-culturelle', t: 'Industrie culturelle', year: '1944', simple: "Quand la culture est produite en série, elle vend surtout du consentement.", ex: "Des formats de divertissement calibrés pour ne jamais heurter, qui laissent le spectateur exactement là où il était." },
      { id: 'raison-instrumentale', t: 'Raison instrumentale', year: '1947', simple: "Une rationalité qui sait parfaitement comment faire, et ne se demande plus pourquoi.", ex: "Une organisation qui optimise chaque indicateur sans jamais interroger sa finalité." },
    ],
    oeuvres: [{ y: '1944', t: 'La Dialectique de la raison — Adorno & Horkheimer' }, { y: '1964', t: "L'Homme unidimensionnel — Marcuse" }],
    citations: [{ t: "Le divertissement est la prolongation du travail sous le capitalisme tardif.", src: 'La Dialectique de la raison, 1944' }],
    critiques: ["Un mépris marqué pour la culture populaire et ses publics.", "Peu d'enquêtes empiriques au regard de l'ampleur du diagnostic."],
    up: ['marx'], down: ['bourdieu'], x: 250, y: 205,
  },
  parsons: {
    id: 'parsons', name: 'Talcott Parsons', initials: 'TP', dates: '1902–1979', nat: 'États-Unis', periode: 'Après-guerre',
    courant: 'Fonctionnalisme systémique',
    hook: "Il tente la grande théorie : un seul schéma pour toute société.",
    resume: "Parsons voit la société comme un système dont chaque partie remplit une fonction et se tient en équilibre.",
    concepts: [
      { id: 'systeme-social', t: 'Système social', year: '1951', simple: "Un ensemble de rôles articulés, où chaque pièce contribue au maintien de l'ensemble.", ex: "L'école lue comme le sas qui transforme un enfant de famille en futur travailleur évalué au mérite." },
      { id: 'role-et-attentes', t: 'Rôle et attentes', year: '1951', simple: "Agir socialement, c'est occuper une position et répondre à ce que les autres en attendent.", ex: "Un médecin autorisé à poser des questions très intimes, uniquement dans le cadre du cabinet." },
    ],
    oeuvres: [{ y: '1937', t: 'La Structure de l\'action sociale' }, { y: '1951', t: 'Le Système social' }],
    citations: [{ t: "Aucune société ne survit sans intégrer ses membres à un système commun de valeurs.", src: 'Le Système social, 1951' }],
    critiques: ["Un modèle qui explique mal le conflit et le changement.", "Une abstraction si haute qu'elle devient difficile à tester."],
    up: ['durkheim', 'weber'], down: ['merton'], x: 250, y: 375,
  },
  elias: {
    id: 'elias', name: 'Norbert Elias', initials: 'NE', dates: '1897–1990', nat: 'Allemagne', periode: 'XXᵉ siècle',
    courant: 'Sociologie historique',
    hook: "Il suit sur cinq siècles la manière dont on apprend à se retenir.",
    resume: "Elias montre que la maîtrise de soi n'est pas une vertu naturelle mais le produit d'une longue histoire de l'État et des mœurs.",
    concepts: [
      { id: 'processus-de-civilisation', t: 'Processus de civilisation', year: '1939', simple: "Les contraintes venues de l'extérieur deviennent peu à peu des contraintes qu'on s'impose soi-même.", ex: "Personne ne surveille plus votre manière de manger : c'est vous qui ne supporteriez pas de le faire autrement." },
      { id: 'configuration', t: 'Configuration', year: '1970', simple: "Ni individu ni société d'abord : un tissu de relations d'interdépendance où chacun tient les autres.", ex: "Une équipe où le retard d'une seule personne réorganise la journée de dix autres." },
    ],
    oeuvres: [{ y: '1939', t: 'La Civilisation des mœurs' }, { y: '1939', t: 'La Dynamique de l\'Occident' }, { y: '1970', t: "Qu'est-ce que la sociologie ?" }],
    citations: [{ t: "La société n'est ni un amas d'individus ni une entité au-dessus d'eux.", src: "Qu'est-ce que la sociologie ?, 1970" }],
    critiques: ["Un récit occidental, accusé de laisser entendre un progrès moral.", "Les sources — traités de savoir-vivre — reflètent l'élite plus que le peuple."],
    up: ['simmel'], down: ['bourdieu'], x: 250, y: 530,
  },
  merton: {
    id: 'merton', name: 'Robert K. Merton', initials: 'RM', dates: '1910–2003', nat: 'États-Unis', periode: 'Après-guerre',
    courant: 'Fonctionnalisme critique',
    hook: "Il préfère les théories de portée moyenne aux grands systèmes.",
    resume: "Merton corrige son maître Parsons : les institutions ont aussi des effets non voulus, et parfois contraires à leur but.",
    concepts: [
      { id: 'fonction-latente', t: 'Fonction latente', year: '1949', simple: "L'effet réel d'une pratique, distinct de la raison affichée pour la faire.", ex: "Une réunion hebdomadaire dont la fonction déclarée est d'informer, et la fonction réelle de rappeler qui décide." },
      { id: 'prophetie-autorealisatrice', t: 'Prophétie autoréalisatrice', year: '1948', simple: "Une croyance fausse peut devenir vraie, simplement parce qu'on agit comme si elle l'était.", ex: "Un élève étiqueté faible, moins sollicité, qui finit par produire les résultats attendus de lui." },
      { id: 'tension-anomique', t: 'Tension anomique', year: '1938', simple: "Quand une société promet à tous un but qu'elle ne donne pas à tous les moyens d'atteindre.", ex: "La réussite matérielle érigée en norme là où les voies légitimes d'y accéder sont fermées." },
    ],
    oeuvres: [{ y: '1949', t: 'Éléments de théorie et de méthode sociologiques' }, { y: '1938', t: 'Social Structure and Anomie' }],
    citations: [{ t: "Une définition fausse d'une situation en engendre les conséquences qui la rendent vraie.", src: 'The Self-Fulfilling Prophecy, 1948' }],
    critiques: ["Reste dans le cadre fonctionnaliste qu'il critique.", "La notion de fonction latente est difficile à prouver empiriquement."],
    up: ['parsons', 'durkheim'], down: ['becker'], x: 470, y: 60,
  },
  bourdieu: {
    id: 'bourdieu', name: 'Pierre Bourdieu', initials: 'PB', dates: '1930–2002', nat: 'France', periode: 'XXᵉ siècle',
    courant: 'Structuralisme génétique',
    hook: "Il montre comment les goûts, l'école et le corps reconduisent l'ordre social.",
    resume: "Bourdieu explique la reproduction sociale sans complot : elle passe par des dispositions incorporées si tôt qu'elles semblent naturelles.",
    concepts: [
      { id: 'habitus', t: 'Habitus', year: '1972', simple: "Des manières de penser, de percevoir et d'agir incorporées par le milieu, qui agissent sans qu'on y pense.", ex: "Deux enfants de milieux différents n'ont ni le même rapport à la prise de parole en classe, ni le même sentiment d'y avoir droit." },
      { id: 'capital-culturel', t: 'Capital culturel', year: '1979', simple: "Un patrimoine non financier — diplômes, aisance verbale, familiarité avec la culture légitime — qui se transmet et rapporte.", ex: "Un dossier scolaire soutenu à la maison par des références que l'école valorise sans jamais les enseigner." },
      { id: 'champ', t: 'Champ', year: '1976', simple: "Un espace de jeu autonome, avec ses enjeux et sa monnaie de prestige propres.", ex: "Dans le champ artistique, le succès commercial peut coûter de la reconnaissance entre pairs." },
      { id: 'violence-symbolique', t: 'Violence symbolique', year: '1970', simple: "Une domination acceptée par ceux qui la subissent, parce qu'ils en partagent les critères.", ex: "Un élève qui explique son échec par son manque de capacités plutôt que par l'écart entre l'école et son milieu." },
      { id: 'capital-economique', t: 'Capital économique', year: '1979', simple: "La richesse directement convertible en argent — revenus, patrimoine, biens — que Bourdieu prend comme base avant d'y ajouter les autres capitaux.", ex: "Deux héritages transmis en une génération : un compte en banque d'un côté, un carnet d'adresses et des manières de l'autre." },
      { id: 'capital-social', t: 'Capital social', year: '1980', simple: "L'ensemble des relations durables qu'un agent peut mobiliser, et qui valent d'autant plus qu'elles sont entretenues.", ex: "Un poste pourvu avant même d'être publié, par la recommandation d'une relation qui a suffi à garantir." },
      { id: 'capital-symbolique', t: 'Capital symbolique', year: '1972', simple: "N'importe quel capital, une fois reconnu et perçu comme légitime — ce qui le rend méconnaissable comme rapport de force.", ex: "Une réputation d'expert qui vaut avis d'autorité, quelle que soit la solidité de l'argument avancé ce jour-là." },
      { id: 'position-sociale', t: 'Position sociale', year: '1979', simple: "La place qu'occupe un agent dans un espace défini par le volume et la nature de ses capitaux, relativement à toutes les autres places.", ex: "Deux salaires égaux qui n'occupent pas la même position, selon que l'un vient avec un titre et l'autre sans." },
    ],
    oeuvres: [{ y: '1970', t: 'La Reproduction (avec J.-C. Passeron)' }, { y: '1979', t: 'La Distinction' }, { y: '1980', t: 'Le Sens pratique' }, { y: '1993', t: 'La Misère du monde' }],
    citations: [{ t: "Le goût classe, et classe celui qui classe.", src: 'La Distinction, 1979' }, { t: "Le plus clair de notre action nous échappe, et pourtant elle a un sens.", src: "d'après Le Sens pratique, 1980" }],
    critiques: ["Un déterminisme jugé trop lourd : où reste la marge de manœuvre ?", "Boudon lui oppose des acteurs qui calculent leurs chances au lieu de subir leur habitus.", "Un vocabulaire dense, souvent reproché à l'entrée."],
    up: ['marx', 'weber', 'durkheim', 'francfort', 'elias'], down: ['boltanski'], x: 470, y: 210,
  },
  goffman: {
    id: 'goffman', name: 'Erving Goffman', initials: 'EG', dates: '1922–1982', nat: 'Canada / É.-U.', periode: 'XXᵉ siècle',
    courant: 'Interactionnisme',
    hook: "Il traite la vie quotidienne comme une scène de théâtre très sérieuse.",
    resume: "Goffman démontre qu'un simple échange de politesses est un travail minutieux pour sauver la face de chacun.",
    concepts: [
      { id: 'mise-en-scene-de-soi', t: 'Mise en scène de soi', year: '1959', simple: "En public, on joue un rôle sur une scène, avec des coulisses où l'on relâche la tenue.", ex: "Le ton d'un serveur en salle, puis en cuisine : deux personnes, un seul individu." },
      { id: 'stigmate', t: 'Stigmate', year: '1963', simple: "Un attribut qui déclasse celui qui le porte et le contraint à gérer l'information sur lui-même.", ex: "Un trou dans un CV que l'on apprend à raconter, contourner ou taire selon l'interlocuteur." },
      { id: 'cadre-de-l-experience', t: 'Cadre de l\'expérience', year: '1974', simple: "Chaque situation vient avec une clé de lecture implicite qui indique ce qui s'y passe vraiment.", ex: "La même bourrade est un jeu entre amis et une agression à l'arrêt de bus." },
    ],
    oeuvres: [{ y: '1959', t: 'La Mise en scène de la vie quotidienne' }, { y: '1961', t: 'Asiles' }, { y: '1963', t: 'Stigmate' }, { y: '1974', t: 'Les Cadres de l\'expérience' }],
    citations: [{ t: "Le monde est un mariage.", src: 'La Mise en scène de la vie quotidienne, 1959' }],
    critiques: ["Une focale micro qui laisse les inégalités structurelles hors champ.", "Des matériaux hétéroclites, difficiles à répliquer."],
    up: ['simmel', 'weber'], down: ['becker'], x: 470, y: 375,
  },
  becker: {
    id: 'becker', name: 'Howard S. Becker', initials: 'HB', dates: '1928–2023', nat: 'États-Unis', periode: 'XXᵉ–XXIᵉ',
    courant: 'École de Chicago, étiquetage',
    hook: "Il renverse la question : ce n'est pas l'acte qui fait le déviant, c'est la réaction.",
    resume: "Becker suit des musiciens de jazz et des fumeurs de cannabis pour montrer que la déviance est une carrière, apprise et étiquetée.",
    concepts: [
      { id: 'etiquetage', t: 'Étiquetage', year: '1963', simple: "Un comportement ne devient déviant que lorsqu'un groupe le désigne comme tel et sanctionne son auteur.", ex: "Le même geste toléré dans un milieu et poursuivi dans un autre, selon qui l'observe." },
      { id: 'carriere-deviante', t: 'Carrière déviante', year: '1963', simple: "On ne devient pas marginal d'un coup : par étapes, apprentissages et portes qui se ferment.", ex: "Une première sanction qui restreint les fréquentations, et rapproche de ceux qui sont déjà sanctionnés." },
      { id: 'entrepreneur-de-morale', t: 'Entrepreneur de morale', year: '1963', simple: "Il faut des militants du bien pour qu'une règle nouvelle existe — et des agents pour l'appliquer.", ex: "Une campagne qui transforme une pratique banale en problème public, puis en infraction." },
    ],
    oeuvres: [{ y: '1963', t: 'Outsiders' }, { y: '1982', t: 'Les Mondes de l\'art' }, { y: '1998', t: 'Les Ficelles du métier' }],
    citations: [{ t: "La déviance n'est pas une qualité de l'acte, mais la conséquence de la réaction des autres.", src: 'Outsiders, 1963' }],
    critiques: ["L'étiquetage explique la réaction, moins le passage à l'acte initial.", "Une sympathie pour les étiquetés qui a valu à Becker le reproche de parti pris."],
    up: ['goffman', 'merton'], down: [], x: 700, y: 375,
  },
  boudon: {
    id: 'boudon', name: 'Raymond Boudon', initials: 'RB', dates: '1934–2013', nat: 'France', periode: 'XXᵉ siècle',
    courant: 'Individualisme méthodologique',
    hook: "Le contre-modèle français de Bourdieu : des acteurs qui calculent, pas des habitus.",
    resume: "Boudon explique les inégalités scolaires par une succession de paris rationnels, faits sous des contraintes très inégales.",
    concepts: [
      { id: 'individualisme-methodologique', t: 'Individualisme méthodologique', year: '1979', simple: "Expliquer un phénomène collectif en repartant des raisons que les individus avaient d'agir ainsi.", ex: "Une file d'attente qui s'allonge parce que chacun, rationnellement, préfère attendre plutôt que changer de guichet." },
      { id: 'effets-pervers', t: 'Effets pervers', year: '1977', simple: "Des décisions individuellement sensées qui produisent un résultat collectif que personne ne voulait.", ex: "Tous les élèves visant le même diplôme : sa valeur sur le marché du travail baisse pour tout le monde." },
      { id: 'meritocratie', t: 'Méritocratie', year: '1973', simple: "L'idée qu'une société juste distribue les positions au mérite — et l'écart, mesurable, entre cette promesse et ce qu'elle produit.", ex: "Un concours ouvert à tous dont les lauréats viennent, année après année, des mêmes lycées et des mêmes quartiers." },
      { id: 'ressources-sociales', t: 'Ressources sociales', year: '1979', simple: "Les moyens — relations, informations, temps, argent — qu'un acteur peut mobiliser pour agir, inégalement répartis avant même que le jeu ne commence.", ex: "Deux candidats à un même poste, dont l'un sait par un contact quelles questions poser, l'autre pas." },
    ],
    oeuvres: [{ y: '1973', t: "L'Inégalité des chances" }, { y: '1977', t: 'Effets pervers et ordre social' }, { y: '1979', t: 'La Logique du social' }],
    citations: [{ t: "Les inégalités scolaires résultent moins d'un héritage culturel que d'une suite de décisions sous contrainte.", src: "d'après L'Inégalité des chances, 1973" }],
    critiques: ["Suppose une information et un calcul dont les acteurs disposent rarement.", "Laisse peu de place à l'incorporation précoce des dispositions."],
    up: ['weber'], down: [], x: 700, y: 210,
  },
  boltanski: {
    id: 'boltanski', name: 'Luc Boltanski', initials: 'LB', dates: '1940–', nat: 'France', periode: 'Contemporain',
    courant: 'Sociologie pragmatique',
    hook: "Après Bourdieu : rendre aux acteurs leur capacité de critique.",
    resume: "Boltanski déplace l'attention vers les disputes ordinaires, où les gens argumentent, justifient et dénoncent l'injustice.",
    concepts: [
      { id: 'regimes-de-justification', t: 'Régimes de justification', year: '1991', simple: "Dans un désaccord, on mobilise des principes de grandeur concurrents pour avoir raison.", ex: "Un conflit au travail où l'un invoque l'ancienneté, l'autre la performance mesurée : deux mondes, un seul bureau." },
      { id: 'nouvel-esprit-du-capitalisme', t: 'Nouvel esprit du capitalisme', year: '1999', simple: "Le capitalisme absorbe les critiques qu'on lui adresse et s'en fait une nouvelle légitimité.", ex: "L'autonomie réclamée contre la hiérarchie, revenue en management par projet et en responsabilisation individuelle." },
    ],
    oeuvres: [{ y: '1991', t: 'De la justification (avec L. Thévenot)' }, { y: '1999', t: 'Le Nouvel Esprit du capitalisme (avec È. Chiapello)' }],
    citations: [{ t: "Les acteurs sont capables de critique : la sociologie n'en a pas le monopole.", src: "d'après De la justification, 1991" }],
    critiques: ["En suivant les justifications, on risque de perdre de vue les rapports de force.", "Un appareil conceptuel jugé difficile à opérationnaliser."],
    up: ['bourdieu'], down: [], x: 700, y: 60,
  },
  tocqueville: {
    id: 'tocqueville', name: 'Alexis de Tocqueville', initials: 'AT', dates: '1805–1859', nat: 'France', periode: 'XIXᵉ siècle',
    courant: 'Sociologie politique comparée',
    hook: "Il va voir l'Amérique pour comprendre ce que l'égalité fait aux mœurs.",
    resume: "Tocqueville découvre que l'égalité des conditions transforme la famille, la religion et le rapport à l'autorité avant de toucher aux lois.",
    concepts: [
      { id: 'egalisation-des-conditions', t: 'Égalisation des conditions', year: '1835', simple: "Un mouvement de fond qui rapproche les statuts et rend toute différence plus insupportable.", ex: "Des écarts objectivement réduits vécus comme plus injustes qu'auparavant, parce que rien ne les justifie plus." },
      { id: 'tyrannie-de-la-majorite', t: 'Tyrannie de la majorité', year: '1840', simple: "En démocratie, la pression du plus grand nombre peut étouffer la voix minoritaire sans aucune violence.", ex: "Une opinion majoritaire si évidente localement que la contredire coûte socialement plus que légalement." },
    ],
    oeuvres: [{ y: '1835', t: 'De la démocratie en Amérique, I' }, { y: '1840', t: 'De la démocratie en Amérique, II' }, { y: '1856', t: "L'Ancien Régime et la Révolution" }],
    citations: [{ t: "Le despotisme qui menace les démocraties serait plus étendu et plus doux.", src: "d'après De la démocratie en Amérique, 1840" }],
    critiques: ["Une aristocratie nostalgique perce sous l'analyse.", "L'Amérique observée est celle des hommes blancs libres."],
    up: [], down: ['durkheim'], x: 30, y: 690,
  },
  castel: {
    id: 'castel', name: 'Robert Castel', initials: 'RC', dates: '1933–2013', nat: 'France', periode: 'Contemporain',
    courant: 'Sociologie de la question sociale',
    hook: "Il retrace l'histoire longue du salariat pour comprendre pourquoi sa fragilisation ébranle bien plus qu'un statut professionnel.",
    resume: "Castel montre que le travail salarié stable a longtemps servi de socle à l'intégration sociale, et documente ce qu'il advient quand ce socle se fissure.",
    concepts: [
      { id: 'societe-salariale', t: 'Société salariale', year: '1995', simple: "Le salariat stable, avec ses droits sociaux attachés, a fini par tenir lieu de statut social à part entière — bien plus qu'un simple contrat de travail.", ex: "Un CDI ouvre, en plus d'un revenu, une retraite, une assurance maladie et un crédit immobilier : autant de droits accrochés à l'emploi lui-même." },
      { id: 'zones-de-l-integration-sociale', t: "Zones de l'intégration sociale", year: '1995', simple: "Entre l'intégration pleine et la désaffiliation complète, une zone de vulnérabilité concentre le plus grand nombre — ni installée, ni rompue.", ex: "Un intérimaire sans logement stable n'est pas exclu : il occupe une zone intermédiaire, exposée à la moindre rupture supplémentaire." },
    ],
    oeuvres: [{ y: '1976', t: "L'Ordre psychiatrique" }, { y: '1995', t: 'Les Métamorphoses de la question sociale' }, { y: '2003', t: "L'Insécurité sociale" }],
    citations: [{ t: "Être protégé, c'est être assuré de ne pas tomber en cas de coup dur.", src: "d'après L'Insécurité sociale, 2003" }],
    critiques: ["Une cartographie en zones bâtie sur l'histoire spécifique du salariat français, jugée parfois difficile à exporter telle quelle.", "Le succès du mot désaffiliation a aussi produit ses propres effets fourre-tout, comme celui d'exclusion avant lui."],
    up: ['durkheim', 'bourdieu'], down: [], x: 700, y: 530,
  },
};

// Champs complémentaires : état civil séparé, ponts disciplinaires, bibliographie
// secondaire, portrait et influences extérieures au corpus.
//
// `portrait` — `kind: 'photo'` renvoie à src/assets/portraits/<file>.webp, résolu
// par src/data/portraits.js ; `kind: 'monogram'` assume le monogramme d'initiales
// faute d'image libre de droits. Aucune URL ici : les sources sont créditées dans
// docs/legal/licences-credits.md (l'audit lit tout https:// de src/ comme un hôte
// que le code contacterait).
//
// `horsCorpus` — les influences qui ne sont pas parmi les quinze fiches, donc
// absentes du graphe `up`/`down`. Texte libre, sans lien de navigation.
export const EXTRA = {
  comte: {
    prenom: 'Auguste', nom: 'Comte', disc: ['Philosophie des sciences — la sociologie naît comme couronnement de la hiérarchie des savoirs', 'Histoire — la loi des trois états est une périodisation avant d\'être une théorie'], biblio: ["A. Petit, Le Système d'Auguste Comte, Vrin, 2016", 'M. Bourdeau, Les Trois États, Cerf, 2006'],
    portrait: { kind: 'photo', file: 'comte', alt: "Auguste Comte, daguerréotype, vers 1849", credit: 'Daguerréotype de J. H. Hoffmeister, v. 1849 — Wikimedia Commons, domaine public' },
    horsCorpus: [
      "Henri de Saint-Simon — dont il fut le secrétaire, et dont il reprend le projet de réorganisation sociale avant de rompre",
      "Condorcet et Turgot — l'idée d'un progrès réglé de l'esprit humain, que la loi des trois états met en forme",
      "Joseph de Maistre et Bonald — les contre-révolutionnaires, pour la critique de l'individualisme et le besoin d'un ordre commun"
    ],
  },
  marx: {
    prenom: 'Karl', nom: 'Marx', disc: ['Économie politique — critique de Smith et Ricardo', 'Philosophie — héritage et renversement de Hegel', 'Histoire — le mode de production comme clé de périodisation'], biblio: ['G. Duménil & M. Löwy, Lire Marx, PUF, 2009', 'J. Bidet, Que faire du Capital ?, PUF, 2000'],
    portrait: { kind: 'photo', file: 'marx', alt: 'Karl Marx, photographie de 1875', credit: 'Photographie de John Jabez Edwin Mayall, 1875 (restaurée) — Wikimedia Commons, domaine public' },
    horsCorpus: [
      "Hegel — la dialectique, que Marx dit avoir remise « sur ses pieds »",
      "Ludwig Feuerbach — la religion lue comme projection humaine, modèle de la critique de l'idéologie",
      "Adam Smith et David Ricardo — l'économie politique anglaise, dont il tire puis retourne la valeur-travail",
      "Saint-Simon, Fourier, Proudhon — le socialisme français, repoussoir autant que source"
    ],
  },
  weber: {
    prenom: 'Max', nom: 'Weber', disc: ['Droit — sa formation initiale nourrit l\'analyse de la légalité', 'Histoire économique comparée', 'Sciences des religions — comparaison des éthiques économiques'], biblio: ['C. Colliot-Thélène, Max Weber et l\'histoire, PUF, 1990', 'P. Raynaud, Max Weber et les dilemmes de la raison moderne, PUF, 1987'],
    portrait: { kind: 'photo', file: 'weber', alt: 'Max Weber en 1894', credit: 'Photographe inconnu, 1894 — Wikimedia Commons, domaine public' },
    horsCorpus: [
      "Kant et le néokantisme de Rickert — la coupure entre sciences de la nature et sciences de la culture",
      "Wilhelm Dilthey — la compréhension (Verstehen) comme méthode propre aux sciences de l'esprit",
      "Nietzsche — la généalogie des valeurs et la méfiance envers les morales affichées",
      "L'école historique allemande d'économie (Roscher, Schmoller) — contre laquelle il forge l'idéal-type"
    ],
  },
  simmel: {
    prenom: 'Georg', nom: 'Simmel', disc: ['Philosophie — une esthétique de la modernité', 'Économie — la monnaie comme forme sociale', 'Géographie urbaine'], biblio: ['P. Watier, Georg Simmel sociologue, Circé, 2003', 'F. Léger, La Pensée de Georg Simmel, Kimé, 1989'],
    portrait: { kind: 'photo', file: 'simmel', alt: 'Georg Simmel, photographie vers 1901', credit: 'Photographie de Julius Cornelius Schaarwächter, v. 1901 — Wikimedia Commons, domaine public' },
    horsCorpus: [
      "Kant — la forme comme condition de l'expérience, transposée du sujet connaissant à la relation sociale",
      "Schopenhauer et Nietzsche — la vie et la valeur, objets de son dernier enseignement",
      "Goethe — le regard morphologique, qui cherche la forme derrière la variété des cas"
    ],
  },
  durkheim: {
    prenom: 'Émile', nom: 'Durkheim', disc: ['Statistique — l\'usage démographique fonde la preuve sociologique', 'Anthropologie — les formes religieuses australiennes', 'Droit — la solidarité lue dans les types de sanction'], biblio: ['P. Steiner, La Sociologie de Durkheim, La Découverte, 2011', 'S. Lukes, Émile Durkheim, sa vie, son œuvre, PUF, 1985'],
    portrait: { kind: 'photo', file: 'durkheim', alt: 'Émile Durkheim, photographie avant 1917', credit: 'Photographe inconnu, avant 1917 — Wikimedia Commons, domaine public' },
    horsCorpus: [
      "Charles Renouvier — le rationalisme moral néokantien, transmis à l'École normale",
      "Fustel de Coulanges — l'histoire des institutions religieuses antiques comme méthode",
      "Wilhelm Wundt — le laboratoire de Leipzig, visité en 1885, et l'idée d'une psychologie des peuples",
      "Herbert Spencer — l'évolutionnisme utilitariste, discuté pied à pied dans La Division du travail social"
    ],
  },
  francfort: {
    prenom: '—', nom: 'Institut für Sozialforschung', disc: ['Philosophie — dialectique hégélienne relue par Marx', 'Psychanalyse — Freud mobilisé contre la personnalité autoritaire', 'Esthétique et musicologie (Adorno)'], biblio: ['M. Jay, L\'Imagination dialectique, Payot, 1977', 'Y. Cusset & S. Haber, Habermas / Honneth, Ellipses, 2008'],
    portrait: { kind: 'monogram', alt: "Monogramme de l'École de Francfort", credit: "Aucun portrait : la fiche porte sur un collectif, pas sur une personne." },
    horsCorpus: [
      "Hegel — la dialectique, gardée comme méthode quand le sujet révolutionnaire fait défaut",
      "Sigmund Freud — la psychanalyse, mobilisée pour expliquer l'adhésion à la personnalité autoritaire",
      "Georg Lukács — la réification, chaînon entre l'aliénation de Marx et la critique de la culture",
      "Nietzsche — la critique de la raison et de la civilisation, reprise dans La Dialectique de la raison"
    ],
  },
  parsons: {
    prenom: 'Talcott', nom: 'Parsons', disc: ['Biologie — le vocabulaire systémique et fonctionnel', 'Économie — reprise de Marshall et Pareto', 'Psychanalyse — l\'intériorisation des normes'], biblio: ['F. Bourricaud, L\'Individualisme institutionnel, PUF, 1977', 'B. Valade, Introduction aux sciences sociales, PUF, 1996'],
    portrait: { kind: 'monogram', alt: 'Monogramme de Talcott Parsons', credit: "Photographies sous droits : aucune image libre disponible." },
    horsCorpus: [
      "Vilfredo Pareto — le système social pensé comme un équilibre entre forces",
      "Alfred Marshall — l'économie néoclassique, dont il discute les présupposés sur l'action",
      "Sigmund Freud — l'intériorisation des normes, qui explique comment le rôle tient de l'intérieur",
      "Malinowski et Radcliffe-Brown — le fonctionnalisme anthropologique rencontré à la London School of Economics"
    ],
  },
  elias: {
    prenom: 'Norbert', nom: 'Elias', disc: ['Histoire — cinq siècles de traités de civilité', 'Psychologie — la formation de l\'économie psychique', 'Science politique — monopole fiscal et monopole de la violence'], biblio: ['R. Chartier, préface à La Civilisation des mœurs, Pocket, 1973', 'N. Heinich, La Sociologie de Norbert Elias, La Découverte, 1997'],
    portrait: { kind: 'monogram', alt: 'Monogramme de Norbert Elias', credit: "Photographies sous droits : aucune image libre disponible." },
    horsCorpus: [
      "Sigmund Freud — l'économie psychique et le refoulement, replacés dans une histoire longue",
      "Karl Mannheim — dont il fut l'assistant à Francfort, et la sociologie de la connaissance",
      "Johan Huizinga — l'histoire des mœurs et des sensibilités comme objet légitime"
    ],
  },
  merton: {
    prenom: 'Robert King', nom: 'Merton', disc: ['Histoire des sciences — le fondateur de la sociologie des sciences', 'Statistique — méthodes d\'enquête avec Lazarsfeld', 'Criminologie'], biblio: ['P. Sztompka, Robert K. Merton, Macmillan, 1986', 'M. Cherkaoui, Naissance d\'une science sociale, Droz, 1998'],
    portrait: { kind: 'monogram', alt: 'Monogramme de Robert K. Merton', credit: "Photographies sous droits : aucune image libre disponible." },
    horsCorpus: [
      "Pitirim Sorokin — son directeur à Harvard, contre l'ambition systématique duquel il se règle",
      "Paul Lazarsfeld — le compagnonnage méthodologique de Columbia, qui ancre la théorie dans l'enquête",
      "George Sarton — l'histoire des sciences, matrice de sa sociologie des sciences"
    ],
  },
  bourdieu: {
    prenom: 'Pierre', nom: 'Bourdieu', disc: ['Anthropologie — le terrain kabyle est sa matrice', 'Linguistique — critique de Saussure et Austin', 'Histoire de l\'art et esthétique', 'Statistique — analyse des correspondances'], biblio: ['P. Mounier, Pierre Bourdieu, une introduction, Pocket, 2001', 'L. Pinto, Pierre Bourdieu et la théorie du monde social, Albin Michel, 1998', 'B. Lahire (dir.), Le Travail sociologique de Pierre Bourdieu, La Découverte, 1999'],
    portrait: { kind: 'monogram', alt: 'Monogramme de Pierre Bourdieu', credit: "Photographies sous droits : aucune image libre disponible." },
    horsCorpus: [
      "Claude Lévi-Strauss — le structuralisme, matrice de départ puis cible de la critique de la règle",
      "Maurice Merleau-Ponty — le corps et l'habitude incorporée, socle phénoménologique de l'habitus",
      "Ludwig Wittgenstein — suivre une règle sans l'avoir formulée",
      "Gaston Bachelard — la rupture épistémologique, érigée en discipline de métier"
    ],
  },
  goffman: {
    prenom: 'Erving', nom: 'Goffman', disc: ['Théâtre et dramaturgie — la métaphore centrale', 'Ethnologie — observation directe à Shetland', 'Linguistique — analyse de conversation'], biblio: ['Y. Winkin, Erving Goffman : les moments et leurs hommes, Seuil, 1988', 'D. Cefaï & L. Perreau (dir.), Erving Goffman et l\'ordre de l\'interaction, CURAPP, 2012'],
    portrait: { kind: 'monogram', alt: 'Monogramme d’Erving Goffman', credit: "Photographies sous droits : aucune image libre disponible." },
    horsCorpus: [
      "George Herbert Mead — le soi qui se construit dans le regard d'autrui",
      "W. Lloyd Warner — son directeur à Chicago, et l'ethnographie des communautés",
      "Kenneth Burke — la dramaturgie comme grille d'analyse de l'action"
    ],
  },
  becker: {
    prenom: 'Howard Saul', nom: 'Becker', disc: ['Musique — musicien de jazz avant d\'être sociologue', 'Criminologie — refondation par l\'étiquetage', 'Histoire de l\'art — les mondes de l\'art comme travail collectif'], biblio: ['A. Blanc & A. Pessin (dir.), L\'Art du terrain, L\'Harmattan, 2004', 'H. Peretz, Les Méthodes en sociologie : l\'observation, La Découverte, 2004'],
    portrait: { kind: 'monogram', alt: 'Monogramme de Howard S. Becker', credit: "Photographies sous droits : aucune image libre disponible." },
    horsCorpus: [
      "Everett C. Hughes — son maître à Chicago, d'où vient la notion de carrière appliquée au travail",
      "Herbert Blumer — l'interactionnisme symbolique et le refus des variables abstraites",
      "Robert E. Park — la première école de Chicago et son terrain urbain"
    ],
  },
  boudon: {
    prenom: 'Raymond', nom: 'Boudon', disc: ['Économie — théorie du choix rationnel', 'Mathématiques — modélisation formelle des effets d\'agrégation', 'Philosophie morale — les raisons ordinaires du juste'], biblio: ['M. Cherkaoui, Le Désenchantement du monde social, Bord de l\'eau, 2010', 'A. Bouvier, Raymond Boudon, La Découverte, 2011'],
    portrait: { kind: 'monogram', alt: 'Monogramme de Raymond Boudon', credit: "Photographies sous droits : aucune image libre disponible." },
    horsCorpus: [
      "Paul Lazarsfeld — l'analyse quantitative apprise à Columbia",
      "Karl Popper — l'individualisme méthodologique et l'explication par les raisons des acteurs",
      "Herbert Simon — la rationalité limitée, qui rend le calcul plausible sans le rendre parfait"
    ],
  },
  boltanski: {
    prenom: 'Luc', nom: 'Boltanski', disc: ['Philosophie morale — les grammaires du juste', 'Sciences de gestion — la littérature managériale comme corpus', 'Sciences politiques — critique et institutions'], biblio: ['B. Frère, Le Tournant de la théorie critique, Desclée de Brouwer, 2015', 'M. Nachi, Introduction à la sociologie pragmatique, Armand Colin, 2006'],
    portrait: { kind: 'monogram', alt: 'Monogramme de Luc Boltanski', credit: "Photographies sous droits : aucune image libre disponible." },
    horsCorpus: [
      "Paul Ricœur — l'herméneutique et la question du juste, contre une critique surplombante",
      "Harold Garfinkel et l'ethnométhodologie — les compétences ordinaires des acteurs prises au sérieux",
      "Michael Walzer — les sphères de justice, modèle des ordres de grandeur"
    ],
  },
  tocqueville: {
    prenom: 'Alexis', nom: 'de Tocqueville', disc: ['Science politique — le comparatisme institutionnel', 'Histoire — la Révolution relue par les continuités', 'Droit constitutionnel'], biblio: ['R. Aron, Les Étapes de la pensée sociologique, Gallimard, 1967', 'F. Furet, Penser la Révolution française, Gallimard, 1978'],
    portrait: { kind: 'photo', file: 'tocqueville', alt: 'Alexis de Tocqueville, portrait de 1850', credit: 'Portrait par Théodore Chassériau, 1850, château de Versailles — Wikimedia Commons, domaine public' },
    horsCorpus: [
      "Montesquieu — le comparatisme des régimes et l'attention aux mœurs plutôt qu'aux lois seules",
      "François Guizot — ses cours d'histoire de la civilisation en Europe, suivis à la Sorbonne",
      "Blaise Pascal — la lucidité sur l'inquiétude humaine, sensible dans les pages sur l'agitation démocratique",
      "Jean-Jacques Rousseau — l'égalité comme problème politique autant que comme fait social"
    ],
  },
  castel: {
    prenom: 'Robert', nom: 'Castel', disc: ["Histoire — l'histoire longue de l'assistance et du salariat, depuis l'Ancien Régime", "Psychiatrie — ses premiers travaux portent sur le pouvoir psychiatrique et l'internement", 'Droit social — la protection sociale comme construction juridique autant que politique'], biblio: ['N. Duvoux, Robert Castel, La Découverte, 2015', 'S. Paugam (dir.), Repenser la solidarité, PUF, 2007'],
    portrait: { kind: 'monogram', alt: 'Monogramme de Robert Castel', credit: "Photographies sous droits : aucune image libre disponible." },
    horsCorpus: [
      "Michel Foucault — dont Castel fut proche dans les années 1970, avant de s'éloigner de l'analyse du pouvoir vers l'histoire du salariat",
      "Karl Polanyi — la marchandisation du travail, et ce qu'une société doit en protéger",
    ],
  },
};

export const EXTRA_EDGES = [['weber', 'bourdieu', 0], ['durkheim', 'merton', 0], ['merton', 'becker', 1], ['elias', 'bourdieu', 0], ['francfort', 'bourdieu', 0], ['weber', 'boudon', 0], ['durkheim', 'castel', 0]];

