/**
 * Couche éditoriale des fiches concepts.
 *
 * `authors.js` porte le concept tel qu'il a été extrait du prototype : titre,
 * année, explication simple, un exemple. Ce fichier ajoute ce que la fiche
 * concept demande en plus, et rien d'autre — il ne recopie ni le titre, ni
 * l'explication simple, ni le premier exemple, qui restent définis une seule
 * fois dans `authors.js`. `getConcept()` (src/data/index.js) assemble les deux.
 *
 * Champs, dans l'ordre où la fiche les affiche :
 *
 * | Champ       | Contenu                                                     |
 * |-------------|-------------------------------------------------------------|
 * | `detaille`  | Définition détaillée : 2 à 3 paragraphes, après la simple    |
 * | `origine`   | `{ oeuvre, annee, contexte }` — d'où le concept sort         |
 * | `exemples`  | Exemples *supplémentaires* ; celui d'`authors.js` vient avant |
 * | `oeuvres`   | `{ y, t }` — les œuvres où le concept travaille              |
 * | `associes`  | identifiants de concepts voisins, cliquables                 |
 * | `opposes`   | identifiants de concepts qui s'y opposent, cliquables        |
 * | `critiques` | objections adressées au concept lui-même, pas à son auteur   |
 * | `evolution` | `{ p, f }` — période et fait, du plus ancien au plus récent  |
 *
 * L'auteur associé n'est pas un champ : il se déduit de la fiche auteur qui
 * porte le concept. `associes` et `opposes` doivent nommer des identifiants
 * existants — `npm run doc:audit` échoue sinon.
 */
