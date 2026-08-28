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
    concepts: ['nouvel-esprit-du-capitalisme', 'alienation'],
    phenomenes: ['precarite-professionnelle', 'chomage', 'exclusion-sociale'],
    notions: [
      "Statut d'emploi — la variable la plus suivie pour mesurer la précarisation, du CDI à l'intérim",
      "Précariat — un terme proposé pour désigner un groupe social défini par l'instabilité plutôt que par le métier",
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
    concepts: ['anomie', 'etiquetage'],
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
      "Tocqueville en identifie le ressort le plus ancien : l'égalisation des conditions dissout les corps intermédiaires qui organisaient autrefois la vie sociale, et laisse chacun davantage seul face à ses choix. Boudon ajoute une nuance méthodologique utile : l'individualisation ne signifie pas la disparition des déterminismes sociaux, mais leur reformulation en termes de choix individuels, dont les effets agrégés restent, eux, très prévisibles.",
    etapes: [
      "Un affaiblissement des cadres collectifs traditionnels — appartenance de classe, pratique religieuse, autorité familiale — qui prescrivaient autrefois une grande partie du parcours",
      "Une multiplication des choix qu'il revient désormais à l'individu d'arbitrer seul — couple, carrière, lieu de vie",
      "Une responsabilisation accrue : la réussite ou l'échec du parcours se lisent comme un mérite ou une faute individuels, plus rarement comme un effet de structure",
      "Une recomposition de liens plus choisis, mais aussi plus fragiles, que les cadres collectifs qu'ils remplacent",
    ],
    concepts: ['egalisation-des-conditions', 'individualisme-methodologique'],
    phenomenes: ['monoparentalite', 'homogamie-sociale'],
    notions: [
      "Corps intermédiaires — les cadres collectifs (corporations, paroisses, familles élargies) dont l'affaiblissement libère et isole à la fois",
      "Réflexivité biographique — la nécessité de justifier et d'ajuster en permanence son propre parcours, faute de scénario tout tracé",
      "Individualisme négatif — l'expression de Robert Castel pour une individualisation subie plus que choisie, faute de protections collectives",
      "Recomposition familiale — une des formes les plus visibles de choix individualisé, là où le mariage à vie allait autrefois de soi",
      "Solitude choisie — la part, croissante, des adultes qui vivent seuls sans que ce soit un accident de parcours",
    ],
  },
];
