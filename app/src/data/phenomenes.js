/**
 * Les phénomènes sociaux : ce que la sociologie étudie, distinct de ce avec
 * quoi elle l'étudie.
 *
 * Un concept (`concepts.js`) est un outil théorique — l'anomie, l'habitus,
 * l'étiquetage. Un phénomène est un fait social concret et daté — le chômage,
 * la gentrification, le cyberharcèlement. Le même phénomène convoque
 * plusieurs outils à la fois ; le même outil éclaire plusieurs phénomènes.
 * C'est ce croisement que cette carte rend visible, sans le confondre avec
 * les autres couches qu'un phénomène pourrait porter — théories, auteurs,
 * méthodes, données — volontairement absentes ici. Les mélanger aurait rendu
 * la carte illisible plutôt que plus riche ; les ajouter est un chantier à
 * part entière, pas une extension de celui-ci.
 *
 * Règles de rédaction, par symétrie avec `courants.js` et `domains.js` :
 * - `concepts` ne cite que des fiches du corpus (cliquables) ; `notions` que
 *   des termes qui n'en ont pas (texte libre « Terme — ce qui le relie »,
 *   non cliquable).
 * - Un phénomène peut n'avoir aucun concept du corpus : certains phénomènes
 *   contemporains — l'étalement urbain, l'éco-anxiété, la migration
 *   climatique — ne trouvent pas d'outil direct dans les quinze fiches. Les
 *   forcer aurait été plus malhonnête que de les laisser sans.
 * - Cette liste est délibérément sélective : 28 phénomènes, pas la centaine
 *   qu'un inventaire exhaustif de la discipline pourrait couvrir. Voir la
 *   documentation pour ce choix.
 */

/** Catégories d'affichage, dans l'ordre de la liste. */
export const CATEGORIES_PHENOMENES = [
  { id: 'travail', t: 'Travail et emploi', d: "Ce qu'on fait pour vivre, et ce que cela fait de nous." },
  { id: 'ville', t: 'Ville et logement', d: "Qui habite où, et ce que l'espace redistribue sans le dire." },
  {
    id: 'famille-parcours',
    t: 'Famille et parcours de vie',
    d: "Les étapes d'une vie, et les formes qu'elles prennent aujourd'hui.",
  },
  { id: 'ecole', t: 'École et éducation', d: "Ce que l'école promet, et ce qu'elle transmet vraiment." },
  {
    id: 'inegalites',
    t: 'Inégalités et classes sociales',
    d: "Qui monte, qui descend, qui reste — et pourquoi ce n'est jamais tout à fait un hasard.",
  },
  { id: 'genre-sexualite', t: 'Genre et sexualité', d: "Ce que le masculin et le féminin font encore aux trajectoires." },
  { id: 'migration', t: 'Migration et altérité', d: "Partir, arriver, rester étranger malgré les papiers." },
  {
    id: 'numerique-medias',
    t: 'Numérique et médias',
    d: "Ce que les écrans changent à l'attention, à l'opinion et au lien social.",
  },
  {
    id: 'deviance-controle',
    t: 'Déviance et contrôle social',
    d: "Qui est puni, qui est excusé, et ce qui trace la frontière.",
  },
  { id: 'sante-corps', t: 'Santé et corps', d: "Le corps comme fait social autant que biologique." },
  {
    id: 'politique-mobilisations',
    t: 'Politique et mobilisations',
    d: "Voter, se taire ou descendre dans la rue : trois manières de peser.",
  },
  { id: 'environnement', t: 'Environnement', d: "La crise écologique comme fait social, pas seulement climatique." },
];

/** Dimensions transversales : les angles sous lesquels un phénomène se lit. */
export const DIMENSIONS_PHENOMENES = [
  { id: 'economique', t: 'Économique' },
  { id: 'sociale', t: 'Sociale' },
  { id: 'urbaine', t: 'Urbaine' },
  { id: 'politique', t: 'Politique publique' },
  { id: 'culturelle', t: 'Culturelle' },
  { id: 'demographique', t: 'Démographique' },
  { id: 'genre', t: 'Genre' },
  { id: 'travail', t: 'Travail' },
  { id: 'famille', t: 'Famille' },
  { id: 'sante', t: 'Santé' },
  { id: 'numerique', t: 'Numérique' },
  { id: 'environnementale', t: 'Environnementale' },
  { id: 'educative', t: 'Éducative' },
  { id: 'juridique', t: 'Juridique' },
];

