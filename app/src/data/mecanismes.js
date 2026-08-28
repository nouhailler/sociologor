/**
 * Les mécanismes sociaux : les rouages qui expliquent comment un phénomène se
 * produit, plutôt que ce qu'il est (`phenomenes.js`) ou la trajectoire qu'il
 * dessine dans le temps (`processus.js`).
 *
 * Un phénomène est un état — les inégalités scolaires. Un processus est une
 * trajectoire qui mène à cet état — la reproduction sociale. Un mécanisme est
 * l'un des rouages qui font tourner cette trajectoire — la transmission du
 * capital culturel, la sélection scolaire, l'homogamie. Le même mécanisme
 * alimente souvent plusieurs processus à la fois : la sélection scolaire agit
 * dans la reproduction sociale comme dans la reproduction des élites.
 *
 * Schéma de lecture, du fait au rouage :
 *
 *   PHÉNOMÈNE ← MÉCANISMES ← alimentent → PROCESSUS → mène à → RÉSULTAT
 *
 * Règles de rédaction, par symétrie avec `phenomenes.js` et `processus.js` :
 * - `concepts` cite des identifiants de `concepts.js` (cliquables).
 * - `processus` cite des identifiants de `processus.js` : le ou les processus
 *   que ce mécanisme fait avancer. Jamais vide — un mécanisme sans processus
 *   n'aurait rien à expliquer.
 * - `phenomenes` cite des identifiants de `phenomenes.js` : l'état, ou l'un
 *   des états, que ce mécanisme contribue à produire. Peut être vide si le
 *   mécanisme n'aboutit à aucun phénomène déjà décrit.
 */

/** Catégories d'affichage, dans l'ordre de la liste. */
export const CATEGORIES_MECANISMES = [
  {
    id: 'transmission',
    t: 'Transmission',
    d: "Ce qui passe d'une génération ou d'une partie à l'autre, sans qu'aucune loi ne l'impose.",
  },
  {
    id: 'selection',
    t: 'Sélection et tri',
    d: "Ce qui trie, filtre et consacre — à l'école, au travail, à l'entrée d'une élite.",
  },
  {
    id: 'relationnel',
    t: 'Relationnel et réseaux',
    d: "Ce que le lien social ouvre ou referme, au-delà des seules ressources individuelles.",
  },
  {
    id: 'rupture',
    t: 'Rupture et déclassement',
    d: "Ce qui fait basculer une position stable vers une position dégradée.",
  },
  {
    id: 'structurel',
    t: 'Structurel et collectif',
    d: "Ce qui touche un groupe entier, indépendamment de la trajectoire de chacun de ses membres.",
  },
  {
    id: 'symbolique',
    t: 'Symbolique et normatif',
    d: "Ce qui fait paraître juste, naturel ou mérité un ordre social qui ne l'est pas forcément.",
  },
];

