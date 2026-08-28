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
  {
    id: 'exclusion-lenoir',
    t: "Théorie de l'exclusion (catégories exclues)",
    auteur: 'René Lenoir',
    annee: '1974',
    oeuvre: 'Les Exclus : un Français sur dix',
    d: "Une population hétérogène — handicapés, personnes âgées dépendantes, inadaptés, marginaux, délinquants — resterait à l'écart de la croissance et de la protection sociale, quelle que soit la cause propre à chaque situation.",
    detail:
      "Lenoir, alors secrétaire d'État à l'Action sociale, additionne des catégories administratives déjà comptées séparément pour en tirer un chiffre choc — un Français sur dix — et donner au mot « exclusion » sa première consécration politique. La notion doit son succès à sa souplesse : elle regroupe des situations très différentes sous un même terme, ce qui en fera à la fois la force de mobilisation et la principale faiblesse conceptuelle, reprochée dès les années 1990 par les chercheurs qui lui préfèrent des notions plus précises comme la désaffiliation de Castel.",
    concepts: ['anomie'],
  },
  {
    id: 'desaffiliation-castel',
    t: 'Théorie de la désaffiliation',
    auteur: 'Robert Castel',
    annee: '1995',
    oeuvre: 'Les Métamorphoses de la question sociale',
    d: "L'exclusion n'est pas un état mais l'aboutissement d'une trajectoire qui combine la perte du travail et la perte des liens sociaux — deux processus qui, réunis, mènent bien plus loin que chacun séparément.",
    detail:
      "Castel refuse de traiter l'exclusion comme un bloc homogène et lui préfère une cartographie en zones — intégration, vulnérabilité, désaffiliation — selon que le travail et les liens sociaux tiennent, se fragilisent ou manquent tous les deux à la fois. La désaffiliation n'est donc jamais un point de départ : c'est un processus, réversible en principe, qui décrit comment on s'en éloigne ou s'en approche.",
    concepts: ['anomie', 'capital-social'],
  },
  {
    id: 'institution-totale',
    t: "Théorie de l'institution totale",
    auteur: 'Erving Goffman',
    annee: '1961',
    oeuvre: 'Asiles (Asylums)',
    d: "Un lieu qui organise entièrement la vie de ceux qui y séjournent — hôpital psychiatrique, prison, caserne, couvent — finit par remplacer leur identité antérieure par celle que l'institution leur assigne.",
    detail:
      "Goffman observe un hôpital psychiatrique de l'intérieur et y décrit un même mécanisme derrière des murs très différents : la coupure d'avec le monde extérieur, l'emploi du temps entièrement réglé par l'institution, et une « mortification du moi » qui dépouille l'arrivant de ses attributs antérieurs — ses vêtements, son nom d'usage, son rôle social — avant de lui en attribuer de nouveaux. La sortie ne suffit pas à annuler cette empreinte, ce qui rend le retour à la vie ordinaire plus difficile que la seule fin du séjour ne le laisserait penser.",
    concepts: ['role-et-attentes', 'stigmate'],
  },
  {
    id: 'theorie-de-la-justice-rawls',
    t: 'Théorie de la justice',
    auteur: 'John Rawls',
    annee: '1971',
    oeuvre: 'A Theory of Justice',
    d: "Une société juste tolère des inégalités seulement si elles profitent d'abord aux plus désavantagés, et si les positions avantageuses restent accessibles à tous dans des conditions d'égalité des chances équitable.",
    detail:
      "Rawls imagine des personnes qui choisiraient les règles d'une société sans savoir quelle place elles y occuperont — le « voile d'ignorance ». Ce dispositif de pensée les conduit, selon lui, à accepter deux principes : des libertés de base égales pour tous, puis des inégalités économiques et sociales tolérées seulement si elles sont attachées à des positions ouvertes à tous et si elles profitent en premier lieu aux membres les moins favorisés de la société — le « principe de différence ».",
    concepts: ['egalisation-des-conditions', 'meritocratie'],
  },
  {
    id: 'courbe-de-kuznets',
    t: 'Courbe de Kuznets',
    auteur: 'Simon Kuznets',
    annee: '1955',
    oeuvre: 'Economic Growth and Income Inequality',
    d: "Les inégalités de revenus augmenteraient d'abord avec le développement économique, avant de refluer une fois un certain niveau de richesse atteint — une courbe en cloche inversée.",
    detail:
      "Kuznets propose l'hypothèse à partir de données encore fragmentaires sur les États-Unis et le Royaume-Uni, pour expliquer pourquoi les inégalités semblaient reculer au XXᵉ siècle après avoir progressé au moment de l'industrialisation. L'hypothèse a durablement structuré le débat économique sur la croissance et les inégalités, avant d'être largement contestée depuis les années 1980 : les inégalités sont reparties à la hausse dans plusieurs pays riches, sans que la croissance ait cessé.",
    concepts: ['capital-economique'],
  },
  {
    id: 'capital-au-21e-siecle-piketty',
    t: 'Le rendement du capital contre la croissance (r > g)',
    auteur: 'Thomas Piketty',
    annee: '2013',
    oeuvre: 'Le Capital au XXIᵉ siècle',
    d: "Quand le rendement du capital dépasse durablement le taux de croissance de l'économie, le patrimoine hérité tend mécaniquement à croître plus vite que les revenus du travail, et les inégalités de patrimoine à se creuser.",
    detail:
      "Piketty mobilise près de deux siècles de données fiscales dans une vingtaine de pays pour montrer que la réduction des inégalités observée au XXᵉ siècle doit beaucoup à des chocs historiques exceptionnels — guerres, inflation, taxation exceptionnelle — plutôt qu'à une tendance de long terme du capitalisme, qui pencherait au contraire vers une concentration croissante du patrimoine.",
    concepts: ['capital-economique', 'classe-sociale'],
  },
  {
    id: 'fonctions-latentes-emploi-jahoda',
    t: "Théorie de la privation des fonctions latentes de l'emploi",
    auteur: 'Marie Jahoda',
    annee: '1981',
    oeuvre: 'Work, Employment, and Unemployment',
    d: "L'emploi ne procure pas seulement un revenu : il structure le temps, impose des contacts sociaux réguliers, inscrit dans un but collectif, confère un statut et impose une activité — cinq fonctions latentes que le chômage prive d'un coup.",
    detail:
      "Jahoda distingue la fonction manifeste de l'emploi, gagner sa vie, de ses fonctions latentes, non recherchées pour elles-mêmes mais tout aussi nécessaires au bien-être : sans elles, une personne au chômage doit reconstruire seule une structure que l'emploi fournissait auparavant sans qu'elle ait à y penser — ce que peu de personnes parviennent à faire durablement, d'où la détresse psychologique très généralement observée au-delà de la seule perte de revenu.",
    concepts: ['anomie', 'role-et-attentes'],
  },
  {
    id: 'marche-du-travail-segmente-doeringer-piore',
    t: 'Théorie du marché du travail segmenté',
    auteur: 'Peter Doeringer et Michael Piore',
    annee: '1971',
    oeuvre: 'Internal Labor Markets and Manpower Analysis',
    d: "Le marché du travail se scinde en un segment primaire, aux emplois stables et progressifs, et un segment secondaire, aux emplois précaires et sans perspective — deux marchés qui communiquent mal entre eux.",
    detail:
      "La théorie s'oppose à l'idée d'un marché du travail unique où la seule qualification déterminerait l'accès à un emploi stable : Doeringer et Piore montrent que les grandes entreprises organisent des marchés internes, avec leurs propres règles de promotion, largement fermés à qui n'y est pas déjà entré par un premier emploi stable.",
    concepts: ['classe-sociale', 'domination-legitime'],
  },
  {
    id: 'destruction-creatrice-schumpeter',
    t: 'Destruction créatrice',
    auteur: 'Joseph Schumpeter',
    annee: '1942',
    oeuvre: 'Capitalisme, socialisme et démocratie',
    d: "L'innovation économique ne se contente pas d'ajouter de nouvelles activités : elle détruit continûment les précédentes, dans un même mouvement — ce qui fait le dynamisme du capitalisme autant que son instabilité pour ceux qui en subissent le côté destructeur.",
    detail:
      "Schumpeter voit dans ce processus le vrai moteur du capitalisme, plus que la concurrence par les prix : chaque vague d'innovation (le rail, l'électricité, aujourd'hui le numérique) balaie des pans entiers d'activités antérieures. Le solde net d'emplois est positif sur longue période, mais rien ne garantit que ceux dont l'emploi est détruit soient ceux qui profitent des emplois créés ailleurs, dans d'autres secteurs ou d'autres régions.",
    concepts: ['capital-economique'],
  },
  {
    id: 'nature-du-prejuge-allport',
    t: 'Théorie du préjugé',
    auteur: 'Gordon Allport',
    annee: '1954',
    oeuvre: 'The Nature of Prejudice',
    d: "Catégoriser autrui est une opération mentale ordinaire et nécessaire ; le préjugé apparaît quand cette catégorie s'accompagne par avance d'un jugement défavorable, entretenu même face à des preuves contraires.",
    detail:
      "Allport distingue le simple fait de catégoriser — indispensable pour traiter rapidement un monde social trop complexe — du préjugé proprement dit, qui fige la catégorie en jugement hostile résistant à l'expérience individuelle. Il propose aussi l'hypothèse du contact : sous certaines conditions (statut égal, but commun, soutien institutionnel), le contact entre groupes réduit le préjugé plutôt qu'il ne l'attise, une hypothèse depuis largement testée et globalement confirmée.",
    concepts: ['etiquetage'],
  },
  {
    id: 'discrimination-statistique-arrow-phelps',
    t: 'Théorie de la discrimination statistique',
    auteur: 'Kenneth Arrow et Edmund Phelps',
    annee: '1972–1973',
    oeuvre: "The Theory of Discrimination / The Statistical Theory of Racism and Sexism",
    d: "Un employeur incertain de la productivité réelle d'un candidat peut se fier à des caractéristiques de groupe — genre, origine, âge — comme s'il s'agissait d'une information individuelle, sans qu'aucune hostilité personnelle n'intervienne.",
    detail:
      "Arrow et Phelps formalisent, indépendamment l'un de l'autre et presque simultanément, un mécanisme qui ne suppose aucun préjugé hostile : il suffit qu'un employeur traite une moyenne statistique de groupe comme un indicateur individuel fiable pour reconduire une inégalité de traitement, à chaque décision prise séparément et rationnellement de son point de vue.",
    concepts: ['ideal-type'],
  },
  {
    id: 'racisme-institutionnel-carmichael-hamilton',
    t: 'Théorie du racisme institutionnel',
    auteur: 'Stokely Carmichael et Charles Hamilton',
    annee: '1967',
    oeuvre: 'Black Power: The Politics of Liberation',
    d: "Une discrimination peut se reproduire par le seul fonctionnement normal des institutions — règles, procédures, routines — sans qu'aucun individu n'ait besoin d'exprimer la moindre hostilité pour que le résultat reste inégal.",
    detail:
      "Carmichael et Hamilton distinguent le racisme individuel, un acte identifiable commis par une personne, du racisme institutionnel, inscrit dans le fonctionnement ordinaire d'organisations qui produisent des résultats inégaux sans discrimination déclarée à aucune étape isolée — une distinction reprise depuis sous le terme plus large de discrimination systémique, étendu à d'autres critères que la seule origine.",
    concepts: ['domination-legitime', 'violence-symbolique'],
  },
  {
    id: 'intersectionnalite-crenshaw',
    t: 'Théorie de l’intersectionnalité',
    auteur: 'Kimberlé Crenshaw',
    annee: '1989',
    oeuvre: 'Demarginalizing the Intersection of Race and Sex',
    d: "Certaines personnes subissent une discrimination qui ne se réduit à la somme d'aucun critère pris isolément : une femme noire peut être discriminée d'une façon spécifique, ni identique à celle que subit une femme blanche, ni à celle que subit un homme noir.",
    detail:
      "Crenshaw part de plaintes rejetées par des tribunaux américains qui n'admettaient une discrimination que fondée sur un seul critère à la fois — le genre, ou la race — et montre qu'un cadre juridique conçu ainsi laisse sans protection les personnes dont la discrimination résulte précisément du croisement de plusieurs critères. La notion s'est depuis étendue à toute combinaison de critères — origine, classe, handicap, orientation sexuelle — dont l'effet combiné diffère de chacun pris séparément.",
    concepts: ['etiquetage', 'domination-legitime'],
  },
  {
    id: 'gentrification-glass',
    t: 'Théorie de la gentrification',
    auteur: 'Ruth Glass',
    annee: '1964',
    oeuvre: 'London: Aspects of Change',
    d: "Quand des ménages plus aisés s'installent dans un quartier populaire, ils en transforment le caractère au point d'en évincer progressivement les habitants d'origine — un mouvement que Glass baptise du nom de la petite noblesse anglaise, la gentry.",
    detail:
      "Glass observe ce mouvement dans plusieurs quartiers ouvriers de Londres, où des ménages de la classe moyenne rachètent et rénovent des logements anciens : les prix et le standing du quartier montent, jusqu'à ce que les habitants historiques, souvent locataires, ne puissent plus s'y maintenir. Le terme s'est depuis exporté bien au-delà de Londres, pour désigner un mouvement observé dans la plupart des grandes métropoles mondiales.",
    concepts: ['capital-economique', 'capital-culturel'],
  },
  {
    id: 'inadequation-spatiale-kain',
    t: "Hypothèse de l'inadéquation spatiale",
    auteur: 'John Kain',
    annee: '1968',
    oeuvre: 'Housing Segregation, Negro Employment, and Metropolitan Decentralization',
    d: "La ségrégation résidentielle et le déplacement des emplois vers des zones où les ménages modestes ne peuvent pas se loger suffisent, à eux seuls, à expliquer une partie du chômage et des bas salaires observés chez les populations qui en résultent captives.",
    detail:
      "Kain observe qu'aux États-Unis, les emplois se sont déplacés vers des banlieues où l'accès au logement restait fermé à une partie de la population par la ségrégation résidentielle : le simple lieu de résidence devient alors un obstacle à l'emploi, indépendamment de toute discrimination directe à l'embauche.",
    concepts: ['capital-social', 'position-sociale'],
  },
  {
    id: 'ecole-de-chicago-park-burgess',
    t: 'Modèle des zones concentriques',
    auteur: 'Robert Park et Ernest Burgess',
    annee: '1925',
    oeuvre: 'The City',
    d: "Une ville se structure en anneaux concentriques autour de son centre d'affaires, chaque anneau étant occupé par une population différente selon son ancienneté d'installation et ses ressources, dans un mouvement constant de succession d'un groupe par un autre.",
    detail:
      "Park et Burgess, fondateurs de l'école de Chicago, cartographient la ville comme un laboratoire social : le centre concentre les activités économiques, une zone de transition dégradée accueille les nouveaux arrivants les plus pauvres, puis des anneaux successifs de plus en plus résidentiels et aisés s'étendent vers la périphérie. Le modèle, pensé pour Chicago dans les années 1920, a depuis été largement nuancé, mais reste la matrice de toute la sociologie urbaine ultérieure.",
    concepts: ['blasement-urbain'],
  },
  {
    id: 'precariat-standing',
    t: 'Le précariat',
    auteur: 'Guy Standing',
    annee: '2011',
    oeuvre: 'The Precariat: The New Dangerous Class',
    d: "Une nouvelle classe sociale émergerait, définie non par son revenu mais par l'instabilité de sa situation — contrats courts, absence de protection, incertitude permanente sur l'avenir — distincte à la fois du salariat stable et du sous-prolétariat traditionnel.",
    detail:
      "Standing part du constat que la flexibilisation du marché du travail a produit, à travers le monde, un groupe nombreux qui ne se reconnaît ni dans la classe ouvrière traditionnelle, protégée par un statut stable, ni dans le chômage pur : ni pleinement intégré, ni totalement exclu, mais maintenu dans une instabilité chronique qui touche l'emploi, le logement et le rapport au temps lui-même. Il en fait une classe en formation, potentiellement porteuse d'une conflictualité politique nouvelle.",
    concepts: ['nouvel-esprit-du-capitalisme', 'classe-sociale'],
  },
  {
    id: 'precarite-domination-bourdieu',
    t: 'La précarité comme mode de domination',
    auteur: 'Pierre Bourdieu',
    annee: '1997',
    oeuvre: 'Contre-feux',
    d: "Faire régner l'insécurité de l'emploi devient un instrument de gouvernement des conduites : un salarié qui peut être remplacé à tout moment s'autodiscipline sans qu'il soit besoin de le contraindre ouvertement.",
    detail:
      "Bourdieu soutient, dans un discours prononcé à Grenoble puis largement diffusé, que la précarité généralisée n'est pas seulement un effet secondaire indésirable de la flexibilisation économique, mais un mode de domination à part entière : la peur de perdre un emploi instable discipline plus efficacement qu'une hiérarchie déclarée, en rendant chacun responsable de sa propre docilité.",
    concepts: ['domination-legitime', 'violence-symbolique'],
  },
];
