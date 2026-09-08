/**
 * Les processus sociaux : des transformations dans le temps, distinctes des
 * phénomènes qu'elles produisent souvent.
 *
 * Un phénomène (`phenomenes.js`) est un état — le chômage, la pauvreté. Un
 * processus est le mécanisme, la trajectoire par laquelle une situation
 * évolue vers un état — la précarisation est le processus, la précarité
 * l'état qui peut en résulter. Les deux se recoupent sans se confondre :
 * un même processus peut mener à plusieurs phénomènes, un même phénomène
 * peut résulter de plusieurs processus.
 *
 * Règles de rédaction, par symétrie avec `phenomenes.js` :
 * - `concepts` ne cite que des fiches du corpus (cliquables) ; `notions` que
 *   des termes qui n'en ont pas (texte libre « Terme — ce qui le relie »,
 *   non cliquable).
 * - `phenomenes` cite des identifiants de `phenomenes.js` : l'état, ou l'un
 *   des états, vers lequel le processus tend le plus souvent. Un processus
 *   peut n'en citer aucun s'il ne débouche pas sur un phénomène déjà présent.
 * - `etapes` déroule la trajectoire type, du déclencheur à l'état stabilisé
 *   — ce que `phenomenes.js` n'a pas, puisqu'un phénomène est un état et non
 *   une séquence.
 * - Dix processus, un par terme demandé — à la différence des phénomènes,
 *   où des quasi-synonymes avaient été consolidés en une seule fiche. Un
 *   processus proche d'un autre (déclassement / déclin, par exemple) garde
 *   ici sa propre fiche, à la demande explicite.
 */

/** Catégories d'affichage, dans l'ordre de la liste. */
export const CATEGORIES_PROCESSUS = [
  {
    id: 'reproduction',
    t: 'Reproduction et transmission',
    d: "Ce qui se retransmet d'une génération à l'autre, sans qu'aucune loi ne l'impose.",
  },
  {
    id: 'trajectoires',
    t: 'Mobilité et trajectoires',
    d: "Monter, descendre, ou rester : ce qui fait bouger — ou pas — une position sociale.",
  },
  {
    id: 'individualisation',
    t: 'Individualisation et délitement du lien',
    d: "Ce qui détache les parcours des cadres collectifs qui les scénarisaient autrefois d'avance.",
  },
  {
    id: 'socialisation-et-acculturation',
    t: 'Socialisation et acculturation',
    d: "Comment un individu apprend, désapprend ou réapprend les règles d'un monde social.",
  },
  {
    id: 'integration-et-marginalisation',
    t: 'Intégration et marginalisation',
    d: 'Ce qui rattache un individu au corps social, et ce qui l’en détache.',
  },
  {
    id: 'modernite-et-rationalisation',
    t: 'Modernité et rationalisation',
    d: 'Ce que le monde moderne a fait au sens, à la croyance et à l’organisation sociale.',
  },
  {
    id: 'urbanisation-et-industrialisation',
    t: 'Urbanisation et industrialisation',
    d: "Comment la ville et l'usine ont réorganisé, physiquement, la vie en société.",
  },
  {
    id: 'travail-et-institutions',
    t: 'Travail et institutions',
    d: 'Comment un métier ou une pratique se stabilise en profession ou en règle reconnue.',
  },
  {
    id: 'deviance-et-etiquetage',
    t: 'Déviance et étiquetage',
    d: 'Comment une société désigne certains comportements comme déviants, et ce que cette désignation produit.',
  },
  {
    id: 'fragmentation-sociale',
    t: 'Fragmentation sociale',
    d: "Ce qui divise une société en groupes de plus en plus distincts, plutôt que de l'unifier.",
  },
  {
    id: 'mondialisation-et-numerique',
    t: 'Mondialisation et numérique',
    d: "Ce que l'interconnexion mondiale et les techniques numériques changent à l'échelle du social.",
  },
];

