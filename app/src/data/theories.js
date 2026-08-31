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
  {
    id: 'desengagement-cumming-henry',
    t: 'Théorie du désengagement',
    auteur: 'Elaine Cumming et William Henry',
    annee: '1961',
    oeuvre: 'Growing Old: The Process of Disengagement',
    d: "Vieillir consisterait en un retrait progressif et mutuel entre l'individu vieillissant et la société qui l'entoure — un désengagement normal, attendu des deux côtés, plutôt qu'une exclusion subie.",
    detail:
      "Cumming et Henry avancent que la réduction des interactions et des rôles sociaux avec l'âge sert une fonction pour l'individu, qui se prépare ainsi psychologiquement à sa propre fin, comme pour la société, qui libère des positions au profit des générations plus jeunes. La thèse a connu un immense retentissement, avant d'être largement contestée : elle a été accusée de naturaliser la mise à l'écart des personnes âgées en la présentant comme un choix partagé plutôt que comme un effet de structures — perte d'emploi imposée, absence d'opportunités de sociabilité — qui restreignent les options bien avant que le désengagement ne devienne un vécu.",
    concepts: ['role-et-attentes'],
  },
  {
    id: 'theorie-de-l-activite-havighurst',
    t: "Théorie de l'activité",
    auteur: 'Robert J. Havighurst',
    annee: '1961',
    oeuvre: 'Successful Aging',
    d: "À l'inverse du désengagement, bien vieillir supposerait de maintenir le plus longtemps possible les activités, les rôles et les relations qui structuraient la vie adulte, en en trouvant de nouveaux quand les anciens disparaissent.",
    detail:
      "Havighurst pose la question du « bien vieillir » en termes de satisfaction et de rôles maintenus plutôt que de retrait accepté ; Lemon, Bengtson et Peterson formalisent la thèse en 1972 en la reliant explicitement à la satisfaction de vie mesurée. Le débat entre désengagement et activité structure une bonne part de la sociologie du vieillissement de l'après-guerre, sans qu'aucune des deux thèses ne rende compte à elle seule de la diversité des trajectoires de fin de vie active.",
    concepts: ['role-et-attentes'],
  },
  {
    id: 'solitude-des-mourants-elias',
    t: 'La solitude des mourants',
    auteur: 'Norbert Elias',
    annee: '1982',
    oeuvre: 'La Solitude des mourants',
    d: "Le même mouvement qui a repoussé la violence et les fonctions corporelles hors du regard social — le processus de civilisation — repousse aussi la vieillesse avancée et la mort, isolant les mourants au moment où ils auraient le plus besoin de proximité humaine.",
    detail:
      "Elias observe que les sociétés modernes, à mesure qu'elles médicalisent et institutionnalisent la fin de vie, retirent aux mourants et aux très âgés une part du contact et de la chaleur humaine que des sociétés moins hygiénistes leur accordaient davantage. Ce n'est pas la mort elle-même qui se serait faite plus difficile, mais la place laissée à ceux qui l'approchent — cachée dans des établissements spécialisés, à distance de la vie ordinaire.",
    concepts: ['configuration'],
  },
  {
    id: 'cycle-des-relations-raciales-park',
    t: 'Cycle des relations raciales',
    auteur: 'Robert E. Park',
    annee: '1926',
    oeuvre: 'Our Racial Frontier on the Pacific',
    d: "Le contact entre deux groupes d'origine différente suivrait une séquence prévisible en quatre temps — contact, compétition, accommodation, assimilation — qui mène presque inévitablement, à terme, à l'absorption du groupe arrivé par le groupe d'accueil.",
    detail:
      "Park propose ce cycle comme une régularité quasi naturelle des relations entre groupes, à l'échelle de plusieurs générations : un premier contact souvent pacifique, une compétition pour les mêmes ressources qui ravive les tensions, un compromis pratique qui organise la coexistence sans effacer la hiérarchie, puis une assimilation progressive du groupe minoritaire. Le modèle, très influent dans la première moitié du XXᵉ siècle, a depuis été critiqué pour son caractère trop linéaire et son présupposé que l'assimilation constitue un aboutissement naturel et souhaitable, plutôt qu'une issue parmi d'autres.",
    concepts: ['etiquetage'],
  },
  {
    id: 'assimilation-gordon',
    t: "Théorie de l'assimilation",
    auteur: 'Milton Gordon',
    annee: '1964',
    oeuvre: 'Assimilation in American Life',
    d: "L'assimilation n'est pas un seul mouvement mais plusieurs, qui peuvent avancer à des rythmes très différents chez une même personne : l'acculturation aux usages du pays d'accueil n'entraîne pas automatiquement une participation sociale pleine, ni encore moins une identification complète au nouveau groupe.",
    detail:
      "Gordon distingue notamment l'assimilation culturelle (adopter la langue et les usages), l'assimilation structurelle (participer aux mêmes institutions et cercles sociaux que le groupe majoritaire), l'assimilation matrimoniale (former des couples mixtes) et l'assimilation identificationnelle (se sentir soi-même membre du groupe d'accueil). Une personne peut avoir pleinement franchi la première étape sans jamais atteindre les suivantes, ce qui explique qu'une acculturation linguistique et vestimentaire complète coexiste souvent avec une ségrégation sociale persistante.",
    concepts: ['violence-symbolique'],
  },
  {
    id: 'assimilation-segmentee-portes-zhou',
    t: "Théorie de l'assimilation segmentée",
    auteur: 'Alejandro Portes et Min Zhou',
    annee: '1993',
    oeuvre: 'The New Second Generation: Segmented Assimilation and Its Variants',
    d: "Les enfants d'immigrés ne suivent pas tous la même trajectoire que le modèle classique de l'assimilation le supposait : selon les ressources dont dispose leur famille et leur communauté d'origine, ils peuvent connaître une ascension sociale rapide, un déclassement vers des positions durablement précaires, ou une réussite qui s'appuie précisément sur le maintien des liens communautaires plutôt que sur leur abandon.",
    detail:
      "Portes et Zhou observent, aux États-Unis, trois trajectoires distinctes de la deuxième génération : une assimilation ascendante vers les classes moyennes, une assimilation descendante vers une position proche de celle des minorités les plus défavorisées du pays d'accueil, et une acculturation sélective qui combine réussite scolaire et économique avec le maintien des valeurs et des réseaux d'origine. Le facteur déterminant n'est pas le désir d'intégration des familles, mais le capital économique, social et communautaire dont elles disposent au moment de l'installation.",
    concepts: ['capital-social', 'capital-culturel'],
  },
  {
    id: 'transnationalisme-basch-glick-schiller',
    t: 'Transnationalisme migratoire',
    auteur: 'Linda Basch, Nina Glick Schiller et Cristina Szanton Blanc',
    annee: '1994',
    oeuvre: 'Nations Unbound',
    d: "Une part croissante des personnes immigrées ne choisit plus entre le pays d'origine et le pays d'accueil : elles construisent et entretiennent des liens sociaux, économiques et politiques actifs dans les deux à la fois, plutôt que de rompre avec l'un pour s'ancrer dans l'autre.",
    detail:
      "Les auteures montrent que les migrants contemporains, facilités par le transport et les communications à distance, peuvent voter, envoyer de l'argent, investir, ou peser sur la vie politique de leur pays d'origine tout en participant pleinement à la vie économique et sociale du pays d'accueil — une double présence continue que les modèles classiques de l'assimilation, pensés pour une rupture unique et définitive, ne permettaient pas de décrire.",
    concepts: ['formes-de-socialisation'],
  },
  {
    id: 'reproduction-bourdieu-passeron',
    t: 'Théorie de la reproduction scolaire',
    auteur: 'Pierre Bourdieu et Jean-Claude Passeron',
    annee: '1970',
    oeuvre: 'La Reproduction',
    d: "L'école ne corrige pas les inégalités sociales de départ : elle les convertit en mérite scolaire, sous une forme — la note, le diplôme — qui en efface l'origine et les rend d'autant plus difficiles à contester.",
    detail:
      "Bourdieu et Passeron montrent que les épreuves scolaires, présentées comme neutres, valident en réalité un capital culturel déjà transmis en famille avant même l'entrée à l'école. Le décrochage s'inscrit dans cette théorie comme la forme la plus radicale d'un désajustement entre l'habitus scolaire attendu et celui que l'élève a reçu : plutôt qu'une défaillance individuelle, une sortie du jeu que l'institution a elle-même rendu improbable de gagner.",
    concepts: ['capital-culturel', 'habitus', 'violence-symbolique'],
  },
  {
    id: 'inegalite-des-chances-boudon',
    t: "Effets primaires et effets secondaires de l'origine sociale",
    auteur: 'Raymond Boudon',
    annee: '1973',
    oeuvre: "L'Inégalité des chances",
    d: "Deux mécanismes distincts produisent l'inégalité scolaire : un effet primaire, l'écart de résultats scolaires selon l'origine sociale, et un effet secondaire, l'écart de choix d'orientation à résultats scolaires comparables.",
    detail:
      "Boudon montre qu'à niveau scolaire identique, une famille modeste renonce plus souvent à une filière longue ou prestigieuse qu'une famille aisée, parce qu'elle évalue différemment le coût certain et le bénéfice incertain de la poursuite d'études — un calcul rationnel, pas un manque d'ambition. L'effet secondaire, invisible dans les seules statistiques de résultats, explique une part substantielle des écarts d'orientation, et donc du risque de décrochage en filière subie plutôt que choisie.",
    concepts: ['individualisme-methodologique', 'effets-pervers'],
  },
  {
    id: 'participation-identification-finn',
    t: 'Modèle participation-identification',
    auteur: 'Jeremy D. Finn',
    annee: '1989',
    oeuvre: 'Withdrawing from School',
    d: "Le décrochage n'est presque jamais un événement isolé : c'est l'aboutissement d'une spirale, où une participation scolaire qui faiblit affaiblit à son tour l'identification à l'école, jusqu'à ce que le lien se rompe.",
    detail:
      "Finn décrit un cycle qui s'auto-entretient : moins un élève participe en classe, moins il obtient de résultats satisfaisants ; moins il en obtient, moins il se sent reconnu et à sa place dans l'institution ; moins il s'y sent à sa place, moins il y participe. Le modèle déplace l'explication du décrochage d'un trait individuel (le manque de motivation) vers une dynamique relationnelle entre l'élève et l'école, qui peut en principe être interrompue à plusieurs étapes de la spirale.",
    concepts: ['anomie'],
  },
  {
    id: 'violence-structurelle-galtung',
    t: 'Violence structurelle et culturelle',
    auteur: 'Johan Galtung',
    annee: '1969–1990',
    oeuvre: 'Violence, Peace, and Peace Research',
    d: "La violence ne se réduit pas à un acte direct commis par un agresseur identifiable : elle peut être structurelle, logée dans l'organisation d'une société qui prive durablement certains de ressources ou de droits, ou culturelle, dans les représentations qui la rendent acceptable.",
    detail:
      "Galtung distingue la violence directe, un acte identifiable commis par un ou plusieurs auteurs, de la violence structurelle, un tort produit par le fonctionnement ordinaire d'institutions ou d'un système économique sans qu'aucun individu n'ait besoin d'agir avec intention de nuire — la faim évitable dans un monde d'abondance en est son exemple le plus cité. En 1990, il ajoute la violence culturelle : les aspects d'une culture (religion, idéologie, langage) qui servent à légitimer la violence directe ou structurelle, en la rendant normale plutôt que scandaleuse.",
    concepts: ['violence-symbolique'],
  },
  {
    id: 'monopole-violence-legitime-weber',
    t: 'Le monopole de la violence physique légitime',
    auteur: 'Max Weber',
    annee: '1919',
    oeuvre: 'Le Savant et le politique',
    d: "Un État se définit précisément par le fait qu'il revendique avec succès, sur un territoire donné, le monopole de l'usage légitime de la violence physique — tout autre usage de la force devant, en principe, recevoir son autorisation ou sa délégation.",
    detail:
      "Weber ne dit pas que l'État emploie toujours la violence, mais qu'il en détient seul, en théorie, le droit d'en juger la légitimité : la police et la justice exercent une force que le droit qualifie de légitime, quand la même force exercée par un particulier devient un délit. La frontière entre les deux, jamais totalement stabilisée, reste un objet de contestation permanent — sur l'usage de la force publique comme sur ce que la loi tolère au nom de la légitime défense.",
    concepts: ['domination-legitime', 'pouvoir'],
  },
  {
    id: 'domination-masculine-bourdieu',
    t: 'La domination masculine',
    auteur: 'Pierre Bourdieu',
    annee: '1998',
    oeuvre: 'La Domination masculine',
    d: "La hiérarchie entre les sexes se maintient moins par la contrainte ouverte que par son incorporation par les dominés eux-mêmes, au point de paraître aller de soi — la forme la plus achevée de la violence symbolique.",
    detail:
      "Bourdieu montre que les catégories mêmes avec lesquelles chacun pense la différence des sexes (actif/passif, dehors/dedans, fort/faible) sont déjà façonnées par le rapport de domination qu'elles servent à justifier, ce qui rend cette domination particulièrement difficile à percevoir de l'intérieur. La violence physique contre les femmes n'en est, dans cette lecture, que la manifestation la plus visible d'un rapport plus large, entretenu aussi par le langage, le corps et la répartition ordinaire des rôles.",
    concepts: ['violence-symbolique', 'habitus'],
  },
  {
    id: 'processus-de-civilisation-elias-violence',
    t: 'Le recul historique de la violence interpersonnelle',
    auteur: 'Norbert Elias',
    annee: '1939',
    oeuvre: 'Über den Prozess der Zivilisation',
    d: "Sur la longue durée, la violence interpersonnelle directe recule en Europe à mesure que les États centralisent le monopole de la force et que les individus intériorisent un contrôle de soi qu'une contrainte extérieure leur imposait auparavant.",
    detail:
      "Elias relie deux mouvements simultanés : la monopolisation de la violence légitime par des États de plus en plus centralisés retire aux particuliers le droit de se faire justice eux-mêmes, tandis que l'allongement des chaînes d'interdépendance sociale rend chacun plus attentif aux conséquences de ses propres emportements. Le résultat n'est pas une disparition de la violence, mais son déplacement — vers des formes plus indirectes, plus différées dans le temps, et plus honteuses lorsqu'elle éclate malgré tout au grand jour.",
    concepts: ['processus-de-civilisation', 'configuration', 'monopole-de-la-violence', 'autocontrole'],
  },
  {
    id: 'loi-des-soins-inverses-tudor-hart',
    t: 'Loi des soins inverses',
    auteur: 'Julian Tudor Hart',
    annee: '1971',
    oeuvre: 'The Inverse Care Law (The Lancet)',
    d: "La disponibilité d'une bonne offre de soins tend à varier en sens inverse des besoins de la population qu'elle dessert : ceux qui en auraient le plus besoin sont souvent ceux à qui elle est le moins accessible.",
    detail:
      "Médecin généraliste dans un bassin minier gallois, Tudor Hart observe que les zones les plus pauvres, où les besoins de santé sont statistiquement les plus élevés, attirent le moins de médecins, disposent des équipements les plus anciens et des listes de patients les plus chargées — un mécanisme de marché qui aggrave, plutôt qu'il ne corrige, les inégalités de santé préexistantes. La loi reste citée aujourd'hui pour décrire la logique des déserts médicaux, y compris dans des systèmes de santé très différents du sien.",
    concepts: ['ressources-sociales'],
  },
  {
    id: 'modele-comportemental-andersen',
    t: 'Modèle comportemental du recours aux soins',
    auteur: 'Ronald Andersen',
    annee: '1968–1995',
    oeuvre: 'Behavioral Model of Health Services Use',
    d: "Le recours effectif aux soins d'une personne dépend de trois familles de facteurs distincts : des facteurs prédisposants (âge, diplôme, croyances liées à la santé), des facteurs facilitants (revenu, couverture sociale, distance à parcourir) et le besoin de soins lui-même, ressenti ou objectivement évalué.",
    detail:
      "Andersen montre qu'un besoin de soins réel ne suffit pas à produire un recours effectif : encore faut-il que la personne soit prédisposée à consulter et dispose des moyens concrets de le faire. Le modèle, révisé à plusieurs reprises depuis 1968, reste la grille de lecture la plus utilisée en sociologie de la santé pour distinguer ce qui, dans un renoncement aux soins, relève du manque de ressources plutôt que d'un choix ou d'une méconnaissance.",
    concepts: ['individualisme-methodologique'],
  },
  {
    id: 'nemesis-medicale-illich',
    t: 'Némésis médicale',
    auteur: 'Ivan Illich',
    annee: '1975',
    oeuvre: 'Némésis médicale : l’expropriation de la santé',
    d: "Au-delà d'un certain seuil, la médecine moderne produirait elle-même une part de la maladie qu'elle prétend combattre, et priverait les individus de la capacité à gérer eux-mêmes leur santé, leur douleur et leur mort.",
    detail:
      "Illich distingue trois formes d'iatrogénèse : clinique (les effets indésirables directs des soins), sociale (la dépendance croissante envers l'institution médicale pour des questions autrefois gérées socialement) et culturelle (la perte de la capacité collective à affronter la souffrance et la mort sans médiation médicale). La thèse, polémique dès sa publication, a nourri durablement la critique sociologique de la médicalisation croissante de l'existence.",
    concepts: ['fonction-latente'],
  },
  {
    id: 'dimensions-de-l-acces-aux-soins-penchansky-thomas',
    t: "Dimensions de l'accès aux soins",
    auteur: 'Ronald Penchansky et J. William Thomas',
    annee: '1981',
    oeuvre: 'The Concept of Access: Definition and Relationship to Consumer Satisfaction',
    d: "L'accès aux soins ne se réduit pas à une seule barrière : il se décompose en plusieurs dimensions distinctes — la disponibilité de l'offre, l'accessibilité géographique, financière, administrative et culturelle — qui peuvent chacune faire obstacle indépendamment des autres.",
    detail:
      "Penchansky et Thomas montrent qu'une offre de soins disponible en théorie peut rester largement inaccessible en pratique si l'une seulement de ces dimensions fait défaut : un centre de santé proche et abordable, mais dont les horaires ou la langue ne conviennent pas, produit le même renoncement qu'une offre absente. Le cadre s'est depuis enrichi d'une dimension numérique, à mesure que la prise de rendez-vous et la téléconsultation se sont généralisées.",
    concepts: ['ressources-sociales'],
  },
];
