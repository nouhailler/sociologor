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
 * - Cette liste reste une sélection, pas un inventaire exhaustif de la
 *   discipline : 66 phénomènes, répartis en 14 catégories. Voir la
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
  { id: 'culture', t: 'Culture et goût', d: "Ce qui se porte, s'écoute et se regarde n'est jamais qu'une affaire de goût individuel." },
  {
    id: 'religion',
    t: 'Religion et croyance',
    d: "Ce qu'une société croit collectivement, et comment cette croyance s'organise ou se défait.",
  },
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
    concepts: ['classe-sociale', 'anomie', 'tension-anomique', 'capital-social'],
    notions: [
      "Précarité — l'instabilité qui s'installe entre deux contrats, plus qu'un accident passager",
      "Exclusion sociale — la perte progressive des liens que l'emploi entretenait",
      "Identité professionnelle — ce que « qui suis-je » doit à « que fais-je »",
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
    concepts: ['capital-culturel', 'champ', 'espace-social'],
    notions: [
      "Ségrégation urbaine — la recomposition, quartier par quartier, de qui vit où",
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
  {
    id: 'inegalites-territoriales',
    t: 'Inégalités territoriales',
    categorie: 'ville',
    d: "Naître dans un quartier ou une région plutôt qu'une autre pèse sur toute une vie : écoles, emplois, soins n'y sont jamais distribués également.",
    detail:
      "Aucun concept du corpus ne porte directement sur les écarts entre territoires — plus proche de la géographie sociale que de la théorie générale que les quinze fiches couvrent. Le phénomène s'analyse surtout par ses données : accès aux services publics, temps de trajet, prix du foncier, taux de chômage local.",
    dimensions: ['urbaine', 'economique', 'politique', 'demographique'],
    concepts: [],
    notions: [
      "Désert médical — un territoire où l'offre de soins ne suit plus la demande",
      "Fracture territoriale — l'écart de services et d'opportunités entre centres et périphéries",
      "Zone d'éducation prioritaire — un dispositif qui reconnaît l'inégalité territoriale sans toujours la corriger",
      "Aménagement du territoire — les politiques publiques censées rééquilibrer ce que le marché concentre",
      "France périphérique — une expression qui a fait débat, pointant les territoires éloignés des métropoles dynamiques",
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
  {
    id: 'inegalites-generationnelles',
    t: 'Inégalités générationnelles',
    categorie: 'famille-parcours',
    d: "Chaque génération n'hérite pas des mêmes chances : patrimoine, marché du travail et système de retraite ne traitent pas les cohortes également.",
    detail:
      "Merton y verrait une tension anomique renouvelée à chaque génération : les buts que la société continue de promettre — la propriété, un emploi stable, une retraite décente — supposent des moyens que chaque cohorte plus jeune trouve un peu plus difficiles à réunir que la précédente. L'écart se mesure autant en patrimoine hérité qu'en accès au marché du travail ou en générosité du système de retraite.",
    dimensions: ['demographique', 'economique', 'famille'],
    concepts: ['tension-anomique'],
    notions: [
      "Transferts intergénérationnels — l'aide, financière ou en nature, qui circule des parents vers les enfants",
      "Système de retraite par répartition — un pacte entre générations, tendu quand leur nombre respectif se déséquilibre",
      "Génération sacrifiée — une expression récurrente, appliquée tour à tour à plusieurs cohortes",
      "Accès à la propriété — un marqueur d'inégalité générationnelle particulièrement suivi",
      "Conflit de générations — la compétition, rarement nommée comme telle, pour des ressources publiques limitées",
    ],
  },
  {
    id: 'homogamie-sociale',
    t: 'Homogamie sociale',
    categorie: 'famille-parcours',
    d: "On ne choisit pas son conjoint au hasard : la position sociale, le diplôme et le milieu d'origine pèsent sur la rencontre autant que le sentiment.",
    detail:
      "Bourdieu explique l'homogamie par la proximité d'habitus : on se sent à l'aise, et on se rencontre plus souvent, avec quelqu'un dont les manières, les goûts et les références ressemblent aux siens. Le phénomène reconduit ainsi, à chaque génération, une part de la hiérarchie des classes sociales — deux patrimoines et deux capitaux culturels proches ont plus de chances de s'unir que de se mélanger.",
    dimensions: ['famille', 'sociale', 'educative'],
    concepts: ['classe-sociale', 'capital-culturel', 'habitus'],
    notions: [
      "Homogamie de diplôme — la forme la plus étudiée, et la plus stable dans le temps, de la rencontre entre semblables",
      "Marché matrimonial — la métaphore, discutée, qui décrit la rencontre comme un espace de tri social",
      "Hétérogamie — l'union entre partenaires de milieux différents, plus rare qu'on ne le pense",
      "Rencontre en ligne — un nouveau lieu de rencontre dont l'effet sur l'homogamie reste débattu",
      "Reproduction sociale — ce que l'homogamie transmet, mécaniquement, à la génération suivante",
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
  {
    id: 'inegalites-culturelles',
    t: 'Inégalités culturelles',
    categorie: 'ecole',
    d: "Aller au musée, lire, fréquenter un conservatoire : ces pratiques ne sont pas affaire de goût individuel, elles suivent fidèlement la position sociale.",
    detail:
      "Bourdieu en a fait la démonstration la plus citée : le capital culturel — l'aisance avec la culture légitime — se transmet en famille bien avant l'école, et continue d'y déterminer la réussite. L'habitus complète l'explication : ce n'est pas seulement un manque de moyens qui écarte certains publics des institutions culturelles, c'est un sentiment, souvent juste, de ne pas y être à sa place.",
    dimensions: ['culturelle', 'educative', 'sociale'],
    concepts: ['capital-culturel', 'habitus', 'legitimite-culturelle'],
    notions: [
      "Pratiques culturelles — fréquentation des musées, lecture, spectacles : des indicateurs suivis depuis les années 1970",
      "Démocratisation culturelle — un objectif de politique publique, aux résultats plus modestes que l'ambition",
      "Éducation artistique — l'école comme lieu possible, mais inégalement saisi, de rattrapage culturel",
      "Omnivorité culturelle — une thèse récente selon laquelle les plus favorisés cumulent goûts savants et populaires, plutôt qu'ils n'excluent ces derniers",
    ],
  },

  /* — Inégalités et classes sociales — */
  {
    id: 'stratification-sociale',
    t: 'Stratification sociale',
    categorie: 'inegalites',
    d: "Toute société connue trie ses membres selon une hiérarchie — richesse, prestige, pouvoir — même quand elle se dit égalitaire.",
    detail:
      "Marx réduit la hiérarchie à une seule ligne de fracture, la place dans les rapports de production ; Weber la déplie en trois dimensions distinctes — la classe économique, le statut social, le pouvoir politique — qui ne se recouvrent pas toujours. Bourdieu ajoute une quatrième mesure, le capital culturel, pour expliquer pourquoi la hiérarchie se maintient même quand la fortune change de mains.",
    dimensions: ['sociale', 'economique'],
    concepts: ['classe-sociale', 'domination-legitime', 'capital-culturel', 'meritocratie'],
    notions: [
      "Hiérarchisation sociale — le classement des positions sur une échelle de prestige ou de ressources",
      "Inégalités sociales — le terme générique recouvrant l'ensemble des écarts de position",
      "Classes sociales — le découpage le plus ancien de la hiérarchie, toujours disputé entre approches marxienne et wébérienne",
      "Ordres et castes — deux formes de hiérarchie plus rigides que la classe, où la naissance ferme presque tout déplacement",
    ],
  },
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
      "Grande pauvreté — les situations les plus sévères de privation, cumulant plusieurs manques à la fois",
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
      "Inégalités patrimoniales — l'écart de patrimoine, plus marqué encore que celui des revenus, entre le haut et le bas de la distribution",
    ],
  },
  {
    id: 'inegalites-de-revenus',
    t: 'Inégalités de revenus',
    categorie: 'inegalites',
    d: "Le salaire le plus élevé d'une entreprise peut valoir plusieurs centaines de fois le plus bas : l'écart de revenus s'est creusé plus vite que la croissance elle-même.",
    detail:
      "Tocqueville faisait de l'égalisation des conditions le grand mouvement des sociétés démocratiques ; l'écart de revenus contemporain s'y lit comme un mouvement inverse, ou du moins comme sa limite — l'égalité en droit n'empêche pas l'écart en fait. Marx y ajoute la question de l'origine : un revenu du travail et un revenu du capital ne se justifient pas de la même manière, ni ne se répartissent selon les mêmes règles.",
    dimensions: ['economique', 'politique'],
    concepts: ['classe-sociale', 'egalisation-des-conditions'],
    notions: [
      "Inégalités économiques — le terme large qui inclut revenus, patrimoine et conditions de vie",
      "Rapport interdécile — l'écart entre les 10 % les mieux payés et les 10 % les moins bien payés",
      "Salaire minimum — un plancher légal, disputé, censé contenir l'écart par le bas",
      "Rémunération des dirigeants — l'écart le plus spectaculaire, et le plus commenté, de la hiérarchie salariale",
      "Redistribution fiscale — l'impôt et les prestations sociales, qui réduisent l'écart mesuré avant leur passage",
    ],
  },
  {
    id: 'exclusion-sociale',
    t: 'Exclusion sociale',
    categorie: 'inegalites',
    d: "Perdre un emploi, un logement ou un lien peut suffire à faire glisser hors du jeu social commun — pas seulement hors du marché du travail.",
    detail:
      "Durkheim donne le mécanisme de fond : quand les liens qui rattachent un individu à la collectivité se relâchent, l'anomie s'installe, et la désaffiliation devient un état plus qu'un accident. Becker ajoute que l'exclusion se referme souvent sur elle-même : une fois hors du jeu commun, l'étiquette qui s'attache à cette position — chômeur de longue durée, sans-abri — rend le retour plus difficile qu'il ne l'aurait été sans elle.",
    dimensions: ['sociale', 'economique'],
    concepts: ['anomie', 'etiquetage'],
    notions: [
      "Marginalisation — le processus, progressif, qui éloigne du centre de la vie sociale ordinaire",
      "Désaffiliation — la rupture des liens de travail et de sociabilité qui tenaient un individu rattaché",
      "Grande exclusion — les situations les plus extrêmes, sans domicile ni ressources",
      "Non-recours aux droits — ne pas demander une aide à laquelle on a droit, par méconnaissance ou par honte",
      "Insertion — les dispositifs qui visent, avec des résultats inégaux, à ramener vers l'emploi ou le logement",
    ],
  },
  {
    id: 'polarisation-sociale',
    t: 'Polarisation sociale',
    categorie: 'inegalites',
    d: "Le milieu se resserre, les extrêmes s'éloignent : une partie du débat social se joue désormais entre des groupes qui ne se croisent plus.",
    detail:
      "Tocqueville annonçait un mouvement de fond vers l'égalisation des conditions ; la polarisation contemporaine s'y lit comme une pause, ou un recul localisé — les classes moyennes qui s'amenuisent pendant que le haut et le bas de l'échelle s'éloignent l'un de l'autre. Le phénomène ne se limite pas au revenu : il touche aussi les valeurs, les votes et les lieux de vie, de moins en moins partagés d'un groupe à l'autre.",
    dimensions: ['sociale', 'economique', 'politique'],
    concepts: ['egalisation-des-conditions'],
    notions: [
      "Classes moyennes — la catégorie la plus directement exposée au resserrement du milieu",
      "Fragmentation sociale — l'affaiblissement des liens et des cadres qui rassemblaient au-delà des groupes",
      "Ségrégation sociale — la séparation, résidentielle ou scolaire, qui empêche des groupes de se côtoyer",
      "Polarisation politique — la traduction électorale d'un éloignement d'abord social et économique",
      "Entre-soi — le choix, ou la contrainte, de ne fréquenter que des semblables",
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
  {
    id: 'dependance-economique',
    t: 'Dépendance économique',
    categorie: 'genre-sexualite',
    d: "Ne pas avoir de revenu propre change tout dans un couple ou une famille : la dépendance économique n'est jamais qu'une question d'argent.",
    detail:
      "Parsons décrivait déjà une répartition des rôles où l'un des conjoints, souvent la femme, se spécialise dans le foyer pendant que l'autre pourvoit au revenu — un arrangement qu'il présentait comme fonctionnel, et que la sociologie du genre a depuis relu comme une source d'inégalité de pouvoir. Bourdieu y ajoute la violence symbolique : la dépendance se maintient parce qu'elle se vit, des deux côtés, comme allant de soi plus que comme un rapport de force.",
    dimensions: ['genre', 'economique', 'famille'],
    concepts: ['role-et-attentes', 'violence-symbolique'],
    notions: [
      "Temps partiel subi — un aménagement du travail qui installe la dépendance plus qu'il ne la choisit",
      "Interruption de carrière — un congé parental ou un retrait du marché du travail, aux conséquences durables sur la retraite",
      "Emprise économique — priver l'autre de ressources pour restreindre son autonomie",
      "Pension de réversion — un dispositif qui prolonge, après veuvage, la dépendance construite pendant la vie active",
      "Autonomie financière — l'objectif affiché de nombreuses politiques d'égalité, encore inégalement atteint",
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
  {
    id: 'inegalites-numeriques',
    t: 'Inégalités numériques',
    categorie: 'numerique-medias',
    d: "Avoir une connexion ne suffit pas : savoir s'en servir, et pour quoi, redistribue une fracture numérique qu'on croyait résolue par l'équipement.",
    detail:
      "Aucun auteur du corpus n'a théorisé directement le numérique, mais le capital culturel de Bourdieu s'y prête par extension : au-delà de l'accès matériel, ce sont les usages — chercher un emploi, remplir une démarche administrative, distinguer une information fiable — qui séparent le plus nettement les publics.",
    dimensions: ['numerique', 'sociale', 'educative'],
    concepts: ['capital-culturel'],
    notions: [
      "Fracture numérique — l'écart d'équipement et de connexion, la plus ancienne mesure du phénomène",
      "Fracture des usages — l'écart, plus tenace, dans ce que chacun sait faire une fois connecté",
      "Illectronisme — l'incapacité à utiliser les outils numériques du quotidien, y compris chez des publics équipés",
      "Dématérialisation des services publics — une simplification annoncée qui déplace la charge vers l'usager le moins à l'aise",
      "Aidants numériques — les proches ou les médiateurs qui compensent, de façon informelle, l'écart de compétence",
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
  {
    id: 'inegalites-de-sante',
    t: 'Inégalités de santé',
    categorie: 'sante-corps',
    d: "L'espérance de vie d'un cadre et celle d'un ouvrier ne se rejoignent nulle part : la position sociale s'inscrit jusque dans le corps.",
    detail:
      "Bourdieu montre que le rapport au corps lui-même — l'alimentation, l'activité physique, le recours au soin — obéit à un habitus de classe, appris avant d'être choisi. L'écart qui en résulte ne se referme pas avec l'accès théorique aux soins : à système de santé égal, l'espérance de vie continue de suivre la position sociale, du diplôme au quartier de résidence.",
    dimensions: ['sante', 'sociale', 'economique'],
    concepts: ['habitus'],
    notions: [
      "Espérance de vie en bonne santé — un indicateur qui creuse l'écart social plus encore que l'espérance de vie totale",
      "Renoncement aux soins — reporter ou refuser un soin pour des raisons financières ou d'accès",
      "Désert médical — un territoire où l'offre de soins ne suit plus la demande",
      "Littératie en santé — la capacité à comprendre et utiliser l'information médicale, inégalement répartie",
      "Surmortalité — l'écart de mortalité entre catégories sociales, mesuré à chaque crise sanitaire",
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

  /* — Politique et mobilisations (suite) — */
  {
    id: 'vote',
    t: 'Vote',
    categorie: 'politique-mobilisations',
    d: "Voter agrège un jugement politique et une appartenance sociale : la position occupée dans la société oriente, statistiquement, le sens du bulletin.",
    detail:
      "Weber distingue la légitimité de l'autorité politique elle-même de l'acte électoral qui, en démocratie, en renouvelle périodiquement la reconnaissance. Bourdieu ajoute que la compétence politique perçue comme légitime reste inégalement répartie selon le capital culturel, ce qui pèse sur la manière dont chacun s'approprie l'acte de voter.",
    dimensions: ['politique', 'sociale', 'demographique'],
    concepts: ['domination-legitime', 'capital-culturel'],
    notions: [
      "Vote de classe — la corrélation, plus ténue qu'autrefois, entre position sociale et choix électoral",
      "Vote utile — voter non pour son préféré mais pour empêcher un autre résultat",
      "Sociologie électorale — le champ qui relie composition sociale d'un territoire et résultats du scrutin",
      "Volatilité électorale — l'instabilité croissante du choix d'un scrutin à l'autre chez un même électorat",
    ],
  },
  {
    id: 'mobilisation-collective',
    t: 'Mobilisation collective',
    categorie: 'politique-mobilisations',
    d: "Se rassembler pour peser sur une décision suppose de transformer un mécontentement diffus en action coordonnée — un passage qui ne va jamais de soi.",
    detail:
      "Charles Tilly montre que la mobilisation dépend moins de l'intensité du grief que des ressources et du répertoire d'action disponibles à un moment donné — pétition, grève, manifestation, occupation. Blumer y ajoute la dimension interactionniste : une définition partagée de la situation doit émerger et se stabiliser avant qu'un rassemblement ne devienne une action coordonnée. Distincte des « Mouvements sociaux contemporains » (voir cette fiche), plus spécifiquement centrés sur les formes numériques et horizontales récentes.",
    dimensions: ['politique', 'sociale'],
    concepts: ['action-collective'],
    notions: [
      "Manifestation — la forme la plus visible de mobilisation collective, un cortège dans l'espace public",
      "Protestation — l'expression publique d'un désaccord, avec ou sans rassemblement physique",
      "Répertoire d'action — l'ensemble des formes de protestation disponibles à une époque donnée",
      "Théorie de la mobilisation des ressources — l'idée que le succès d'une cause dépend d'abord des moyens organisationnels réunis",
      "Cadrage — la manière de présenter une cause pour la rendre mobilisatrice, plus que le grief lui-même",
    ],
  },
  {
    id: 'greve',
    t: 'Grève',
    categorie: 'politique-mobilisations',
    d: "Cesser le travail collectivement reste l'arme la plus ancienne du monde ouvrier — mais son usage et son efficacité se sont profondément transformés.",
    detail:
      "Marx voit dans la grève l'expression la plus directe du conflit entre travail et capital, le seul levier dont dispose le travailleur qui ne possède rien d'autre que sa force de travail à retirer. Durkheim, plus mesuré, y lit aussi un signe de vitalité du lien social au travail — l'absence totale de conflit signalant parfois une anomie plus inquiétante qu'un désaccord organisé.",
    dimensions: ['travail', 'politique', 'economique'],
    concepts: ['lutte-des-classes', 'exploitation'],
    notions: [
      "Taux de syndicalisation — un indicateur en recul dans la plupart des pays développés, qui pèse sur le rapport de force",
      "Grève générale — l'arrêt de travail étendu à plusieurs secteurs à la fois",
      "Service minimum — un encadrement légal du droit de grève dans certains secteurs jugés essentiels",
      "Grève des services — une forme récente, moins visible qu'un arrêt de production industrielle",
    ],
  },
  {
    id: 'participation-politique',
    t: 'Participation politique',
    categorie: 'politique-mobilisations',
    d: "Au-delà du seul vote, participer à la vie politique suppose des ressources — temps, langage, réseau — inégalement réparties dans la population.",
    detail:
      "Habermas voit dans l'espace public le lieu où des citoyens informés débattent des affaires communes — un idéal que l'accès inégal au temps libre et au langage légitime rend, en pratique, plus accessible à certains milieux qu'à d'autres. Tocqueville faisait déjà de la participation associative et politique l'apprentissage concret de la démocratie, non un supplément facultatif à celle-ci.",
    dimensions: ['politique', 'sociale', 'educative'],
    concepts: ['capital-culturel', 'capital-social', 'espace-public'],
    notions: [
      "Compétence politique — la capacité perçue à comprendre et à peser sur les enjeux publics, inégalement distribuée",
      "Engagement associatif — une forme de participation souvent plus accessible que la participation partisane",
      "Démocratie participative — les dispositifs (budgets participatifs, conventions citoyennes) censés élargir la participation au-delà du vote",
    ],
  },
  {
    id: 'polarisation-politique',
    t: 'Polarisation politique',
    categorie: 'politique-mobilisations',
    d: "Le débat public se réorganise de plus en plus autour de deux camps opposés, au détriment des positions médianes et des espaces de désaccord partagé.",
    detail:
      "Le phénomène se distingue de la « Polarisation sociale » (voir cette fiche), qui décrit un éloignement d'abord économique et social : ici, c'est la structuration même du débat, des partis et des médias qui se radicalise, parfois indépendamment de l'évolution des positions sociales réelles. La fragmentation des sources d'information et les logiques de recommandation des plateformes numériques sont régulièrement citées parmi les moteurs du phénomène.",
    dimensions: ['politique', 'numerique', 'culturelle'],
    concepts: [],
    notions: [
      "Tri partisan — le fait de faire coïncider de plus en plus étroitement identité politique et identité sociale ou culturelle",
      "Polarisation affective — l'hostilité croissante envers le camp opposé, plus que le seul désaccord sur les idées",
      "Chambre d'écho — un environnement informationnel qui expose surtout à des opinions déjà partagées",
      "Compromis politique — une pratique de plus en plus difficile à justifier publiquement dans un climat polarisé",
    ],
  },

  /* — Culture et goût — */
  {
    id: 'modes',
    t: 'Modes',
    categorie: 'culture',
    d: "Un vêtement, une expression ou une musique se répand puis se démode selon un rythme social plus que purement esthétique.",
    detail:
      "Simmel analyse la mode comme un mécanisme social à deux temps : les catégories supérieures adoptent un signe distinctif, les catégories qui les imitent le diffusent, ce qui pousse les premières à en changer pour se distinguer de nouveau — une course sans fin entre imitation et distinction. Bourdieu ajoute que le rythme même de renouvellement des modes favorise ceux qui disposent du temps et du capital culturel nécessaires pour rester à jour.",
    dimensions: ['culturelle', 'sociale', 'economique'],
    concepts: ['distinction'],
    notions: [
      "Cycle de la mode — la succession d'adoption puis d'abandon d'un signe distinctif par les catégories dominantes",
      "Diffusion culturelle — la propagation d'une pratique ou d'un goût au-delà de son milieu d'origine",
      "Fast fashion — l'accélération industrielle du renouvellement vestimentaire, aux coûts sociaux et environnementaux disputés",
      "Prescripteurs de tendance — les figures ou institutions qui légitiment un goût avant qu'il ne se diffuse",
    ],
  },
  {
    id: 'consommation-culturelle',
    t: 'Consommation culturelle',
    categorie: 'culture',
    d: "Ce qu'on lit, regarde ou écoute a profondément changé de support sans que les écarts sociaux qui l'organisaient ne se soient refermés pour autant.",
    detail:
      "Le passage du disque au streaming, du cinéma à la plateforme, a démultiplié l'offre disponible sans uniformiser les usages : Bourdieu y verrait la persistance d'un capital culturel qui continue de trier, dans une offre abondante, ce que chacun choisit de consommer et comment il en parle. Une thèse plus récente, l'omnivorité culturelle, nuance ce constat : les catégories les plus dotées cumuleraient désormais goûts savants et populaires plutôt que de se limiter aux seuls premiers.",
    dimensions: ['culturelle', 'numerique', 'sociale'],
    concepts: ['capital-culturel'],
    notions: [
      "Streaming — le basculement d'une consommation de possession à une consommation d'accès",
      "Omnivorité culturelle — la thèse selon laquelle les plus favorisés cumulent des goûts savants et populaires",
      "Algorithme de recommandation — un acteur non humain qui oriente désormais une part croissante des choix culturels",
      "Pratiques culturelles — la fréquentation des musées, la lecture ou les spectacles, des indicateurs suivis depuis les années 1970",
    ],
  },
  {
    id: 'culture-populaire',
    t: 'Culture populaire',
    categorie: 'culture',
    d: "Ce que les classes populaires produisent et apprécient elles-mêmes n'est pas un simple manque de culture légitime : c'est une culture à part entière, avec ses codes propres.",
    detail:
      "Richard Hoggart a montré, contre l'idée d'une culture populaire définie par le seul manque, qu'elle possède ses propres richesses et sa propre dignité, trop souvent lues depuis l'extérieur comme une privation plutôt que comme une culture en soi. Le terme se distingue de la « Culture de masse » (voir cette fiche) : la culture populaire naît des milieux populaires eux-mêmes, quand la culture de masse leur est diffusée depuis l'extérieur par une industrie culturelle centralisée.",
    dimensions: ['culturelle', 'sociale'],
    concepts: [],
    notions: [
      "Culture ouvrière — les codes, les loisirs et la sociabilité propres aux milieux populaires industriels",
      "Culture de la débrouille — les savoir-faire pratiques valorisés dans les milieux populaires, peu reconnus ailleurs",
      "Réappropriation culturelle — la manière dont un public populaire détourne et réinvestit une culture qui ne lui était pas destinée",
    ],
  },
  {
    id: 'culture-de-masse',
    t: 'Culture de masse',
    categorie: 'culture',
    d: "Une culture produite industriellement et diffusée à une échelle inédite, qui standardise autant qu'elle divertit.",
    detail:
      "L'École de Francfort y voit une industrie culturelle au sens fort : des produits calibrés pour l'audience la plus large possible, qui neutralisent la critique en la transformant elle-même en produit consommable. Le diagnostic reste disputé : d'autres sociologues insistent sur la capacité des publics à réinterpréter, détourner et resignifier ce qui leur est proposé, plutôt qu'à le recevoir passivement.",
    dimensions: ['culturelle', 'economique', 'numerique'],
    concepts: ['industrie-culturelle', 'raison-instrumentale'],
    notions: [
      "Standardisation culturelle — la production de contenus culturels selon des formats reproductibles à grande échelle",
      "Blockbuster — la logique du succès massif qui organise une part croissante de la production culturelle",
      "Réception active — la thèse selon laquelle le public réinterprète les contenus de masse plutôt que de les subir",
      "Concentration des médias — la propriété d'une large part de l'industrie culturelle par un petit nombre de groupes",
    ],
  },
  {
    id: 'distinction-culturelle',
    t: 'Distinction culturelle',
    categorie: 'culture',
    d: "Le goût — pour un plat, un vêtement, une musique — n'est jamais un jugement neutre : il classe celui qui l'affiche autant que ce qu'il désigne.",
    detail:
      "Dans *La Distinction* (1979), Bourdieu montre que le goût culturel recoupe presque parfaitement la position sociale : chaque catégorie s'approprie les pratiques qui lui correspondent, et affiche ce goût comme une sensibilité personnelle plutôt que comme un habitus de classe. À la différence des « Inégalités culturelles » (voir cette fiche), centrées sur l'école et l'accès aux institutions culturelles, cette entrée regarde le mécanisme plus général par lequel le goût, dans toute la vie quotidienne, sert de marqueur social.",
    dimensions: ['culturelle', 'sociale'],
    concepts: ['distinction', 'habitus', 'capital-culturel', 'capital-culturel-incorpore'],
    notions: [
      "Goût légitime — les pratiques culturelles reconnues et valorisées par les institutions dominantes",
      "Snobisme inversé — l'affichage revendiqué de goûts populaires par des catégories favorisées",
    ],
  },

  /* — Famille et parcours de vie (suite) — */
  {
    id: 'mariage',
    t: 'Mariage',
    categorie: 'famille-parcours',
    d: "Se marier reste un acte à la fois intime et statistiquement très prévisible : le futur conjoint se trouve, le plus souvent, dans un périmètre social proche du sien.",
    detail:
      "Bourdieu montre que l'homogamie sociale — épouser quelqu'un de position proche — n'a rien d'un hasard : les lieux de rencontre eux-mêmes (études, milieu professionnel) sont déjà socialement triés (voir « Homogamie sociale »). Le mariage a par ailleurs profondément changé de statut : d'une institution quasi obligatoire, il est devenu un choix parmi d'autres formes d'union, sans disparaître pour autant.",
    dimensions: ['famille', 'sociale', 'juridique'],
    concepts: ['classe-sociale'],
    notions: [
      "Taux de nuptialité — un indicateur en recul régulier dans la plupart des pays développés",
      "Union libre — une forme de conjugalité sans mariage, de plus en plus répandue avant ou à la place de celui-ci",
      "Mariage pour tous — une extension récente du droit au mariage aux couples de même sexe",
      "Contrat de mariage — un choix juridique qui reflète, entre autres, le patrimoine et la prudence économique des conjoints",
    ],
  },
  {
    id: 'divorce',
    t: 'Divorce',
    categorie: 'famille-parcours',
    d: "La rupture d'un mariage n'est plus un accident rare ni un échec unilatéralement imputé à l'un des conjoints : c'est devenu une issue statistiquement ordinaire.",
    detail:
      "Bauman relie la fragilité croissante du couple à une modernité liquide, où les engagements eux-mêmes se pensent de plus en plus comme révisables plutôt que définitifs. Le divorce reste néanmoins socialement inégal dans ses conséquences : il expose davantage les femmes à la précarité économique, en particulier lorsqu'elles se sont éloignées de l'emploi pendant la vie commune.",
    dimensions: ['famille', 'juridique', 'genre', 'sociale'],
    concepts: ['modernite-liquide'],
    notions: [
      "Divorce par consentement mutuel — la procédure la plus rapide, devenue majoritaire dans plusieurs pays",
      "Garde alternée — un arrangement de plus en plus fréquent pour les enfants après une séparation",
      "Appauvrissement post-divorce — un risque nettement plus marqué pour les femmes que pour les hommes",
      "Remariage — une issue fréquente après un divorce, qui a donné naissance à la notion de famille recomposée",
    ],
  },
  {
    id: 'celibat',
    t: 'Célibat',
    categorie: 'famille-parcours',
    d: "Vivre seul, par choix ou par défaut, n'est plus une situation transitoire ou marginale : c'est une configuration de vie stable pour une part croissante des adultes.",
    detail:
      "Tocqueville reliait déjà l'individualisation moderne à un affaiblissement des cadres collectifs qui organisaient autrefois la vie conjugale ; le célibat contemporain, choisi ou subi, en est l'une des expressions les plus visibles. Le phénomène ne recouvre pas une seule réalité : le célibat choisi d'une partie des catégories aisées et urbaines n'a ni les mêmes causes ni les mêmes conséquences que l'isolement subi par des catégories plus précaires ou plus âgées.",
    dimensions: ['famille', 'sociale', 'demographique'],
    concepts: ['individualisme'],
    notions: [
      "Solo — une identité revendiquée, distincte de l'isolement subi, pour désigner un célibat choisi",
      "Isolement relationnel — la forme la plus problématique du célibat, associée à des risques de santé documentés",
      "Applications de rencontre — un nouveau mode d'accès au couple, dont l'effet sur la durée du célibat reste débattu",
      "Ménage d'une personne — la catégorie statistique qui mesure la progression du vivre seul",
    ],
  },
  {
    id: 'famille-recomposee',
    t: 'Famille recomposée',
    categorie: 'famille-parcours',
    d: "Après une séparation, une nouvelle union recompose le foyer sans effacer les liens antérieurs : beaux-parents, demi-frères et fratries élargies redessinent la famille.",
    detail:
      "Cette configuration, devenue courante, ne se substitue pas simplement à la famille dite traditionnelle : elle multiplie les rôles et les attentes que chacun doit apprendre à négocier — un enfant peut avoir deux foyers, plusieurs figures parentales, sans modèle de rôle aussi stabilisé que dans la famille nucléaire que Parsons décrivait. Voir aussi « Monoparentalité », étape fréquente qui précède souvent la recomposition.",
    dimensions: ['famille', 'sociale', 'juridique'],
    concepts: ['role-et-attentes'],
    notions: [
      "Beau-parent — un rôle familial sans statut juridique stabilisé dans la plupart des pays",
      "Demi-fratrie — les liens entre enfants issus d'unions différentes au sein d'une même famille recomposée",
      "Garde partagée — l'organisation matérielle qui structure souvent la vie de l'enfant entre deux foyers recomposés",
    ],
  },
  {
    id: 'fecondite',
    t: 'Fécondité',
    categorie: 'famille-parcours',
    d: "Le nombre d'enfants par femme recule dans la plupart des pays développés, sans que l'explication se réduise à un seul facteur économique ou culturel.",
    detail:
      "Boudon relit la baisse de la fécondité à travers l'individualisme méthodologique : chaque décision d'avoir ou non un enfant, prise rationnellement à partir de contraintes individuelles (coût, carrière, logement), produit à l'échelle agrégée une baisse que personne n'a délibérément choisie collectivement. Le report de l'âge à la première naissance, lié à l'allongement des études et à l'instabilité professionnelle des débuts de carrière, est l'un des facteurs les plus documentés.",
    dimensions: ['famille', 'demographique', 'economique'],
    concepts: ['individualisme-methodologique'],
    notions: [
      "Indice conjoncturel de fécondité — la mesure statistique la plus suivie du nombre moyen d'enfants par femme",
      "Âge à la première naissance — un indicateur en hausse continue dans la plupart des pays développés",
      "Politique familiale — les dispositifs publics censés soutenir la natalité, aux effets mesurés modestes",
      "Infertilité — une part croissante et documentée des naissances reportées ou renoncées",
    ],
  },

  /* — Religion et croyance — */
  {
    id: 'secularisation',
    t: 'Sécularisation',
    categorie: 'religion',
    d: "La religion perd son emprise sur l'organisation de la vie sociale, sans que la croyance individuelle ne disparaisse au même rythme qu'elle.",
    detail:
      "Weber relie la sécularisation à un désenchantement plus large du monde : la nature et la société cessent d'être expliquées par une volonté divine, au profit d'explications rationnelles et calculables. Le processus qui y mène est décrit dans la fiche « Sécularisation » des Processus sociaux ; cette entrée en regarde l'état atteint — la place, aujourd'hui réduite, que le religieux occupe dans le droit, l'école et la politique.",
    dimensions: ['culturelle', 'sociale', 'demographique'],
    concepts: ['desenchantement-du-monde'],
    notions: [
      "Pratique religieuse déclarée — un indicateur en recul régulier dans la plupart des pays européens",
      "Croire sans appartenir — la formule qui décrit une religiosité privée détachée de l'institution",
      "Laïcité — le principe juridique français qui organise la séparation entre la sphère religieuse et l'État",
    ],
  },
  {
    id: 'conversion',
    t: 'Conversion',
    categorie: 'religion',
    d: "Changer de religion n'est presque jamais un basculement instantané : c'est un processus social, souvent porté par une rencontre et un réseau plus que par un seul raisonnement.",
    detail:
      "La sociologie de la conversion insiste sur le rôle du réseau relationnel : on se convertit rarement seul, la plupart des conversions suivant un lien affectif ou amical préexistant avec des membres du groupe religieux rejoint, plus qu'une adhésion théologique isolée.",
    dimensions: ['culturelle', 'sociale'],
    concepts: [],
    notions: [
      "Réseau de conversion — les liens personnels qui précèdent, le plus souvent, l'adhésion religieuse elle-même",
      "Carrière religieuse — la succession d'étapes, parfois longue, qui mène d'un premier contact à l'engagement complet",
      "Nouveaux mouvements religieux — les groupes récents, hors des grandes traditions établies, qui recrutent une part de ces conversions",
    ],
  },
  {
    id: 'deconversion',
    t: 'Déconversion',
    categorie: 'religion',
    d: "Quitter une religion à laquelle on a adhéré peut être aussi progressif et coûteux, socialement, que l'y être entré.",
    detail:
      "Le processus retourne souvent le même mécanisme qu'une conversion — rupture des liens affectifs, reconstruction d'une identité, réinterprétation du passé — mais dans le sens inverse : la personne doit désormais justifier a posteriori un engagement qu'elle ne partage plus, parfois au prix de la rupture avec sa communauté ou sa famille d'origine.",
    dimensions: ['culturelle', 'sociale'],
    concepts: [],
    notions: [
      "Apostasie — le terme religieux pour désigner l'abandon formel d'une foi",
      "Reconstruction identitaire — le travail biographique nécessaire pour donner sens à une vie après la sortie d'une religion",
      "Sortie de groupe sectaire — la forme la plus étudiée et la plus difficile de déconversion, quand la rupture des liens sociaux est totale",
    ],
  },
  {
    id: 'pratiques-religieuses',
    t: 'Pratiques religieuses',
    categorie: 'religion',
    d: "Le nombre de croyants recule moins vite que celui des pratiquants réguliers : la croyance et la pratique se dissocient de plus en plus.",
    detail:
      "Durkheim traitait le rite comme un fait social qui resserre le lien collectif bien plus qu'il ne s'adresse à un dieu particulier — la pratique compte alors autant, sinon plus, que la croyance elle-même. Cette dissociation croissante entre croire et pratiquer, observée dans la plupart des pays européens, questionne directement cette centralité du rite collectif.",
    dimensions: ['culturelle', 'sociale', 'demographique'],
    concepts: ['religion-comme-fait-social'],
    notions: [
      "Pratique régulière — la fréquentation d'un culte à intervalle rapproché, en net recul statistique",
      "Pratique occasionnelle — une fréquentation limitée aux grandes fêtes ou aux rites de passage",
      "Rite de passage — naissance, mariage, mort : les moments où la pratique religieuse reste la plus sollicitée, même chez les peu pratiquants",
    ],
  },
  {
    id: 'pluralisme-religieux',
    t: 'Pluralisme religieux',
    categorie: 'religion',
    d: "Une même société abrite désormais plusieurs traditions religieuses côte à côte, sans qu'aucune ne puisse plus prétendre organiser seule la vie collective.",
    detail:
      "Le pluralisme religieux transforme la position même de chaque religion : d'un cadre englobant et allant de soi, elle devient une option parmi d'autres, à justifier et à distinguer des concurrentes — un marché religieux, selon l'expression discutée de certains sociologues américains, plutôt qu'une évidence héritée.",
    dimensions: ['culturelle', 'sociale', 'politique'],
    concepts: [],
    notions: [
      "Marché religieux — la métaphore, disputée, qui décrit la coexistence de plusieurs offres religieuses en concurrence",
      "Diversité confessionnelle — la coexistence, sur un même territoire, de plusieurs traditions religieuses distinctes",
      "Accommodement raisonnable — les ajustements juridiques ou institutionnels pensés pour concilier pluralisme religieux et règles communes",
    ],
  },

  /* — Numérique et médias (suite) — */
  {
    id: 'viralite',
    t: 'Viralité',
    categorie: 'numerique-medias',
    d: "Un contenu peut atteindre des millions de personnes en quelques heures, porté moins par sa qualité intrinsèque que par la mécanique de partage qui l'amplifie.",
    detail:
      "L'économie de l'attention explique une partie du phénomène : les plateformes optimisent la diffusion des contenus qui suscitent le plus de réaction émotionnelle, vraie ou fausse, plus que ceux jugés les plus exacts ou les plus utiles. La viralité n'est jamais un pur effet de contenu : elle dépend aussi de l'architecture technique — algorithme de recommandation, bouton de partage — qui la rend possible.",
    dimensions: ['numerique', 'culturelle', 'sociale'],
    concepts: ['industrie-culturelle'],
    notions: [
      "Économie de l'attention — un marché où le temps de cerveau disponible se vend aux annonceurs",
      "Effet de réseau — la valeur d'un contenu qui augmente avec le nombre de personnes qui le partagent déjà",
      "Meme — l'unité culturelle la plus étudiée de la viralité numérique, reproduite et modifiée à grande échelle",
    ],
  },
  {
    id: 'bulles-informationnelles',
    t: 'Bulles informationnelles',
    categorie: 'numerique-medias',
    d: "Les algorithmes de recommandation exposent chacun à un flux d'informations de plus en plus filtré par ses propres préférences passées.",
    detail:
      "Le terme désigne un environnement où l'utilisateur, sans le décider explicitement, ne croise plus que des contenus qui confirment ses opinions déjà formées — un mécanisme distinct de la simple homophilie sociale (fréquenter des semblables), puisqu'il est ici produit par un algorithme plutôt que par un choix conscient. L'ampleur réelle du phénomène reste disputée parmi les chercheurs, certains soulignant que les usagers restent exposés à davantage de diversité qu'on ne le suppose souvent.",
    dimensions: ['numerique', 'culturelle', 'politique'],
    concepts: [],
    notions: [
      "Chambre d'écho — un environnement, notamment social, qui expose surtout à des opinions déjà partagées",
      "Filtre algorithmique — le tri automatisé des contenus qui façonne, sans le dire, ce que chacun voit en premier",
      "Personnalisation — la promesse d'un contenu adapté à chacun, qui a pour effet secondaire de le restreindre",
    ],
  },
  {
    id: 'influence-numerique',
    t: 'Influence numérique',
    categorie: 'numerique-medias',
    d: "Une nouvelle économie s'est constituée autour de personnes qui monétisent, sur les plateformes numériques, l'attention et la confiance d'une audience qu'elles ont construites.",
    detail:
      "Goffman fournit une part de l'explication : l'influenceur professionnalise la mise en scène de soi, transformant une présentation quotidienne en produit publicitaire continu. Le phénomène recompose aussi les hiérarchies de légitimité culturelle traditionnelles — la reconnaissance ne passe plus nécessairement par les institutions établies (presse, critique), mais par un nombre d'abonnés et un taux d'engagement.",
    dimensions: ['numerique', 'economique', 'culturelle'],
    concepts: ['mise-en-scene-de-soi'],
    notions: [
      "Placement de produit — la promotion rémunérée d'un bien ou d'un service intégrée au contenu d'un créateur",
      "Micro-influenceur — une figure à l'audience plus restreinte mais jugée plus proche et plus crédible par ses abonnés",
      "Authenticité mise en scène — le paradoxe d'une image spontanée qui est en réalité soigneusement construite",
    ],
  },
  {
    id: 'travail-numerique',
    t: 'Travail numérique',
    categorie: 'numerique-medias',
    d: "Une part croissante du travail est désormais coordonnée par une plateforme et un algorithme plutôt que par un contrat de travail classique et une hiérarchie visible.",
    detail:
      "Castells montre que le pouvoir, dans une société en réseaux, s'exerce moins en dirigeant directement qu'en programmant les objectifs d'un réseau — une description qui s'applique presque littéralement au travail de plateforme, où l'algorithme fixe les règles sans jamais apparaître comme un employeur. Le statut d'indépendant, souvent obligatoire pour accéder à ces plateformes, déplace vers le travailleur des risques auparavant partagés par l'employeur.",
    dimensions: ['numerique', 'travail', 'economique', 'juridique'],
    concepts: ['pouvoir-des-reseaux', 'precariat'],
    notions: [
      "Micro-tâches — un travail fragmenté en unités minimales, rémunérées à la pièce sur des plateformes numériques",
      "Auto-entrepreneuriat subi — un statut d'indépendant choisi moins pour la liberté qu'il promet que par nécessité d'accès à une plateforme",
      "Notation algorithmique — l'évaluation continue du travailleur par ses clients, qui conditionne son accès futur à l'activité",
    ],
  },

  /* — Ville et logement (suite) — */
  {
    id: 'urbanisation',
    t: 'Urbanisation',
    categorie: 'ville',
    d: "Une part toujours croissante de la population mondiale vit désormais en ville — un basculement démographique majeur, achevé dans certains pays, en cours dans beaucoup d'autres.",
    detail:
      "Simmel décrit l'expérience urbaine comme un afflux permanent de stimuli, auquel le citadin répond par une attitude blasée — une distance affective protectrice qui permet de vivre entouré d'inconnus sans en être submergé. Le processus qui y mène est décrit dans la fiche « Urbanisation » des Processus sociaux ; cette entrée regarde l'état atteint — la répartition de la population entre ville et campagne, et ce qu'elle change aux liens sociaux.",
    dimensions: ['urbaine', 'demographique', 'sociale'],
    concepts: ['blasement-urbain'],
    notions: [
      "Taux d'urbanisation — la part de la population vivant en zone urbaine, suivie pays par pays",
      "Mégapole — une agglomération dépassant plusieurs millions d'habitants, forme la plus extrême de l'urbanisation",
      "Exode rural — le mouvement historique de départ des campagnes qui a alimenté l'urbanisation",
    ],
  },
  {
    id: 'periurbanisation',
    t: 'Périurbanisation',
    categorie: 'ville',
    d: "Entre la ville dense et la campagne, une troisième zone s'est installée : ni tout à fait urbaine ni tout à fait rurale, organisée autour de la maison individuelle et de la voiture.",
    detail:
      "Le phénomène, déjà nommé comme facteur dans la fiche « Étalement urbain » (voir cette fiche), mérite sa propre entrée tant il a recomposé, en quelques décennies, le mode de vie d'une large part de la population : un éloignement des centres motivé par le prix du logement, payé en temps de trajet et en dépendance à l'automobile.",
    dimensions: ['urbaine', 'economique', 'demographique'],
    concepts: [],
    notions: [
      "Lotissement pavillonnaire — la forme urbanistique la plus caractéristique de la périurbanisation",
      "Dépendance automobile — la voiture individuelle comme condition d'accès à l'emploi et aux services en zone périurbaine",
      "Vote périurbain — l'hypothèse, disputée, d'un lien entre ce mode de vie et certains choix électoraux",
    ],
  },
  {
    id: 'desertification',
    t: 'Désertification',
    categorie: 'ville',
    d: "Un territoire peut se vider de ses commerces, de ses services et de ses habitants sans qu'aucune catastrophe visible ne l'explique — juste une accumulation de départs, jamais suivis d'un retour.",
    detail:
      "Le phénomène touche aussi bien certains centres-villes moyens, désertés au profit des zones commerciales périphériques, que des zones rurales entières, où la fermeture d'une école ou d'un commerce en entraîne souvent d'autres. Il se distingue des « Inégalités territoriales » (voir cette fiche) par sa dynamique propre : ce n'est pas seulement un déficit initial de services, mais un processus cumulatif de départ qui s'auto-entretient.",
    dimensions: ['urbaine', 'economique', 'demographique'],
    concepts: [],
    notions: [
      "Désertification commerciale — la fermeture en chaîne des commerces de centre-ville au profit des zones périphériques",
      "Désert médical — un territoire où l'offre de soins ne suit plus la demande",
      "Cercle vicieux du déclin local — chaque fermeture de service rend la suivante plus probable",
    ],
  },
];