export const PROCESSUS = [
  /* — Reproduction et transmission — */
  {
    id: 'reproduction-sociale',
    t: 'Reproduction sociale',
    categorie: 'reproduction',
    d: "Le processus par lequel une position sociale se retransmet, génération après génération, sans qu'aucune loi ne l'impose.",
    detail:
      "Bourdieu et Passeron en ont fait la démonstration de référence : l'école, censée corriger les inégalités de départ, les convertit plutôt en mérite scolaire — un habitus façonné par un capital culturel familial se reconnaît et se récompense sans jamais être nommé comme tel. La violence symbolique achève le mécanisme : la reproduction fonctionne d'autant mieux qu'elle ne se vit pas comme une contrainte, y compris par ceux qu'elle dessert le moins.",
    etapes: [
      "Une position de départ, héritée plus que choisie — patrimoine, capital culturel, réseau social",
      "Une socialisation familiale qui transmet, sans les nommer, les manières de penser et de se comporter attendues à cette position",
      "Un passage par des institutions — l'école en premier lieu — qui reconnaissent et récompensent ce qui a déjà été transmis en famille",
      "Une position d'arrivée qui ressemble, à quelques écarts près, à la position de départ",
    ],
    concepts: ['capital-culturel', 'habitus', 'violence-symbolique', 'capital-social'],
    phenomenes: ['inegalites-scolaires', 'homogamie-sociale', 'stratification-sociale'],
    notions: [
      "École de la reproduction — l'expression qui a fait débat en 1970, restée depuis un repère de la discipline",
      "Reproduction élargie — la thèse selon laquelle chaque génération ne se contente pas de reconduire sa position, mais réinvestit ses capitaux pour la consolider",
      "Rupture de la reproduction — les cas, minoritaires mais réels, où la position d'arrivée s'écarte nettement de la position de départ",
    ],
  },
  {
    id: 'reproduction-intergenerationnelle',
    t: 'Reproduction intergénérationnelle',
    categorie: 'reproduction',
    d: "Le revenu, le diplôme ou le métier d'un parent restent le meilleur prédicteur de ceux de l'enfant — une corrélation que la sociologie mesure depuis un siècle.",
    detail:
      "Boudon retourne l'explication culturelle : même sans transmission délibérée d'un habitus, chaque génération réévalue le risque et le coût des études à partir de sa propre position de départ, ce qui suffit mécaniquement à reconduire une bonne part des écarts. La mesure elle-même — table de mobilité, corrélation de revenu entre parents et enfants — est devenue un indicateur suivi dans la plupart des pays développés.",
    etapes: [
      "Une position parentale mesurée — revenu, diplôme, catégorie socioprofessionnelle",
      "Un ensemble de décisions familiales, prises à partir de cette position, sur les études et les choix de vie de l'enfant",
      "Une entrée dans la vie active dont la statistique compare la position à celle des parents",
      "Un indicateur agrégé — élasticité, table de mobilité — qui résume, à l'échelle d'un pays, la force de cette reconduction",
    ],
    concepts: ['individualisme-methodologique'],
    phenomenes: ['inegalites-generationnelles', 'declassement-social'],
    notions: [
      "Table de mobilité — l'outil statistique qui croise la position des parents et celle des enfants",
      "Élasticité intergénérationnelle du revenu — la part du revenu parental qui se retrouve, mécaniquement, dans le revenu de l'enfant",
      "Effet Boudon — la thèse selon laquelle des choix individuellement rationnels suffisent à produire une reproduction sans qu'elle soit voulue par personne",
      "Comparaisons internationales — les pays nordiques, souvent cités en repoussoir, où l'élasticité mesurée est plus faible",
      "Fratrie — la comparaison entre frères et sœurs, qui isole l'effet du seul contexte familial commun",
    ],
  },
  {
    id: 'reproduction-des-elites',
    t: 'Reproduction des élites',
    categorie: 'reproduction',
    d: "Les grandes écoles et les grandes fortunes se referment rarement sur des nouveaux venus : l'accès au sommet se prépare, souvent, dès l'enfance.",
    detail:
      "Bourdieu montre que les grandes écoles fonctionnent comme un lieu de consécration plus que de sélection au mérite pur : elles reconnaissent un capital culturel déjà là, acquis avant même l'entrée en classe préparatoire. Weber ajoute la dimension du pouvoir : une élite ne se maintient pas seulement par la richesse, mais par la légitimité qu'elle parvient à faire reconnaître à sa propre domination.",
    etapes: [
      "Une préparation précoce, dès l'enfance, aux codes et aux épreuves de la sélection",
      "Un passage par un petit nombre d'établissements, dont le nom vaut ensuite plus que le contenu appris",
      "Une entrée dans des réseaux professionnels et matrimoniaux largement internes à ce même petit monde",
      "Une transmission, à la génération suivante, des mêmes atouts de départ",
    ],
    concepts: ['capital-culturel', 'domination-legitime'],
    phenomenes: ['concentration-des-richesses', 'stratification-sociale'],
    notions: [
      "Grandes écoles — la voie la plus étroite, et la plus surveillée, vers les positions dirigeantes",
      "Capital social des élites — un réseau qui s'active bien après la scolarité, tout au long de la carrière",
      "Noblesse d'État — l'expression qui décrit une élite scolaire devenue une caste reconnue par ses titres",
      "Circulation des élites — la thèse, plus optimiste, selon laquelle les élites se renouvellent malgré tout par le haut",
      "Endogamie des dirigeants — le fait de se recruter, se former et se marier au sein d'un même petit monde",
    ],
  },

  /* — Mobilité et trajectoires — */
  {
    id: 'mobilite-sociale',
    t: 'Mobilité sociale',
    categorie: 'trajectoires',
    d: "Monter, descendre, ou rester : la position qu'on occupe à la fin de sa vie active n'est jamais garantie par celle où l'on a commencé.",
    detail:
      "Boudon décompose la mobilité en deux effets qu'on confond trop souvent : un effet de structure, qui tient à la transformation du tissu des emplois disponibles, et un effet net, qui mesure ce que la société ajoute ou retranche au-delà de cette transformation mécanique. Bourdieu ajoute que la mobilité mesurée en catégories socioprofessionnelles peut masquer une reproduction réelle, si le capital culturel et le diplôme obtenu restent, eux, proches de ceux des parents.",
    etapes: [
      "Une position de départ, mesurée par la catégorie socioprofessionnelle des parents",
      "Une trajectoire scolaire et professionnelle propre, distincte de celle des parents",
      "Une position d'arrivée, comparée statistiquement à la position de départ",
      "Un classement — ascendante, descendante, stable — qui résume la comparaison",
    ],
    concepts: ['individualisme-methodologique', 'effets-pervers'],
    phenomenes: ['declassement-social', 'stratification-sociale'],
    notions: [
      "Mobilité structurelle — la part de la mobilité due au seul changement de la structure des emplois",
      "Mobilité nette — ce qui reste une fois cette part structurelle retirée",
      "Mobilité intragénérationnelle — la trajectoire au sein d'une même carrière, distincte de la comparaison avec les parents",
      "Fluidité sociale — la facilité, comparée d'un pays ou d'une époque à l'autre, à changer de position",
      "Paradoxe d'Anderson — une mobilité objective en hausse peut coexister avec un sentiment de mobilité stagnante",
    ],
  },
  {
    id: 'declassement',
    t: 'Déclassement',
    categorie: 'trajectoires',
    d: "Le processus par lequel une position sociale se dégrade, souvent après une rupture professionnelle, familiale ou de santé.",
    detail:
      "Merton fournit le ressort du processus : la tension entre un but que la société continue de promettre — la stabilité, le statut acquis — et des moyens qui se dérobent après une rupture. Le déclassement ne se limite pas à la perte de revenu : il touche l'identité elle-même, quand la position occupée cessait d'être une évidence pour devenir un souvenir.",
    etapes: [
      "Un événement déclencheur — licenciement, divorce, maladie — qui fragilise une position jusque-là stable",
      "Une phase de résistance, où les ressources disponibles (épargne, réseau, aides) retardent la bascule",
      "Un ajustement des attentes et du mode de vie à la baisse, souvent vécu comme une perte d'identité autant que de revenu",
      "Une nouvelle position, stabilisée mais inférieure à la précédente — ou, dans les cas les plus durs, un enchaînement vers l'exclusion",
    ],
    concepts: ['tension-anomique'],
    phenomenes: ['declassement-social', 'pauvrete', 'chomage'],
    notions: [
      "Chute — le terme courant pour la phase la plus brutale du déclassement",
      "Honte sociale — le sentiment qui accompagne souvent la perte de statut, plus que la seule perte de revenu",
      "Stratégies d'évitement — cacher, retarder, minimiser un déclassement en cours pour préserver l'image de soi",
      "Déclassement scolaire — un diplôme qui ne garantit plus la position qu'il garantissait à la génération précédente",
      "Résilience sociale — la capacité, inégalement répartie, à stabiliser une nouvelle position sans sombrer plus bas",
    ],
  },
  {
    id: 'ascension-sociale',
    t: 'Ascension sociale',
    categorie: 'trajectoires',
    d: "Le processus, plus rare et plus lent qu'on ne le raconte, par lequel une position sociale progresse au-delà de celle des parents.",
    detail:
      "Tocqueville voyait dans l'égalisation des conditions le mouvement de fond des sociétés démocratiques, qui devait rendre l'ascension plus commune à mesure que les statuts hérités perdaient de leur force. L'ascension réelle reste pourtant minoritaire et se paie souvent d'un coût que les statistiques de revenu ne mesurent pas : le sentiment de ne plus être tout à fait chez soi, ni dans le milieu quitté, ni dans celui rejoint.",
    etapes: [
      "Un accès à des ressources — souvent scolaires — supérieures à celles du milieu d'origine",
      "Une phase de décalage, où les codes du nouveau milieu s'apprennent sur le tard, jamais tout à fait sans accent",
      "Une consolidation de la nouvelle position, par le diplôme, le métier ou le mariage",
      "Un rapport ambivalent au milieu d'origine, ni tout à fait quitté ni tout à fait rejoint par le nouveau",
    ],
    concepts: ['egalisation-des-conditions'],
    phenomenes: ['inegalites-scolaires', 'stratification-sociale'],
    notions: [
      "Transfuge de classe — celui ou celle qui a changé de milieu social, et le récit qu'il en fait",
      "Bourse au mérite — un des rares dispositifs institutionnels explicitement conçus pour la favoriser",
      "Dissonance culturelle — le décalage vécu entre les codes du milieu d'origine et ceux du milieu d'arrivée",
      "Ascension bloquée — quand les ressources acquises ne suffisent pas à franchir un dernier palier",
      "Self-made man — une figure valorisée dans le récit public, statistiquement plus rare que sa popularité ne le laisse penser",
    ],
  },
  {
    id: 'declin-social',
    t: 'Déclin social',
    categorie: 'trajectoires',
    d: "À l'échelle d'un groupe entier, et non d'un seul individu : le processus par lequel une catégorie sociale perd, collectivement, le terrain qu'elle occupait.",
    detail:
      "Merton fournit ici encore le mécanisme : quand les moyens de tenir une position se dérobent pour tout un groupe à la fois, la tension anomique ne se vit plus seulement comme un accident individuel, mais comme une expérience partagée, capable de se transformer en identité collective. Le déclin d'un groupe se distingue ainsi du déclassement d'un individu par son échelle et par sa dimension politique.",
    etapes: [
      "Une transformation extérieure — désindustrialisation, automatisation, concurrence internationale — qui fragilise un secteur ou une profession entière",
      "Une baisse progressive des effectifs, des revenus ou de la reconnaissance sociale attachée à ce groupe",
      "Une perte de représentation politique et médiatique, qui accompagne et accélère la perte de poids économique",
      "Un repli, parfois, sur une identité collective défensive, construite autour de ce qui a été perdu",
    ],
    concepts: ['tension-anomique'],
    phenomenes: ['pauvrete', 'declassement-social'],
    notions: [
      "Classe ouvrière — le cas le plus étudié de déclin social collectif dans les pays industrialisés",
      "Désindustrialisation — le moteur économique le plus souvent cité du déclin de certains groupes",
      "Vote de déclin — l'hypothèse, disputée, d'un lien entre déclin social ressenti et choix électoraux protestataires",
      "Identité défensive — une identité collective qui se construit autour de ce qu'un groupe a perdu plutôt que de ce qu'il vise",
      "Nostalgie ouvrière — le regret d'un statut social passé, parfois idéalisé rétrospectivement",
    ],
  },
  {
    id: 'precarisation',
    t: 'Précarisation',
    categorie: 'trajectoires',
    d: "Le processus par lequel une situation sociale devient progressivement plus instable — dans l'emploi d'abord, mais pas seulement.",
    detail:
      "Boltanski décrit comment le capitalisme contemporain a transformé la flexibilité, autrefois subie, en valeur revendiquée — l'autonomie promise à chacun masquant souvent une perte de protection bien réelle. Marx fournit le fond du diagnostic : une activité censée être l'expression de soi devient une activité étrangère, imposée par l'enchaînement des contrats plus que choisie.",
    etapes: [
      "Un premier contrat court, ou un temps partiel, présenté comme une étape transitoire",
      "Un enchaînement de statuts instables, sans retour garanti vers l'emploi stable initialement visé",
      "Une extension de l'instabilité au logement, à la santé ou au budget, au-delà du seul emploi",
      "Une normalisation de l'incertitude, vécue comme la condition ordinaire plutôt que comme une passe difficile",
    ],
    concepts: ['nouvel-esprit-du-capitalisme', 'alienation', 'precariat'],
    phenomenes: ['precarite-professionnelle', 'chomage', 'exclusion-sociale'],
    notions: [
      "Statut d'emploi — la variable la plus suivie pour mesurer la précarisation, du CDI à l'intérim",
      "Trappe à précarité — l'idée que certains dispositifs, censés aider, enferment plutôt dans l'instabilité",
      "Sécurisation des parcours — les politiques qui tentent, avec des résultats inégaux, de ralentir le processus",
    ],
  },

  /* — Individualisation et délitement du lien — */
  {
    id: 'desaffiliation',
    t: 'Désaffiliation',
    categorie: 'individualisation',
    d: "Le processus, décrit par Robert Castel, par lequel un individu perd à la fois son travail et ses liens sociaux — deux ruptures qui, ensemble, mènent bien plus loin que chacune séparément.",
    detail:
      "Durkheim fournit la matrice du diagnostic : quand les liens qui rattachent un individu à la collectivité se relâchent, l'anomie s'installe. Becker montre que le processus s'aggrave souvent de lui-même : une fois hors du jeu commun, l'étiquette qui s'attache à cette position — chômeur de longue durée, sans-abri — referme les portes qu'une trajectoire plus favorable aurait pu rouvrir.",
    etapes: [
      "Une zone d'intégration initiale, où travail stable et liens sociaux solides se soutiennent mutuellement",
      "Une fragilisation d'un des deux pôles — perte d'emploi ou affaiblissement des liens — qui isole sans encore rompre",
      "Une zone de vulnérabilité, où l'instabilité touche à la fois le travail et les relations",
      "Une zone de désaffiliation, où l'absence de travail et l'absence de liens se renforcent l'une l'autre",
    ],
    concepts: ['anomie', 'etiquetage', 'zone-de-vulnerabilite', 'zone-de-desaffiliation', 'fragilisation-du-salariat'],
    phenomenes: ['exclusion-sociale', 'pauvrete'],
    notions: [
      "Zones d'intégration — le schéma de Robert Castel, qui distingue intégration, vulnérabilité et désaffiliation",
      "Grande exclusion — le stade le plus avancé du processus, sans domicile ni ressources",
      "Rupture des liens faibles — la perte, moins visible que celle des liens forts, des relations qui ouvrent des opportunités",
      "Travailleurs pauvres — une situation intermédiaire où l'emploi ne suffit plus à empêcher la vulnérabilité",
      "Réaffiliation — les dispositifs d'insertion qui visent, avec des résultats inégaux, à inverser le processus",
    ],
  },
  {
    id: 'individualisation',
    t: 'Individualisation',
    categorie: 'individualisation',
    d: "Le processus par lequel les trajectoires de vie se détachent des cadres collectifs — classe, religion, famille élargie — qui les scénarisaient autrefois d'avance.",
    detail:
      "Tocqueville en identifie le ressort le plus ancien : l'égalisation des conditions dissout les corps intermédiaires qui organisaient autrefois la vie sociale, et laisse chacun davantage seul face à ses choix. Boudon ajoute une nuance méthodologique utile : l'individualisation ne signifie pas la disparition des déterminismes sociaux, mais leur reformulation en termes de choix individuels, dont les effets agrégés restent, eux, très prévisibles. Bauman en tire un diagnostic plus sombre : cette individualisation n'est pas seulement un affranchissement, elle est aussi une fragilisation, chacun devenant responsable de trouver seul des solutions biographiques à des problèmes qui restent, eux, entièrement collectifs. Beck précise que cette individualisation n'a rien de spontané : elle est elle-même institutionnalisée, imposée par l'école, le marché du travail et la protection sociale, qui s'adressent tous à un individu plutôt qu'à une famille ou une classe.",
    etapes: [
      "Un affaiblissement des cadres collectifs traditionnels — appartenance de classe, pratique religieuse, autorité familiale — qui prescrivaient autrefois une grande partie du parcours",
      "Une multiplication des choix qu'il revient désormais à l'individu d'arbitrer seul — couple, carrière, lieu de vie",
      "Une responsabilisation accrue : la réussite ou l'échec du parcours se lisent comme un mérite ou une faute individuels, plus rarement comme un effet de structure",
      "Une recomposition de liens plus choisis, mais aussi plus fragiles, que les cadres collectifs qu'ils remplacent",
    ],
    concepts: ['egalisation-des-conditions', 'individualisme-methodologique', 'corps-intermediaires', 'individualisme', 'atomisation-sociale', 'liquidite-sociale', 'biographie-du-risque'],
    phenomenes: ['monoparentalite', 'homogamie-sociale'],
    notions: [
      "Réflexivité biographique — la nécessité de justifier et d'ajuster en permanence son propre parcours, faute de scénario tout tracé",
      "Individualisme négatif — l'expression de Robert Castel pour une individualisation subie plus que choisie, faute de protections collectives",
      "Recomposition familiale — une des formes les plus visibles de choix individualisé, là où le mariage à vie allait autrefois de soi",
      "Solitude choisie — la part, croissante, des adultes qui vivent seuls sans que ce soit un accident de parcours",
    ],
  },

  /* — Socialisation et acculturation — */
  {
    id: 'socialisation',
    t: 'Socialisation',
    categorie: 'socialisation-et-acculturation',
    d: "Le processus par lequel un individu intériorise, dès l'enfance et tout au long de la vie, les normes, les rôles et les manières de faire d'une société.",
    detail:
      "Berger et Luckmann distinguent deux temps : une socialisation primaire, vécue en famille, qui construit le premier rapport au monde comme une évidence indiscutée ; une socialisation secondaire, plus tardive, par laquelle l'individu intègre les univers spécialisés de l'école, du travail ou d'un groupe particulier. Merton ajoute un troisième temps, anticipé plutôt que vécu : se conformer par avance aux normes d'un groupe qu'on n'a pas encore rejoint, pour s'y préparer.",
    etapes: [
      "Une socialisation primaire, en famille, qui installe un premier rapport au monde vécu comme allant de soi",
      "Une socialisation secondaire, à l'école puis au travail, qui ajoute des rôles et des langages spécialisés au socle familial",
      "Une socialisation anticipatrice, par laquelle l'individu adopte par avance les normes d'un groupe qu'il vise à rejoindre",
      "Une intériorisation si profonde que les normes apprises cessent d'être perçues comme apprises, et se vivent comme une évidence",
    ],
    concepts: ['socialisation-primaire', 'socialisation-secondaire', 'socialisation-anticipatrice', 'prise-de-role', 'habitus'],
    phenomenes: [],
    notions: [
      "Agents de socialisation — famille, école, pairs, médias : les instances qui portent le processus",
      "Socialisation différentielle — les mêmes agents transmettent des contenus différents selon le genre et le milieu social",
    ],
  },
  {
    id: 'resocialisation',
    t: 'Resocialisation',
    categorie: 'socialisation-et-acculturation',
    d: "Le processus, souvent brutal, par lequel une institution efface une identité antérieure pour en reconstruire une autre, conforme à ses propres règles.",
    detail:
      "Goffman décrit ce mécanisme dans les institutions totales — asile, prison, caserne — où l'entrant subit d'abord une série de « mortifications du moi » qui dépouillent son identité civile, avant qu'une nouvelle identité, conforme aux règles de l'institution, ne soit progressivement reconstruite. Le processus ne se limite pas aux institutions les plus fermées : toute reconversion professionnelle ou religieuse tardive en emprunte, à moindre intensité, le même schéma.",
    etapes: [
      "Une rupture avec le monde social antérieur, souvent marquée par un rite d'entrée dépouillant (uniforme, numéro, règlement)",
      "Une série de « mortifications du moi » qui affaiblissent l'identité et les repères apportés de l'extérieur",
      "Un apprentissage des normes et des rôles propres à la nouvelle institution ou au nouveau groupe",
      "Une identité reconstruite, conforme aux attentes du nouveau cadre — parfois durable, parfois abandonnée à la sortie",
    ],
    concepts: ['institution-totale'],
    phenomenes: ['incarceration-de-masse'],
    notions: [
      "Mortification du moi — le vocabulaire de Goffman pour les rituels qui dépouillent une identité civile à l'entrée d'une institution totale",
      "Carrière morale — la suite des étapes, marquées par des statuts et des images de soi successifs, que traverse la personne resocialisée",
    ],
  },
  {
    id: 'acculturation',
    t: 'Acculturation',
    categorie: 'socialisation-et-acculturation',
    d: "Le processus par lequel un groupe ou un individu, au contact prolongé d'une autre culture, en adopte progressivement certains traits.",
    detail:
      "Le terme, d'abord anthropologique, décrit un contact qui n'est presque jamais symétrique : dans un rapport colonial, migratoire ou médiatique inégal, c'est le plus souvent la culture minoritaire ou dominée qui absorbe le plus de traits de l'autre, sans que la réciproque soit vraie dans les mêmes proportions. Le processus reste distinct de l'assimilation : il modifie des pratiques et des représentations sans effacer nécessairement l'identité d'origine.",
    etapes: [
      "Un contact prolongé entre deux groupes aux cultures distinctes, rarement en position d'égalité",
      "Une exposition répétée aux pratiques, à la langue ou aux normes du groupe dominant",
      "Une adoption sélective de certains traits, souvent les plus utiles socialement ou économiquement",
      "Une culture recomposée, mêlant des éléments d'origine et des éléments empruntés, dans des proportions variables selon les générations",
    ],
    concepts: ['alienation-culturelle'],
    phenomenes: ['migration-internationale'],
    notions: [
      "Choc culturel — la phase de désorientation qui accompagne souvent le début du contact",
      "Acculturation inversée — les cas plus rares où le groupe dominant emprunte aussi des traits au groupe minoritaire",
    ],
  },
  {
    id: 'assimilation',
    t: 'Assimilation',
    categorie: 'socialisation-et-acculturation',
    d: "La forme la plus poussée d'acculturation : un groupe minoritaire finit par se fondre presque entièrement dans la culture majoritaire, jusqu'à en perdre les traits distinctifs.",
    detail:
      "Le modèle du melting pot américain en a longtemps porté l'image optimiste : au fil des générations, langue, religion et pratiques d'origine s'effaceraient au profit d'une culture commune. Les sociologues contemporains nuancent fortement ce schéma linéaire : l'assimilation reste inégale selon les groupes, parfois interrompue, et coexiste souvent avec des formes de pluralisme culturel qui ne disparaissent jamais complètement.",
    etapes: [
      "Une première génération qui conserve l'essentiel de la culture d'origine, tout en s'adaptant aux nécessités pratiques",
      "Une deuxième génération bilingue et biculturelle, tiraillée entre les deux univers",
      "Une adoption progressive de la langue, des normes et souvent de la religion du groupe majoritaire",
      "Un effacement, partiel ou complet selon les groupes, des traits distinctifs d'origine au fil des générations",
    ],
    concepts: ['alienation-culturelle'],
    phenomenes: [],
    notions: [
      "Melting pot — l'image, aujourd'hui contestée, d'une fusion complète dans une culture commune",
      "Assimilation segmentée — la thèse selon laquelle l'issue du processus varie fortement selon la classe sociale d'accueil, pas seulement l'origine",
    ],
  },

  /* — Intégration et marginalisation — */
  {
    id: 'integration',
    t: 'Intégration',
    categorie: 'integration-et-marginalisation',
    d: "Le processus par lequel un individu ou un groupe devient partie prenante d'un ensemble social plus large, au point d'en partager les normes et les solidarités.",
    detail:
      "Durkheim en fait la variable centrale de son explication du suicide : plus les liens qui rattachent un individu à un groupe sont denses et réguliers, plus il est protégé socialement, indépendamment de sa situation matérielle propre. Il distingue deux formes historiques d'intégration : une solidarité mécanique, fondée sur la ressemblance entre membres d'une société peu différenciée, et une solidarité organique, fondée sur l'interdépendance de fonctions différentes dans une société complexe.",
    etapes: [
      "Un premier contact avec un groupe ou une institution — travail, école, association, quartier",
      "Une participation régulière à ses activités, qui installe des liens et des habitudes partagées",
      "Une adoption progressive de ses normes, au point qu'elles cessent d'être perçues comme extérieures",
      "Un sentiment d'appartenance stabilisé, qui protège socialement même dans les moments difficiles",
    ],
    concepts: ['integration-sociale', 'solidarite-mecanique', 'solidarite-organique'],
    phenomenes: [],
    notions: [],
  },
  {
    id: 'exclusion',
    t: 'Exclusion',
    categorie: 'integration-et-marginalisation',
    d: "Le processus inverse de l'intégration : un individu ou un groupe se trouve progressivement écarté des échanges, des droits et des liens qui structurent la vie sociale ordinaire.",
    detail:
      "Bauman voit dans l'exclusion contemporaine un phénomène spécifique aux sociétés de consommation : elle ne touche plus seulement ceux qui ne produisent pas, mais aussi ceux qui ne consomment pas assez pour être reconnus comme des membres à part entière de la société. Castel situe l'exclusion comme le stade le plus avancé d'un processus plus large de désaffiliation, où la perte du travail et la perte des liens sociaux se renforcent mutuellement (voir la fiche « Désaffiliation »).",
    etapes: [
      "Une rupture initiale — perte d'emploi, de logement ou de liens familiaux — qui fragilise une position jusque-là ordinaire",
      "Un éloignement progressif des institutions communes — banque, administration, système de santé",
      "Une perte de statut social, souvent accompagnée d'un sentiment de honte qui décourage de demander de l'aide",
      "Une situation stabilisée en marge du corps social, difficile à quitter sans un accompagnement extérieur",
    ],
    concepts: ['exclusion'],
    phenomenes: ['exclusion-sociale'],
    notions: [
      "Cercle vicieux de l'exclusion — chaque rupture (emploi, logement, santé) rend les suivantes plus probables",
    ],
  },
  {
    id: 'marginalisation',
    t: 'Marginalisation',
    categorie: 'integration-et-marginalisation',
    d: "Un processus plus progressif que l'exclusion : un individu ou un groupe se retrouve relégué en périphérie des positions et des espaces valorisés, sans en être totalement écarté.",
    detail:
      "Becker montre que la marginalité n'est pas toujours subie : elle peut aussi être le produit d'un étiquetage, quand un groupe est désigné comme déviant par ceux qui ont le pouvoir de faire accepter cette définition, et se trouve ensuite relégué aux marges à mesure qu'il intériorise ce statut. La marginalisation se distingue de l'exclusion par son caractère souvent partiel et spatial : un quartier, un statut, un secteur d'activité relégués, plutôt qu'une rupture complète avec la société.",
    etapes: [
      "Un écart initial par rapport à une norme dominante — de revenu, de mode de vie ou de statut",
      "Un étiquetage, par les institutions ou l'opinion, qui fixe cet écart en identité durable",
      "Une relégation progressive vers des espaces, des statuts ou des activités moins valorisés",
      "Une installation dans cette position périphérique, parfois transmise à la génération suivante",
    ],
    concepts: ['etiquetage', 'deviance-secondaire'],
    phenomenes: ['pauvrete'],
    notions: [],
  },

  /* — Modernité et rationalisation — */
  {
    id: 'rationalisation',
    t: 'Rationalisation',
    categorie: 'modernite-et-rationalisation',
    d: "Le processus, décrit par Weber, par lequel l'action sociale s'oriente de plus en plus vers un calcul des moyens les plus efficaces, au détriment de la tradition ou de l'émotion.",
    detail:
      "Weber en fait le trait le plus caractéristique de l'Occident moderne : du droit à l'administration en passant par l'économie, chaque domaine tend à s'organiser selon des règles impersonnelles et des procédures calculables plutôt que selon la coutume ou la relation personnelle. Il y voit une victoire ambivalente — la fameuse « cage d'acier » — où l'efficacité gagnée se paie d'une perte de sens et d'une bureaucratie envahissante.",
    etapes: [
      "Une action jusque-là guidée par la tradition, l'affect ou la croyance religieuse",
      "L'introduction progressive d'un calcul explicite des moyens les plus efficaces pour atteindre un but donné",
      "La mise en place de règles écrites, impersonnelles et applicables à tous, qui remplacent l'arbitraire ou la coutume",
      "Une organisation entièrement régie par le calcul et la procédure — la « cage d'acier » que Weber redoutait autant qu'il la décrivait",
    ],
    concepts: ['rationalisation', 'desenchantement-du-monde', 'bureaucratie'],
    phenomenes: [],
    notions: [],
  },
  {
    id: 'secularisation',
    t: 'Sécularisation',
    categorie: 'modernite-et-rationalisation',
    d: "Le processus par lequel la religion perd son emprise sur l'organisation de la vie sociale, sans nécessairement disparaître de la vie privée des individus.",
    detail:
      "Weber relie la sécularisation à un désenchantement plus large du monde : la nature et la société cessent d'être expliquées par une volonté divine, au profit d'explications rationnelles et calculables. Le processus ne signifie pas la fin de la croyance individuelle, mais son recul comme principe d'organisation du droit, de l'école ou de la politique — des domaines longtemps confondus avec l'autorité religieuse et progressivement autonomisés d'elle.",
    etapes: [
      "Une société où le religieux organise directement le droit, l'école, le calendrier et la légitimité politique",
      "Une différenciation progressive de ces institutions, qui adoptent des règles propres, indépendantes de l'autorité religieuse",
      "Un recul de la pratique et de l'appartenance religieuses déclarées, variable selon les pays et les générations",
      "Une religion maintenue, quand elle l'est, comme choix privé plutôt que comme cadre collectif obligatoire",
    ],
    concepts: ['secularisation', 'desenchantement-du-monde'],
    phenomenes: [],
    notions: [
      "Désinstitutionnalisation du religieux — la religion continue d'exister, mais organise de moins en moins la vie collective",
    ],
  },
  {
    id: 'modernisation',
    t: 'Modernisation',
    categorie: 'modernite-et-rationalisation',
    d: "Le processus large par lequel une société passe d'un ordre traditionnel, fondé sur la coutume et la proximité, à un ordre organisé autour du marché, de l'État et de l'individu.",
    detail:
      "Touraine décrit la modernité comme la combinaison, jamais acquise ni stable, de la rationalisation des techniques et de l'affirmation d'un sujet individuel capable de se penser lui-même comme auteur de sa propre vie. Giddens ajoute que la modernité avancée intensifie sa propre logique : la réflexivité devient permanente, chaque institution devant sans cesse se justifier et s'ajuster plutôt que s'appuyer sur une tradition acquise.",
    etapes: [
      "Un ordre traditionnel, où la coutume, la parenté et la proximité organisent l'essentiel de la vie sociale",
      "Une différenciation croissante des institutions — économie, droit, politique, science — qui s'autonomisent les unes des autres",
      "Une rationalisation des techniques et de l'administration, portée par le marché et l'État",
      "Une réflexivité généralisée, où chaque choix individuel et chaque institution doivent en permanence se justifier plutôt que s'appuyer sur l'évidence de la tradition",
    ],
    concepts: ['modernite', 'modernite-reflexive', 'modernite-liquide'],
    phenomenes: [],
    notions: [],
  },

  /* — Urbanisation et industrialisation — */
  {
    id: 'urbanisation',
    t: 'Urbanisation',
    categorie: 'urbanisation-et-industrialisation',
    d: "Le processus par lequel une part croissante de la population se concentre dans les villes, transformant à la fois le territoire et les manières d'être ensemble.",
    detail:
      "Simmel décrit l'expérience urbaine comme un bombardement permanent de stimuli, auquel le citadin répond par une attitude blasée — une distance affective protectrice qui permet de vivre entouré d'inconnus sans en être submergé. L'urbanisation ne redistribue pas seulement les populations : elle recompose les liens sociaux eux-mêmes, plus nombreux mais souvent plus superficiels qu'en milieu rural.",
    etapes: [
      "Un exode depuis les campagnes, attiré par les emplois industriels puis tertiaires concentrés en ville",
      "Une densification progressive de l'habitat et une extension des infrastructures urbaines",
      "Une transformation des liens sociaux, plus nombreux mais souvent plus anonymes qu'en milieu rural",
      "Une redéfinition du territoire national autour d'un réseau de villes, au détriment des campagnes qui se dépeuplent",
    ],
    concepts: ['blasement-urbain'],
    phenomenes: ['etalement-urbain'],
    notions: [],
  },
  {
    id: 'metropolisation',
    t: 'Métropolisation',
    categorie: 'urbanisation-et-industrialisation',
    d: "Un processus plus récent que la seule urbanisation : la concentration des activités et des richesses les plus valorisées dans un petit nombre de très grandes villes.",
    detail:
      "À la différence de l'urbanisation générale, la métropolisation redistribue le poids économique entre les villes elles-mêmes : quelques métropoles concentrent finance, sièges sociaux, universités de premier plan et emplois qualifiés, pendant que les villes moyennes et les zones rurales perdent du terrain relatif, même si leur population ne diminue pas toujours en nombre absolu.",
    etapes: [
      "Une concentration croissante des sièges d'entreprises, des universités et des emplois qualifiés dans quelques grandes villes",
      "Une hausse du prix du foncier dans ces métropoles, qui attire les catégories les plus dotées et repousse les autres",
      "Un creusement de l'écart de développement entre métropoles et villes moyennes ou zones rurales",
      "Une intégration des métropoles à des réseaux mondiaux, parfois plus étroits que leurs liens avec leur propre arrière-pays",
    ],
    concepts: [],
    phenomenes: ['inegalites-territoriales'],
    notions: [
      "Ville globale — le terme désignant les métropoles les plus intégrées aux réseaux financiers et décisionnels mondiaux",
      "France périphérique — l'expression, disputée, désignant les territoires laissés en retrait par la métropolisation",
    ],
  },
  {
    id: 'gentrification',
    t: 'Gentrification',
    categorie: 'urbanisation-et-industrialisation',
    d: "Le processus par lequel un quartier populaire, longtemps déprécié, attire une population plus aisée dont l'installation finit par en chasser les habitants d'origine.",
    detail:
      "Le mécanisme s'enclenche souvent par l'arrivée d'artistes ou d'étudiants attirés par des loyers bas et un cachet architectural ancien ; leur présence rend le quartier désirable pour des catégories plus aisées, qui font grimper les prix jusqu'à rendre le quartier inabordable pour ceux qui l'habitaient avant eux. Voir la fiche « Gentrification » dans Phénomènes sociaux pour l'état agrégé auquel ce processus mène le plus souvent.",
    etapes: [
      "Un quartier populaire, aux loyers bas, qui attire une première vague d'artistes ou d'étudiants pour son cachet et son prix",
      "Une amélioration progressive de l'image du quartier, relayée par les médias et l'ouverture de commerces nouveaux",
      "Une hausse des loyers et des prix immobiliers, qui attire des catégories sociales plus aisées",
      "Un départ, souvent contraint, des habitants d'origine, qui ne peuvent plus se loger dans le quartier qu'ils ont contribué à revaloriser",
    ],
    concepts: ['blasement-urbain', 'capital-culturel'],
    phenomenes: ['gentrification'],
    notions: [],
  },
  {
    id: 'industrialisation',
    t: 'Industrialisation',
    categorie: 'urbanisation-et-industrialisation',
    d: "Le processus par lequel une économie fondée sur l'agriculture et l'artisanat bascule vers une production mécanisée et concentrée en usines.",
    detail:
      "Durkheim en tire l'un de ses concepts les plus féconds : l'industrialisation pousse la division du travail social à un degré inédit, chacun dépendant de fonctions toujours plus spécialisées qu'il ne maîtrise plus lui-même — une interdépendance qu'il nomme solidarité organique. Marx y voit surtout un rapport de production nouveau : le travailleur, séparé des moyens de production qu'il ne possède plus, vend son temps de travail à celui qui les détient, dans un rapport qu'il analyse comme une exploitation structurelle.",
    etapes: [
      "Une mécanisation progressive de la production, qui remplace le travail artisanal dispersé par l'atelier puis l'usine",
      "Une concentration de la main-d'œuvre dans des zones industrielles, souvent nouvellement urbanisées",
      "Une spécialisation croissante des tâches, qui approfondit la division du travail social",
      "Une transformation du rapport au travail lui-même, désormais salarié, chronométré et séparé du produit fini",
    ],
    concepts: ['division-du-travail-social', 'alienation', 'exploitation'],
    phenomenes: [],
    notions: [],
  },
  {
    id: 'desindustrialisation',
    t: 'Désindustrialisation',
    categorie: 'urbanisation-et-industrialisation',
    d: "Le processus inverse, engagé dans la plupart des pays développés depuis les années 1970 : le recul de l'emploi et du poids industriels au profit des services.",
    detail:
      "La concurrence internationale, l'automatisation et la délocalisation d'une partie de la production expliquent ensemble ce recul, dont les effets sociaux se concentrent fortement sur certains territoires et certaines catégories d'ouvriers plus que sur d'autres. Castel relie directement ce processus à la montée du précariat : la sécurité qu'offrait l'emploi industriel stable a laissé place, pour une partie de cette main-d'œuvre, à des statuts d'emploi plus instables.",
    etapes: [
      "Une exposition croissante à la concurrence internationale, qui rend certaines productions industrielles moins compétitives",
      "Une automatisation qui réduit le nombre d'emplois nécessaires à une production équivalente",
      "Des fermetures ou des délocalisations d'usines, concentrées sur certains territoires plus que d'autres",
      "Une reconversion, souvent difficile, d'une partie de la main-d'œuvre vers des emplois de service moins qualifiés ou plus précaires",
    ],
    concepts: ['precariat'],
    phenomenes: ['declassement-social'],
    notions: [
      "Friche industrielle — la trace matérielle, encore visible dans le paysage, d'une industrialisation révolue",
    ],
  },

  /* — Travail et institutions — */
  {
    id: 'professionnalisation',
    t: 'Professionnalisation',
    categorie: 'travail-et-institutions',
    d: "Le processus par lequel une activité se transforme en profession reconnue, dotée d'une formation, de règles d'accès et d'un statut propres.",
    detail:
      "Weber fait de la compétence certifiée le fondement de cette légitimité nouvelle, distincte de la seule tradition ou de la force. Le processus s'accompagne presque toujours d'une fermeture progressive : ceux qui exercent déjà l'activité cherchent à en réserver l'accès à ceux qui remplissent des critères qu'ils ont eux-mêmes contribué à fixer, écartant du même geste une partie de ceux qui l'exerçaient auparavant sans ce titre.",
    etapes: [
      "Une activité exercée sans qualification formelle reconnue, ouverte à qui s'y essaie",
      "Une organisation collective de ceux qui l'exercent, qui revendique une reconnaissance et fixe des critères d'accès",
      "La création d'une formation, d'un diplôme ou d'un ordre professionnel qui contrôle désormais l'entrée dans le métier",
      "Une fermeture progressive de l'activité à ceux qui ne remplissent pas ces nouveaux critères, même s'ils l'exerçaient auparavant",
    ],
    concepts: ['ordres-sociaux'],
    phenomenes: [],
    notions: [
      "Corporatisme professionnel — la défense, par un groupe professionnel déjà installé, de ses propres critères d'accès",
    ],
  },
  {
    id: 'bureaucratisation',
    t: 'Bureaucratisation',
    categorie: 'travail-et-institutions',
    d: "Le processus par lequel une organisation se dote de règles écrites, d'une hiérarchie stable et d'une division précise des tâches, au détriment de l'arrangement informel.",
    detail:
      "Weber décrit la bureaucratie comme la forme la plus rationnelle d'organisation moderne — compétence plutôt que faveur, règle écrite plutôt qu'arbitraire — tout en avertissant qu'elle tend à s'étendre à des domaines toujours plus nombreux, jusqu'à peser sur la vie même de ceux qu'elle est censée servir. Crozier ajoute que la bureaucratisation ne supprime jamais tout à fait l'informel : elle déplace le pouvoir vers ceux qui maîtrisent les zones d'incertitude que la règle, même la plus complète, laisse toujours ouvertes.",
    etapes: [
      "Une organisation initialement souple, fondée sur des arrangements informels entre ses membres",
      "L'écriture progressive de règles explicites, censées s'appliquer également à tous",
      "La mise en place d'une hiérarchie stable et d'une division précise des tâches et des responsabilités",
      "Une extension de la logique bureaucratique à des domaines toujours plus nombreux, parfois au détriment de sa propre efficacité",
    ],
    concepts: ['bureaucratie', 'institutionnalisation-normative'],
    phenomenes: [],
    notions: [],
  },
  {
    id: 'institutionnalisation',
    t: 'Institutionnalisation',
    categorie: 'travail-et-institutions',
    d: "Le processus par lequel une pratique répétée devient une règle reconnue, indépendante des individus qui l'ont d'abord adoptée.",
    detail:
      "Berger et Luckmann montrent que ce processus commence toujours par une habitude partagée entre quelques personnes ; il ne devient institution qu'au moment où cette habitude se transmet à une génération qui ne l'a pas inventée, et qui la reçoit comme une évidence extérieure à elle-même plutôt que comme un choix. Parsons ajoute que l'institutionnalisation complète suppose l'intériorisation de la norme : la règle ne fonctionne durablement que si elle cesse d'être perçue comme une contrainte imposée de l'extérieur.",
    etapes: [
      "Une pratique répétée par quelques individus, sans statut particulier au départ",
      "Une habitude partagée, qui commence à orienter les attentes réciproques d'un groupe",
      "Une transmission à une génération qui n'a pas participé à son invention, et qui la reçoit comme allant de soi",
      "Une règle reconnue et souvent formalisée, indépendante désormais des individus qui l'ont d'abord adoptée",
    ],
    concepts: ['institutionnalisation-des-pratiques', 'institutionnalisation-normative'],
    phenomenes: [],
    notions: [],
  },

  /* — Déviance et étiquetage — */
  {
    id: 'stigmatisation',
    t: 'Stigmatisation',
    categorie: 'deviance-et-etiquetage',
    d: "Le processus par lequel un individu ou un groupe se voit attribuer un attribut jugé discréditant, qui finit par dominer toute la perception qu'on a de lui.",
    detail:
      "Goffman montre que le stigmate n'est jamais une propriété intrinsèque de la personne : c'est une relation, entre un attribut visible ou révélé et une norme sociale qui le disqualifie dans un contexte donné — le même attribut pouvant être neutre, voire valorisé, ailleurs. La stigmatisation ne s'arrête pas au jugement initial : elle façonne ensuite l'ensemble des interactions de la personne stigmatisée, contrainte de gérer en permanence une information sur elle-même qu'elle ne peut ni cacher indéfiniment ni afficher sans risque.",
    etapes: [
      "Un attribut, visible ou révélé, jugé discréditant au regard d'une norme sociale donnée",
      "Une généralisation de ce seul attribut à l'ensemble de la personne, qui efface le reste de son identité aux yeux d'autrui",
      "Une gestion permanente de cette information par la personne concernée, entre dissimulation et divulgation",
      "Une identité durablement marquée par cet attribut, parfois intériorisée par la personne elle-même",
    ],
    concepts: ['stigmate', 'etiquetage', 'deviance-primaire'],
    phenomenes: ['grossophobie'],
    notions: [],
  },
  {
    id: 'etiquetage',
    t: 'Étiquetage',
    categorie: 'deviance-et-etiquetage',
    d: "Le processus par lequel un comportement devient déviant non pas en lui-même, mais parce qu'un groupe disposant du pouvoir de le faire le désigne comme tel.",
    detail:
      "Becker retourne la question habituelle : plutôt que de chercher ce qui pousse un individu à un acte déviant, il demande qui a le pouvoir de définir cet acte comme déviant, et ce que cette définition produit une fois appliquée. Une déviance primaire, souvent isolée et sans conséquence durable, peut ainsi se transformer en déviance secondaire, stable et identitaire, à mesure que l'étiquette collée à la personne referme les autres possibilités qui s'offraient à elle.",
    etapes: [
      "Un acte qui enfreint une norme, sans que cela suffise en soi à produire un déviant durable",
      "Une réaction sociale — arrestation, exclusion, rumeur — qui désigne publiquement l'auteur de l'acte comme déviant",
      "Une intériorisation progressive de cette étiquette par la personne elle-même, faute d'alternative reconnue",
      "Une carrière déviante stabilisée, où l'étiquette initiale referme les autres rôles sociaux disponibles",
    ],
    concepts: ['etiquetage', 'deviance-secondaire'],
    phenomenes: ['delinquance-juvenile'],
    notions: [
      "Carrière morale — la succession de statuts et d'images de soi que traverse la personne étiquetée",
    ],
  },
  {
    id: 'radicalisation',
    t: 'Radicalisation',
    categorie: 'deviance-et-etiquetage',
    d: "Le processus par lequel un individu ou un groupe adopte des positions de plus en plus tranchées, jusqu'à rompre avec les cadres ordinaires du débat ou de l'action légale.",
    detail:
      "Le processus se nourrit souvent d'un sentiment d'injustice ou d'exclusion, que Blumer situe dans la dynamique plus large de l'action collective : un groupe s'organise autour d'une définition partagée de la situation, qui se durcit à mesure que les interactions avec les autorités ou les adversaires désignés s'enveniment. La radicalisation ne débouche pas nécessairement sur la violence : elle peut aussi rester un durcissement idéologique sans jamais passer à l'acte.",
    etapes: [
      "Un sentiment d'injustice ou d'exclusion, individuel ou partagé par un groupe",
      "Une rencontre avec un cadre idéologique qui donne sens à ce sentiment et désigne un responsable",
      "Un isolement progressif vis-à-vis des cercles sociaux antérieurs, qui referme les points de vue alternatifs",
      "Un durcissement des positions et, dans certains cas seulement, un passage à l'action violente ou illégale",
    ],
    concepts: ['action-collective'],
    phenomenes: ['mouvements-sociaux-contemporains'],
    notions: [],
  },

  /* — Fragmentation sociale — */
  {
    id: 'polarisation',
    t: 'Polarisation',
    categorie: 'fragmentation-sociale',
    d: "Le processus par lequel les positions, les opinions ou les groupes d'une société s'écartent progressivement vers deux pôles opposés, au détriment des positions intermédiaires.",
    detail:
      "Le phénomène touche aussi bien la structure sociale — la disparition relative des classes moyennes entre catégories très favorisées et très précaires — que le débat public, où les positions médianes perdent du terrain face à des opinions plus tranchées, souvent renforcées par l'entre-soi que permettent les réseaux sociaux.",
    etapes: [
      "Une distribution initiale des positions ou des opinions, avec une part importante de situations intermédiaires",
      "Un écart croissant entre les extrêmes, porté par des dynamiques économiques, médiatiques ou d'entre-soi social",
      "Un rétrécissement progressif des positions intermédiaires, qui deviennent minoritaires ou moins visibles",
      "Une société ou un débat organisés autour de deux pôles opposés, avec peu d'espace reconnu entre eux",
    ],
    concepts: [],
    phenomenes: ['polarisation-sociale'],
    notions: [
      "Chambre d'écho — un environnement, notamment numérique, qui expose surtout à des opinions déjà partagées et accentue la polarisation",
    ],
  },
  {
    id: 'segmentation',
    t: 'Segmentation',
    categorie: 'fragmentation-sociale',
    d: "Le processus par lequel un ensemble social ou économique se divise en segments de plus en plus étanches, chacun avec ses propres règles.",
    detail:
      "Le marché du travail en offre l'exemple le plus étudié : un segment primaire, protégé, aux carrières stables, coexiste avec un segment secondaire, précaire, sans grande passerelle entre les deux — une division qui pèse davantage sur la trajectoire des personnes que le seul niveau de diplôme.",
    etapes: [
      "Un ensemble initialement plus homogène, régi par des règles communes",
      "L'apparition de sous-groupes soumis à des règles différentes — statuts d'emploi, niveaux de protection, réseaux d'accès",
      "Un cloisonnement progressif entre ces segments, avec des passerelles de plus en plus rares",
      "Une structure stabilisée où l'appartenance à un segment plutôt qu'un autre pèse durablement sur la trajectoire",
    ],
    concepts: ['ordres-sociaux'],
    phenomenes: [],
    notions: [
      "Marché du travail segmenté — la division entre emplois protégés et emplois précaires, avec peu de passage de l'un à l'autre",
    ],
  },
  {
    id: 'differenciation-sociale',
    t: 'Différenciation sociale',
    categorie: 'fragmentation-sociale',
    d: "Le processus par lequel une société se divise en fonctions, rôles et institutions de plus en plus spécialisés et interdépendants.",
    detail:
      "Durkheim en fait le moteur du passage d'une solidarité mécanique, fondée sur la ressemblance, à une solidarité organique, fondée sur la complémentarité de fonctions différentes. Luhmann pousse l'analyse plus loin : la société moderne se différencie en sous-systèmes autonomes — droit, économie, science, politique — qui communiquent chacun selon son propre code, sans qu'aucun ne puisse plus prétendre organiser l'ensemble depuis un centre unique.",
    etapes: [
      "Une société peu différenciée, où les mêmes institutions cumulent des fonctions multiples",
      "Une spécialisation croissante des tâches et des rôles, portée par la division du travail",
      "Une autonomisation de sous-systèmes entiers — droit, économie, science — qui développent chacun ses propres règles",
      "Une société d'ensemble tenue non plus par la ressemblance de ses membres, mais par l'interdépendance de fonctions différentes",
    ],
    concepts: ['differenciation-fonctionnelle', 'division-du-travail-social'],
    phenomenes: [],
    notions: [],
  },

  /* — Mondialisation et numérique — */
  {
    id: 'hybridation-culturelle',
    t: 'Hybridation culturelle',
    categorie: 'mondialisation-et-numerique',
    d: "Le processus par lequel des éléments culturels d'origines différentes se combinent pour produire des formes nouvelles, plutôt que la victoire d'une culture sur une autre.",
    detail:
      "À la différence de l'acculturation, qui décrit l'absorption d'une culture par une autre, l'hybridation culturelle décrit une combinaison créative : musique, cuisine, langue empruntent simultanément à plusieurs sources pour composer des formes inédites, ni tout à fait fidèles à l'une ni tout à fait fidèles à l'autre. La mondialisation des échanges et des migrations en a considérablement accéléré le rythme.",
    etapes: [
      "Une coexistence, sur un même territoire ou dans une même diaspora, de plusieurs traditions culturelles distinctes",
      "Des emprunts réciproques, dans la musique, la cuisine, la langue ou les pratiques religieuses",
      "Une combinaison créative de ces éléments, qui produit des formes nouvelles plutôt qu'une simple juxtaposition",
      "Une forme hybride reconnue à son tour comme une culture à part entière, transmise aux générations suivantes",
    ],
    concepts: ['alienation-culturelle'],
    phenomenes: [],
    notions: [
      "Créolisation — le terme, emprunté aux études caribéennes, pour cette combinaison créative de plusieurs héritages culturels",
    ],
  },
  {
    id: 'mondialisation',
    t: 'Mondialisation',
    categorie: 'mondialisation-et-numerique',
    d: "Le processus par lequel les échanges économiques, culturels et humains s'organisent à l'échelle de la planète entière, plutôt qu'à celle des seules nations.",
    detail:
      "Castells relie ce processus à l'émergence d'une société en réseaux, où le pouvoir s'exerce moins en contrôlant un territoire qu'en connectant ou en déconnectant des flux financiers, informationnels et migratoires à l'échelle mondiale. La mondialisation ne touche pas également tous les territoires ni tous les groupes sociaux : certaines métropoles s'y intègrent pleinement pendant que des régions entières en restent largement à l'écart.",
    etapes: [
      "Une libéralisation progressive des échanges commerciaux et financiers entre pays",
      "Une interconnexion croissante des chaînes de production, désormais réparties entre plusieurs continents",
      "Une circulation accrue des personnes, par la migration économique, les études ou le tourisme",
      "Une intégration inégale des territoires à ces flux mondiaux, qui creuse l'écart entre métropoles connectées et régions à l'écart",
    ],
    concepts: ['societe-en-reseaux'],
    phenomenes: ['migration-internationale'],
    notions: [],
  },
  {
    id: 'numerisation',
    t: 'Numérisation',
    categorie: 'mondialisation-et-numerique',
    d: "Le processus par lequel des activités, des relations et des services autrefois matériels ou en présence basculent vers des supports numériques.",
    detail:
      "Le processus ne se limite pas à un changement de support : il redistribue aussi des compétences et un pouvoir. Castells montre que la société en réseaux valorise désormais la capacité à naviguer et à produire dans cet environnement numérique, une compétence elle-même inégalement répartie selon l'âge, le territoire et le capital culturel.",
    etapes: [
      "Une activité initialement matérielle ou réalisée en présence — démarche administrative, achat, relation sociale",
      "Une première offre numérique, d'abord en complément de l'offre traditionnelle",
      "Une bascule progressive vers le numérique comme voie principale, voire unique, d'accès au service",
      "Une redistribution des compétences requises, qui avantage ceux déjà à l'aise avec l'outil numérique",
    ],
    concepts: ['societe-en-reseaux'],
    phenomenes: ['inegalites-numeriques'],
    notions: [],
  },
  {
    id: 'plateformisation',
    t: 'Plateformisation',
    categorie: 'mondialisation-et-numerique',
    d: "Le processus par lequel des pans entiers de l'économie et de la vie sociale s'organisent désormais autour de plateformes numériques qui mettent en relation offre et demande.",
    detail:
      "Castells montre que le pouvoir, dans une société en réseaux, s'exerce moins en dirigeant directement qu'en programmant les objectifs d'un réseau ou en connectant et déconnectant ses participants — une description qui s'applique presque littéralement aux plateformes numériques, qui fixent les règles du jeu sans elles-mêmes produire le service échangé. Le travail des livreurs ou des chauffeurs, mis en relation avec des clients par un algorithme plutôt que par un contrat de travail classique, en est l'illustration la plus discutée.",
    etapes: [
      "Un secteur d'activité organisé jusque-là par des entreprises intégrées ou des intermédiaires traditionnels",
      "L'apparition d'une plateforme numérique qui met directement en relation offre et demande",
      "Un basculement d'une partie de l'activité vers ce nouvel intermédiaire, qui capte une commission sans posséder les moyens de production",
      "Une redéfinition du statut des travailleurs concernés, souvent indépendants plutôt que salariés, coordonnés par un algorithme",
    ],
    concepts: ['pouvoir-des-reseaux', 'societe-en-reseaux'],
    phenomenes: ['precarite-professionnelle'],
    notions: [],
  },
];