export const MECANISMES = [
  /* — Transmission — */
  {
    id: 'transmission-capital-culturel',
    t: 'Transmission du capital culturel',
    categorie: 'transmission',
    d: "Un patrimoine non financier — aisance verbale, familiarité avec la culture légitime, manières de se tenir — qui se transmet en famille avant même l'école.",
    detail:
      "Ce n'est pas un enseignement déclaré : l'enfant absorbe, par imprégnation, un rapport au savoir et à la culture que l'école reconnaît ensuite et récompense sans jamais le nommer comme un héritage.",
    concepts: ['capital-culturel', 'habitus'],
    processus: ['reproduction-sociale'],
    phenomenes: ['inegalites-scolaires', 'inegalites-culturelles'],
  },
  {
    id: 'transmission-patrimoniale',
    t: 'Transmission patrimoniale',
    categorie: 'transmission',
    d: "Le canal le plus direct et le plus étudié de la reproduction sociale : un patrimoine économique transmis par héritage ou donation.",
    detail:
      "Elle agit indépendamment du mérite ou du travail de celui qui reçoit, et se cumule sur plusieurs générations : un petit avantage initial, réinvesti, devient un grand écart au bout de deux ou trois transmissions.",
    concepts: ['capital-economique'],
    processus: ['reproduction-sociale'],
    phenomenes: ['concentration-des-richesses', 'inegalites-de-revenus'],
  },
  {
    id: 'socialisation-familiale',
    t: 'Socialisation familiale',
    categorie: 'transmission',
    d: "L'apprentissage précoce, jamais formalisé, des manières de penser, de parler et de se comporter attendues dans un milieu social.",
    detail:
      "Elle précède et prépare l'école plus qu'elle ne la remplace : ce que l'enfant y a déjà intégré comme une évidence, l'institution le reconnaît ensuite comme une aptitude personnelle.",
    concepts: ['habitus', 'role-et-attentes'],
    processus: ['reproduction-sociale', 'individualisation'],
    phenomenes: ['inegalites-scolaires'],
  },
  {
    id: 'transmission-des-aspirations',
    t: 'Transmission des aspirations',
    categorie: 'transmission',
    d: "Les parents transmettent non seulement des ressources, mais un niveau d'ambition — ce qui semble accessible ou hors de portée.",
    detail:
      "Deux enfants aux résultats scolaires identiques peuvent viser des filières très différentes selon ce que leur milieu leur a appris à espérer comme réaliste pour « quelqu'un comme eux ».",
    concepts: ['habitus', 'individualisme-methodologique'],
    processus: ['reproduction-intergenerationnelle'],
    phenomenes: ['inegalites-scolaires', 'inegalites-generationnelles'],
  },

  /* — Sélection et tri — */
  {
    id: 'selection-scolaire',
    t: 'Sélection scolaire',
    categorie: 'selection',
    d: "L'école trie ses élèves à chaque palier, par des épreuves qui se présentent comme neutres mais qui reconnaissent surtout ce qui a déjà été transmis en famille.",
    detail:
      "Bourdieu et Passeron y voient moins une sélection au mérite qu'une consécration : l'institution valide un capital culturel préexistant sous une forme — la note, le diplôme — qui en efface l'origine sociale.",
    concepts: ['capital-culturel', 'violence-symbolique'],
    processus: ['reproduction-sociale', 'reproduction-des-elites', 'mobilite-sociale', 'ascension-sociale'],
    phenomenes: ['inegalites-scolaires', 'decrochage-scolaire'],
  },
  {
    id: 'strategies-educatives',
    t: 'Stratégies éducatives',
    categorie: 'selection',
    d: "Face à un même système scolaire, les familles calculent différemment le coût et le bénéfice de chaque poursuite d'études, selon leurs ressources et leurs risques.",
    detail:
      "Boudon en fait le ressort principal des inégalités scolaires : une famille modeste renonce plus souvent à une filière longue, non par manque de désir, mais parce que le coût est certain et le bénéfice incertain.",
    concepts: ['individualisme-methodologique', 'effets-pervers'],
    processus: ['reproduction-sociale', 'reproduction-intergenerationnelle'],
    phenomenes: ['inegalites-scolaires'],
  },
  {
    id: 'autocensure-scolaire',
    t: 'Autocensure scolaire',
    categorie: 'selection',
    d: "Des élèves capables renoncent d'eux-mêmes à une filière prestigieuse, jugée « pas pour eux » avant même d'avoir tenté d'y entrer.",
    detail:
      "Le mécanisme n'a besoin d'aucune discrimination explicite pour produire de l'inégalité : il suffit que l'institution reste silencieuse sur ce renoncement pour qu'il paraisse un choix libre.",
    concepts: ['violence-symbolique', 'habitus'],
    processus: ['reproduction-intergenerationnelle'],
    phenomenes: ['inegalites-scolaires'],
  },
  {
    id: 'consecration-institutionnelle',
    t: 'Consécration institutionnelle',
    categorie: 'selection',
    d: "Une institution prestigieuse ne se contente pas de sélectionner : elle confère, par son seul nom, une valeur qui dépasse ce qu'elle a réellement enseigné.",
    detail:
      "Le diplôme d'une grande école vaut moins par son contenu que par le filtre social qu'il a représenté pour y accéder — ce que Bourdieu appelle la magie sociale du titre.",
    concepts: ['capital-symbolique', 'capital-culturel'],
    processus: ['reproduction-des-elites'],
    phenomenes: ['stratification-sociale', 'concentration-des-richesses'],
  },
  {
    id: 'effet-de-pairs',
    t: 'Effet de pairs',
    categorie: 'selection',
    d: "Le niveau, les ambitions et les comportements d'une classe ou d'un quartier influencent chaque élève au-delà de ses seules ressources propres.",
    detail:
      "Un même enfant réussit différemment selon qu'il est entouré de camarades qui visent des études longues ou d'un groupe qui les tient pour hors d'atteinte — la composition sociale d'un établissement agit comme une ressource ou un handicap collectif.",
    concepts: ['formes-de-socialisation'],
    processus: ['mobilite-sociale'],
    phenomenes: ['inegalites-scolaires', 'segregation-urbaine'],
  },
  {
    id: 'devaluation-des-diplomes',
    t: 'Dévaluation des diplômes',
    categorie: 'selection',
    d: "À mesure qu'un diplôme se répand, sa valeur sur le marché du travail baisse, et il en faut un plus élevé pour obtenir la même position qu'avant.",
    detail:
      "C'est un effet pervers au sens de Boudon : chaque famille a rationnellement intérêt à pousser ses enfants plus loin dans les études, et cette course collective déprécie le diplôme que tous visaient.",
    concepts: ['effets-pervers'],
    processus: ['mobilite-sociale'],
    phenomenes: ['inegalites-generationnelles', 'declassement-social'],
  },

  /* — Relationnel et réseaux — */
  {
    id: 'reseau-relationnel',
    t: 'Réseau relationnel',
    categorie: 'relationnel',
    d: "Le carnet d'adresses hérité ou construit qui ouvre des portes — un poste, une information, une recommandation — avant même qu'elles soient publiques.",
    detail:
      "Bourdieu en fait un capital à part entière : sa valeur ne tient pas au nombre de relations mais aux ressources que détiennent ceux avec qui l'on est lié, et à l'entretien constant qu'il exige.",
    concepts: ['capital-social'],
    processus: ['reproduction-sociale', 'reproduction-des-elites'],
    phenomenes: ['chomage', 'stratification-sociale'],
  },
  {
    id: 'homogamie',
    t: 'Homogamie',
    categorie: 'relationnel',
    d: "La tendance, statistiquement massive, à former un couple avec quelqu'un d'un milieu social proche du sien.",
    detail:
      "Le mécanisme consolide la position d'un ménage en cumulant deux patrimoines et deux capitaux culturels comparables, et referme d'autant les chances de ceux qui restent hors de ce cercle de rencontre.",
    concepts: ['classe-sociale', 'capital-culturel'],
    processus: ['reproduction-sociale', 'ascension-sociale'],
    phenomenes: ['homogamie-sociale'],
  },
  {
    id: 'endogamie-des-elites',
    t: 'Endogamie des élites',
    categorie: 'relationnel',
    d: "Une forme resserrée d'homogamie : les élites se recrutent, se forment et se marient largement à l'intérieur d'un même petit monde.",
    detail:
      "Le mécanisme referme la circulation vers le sommet plus sûrement qu'aucune règle écrite : il suffit que les occasions de rencontre — écoles, clubs, cercles professionnels — restent socialement filtrées.",
    concepts: ['capital-social', 'domination-legitime'],
    processus: ['reproduction-des-elites'],
    phenomenes: ['concentration-des-richesses', 'stratification-sociale'],
  },
  {
    id: 'perte-des-liens-faibles',
    t: 'Perte des liens faibles',
    categorie: 'relationnel',
    d: "Les relations les moins intimes — un ancien collègue, une connaissance croisée — sont souvent les plus utiles pour trouver une opportunité, et les premières à disparaître en cas de rupture.",
    detail:
      "Granovetter montre que ces liens faibles ouvrent sur des mondes différents du sien, quand les liens forts, familiaux ou amicaux, referment sur un cercle qui partage déjà les mêmes informations.",
    concepts: ['capital-social'],
    processus: ['desaffiliation'],
    phenomenes: ['exclusion-sociale', 'chomage'],
  },
  {
    id: 'segregation-residentielle',
    t: 'Ségrégation résidentielle',
    categorie: 'relationnel',
    d: "Le tri, rarement décrété mais très régulier, qui concentre les ménages semblables dans les mêmes quartiers.",
    detail:
      "Prix du foncier, réseaux de relations, réputation des écoles et discrimination au logement se combinent pour reproduire, dans l'espace urbain, des frontières sociales que rien n'oblige formellement.",
    concepts: ['blasement-urbain', 'classe-sociale'],
    processus: ['declin-social'],
    phenomenes: ['segregation-urbaine', 'inegalites-territoriales'],
  },
  {
    id: 'discrimination-statistique',
    t: 'Discrimination statistique',
    categorie: 'relationnel',
    d: "Un employeur ou un bailleur, incertain de la valeur réelle d'un candidat, se fie à des caractéristiques de groupe — nom, adresse, âge — comme s'il s'agissait d'une information sur l'individu.",
    detail:
      "Le mécanisme n'exige aucune hostilité personnelle : il suffit de traiter une moyenne de groupe comme un indicateur individuel pour reconduire, à chaque décision prise séparément, une inégalité collective.",
    concepts: ['ideal-type'],
    processus: ['precarisation'],
    phenomenes: ['discrimination-a-l-embauche', 'chomage'],
  },

  /* — Rupture et déclassement — */
  {
    id: 'choc-biographique',
    t: 'Choc biographique',
    categorie: 'rupture',
    d: "Un événement soudain — licenciement, divorce, maladie — qui fragilise une position sociale jusque-là stable.",
    detail:
      "Le choc lui-même ne suffit pas à expliquer le déclassement qui suit : ce sont les ressources disponibles au moment où il survient qui déterminent si la position tient ou bascule.",
    concepts: ['tension-anomique'],
    processus: ['declassement'],
    phenomenes: ['declassement-social', 'pauvrete'],
  },
  {
    id: 'epuisement-des-ressources',
    t: 'Épuisement des ressources',
    categorie: 'rupture',
    d: "La phase où l'épargne, le réseau et les aides disponibles retardent une bascule sans l'empêcher indéfiniment.",
    detail:
      "Ce que révèle ce mécanisme, c'est l'inégalité déjà là avant même la rupture : à choc égal, deux personnes tiennent plus ou moins longtemps selon les ressources accumulées en amont.",
    concepts: ['capital-economique', 'capital-social'],
    processus: ['declassement'],
    phenomenes: ['pauvrete', 'declassement-social'],
  },
  {
    id: 'cumul-des-desavantages',
    t: 'Cumul des désavantages',
    categorie: 'rupture',
    d: "Un premier désavantage — pauvreté, mauvaise santé, faible qualification — augmente la probabilité d'en subir d'autres, qui à leur tour aggravent le premier.",
    detail:
      "Merton en décrit le principe sous le nom d'effet Matthieu : un petit écart initial s'amplifie mécaniquement à chaque étape, si bien que l'écart final entre deux trajectoires dépasse de loin ce que l'écart de départ laissait attendre.",
    concepts: ['tension-anomique', 'capital-economique'],
    processus: ['declassement', 'declin-social'],
    phenomenes: ['pauvrete', 'exclusion-sociale'],
  },
  {
    id: 'ajustement-des-aspirations',
    t: 'Ajustement des aspirations',
    categorie: 'rupture',
    d: "Après une rupture, les attentes et le mode de vie se révisent à la baisse — un ajustement souvent vécu comme une perte d'identité autant que de revenu.",
    detail:
      "Le mécanisme referme la boucle du déclassement : ce n'est pas seulement la position qui change, c'est ce que la personne en vient à juger normal d'espérer pour elle-même.",
    concepts: ['tension-anomique', 'anomie'],
    processus: ['declassement'],
    phenomenes: ['declassement-social'],
  },
  {
    id: 'rupture-du-lien-social',
    t: 'Rupture du lien social',
    categorie: 'rupture',
    d: "L'affaiblissement d'un des pôles qui tiennent une personne insérée — le travail ou les relations — sans que l'autre suffise encore à compenser.",
    detail:
      "Castel en fait la première zone de bascule : ni installé ni exclu, un individu voit un seul de ses deux appuis se fragiliser, ce qui l'expose sans encore le désaffilier.",
    concepts: ['anomie'],
    processus: ['desaffiliation'],
    phenomenes: ['exclusion-sociale'],
  },
  {
    id: 'cumul-des-ruptures',
    t: 'Cumul des ruptures',
    categorie: 'rupture',
    d: "Quand l'absence de travail et l'absence de liens se renforcent l'une l'autre plutôt que de rester deux problèmes séparés.",
    detail:
      "C'est ce cumul, plus que chaque rupture prise isolément, qui rend le retour en arrière difficile : sans réseau, retrouver un emploi coûte plus cher ; sans emploi, le réseau se distend à son tour.",
    concepts: ['anomie', 'etiquetage'],
    processus: ['desaffiliation'],
    phenomenes: ['exclusion-sociale', 'pauvrete'],
  },
  {
    id: 'cumul-de-precarites',
    t: 'Cumul de précarités',
    categorie: 'rupture',
    d: "L'instabilité de l'emploi qui s'étend au logement, à la santé ou au budget, sans rester confinée au seul contrat de travail.",
    detail:
      "Un statut d'emploi instable fragilise l'accès au crédit, donc au logement stable, ce qui fragilise à son tour la santé et la capacité à retrouver un emploi durable — un enchaînement plus qu'une somme.",
    concepts: ['alienation', 'nouvel-esprit-du-capitalisme'],
    processus: ['precarisation'],
    phenomenes: ['precarite-professionnelle', 'exclusion-sociale'],
  },

  /* — Structurel et collectif — */
  {
    id: 'effet-de-structure',
    t: 'Effet de structure',
    categorie: 'structurel',
    d: "Une part de la mobilité observée ne vient pas d'un mérite individuel mais du seul changement de la structure des emplois disponibles d'une génération à l'autre.",
    detail:
      "Quand une économie crée davantage de postes qualifiés qu'elle n'en supprime, une partie de la population monte mécaniquement, indépendamment de tout changement dans les règles de sélection.",
    concepts: ['individualisme-methodologique'],
    processus: ['mobilite-sociale'],
    phenomenes: ['stratification-sociale'],
  },
  {
    id: 'effet-net',
    t: 'Effet net',
    categorie: 'structurel',
    d: "Ce qui reste d'une mobilité observée une fois retiré ce que l'effet de structure suffit à expliquer — la vraie mesure de l'ouverture d'une société.",
    detail:
      "Deux pays peuvent afficher la même mobilité brute et des effets nets très différents : l'un parce que sa structure change vite, l'autre parce qu'il redistribue réellement les positions.",
    concepts: ['individualisme-methodologique'],
    processus: ['mobilite-sociale'],
    phenomenes: ['stratification-sociale'],
  },
  {
    id: 'choc-economique-structurel',
    t: 'Choc économique structurel',
    categorie: 'structurel',
    d: "Une transformation extérieure — désindustrialisation, automatisation, concurrence internationale — qui fragilise un secteur ou une profession entière, non un seul individu.",
    detail:
      "À la différence d'un choc biographique, celui-ci touche un groupe en bloc et en même temps, ce qui change sa nature : la difficulté devient collective avant de redevenir, pour chacun, une épreuve personnelle.",
    concepts: ['tension-anomique'],
    processus: ['declin-social'],
    phenomenes: ['chomage', 'pauvrete'],
  },
  {
    id: 'perte-de-representation',
    t: 'Perte de représentation',
    categorie: 'structurel',
    d: "Un groupe en déclin économique perd aussi, et souvent plus vite, sa représentation politique et médiatique.",
    detail:
      "Cette double perte — de poids économique et de voix publique — accélère le déclin plus qu'elle ne l'accompagne : un groupe moins visible obtient plus difficilement les décisions qui pourraient ralentir sa chute.",
    concepts: ['domination-legitime'],
    processus: ['declin-social'],
    phenomenes: ['abstention-electorale'],
  },
  {
    id: 'repli-identitaire',
    t: 'Repli identitaire',
    categorie: 'structurel',
    d: "Un groupe en déclin se construit parfois une identité collective autour de ce qu'il a perdu plutôt que de ce qu'il vise.",
    detail:
      "Ce repli offre une reconnaissance que l'économie ou la politique n'offrent plus, au prix d'une identité tournée vers le passé plus que vers une trajectoire à venir.",
    concepts: ['anomie'],
    processus: ['declin-social'],
    phenomenes: ['polarisation-sociale'],
  },
  {
    id: 'flexibilisation-du-travail',
    t: 'Flexibilisation du travail',
    categorie: 'structurel',
    d: "Le remplacement progressif des contrats stables par des statuts courts, présentés comme une étape transitoire vers l'emploi durable.",
    detail:
      "Boltanski montre comment cette flexibilité, autrefois subie, se retourne en valeur revendiquée — l'autonomie promise à chacun masquant souvent une perte de protection bien réelle.",
    concepts: ['nouvel-esprit-du-capitalisme'],
    processus: ['precarisation'],
    phenomenes: ['precarite-professionnelle'],
  },
  {
    id: 'normalisation-de-l-instabilite',
    t: "Normalisation de l'instabilité",
    categorie: 'structurel',
    d: "Le moment où l'incertitude cesse d'être vécue comme une passe difficile pour devenir la condition ordinaire d'une trajectoire.",
    detail:
      "Le mécanisme referme la précarisation sur elle-même : ce qui alarmait au premier contrat court n'étonne plus au dixième, et l'instabilité finit par sembler la norme plutôt que l'exception.",
    concepts: ['alienation'],
    processus: ['precarisation'],
    phenomenes: ['precarite-professionnelle'],
  },
  {
    id: 'trappe-a-pauvrete',
    t: 'Trappe à pauvreté',
    categorie: 'structurel',
    d: "Un dispositif d'aide construit pour protéger finit, par son seul mode de calcul, par décourager la reprise d'un emploi qui ferait perdre plus en aides que ce que le salaire rapporterait.",
    detail:
      "Le mécanisme ne suppose aucune mauvaise volonté : il suffit qu'une aide dégressive s'annule plus vite que le revenu d'activité ne progresse pour qu'un calcul parfaitement rationnel conduise à rester hors de l'emploi — ce que les réformes des minima sociaux tentent régulièrement de corriger, sans jamais l'éliminer complètement.",
    concepts: ['individualisme-methodologique', 'effets-pervers'],
    processus: ['precarisation'],
    phenomenes: ['pauvrete', 'chomage'],
  },

  /* — Symbolique et normatif — */
  {
    id: 'naturalisation-des-inegalites',
    t: 'Naturalisation des inégalités',
    categorie: 'symbolique',
    d: "Le processus par lequel un écart social en vient à paraître naturel ou mérité, plutôt que produit par des mécanismes qu'on pourrait nommer.",
    detail:
      "Une fois naturalisée, une inégalité n'a plus besoin d'être défendue : elle se transmet comme une évidence, y compris par ceux qu'elle dessert le moins.",
    concepts: ['violence-symbolique', 'ideologie'],
    processus: ['reproduction-sociale', 'reproduction-des-elites'],
    phenomenes: ['stratification-sociale'],
  },
  {
    id: 'responsabilisation-individuelle',
    t: 'Responsabilisation individuelle',
    categorie: 'symbolique',
    d: "La réussite ou l'échec d'un parcours se lisent comme un mérite ou une faute personnels, plus rarement comme l'effet d'une structure.",
    detail:
      "Le mécanisme rend chacun comptable de sa position, ce qui décharge l'institution qui l'a produite et alourdit, pour l'individu, le poids de ce qui lui échappe.",
    concepts: ['individualisme-methodologique', 'violence-symbolique'],
    processus: ['individualisation'],
    phenomenes: ['declassement-social'],
  },
  {
    id: 'affaiblissement-des-cadres-collectifs',
    t: 'Affaiblissement des cadres collectifs',
    categorie: 'symbolique',
    d: "Le relâchement des appartenances — classe, religion, famille élargie — qui scénarisaient autrefois une grande partie d'un parcours de vie.",
    detail:
      "Tocqueville en identifie le ressort le plus ancien : l'égalisation des conditions dissout les corps intermédiaires qui organisaient la vie sociale, et laisse chacun davantage seul face à ses choix.",
    concepts: ['egalisation-des-conditions'],
    processus: ['individualisation'],
    phenomenes: ['monoparentalite'],
  },
  {
    id: 'multiplication-des-choix',
    t: 'Multiplication des choix',
    categorie: 'symbolique',
    d: "Ce qu'un cadre collectif décidait autrefois d'avance — couple, carrière, lieu de vie — revient désormais à l'individu seul d'arbitrer.",
    detail:
      "Chaque choix supplémentaire est aussi une charge : arbitrer sans script préétabli demande des ressources — information, confiance en soi, réseau — inégalement réparties.",
    concepts: ['individualisme-methodologique'],
    processus: ['individualisation'],
    phenomenes: ['monoparentalite'],
  },
  {
    id: 'resocialisation',
    t: 'Resocialisation',
    categorie: 'symbolique',
    d: "L'apprentissage tardif, jamais tout à fait complet, des codes d'un nouveau milieu social après une ascension.",
    detail:
      "Une aisance acquise sur le tard se repère souvent malgré elle — un accent, une hésitation — et rappelle à celui qui l'a acquise qu'il n'est pas tout à fait chez lui dans le milieu qu'il a rejoint.",
    concepts: ['habitus'],
    processus: ['ascension-sociale'],
    phenomenes: [],
  },
  {
    id: 'acquisition-de-ressources-scolaires',
    t: 'Acquisition de ressources scolaires',
    categorie: 'symbolique',
    d: "L'accès, par la réussite ou une aide extérieure, à des ressources scolaires supérieures à celles du milieu d'origine.",
    detail:
      "À la différence de la transmission, ce mécanisme fait gagner à l'individu des atouts que sa famille ne détenait pas — la condition la plus fréquente d'une ascension sociale réelle.",
    concepts: ['capital-culturel'],
    processus: ['ascension-sociale'],
    phenomenes: ['inegalites-scolaires'],
  },
  {
    id: 'preparation-precoce',
    t: 'Préparation précoce',
    categorie: 'symbolique',
    d: "Un entraînement délibéré, commencé dès l'enfance, aux codes et aux épreuves qui filtrent l'accès aux positions dirigeantes.",
    detail:
      "Ce n'est pas seulement une socialisation diffuse : c'est un investissement ciblé et continu — cours particuliers, culture générale organisée, entraînement aux oraux — que seules certaines familles peuvent soutenir dans la durée.",
    concepts: ['capital-culturel', 'capital-economique'],
    processus: ['reproduction-des-elites'],
    phenomenes: ['inegalites-scolaires'],
  },
];