export const PHENOMENES = [
  /* — Travail et emploi — */
  {
    id: 'chomage',
    t: 'Chômage',
    categorie: 'travail',
    d: "Ne pas avoir d'emploi n'est pas qu'une absence de revenu : c'est une position sociale, avec son statut et ses effets en cascade.",
    detail:
      "Le chômage se vit différemment selon la classe, l'âge et la durée : un cadre entre deux postes et un ouvrier de longue durée n'affrontent pas la même épreuve. Merton y verrait une tension entre un but socialement valorisé — l'emploi — et des moyens légitimes qui manquent pour l'atteindre.",
    dimensions: ['economique', 'sociale', 'travail'],
    concepts: ['classe-sociale', 'anomie', 'tension-anomique'],
    notions: [
      "Précarité — l'instabilité qui s'installe entre deux contrats, plus qu'un accident passager",
      "Exclusion sociale — la perte progressive des liens que l'emploi entretenait",
      "Identité professionnelle — ce que « qui suis-je » doit à « que fais-je »",
      "Capital social — le réseau qui aide, ou qui manque, pour retrouver un poste",
      "Mobilité sociale — le risque d'un déclassement durable après une rupture d'emploi",
      "Discrimination à l'embauche — un obstacle qui s'ajoute à la recherche, selon le nom, l'adresse ou l'âge",
      "Politiques publiques — indemnisation, formation, accompagnement : ce que la collectivité choisit de compenser",
      "Effets psychologiques — perte d'estime de soi, isolement, parfois dépression",
      "Famille — le foyer qui amortit, ou qui subit, la perte d'un revenu",
    ],
  },
  {
    id: 'precarite-professionnelle',
    t: 'Précarité professionnelle',
    categorie: 'travail',
    d: "Un emploi ne protège plus automatiquement : CDD, temps partiel subi, intérim répété redessinent la frontière entre avoir un travail et en vivre.",
    detail:
      "La précarité ne se loge pas dans un seul statut mais dans leur enchaînement : c'est l'incertitude sur le lendemain, plus que le contrat du moment, qui définit la position. Boltanski y verrait une des figures du nouvel esprit du capitalisme, où la flexibilité se présente en promesse d'autonomie.",
    dimensions: ['economique', 'sociale', 'travail', 'juridique'],
    concepts: ['nouvel-esprit-du-capitalisme', 'alienation'],
    notions: [
      "Flexibilité — l'exigence d'adaptation permanente présentée comme une liberté",
      "Contrat court — CDD, intérim, temps partiel subi : la norme d'emploi s'est fragmentée",
      "Working poor — travailler ne suffit plus toujours à sortir de la pauvreté",
      "Autonomie — un mot valorisant qui recouvre souvent une perte de protection",
      "Syndicalisation — un rempart collectif qui s'affaiblit avec la dispersion des statuts",
    ],
  },
  {
    id: 'burn-out',
    t: 'Burn-out',
    categorie: 'travail',
    d: "L'épuisement professionnel n'est pas une fragilité individuelle : c'est ce qui arrive quand l'investissement demandé dépasse ce qu'un poste peut rendre en reconnaissance.",
    detail:
      "Le burn-out déplace vers l'individu une question d'organisation du travail : Parsons y lirait un système de rôles et d'attentes devenu intenable, plus qu'une défaillance personnelle à corriger.",
    dimensions: ['sante', 'travail', 'sociale', 'juridique'],
    concepts: ['role-et-attentes', 'alienation'],
    notions: [
      "Surcharge de travail — un déséquilibre durable entre exigences et ressources",
      "Reconnaissance au travail — ce que le salaire ne remplace pas quand il manque",
      "Présentéisme — rester au poste sans plus pouvoir vraiment y être",
      "Santé mentale au travail — un enjeu longtemps tenu pour une affaire privée",
      "Droit à la déconnexion — une réponse juridique récente à une frontière qui s'est effacée",
    ],
  },

  /* — Ville et logement — */
  {
    id: 'gentrification',
    t: 'Gentrification',
    categorie: 'ville',
    d: "Un quartier populaire change d'habitants sans changer d'adresse : les prix montent, et ceux qui l'ont rendu désirable finissent par ne plus pouvoir y vivre.",
    detail:
      "Bourdieu y verrait un capital culturel qui précède et prépare le capital économique : ce sont souvent des habitants dotés en premier — artistes, étudiants, classes moyennes cultivées — qui rendent un quartier attractif pour des classes plus aisées ensuite.",
    dimensions: ['economique', 'sociale', 'urbaine', 'politique', 'culturelle', 'demographique'],
    concepts: ['capital-culturel', 'champ'],
    notions: [
      "Ségrégation urbaine — la recomposition, quartier par quartier, de qui vit où",
      "Espace social — la position dans la ville comme reflet d'une position sociale plus large",
      "Mobilité résidentielle — le déplacement, souvent contraint, des habitants historiques",
      "Spéculation immobilière — la hausse des prix qui précède et accompagne l'arrivée de nouveaux habitants",
      "Patrimonialisation — la mise en valeur du bâti ancien qui accélère souvent le processus qu'elle célèbre",
    ],
  },
  {
    id: 'segregation-urbaine',
    t: 'Ségrégation urbaine',
    categorie: 'ville',
    d: "Une ville n'est jamais un espace neutre : elle trie, sans l'annoncer, qui vit près de qui.",
    detail:
      "La ségrégation n'exige aucune interdiction formelle : le prix du logement, la carte scolaire et les réseaux de transport suffisent à séparer des populations qui ne se croisent presque plus. L'habitus de Bourdieu explique pourquoi chacun s'y sent, ou non, à sa place.",
    dimensions: ['urbaine', 'sociale', 'politique', 'demographique'],
    concepts: ['champ', 'habitus'],
    notions: [
      "Relégation territoriale — l'éloignement des quartiers populaires des centres et des emplois",
      "Ghetto — la concentration extrême d'une population disqualifiée, au sens le plus fort du terme",
      "Effet de quartier — ce qu'un lieu ajoute, ou retire, aux chances de ses habitants",
      "Mixité sociale — un objectif de politique urbaine plus proclamé qu'atteint",
      "Enclavement — l'isolement d'un quartier par le réseau de transport autant que par la carte",
    ],
  },
  {
    id: 'etalement-urbain',
    t: 'Étalement urbain',
    categorie: 'ville',
    d: "La ville s'étend sans se densifier : chacun s'éloigne du centre pour un logement plus grand, et retrouve la dépendance qu'il croyait fuir.",
    detail:
      "Aucun concept du corpus ne porte directement sur la périurbanisation — un rappel que quinze fiches ne couvrent pas tout : le phénomène s'analyse surtout par ses données (prix du foncier, temps de trajet) plus que par les outils déjà présents ici.",
    dimensions: ['urbaine', 'economique', 'environnementale', 'demographique'],
    concepts: [],
    notions: [
      "Périurbanisation — l'installation en dehors des villes, dans des zones ni tout à fait urbaines ni rurales",
      "Dépendance automobile — la voiture individuelle comme condition d'accès à l'emploi et aux services",
      "Artificialisation des sols — l'extension urbaine qui grignote les terres agricoles et naturelles",
      "Fracture territoriale — l'écart de services et d'opportunités entre centres et périphéries",
      "Coût du logement — le moteur le plus souvent cité de l'éloignement des ménages modestes",
    ],
  },

  /* — Famille et parcours de vie — */
  {
    id: 'monoparentalite',
    t: 'Monoparentalité',
    categorie: 'famille-parcours',
    d: "Élever seul un enfant n'est pas une exception statistique : c'est une configuration familiale à part entière, et l'une des plus exposées à la pauvreté.",
    detail:
      "La monoparentalité recompose les attentes de rôle qu'un couple se répartissait : Parsons y verrait un système où une seule personne doit désormais assurer les fonctions qu'il attribuait à deux.",
    dimensions: ['famille', 'economique', 'sociale', 'genre'],
    concepts: ['role-et-attentes'],
    notions: [
      "Charge mentale — la gestion continue du foyer qui repose sur un seul adulte",
      "Pauvreté des familles monoparentales — un risque nettement plus élevé que pour un couple",
      "Garde d'enfant — l'organisation du quotidien qui conditionne l'accès à l'emploi",
      "Pension alimentaire — une ressource promise, pas toujours versée",
      "Recomposition familiale — une étape fréquente après une monoparentalité, pas son terme obligé",
    ],
  },
  {
    id: 'vieillissement-demographique',
    t: 'Vieillissement démographique',
    categorie: 'famille-parcours',
    d: "Une société où l'on vit plus longtemps qu'on ne fait d'enfants change de forme : elle doit réinventer la solidarité entre générations.",
    detail:
      "Elias parlerait ici de configuration : ni les personnes âgées ni les actifs qui les entourent n'existent indépendamment du tissu de dépendances réciproques qui les relie, et qui se tend à mesure que ce tissu vieillit.",
    dimensions: ['demographique', 'sante', 'economique', 'famille'],
    concepts: ['configuration'],
    notions: [
      "Dépendance — la perte d'autonomie qui déplace la question du soin vers la collectivité",
      "Isolement des personnes âgées — un risque qui grandit avec l'âge et le veuvage",
      "Retraite par répartition — un système qui suppose un équilibre entre actifs et retraités, de plus en plus tendu",
      "Solidarité intergénérationnelle — l'aide qui circule, dans les deux sens, entre générations d'une même famille",
      "Âgisme — la discrimination liée à l'âge, plus tolérée socialement que d'autres",
    ],
  },

  /* — École et éducation — */
  {
    id: 'decrochage-scolaire',
    t: 'Décrochage scolaire',
    categorie: 'ecole',
    d: "Quitter l'école sans diplôme n'est presque jamais un choix isolé : c'est l'aboutissement d'un désajustement qui a commencé bien avant la sortie.",
    detail:
      "Bourdieu y verrait l'écart, accumulé sur des années, entre l'habitus scolaire attendu et le capital culturel réellement transmis par la famille — un écart que l'école mesure sans toujours l'avoir causé seule.",
    dimensions: ['educative', 'sociale', 'economique'],
    concepts: ['capital-culturel', 'habitus'],
    notions: [
      "Échec scolaire — un jugement qui porte sur l'élève plus que sur les conditions de son parcours",
      "Orientation scolaire — un moment où les inégalités de départ se rejouent en choix apparemment libres",
      "Absentéisme — le premier signe, souvent négligé, d'un désengagement plus profond",
      "Insertion professionnelle — ce que devient, sans diplôme, l'entrée dans la vie active",
      "Raccrochage scolaire — les dispositifs qui tentent de revenir sur une sortie précoce",
    ],
  },
  {
    id: 'inegalites-scolaires',
    t: 'Inégalités scolaires',
    categorie: 'ecole',
    d: "L'école promet l'égalité des chances ; les résultats suivent pourtant fidèlement l'origine sociale de l'élève.",
    detail:
      "C'est la thèse centrale de Bourdieu et Passeron : l'école ne corrige pas les inégalités de départ, elle les convertit en mérite scolaire, ce qui les rend plus difficiles à contester — une violence d'autant plus efficace qu'elle ne se voit pas comme telle.",
    dimensions: ['educative', 'sociale', 'economique', 'culturelle'],
    concepts: ['capital-culturel', 'habitus', 'violence-symbolique'],
    notions: [
      "Reproduction sociale — la transmission, via l'école, des positions plus que des mérites",
      "Carte scolaire — un outil de mixité que le contournement affaiblit",
      "Aide aux devoirs — un soutien que toutes les familles ne peuvent pas apporter également",
      "Ségrégation scolaire — la concentration d'élèves similaires dans un même établissement",
      "Autocensure — renoncer à une filière qu'on croit, à tort ou à raison, hors de portée",
    ],
  },

  /* — Inégalités et classes sociales — */
  {
    id: 'pauvrete',
    t: 'Pauvreté',
    categorie: 'inegalites',
    d: "La pauvreté n'est pas seulement un manque d'argent : c'est une accumulation de manques qui se renforcent les uns les autres.",
    detail:
      "Merton y lirait une tension anomique généralisée — la promesse d'une réussite ouverte à tous, contredite par des moyens légitimes très inégalement distribués pour l'atteindre.",
    dimensions: ['economique', 'sociale', 'sante'],
    concepts: ['tension-anomique', 'anomie'],
    notions: [
      "Seuil de pauvreté — une frontière statistique qui ne dit rien du vécu de la privation",
      "Non-recours — les aides sociales auxquelles on a droit et qu'on ne demande pas",
      "Stigmatisation de la pauvreté — le soupçon qui pèse sur celui qui vit des minima sociaux",
      "Précarité énergétique — ne plus pouvoir se chauffer, une privation devenue indicateur à part entière",
      "Aide alimentaire — un filet devenu, pour certains, un mode de subsistance durable",
    ],
  },
  {
    id: 'declassement-social',
    t: 'Déclassement social',
    categorie: 'inegalites',
    d: "Faire moins bien que ses parents : une expérience de plus en plus commune pour les générations nées après la croissance des Trente Glorieuses.",
    detail:
      "Le déclassement se mesure autant en position relative qu'en niveau de vie absolu : on peut vivre mieux que ses parents en valeur et se sentir déclassé, si la comparaison sociale de référence a, elle, encore plus progressé.",
    dimensions: ['economique', 'sociale', 'demographique'],
    concepts: ['tension-anomique'],
    notions: [
      "Mobilité sociale descendante — l'inverse de la promesse méritocratique",
      "Diplôme dévalué — un niveau d'études qui ne garantit plus la position qu'il garantissait à la génération précédente",
      "Frustration relative — se sentir déclassé par comparaison, même sans reculer dans l'absolu",
      "Classes moyennes — la catégorie la plus exposée au sentiment de déclassement",
      "Ascenseur social en panne — une image devenue un diagnostic partagé",
    ],
  },
  {
    id: 'concentration-des-richesses',
    t: 'Concentration des richesses',
    categorie: 'inegalites',
    d: "Le patrimoine se concentre plus vite que les revenus ne se répartissent : hériter compte de plus en plus pour la position qu'on occupera.",
    detail:
      "Tocqueville avait fait de l'égalisation des conditions le grand mouvement des sociétés démocratiques ; la concentration contemporaine du patrimoine s'y lit comme une reprise, à front renversé, du même mouvement.",
    dimensions: ['economique', 'politique', 'sociale'],
    concepts: ['classe-sociale', 'egalisation-des-conditions'],
    notions: [
      "Héritage — la part de la position sociale qui ne se gagne pas, mais se reçoit",
      "Rente — un revenu tiré de la propriété plus que du travail",
      "Évasion fiscale — une pratique qui accentue l'écart entre les patrimoines déclarés et réels",
      "1 % les plus riches — un raccourci statistique devenu repère du débat public",
      "Fiscalité du patrimoine — un levier politique disputé pour freiner la concentration",
    ],
  },

  /* — Genre et sexualité — */
  {
    id: 'ecart-salarial',
    t: 'Écart salarial de genre',
    categorie: 'genre-sexualite',
    d: "À poste comparable, les femmes gagnent encore moins que les hommes : un écart que ni le diplôme ni l'expérience n'expliquent en totalité.",
    detail:
      "Une partie de l'écart tient à des rôles professionnels genrés qui restent attendus des deux côtés — Parsons y verrait une distribution de rôles ; Bourdieu, une violence symbolique acceptée y compris par celles qui la subissent.",
    dimensions: ['genre', 'economique', 'travail'],
    concepts: ['role-et-attentes', 'violence-symbolique'],
    notions: [
      "Plafond de verre — la limite invisible qui freine l'accès des femmes aux postes de direction",
      "Temps partiel — un aménagement du travail très majoritairement féminin",
      "Charge mentale — la gestion invisible du foyer qui pèse sur la disponibilité professionnelle",
      "Ségrégation professionnelle — la concentration des femmes dans certains métiers, souvent moins valorisés",
      "Pénalité maternelle — l'écart de carrière qui s'ouvre après une naissance, presque toujours au détriment de la mère",
    ],
  },
  {
    id: 'violences-conjugales',
    t: 'Violences conjugales',
    categorie: 'genre-sexualite',
    d: "La violence conjugale n'est pas un débordement ponctuel : c'est le plus souvent un système d'emprise qui s'installe et s'aggrave dans la durée.",
    detail:
      "Weber distinguait la domination légitime de la contrainte pure ; l'emprise conjugale tient précisément à ce qu'elle se fait passer, un temps, pour la première — jusqu'à ce que la violence symbolique cède la place à la violence physique.",
    dimensions: ['genre', 'juridique', 'sociale', 'sante'],
    concepts: ['domination-legitime', 'violence-symbolique'],
    notions: [
      "Emprise — le contrôle progressif qui isole la victime avant même le premier coup",
      "Cycle de la violence — tension, agression, réconciliation, accalmie : un schéma qui se répète",
      "Féminicide — le terme qui nomme le meurtre d'une femme parce qu'elle est une femme",
      "Ordonnance de protection — une réponse juridique récente à l'urgence du danger",
      "Emprise économique — priver l'autre de ressources pour l'empêcher de partir",
    ],
  },

  /* — Migration et altérité — */
  {
    id: 'migration-internationale',
    t: 'Migration internationale',
    categorie: 'migration',
    d: "Partir n'est jamais qu'un déplacement géographique : c'est aussi une rupture de statut, à recomposer entièrement dans le pays d'arrivée.",
    detail:
      "Simmel avait fait de l'étranger une forme de socialisation à part entière — ni tout à fait dedans, ni tout à fait dehors : une position sociale, pas seulement une provenance.",
    dimensions: ['demographique', 'sociale', 'politique', 'economique'],
    concepts: ['formes-de-socialisation'],
    notions: [
      "Diaspora — la communauté dispersée qui garde un lien avec le pays d'origine",
      "Double absence — n'être plus tout à fait de là-bas, pas encore tout à fait d'ici",
      "Regroupement familial — la migration qui suit et prolonge une première installation",
      "Déqualification — occuper, à l'arrivée, un emploi bien en dessous de sa formation",
      "Politique migratoire — le cadre légal qui décide qui peut rester, et à quelles conditions",
    ],
  },
  {
    id: 'discrimination-a-l-embauche',
    t: "Discrimination à l'embauche",
    categorie: 'migration',
    d: "À CV égal, le nom, l'adresse ou l'apparence suffisent parfois à écarter une candidature — un écart que le testing a rendu difficile à nier.",
    detail:
      "Becker montrerait qu'être écarté n'a pas besoin d'être nommé pour agir : l'étiquette précède souvent l'examen du dossier, et se referme avant même l'entretien.",
    dimensions: ['juridique', 'sociale', 'economique'],
    concepts: ['etiquetage', 'domination-legitime'],
    notions: [
      "Testing — la méthode qui compare des candidatures identiques pour mesurer une discrimination réelle",
      "CV anonyme — une réponse partielle, aux effets limités, à la discrimination à l'embauche",
      "Racisme institutionnel — une discrimination qui ne suppose pas d'intention individuelle",
      "Réseau professionnel — un capital inégalement réparti selon l'origine sociale et migratoire",
      "Plainte pour discrimination — une voie de recours peu utilisée malgré l'ampleur du phénomène",
    ],
  },

  /* — Numérique et médias — */
  {
    id: 'desinformation',
    t: 'Désinformation',
    categorie: 'numerique-medias',
    d: "Une fausse information circule plus vite et plus loin qu'un démenti : les réseaux sociaux n'ont pas inventé la rumeur, mais ils en ont changé la vitesse.",
    detail:
      "L'École de Francfort y reconnaîtrait une industrie culturelle poussée à son terme : une information calibrée pour l'engagement plus que pour l'exactitude, produite par une raison devenue purement instrumentale.",
    dimensions: ['numerique', 'culturelle', 'politique'],
    concepts: ['industrie-culturelle', 'raison-instrumentale', 'ideologie'],
    notions: [
      "Fake news — l'information fabriquée pour tromper, diffusée comme si elle était vraie",
      "Chambre d'écho — un espace où l'on ne croise plus que des opinions qui confirment les siennes",
      "Fact-checking — la vérification qui arrive presque toujours après la viralité",
      "Théorie du complot — une explication qui rassure en désignant un responsable caché",
      "Éducation aux médias — la réponse la plus souvent proposée, la moins souvent financée",
    ],
  },
  {
    id: 'addiction-aux-reseaux-sociaux',
    t: 'Addiction aux réseaux sociaux',
    categorie: 'numerique-medias',
    d: "Les plateformes ne capturent pas l'attention par accident : leur modèle économique en dépend, et leur conception l'optimise.",
    detail:
      "Goffman fournirait la moitié de l'explication — la mise en scène de soi, la façade entretenue pour un public — et l'industrie culturelle l'autre : un dispositif qui transforme cette mise en scène en flux publicitaire continu.",
    dimensions: ['numerique', 'sante', 'sociale'],
    concepts: ['industrie-culturelle', 'mise-en-scene-de-soi'],
    notions: [
      "Économie de l'attention — un marché où le temps de cerveau disponible se vend aux annonceurs",
      "Capitalisme de surveillance — la collecte des comportements en ligne comme matière première",
      "FOMO — la peur de manquer ce qui se passe ailleurs, qui pousse à rester connecté",
      "Comparaison sociale numérique — mesurer sa vie à l'aune de vies mises en scène",
      "Défilement infini — une conception d'interface pensée pour ne jamais offrir de point d'arrêt",
    ],
  },
  {
    id: 'cyberharcelement',
    t: 'Cyberharcèlement',
    categorie: 'numerique-medias',
    d: "Le harcèlement ne s'arrête plus à la porte de l'école ou du bureau : il suit sur l'écran, et ne connaît pas d'heure de fermeture.",
    detail:
      "Goffman y verrait un stigmate rendu public et permanent : ce qui, en face à face, restait localisé à une scène précise se rejoue et se propage indéfiniment en ligne.",
    dimensions: ['numerique', 'sociale', 'sante', 'juridique'],
    concepts: ['stigmate', 'etiquetage'],
    notions: [
      "Anonymat en ligne — une protection pour la victime, une impunité pour l'agresseur",
      "Effet de meute — un harcèlement qui se construit à plusieurs, chacun minimisant sa propre part",
      "Raid numérique — l'action coordonnée d'un grand nombre de comptes contre une seule cible",
      "Modération de contenu — un travail massif, largement invisible, effectué par les plateformes",
      "Droit à l'oubli — la possibilité, limitée, de faire effacer un contenu qui nuit durablement",
    ],
  },

  /* — Déviance et contrôle social — */
  {
    id: 'delinquance-juvenile',
    t: 'Délinquance juvénile',
    categorie: 'deviance-controle',
    d: "Un même acte n'est pas jugé pareil selon qui le commet : la délinquance des mineurs cristallise autant les faits que la manière dont on les regarde.",
    detail:
      "Becker y verrait l'entrepreneur de morale à l'œuvre autant que l'acte lui-même : c'est souvent la réaction — médiatique, institutionnelle — qui installe une carrière déviante plus qu'elle ne la sanctionne.",
    dimensions: ['juridique', 'sociale', 'educative'],
    concepts: ['etiquetage', 'carriere-deviante', 'entrepreneur-de-morale'],
    notions: [
      "Bande — le groupe de pairs comme cadre d'apprentissage de pratiques déviantes",
      "Récidive — le retour à l'acte que la sanction est censée prévenir et parfois favorise",
      "Prévention spécialisée — l'intervention sociale hors institution, sur le terrain des jeunes concernés",
      "Justice des mineurs — un droit pensé pour l'éducation autant que pour la sanction",
      "Panique morale — l'amplification médiatique d'un phénomène minoritaire en menace généralisée",
    ],
  },
  {
    id: 'incarceration-de-masse',
    t: 'Incarcération de masse',
    categorie: 'deviance-controle',
    d: "Une prison surpeuplée ne se contente pas de punir : elle produit ses propres effets, souvent contraires à ceux qu'elle affiche.",
    detail:
      "Becker y verrait une carrière déviante que l'institution, loin de l'interrompre, contribue parfois à consolider — l'étiquette d'ancien détenu pesant bien après la peine purgée.",
    dimensions: ['juridique', 'sociale', 'politique'],
    concepts: ['etiquetage', 'carriere-deviante'],
    notions: [
      "Surpopulation carcérale — un taux d'occupation qui dépasse durablement la capacité des établissements",
      "Récidive post-carcérale — la sortie de prison comme moment à haut risque de retour à l'acte",
      "Peines alternatives — des dispositifs qui existent, mais restent minoritaires dans les pratiques judiciaires",
      "Surreprésentation — certains groupes sociaux nettement plus présents en détention que dans la population générale",
      "Réinsertion — l'objectif affiché de la peine, le moins souvent atteint dans les faits",
    ],
  },

  /* — Santé et corps — */
  {
    id: 'medicalisation',
    t: 'Médicalisation',
    categorie: 'sante-corps',
    d: "De plus en plus de situations de la vie ordinaire — la tristesse, la timidité, la vieillesse — sont désormais nommées, et traitées, en termes médicaux.",
    detail:
      "Merton y verrait une fonction latente de la médecine moderne : au-delà de soigner, elle définit ce qui compte comme un problème à traiter — un pouvoir de nomination que Weber aurait rattaché à une forme de domination légitime, fondée sur la compétence.",
    dimensions: ['sante', 'sociale', 'economique'],
    concepts: ['fonction-latente', 'domination-legitime'],
    notions: [
      "Diagnostic — l'acte qui transforme une situation vécue en catégorie médicale reconnue",
      "Psychologisation — la lecture des difficultés sociales en termes de psychologie individuelle",
      "Industrie pharmaceutique — un acteur économique intéressé à l'extension des catégories de maladie",
      "Autonomie du patient — un objectif affiché qui coexiste avec une dépendance croissante au système de soin",
      "Prévention — la médecine qui intervient avant même l'apparition d'un symptôme",
    ],
  },
  {
    id: 'grossophobie',
    t: 'Grossophobie',
    categorie: 'sante-corps',
    d: "La corpulence n'est pas qu'une affaire de santé individuelle : c'est un objet de jugement social, avec ses conséquences très concrètes sur l'emploi, le soin ou l'estime de soi.",
    detail:
      "Goffman y reconnaîtrait un stigmate au sens plein : un attribut qui déclasse et qu'il faut sans cesse gérer en public ; Bourdieu y ajouterait une violence symbolique, quand la norme de minceur est acceptée jusque par ceux qu'elle disqualifie.",
    dimensions: ['sante', 'culturelle', 'sociale'],
    concepts: ['stigmate', 'violence-symbolique'],
    notions: [
      "Norme de minceur — un idéal corporel socialement construit, présenté comme allant de soi",
      "Discrimination liée au poids — un facteur documenté qui pèse sur l'embauche et la rémunération",
      "Body shaming — la moquerie ou le jugement public sur l'apparence corporelle",
      "Errance médicale — des symptômes attribués au poids avant d'être réellement examinés",
      "Body positivity — un mouvement qui conteste la hiérarchie des corps sans toujours convaincre au-delà de ses cercles",
    ],
  },

  /* — Politique et mobilisations — */
  {
    id: 'abstention-electorale',
    t: 'Abstention électorale',
    categorie: 'politique-mobilisations',
    d: "Ne pas voter n'est pas toujours un désintérêt pour la politique : c'est parfois une défiance envers ce que le vote est censé produire.",
    detail:
      "Tocqueville s'inquiétait déjà de ce que l'égalisation des conditions pouvait produire une majorité tyrannique ; l'abstention contemporaine renverse la crainte — c'est l'absence de majorité mobilisée qui interroge désormais la légitimité du résultat.",
    dimensions: ['politique', 'sociale', 'demographique'],
    concepts: ['domination-legitime', 'tyrannie-de-la-majorite'],
    notions: [
      "Défiance institutionnelle — la conviction que le vote ne change rien à la décision réelle",
      "Vote-sanction — voter contre plutôt que pour, pour signifier un rejet",
      "Inscription sur les listes électorales — un premier seuil, déjà socialement inégal, avant même le vote",
      "Abstentionnisme différentiel — l'abstention plus forte chez les catégories les moins favorisées",
      "Blanc et nul — un vote exprimé, mais non comptabilisé dans les résultats",
    ],
  },
  {
    id: 'mouvements-sociaux-contemporains',
    t: 'Mouvements sociaux contemporains',
    categorie: 'politique-mobilisations',
    d: "Se mobiliser ne suppose plus nécessairement un parti ou un syndicat : les réseaux sociaux permettent des coalitions plus rapides, et souvent plus éphémères.",
    detail:
      "Boltanski y verrait des régimes de justification mobilisés en temps réel — chacun invoquant un principe de grandeur différent — dans des coalitions dont le nouvel esprit du capitalisme a lui-même appris à absorber la critique.",
    dimensions: ['politique', 'numerique', 'sociale'],
    concepts: ['regimes-de-justification', 'nouvel-esprit-du-capitalisme'],
    notions: [
      "Mobilisation horizontale — une organisation sans leader identifié ni structure hiérarchique stable",
      "Répertoire d'action — l'ensemble des formes de protestation disponibles à une époque donnée",
      "Hashtag activism — une visibilité numérique qui ne se traduit pas toujours en effet politique durable",
      "Coalition éphémère — un rassemblement ponctuel autour d'une cause, sans lendemain organisationnel",
      "Répression des mobilisations — la réponse de l'État, elle-même objet de controverse",
    ],
  },

  /* — Environnement — */
  {
    id: 'eco-anxiete',
    t: 'Éco-anxiété',
    categorie: 'environnement',
    d: "S'inquiéter de l'avenir climatique n'est plus un trait de caractère isolé : c'est devenu, chez une partie de la jeunesse, un état largement partagé.",
    detail:
      "Aucun concept du corpus ne nomme directement cette angoisse contemporaine — un phénomène trop récent pour les quinze fiches, qui s'analyse pour l'instant surtout par ses propres notions.",
    dimensions: ['environnementale', 'sante', 'demographique'],
    concepts: [],
    notions: [
      "Solastalgie — la détresse ressentie face à la dégradation d'un environnement familier",
      "Sobriété volontaire — des choix de consommation réduits par anticipation de la crise",
      "Génération climat — une identité générationnelle qui se construit autour de l'urgence écologique",
      "Collapsologie — un courant qui anticipe l'effondrement des sociétés industrielles",
      "Charge mentale écologique — le poids d'arbitrages quotidiens vécus comme insuffisants face à l'ampleur du problème",
    ],
  },
  {
    id: 'migration-climatique',
    t: 'Migration climatique',
    categorie: 'environnement',
    d: "Le climat déplace déjà des populations, sans qu'aucun statut juridique international ne les reconnaisse encore comme réfugiées.",
    detail:
      "Comme l'étalement urbain ou l'éco-anxiété, ce phénomène déborde le corpus : il s'étudie par ses données — zones à risque, flux migratoires — plus que par un outil théorique déjà présent ici.",
    dimensions: ['environnementale', 'demographique', 'politique'],
    concepts: [],
    notions: [
      "Réfugié climatique — une expression sans statut juridique reconnu en droit international",
      "Zone inhabitable — un territoire que la montée des eaux ou la sécheresse rend impropre à la vie",
      "Migration interne — un déplacement à l'intérieur d'un même pays, plus fréquent que la migration internationale",
      "Justice climatique — l'idée que les responsables du dérèglement ne sont pas ceux qui en subissent le plus les effets",
      "Adaptation — les mesures qui visent à vivre avec un climat déjà transformé, plutôt qu'à l'éviter",
    ],
  },
];