export const CONCEPTS = {
  /* — Auguste Comte — */
  'physique-sociale': {
    detaille: [
      "Comte pose que les faits humains relèvent d'une science, au même titre que les corps ou les astres. Là où la philosophie politique demandait quel régime est juste, la physique sociale demande quelles régularités s'observent — et se donne pour règle de n'affirmer que ce que l'observation soutient.",
      "Le mot lui-même est un programme : « physique » revendique la méthode des sciences de la nature, « sociale » désigne l'objet nouveau. Comte l'abandonnera pour « sociologie » en 1839, quand Quetelet lui aura pris le terme.",
    ],
    origine: {
      oeuvre: 'Cours de philosophie positive',
      annee: '1830',
      contexte:
        "Au sortir d'une France qui a essayé en quarante ans la monarchie, la république et l'empire, Comte cherche ce qui pourrait fonder un ordre stable sans le décréter.",
    },
    exemples: [
      "Le nombre de lettres postées sans adresse dans une ville reste presque constant d'une année sur l'autre : personne ne décide d'oublier une adresse, et pourtant le total est prévisible.",
    ],
    oeuvres: [
      { y: '1822', t: 'Plan des travaux scientifiques nécessaires pour réorganiser la société' },
      { y: '1830', t: 'Cours de philosophie positive, leçon 1' },
    ],
    associes: ['loi-des-trois-etats', 'fait-social'],
    opposes: ['ideal-type'],
    critiques: [
      "Le parallèle avec la physique promet une prévision que la sociologie n'a jamais tenue : les régularités sociales se déforment dès qu'on les publie.",
      "Comte n'a mené aucune enquête : le programme est resté une profession de foi méthodologique.",
    ],
    evolution: [
      { p: '1822–1830', f: "Comte forge l'expression pour désigner la science manquante au sommet de sa hiérarchie des savoirs." },
      { p: '1835', f: "Quetelet publie une Physique sociale statistique ; Comte, furieux du télescopage, cherche un autre mot." },
      { p: '1839', f: "Il forge « sociologie », hybride de latin et de grec qu'il assume comme un pis-aller." },
      { p: '1895', f: "Durkheim reprend l'exigence — traiter les faits sociaux comme des choses — mais l'adosse enfin à des données." },
    ],
  },
  'loi-des-trois-etats': {
    detaille: [
      "Comte soutient que toute connaissance humaine traverse trois âges successifs. À l'état théologique, on explique les phénomènes par des volontés surnaturelles. À l'état métaphysique, on remplace les dieux par des entités abstraites — la Nature, le Droit naturel. À l'état positif, on renonce à chercher les causes premières pour se contenter de lois constantes entre les faits.",
      "La loi vaut, selon lui, pour l'humanité entière, pour chaque science prise à part, et pour chaque individu qui grandit. Les sciences y entrent dans l'ordre de leur complexité : l'astronomie d'abord, la sociologie en dernier.",
    ],
    origine: {
      oeuvre: 'Cours de philosophie positive',
      annee: '1842',
      contexte:
        "Exposée dès 1822, la loi reçoit sa formulation complète dans les derniers volumes du Cours, où Comte lui subordonne toute sa classification des sciences.",
    },
    exemples: [
      "La foudre : châtiment de Zeus, puis manifestation d'un fluide électrique, enfin différence de potentiel entre nuage et sol.",
    ],
    oeuvres: [
      { y: '1822', t: 'Plan des travaux scientifiques' },
      { y: '1842', t: 'Cours de philosophie positive, leçons 51 à 57' },
    ],
    associes: ['physique-sociale'],
    opposes: ['rationalisation', 'processus-de-civilisation'],
    critiques: [
      "Les trois états coexistent au lieu de se succéder : le même individu prie, invoque la Nature et lit un graphique dans la même journée.",
      "La loi transforme une préférence — la science vaut mieux que la religion — en nécessité historique, ce qu'aucune donnée n'établit.",
      "Elle place l'Europe du XIXᵉ siècle au terme de l'histoire et lit toutes les autres sociétés comme des retards.",
    ],
    evolution: [
      { p: '1822', f: "Première formulation, dans l'orbite de Saint-Simon." },
      { p: '1842', f: 'Version achevée, articulée à la hiérarchie des six sciences fondamentales.' },
      { p: '1851–1854', f: "Comte fonde une Religion de l'Humanité avec calendrier et sacrements — l'état positif se dote de rites." },
      { p: 'XXᵉ siècle', f: "Le schéma survit comme repère pédagogique, mais aucune sociologie sérieuse ne s'en réclame plus." },
    ],
  },

  /* — Karl Marx — */
  'classe-sociale': {
    detaille: [
      "Pour Marx, une classe ne se définit ni par le revenu, ni par le prestige, ni par le métier, mais par la position occupée dans les rapports de production : posséder les moyens de produire, ou n'avoir que sa force de travail à vendre.",
      "Cette position n'est pas seulement un état, c'est une relation : la bourgeoisie et le prolétariat se définissent l'un par l'autre, et leurs intérêts sont structurellement opposés. D'où la distinction entre classe « en soi » — une position objective partagée — et classe « pour soi », quand ceux qui l'occupent en prennent conscience et s'organisent.",
    ],
    origine: {
      oeuvre: 'Manifeste du parti communiste',
      annee: '1848',
      contexte:
        "Marx et Engels écrivent à la veille du printemps des peuples, pour la Ligue des communistes : le texte est un tract autant qu'une analyse.",
    },
    exemples: [
      "Un artisan qui possède son atelier et un ouvrier qualifié mieux payé que lui n'appartiennent pas à la même classe : l'un vit de son capital, l'autre de son salaire.",
      "Un cadre supérieur licencié découvre en quelques semaines qu'il vendait son temps, comme les autres.",
    ],
    oeuvres: [
      { y: '1848', t: 'Manifeste du parti communiste' },
      { y: '1852', t: 'Le 18 Brumaire de Louis Bonaparte' },
      { y: '1867', t: 'Le Capital, livre I' },
    ],
    associes: ['alienation', 'ideologie', 'capital-culturel'],
    opposes: ['systeme-social', 'domination-legitime'],
    critiques: [
      "La polarisation annoncée en deux classes ne s'est pas produite : les positions intermédiaires ont proliféré.",
      "Weber objecte qu'on peut être riche et méprisé, pauvre et honoré : la classe ne suffit pas, il faut y ajouter le statut et le parti.",
      "Le passage de la classe « en soi » à la classe « pour soi » n'est jamais expliqué — il est espéré.",
    ],
    evolution: [
      { p: '1848', f: "Formulation polémique : « l'histoire de toute société jusqu'à nos jours est l'histoire de luttes de classes »." },
      { p: '1852', f: "Analyse plus fine dans Le 18 Brumaire : la paysannerie forme une classe sans en avoir la conscience." },
      { p: '1867', f: "Le Capital fonde la classe sur l'extraction de la plus-value plutôt que sur la seule propriété." },
      { p: '1979', f: 'Bourdieu déplace la question vers un espace à plusieurs capitaux, où le culturel compte autant que l\'économique.' },
    ],
  },
  'alienation': {
    detaille: [
      "Marx reprend le mot à Hegel et Feuerbach et le retourne : ce n'est pas l'esprit qui se perd dans le monde, c'est le travailleur qui se perd dans son travail. Dans le travail salarié, ce qu'il produit ne lui appartient pas, lui fait face comme une puissance étrangère, et l'appauvrit à mesure qu'il l'enrichit.",
      "Les Manuscrits de 1844 en distinguent quatre faces : le travailleur est séparé du produit de son travail, de l'acte de travailler, de sa nature d'être créateur, et des autres hommes devenus concurrents.",
    ],
    origine: {
      oeuvre: 'Manuscrits économico-philosophiques',
      annee: '1844',
      contexte:
        "Marx a vingt-six ans, il est à Paris, il lit les économistes anglais pour la première fois. Le texte restera inédit jusqu'en 1932.",
    },
    exemples: [
      "Un développeur qui écrit une brique dont il ne verra jamais l'usage, dans un produit qu'il n'utilisera pas.",
      "Un livreur dont l'algorithme fixe la course, le temps et la note, et qui doit lui obéir sans pouvoir lui parler.",
    ],
    oeuvres: [
      { y: '1844', t: 'Manuscrits économico-philosophiques' },
      { y: '1846', t: "L'Idéologie allemande" },
      { y: '1867', t: 'Le Capital, livre I, chapitre sur le fétichisme de la marchandise' },
    ],
    associes: ['ideologie', 'classe-sociale', 'raison-instrumentale'],
    opposes: ['role-et-attentes'],
    critiques: [
      "Le concept suppose une nature humaine non aliénée à laquelle comparer l'état présent — postulat philosophique, non observation.",
      "Althusser y voit un reste hégélien de jeunesse, que le Marx du Capital aurait abandonné pour l'exploitation, mesurable.",
      "Il se prête mal à l'enquête : rien n'indique où l'aliénation commence ni comment on la mesure.",
    ],
    evolution: [
      { p: '1844', f: 'Formulation philosophique dans des manuscrits que Marx ne publiera pas.' },
      { p: '1867', f: "Le thème revient sous une forme économique : le fétichisme de la marchandise, où un rapport entre personnes prend l'apparence d'un rapport entre choses." },
      { p: '1932', f: 'Publication des Manuscrits : un « jeune Marx » humaniste apparaît, et divise le marxisme.' },
      { p: '1944–1964', f: "L'École de Francfort déplace l'aliénation du travail vers la consommation et le divertissement." },
    ],
  },
  'ideologie': {
    detaille: [
      "L'idéologie n'est pas le mensonge d'un groupe qui saurait la vérité et la cacherait. C'est un renversement spontané : les idées dominantes d'une époque sont les idées de sa classe dominante, et elles se présentent comme l'ordre naturel des choses plutôt que comme l'intérêt de quelqu'un.",
      "Marx utilise l'image de la chambre noire : l'idéologie donne du réel une image inversée, où les rapports sociaux paraissent découler des idées alors qu'ils les produisent.",
    ],
    origine: {
      oeuvre: "L'Idéologie allemande",
      annee: '1846',
      contexte:
        "Marx et Engels règlent leurs comptes avec les jeunes hégéliens, qui croyaient changer le monde en changeant la conscience qu'on en a. Le manuscrit restera inédit jusqu'en 1932.",
    },
    exemples: [
      "« Le marché décide » : une phrase qui présente comme un fait de nature le résultat de règles écrites par quelqu'un.",
      "Un classement scolaire présenté comme la mesure du mérite, alors qu'il mesure aussi ce que la famille a transmis.",
    ],
    oeuvres: [
      { y: '1846', t: "L'Idéologie allemande" },
      { y: '1848', t: 'Manifeste du parti communiste' },
      { y: '1867', t: 'Le Capital, livre I' },
    ],
    associes: ['classe-sociale', 'violence-symbolique', 'industrie-culturelle'],
    opposes: ['regimes-de-justification'],
    critiques: [
      "Le concept se retourne contre celui qui l'emploie : au nom de quoi le sociologue échapperait-il à l'idéologie qu'il dénonce chez les autres ?",
      "Il rend l'acteur muet : tout ce qu'il dit pour se justifier devient un symptôme à interpréter, jamais un argument à discuter.",
      "Boltanski en fait le point de rupture : rendre aux gens leur capacité de critique suppose de cesser de la leur retirer.",
    ],
    evolution: [
      { p: '1846', f: "Formulation initiale : les idées dominantes sont celles de la classe dominante." },
      { p: '1923', f: 'Lukács y ajoute la réification : la fausse conscience devient un effet de structure, non une tromperie.' },
      { p: '1944', f: "Adorno et Horkheimer la logent dans l'industrie culturelle plutôt que dans la doctrine." },
      { p: '1970', f: 'Bourdieu la reformule en violence symbolique : la domination est acceptée parce que les catégories pour la penser sont celles du dominant.' },
      { p: '1991', f: "Boltanski la refuse : les acteurs argumentent leurs justifications, ils ne les subissent pas." },
    ],
  },

  /* — Max Weber — */
  'ideal-type': {
    detaille: [
      "L'idéal-type n'est ni une moyenne, ni un modèle à atteindre, ni une description. C'est une construction volontairement accentuée : le chercheur isole quelques traits d'un phénomène, les pousse à leur cohérence logique, et obtient un instrument de mesure.",
      "Sa vérité ne se juge pas à sa ressemblance avec le réel, mais à son utilité : il sert d'étalon pour mesurer les écarts. Un idéal-type n'est jamais vrai ou faux, il est fécond ou stérile.",
    ],
    origine: {
      oeuvre: "L'« objectivité » de la connaissance dans les sciences sociales",
      annee: '1904',
      contexte:
        "Weber prend la direction des Archives de science sociale et ouvre par un texte de méthode, au milieu de la querelle allemande sur le statut des sciences de la culture.",
    },
    exemples: [
      "« L'entreprise familiale » n'existe nulle part sous forme pure, mais le modèle permet de dire en quoi telle PME s'en écarte.",
      "Le « service public à la française » : personne ne le rencontre à l'état chimique, tout le monde s'en sert pour évaluer une administration réelle.",
    ],
    oeuvres: [
      { y: '1904', t: "L'« objectivité » de la connaissance dans les sciences sociales et politiques" },
      { y: '1904', t: "L'Éthique protestante et l'esprit du capitalisme" },
      { y: '1922', t: 'Économie et société' },
    ],
    associes: ['domination-legitime', 'rationalisation'],
    opposes: ['fait-social', 'physique-sociale'],
    critiques: [
      "Rien n'indique quels traits accentuer : le choix dépend de l'intérêt du chercheur, ce qui réintroduit ses valeurs par la porte de service.",
      "Un instrument qu'aucune donnée ne peut réfuter n'est pas un instrument scientifique, objectent les popperiens.",
      "En pratique, l'idéal-type glisse souvent vers la description, puis vers la norme.",
    ],
    evolution: [
      { p: '1904', f: 'Formulation méthodologique, contre une histoire purement narrative et contre une sociologie qui copierait la physique.' },
      { p: '1904–1905', f: "Premier emploi de grande ampleur : « l'esprit du capitalisme » et « l'ascèse intramondaine »." },
      { p: '1922', f: "Économie et société est bâtie en idéaux-types en série : trois formes de domination, plusieurs types d'action." },
      { p: 'après 1945', f: "L'outil se banalise : toute typologie sociologique s'en réclame, souvent sans la rigueur de Weber." },
    ],
  },
  'rationalisation': {
    detaille: [
      "La rationalisation désigne l'extension continue du calcul, de la règle et de la prévisibilité à des domaines qui en relevaient peu : l'économie, le droit, l'administration, la science, jusqu'à la musique.",
      "Elle a un revers, que Weber appelle le désenchantement du monde : à mesure que tout devient calculable, plus rien ne fournit de sens. Et un aboutissement qu'il redoute, la « cage d'acier » — un ordre si efficace que personne ne peut plus en sortir, y compris ceux qu'il sert.",
    ],
    origine: {
      oeuvre: "L'Éthique protestante et l'esprit du capitalisme",
      annee: '1904',
      contexte:
        "Weber cherche pourquoi le capitalisme rationnel est né en Occident et nulle part ailleurs, malgré des richesses et des marchands partout.",
    },
    exemples: [
      "Une université qui évalue ses chercheurs au nombre de publications, indicateur né pour mesurer l'activité et devenu la définition du travail.",
      "Un service d'urgences dont la performance se lit au temps d'attente moyen, ce qui pousse à traiter vite les cas simples.",
    ],
    oeuvres: [
      { y: '1904', t: "L'Éthique protestante et l'esprit du capitalisme" },
      { y: '1919', t: 'Le Savant et le politique' },
      { y: '1922', t: 'Économie et société' },
    ],
    associes: ['domination-legitime', 'raison-instrumentale', 'ideal-type'],
    opposes: ['loi-des-trois-etats', 'nouvel-esprit-du-capitalisme'],
    critiques: [
      "Le récit est occidental : il fait des autres civilisations des cas de rationalisation manquée.",
      "La bureaucratie réelle est bien moins rationnelle que son idéal-type — Merton et Crozier montrent qu'elle produit ses propres dysfonctions.",
      "« Désenchantement » et « cage d'acier » sont des images puissantes qui résistent mal à la mesure.",
    ],
    evolution: [
      { p: '1904', f: "L'ascèse protestante fournit involontairement au capitalisme sa discipline." },
      { p: '1919', f: 'Le désenchantement est formulé comme diagnostic d\'époque devant les étudiants de Munich.' },
      { p: '1922', f: 'Économie et société étend la rationalisation au droit, à la ville, à la domination.' },
      { p: '1947', f: 'Horkheimer et Adorno la radicalisent en raison instrumentale : la raison devient elle-même une force de domination.' },
      { p: '1999', f: "Boltanski et Chiapello décrivent un capitalisme par projets qui se veut l'inverse de la bureaucratie wébérienne." },
    ],
  },
  'domination-legitime': {
    detaille: [
      "Weber refuse de réduire l'obéissance à la peur ou à l'intérêt. Un ordre durable suppose que les dominés tiennent la domination pour légitime — qu'ils lui reconnaissent un droit à s'exercer.",
      "Il en distingue trois formes pures : traditionnelle, où l'on obéit à ce qui a toujours été ; charismatique, où l'on obéit à une personne tenue pour extraordinaire ; légale-rationnelle, où l'on obéit à une règle impersonnelle, et à la fonction plutôt qu'à l'homme. La bureaucratie est la forme achevée de la troisième.",
    ],
    origine: {
      oeuvre: 'Économie et société',
      annee: '1922',
      contexte:
        "Publication posthume par Marianne Weber d'un manuscrit inachevé, dans une Allemagne qui vient d'essayer coup sur coup l'empire, la révolution et la république.",
    },
    exemples: [
      "On respecte un arbitre de football parce qu'il porte le sifflet, pas parce qu'on l'estime.",
      "Un fondateur de start-up dont l'autorité repose sur sa personne : sa succession pose un problème que celle d'un préfet ne pose pas.",
    ],
    oeuvres: [
      { y: '1919', t: 'Le Savant et le politique' },
      { y: '1922', t: 'Économie et société, chapitre III' },
    ],
    associes: ['rationalisation', 'ideal-type', 'role-et-attentes'],
    opposes: ['classe-sociale', 'tyrannie-de-la-majorite'],
    critiques: [
      "Comment distinguer la légitimité reconnue de la résignation ? Weber ne fournit pas de critère observable.",
      "La typologie décrit mal les régimes réels, qui mêlent les trois formes en permanence.",
      "Les sociologies critiques y voient une acceptation trop rapide du point de vue des dominants : ce qu'on nomme légitimité serait de la violence symbolique.",
    ],
    evolution: [
      { p: '1919', f: 'Première mise en forme publique dans Le Métier et la vocation de politique.' },
      { p: '1922', f: 'Exposé systématique dans Économie et société.' },
      { p: '1947', f: 'Traduction anglaise par Parsons : la typologie devient un standard de la sociologie américaine.' },
      { p: '1970', f: "Bourdieu la reformule : la légitimité est le produit d'un travail d'imposition, pas un donné." },
    ],
  },

  /* — Georg Simmel — */
  'formes-de-socialisation': {
    detaille: [
      "Simmel sépare le contenu d'une relation — ce pour quoi les gens se réunissent — et sa forme — la manière dont ils se relient. Un conflit, une hiérarchie, un secret, une alliance sont des formes ; elles se retrouvent identiques dans une famille, une entreprise ou un État.",
      "Le nombre suffit à changer la forme. À deux, chacun est irremplaçable et la relation meurt avec le départ de l'un. À trois, la majorité devient possible, l'arbitrage aussi, et le groupe survit à ses membres.",
    ],
    origine: {
      oeuvre: 'Sociologie. Études sur les formes de la socialisation',
      annee: '1908',
      contexte:
        "Simmel, longtemps tenu à l'écart des chaires allemandes, rassemble vingt ans d'essais pour fonder la sociologie sur un objet propre : la forme du lien.",
    },
    exemples: [
      "Un secret partagé à deux lie ; le même secret partagé à trois devient une information qui circulera.",
      "Dans une négociation à deux, on cherche l'accord ; l'arrivée d'un tiers fait naître aussitôt le calcul des coalitions.",
    ],
    oeuvres: [
      { y: '1900', t: "Philosophie de l'argent" },
      { y: '1908', t: 'Sociologie. Études sur les formes de la socialisation' },
    ],
    associes: ['blasement-urbain', 'mise-en-scene-de-soi', 'configuration'],
    opposes: ['systeme-social', 'fait-social'],
    critiques: [
      "Le formalisme se paie cher : deux situations de même forme peuvent avoir des enjeux de pouvoir incomparables.",
      "Aucune méthode ne dit comment repérer une forme ni comment vérifier qu'on a la bonne.",
      "Une œuvre en essais, sans système, que ses contemporains ont lue comme de la littérature.",
    ],
    evolution: [
      { p: '1890–1908', f: "Élaboration par essais successifs, sur le conflit, le secret, la mode, le pauvre, l'étranger." },
      { p: '1908', f: 'Mise en forme dans la Sociologie, autour de la distinction forme / contenu.' },
      { p: '1920–1940', f: "Park et l'école de Chicago, qui ont suivi ses cours à Berlin, importent la démarche aux États-Unis." },
      { p: '1959', f: "Goffman en tire l'ordre de l'interaction comme domaine autonome." },
    ],
  },
  'blasement-urbain': {
    detaille: [
      "La grande ville soumet le système nerveux à un afflux d'impressions qu'aucun village n'impose. Pour ne pas s'y épuiser, l'habitant développe une réserve : il réagit avec la tête plutôt qu'avec le cœur, et devient blasé — non par froideur, mais par économie.",
      "Simmel y voit une ambivalence, non un déclin. L'indifférence urbaine est le prix d'une liberté inédite : dans la ville, personne ne sait qui vous êtes, donc personne ne vous assigne.",
    ],
    origine: {
      oeuvre: "Les Grandes villes et la vie de l'esprit",
      annee: '1903',
      contexte:
        "Conférence donnée dans le cadre d'une exposition sur la ville de Dresde. Berlin a quadruplé de population en quarante ans.",
    },
    exemples: [
      "On croise plus de visages en une matinée de métro qu'un paysan du XVIIIᵉ siècle n'en voyait en une année — et on n'en retient aucun.",
      "L'habitant d'une grande ville qui ne lève plus les yeux sur une sirène de police, et que le même bruit réveillerait dans un village.",
    ],
    oeuvres: [
      { y: '1900', t: "Philosophie de l'argent" },
      { y: '1903', t: "Les Grandes villes et la vie de l'esprit" },
    ],
    associes: ['formes-de-socialisation', 'anomie', 'mise-en-scene-de-soi'],
    opposes: ['solidarite-organique'],
    critiques: [
      "Le texte décrit le Berlin de 1900 et se lit comme une loi de la vie urbaine en général.",
      "L'expérience décrite est celle d'un bourgeois lettré : l'ouvrière et le domestique ne circulent pas dans la même ville.",
      "Aucune mesure : le blasement est un diagnostic d'écrivain, pas un résultat d'enquête.",
    ],
    evolution: [
      { p: '1903', f: 'Formulation dans une conférence de circonstance, devenue son texte le plus lu.' },
      { p: '1915–1940', f: "L'école de Chicago en fait le point de départ de la sociologie urbaine de terrain." },
      { p: '1938', f: "Wirth systématise en trois variables — taille, densité, hétérogénéité." },
      { p: '1963', f: 'Goffman en tire l\'« inattention civile » : ne pas regarder est un travail, pas une absence.' },
    ],
  },

  /* — Émile Durkheim — */
  'fait-social': {
    detaille: [
      "Un fait social se reconnaît à deux traits : il est extérieur aux consciences individuelles, et il exerce sur elles une contrainte — qu'on éprouve surtout quand on tente d'y résister.",
      "D'où la règle de méthode, la plus célèbre et la plus mal comprise de Durkheim : traiter les faits sociaux comme des choses. Non qu'ils soient des choses, mais il faut les aborder du dehors, sans partir de l'idée qu'on s'en fait, comme un physicien aborde un corps qu'il ne connaît pas.",
    ],
    origine: {
      oeuvre: 'Les Règles de la méthode sociologique',
      annee: '1895',
      contexte:
        "Durkheim doit donner à la sociologie un objet que ni la psychologie ni la philosophie ne revendiquent, pour lui obtenir une place à l'université.",
    },
    exemples: [
      "Le système monétaire, le droit, les horaires de travail : nul ne les a choisis, chacun s'y plie.",
      "Essayez de payer votre loyer dans une autre devise, ou de dîner à quatre heures du matin en famille : la contrainte se manifeste dès qu'on la teste.",
    ],
    oeuvres: [
      { y: '1893', t: 'De la division du travail social' },
      { y: '1895', t: 'Les Règles de la méthode sociologique' },
      { y: '1897', t: 'Le Suicide' },
    ],
    associes: ['anomie', 'solidarite-organique', 'physique-sociale'],
    opposes: ['individualisme-methodologique', 'ideal-type', 'configuration'],
    critiques: [
      "Traiter un fait social comme une chose fait disparaître le sens que les acteurs lui donnent — c'est l'objection de Weber.",
      "L'extériorité est un artifice : les institutions n'existent que parce que des individus les font exister à chaque instant.",
      "Le critère de contrainte n'est pas discriminant : la gravitation aussi contraint, sans être un fait social.",
    ],
    evolution: [
      { p: '1893', f: "Première mise en œuvre : la division du travail traitée comme un fait mesurable par le droit." },
      { p: '1895', f: 'Formulation canonique dans les Règles.' },
      { p: '1897', f: 'Démonstration par les statistiques du suicide, acte réputé le plus intime de tous.' },
      { p: '1912', f: "Inflexion : les Formes élémentaires font du fait social une réalité aussi symbolique qu'extérieure." },
      { p: '1970', f: "Bourdieu tente la synthèse : la structure est extérieure et incorporée à la fois — c'est l'habitus." },
    ],
  },
  'anomie': {
    detaille: [
      "L'anomie n'est pas l'absence de règles, c'est leur dérèglement. Quand les repères qui bornaient les attentes se brouillent, le désir n'a plus de terme, et l'écart entre ce qu'on espère et ce qu'on obtient devient une souffrance sans fond.",
      "Contre-intuitivement, l'anomie survient aussi bien dans la prospérité brusque que dans la crise : ce qui blesse n'est pas la pauvreté, c'est le déplacement rapide des bornes.",
    ],
    origine: {
      oeuvre: 'Le Suicide',
      annee: '1897',
      contexte:
        "Durkheim classe les suicides par causes sociales et isole un type — le suicide anomique — dont les taux montent dans les crises comme dans les booms.",
    },
    exemples: [
      "Une profession dérégulée en quelques années : les anciens repères de carrière ne disent plus rien, les nouveaux ne sont pas encore là.",
      "Un gain soudain à la loterie qui désorganise une vie : les bornes ont sauté, plus rien ne borne l'attente.",
    ],
    oeuvres: [
      { y: '1893', t: 'De la division du travail social, livre III' },
      { y: '1897', t: 'Le Suicide, livre II' },
    ],
    associes: ['fait-social', 'tension-anomique'],
    opposes: ['solidarite-organique'],
    critiques: [
      "Le concept est trop large : il a servi à expliquer le suicide, le crime, le divorce, la grève et le désengagement politique.",
      "Les statistiques de suicide du XIXᵉ siècle dépendent de la manière dont chaque pays enregistrait les décès — Halbwachs le montrera dès 1930.",
      "Il suppose qu'un niveau juste d'attente existe, et que la société doit le fixer : un présupposé normatif, non un constat.",
    ],
    evolution: [
      { p: '1893', f: "Première apparition, comme forme pathologique de la division du travail." },
      { p: '1897', f: "Élaboration complète dans Le Suicide, avec les taux à l'appui." },
      { p: '1938', f: 'Merton la déplace : ce n\'est plus le dérèglement des attentes mais l\'écart entre buts prescrits et moyens accessibles.' },
      { p: '1960–1990', f: "Le mot passe dans le langage courant et y perd sa précision : il finit par désigner tout malaise." },
    ],
  },
  'solidarite-organique': {
    detaille: [
      "Durkheim oppose deux manières de tenir ensemble. Dans la solidarité mécanique, propre aux sociétés peu différenciées, on est lié parce qu'on se ressemble : mêmes croyances, mêmes gestes, et le droit y est répressif, il punit l'offense faite au groupe.",
      "Dans la solidarité organique, née de la division du travail, on est lié parce qu'on diffère : chacun dépend de fonctions qu'il ne sait pas remplir. Le droit y devient restitutif — il rétablit le contrat plutôt qu'il ne venge la faute.",
    ],
    origine: {
      oeuvre: 'De la division du travail social',
      annee: '1893',
      contexte:
        "Thèse de doctorat. La question de l'époque est de savoir si l'individualisme moderne dissout la société ; Durkheim répond qu'il la relie autrement.",
    },
    exemples: [
      "Une panne d'électricité révèle en une heure combien d'inconnus il fallait pour qu'une journée ordinaire ait lieu.",
      "Un hôpital tient par la coordination de métiers qui ne savent pas faire le travail les uns des autres.",
    ],
    oeuvres: [
      { y: '1893', t: 'De la division du travail social' },
      { y: '1902', t: 'Préface à la deuxième édition, sur les groupements professionnels' },
    ],
    associes: ['fait-social', 'systeme-social'],
    opposes: ['anomie', 'blasement-urbain'],
    critiques: [
      "L'histoire ne va pas du mécanique à l'organique : les deux formes coexistent dans toute société connue.",
      "L'ethnographie a montré que les sociétés dites simples sont très différenciées — la prémisse est fausse.",
      "Le lien entre type de droit et type de solidarité, qui devait fournir la preuve empirique, ne résiste pas à l'examen historique.",
    ],
    evolution: [
      { p: '1893', f: 'Formulation dans la thèse, avec le droit comme indicateur mesurable de la solidarité.' },
      { p: '1902', f: "Durkheim ajoute une préface : la solidarité organique ne suffit pas, il faut des corporations pour l'encadrer." },
      { p: '1912', f: "Inflexion vers le religieux : c'est le rituel, plus que la fonction, qui refait le groupe." },
      { p: '1951', f: "Parsons reprend l'idée de différenciation fonctionnelle au cœur de sa théorie des systèmes." },
    ],
  },

  /* — École de Francfort — */
  'industrie-culturelle': {
    detaille: [
      "Adorno et Horkheimer forgent l'expression contre celle de « culture de masse », qui laisserait croire à une culture née des masses. L'industrie culturelle produit pour les masses, d'en haut, selon une logique de série : standardisation des formats, pseudo-individualisation des détails.",
      "Sa fonction n'est pas de mentir mais d'occuper. Le divertissement prolonge le travail : il délasse assez pour qu'on retourne travailler, jamais assez pour qu'on se demande pourquoi.",
    ],
    origine: {
      oeuvre: 'La Dialectique de la raison',
      annee: '1944',
      contexte:
        "Écrit en exil à Los Angeles, à quelques kilomètres des studios d'Hollywood, par deux réfugiés qui viennent de voir une société cultivée basculer dans le nazisme.",
    },
    exemples: [
      "Des séries construites sur une structure identique, où seule change la couleur locale, et dont on sort exactement tel qu'on y est entré.",
      "Un algorithme de recommandation qui appelle « découverte » la proposition la plus proche de ce qu'on a déjà consommé.",
    ],
    oeuvres: [
      { y: '1944', t: 'La Dialectique de la raison, chapitre « La production industrielle de biens culturels »' },
      { y: '1963', t: "Résumé sur l'industrie culturelle" },
      { y: '1964', t: "L'Homme unidimensionnel, de Marcuse" },
    ],
    associes: ['raison-instrumentale', 'ideologie', 'alienation'],
    opposes: ['champ', 'regimes-de-justification'],
    critiques: [
      "Le public y est un réceptacle passif : les études de réception ont montré depuis qu'on détourne, ignore et rejoue ce qu'on reçoit.",
      "Le mépris pour le jazz et le cinéma populaire dit surtout le goût d'un lettré viennois.",
      "Aucune enquête n'accompagne un diagnostic qui prétend valoir pour toute une société.",
    ],
    evolution: [
      { p: '1944', f: "Formulation en exil, dans un chapitre de La Dialectique de la raison." },
      { p: '1964', f: "Marcuse en tire L'Homme unidimensionnel : la société sans opposition, qui absorbe toute critique." },
      { p: '1970–1980', f: "Les cultural studies britanniques renversent la thèse : le public décode, négocie, résiste." },
      { p: '1992', f: "Bourdieu retrouve l'idée sous une autre forme dans sa critique du champ journalistique." },
    ],
  },
  'raison-instrumentale': {
    detaille: [
      "Horkheimer distingue la raison objective, qui interroge les fins et demande ce qui vaut d'être poursuivi, et la raison subjective ou instrumentale, qui ne s'occupe que des moyens et calcule l'efficacité d'un dispositif quel qu'en soit le but.",
      "La thèse est sombre : la raison des Lumières, qui devait libérer, s'est retournée. Devenue pur calcul, elle sert aussi bien à organiser un hôpital qu'un camp. Le progrès technique n'emporte aucun progrès moral avec lui.",
    ],
    origine: {
      oeuvre: "Éclipse de la raison",
      annee: '1947',
      contexte:
        "Horkheimer publie aux États-Unis, deux ans après la découverte des camps, un livre sur la manière dont la rationalité occidentale a pu y conduire.",
    },
    exemples: [
      "Une administration qui perfectionne indéfiniment ses procédures sans jamais rouvrir la question de ce à quoi elles servent.",
      "Une équipe qui optimise le taux de clic d'un service sans que quiconque ait le mandat de demander si le service est bon.",
    ],
    oeuvres: [
      { y: '1944', t: 'La Dialectique de la raison' },
      { y: '1947', t: 'Éclipse de la raison' },
      { y: '1964', t: "L'Homme unidimensionnel, de Marcuse" },
    ],
    associes: ['rationalisation', 'industrie-culturelle', 'alienation'],
    opposes: ['regimes-de-justification'],
    critiques: [
      "Le diagnostic est si total qu'il ne laisse aucune place d'où le critiquer — Habermas le reprochera à ses aînés.",
      "Il confond la raison avec un de ses usages, et rend la critique impuissante en la privant de tout appui rationnel.",
      "Habermas y répond par la raison communicationnelle : discuter des fins est aussi un exercice de la raison.",
    ],
    evolution: [
      { p: '1944', f: "La Dialectique de la raison pose le retournement des Lumières." },
      { p: '1947', f: 'Horkheimer isole et nomme la raison instrumentale.' },
      { p: '1964', f: "Marcuse en tire une critique de la société technicienne qui alimentera 1968." },
      { p: '1981', f: 'Habermas rompt : la Théorie de l\'agir communicationnel oppose au calcul une rationalité de la discussion.' },
    ],
  },

  /* — Talcott Parsons — */
  'systeme-social': {
    detaille: [
      "Parsons conçoit la société comme un système d'actions interdépendantes, tendu vers l'équilibre. Toute société doit résoudre quatre problèmes — s'adapter à son environnement, atteindre ses buts, s'intégrer, maintenir ses modèles culturels — et se dote de sous-systèmes spécialisés pour chacun.",
      "L'ordre ne vient ni de la contrainte ni du contrat, mais des valeurs communes : intériorisées dès l'enfance, elles font que ce qu'on doit faire est aussi, le plus souvent, ce qu'on veut faire.",
    ],
    origine: {
      oeuvre: 'Le Système social',
      annee: '1951',
      contexte:
        "Parsons entreprend à Harvard une théorie générale qui unifierait sociologie, psychologie et anthropologie, dans une Amérique d'après-guerre confiante en ses institutions.",
    },
    exemples: [
      "L'école lue comme le sas qui fait passer d'un statut hérité — l'enfant d'une famille — à un statut acquis, évalué au mérite.",
      "La famille lue comme l'organe qui fabrique les personnalités dont le système économique aura besoin.",
    ],
    oeuvres: [
      { y: '1937', t: "La Structure de l'action sociale" },
      { y: '1951', t: 'Le Système social' },
      { y: '1966', t: 'Sociétés : essai sur leur évolution comparée' },
    ],
    associes: ['role-et-attentes', 'solidarite-organique', 'fonction-latente'],
    opposes: ['classe-sociale', 'formes-de-socialisation', 'effets-pervers'],
    critiques: [
      "Le modèle explique la stabilité et ne sait pas rendre compte du conflit ni du changement — objection de Mills et de Dahrendorf.",
      "Décrire une institution par sa fonction revient souvent à la justifier : le fonctionnalisme est conservateur par construction.",
      "L'abstraction est telle qu'on voit mal quelle observation pourrait le contredire.",
    ],
    evolution: [
      { p: '1937', f: "La Structure de l'action sociale cherche une convergence entre Durkheim, Weber, Pareto et Marshall." },
      { p: '1951', f: 'Le Système social donne la version canonique.' },
      { p: '1953–1966', f: 'Le schéma AGIL est formalisé, puis étendu à une théorie de l\'évolution des sociétés.' },
      { p: '1949', f: "Merton avait déjà pris ses distances : mieux vaut des théories de portée moyenne qu'un système." },
      { p: 'après 1970', f: "Le fonctionnalisme s'effondre comme paradigme dominant ; Luhmann en reprendra la piste systémique." },
    ],
  },
  'role-et-attentes': {
    detaille: [
      "Le rôle est l'unité élémentaire du système social : non pas ce qu'un individu est, mais ce qu'on attend de la position qu'il occupe. Agir socialement, c'est répondre à ces attentes — et les attentes des autres sont elles-mêmes ajustées aux nôtres.",
      "Parsons appelle cet emboîtement la complémentarité des attentes. Il tient parce que les valeurs ont été intériorisées : le patient veut être soigné, le médecin veut soigner, et le rôle épargne à chacun d'avoir à négocier la situation.",
    ],
    origine: {
      oeuvre: 'Le Système social',
      annee: '1951',
      contexte:
        "Parsons construit le chapitre à partir d'un cas qu'il a longuement observé, le rôle de malade, où l'on est dispensé d'obligations à condition de vouloir guérir.",
    },
    exemples: [
      "Un médecin peut poser des questions et toucher un corps — dans son cabinet, et parce que la position l'y autorise.",
      "Un enseignant tutoie ses élèves sans que l'inverse soit possible : l'asymétrie tient au rôle, pas aux personnes.",
    ],
    oeuvres: [
      { y: '1951', t: 'Le Système social, chapitres III et X' },
      { y: '1955', t: 'Family, Socialization and Interaction Process' },
    ],
    associes: ['systeme-social', 'domination-legitime'],
    opposes: ['mise-en-scene-de-soi', 'alienation'],
    critiques: [
      "L'acteur y est un exécutant surdéterminé : Wrong parlera d'une « conception sursocialisée de l'homme ».",
      "Goffman objecte que l'on joue son rôle avec de la distance, de l'ironie et des écarts — c'est même ainsi qu'on montre qu'on vaut mieux que lui.",
      "Les rôles réels sont contradictoires : la même personne est parent, salariée et aidante, et aucune attente ne s'ajuste.",
    ],
    evolution: [
      { p: '1936', f: 'Linton distingue statut et rôle en anthropologie ; Parsons hérite du couple.' },
      { p: '1951', f: 'Systématisation autour de la complémentarité des attentes et du rôle de malade.' },
      { p: '1959', f: "Goffman retourne le concept : le rôle est joué, avec des coulisses et de la distance." },
      { p: '1961', f: "Goffman pousse jusqu'au bout dans Asiles : l'institution totale est celle qui interdit toute distance au rôle." },
    ],
  },

  /* — Norbert Elias — */
  'processus-de-civilisation': {
    detaille: [
      "Elias suit sur cinq siècles les traités de savoir-vivre européens et y lit un déplacement : ce qui était interdit du dehors — cracher à table, se moucher dans la nappe, dormir à plusieurs nus — devient peu à peu impensable du dedans. La contrainte extérieure se change en autocontrainte.",
      "Ce processus n'a pas de plan. Il tient à deux transformations parallèles : la formation d'États qui monopolisent la violence et l'impôt, et l'allongement des chaînes d'interdépendance, qui obligent chacun à anticiper toujours plus loin les réactions des autres.",
    ],
    origine: {
      oeuvre: 'Über den Prozeß der Zivilisation',
      annee: '1939',
      contexte:
        "Elias, juif allemand exilé à Londres, publie en allemand chez un éditeur suisse un livre qui passe inaperçu — l'année où l'Europe démontre le contraire de ce qu'il décrit.",
    },
    exemples: [
      "La fourchette, longtemps jugée ridicule et affectée, devenue si évidente qu'on ne peut plus manger sans elle sans gêne.",
      "Baisser la voix dans un train : personne ne le demande, et l'on se surveille soi-même.",
    ],
    oeuvres: [
      { y: '1939', t: 'La Civilisation des mœurs' },
      { y: '1939', t: "La Dynamique de l'Occident" },
      { y: '1969', t: 'La Société de cour' },
    ],
    associes: ['configuration', 'habitus', 'rationalisation'],
    opposes: ['loi-des-trois-etats'],
    critiques: [
      "Le mot « civilisation » suggère un progrès moral qu'Elias dit ne pas vouloir dire — et que la Shoah, contemporaine du livre, dément.",
      "Les sources sont des manuels de savoir-vivre : elles disent ce que l'élite prescrivait, non ce que les gens faisaient.",
      "Le récit est strictement européen et se laisse lire comme une échelle où placer les autres sociétés.",
    ],
    evolution: [
      { p: '1939', f: "Publication en allemand, dans l'indifférence : quelques centaines d'exemplaires vendus." },
      { p: '1969', f: 'Réédition allemande ; Elias a soixante-douze ans et devient lisible.' },
      { p: '1973–1975', f: 'Traduction française chez Calmann-Lévy ; le livre devient un classique tardif.' },
      { p: '1980–2000', f: "Elias répond aux objections par les « poussées de décivilisation » : le processus est réversible." },
    ],
  },
  'configuration': {
    detaille: [
      "Elias refuse le choix entre l'individu et la société, qu'il tient pour une mauvaise question héritée de la langue : nous disons « l'individu et la société » comme s'il s'agissait de deux choses séparées, alors qu'il n'existe que des gens liés les uns aux autres.",
      "Une configuration est ce tissu d'interdépendances mouvantes. Son modèle est le jeu : les joueurs sont libres de leurs coups, mais chaque coup modifie la position de tous, et la partie n'est le plan de personne.",
    ],
    origine: {
      oeuvre: "Qu'est-ce que la sociologie ?",
      annee: '1970',
      contexte:
        "Elias, enfin reconnu, écrit un manuel où il expose la notion qui travaillait ses livres depuis trente ans sans avoir été nommée.",
    },
    exemples: [
      "Une équipe où le retard d'une personne réorganise la journée de dix autres, sans que personne ait décidé de cette dépendance.",
      "Une cour royale où chacun surveille chacun : le roi lui-même est prisonnier de l'étiquette qui le rend roi.",
    ],
    oeuvres: [
      { y: '1969', t: 'La Société de cour' },
      { y: '1970', t: "Qu'est-ce que la sociologie ?" },
      { y: '1987', t: 'La Société des individus' },
    ],
    associes: ['processus-de-civilisation', 'formes-de-socialisation', 'champ'],
    opposes: ['fait-social', 'individualisme-methodologique'],
    critiques: [
      "La notion est si englobante qu'elle décrit tout et ne prédit rien : toute situation sociale est une configuration.",
      "Elias n'en donne aucun protocole : comment délimite-t-on une configuration, où s'arrête-t-elle ?",
      "Elle recouvre largement le champ de Bourdieu et le système de Parsons, sans qu'Elias dise ce qui l'en distingue.",
    ],
    evolution: [
      { p: '1939', f: "L'idée travaille déjà le Processus de civilisation sans porter de nom." },
      { p: '1969', f: 'La Société de cour en fournit le cas d\'école : Versailles comme configuration.' },
      { p: '1970', f: 'Le mot est posé et exposé dans le manuel.' },
      { p: '1980–2000', f: 'La « sociologie figurationnelle » se constitue en courant, surtout aux Pays-Bas et en Angleterre.' },
    ],
  },

  /* — Robert K. Merton — */
  'fonction-latente': {
    detaille: [
      "Merton distingue les fonctions manifestes — les conséquences voulues et reconnues d'une pratique — et les fonctions latentes, réelles mais ni voulues ni aperçues. La distinction sauve le fonctionnalisme du ridicule : elle explique pourquoi des pratiques absurdes persistent.",
      "Il y ajoute une notion que Parsons n'avait pas : la dysfonction. Toute institution ne contribue pas à l'équilibre ; certaines conséquences le défont. Une même pratique peut être fonctionnelle pour un groupe et dysfonctionnelle pour un autre.",
    ],
    origine: {
      oeuvre: 'Éléments de théorie et de méthode sociologiques',
      annee: '1949',
      contexte:
        "Merton met de l'ordre dans un fonctionnalisme qu'il juge trop ambitieux, en lui donnant des règles d'usage et des théories de portée moyenne.",
    },
    exemples: [
      "La danse de la pluie hopi ne fait pas pleuvoir — mais elle rassemble périodiquement un groupe dispersé, ce qui suffit à sa persistance.",
    ],
    oeuvres: [
      { y: '1949', t: 'Éléments de théorie et de méthode sociologiques, chapitre I' },
      { y: '1957', t: 'Édition augmentée : Social Theory and Social Structure' },
    ],
    associes: ['effets-pervers', 'prophetie-autorealisatrice', 'systeme-social'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "Une fonction latente n'est jamais réfutable : on peut en attribuer une à n'importe quelle pratique après coup.",
      "L'analyse reste fonctionnaliste : elle explique la persistance par l'utilité, ce que Merton reprochait pourtant à Parsons.",
      "Elle donne au sociologue le monopole du sens réel : les acteurs, eux, se tromperaient sur ce qu'ils font.",
    ],
    evolution: [
      { p: '1936', f: 'Merton publie sur les conséquences non anticipées de l\'action sociale : la matrice de la distinction.' },
      { p: '1949', f: 'Formulation canonique du couple manifeste / latente, avec la dysfonction.' },
      { p: '1957', f: "L'édition augmentée en fait le paradigme de référence de l'analyse fonctionnelle." },
      { p: '1977', f: "Boudon en radicalise la logique : les effets pervers n'ont besoin d'aucune fonction pour exister." },
    ],
  },
  'prophetie-autorealisatrice': {
    detaille: [
      "Merton part du théorème de W. I. Thomas : si les hommes définissent des situations comme réelles, elles sont réelles dans leurs conséquences. Une définition d'abord fausse suscite des conduites qui finissent par la rendre vraie — et la fausseté d'origine devient invisible.",
      "Le mécanisme est particulièrement puissant quand il touche des groupes : le préjugé fabrique les conditions qui le confirment, puis se réclame de sa propre confirmation.",
    ],
    origine: {
      oeuvre: 'The Self-Fulfilling Prophecy',
      annee: '1948',
      contexte:
        "Merton publie dans l'Antioch Review un article destiné à un large public, à un moment où la ségrégation américaine se justifie par les effets qu'elle produit.",
    },
    exemples: [
      "La rumeur d'une pénurie de carburant : chacun va faire le plein, et la pénurie a lieu.",
      "Une banque solide dont on annonce la faillite : les clients retirent leurs fonds, et elle fait faillite.",
    ],
    oeuvres: [
      { y: '1948', t: 'The Self-Fulfilling Prophecy' },
      { y: '1949', t: 'Éléments de théorie et de méthode sociologiques' },
    ],
    associes: ['etiquetage', 'fonction-latente', 'stigmate'],
    opposes: ['physique-sociale'],
    critiques: [
      "Le mécanisme est rarement isolé : dans les cas réels, la croyance n'est jamais seule à agir.",
      "L'expérience de Rosenthal et Jacobson sur l'effet Pygmalion à l'école, longtemps citée comme preuve, a mal résisté aux réplications.",
      "Il existe aussi des prophéties autodestructrices — une alerte crédible qui provoque l'action évitant ce qu'elle annonçait.",
    ],
    evolution: [
      { p: '1928', f: "W. I. et D. S. Thomas énoncent le théorème dont Merton fera la matrice." },
      { p: '1948', f: "Merton nomme le mécanisme et l'applique à la ségrégation raciale et aux ruées bancaires." },
      { p: '1963', f: "Becker le retrouve dans la déviance : l'étiquette fabrique la carrière qu'elle annonce." },
      { p: '1968', f: 'Rosenthal et Jacobson tentent de le mesurer à l\'école ; le résultat sera contesté.' },
    ],
  },
  'tension-anomique': {
    detaille: [
      "Merton reprend le mot de Durkheim et en change le mécanisme. La tension ne vient pas d'un dérèglement des attentes, mais d'un décalage structurel : une société prescrit à tous les mêmes buts — aux États-Unis, la réussite matérielle — sans donner à tous les mêmes moyens légitimes de les atteindre.",
      "De ce décalage, il tire cinq adaptations possibles : le conformisme, l'innovation — accepter le but, prendre des moyens illégitimes —, le ritualisme, l'évasion, la rébellion. La déviance devient une réponse normale à une situation anormale.",
    ],
    origine: {
      oeuvre: 'Social Structure and Anomie',
      annee: '1938',
      contexte:
        "Merton écrit à la sortie de la Grande Dépression, contre les explications de la délinquance par la pathologie individuelle.",
    },
    exemples: [
      "Un quartier où la réussite s'affiche partout et où aucun emploi qualifié n'est accessible : l'innovation illégale devient la voie qui reste.",
      "Un fonctionnaire qui a renoncé à monter et applique le règlement à la lettre — le ritualisme, déviance invisible.",
    ],
    oeuvres: [
      { y: '1938', t: 'Social Structure and Anomie' },
      { y: '1949', t: 'Éléments de théorie et de méthode sociologiques, chapitres VI et VII' },
    ],
    associes: ['anomie', 'carriere-deviante', 'fonction-latente'],
    opposes: ['etiquetage'],
    critiques: [
      "Le modèle explique mal la délinquance des classes supérieures, qui ne manquent d'aucun moyen légitime.",
      "Becker objecte qu'il prend la définition officielle de la déviance pour donnée, au lieu de demander qui l'a écrite.",
      "Il postule un consensus sur les buts — la réussite matérielle — que rien n'établit.",
    ],
    evolution: [
      { p: '1938', f: "Article fondateur : cinq adaptations à l'écart entre buts et moyens." },
      { p: '1949–1957', f: 'Merton complète la typologie et répond aux objections dans les rééditions.' },
      { p: '1955–1960', f: 'Cohen, Cloward et Ohlin en tirent les théories des sous-cultures délinquantes.' },
      { p: '1963', f: "Becker renverse la question : la déviance n'est pas dans l'acte mais dans la réaction." },
      { p: '1992', f: 'Agnew la reformule en théorie générale de la tension, centrée sur les émotions négatives.' },
    ],
  },

  /* — Pierre Bourdieu — */
  'habitus': {
    detaille: [
      "L'habitus est un système de dispositions durables : des schémas de perception, d'appréciation et d'action déposés en nous par nos conditions d'existence, et qui fonctionnent ensuite sans que nous ayons à y penser.",
      "Bourdieu le décrit comme « structure structurée » et « structure structurante » : produit de la position sociale, il engendre à son tour des conduites qui reconduisent cette position. C'est ce qui permet d'expliquer la reproduction sociale sans avoir besoin ni d'un complot ni d'un calcul.",
      "L'habitus n'est ni un réflexe ni une règle : il donne un sens du jeu. Il rend certaines conduites impensables et d'autres évidentes, tout en laissant place à l'improvisation — comme un joueur expérimenté qui ne délibère pas.",
    ],
    origine: {
      oeuvre: "Esquisse d'une théorie de la pratique",
      annee: '1972',
      contexte:
        "Bourdieu tire de son terrain kabyle un concept qui règle un problème que le structuralisme lui laissait : comment des règles produisent-elles des pratiques sans que personne ne les applique ?",
    },
    exemples: [
      "Le goût pour un plat, une musique ou un sport, éprouvé comme une préférence intime, qui se distribue pourtant très régulièrement selon l'origine sociale.",
      "Une manière de se tenir en entretien d'embauche — l'aisance ou la raideur — qu'aucune préparation ne suffit à corriger.",
    ],
    oeuvres: [
      { y: '1972', t: "Esquisse d'une théorie de la pratique" },
      { y: '1979', t: 'La Distinction' },
      { y: '1980', t: 'Le Sens pratique' },
    ],
    associes: ['capital-culturel', 'champ', 'violence-symbolique', 'processus-de-civilisation'],
    opposes: ['individualisme-methodologique', 'carriere-deviante'],
    critiques: [
      "Le déterminisme paraît sans issue : si l'habitus produit les conduites qui le reconduisent, d'où viendrait le changement ?",
      "Le concept est difficile à observer : on l'infère des conduites qu'il est censé expliquer, ce qui frôle la circularité.",
      "Lahire objecte qu'un individu traverse plusieurs milieux et porte donc des dispositions hétérogènes, parfois contradictoires — l'habitus au singulier serait une fiction.",
    ],
    evolution: [
      { p: 'XIIIᵉ–XXᵉ s.', f: "Le mot circule chez Aristote traduit par Thomas d'Aquin, puis chez Husserl, Mauss et Panofsky." },
      { p: '1972', f: "Bourdieu lui donne sa définition sociologique dans l'Esquisse, à partir du terrain kabyle." },
      { p: '1979', f: "La Distinction en fait l'instrument d'une cartographie des goûts français." },
      { p: '1980', f: 'Le Sens pratique en donne la formulation théorique la plus complète.' },
      { p: '1998–2002', f: 'Lahire ouvre la révision : dispositions plurielles, contextes multiples, acteur non unifié.' },
    ],
  },
  'capital-culturel': {
    detaille: [
      "Le capital culturel désigne les ressources non financières qui procurent un avantage social : familiarité avec la culture légitime, aisance verbale, manière de se tenir, diplômes.",
      "Bourdieu en distingue trois états. Incorporé : dispositions acquises par imprégnation, longues à obtenir et impossibles à transmettre par testament. Objectivé : livres, tableaux, instruments — dont l'usage suppose l'état incorporé. Institutionnalisé : le diplôme, qui convertit la disposition en titre garanti et négociable.",
      "Son efficacité tient à sa dissimulation : reconnu comme du talent, il opère d'autant mieux qu'il n'apparaît pas comme un héritage.",
    ],
    origine: {
      oeuvre: 'La Reproduction',
      annee: '1970',
      contexte:
        "Avec Passeron, Bourdieu cherche pourquoi une école formellement égalitaire produit des résultats si régulièrement inégaux. L'article de 1979 sur les trois états donnera au concept sa forme définitive.",
    },
    exemples: [
      "Savoir quoi dire d'une exposition, quel registre adopter avec un professeur, quelle question poser en fin d'entretien.",
      "Une bibliothèque familiale qui ne sert à rien à qui n'a pas appris à s'en servir.",
    ],
    oeuvres: [
      { y: '1964', t: 'Les Héritiers (avec J.-C. Passeron)' },
      { y: '1970', t: 'La Reproduction (avec J.-C. Passeron)' },
      { y: '1979', t: 'La Distinction' },
    ],
    associes: ['habitus', 'violence-symbolique', 'champ', 'classe-sociale'],
    opposes: ['individualisme-methodologique', 'stigmate'],
    critiques: [
      "La mesure est incertaine : les enquêtes l'approchent par le diplôme des parents, ce qui le confond avec le capital scolaire.",
      "Boudon oppose une explication concurrente des mêmes faits : les inégalités scolaires viennent de décisions rationnelles prises sous contrainte, non d'un héritage culturel.",
      "La « culture légitime » de La Distinction est celle de la France des années 1960 : l'omnivorisme culturel des classes supérieures actuelles y correspond mal.",
    ],
    evolution: [
      { p: '1964', f: 'Les Héritiers en donne la première formulation, sans le mot.' },
      { p: '1970', f: 'La Reproduction articule capital culturel et violence symbolique.' },
      { p: '1979', f: "Les trois états sont distingués dans un article des Actes de la recherche ; La Distinction en fait l'usage empirique." },
      { p: '1990–2020', f: 'Le concept devient un standard international de la sociologie de l\'éducation, souvent réduit à une variable.' },
    ],
  },
  'champ': {
    detaille: [
      "Un champ est un espace social relativement autonome, avec ses règles, ses enjeux et sa monnaie de prestige propres : champ littéraire, journalistique, scientifique, politique.",
      "Chaque champ a un enjeu spécifique et un capital qui n'a cours qu'en lui. Y entrer suppose de croire à l'enjeu — Bourdieu parle d'illusio. La position de chacun dépend du capital qu'il y détient, et la lutte oppose ceux qui dominent, attachés à conserver, et les nouveaux venus, qui ont intérêt à changer les règles.",
      "L'autonomie d'un champ est une conquête toujours menacée : le champ littéraire se constitue en refusant le verdict du marché, et se défait quand le marché le rattrape.",
    ],
    origine: {
      oeuvre: 'Le Marché des biens symboliques',
      annee: '1971',
      contexte:
        "Bourdieu étudie comment l'art et la littérature ont conquis au XIXᵉ siècle le droit de se juger eux-mêmes. La théorie sera systématisée en 1976 puis en 1992.",
    },
    exemples: [
      "Un chercheur qui publie un livre grand public gagne en notoriété ce qu'il perd en crédit auprès de ses collègues.",
      "Un prix littéraire dont la valeur tient précisément à ce qu'il ne rapporte pas d'argent.",
    ],
    oeuvres: [
      { y: '1971', t: 'Le Marché des biens symboliques' },
      { y: '1979', t: 'La Distinction' },
      { y: '1992', t: "Les Règles de l'art" },
    ],
    associes: ['habitus', 'capital-culturel', 'configuration'],
    opposes: ['systeme-social', 'industrie-culturelle'],
    critiques: [
      "Les frontières d'un champ ne sont jamais démontrées : le sociologue les trace, puis y trouve ce qu'il y a mis.",
      "Le modèle suppose partout une lutte pour un capital, ce qui rend toute coopération suspecte par avance.",
      "Il s'applique mal aux mondes peu institutionnalisés, où Becker préfère parler de « mondes » — des chaînes de coopération plutôt que des champs de bataille.",
    ],
    evolution: [
      { p: '1966–1971', f: "Premiers usages, à propos de l'intellectuel et du marché des biens symboliques." },
      { p: '1976', f: "« Quelques propriétés des champs » donne la formulation théorique générale." },
      { p: '1992', f: "Les Règles de l'art fournit la démonstration historique complète, sur Flaubert et le second XIXᵉ." },
      { p: '1996', f: 'Sur la télévision applique le modèle au champ journalistique et à sa perte d\'autonomie.' },
    ],
  },
  'violence-symbolique': {
    detaille: [
      "La violence symbolique est une domination qui s'exerce avec la complicité de celui qui la subit — non par lâcheté ni par calcul, mais parce qu'il perçoit le monde avec les catégories mêmes que la domination a produites.",
      "Elle est douce, invisible, méconnue comme violence. Le dominé n'a pas d'autres instruments pour penser sa position que ceux du dominant : il attribue son échec à ses capacités plutôt qu'à l'écart entre son milieu et l'institution qui le juge.",
      "Elle suppose donc un travail d'inculcation, souvent scolaire ou familial, qui transforme un arbitraire culturel en évidence naturelle.",
    ],
    origine: {
      oeuvre: 'La Reproduction',
      annee: '1970',
      contexte:
        "Bourdieu et Passeron ouvrent le livre par une théorie de l'action pédagogique comme imposition d'un arbitraire culturel qui masque sa propre arbitrarité.",
    },
    exemples: [
      "Une personne qui s'excuse de « mal parler » devant un interlocuteur dont elle a intériorisé la langue comme la bonne.",
      "Un candidat qui renonce à une filière prestigieuse en jugeant qu'elle « n'est pas pour lui ».",
    ],
    oeuvres: [
      { y: '1970', t: 'La Reproduction (avec J.-C. Passeron)' },
      { y: '1979', t: 'La Distinction' },
      { y: '1998', t: 'La Domination masculine' },
    ],
    associes: ['capital-culturel', 'habitus', 'ideologie', 'stigmate'],
    opposes: ['regimes-de-justification', 'individualisme-methodologique'],
    critiques: [
      "Le concept est irréfutable : l'accord du dominé confirme la domination, et son désaccord aussi.",
      "Il retire aux acteurs toute capacité critique — c'est le point de rupture de Boltanski et de la sociologie pragmatique.",
      "Il transforme le sociologue en seul détenteur de la lucidité, position que Bourdieu lui-même jugeait intenable en théorie.",
    ],
    evolution: [
      { p: '1970', f: 'Formulation dans La Reproduction, à propos de l\'action pédagogique.' },
      { p: '1979–1980', f: 'Extension aux goûts, aux styles de vie et au sens pratique.' },
      { p: '1991', f: 'Boltanski et Thévenot ouvrent la voie inverse : les acteurs justifient et critiquent par eux-mêmes.' },
      { p: '1998', f: 'La Domination masculine applique le concept aux rapports de genre, et suscite de vives critiques féministes.' },
    ],
  },

  /* — Erving Goffman — */
  'mise-en-scene-de-soi': {
    detaille: [
      "Goffman propose de lire l'interaction ordinaire avec le vocabulaire du théâtre. Chacun présente de soi une version ajustée à la situation, sur une scène où le public compte, et dispose de coulisses où l'on relâche la tenue et où l'on prépare l'entrée.",
      "L'enjeu de la représentation n'est pas de tromper : c'est de tenir une définition commune de la situation. Chacun travaille aussi à sauver la face des autres, parce qu'un incident qui découvre l'un embarrasse tout le monde.",
      "La métaphore n'est pas un ornement. Elle donne un protocole d'observation : repérer la scène, les coulisses, l'équipe, le public, les accessoires et les ratés.",
    ],
    origine: {
      oeuvre: 'La Mise en scène de la vie quotidienne',
      annee: '1959',
      contexte:
        "Le livre sort de la thèse de Goffman, tirée d'une année d'observation dans une île des Shetland, où il avait étudié la vie d'un hôtel et d'une communauté crofting.",
    },
    exemples: [
      "Une réunion en visioconférence où l'on soigne l'arrière-plan : les coulisses deviennent décor.",
      "Un couple qui se dispute jusqu'à la porte, puis entre chez des amis en équipe soudée.",
    ],
    oeuvres: [
      { y: '1956', t: 'The Presentation of Self in Everyday Life, première édition' },
      { y: '1959', t: 'La Mise en scène de la vie quotidienne' },
      { y: '1967', t: 'Les Rites d\'interaction' },
    ],
    associes: ['stigmate', 'cadre-de-l-experience', 'formes-de-socialisation'],
    opposes: ['role-et-attentes'],
    critiques: [
      "La métaphore suggère un acteur cynique et calculateur derrière le rôle, ce que Goffman nie mais que le vocabulaire impose.",
      "L'échelle micro laisse hors champ les inégalités durables : on voit qui joue, jamais qui a distribué les rôles.",
      "Les matériaux — anecdotes, romans, coupures de presse — rendent toute réplication impossible.",
    ],
    evolution: [
      { p: '1949–1951', f: "Terrain aux Shetland, matrice de l'ensemble." },
      { p: '1956', f: "Première édition, tirée à peu d'exemplaires par l'université d'Édimbourg." },
      { p: '1959', f: 'Édition commerciale : le livre devient un classique immédiat.' },
      { p: '1961', f: 'Asiles montre le revers : ce qui reste du soi quand l\'institution supprime les coulisses.' },
      { p: '1974', f: "Les Cadres de l'expérience remplacent la scène par le cadre, plus général et moins théâtral." },
    ],
  },
  'stigmate': {
    detaille: [
      "Un stigmate est un attribut qui jette un discrédit profond sur celui qui le porte, et qui réduit la personne, aux yeux des autres, à ce seul trait. Il n'est pas dans l'attribut lui-même mais dans la relation : ce qui déclasse ici passe inaperçu ailleurs.",
      "Goffman en distingue trois types — les monstruosités du corps, les tares de caractère, les stigmates tribaux de race, nation ou religion — et surtout deux situations : le discrédité, dont le stigmate se voit, et le discréditable, dont il peut se cacher.",
      "Toute la vie sociale du stigmatisé devient alors un travail de gestion de l'information sur soi : que dire, à qui, quand, et à quel prix.",
    ],
    origine: {
      oeuvre: 'Stigmate. Les usages sociaux des handicaps',
      annee: '1963',
      contexte:
        "Goffman travaille à partir d'autobiographies, de courriers de lecteurs et d'études de cas plutôt que d'un terrain unique, dans une Amérique qui commence à discuter ses exclusions.",
    },
    exemples: [
      "Une maladie chronique invisible : chaque nouvelle relation rouvre la question de le dire ou non.",
      "Un accent régional que l'on gomme au téléphone et que l'on retrouve en famille.",
    ],
    oeuvres: [
      { y: '1961', t: 'Asiles' },
      { y: '1963', t: 'Stigmate. Les usages sociaux des handicaps' },
    ],
    associes: ['etiquetage', 'mise-en-scene-de-soi', 'prophetie-autorealisatrice', 'violence-symbolique'],
    opposes: ['capital-culturel'],
    critiques: [
      "Le regard reste celui de la gestion individuelle : rien sur les mobilisations collectives qui retournent le stigmate en fierté.",
      "Le concept a été si largement repris qu'il désigne aujourd'hui toute forme de dévalorisation, et ne discrimine plus rien.",
      "Les militants du handicap lui reprochent de partir des normaux et de traiter le stigmatisé comme un problème d'adaptation.",
    ],
    evolution: [
      { p: '1961', f: "Asiles décrit la mortification du soi dans l'institution totale : le stigmate y est fabriqué." },
      { p: '1963', f: 'Formulation complète et autonome dans Stigmate.' },
      { p: '1970–1990', f: 'Le concept devient central en sociologie de la santé, du handicap et de la déviance.' },
      { p: '1999–2010', f: 'Link et Phelan le reformulent en modèle structurel : le stigmate suppose du pouvoir, pas seulement un regard.' },
    ],
  },
  'cadre-de-l-experience': {
    detaille: [
      "Un cadre est la réponse implicite à la question « que se passe-t-il ici ? ». Toute situation en comporte un, qui indique comment lire ce qui s'y déroule, et sans lequel les mêmes gestes n'auraient aucun sens.",
      "Goffman distingue les cadres primaires — naturels ou sociaux — et leurs transformations : le mode, quand une activité est rejouée comme jeu, répétition ou cérémonie ; la fabrication, quand une partie des présents est délibérément trompée.",
      "Les cadres peuvent se briser. Un fou rire en pleine cérémonie, une caméra qui apparaît : la rupture de cadre révèle le travail invisible qui tenait la situation.",
    ],
    origine: {
      oeuvre: "Les Cadres de l'expérience",
      annee: '1974',
      contexte:
        "Goffman abandonne la métaphore théâtrale pour un appareil plus général, emprunté à Bateson, capable de traiter aussi bien le jeu que l'escroquerie et le rituel.",
    },
    exemples: [
      "Un baiser sur un plateau de tournage : le cadre « fiction » suspend tout ce que le geste signifierait ailleurs.",
      "Un exercice d'évacuation où l'on prend l'alarme au sérieux sans y croire — le mode « répétition » est actif.",
    ],
    oeuvres: [
      { y: '1961', t: 'Les Cadres du jeu, dans Encounters' },
      { y: '1974', t: "Les Cadres de l'expérience" },
      { y: '1981', t: 'Façons de parler' },
    ],
    associes: ['mise-en-scene-de-soi', 'formes-de-socialisation', 'regimes-de-justification'],
    opposes: ['fait-social'],
    critiques: [
      "L'appareil est d'une complexité telle que peu d'enquêtes l'ont réellement mis en œuvre.",
      "Rien ne dit d'où viennent les cadres ni qui a le pouvoir de les imposer : la question du pouvoir reste hors champ.",
      "En passant aux sciences politiques sous le nom de framing, le concept a été appauvri jusqu'à désigner un simple angle de présentation.",
    ],
    evolution: [
      { p: '1954–1972', f: "Bateson formule la notion de cadre à propos du jeu chez les animaux ; Goffman s'en empare." },
      { p: '1961', f: 'Premiers essais dans Encounters.' },
      { p: '1974', f: 'Exposé systématique dans Frame Analysis, le livre le plus ambitieux et le moins lu de Goffman.' },
      { p: 'après 1980', f: "Le framing devient un standard de l'analyse des médias et des mouvements sociaux, sans l'appareil d'origine." },
    ],
  },

  /* — Howard S. Becker — */
  'etiquetage': {
    detaille: [
      "Becker renverse la question de la déviance. Elle n'est pas une qualité de l'acte, mais la conséquence de la réaction des autres : le déviant est celui à qui l'étiquette a été appliquée avec succès.",
      "D'où deux conséquences que la criminologie classique manquait. Le même acte est déviant ou non selon qui le commet, où et devant qui. Et il existe des déviants secrets — qui transgressent sans être désignés — et des accusés à tort, que le modèle traite comme des déviants puisque la réaction, seule, compte.",
      "Étudier la déviance, c'est donc étudier ceux qui font les règles et ceux qui les appliquent, autant que ceux qui les enfreignent.",
    ],
    origine: {
      oeuvre: 'Outsiders. Études de sociologie de la déviance',
      annee: '1963',
      contexte:
        "Becker rassemble ses enquêtes sur les fumeurs de marijuana et les musiciens de danse, menées à Chicago auprès de milieux qu'il fréquentait comme pianiste de jazz.",
    },
    exemples: [
      "Deux adolescents pris à voler : celui du quartier surveillé passe au tribunal, l'autre rentre chez lui avec un avertissement.",
      "Une pratique légale hier, illégale aujourd'hui, sans que le geste ait changé.",
    ],
    oeuvres: [
      { y: '1963', t: 'Outsiders. Études de sociologie de la déviance' },
      { y: '1973', t: 'Édition augmentée, avec le chapitre « Labelling Theory Reconsidered »' },
    ],
    associes: ['carriere-deviante', 'entrepreneur-de-morale', 'stigmate', 'prophetie-autorealisatrice'],
    opposes: ['tension-anomique', 'fait-social'],
    critiques: [
      "Le modèle explique la réaction, pas le passage à l'acte initial : pourquoi celui-ci et pas un autre ?",
      "Il minimise la gravité intrinsèque de certains actes, ce qui rend le relativisme intenable pour les crimes graves.",
      "Becker lui-même a répondu en 1973 qu'on avait durci sa thèse : il n'a jamais dit que l'étiquette suffisait à tout.",
    ],
    evolution: [
      { p: '1938', f: "Tannenbaum décrit la « dramatisation du mal » : l'ancêtre direct de la thèse." },
      { p: '1951', f: 'Lemert distingue déviance primaire et secondaire.' },
      { p: '1963', f: "Outsiders donne au courant sa formulation la plus nette et son nom." },
      { p: '1973', f: "Becker répond aux critiques dans une postface et refuse le nom de « théorie de l'étiquetage »." },
      { p: '1970–1990', f: "Le courant nourrit la sociologie des problèmes publics et des politiques pénales." },
    ],
  },
  'carriere-deviante': {
    detaille: [
      "Becker emprunte à Everett Hughes le mot « carrière », employé pour les professions, et l'applique à la déviance : on ne devient pas marginal d'un coup, mais par une séquence d'étapes, chacune rendant la suivante plus probable.",
      "Son enquête sur les fumeurs de marijuana en donne le modèle : apprendre la technique, apprendre à percevoir les effets, apprendre à les juger agréables. Sans ces trois apprentissages, aucun plaisir — donc aucun usage régulier. La motivation ne précède pas la pratique, elle en découle.",
      "L'étape décisive est publique : la désignation. Être pris, sanctionné, étiqueté restreint les fréquentations et les emplois possibles, et rapproche mécaniquement des milieux déjà désignés.",
    ],
    origine: {
      oeuvre: 'Outsiders',
      annee: '1963',
      contexte:
        "Becker reprend ses articles de 1953 et 1955 sur l'apprentissage de la marijuana, menés par entretiens auprès de cinquante consommateurs.",
    },
    exemples: [
      "Un casier judiciaire qui ferme l'accès à l'emploi légal, et rend l'illégal plus accessible que jamais.",
      "Un jeune musicien qui adopte les horaires de la nuit, puis n'a plus d'amis qui travaillent le jour.",
    ],
    oeuvres: [
      { y: '1953', t: 'Becoming a Marihuana User' },
      { y: '1963', t: 'Outsiders, chapitres II à V' },
      { y: '1982', t: "Les Mondes de l'art" },
    ],
    associes: ['etiquetage', 'stigmate', 'tension-anomique'],
    opposes: ['habitus'],
    critiques: [
      "Le modèle décrit bien les trajectoires abouties et laisse de côté ceux qui décrochent en route — un biais de sélection classique.",
      "Il suppose une progression ordonnée que les parcours réels démentent : on entre et on sort, on rechute, on bifurque.",
      "Bourdieu objecterait que les dispositions incorporées bien avant la première étape orientent déjà qui s'y engage.",
    ],
    evolution: [
      { p: '1937', f: 'Hughes forge la notion de carrière pour les professions, à Chicago.' },
      { p: '1953–1955', f: "Becker publie ses articles sur l'apprentissage de la marijuana." },
      { p: '1963', f: 'Outsiders intègre la carrière au modèle général de la déviance.' },
      { p: '1982', f: "Les Mondes de l'art transposent la démarche à la production artistique comme travail collectif." },
    ],
  },
  'entrepreneur-de-morale': {
    detaille: [
      "Pour qu'une règle existe, il faut que quelqu'un l'ait voulue. Becker appelle entrepreneurs de morale ceux qui mènent la croisade : ils tiennent une pratique pour un scandale, la constituent en problème public, et obtiennent une norme.",
      "Il en distingue deux figures. Le créateur de règles, militant, souvent désintéressé et convaincu de servir le bien. Et l'applicateur de règles — policier, inspecteur, contrôleur — qui n'a pas de croisade mais un métier, et dont l'intérêt est que l'infraction persiste assez pour justifier son poste.",
      "L'enquête sur le Marihuana Tax Act de 1937 lui sert de démonstration : une agence fédérale à la recherche d'un mandat fabrique un problème public à sa mesure.",
    ],
    origine: {
      oeuvre: 'Outsiders',
      annee: '1963',
      contexte:
        "Becker consacre les deux derniers chapitres du livre non plus aux déviants mais à ceux qui écrivent et appliquent les règles — retournement inédit à l'époque.",
    },
    exemples: [
      "Une association qui obtient l'interdiction d'un produit après des années de mobilisation, contre l'indifférence générale.",
      "Un service de contrôle dont le budget dépend du nombre d'infractions qu'il relève.",
    ],
    oeuvres: [
      { y: '1963', t: 'Outsiders, chapitres VII et VIII' },
      { y: '1966', t: 'Social Problems: A Modern Approach' },
    ],
    associes: ['etiquetage', 'fonction-latente', 'regimes-de-justification'],
    opposes: ['fait-social'],
    critiques: [
      "Le modèle prête aux croisades une efficacité qu'elles ont rarement seules : les lois naissent de configurations plus larges.",
      "Il traite les militants avec une ironie qui rend difficile de distinguer une croisade légitime d'une panique morale.",
      "Il dit peu des règles qui s'imposent sans entrepreneur identifiable, par sédimentation lente.",
    ],
    evolution: [
      { p: '1963', f: "Formulation dans Outsiders, avec l'étude du Marihuana Tax Act." },
      { p: '1972', f: "Cohen en tire les « paniques morales », qui feront carrière en sociologie des médias." },
      { p: '1977–1988', f: 'Gusfield et Spector développent la sociologie des problèmes publics sur cette base.' },
      { p: 'après 2000', f: "Le concept est devenu un outil courant de l'analyse des politiques publiques." },
    ],
  },

  /* — Raymond Boudon — */
  'individualisme-methodologique': {
    detaille: [
      "L'individualisme méthodologique n'est pas une thèse sur la nature humaine : c'est une règle de méthode. Expliquer un phénomène collectif consiste à le reconstruire comme la composition d'actions individuelles, chacune compréhensible par les raisons que l'acteur avait de l'accomplir.",
      "Boudon élargit la rationalité au-delà du calcul économique : ses acteurs ont de bonnes raisons, pas nécessairement les meilleures. Ils agissent dans une information limitée, avec des croyances qu'ils tiennent pour fondées — d'où sa « rationalité cognitive ».",
      "Le collectif n'est donc jamais la somme des intentions : il est le résultat de leur agrégation, souvent différent de ce que chacun voulait.",
    ],
    origine: {
      oeuvre: 'La Logique du social',
      annee: '1979',
      contexte:
        "Boudon systématise en France une démarche venue de Weber, Popper et Simon, contre le structuralisme et le holisme alors dominants — Bourdieu au premier chef.",
    },
    exemples: [
      "Un embouteillage où personne n'a voulu ralentir, et que produit pourtant chaque freinage individuellement justifié.",
      "Une famille modeste qui renonce à une filière longue parce que le coût est certain et le bénéfice incertain — décision raisonnable qui reconduit l'inégalité.",
    ],
    oeuvres: [
      { y: '1973', t: "L'Inégalité des chances" },
      { y: '1977', t: 'Effets pervers et ordre social' },
      { y: '1979', t: 'La Logique du social' },
    ],
    associes: ['effets-pervers', 'ideal-type', 'domination-legitime'],
    opposes: ['fait-social', 'habitus', 'violence-symbolique', 'configuration'],
    critiques: [
      "Les acteurs disposent rarement de l'information et du temps de calcul que le modèle leur prête.",
      "Il laisse hors champ la formation des préférences : d'où viennent les raisons que l'acteur juge bonnes ?",
      "Bourdieu objecte que l'essentiel se joue avant la délibération, dans des dispositions incorporées trop tôt pour être discutées.",
      "La frontière entre « bonne raison » et rationalisation après coup n'est pas tracée.",
    ],
    evolution: [
      { p: '1908–1922', f: "Weber pose le principe : la sociologie doit comprendre l'action et le sens que l'acteur y met." },
      { p: '1945', f: 'Popper nomme la démarche dans La Société ouverte.' },
      { p: '1973', f: "L'Inégalité des chances en donne l'application décisive à l'école." },
      { p: '1979', f: 'La Logique du social en fournit l\'exposé théorique.' },
      { p: '1995–2010', f: 'Boudon élargit à la rationalité cognitive et ordinaire, moins économique que celle de ses débuts.' },
    ],
  },
  'effets-pervers': {
    detaille: [
      "Un effet pervers — Boudon dit aussi « effet émergent » — est un résultat collectif que personne n'a voulu, produit par des décisions individuellement sensées. Le terme ne juge pas : l'effet peut être bénéfique, il est seulement non intentionnel.",
      "Le mécanisme tient à l'agrégation. Chacun raisonne à sa place, sans pouvoir tenir compte de ce que tous les autres décideront en même temps ; la somme dément alors chacun des calculs.",
      "Boudon en fait la pièce maîtresse de sa sociologie : elle explique le changement social sans invoquer ni fonction cachée, ni ruse de l'histoire, ni domination.",
    ],
    origine: {
      oeuvre: 'Effets pervers et ordre social',
      annee: '1977',
      contexte:
        "Boudon rassemble une série de modèles formels — dont celui de l'inflation des diplômes — pour montrer qu'un ordre social peut se défaire par la seule rationalité de ses membres.",
    },
    exemples: [
      "Chaque spectateur qui se lève pour mieux voir : tout le monde est debout, personne ne voit mieux, tous sont fatigués.",
      "Une prime au rendement qui pousse chacun à sélectionner les dossiers faciles, et fait chuter le service rendu.",
    ],
    oeuvres: [
      { y: '1973', t: "L'Inégalité des chances" },
      { y: '1977', t: 'Effets pervers et ordre social' },
      { y: '1984', t: 'La Place du désordre' },
    ],
    associes: ['individualisme-methodologique', 'fonction-latente', 'prophetie-autorealisatrice'],
    opposes: ['systeme-social'],
    critiques: [
      "Les modèles sont élégants et rarement testés : ils démontrent une possibilité logique, pas un fait établi.",
      "Le mécanisme est invoqué après coup pour tout résultat inattendu, ce qui le rend difficile à réfuter.",
      "Merton avait déjà décrit les conséquences non anticipées dès 1936 : la nouveauté tient plus à la formalisation qu'à l'idée.",
    ],
    evolution: [
      { p: '1936', f: 'Merton publie sur les conséquences non anticipées de l\'action sociale.' },
      { p: '1971', f: "Schelling montre par un modèle simple qu'une ségrégation urbaine forte naît de préférences faibles." },
      { p: '1973–1977', f: "Boudon formalise et applique le mécanisme à l'école, puis à l'ordre social en général." },
      { p: '1984', f: 'La Place du désordre en tire une critique des philosophies du changement social.' },
    ],
  },

  /* — Luc Boltanski — */
  'regimes-de-justification': {
    detaille: [
      "Boltanski et Thévenot partent d'un fait que la sociologie critique négligeait : dans un désaccord, les gens argumentent. Ils ne subissent pas des rapports de force, ils invoquent des principes, produisent des preuves et exigent que l'autre en fasse autant.",
      "Ils repèrent six « cités », chacune définissant une grandeur légitime différente : inspirée, domestique, de l'opinion, civique, marchande, industrielle. Un même bureau peut être le théâtre d'un conflit entre l'ancienneté — cité domestique — et la performance mesurée — cité industrielle.",
      "L'épreuve est le moment où les grandeurs s'affrontent et où l'une l'emporte, provisoirement. Le sociologue n'a pas à trancher : il décrit les compétences que les acteurs déploient pour trancher eux-mêmes.",
    ],
    origine: {
      oeuvre: 'De la justification. Les économies de la grandeur',
      annee: '1991',
      contexte:
        "Boltanski, ancien collaborateur de Bourdieu, rompt avec la sociologie critique et fonde avec l'économiste Laurent Thévenot une sociologie qui prend au sérieux ce que les gens disent.",
    },
    exemples: [
      "Un débat sur une fermeture d'usine où s'affrontent l'emploi local, la rentabilité et l'intérêt général — trois grandeurs, aucune illégitime.",
      "Un jury de recrutement partagé entre le diplôme, l'expérience et le « feeling » : trois cités qui se disputent la décision.",
    ],
    oeuvres: [
      { y: '1987', t: 'Les Cadres. La formation d\'un groupe social' },
      { y: '1991', t: 'De la justification (avec L. Thévenot)' },
      { y: '1999', t: 'Le Nouvel Esprit du capitalisme (avec È. Chiapello)' },
    ],
    associes: ['nouvel-esprit-du-capitalisme', 'cadre-de-l-experience', 'entrepreneur-de-morale'],
    opposes: ['violence-symbolique', 'ideologie', 'raison-instrumentale', 'industrie-culturelle'],
    critiques: [
      "En suivant les justifications publiques, on risque de ne voir que ce qui se dit, et de perdre les rapports de force qui décident avant la discussion.",
      "Les six cités sont tirées d'un corpus de philosophie politique européenne : rien ne garantit qu'elles épuisent les grandeurs possibles ailleurs.",
      "Le modèle s'opérationnalise mal : peu d'enquêtes ont réussi à en faire un instrument plutôt qu'une grille de lecture.",
    ],
    evolution: [
      { p: '1984', f: 'Boltanski quitte l\'orbite bourdieusienne et fonde le Groupe de sociologie politique et morale.' },
      { p: '1991', f: 'De la justification pose les six cités et la théorie des épreuves.' },
      { p: '1999', f: "Application au capitalisme : la critique artiste et la critique sociale, et ce que le capitalisme en fait." },
      { p: '2009', f: 'De la critique tente une réconciliation : la domination peut être décrite sans retirer aux acteurs leur lucidité.' },
    ],
  },
  'nouvel-esprit-du-capitalisme': {
    detaille: [
      "Boltanski et Chiapello reprennent la question de Weber : de quoi le capitalisme a-t-il besoin pour qu'on s'y engage ? D'un « esprit », c'est-à-dire de raisons de participer qui ne se réduisent pas au profit.",
      "Leur thèse : cet esprit se renouvelle en absorbant les critiques qu'on lui adresse. Ils distinguent la critique sociale — l'inégalité, l'exploitation — et la critique artiste — l'ennui, l'inauthenticité, la hiérarchie. Le capitalisme des années 1970 a répondu à la seconde en démantelant l'entreprise bureaucratique.",
      "D'où la « cité par projets » : autonomie, mobilité, réseau, mission. L'aspiration à ne plus obéir à un chef s'est réalisée en obligation de se gérer soi-même — et la critique sociale, elle, est restée sans réponse.",
    ],
    origine: {
      oeuvre: 'Le Nouvel Esprit du capitalisme',
      annee: '1999',
      contexte:
        "Boltanski et Chiapello comparent deux corpus de littérature managériale, celui des années 1960 et celui des années 1990, pour mesurer ce qui a changé dans les raisons données de travailler.",
    },
    exemples: [
      "Un poste décrit comme une « mission » plutôt qu'un emploi : l'engagement demandé est celui d'un militant, la protection celle d'un prestataire.",
      "Un espace de travail sans bureau attribué, présenté comme une libération, qui supprime aussi la trace de votre place.",
    ],
    oeuvres: [
      { y: '1991', t: 'De la justification (avec L. Thévenot)' },
      { y: '1999', t: 'Le Nouvel Esprit du capitalisme (avec È. Chiapello)' },
    ],
    associes: ['regimes-de-justification', 'industrie-culturelle'],
    opposes: ['rationalisation'],
    critiques: [
      "Le corpus est celui des manuels de management : il dit ce que le patronat se raconte, non ce que les salariés vivent.",
      "La thèse de la récupération est difficile à falsifier : toute critique devient soit récupérée, soit à venir.",
      "L'ouvrage est très centré sur la France ; les transformations décrites ont pris des formes différentes ailleurs.",
    ],
    evolution: [
      { p: '1904', f: "Weber pose la question de l'esprit dont le capitalisme a besoin." },
      { p: '1968', f: "La critique artiste culmine, et sera la première servie." },
      { p: '1999', f: "Boltanski et Chiapello formulent la thèse et décrivent la cité par projets." },
      { p: 'après 2008', f: 'La crise financière relance la critique sociale ; les auteurs y voient un test de leur modèle.' },
    ],
  },

  /* — Alexis de Tocqueville — */
  'egalisation-des-conditions': {
    detaille: [
      "Tocqueville ne parle pas d'égalité des revenus mais d'égalité des conditions : la disparition d'un ordre où la naissance assignait une place, un rang, des droits distincts. C'est pour lui le fait générateur de la modernité, plus profond que toute institution politique.",
      "Ce mouvement est irrésistible et ambivalent. Il émancipe, et il isole : chacun devenu semblable et indépendant se replie sur son cercle, et n'a plus les liens de dépendance qui, dans l'aristocratie, obligeaient aussi.",
      "Il produit un paradoxe qui portera son nom : plus les conditions se rapprochent, plus les écarts restants deviennent insupportables. La passion pour l'égalité grandit à mesure qu'elle est satisfaite.",
    ],
    origine: {
      oeuvre: 'De la démocratie en Amérique, tome I',
      annee: '1835',
      contexte:
        "Tocqueville, magistrat de vingt-cinq ans issu de la noblesse, part neuf mois aux États-Unis en 1831 sous prétexte d'étudier le système pénitentiaire, et y observe une société sans passé aristocratique.",
    },
    exemples: [
      "Le vouvoiement et les titres qui reculent partout, jusque dans des rapports qui restent très inégaux.",
      "Une génération plus diplômée que la précédente et qui vit son sort comme un déclassement.",
    ],
    oeuvres: [
      { y: '1835', t: 'De la démocratie en Amérique, tome I' },
      { y: '1840', t: 'De la démocratie en Amérique, tome II' },
      { y: '1856', t: "L'Ancien Régime et la Révolution" },
    ],
    associes: ['tyrannie-de-la-majorite', 'solidarite-organique', 'anomie'],
    opposes: ['classe-sociale'],
    critiques: [
      "L'Amérique observée est celle des hommes blancs libres : l'esclavage et le sort des Indiens sont traités à part, comme des exceptions.",
      "L'égalisation annoncée n'a pas eu lieu partout ; les inégalités patrimoniales sont revenues au niveau du XIXᵉ siècle.",
      "La nostalgie aristocratique perce sous l'analyse : ce que Tocqueville regrette oriente ce qu'il voit.",
    ],
    evolution: [
      { p: '1831', f: 'Voyage de neuf mois aux États-Unis avec Gustave de Beaumont.' },
      { p: '1835', f: 'Le tome I, centré sur les institutions, connaît un succès immédiat.' },
      { p: '1840', f: "Le tome II, plus sombre, s'attache aux effets de l'égalité sur les mœurs et les sentiments." },
      { p: '1856', f: "L'Ancien Régime montre que la Révolution a poursuivi la centralisation monarchique, non rompu avec elle." },
      { p: '1966–1970', f: 'Aron et Boudon en font une référence de la sociologie française contre la lecture marxiste dominante.' },
    ],
  },
  'tyrannie-de-la-majorite': {
    detaille: [
      "Tocqueville tient la démocratie pour le meilleur régime et lui trouve un péril propre : la majorité y détient une puissance morale telle qu'elle peut étouffer la contradiction sans employer aucune force.",
      "La contrainte ne passe plus par le corps mais par l'opinion. Le pouvoir absolu d'un roi frappait le corps et laissait l'âme libre ; la majorité démocratique laisse le corps libre et enferme l'esprit — on garde le droit de dire, on perd l'envie.",
      "Le tome II en tire une figure plus inquiétante encore : un despotisme doux, administratif et prévoyant, qui maintient les citoyens dans une enfance perpétuelle en prenant soin d'eux.",
    ],
    origine: {
      oeuvre: 'De la démocratie en Amérique, tome I',
      annee: '1835',
      contexte:
        "Tocqueville est frappé par l'uniformité des opinions américaines, dans un pays dont les institutions garantissent pourtant toutes les libertés formelles.",
    },
    exemples: [
      "Une réunion où l'unanimité se fait vite, non parce que chacun est d'accord, mais parce que chacun croit être le seul à ne pas l'être.",
      "Un débat public où l'on s'autocensure par anticipation du coût social, sans qu'aucune règle ne l'interdise.",
    ],
    oeuvres: [
      { y: '1835', t: 'De la démocratie en Amérique, tome I, chapitre VII' },
      { y: '1840', t: 'De la démocratie en Amérique, tome II, quatrième partie' },
    ],
    associes: ['egalisation-des-conditions', 'violence-symbolique', 'blasement-urbain'],
    opposes: ['domination-legitime'],
    critiques: [
      "L'expression prête à confusion : Tocqueville décrit une pression sociale, non un pouvoir institutionnel, et le mot « tyrannie » brouille les deux.",
      "L'observation date de 1831 et repose sur des impressions de voyage, sans enquête systématique.",
      "L'argument a été mobilisé pour disqualifier toute décision majoritaire, usage que Tocqueville n'aurait pas reconnu.",
    ],
    evolution: [
      { p: '1788', f: 'Madison, dans Le Fédéraliste, s\'inquiète déjà des factions majoritaires.' },
      { p: '1835', f: "Tocqueville formule la « tyrannie de la majorité » et l'illustre par l'uniformité américaine." },
      { p: '1840', f: 'Le tome II lui substitue la figure du despotisme doux, « plus étendu et plus doux ».' },
      { p: '1859', f: 'Mill reprend l\'argument dans De la liberté et le pousse en défense des minorités.' },
      { p: '1974', f: "Noelle-Neumann le retrouve en science des médias sous le nom de spirale du silence." },
    ],
  },
};
