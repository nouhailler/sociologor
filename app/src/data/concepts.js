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
    associes: ['alienation', 'ideologie', 'capital-culturel', 'bourgeoisie', 'lutte-des-classes'],
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
    associes: ['ideologie', 'classe-sociale', 'raison-instrumentale', 'exploitation', 'fetichisme-de-la-marchandise'],
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
    associes: ['classe-sociale', 'violence-symbolique', 'industrie-culturelle', 'fausse-conscience'],
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
  'lutte-des-classes': {
    detaille: [
      "La première phrase du Manifeste pose le programme : « L'histoire de toute société jusqu'à nos jours n'est que l'histoire de la lutte des classes. » Ce n'est pas une description parmi d'autres : c'est la clé de lecture que Marx propose pour l'ensemble de l'histoire humaine, des sociétés antiques aux sociétés industrielles.",
      "La lutte n'a pas besoin d'être armée ni même déclarée pour exister : elle se joue aussi dans la négociation d'un salaire, la durée d'une journée de travail ou le contenu d'une loi sociale. Ce qui en fait une lutte, plutôt qu'un simple désaccord, c'est l'antagonisme structurel d'intérêts qui l'alimente en continu.",
    ],
    origine: {
      oeuvre: 'Manifeste du parti communiste',
      annee: '1848',
      contexte:
        "Marx et Engels rédigent ce texte pour la Ligue des communistes, à la veille des révolutions de 1848 qui embrasent l'Europe : le style est celui d'un programme d'action autant que d'une thèse historique.",
    },
    exemples: [
      "Les négociations annuelles sur les salaires dans une branche entière, où patronat et syndicats défendent des intérêts qui ne coïncident jamais complètement.",
    ],
    oeuvres: [
      { y: '1848', t: 'Manifeste du parti communiste' },
      { y: '1852', t: 'Le 18 Brumaire de Louis Bonaparte' },
    ],
    associes: ['classe-sociale', 'conflit-de-classes', 'conscience-de-classe'],
    opposes: ['solidarite-organique'],
    critiques: [
      "L'histoire humaine ne se laisse pas réduire à un seul moteur : religion, guerre, technique jouent aussi un rôle propre.",
      "La lutte annoncée entre deux camps homogènes s'est heurtée à la multiplication des positions intermédiaires que Marx n'avait pas anticipée.",
    ],
    evolution: [
      { p: '1848', f: "Formulation programmatique dans le Manifeste du parti communiste." },
      { p: '1852', f: "Le 18 Brumaire nuance : la paysannerie française forme une classe sans conscience ni organisation communes." },
      { p: '1893', f: "Durkheim, dans La Division du travail social, lui oppose la solidarité organique comme ciment alternatif des sociétés modernes." },
      { p: '1923', f: "Lukács relie la lutte des classes à la prise de conscience de classe, condition de son efficacité historique." },
    ],
  },
  'conflit-de-classes': {
    detaille: [
      "À distinguer de la lutte des classes, qui désigne l'affrontement effectif et parfois organisé, le conflit de classes nomme l'antagonisme structurel qui existe entre deux positions sociales, qu'il débouche ou non sur une mobilisation visible.",
      "Le conflit tient à la structure même de la production : ce que l'un gagne en profit, l'autre le perd en salaire, et inversement — un jeu à somme fixe qui n'a besoin d'aucune hostilité personnelle pour exister.",
    ],
    origine: {
      oeuvre: 'Misère de la philosophie',
      annee: '1847',
      contexte:
        "Marx y répond à Proudhon, qui croyait pouvoir réformer le capitalisme sans en changer les rapports de production ; il y insiste sur le caractère structurel, non contingent, de l'antagonisme entre classes.",
    },
    exemples: [
      "Un actionnariat qui vote une hausse de dividendes la même année où la direction annonce un gel des salaires, sans qu'aucun conflit ouvert n'éclate pour autant.",
    ],
    oeuvres: [
      { y: '1847', t: 'Misère de la philosophie' },
      { y: '1867', t: 'Le Capital, livre I' },
    ],
    associes: ['lutte-des-classes', 'bourgeoisie', 'proletariat'],
    opposes: ['solidarite-organique'],
    critiques: [
      "Réduire l'ensemble des rapports sociaux à un antagonisme économique laisse peu de place aux formes de coopération réelle observées dans le travail.",
      "Dahrendorf reprendra la notion en l'élargissant à toute relation d'autorité, bien au-delà de la seule propriété des moyens de production.",
    ],
    evolution: [
      { p: '1847', f: "Marx pose le caractère structurel du conflit contre la lecture réformiste de Proudhon." },
      { p: '1867', f: "Le Capital en donne le mécanisme précis : l'extraction de la plus-value." },
      { p: '1959', f: "Dahrendorf généralise le conflit de classes à toute relation d'autorité dans une organisation." },
    ],
  },
  'bourgeoisie': {
    detaille: [
      "La bourgeoisie n'est pas, chez Marx, une catégorie de revenu ou de style de vie : elle se définit par la propriété des moyens de production — usines, machines, capital — qui lui permet de vivre du travail d'autrui plutôt que du sien.",
      "Le Manifeste lui reconnaît un rôle historique révolutionnaire : elle a bouleversé, en quelques générations, des rapports sociaux restés stables pendant des siècles, en soumettant tout — la terre, le travail, les traditions — à la logique du profit.",
    ],
    origine: {
      oeuvre: 'Manifeste du parti communiste',
      annee: '1848',
      contexte:
        "Marx et Engels décrivent une classe alors en pleine ascension en Europe occidentale, qui vient d'achever de démanteler les structures féodales héritées de l'Ancien Régime.",
    },
    exemples: [
      "Un fonds d'investissement qui possède des parts dans des dizaines d'entreprises sans en diriger aucune directement, et vit du rendement de ce capital.",
    ],
    oeuvres: [
      { y: '1848', t: 'Manifeste du parti communiste' },
      { y: '1867', t: 'Le Capital, livre I' },
    ],
    associes: ['classe-sociale', 'accumulation-du-capital'],
    opposes: ['proletariat'],
    critiques: [
      "La catégorie regroupe des situations très inégales — le petit actionnaire et le grand industriel — que Marx lui-même distinguera plus tard sous le nom de petite bourgeoisie.",
      "La séparation nette entre propriétaires et salariés s'est brouillée avec la diffusion de l'actionnariat salarié et des cadres dirigeants sans capital propre.",
    ],
    evolution: [
      { p: '1848', f: "Le Manifeste en fait la classe montante, révolutionnaire face à l'aristocratie foncière." },
      { p: '1852', f: "Le 18 Brumaire distingue en son sein une fraction financière et une fraction industrielle, aux intérêts parfois divergents." },
      { p: 'XXᵉ siècle', f: "La séparation entre propriété du capital et direction de l'entreprise (managers salariés) complique la définition d'origine." },
    ],
  },
  'proletariat': {
    detaille: [
      "Le prolétaire n'a, par définition, que sa force de travail à vendre : dépourvu de moyens de production, il ne peut subsister qu'en louant son temps et ses compétences à qui les possède.",
      "Marx y voit plus qu'une condition économique : une position appelée, selon lui, à devenir le sujet du changement historique, à mesure que l'industrialisation en fait une classe toujours plus nombreuse, concentrée et interdépendante.",
    ],
    origine: {
      oeuvre: 'Manifeste du parti communiste',
      annee: '1848',
      contexte:
        "Le terme, emprunté au vocabulaire romain (le proletarius, celui qui ne contribue à la cité que par sa descendance), est repris par Marx pour désigner la classe ouvrière industrielle naissante.",
    },
    exemples: [
      "Un livreur à vélo, rémunéré à la course, qui ne possède ni son véhicule professionnel ni l'algorithme qui organise son travail.",
    ],
    oeuvres: [
      { y: '1848', t: 'Manifeste du parti communiste' },
      { y: '1867', t: 'Le Capital, livre I' },
    ],
    associes: ['classe-sociale', 'exploitation'],
    opposes: ['bourgeoisie'],
    critiques: [
      "La classe ouvrière industrielle a numériquement reculé dans les économies développées, sans que la catégorie de prolétariat se soit clairement recomposée pour en rendre compte.",
      "L'unité de conditions annoncée entre tous les prolétaires masque des situations très inégales selon le secteur, le statut ou la qualification.",
    ],
    evolution: [
      { p: '1848', f: "Le Manifeste en fait le fossoyeur historique du capitalisme, uni par la misère et la concentration industrielle." },
      { p: 'XXᵉ siècle', f: "La désindustrialisation des pays développés déplace la classe ouvrière vers les services et vers d'autres régions du monde." },
      { p: 'Depuis les années 1970', f: "La précarisation de l'emploi ravive le débat sur qui, aujourd'hui, occupe une position structurellement comparable." },
    ],
  },
  'plus-value': {
    detaille: [
      "La plus-value est, pour Marx, l'écart entre la valeur que le travail produit dans une journée et la valeur du salaire qui rémunère ce travail — un écart qui n'apparaît nulle part sur la fiche de paie, mais qui fonde tout le profit capitaliste.",
      "Marx distingue la plus-value absolue, obtenue en allongeant la journée de travail, de la plus-value relative, obtenue en augmentant la productivité pour réduire le temps de travail nécessaire à reproduire le salaire lui-même.",
    ],
    origine: {
      oeuvre: 'Le Capital, livre I',
      annee: '1867',
      contexte:
        "Marx y construit, à partir de la théorie de la valeur-travail héritée de l'économie politique anglaise, une démonstration selon laquelle le profit ne vient ni de l'échange ni du hasard, mais d'un mécanisme précis et mesurable.",
    },
    exemples: [
      "Un salarié dont le salaire couvre la valeur de sept heures de travail, mais qui en travaille huit : cette heure supplémentaire, non rémunérée en tant que telle, produit la plus-value.",
    ],
    oeuvres: [
      { y: '1867', t: 'Le Capital, livre I' },
      { y: '1885', t: 'Le Capital, livre II (posthume, éd. Engels)' },
    ],
    associes: ['exploitation', 'accumulation-du-capital'],
    opposes: ['meritocratie'],
    critiques: [
      "La théorie de la valeur-travail qui la fonde a été largement abandonnée par l'économie néoclassique au profit d'une théorie de la valeur par l'utilité marginale.",
      "Le calcul suppose de pouvoir isoler un temps de travail « socialement nécessaire », une mesure jamais stabilisée empiriquement.",
    ],
    evolution: [
      { p: '1867', f: "Marx formalise la distinction entre plus-value absolue et plus-value relative." },
      { p: 'Fin XIXᵉ siècle', f: "L'école marginaliste (Jevons, Menger, Walras) propose une théorie concurrente de la valeur, fondée sur l'utilité plutôt que sur le travail." },
      { p: 'XXᵉ siècle', f: "Le concept reste central dans l'économie marxiste, marginal ailleurs, sans jamais être définitivement départagé empiriquement." },
    ],
  },
  'exploitation': {
    detaille: [
      "L'exploitation, chez Marx, n'est pas un abus moral ni un excès individuel : c'est un rapport structurel, présent même chez l'employeur le plus scrupuleux, dès lors qu'il s'approprie la plus-value produite par ses salariés.",
      "Le concept déplace la critique sociale d'un registre moral (le mauvais patron) vers un registre structurel (le rapport capital-travail lui-même) — ce qui explique, selon Althusser, pourquoi le Marx mature du Capital lui préfère l'exploitation à l'aliénation, plus philosophique et moins mesurable.",
    ],
    origine: {
      oeuvre: 'Le Capital, livre I',
      annee: '1867',
      contexte:
        "Marx cherche à donner à sa critique du capitalisme un fondement scientifique, mesurable en heures de travail, plutôt que le seul registre moral de l'injustice.",
    },
    exemples: [
      "Un taux de profit calculable, en théorie, comme un rapport entre la plus-value extraite et le capital investi — une mesure, pas seulement un jugement.",
    ],
    oeuvres: [
      { y: '1867', t: 'Le Capital, livre I' },
    ],
    associes: ['plus-value', 'proletariat', 'alienation'],
    opposes: ['domination-legitime'],
    critiques: [
      "Le concept suppose acquise la théorie de la valeur-travail, contestée par l'économie néoclassique.",
      "Il traite comme structurellement identiques des situations de travail très différentes, du très faiblement au très fortement rémunéré.",
    ],
    evolution: [
      { p: '1867', f: "Marx en donne la formulation classique, fondée sur l'extraction de la plus-value." },
      { p: '1965', f: "Althusser y voit le concept mature du Capital, qui supplante l'aliénation plus philosophique des écrits de jeunesse." },
      { p: 'XXᵉ siècle', f: "Le concept est étendu, hors du strict salariat, à d'autres rapports jugés structurellement inégaux (genre, domination internationale)." },
    ],
  },
  'fetichisme-de-la-marchandise': {
    detaille: [
      "Une marchandise semble avoir un prix comme elle a un poids ou une couleur — une propriété intrinsèque. Marx montre que ce prix ne dit rien d'autre que le travail social nécessaire à sa production, un rapport entre producteurs qui s'est fait oublier derrière l'objet lui-même.",
      "Le fétichisme n'est pas une illusion individuelle qu'un peu de lucidité suffirait à dissiper : c'est un effet nécessaire de l'échange marchand généralisé, où les producteurs n'entrent en rapport les uns avec les autres qu'à travers l'échange de leurs produits.",
    ],
    origine: {
      oeuvre: 'Le Capital, livre I',
      annee: '1867',
      contexte:
        "Marx ouvre son analyse du capitalisme par la marchandise, l'unité la plus élémentaire du système, et y consacre la section la plus commentée du premier chapitre.",
    },
    exemples: [
      "Le cours d'une action qui monte ou baisse en séance, comme s'il obéissait à une loi propre, alors qu'il ne fait que condenser des décisions humaines dispersées et largement invisibles les unes aux autres.",
    ],
    oeuvres: [
      { y: '1867', t: 'Le Capital, livre I, section « Le caractère fétiche de la marchandise »' },
    ],
    associes: ['alienation', 'ideologie'],
    opposes: ['ideal-type'],
    critiques: [
      "La comparaison avec le fétichisme religieux, empruntée à l'anthropologie de l'époque, est datée et jugée aujourd'hui condescendante envers les sociétés qu'elle prenait pour modèle du contre-exemple.",
      "Le concept reste difficile à opérationnaliser hors du cadre théorique où Marx l'a forgé.",
    ],
    evolution: [
      { p: '1867', f: "Marx formule le concept à l'ouverture du Capital." },
      { p: '1923', f: "Lukács en fait la matrice de la réification, étendue à l'ensemble des rapports sociaux sous le capitalisme." },
      { p: '1944', f: "L'École de Francfort en retrouve une version dans l'industrie culturelle, où l'œuvre devient produit interchangeable." },
    ],
  },
  'mode-de-production': {
    detaille: [
      "Un mode de production combine, à une époque donnée, des forces productives (les moyens techniques disponibles) et des rapports de production (les relations sociales qui organisent leur usage) — féodalisme, capitalisme, ou tout autre agencement historique de ces deux éléments.",
      "Marx en fait l'unité d'analyse fondamentale pour périodiser l'histoire, à la place des dynasties ou des idées : ce qui change d'une époque à l'autre, avant tout le reste, c'est la manière dont une société produit et se répartit ce qu'elle produit.",
    ],
    origine: {
      oeuvre: "Contribution à la critique de l'économie politique",
      annee: '1859',
      contexte:
        "Dans la préface de cet ouvrage, restée l'un des textes les plus cités du marxisme, Marx résume en quelques pages l'architecture générale de sa théorie de l'histoire.",
    },
    exemples: [
      "Une économie de plantation coloniale fondée sur le travail forcé et une économie industrielle fondée sur le salariat libre peuvent mobiliser des techniques comparables tout en relevant de modes de production très différents.",
    ],
    oeuvres: [
      { y: '1859', t: "Contribution à la critique de l'économie politique, préface" },
      { y: '1867', t: 'Le Capital, livre I' },
    ],
    associes: ['rapports-de-production', 'forces-productives'],
    opposes: ['rationalisation'],
    critiques: [
      "La succession annoncée des modes de production (esclavagisme, féodalisme, capitalisme, socialisme) a été critiquée comme un schéma trop linéaire, calqué sur l'histoire européenne.",
      "Des sociétés ont combiné durablement plusieurs modes de production à la fois, sans que l'un ne supplante clairement l'autre.",
    ],
    evolution: [
      { p: '1859', f: "Marx formule le concept dans la préface de la Contribution à la critique de l'économie politique." },
      { p: 'XXᵉ siècle', f: "Les marxismes structuralistes (Althusser, Balibar) en font une combinatoire abstraite plutôt qu'une succession historique nécessaire." },
      { p: 'Depuis les années 1970', f: "Le concept est mobilisé pour penser la coexistence de plusieurs modes de production dans les économies mondialisées." },
    ],
  },
  'rapports-de-production': {
    detaille: [
      "Les rapports de production désignent les relations sociales — de propriété, d'autorité, de répartition — qui déterminent qui travaille pour qui, et selon quelles règles le produit du travail se répartit.",
      "Ils se distinguent des forces productives : deux sociétés peuvent disposer de techniques comparables tout en organisant très différemment qui possède les moyens de production et qui n'a que son travail à offrir.",
    ],
    origine: {
      oeuvre: "Contribution à la critique de l'économie politique",
      annee: '1859',
      contexte:
        "Marx y développe la distinction avec les forces productives, au fondement de sa théorie du changement historique : un mode de production évolue quand les rapports de production entravent le développement des forces productives.",
    },
    exemples: [
      "Un contrat de franchise, qui fixe précisément ce que le franchisé doit reverser à l'enseigne propriétaire de la marque : un rapport de production contemporain, aussi codifié qu'un ancien rapport de métayage.",
    ],
    oeuvres: [
      { y: '1859', t: "Contribution à la critique de l'économie politique" },
      { y: '1867', t: 'Le Capital, livre I' },
    ],
    associes: ['mode-de-production', 'forces-productives', 'classe-sociale'],
    opposes: ['role-et-attentes'],
    critiques: [
      "Réduire les relations sociales à leur seule dimension de production laisse peu de place aux rapports de genre, de parenté ou de croyance qui les traversent aussi.",
      "La détermination en dernière instance par l'économique reste difficile à établir empiriquement au cas par cas.",
    ],
    evolution: [
      { p: '1859', f: "Marx distingue rapports de production et forces productives dans la Contribution à la critique de l'économie politique." },
      { p: '1867', f: "Le Capital détaille comment le rapport salarial organise concrètement l'extraction de la plus-value." },
    ],
  },
  'forces-productives': {
    detaille: [
      "Les forces productives regroupent tout ce qu'une société mobilise pour produire : outils, machines, savoir-faire, organisation du travail. Elles tendent, selon Marx, à se développer en continu, poussées par la recherche de productivité.",
      "Le moteur du changement historique tient, pour Marx, à la tension entre ce développement continu des forces productives et des rapports de production qui, à partir d'un certain point, cessent de lui correspondre et deviennent une entrave plutôt qu'un cadre.",
    ],
    origine: {
      oeuvre: "Contribution à la critique de l'économie politique",
      annee: '1859',
      contexte:
        "Marx formule ici sa théorie la plus systématique du changement social, où la contradiction entre forces productives et rapports de production explique le passage d'un mode de production à un autre.",
    },
    exemples: [
      "L'automatisation d'une chaîne de montage qui multiplie ce qu'une même équipe peut produire en une journée, sans que l'organisation du travail autour d'elle ne change au même rythme.",
    ],
    oeuvres: [
      { y: '1859', t: "Contribution à la critique de l'économie politique" },
    ],
    associes: ['mode-de-production', 'rapports-de-production'],
    opposes: ['systeme-social'],
    critiques: [
      "Le schéma suppose un progrès technique linéaire et cumulatif, une hypothèse que l'histoire des techniques a largement nuancée.",
      "Il peine à expliquer pourquoi des rapports de production peuvent survivre longtemps à leur inadéquation supposée aux forces productives disponibles.",
    ],
    evolution: [
      { p: '1859', f: "Marx formule la tension entre forces productives et rapports de production comme moteur du changement historique." },
      { p: 'XXᵉ siècle', f: "Le déterminisme technologique qu'on lui prête est débattu jusque dans le marxisme lui-même." },
    ],
  },
  'infrastructure-et-superstructure': {
    detaille: [
      "Marx distingue l'infrastructure — la base économique d'une société, ses forces et ses rapports de production — de la superstructure, qui regroupe le droit, la politique, la religion et les idées qui s'y bâtissent. La formule classique veut que l'infrastructure détermine la superstructure « en dernière instance ».",
      "Cette formule a été lue de deux manières très différentes : un déterminisme strict, où la superstructure ne fait que refléter l'économie, ou une détermination souple, laissant à la superstructure une autonomie et une capacité de rétroaction sur l'infrastructure elle-même — lecture que Marx et Engels ont eux-mêmes défendue dans leur correspondance tardive.",
    ],
    origine: {
      oeuvre: "Contribution à la critique de l'économie politique",
      annee: '1859',
      contexte:
        "La préface de cet ouvrage contient la formulation la plus célèbre et la plus commentée de tout le marxisme : « Ce n'est pas la conscience des hommes qui détermine leur être, c'est au contraire leur être social qui détermine leur conscience. »",
    },
    exemples: [
      "L'essor du droit du travail au XIXᵉ siècle industriel, absent des sociétés agraires antérieures qui n'en avaient tout simplement pas l'usage.",
    ],
    oeuvres: [
      { y: '1859', t: "Contribution à la critique de l'économie politique, préface" },
    ],
    associes: ['mode-de-production', 'ideologie'],
    opposes: ['domination-legitime', 'ethique-protestante'],
    critiques: [
      "La métaphore architecturale (base et étage) a été jugée trop mécanique par des marxistes eux-mêmes, dont Gramsci, qui lui préfère l'idée d'une hégémonie où la superstructure a sa propre efficacité.",
      "Weber objecte que des idées religieuses (l'éthique protestante) peuvent façonner l'économie, et pas seulement l'inverse.",
    ],
    evolution: [
      { p: '1859', f: "Marx formule la distinction dans la préface de la Contribution à la critique de l'économie politique." },
      { p: '1890', f: "Engels, dans une lettre à Joseph Bloch, précise que l'économie détermine « en dernière instance » seulement, contre les lectures trop mécaniques." },
      { p: '1929–1935', f: "Gramsci développe la notion d'hégémonie pour redonner à la superstructure une autonomie et une efficacité propres." },
      { p: '1904', f: "Weber, dans L'Éthique protestante, montre à l'inverse comment une croyance religieuse peut façonner un système économique." },
    ],
  },
  'conscience-de-classe': {
    detaille: [
      "Une position de classe objective — occuper telle place dans les rapports de production — ne suffit pas à produire une action collective : encore faut-il que ceux qui la partagent en prennent conscience et s'organisent en conséquence. C'est cette prise de conscience que Marx nomme conscience de classe.",
      "La distinction entre classe « en soi », une position partagée, et classe « pour soi », une position devenue consciente d'elle-même et organisée pour défendre ses intérêts, structure toute la théorie politique marxiste de l'action collective.",
    ],
    origine: {
      oeuvre: 'Manifeste du parti communiste',
      annee: '1848',
      contexte:
        "Marx y esquisse le passage d'une classe ouvrière dispersée, en concurrence pour l'emploi, à une classe organisée, unie par la conscience de ses intérêts communs.",
    },
    exemples: [
      "Un mouvement social qui ne se contente plus de demander une hausse de salaire ponctuelle, mais formule des revendications sur l'organisation même de la production : le signe d'un passage à une conscience de classe plus affirmée.",
    ],
    oeuvres: [
      { y: '1848', t: 'Manifeste du parti communiste' },
      { y: '1852', t: 'Le 18 Brumaire de Louis Bonaparte' },
    ],
    associes: ['lutte-des-classes', 'classe-sociale'],
    opposes: ['fausse-conscience'],
    critiques: [
      "Le passage de la classe en soi à la classe pour soi reste largement postulé plutôt que démontré : rien n'en garantit l'automaticité.",
      "L'histoire du XXᵉ siècle a montré des classes ouvrières nombreuses et durablement peu mobilisées, sans que la théorie n'explique bien pourquoi.",
    ],
    evolution: [
      { p: '1848', f: "Marx esquisse le passage de la classe en soi à la classe pour soi dans le Manifeste." },
      { p: '1852', f: "Le 18 Brumaire documente, à l'inverse, une paysannerie qui reste une classe sans conscience commune." },
      { p: '1923', f: "Lukács en fait le cœur de sa théorie de la conscience de classe comme totalité, dans Histoire et conscience de classe." },
    ],
  },
  'fausse-conscience': {
    detaille: [
      "L'expression désigne une représentation du monde qui empêche un groupe de percevoir ses propres intérêts de classe, au point de défendre parfois un ordre qui le dessert. Contrairement à une idée reçue, la formule elle-même n'apparaît jamais telle quelle sous la plume de Marx : c'est Engels qui la forge, dans une lettre de 1893 à Franz Mehring, pour résumer le mécanisme de l'idéologie déjà décrit avec Marx en 1846.",
      "La fausse conscience n'est pas une simple erreur individuelle corrigible par l'information : elle tient à la position sociale elle-même, qui rend certaines vérités structurellement plus difficiles à voir que d'autres depuis là où l'on se trouve.",
    ],
    origine: {
      oeuvre: "L'Idéologie allemande",
      annee: '1846',
      contexte:
        "La théorie de l'idéologie que Marx et Engels développent dans ce texte fournit le socle sur lequel Engels bâtira, près de cinquante ans plus tard, l'expression devenue depuis la plus citée.",
    },
    exemples: [
      "Un petit actionnaire salarié qui soutient une politique de baisse des impôts sur le capital, alors que l'essentiel de ses revenus provient de son salaire plutôt que de ses placements.",
    ],
    oeuvres: [
      { y: '1846', t: "L'Idéologie allemande" },
      { y: '1893', t: 'Lettre d’Engels à Franz Mehring' },
    ],
    associes: ['ideologie', 'alienation'],
    opposes: ['conscience-de-classe', 'individualisme-methodologique'],
    critiques: [
      "Le concept est difficile à falsifier : toute conscience qui ne coïncide pas avec l'intérêt de classe supposé peut être requalifiée de fausse, sans critère extérieur indépendant.",
      "Boudon lui oppose des acteurs aux raisons cognitives ordinaires, plutôt qu'une conscience structurellement faussée par leur seule position.",
    ],
    evolution: [
      { p: '1846', f: "Marx et Engels posent les bases de la théorie de l'idéologie dans L'Idéologie allemande." },
      { p: '1893', f: "Engels forge l'expression « fausse conscience » dans une lettre à Franz Mehring." },
      { p: '1923', f: "Lukács en fait un concept central de sa théorie de la réification et de la conscience de classe." },
    ],
  },
  'accumulation-du-capital': {
    detaille: [
      "Le capitaliste ne consomme pas l'essentiel de son profit : il en réinvestit une large part en capital supplémentaire, pour produire davantage et devancer ses concurrents. Cette accumulation continue, selon Marx, est une nécessité du système plus qu'un choix individuel — celui qui n'accumule pas risque d'être éliminé par celui qui le fait.",
      "Marx en tire une loi générale : l'accumulation concentre la richesse à un pôle tout en repoussant à l'autre pôle une masse croissante de travailleurs dont la position relative ne s'améliore pas au même rythme que la richesse produite.",
    ],
    origine: {
      oeuvre: 'Le Capital, livre I',
      annee: '1867',
      contexte:
        "Marx y consacre la dernière section du premier livre, où il tire les conséquences à long terme de la théorie de la plus-value développée dans les chapitres précédents.",
    },
    exemples: [
      "Une vague de fusions et de rachats dans un secteur, où les entreprises les mieux capitalisées absorbent celles qui n'ont pas pu suivre le même rythme d'investissement.",
    ],
    oeuvres: [
      { y: '1867', t: 'Le Capital, livre I, section « Loi générale de l’accumulation capitaliste »' },
    ],
    associes: ['plus-value', 'bourgeoisie', 'pauperisation'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "La concentration annoncée du capital entre un nombre toujours plus restreint de mains s'est heurtée à la diffusion de l'actionnariat et à la multiplication des formes intermédiaires de détention du capital.",
      "Le mécanisme suppose une concurrence pure que les monopoles et les régulations publiques ont, dans les faits, souvent atténuée.",
    ],
    evolution: [
      { p: '1867', f: "Marx formule la loi générale de l'accumulation capitaliste à la fin du premier livre du Capital." },
      { p: 'XXᵉ siècle', f: "Le débat se déplace vers la financiarisation de l'accumulation, moins directement liée à l'investissement productif." },
      { p: '2013', f: "Piketty relance empiriquement la question de la concentration du capital, avec des outils statistiques que Marx ne possédait pas." },
    ],
  },
  'pauperisation': {
    detaille: [
      "Marx distingue deux formes de paupérisation. La paupérisation absolue désignerait une baisse effective du niveau de vie des travailleurs ; la paupérisation relative, la thèse qu'il développe le plus systématiquement, désigne un écart croissant entre la part de la richesse produite qui revient au capital et celle qui revient au travail, même quand le niveau de vie absolu progresse.",
      "La loi générale de l'accumulation capitaliste veut que l'armée de réserve des chômeurs et des travailleurs précaires grossisse avec l'accumulation elle-même, ce qui maintient une pression à la baisse sur les salaires malgré l'enrichissement global de la société.",
    ],
    origine: {
      oeuvre: 'Le Capital, livre I',
      annee: '1867',
      contexte:
        "Marx y répond par anticipation à l'objection selon laquelle le capitalisme, en produisant de plus en plus de richesse, finirait par profiter à tous : il montre que la répartition de cette richesse peut se dégrader relativement, même quand son volume total augmente.",
    },
    exemples: [
      "Un secteur où les gains de productivité sont réels et mesurables, mais où le pouvoir d'achat des salariés qui les ont produits stagne sur la même période.",
    ],
    oeuvres: [
      { y: '1867', t: 'Le Capital, livre I, section « Loi générale de l’accumulation capitaliste »' },
    ],
    associes: ['accumulation-du-capital', 'exploitation'],
    opposes: ['meritocratie'],
    critiques: [
      "La paupérisation absolue, souvent attribuée à Marx, ne correspond pas à l'évolution du niveau de vie constatée dans les pays industrialisés au XXᵉ siècle.",
      "La thèse repose sur une mesure de la part relative du travail dans la valeur ajoutée, elle-même sensible aux conventions comptables retenues.",
    ],
    evolution: [
      { p: '1867', f: "Marx formule la loi générale de l'accumulation et la thèse de la paupérisation relative." },
      { p: 'XXᵉ siècle', f: "La hausse générale du niveau de vie dans les pays industrialisés nuance fortement la lecture absolue de la thèse." },
      { p: 'Depuis les années 1980', f: "Le débat sur la part du travail dans la valeur ajoutée, en recul dans plusieurs pays développés, relance la discussion sur la paupérisation relative." },
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
    associes: ['domination-legitime', 'rationalisation', 'action-sociale', 'verstehen'],
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
    associes: ['domination-legitime', 'raison-instrumentale', 'ideal-type', 'ethique-protestante', 'esprit-du-capitalisme', 'desenchantement-du-monde', 'bureaucratie'],
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
    associes: ['rationalisation', 'ideal-type', 'role-et-attentes', 'domination-traditionnelle', 'domination-charismatique', 'domination-legale-rationnelle'],
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
  'pouvoir': {
    detaille: [
      "Weber définit le pouvoir (Macht) le plus largement possible : la chance qu'a un acteur, quel que soit son fondement, d'imposer sa volonté dans une relation sociale, même contre la résistance d'autrui.",
      "Cette définition est délibérément neutre sur la légitimité : elle couvre la menace, la ruse, la persuasion, l'argent, aussi bien que l'autorité reconnue. La domination, elle, est le cas plus étroit où l'obéissance est attendue et généralement obtenue sans qu'il soit besoin d'y recourir à chaque fois.",
      "Le pouvoir est donc premier et plus large que la domination légitime : toute domination est un pouvoir stabilisé, mais tout pouvoir n'a pas besoin d'être légitimé pour s'exercer, au moins un temps.",
    ],
    origine: {
      oeuvre: 'Économie et société',
      annee: '1922',
      contexte:
        "Weber ouvre ses définitions sociologiques fondamentales par cette formule volontairement large, avant de la restreindre au chapitre suivant pour construire sa typologie de la domination légitime.",
    },
    exemples: [
      "Un fournisseur qui impose ses délais à un client dépendant de lui, sans avoir sur lui ni autorité ni titre, seulement l'absence d'alternative.",
      "Une rumeur qui suffit à faire céder une administration, sans qu'aucune loi ni aucun rapport de force déclaré n'ait été invoqué.",
    ],
    oeuvres: [
      { y: '1922', t: 'Économie et société, chapitre I, §16' },
      { y: '1919', t: 'Le Savant et le politique' },
    ],
    associes: ['domination-legitime', 'capital-symbolique'],
    opposes: ['systeme-social'],
    critiques: [
      "La définition est si large qu'elle finit par couvrir presque toute relation sociale, ce qui la rend difficile à manier empiriquement.",
      "Elle pense le pouvoir comme un attribut qu'un acteur détiendrait sur un autre, quand des approches plus récentes le décrivent comme diffus, circulant dans les pratiques plutôt que possédé par quiconque.",
      "Parsons lui reproche une vision à somme nulle — ce que je gagne, tu le perds — alors que le pouvoir peut aussi, selon lui, être créé collectivement pour atteindre un but commun.",
    ],
    evolution: [
      { p: '1922', f: "Weber pose la définition la plus large, avant de la restreindre à la domination légitime." },
      { p: '1963', f: "Parsons propose une lecture concurrente : le pouvoir comme média circulant dans un système, ressource collective plutôt que rapport de force à somme nulle." },
      { p: '1974', f: "Lukes distingue trois visages du pouvoir, dont un troisième — façonner les préférences elles-mêmes — que Weber n'envisageait pas." },
      { p: '1975–1976', f: "Foucault déplace la question du qui-détient-le-pouvoir vers le comment-il-s'exerce, dans les pratiques et les savoirs plutôt que dans une source unique." },
    ],
  },
  'statut-social': {
    detaille: [
      "Weber distingue trois ordres de la stratification, souvent réduits au seul premier par l'analyse marxiste : la situation de classe, définie par la position économique sur le marché ; la situation de statut (Stand), définie par une estime sociale partagée et un style de vie reconnu ; et le parti, organisé pour conquérir le pouvoir.",
      "Un groupe de statut se reconnaît à ce qu'il partage : mêmes usages de consommation, mêmes codes vestimentaires ou langagiers, et souvent des restrictions au mariage ou à la fréquentation qui maintiennent la frontière avec les autres groupes.",
      "Statut et classe peuvent diverger fortement : la richesse récente n'achète pas immédiatement l'estime, et un titre ancien peut survivre longtemps à la fortune qui l'avait fondé.",
    ],
    origine: {
      oeuvre: 'Économie et société',
      annee: '1922',
      contexte:
        "Publication posthume ; Weber y répond à une lecture trop strictement économique de la hiérarchie sociale, dominante dans l'Allemagne marxiste de son temps.",
    },
    exemples: [
      "Une famille de vieille noblesse désargentée qui garde, dans son village, une considération que n'obtient pas l'entrepreneur enrichi du coin.",
      "Des codes vestimentaires informels qui trient une soirée aussi sûrement qu'un prix d'entrée, sans qu'aucune règle écrite ne les impose.",
    ],
    oeuvres: [
      { y: '1922', t: 'Économie et société, chapitre IV : classes, Stände, partis' },
      { y: '1904', t: "L'Éthique protestante et l'esprit du capitalisme" },
    ],
    associes: ['prestige-social', 'position-sociale'],
    opposes: ['classe-sociale'],
    critiques: [
      "La frontière entre classe et statut se brouille en pratique : le revenu influence presque toujours l'estime sociale à long terme.",
      "Le modèle décrit mal les sociétés très mobiles, où les groupes de statut peinent à se refermer sur eux-mêmes.",
      "Certains sociologues marxistes y voient une manière de dissoudre le conflit de classe dans une multitude de hiérarchies concurrentes, moins mobilisatrices.",
    ],
    evolution: [
      { p: '1922', f: "Weber formule la trilogie classe / statut / parti dans Économie et société." },
      { p: '1947', f: "Parsons traduit et popularise le texte aux États-Unis (The Theory of Social and Economic Organization), où il nourrit la sociologie de la stratification." },
      { p: '1979', f: "Bourdieu déplace la question : le statut devient un effet du volume et de la structure des capitaux, plus qu'une catégorie à part." },
    ],
  },
  'prestige-social': {
    detaille: [
      "Le prestige est la face mesurable du statut : une estime que l'on peut classer, comparer, faire varier d'une position à l'autre, quand le statut au sens plein suppose un groupe fermé et un style de vie partagé.",
      "Il s'attache d'abord aux professions, et se révèle étonnamment stable : demandé à des inconnus dans des pays différents, le classement des métiers par considération varie peu, alors que les revenus, eux, varient beaucoup.",
      "Le prestige circule aussi par contamination : fréquenter, porter, habiter ce qui est prestigieux en emprunte un peu, ce qui explique une bonne part de la consommation dite ostentatoire.",
    ],
    origine: {
      oeuvre: 'Économie et société',
      annee: '1922',
      contexte:
        "Weber pose l'« estimation sociale de l'honneur » (soziale Ehre) comme ce qui définit un Stand ; les sociologues de la stratification en feront ensuite un indicateur chiffré.",
    },
    exemples: [
      "Un chirurgien et un trader gagnent parfois le même revenu ; interrogés, la plupart des gens placent le premier bien plus haut en considération.",
      "Une adresse dont le seul nom de quartier rehausse, aux yeux d'un tiers, la valeur perçue d'un bien pourtant identique ailleurs.",
    ],
    oeuvres: [
      { y: '1922', t: 'Économie et société' },
      { y: '1904', t: "L'Éthique protestante et l'esprit du capitalisme" },
    ],
    associes: ['statut-social', 'capital-symbolique'],
    opposes: ['capital-economique'],
    critiques: [
      "Les échelles de prestige professionnel, construites par sondage, mesurent une opinion moyenne qui masque de grands désaccords entre groupes sociaux.",
      "Le prestige d'un métier évolue plus lentement que ses conditions réelles : il continue de valoriser des professions dont l'autonomie et le revenu se sont dégradés.",
      "Réduire le statut à un score de prestige, comme le fera la sociologie américaine de la stratification, perd la dimension collective — le style de vie partagé — que Weber visait.",
    ],
    evolution: [
      { p: '1922', f: "Weber pose l'estimation sociale de l'honneur comme fondement du groupe de statut." },
      { p: '1947', f: "La première grande enquête américaine (NORC) fait classer des métiers par un échantillon représentatif." },
      { p: '1961', f: "Duncan en tire un indice socio-économique combinant revenu, éducation et prestige perçu." },
      { p: '1977', f: "Treiman construit une échelle internationale standard, encore utilisée en sociologie comparative." },
    ],
  },
  'elitisme': {
    detaille: [
      "Weber observe, dans la démocratie de masse qui se généralise en Europe, la montée de partis-machines dirigés par des professionnels de la politique : la direction effective échappe aux militants et aux électeurs pour se concentrer entre les mains d'un appareil permanent.",
      "Son ami et collègue Robert Michels pousse l'observation jusqu'à la loi : toute organisation, aussi démocratique soit-elle dans ses statuts, finit gouvernée par une minorité stable — mieux informée, mieux formée à la parole publique, seule disponible à plein temps pour la tâche. Il l'appelle la loi d'airain de l'oligarchie.",
      "Le paradoxe touche en premier les partis ouvriers et les syndicats, nés pour combattre les hiérarchies, et qui reproduisent, pour simplement fonctionner à grande échelle, une division dirigeants/dirigés comparable à celle qu'ils combattent.",
    ],
    origine: {
      oeuvre: 'Le Savant et le politique',
      annee: '1919',
      contexte:
        "Weber observe la démocratie de masse se doter de partis-machines dirigés par des professionnels de la politique, et se demande ce que devient le suffrage universel une fois la direction confisquée par un appareil.",
    },
    exemples: [
      "Une association de quartier fondée par consensus, dont les mêmes trois personnes rédigent l'ordre du jour d'une réunion à l'autre, faute d'autres volontaires disponibles.",
      "Un mouvement horizontal qui se choisit, à mesure qu'il grandit, des porte-parole non élus mais reconnus par les médias — et qui le restent.",
    ],
    oeuvres: [
      { y: '1919', t: 'Le Savant et le politique' },
      { y: '1922', t: 'Économie et société' },
    ],
    associes: ['domination-legitime', 'rationalisation'],
    opposes: ['egalisation-des-conditions'],
    critiques: [
      "Le déterminisme est total chez Michels : aucune place n'est laissée aux organisations qui résistent réellement à l'oligarchisation, alors que certaines coopératives ou syndicats de base y échappent longtemps.",
      "L'observation de Michels porte sur un seul parti, à un moment précis de son histoire : l'ériger en loi universelle généralise beaucoup à partir de peu.",
      "Le mot « loi » masque un choix qui n'a rien de neutre : déçu du socialisme, Michels glissera lui-même vers le fascisme, qu'il justifiera par cette même théorie des élites.",
    ],
    evolution: [
      { p: '1911', f: "Michels, proche de Weber, formule la loi d'airain de l'oligarchie à partir de son enquête sur la social-démocratie allemande." },
      { p: '1919', f: "Weber décrit à son tour la confiscation de la démocratie de masse par des partis-machines et des professionnels de la politique." },
      { p: '1896–1923', f: "Mosca, puis Pareto, développent en parallèle une théorie générale de la circulation des élites." },
      { p: '1956', f: "C. Wright Mills actualise la thèse pour les États-Unis dans The Power Elite, en y ajoutant l'armée et la grande industrie." },
      { p: '1956', f: "Lipset, Trow et Coleman trouvent dans le syndicat typographe américain (Union Democracy) l'exception rare qui confirme, en creux, la règle de Michels." },
    ],
  },
  'action-sociale': {
    detaille: [
      "Weber ouvre sa sociologie par une définition volontairement étroite : n'est une action sociale que la conduite à laquelle son auteur attache un sens subjectif, et qui tient compte du comportement d'autrui, en s'orientant sur lui. Un simple réflexe, ou un comportement purement mécanique, n'en est pas une.",
      "Cette définition fait de la sociologie une science interprétative avant d'être explicative : comprendre le sens visé par l'acteur est la première tâche, chercher les régularités causales qui en découlent ne vient qu'ensuite. Deux gestes identiques peuvent ainsi relever ou non de l'action sociale selon ce qu'ils visent.",
    ],
    origine: {
      oeuvre: 'Économie et société',
      annee: '1922',
      contexte:
        "Weber ouvre son grand traité posthume par cette définition, qui fonde toute la sociologie compréhensive développée dans les chapitres suivants.",
    },
    exemples: [
      "Prier seul dans sa chambre n'est pas une action sociale ; prier en public, en tenant compte du regard des autres fidèles, en devient une.",
    ],
    oeuvres: [
      { y: '1913', t: 'Essai sur quelques catégories de la sociologie compréhensive' },
      { y: '1922', t: 'Économie et société, chapitre I, §1' },
    ],
    associes: ['verstehen', 'types-d-action-sociale'],
    opposes: ['fait-social'],
    critiques: [
      "La frontière entre action sociale et simple comportement reste difficile à tracer dans les cas concrets, où le sens visé n'est jamais directement observable.",
      "La définition suppose un acteur qui sait ce qu'il vise, quand une bonne part de la conduite ordinaire reste largement irréfléchie.",
    ],
    evolution: [
      { p: '1913', f: "Weber pose les catégories fondamentales de la sociologie compréhensive dans un essai méthodologique." },
      { p: '1922', f: "Économie et société ouvre sur la définition systématique de l'action sociale et de ses quatre types." },
      { p: '1937', f: "Parsons en fait le socle de sa théorie de l'action sociale, qu'il étendra ensuite vers le fonctionnalisme systémique." },
    ],
  },
  'verstehen': {
    detaille: [
      "Comprendre (verstehen), pour Weber, ne signifie pas seulement observer une conduite : c'est se représenter le sens que celui qui agit lui donne, en se demandant quelles fins, quelles valeurs ou quelles émotions ont pu la motiver.",
      "Weber distingue une compréhension immédiate, qui saisit le sens apparent d'un acte (voir quelqu'un couper du bois), d'une compréhension explicative, qui restitue le mobile qui le rend intelligible dans son contexte (couper du bois pour se chauffer, pour se calmer, ou pour gagner sa vie).",
    ],
    origine: {
      oeuvre: 'Essai sur quelques catégories de la sociologie compréhensive',
      annee: '1913',
      contexte:
        "Weber répond aux débats méthodologiques allemands de son temps sur la spécificité des sciences de la culture face aux sciences de la nature, hérités de Dilthey et de l'école néokantienne.",
    },
    exemples: [
      "Un archiviste qui déchiffre une facture ancienne ne comprend le geste qui l'a produite qu'en restituant les usages commerciaux de l'époque, pas seulement les chiffres inscrits.",
    ],
    oeuvres: [
      { y: '1913', t: 'Essai sur quelques catégories de la sociologie compréhensive' },
      { y: '1922', t: 'Économie et société, chapitre I' },
    ],
    associes: ['action-sociale', 'ideal-type'],
    opposes: ['fait-social'],
    critiques: [
      "Rien ne garantit que le sens reconstitué par le chercheur corresponde à celui réellement visé par l'acteur, plutôt qu'à une projection plausible.",
      "La méthode se prête mal à l'étude de comportements collectifs à grande échelle, où aucun sens individuel unique ne peut être restitué.",
    ],
    evolution: [
      { p: '1883', f: "Dilthey distingue comprendre (sciences de l'esprit) et expliquer (sciences de la nature), matrice dont Weber part." },
      { p: '1913', f: "Weber formalise la compréhension comme méthode propre à une sociologie de l'action." },
      { p: '1932', f: "Schütz radicalise la démarche en phénoménologie sociale, centrée sur le sens vécu au quotidien." },
    ],
  },
  'types-d-action-sociale': {
    detaille: [
      "Weber distingue quatre types purs, jamais observés à l'état isolé mais utiles pour démêler ce qui motive une conduite réelle : l'action traditionnelle, par habitude ancrée ; l'action affective, par émotion immédiate ; l'action rationnelle en valeur, par fidélité à une conviction indépendamment du coût ; l'action rationnelle en finalité, par calcul efficace des moyens pour atteindre un but.",
      "Les deux derniers types, seuls pleinement rationnels aux yeux de Weber, s'opposent l'un à l'autre autant qu'aux deux premiers : l'un reste fidèle à une valeur quel qu'en soit le prix, l'autre ajuste ses moyens à ses fins sans s'attacher à aucune valeur en particulier.",
    ],
    origine: {
      oeuvre: 'Économie et société',
      annee: '1922',
      contexte:
        "Weber développe cette typologie immédiatement après avoir défini l'action sociale, pour donner à l'analyse un outil de classement plutôt qu'une simple catégorie générale.",
    },
    exemples: [
      "Un pompier qui entre dans un immeuble en feu peut agir par devoir professionnel (valeur), par réflexe de survie d'autrui (affectif), par habitude du métier (tradition), ou en évaluant froidement ses chances de réussir l'intervention (finalité) — souvent les quatre à la fois.",
    ],
    oeuvres: [
      { y: '1922', t: 'Économie et société, chapitre I, §2' },
    ],
    associes: ['action-sociale', 'rationalite-instrumentale', 'rationalite-en-valeur'],
    opposes: ['fonction-latente'],
    critiques: [
      "Les quatre types se mélangent presque toujours dans une même conduite, ce qui rend leur usage empirique délicat au-delà de l'exercice de classement.",
      "La hiérarchie implicite entre types rationnels et non rationnels a été lue comme un jugement de valeur déguisé en typologie neutre.",
    ],
    evolution: [
      { p: '1922', f: "Weber formule la typologie des quatre types d'action dans Économie et société." },
      { p: '1937', f: "Parsons en fait un point de départ pour sa théorie générale de l'action, qu'il complexifie ensuite." },
      { p: '1981', f: "Habermas retravaille la distinction pour sa propre théorie de l'agir communicationnel." },
    ],
  },
  'domination-traditionnelle': {
    detaille: [
      "L'autorité traditionnelle tire sa légitimité du caractère sacré de ce qui a toujours été : le chef obéit lui-même à la coutume, et ceux qui lui obéissent le font au nom d'un ordre ancien plutôt que d'une règle écrite ou d'une qualité personnelle.",
      "Ce type de domination laisse une marge de manœuvre réelle au dominant, dans les limites que la coutume ne fixe pas explicitement — ce que Weber distingue de la domination légale-rationnelle, où même cette marge est en principe encadrée par des règles.",
    ],
    origine: {
      oeuvre: 'Économie et société',
      annee: '1922',
      contexte:
        "Weber construit cette forme comme l'un des trois types purs de sa typologie de la domination légitime, à partir de l'étude comparée des monarchies patrimoniales et des sociétés féodales.",
    },
    exemples: [
      "Un chef d'entreprise familiale qui prend une décision inhabituelle sans se justifier davantage qu'en invoquant : « c'est ainsi que mon père faisait ».",
    ],
    oeuvres: [
      { y: '1922', t: 'Économie et société, chapitre III' },
    ],
    associes: ['domination-legitime', 'domination-charismatique'],
    opposes: ['domination-legale-rationnelle'],
    critiques: [
      "La distinction avec la domination charismatique reste poreuse : bien des autorités traditionnelles s'appuient aussi sur le prestige personnel de qui les incarne.",
      "Le type pur décrit mal les monarchies modernes, qui combinent traditions dynastiques et cadre constitutionnel légal-rationnel.",
    ],
    evolution: [
      { p: '1922', f: "Weber formule le type dans sa typologie de la domination légitime." },
      { p: 'XXᵉ siècle', f: "Le concept sert de référence pour analyser les autorités coutumières dans les sociétés colonisées, souvent maintenues à dessein par les administrations coloniales." },
    ],
  },
  'domination-charismatique': {
    detaille: [
      "La domination charismatique repose sur la croyance en une qualité extraordinaire d'une personne — héroïsme, sainteté, don singulier — que rien d'autre qu'elle-même ne garantit. Elle naît en rupture avec l'ordre établi, traditionnel ou légal, et vaut tant que ses partisans continuent d'y croire.",
      "Sa fragilité constitutive tient à sa personnalisation extrême : à la mort ou à l'échec du chef charismatique, l'autorité doit se « routiniser » — se transformer en domination traditionnelle (une dynastie s'installe) ou légale-rationnelle (une institution se formalise) — sous peine de disparaître avec lui.",
    ],
    origine: {
      oeuvre: 'Économie et société',
      annee: '1922',
      contexte:
        "Weber emprunte le mot charisme (don de grâce) au vocabulaire théologique protestant pour désigner une source d'autorité radicalement différente de la coutume ou de la règle.",
    },
    exemples: [
      "Un mouvement politique bâti autour d'une seule figure, qui se scinde en plusieurs courants rivaux dès sa disparition, faute d'avoir organisé sa propre succession.",
    ],
    oeuvres: [
      { y: '1922', t: 'Économie et société, chapitre III' },
    ],
    associes: ['domination-legitime', 'domination-traditionnelle'],
    opposes: ['bureaucratie'],
    critiques: [
      "Le charisme, présenté comme une qualité reconnue par les partisans, est difficile à distinguer empiriquement d'une simple habileté de communication ou de mise en scène de soi.",
      "La théorie explique mal pourquoi certaines figures charismatiques échouent à convaincre, quand d'autres, aux qualités personnelles comparables, y parviennent.",
    ],
    evolution: [
      { p: '1922', f: "Weber formule le concept et sa fragilité constitutive, la routinisation." },
      { p: '1968', f: "Eisenstadt systématise l'étude des processus de routinisation du charisme dans le mouvement religieux et politique." },
    ],
  },
  'domination-legale-rationnelle': {
    detaille: [
      "La domination légale-rationnelle repose sur la croyance en la légalité de règles édictées et en le droit, pour ceux qui en sont investis, de donner des directives dans ce cadre. On obéit à la fonction, jamais à la personne qui l'occupe un temps donné.",
      "Weber en fait la forme la plus adaptée à la société moderne, parce qu'elle est la plus prévisible et la plus facilement transmissible : contrairement à la tradition ou au charisme, elle ne dépend ni d'une continuité historique ni d'une personne irremplaçable.",
    ],
    origine: {
      oeuvre: 'Économie et société',
      annee: '1922',
      contexte:
        "Weber l'identifie comme la forme de domination caractéristique de l'État moderne et de l'entreprise capitaliste, dont la bureaucratie est l'expression organisationnelle la plus achevée.",
    },
    exemples: [
      "Un maire nouvellement élu qui hérite immédiatement des pouvoirs attachés à sa fonction, sans avoir à en établir personnellement la légitimité auprès de chaque administré.",
    ],
    oeuvres: [
      { y: '1922', t: 'Économie et société, chapitre III' },
    ],
    associes: ['domination-legitime', 'bureaucratie'],
    opposes: ['domination-traditionnelle'],
    critiques: [
      "La neutralité impersonnelle annoncée masque souvent des rapports de pouvoir bien réels entre services, que la seule règle écrite ne suffit pas à neutraliser.",
      "Une légitimité purement procédurale peine à mobiliser l'adhésion dans les moments de crise, où la seule légalité ne suffit pas à emporter la conviction.",
    ],
    evolution: [
      { p: '1922', f: "Weber en fait le troisième type pur de sa typologie, et la forme dominante de l'État moderne." },
      { p: '1957', f: "Crozier documente, en France, l'écart entre l'idéal légal-rationnel et le fonctionnement réel des bureaucraties." },
    ],
  },
  'bureaucratie': {
    detaille: [
      "La bureaucratie est, pour Weber, la forme d'organisation la plus techniquement supérieure jamais inventée : hiérarchie stricte des fonctions, règles écrites appliquées sans égard aux personnes, recrutement sur qualification, carrière et rémunération fixe plutôt que rétribution au cas par cas.",
      "Cette supériorité technique a un coût que Weber redoute : une fois installée, la bureaucratie devient très difficile à démonter, quel que soit le régime politique qui la chapeaute — une « cage d'acier » qui survit à ceux qui l'ont mise en place.",
    ],
    origine: {
      oeuvre: 'Économie et société',
      annee: '1922',
      contexte:
        "Weber observe l'expansion continue de l'administration prussienne et des grandes entreprises industrielles de son temps, deux organisations structurées selon des principes très proches.",
    },
    exemples: [
      "Un service administratif où deux dossiers identiques reçoivent la même réponse, quel que soit l'agent qui les traite, tant que la procédure écrite reste inchangée.",
    ],
    oeuvres: [
      { y: '1922', t: 'Économie et société, chapitre III, §6' },
    ],
    associes: ['domination-legale-rationnelle', 'rationalisation'],
    opposes: ['domination-charismatique'],
    critiques: [
      "Merton montre que la même discipline qui rend la bureaucratie efficace produit aussi une rigidité — l'application aveugle de la règle même quand elle contredit son but initial.",
      "Crozier ajoute que les agents eux-mêmes se servent des zones d'incertitude que la règle laisse ouvertes pour se ménager un pouvoir informel, loin de l'exécution neutre annoncée.",
    ],
    evolution: [
      { p: '1922', f: "Weber formalise les traits de la bureaucratie idéal-typique." },
      { p: '1940', f: "Merton décrit le rituel bureaucratique et le déplacement des buts qu'une discipline excessive peut produire." },
      { p: '1963', f: "Crozier documente, dans Le Phénomène bureaucratique, l'écart entre la règle formelle et le pouvoir réel des acteurs." },
    ],
  },
  'ethique-protestante': {
    detaille: [
      "Weber observe que les régions et les groupes protestants, notamment calvinistes, réussissent économiquement mieux que leurs voisins catholiques dans l'Europe du XIXᵉ siècle, et cherche une explication qui ne soit ni raciale ni purement institutionnelle.",
      "Sa réponse : la doctrine de la prédestination, qui laisse dans l'incertitude quant à son propre salut, pousse le croyant à chercher des signes de son élection dans une vie méthodique, disciplinée et laborieuse — un « ascétisme intramondain » qui investit le travail ordinaire d'une valeur religieuse inédite.",
    ],
    origine: {
      oeuvre: "L'Éthique protestante et l'esprit du capitalisme",
      annee: '1904',
      contexte:
        "Weber traverse une grave dépression nerveuse au tournant du siècle ; ce texte, l'un des premiers qu'il publie à son retour au travail intellectuel, porte la marque de son intérêt renouvelé pour la psychologie religieuse.",
    },
    exemples: [
      "Un artisan qui refuse de profiter pleinement de ses gains, les réinvestissant presque tous dans son atelier plutôt que dans un confort qu'il jugerait moralement suspect.",
    ],
    oeuvres: [
      { y: '1904', t: "L'Éthique protestante et l'esprit du capitalisme" },
      { y: '1920', t: "Recueils d'études de sociologie de la religion" },
    ],
    associes: ['esprit-du-capitalisme', 'rationalisation'],
    opposes: ['infrastructure-et-superstructure'],
    critiques: [
      "Les historiens économistes objectent que des foyers capitalistes précoces (Venise, Anvers) étaient catholiques, ce qui affaiblit le lien causal proposé.",
      "La corrélation entre protestantisme et développement économique pourrait aussi s'expliquer par d'autres facteurs partagés — éducation, urbanisation — sans passer par l'angoisse du salut.",
    ],
    evolution: [
      { p: '1904–1905', f: "Weber publie sa thèse en deux articles, avant de la reprendre et de l'étendre en volume." },
      { p: '1926', f: "Tawney, dans Religion and the Rise of Capitalism, nuance la thèse par une histoire économique plus matérielle." },
      { p: '1930', f: "La traduction anglaise par Talcott Parsons diffuse largement la thèse dans le monde anglophone." },
    ],
  },
  'esprit-du-capitalisme': {
    detaille: [
      "L'esprit du capitalisme n'est pas, pour Weber, la simple soif de gain — universelle et de tout temps — mais une éthique précise : rechercher le profit de façon méthodique et continue, comme une vocation, un devoir moral en soi plutôt qu'un moyen de subvenir à ses besoins.",
      "Weber l'illustre par les maximes de Benjamin Franklin (« le temps, c'est de l'argent », « le crédit, c'est de l'argent »), qu'il lit comme une éthique devenue autonome de sa matrice religieuse d'origine : l'ascétisme protestant a produit un esprit qui continue de s'imposer une fois la foi qui l'avait motivé retirée.",
    ],
    origine: {
      oeuvre: "L'Éthique protestante et l'esprit du capitalisme",
      annee: '1904',
      contexte:
        "Weber cherche à définir précisément ce qu'il entend démontrer avant de remonter à ses origines religieuses, en s'appuyant sur les écrits moraux de Benjamin Franklin comme cas exemplaire.",
    },
    exemples: [
      "Un dirigeant qui continue de travailler avec la même discipline longtemps après avoir accumulé bien plus qu'il ne pourrait jamais dépenser, par fidélité à une éthique du travail plus que par nécessité.",
    ],
    oeuvres: [
      { y: '1904', t: "L'Éthique protestante et l'esprit du capitalisme" },
    ],
    associes: ['ethique-protestante', 'nouvel-esprit-du-capitalisme'],
    opposes: ['alienation'],
    critiques: [
      "L'esprit décrit par Weber, tourné vers l'épargne et l'accumulation ascétique, correspond mal au capitalisme consumériste contemporain, plus tourné vers la dépense que vers la frugalité.",
      "Sombart, contemporain de Weber, propose une origine concurrente — le luxe et la dépense, plutôt que l'ascèse — pour expliquer l'essor du même capitalisme moderne.",
    ],
    evolution: [
      { p: '1904', f: "Weber définit l'esprit du capitalisme à partir des maximes de Benjamin Franklin." },
      { p: '1913', f: "Sombart propose une origine concurrente, fondée sur le luxe plutôt que sur l'ascèse." },
      { p: '1999', f: "Boltanski et Chiapello décrivent un nouvel esprit du capitalisme, fondé sur l'autonomie et le projet plutôt que sur la discipline ascétique d'origine." },
    ],
  },
  'desenchantement-du-monde': {
    detaille: [
      "Le désenchantement désigne le retrait progressif des puissances mystérieuses et incalculables du monde moderne : en principe, tout peut désormais être expliqué et maîtrisé par le calcul rationnel, même si personne, en pratique, ne maîtrise plus l'ensemble des savoirs nécessaires pour le faire soi-même.",
      "Ce n'est pas un savoir accru dont il s'agit, mais une croyance : celle qu'un tel savoir existerait quelque part, disponible en principe, ce qui suffit à priver le monde de la part de mystère qu'il gardait pour l'homme prémoderne.",
    ],
    origine: {
      oeuvre: 'Le Savant et le politique',
      annee: '1919',
      contexte:
        "Weber prononce cette conférence (« Le métier et la vocation de savant ») devant des étudiants munichois, dans une Allemagne vaincue et désorientée, où il s'interroge sur ce que la science peut encore promettre.",
    },
    exemples: [
      "Une éclipse solaire, prévue au jour et à la minute près par le calcul, qui ne suscite plus la terreur qu'elle inspirait aux sociétés qui ne disposaient pas de ce savoir.",
    ],
    oeuvres: [
      { y: '1919', t: 'Le Savant et le politique' },
      { y: '1922', t: 'Économie et société' },
    ],
    associes: ['rationalisation', 'secularisation'],
    opposes: ['mise-en-scene-de-soi'],
    critiques: [
      "Le désenchantement annoncé n'a pas empêché la persistance, voire le renouveau, de pratiques ésotériques, religieuses ou magiques dans les sociétés les plus rationalisées.",
      "Le diagnostic reste largement occidental, construit à partir de l'histoire européenne du rapport entre religion et science.",
    ],
    evolution: [
      { p: '1919', f: "Weber formule le désenchantement du monde dans sa conférence munichoise." },
      { p: '1966', f: "Berger et Luckmann en font un ressort de leur sociologie de la construction sociale de la réalité." },
      { p: '1985', f: "Marcel Gauchet, dans Le Désenchantement du monde, en fait le fil directeur de toute l'histoire politique occidentale." },
    ],
  },
  'secularisation': {
    detaille: [
      "La sécularisation désigne le recul de la religion comme cadre englobant qui organisait autrefois la totalité de la vie sociale : le droit, l'école, la politique, la morale s'en émancipent peu à peu pour fonctionner selon leurs propres logiques.",
      "Le processus ne signifie pas nécessairement la disparition de la croyance individuelle, mais celle du monopole institutionnel de la religion sur des domaines qu'elle organisait auparavant seule — un déplacement plus qu'une extinction pure et simple.",
    ],
    origine: {
      oeuvre: 'Le Savant et le politique',
      annee: '1919',
      contexte:
        "Le thème prolonge directement le désenchantement du monde formulé la même année, et sera systématisé après Weber par toute une sociologie de la religion qui en fait son objet central.",
    },
    exemples: [
      "Un hôpital public qui soigne indifféremment selon la religion du patient, là où le soin relevait autrefois d'institutions religieuses organisées selon leurs propres appartenances.",
    ],
    oeuvres: [
      { y: '1919', t: 'Le Savant et le politique' },
    ],
    associes: ['desenchantement-du-monde', 'rationalisation'],
    opposes: ['mise-en-scene-de-soi'],
    critiques: [
      "La thèse d'un déclin linéaire et irréversible de la religion a été largement révisée face à la vitalité religieuse persistante dans plusieurs régions du monde, notamment aux États-Unis.",
      "Peter Berger, l'un des principaux théoriciens de la sécularisation dans les années 1960, reviendra lui-même sur sa propre thèse quarante ans plus tard.",
    ],
    evolution: [
      { p: '1919', f: "Weber pose les bases du diagnostic dans le prolongement du désenchantement du monde." },
      { p: '1967', f: "Berger systématise la thèse de la sécularisation dans La Religion dans la conscience moderne." },
      { p: '1999', f: "Berger publie The Desecularization of the World et révise sa propre thèse initiale." },
    ],
  },
  'parti': {
    detaille: [
      "Le parti, au sens wébérien, est un groupement organisé pour conquérir ou influencer le pouvoir au sein d'une communauté, quelle que soit par ailleurs la classe économique ou le groupe de statut de ses membres : il vit dans la sphère du pouvoir, comme la classe vit dans celle du marché et le statut dans celle de l'honneur.",
      "Cette définition déborde largement le seul parti politique moderne : elle couvre toute organisation, syndicale, religieuse ou associative, dont l'objectif est d'influencer des décisions collectives plutôt que de défendre une seule position économique ou sociale.",
    ],
    origine: {
      oeuvre: 'Économie et société',
      annee: '1922',
      contexte:
        "Weber conclut par ce troisième ordre le chapitre où il distingue classe, statut et parti comme trois dimensions indépendantes de la stratification sociale.",
    },
    exemples: [
      "Une coalition électorale qui rassemble, autour d'un même objectif de pouvoir, des personnes de professions et de niveaux de revenus très différents.",
    ],
    oeuvres: [
      { y: '1922', t: 'Économie et société, chapitre IV' },
    ],
    associes: ['ordres-sociaux', 'pouvoir'],
    opposes: ['systeme-social'],
    critiques: [
      "La frontière entre parti et groupe de statut se brouille dans les partis eux-mêmes structurés autour d'une appartenance sociale homogène.",
      "La définition, très large, peine à distinguer un parti politique d'un simple groupe de pression ou d'une association ordinaire.",
    ],
    evolution: [
      { p: '1922', f: "Weber formule le parti comme troisième ordre de la stratification, aux côtés de la classe et du statut." },
      { p: '1911', f: "Michels, dont Weber est proche, avait déjà étudié empiriquement l'organisation interne des partis de masse." },
    ],
  },
  'classe': {
    detaille: [
      "Weber définit la classe par la situation de marché : les chances qu'un individu partage avec d'autres d'obtenir des biens, un revenu ou une position, du fait de ce qu'il peut offrir sur le marché — sa propriété, ou à défaut ses compétences et son travail.",
      "Cette définition se distingue nettement de celle de Marx : la classe wébérienne n'est ni une communauté ni un acteur collectif en puissance, seulement une situation statistique partagée, qui n'entraîne aucune conscience ni aucune action commune automatique.",
    ],
    origine: {
      oeuvre: 'Économie et société',
      annee: '1922',
      contexte:
        "Weber ouvre par cette définition son chapitre sur la stratification, en réponse implicite à la théorie marxiste des classes alors dominante dans le débat allemand.",
    },
    exemples: [
      "Deux personnes employées dans des secteurs très différents, mais dont les revenus et les perspectives de carrière sont statistiquement comparables, partagent une même situation de classe sans jamais s'être rencontrées.",
    ],
    oeuvres: [
      { y: '1922', t: 'Économie et société, chapitre IV' },
    ],
    associes: ['classe-sociale', 'ordres-sociaux'],
    opposes: ['role-et-attentes'],
    critiques: [
      "En réduisant la classe à une situation de marché purement statistique, Weber s'interdit d'expliquer pourquoi et comment elle se transforme parfois en acteur collectif organisé.",
      "La proximité avec la définition marxiste de la classe reste plus grande que Weber ne le laisse entendre, notamment pour les classes propriétaires.",
    ],
    evolution: [
      { p: '1922', f: "Weber définit la classe comme situation de marché, distincte du statut et du parti." },
      { p: '1979', f: "Bourdieu propose une synthèse qui reprend la pluralité wébérienne des dimensions tout en gardant l'ambition structurelle de Marx." },
    ],
  },
  'ordres-sociaux': {
    detaille: [
      "Là où Marx réduit la position sociale à un seul axe — la place dans les rapports de production —, Weber en distingue trois, indépendants dans leur principe même si souvent corrélés dans les faits : la classe (situation de marché), le statut (estime sociale partagée) et le parti (accès organisé au pouvoir).",
      "Ces trois ordres peuvent diverger fortement chez un même individu : un intellectuel peut jouir d'un grand prestige de statut avec un revenu modeste, un nouveau riche peut disposer d'une classe élevée sans le statut qui l'accompagne traditionnellement.",
    ],
    origine: {
      oeuvre: 'Économie et société',
      annee: '1922',
      contexte:
        "Ce chapitre, souvent cité isolément sous le titre « Classes, Stände, partis », est l'une des contributions les plus durables de Weber à la sociologie de la stratification.",
    },
    exemples: [
      "Un académicien reconnu mais peu rémunéré occupe un statut élevé sans occuper la même classe qu'un entrepreneur moins considéré mais bien plus riche.",
    ],
    oeuvres: [
      { y: '1922', t: 'Économie et société, chapitre IV' },
      { y: '1947', t: 'The Theory of Social and Economic Organization (traduction Parsons)' },
    ],
    associes: ['classe', 'statut-social', 'parti'],
    opposes: ['classe-sociale'],
    critiques: [
      "La pluralité des ordres, séduisante en théorie, complique la mesure empirique par rapport à un indicateur unique comme le revenu ou la catégorie socioprofessionnelle.",
      "Les trois ordres restent statistiquement très corrélés dans la plupart des sociétés étudiées, ce qui limite la portée pratique de leur séparation analytique.",
    ],
    evolution: [
      { p: '1922', f: "Weber distingue les trois ordres de la stratification dans Économie et société." },
      { p: '1945', f: "Davis et Moore, aux États-Unis, développent une théorie fonctionnaliste de la stratification qui s'en inspire partiellement." },
      { p: '1979', f: "Bourdieu déplace la pluralité wébérienne vers un espace à plusieurs capitaux, économique, culturel, social et symbolique." },
    ],
  },
  'rationalite-en-valeur': {
    detaille: [
      "Agir par rationalité en valeur (wertrational), c'est agir pour rester fidèle à une conviction — religieuse, éthique, esthétique, politique — indépendamment des conséquences que cet acte entraîne et du coût qu'il peut représenter pour celui qui l'accomplit.",
      "Weber ne juge pas ce type moins rationnel que le calcul instrumental : il est rationnel en ce qu'il organise méthodiquement la conduite autour d'un principe cohérent, mais il diffère du calcul en ce qu'il ne pèse jamais le principe lui-même contre son coût.",
    ],
    origine: {
      oeuvre: 'Économie et société',
      annee: '1922',
      contexte:
        "Weber l'isole comme l'un des quatre types purs d'action sociale, en le distinguant explicitement de la rationalité instrumentale avec laquelle on le confond souvent.",
    },
    exemples: [
      "Un objecteur de conscience qui refuse le service armé même au prix d'une peine de prison, par fidélité absolue à une conviction plutôt que par calcul du meilleur résultat possible pour lui-même.",
    ],
    oeuvres: [
      { y: '1922', t: 'Économie et société, chapitre I, §2' },
      { y: '1919', t: 'Le Savant et le politique' },
    ],
    associes: ['types-d-action-sociale', 'action-sociale'],
    opposes: ['rationalite-instrumentale'],
    critiques: [
      "La distinction avec l'action affective reste ténue : une conviction assumée « quel qu'en soit le prix » ressemble parfois beaucoup à une émotion rationalisée après coup.",
      "Dans Le Savant et le politique, Weber lui-même reconnaîtra la tension entre cette éthique de conviction et une éthique de responsabilité plus attentive aux conséquences.",
    ],
    evolution: [
      { p: '1922', f: "Weber formule la rationalité en valeur comme l'un des quatre types purs d'action." },
      { p: '1919', f: "Il en tire, en politique, la distinction entre éthique de conviction et éthique de responsabilité." },
    ],
  },
  'rationalite-instrumentale': {
    detaille: [
      "Agir par rationalité instrumentale (zweckrational), c'est choisir ses moyens en fonction d'une fin donnée, après avoir évalué froidement leur efficacité respective et les conséquences prévisibles de chaque option — le type le plus proche du calcul économique ordinaire.",
      "Weber en fait le moteur principal de la rationalisation occidentale : à mesure que ce type d'action gagne du terrain sur les trois autres, l'économie, le droit et l'administration se réorganisent tout entiers autour du calcul des moyens les plus efficaces.",
    ],
    origine: {
      oeuvre: 'Économie et société',
      annee: '1922',
      contexte:
        "Weber l'isole comme le plus systématiquement rationnel des quatre types d'action, et le relie directement à sa thèse plus large de la rationalisation du monde occidental.",
    },
    exemples: [
      "Un investisseur qui compare plusieurs placements sur le seul critère du rendement attendu, sans considération pour l'origine ou la nature des entreprises concernées.",
    ],
    oeuvres: [
      { y: '1922', t: 'Économie et société, chapitre I, §2' },
    ],
    associes: ['types-d-action-sociale', 'raison-instrumentale'],
    opposes: ['rationalite-en-valeur'],
    critiques: [
      "Poussée à son terme, la généralisation de ce type d'action est précisément ce que Horkheimer et Adorno dénonceront sous le nom de raison instrumentale, devenue une force de domination plutôt qu'un simple outil.",
      "Le calcul suppose une information complète sur les moyens disponibles et leurs conséquences, une condition rarement remplie dans les situations réelles.",
    ],
    evolution: [
      { p: '1922', f: "Weber formule la rationalité instrumentale comme moteur de la rationalisation occidentale." },
      { p: '1947', f: "Horkheimer et Adorno la radicalisent en raison instrumentale, devenue elle-même une force de domination." },
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
    associes: ['blasement-urbain', 'mise-en-scene-de-soi', 'configuration', 'dyade', 'triade', 'conflit', 'secret'],
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
    associes: ['formes-de-socialisation', 'anomie', 'mise-en-scene-de-soi', 'metropole-et-vie-mentale', 'economie-monetaire'],
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
  'dyade': {
    detaille: [
      "Une dyade — un groupe à deux — n'a pas d'existence au-delà des deux personnes qui la composent : contrairement à une organisation, elle ne se survit pas à elle-même si l'une des deux se retire, elle disparaît avec elle.",
      "Cette fragilité constitutive rend chaque membre irremplaçable et pleinement responsable de la relation : aucun tiers ne peut diluer un désaccord, aucune majorité ne peut trancher, ce qui donne à la dyade une intensité que les groupes plus grands n'ont pas.",
    ],
    origine: {
      oeuvre: 'Sociologie. Études sur les formes de la socialisation',
      annee: '1908',
      contexte:
        "Simmel ouvre son chapitre sur la quantité des membres en posant le cas le plus simple, pour en tirer un principe général : le nombre change la forme, pas seulement la taille.",
    },
    exemples: [
      "Un binôme de travail où chaque décision engage directement les deux personnes, sans possibilité de reporter un désaccord sur un tiers absent.",
    ],
    oeuvres: [
      { y: '1908', t: 'Sociologie. Études sur les formes de la socialisation, chapitre II' },
    ],
    associes: ['formes-de-socialisation', 'triade'],
    opposes: ['systeme-social'],
    critiques: [
      "Le modèle reste très formel : deux dyades de même structure peuvent vivre des rapports de pouvoir très inégaux selon qui les compose.",
      "L'analyse dit peu de ce qui se passe quand une dyade se transforme en triade par l'arrivée d'un enfant ou d'un associé, plutôt que par simple addition.",
    ],
    evolution: [
      { p: '1908', f: "Simmel isole la dyade comme forme la plus simple et la plus fragile de socialisation." },
      { p: '1950', f: "La théorie des petits groupes, en psychologie sociale américaine, reprend systématiquement la distinction dyade/triade." },
    ],
  },
  'triade': {
    detaille: [
      "L'arrivée d'un troisième membre transforme radicalement une relation : la dyade fragile devient une structure qui peut, en principe, survivre au départ de n'importe lequel de ses membres — le groupe acquiert une existence propre, distincte de chacun.",
      "La triade rend possibles des positions inédites : l'arbitre, qui tranche sans être partie ; le tiers profiteur, qui tire avantage de la discorde des deux autres ; et la stratégie de diviser pour régner, qui n'a aucun sens à deux.",
    ],
    origine: {
      oeuvre: 'Sociologie. Études sur les formes de la socialisation',
      annee: '1908',
      contexte:
        "Simmel poursuit l'analyse entamée avec la dyade en ajoutant un membre, pour montrer que le passage de deux à trois n'est pas une simple addition mais un changement de nature.",
    },
    exemples: [
      "Deux enfants qui se disputent un jouet changent de comportement dès qu'un parent entre dans la pièce, non parce qu'il intervient, mais parce que sa seule présence de tiers modifie la dispute.",
    ],
    oeuvres: [
      { y: '1908', t: 'Sociologie. Études sur les formes de la socialisation, chapitre II' },
    ],
    associes: ['formes-de-socialisation', 'dyade'],
    opposes: ['systeme-social'],
    critiques: [
      "Le passage de deux à trois est présenté comme la rupture décisive, alors que l'ajout d'un quatrième ou d'un cinquième membre transforme aussi la dynamique, sans que Simmel ne le formalise autant.",
      "L'analyse des rôles de tiers (arbitre, profiteur, diviseur) reste largement illustrative, sans typologie systématique des conditions qui font apparaître l'un plutôt que l'autre.",
    ],
    evolution: [
      { p: '1908', f: "Simmel formalise les positions inédites qu'ouvre le passage de deux à trois membres." },
      { p: '1956', f: "Caplow développe une théorie des coalitions en triade, formalisant mathématiquement les intuitions de Simmel." },
    ],
  },
  'sociabilite': {
    detaille: [
      "La sociabilité, au sens strict que lui donne Simmel, est la forme pure de l'association : on s'y réunit non pour un but extérieur — affaires, entraide, procréation — mais pour le seul plaisir de la forme sociale elle-même, comme dans un jeu.",
      "Ce jeu a ses propres règles de tact : chacun y laisse à la porte ses intérêts personnels sérieux, sa fortune, ses soucis, pour ne présenter qu'une version stylisée et agréable de lui-même, au bénéfice de la conversation commune.",
    ],
    origine: {
      oeuvre: 'La sociabilité, exemple de sociologie pure',
      annee: '1910',
      contexte:
        "Simmel cherche un cas limite pour illustrer sa méthode : isoler la forme sociale de tout contenu, en prenant l'exemple d'une interaction qui n'a justement plus aucun contenu sérieux à faire valoir.",
    },
    exemples: [
      "Un dîner mondain où évoquer ouvertement son salaire ou ses ennuis de santé briserait immédiatement l'atmosphère légère que tous s'efforcent tacitement de maintenir.",
    ],
    oeuvres: [
      { y: '1910', t: 'La sociabilité, exemple de sociologie pure' },
      { y: '1917', t: 'Grundfragen der Soziologie' },
    ],
    associes: ['formes-de-socialisation', 'mise-en-scene-de-soi'],
    opposes: ['rationalite-instrumentale'],
    critiques: [
      "Le modèle décrit surtout la sociabilité bourgeoise de salon, dans un contexte social et historique précis, plus qu'une forme universelle.",
      "La distinction entre sociabilité pure et interaction intéressée reste difficile à tracer dans les faits, où les deux se mêlent souvent.",
    ],
    evolution: [
      { p: '1910', f: "Simmel isole la sociabilité comme cas limite de sa sociologie des formes." },
      { p: '1959', f: "Goffman en retrouve l'esprit dans son analyse du travail de figuration en public." },
    ],
  },
  'distance-sociale': {
    detaille: [
      "Toute relation sociale suppose, selon Simmel, un dosage précis entre proximité et éloignement : ni la fusion totale ni l'indifférence complète ne permettent une relation viable, qui se règle toujours sur une distance particulière, propre à chaque type de lien.",
      "Cette distance n'est pas seulement spatiale : elle est d'abord sociale, mesurable dans le degré d'intimité, de familiarité et de réciprocité qu'une relation autorise, indépendamment de la proximité physique réelle des personnes concernées.",
    ],
    origine: {
      oeuvre: 'Sociologie. Études sur les formes de la socialisation',
      annee: '1908',
      contexte:
        "Simmel développe cette idée en creux de sa digression sur l'étranger, qui incarne le cas limite d'une distance sociale maintenue malgré la proximité physique.",
    },
    exemples: [
      "Un supérieur hiérarchique qui tutoie ses subordonnés sans que cela réduise la distance réelle qui organise leur relation professionnelle.",
    ],
    oeuvres: [
      { y: '1908', t: 'Sociologie. Études sur les formes de la socialisation' },
    ],
    associes: ['etranger', 'croisement-des-cercles-sociaux'],
    opposes: ['solidarite-mecanique'],
    critiques: [
      "Le concept reste largement qualitatif chez Simmel, ce qui a nécessité, pour l'opérationnaliser statistiquement, les échelles construites bien plus tard par Bogardus.",
      "Mesurer une distance suppose de choisir des indicateurs (fréquentation, mariage, voisinage) qui peuvent donner des résultats très différents pour une même relation.",
    ],
    evolution: [
      { p: '1908', f: "Simmel pose la distance sociale comme dosage constitutif de toute relation." },
      { p: '1925', f: "Bogardus construit une échelle de mesure de la distance sociale entre groupes ethniques, encore utilisée aujourd'hui." },
    ],
  },
  'etranger': {
    detaille: [
      "L'étranger, chez Simmel, n'est pas simplement celui qui vient d'ailleurs et repart : c'est celui qui vient d'ailleurs et reste, occupant une position sociale précise, faite à la fois de proximité (il participe à la vie du groupe) et de distance (il n'en partage jamais totalement les évidences).",
      "Cette position paradoxale lui donne une objectivité que les membres nés dans le groupe n'ont pas : n'étant lié à aucune des factions internes par une histoire commune, il peut recevoir des confidences qu'aucun proche ne recevrait, et voir ce que l'habitude rend invisible aux autres.",
    ],
    origine: {
      oeuvre: 'Sociologie. Études sur les formes de la socialisation',
      annee: '1908',
      contexte:
        "Simmel s'appuie sur la figure historique du marchand juif en Europe, durablement installé dans des communautés dont il ne partageait ni la religion ni les origines.",
    },
    exemples: [
      "Un nouveau venu dans une équipe, encore consulté des années après son arrivée pour son regard neuf sur des habitudes que les autres ne voient plus.",
    ],
    oeuvres: [
      { y: '1908', t: "Sociologie. Études sur les formes de la socialisation, Excursus sur l'étranger" },
    ],
    associes: ['distance-sociale', 'formes-de-socialisation'],
    opposes: ['solidarite-mecanique'],
    critiques: [
      "Le portrait reste daté sur un cas précis, le commerçant juif européen, dont la généralisation à toute figure de l'étranger a été discutée.",
      "La position décrite suppose un groupe suffisamment stable pour que l'écart de l'étranger s'y voie ; elle décrit mal les sociétés où la mobilité rend cette frontière floue.",
    ],
    evolution: [
      { p: '1908', f: "Simmel formule la position paradoxale de l'étranger, proche et distant à la fois." },
      { p: '1928', f: "Park, à Chicago, en tire l'homme marginal, tiraillé entre deux mondes culturels sans appartenir pleinement à aucun." },
      { p: '1944', f: "Schütz prolonge l'analyse pour penser la situation de l'immigrant récent, confronté à un monde social qui ne va plus de soi." },
    ],
  },
  'secret': {
    detaille: [
      "Le secret n'est pas seulement une absence d'information : c'est une forme sociale à part entière, qui organise des relations aussi sûrement que ce qui se dit ouvertement — un groupe se définit autant par ce qu'il cache que par ce qu'il montre.",
      "Simmel distingue le secret partagé, qui lie ceux qui le détiennent en excluant les autres, de la société secrète, une organisation entière structurée autour de la protection d'un contenu caché, avec sa propre hiérarchie et ses propres rites d'initiation.",
    ],
    origine: {
      oeuvre: 'Le Secret et les sociétés secrètes',
      annee: '1906',
      contexte:
        "Simmel étudie des organisations aussi diverses que la franc-maçonnerie et des sociétés politiques clandestines pour en tirer une théorie générale de la fonction sociale du secret.",
    },
    exemples: [
      "Une entreprise dont certains projets restent confidentiels même en interne, ce qui crée entre les quelques initiés un lien que le reste de l'organisation n'a pas.",
    ],
    oeuvres: [
      { y: '1906', t: 'Le Secret et les sociétés secrètes' },
      { y: '1908', t: 'Sociologie. Études sur les formes de la socialisation' },
    ],
    associes: ['formes-de-socialisation', 'distance-sociale'],
    opposes: ['fait-social'],
    critiques: [
      "L'analyse dit peu de ce qui arrive quand un secret est éventé, moment pourtant décisif pour la forme sociale qu'il organisait.",
      "Elle traite le secret d'abord comme un lien positif, en minorant les usages de domination et de manipulation qu'il permet aussi.",
    ],
    evolution: [
      { p: '1906', f: "Simmel théorise le secret comme forme sociale et fonde l'étude des sociétés secrètes." },
      { p: '1963', f: "Goffman prolonge l'analyse avec la gestion de l'information discréditante dans Stigmate." },
    ],
  },
  'conflit': {
    detaille: [
      "Contre l'idée d'une société tenue seulement par l'harmonie, Simmel montre que le conflit est lui-même une forme d'association : il suppose un engagement réciproque, une reconnaissance de l'autre comme partie prenante, ce qu'une pure indifférence n'exigerait pas.",
      "Le conflit peut même renforcer la cohésion interne d'un groupe, en resserrant ses membres face à un adversaire commun, et clarifier des positions qu'une coexistence sans heurt aurait laissées dans le flou.",
    ],
    origine: {
      oeuvre: 'Sociologie. Études sur les formes de la socialisation',
      annee: '1908',
      contexte:
        "Simmel écrit alors que la sociologie naissante pense surtout la société par l'ordre et la coopération ; il choisit délibérément d'étudier le conflit comme une forme aussi fondamentale que les autres.",
    },
    exemples: [
      "Deux départements universitaires rivaux pour des postes et des crédits, dont la compétition ouverte structure et anime la vie académique plus qu'elle ne la paralyse.",
    ],
    oeuvres: [
      { y: '1908', t: 'Sociologie. Études sur les formes de la socialisation, chapitre IV' },
    ],
    associes: ['formes-de-socialisation', 'conflit-de-classes'],
    opposes: ['solidarite-organique'],
    critiques: [
      "L'idée d'un conflit fonctionnellement bénéfique a pu servir à minimiser des conflits réellement destructeurs, aux enjeux de pouvoir très inégaux.",
      "Coser, en la reprenant, a été accusé de trop lisser le conflit en fonction sociale utile, perdant de vue ce qu'il peut avoir d'irréductiblement destructeur.",
    ],
    evolution: [
      { p: '1908', f: "Simmel formule le conflit comme forme de sociation à part entière." },
      { p: '1956', f: "Coser publie Les Fonctions du conflit social et systématise la thèse pour la sociologie américaine." },
    ],
  },
  'mode': {
    detaille: [
      "La mode répond à deux besoins contradictoires à la fois : le besoin d'imiter, qui rassure en rattachant l'individu à un groupe, et le besoin de se distinguer, qui affirme sa singularité. Elle vit de leur tension permanente, jamais de leur résolution.",
      "Ce mécanisme la condamne à une obsolescence programmée : dès qu'une mode se généralise, elle cesse de distinguer ceux qui l'avaient adoptée les premiers, qui doivent alors s'en détourner pour retrouver la distinction recherchée — ce qui relance aussitôt le cycle.",
    ],
    origine: {
      oeuvre: 'Philosophie de la mode',
      annee: '1905',
      contexte:
        "Simmel observe la diffusion rapide des modes vestimentaires dans les grandes villes européennes, portée par une bourgeoisie urbaine en quête de distinction sociale.",
    },
    exemples: [
      "Un prénom rare devenu très commun en une décennie, ce qui pousse les parents en quête d'originalité à s'en détourner à leur tour.",
    ],
    oeuvres: [
      { y: '1905', t: 'Philosophie de la mode' },
      { y: '1900', t: "Philosophie de l'argent" },
    ],
    associes: ['individualite', 'distance-sociale'],
    opposes: ['egalisation-des-conditions'],
    critiques: [
      "L'analyse suppose une société suffisamment inégalitaire pour que l'imitation ait un sens ; elle décrit mal les sociétés très égalitaires où la fonction distinctive de la mode s'affaiblit.",
      "Le modèle reste centré sur l'habillement bourgeois occidental, moins évident à transposer à d'autres régimes de la mode.",
    ],
    evolution: [
      { p: '1904', f: "Veblen, aux États-Unis, décrit une version voisine sous le nom de consommation ostentatoire." },
      { p: '1905', f: "Simmel formule le mécanisme d'imitation et de distinction propre à la mode." },
      { p: '1979', f: "Bourdieu relie la mode à la logique plus générale de la distinction sociale par le goût." },
    ],
  },
  'individualite': {
    detaille: [
      "Simmel distingue deux formes historiques d'individualisme. La première, née au XVIIIᵉ siècle, est quantitative et égalitaire : chaque individu compte également, indépendamment de ce qui le distingue des autres. La seconde, née au XIXᵉ siècle romantique, est qualitative : ce qui compte, c'est précisément ce qui rend chacun incomparable à tout autre.",
      "Cette seconde forme, l'individualité proprement dite, se nourrit paradoxalement de la vie moderne qu'elle semble menacer : plus les cercles sociaux auxquels on appartient se multiplient et se croisent, plus la combinaison qui en résulte devient unique.",
    ],
    origine: {
      oeuvre: "Philosophie de l'argent",
      annee: '1900',
      contexte:
        "Simmel développe la distinction en observant comment l'économie monétaire, en rendant les individus interchangeables sur le plan économique, accentue en retour leur besoin de se distinguer sur d'autres plans.",
    },
    exemples: [
      "Deux personnes au même métier, dans la même ville, qui ne se ressemblent en rien une fois considérées la totalité de leurs engagements associatifs, culturels et familiaux.",
    ],
    oeuvres: [
      { y: '1900', t: "Philosophie de l'argent" },
      { y: '1917', t: 'Grundfragen der Soziologie' },
    ],
    associes: ['mode', 'tragedie-de-la-culture'],
    opposes: ['individualisme-moral'],
    critiques: [
      "La distinction entre les deux individualismes reste surtout descriptive : Simmel n'explique pas complètement pourquoi la seconde succède à la première plutôt qu'elle ne s'y ajoute.",
      "L'individualité qualitative valorisée par Simmel suppose des ressources — temps, argent, éducation — inégalement disponibles, ce qu'il thématise peu.",
    ],
    evolution: [
      { p: '1900', f: "Simmel distingue individualisme quantitatif et qualitatif dans Philosophie de l'argent." },
      { p: '1908', f: "Le croisement des cercles sociaux en fournit le mécanisme structurel." },
      { p: '1983', f: "Lipovetsky décrit une troisième forme, plus narcissique, dans L'Ère du vide." },
    ],
  },
  'croisement-des-cercles-sociaux': {
    detaille: [
      "Dans une société traditionnelle, l'individu naît dans un seul cercle englobant — sa famille, son village, sa caste — qui organise l'essentiel de son existence. Dans la société moderne, il appartient simultanément à plusieurs cercles indépendants : famille, profession, loisirs, convictions, chacun recrutant ses membres selon une logique différente.",
      "C'est la combinaison particulière de ces appartenances, propre à chaque individu, qui produit sa position sociale unique : deux personnes peuvent partager un cercle sans en partager aucun autre, ce qu'une société à cercle unique ne permettait pas.",
    ],
    origine: {
      oeuvre: 'Sociologie. Études sur les formes de la socialisation',
      annee: '1908',
      contexte:
        "Simmel observe la multiplication des associations, clubs et cercles professionnels dans les grandes villes allemandes de son temps, contrastée avec la structure des sociétés rurales et traditionnelles.",
    },
    exemples: [
      "Un salarié syndiqué, pratiquant d'un sport collectif et membre d'une chorale appartient à trois cercles dont aucun ne recoupe entièrement les deux autres.",
    ],
    oeuvres: [
      { y: '1908', t: 'Sociologie. Études sur les formes de la socialisation, chapitre VI' },
    ],
    associes: ['individualite', 'distance-sociale'],
    opposes: ['solidarite-mecanique'],
    critiques: [
      "Le modèle suppose une liberté de choix des cercles d'appartenance que les inégalités sociales et économiques limitent en pratique fortement.",
      "Il dit peu des cas où plusieurs cercles se recoupent presque entièrement, comme dans certains milieux professionnels très homogènes.",
    ],
    evolution: [
      { p: '1908', f: "Simmel formule le croisement des cercles sociaux comme trait distinctif de la modernité." },
      { p: '1954', f: "La sociologie des réseaux sociaux, naissante, formalise mathématiquement l'intuition des cercles qui se recoupent partiellement." },
    ],
  },
  'culture-objective': {
    detaille: [
      "La culture objective regroupe tout ce qu'une société a produit et accumulé — livres, œuvres d'art, institutions, techniques — sous une forme désormais indépendante de la conscience de qui l'a créé, disponible en principe à quiconque veut se l'approprier.",
      "Cette accumulation ne cesse de croître, et croît même plus vite que la capacité de n'importe quel individu à en absorber une part significative : la culture objective échappe ainsi progressivement à l'échelle humaine qui l'a pourtant produite.",
    ],
    origine: {
      oeuvre: "Philosophie de l'argent",
      annee: '1900',
      contexte:
        "Simmel observe que l'économie monétaire accélère la production et la circulation des objets culturels, en les détachant toujours davantage de la relation personnelle entre créateur et destinataire.",
    },
    exemples: [
      "Un logiciel utilisé quotidiennement par des millions de personnes qui n'en comprennent individuellement qu'une infime fraction du fonctionnement réel.",
    ],
    oeuvres: [
      { y: '1900', t: "Philosophie de l'argent" },
      { y: '1911', t: 'Le Concept et la tragédie de la culture' },
    ],
    associes: ['culture-subjective', 'tragedie-de-la-culture'],
    opposes: ['habitus'],
    critiques: [
      "La distinction entre culture objective et subjective reste difficile à mesurer empiriquement, faute d'indicateur autre qu'introspectif.",
      "Le diagnostic surestime peut-être l'unité de la « culture » d'une époque, qui recouvre en réalité des productions très hétérogènes et concurrentes.",
    ],
    evolution: [
      { p: '1900', f: "Simmel esquisse la distinction entre culture objective et subjective." },
      { p: '1911', f: "Il la développe pleinement dans son essai sur la tragédie de la culture." },
      { p: '1944', f: "Adorno et Horkheimer en retrouvent une version critique dans leur diagnostic de l'industrie culturelle." },
    ],
  },
  'culture-subjective': {
    detaille: [
      "La culture subjective est le degré effectif de développement personnel qu'un individu tire de la culture objective à laquelle il a accès — la différence entre disposer d'une bibliothèque et être réellement cultivé par ce qu'elle contient.",
      "Simmel en fait le véritable but de toute culture : accumuler des œuvres n'a de sens que si elles contribuent, en retour, à l'épanouissement de qui les reçoit — un but que la croissance même de la culture objective rend de plus en plus difficile à atteindre.",
    ],
    origine: {
      oeuvre: "Philosophie de l'argent",
      annee: '1900',
      contexte:
        "Simmel s'inquiète que l'accumulation d'objets culturels, portée par l'économie monétaire, ne se traduise plus automatiquement par un enrichissement personnel comparable.",
    },
    exemples: [
      "Un accès illimité à des cours en ligne qui n'entraîne, chez la plupart de ceux qui y souscrivent, aucune transformation personnelle proportionnée à l'offre disponible.",
    ],
    oeuvres: [
      { y: '1900', t: "Philosophie de l'argent" },
      { y: '1911', t: 'Le Concept et la tragédie de la culture' },
    ],
    associes: ['culture-objective', 'individualite'],
    opposes: ['industrie-culturelle'],
    critiques: [
      "Le concept suppose un idéal de cultivation personnelle (Bildung) propre à la bourgeoisie éduquée allemande de l'époque, plus qu'une norme universelle.",
      "Il reste difficile de départager, dans un enrichissement personnel donné, ce qui revient à la culture objective disponible et ce qui tient à d'autres facteurs (disposition, milieu, hasard des rencontres).",
    ],
    evolution: [
      { p: '1900', f: "Simmel distingue culture objective et subjective dans Philosophie de l'argent." },
      { p: '1944', f: "L'industrie culturelle, décrite par Adorno et Horkheimer, radicalise le diagnostic : la culture de masse ne cultive plus, elle occupe." },
    ],
  },
  'tragedie-de-la-culture': {
    detaille: [
      "La tragédie de la culture désigne, pour Simmel, un écart structurel et croissant entre la culture objective — toujours plus vaste, produite en collaboration par des générations entières — et la culture subjective de chaque individu, dont les capacités d'appropriation restent, elles, à peu près constantes.",
      "Le mot tragédie n'est pas choisi au hasard : ce n'est pas un accident réparable, mais une conséquence nécessaire du fait même que la culture, pour exister, doit se détacher de son créateur et prendre une forme objective — cette objectivation même est ce qui, ensuite, échappe à quiconque.",
    ],
    origine: {
      oeuvre: 'Le Concept et la tragédie de la culture',
      annee: '1911',
      contexte:
        "Simmel écrit cet essai vers la fin de sa vie, dans une Allemagne où la production intellectuelle, scientifique et artistique atteint une ampleur inédite, sans que l'expérience de la cultivation individuelle ne semble progresser au même rythme.",
    },
    exemples: [
      "Une profession si spécialisée que sa propre littérature scientifique double avant qu'un seul de ses praticiens n'ait pu en lire la production précédente.",
    ],
    oeuvres: [
      { y: '1911', t: 'Le Concept et la tragédie de la culture' },
    ],
    associes: ['culture-objective', 'culture-subjective'],
    opposes: ['loi-des-trois-etats'],
    critiques: [
      "Le diagnostic reste largement spéculatif, sans mesure empirique de l'écart qu'il postule entre culture objective et subjective.",
      "Il suppose une culture unifiée dont chaque individu serait également l'héritier, quand l'accès réel à la culture objective reste très inégalement réparti.",
    ],
    evolution: [
      { p: '1911', f: "Simmel formule la tragédie de la culture comme conséquence nécessaire de l'objectivation culturelle." },
      { p: '1930', f: "Freud, dans Malaise dans la civilisation, développe un diagnostic voisin sur le prix psychique de la civilisation." },
      { p: '1947', f: "Horkheimer et Adorno radicalisent le diagnostic dans une version plus politique et critique." },
    ],
  },
  'economie-monetaire': {
    detaille: [
      "L'argent n'est pas, pour Simmel, un simple instrument neutre d'échange : c'est une forme sociale à part entière, qui transforme profondément la manière dont les individus se représentent la valeur et se rapportent les uns aux autres.",
      "Sa puissance tient à sa capacité à tout réduire à une même échelle quantitative : deux choses qui n'avaient rien de comparable — un tableau, un service rendu, une heure de travail — deviennent commensurables dès qu'on leur attribue un prix, ce qui nivelle des qualités jusque-là incommensurables.",
    ],
    origine: {
      oeuvre: "Philosophie de l'argent",
      annee: '1900',
      contexte:
        "Œuvre majeure de Simmel, où il analyse philosophiquement et sociologiquement ce que la généralisation de l'échange monétaire change à l'expérience humaine du monde, bien au-delà de la seule économie.",
    },
    exemples: [
      "Un dédommagement financier proposé pour un préjudice moral, qui suppose de traduire en une somme précise une souffrance qui n'avait, à l'origine, aucune commune mesure avec l'argent.",
    ],
    oeuvres: [
      { y: '1900', t: "Philosophie de l'argent" },
    ],
    associes: ['blasement-urbain', 'culture-objective'],
    opposes: ['capital-symbolique'],
    critiques: [
      "L'analyse reste très générale sur « l'argent », sans toujours distinguer les monnaies et les systèmes financiers très différents apparus depuis 1900.",
      "Elle dit peu des inégalités d'accès à cette même économie monétaire, qui n'affecte pas également tous les groupes sociaux qu'elle traverse.",
    ],
    evolution: [
      { p: '1900', f: "Simmel publie Philosophie de l'argent et analyse le nivellement des valeurs qu'opère l'économie monétaire." },
      { p: '1904', f: "Weber développe, en parallèle, sa propre analyse de la rationalisation économique moderne." },
      { p: '1972', f: "Bourdieu, avec le capital symbolique, décrit à l'inverse des formes de valeur qui résistent précisément à cette réduction monétaire." },
    ],
  },
  'metropole-et-vie-mentale': {
    detaille: [
      "Au-delà du seul blasement, la grande ville impose à ses habitants un mode de vie entièrement réorganisé autour du calcul, de la ponctualité et de la réserve : l'intellect, plus rapide et plus adaptable que l'affect, devient l'organe de défense privilégié contre la surcharge d'impressions urbaines.",
      "Cette intellectualisation n'est pas un hasard : Simmel la relie directement à l'économie monétaire, qui a fait de la ville son terrain d'élection et impose, elle aussi, un rapport calculateur et impersonnel aux choses comme aux gens.",
    ],
    origine: {
      oeuvre: "Les Grandes villes et la vie de l'esprit",
      annee: '1903',
      contexte:
        "Simmel prononce ce texte, devenu son plus célèbre, dans une Allemagne dont les grandes villes connaissent une croissance démographique et économique sans précédent.",
    },
    exemples: [
      "Une ville où chaque rendez-vous se cale à la minute près sur une horloge partagée, condition sans laquelle la coordination de millions de déplacements individuels s'effondrerait aussitôt.",
    ],
    oeuvres: [
      { y: '1903', t: "Les Grandes villes et la vie de l'esprit" },
      { y: '1900', t: "Philosophie de l'argent" },
    ],
    associes: ['blasement-urbain', 'economie-monetaire'],
    opposes: ['solidarite-mecanique'],
    critiques: [
      "Le texte demeure impressionniste et daté sur le Berlin du tournant du siècle, sans données systématiques à l'appui.",
      "Il présente l'intellectualisation urbaine comme une adaptation à peu près uniforme, sans distinguer selon la position sociale de qui l'habite.",
    ],
    evolution: [
      { p: '1900', f: "Philosophie de l'argent pose les bases de l'analyse du rapport entre argent et vie mentale moderne." },
      { p: '1903', f: "Simmel prononce sa conférence sur la métropole, qui en devient l'application la plus célèbre." },
      { p: '1938', f: "Wirth reformule la thèse pour la sociologie urbaine américaine dans Urbanism as a Way of Life." },
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
    associes: ['anomie', 'solidarite-organique', 'physique-sociale', 'religion-comme-fait-social', 'representations-collectives'],
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
    associes: ['fait-social', 'tension-anomique', 'suicide-anomique'],
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
    associes: ['fait-social', 'systeme-social', 'solidarite-mecanique', 'division-du-travail-social'],
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
  'solidarite-mecanique': {
    detaille: [
      "Dans une société à solidarité mécanique, les individus se ressemblent bien plus qu'ils ne diffèrent : mêmes croyances, mêmes pratiques, une conscience collective forte qui laisse peu de place à la personnalité individuelle.",
      "Le lien social y tient à la ressemblance elle-même, sans avoir besoin d'aucune interdépendance fonctionnelle : chacun pourrait, en principe, remplacer n'importe quel autre membre du groupe, ce qui rend toute atteinte à la norme commune vécue comme une menace pour tous.",
    ],
    origine: {
      oeuvre: 'De la division du travail social',
      annee: '1893',
      contexte:
        "Durkheim construit ce type comme pôle de comparaison historique, à partir de l'étude des sociétés dites segmentaires, peu différenciées par la division du travail.",
    },
    exemples: [
      "Une petite communauté rurale où tout manquement à une coutume locale se sait et se commente immédiatement, faute d'anonymat possible.",
    ],
    oeuvres: [
      { y: '1893', t: 'De la division du travail social, livre I' },
    ],
    associes: ['solidarite-organique', 'conscience-collective'],
    opposes: ['individualisme-moral'],
    critiques: [
      "L'ethnographie a montré que les sociétés dites simples sont souvent très différenciées, ce qui affaiblit la prémisse même du type.",
      "Le droit répressif, censé indiquer cette forme de solidarité, existe aussi dans des sociétés très différenciées, ce qui brouille l'indicateur choisi par Durkheim.",
    ],
    evolution: [
      { p: '1893', f: "Durkheim formule le type en contrepoint de la solidarité organique." },
      { p: 'XXᵉ siècle', f: "L'anthropologie structurale nuance la thèse d'une homogénéité totale des sociétés dites simples." },
    ],
  },
  'conscience-collective': {
    detaille: [
      "La conscience collective désigne l'ensemble des croyances et des sentiments communs à la moyenne des membres d'une société, un ensemble qui a sa vie propre, distincte de celle de chaque individu qui la porte à un moment donné.",
      "Elle est particulièrement forte et englobante dans les sociétés à solidarité mécanique, où elle recouvre presque toute l'existence individuelle ; elle se rétrécit, sans disparaître, à mesure que la division du travail se développe et laisse davantage de place à la personnalité de chacun.",
    ],
    origine: {
      oeuvre: 'De la division du travail social',
      annee: '1893',
      contexte:
        "Durkheim en fait la base de la solidarité mécanique, avant de la retrouver, sous une forme transformée, dans son étude du sacré et de l'effervescence collective.",
    },
    exemples: [
      "Une minute de silence spontanément respectée par des inconnus dans un lieu public, sans qu'aucune autorité ne l'ait formellement imposée.",
    ],
    oeuvres: [
      { y: '1893', t: 'De la division du travail social' },
      { y: '1912', t: 'Les Formes élémentaires de la vie religieuse' },
    ],
    associes: ['solidarite-mecanique', 'representations-collectives'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "Le concept prête à la société une vie psychique propre, une hypothèse que la psychologie sociale ultérieure a jugée peu opératoire.",
      "Il explique mal comment un individu peut s'opposer à une norme collective qu'il est censé porter en lui.",
    ],
    evolution: [
      { p: '1893', f: "Durkheim formule le concept dans sa thèse sur la division du travail." },
      { p: '1912', f: "Les Formes élémentaires en font le produit de rituels collectifs précis plutôt qu'un donné permanent." },
      { p: '1961', f: "Moscovici lui substitue la notion de représentation sociale, plus dynamique et mieux outillée empiriquement." },
    ],
  },
  'representations-collectives': {
    detaille: [
      "Les représentations collectives sont les catégories et les images avec lesquelles une société pense et se pense elle-même — jusqu'aux catégories les plus abstraites, comme le temps, l'espace ou la causalité, que Durkheim tient pour d'origine sociale plutôt que purement individuelle.",
      "Elles se distinguent des représentations individuelles par leur origine et leur permanence : elles préexistent à chaque individu, qui les reçoit par l'éducation, et lui survivent une fois qu'il a disparu.",
    ],
    origine: {
      oeuvre: 'Représentations individuelles et représentations collectives',
      annee: '1898',
      contexte:
        "Durkheim répond aux psychologues qui réduisent le fait social à une addition de faits psychiques individuels, et revendique pour la sociologie un objet et une méthode propres.",
    },
    exemples: [
      "Le découpage du monde en catégories d'animaux « purs » et « impurs » dans certaines traditions religieuses, qui organise des pratiques bien après que leur origine s'est estompée.",
    ],
    oeuvres: [
      { y: '1898', t: 'Représentations individuelles et représentations collectives' },
      { y: '1903', t: 'De quelques formes primitives de classification (avec Marcel Mauss)' },
      { y: '1912', t: 'Les Formes élémentaires de la vie religieuse' },
    ],
    associes: ['conscience-collective', 'religion-comme-fait-social'],
    opposes: ['ideologie'],
    critiques: [
      "Le concept explique mal le changement des représentations dans le temps, plus centré sur leur transmission que sur leur transformation.",
      "Il prête à la société un pouvoir de catégorisation homogène que les sociétés complexes, traversées de représentations concurrentes, ne vérifient pas toujours.",
    ],
    evolution: [
      { p: '1898', f: "Durkheim distingue représentations individuelles et représentations collectives." },
      { p: '1903', f: "Avec Mauss, il étend l'idée aux classifications primitives du monde naturel." },
      { p: '1912', f: "Les Formes élémentaires en font l'origine sociale des catégories de l'entendement lui-même." },
      { p: '1961', f: "Moscovici retravaille la notion en représentations sociales, plus attentives à leur circulation et à leur transformation." },
    ],
  },
  'division-du-travail-social': {
    detaille: [
      "La division du travail social ne désigne pas seulement une organisation technique de la production : c'est, pour Durkheim, un fait social de premier ordre, qui transforme le mode même de cohésion d'une société, de la solidarité mécanique vers la solidarité organique.",
      "Cette transformation tient à la croissance de la densité morale et dynamique : plus les individus entrent en contact fréquent et intense les uns avec les autres, plus la concurrence pour occuper les mêmes fonctions devient insoutenable, et plus la spécialisation progresse comme issue à cette concurrence.",
    ],
    origine: {
      oeuvre: 'De la division du travail social',
      annee: '1893',
      contexte:
        "Thèse de doctorat de Durkheim, où il répond à une inquiétude de son temps : la spécialisation croissante du travail affaiblit-elle nécessairement le lien social, comme le craignaient plusieurs penseurs du XIXᵉ siècle ?",
    },
    exemples: [
      "Un même métier de menuisier qui, en un siècle, se scinde en dizaines de spécialités distinctes, de l'ébénisterie à la charpente industrielle.",
    ],
    oeuvres: [
      { y: '1893', t: 'De la division du travail social' },
    ],
    associes: ['solidarite-mecanique', 'solidarite-organique', 'densite-dynamique'],
    opposes: ['alienation'],
    critiques: [
      "Marx et Durkheim décrivent le même phénomène — la spécialisation du travail — pour en tirer des diagnostics opposés : source d'aliénation pour l'un, de solidarité pour l'autre, sans que l'un ne réfute vraiment l'autre empiriquement.",
      "Durkheim lui-même reconnaît, dans sa préface de 1902, que la division du travail peut aussi produire des formes « anormales » (anomique, forcée) qu'il faut distinguer de sa forme normale.",
    ],
    evolution: [
      { p: '1893', f: "Durkheim établit le lien entre division du travail et type de solidarité." },
      { p: '1902', f: "Il ajoute une préface distinguant les formes normale et anormales de la division du travail." },
      { p: '1867', f: "Marx, avant lui, avait déjà fait de la division du travail une source d'aliénation plutôt que de cohésion — un contraste que Durkheim connaît et discute." },
    ],
  },
  'integration-sociale': {
    detaille: [
      "L'intégration sociale mesure la force des liens qui rattachent un individu aux groupes auxquels il appartient — famille, religion, nation — et donc sa capacité à trouver, en dehors de lui-même, des raisons de continuer à vivre dans les moments difficiles.",
      "Durkheim en fait l'un des deux axes qui expliquent, selon lui, les variations du taux de suicide d'un groupe à l'autre : ni trop faible (suicide égoïste), ni excessive au point d'effacer l'individu (suicide altruiste).",
    ],
    origine: {
      oeuvre: 'Le Suicide',
      annee: '1897',
      contexte:
        "Durkheim compare les taux de suicide entre catégories religieuses, familiales et nationales, et cherche ce qui, au-delà des cas individuels, explique des régularités statistiques stables d'un groupe à l'autre.",
    },
    exemples: [
      "Les soldats mobilisés en temps de guerre affichent, selon les données que Durkheim mobilise, un taux de suicide inférieur à celui du temps de paix, malgré un danger de mort bien plus grand.",
    ],
    oeuvres: [
      { y: '1897', t: 'Le Suicide, livre II' },
    ],
    associes: ['regulation-sociale', 'suicide-egoiste', 'suicide-altruiste'],
    opposes: ['lutte-des-classes'],
    critiques: [
      "Le concept reste difficile à mesurer indépendamment de ses effets supposés, au risque d'un raisonnement circulaire.",
      "Il dit peu de la qualité des liens en cause : une intégration forte mais toxique n'est pas distinguée d'une intégration forte et soutenante.",
    ],
    evolution: [
      { p: '1897', f: "Durkheim en fait l'un des deux axes explicatifs du Suicide." },
      { p: '1951', f: "La sociologie américaine de la santé mentale reprend l'intégration sociale comme facteur protecteur mesurable." },
      { p: '2000', f: "Putnam relie une notion voisine, le capital social, au déclin de l'engagement associatif américain." },
    ],
  },
  'regulation-sociale': {
    detaille: [
      "La régulation sociale mesure le degré auquel les désirs et les attentes d'un individu sont bornés par des normes reconnues — qui fixent ce qu'il est légitime de vouloir, et ce qu'il est raisonnable d'espérer atteindre.",
      "C'est le second axe du Suicide, indépendant de l'intégration : une régulation trop faible libère des attentes sans limite (suicide anomique), une régulation trop forte enferme dans un avenir sans issue perceptible (suicide fataliste).",
    ],
    origine: {
      oeuvre: 'Le Suicide',
      annee: '1897',
      contexte:
        "Durkheim distingue cet axe de l'intégration pour expliquer des cas que le seul défaut de liens sociaux ne suffit pas à rendre compte, notamment les crises économiques et les booms soudains.",
    },
    exemples: [
      "Une entreprise en pleine expansion, où l'absence de repères de carrière stabilisés désoriente parfois davantage les employés qu'une période de stagnation prévisible.",
    ],
    oeuvres: [
      { y: '1897', t: 'Le Suicide, livre II' },
    ],
    associes: ['integration-sociale', 'suicide-anomique', 'suicide-fataliste'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "L'idée d'une régulation « juste », ni trop faible ni trop forte, suppose une norme implicite que Durkheim ne justifie jamais explicitement.",
      "Le concept reste plus développé pour son défaut (l'anomie) que pour son excès (le fatalisme), à peine esquissé par Durkheim lui-même.",
    ],
    evolution: [
      { p: '1897', f: "Durkheim formule la régulation comme second axe explicatif du Suicide." },
      { p: '1938', f: "Merton reprend l'anomie mais délaisse largement le pôle fataliste, resté marginal dans la suite du champ." },
    ],
  },
  'densite-morale': {
    detaille: [
      "La densité morale mesure l'intensité réelle des relations sociales entre les membres d'un groupe — la fréquence et la qualité de leurs échanges effectifs — plutôt que leur seul nombre ou leur proximité physique.",
      "Elle croît avec la densité matérielle (la concentration démographique) sans lui être identique : deux populations aussi denses physiquement peuvent avoir des vies collectives très différentes selon l'intensité réelle de leurs échanges.",
    ],
    origine: {
      oeuvre: 'De la division du travail social',
      annee: '1893',
      contexte:
        "Durkheim en fait, avec la densité dynamique, l'une des causes qui expliquent pourquoi la division du travail progresse dans certaines sociétés plus que dans d'autres.",
    },
    exemples: [
      "Un immeuble où les voisins se croisent tous les jours sans jamais échanger un mot, contre une résidence moins peuplée mais où circule une vraie vie de quartier.",
    ],
    oeuvres: [
      { y: '1893', t: 'De la division du travail social, livre II' },
    ],
    associes: ['densite-dynamique', 'division-du-travail-social'],
    opposes: ['blasement-urbain'],
    critiques: [
      "La distinction avec la densité matérielle reste difficile à opérationnaliser statistiquement, faute d'indicateur direct de la « vie morale » d'un groupe.",
      "Simmel, sur le même objet urbain, tire une conclusion opposée : la densité produit surtout une indifférence défensive, pas davantage de lien.",
    ],
    evolution: [
      { p: '1893', f: "Durkheim distingue densité morale et densité matérielle dans sa thèse." },
      { p: '1903', f: "Simmel, sur le même terrain urbain, propose une lecture concurrente avec le blasement des grandes villes." },
    ],
  },
  'densite-dynamique': {
    detaille: [
      "Durkheim emploie parfois « densité dynamique » et « densité morale » de façon presque interchangeable, mais le premier terme met l'accent sur ce qui accélère historiquement les contacts entre individus : le développement des voies de communication et de transport, qui rapproche des populations jusque-là séparées.",
      "C'est cette accélération qui, selon lui, intensifie la concurrence pour les mêmes ressources et les mêmes fonctions, et pousse ainsi à la spécialisation croissante que décrit la division du travail social.",
    ],
    origine: {
      oeuvre: 'De la division du travail social',
      annee: '1893',
      contexte:
        "Durkheim cherche une cause matérielle, observable et mesurable, à la progression historique de la division du travail, plutôt qu'une simple évolution des idées ou des besoins.",
    },
    exemples: [
      "Le développement du télégraphe puis du téléphone, qui multiplie en quelques décennies le nombre de transactions et d'échanges possibles entre des villes jusque-là faiblement reliées.",
    ],
    oeuvres: [
      { y: '1893', t: 'De la division du travail social, livre II, chapitre II' },
    ],
    associes: ['densite-morale', 'division-du-travail-social'],
    opposes: ['blasement-urbain'],
    critiques: [
      "Durkheim n'a jamais clairement stabilisé la distinction entre densité morale et densité dynamique, ce qui a nourri des lectures divergentes de son texte.",
      "Le lien causal entre accélération des contacts et spécialisation du travail reste postulé plus que démontré empiriquement dans le texte de 1893.",
    ],
    evolution: [
      { p: '1893', f: "Durkheim relie l'accélération des voies de communication et de transport à la progression de la division du travail." },
      { p: 'XXᵉ siècle', f: "La sociologie urbaine reprend l'idée pour penser les effets des réseaux de transport sur l'intégration métropolitaine." },
    ],
  },
  'suicide-anomique': {
    detaille: [
      "Le suicide anomique survient quand la régulation sociale se relâche brutalement, laissant les désirs sans limite reconnue — aussi bien dans une crise économique soudaine que dans un enrichissement trop rapide, qui déstabilise également les repères établis.",
      "Ce type illustre le mieux le paradoxe central de Durkheim : ce n'est pas le manque de moyens qui blesse, mais le dérèglement brutal des attentes, que la prospérité peut provoquer aussi sûrement que la crise.",
    ],
    origine: {
      oeuvre: 'Le Suicide',
      annee: '1897',
      contexte:
        "Durkheim observe que les taux de suicide augmentent aussi bien lors des crises économiques que lors de booms soudains, ce qu'aucune théorie centrée sur la seule pauvreté ne peut expliquer.",
    },
    exemples: [
      "Un veuvage brutal chez une personne jusque-là très encadrée par la vie conjugale, dont les repères quotidiens s'effondrent d'un coup sans qu'aucun nouveau cadre ne les remplace encore.",
    ],
    oeuvres: [
      { y: '1897', t: 'Le Suicide, livre II, chapitre V' },
    ],
    associes: ['anomie', 'regulation-sociale', 'suicide-egoiste'],
    opposes: ['suicide-fataliste'],
    critiques: [
      "Le type se recoupe largement avec le concept plus général d'anomie, au point que la distinction entre les deux reste parfois floue chez Durkheim lui-même.",
      "Les statistiques de suicide du XIXᵉ siècle, dont dépend toute la démonstration, sont d'une fiabilité inégale selon les pays comparés.",
    ],
    evolution: [
      { p: '1897', f: "Durkheim isole ce type à partir des variations de taux liées aux crises économiques et aux booms soudains." },
      { p: '1938', f: "Merton en généralise le mécanisme au-delà du seul suicide, vers la déviance en général." },
    ],
  },
  'suicide-egoiste': {
    detaille: [
      "Le suicide égoïste survient quand l'individu est insuffisamment rattaché à des groupes stables — famille, religion, nation — et se retrouve seul face aux épreuves de l'existence, sans le soutien que ces attaches procurent habituellement.",
      "Durkheim s'appuie sur des écarts statistiques restés célèbres : les protestants, dont la pratique religieuse est plus individuelle, se suicident davantage que les catholiques, dont la pratique est plus collective et encadrée ; les célibataires davantage que les personnes mariées.",
    ],
    origine: {
      oeuvre: 'Le Suicide',
      annee: '1897',
      contexte:
        "Durkheim compare systématiquement les taux de suicide entre confessions religieuses, situations familiales et nations européennes, pour isoler ce que l'intégration sociale explique à elle seule.",
    },
    exemples: [
      "Un retraité récemment isolé de ses anciens collègues et de sa famille éloignée, sans avoir retrouvé d'attaches sociales comparables depuis son départ à la retraite.",
    ],
    oeuvres: [
      { y: '1897', t: 'Le Suicide, livre II, chapitre II' },
    ],
    associes: ['integration-sociale', 'suicide-anomique'],
    opposes: ['suicide-altruiste'],
    critiques: [
      "L'écart entre protestants et catholiques, pierre angulaire de la démonstration, a été contesté par des relectures ultérieures des mêmes données statistiques.",
      "Le concept ne dit rien de la souffrance psychique individuelle, réduite à un simple déficit de liens mesurables.",
    ],
    evolution: [
      { p: '1897', f: "Durkheim isole ce type à partir des écarts confessionnels et familiaux observés dans ses données." },
      { p: '1951', f: "La sociologie de la santé mentale américaine reprend l'intégration sociale comme facteur protecteur, au-delà du seul suicide." },
    ],
  },
  'suicide-altruiste': {
    detaille: [
      "Le suicide altruiste est, à l'inverse du suicide égoïste, celui d'une intégration excessive : l'individu s'efface entièrement devant le groupe, au point que sa propre vie pèse moins, à ses yeux, que ce que le collectif attend de lui.",
      "Durkheim le trouve surtout dans les sociétés traditionnelles ou dans des institutions à très forte cohésion — l'armée notamment, où le taux de suicide dépasse alors celui de la population civile comparable.",
    ],
    origine: {
      oeuvre: 'Le Suicide',
      annee: '1897',
      contexte:
        "Durkheim observe des taux de suicide plus élevés chez les militaires que dans la population civile, un résultat qui contredit à première vue l'hypothèse d'un lien simple entre isolement et suicide.",
    },
    exemples: [
      "Un membre d'une organisation à très forte discipline collective qui met fin à ses jours après un échec vécu comme un déshonneur pour le groupe entier plus que pour lui-même.",
    ],
    oeuvres: [
      { y: '1897', t: 'Le Suicide, livre II, chapitre IV' },
    ],
    associes: ['integration-sociale', 'suicide-fataliste'],
    opposes: ['suicide-egoiste'],
    critiques: [
      "Le type reste le moins développé empiriquement des quatre, appuyé sur des données militaires que Durkheim discute plus qu'il ne les démontre pleinement.",
      "La frontière avec un sacrifice pleinement choisi, plutôt que subi, reste difficile à établir depuis l'extérieur.",
    ],
    evolution: [
      { p: '1897', f: "Durkheim isole ce type à partir des taux de suicide militaires." },
      { p: 'XXᵉ–XXIᵉ siècle', f: "Le concept est repris pour analyser des formes contemporaines de sacrifice extrême au nom d'un groupe ou d'une cause." },
    ],
  },
  'suicide-fataliste': {
    detaille: [
      "Le suicide fataliste, le plus brièvement traité des quatre types, survient quand la régulation sociale est si oppressante qu'elle ferme tout avenir concevable à l'individu qui la subit — l'excès inverse du suicide anomique.",
      "Durkheim le relègue à une note de bas de page, le jugeant peu significatif statistiquement pour son époque, mais des sociologues ultérieurs y ont vu une catégorie utile pour penser des situations d'enfermement total, au sens propre comme au figuré.",
    ],
    origine: {
      oeuvre: 'Le Suicide',
      annee: '1897',
      contexte:
        "Durkheim l'ajoute presque en passant, pour compléter symétriquement sa typologie plutôt que pour illustrer un phénomène qu'il jugeait numériquement important en France à son époque.",
    },
    exemples: [
      "Une personne détenue depuis très longtemps, dans un régime carcéral qui ne laisse entrevoir aucune perspective de libération ni de changement possible.",
    ],
    oeuvres: [
      { y: '1897', t: 'Le Suicide, livre II, note de bas de page' },
    ],
    associes: ['regulation-sociale', 'suicide-altruiste'],
    opposes: ['suicide-anomique'],
    critiques: [
      "Durkheim lui-même ne le développe pas, ce qui a longtemps fait douter de sa pertinence propre plutôt que d'un simple symétrique théorique.",
      "Le type reste très rarement mobilisé empiriquement, faute de données historiques comparables à celles utilisées pour les trois autres.",
    ],
    evolution: [
      { p: '1897', f: "Durkheim l'esquisse en note, pour compléter la symétrie de sa typologie." },
      { p: 'Fin XXᵉ siècle', f: "Des sociologues de l'institution carcérale et des régimes totalitaires réactivent le concept, longtemps resté marginal." },
    ],
  },
  'effervescence-collective': {
    detaille: [
      "Réunis en un même lieu, au même moment, autour d'un même objet d'attention, les individus peuvent atteindre un état d'exaltation collective qui dépasse largement ce que chacun ressentirait seul — une intensité qui donne au groupe le sentiment de sa propre force.",
      "Durkheim voit dans ce moment l'origine même du sacré : c'est cette énergie collective, ressentie comme extérieure et supérieure à chacun, que les sociétés projettent ensuite sur des objets, des symboles ou des dieux.",
    ],
    origine: {
      oeuvre: 'Les Formes élémentaires de la vie religieuse',
      annee: '1912',
      contexte:
        "Durkheim étudie le totémisme des sociétés aborigènes australiennes, jugées les plus simples connues, pour en tirer une théorie générale de l'origine du sacré et du lien social.",
    },
    exemples: [
      "Une manifestation dont les participants ressortent transformés, portés par une énergie collective qu'aucun d'eux n'aurait pu produire seul chez lui.",
    ],
    oeuvres: [
      { y: '1912', t: 'Les Formes élémentaires de la vie religieuse, livre II' },
    ],
    associes: ['sacre-et-profane', 'religion-comme-fait-social'],
    opposes: ['rationalite-instrumentale'],
    critiques: [
      "Le concept explique bien la naissance d'un sentiment collectif, moins bien sa cristallisation durable en institution stable.",
      "L'observation ethnographique dont il part a depuis été discutée et partiellement révisée par l'anthropologie australianiste.",
    ],
    evolution: [
      { p: '1912', f: "Durkheim formule le concept à partir de l'étude du totémisme australien." },
      { p: '1959', f: "Goffman en retrouve une version affaiblie dans les rituels ordinaires de l'interaction quotidienne." },
      { p: 'XXIᵉ siècle', f: "Le concept est repris pour analyser les grands rassemblements contemporains, sportifs comme politiques." },
    ],
  },
  'sacre-et-profane': {
    detaille: [
      "Toute religion connue distingue, selon Durkheim, deux domaines radicalement séparés : le sacré, entouré d'interdits et de rites protecteurs, et le profane, le domaine ordinaire de la vie où ces précautions n'ont pas cours.",
      "Ce qui rend un objet sacré ne tient à aucune propriété physique qui lui serait propre : n'importe quel objet — une pierre, un animal, un drapeau — peut devenir sacré si le groupe le charge de cette valeur, et cesser de l'être si le groupe s'en détourne.",
    ],
    origine: {
      oeuvre: 'Les Formes élémentaires de la vie religieuse',
      annee: '1912',
      contexte:
        "Durkheim pose cette distinction comme le critère le plus général pour définir la religion, avant même toute croyance en des dieux ou des esprits.",
    },
    exemples: [
      "Une tombe, simple parcelle de terre ailleurs, devient un lieu qu'on ne piétine pas et où l'on baisse spontanément la voix.",
    ],
    oeuvres: [
      { y: '1912', t: 'Les Formes élémentaires de la vie religieuse, livre I' },
    ],
    associes: ['effervescence-collective', 'religion-comme-fait-social'],
    opposes: ['desenchantement-du-monde'],
    critiques: [
      "La frontière entre sacré et profane s'avère, dans les faits, bien plus graduelle et mouvante que la coupure nette que Durkheim présente.",
      "Le critère reste largement formel : il dit qu'un objet est sacralisé sans expliquer pourquoi celui-ci plutôt qu'un autre l'a été.",
    ],
    evolution: [
      { p: '1912', f: "Durkheim pose la distinction comme critère universel du religieux." },
      { p: '1917', f: "Otto, indépendamment, développe une approche voisine avec l'idée du numineux." },
      { p: '1959', f: "Goffman retrouve une version profane du sacré dans le souci de face propre à toute interaction ordinaire." },
    ],
  },
  'religion-comme-fait-social': {
    detaille: [
      "Durkheim refuse d'expliquer la religion par son contenu de croyance, vrai ou faux : ce qui l'intéresse, c'est sa fonction sociale — la manière dont un culte rassemble un groupe, entretient sa cohésion et lui donne le sentiment de sa propre existence.",
      "Dans cette lecture, une société qui se rassemble, célèbre ses symboles et sanctionne leur profanation fait toujours quelque chose d'apparenté à de la religion, qu'elle invoque ou non un dieu — la religion devient un cas particulier d'un phénomène plus général, le culte que toute société rend à elle-même.",
    ],
    origine: {
      oeuvre: 'Les Formes élémentaires de la vie religieuse',
      annee: '1912',
      contexte:
        "Dernier grand ouvrage de Durkheim, où il choisit délibérément l'étude des sociétés qu'il juge les plus simples pour dégager, croit-il, la forme élémentaire — et donc la plus visible — du fait religieux.",
    },
    exemples: [
      "Un hymne national entonné en chœur lors d'une cérémonie officielle, qui célèbre moins un contenu précis que l'existence même du groupe qui le chante ensemble.",
    ],
    oeuvres: [
      { y: '1912', t: 'Les Formes élémentaires de la vie religieuse' },
    ],
    associes: ['fait-social', 'sacre-et-profane', 'effervescence-collective'],
    opposes: ['ideologie'],
    critiques: [
      "Marx voit dans la religion un instrument de domination de classe ; Durkheim y voit une expression authentique de la vie collective — les deux lectures s'opposent sans que l'une réfute vraiment l'autre.",
      "Réduire la religion à sa fonction sociale laisse de côté ce que les croyants eux-mêmes disent vivre, l'expérience du sacré comme telle.",
    ],
    evolution: [
      { p: '1912', f: "Durkheim formule sa théorie fonctionnelle et sociale de la religion." },
      { p: '1922–1935', f: "Marcel Mauss et le groupe de L'Année sociologique prolongent l'étude du don et du sacrifice dans le même esprit." },
      { p: '1966', f: "Berger et Luckmann relisent la thèse à la lumière d'une sociologie de la connaissance plus générale." },
    ],
  },
  'fonction-sociale': {
    detaille: [
      "Comprendre une institution, pour Durkheim, suppose deux questions distinctes : quelle cause l'a fait naître, et quel besoin collectif elle sert aujourd'hui. La fonction sociale répond à la seconde, indépendamment de l'origine historique parfois très différente de l'institution.",
      "Cette méthode fondera tout le courant fonctionnaliste après lui, avant que Merton n'en corrige un défaut : Durkheim tend à confondre fonction et cause, comme si le besoin social auquel répond une institution suffisait à expliquer son apparition.",
    ],
    origine: {
      oeuvre: 'De la division du travail social',
      annee: '1893',
      contexte:
        "Durkheim développe cette méthode pour expliquer la persistance de la division du travail, en distinguant sa cause (la densité dynamique croissante) de sa fonction (produire la solidarité organique).",
    },
    exemples: [
      "La peine judiciaire, née historiquement d'un désir de vengeance, remplit aujourd'hui la fonction sociale de réaffirmer publiquement la règle transgressée, quelle qu'ait été son origine.",
    ],
    oeuvres: [
      { y: '1893', t: 'De la division du travail social' },
      { y: '1895', t: 'Les Règles de la méthode sociologique' },
    ],
    associes: ['solidarite-organique', 'fonction-latente'],
    opposes: ['effets-pervers'],
    critiques: [
      "Le raisonnement fonctionnel confond souvent cause et effet : une institution qui sert un besoin n'est pas nécessairement née pour le servir.",
      "Boudon lui oppose des effets pervers, produits par l'agrégation de décisions individuelles sans qu'aucune fonction collective n'ait besoin d'être invoquée.",
    ],
    evolution: [
      { p: '1893', f: "Durkheim distingue cause et fonction dans l'explication d'une institution." },
      { p: '1895', f: "La méthode est généralisée comme règle de la sociologie explicative." },
      { p: '1949', f: "Merton distingue fonctions manifestes et latentes, et alerte contre la confusion entre fonction et cause que Durkheim laissait parfois subsister." },
    ],
  },
  'individualisme-moral': {
    detaille: [
      "Contre l'idée que l'individualisme dissoudrait nécessairement le lien social, Durkheim soutient qu'une société moderne peut s'unir précisément autour du respect de la personne humaine — un individualisme qui devient lui-même une croyance collective, presque religieuse, plutôt qu'un simple repli sur soi.",
      "Ce culte de l'individu se distingue nettement de l'individualisme utilitariste, centré sur l'intérêt personnel : ce que la société sacralise ici, ce n'est pas l'intérêt de chacun, mais la dignité humaine en général, défendue au nom du groupe tout entier.",
    ],
    origine: {
      oeuvre: "L'individualisme et les intellectuels",
      annee: '1898',
      contexte:
        "Durkheim répond, en pleine affaire Dreyfus, à ceux qui accusent les défenseurs des droits individuels de mettre en péril la cohésion nationale.",
    },
    exemples: [
      "Une mobilisation nationale pour la défense des droits d'une seule personne injustement condamnée, alors même que cette société n'a plus aucune croyance religieuse commune.",
    ],
    oeuvres: [
      { y: '1898', t: "L'individualisme et les intellectuels" },
      { y: '1912', t: 'Les Formes élémentaires de la vie religieuse' },
    ],
    associes: ['solidarite-organique', 'division-du-travail-social'],
    opposes: ['solidarite-mecanique'],
    critiques: [
      "Le concept semble résoudre par définition la tension qu'il pose : appeler « collectif » ce qui protège l'individu esquive la question de savoir si les deux peuvent réellement entrer en conflit.",
      "Durkheim écrit dans un contexte politique précis (l'affaire Dreyfus), ce qui a nourri le soupçon d'une thèse taillée pour les besoins de la cause plus qu'une observation neutre.",
    ],
    evolution: [
      { p: '1898', f: "Durkheim formule le concept en réponse aux critiques adressées aux défenseurs de Dreyfus." },
      { p: '1912', f: "Les Formes élémentaires généralisent l'idée d'un sacré qui peut se déplacer vers l'individu lui-même." },
      { p: '1983', f: "Lipovetsky décrit un individualisme contemporain plus narcissique, qu'il distingue de l'individualisme moral durkheimien." },
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
    associes: ['raison-instrumentale', 'ideologie', 'alienation', 'culture-de-masse', 'domination-culturelle', 'dialectique-des-lumieres'],
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
    associes: ['rationalisation', 'industrie-culturelle', 'alienation', 'rationalite-instrumentale', 'dialectique-des-lumieres', 'mimetisme'],
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
  'theorie-critique-et-traditionnelle': {
    detaille: [
      "Horkheimer distingue deux façons de faire de la théorie sociale. La théorie traditionnelle, sur le modèle des sciences de la nature, décrit son objet de l'extérieur, comme un donné neutre à observer et à prévoir, sans jamais s'interroger sur sa propre place dans ce qu'elle étudie.",
      "La théorie critique, au contraire, s'inclut elle-même dans son objet : elle sait qu'elle est produite par la société qu'elle analyse, et se donne pour but, non de simplement décrire cette société, mais de contribuer à sa transformation vers plus d'émancipation.",
    ],
    origine: {
      oeuvre: 'Théorie traditionnelle et théorie critique',
      annee: '1937',
      contexte:
        "Horkheimer publie cet essai fondateur dans la revue de l'Institut de recherche sociale, alors en exil aux États-Unis, pour donner un nom et un programme à la démarche qui distingue le groupe de Francfort des sciences sociales positivistes dominantes.",
    },
    exemples: [
      "Un sondage d'opinion qui mesure une préférence sans jamais demander comment cette préférence a elle-même été façonnée par les conditions sociales de qui la formule.",
    ],
    oeuvres: [
      { y: '1937', t: 'Théorie traditionnelle et théorie critique' },
    ],
    associes: ['raison-instrumentale', 'ideologie', 'agir-communicationnel'],
    opposes: ['physique-sociale'],
    critiques: [
      "Le critère de démarcation entre théorie traditionnelle et critique reste flou : beaucoup de sciences sociales revendiquent aussi, à leur façon, une visée transformatrice.",
      "La théorie critique, en s'incluant elle-même dans son objet, s'expose à un relativisme qu'elle a du mal à contenir : au nom de quoi juger une société de l'intérieur de cette même société ?",
    ],
    evolution: [
      { p: '1937', f: "Horkheimer formule la distinction fondatrice dans son essai éponyme." },
      { p: '1968', f: "Habermas la reprend et la développe dans Connaissance et intérêt, en distinguant intérêts techniques, pratiques et émancipatoires." },
    ],
  },
  'culture-de-masse': {
    detaille: [
      "La culture de masse désigne les productions culturelles conçues pour un public le plus large et le plus indifférencié possible, sans égard aux particularités locales, sociales ou culturelles de ceux qui les reçoivent.",
      "Adorno et Horkheimer préfèrent lui substituer l'expression industrie culturelle, plus précise selon eux : « culture de masse » laisserait entendre que cette culture émane spontanément des masses, quand elle leur est en réalité produite et livrée depuis en haut, selon une logique industrielle de série.",
    ],
    origine: {
      oeuvre: 'La Dialectique de la raison',
      annee: '1944',
      contexte:
        "Adorno et Horkheimer discutent le terme, déjà courant dans le débat américain sur la société de masse, pour lui préférer une expression qu'ils jugent moins équivoque sur l'origine réelle de cette production culturelle.",
    },
    exemples: [
      "Une chanson composée pour fonctionner identiquement dans n'importe quel pays, sans référence culturelle assez marquée pour risquer de déplaire nulle part.",
    ],
    oeuvres: [
      { y: '1944', t: 'La Dialectique de la raison' },
      { y: '1957', t: "L'Esprit du temps, d'Edgar Morin" },
    ],
    associes: ['industrie-culturelle', 'alienation-culturelle'],
    opposes: ['individualite'],
    critiques: [
      "Le mot « masse » suggère un public passif et indifférencié, quand les publics réels restent segmentés par l'âge, la classe et le territoire, même face à des produits standardisés.",
      "Le concept a souvent servi, dans le débat public, à disqualifier par avance tout goût populaire comme signe de manipulation plutôt que de préférence réelle.",
    ],
    evolution: [
      { p: '1944', f: "Adorno et Horkheimer lui préfèrent le terme plus précis d'industrie culturelle." },
      { p: '1962', f: "Edgar Morin, en France, réhabilite partiellement le terme dans L'Esprit du temps, moins sévère envers la culture de masse." },
    ],
  },
  'domination-culturelle': {
    detaille: [
      "Pour l'École de Francfort, la domination moderne ne passe plus seulement par la contrainte économique ou politique directe : elle s'exerce aussi, et peut-être surtout, dans la sphère de la culture et du loisir, censée pourtant échapper au travail et à la contrainte.",
      "Ce déplacement rend la domination plus difficile à percevoir et à contester : on ne subit plus un ordre qu'on pourrait refuser, on choisit apparemment librement un divertissement qui, en réalité, occupe le temps qui aurait pu servir à la réflexion critique.",
    ],
    origine: {
      oeuvre: 'La Dialectique de la raison',
      annee: '1944',
      contexte:
        "Adorno et Horkheimer prolongent l'analyse marxiste de la domination économique vers un domaine que Marx avait peu exploré systématiquement : celui de la culture et du temps libre.",
    },
    exemples: [
      "Un divertissement présenté comme un choix personnel libre, dont le contenu et le rythme sont pourtant entièrement déterminés par une industrie qui n'a laissé ce choix qu'entre des options qu'elle a elle-même produites.",
    ],
    oeuvres: [
      { y: '1944', t: 'La Dialectique de la raison' },
      { y: '1964', t: "L'Homme unidimensionnel, de Marcuse" },
    ],
    associes: ['industrie-culturelle', 'ideologie'],
    opposes: ['culture-subjective'],
    critiques: [
      "Le concept peine à expliquer les usages contestataires ou détournés que le public fait parfois des mêmes produits culturels qu'il est censé subir passivement.",
      "Il suppose un public incapable de distance critique face à ce qu'il consomme, une hypothèse que les études de réception ultérieures ont largement nuancée.",
    ],
    evolution: [
      { p: '1944', f: "Adorno et Horkheimer déplacent l'analyse de la domination vers la sphère culturelle." },
      { p: '1971', f: "Althusser, en France, développe une thèse voisine avec les appareils idéologiques d'État." },
    ],
  },
  'dialectique-des-lumieres': {
    detaille: [
      "Le projet des Lumières était d'affranchir l'humanité de la peur et du mythe par la connaissance rationnelle du monde. Adorno et Horkheimer montrent que ce même projet, poussé à son terme, se retourne : la raison qui devait libérer devient elle-même un instrument de domination, sur la nature comme sur les hommes.",
      "Ce retournement n'est pas un accident de parcours mais une nécessité dialectique : maîtriser la nature par le calcul suppose de la réduire à ce qui est mesurable, un geste qui, appliqué aux hommes eux-mêmes, prépare les formes de domination les plus radicales — jusqu'au génocide industriellement organisé.",
    ],
    origine: {
      oeuvre: 'La Dialectique de la raison',
      annee: '1944',
      contexte:
        "Adorno et Horkheimer écrivent en exil à Los Angeles, cherchant à comprendre comment l'Allemagne, l'une des sociétés les plus cultivées et les plus rationalisées d'Europe, a pu produire le nazisme plutôt que d'y échapper.",
    },
    exemples: [
      "Une bureaucratie qui organise avec la même compétence technique un recensement de population, un système de transport, ou la logistique d'un crime de masse.",
    ],
    oeuvres: [
      { y: '1944', t: 'La Dialectique de la raison' },
    ],
    associes: ['raison-instrumentale', 'industrie-culturelle'],
    opposes: ['loi-des-trois-etats'],
    critiques: [
      "Le diagnostic, très général, explique difficilement pourquoi certaines sociétés tout aussi rationalisées n'ont pas versé dans un totalitarisme comparable.",
      "En faisant de la raison elle-même la source du problème, la thèse s'expose à retirer tout appui rationnel à sa propre critique — l'objection qu'Habermas adressera à ses aînés.",
    ],
    evolution: [
      { p: '1944', f: "Adorno et Horkheimer publient La Dialectique de la raison en exil." },
      { p: '1947', f: "Horkheimer isole et systématise la thèse dans Éclipse de la raison." },
      { p: '1981', f: "Habermas répond par la raison communicationnelle, pour sauver une part de la promesse des Lumières que ses aînés jugeaient irrécupérable." },
    ],
  },
  'alienation-culturelle': {
    detaille: [
      "Marx situait l'aliénation dans le travail : le produit et le geste du travailleur lui échappent, deviennent une puissance étrangère. Marcuse étend le diagnostic au temps libre lui-même, censé pourtant être le lieu où l'individu échappe à cette aliénation.",
      "Dans une société de consommation avancée, les loisirs, les désirs et les goûts eux-mêmes sont façonnés de l'extérieur par une industrie qui les anticipe et les produit, si bien que l'individu ne se libère jamais vraiment du travail : il continue, sans le savoir, à consommer selon un scénario qui n'est pas davantage le sien.",
    ],
    origine: {
      oeuvre: "L'Homme unidimensionnel",
      annee: '1964',
      contexte:
        "Marcuse écrit dans une société de consommation d'après-guerre en pleine expansion, où l'abondance matérielle semblait avoir résolu les problèmes que Marx attribuait à la seule pénurie.",
    },
    exemples: [
      "Des besoins de consommation ressentis comme personnels et impérieux, alors qu'ils ont été suscités, presque à l'identique, chez des millions d'autres personnes par les mêmes campagnes publicitaires.",
    ],
    oeuvres: [
      { y: '1964', t: "L'Homme unidimensionnel" },
      { y: '1955', t: 'Éros et civilisation' },
    ],
    associes: ['alienation', 'culture-de-masse'],
    opposes: ['culture-subjective'],
    critiques: [
      "Le concept traite les désirs suscités par la publicité comme nécessairement inauthentiques, sans dire clairement ce que serait un désir authentique auquel les comparer.",
      "Il prête à l'industrie une capacité de façonnage presque totale, qui laisse peu de place aux résistances et détournements réels observés chez les consommateurs.",
    ],
    evolution: [
      { p: '1964', f: "Marcuse formule l'extension de l'aliénation au temps libre dans L'Homme unidimensionnel." },
      { p: '1967', f: "Debord, en France, développe une thèse voisine avec la société du spectacle." },
    ],
  },
  'personnalite-autoritaire': {
    detaille: [
      "À partir de longs entretiens et de questionnaires passés à des milliers d'Américains, l'équipe d'Adorno cherche à identifier ce qui, dans la structure psychologique d'un individu, le prédispose à l'adhésion aux idéologies autoritaires et à l'hostilité envers les groupes minoritaires.",
      "L'échelle F (pour fascisme) qu'ils construisent mesure des traits comme la soumission à l'autorité en place, l'agressivité envers ceux qui s'en écartent, le rejet de l'introspection et une vision rigide, sans nuance, du monde social.",
    ],
    origine: {
      oeuvre: 'The Authoritarian Personality',
      annee: '1950',
      contexte:
        "Adorno participe à cette recherche collective aux États-Unis, financée pour comprendre les racines psychologiques de l'antisémitisme après la découverte de l'ampleur du génocide nazi.",
    },
    exemples: [
      "Un score élevé sur l'échelle F associé, dans l'étude originale, à une adhésion plus fréquente à des affirmations antisémites et ethnocentriques, indépendamment du niveau d'éducation du répondant.",
    ],
    oeuvres: [
      { y: '1950', t: 'The Authoritarian Personality' },
    ],
    associes: ['domination-legitime', 'ideologie'],
    opposes: ['individualisme-moral'],
    critiques: [
      "L'échelle F a été critiquée pour un biais de méthode : formulée uniquement dans le sens de l'accord, elle confond l'adhésion à des idées autoritaires avec la simple tendance à toujours répondre « oui ».",
      "Le recours à la psychanalyse pour expliquer un phénomène politique et social a été jugé réducteur, minimisant les conditions économiques et historiques propres à l'essor du nazisme.",
    ],
    evolution: [
      { p: '1950', f: "L'équipe d'Adorno publie The Authoritarian Personality et l'échelle F." },
      { p: '1981', f: "Altemeyer reformule le concept sous le nom d'autoritarisme de droite (RWA), avec une échelle méthodologiquement plus robuste." },
    ],
  },
  'societe-administree': {
    detaille: [
      "Adorno décrit une société où la gestion technique et bureaucratique, initialement cantonnée à l'administration publique et à l'entreprise, s'étend progressivement à des domaines entiers de l'existence — la culture, les loisirs, jusqu'aux relations personnelles elles-mêmes.",
      "Cette extension ne laisse plus, selon lui, d'espace véritablement extérieur à son emprise : même la contestation de la société administrée tend à se dérouler selon des formes déjà administrées — pétitions encadrées, canaux de participation prévus à l'avance.",
    ],
    origine: {
      oeuvre: 'Minima Moralia',
      annee: '1951',
      contexte:
        "Adorno écrit ce recueil de fragments en exil puis à son retour en Allemagne, dans une société d'après-guerre en pleine reconstruction technocratique et administrative.",
    },
    exemples: [
      "Une association militante contrainte de se structurer en organisation gestionnaire — statuts, comptabilité, indicateurs de résultat — pour continuer d'exister dans un cadre administratif qu'elle prétendait pourtant contester.",
    ],
    oeuvres: [
      { y: '1951', t: 'Minima Moralia' },
      { y: '1966', t: 'Dialectique négative' },
    ],
    associes: ['bureaucratie', 'rationalisation', 'colonisation-du-monde-vecu'],
    opposes: ['regimes-de-justification'],
    critiques: [
      "Le diagnostic, très pessimiste, laisse peu de place aux marges de manœuvre réelles que les acteurs trouvent malgré tout dans les administrations les plus rigides.",
      "Il reste largement descriptif, sans proposer d'alternative concrète à l'extension qu'il dénonce.",
    ],
    evolution: [
      { p: '1951', f: "Adorno esquisse le diagnostic dans les fragments de Minima Moralia." },
      { p: '1966', f: "Il le systématise dans Dialectique négative." },
      { p: '1981', f: "Habermas relit le diagnostic à travers la notion de colonisation du monde vécu par le système." },
    ],
  },
  'mimetisme': {
    detaille: [
      "Avant que la raison instrumentale n'impose sa logique de mesure et de contrôle, une manière plus ancienne de se rapporter au monde consistait à s'y assimiler par ressemblance — imiter un animal, un phénomène naturel, un autre être — plutôt qu'à le dominer par le calcul.",
      "Adorno et Horkheimer voient dans cette faculté mimétique une part refoulée mais jamais totalement éteinte de l'expérience humaine, qui resurgit notamment dans l'art — capable, selon eux, de renouer avec cette relation non instrumentale au monde que la rationalisation a ailleurs presque partout éliminée.",
    ],
    origine: {
      oeuvre: 'La Dialectique de la raison',
      annee: '1944',
      contexte:
        "Adorno et Horkheimer développent cette idée à partir de l'anthropologie et de la psychanalyse de leur temps, pour esquisser ce que la rationalisation occidentale a dû refouler pour s'imposer.",
    },
    exemples: [
      "Un rituel de chasse ancien où les chasseurs imitent les mouvements de l'animal traqué, moins pour le tromper que pour entrer dans un rapport de ressemblance avec lui.",
    ],
    oeuvres: [
      { y: '1944', t: 'La Dialectique de la raison' },
      { y: '1970', t: 'Théorie esthétique' },
    ],
    associes: ['dialectique-des-lumieres', 'effervescence-collective'],
    opposes: ['rationalite-instrumentale'],
    critiques: [
      "Le concept reste flou et peu opérationnalisable, plus proche d'une intuition philosophique que d'un outil d'analyse sociologique précis.",
      "Le recours à l'anthropologie de l'époque, aujourd'hui datée, fragilise une partie de l'argumentation qui s'appuie sur elle.",
    ],
    evolution: [
      { p: '1944', f: "Adorno et Horkheimer esquissent la faculté mimétique refoulée par la raison instrumentale." },
      { p: '1970', f: "Adorno approfondit le rôle de l'art comme dernier refuge du mimétisme dans Théorie esthétique." },
    ],
  },
  'reification': {
    detaille: [
      "Georg Lukács, dont l'École de Francfort reprend et prolonge largement le concept, décrit la réification comme le moment où les rapports sociaux entre personnes en viennent à apparaître comme des rapports entre choses — mesurables, échangeables, dépourvues de toute trace de la relation humaine qui les a pourtant produits.",
      "Ce processus radicalise le fétichisme de la marchandise décrit par Marx : ce n'est plus seulement le produit du travail qui masque le rapport social qui l'a créé, c'est la totalité des rapports sociaux, y compris la conscience de ceux qui les vivent, qui finit par se penser sur le modèle de la chose.",
    ],
    origine: {
      oeuvre: 'Histoire et conscience de classe',
      annee: '1923',
      contexte:
        "Lukács écrit ce texte fondateur du marxisme occidental dans le contexte des révolutions ratées d'Europe centrale, cherchant à comprendre pourquoi la conscience de classe ne suit pas mécaniquement la position de classe.",
    },
    exemples: [
      "Un service client entièrement automatisé qui traite chaque appelant comme une occurrence interchangeable d'un même type de requête, plutôt que comme une personne singulière.",
    ],
    oeuvres: [
      { y: '1923', t: 'Histoire et conscience de classe' },
      { y: '1966', t: 'Dialectique négative, d\'Adorno' },
    ],
    associes: ['fetichisme-de-la-marchandise', 'alienation'],
    opposes: ['action-sociale'],
    critiques: [
      "Lukács lui-même reniera partiellement le concept dans les décennies suivantes, le jugeant trop hégélien et trop optimiste sur la capacité du prolétariat à en prendre conscience.",
      "Le concept explique mal pourquoi certains rapports sociaux résistent à la réification quand d'autres, dans des conditions économiques comparables, y succombent.",
    ],
    evolution: [
      { p: '1923', f: "Lukács formule la réification dans Histoire et conscience de classe." },
      { p: '1944', f: "Adorno et Horkheimer en reprennent la logique sans toujours citer Lukács, dont l'œuvre reste marginale dans l'Allemagne d'après-guerre." },
      { p: '1968', f: "Habermas la retravaille en colonisation du monde vécu par les logiques du système." },
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
    associes: ['role-et-attentes', 'solidarite-organique', 'fonction-latente', 'systeme', 'agil', 'imperatifs-fonctionnels', 'structure-sociale'],
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
    associes: ['systeme-social', 'domination-legitime', 'pattern-variables', 'socialisation'],
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
  'structure-sociale': {
    detaille: [
      "La structure sociale désigne, pour Parsons, le squelette relativement stable de positions et de rôles articulés qui organise une société à un moment donné — les institutions, les statuts et les relations qui persistent au-delà des individus qui les occupent tour à tour.",
      "Cette stabilité relative n'est pas un donné brut : elle est constamment entretenue par les quatre fonctions du système (adaptation, poursuite des buts, intégration, maintien des modèles), qui agissent comme autant de mécanismes de maintenance de la structure existante.",
    ],
    origine: {
      oeuvre: 'Le Système social',
      annee: '1951',
      contexte:
        "Parsons développe le concept pour donner un objet stable à son analyse systémique, distinct du flux continu des interactions individuelles qui la composent au jour le jour.",
    },
    exemples: [
      "Une entreprise dont l'organigramme reste globalement identique sur plusieurs décennies, malgré un renouvellement quasi complet du personnel qui l'occupe.",
    ],
    oeuvres: [
      { y: '1951', t: 'Le Système social' },
    ],
    associes: ['systeme-social', 'role-et-attentes'],
    opposes: ['effets-pervers'],
    critiques: [
      "L'accent mis sur la stabilité de la structure peine à expliquer les transformations rapides et profondes que certaines sociétés connaissent malgré tout.",
      "Le concept traite la structure comme relativement donnée, quand elle résulte en réalité de rapports de force et de négociations permanentes entre groupes inégaux.",
    ],
    evolution: [
      { p: '1951', f: "Parsons pose la structure sociale comme objet stable de l'analyse systémique." },
      { p: '1959', f: "Merton en nuance la lecture avec ses théories de portée moyenne, plus attentives aux structures partielles qu'au système global." },
    ],
  },
  'normes-sociales': {
    detaille: [
      "Les normes sociales traduisent une valeur générale en règles concrètes de conduite, propres à une situation donnée : elles disent non pas ce qui est désirable en général, mais ce qu'il convient précisément de faire ici et maintenant.",
      "Leur efficacité tient moins à la sanction qui les accompagne qu'à leur intériorisation : une norme pleinement sociale n'a plus besoin d'être rappelée de l'extérieur, elle est vécue comme relevant de soi plutôt que comme une contrainte imposée.",
    ],
    origine: {
      oeuvre: 'Le Système social',
      annee: '1951',
      contexte:
        "Parsons distingue systématiquement normes et valeurs pour articuler le général (ce qu'une société tient pour désirable) et le particulier (ce qu'elle attend concrètement dans chaque situation).",
    },
    exemples: [
      "Une norme de ponctualité, plus stricte pour un rendez-vous professionnel que pour une invitation entre amis, bien que la valeur générale de respect d'autrui reste la même dans les deux cas.",
    ],
    oeuvres: [
      { y: '1951', t: 'Le Système social' },
    ],
    associes: ['valeurs-sociales', 'role-et-attentes'],
    opposes: ['anomie'],
    critiques: [
      "Le modèle suppose un consensus normatif qui masque souvent des normes concurrentes, propres à différents groupes sociaux d'une même société.",
      "Il explique mal la coexistence, dans une même situation, de normes contradictoires entre lesquelles l'acteur doit trancher lui-même.",
    ],
    evolution: [
      { p: '1951', f: "Parsons distingue normes et valeurs dans Le Système social." },
      { p: '1897', f: "Durkheim, avant lui, avait déjà montré ce qu'il advient quand les normes cessent de borner les attentes : l'anomie." },
    ],
  },
  'valeurs-sociales': {
    detaille: [
      "Les valeurs sociales sont les idéaux les plus généraux qu'une société tient pour désirables — la réussite, l'égalité, la liberté — dont les normes concrètes ne sont, pour Parsons, que la traduction opérationnelle dans des situations particulières.",
      "Une même valeur peut ainsi se décliner en normes très différentes selon le domaine considéré : la valeur de réussite individuelle ne prescrit pas la même conduite à l'école, au travail ou dans le sport, alors qu'elle en reste, à chaque fois, le principe sous-jacent.",
    ],
    origine: {
      oeuvre: 'Le Système social',
      annee: '1951',
      contexte:
        "Parsons cherche ce qui, dans une société aussi diverse que les États-Unis d'après-guerre, permet malgré tout une coordination sociale sans recours systématique à la contrainte.",
    },
    exemples: [
      "La valeur d'individualisme, largement partagée dans une société donnée, qui se traduit en normes très différentes selon qu'elle s'applique à l'éducation des enfants ou à l'organisation du travail.",
    ],
    oeuvres: [
      { y: '1951', t: 'Le Système social' },
      { y: '1953', t: 'Working Papers in the Theory of Action' },
    ],
    associes: ['normes-sociales', 'socialisation'],
    opposes: ['ideologie'],
    critiques: [
      "Le concept suppose un consensus de valeurs qui masque la diversité réelle des valeurs concurrentes au sein d'une même société.",
      "Marx y verrait une manière de présenter comme un accord général ce qui reste, en réalité, la valeur de certains groupes imposée à d'autres.",
    ],
    evolution: [
      { p: '1951', f: "Parsons pose les valeurs comme fondement le plus général de l'ordre social." },
      { p: '1846', f: "Marx, bien avant lui, avait déjà proposé une lecture concurrente : les valeurs dominantes sont celles de la classe dominante." },
    ],
  },
  'socialisation': {
    detaille: [
      "La socialisation est le processus par lequel un individu, dès la petite enfance, intériorise les valeurs et les normes de sa société au point de les vivre comme siennes plutôt que comme des contraintes extérieures — la condition, pour Parsons, de tout ordre social qui ne reposerait pas sur la seule coercition.",
      "La famille en est, pour Parsons, l'agent premier et le plus déterminant : elle stabilise la personnalité de l'enfant avant que l'école, puis d'autres institutions, ne prennent le relais pour ajuster cette personnalité aux rôles qu'il occupera à l'âge adulte.",
    ],
    origine: {
      oeuvre: 'Family, Socialization and Interaction Process',
      annee: '1955',
      contexte:
        "Parsons développe cette analyse avec sa collègue Bales, en s'appuyant en partie sur la psychanalyse pour comprendre comment la personnalité individuelle s'articule au système social plus large.",
    },
    exemples: [
      "Un enfant qui apprend, sans qu'on le lui explique jamais formellement, à ajuster son ton de voix selon qu'il s'adresse à un camarade ou à un enseignant.",
    ],
    oeuvres: [
      { y: '1955', t: 'Family, Socialization and Interaction Process' },
      { y: '1951', t: 'Le Système social' },
    ],
    associes: ['valeurs-sociales', 'role-et-attentes'],
    opposes: ['carriere-deviante'],
    critiques: [
      "Le modèle décrit une socialisation réussie et laisse peu de place aux échecs de socialisation, pourtant statistiquement fréquents.",
      "Becker objecte que devenir déviant tient moins à un défaut de socialisation qu'à la réaction sociale qui étiquette un acte comme tel.",
    ],
    evolution: [
      { p: '1955', f: "Parsons et Bales systématisent le rôle de la famille dans la socialisation primaire." },
      { p: '1963', f: "Becker déplace l'explication de la déviance de la socialisation manquée vers l'étiquetage social." },
    ],
  },
  'controle-social': {
    detaille: [
      "Le contrôle social regroupe, pour Parsons, l'ensemble des mécanismes — formels comme informels — qui ramènent une conduite déviante vers la norme attendue, et maintiennent ainsi l'équilibre du système sans qu'il soit besoin de le refonder à chaque écart.",
      "Ce contrôle ne repose pas d'abord sur la sanction ouverte : le regard désapprobateur d'un proche, la gêne ressentie face à un manquement, ou le simple rappel discret d'une attente suffisent le plus souvent, la sanction formelle n'intervenant qu'en dernier recours.",
    ],
    origine: {
      oeuvre: 'Le Système social',
      annee: '1951',
      contexte:
        "Parsons développe le concept dans le prolongement de son analyse du rôle de malade, où il montre comment la médecine elle-même fonctionne comme un mécanisme de contrôle social de la déviance liée à la maladie.",
    },
    exemples: [
      "Un collègue qui suggère discrètement de reformuler un courriel trop abrupt, évitant ainsi le recours à toute procédure disciplinaire formelle.",
    ],
    oeuvres: [
      { y: '1951', t: 'Le Système social, chapitre VII' },
    ],
    associes: ['normes-sociales', 'regulation-sociale'],
    opposes: ['etiquetage'],
    critiques: [
      "Becker retourne l'argument : le contrôle social ne se contente pas de corriger la déviance, il contribue souvent à la produire en désignant qui en relève.",
      "Le concept traite la déviance comme un dysfonctionnement à corriger, sans interroger la légitimité de la norme elle-même.",
    ],
    evolution: [
      { p: '1951', f: "Parsons intègre le contrôle social à sa théorie du système social." },
      { p: '1963', f: "Becker inverse la perspective : le contrôle social participe à fabriquer la déviance qu'il prétend seulement corriger." },
    ],
  },
  'equilibre-social': {
    detaille: [
      "Un système social, pour Parsons, tend structurellement vers un état d'équilibre : les perturbations qui l'affectent — un conflit, une crise, une innovation — sont le plus souvent absorbées par ses mécanismes internes, qui ramènent le système vers un fonctionnement stable plutôt que vers une transformation radicale.",
      "Cet équilibre n'est pas statique : Parsons admet un « équilibre mobile », capable d'intégrer un changement progressif sans que la structure d'ensemble n'en soit bouleversée — une différence importante avec les théories qui font du conflit le moteur d'une transformation en rupture.",
    ],
    origine: {
      oeuvre: 'Le Système social',
      annee: '1951',
      contexte:
        "Parsons écrit dans une Amérique d'après-guerre marquée par une forte croissance et une stabilité institutionnelle relative, un contexte qui informe sans doute son postulat d'équilibre.",
    },
    exemples: [
      "Un marché du travail qui absorbe progressivement une vague de licenciements par des reconversions et de nouvelles créations d'emploi, sans effondrement durable de l'ensemble du système économique.",
    ],
    oeuvres: [
      { y: '1951', t: 'Le Système social' },
    ],
    associes: ['systeme-social', 'controle-social'],
    opposes: ['conflit-de-classes'],
    critiques: [
      "Le postulat d'équilibre est accusé de naturaliser l'ordre existant, en présentant comme une tendance systémique ce qui pourrait être un rapport de force provisoire.",
      "Dahrendorf et Mills reprochent au modèle de ne pouvoir penser le conflit et le changement que comme des perturbations à résorber, jamais comme des moteurs légitimes de transformation.",
    ],
    evolution: [
      { p: '1951', f: "Parsons formule l'hypothèse d'un système social tendant vers l'équilibre." },
      { p: '1959', f: "Dahrendorf publie Class and Class Conflict in Industrial Society, en réponse directe au postulat d'équilibre." },
    ],
  },
  'imperatifs-fonctionnels': {
    detaille: [
      "Parsons pose que tout système social durable, quelle que soit sa forme concrète, doit résoudre un même ensemble de problèmes pour survivre — se procurer des ressources, atteindre ses buts, coordonner ses parties, transmettre ses modèles culturels à ses nouveaux membres.",
      "Ce sont ces impératifs fonctionnels, communs à toute société, qui donnent son unité au projet théorique de Parsons : comparer des institutions très différentes en apparence en cherchant, derrière leurs formes concrètes, le même problème structurel qu'elles résolvent chacune à sa manière.",
    ],
    origine: {
      oeuvre: 'Working Papers in the Theory of Action',
      annee: '1953',
      contexte:
        "Parsons, avec Bales et Shils, cherche à formaliser en un schéma général les problèmes que tout système d'action doit résoudre, qu'il s'agisse d'un individu, d'un petit groupe ou d'une société entière.",
    },
    exemples: [
      "Une association bénévole qui doit, comme n'importe quelle grande organisation, trouver des ressources, fixer des objectifs, coordonner ses membres et transmettre ses valeurs aux nouveaux venus.",
    ],
    oeuvres: [
      { y: '1953', t: 'Working Papers in the Theory of Action' },
      { y: '1951', t: 'Le Système social' },
    ],
    associes: ['systeme-social', 'agil'],
    opposes: ['fonction-latente'],
    critiques: [
      "Merton objecte que l'idée d'impératifs fonctionnels universels reste invérifiable : rien n'indique comment établir empiriquement qu'une fonction est réellement nécessaire à la survie d'un système donné.",
      "Le schéma explique après coup l'existence de presque n'importe quelle institution, ce qui affaiblit sa capacité à être mis en défaut par l'observation.",
    ],
    evolution: [
      { p: '1953', f: "Parsons, Bales et Shils formulent le principe des impératifs fonctionnels universels." },
      { p: '1957', f: "Merton, dans Éléments de théorie et de méthode sociologiques, appelle à des théories de portée moyenne plutôt qu'à ce niveau d'abstraction." },
    ],
  },
  'agil': {
    detaille: [
      "AGIL nomme les quatre fonctions que tout système social doit remplir pour survivre : Adaptation (se procurer des ressources dans son environnement), Goal attainment (fixer et poursuivre des buts), Integration (coordonner ses parties entre elles) et Latency, ou maintien des modèles (transmettre et stabiliser ses valeurs culturelles dans le temps).",
      "Parsons associe à chaque fonction un sous-système spécialisé de la société — l'économie pour l'adaptation, la politique pour la poursuite des buts, le droit et les institutions de solidarité pour l'intégration, la famille et l'école pour le maintien des modèles — et applique le même schéma, en emboîtement, à des échelles plus petites comme un groupe ou une organisation.",
    ],
    origine: {
      oeuvre: 'Working Papers in the Theory of Action',
      annee: '1953',
      contexte:
        "Parsons systématise, avec Bales et Shils, les impératifs fonctionnels en un schéma à quatre cases devenu la formalisation la plus reconnaissable de sa théorie systémique.",
    },
    exemples: [
      "Dans une université : les services financiers assurent l'adaptation, la présidence fixe les objectifs stratégiques, les conseils de coordination assurent l'intégration entre facultés, et les cérémonies de remise de diplômes entretiennent le maintien des modèles.",
    ],
    oeuvres: [
      { y: '1953', t: 'Working Papers in the Theory of Action' },
      { y: '1966', t: 'Sociétés : essai sur leur évolution comparée' },
    ],
    associes: ['imperatifs-fonctionnels', 'integration-sociale'],
    opposes: ['effets-pervers'],
    critiques: [
      "Le découpage en exactement quatre fonctions reste largement arbitraire : rien ne garantit qu'il n'en faudrait ni plus ni moins pour rendre compte d'un système donné.",
      "Le schéma, appliqué à toutes les échelles, finit par tout classer sans jamais rien exclure, ce qui le rend difficile à mettre en défaut empiriquement.",
    ],
    evolution: [
      { p: '1953', f: "Parsons, Bales et Shils formulent le schéma AGIL." },
      { p: '1966', f: "Parsons l'étend à une théorie de l'évolution comparée des sociétés." },
      { p: 'après 1970', f: "Le schéma décline avec le fonctionnalisme, mais reste enseigné comme référence historique de la théorie systémique." },
    ],
  },
  'pattern-variables': {
    detaille: [
      "Les pattern variables sont cinq paires de choix dichotomiques auxquels tout acteur fait face dans une interaction : universalisme ou particularisme, neutralité affective ou affectivité, spécificité ou diffusion, qualité ou performance (ascription ou mérite), orientation collective ou individuelle.",
      "Parsons s'en sert pour caractériser aussi bien un type précis de relation (le rapport médecin-patient combine universalisme, neutralité affective et spécificité) qu'un type de société entière — les sociétés traditionnelles tendant vers un pôle des variables, les sociétés modernes vers l'autre.",
    ],
    origine: {
      oeuvre: 'Le Système social',
      annee: '1951',
      contexte:
        "Parsons cherche un outil systématique pour comparer des types de relations et de sociétés très différents à partir d'un même jeu de critères, plutôt que de multiplier les typologies ad hoc.",
    },
    exemples: [
      "Une relation familiale, marquée par l'affectivité, la diffusion et l'ascription, contraste terme à terme avec une relation professionnelle, marquée par la neutralité affective, la spécificité et la performance.",
    ],
    oeuvres: [
      { y: '1951', t: 'Le Système social, chapitre II' },
    ],
    associes: ['role-et-attentes', 'valeurs-sociales'],
    opposes: ['habitus'],
    critiques: [
      "Le découpage en dichotomies strictes correspond mal à des situations réelles qui combinent souvent les deux pôles d'une même variable.",
      "Le classement des sociétés traditionnelles et modernes sur ces cinq axes a été jugé trop évolutionniste, calqué sur une trajectoire occidentale présentée comme universelle.",
    ],
    evolution: [
      { p: '1951', f: "Parsons formule les cinq paires de pattern variables dans Le Système social." },
      { p: '1972', f: "Bourdieu propose, avec l'habitus, un modèle concurrent : des dispositions incorporées et largement inconscientes plutôt que des choix explicites entre pôles définis." },
    ],
  },
  'institutionnalisation-normative': {
    detaille: [
      "Une norme devient pleinement sociale, pour Parsons, quand elle franchit trois seuils à la fois : elle est attendue par les autres, sanctionnée si elle n'est pas suivie, et surtout intériorisée par l'acteur lui-même, qui cesse de la vivre comme une contrainte extérieure.",
      "Ce processus d'institutionnalisation normative explique, selon Parsons, la stabilité relative des sociétés : une fois qu'une norme est institutionnalisée à ce point, elle n'a plus besoin d'être renforcée à chaque instant, elle se maintient d'elle-même par l'adhésion de ceux qui la suivent.",
    ],
    origine: {
      oeuvre: 'Le Système social',
      annee: '1951',
      contexte:
        "Parsons développe le concept pour expliquer pourquoi certaines normes se maintiennent durablement sans contrainte visible, quand d'autres restent fragiles et contestées malgré des sanctions formelles.",
    },
    exemples: [
      "Le tri sélectif des déchets, d'abord perçu comme une contrainte administrative, devenu pour beaucoup un geste qu'on accomplit sans y penser, et dont l'omission suscite un malaise, même hors de toute sanction.",
    ],
    oeuvres: [
      { y: '1951', t: 'Le Système social, chapitre V' },
    ],
    associes: ['normes-sociales', 'socialisation'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "Le concept suppose une norme unique et stabilisée, quand des normes concurrentes coexistent souvent au sein d'un même groupe social.",
      "Boudon objecte qu'une régularité de comportement, même durable, ne prouve pas une intériorisation véritable : elle peut aussi bien résulter de calculs individuels renouvelés à chaque situation.",
    ],
    evolution: [
      { p: '1951', f: "Parsons formule les trois conditions de l'institutionnalisation normative." },
      { p: '1979', f: "Boudon lui oppose des acteurs qui recalculent leurs raisons à chaque situation, plutôt que de suivre une norme une fois pour toutes intériorisée." },
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
  'interdependance': {
    detaille: [
      "L'interdépendance est le lien de base dont Elias fait l'unité première de toute sociologie : des êtres humains liés les uns aux autres par le besoin, l'affect ou la fonction, et dont aucun ne peut se comprendre isolément de ce réseau qui le traverse.",
      "Elias s'en sert pour dissoudre ce qu'il appelle l'« homo clausus » : l'image d'un individu clos sur lui-même, d'abord séparé, qui n'entrerait qu'ensuite en relation avec les autres — une image que le langage courant impose, mais que l'observation dément.",
      "Personne, dans ce tissu, ne détient seul les commandes : chacun dépend des autres au moins autant qu'il pèse sur eux, ce qui rend le cours des choses imprévisible dans le détail, même quand chaque acteur pris à part agit de façon parfaitement compréhensible.",
    ],
    origine: {
      oeuvre: "Qu'est-ce que la sociologie ?",
      annee: '1970',
      contexte:
        "Elias construit ce concept pour rompre avec une opposition, selon lui trompeuse, entre individu et société, en repartant d'une unité plus élémentaire : le lien qui les rattache déjà l'un à l'autre avant toute distinction.",
    },
    exemples: [
      "Un enfant et ses parents, liés par un besoin réciproque — de soins d'un côté, de reconnaissance et d'affection de l'autre — bien avant qu'aucun choix n'intervienne.",
      "Une chaîne de production où un retard à un poste modifie mécaniquement le travail de tous les postes suivants, sans qu'aucun d'eux ne l'ait décidé.",
    ],
    oeuvres: [
      { y: '1970', t: "Qu'est-ce que la sociologie ?" },
      { y: '1939', t: 'La Civilisation des mœurs' },
    ],
    associes: ['configuration', 'dependance-fonctionnelle'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "Boudon objecterait qu'insister sur l'interdépendance ne dispense pas d'expliquer une action précise par les raisons que l'individu, lui, avait de l'accomplir.",
      "Le concept, très général, décrit une condition permanente de la vie sociale plutôt qu'un mécanisme précis, ce qui le rend difficile à mettre en défaut empiriquement.",
      "Il dit peu des situations où l'interdépendance elle-même est radicalement inégale, certains pesant beaucoup plus lourd que d'autres dans le même réseau.",
    ],
    evolution: [
      { p: '1939', f: "L'idée d'interdépendance travaille déjà La Civilisation des mœurs, sans porter ce nom précis." },
      { p: '1970', f: "Qu'est-ce que la sociologie ? en fait le fondement explicite de la notion de configuration." },
    ],
  },
  'dependance-fonctionnelle': {
    detaille: [
      "La dépendance fonctionnelle est la forme précise d'interdépendance que produit la division du travail : à mesure que les fonctions se spécialisent, chacun devient dépendant de chaînes toujours plus longues de personnes qui accomplissent des tâches qu'il ne sait plus faire lui-même.",
      "Elias en tire un renversement du sens commun : la modernisation n'a pas rendu les individus plus indépendants, elle les a rendus dépendants de bien plus de monde à la fois, même si cette dépendance, diffuse et anonyme, se ressent moins directement qu'une dépendance personnelle envers un seigneur ou un maître.",
      "Cette dépendance n'est pas symétrique : dans toute chaîne fonctionnelle, certains maillons pèsent plus que d'autres, ce qui distribue inégalement le pouvoir sans jamais l'abolir complètement, même chez ceux qui semblent en détenir le plus.",
    ],
    origine: {
      oeuvre: 'La Dynamique de l\'Occident',
      annee: '1939',
      contexte:
        "Elias développe cette idée en retraçant la formation des États européens, où la centralisation du pouvoir s'accompagne d'un allongement continu des chaînes fonctionnelles reliant les individus entre eux.",
    },
    exemples: [
      "Un habitant de grande ville qui ne sait plus produire sa propre nourriture, entièrement dépendant d'une chaîne d'inconnus — agriculteurs, transporteurs, commerçants — pour se nourrir chaque jour.",
      "Un cadre dont l'autonomie apparente masque une dépendance étroite envers des collègues, des fournisseurs et des clients qu'il ne maîtrise en réalité que très partiellement.",
    ],
    oeuvres: [
      { y: '1939', t: "La Dynamique de l'Occident" },
      { y: '1970', t: "Qu'est-ce que la sociologie ?" },
    ],
    associes: ['interdependance', 'configuration'],
    opposes: ['individualisme'],
    critiques: [
      "Tocqueville objecterait que le sentiment d'indépendance individuelle, même illusoire au regard de la dépendance fonctionnelle réelle, a lui-même des effets politiques et sociaux bien concrets qu'on ne peut ignorer.",
      "Le concept dit peu des mécanismes précis par lesquels certaines dépendances se transforment en rapports de domination durables plutôt qu'en simples échanges de service.",
      "Il repose sur un récit européen de longue durée dont la transposition à d'autres histoires de division du travail reste à établir.",
    ],
    evolution: [
      { p: '1939', f: "La Dynamique de l'Occident relie centralisation étatique et allongement des chaînes fonctionnelles." },
      { p: '1970', f: "Qu'est-ce que la sociologie ? généralise le principe à toute société différenciée." },
    ],
  },
  'autocontrole': {
    detaille: [
      "L'autocontrôle est la contrainte que chacun exerce sur soi-même, sans surveillance extérieure directe, pour retenir des pulsions et des conduites qu'une contrainte sociale imposait autrefois depuis l'extérieur — le mécanisme psychologique au cœur du processus de civilisation.",
      "Il ne s'installe pas d'un coup ni par décret : il se construit progressivement, dès l'enfance, par une répétition de corrections dont la personne finit par ne plus avoir conscience comme telles — au point de ressentir une gêne spontanée là où, quelques siècles plus tôt, personne n'aurait rien trouvé à redire.",
      "Elias insiste sur son coût psychique : cet autocontrôle constant, devenu automatique, n'est jamais entièrement acquis ; il demande une vigilance de tous les instants, qui peut elle-même se relâcher dans certaines circonstances — d'où les « poussées de décivilisation » qu'il observera plus tard.",
    ],
    origine: {
      oeuvre: 'La Civilisation des mœurs',
      annee: '1939',
      contexte:
        "Elias tire des traités de savoir-vivre européens, du Moyen Âge au XIXᵉ siècle, la trace d'une transformation psychologique de longue durée : des interdits d'abord imposés du dehors, devenus peu à peu des réflexes intériorisés.",
    },
    exemples: [
      "Un bâillement retenu en public, sans qu'aucune règle explicite n'ait besoin d'être rappelée pour que le réflexe de le cacher s'impose de lui-même.",
      "Une colère contenue en réunion, alors que rien ni personne n'empêcherait physiquement de l'exprimer librement.",
    ],
    oeuvres: [
      { y: '1939', t: 'La Civilisation des mœurs' },
    ],
    associes: ['processus-de-civilisation', 'psychogenese'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "Freud, dont Elias s'inspire, situe le refoulement dans une économie psychique universelle, quand Elias en fait un phénomène historiquement daté et variable selon les sociétés — la comparaison entre les deux reste discutée.",
      "Le concept dit peu des inégalités sociales dans l'accès à cet autocontrôle : certains groupes en ont longtemps été jugés dépourvus, jugement qui a servi à justifier leur domination.",
      "Il repose sur des sources — manuels de savoir-vivre — qui disent surtout ce qu'une élite prescrivait, non ce que chacun ressentait réellement.",
    ],
    evolution: [
      { p: 'Moyen Âge–XIXᵉ s.', f: "Les traités de savoir-vivre européens documentent le déplacement progressif de la contrainte, de l'extérieur vers l'intérieur." },
      { p: '1939', f: "Elias formalise l'autocontrôle comme pièce centrale du processus de civilisation." },
      { p: '1980–2000', f: "Elias revient sur le concept pour expliquer les poussées de décivilisation, où cet autocontrôle se relâche brutalement." },
    ],
  },
  'monopole-de-la-violence': {
    detaille: [
      "Le monopole de la violence est, chez Elias, le résultat d'un long processus de compétition entre pouvoirs rivaux — seigneurs, villes, princes — qui s'éliminent et s'absorbent les uns les autres jusqu'à ce qu'un seul centre concentre à la fois la force armée et l'impôt sur un territoire donné.",
      "Il rejoint ainsi Weber sur le constat, mais en déplace la question : là où Weber définit l'État par ce monopole déjà constitué, Elias cherche à expliquer comment ce monopole s'est formé — par un mécanisme de concurrence et d'élimination qu'il appelle le « mécanisme monopolistique ».",
      "Sa conséquence psychologique est décisive dans son œuvre : une fois la violence privée interdite et concentrée entre les mains d'un pouvoir central, les individus n'ont plus le droit de se faire justice eux-mêmes, ce qui les oblige à déplacer leurs conflits vers des formes plus contrôlées, plus différées — et pousse au développement de l'autocontrôle.",
    ],
    origine: {
      oeuvre: 'La Dynamique de l\'Occident',
      annee: '1939',
      contexte:
        "Elias retrace, sur plusieurs siècles, la compétition entre seigneurs féodaux qui aboutit, en France, à la concentration progressive du pouvoir armé et fiscal entre les mains de la monarchie, puis de l'État moderne.",
    },
    exemples: [
      "Des duels privés autrefois tolérés, puis interdits par une autorité centrale de plus en plus seule habilitée à trancher les conflits par la force.",
      "Une région autrefois parcourue de milices seigneuriales rivales, pacifiée une fois qu'un pouvoir central unique a réussi à désarmer les autres prétendants.",
    ],
    oeuvres: [
      { y: '1939', t: "La Dynamique de l'Occident" },
    ],
    associes: ['processus-de-civilisation', 'autocontrole'],
    opposes: ['domination-legitime'],
    critiques: [
      "Le récit reste centré sur la trajectoire européenne, en particulier française, et se transpose mal à des formations étatiques nées dans d'autres conditions historiques.",
      "Il explique la concentration du pouvoir par un mécanisme presque automatique de compétition, ce qui laisse peu de place aux choix politiques délibérés des acteurs concernés.",
      "Le monopole, une fois constitué, connaît lui-même des ruptures et des reculs que le modèle décrit moins bien que sa formation initiale.",
    ],
    evolution: [
      { p: 'IXᵉ–XIIIᵉ s.', f: "La compétition féodale entre seigneurs rivaux prépare, sans le vouloir, la concentration future du pouvoir." },
      { p: '1922', f: "Weber définit l'État moderne par ce monopole déjà constitué, sans en retracer la genèse historique." },
      { p: '1939', f: "Elias en propose la genèse complète, à travers le mécanisme monopolistique." },
    ],
  },
  'dynamique-des-relations': {
    detaille: [
      "La dynamique des relations est l'insistance d'Elias sur le fait qu'aucune configuration sociale n'est jamais figée : elle se transforme sans cesse, à mesure que chaque acteur, en poursuivant ses propres fins, modifie sans le vouloir la position de tous les autres.",
      "Cette dynamique n'a ni chef d'orchestre ni finalité assignée d'avance : comme une partie d'échecs jouée à des milliers, chaque coup change l'équilibre général sans qu'aucun joueur, même le plus puissant, ne maîtrise entièrement la suite du jeu.",
      "Elias en fait le fondement d'une véritable sociologie des processus, opposée à toute analyse qui traiterait la société comme une structure stable qu'il suffirait de décrire à un instant donné, sans se soucier de son mouvement propre.",
    ],
    origine: {
      oeuvre: "Qu'est-ce que la sociologie ?",
      annee: '1970',
      contexte:
        "Elias défend une sociologie processuelle contre les approches structuralistes ou fonctionnalistes de son temps, qu'il juge trop attachées à des états stables plutôt qu'au mouvement continu des relations sociales.",
    },
    exemples: [
      "Un marché du travail dont l'équilibre se déplace en permanence à mesure que chaque recrutement modifie la position relative de tous les candidats encore en lice.",
      "Une rivalité sportive dont chaque victoire redistribue les positions de tous les concurrents, sans qu'aucun classement ne reste jamais acquis.",
    ],
    oeuvres: [
      { y: '1970', t: "Qu'est-ce que la sociologie ?" },
      { y: '1969', t: 'La Société de cour' },
    ],
    associes: ['configuration', 'sociogenese'],
    opposes: ['systeme-social'],
    critiques: [
      "Parsons objecterait qu'une société a besoin d'un minimum d'équilibre stable pour simplement se reproduire, ce qu'une insistance exclusive sur le mouvement risque de sous-estimer.",
      "Le concept, très général, décrit une propriété de toute vie sociale plutôt qu'un mécanisme précis et testable.",
      "Il dit peu des périodes de relative stabilité, pourtant observables historiquement, où le mouvement des relations ralentit sensiblement sans jamais s'arrêter tout à fait.",
    ],
    evolution: [
      { p: '1939', f: "Le principe processuel travaille déjà La Dynamique de l'Occident, dans son titre même." },
      { p: '1970', f: "Qu'est-ce que la sociologie ? en fait un principe méthodologique explicite, contre le structuralisme et le fonctionnalisme." },
    ],
  },
  'sociogenese': {
    detaille: [
      "La sociogenèse est la méthode par laquelle Elias retrace, sur plusieurs siècles, la formation progressive des institutions sociales — l'État, la cour, les manières de table — pour comprendre non ce qu'elles sont figées à un instant, mais comment elles sont devenues ce qu'elles sont.",
      "Elle s'oppose à toute analyse qui prendrait une institution comme une donnée déjà là, à décrire dans sa seule structure présente : pour Elias, comprendre un phénomène social suppose toujours de reconstituer le long processus historique qui l'a produit.",
      "Elle va toujours de pair, dans son œuvre, avec la psychogenèse : les transformations sociales de longue durée et les transformations de la structure psychique des individus s'expliquent l'une par l'autre, jamais l'une sans l'autre.",
    ],
    origine: {
      oeuvre: 'La Civilisation des mœurs',
      annee: '1939',
      contexte:
        "Elias construit cette méthode pour expliquer, plutôt que simplement décrire, la formation des manières européennes modernes — en la reliant systématiquement à la formation parallèle des États centralisés.",
    },
    exemples: [
      "L'histoire longue de la centralisation étatique française, reconstituée sur plusieurs siècles plutôt que décrite comme un fait acquis une fois pour toutes.",
      "La formation progressive de l'étiquette de cour, dont chaque règle porte la trace d'une rivalité de pouvoir aujourd'hui oubliée.",
    ],
    oeuvres: [
      { y: '1939', t: 'La Civilisation des mœurs' },
      { y: '1969', t: 'La Société de cour' },
    ],
    associes: ['dynamique-des-relations', 'psychogenese', 'processus-de-civilisation'],
    opposes: ['fait-social'],
    critiques: [
      "Durkheim objecterait qu'expliquer un fait social exige de le rattacher à d'autres faits sociaux présents, non de le dissoudre dans une généalogie historique toujours plus longue.",
      "La méthode suppose des sources continues sur plusieurs siècles, rarement disponibles avec la même richesse pour toutes les sociétés et toutes les institutions.",
      "Elle peut donner le sentiment d'un récit linéaire et orienté, alors même qu'Elias récuse toute idée de progrès nécessaire.",
    ],
    evolution: [
      { p: '1939', f: "La Civilisation des mœurs applique la méthode sociogénétique aux manières européennes." },
      { p: '1969', f: 'La Société de cour en fait la démonstration la plus aboutie, à propos de Versailles.' },
      { p: '1970', f: "Qu'est-ce que la sociologie ? formalise la méthode et sa complémentarité avec la psychogenèse." },
    ],
  },
  'psychogenese': {
    detaille: [
      "La psychogenèse est le versant individuel de la méthode d'Elias : retracer, sur la longue durée, comment la structure psychique des individus — leur économie des pulsions, leur seuil de honte, leur capacité d'autocontrôle — s'est elle-même transformée au fil des siècles.",
      "Elle refuse de traiter la psychologie comme une donnée universelle et intemporelle, la même à toute époque : pour Elias, la sensibilité, la pudeur ou le seuil de tolérance à la violence ont une histoire, qui se lit dans les mêmes sources que l'histoire sociale.",
      "Son originalité tient à ce lien constant avec la sociogenèse : la structure psychique d'un individu à une époque donnée n'est jamais indépendante de la configuration sociale — chaînes d'interdépendance, monopole de la violence — dans laquelle il grandit.",
    ],
    origine: {
      oeuvre: 'La Civilisation des mœurs',
      annee: '1939',
      contexte:
        "Elias s'inspire de la psychanalyse freudienne, mais en historicise les catégories : le refoulement et la formation du surmoi ne sont plus, chez lui, des invariants, mais des processus dont l'intensité varie selon les époques.",
    },
    exemples: [
      "Un seuil de tolérance à la violence physique très différent selon les siècles, documenté par l'évolution des châtiments jugés acceptables ou scandaleux.",
      "Une pudeur corporelle croissante, visible dans l'évolution des règles concernant la nudité et les fonctions corporelles au fil des traités de civilité.",
    ],
    oeuvres: [
      { y: '1939', t: 'La Civilisation des mœurs' },
    ],
    associes: ['sociogenese', 'autocontrole', 'processus-de-civilisation'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "Freud objecterait qu'une part de l'économie psychique qu'Elias historicise relève en réalité de structures universelles, communes à toutes les sociétés humaines.",
      "Le concept repose sur des sources indirectes — traités de savoir-vivre — pour reconstituer des états psychiques qu'aucune source directe ne permet d'observer.",
      "Il peine à rendre compte des variations psychiques à l'intérieur d'une même époque, entre classes sociales ou entre individus soumis à des configurations différentes.",
    ],
    evolution: [
      { p: '1900–1930', f: "Freud élabore la théorie du refoulement et de la formation du surmoi, matrice dont Elias s'inspire." },
      { p: '1939', f: "La Civilisation des mœurs historicise ces catégories dans une perspective sociogénétique." },
      { p: '1970', f: "Qu'est-ce que la sociologie ? formalise le lien systématique entre psychogenèse et sociogenèse." },
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
    associes: ['effets-pervers', 'prophetie-autorealisatrice', 'systeme-social', 'fonction-manifeste', 'dysfonction'],
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
    associes: ['anomie', 'carriere-deviante', 'fonction-latente', 'structure-culturelle', 'conformite', 'innovation-mertonienne', 'ritualisme', 'retrait', 'rebellion'],
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
  'fonction-manifeste': {
    detaille: [
      "La fonction manifeste d'une pratique est la conséquence qu'elle produit intentionnellement, celle que ses participants reconnaissent et avancent eux-mêmes pour la justifier — le motif affiché, par opposition à ce que la pratique produit réellement mais sans le savoir.",
      "Merton insiste : distinguer manifeste et latent n'est pas juger qu'un motif serait plus vrai que l'autre, mais reconnaître qu'une même pratique peut viser une chose et en accomplir une autre, sans que les deux se contredisent nécessairement.",
    ],
    origine: {
      oeuvre: 'Éléments de théorie et de méthode sociologiques',
      annee: '1949',
      contexte:
        "Merton forge le couple manifeste/latent pour discipliner l'analyse fonctionnelle, en distinguant systématiquement ce qu'une pratique prétend faire de ce qu'elle fait réellement.",
    },
    exemples: [
      "Un entretien annuel d'évaluation, dont la fonction manifeste est de mesurer objectivement une performance individuelle sur l'année écoulée.",
    ],
    oeuvres: [
      { y: '1949', t: 'Éléments de théorie et de méthode sociologiques, chapitre I' },
    ],
    associes: ['fonction-latente', 'dysfonction'],
    opposes: ['effets-pervers'],
    critiques: [
      "La distinction suppose de pouvoir accéder à l'intention réelle des acteurs, un accès jamais garanti pour l'observateur extérieur.",
      "Une même pratique peut avoir plusieurs fonctions manifestes concurrentes selon les acteurs concernés, ce que la dichotomie simple manifeste/latent ne rend pas toujours bien.",
    ],
    evolution: [
      { p: '1949', f: "Merton formule le couple manifeste/latente comme outil de rigueur pour l'analyse fonctionnelle." },
      { p: '1957', f: "L'édition augmentée de Social Theory and Social Structure en systématise l'usage." },
    ],
  },
  'dysfonction': {
    detaille: [
      "Contre l'image d'un système toujours en équilibre que Parsons pouvait laisser entendre, Merton introduit la dysfonction : une conséquence qui affaiblit l'adaptation ou la cohésion d'un système, plutôt que de la servir.",
      "La même pratique peut de surcroît être fonctionnelle pour un groupe et dysfonctionnelle pour un autre à l'intérieur de la même société — ce qui interdit de juger, sans préciser pour qui, qu'une institution est simplement « utile » ou « nuisible ».",
    ],
    origine: {
      oeuvre: 'Éléments de théorie et de méthode sociologiques',
      annee: '1949',
      contexte:
        "Merton ajoute la dysfonction pour corriger ce qu'il perçoit comme un biais conservateur du fonctionnalisme parsonien, qui présente trop facilement l'existant comme nécessairement utile.",
    },
    exemples: [
      "Une règle de sécurité qui protège efficacement une usine des accidents, mais ralentit tant la production qu'elle menace la compétitivité de l'entreprise face à ses concurrents.",
    ],
    oeuvres: [
      { y: '1949', t: 'Éléments de théorie et de méthode sociologiques, chapitre I' },
    ],
    associes: ['fonction-latente', 'fonction-manifeste'],
    opposes: ['equilibre-social'],
    critiques: [
      "Le concept ne dit pas toujours pour qui exactement une pratique est dysfonctionnelle, ce qui peut en réduire la portée explicative si on ne le précise pas.",
      "Une pratique jugée dysfonctionnelle à court terme peut se révéler fonctionnelle à plus long terme, et inversement, ce qui complique toute évaluation figée.",
    ],
    evolution: [
      { p: '1949', f: "Merton introduit la dysfonction dans son cadre d'analyse fonctionnelle." },
      { p: '1959', f: "Dahrendorf et Mills s'appuient sur cette ouverture pour critiquer plus largement le fonctionnalisme parsonien, jugé incapable de penser le conflit." },
    ],
  },
  'structure-culturelle': {
    detaille: [
      "La structure culturelle regroupe les buts et les critères de réussite qu'une culture prescrit à tous ses membres comme désirables, indépendamment de la position de départ de chacun — la réussite matérielle, aux États-Unis, en est pour Merton l'exemple le plus net.",
      "Cette structure culturelle ne se confond pas avec la structure sociale, qui distribue de façon très inégale les moyens légitimes d'atteindre ces mêmes buts : c'est précisément l'écart entre les deux qui produit, selon Merton, la tension anomique.",
    ],
    origine: {
      oeuvre: 'Social Structure and Anomie',
      annee: '1938',
      contexte:
        "Merton distingue structure culturelle et structure sociale pour localiser précisément la source de la tension qu'il décrit, plutôt que de la loger dans un vague dérèglement général des attentes.",
    },
    exemples: [
      "Une publicité qui promet la même réussite à quiconque « le veut vraiment », sans jamais mentionner l'inégalité des points de départ réels face à cette promesse.",
    ],
    oeuvres: [
      { y: '1938', t: 'Social Structure and Anomie' },
    ],
    associes: ['structure-sociale', 'tension-anomique'],
    opposes: ['habitus'],
    critiques: [
      "Le concept suppose un consensus culturel sur les buts valorisés, que la diversité réelle des sociétés contemporaines rend de plus en plus difficile à soutenir tel quel.",
      "Il traite les buts culturels comme un donné stable, quand ils évoluent eux-mêmes dans le temps sous l'effet des mêmes tensions qu'ils contribuent à produire.",
    ],
    evolution: [
      { p: '1938', f: "Merton distingue structure culturelle et structure sociale dans Social Structure and Anomie." },
      { p: '1951', f: "Parsons développe en parallèle sa propre théorie de la structure sociale, dans un cadre plus général." },
    ],
  },
  'conformite': {
    detaille: [
      "La conformité est, pour Merton, l'adaptation la plus courante statistiquement : accepter à la fois les buts que la culture prescrit et les moyens institutionnalisés, légitimes, prévus pour les atteindre — sans quoi aucune société ne pourrait durablement fonctionner.",
      "C'est précisément parce que la conformité domine numériquement que la société conserve sa stabilité malgré l'existence des quatre autres adaptations, plus visibles mais minoritaires.",
    ],
    origine: {
      oeuvre: 'Social Structure and Anomie',
      annee: '1938',
      contexte:
        "Merton pose la conformité comme le premier terme de sa typologie des cinq adaptations à la tension entre buts culturels et moyens institutionnalisés.",
    },
    exemples: [
      "Poursuivre des études, chercher un emploi stable et progresser par l'ancienneté ou le mérite reconnu, en suivant les étapes attendues sans jamais s'en écarter.",
    ],
    oeuvres: [
      { y: '1938', t: 'Social Structure and Anomie' },
    ],
    associes: ['tension-anomique', 'innovation-mertonienne'],
    opposes: ['rebellion'],
    critiques: [
      "Le modèle traite la conformité comme allant de soi statistiquement, sans toujours interroger ce qui la rend elle-même coûteuse pour certains groupes sociaux.",
      "La frontière entre conformité authentique et conformité de façade, purement stratégique, reste difficile à établir empiriquement.",
    ],
    evolution: [
      { p: '1938', f: "Merton pose la conformité comme adaptation dominante dans sa typologie." },
    ],
  },
  'innovation-mertonienne': {
    detaille: [
      "L'innovation, chez Merton, désigne l'adaptation qui accepte pleinement les buts culturels valorisés — la réussite matérielle — mais recourt à des moyens illégitimes pour les atteindre, faute d'accès suffisant aux moyens institutionnalisés.",
      "Le mot ne renvoie donc pas ici à une nouveauté technique ou créative au sens courant : c'est une innovation dans les moyens employés pour atteindre un but que la société elle-même a fixé comme désirable pour tous.",
    ],
    origine: {
      oeuvre: 'Social Structure and Anomie',
      annee: '1938',
      contexte:
        "Merton cherche à expliquer une partie de la délinquance économique américaine sans recourir à la pathologie individuelle, en la reliant plutôt à un écart structurel entre buts et moyens disponibles.",
    },
    exemples: [
      "Un trafic organisé qui vise exactement la même réussite matérielle que la société valorise ouvertement, par une voie que le droit interdit.",
    ],
    oeuvres: [
      { y: '1938', t: 'Social Structure and Anomie' },
    ],
    associes: ['tension-anomique', 'conformite'],
    opposes: ['ritualisme'],
    critiques: [
      "Le modèle explique mal l'innovation illégitime chez des personnes disposant pourtant de moyens légitimes suffisants pour réussir autrement.",
      "Il traite comme homogène une catégorie qui recouvre en réalité des situations très différentes, de la petite entorse à la criminalité organisée.",
    ],
    evolution: [
      { p: '1938', f: "Merton isole l'innovation comme réponse à l'écart entre buts et moyens légitimes." },
      { p: '1960', f: "Cloward et Ohlin en tirent la théorie des sous-cultures délinquantes, en ajoutant l'accès inégal aux moyens illégitimes eux-mêmes." },
    ],
  },
  'ritualisme': {
    detaille: [
      "Le ritualisme abandonne l'ambition des buts culturels — la réussite, la promotion, l'ascension — tout en continuant, souvent par sécurité ou par habitude, à suivre scrupuleusement les moyens institutionnalisés prévus pour les atteindre.",
      "Merton en fait une déviance discrète, presque invisible, puisqu'elle ne transgresse aucune règle : c'est au contraire un excès de conformité aux moyens, détaché du but qui leur donnait initialement leur sens.",
    ],
    origine: {
      oeuvre: 'Social Structure and Anomie',
      annee: '1938',
      contexte:
        "Merton observe une figure fréquente dans les grandes organisations bureaucratiques américaines de son temps : l'employé qui applique la règle à la lettre, sans plus rien attendre au-delà.",
    },
    exemples: [
      "Un agent administratif qui suit chaque procédure avec une rigueur absolue, ayant depuis longtemps renoncé à toute perspective de promotion ou de reconnaissance particulière.",
    ],
    oeuvres: [
      { y: '1938', t: 'Social Structure and Anomie' },
    ],
    associes: ['tension-anomique', 'retrait'],
    opposes: ['innovation-mertonienne'],
    critiques: [
      "Le concept peine à distinguer un ritualisme réellement défensif d'un simple respect scrupuleux des règles, positivement valorisé dans certains métiers.",
      "Il présente le renoncement à l'ambition comme un problème à expliquer, ce qui présuppose que l'ambition constante serait, elle, la norme naturelle à atteindre.",
    ],
    evolution: [
      { p: '1938', f: "Merton isole le ritualisme comme adaptation à l'écart entre buts et moyens." },
      { p: '1956', f: "Whyte, dans L'Homme de l'organisation, en décrit une version proche chez le cadre moyen américain d'après-guerre." },
    ],
  },
  'retrait': {
    detaille: [
      "Le retrait rejette à la fois les buts culturels valorisés et les moyens institutionnalisés prévus pour les atteindre, sans leur substituer aucun autre but ni aucun autre moyen — une sortie du jeu social plutôt qu'une déviance active dirigée contre lui.",
      "Merton la présente comme la moins fréquente et la plus radicale des cinq adaptations : contrairement au ritualiste, qui reste engagé dans les moyens, la personne en retrait s'est désengagée de l'ensemble du système de buts et de moyens que sa société lui propose.",
    ],
    origine: {
      oeuvre: 'Social Structure and Anomie',
      annee: '1938',
      contexte:
        "Merton cherche à rendre compte, dans sa typologie, de situations de rupture totale avec les attentes ordinaires d'une société, distinctes des formes plus actives de déviance qu'il décrit par ailleurs.",
    },
    exemples: [
      "Une personne qui a cessé de rechercher tant la réussite valorisée par son entourage que les moyens conventionnels d'y prétendre, sans chercher à leur substituer d'autres objectifs.",
    ],
    oeuvres: [
      { y: '1938', t: 'Social Structure and Anomie' },
    ],
    associes: ['tension-anomique', 'ritualisme'],
    opposes: ['agir-communicationnel'],
    critiques: [
      "La catégorie regroupe des situations très hétérogènes — choix personnel assumé, épuisement, exclusion subie — sous un même mot qui les traite comme équivalentes.",
      "Merton lui-même reconnaît qu'elle reste la moins documentée empiriquement des cinq adaptations de sa typologie.",
    ],
    evolution: [
      { p: '1938', f: "Merton isole le retrait comme rejet simultané des buts et des moyens institutionnalisés." },
    ],
  },
  'rebellion': {
    detaille: [
      "La rébellion rejette elle aussi les buts culturels et les moyens institutionnalisés en vigueur, mais à la différence du retrait, elle leur substitue de nouveaux buts et de nouveaux moyens, et cherche activement à transformer l'ordre social existant plutôt qu'à s'en retirer.",
      "Merton en fait la seule des cinq adaptations orientée vers le changement collectif plutôt que vers un ajustement individuel : c'est la réponse d'un groupe qui refuse la définition même de ce qui vaut d'être réussi, pas seulement les moyens d'y parvenir.",
    ],
    origine: {
      oeuvre: 'Social Structure and Anomie',
      annee: '1938',
      contexte:
        "Merton distingue cette adaptation des quatre autres pour rendre compte des mouvements qui ne demandent pas seulement une meilleure part du système existant, mais un système différent.",
    },
    exemples: [
      "Un mouvement qui ne réclame pas seulement un meilleur accès à la réussite matérielle telle qu'elle est définie, mais propose une tout autre définition de ce qui devrait être collectivement valorisé.",
    ],
    oeuvres: [
      { y: '1938', t: 'Social Structure and Anomie' },
    ],
    associes: ['tension-anomique', 'conflit-de-classes'],
    opposes: ['conformite'],
    critiques: [
      "La frontière entre rébellion et innovation reste parfois ténue, notamment quand un mouvement conteste les moyens en vigueur sans toujours proposer de nouveaux buts clairement articulés.",
      "Le concept reste plus descriptif qu'explicatif sur les conditions précises qui font basculer une tension individuelle vers une mobilisation collective organisée.",
    ],
    evolution: [
      { p: '1938', f: "Merton isole la rébellion comme seule adaptation orientée vers la transformation collective de l'ordre existant." },
    ],
  },
  'groupe-de-reference': {
    detaille: [
      "Un groupe de référence est le groupe — qu'on en soit membre ou non — dont on emprunte les normes et les valeurs pour évaluer sa propre situation, orienter ses conduites et mesurer sa réussite ou son échec.",
      "Merton montre que ce groupe n'est pas nécessairement celui auquel on appartient effectivement : on peut se comparer et s'orienter par rapport à un groupe auquel on aspire, ce qui explique pourquoi deux personnes dans une situation objectivement comparable peuvent la vivre très différemment.",
    ],
    origine: {
      oeuvre: 'Social Theory and Social Structure',
      annee: '1950',
      contexte:
        "Merton reprend et systématise des observations faites pendant la Seconde Guerre mondiale sur la satisfaction des soldats américains, qui dépendait moins de leur situation objective que du groupe auquel ils se comparaient.",
    },
    exemples: [
      "Un soldat bien noté dans une unité aux promotions rares se sent moins satisfait qu'un soldat moins bien noté dans une unité où les promotions sont fréquentes, chacun se comparant à ceux qui l'entourent.",
    ],
    oeuvres: [
      { y: '1950', t: 'Social Theory and Social Structure' },
      { y: '1949', t: "Contributions to the Theory of Reference Group Behavior" },
    ],
    associes: ['socialisation-anticipatrice', 'role-et-attentes'],
    opposes: ['habitus'],
    critiques: [
      "Le concept explique mal pourquoi un individu choisit tel groupe de référence plutôt qu'un autre parmi tous ceux auxquels il pourrait en principe se comparer.",
      "Il suppose une capacité de comparaison sociale assez délibérée, quand une bonne part des repères de comparaison reste largement implicite ou inconsciente.",
    ],
    evolution: [
      { p: '1949', f: "Merton et Kitt systématisent la notion à partir des données de l'étude The American Soldier." },
      { p: '1950', f: "Social Theory and Social Structure en donne l'exposé de référence." },
      { p: '1966', f: "Le concept nourrit les théories de la privation relative, notamment chez Runciman." },
    ],
  },
  'socialisation-anticipatrice': {
    detaille: [
      "La socialisation anticipatrice désigne le fait d'adopter, avant même d'en faire partie, les normes et les valeurs d'un groupe auquel on aspire à appartenir — une préparation qui facilite ensuite l'entrée réelle dans ce groupe.",
      "Le mécanisme peut aussi comporter un coût : en adoptant par avance les codes d'un groupe convoité, on risque de se couper du groupe auquel on appartient effectivement, sans être encore pleinement accepté par celui qu'on vise.",
    ],
    origine: {
      oeuvre: 'Social Theory and Social Structure',
      annee: '1950',
      contexte:
        "Merton développe ce prolongement de la théorie du groupe de référence en observant comment certains soldats, dans l'étude The American Soldier, adoptaient déjà les attitudes des officiers avant toute promotion effective.",
    },
    exemples: [
      "Un étudiant en droit qui commence à adopter le vocabulaire et les manières d'un cabinet prestigieux bien avant d'y avoir jamais travaillé.",
    ],
    oeuvres: [
      { y: '1950', t: 'Social Theory and Social Structure' },
    ],
    associes: ['groupe-de-reference', 'socialisation'],
    opposes: ['carriere-deviante'],
    critiques: [
      "Le mécanisme fonctionne surtout pour des groupes dont l'accès reste réaliste : il explique mal les aspirations vers des groupes structurellement fermés.",
      "Il peut se retourner contre celui qui l'adopte, en le faisant paraître prétentieux ou déloyal envers son groupe d'origine, sans garantie d'acceptation par le groupe visé.",
    ],
    evolution: [
      { p: '1950', f: "Merton formule la socialisation anticipatrice comme prolongement de la théorie du groupe de référence." },
      { p: '1957', f: "Le concept est repris pour analyser la mobilité sociale ascendante et ses coûts relationnels." },
    ],
  },
  'effet-matthieu': {
    detaille: [
      "En étudiant la répartition de la reconnaissance dans le monde scientifique, Merton observe que les chercheurs déjà renommés reçoivent, pour une contribution comparable, davantage de crédit que leurs collègues moins connus — un avantage qui s'accumule et se renforce lui-même dans le temps.",
      "Il nomme le phénomène d'après un verset de l'évangile selon Matthieu : « Car on donnera à celui qui a, et il sera dans l'abondance, mais à celui qui n'a pas, on ôtera même ce qu'il a » — la reconnaissance, comme le capital, attire la reconnaissance.",
    ],
    origine: {
      oeuvre: 'The Matthew Effect in Science',
      annee: '1968',
      contexte:
        "Merton s'appuie sur des entretiens avec des lauréats du prix Nobel, qui reconnaissent eux-mêmes recevoir souvent un crédit disproportionné pour des travaux menés en collaboration avec des chercheurs moins établis.",
    },
    exemples: [
      "Une découverte réalisée collectivement, dont les comptes rendus publics et les citations ultérieures attribuent l'essentiel du mérite au membre le plus reconnu de l'équipe.",
    ],
    oeuvres: [
      { y: '1968', t: 'The Matthew Effect in Science' },
      { y: '1988', t: 'The Matthew Effect in Science, II' },
    ],
    associes: ['prophetie-autorealisatrice', 'capital-symbolique'],
    opposes: ['meritocratie'],
    critiques: [
      "Le concept reste surtout documenté dans le monde académique ; son extension à d'autres domaines (l'économie, les médias) demande à être vérifiée au cas par cas.",
      "Il explique la persistance des inégalités de reconnaissance sans toujours dire ce qui a produit l'écart initial, avant que l'effet cumulatif ne prenne le relais.",
    ],
    evolution: [
      { p: '1968', f: "Merton nomme et documente l'effet Matthieu dans le monde de la recherche scientifique." },
      { p: '1988', f: "Merton prolonge l'analyse en la reliant plus explicitement aux mécanismes d'accumulation du capital symbolique." },
      { p: '2000', f: "Le concept est repris hors du champ scientifique pour analyser la popularité cumulative dans les industries culturelles et numériques." },
    ],
  },
  'consequences-inattendues': {
    detaille: [
      "Dans son tout premier article majeur, Merton identifie plusieurs raisons pour lesquelles une action délibérée, entreprise pour atteindre un but précis, produit souvent des effets que personne n'avait anticipés : l'ignorance, l'erreur d'appréciation, l'urgence d'un intérêt immédiat qui masque les conséquences à long terme, des valeurs qui interdisent certaines options même efficaces, et des prédictions qui se démentent elles-mêmes une fois connues.",
      "Ce texte de jeunesse pose déjà, avant la fonction latente ou la tension anomique, le principe qui traversera toute l'œuvre de Merton : les conséquences réelles d'une action sociale ne coïncident jamais totalement avec les intentions de ceux qui l'entreprennent.",
    ],
    origine: {
      oeuvre: 'The Unanticipated Consequences of Purposive Social Action',
      annee: '1936',
      contexte:
        "Merton publie cet article à vingt-six ans dans l'American Sociological Review, avant même sa thèse de doctorat, et y expose déjà la matrice de toute sa sociologie ultérieure.",
    },
    exemples: [
      "Une mesure prise dans l'urgence pour répondre à un problème immédiat, qui déplace ou aggrave, sans que personne ne l'ait voulu, un problème différent à plus long terme.",
    ],
    oeuvres: [
      { y: '1936', t: 'The Unanticipated Consequences of Purposive Social Action' },
    ],
    associes: ['fonction-latente', 'effets-pervers'],
    opposes: ['rationalite-instrumentale'],
    critiques: [
      "La typologie des causes reste largement descriptive, sans hiérarchie claire entre elles ni méthode pour les distinguer empiriquement dans un cas donné.",
      "Boudon objecte qu'une bonne part de ces conséquences n'a besoin d'aucune ignorance ni erreur pour survenir : l'agrégation de choix individuellement rationnels y suffit déjà.",
    ],
    evolution: [
      { p: '1936', f: "Merton pose la matrice des conséquences inattendues de l'action sociale." },
      { p: '1949', f: "Le texte prépare directement la distinction entre fonction manifeste et fonction latente." },
      { p: '1977', f: "Boudon radicalise et systématise l'intuition dans sa théorie des effets pervers." },
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
  'capital-economique': {
    detaille: [
      "Bourdieu part du capital économique — la richesse directement convertible en argent : revenus, patrimoine, biens matériels — comme d'une base, avant de montrer que la position sociale ne s'y réduit jamais complètement.",
      "Il reprend le mot à Marx, mais généralise son usage : l'argent n'est qu'une des monnaies dans lesquelles s'exprime la position sociale, à côté du capital culturel, social et symbolique, en principe convertibles les uns dans les autres au prix d'un travail et d'un temps de conversion.",
      "Le capital économique reste néanmoins la forme la plus liquide et la plus directement transmissible : c'est par rapport à lui, et à sa dissimulation possible, que Bourdieu définit les autres capitaux.",
    ],
    origine: {
      oeuvre: 'La Distinction',
      annee: '1979',
      contexte:
        "Bourdieu construit l'espace social français à deux dimensions — volume global du capital, et structure entre économique et culturel — et a besoin d'un capital économique nettement défini pour faire apparaître l'autre axe.",
    },
    exemples: [
      "Deux successions transmises la même année : un patrimoine immobilier d'un côté, un réseau de relations et une aisance sociale de l'autre — deux héritages, une seule catégorie fiscale.",
      "Un chef d'entreprise fortuné mais peu à l'aise dans un dîner mondain, qui découvre que sa richesse n'y suffit pas à elle seule.",
    ],
    oeuvres: [
      { y: '1979', t: 'La Distinction' },
      { y: '1986', t: 'The Forms of Capital' },
    ],
    associes: ['capital-culturel', 'capital-social', 'capital-symbolique'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "Faire de l'économique le capital de référence, celui par rapport auquel les autres se définissent, reconduit une hiérarchie que Bourdieu prétend justement dénaturaliser.",
      "La frontière avec le capital culturel institutionnalisé — un diplôme se vend, s'hérite, se monnaie — est plus poreuse que le modèle ne le dit.",
      "Boudon objecte qu'un cadre unique de « capitaux » masque des logiques d'acquisition très différentes, économique d'un côté, cognitive de l'autre.",
    ],
    evolution: [
      { p: '1867', f: "Marx pose le capital économique comme rapport social d'exploitation, non comme simple somme d'argent." },
      { p: '1979', f: "Bourdieu le reprend comme base de son espace social, dans La Distinction." },
      { p: '1986', f: "The Forms of Capital en donne la formulation la plus systématique, avec les trois autres capitaux." },
      { p: '1990–2010', f: "Le vocabulaire du « capital » se diffuse hors sociologie, jusqu'en économie du développement, au risque de perdre sa charge critique d'origine." },
    ],
  },
  'capital-social': {
    detaille: [
      "Le capital social est l'ensemble des ressources actuelles ou potentielles liées à un réseau durable de relations, plus ou moins institutionnalisé, de connaissance et de reconnaissance mutuelles.",
      "Il ne se réduit pas au nombre de relations : il dépend aussi du capital — économique, culturel, symbolique — que détiennent ceux avec qui l'on est lié, et de l'effort constant qu'il faut fournir pour entretenir le lien, sous peine de le voir se déprécier.",
      "Bourdieu insiste sur le travail que suppose ce capital, largement invisible : cadeaux, visites, obligations rendues — un travail qui transforme des relations utiles en relations qui paraissent désintéressées.",
    ],
    origine: {
      oeuvre: 'Le Capital social. Notes provisoires',
      annee: '1980',
      contexte:
        "Bourdieu publie un court texte de méthode dans les Actes de la recherche en sciences sociales, pour compléter sa théorie des capitaux d'une dimension relationnelle jusque-là sous-développée.",
    },
    exemples: [
      "Un poste pourvu par cooptation avant même d'être annoncé, grâce à une relation prête à se porter garante.",
      "Une carte de vœux annuelle qui ne coûte rien et entretient, des années durant, un lien qu'on pourra un jour solliciter.",
    ],
    oeuvres: [
      { y: '1980', t: 'Le Capital social. Notes provisoires' },
      { y: '1986', t: 'The Forms of Capital' },
    ],
    associes: ['capital-economique', 'capital-culturel', 'champ'],
    opposes: ['ressources-sociales'],
    critiques: [
      "Coleman puis Putnam donneront au même mot un sens presque inverse : une ressource collective, bénéfique à toute la communauté, plutôt qu'un avantage privé qui reconduit les inégalités.",
      "La frontière entre capital social et simple sociabilité n'est pas tracée : toute relation devient, après coup, un placement.",
      "La mesure est délicate : on approche le capital social par le nombre de relations déclarées, ce qui néglige leur qualité et leur composition en capital.",
    ],
    evolution: [
      { p: '1980', f: "Bourdieu formule le concept comme ressource liée au réseau, convertible avec les autres capitaux." },
      { p: '1981', f: "Aux États-Unis, Nan Lin formalise en parallèle une théorie des « ressources sociales » mobilisées par l'individu à travers son réseau — proche dans l'esprit de la lecture individualiste de Boudon, sans lien direct entre les deux." },
      { p: '1988', f: "Coleman en propose une version fonctionnaliste : le capital social comme bien collectif qui facilite l'action." },
      { p: '1995', f: "Putnam le popularise à l'échelle des nations, comme indicateur du lien civique déclinant." },
    ],
  },
  'capital-symbolique': {
    detaille: [
      "Le capital symbolique n'est pas une quatrième espèce de capital à côté des trois autres : c'est ce que devient n'importe lequel d'entre eux — économique, culturel, social — une fois perçu comme légitime par ceux qui le reconnaissent, au point de ne plus apparaître comme un capital du tout.",
      "Sa force tient précisément à cette méconnaissance : un capital symbolique reconnu se présente comme un mérite, un talent naturel ou une évidence, jamais comme un rapport de force accumulé.",
      "Bourdieu l'élabore d'abord sur le terrain kabyle, à propos de l'honneur, avant de le généraliser à toutes les sociétés : ce qui varie n'est pas le mécanisme, mais ce que chaque champ reconnaît comme digne d'estime.",
    ],
    origine: {
      oeuvre: "Esquisse d'une théorie de la pratique",
      annee: '1972',
      contexte:
        "Bourdieu observe en Kabylie une économie de l'honneur et du don qui, sans passer par l'argent, produit pourtant des hiérarchies aussi contraignantes qu'une économie marchande.",
    },
    exemples: [
      "Un don qui semble gratuit et qui engage pourtant son bénéficiaire, tenu d'en rendre un jour la pareille sous peine de déchoir.",
      "Une signature ou un nom qui, apposé sur un projet, lui vaut un crédit qu'aucun argument supplémentaire n'obtiendrait.",
    ],
    oeuvres: [
      { y: '1972', t: "Esquisse d'une théorie de la pratique" },
      { y: '1994', t: 'Raisons pratiques' },
    ],
    associes: ['capital-economique', 'capital-culturel', 'capital-social', 'prestige-social'],
    opposes: ['domination-legitime'],
    critiques: [
      "Le concept explique après coup n'importe quelle hiérarchie par la reconnaissance qu'elle obtient, ce qui frôle la tautologie : est légitime ce qui est reconnu, est reconnu ce qui est légitime.",
      "Il suppose une méconnaissance chez le dominé que Bourdieu, lui, saurait percer — retour de l'objection déjà faite à la violence symbolique.",
      "Le passage entre les formes de capital reste plus affirmé que démontré : rien ne dit précisément à quel taux un capital culturel se convertit en capital symbolique.",
    ],
    evolution: [
      { p: '1972', f: "Bourdieu forge le concept à partir de son terrain kabyle, autour de l'honneur et du don." },
      { p: '1979–1980', f: "Extension à la France contemporaine, où le capital symbolique recouvre le prestige et la distinction." },
      { p: '1994', f: "Raisons pratiques en généralise l'usage à tous les champs, y compris scientifique et politique." },
      { p: '1998', f: "La Domination masculine applique le mécanisme au rapport entre les sexes, comme forme extrême de méconnaissance." },
    ],
  },
  'position-sociale': {
    detaille: [
      "Une position sociale se définit relationnellement : ce n'est pas un rang sur une échelle unique, mais un point dans un espace à plusieurs dimensions, déterminé par le volume global des capitaux qu'un agent détient et par leur structure — la part respective de l'économique et du culturel.",
      "Deux agents peuvent détenir le même volume de capital et occuper des positions différentes selon la composition de ce capital : un professeur et un commerçant peuvent gagner autant, l'un riche en capital culturel, l'autre en capital économique, et occuper des régions opposées de l'espace social.",
      "L'espace des positions n'existe qu'en tant que système : une position ne se comprend que par sa distance et sa proximité avec toutes les autres, jamais isolément.",
    ],
    origine: {
      oeuvre: 'La Distinction',
      annee: '1979',
      contexte:
        "Bourdieu construit une carte de l'espace social français à partir d'une vaste enquête sur les pratiques culturelles, pour montrer que le goût trahit la position occupée plus sûrement qu'aucune déclaration.",
    },
    exemples: [
      "Deux ménages au revenu identique qui ne fréquentent ni les mêmes lieux de vacances, ni les mêmes établissements scolaires, parce que la composition de leur capital diffère.",
      "Un changement de quartier qui, à revenu constant, déplace visiblement la position perçue d'une famille.",
    ],
    oeuvres: [
      { y: '1979', t: 'La Distinction' },
      { y: '1980', t: 'Le Sens pratique' },
    ],
    associes: ['capital-economique', 'capital-culturel', 'champ'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "L'espace social de La Distinction est calé sur la France des années 1960 et 1970 : sa cartographie précise vieillit vite, même si son principe reste utilisé.",
      "Boudon objecte qu'un espace de positions décrit une structure figée là où il faudrait des acteurs capables d'y agir et parfois d'en déjouer les attentes.",
      "Réduire une position à deux dimensions — volume et structure du capital — laisse de côté ce que le genre, l'origine migratoire ou l'âge ajoutent à la hiérarchie.",
    ],
    evolution: [
      { p: '1966', f: "Premiers usages, dans les travaux du Centre de sociologie européenne sur l'espace des styles de vie." },
      { p: '1979', f: "La Distinction en donne la cartographie empirique complète, à partir d'une enquête nationale." },
      { p: '1980', f: "Le Sens pratique en formalise les deux dimensions : volume global et structure du capital." },
      { p: '1990–2015', f: "La méthode d'analyse géométrique des données que Bourdieu utilise pour cartographier ces positions devient un standard de la sociologie quantitative française." },
    ],
  },
  'capital-culturel-incorpore': {
    detaille: [
      "L'état incorporé du capital culturel est celui des dispositions elles-mêmes : une aisance de langage, une culture générale, un goût — tout ce qui s'est déposé dans le corps et l'esprit à force de fréquentation, sans qu'aucun acte formel ne le certifie.",
      "Il suppose un travail d'incorporation que personne ne peut faire à la place de l'agent, ni lui déléguer : contrairement à l'argent, il ne se transmet pas d'un coup, il s'acquiert lentement, souvent sans le savoir, dès la petite enfance.",
      "C'est cette lenteur qui le rend si difficile à rattraper une fois le départ manqué, et si facile à confondre avec un don : personne ne voit le temps qu'il a fallu pour qu'il paraisse naturel.",
    ],
    origine: {
      oeuvre: 'Les Trois États du capital culturel',
      annee: '1979',
      contexte:
        "Dans un article des Actes de la recherche en sciences sociales, Bourdieu distingue trois états du capital culturel pour préciser un concept jusque-là traité comme un bloc. L'incorporé en est la forme première, celle dont les deux autres dérivent.",
    },
    exemples: [
      "Une aisance à prendre la parole en réunion, acquise sans y penser dans une famille où l'on discutait à table, et que rien dans un CV ne mentionne.",
      "Un accent, une façon de tenir ses couverts ou de citer un auteur à propos : rien de tout cela ne figure sur un diplôme, et pourtant tout se remarque.",
    ],
    oeuvres: [
      { y: '1979', t: 'Les Trois États du capital culturel' },
      { y: '1979', t: 'La Distinction' },
    ],
    associes: ['capital-culturel', 'capital-culturel-objective', 'capital-culturel-institutionnalise', 'habitus'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "N'étant jamais mesuré directement, l'état incorporé se prête à toutes les attributions rétrospectives : on l'invoque pour expliquer un succès déjà constaté.",
      "Le confondre avec un talent est précisément ce que Bourdieu dénonce — mais le concept lui-même ne dit jamais à quel âge, ni comment, l'incorporation cesse d'être possible.",
      "Lahire objecte qu'un même individu incorpore des dispositions hétérogènes selon les milieux traversés, plutôt qu'un bloc culturel cohérent.",
    ],
    evolution: [
      { p: '1964–1970', f: "Les Héritiers puis La Reproduction esquissent la notion sans la nommer comme état distinct." },
      { p: '1979', f: "L'article des Trois États lui donne son nom et sa place dans la typologie." },
      { p: '1990–2010', f: "La sociologie de l'éducation en fait l'explication standard des écarts de réussite scolaire selon l'origine sociale." },
    ],
  },
  'capital-culturel-objective': {
    detaille: [
      "L'état objectivé est celui des biens culturels matériels : livres, tableaux, instruments, machines — tout ce qui peut se posséder, se transmettre en héritage et parfois se vendre, comme n'importe quel bien économique.",
      "Mais sa transmission légale ne transmet pas l'usage : hériter d'une bibliothèque ne donne pas la capacité de s'en servir, qui suppose l'état incorporé. L'objet reste inerte sans la disposition qui sait le déchiffrer.",
      "Bourdieu y voit un piège pour la théorie économique du capital humain : elle compte les biens culturels comme un patrimoine, sans voir que leur rendement dépend entièrement d'une compétence qui, elle, ne s'achète pas.",
    ],
    origine: {
      oeuvre: 'Les Trois États du capital culturel',
      annee: '1979',
      contexte:
        "Bourdieu isole cet état pour montrer ce que les biens culturels ont de commun avec le capital économique — la transmissibilité — et ce qui les en distingue radicalement : leur usage exige une compétence incorporée.",
    },
    exemples: [
      "Un piano hérité qui reste un meuble pour qui n'a jamais appris le solfège, et un instrument de travail pour qui en a reçu l'apprentissage.",
      "Une collection de tableaux revendue aux enchères pour sa valeur marchande, quand l'héritier n'a reçu ni le goût ni le regard qui la faisaient vivre.",
    ],
    oeuvres: [
      { y: '1979', t: 'Les Trois États du capital culturel' },
      { y: '1979', t: 'La Distinction' },
    ],
    associes: ['capital-culturel', 'capital-culturel-incorpore', 'capital-culturel-institutionnalise'],
    opposes: ['capital-economique'],
    critiques: [
      "La distinction entre bien objectivé et sa valeur marchande reste floue : un tableau de maître est aussi, et de plus en plus, un placement financier.",
      "Le concept dit peu de ce qui se passe quand l'objet change d'usage social, comme un instrument ancien devenu objet de collection plutôt que de pratique.",
      "Il suppose une frontière nette entre biens culturels et biens ordinaires que le marché de l'art contemporain brouille chaque jour davantage.",
    ],
    evolution: [
      { p: '1979', f: "L'article des Trois États distingue l'objectivé de l'incorporé et de l'institutionnalisé." },
      { p: '1986', f: "The Forms of Capital généralise la distinction pour un public anglophone." },
      { p: '1990–2010', f: "L'économie de la culture s'en sert pour penser la valeur des patrimoines matériels au-delà de leur seul prix." },
    ],
  },
  'capital-culturel-institutionnalise': {
    detaille: [
      "L'état institutionnalisé est celui du diplôme : un acte officiel qui convertit une compétence incertaine, incorporée et invérifiable, en un titre standardisé, garanti par l'État et négociable sur un marché — celui du travail en premier lieu.",
      "Cette conversion règle un problème pratique : comment comparer des compétences que rien ne rend directement mesurables ? Le diplôme répond en instituant une équivalence formelle, indépendante de la personne qui le détient et de la manière dont elle l'a obtenu.",
      "Il crée ainsi un capital culturel qui fonctionne, pour la première fois, comme un capital économique : on peut le faire valoir sans avoir à en faire la preuve à chaque fois, et son détenteur en tire un rendement stable sur le marché du travail.",
    ],
    origine: {
      oeuvre: 'Les Trois États du capital culturel',
      annee: '1979',
      contexte:
        "Bourdieu isole ce troisième état pour expliquer pourquoi un diplôme rapporte plus que la compétence qu'il est censé simplement attester : il produit une garantie collective que la compétence seule ne produit pas.",
    },
    exemples: [
      "Deux candidats aux compétences réelles comparables, dont un seul a le titre requis, et qui n'ont donc aucune chance égale à l'entretien.",
      "Une reconversion professionnelle, réussie sur le terrain, qui reste invisible sur un CV tant qu'aucun diplôme ne vient l'attester.",
    ],
    oeuvres: [
      { y: '1979', t: 'Les Trois États du capital culturel' },
      { y: '1970', t: 'La Reproduction (avec J.-C. Passeron)' },
    ],
    associes: ['capital-culturel', 'capital-culturel-incorpore', 'capital-culturel-objective', 'reproduction-scolaire'],
    opposes: ['prestige-social'],
    critiques: [
      "Le concept explique bien la valeur du diplôme, mais peu son contenu : deux diplômes de même niveau peuvent recouvrir des compétences très inégales.",
      "L'inflation scolaire — un diplôme de plus en plus nécessaire pour un rendement de moins en moins garanti — n'est décrite qu'après coup, jamais anticipée par la théorie.",
      "Il traite le diplôme comme une simple conversion, quand l'examen qui le délivre est lui-même un jugement social, non un instrument de mesure neutre.",
    ],
    evolution: [
      { p: '1970', f: "La Reproduction pose déjà le rôle du titre scolaire dans la conversion du capital culturel." },
      { p: '1979', f: "L'article des Trois États nomme et formalise l'état institutionnalisé." },
      { p: '1990–2020', f: "L'inflation des diplômes, largement documentée depuis, prolonge et complique la thèse initiale." },
    ],
  },
  'doxa': {
    detaille: [
      "La doxa est l'ensemble de ce qui, dans un champ ou une société, va tellement de soi qu'il ne vient à l'idée de personne de le formuler, encore moins de le discuter : l'ordre naturel des choses, avant toute prise de position explicite.",
      "Elle diffère d'une opinion : une opinion se discute, la doxa ne se voit même pas — elle est la condition silencieuse à partir de laquelle des opinions concurrentes peuvent ensuite se former.",
      "Ce silence est ce qui fait sa force : tant qu'un arbitraire reste doxique, il échappe à toute discussion, et donc à toute contestation frontale — la violence symbolique s'exerce d'autant mieux qu'elle n'apparaît pas comme un choix parmi d'autres.",
    ],
    origine: {
      oeuvre: "Esquisse d'une théorie de la pratique",
      annee: '1972',
      contexte:
        "Bourdieu reprend un terme de la rhétorique grecque pour décrire, à partir de son terrain kabyle, l'adhésion immédiate et non réfléchie d'un groupe à l'ordre qui le régit.",
    },
    exemples: [
      "Le fait qu'une école soit gratuite et obligatoire, qui ne se discute plus alors qu'il a fallu l'imposer contre de vives résistances.",
      "Une hiérarchie de bureau si ancienne que personne, ni en haut ni en bas, ne songe plus à demander pourquoi elle existe.",
    ],
    oeuvres: [
      { y: '1972', t: "Esquisse d'une théorie de la pratique" },
      { y: '1980', t: 'Le Sens pratique' },
    ],
    associes: ['orthodoxie', 'illusio', 'violence-symbolique'],
    opposes: ['heterodoxie'],
    critiques: [
      "Le concept ne dit jamais comment une doxa se forme ni comment elle finit, à un moment donné, par céder à la discussion.",
      "Boltanski objecte qu'un acteur, même dominé, dispose toujours d'une capacité de dénonciation qui suppose une distance à l'ordre établi — donc une sortie possible de la doxa.",
      "La frontière entre doxa et simple habitude individuelle reste peu précisée : tout ce qui va de soi n'est pas nécessairement un rapport de domination.",
    ],
    evolution: [
      { p: '1972', f: "Bourdieu forge le concept à partir du terrain kabyle, où l'ordre du monde ne se discute pas." },
      { p: '1980', f: "Le Sens pratique l'articule à l'illusio et au sens du jeu." },
      { p: '1990–2010', f: "Le mot passe dans le langage courant pour désigner, plus largement, toute pensée dominante non questionnée." },
    ],
  },
  'orthodoxie': {
    detaille: [
      "L'orthodoxie est ce que devient la doxa une fois qu'elle cesse d'aller de soi : dès qu'une alternative devient pensable, il faut défendre explicitement ce qui n'avait auparavant besoin d'aucune défense.",
      "Elle marque donc un recul, pas une force pure : parler ouvertement au nom de l'ordre établi, c'est déjà admettre qu'il pourrait en être autrement — ce que la doxa, elle, rendait impensable.",
      "Dans un champ, l'orthodoxie est portée par ceux qui dominent et qui ont donc intérêt à la conservation ; elle s'oppose terme à terme à l'hétérodoxie, portée par les nouveaux venus qui ont intérêt au changement.",
    ],
    origine: {
      oeuvre: "Esquisse d'une théorie de la pratique",
      annee: '1972',
      contexte:
        "Bourdieu emprunte le vocabulaire théologique — orthodoxie, hérésie — pour décrire la lutte, dans tout champ, entre discours dominant explicite et discours de rupture.",
    },
    exemples: [
      "Une institution qui se met soudain à justifier publiquement une règle qu'elle n'avait jamais eu à motiver auparavant.",
      "Un courant artistique établi qui, face à une avant-garde montante, en vient à défendre en mots ce qu'il pratiquait sans y penser.",
    ],
    oeuvres: [
      { y: '1972', t: "Esquisse d'une théorie de la pratique" },
      { y: '1980', t: 'Le Sens pratique' },
    ],
    associes: ['doxa', 'champ'],
    opposes: ['heterodoxie'],
    critiques: [
      "Le schéma orthodoxie/hétérodoxie plaque une logique binaire sur des champs où coexistent souvent plusieurs positions concurrentes, ni tout à fait dominantes ni tout à fait marginales.",
      "Il suppose une lutte permanente qui laisse peu de place à des périodes de coopération réelle entre positions différentes.",
      "L'analogie théologique, féconde au départ, tend à faire de tout désaccord un schisme, ce qui exagère la cohérence interne des positions en présence.",
    ],
    evolution: [
      { p: '1972', f: "Le vocabulaire orthodoxie/hérésie apparaît dans l'Esquisse, à propos des luttes de classement." },
      { p: '1979', f: "La Distinction l'applique aux luttes de goût entre fractions de classe." },
      { p: '1984', f: "Homo academicus en fait le ressort central des conflits universitaires." },
    ],
  },
  'heterodoxie': {
    detaille: [
      "L'hétérodoxie est le discours de rupture qui, en rendant pensable ce que la doxa tenait pour impensable, force l'ordre établi à sortir du silence et à se défendre en orthodoxie.",
      "Elle est portée, dans un champ, par les nouveaux venus ou les dominés : n'ayant rien à gagner à la conservation, ils ont intérêt à révéler l'arbitraire de ce qui passait pour naturel.",
      "Son efficacité tient à ce simple fait de rendre visible : nommer un arbitraire, même sans le renverser aussitôt, suffit à lui faire perdre le statut de doxa — il devient désormais une position parmi d'autres, discutable.",
    ],
    origine: {
      oeuvre: "Esquisse d'une théorie de la pratique",
      annee: '1972',
      contexte:
        "Bourdieu construit le couple orthodoxie/hétérodoxie pour penser comment un ordre social peut être contesté sans pour autant être immédiatement renversé.",
    },
    exemples: [
      "Un mouvement social qui gagne moins par ses résultats immédiats que par le simple fait d'avoir rendu discutable une règle jusque-là indiscutée.",
      "Une génération d'artistes qui, en revendiquant une rupture, oblige leurs aînés à justifier pour la première fois ce qu'ils pratiquaient sans y penser.",
    ],
    oeuvres: [
      { y: '1972', t: "Esquisse d'une théorie de la pratique" },
      { y: '1980', t: 'Le Sens pratique' },
    ],
    associes: ['champ', 'illusio'],
    opposes: ['doxa', 'orthodoxie'],
    critiques: [
      "Le concept mesure mal la différence entre une hétérodoxie qui transforme réellement un champ et une contestation vite absorbée sans rien changer à l'ordre des positions.",
      "Il présuppose chez le dominé une lucidité que la théorie de la violence symbolique, ailleurs, lui refuse presque entièrement — une tension jamais résolue chez Bourdieu.",
      "Rien n'indique à quelles conditions une hétérodoxie réussit à percer plutôt qu'à être ignorée ou disqualifiée par l'orthodoxie en place.",
    ],
    evolution: [
      { p: '1972', f: "L'Esquisse pose le couple orthodoxie/hétérodoxie comme moteur des luttes de classement." },
      { p: '1979', f: "La Distinction en donne des exemples détaillés dans les luttes de goût." },
      { p: '1992', f: "Les Règles de l'art en fait le ressort de l'histoire du champ littéraire, de Flaubert aux avant-gardes." },
    ],
  },
  'illusio': {
    detaille: [
      "L'illusio est la croyance, pratique et non réfléchie, que le jeu d'un champ mérite d'être joué — que ses enjeux valent la peine qu'on s'y investisse. Sans elle, aucune règle ne suffirait à faire tenir un champ.",
      "Elle n'a rien d'un calcul conscient : on n'entre pas dans un champ après avoir pesé le pour et le contre de son enjeu, on y est pris avant même de savoir qu'on pourrait s'en détacher — un peu comme on adhère à une passion avant de se demander si elle est raisonnable.",
      "Bourdieu y voit la condition cachée de tout champ : critiquer les règles du jeu littéraire ou scientifique de l'intérieur suppose déjà d'y croire assez pour vouloir les améliorer plutôt que de simplement s'en désintéresser.",
    ],
    origine: {
      oeuvre: 'Raisons pratiques',
      annee: '1994',
      contexte:
        "Bourdieu popularise ce terme, présent dès ses premiers textes sur les champs, pour nommer ce que ni la théorie du contrat ni celle de l'intérêt rationnel ne parviennent à expliquer : pourquoi on croit à un jeu avant même d'y jouer.",
    },
    exemples: [
      "Un chercheur en fin de carrière qui continue de se passionner pour une controverse dont l'enjeu semblerait dérisoire à qui n'est pas du métier.",
      "Un supporter capable de vivre une défaite sportive comme un drame personnel, alors que rien, objectivement, n'en dépend pour lui.",
    ],
    oeuvres: [
      { y: '1994', t: 'Raisons pratiques' },
      { y: '1987', t: 'Choses dites' },
    ],
    associes: ['champ', 'doxa', 'sens-pratique'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "Le concept explique après coup n'importe quel investissement par la croyance au jeu, ce qui le rend difficile à mettre en défaut.",
      "Boudon objecte qu'un acteur qui s'investit dans un champ le fait pour des raisons qu'il peut en général énoncer, sans qu'il faille supposer une adhésion aveugle et préalable.",
      "Le concept dit peu des moments de désillusion, où un agent se retire brutalement d'un jeu auquel il croyait — la sortie de l'illusio reste peu théorisée.",
    ],
    evolution: [
      { p: '1976', f: "Le terme apparaît dans les premiers articles de Bourdieu sur la théorie des champs." },
      { p: '1980', f: "Le Sens pratique l'articule au sens du jeu et à la doxa." },
      { p: '1994', f: "Raisons pratiques en fait un concept central, explicitement défini et généralisé à tous les champs." },
    ],
  },
  'hexis-corporelle': {
    detaille: [
      "L'hexis corporelle est la dimension proprement physique de l'habitus : une manière de se tenir, de marcher, de parler, de regarder, où se lit directement la position sociale, sans qu'aucun mot n'ait besoin d'être prononcé.",
      "Elle s'incorpore tôt et profondément, par l'imitation et la correction constante — une posture reprise, une voix qu'on baisse, un regard qu'on évite ou qu'on soutient — au point de devenir une seconde nature qu'aucun effort de volonté ne suffit ensuite à corriger d'un coup.",
      "Bourdieu en fait la preuve la plus intime de sa thèse : si le social s'inscrit jusque dans le corps, c'est qu'il ne relève ni d'un choix ni d'une simple croyance, mais d'un dressage dont on ne se souvient même pas.",
    ],
    origine: {
      oeuvre: "Esquisse d'une théorie de la pratique",
      annee: '1972',
      contexte:
        "Bourdieu observe en Kabylie combien la manière de se tenir, de marcher ou de manger obéit à des codes précis et genrés, jamais énoncés en tant que règles mais transmis par le corps même.",
    },
    exemples: [
      "Une aisance à occuper l'espace en réunion, ou au contraire un réflexe à se faire discret, appris bien avant qu'aucune règle explicite ne l'ait jamais formulé.",
      "Une manière de tenir une fourchette ou de s'asseoir, reprise sans un mot par des générations de corrections silencieuses.",
    ],
    oeuvres: [
      { y: '1972', t: "Esquisse d'une théorie de la pratique" },
      { y: '1980', t: 'Le Sens pratique' },
    ],
    associes: ['habitus', 'capital-culturel-incorpore', 'sens-pratique'],
    opposes: ['mise-en-scene-de-soi'],
    critiques: [
      "Le concept dit peu de la marge d'ajustement consciente que garde un acteur sur sa propre tenue, en entretien d'embauche par exemple.",
      "Goffman objecterait qu'une part de ce que Bourdieu lit comme incorporé durable relève aussi d'une gestion stratégique et momentanée de l'image, adaptée à chaque situation.",
      "Comme pour l'habitus, l'hexis s'infère surtout des conduites qu'elle est censée expliquer, ce qui rend son observation directe délicate.",
    ],
    evolution: [
      { p: '1972', f: "Bourdieu décrit l'hexis kabyle — démarche, port de tête, gestuelle genrée — dans l'Esquisse." },
      { p: '1980', f: "Le Sens pratique en fait la dimension corporelle de l'habitus, distincte des dispositions mentales." },
      { p: '1998', f: "La Domination masculine l'applique aux différences de maintien entre hommes et femmes." },
    ],
  },
  'espace-social': {
    detaille: [
      "L'espace social est la représentation d'une société non comme un ensemble de groupes fixés d'avance, mais comme un espace à plusieurs dimensions où chaque agent occupe une position définie par le volume et la structure de ses capitaux.",
      "Cet espace n'a pas d'existence physique : il est un système de différences et d'écarts, où la position de chacun ne se définit que relationnellement, par sa distance à toutes les autres.",
      "C'est de cet espace que dérivent l'espace des positions — sa structure objective, mesurée par les capitaux — et l'espace des prises de position — les pratiques et les goûts qui en expriment la logique dans la vie quotidienne.",
    ],
    origine: {
      oeuvre: 'La Distinction',
      annee: '1979',
      contexte:
        "Bourdieu construit ce modèle spatial à partir d'une enquête nationale sur les pratiques culturelles, pour remplacer une vision de la société en classes fixes par une cartographie continue des positions.",
    },
    exemples: [
      "Deux familles au revenu identique, situées pourtant à des points très différents de cet espace selon que leur capital est surtout économique ou surtout culturel.",
      "Un même quartier qui rassemble des habitants proches en revenu mais très éloignés dans l'espace social, selon leur trajectoire et leur capital culturel.",
    ],
    oeuvres: [
      { y: '1979', t: 'La Distinction' },
      { y: '1994', t: 'Raisons pratiques' },
    ],
    associes: ['position-sociale', 'capital-economique', 'capital-culturel'],
    opposes: ['classe-sociale'],
    critiques: [
      "La cartographie de La Distinction, fondée sur les années 1960 et 1970, se prête mal à une actualisation directe des grands axes qu'elle propose.",
      "Le modèle réduit l'espace social à deux dimensions — volume et structure du capital — quand le genre, l'âge ou l'origine migratoire y ajoutent des hiérarchies propres.",
      "Marx objecterait qu'un espace continu de positions dilue le rapport d'exploitation, seul principe selon lui capable d'expliquer pourquoi cet espace est structuré ainsi et non autrement.",
    ],
    evolution: [
      { p: '1966', f: "Premiers travaux du Centre de sociologie européenne sur l'espace des styles de vie." },
      { p: '1979', f: "La Distinction donne à l'espace social sa cartographie empirique complète." },
      { p: '1994', f: "Raisons pratiques en généralise le principe à d'autres sociétés que la France des années 1970." },
    ],
  },
  'espace-des-positions': {
    detaille: [
      "L'espace des positions est la structure objective de l'espace social : la répartition des agents selon le volume global de leurs capitaux et selon la structure de ce volume — la part respective de l'économique et du culturel.",
      "Il se construit indépendamment de ce que les agents en pensent ou en disent : deux personnes occupant la même position peuvent avoir des opinions opposées sans que cela change la position elle-même, définie par des propriétés mesurables.",
      "C'est cet espace objectif qui commande, sans jamais le déterminer entièrement, l'espace des prises de position — les goûts et les pratiques par lesquels chacun exprime, le plus souvent sans le savoir, la place qu'il occupe.",
    ],
    origine: {
      oeuvre: 'La Distinction',
      annee: '1979',
      contexte:
        "Bourdieu élabore cette notion pour donner un socle objectif — mesurable par l'enquête — à une théorie qui, sans cela, risquerait de réduire les positions sociales aux seules représentations que les agents en ont.",
    },
    exemples: [
      "Un professeur et un commerçant au revenu comparable, situés à des points distincts de cet espace parce que la composition de leur capital diffère.",
      "Deux entreprises de même chiffre d'affaires, dont l'une mise sur le capital économique et l'autre sur la notoriété culturelle de ses dirigeants.",
    ],
    oeuvres: [
      { y: '1979', t: 'La Distinction' },
      { y: '1980', t: 'Le Sens pratique' },
    ],
    associes: ['espace-social', 'position-sociale', 'capital-culturel'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "Réduire une position à deux variables mesurables laisse de côté des dimensions de la hiérarchie sociale que l'enquête statistique saisit mal.",
      "Boudon objecte qu'une structure de positions, aussi précisément cartographiée soit-elle, ne dit rien des raisons pour lesquelles un acteur choisit d'agir comme il agit.",
      "La méthode d'analyse des correspondances qui sert à construire cet espace impose ses propres choix — le nombre d'axes retenus, les variables incluses — qui pèsent sur le résultat autant que les données elles-mêmes.",
    ],
    evolution: [
      { p: '1979', f: "La Distinction construit l'espace des positions à partir de l'analyse des correspondances multiples." },
      { p: '1984', f: "Homo academicus applique la même méthode au champ universitaire français." },
      { p: '1990–2015', f: "La méthode devient un standard de la sociologie quantitative française, au-delà même du cadre bourdieusien." },
    ],
  },
  'espace-des-prises-de-position': {
    detaille: [
      "L'espace des prises de position est l'ensemble des pratiques, des goûts et des opinions par lesquels les agents expriment, dans leur vie quotidienne, la position qu'ils occupent dans l'espace social — sans en avoir nécessairement conscience.",
      "À chaque région de l'espace des positions correspond une région de prises de position homologue : les mêmes écarts qui séparent les positions objectives se retrouvent, presque terme à terme, dans les choix musicaux, vestimentaires ou alimentaires.",
      "Cette correspondance, ou homologie, est ce qui permet à Bourdieu de lire un vote, un vêtement ou un menu comme un signe fiable de position sociale, sans que l'agent ait jamais eu l'intention d'envoyer ce signal.",
    ],
    origine: {
      oeuvre: 'La Distinction',
      annee: '1979',
      contexte:
        "Bourdieu construit ce second espace, homologue au premier, pour montrer que le goût n'est jamais un jugement purement personnel mais la traduction, dans l'ordre symbolique, d'un écart de position déjà là.",
    },
    exemples: [
      "Deux foyers aux revenus comparables qui n'écoutent ni la même musique ni ne fréquentent les mêmes lieux de vacances, parce que la structure de leur capital diffère.",
      "Un choix de mobilier ou de décoration qui trahit, à qui sait le lire, une position sociale qu'aucun des occupants n'a cherché à afficher.",
    ],
    oeuvres: [
      { y: '1979', t: 'La Distinction' },
    ],
    associes: ['espace-des-positions', 'distinction', 'habitus'],
    opposes: ['carriere-deviante'],
    critiques: [
      "L'homologie entre les deux espaces est plus affirmée que démontrée : rien ne garantit qu'à chaque écart de position corresponde mécaniquement un écart de goût.",
      "Le modèle laisse peu de place à l'omnivorisme culturel des classes supérieures contemporaines, qui brouille la correspondance stricte que La Distinction décrivait.",
      "Il traite la prise de position comme un simple reflet de la position, ce qui minimise la capacité des agents à jouer, parfois délibérément, avec les signes de leur propre position.",
    ],
    evolution: [
      { p: '1979', f: "La Distinction établit l'homologie entre espace des positions et espace des prises de position." },
      { p: '1990–2010', f: "Peterson, aux États-Unis, documente un omnivorisme culturel qui complique la correspondance stricte du modèle français." },
    ],
  },
  'classe-dominante': {
    detaille: [
      "Dans l'espace social bourdieusien, la classe dominante n'est pas définie par la seule propriété des moyens de production, mais par la détention du plus fort volume global de capitaux, quelle qu'en soit la composition — économique, culturel ou les deux à la fois.",
      "Elle se divise elle-même en fractions concurrentes : une fraction à dominante économique, une fraction à dominante culturelle, chacune tendant à imposer sa propre définition de ce qui mérite prestige et reconnaissance.",
      "Cette division interne est un des ressorts de la lutte symbolique : chaque fraction cherche à faire reconnaître comme légitime la forme de capital où elle est elle-même la mieux dotée.",
    ],
    origine: {
      oeuvre: 'La Distinction',
      annee: '1979',
      contexte:
        "Bourdieu construit une carte détaillée de la classe dominante française, distinguant patrons, professions libérales et enseignants selon la composition de leur capital, plutôt qu'un bloc homogène.",
    },
    exemples: [
      "Un chef d'entreprise et un professeur d'université, tous deux membres de la classe dominante, mais rivaux quant à ce qui doit compter comme réussite légitime.",
      "Une école qui valorise davantage la culture littéraire que la réussite commerciale, au bénéfice symbolique d'une fraction de la classe dominante plutôt que d'une autre.",
    ],
    oeuvres: [
      { y: '1979', t: 'La Distinction' },
    ],
    associes: ['espace-social', 'capital-symbolique', 'position-sociale', 'classe-dominee'],
    opposes: ['meritocratie'],
    critiques: [
      "Marx objecterait que diluer la classe dominante en fractions rivales masque ce qui, selon lui, prime toujours : leur intérêt commun à la propriété des moyens de production.",
      "La cartographie de 1979 date vite : les fractions à dominante culturelle et économique de La Distinction ne se recoupent plus exactement avec celles d'aujourd'hui.",
      "Le concept explique la position dominante par le capital détenu, ce qui laisse peu de place aux stratégies individuelles de ceux qui, à l'intérieur même de la classe, montent ou déclinent.",
    ],
    evolution: [
      { p: '1979', f: "La Distinction cartographie la classe dominante française et ses fractions concurrentes." },
      { p: '1989', f: "La Noblesse d'État prolonge l'analyse du côté des grandes écoles, qui consacrent et reproduisent cette classe." },
    ],
  },
  'classe-dominee': {
    detaille: [
      "La classe dominée occupe, dans l'espace social, les positions les plus démunies en capitaux, quelle qu'en soit la nature — économique ou culturelle. Sa situation se définit moins par un manque absolu que par son écart aux pôles dominants de l'espace.",
      "Bourdieu insiste sur un paradoxe central : la classe dominée participe souvent elle-même, sans le vouloir, à sa propre domination — en reconnaissant comme légitimes les hiérarchies de goût et de mérite qui la placent en bas de l'échelle.",
      "Cette adhésion, loin d'être une passivité ou un aveuglement, est l'effet d'une violence symbolique qui a façonné les catégories mêmes avec lesquelles la classe dominée perçoit sa propre position.",
    ],
    origine: {
      oeuvre: 'La Distinction',
      annee: '1979',
      contexte:
        "Bourdieu documente, à partir de son enquête, un goût populaire qui se définit souvent en creux — le nécessaire plutôt que le raffiné — révélant une adhésion aux catégories mêmes qui le dévalorisent.",
    },
    exemples: [
      "Un choix vestimentaire jugé « pratique avant tout » par celui qui le fait, alors qu'il traduit surtout l'absence des ressources qui permettraient d'en juger autrement.",
      "Une famille qui, sans amertume apparente, considère certaines études « pas faites pour elle », reconduisant ainsi une frontière qu'elle n'a pourtant pas tracée.",
    ],
    oeuvres: [
      { y: '1979', t: 'La Distinction' },
      { y: '1970', t: 'La Reproduction (avec J.-C. Passeron)' },
    ],
    associes: ['classe-dominante', 'violence-symbolique', 'position-sociale'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "Le concept est parfois lu comme condescendant : il prête à la classe dominée une adhésion à sa propre domination que celle-ci ne reconnaîtrait pas nécessairement pour elle-même.",
      "Boltanski et Thévenot objectent qu'un acteur dominé garde une capacité de critique et de justification que le modèle de la violence symbolique tend à sous-estimer.",
      "La notion de « nécessaire » comme goût par défaut a été critiquée pour minimiser les esthétiques populaires propres, plutôt que simplement définies en négatif du goût légitime.",
    ],
    evolution: [
      { p: '1979', f: "La Distinction décrit le goût populaire du nécessaire, en creux du goût légitime des classes dominantes." },
      { p: '1993', f: "La Misère du monde donne la parole, sous forme d'entretiens, à des membres des classes dominées confrontés à cette hiérarchie." },
    ],
  },
  'distinction': {
    detaille: [
      "La distinction est le processus par lequel le goût — en musique, en cuisine, en vêtement — sert simultanément à exprimer une position sociale et à la produire, en marquant une frontière entre ceux qui savent apprécier et ceux qui ne savent pas.",
      "Elle fonctionne par écarts plus que par contenus : ce qui distingue n'est jamais une pratique en soi, mais la différence entre cette pratique et celle qu'adoptent, un cran plus bas, ceux dont on veut se démarquer — un mécanisme qui pousse chaque groupe à changer de pratiques dès que les groupes inférieurs les adoptent à leur tour.",
      "Cette course, jamais achevée, explique pourquoi la mode ou le goût changent sans cesse : dès qu'une pratique se démocratise, elle perd sa valeur distinctive pour ceux qui l'avaient adoptée en premier.",
    ],
    origine: {
      oeuvre: 'La Distinction',
      annee: '1979',
      contexte:
        "Bourdieu tire d'une vaste enquête sur les pratiques culturelles françaises la démonstration que le goût, loin d'être un jugement esthétique pur, est un instrument de classement social.",
    },
    exemples: [
      "Un plat autrefois populaire, comme les abats ou le pot-au-feu, revalorisé par une partie des classes supérieures précisément parce qu'il n'est plus prisé par les classes populaires.",
      "Une pratique sportive qui perd son prestige distinctif à mesure qu'elle se démocratise, et pousse ceux qui la pratiquaient en premier vers une autre activité, plus rare.",
    ],
    oeuvres: [
      { y: '1979', t: 'La Distinction' },
    ],
    associes: ['capital-culturel', 'habitus', 'espace-des-prises-de-position', 'legitimite-culturelle'],
    opposes: ['industrie-culturelle'],
    critiques: [
      "Peterson et l'analyse de l'omnivorisme culturel objectent qu'aujourd'hui, ce n'est plus le rejet mais l'ouverture à des goûts variés qui distingue le plus les classes supérieures.",
      "Le modèle, construit sur la France des années 1970, se prête mal à une culture numérique où les hiérarchies de goût se recomposent à grande vitesse.",
      "Il traite tout écart de goût comme une stratégie de distinction, ce qui laisse peu de place à un plaisir esthétique qui ne viserait aucune position sociale.",
    ],
    evolution: [
      { p: '1899', f: "Veblen décrit la consommation ostentatoire des classes de loisir, une intuition proche mais centrée sur la seule richesse affichée." },
      { p: '1979', f: "La Distinction systématise le mécanisme et l'étend à l'ensemble des pratiques culturelles." },
      { p: '1990–2000', f: "Peterson documente aux États-Unis un omnivorisme qui déplace, sans l'abolir, la logique de distinction." },
    ],
  },
  'reproduction-scolaire': {
    detaille: [
      "La reproduction scolaire est le mécanisme précis par lequel l'institution scolaire, censée juger tous les élèves selon les mêmes critères, reconnaît et récompense en réalité un capital culturel familial qu'elle n'a jamais enseigné et ne nomme jamais comme tel.",
      "L'école se présente comme un juge neutre, extérieur aux inégalités sociales ; elle en devient pourtant l'un des instruments les plus efficaces, en convertissant un héritage en mérite scolaire, donc en légitimant ce qu'elle ne fait, en réalité, que constater.",
      "C'est cette conversion qui rend la reproduction scolaire si difficile à contester : personne, ni les gagnants ni les perdants, n'a intérêt ni raison de la voir comme une transmission d'héritage plutôt que comme la juste sanction du travail et du talent.",
    ],
    origine: {
      oeuvre: 'La Reproduction',
      annee: '1970',
      contexte:
        "Avec Passeron, Bourdieu construit une théorie de l'action pédagogique qui explique, sans invoquer aucune intention malveillante, pourquoi une école formellement égalitaire produit des résultats si régulièrement inégaux selon l'origine sociale.",
    },
    exemples: [
      "Une épreuve de dissertation qui valorise, sans jamais l'exiger explicitement, une culture générale acquise en dehors de la classe.",
      "Une orientation scolaire perçue comme un simple constat de niveau, alors qu'elle recoupe très régulièrement l'origine sociale des élèves orientés.",
    ],
    oeuvres: [
      { y: '1964', t: 'Les Héritiers (avec J.-C. Passeron)' },
      { y: '1970', t: 'La Reproduction (avec J.-C. Passeron)' },
    ],
    associes: ['capital-culturel-institutionnalise', 'violence-symbolique', 'capital-culturel'],
    opposes: ['meritocratie'],
    critiques: [
      "Boudon objecte que les écarts de scolarité s'expliquent aussi par des décisions rationnelles, prises sous contrainte de coût et de risque, sans qu'il faille invoquer un héritage culturel caché.",
      "Le modèle, construit sur l'école française des années 1960, rend mal compte des politiques de démocratisation scolaire engagées depuis, même si les écarts qu'il décrit persistent.",
      "Il laisse peu de place aux trajectoires de réussite scolaire malgré une origine populaire, statistiquement minoritaires mais réelles.",
    ],
    evolution: [
      { p: '1964', f: "Les Héritiers documente empiriquement l'avantage scolaire des enfants de milieux favorisés." },
      { p: '1970', f: "La Reproduction en donne la théorie complète, articulée à la violence symbolique." },
      { p: '1990–2020', f: "Le débat entre reproduction et méritocratie reste l'un des plus vifs de la sociologie de l'éducation française." },
    ],
  },
  'legitimite-culturelle': {
    detaille: [
      "La légitimité culturelle est le principe, jamais discuté par ceux qui l'appliquent, qui distingue une culture savante digne d'estime d'une culture ordinaire qui ne l'est pas — un classement présenté comme allant de soi, alors qu'il résulte d'un rapport de force historique.",
      "Ce classement n'a rien de naturel : ce qui compte aujourd'hui comme culture légitime — certaines musiques, certains livres, certains arts — a dû, à un moment de son histoire, conquérir ce statut contre d'autres formes tout aussi élaborées mais restées hors du cercle légitime.",
      "Son efficacité tient à sa neutralité apparente : les institutions qui la consacrent — l'école, les musées, la critique — se présentent comme de simples gardiennes de la qualité, jamais comme des instances qui, en réalité, fabriquent le classement qu'elles disent seulement constater.",
    ],
    origine: {
      oeuvre: 'La Distinction',
      annee: '1979',
      contexte:
        "Bourdieu montre que la hiérarchie entre culture légitime et culture populaire n'est ni universelle ni éternelle, mais le produit historique d'institutions — l'école en premier lieu — qui consacrent certaines pratiques plutôt que d'autres.",
    },
    exemples: [
      "Le jazz ou la bande dessinée, longtemps tenus hors de la culture légitime, aujourd'hui enseignés et exposés au même titre que des formes plus anciennement consacrées.",
      "Un programme scolaire qui enseigne certains auteurs plutôt que d'autres, sans jamais présenter ce choix comme un choix parmi d'autres possibles.",
    ],
    oeuvres: [
      { y: '1979', t: 'La Distinction' },
      { y: '1966', t: "L'Amour de l'art (avec A. Darbel)" },
    ],
    associes: ['capital-culturel', 'distinction', 'violence-symbolique'],
    opposes: ['culture-de-masse'],
    critiques: [
      "Le concept dit peu du processus concret par lequel une pratique change de statut : il constate l'arbitraire du classement plus qu'il n'explique comment celui-ci évolue.",
      "L'École de Francfort objecterait qu'une partie de la culture aujourd'hui légitimée reste néanmoins standardisée par une industrie culturelle que la seule notion de légitimité ne permet pas de saisir.",
      "La frontière entre culture légitime et culture de masse, nette dans les années 1970, s'est nettement brouillée depuis, sans que le concept en rende compte directement.",
    ],
    evolution: [
      { p: '1966', f: "L'Amour de l'art documente l'inégal accès aux musées selon l'origine sociale et scolaire." },
      { p: '1979', f: "La Distinction systématise la notion de légitimité culturelle et sa fabrication institutionnelle." },
      { p: '1990–2010', f: "Le débat sur l'omnivorisme culturel interroge la persistance d'une hiérarchie unique de légitimité." },
    ],
  },
  'pouvoir-symbolique': {
    detaille: [
      "Le pouvoir symbolique est le pouvoir de faire voir et de faire croire, de nommer et de classer le monde social d'une manière qui s'impose comme la description même de la réalité, plutôt que comme un point de vue parmi d'autres.",
      "Il n'a besoin d'aucune force physique pour s'exercer : dire qu'une œuvre est un chef-d'œuvre, qu'un diplôme est prestigieux ou qu'une pratique est déviante, c'est déjà agir sur le monde social, à condition d'être en position d'imposer cette parole comme légitime.",
      "Son efficacité repose sur une croyance partagée, souvent invisible à ceux qui la partagent : le pouvoir symbolique ne fonctionne que si ceux sur qui il s'exerce reconnaissent — sans le percevoir comme une contrainte — l'autorité de celui qui nomme.",
    ],
    origine: {
      oeuvre: 'Ce que parler veut dire',
      annee: '1982',
      contexte:
        "Bourdieu discute et prolonge la théorie des actes de langage d'Austin : un énoncé n'a de pouvoir performatif que parce qu'une institution et un rapport de force social l'autorisent à l'avoir.",
    },
    exemples: [
      "Une décision de justice qui, en nommant un fait « délit », ne se contente pas de le décrire mais change son statut social et ses conséquences.",
      "Un jury qui, en décernant un prix, ne constate pas une valeur préexistante mais contribue lui-même à la fabriquer aux yeux de tous.",
    ],
    oeuvres: [
      { y: '1982', t: 'Ce que parler veut dire' },
      { y: '1991', t: 'Langage et pouvoir symbolique' },
    ],
    associes: ['capital-symbolique', 'violence-symbolique', 'doxa'],
    opposes: ['domination-legitime'],
    critiques: [
      "Le concept explique la force d'un énoncé légitime par l'autorité de celui qui le prononce, ce qui laisse peu de place à la possibilité qu'un énoncé change lui-même les rapports de force qui l'entourent.",
      "Austin, dont Bourdieu part, insistait sur des conditions de félicité précises et codifiées ; Bourdieu les dilue dans un rapport de force social plus large, moins directement vérifiable.",
      "Le concept dit peu des situations où un pouvoir symbolique proclamé échoue à s'imposer, faute de reconnaissance de ceux à qui il s'adresse.",
    ],
    evolution: [
      { p: '1962', f: "Austin distingue les énoncés performatifs des énoncés constatifs, matrice dont Bourdieu part." },
      { p: '1982', f: "Ce que parler veut dire articule performativité et rapport de force social." },
      { p: '1991', f: "Langage et pouvoir symbolique rassemble et systématise ces textes." },
    ],
  },
  'domination-symbolique': {
    detaille: [
      "La domination symbolique est la relation durable qui s'établit entre dominants et dominés lorsque ces derniers perçoivent le monde social avec les catégories mêmes que la domination a produites — une relation, plus qu'un acte isolé.",
      "Elle se distingue de la violence symbolique proprement dite : celle-ci nomme le mécanisme précis d'inculcation qui installe cette relation ; la domination symbolique en est l'état stable et durable, une fois la méconnaissance solidement établie.",
      "Bourdieu en fait le modèle le plus général de la domination : à la différence d'une domination fondée sur la contrainte physique ou sur un contrat explicite, elle n'a besoin d'aucun consentement conscient pour se perpétuer.",
    ],
    origine: {
      oeuvre: 'La Domination masculine',
      annee: '1998',
      contexte:
        "Bourdieu applique aux rapports entre les sexes un cadre théorique élaboré depuis les années 1970 : le rapport de genre lui sert d'exemple paradigmatique d'une domination acceptée par ceux et celles qui la vivent.",
    },
    exemples: [
      "Une répartition des tâches domestiques vécue comme allant de soi par les deux membres d'un couple, alors qu'elle reconduit une hiérarchie qu'aucun des deux n'a choisie.",
      "Une femme qui s'excuse de prendre la parole dans une réunion où les hommes ne s'en excusent jamais, sans qu'aucune règle explicite ne le lui impose.",
    ],
    oeuvres: [
      { y: '1998', t: 'La Domination masculine' },
      { y: '1970', t: 'La Reproduction (avec J.-C. Passeron)' },
    ],
    associes: ['violence-symbolique', 'pouvoir-symbolique', 'capital-symbolique'],
    opposes: ['regimes-de-justification'],
    critiques: [
      "La Domination masculine a suscité de vives critiques féministes : en insistant sur la méconnaissance des dominées, le livre laisserait peu de place aux résistances et aux luttes féministes historiquement documentées.",
      "Le concept, comme la violence symbolique dont il dérive, est difficile à réfuter : l'adhésion des dominés le confirme, et leur contestation peut toujours se lire comme une résistance encore prise dans le même rapport.",
      "Boltanski et Thévenot objectent qu'un acteur dominé garde une capacité de critique et de justification que le modèle de la domination symbolique tend à minimiser.",
    ],
    evolution: [
      { p: '1970', f: "La Reproduction pose les bases théoriques de la domination fondée sur la méconnaissance." },
      { p: '1990', f: "Un premier article dans les Actes de la recherche esquisse la domination masculine comme cas d'école." },
      { p: '1998', f: "La Domination masculine en donne la version complète et suscite un débat encore vif avec les études de genre." },
    ],
  },
  'sens-pratique': {
    detaille: [
      "Le sens pratique est la capacité, acquise et non calculée, à improviser la conduite appropriée à une situation sans avoir à en délibérer — un sens du jeu comparable à celui d'un joueur expérimenté, qui agit juste sans avoir le temps de raisonner.",
      "Il naît de l'habitus mais en souligne une dimension précise : non pas les dispositions stables elles-mêmes, mais leur mise en œuvre improvisée, toujours ajustée à une situation qui, elle, n'est jamais tout à fait la même.",
      "C'est ce sens pratique qui permet à un agent de suivre une règle sociale sans jamais l'avoir apprise comme une règle — de savoir, par exemple, jusqu'où on peut aller dans une plaisanterie sans avoir eu besoin qu'on le lui explique.",
    ],
    origine: {
      oeuvre: 'Le Sens pratique',
      annee: '1980',
      contexte:
        "Bourdieu y systématise une intuition présente depuis l'Esquisse : comprendre l'action sociale exige un modèle qui ne soit ni celui de la règle appliquée mécaniquement, ni celui du calcul rationnel explicite.",
    },
    exemples: [
      "Un négociateur expérimenté qui sait quand insister et quand céder sans jamais avoir formulé de stratégie explicite avant l'échange.",
      "Une personne qui ajuste instantanément son registre de langue selon son interlocuteur, sans y penser ni s'en rendre compte.",
    ],
    oeuvres: [
      { y: '1980', t: 'Le Sens pratique' },
      { y: "1972", t: "Esquisse d'une théorie de la pratique" },
    ],
    associes: ['habitus', 'illusio', 'champ'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "Boudon objecte que ce qui paraît improvisé résulte souvent d'un calcul rapide mais bien réel, que la notion de sens pratique écarte trop vite au profit d'un modèle purement dispositionnel.",
      "Le concept, comme l'habitus dont il dérive, s'infère surtout des conduites qu'il est censé expliquer.",
      "Il rend mal compte des situations d'hésitation ou de maladresse, où le sens du jeu, précisément, fait défaut — la théorie en dit peu sur ses propres limites.",
    ],
    evolution: [
      { p: '1972', f: "L'Esquisse pose les bases d'une théorie de la pratique irréductible à la règle ou au calcul." },
      { p: '1980', f: "Le Sens pratique en donne la formulation complète et lui donne son nom." },
    ],
  },
  'trajectoire-sociale': {
    detaille: [
      "La trajectoire sociale est le parcours dans le temps d'un agent ou d'une famille à travers l'espace social — d'où il vient, par où il est passé, où il se trouve désormais — complément dynamique de la position sociale, qui n'en est qu'un instantané.",
      "Deux agents occupant la même position à un moment donné peuvent avoir des trajectoires opposées — l'un montant, l'autre déclinant — ce qui affecte profondément leur rapport à cette position, leur habitus et leurs prises de position.",
      "Bourdieu en fait un instrument essentiel pour comprendre le malaise de certaines classes moyennes ou de certains transfuges sociaux, tiraillés entre l'habitus de leur origine et les codes de la position qu'ils occupent désormais.",
    ],
    origine: {
      oeuvre: 'La Distinction',
      annee: '1979',
      contexte:
        "Bourdieu introduit la trajectoire pour expliquer des écarts de goût et de posture entre agents de même position sociale, que la seule photographie de leur position ne suffisait pas à rendre intelligibles.",
    },
    exemples: [
      "Un cadre issu d'un milieu populaire qui, malgré une position désormais élevée, garde des goûts et des réflexes hérités de son origine.",
      "Une famille en déclin économique qui continue longtemps d'afficher les signes d'une position qu'elle n'occupe déjà plus tout à fait.",
    ],
    oeuvres: [
      { y: '1979', t: 'La Distinction' },
      { y: '1993', t: 'La Misère du monde' },
    ],
    associes: ['position-sociale', 'espace-social', 'habitus'],
    opposes: ['carriere-deviante'],
    critiques: [
      "Le concept reste plus descriptif qu'explicatif : il nomme un écart entre trajectoire et position sans toujours dire ce qui, précisément, en détermine le sens et l'ampleur.",
      "La Misère du monde a été critiqué pour privilégier des trajectoires de déclin ou de tiraillement, plus spectaculaires à l'entretien que les trajectoires stables ou ascendantes réussies sans drame.",
      "Boudon objecte qu'une trajectoire s'explique aussi par des décisions prises à chaque étape, non seulement par l'écart entre un habitus d'origine et une position d'arrivée.",
    ],
    evolution: [
      { p: '1979', f: "La Distinction introduit la trajectoire pour expliquer des écarts internes à une même position." },
      { p: '1989', f: "La Noblesse d'État l'applique aux trajectoires scolaires vers les grandes écoles." },
      { p: '1993', f: "La Misère du monde documente, par l'entretien, des trajectoires de déclassement et leurs souffrances propres." },
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
  'interaction-en-face-a-face': {
    detaille: [
      "L'interaction en face-à-face, ou « rencontre », est l'unité de base sur laquelle Goffman construit toute son analyse : deux personnes ou plus, en présence physique directe, se surveillent mutuellement et ajustent leur conduite en fonction de ce qu'elles perçoivent l'une de l'autre.",
      "Cette coprésence a des propriétés propres, irréductibles à ce que chacun apporterait séparément : un simple regard croisé engage déjà une définition commune de la situation, avant même qu'un mot soit échangé.",
      "Goffman en fait un ordre social à part entière — l'ordre de l'interaction —, avec ses propres règles, distinct de l'ordre institutionnel que décrivent d'ordinaire la sociologie des organisations ou des systèmes.",
    ],
    origine: {
      oeuvre: 'Behavior in Public Places',
      annee: '1963',
      contexte:
        "Goffman y distingue rassemblement, situation sociale et rencontre pour donner un vocabulaire précis à ce que l'observation directe montrait déjà : la vie publique obéit à un ordre que rien, dans les grandes théories macrosociales de l'époque, ne permettait de nommer.",
    },
    exemples: [
      "Deux inconnus qui, dans un ascenseur, règlent sans un mot la distance et la direction du regard qui conviennent.",
      "Une file d'attente où chacun surveille sa place et celle des autres sans jamais formuler la règle qui l'organise.",
    ],
    oeuvres: [
      { y: '1963', t: 'Behavior in Public Places' },
      { y: '1959', t: 'La Mise en scène de la vie quotidienne' },
    ],
    associes: ['mise-en-scene-de-soi', 'cadre-de-l-experience', 'rituel-d-interaction'],
    opposes: ['systeme-social'],
    critiques: [
      "L'échelle choisie exclut par construction ce qui se joue hors coprésence physique — courrier, médias, aujourd'hui échanges numériques.",
      "Parsons objecterait qu'une rencontre isolée ne s'explique elle-même que par le système de rôles et d'attentes plus vaste dans lequel elle s'insère.",
      "Le vocabulaire, très fin pour classer les situations, dit peu de ce qui fait qu'une rencontre plutôt qu'une autre a lieu.",
    ],
    evolution: [
      { p: '1961', f: "Encounters explore déjà les rencontres focalisées, centrées sur une activité commune." },
      { p: '1963', f: "Behavior in Public Places formalise rassemblement, situation et rencontre comme unités distinctes." },
      { p: '1983', f: "Le discours présidentiel « The Interaction Order » consacre ce niveau comme un ordre social autonome, digne d'étude pour lui-même." },
    ],
  },
  'rituel-d-interaction': {
    detaille: [
      "Un rituel d'interaction est un acte bref et convenu — salutation, excuse, remerciement, compliment — qui n'a l'air de rien mais accomplit un travail précis : marquer que l'autre est reconnu comme un interlocuteur digne d'égards.",
      "Goffman reprend à Durkheim l'idée que la vie sociale a besoin de rites, mais les déplace du sacré collectif vers le culte, minuscule et permanent, que chacun rend à la personne de l'autre dans les échanges les plus ordinaires.",
      "Ces micro-rituels ne sont pas des politesses accessoires : leur absence — un salut non rendu, un remerciement omis — est immédiatement perçue et coûte cher à celui qui la commet.",
    ],
    origine: {
      oeuvre: "Les Rites d'interaction",
      annee: '1967',
      contexte:
        "Goffman rassemble dans ce recueil des essais des années 1950, dont « Le Travail des faces », pour montrer que le rituel durkheimien a un équivalent profane et quotidien : les égards que les inconnus s'échangent en public.",
    },
    exemples: [
      "Un « pardon » machinal lâché en heurtant un inconnu dans la rue, sans lequel l'incident prendrait un tout autre sens.",
      "Une poignée de main protocolaire, dont l'absence, dans certains contextes, se lirait comme un affront délibéré.",
    ],
    oeuvres: [
      { y: '1967', t: "Les Rites d'interaction" },
      { y: '1971', t: 'Relations in Public' },
    ],
    associes: ['interaction-en-face-a-face', 'face', 'maintien-de-la-face'],
    opposes: ['fait-social'],
    critiques: [
      "Durkheim objecterait qu'un rituel sans sacré ni collectivité rassemblée n'est plus qu'une politesse — le mot « rituel » perd alors sa force explicative d'origine.",
      "Le classement très fin des types de rituels reste plus descriptif qu'explicatif : il nomme des régularités sans dire d'où elles viennent.",
      "L'analyse s'arrête aux sociétés où ces codes de politesse sont partagés ; elle dit peu de ce qui se passe quand les codes des interactants divergent.",
    ],
    evolution: [
      { p: '1912', f: "Durkheim décrit le rite collectif comme ce qui entretient la ferveur du groupe envers lui-même." },
      { p: '1955', f: "« Le Travail des faces » transpose l'intuition à l'échange ordinaire entre deux inconnus." },
      { p: '1967', f: "Les Rites d'interaction rassemble et systématise ces essais." },
    ],
  },
  'face': {
    detaille: [
      "La face est la valeur sociale positive qu'une personne revendique pour elle-même dans une interaction donnée, à travers l'image qu'elle projette et que les autres, provisoirement, acceptent de lui reconnaître.",
      "Elle n'appartient à personne en propre : c'est un bien prêté par la situation, que l'on peut perdre en un instant — un lapsus, une maladresse — et qu'il faut sans cesse regagner par la conduite que l'on tient.",
      "Avoir une face n'est donc pas un état stable mais une position tenue, renégociée à chaque échange, et dont la perte — l'embarras, la honte — se voit immédiatement sur le corps de celui qui la subit.",
    ],
    origine: {
      oeuvre: "Les Rites d'interaction",
      annee: '1967',
      contexte:
        "Goffman formalise, dans l'essai « Le Travail des faces » paru d'abord en 1955, une notion empruntée aux travaux d'anthropologues sur la Chine, où l'expression « perdre la face » désignait déjà une chute de statut social.",
    },
    exemples: [
      "Un orateur qui bafouille et rougit devant son public : sa face en sort abîmée, quelle que soit la qualité réelle de son propos.",
      "Un employé félicité publiquement pour un travail qui n'est pas vraiment le sien, et qui accepte l'éloge plutôt que de démentir devant tous.",
    ],
    oeuvres: [
      { y: '1967', t: "Les Rites d'interaction" },
    ],
    associes: ['maintien-de-la-face', 'rituel-d-interaction', 'stigmate'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "Le concept suppose des normes de politesse largement partagées ; il se prête mal aux interactions entre inconnus de cultures très éloignées.",
      "Boudon objecterait qu'un acteur qui « soigne sa face » le fait souvent par calcul d'image explicite, plus que par un réflexe interactionnel automatique.",
      "La notion dit peu des situations où perdre la face délibérément — provocation, insulte assumée — devient elle-même une stratégie payante.",
    ],
    evolution: [
      { p: '1955', f: "« Le Travail des faces » introduit le concept, à partir d'un vocabulaire emprunté à l'anthropologie de la Chine." },
      { p: '1967', f: "Les Rites d'interaction lui donne sa place dans une théorie générale du rituel quotidien." },
      { p: '1987', f: "Brown et Levinson en font, en linguistique, la base d'une théorie de la politesse encore utilisée aujourd'hui." },
    ],
  },
  'maintien-de-la-face': {
    detaille: [
      "Le maintien de la face, ou travail des faces, est l'ensemble des efforts qu'une personne déploie pour préserver sa propre face et, tout autant, celle des autres présents — car la perte de face d'un seul embarrasse en général toute l'assistance.",
      "Ce travail est en grande partie préventif : éviter les sujets embarrassants, laisser à l'autre une porte de sortie, feindre de ne pas remarquer une maladresse. Il devient correctif seulement quand l'incident a déjà eu lieu.",
      "Goffman y voit une coopération de fait entre des personnes qui n'ont pourtant rien décidé ensemble : chacun protège la face d'autrui moins par générosité que parce que l'ordre de l'interaction tout entier en dépend.",
    ],
    origine: {
      oeuvre: "Les Rites d'interaction",
      annee: '1967',
      contexte:
        "Dans le prolongement du concept de face, Goffman détaille les pratiques concrètes — évitement, correction, réparation — par lesquelles les interactants maintiennent, ensemble, l'ordre rituel de l'échange.",
    },
    exemples: [
      "Un convive qui renverse un verre, et que la tablée entière choisit de traiter comme un non-événement.",
      "Une remarque maladroite aussitôt suivie d'un « ce n'est pas ce que je voulais dire », accepté sans discussion par l'interlocuteur.",
    ],
    oeuvres: [
      { y: '1967', t: "Les Rites d'interaction" },
    ],
    associes: ['face', 'rituel-d-interaction', 'mise-en-scene-de-soi'],
    opposes: ['violence-symbolique'],
    critiques: [
      "Le modèle décrit une coopération tacite qui suppose des interactants de statut proche ; il rend mal compte des interactions où le rapport de force est trop déséquilibré pour qu'un maintien mutuel ait lieu.",
      "Bourdieu objecterait que cette coopération apparente masque des rapports de domination : sauver la face d'un supérieur n'est pas symétrique à sauver celle d'un subordonné.",
      "Le concept dit peu des cultures ou des situations où l'affrontement ouvert, plutôt que l'évitement, est la norme socialement valorisée.",
    ],
    evolution: [
      { p: '1955', f: "« Le Travail des faces » distingue pratiques préventives et pratiques correctives du maintien de la face." },
      { p: '1967', f: "Les Rites d'interaction en généralise le principe à l'ensemble de la vie rituelle quotidienne." },
    ],
  },
  'territoires-du-soi': {
    detaille: [
      "Les territoires du soi sont les espaces — physiques, conversationnels, informationnels — qu'une personne revendique comme siens dans une situation donnée, et dont l'intrusion, même mineure, se ressent comme une atteinte à sa personne.",
      "Goffman en distingue plusieurs formes : l'espace corporel immédiat, la réserve conversationnelle — le droit de ne pas être interrompu ni interrogé sur tout —, ou encore le territoire informationnel, ce qu'on a le droit de savoir sur autrui sans le lui avoir demandé.",
      "Ces territoires ne sont fixés par aucun titre de propriété : ils tiennent entièrement à ce que les autres, par habitude ou par égard, consentent à respecter — ce qui les rend visibles surtout au moment où quelqu'un les viole.",
    ],
    origine: {
      oeuvre: 'Relations in Public',
      annee: '1971',
      contexte:
        "Goffman y étend son analyse de la vie publique aux formes discrètes de propriété que chacun exerce sur un espace, un objet ou une information, sans qu'aucune loi ne les lui garantisse.",
    },
    exemples: [
      "Un voisin de train qui étale ses affaires sur le siège vide à côté de lui, et le regard noir qu'il reçoit si on ose s'y asseoir.",
      "Une question sur le salaire ou la vie privée, posée par un inconnu, ressentie comme déplacée alors qu'elle ne violerait aucune règle écrite.",
    ],
    oeuvres: [
      { y: '1971', t: 'Relations in Public' },
      { y: '1963', t: 'Behavior in Public Places' },
    ],
    associes: ['face', 'maintien-de-la-face', 'interaction-en-face-a-face'],
    opposes: ['institution-totale'],
    critiques: [
      "La notion de territoire suppose des sociétés urbaines et individualistes ; elle se transpose mal à des contextes où l'espace personnel n'est pas découpé de la même manière.",
      "Elle dit peu des inégalités d'accès à ces territoires : tout le monde n'a pas le même pouvoir de faire respecter sa réserve conversationnelle.",
      "Le catalogue des territoires, très détaillé, reste plus taxinomique qu'explicatif — il classe sans toujours dire pourquoi tel territoire compte plus qu'un autre.",
    ],
    evolution: [
      { p: '1963', f: "Behavior in Public Places esquisse déjà l'idée d'un territoire personnel en public." },
      { p: '1971', f: "Relations in Public systématise les territoires du soi et leurs violations possibles." },
    ],
  },
  'facade': {
    detaille: [
      "La façade est l'équipement expressif standardisé — décor, tenue, manières — qu'un individu ou une équipe déploie devant un public pour soutenir la définition de la situation qu'il souhaite donner à voir.",
      "Goffman distingue le décor, fixe et propre à un lieu, et la façade personnelle — l'apparence et la manière, propres à l'acteur, qui l'accompagnent où qu'il aille : posture, ton de voix, vocabulaire.",
      "Une façade n'est pas inventée à chaque représentation : elle est le plus souvent empruntée à un répertoire déjà institué, reconnu du public avant même que la représentation commence — ce qui la rend crédible sans effort particulier.",
    ],
    origine: {
      oeuvre: 'La Mise en scène de la vie quotidienne',
      annee: '1959',
      contexte:
        "Goffman construit l'appareil dramaturgique complet — façade, coulisses, équipe, public — pour décrire comment une représentation ordinaire s'organise matériellement.",
    },
    exemples: [
      "Le bureau d'un médecin, ses diplômes encadrés et sa blouse : un décor et une façade personnelle qui soutiennent son autorité avant qu'il ait prononcé un mot.",
      "Un vendeur qui adopte un ton assuré et un vocabulaire technique, même lorsqu'il découvre le produit en même temps que le client.",
    ],
    oeuvres: [
      { y: '1959', t: 'La Mise en scène de la vie quotidienne' },
    ],
    associes: ['mise-en-scene-de-soi', 'coulisses', 'role-joue'],
    opposes: ['role-et-attentes'],
    critiques: [
      "La distinction entre façade sincère et façade calculée reste floue : Goffman lui-même refuse de trancher si l'acteur croit ou non à son propre rôle.",
      "Le concept, pensé pour les sociétés de face-à-face, décrit mal des façades aujourd'hui largement médiatisées, construites hors coprésence.",
      "Il dit peu de ce qui arrive quand deux façades incompatibles se heurtent dans la même situation, faute d'accord préalable sur le décor à adopter.",
    ],
    evolution: [
      { p: '1959', f: "La Mise en scène de la vie quotidienne pose la façade comme premier élément de l'appareil dramaturgique." },
      { p: '1963', f: "Stigmate montre ce qui arrive quand la façade ne suffit plus à masquer un attribut discréditable." },
    ],
  },
  'coulisses': {
    detaille: [
      "Les coulisses sont l'espace où la représentation donnée en façade est préparée, contredite ou simplement suspendue : on y range les accessoires, on y répète un rôle, on y relâche une tenue qu'il faudra reprendre en scène.",
      "Ce qui s'y passe contredit souvent, et parfois délibérément, ce que la façade donne à voir : le cuisinier qui jure en cuisine reste affable en salle, sans qu'aucune des deux conduites ne soit plus « vraie » que l'autre.",
      "L'accès aux coulisses est un privilège étroitement contrôlé : y laisser entrer le public par erreur — un rideau mal fermé, une porte oubliée ouverte — menace de ruiner en un instant la représentation en cours.",
    ],
    origine: {
      oeuvre: 'La Mise en scène de la vie quotidienne',
      annee: '1959',
      contexte:
        "Goffman emprunte le vocabulaire théâtral pour nommer ce que toute organisation prévoit sans le dire : un lieu où l'équipe se retrouve entre elle, hors du regard du public qu'elle vient de quitter ou qu'elle va bientôt affronter.",
    },
    exemples: [
      "Une salle de pause d'entreprise où le personnel commente librement une réunion qu'il vient de traverser tout sourire.",
      "Les loges d'un studio de télévision, où l'animateur détendu redevient soudain formel dès que la caméra se rallume.",
    ],
    oeuvres: [
      { y: '1959', t: 'La Mise en scène de la vie quotidienne' },
    ],
    associes: ['facade', 'mise-en-scene-de-soi', 'role-joue'],
    opposes: ['hexis-corporelle'],
    critiques: [
      "La frontière entre scène et coulisses est présentée comme nette, alors qu'elle se déplace sans cesse selon qui est présent et ce qu'il est censé savoir.",
      "Le numérique brouille la distinction : les réseaux sociaux exposent en public des conduites autrefois réservées aux coulisses.",
      "Le concept suppose une équipe suffisamment soudée pour partager un même espace de repli, ce qui n'est pas donné dans tous les contextes de travail.",
    ],
    evolution: [
      { p: '1959', f: "La Mise en scène de la vie quotidienne distingue scène et coulisses comme deux régions de toute représentation." },
      { p: '1980–2010', f: "La généralisation des caméras et des réseaux sociaux relance la question de savoir où passent encore, aujourd'hui, les coulisses." },
    ],
  },
  'role-joue': {
    detaille: [
      "Un rôle joué est la partie de la conduite d'un individu qui obéit à un script social reconnu — le rôle de médecin, de client, de parent — sans se confondre pour autant avec la personne qui l'exécute à un moment donné.",
      "Goffman insiste sur l'écart, toujours possible, entre le rôle et celui qui le joue : la distance au rôle — un geste ironique, un clin d'œil au public — signale que l'acteur n'est pas dupe du personnage qu'il incarne, sans pour autant refuser de le jouer.",
      "Cet écart est ce qui distingue la dramaturgie de Goffman d'une pure théorie des rôles : le rôle prescrit ce qu'il faut faire, mais jamais tout à fait comment le faire, et c'est dans cette marge que se loge la part propre de l'acteur.",
    ],
    origine: {
      oeuvre: 'Encounters',
      annee: '1961',
      contexte:
        "Goffman y développe la notion de distance au rôle à partir d'observations sur un manège pour enfants, où certains adultes chargés de l'opérer manifestaient, par un geste ou un ton, qu'ils étaient au-dessus du rôle qu'ils tenaient.",
    },
    exemples: [
      "Un serveur qui exécute son rôle avec un sérieux appuyé, jusqu'à un clin d'œil complice qui signale, sans le rompre, qu'il n'est pas dupe de la mise en scène.",
      "Un chirurgien qui, tout en respectant scrupuleusement le protocole, glisse une plaisanterie qui rappelle qu'un individu se tient derrière le rôle.",
    ],
    oeuvres: [
      { y: '1961', t: 'Encounters' },
      { y: '1959', t: 'La Mise en scène de la vie quotidienne' },
    ],
    associes: ['mise-en-scene-de-soi', 'facade', 'coulisses'],
    opposes: ['role-et-attentes'],
    critiques: [
      "Parsons objecterait qu'un rôle qui laisse toujours place à la distance et à l'ironie perd la fonction stabilisatrice que la théorie fonctionnaliste lui attribue.",
      "Le concept dit peu des rôles qu'on ne peut pas se permettre de jouer avec distance, sous peine de sanction immédiate.",
      "Il suppose un acteur suffisamment sûr de sa position pour se permettre l'ironie — un luxe qui n'est pas donné à tous les rôles ni à tous ceux qui les tiennent.",
    ],
    evolution: [
      { p: '1961', f: "Encounters introduit la distance au rôle à partir d'un terrain volontairement mineur, presque anecdotique." },
      { p: '1959–1974', f: "L'idée irrigue toute l'œuvre : le rôle n'absorbe jamais entièrement celui qui le joue." },
    ],
  },
  'institution-totale': {
    detaille: [
      "Une institution totale est un lieu où un grand nombre d'individus, coupés du reste de la société pour une période prolongée, mènent ensemble une existence recluse et réglée dans ses moindres détails par une même autorité : hôpital psychiatrique, prison, caserne, couvent.",
      "Ce qui la distingue n'est pas la contrainte seule, mais l'abolition des cloisons ordinaires de la vie : dormir, travailler et se divertir s'y déroulent au même endroit, sous le même regard, selon un emploi du temps unique imposé à tous.",
      "Goffman y voit la matrice d'un processus de mortification du soi : dépouillé de ses vêtements, de ses objets, de son nom parfois, l'individu perd les supports mêmes sur lesquels reposait, à l'extérieur, l'identité qu'il présentait.",
    ],
    origine: {
      oeuvre: 'Asiles',
      annee: '1961',
      contexte:
        "Goffman observe pendant un an, en position d'assistant du directeur des sports, le fonctionnement d'un grand hôpital psychiatrique fédéral à Washington, et en tire une théorie générale des institutions qui absorbent la vie entière de leurs membres.",
    },
    exemples: [
      "Un uniforme identique imposé à l'entrée, qui efface d'un coup les signes vestimentaires par lesquels chacun se distinguait auparavant.",
      "Un emploi du temps affiché qui règle, minute par minute, le lever, les repas et le coucher de centaines de personnes à la fois.",
    ],
    oeuvres: [
      { y: '1961', t: 'Asiles' },
    ],
    associes: ['stigmate', 'mise-en-scene-de-soi', 'gestion-de-l-identite'],
    opposes: ['capital-social'],
    critiques: [
      "Le tableau, très sombre, laisse peu de place aux marges de manœuvre que les enquêtes ultérieures ont documentées à l'intérieur même de ces institutions.",
      "La catégorie regroupe des lieux très différents — prison, couvent, internat — dont les logiques de contrainte et de sens ne sont pas réductibles les unes aux autres.",
      "Les politiques de désinstitutionnalisation engagées depuis les années 1970 ont largement réduit le poids de l'hôpital psychiatrique, terrain d'origine du concept.",
    ],
    evolution: [
      { p: '1957–1959', f: "Terrain à l'hôpital St. Elizabeths, à Washington." },
      { p: '1961', f: "Asiles systématise le concept et sa théorie de la mortification du soi." },
      { p: '1970–1990', f: "Le mouvement de désinstitutionnalisation psychiatrique s'appuie en partie sur cette critique de l'enfermement total." },
    ],
  },
  'identite-sociale-virtuelle': {
    detaille: [
      "L'identité sociale virtuelle est le personnage qu'une première impression attribue à quelqu'un : la catégorie et les attributs que les autres lui prêtent avant toute vérification, sur la seule foi de son apparence ou du contexte.",
      "Elle fonctionne comme une anticipation normative : elle indique ce qu'on est en droit d'attendre de la personne, et sert de mesure implicite à laquelle son identité réelle sera ensuite comparée.",
      "L'écart entre cette identité virtuelle et l'identité sociale réelle est précisément ce qui définit le stigmate : quand ce que l'on découvre dément ce que l'on attendait, et que la découverte discrédite plutôt qu'elle ne surprend simplement.",
    ],
    origine: {
      oeuvre: 'Stigmate. Les usages sociaux des handicaps',
      annee: '1963',
      contexte:
        "Goffman ouvre Stigmate par cette distinction pour expliquer d'où vient, précisément, le discrédit : non de l'attribut en soi, mais de l'écart entre ce que la situation faisait attendre et ce qu'elle révèle.",
    },
    exemples: [
      "Une voix au téléphone qui laisse présumer un âge, un genre ou une origine sociale, avant toute rencontre en personne.",
      "Un costume et une allure qui font présumer une profession, jusqu'à ce qu'un détail vienne contredire cette première lecture.",
    ],
    oeuvres: [
      { y: '1963', t: 'Stigmate. Les usages sociaux des handicaps' },
    ],
    associes: ['stigmate', 'identite-sociale-reelle', 'etiquetage'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "Le concept suppose des catégories sociales de perception suffisamment partagées pour produire une attente commune, ce qui varie beaucoup selon les contextes culturels.",
      "Il dit peu de la manière dont ces catégories de première impression se forment historiquement, et se contente de les prendre comme données.",
      "La distinction virtuelle/réelle, utile pour penser une rencontre isolée, se prête mal à des relations longues où les deux identités finissent par converger.",
    ],
    evolution: [
      { p: '1963', f: "Stigmate pose la distinction entre identité sociale virtuelle et identité sociale réelle comme fondement de toute la théorie du stigmate." },
      { p: '1970–1990', f: "La sociologie de la déviance et de la santé reprend largement cette distinction pour penser le diagnostic et son annonce." },
    ],
  },
  'identite-sociale-reelle': {
    detaille: [
      "L'identité sociale réelle est l'ensemble des attributs qu'une personne possède effectivement, tels qu'ils apparaissent une fois vérifiés — par opposition à ceux que la première impression lui avait provisoirement prêtés.",
      "Elle n'a rien d'une identité plus « authentique » au sens intime du terme : c'est simplement ce que l'enquête, la fréquentation ou l'aveu finissent par établir, et qui peut confirmer ou démentir l'identité virtuelle de départ.",
      "C'est le rapport entre les deux qui compte : identiques, elles ne posent aucun problème ; disjointes au détriment de la personne, elles ouvrent la situation du discrédité ou du discréditable, selon que l'écart se voit ou peut se cacher.",
    ],
    origine: {
      oeuvre: 'Stigmate. Les usages sociaux des handicaps',
      annee: '1963',
      contexte:
        "Goffman construit ce second pôle du couple conceptuel pour donner un contenu précis à ce que « démasquer » ou « découvrir » quelqu'un veut dire dans une interaction.",
    },
    exemples: [
      "Un candidat dont l'entretien révèle, au fil des questions, un parcours très différent de celui que son allure avait d'abord suggéré.",
      "Un dossier médical qui confirme, ou au contraire dément, ce qu'un premier examen superficiel avait laissé supposer.",
    ],
    oeuvres: [
      { y: '1963', t: 'Stigmate. Les usages sociaux des handicaps' },
    ],
    associes: ['stigmate', 'identite-sociale-virtuelle', 'gestion-de-l-identite'],
    opposes: ['carriere-deviante'],
    critiques: [
      "Parler d'identité « réelle » suggère une stabilité que Goffman lui-même récuse ailleurs, où l'identité se négocie sans cesse dans l'interaction.",
      "Becker objecterait qu'une identité ne se révèle pas simplement : elle se construit par étapes, au fil d'une carrière, ce que le couple virtuel/réel, plus statique, rend mal.",
      "Le concept traite l'écart comme un fait à découvrir, sans dire grand-chose du pouvoir de celui qui décide, dans l'interaction, ce qui compte comme une découverte.",
    ],
    evolution: [
      { p: '1963', f: "Stigmate formalise le couple identité virtuelle / identité réelle." },
      { p: '1963', f: "Becker publie la même année Outsiders, qui déplace l'accent vers le processus temporel d'étiquetage plutôt que vers l'écart entre deux identités." },
    ],
  },
  'gestion-de-l-identite': {
    detaille: [
      "La gestion de l'identité est le travail pratique, continu et souvent épuisant, par lequel une personne dont l'identité sociale réelle s'écarte de l'identité virtuelle attendue décide quoi dire, à qui, quand et comment, pour contrôler cet écart.",
      "Goffman distingue le discrédité, dont l'écart se voit d'emblée et qui doit gérer la tension que cela crée, du discréditable, qui peut le dissimuler et doit alors gérer l'information elle-même : à qui la révéler, à qui la taire.",
      "Cette gestion n'est jamais acquise une fois pour toutes : chaque nouvelle relation, chaque nouvelle situation, rouvre la question de ce qu'il convient de dire, et à quel moment de l'échange le dire devient encore possible sans dommage.",
    ],
    origine: {
      oeuvre: 'Stigmate. Les usages sociaux des handicaps',
      annee: '1963',
      contexte:
        "Goffman consacre une large part de Stigmate à cataloguer les techniques concrètes — camouflage, divulgation contrôlée, désamorçage par l'humour — que les personnes stigmatisées ou discréditables déploient au quotidien.",
    },
    exemples: [
      "Une personne malentendante qui choisit, selon l'interlocuteur, de le préciser d'emblée ou de compter sur la lecture labiale pour ne pas avoir à le faire.",
      "Un casier judiciaire ancien, mentionné à un employeur choisi avec soin plutôt que découvert par une vérification qu'on n'aurait pas anticipée.",
    ],
    oeuvres: [
      { y: '1963', t: 'Stigmate. Les usages sociaux des handicaps' },
    ],
    associes: ['identite-sociale-virtuelle', 'identite-sociale-reelle', 'stigmate'],
    opposes: ['fait-social'],
    critiques: [
      "Le concept met tout le poids du travail sur l'individu stigmatisé, et dit peu de ce qui incomberait, symétriquement, à ceux qui accueillent l'information.",
      "Il suppose une marge de manœuvre — choisir de dire ou de taire — qui n'existe pas pour tous les stigmates, certains étant impossibles à dissimuler.",
      "Les mouvements de fierté identitaire, nés après Goffman, renversent la logique de gestion discrète en revendication ouverte, que le concept n'anticipe pas.",
    ],
    evolution: [
      { p: '1963', f: "Stigmate catalogue les techniques de gestion de l'information sur soi." },
      { p: '1990–2010', f: "Les mouvements de fierté identitaire (handicap, santé mentale, orientation sexuelle) déplacent une part de cette gestion vers la revendication publique." },
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
  'deviance-primaire': {
    detaille: [
      "La déviance primaire est un premier écart aux règles — vol, consommation illégale, incartade — commis pour des raisons variées, souvent banales, et qui n'entame pas encore l'image que la personne a d'elle-même : elle reste, à ses propres yeux, quelqu'un qui a un jour transgressé, pas un déviant.",
      "Lemert insiste sur sa diversité de causes et son caractère souvent sans suite : la plupart des déviances primaires ne sont jamais découvertes, ou le sont sans conséquence durable, et ne débouchent sur aucune carrière.",
      "Ce qui la distingue de la déviance secondaire n'est donc pas sa gravité, mais son statut : tant qu'aucune réaction sociale marquée ne vient la sanctionner publiquement, elle reste un épisode plutôt qu'une identité.",
    ],
    origine: {
      oeuvre: 'Social Pathology',
      annee: '1951',
      contexte:
        "Edwin Lemert introduit la distinction pour séparer, dans l'étude de la déviance, ce qui relève d'un comportement isolé de ce qui relève d'une réorganisation durable de l'identité autour de ce comportement.",
    },
    exemples: [
      "Un adolescent qui chaparde une fois dans un magasin, sans être vu, et qui n'y repense presque plus quelques semaines plus tard.",
      "Un excès de vitesse isolé, jamais verbalisé, qui ne change en rien la manière dont le conducteur se perçoit.",
    ],
    oeuvres: [
      { y: '1951', t: 'Social Pathology' },
      { y: '1963', t: 'Outsiders (Becker en reprend la distinction)' },
    ],
    associes: ['etiquetage', 'deviance-secondaire'],
    opposes: ['tension-anomique'],
    critiques: [
      "Merton objecterait que même une déviance dite « primaire » a des causes structurelles précises — un écart entre buts et moyens légitimes — plutôt qu'une origine aussi diverse et indifférenciée que le suggère Lemert.",
      "La frontière entre primaire et secondaire reste difficile à dater précisément : à partir de quelle réaction bascule-t-on de l'une à l'autre ?",
      "Le concept dit peu des déviances primaires qui, sans jamais être découvertes, deviennent pourtant récurrentes et organisées sans qu'aucune étiquette n'ait encore été posée.",
    ],
    evolution: [
      { p: '1951', f: "Lemert distingue déviance primaire et secondaire dans Social Pathology." },
      { p: '1963', f: "Becker reprend la distinction dans Outsiders, sans toujours nommer Lemert aussi explicitement qu'il l'aurait mérité." },
    ],
  },
  'deviance-secondaire': {
    detaille: [
      "La déviance secondaire apparaît quand la réaction sociale à un premier écart — arrestation, exclusion, rumeur — devient si marquée que la personne finit par organiser sa conduite et son identité autour du rôle qu'on lui a assigné.",
      "Le mécanisme est circulaire : plus la réaction est sévère, plus elle referme les portes légitimes et rapproche des milieux déjà désignés, ce qui rend la déviance suivante non seulement probable mais, pour la personne, presque la seule issue cohérente qui reste.",
      "C'est à ce stade que Becker fait le lien avec sa propre notion de carrière déviante : la déviance secondaire n'est plus un épisode, elle devient une trajectoire, avec ses étapes et ses apprentissages propres.",
    ],
    origine: {
      oeuvre: 'Social Pathology',
      annee: '1951',
      contexte:
        "Lemert observe que la sanction sociale, censée corriger un écart, produit souvent l'effet inverse : elle consolide une identité déviante là où elle prétendait la dissuader.",
    },
    exemples: [
      "Un renvoi scolaire qui, en coupant l'accès aux filières ordinaires, pousse vers des fréquentations où l'étiquette « mauvais élève » devient un statut à assumer plutôt qu'à fuir.",
      "Une première incarcération qui, en coupant l'accès à l'emploi légal, rend la récidive plus probable que la réinsertion.",
    ],
    oeuvres: [
      { y: '1951', t: 'Social Pathology' },
      { y: '1963', t: 'Outsiders' },
    ],
    associes: ['deviance-primaire', 'etiquetage', 'carriere-deviante'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "Boudon objecterait que la « bascule » vers l'identité déviante reste toujours, même à ce stade, le résultat d'un choix qu'un acteur pourrait refuser de faire.",
      "Le modèle prête à la réaction sociale un pouvoir presque mécanique, qui laisse peu de place aux personnes qui, malgré une sanction sévère, ne basculent jamais.",
      "Il explique bien la consolidation d'une identité déviante, mais peu sa sortie : le retour à une identité ordinaire reste un angle mort de la théorie.",
    ],
    evolution: [
      { p: '1951', f: "Lemert formule la déviance secondaire comme effet en retour de la réaction sociale." },
      { p: '1963', f: "Outsiders l'articule à la carrière déviante et à l'étiquetage." },
      { p: '1970–1990', f: "Le concept nourrit les critiques de l'enfermement carcéral comme facteur aggravant plutôt que correctif." },
    ],
  },
  'entreprise-morale': {
    detaille: [
      "L'entreprise morale est le travail collectif, souvent long et incertain, par lequel une pratique jusque-là tolérée est transformée en scandale public puis en règle sanctionnée — le processus que mène l'entrepreneur de morale, distinct de la personne qui le porte.",
      "Ce travail suppose des étapes concrètes : rendre visible un problème resté invisible, mobiliser des soutiens, convaincre des relais institutionnels, puis obtenir l'inscription de la nouvelle norme dans un texte ou une pratique de contrôle.",
      "Rien ne garantit son succès : la plupart des entreprises morales échouent ou s'essoufflent avant d'aboutir à une règle effective, ce qui rend d'autant plus significatives celles qui y parviennent.",
    ],
    origine: {
      oeuvre: 'Outsiders',
      annee: '1963',
      contexte:
        "Becker construit ce concept en étudiant le processus complet du Marihuana Tax Act de 1937, depuis la mobilisation initiale jusqu'à l'inscription de la loi.",
    },
    exemples: [
      "Une campagne de plusieurs années, menée par une poignée de militants, avant qu'une pratique jugée anodine ne devienne enfin passible de sanction.",
      "Un scandale médiatique qui échoue à déboucher sur la moindre loi, faute d'avoir trouvé de relais institutionnel suffisant.",
    ],
    oeuvres: [
      { y: '1963', t: 'Outsiders, chapitres VII et VIII' },
    ],
    associes: ['entrepreneur-de-morale', 'etiquetage'],
    opposes: ['fait-social'],
    critiques: [
      "Le concept dit peu des entreprises morales qui réussissent sans campagne visible, par simple accumulation de décisions administratives.",
      "Il centre l'analyse sur le succès ou l'échec d'une croisade, et laisse peu de place aux effets secondaires d'une entreprise morale qui échoue mais déplace malgré tout le débat public.",
      "Gusfield objecte que l'issue d'une entreprise morale dépend autant des rapports symboliques entre groupes sociaux que de la seule habileté organisationnelle de ses porteurs.",
    ],
    evolution: [
      { p: '1937', f: "Le Marihuana Tax Act sert de cas d'école à la formulation du concept." },
      { p: '1963', f: "Outsiders formalise l'entreprise morale comme processus distinct de la figure de l'entrepreneur." },
      { p: '1963', f: "Gusfield, la même année, étudie en parallèle les croisades de tempérance comme entreprises morales de classe." },
    ],
  },
  'monde-social': {
    detaille: [
      "Un monde social est un ensemble de personnes coordonnées autour d'une activité commune, sans frontière fixe ni organisation formelle : on y entre et on en sort sans cérémonie, et l'appartenance se mesure à la participation plus qu'à un statut officiel.",
      "Ce qui tient ensemble un monde social n'est ni une hiérarchie ni un règlement, mais des conventions partagées — des manières de faire convenues, apprises par la pratique, qui permettent à des participants de coordonner leur travail sans avoir à tout renégocier à chaque fois.",
      "Un même monde social peut ainsi réunir des rôles très divers — professionnels, amateurs, fournisseurs, publics — dont aucun ne détient à lui seul l'ensemble de l'activité, et qui ne se rencontrent parfois jamais directement.",
    ],
    origine: {
      oeuvre: 'Les Mondes de l\'art',
      annee: '1982',
      contexte:
        "Becker généralise une notion héritée d'Anselm Strauss et de l'École de Chicago pour décrire, au-delà du seul art, toute activité collective organisée sans centre ni frontière nette.",
    },
    exemples: [
      "L'ensemble très hétérogène des amateurs, revendeurs, réparateurs et passionnés qui gravitent, sans organisation centrale, autour d'un instrument de musique ancien.",
      "Un monde du running amateur qui réunit coureurs, fabricants de chaussures, organisateurs de courses et blogueurs, sans qu'aucun d'eux ne le pilote entièrement.",
    ],
    oeuvres: [
      { y: '1982', t: "Les Mondes de l'art" },
      { y: '1998', t: 'Les Ficelles du métier' },
    ],
    associes: ['mondes-de-l-art', 'cooperation', 'convention'],
    opposes: ['systeme-social'],
    critiques: [
      "Parsons objecterait qu'un ensemble aussi peu délimité ne permet plus de dire précisément qui appartient à quoi, ni d'en analyser la fonction pour la société globale.",
      "La notion de frontière floue, féconde pour décrire, complique la comparaison entre mondes sociaux : sur quels critères les distinguer les uns des autres ?",
      "Elle dit peu des rapports de pouvoir internes à un monde social, où certains participants pèsent bien plus lourd que d'autres sur les conventions communes.",
    ],
    evolution: [
      { p: '1959', f: "Strauss introduit la notion de monde social en sociologie interactionniste." },
      { p: '1982', f: "Les Mondes de l'art l'applique systématiquement à la production artistique." },
      { p: '1990–2010', f: "Le concept se diffuse largement en sociologie des professions, des loisirs et des sous-cultures." },
    ],
  },
  'carriere': {
    detaille: [
      "Une carrière est, dans le vocabulaire hérité d'Everett Hughes, toute séquence organisée de positions traversées par un individu au fil du temps — professionnelles, mais aussi médicales, familiales ou déviantes — reliées entre elles par les changements de statut, de perception et de relations qu'elles entraînent.",
      "Ce qui fait une carrière n'est pas seulement la position occupée à un instant donné, mais la manière dont chaque étape modifie ce qui devient possible ensuite : une carrière se raconte par ses tournants plus que par un état stable.",
      "Becker étend cette notion bien au-delà des professions établies pour en faire un outil général d'analyse de toute trajectoire sociale, y compris les plus marginales.",
    ],
    origine: {
      oeuvre: 'Outsiders',
      annee: '1963',
      contexte:
        "Hughes forge la notion à Chicago dans les années 1930 pour les professions ; Becker la reprend et la généralise à des trajectoires que la sociologie n'envisageait pas encore comme des carrières à part entière.",
    },
    exemples: [
      "Le parcours d'un malade chronique, de l'apparition des premiers symptômes à l'installation dans un rôle de patient reconnu par son entourage.",
      "La trajectoire d'un bénévole associatif, d'une participation ponctuelle à une place de responsable reconnu par tous les autres membres.",
    ],
    oeuvres: [
      { y: '1937', t: "Hughes, Institutional Office and the Person" },
      { y: '1963', t: 'Outsiders' },
    ],
    associes: ['carriere-deviante', 'monde-social', 'trajectoire-sociale'],
    opposes: ['fait-social'],
    critiques: [
      "La souplesse même du concept — applicable à presque toute trajectoire — le rend parfois si général qu'il perd sa capacité à trancher entre des parcours très différents.",
      "Il privilégie une lecture séquentielle et ordonnée, quand certains parcours réels sont faits de ruptures et de retours difficiles à faire tenir dans une seule ligne.",
      "Bourdieu objecterait qu'une carrière, aussi bien décrite soit-elle étape par étape, reste orientée en amont par des dispositions et des capitaux qu'elle ne fait que dérouler dans le temps.",
    ],
    evolution: [
      { p: '1937', f: "Hughes introduit la notion de carrière pour l'analyse des professions." },
      { p: '1963', f: "Becker l'étend à la déviance dans Outsiders." },
      { p: '1980–2000', f: "Le concept devient un outil transversal de la sociologie interactionniste, bien au-delà du travail et de la déviance." },
    ],
  },
  'mondes-de-l-art': {
    detaille: [
      "Les mondes de l'art sont les réseaux de coopération, souvent immenses et largement invisibles, sans lesquels aucune œuvre ne pourrait exister : fabricants de matériel, techniciens, critiques, galeristes, publics — une œuvre attribuée à un seul nom est en réalité le produit d'un travail collectif.",
      "Becker déplace ainsi le regard porté sur l'art : au lieu d'interroger le génie individuel, il interroge la division du travail, les conventions techniques et les circuits de diffusion qui rendent une œuvre possible, reconnaissable et montrable.",
      "Ce déplacement change aussi la question de la valeur : une œuvre n'est pas belle en soi, elle est reconnue comme telle par un monde de l'art qui en fixe collectivement les critères, à un moment et dans un lieu donnés.",
    ],
    origine: {
      oeuvre: "Les Mondes de l'art",
      annee: '1982',
      contexte:
        "Becker construit le livre à partir d'enquêtes sur la musique, le cinéma et les arts plastiques, pour montrer qu'aucune œuvre, même la plus singulière, ne se passe entièrement de coopération collective.",
    },
    exemples: [
      "Une symphonie qui suppose, derrière le nom du compositeur, des facteurs d'instruments, des copistes de partitions et des musiciens formés selon des conventions communes.",
      "Un film porté par le nom d'un seul réalisateur, alors que des centaines de techniciens, de financeurs et de distributeurs en ont rendu l'existence possible.",
    ],
    oeuvres: [
      { y: '1982', t: "Les Mondes de l'art" },
    ],
    associes: ['monde-social', 'cooperation', 'convention'],
    opposes: ['champ'],
    critiques: [
      "Bourdieu objecte explicitement à Becker qu'un monde de l'art décrit comme une simple coopération efface les rapports de domination et de lutte pour la légitimité qui structurent, selon lui, tout champ artistique.",
      "Le modèle, très attentif à la production, dit relativement peu de la réception et des luttes de classement qui décident, après coup, ce qui restera comme grand art.",
      "Il peine à expliquer pourquoi certains mondes de l'art hiérarchisent fortement leurs participants quand d'autres restent, en apparence, plus égalitaires.",
    ],
    evolution: [
      { p: '1974–1976', f: "Becker publie les premiers articles sur l'art comme action collective." },
      { p: '1982', f: "Les Mondes de l'art en donne la synthèse complète." },
      { p: '1980–1990', f: "Le débat avec Bourdieu sur coopération et domination structure une bonne part de la sociologie de l'art qui suit." },
    ],
  },
  'cooperation': {
    detaille: [
      "La coopération est le mécanisme de base qui tient ensemble un monde social : des personnes accomplissent des tâches interdépendantes selon des manières de faire convenues, sans qu'il soit nécessaire qu'elles partagent les mêmes valeurs, se connaissent personnellement, ni même s'apprécient.",
      "Elle ne suppose ni accord explicite ni intention commune : il suffit que chacun, en poursuivant son propre intérêt ou son propre travail, produise des résultats compatibles avec ce que les autres attendent de lui pour que l'ensemble fonctionne.",
      "Becker en fait un principe d'explication concurrent de la lutte pour le pouvoir ou le prestige : l'essentiel de la vie collective, selon lui, tient moins à la domination qu'à ce travail d'ajustement mutuel, discret et permanent.",
    ],
    origine: {
      oeuvre: "Les Mondes de l'art",
      annee: '1982',
      contexte:
        "Becker construit ce principe en observant combien la production artistique la plus routinière dépend d'ajustements réciproques entre participants qui n'ont, la plupart du temps, jamais discuté explicitement de la manière de travailler ensemble.",
    },
    exemples: [
      "Un technicien de tournage qui ajuste son travail à celui du réalisateur sans qu'aucune consigne écrite n'ait jamais précisé cette coordination.",
      "Un fabricant d'instruments qui adapte ses cordes aux attentes des musiciens, sans jamais échanger directement avec la plupart d'entre eux.",
    ],
    oeuvres: [
      { y: '1982', t: "Les Mondes de l'art" },
      { y: '1998', t: 'Les Ficelles du métier' },
    ],
    associes: ['monde-social', 'mondes-de-l-art', 'convention'],
    opposes: ['violence-symbolique'],
    critiques: [
      "Bourdieu objecterait que présenter la vie collective comme coopération relègue au second plan les rapports de force qui décident, en réalité, qui impose ses conventions à qui.",
      "Le concept dit peu des situations où la coopération se rompt ouvertement, en conflit déclaré plutôt qu'en simple ajustement raté.",
      "Il suppose une interdépendance déjà organisée, sans toujours expliquer comment un monde social en vient à se structurer ainsi plutôt qu'autrement.",
    ],
    evolution: [
      { p: '1959', f: "Strauss pose les bases interactionnistes de l'ordre négocié, matrice du concept." },
      { p: '1982', f: "Les Mondes de l'art en fait le principe central de l'analyse de la production artistique." },
    ],
  },
  'convention': {
    detaille: [
      "Une convention est un accord tacite sur la manière de faire — un format, une notation, une taille standard, une durée usuelle — qui permet à des participants d'un monde social de coordonner leur travail sans avoir à en renégocier les termes à chaque fois.",
      "Elle n'a rien d'arbitraire au sens d'un simple caprice : une convention en vigueur facilite tellement le travail collectif qu'il devient coûteux de s'en écarter, même quand une autre solution serait tout aussi valable en soi.",
      "Les conventions changent pourtant, souvent lentement, parfois brusquement quand une innovation technique ou un nouveau groupe de participants impose d'autres manières de faire — ce qui distingue la convention de la règle imposée : elle se maintient par l'usage, non par la contrainte.",
    ],
    origine: {
      oeuvre: "Les Mondes de l'art",
      annee: '1982',
      contexte:
        "Becker montre que la production artistique repose sur d'innombrables conventions techniques — taille d'une toile, durée d'un morceau, format d'une page — trop souvent invisibles parce que trop bien intégrées par tous les participants.",
    },
    exemples: [
      "Le format standard d'une page imprimée, qui n'a rien de naturel mais que personne, dans la chaîne du livre, n'a intérêt à remettre en question seul.",
      "L'accordage standard des instruments d'un orchestre, sans lequel aucun musicien ne pourrait jouer avec les autres.",
    ],
    oeuvres: [
      { y: '1982', t: "Les Mondes de l'art" },
    ],
    associes: ['cooperation', 'monde-social', 'mondes-de-l-art'],
    opposes: ['doxa'],
    critiques: [
      "Le concept explique bien la stabilité des conventions, mais moins bien les moments précis où elles basculent d'un usage à un autre.",
      "Il traite les conventions comme globalement neutres, alors que certains participants d'un monde social ont plus de pouvoir que d'autres pour les fixer à leur avantage.",
      "La frontière entre convention et simple habitude individuelle reste parfois difficile à tracer dans l'enquête empirique.",
    ],
    evolution: [
      { p: '1982', f: "Les Mondes de l'art systématise le rôle des conventions dans la coordination du travail artistique." },
      { p: '1987', f: "Boltanski et Thévenot, en économie des conventions, développeront en France un usage proche mais distinct de la notion." },
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
    associes: ['individualisme-methodologique', 'fonction-latente', 'prophetie-autorealisatrice', 'consequences-inattendues'],
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
  'meritocratie': {
    detaille: [
      "La méritocratie est l'idée qu'une société juste distribue ses positions — postes, revenus, honneurs — selon le mérite de chacun plutôt que selon sa naissance. Elle suppose une compétition ouverte, des critères objectifs de sélection, et l'égalité des chances au départ de la course.",
      "Boudon ne rejette pas l'idéal, mais en mesure l'écart avec ce que produisent réellement des systèmes scolaires pourtant ouverts à tous : les familles calculent différemment le coût et le bénéfice des études selon leur position de départ, et ces calculs, individuellement raisonnables, reconduisent en agrégat des destins scolaires très inégaux.",
      "Le mérite lui-même n'est jamais neutre : ce qu'une institution reconnaît comme mérite — telle épreuve, tel style d'argumentation — favorise toujours certains apprentissages antérieurs plus que d'autres.",
    ],
    origine: {
      oeuvre: "L'Inégalité des chances",
      annee: '1973',
      contexte:
        "Boudon modélise les choix scolaires comme une succession de paris, faits à chaque palier par des familles aux ressources et aux anticipations inégales, pour expliquer pourquoi l'école de masse n'a pas égalisé les destins.",
    },
    exemples: [
      "Un concours anonymisé, donc formellement méritocratique, dont les lauréats ont presque tous suivi une préparation coûteuse que seules certaines familles peuvent financer.",
      "Une bourse au mérite qui récompense des résultats déjà obtenus grâce à des conditions de travail favorables, plutôt que de les créer.",
    ],
    oeuvres: [
      { y: '1973', t: "L'Inégalité des chances" },
      { y: '1979', t: 'La Logique du social' },
    ],
    associes: ['effets-pervers', 'individualisme-methodologique'],
    opposes: ['violence-symbolique'],
    critiques: [
      "Bourdieu répond que parler de « mérite » revient à valider les critères d'un jeu que l'école a elle-même fixés selon les dispositions des classes dominantes.",
      "Young, qui invente le mot en 1958 dans un texte satirique, le forge justement pour dénoncer une nouvelle aristocratie du diplôme, et non pour la vanter — un sens souvent oublié aujourd'hui.",
      "La méritocratie mesurée par les seuls résultats scolaires ignore ce qui, hors de l'école, façonne aussi le mérite reconnu : le réseau, l'aisance, l'apparence.",
    ],
    evolution: [
      { p: '1958', f: "Michael Young invente le mot dans The Rise of the Meritocracy, comme satire d'une société future gouvernée par le seul QI." },
      { p: '1973', f: "Boudon en donne le modèle formel : des choix scolaires rationnels qui, agrégés, reconduisent l'inégalité malgré l'ouverture du système." },
      { p: '1979', f: "Bourdieu et Boudon s'opposent frontalement sur la lecture des mêmes statistiques scolaires, l'un y voyant un héritage culturel, l'autre des calculs sous contrainte." },
      { p: '2020', f: "Sandel relance le débat en montrant que la méritocratie, même honnête, produit chez ses gagnants un mépris pour les perdants qu'aucune aristocratie n'aurait osé revendiquer." },
    ],
  },
  'ressources-sociales': {
    detaille: [
      "Boudon élargit son modèle de l'acteur rationnel au-delà du seul calcul économique : agir suppose de disposer de ressources — de l'information, du temps, de l'argent, des relations, une position d'où observer les options — inégalement réparties avant même que la décision ne soit prise.",
      "Ces ressources ne sont pas un capital accumulé au sens de Bourdieu, transmis et converti selon une logique structurale : elles sont mobilisées au cas par cas, dans une situation donnée, par un acteur qui garde son autonomie de jugement, même sous contrainte.",
      "L'inégalité de ressources suffit, à elle seule, à produire des destins différents sans qu'il soit besoin d'invoquer des dispositions incorporées ou une domination systémique : deux acteurs aussi rationnels l'un que l'autre décident différemment parce qu'ils partent de positions différentes.",
    ],
    origine: {
      oeuvre: 'La Logique du social',
      annee: '1979',
      contexte:
        "Boudon y systématise une sociologie de l'action qui doit expliquer l'inégalité sans invoquer ni un capital hérité, ni des dispositions inconscientes — seulement des ressources et une information inégalement distribuées.",
    },
    exemples: [
      "Deux candidats à un même poste, dont l'un connaît par un contact les questions probables de l'entretien, l'autre non.",
      "Une famille qui dispose du temps et des relations pour obtenir un stage de dernière minute, quand une autre n'a ni l'un ni les autres.",
    ],
    oeuvres: [
      { y: '1973', t: "L'Inégalité des chances" },
      { y: '1979', t: 'La Logique du social' },
      { y: '1984', t: 'La Place du désordre' },
    ],
    associes: ['individualisme-methodologique', 'effets-pervers'],
    opposes: ['capital-social'],
    critiques: [
      "La frontière avec le capital social de Bourdieu est ténue dans les faits : une relation mobilisée une fois ressemble beaucoup à une relation entretenue comme un capital.",
      "Le modèle prête aux acteurs une capacité à recenser leurs propres ressources et à en calculer l'usage optimal, ce qu'aucune enquête ne confirme vraiment.",
      "Il explique bien l'inégalité de résultat à ressources égales, mais dit peu sur l'origine de l'inégalité de ressources elle-même, qu'il tend à prendre comme donnée de départ.",
    ],
    evolution: [
      { p: '1973', f: "Premiers usages implicites, dans le modèle des choix scolaires sous contrainte de L'Inégalité des chances." },
      { p: '1979', f: "La Logique du social généralise la notion de ressources à toute action sociale, contre les explications par le seul héritage culturel." },
      { p: '1981', f: "Nan Lin en fait, aux États-Unis, une théorie autonome des ressources sociales mobilisées à travers les réseaux, distincte du capital social de Bourdieu." },
      { p: '1973–1974', f: "Granovetter montre, avec la force des liens faibles, que les relations les moins intimes sont souvent les plus utiles pour trouver un emploi — une thèse proche dans l'esprit, sans jamais citer Boudon." },
    ],
  },
  'action-individuelle': {
    detaille: [
      "L'action individuelle est, pour Boudon, la seule brique à partir de laquelle un phénomène collectif peut s'expliquer : aucune structure, aucun système ni aucune fonction ne fait quoi que ce soit — seuls des individus agissent, et le collectif n'est que la composition de ce qu'ils font.",
      "Expliquer une action suppose de reconstruire les raisons que l'acteur avait de l'accomplir, telles qu'il pouvait les avoir dans sa situation, avec l'information et les ressources dont il disposait — pas les raisons qu'un observateur extérieur jugerait, après coup, les meilleures.",
      "Ce principe ne dit rien de la nature humaine ni d'un quelconque égoïsme calculateur : c'est une règle de méthode, qui vaut aussi bien pour une action économique que pour une croyance religieuse ou un vote.",
    ],
    origine: {
      oeuvre: 'La Logique du social',
      annee: '1979',
      contexte:
        "Boudon reprend et systématise un principe déjà présent chez Weber, pour en faire le socle explicite de sa sociologie, contre les explications structuralistes et fonctionnalistes alors dominantes.",
    },
    exemples: [
      "Un choix d'orientation scolaire qui, vu du dossier, semble irrationnel, mais qui s'éclaire entièrement une fois reconstituées les informations et les craintes propres à la famille qui l'a fait.",
      "Un vote contradictoire avec les intérêts économiques apparents du votant, parfaitement cohérent une fois replacé dans le système de valeurs qui l'a motivé.",
    ],
    oeuvres: [
      { y: '1979', t: 'La Logique du social' },
      { y: '2003', t: 'Raison, bonnes raisons' },
    ],
    associes: ['individualisme-methodologique', 'rationalite'],
    opposes: ['fait-social'],
    critiques: [
      "Durkheim objecterait que certains faits — le taux de suicide, par exemple — ne varient pas comme la simple somme des raisons individuelles le laisserait attendre, et réclament une explication proprement collective.",
      "Le principe suppose reconstituée une information dont l'acteur réel dispose rarement dans son intégralité au moment d'agir.",
      "Il dit peu de la manière dont les raisons elles-mêmes se forment, avant que l'acteur ne les mobilise pour agir.",
    ],
    evolution: [
      { p: '1908–1922', f: "Weber pose la compréhension du sens visé par l'acteur comme fondement de la sociologie." },
      { p: '1979', f: "La Logique du social en fait le principe méthodologique explicite de toute explication sociologique." },
      { p: '2003', f: "Raison, bonnes raisons prolonge le principe jusqu'aux croyances, pas seulement aux choix." },
    ],
  },
  'rationalite': {
    detaille: [
      "Boudon défend une rationalité générale, bien plus large que le calcul coûts-avantages de la théorie économique classique : est rationnelle toute action, toute croyance ou tout jugement pour lesquels l'acteur peut donner de bonnes raisons, compte tenu de sa situation.",
      "Cette extension change la portée du principe : des conduites longtemps jugées irrationnelles — croyances traditionnelles, choix apparemment illogiques, préférences qui semblent aller contre l'intérêt — deviennent intelligibles dès lors qu'on restitue les raisons, cognitives autant qu'axiologiques, qui les soutenaient.",
      "Boudon n'affirme pas que tout acteur a toujours raison : il affirme qu'on comprend mieux l'action en cherchant d'abord ses bonnes raisons qu'en la disqualifiant d'emblée comme un effet d'irrationalité, d'idéologie ou de domination.",
    ],
    origine: {
      oeuvre: 'La Logique du social',
      annee: '1979',
      contexte:
        "Boudon élabore ce concept en réaction à deux tendances qu'il juge symétriquement insuffisantes : réduire toute rationalité au calcul économique étroit, ou l'abandonner dès qu'une conduite ne s'y ramène pas.",
    },
    exemples: [
      "Une pratique agricole traditionnelle, longtemps jugée archaïque, qui se révèle parfaitement adaptée aux risques réels d'un climat mal connu des observateurs extérieurs.",
      "Une méfiance envers une institution, jugée irrationnelle de l'extérieur, mais qui repose sur une série d'expériences vécues parfaitement cohérentes.",
    ],
    oeuvres: [
      { y: '1979', t: 'La Logique du social' },
      { y: '1990', t: "L'Art de se persuader" },
      { y: '2003', t: 'Raison, bonnes raisons' },
    ],
    associes: ['action-individuelle', 'rationalite-cognitive', 'rationalite-axiologique'],
    opposes: ['violence-symbolique'],
    critiques: [
      "Élargie à ce point, la rationalité risque de devenir une catégorie fourre-tout : presque toute conduite finit par trouver, après coup, de bonnes raisons qui la justifient.",
      "Bourdieu objecterait que ce que Boudon appelle de « bonnes raisons » n'est souvent que la rationalisation, après coup, de dispositions incorporées bien avant toute délibération.",
      "Le critère de la « bonne raison » reste flou : bonne selon qui, à quel moment, avec quelles informations disponibles ?",
    ],
    evolution: [
      { p: '1979', f: "La Logique du social pose la rationalité générale contre le seul calcul économique." },
      { p: '1990', f: "L'Art de se persuader applique le principe aux croyances collectives fausses mais rationnellement soutenues." },
      { p: '1995–2003', f: "Boudon systématise la distinction entre rationalité cognitive et rationalité axiologique." },
    ],
  },
  'rationalite-cognitive': {
    detaille: [
      "La rationalité cognitive étend le principe des bonnes raisons aux croyances elles-mêmes : une croyance, même fausse, peut être rationnelle si elle résulte d'un processus de raisonnement que l'acteur, dans sa situation et avec l'information dont il dispose, juge solide.",
      "Boudon s'oppose ainsi à une explication très répandue des croyances erronées ou des préjugés, qui les attribue systématiquement à un intérêt caché, une idéologie ou un biais de domination : bien souvent, l'acteur croit ce qu'il croit parce que les arguments dont il dispose lui paraissent, de bonne foi, convaincants.",
      "Cette rationalité n'a rien d'infaillible : elle explique pourquoi une croyance fausse peut néanmoins être largement partagée et durable, sans qu'il faille supposer chez ceux qui la tiennent ni bêtise, ni manipulation, ni mauvaise foi.",
    ],
    origine: {
      oeuvre: "L'Art de se persuader des idées douteuses, fragiles ou fausses",
      annee: '1990',
      contexte:
        "Boudon y étudie des croyances collectives qu'il juge objectivement fausses — de certaines théories scientifiques abandonnées à des préjugés sociaux — pour montrer qu'elles reposent presque toujours sur un raisonnement localement défendable.",
    },
    exemples: [
      "Une théorie scientifique aujourd'hui réfutée, mais qui reposait, en son temps, sur les meilleures preuves disponibles et un raisonnement rigoureux.",
      "Un préjugé fondé sur une expérience personnelle limitée, généralisée de bonne foi faute d'accès à des données plus larges.",
    ],
    oeuvres: [
      { y: '1990', t: "L'Art de se persuader des idées douteuses, fragiles ou fausses" },
      { y: '2003', t: 'Raison, bonnes raisons' },
    ],
    associes: ['rationalite', 'individualisme-methodologique', 'ressources-sociales'],
    opposes: ['ideologie'],
    critiques: [
      "Le concept peine à expliquer pourquoi certaines croyances fausses persistent bien après que les preuves de leur fausseté sont devenues largement accessibles.",
      "Il minore le rôle de l'intérêt et du pouvoir dans la production et la diffusion de certaines croyances, que la notion de bonne raison individuelle traite comme secondaire.",
      "La frontière entre raisonnement solide et rationalisation a posteriori reste difficile à établir dans l'enquête empirique.",
    ],
    evolution: [
      { p: '1990', f: "L'Art de se persuader introduit la rationalité cognitive à propos de croyances collectives fausses." },
      { p: '1995–2010', f: "Boudon en fait un programme de recherche à part entière, la « sociologie cognitive »." },
    ],
  },
  'rationalite-axiologique': {
    detaille: [
      "La rationalité axiologique désigne, chez Boudon, une action ou un jugement fondés sur des raisons tirées de valeurs — la justice, l'égalité, la loyauté — plutôt que sur un calcul d'intérêt, mais qui n'en restent pas moins rationnels au sens où l'acteur peut en donner de bonnes raisons.",
      "Boudon reprend ici la rationalité en valeur de Weber, mais la déplace : il ne s'agit plus seulement de décrire un type d'action possible parmi d'autres, mais d'affirmer que même l'adhésion à une valeur peut et doit s'expliquer par des raisons, et non par un simple attachement affectif ou un conditionnement.",
      "Un jugement moral — trouver une inégalité injuste, par exemple — n'est donc pas, pour Boudon, un pur effet de sensibilité ou de position sociale : il repose sur des raisons qu'on peut examiner, discuter et parfois réviser, comme n'importe quel autre jugement rationnel.",
    ],
    origine: {
      oeuvre: 'Le Juste et le Vrai',
      annee: '1995',
      contexte:
        "Boudon y prolonge son programme de rationalité généralisée jusqu'au jugement moral, contre les théories qui réduisent les valeurs à de simples préférences ou à des produits de la position sociale.",
    },
    exemples: [
      "Une personne qui refuse un avantage matériel au nom de l'équité, et qui peut justifier ce refus par des raisons précises plutôt que par un simple sentiment.",
      "Un débat public où deux camps défendent des valeurs opposées, chacun avec des arguments qu'on peut examiner un par un, plutôt qu'un simple choc d'opinions arbitraires.",
    ],
    oeuvres: [
      { y: '1995', t: 'Le Juste et le Vrai' },
      { y: '2003', t: 'Raison, bonnes raisons' },
    ],
    associes: ['rationalite', 'rationalite-en-valeur', 'individualisme-methodologique'],
    opposes: ['rationalite-instrumentale'],
    critiques: [
      "Weber lui-même distinguait la rationalité en valeur de la rationalité instrumentale précisément pour marquer qu'elle n'obéit pas au même régime de justification — la refondre en simple variante rationnelle risque d'effacer cette différence.",
      "Bourdieu objecterait qu'un jugement moral qui paraît raisonné reste souvent l'expression différée d'une disposition de classe, acquise bien avant toute délibération consciente.",
      "Le concept dit peu de ce qui distingue une bonne raison axiologique d'une simple rationalisation d'un attachement déjà là.",
    ],
    evolution: [
      { p: '1922', f: "Weber distingue la rationalité en valeur de la rationalité instrumentale dans sa typologie de l'action sociale." },
      { p: '1995', f: "Le Juste et le Vrai reprend et généralise la rationalité en valeur en rationalité axiologique." },
      { p: '2003', f: 'Raison, bonnes raisons systématise le rapprochement entre rationalité cognitive et rationalité axiologique.' },
    ],
  },
  'effets-de-composition': {
    detaille: [
      "Un effet de composition est le résultat, à l'échelle collective, de l'agrégation d'actions individuelles — un résultat qui n'est en général l'intention d'aucun des acteurs pris séparément, qu'il soit finalement heureux, malheureux ou simplement neutre.",
      "Boudon en fait la catégorie la plus large de sa sociologie : l'effet pervers en est le cas particulier négatif, le paradoxe d'agrégation le cas particulier où le résultat collectif est logiquement incohérent — mais tout phénomène social agrégé, désiré ou non, relève d'abord d'un effet de composition.",
      "Ce terme neutre évite un biais fréquent : celui qui ne remarque les effets d'agrégation que lorsqu'ils déçoivent, alors que la même mécanique produit tout aussi bien des résultats collectifs heureux, jamais voulus comme tels par personne.",
    ],
    origine: {
      oeuvre: 'La Logique du social',
      annee: '1979',
      contexte:
        "Boudon distingue précisément, dans cet ouvrage, l'effet de composition comme catégorie générale et l'effet pervers comme son cas particulier négatif, pour donner à l'agrégation des conduites individuelles un traitement systématique.",
    },
    exemples: [
      "Un quartier qui devient progressivement plus animé grâce à des choix résidentiels individuels sans qu'aucun habitant n'ait cherché ce résultat pour lui-même.",
      "Une langue qui évolue par l'usage quotidien de millions de locuteurs, sans qu'aucun d'eux n'ait voulu, individuellement, la faire changer.",
    ],
    oeuvres: [
      { y: '1979', t: 'La Logique du social' },
      { y: '1977', t: 'Effets pervers et ordre social' },
    ],
    associes: ['effets-pervers', 'individualisme-methodologique', 'paradoxe-d-agregation'],
    opposes: ['fait-social'],
    critiques: [
      "La catégorie, très large, explique après coup presque tout résultat collectif inattendu, ce qui la rend difficile à mettre en défaut empiriquement.",
      "Elle traite l'agrégation comme un mécanisme neutre, sans toujours dire pourquoi certaines agrégations sont plus probables ou plus stables que d'autres.",
      "Durkheim objecterait que certains faits sociaux ont une consistance et une contrainte propres qu'une simple somme d'actions individuelles peine à restituer.",
    ],
    evolution: [
      { p: '1979', f: "La Logique du social distingue l'effet de composition, catégorie générale, de ses cas particuliers." },
      { p: '1981', f: "Boudon publie une étude spécifique sur les effets de composition et l'ordre social." },
    ],
  },
  'inegalites-des-chances': {
    detaille: [
      "Les inégalités des chances désignent, pour Boudon, l'écart persistant entre l'égalité formelle d'accès à l'école et la très inégale probabilité, selon l'origine sociale, d'y réussir et d'y poursuivre des études longues — un écart qui subsiste même quand l'école est ouverte à tous sans discrimination déclarée.",
      "Boudon l'explique par un modèle de décisions rationnelles prises sous contrainte, à chaque palier d'orientation : les familles évaluent le coût, le risque et le bénéfice attendu des études longues différemment selon leurs ressources, et ces évaluations, individuellement raisonnables, reconduisent en agrégat des destins scolaires très inégaux.",
      "L'explication n'invoque ni discrimination délibérée, ni transmission d'un héritage culturel inconscient : de simples différences de ressources et d'anticipations suffisent, une fois agrégées sur des millions de décisions, à produire une inégalité massive et stable.",
    ],
    origine: {
      oeuvre: "L'Inégalité des chances",
      annee: '1973',
      contexte:
        "Boudon construit un modèle formel des choix scolaires successifs pour expliquer pourquoi l'expansion massive de la scolarisation, en Europe comme aux États-Unis, n'a pas réduit les écarts de destin selon l'origine sociale.",
    },
    exemples: [
      "Une même moyenne scolaire qui débouche, selon les familles, sur une filière sélective ou sur une orientation plus prudente, en fonction du risque que chacune est prête à assumer.",
      "Deux élèves aux résultats comparables qui ne poursuivent pas les mêmes études, faute pour l'un d'un environnement familial prêt à absorber le coût d'un échec possible.",
    ],
    oeuvres: [
      { y: '1973', t: "L'Inégalité des chances" },
      { y: '1979', t: 'La Logique du social' },
    ],
    associes: ['meritocratie', 'ressources-sociales', 'individualisme-methodologique'],
    opposes: ['capital-culturel'],
    critiques: [
      "Bourdieu objecte que réduire l'inégalité scolaire à des calculs de coût et de risque laisse de côté ce qui, bien avant tout calcul, dispose déjà un enfant à se sentir ou non légitime dans telle filière.",
      "Le modèle suppose une information sur les probabilités de réussite dont les familles disposent rarement avec la précision qu'il leur prête.",
      "Les deux explications, Boudon l'a lui-même reconnu, portent souvent sur les mêmes statistiques sans jamais avoir pu être départagées de façon décisive par l'enquête empirique.",
    ],
    evolution: [
      { p: '1973', f: "L'Inégalité des chances formule le modèle des choix scolaires sous contrainte." },
      { p: '1979', f: "Bourdieu et Boudon publient, la même décennie, deux lectures rivales des mêmes statistiques scolaires françaises." },
      { p: '1990–2010', f: "Le débat reste l'un des plus structurants de la sociologie française de l'éducation." },
    ],
  },
  'paradoxe-d-agregation': {
    detaille: [
      "Un paradoxe d'agrégation survient quand l'agrégation de préférences ou de jugements individuels, chacun parfaitement cohérent pris isolément, produit un résultat collectif logiquement incohérent — et non pas seulement indésirable, comme dans l'effet pervers ordinaire.",
      "Le cas le plus connu, dû à Condorcet dès le XVIIIᵉ siècle, montre qu'un vote majoritaire peut faire émerger une préférence collective cyclique — le groupe préfère A à B, B à C, et pourtant C à A — alors qu'aucun électeur pris seul n'a de préférence contradictoire.",
      "Boudon reprend ce type de résultat pour montrer que l'incohérence apparente d'une décision collective ne signale pas nécessairement l'irrationalité de ceux qui la composent : la seule mécanique de l'agrégation suffit à produire de telles anomalies, indépendamment de toute défaillance individuelle.",
    ],
    origine: {
      oeuvre: 'La Logique du social',
      annee: '1979',
      contexte:
        "Boudon mobilise le paradoxe de Condorcet et les travaux d'Arrow sur les choix collectifs pour distinguer, à l'intérieur de sa théorie des effets de composition, un cas proprement logique des cas simplement empiriques.",
    },
    exemples: [
      "Un conseil qui, en votant point par point sur trois options prises séparément, adopte finalement une position qu'aucun de ses membres n'aurait choisie si le vote avait porté sur l'ensemble.",
      "Un classement collectif de projets, obtenu par comparaisons successives, qui contredit le classement obtenu si l'on inverse simplement l'ordre des comparaisons.",
    ],
    oeuvres: [
      { y: '1979', t: 'La Logique du social' },
      { y: '1977', t: 'Effets pervers et ordre social' },
    ],
    associes: ['effets-de-composition', 'effets-pervers', 'rationalite'],
    opposes: ['systeme-social'],
    critiques: [
      "Le paradoxe, redoutable en théorie, reste rare à observer tel quel dans des votes réels, où les préférences sont souvent moins tranchées que le modèle ne le suppose.",
      "Arrow lui-même a montré qu'aucune règle d'agrégation ne peut satisfaire à la fois tous les critères souhaitables de cohérence collective, ce qui dépasse le seul cas du vote majoritaire.",
      "Le concept dit peu de la manière dont les institutions réelles contournent ou masquent, en pratique, ces incohérences logiques plutôt que de les résoudre.",
    ],
    evolution: [
      { p: '1785', f: "Condorcet formule le paradoxe du vote majoritaire cyclique." },
      { p: '1951', f: "Arrow généralise le résultat en théorème d'impossibilité, pour toute règle d'agrégation des préférences." },
      { p: '1979', f: "Boudon l'intègre à sa théorie des effets de composition comme cas logique distinct des effets pervers ordinaires." },
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
  'cites': {
    detaille: [
      "Une cité, chez Boltanski et Thévenot, est un principe de justification cohérent : une conception du bien commun et une échelle de grandeur qui lui correspond, permettant de dire, dans un domaine donné, qui ou quoi mérite le plus d'estime et pourquoi.",
      "Chaque cité forme un système complet — un ordre de grandeur, une définition de la dignité commune à tous malgré l'inégalité de grandeur, un répertoire d'épreuves légitimes, des objets et des dispositifs qui la matérialisent — construit à partir d'un corpus de philosophie politique classique.",
      "Aucune cité n'est fausse ni illégitime en soi : leur pluralité est la condition même du désaccord ordinaire, et c'est en confrontant plusieurs cités qu'un différend prend sens plutôt qu'en désignant d'emblée un camp comme irrationnel ou de mauvaise foi.",
    ],
    origine: {
      oeuvre: 'De la justification. Les économies de la grandeur',
      annee: '1991',
      contexte:
        "Boltanski et Thévenot construisent chaque cité à partir d'une œuvre de philosophie politique — Augustin, Bossuet, Hobbes, Rousseau, Smith, Saint-Simon — pour montrer que les disputes ordinaires mobilisent, sans le savoir, des grammaires déjà pensées.",
    },
    exemples: [
      "Une même décision d'entreprise défendue tour à tour au nom de l'efficacité, de l'ancienneté et de l'intérêt général, sans qu'aucun des trois arguments ne soit absurde.",
      "Un jury de prix littéraire où s'opposent la singularité de l'œuvre, sa notoriété et ses ventes — trois cités, une seule décision à prendre.",
    ],
    oeuvres: [
      { y: '1991', t: 'De la justification (avec L. Thévenot)' },
    ],
    associes: ['regimes-de-justification', 'justification', 'grandeur'],
    opposes: ['systeme-social'],
    critiques: [
      "Le nombre de cités reste ouvert et contesté : rien ne garantit que les six ou sept repérées par Boltanski et Thévenot épuisent les grandeurs socialement reconnues.",
      "Le modèle, tiré d'un corpus européen classique, se transpose mal à des sociétés dont la philosophie politique n'a pas suivi le même chemin.",
      "Parsons objecterait qu'une société qui ne dispose d'aucun principe de grandeur partagé par tous ne pourrait tout simplement pas fonctionner comme système.",
    ],
    evolution: [
      { p: '1984', f: 'Boltanski et Thévenot commencent leurs travaux communs au Groupe de sociologie politique et morale.' },
      { p: '1991', f: 'De la justification systématise les six cités et leur grammaire commune.' },
      { p: '1999', f: "Le Nouvel Esprit du capitalisme ajoute une septième cité, celle par projets." },
    ],
  },
  'cite-de-l-inspiration': {
    detaille: [
      "Dans la cité de l'inspiration, la grandeur revient à ce qui échappe à la routine et au calcul : la créativité, la grâce, l'intuition, l'émotion authentique — tout ce qui surgit sans se laisser programmer ni justifier par avance.",
      "Elle emprunte à la tradition augustinienne l'idée d'un état de grâce qui touche certains êtres sans qu'on puisse ni le mériter ni le fabriquer : l'artiste inspiré, l'enfant, le rêveur y sont grands précisément parce qu'ils échappent aux hiérarchies ordinaires.",
      "Ce qui la rend difficile à faire vivre en public : sa grandeur se vérifie mal par une épreuve organisée, puisque l'institutionnaliser — un concours d'inspiration, une norme de créativité — la trahit presque aussitôt.",
    ],
    origine: {
      oeuvre: 'De la justification. Les économies de la grandeur',
      annee: '1991',
      contexte:
        "Boltanski et Thévenot construisent cette cité à partir des Confessions d'Augustin, où la grâce touche sans mérite ni calcul possible, pour nommer une grandeur que la tradition philosophique reconnaît sans jamais réussir à la codifier.",
    },
    exemples: [
      "Une idée surgie sans qu'on sache d'où, jugée géniale précisément parce qu'aucune méthode n'aurait pu la produire à la demande.",
      "Un enfant dont le dessin est loué pour sa spontanéité, avant même que quiconque n'ait cherché à en évaluer la technique.",
    ],
    oeuvres: [
      { y: '1991', t: 'De la justification (avec L. Thévenot)' },
    ],
    associes: ['cites', 'grandeur', 'critique-artiste'],
    opposes: ['cite-industrielle'],
    critiques: [
      "Une grandeur qui refuse par principe toute épreuve organisée reste, pour le sociologue, la plus difficile à observer et à documenter empiriquement.",
      "Elle se prête à toutes les récupérations : ériger l'inspiration en critère institutionnel — un prix, une prime à l'innovation — la trahit sans que rien, dans le modèle, ne permette de le prévenir.",
      "Elle peine à distinguer l'inspiration authentique de sa simple mise en scène, qui peut en emprunter tous les signes extérieurs.",
    ],
    evolution: [
      { p: '397–401', f: "Augustin décrit dans les Confessions un état de grâce qui échappe au mérite calculé." },
      { p: '1991', f: "De la justification en fait la première des cités, matrice de toutes les grandeurs incalculables." },
    ],
  },
  'cite-domestique': {
    detaille: [
      "Dans la cité domestique, la grandeur tient à la place que l'on occupe dans une chaîne de dépendances personnelles et hiérarchiques : l'aîné sur le cadet, le maître sur l'apprenti, l'ancien sur le nouveau — une grandeur de confiance et de tradition, jamais de compétence pure.",
      "Elle emprunte à Bossuet une vision du pouvoir légitime comme prolongement de l'autorité paternelle : le respect dû à un supérieur n'a pas à se justifier par ses résultats, il tient à sa position dans un ordre transmis.",
      "Sa grandeur se prouve par la parole donnée, la loyauté et la réputation personnelle construite dans la durée — à l'inverse d'une notoriété publique instantanée, qui relève d'une tout autre cité.",
    ],
    origine: {
      oeuvre: 'De la justification. Les économies de la grandeur',
      annee: '1991',
      contexte:
        "Boltanski et Thévenot construisent cette cité à partir de la Politique tirée des propres paroles de l'Écriture sainte de Bossuet, où l'autorité politique légitime se pense comme extension de l'autorité familiale.",
    },
    exemples: [
      "Un salarié promu moins pour ses résultats mesurables que pour la confiance accumulée, année après année, auprès de sa hiérarchie.",
      "Une réputation d'homme de parole qui vaut, dans certains milieux, davantage qu'un contrat écrit.",
    ],
    oeuvres: [
      { y: '1991', t: 'De la justification (avec L. Thévenot)' },
    ],
    associes: ['cites', 'grandeur'],
    opposes: ['cite-de-l-opinion'],
    critiques: [
      "La grandeur domestique légitime des hiérarchies que d'autres cités — civique en tête — jugent précisément illégitimes parce que non électives ni méritocratiques.",
      "Elle se prête à des usages qui masquent, sous le vocabulaire de la confiance et de la loyauté, des rapports de dépendance et d'exploitation bien réels.",
      "Bourdieu objecterait qu'une grandeur fondée sur la tradition et la loyauté personnelle reconduit très directement des inégalités héritées, sous une apparence de vertu plutôt que de calcul.",
    ],
    evolution: [
      { p: '1709', f: "Bossuet publie la Politique tirée de l'Écriture sainte, matrice de cette grandeur." },
      { p: '1991', f: "De la justification en fait la cité domestique, fondée sur la hiérarchie personnelle et la confiance." },
    ],
  },
  'cite-de-l-opinion': {
    detaille: [
      "Dans la cité de l'opinion, la grandeur se mesure à la reconnaissance publique : être connu, être vu, faire parler de soi. Ce qui compte n'est pas ce que l'on est en réalité, mais l'image que les autres s'en font et font circuler.",
      "Elle emprunte à Hobbes l'idée que l'opinion d'autrui, une fois assez répandue, devient elle-même une réalité sociale à laquelle il faut compter — la réputation, même immotivée, produit des effets tout à fait concrets.",
      "Cette grandeur est instable par nature : elle se construit et se défait selon les jugements changeants d'un public, ce qui la distingue nettement de la confiance domestique, patiemment bâtie et beaucoup plus stable dans le temps.",
    ],
    origine: {
      oeuvre: 'De la justification. Les économies de la grandeur',
      annee: '1991',
      contexte:
        "Boltanski et Thévenot construisent cette cité à partir du Léviathan de Hobbes, où l'opinion des autres, une fois partagée, devient une force sociale à part entière, indépendante de toute vérité qu'elle prétendrait refléter.",
    },
    exemples: [
      "Un restaurant dont la réputation, entretenue par le bouche-à-oreille plus que par la qualité constatée, attire une clientèle qui ne l'a jamais testé lui-même.",
      "Une personnalité dont l'influence tient moins à ses compétences réelles qu'au nombre de personnes qui la suivent et en parlent.",
    ],
    oeuvres: [
      { y: '1991', t: 'De la justification (avec L. Thévenot)' },
    ],
    associes: ['cites', 'grandeur'],
    opposes: ['cite-domestique'],
    critiques: [
      "Une grandeur fondée sur l'opinion se prête particulièrement bien à la manipulation : rien, dans son principe, ne distingue une réputation méritée d'une réputation fabriquée.",
      "Elle est difficile à stabiliser en épreuve légitime : les instruments censés la mesurer — audience, popularité — sont eux-mêmes contestés dans leur validité.",
      "Elle se confond parfois, dans les usages courants, avec la grandeur marchande, alors que Boltanski et Thévenot en font deux logiques bien distinctes.",
    ],
    evolution: [
      { p: '1651', f: "Hobbes décrit dans le Léviathan la force propre de l'opinion partagée." },
      { p: '1991', f: "De la justification en fait la cité de l'opinion, ou du renom." },
      { p: '2000–2020', f: "Les réseaux sociaux numériques donnent à cette grandeur des instruments de mesure inédits — vues, abonnés, mentions." },
    ],
  },
  'cite-civique': {
    detaille: [
      "Dans la cité civique, la grandeur revient à ceux qui incarnent ou représentent la volonté collective : l'élu, le délégué, le militant désintéressé — quiconque agit ou parle au nom de tous plutôt que pour son seul intérêt.",
      "Elle emprunte à Rousseau l'idée d'une volonté générale distincte de la simple somme des volontés particulières : est grand, dans cette cité, celui qui sait s'effacer devant l'intérêt collectif plutôt que le poursuivre pour lui-même.",
      "Ses épreuves légitimes sont formelles et procédurales — l'élection, le vote, le mandat — précisément parce qu'elles seules peuvent authentifier qu'une parole engage bien un collectif et non un individu isolé.",
    ],
    origine: {
      oeuvre: 'De la justification. Les économies de la grandeur',
      annee: '1991',
      contexte:
        "Boltanski et Thévenot construisent cette cité à partir du Contrat social de Rousseau, où la légitimité politique tient à l'expression correcte d'une volonté générale distincte des intérêts particuliers.",
    },
    exemples: [
      "Un représentant syndical dont la légitimité tient au mandat reçu, non à ses qualités personnelles ni à sa fortune.",
      "Une association qui justifie une prise de position en invoquant l'intérêt général plutôt que celui, souvent réel, de ses propres membres.",
    ],
    oeuvres: [
      { y: '1991', t: 'De la justification (avec L. Thévenot)' },
    ],
    associes: ['cites', 'grandeur'],
    opposes: ['cite-marchande'],
    critiques: [
      "La grandeur civique se prête à une hypocrisie récurrente : invoquer l'intérêt général pour couvrir des intérêts particuliers reste une stratégie disponible dans cette cité même.",
      "Ses épreuves procédurales — vote, mandat — peuvent valider une volonté collective purement formelle, sans qu'aucun débat réel n'ait eu lieu.",
      "Elle suppose un collectif suffisamment unifié pour qu'une volonté générale ait un sens, ce qui est loin d'être toujours acquis dans des sociétés très fragmentées.",
    ],
    evolution: [
      { p: '1762', f: "Rousseau formule la volonté générale dans le Contrat social." },
      { p: '1991', f: "De la justification en fait la cité civique, fondée sur la représentation légitime du collectif." },
    ],
  },
  'cite-marchande': {
    detaille: [
      "Dans la cité marchande, la grandeur revient à ce qui se vend le mieux : est grand ce que des acheteurs, dans une concurrence ouverte, désirent au point d'en payer le prix — la richesse y est le signe visible d'une grandeur reconnue par tous ceux qui échangent.",
      "Elle emprunte à Adam Smith l'idée que la poursuite de l'intérêt individuel, dans un marché concurrentiel, produit sans intention un ordre bénéfique à tous — sa grandeur n'a donc pas besoin de vertu désintéressée pour être légitime.",
      "L'épreuve marchande, la vente conclue, a l'avantage d'être immédiate et tranchée : contrairement à d'autres grandeurs, elle se règle en un instant, par un prix accepté de part et d'autre.",
    ],
    origine: {
      oeuvre: 'De la justification. Les économies de la grandeur',
      annee: '1991',
      contexte:
        "Boltanski et Thévenot construisent cette cité à partir de La Richesse des nations de Smith, où la concurrence marchande ordonne les intérêts individuels sans qu'aucune volonté collective n'ait à s'en mêler.",
    },
    exemples: [
      "Un objet ancien dont la valeur ne tient à rien d'autre qu'au prix qu'un acheteur est prêt à en donner ce jour-là.",
      "Une entreprise jugée grande par son chiffre d'affaires, indépendamment de la qualité de ses conditions de travail ou de son utilité sociale.",
    ],
    oeuvres: [
      { y: '1991', t: 'De la justification (avec L. Thévenot)' },
    ],
    associes: ['cites', 'grandeur', 'capital-economique'],
    opposes: ['cite-civique'],
    critiques: [
      "Réduire toute grandeur au prix laisse hors champ ce qui n'a, par nature, pas vocation à s'échanger — un lien affectif, une conviction.",
      "La grandeur marchande favorise structurellement ceux qui disposent déjà de moyens pour entrer dans l'échange, ce que la cité elle-même ne peut corriger de l'intérieur.",
      "Elle suppose une concurrence réellement ouverte, que des positions dominantes déjà installées faussent en pratique la plupart du temps.",
    ],
    evolution: [
      { p: '1776', f: "Smith décrit dans La Richesse des nations l'ordre non intentionnel produit par l'intérêt individuel." },
      { p: '1991', f: "De la justification en fait la cité marchande, fondée sur le prix et la concurrence." },
    ],
  },
  'cite-industrielle': {
    detaille: [
      "Dans la cité industrielle, la grandeur revient à l'efficacité mesurable : la performance, la productivité, la compétence technique reconnue par des indicateurs objectifs — est grand ce qui fonctionne, se planifie et se contrôle.",
      "Elle emprunte à Saint-Simon l'idée d'une société organisée par la science et la technique plutôt que par la tradition ou le pouvoir politique : les meilleurs administrateurs y sont les ingénieurs, non les nobles ni les élus.",
      "Ses épreuves légitimes sont les tests, les mesures et les certifications — tout ce qui permet de comparer des performances selon un standard reconnu, indépendamment de la personne évaluée.",
    ],
    origine: {
      oeuvre: 'De la justification. Les économies de la grandeur',
      annee: '1991',
      contexte:
        "Boltanski et Thévenot construisent cette cité à partir des écrits de Saint-Simon sur l'organisation industrielle, où l'efficacité technique devient le principe même de l'ordre social légitime.",
    },
    exemples: [
      "Un poste attribué au candidat dont les résultats à un test standardisé sont les plus élevés, indépendamment de tout autre critère.",
      "Une machine jugée supérieure à une autre sur la seule base de ses performances mesurées en conditions contrôlées.",
    ],
    oeuvres: [
      { y: '1991', t: 'De la justification (avec L. Thévenot)' },
    ],
    associes: ['cites', 'grandeur'],
    opposes: ['cite-de-l-inspiration'],
    critiques: [
      "Réduire la grandeur à des indicateurs mesurables laisse hors champ tout ce qu'un test standardisé ne sait pas capter, souvent l'essentiel du travail réel.",
      "La cité industrielle tend à imposer ses propres critères aux autres cités, au nom d'une objectivité qu'elle seule prétend détenir.",
      "Elle suppose des instruments de mesure eux-mêmes neutres, alors que le choix de ce qu'on mesure — et de ce qu'on laisse hors mesure — est déjà un choix orienté.",
    ],
    evolution: [
      { p: '1821–1825', f: "Saint-Simon développe l'idée d'une société organisée par la science et l'industrie." },
      { p: '1991', f: "De la justification en fait la cité industrielle, fondée sur l'efficacité mesurable." },
    ],
  },
  'cite-par-projets': {
    detaille: [
      "La cité par projets est la septième grandeur, ajoutée en 1999 : y est grand celui qui sait s'engager dans des projets successifs, tisser et mobiliser un réseau de connexions, s'adapter sans cesse à des missions nouvelles plutôt que d'occuper durablement une position stable.",
      "Elle ne provient pas d'une œuvre classique de philosophie politique comme les six premières, mais d'une analyse de la littérature managériale des années 1990, où l'autonomie, la mobilité et l'activité permanente deviennent les nouveaux signes de la réussite.",
      "Sa grandeur inverse les valeurs de la cité industrielle : la stabilité d'un poste, autrefois un signe de réussite, y devient presque un défaut, quand l'engagement dans des missions toujours nouvelles devient la preuve d'une valeur reconnue.",
    ],
    origine: {
      oeuvre: 'Le Nouvel Esprit du capitalisme',
      annee: '1999',
      contexte:
        "Boltanski et Chiapello identifient cette septième cité en comparant les manuels de management des années 1990 aux précédents, pour rendre compte d'un nouveau vocabulaire de la réussite qu'aucune des six cités de 1991 ne saisissait complètement.",
    },
    exemples: [
      "Un CV valorisé pour la variété des missions accomplies plutôt que pour la stabilité d'un même poste occupé longtemps.",
      "Un collaborateur jugé précieux pour l'étendue de son réseau professionnel, mobilisable d'un projet à l'autre.",
    ],
    oeuvres: [
      { y: '1999', t: 'Le Nouvel Esprit du capitalisme (avec È. Chiapello)' },
    ],
    associes: ['cites', 'monde-connecte', 'nouvel-esprit-du-capitalisme'],
    opposes: ['cite-industrielle'],
    critiques: [
      "La grandeur par projets favorise ceux qui disposent déjà des ressources et du réseau nécessaires pour multiplier les engagements — elle valorise une mobilité que tout le monde n'a pas les moyens de choisir.",
      "Boltanski et Chiapello notent eux-mêmes qu'elle laisse sans protection ceux qui ne trouvent jamais de nouveau projet, faute d'un statut stable auquel se raccrocher.",
      "N'étant pas issue d'un corpus classique de philosophie politique, elle reste, pour certains critiques, moins une cité pleinement formée qu'une description empirique habillée du vocabulaire des cités.",
    ],
    evolution: [
      { p: '1983–1991', f: "Boltanski et Thévenot recensent six cités issues de la philosophie politique classique." },
      { p: '1999', f: "Boltanski et Chiapello ajoutent la cité par projets, tirée de la littérature managériale contemporaine." },
      { p: '2000–2020', f: 'Le vocabulaire du projet, du réseau et de la mission se diffuse largement au-delà du seul management.' },
    ],
  },
  'monde-connecte': {
    detaille: [
      "Le monde connecté est l'arrangement social concret — équipes mouvantes, réseaux professionnels, missions temporaires — que Boltanski et Chiapello observent dans le capitalisme des années 1990, et dont la cité par projets tente de formaliser la grandeur.",
      "Contrairement à une cité pleinement constituée, le monde connecté ne dispose pas encore d'un corpus philosophique achevé qui en justifie explicitement les principes : c'est un ordre en formation, décrit avant d'être théorisé comme une véritable grammaire de la justification.",
      "Sa logique propre est celle du lien plutôt que de la position : ce qui compte n'est plus le rang qu'on occupe dans une hiérarchie stable, mais le nombre et la qualité des connexions qu'on sait activer au bon moment.",
    ],
    origine: {
      oeuvre: 'Le Nouvel Esprit du capitalisme',
      annee: '1999',
      contexte:
        "Boltanski et Chiapello empruntent des outils à la sociologie des réseaux pour décrire un monde du travail où l'entreprise bureaucratique cède la place à des configurations plus fluides d'équipes et de projets.",
    },
    exemples: [
      "Une carrière qui se construit moins par promotion interne que par l'accumulation de contacts mobilisables d'une mission à l'autre.",
      "Une organisation en équipes projet reconfigurées à chaque nouvelle mission, sans organigramme stable d'une année sur l'autre.",
    ],
    oeuvres: [
      { y: '1999', t: 'Le Nouvel Esprit du capitalisme (avec È. Chiapello)' },
    ],
    associes: ['cite-par-projets', 'nouvel-esprit-du-capitalisme', 'configuration'],
    opposes: ['systeme-social'],
    critiques: [
      "La distinction entre monde et cité pleinement formée reste elle-même floue : à partir de quand un ordre décrit devient-il une grammaire justificative à part entière ?",
      "Le monde connecté, présenté comme émergent dans les années 1990, s'est depuis largement stabilisé et institutionnalisé, ce qui interroge son statut encore provisoire chez les auteurs.",
      "Il décrit surtout les cadres et les professions déjà dotées d'un réseau mobilisable, et rend moins compte des emplois où la connexion n'apporte aucun avantage.",
    ],
    evolution: [
      { p: '1959', f: "Strauss et l'École de Chicago posent les bases de la notion de monde social, dont le monde connecté hérite." },
      { p: '1999', f: "Boltanski et Chiapello décrivent le monde connecté comme substrat empirique de la cité par projets." },
    ],
  },
  'critique-artiste': {
    detaille: [
      "La critique artiste dénonce le capitalisme au nom de l'authenticité, de l'autonomie et de la créativité : elle lui reproche d'imposer une hiérarchie étouffante, un travail répétitif et une existence standardisée qui empêchent chacun de se réaliser pleinement.",
      "Historiquement portée par les avant-gardes artistiques puis par les mouvements de 1968, cette critique vise moins l'inégalité des revenus que l'ennui, la désincarnation et la perte de sens qu'impose la vie de bureau ou d'usine.",
      "Boltanski et Chiapello montrent qu'elle a connu, plus que la critique sociale, un succès paradoxal : le capitalisme des années 1990 en a récupéré largement le vocabulaire — autonomie, créativité, épanouissement — sans pour autant réduire l'exploitation qu'elle dénonçait aussi.",
    ],
    origine: {
      oeuvre: 'Le Nouvel Esprit du capitalisme',
      annee: '1999',
      contexte:
        "Boltanski et Chiapello distinguent la critique artiste de la critique sociale pour expliquer pourquoi le capitalisme, contesté sur deux fronts très différents, n'a répondu véritablement qu'à l'un des deux.",
    },
    exemples: [
      "Un mouvement de 1968 qui réclame moins un meilleur salaire qu'une vie de travail moins routinière et plus créative.",
      "Un salarié qui quitte un poste stable mais jugé sans âme pour un projet plus incertain mais perçu comme plus authentique.",
    ],
    oeuvres: [
      { y: '1999', t: 'Le Nouvel Esprit du capitalisme (avec È. Chiapello)' },
    ],
    associes: ['critique-sociale', 'cite-de-l-inspiration', 'nouvel-esprit-du-capitalisme'],
    opposes: ['industrie-culturelle'],
    critiques: [
      "L'École de Francfort objecterait qu'une critique de l'inauthenticité, aussi sincère soit-elle, reste vulnérable à une récupération marchande qui en vide le contenu contestataire.",
      "Le partage entre critique artiste et critique sociale, commode pour l'analyse, correspond mal à des mouvements historiques qui ont souvent mêlé les deux registres.",
      "La thèse de la récupération risque de disqualifier d'avance toute critique qui obtient un succès, même partiel, dans le débat public.",
    ],
    evolution: [
      { p: '1830–1850', f: "Les avant-gardes artistiques du XIXᵉ siècle formulent les premiers refus de la vie bourgeoise routinière." },
      { p: '1968', f: "La critique artiste culmine dans les mouvements étudiants et culturels." },
      { p: '1999', f: "Boltanski et Chiapello en documentent la récupération managériale dans les années 1990." },
    ],
  },
  'critique-sociale': {
    detaille: [
      "La critique sociale dénonce le capitalisme au nom de l'égalité et de la solidarité : elle lui reproche l'exploitation, la misère et l'égoïsme qu'il organise, et réclame une redistribution plus juste des richesses produites collectivement.",
      "Historiquement portée par le mouvement ouvrier et les syndicats, elle vise directement les rapports de production et les inégalités de revenu, là où la critique artiste s'attaque plutôt à l'aliénation et à la perte de sens du travail.",
      "Boltanski et Chiapello constatent qu'elle a été bien moins entendue que la critique artiste par le capitalisme des années 1990 : l'autonomie et la créativité ont trouvé une réponse managériale, l'exploitation et la précarité, beaucoup moins.",
    ],
    origine: {
      oeuvre: 'Le Nouvel Esprit du capitalisme',
      annee: '1999',
      contexte:
        "Boltanski et Chiapello reprennent une distinction déjà présente chez les théoriciens du mouvement ouvrier pour expliquer l'asymétrie de traitement entre les deux grandes critiques historiques du capitalisme.",
    },
    exemples: [
      "Une grève qui réclame une meilleure répartition des bénéfices plutôt qu'une réorganisation du sens donné au travail.",
      "Un mouvement social qui dénonce la précarité croissante de l'emploi, plutôt que son caractère routinier ou peu créatif.",
    ],
    oeuvres: [
      { y: '1999', t: 'Le Nouvel Esprit du capitalisme (avec È. Chiapello)' },
    ],
    associes: ['critique-artiste', 'cite-civique', 'nouvel-esprit-du-capitalisme'],
    opposes: ['violence-symbolique'],
    critiques: [
      "Marx objecterait qu'une critique centrée sur la seule redistribution laisse intacte la structure de propriété qui produit l'exploitation en premier lieu.",
      "Le succès inégal des deux critiques, que Boltanski et Chiapello constatent, reste plus décrit qu'expliqué : pourquoi le capitalisme aurait-il structurellement plus à gagner à récupérer l'une que l'autre ?",
      "La distinction nette entre critique sociale et critique artiste occulte les mouvements contemporains qui articulent explicitement les deux, comme certaines luttes autour du sens et des conditions du travail.",
    ],
    evolution: [
      { p: '1830–1900', f: "Le mouvement ouvrier formule la critique sociale du capitalisme industriel." },
      { p: '1936', f: 'Le Front populaire en France en obtient une traduction institutionnelle partielle.' },
      { p: '1999', f: "Boltanski et Chiapello la distinguent explicitement de la critique artiste." },
      { p: 'après 2008', f: 'La crise financière relance la critique sociale, jugée par les auteurs moins entendue que la critique artiste depuis 1968.' },
    ],
  },
  'justification': {
    detaille: [
      "Se justifier, c'est répondre à une mise en cause non par la force ni par l'esquive, mais en invoquant un principe que l'on prétend valable au-delà du cas présent — un principe que l'autre partie pourrait, en droit, reconnaître à son tour.",
      "Boltanski et Thévenot en font une compétence ordinaire, exercée en permanence dans la vie sociale la plus banale : négocier un désaccord au travail, en famille ou entre voisins suppose presque toujours de justifier sa position plutôt que de simplement l'imposer.",
      "Une justification légitime doit remplir des conditions précises : elle ne peut invoquer un intérêt purement personnel, elle doit se référer à un principe reconnu par une cité, et elle doit rester ouverte à l'épreuve qui la mettra, le cas échéant, en défaut.",
    ],
    origine: {
      oeuvre: 'De la justification. Les économies de la grandeur',
      annee: '1991',
      contexte:
        "Boltanski et Thévenot font de la justification l'objet même de leur sociologie, contre une tradition qui réduisait souvent le discours des acteurs à un simple habillage de rapports de force sous-jacents.",
    },
    exemples: [
      "Un désaccord de voisinage sur le bruit, où chacun invoque un principe — le droit au repos, la liberté de recevoir — plutôt que de simplement hausser le ton.",
      "Une décision contestée en réunion, défendue par son auteur à l'aide d'arguments qu'il sait devoir pouvoir soutenir devant n'importe quel autre participant.",
    ],
    oeuvres: [
      { y: '1991', t: 'De la justification (avec L. Thévenot)' },
    ],
    associes: ['regimes-de-justification', 'epreuve', 'grandeur'],
    opposes: ['violence-symbolique'],
    critiques: [
      "Bourdieu objecterait que la justification donnée en public masque souvent des raisons bien moins avouables, que l'analyse du seul discours ne permet pas de faire apparaître.",
      "Le modèle suppose des acteurs suffisamment compétents et outillés pour argumenter dans les termes attendus, ce qui n'est pas donné également à tous.",
      "Il dit peu des situations où aucune justification n'est même tentée, la force ou l'évitement se substituant d'emblée à l'argumentation.",
    ],
    evolution: [
      { p: '1991', f: "De la justification pose la justification comme objet sociologique central, distinct de la seule domination." },
      { p: '2009', f: "De la critique revient sur les limites de ce modèle, notamment sa difficulté à décrire les situations où la domination empêche toute justification réelle." },
    ],
  },
  'epreuve': {
    detaille: [
      "Une épreuve est le moment où un désaccord sur la grandeur respective de deux personnes ou de deux choses se règle, provisoirement, en les confrontant selon un dispositif reconnu comme légitime par la cité invoquée.",
      "Boltanski et Thévenot distinguent l'épreuve légitime, qui met effectivement à l'épreuve la grandeur en jeu selon les règles d'une cité reconnue, de l'épreuve de force, qui tranche un différend sans qu'aucun principe partagé ne vienne la justifier.",
      "Aucune épreuve n'est jamais définitive : une décision issue d'une épreuve légitime peut toujours être rouverte, contestée au nom d'une autre cité, ou requalifiée en simple rapport de force a posteriori.",
    ],
    origine: {
      oeuvre: 'De la justification. Les économies de la grandeur',
      annee: '1991',
      contexte:
        "Boltanski et Thévenot font de l'épreuve le pivot empirique de leur théorie : c'est en observant comment les disputes se règlent concrètement qu'ils reconstruisent les principes de grandeur qui les sous-tendent.",
    },
    exemples: [
      "Un concours de recrutement, épreuve légitime dans la cité industrielle, mais aussitôt contesté au nom du piston si un lien personnel semble avoir pesé dans la décision.",
      "Un vote à main levée, accepté comme épreuve légitime tant que personne ne soupçonne de pression exercée sur les votants.",
    ],
    oeuvres: [
      { y: '1991', t: 'De la justification (avec L. Thévenot)' },
    ],
    associes: ['justification', 'grandeur', 'cites'],
    opposes: ['domination-legitime'],
    critiques: [
      "La distinction entre épreuve légitime et épreuve de force reste elle-même contestable au cas par cas : qui décide, et selon quel principe, qu'une épreuve donnée est bien légitime ?",
      "Le modèle dit peu des épreuves qui ne sont jamais ouvertement contestées alors qu'elles reconduisent, en silence, des inégalités structurelles.",
      "Bourdieu objecterait qu'une épreuve prétendument neutre — un concours, un examen — favorise structurellement ceux dont l'habitus est le plus proche des critères de l'épreuve elle-même.",
    ],
    evolution: [
      { p: '1991', f: "De la justification fait de l'épreuve le pivot méthodologique de l'enquête sur les disputes ordinaires." },
      { p: '2009', f: "De la critique élargit la notion aux épreuves qui échappent à toute cité reconnue, plus proches du rapport de force pur." },
    ],
  },
  'grandeur': {
    detaille: [
      "La grandeur est la mesure de valeur propre à une cité : ce qui permet, à l'intérieur d'un ordre de justification donné, de dire que telle personne ou telle chose vaut plus qu'une autre — et pourquoi ce classement n'a rien d'arbitraire aux yeux de ceux qui partagent cette cité.",
      "Chaque cité a sa propre grandeur, incommensurable avec celle des autres : la grandeur inspirée ne se compare pas terme à terme à la grandeur industrielle, ce qui explique pourquoi tant de disputes ordinaires tournent en rond sans qu'aucun camp ne cède.",
      "Ce qui distingue la grandeur d'un simple rapport de force : elle s'accompagne toujours d'un principe de dignité commune, selon lequel même les plus petits, dans une cité donnée, restent en droit de contester et de faire valoir leur propre grandeur.",
    ],
    origine: {
      oeuvre: 'De la justification. Les économies de la grandeur',
      annee: '1991',
      contexte:
        "Boltanski et Thévenot construisent la notion de grandeur comme pivot théorique de leur ouvrage, pour nommer ce que chaque cité met en jeu et ce sur quoi portent, en dernier ressort, la plupart des disputes ordinaires.",
    },
    exemples: [
      "Deux collègues également estimés, l'un pour son ancienneté, l'autre pour ses résultats chiffrés — deux grandeurs différentes, aucune ne l'emportant en soi sur l'autre.",
      "Un objet ancien jugé grand par un collectionneur pour sa rareté, et sans valeur par un autre qui n'y voit qu'un encombrant sans usage.",
    ],
    oeuvres: [
      { y: '1991', t: 'De la justification (avec L. Thévenot)' },
    ],
    associes: ['cites', 'justification', 'epreuve'],
    opposes: ['capital-symbolique'],
    critiques: [
      "Bourdieu objecterait qu'une pluralité de grandeurs, aussi réelle soit-elle en discours, reste hiérarchisée dans les faits par un capital symbolique qui pèse plus lourd que les autres selon les contextes.",
      "Le concept peine à expliquer pourquoi certaines grandeurs l'emportent presque systématiquement sur d'autres dans des situations concrètes, malgré leur incommensurabilité affirmée en théorie.",
      "Il suppose des acteurs qui maîtrisent suffisamment le langage de plusieurs cités pour en changer selon la situation, ce qui n'est pas donné également à tous.",
    ],
    evolution: [
      { p: '1991', f: "De la justification pose la grandeur comme pivot de la théorie des cités." },
      { p: '2006', f: "Boltanski en discute la portée dans La Condition fœtale, à propos d'une grandeur qui échappe à toute cité constituée : celle de la vie elle-même." },
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
  'individualisme': {
    detaille: [
      "Tocqueville forge le mot en français pour nommer un sentiment nouveau : un penchant calme et réfléchi qui pousse chacun à se replier sur le petit cercle de sa famille et de ses amis, et à abandonner volontiers la société plus large à elle-même.",
      "Il le distingue soigneusement de l'égoïsme, vice ancien et passionné qui préfère soi à tout : l'individualisme est plus froid, il ne hait pas les autres, il s'en désintéresse simplement, sans y penser comme à un choix moral.",
      "Ce sentiment n'a rien d'universel ni d'éternel : il naît précisément de l'égalisation des conditions, qui rompt les chaînes de dépendance aristocratiques reliant chaque homme à ses supérieurs, ses égaux et ses inférieurs, et le laisse seul, égal à tous, mais isolé de chacun.",
    ],
    origine: {
      oeuvre: 'De la démocratie en Amérique, tome II',
      annee: '1840',
      contexte:
        "Tocqueville consacre plusieurs chapitres du second tome aux effets de l'égalité sur les sentiments, et y introduit ce mot alors tout nouveau pour décrire un repli qu'aucune langue n'avait encore eu besoin de nommer précisément.",
    },
    exemples: [
      "Un voisinage où chacun s'occupe scrupuleusement de son jardin et de ses proches, sans jamais chercher à savoir ce qui se décide au conseil municipal.",
      "Une vie professionnelle et familiale bien remplie qui laisse, année après année, de moins en moins de place à l'engagement dans une cause commune.",
    ],
    oeuvres: [
      { y: '1840', t: 'De la démocratie en Amérique, tome II' },
    ],
    associes: ['egalisation-des-conditions', 'atomisation-sociale', 'passion-du-bien-etre'],
    opposes: ['esprit-civique'],
    critiques: [
      "Le mot, popularisé bien au-delà de son sens tocquevillien précis, en vient souvent à désigner n'importe quelle valorisation de l'individu, y compris des formes que Tocqueville aurait plutôt approuvées.",
      "Durkheim objecterait qu'un individualisme bien compris peut aussi devenir, dans les sociétés à solidarité organique, un ciment collectif plutôt qu'un simple facteur de dissolution.",
      "Le diagnostic reste daté sur une Amérique et une France du XIXᵉ siècle ; il transpose mal des sociétés dont l'histoire aristocratique n'est pas la même.",
    ],
    evolution: [
      { p: '1835', f: "Le mot circule déjà, employé de façon péjorative par les penseurs contre-révolutionnaires français." },
      { p: '1840', f: "Tocqueville lui donne sa définition sociologique précise, distincte de l'égoïsme." },
      { p: '1893', f: "Durkheim en propose une lecture bien plus positive dans De la division du travail social." },
    ],
  },
  'atomisation-sociale': {
    detaille: [
      "L'atomisation sociale est l'état vers lequel tend une société où les liens intermédiaires — corporations, ordres, communautés locales fortement structurées — ont disparu, laissant face à face des individus isolés et un pouvoir central qui n'a plus, entre lui et eux, aucun relais.",
      "Tocqueville y voit moins un accident qu'une tendance de fond des sociétés démocratiques : l'égalité, en rendant chacun semblable et indépendant, dissout aussi les solidarités de rang qui, dans l'aristocratie, reliaient malgré tout les hommes entre eux.",
      "Le paradoxe est cruel : ces individus atomisés, chacun trop faible seul pour résister au pouvoir central, se retrouvent paradoxalement plus exposés à lui qu'ils ne l'étaient sous l'aristocratie, où les corps intermédiaires faisaient écran.",
    ],
    origine: {
      oeuvre: "L'Ancien Régime et la Révolution",
      annee: '1856',
      contexte:
        "Tocqueville montre que la monarchie absolue avait déjà, avant même la Révolution, détruit méthodiquement les corps intermédiaires de l'Ancien Régime, préparant sans le savoir le terrain d'une société d'individus isolés face à l'État.",
    },
    exemples: [
      "Un quartier neuf où personne ne connaît son voisin, et où toute décision commune passe directement par une administration lointaine.",
      "Une profession dont l'ancien ordre professionnel a disparu, laissant chaque praticien seul face à une réglementation centrale sans relais local.",
    ],
    oeuvres: [
      { y: '1856', t: "L'Ancien Régime et la Révolution" },
      { y: '1840', t: 'De la démocratie en Amérique, tome II' },
    ],
    associes: ['individualisme', 'corps-intermediaires', 'centralisation'],
    opposes: ['associations'],
    critiques: [
      "Le tableau, très sombre, sous-estime les nouvelles formes de lien — syndicats, partis, mouvements sociaux — que les sociétés démocratiques ont su inventer après Tocqueville.",
      "Il idéalise rétrospectivement les corps intermédiaires de l'Ancien Régime, souvent eux-mêmes porteurs de privilèges peu enviables pour qui en était exclu.",
      "Durkheim reprendra le diagnostic sous le nom d'anomie, mais en proposera un remède différent : des groupes professionnels recréés plutôt qu'un simple retour à l'association volontaire.",
    ],
    evolution: [
      { p: '1789–1799', f: "La Révolution achève, plus qu'elle ne commence, la destruction des corps intermédiaires selon Tocqueville." },
      { p: '1840', f: "De la démocratie en Amérique décrit déjà le risque d'isolement propre aux sociétés égalitaires." },
      { p: '1856', f: "L'Ancien Régime en retrace la généalogie administrative sur trois siècles." },
      { p: '1893', f: "Durkheim reformule le même diagnostic sous le concept d'anomie." },
    ],
  },
  'centralisation': {
    detaille: [
      "La centralisation est la concentration progressive de toutes les décisions, même les plus locales, entre les mains d'une administration unique et lointaine — une tendance que Tocqueville observe non comme un produit de la Révolution française, mais comme l'héritage direct de la monarchie absolue qui l'a précédée.",
      "Elle se distingue de la simple centralisation gouvernementale, qui concerne les grandes affaires de l'État, par son caractère administratif : elle s'étend jusqu'aux détails les plus ordinaires de la vie locale, qu'un pouvoir central prétend régler mieux que les intéressés eux-mêmes.",
      "Tocqueville y voit une pente naturelle des sociétés démocratiques, non un simple choix politique : l'égalité, en effaçant les corps intermédiaires capables de gérer eux-mêmes leurs affaires, laisse le champ libre à un pouvoir central qui n'a plus, face à lui, que des individus isolés et trop faibles pour s'y opposer.",
    ],
    origine: {
      oeuvre: "L'Ancien Régime et la Révolution",
      annee: '1856',
      contexte:
        "Tocqueville dépouille les archives administratives de l'intendance pour montrer que l'État royal réglait déjà, avant 1789, les moindres détails de la vie provinciale — thèse qui contredit l'idée reçue d'une Révolution rompant avec l'absolutisme.",
    },
    exemples: [
      "Une décision d'urbanisme locale qui doit remonter, pour être validée, jusqu'à une administration centrale à des centaines de kilomètres.",
      "Un règlement uniforme appliqué sans distinction à des situations locales très différentes, faute d'autorité locale habilitée à l'adapter.",
    ],
    oeuvres: [
      { y: '1856', t: "L'Ancien Régime et la Révolution" },
    ],
    associes: ['atomisation-sociale', 'despotisme-democratique'],
    opposes: ['decentralisation'],
    critiques: [
      "La thèse de la continuité entre monarchie et Révolution a été discutée par des historiens qui insistent, à l'inverse, sur la rupture institutionnelle réelle de 1789.",
      "Le tableau néglige les bénéfices réels de la centralisation — égalité de traitement, cohérence des politiques publiques — qu'une gestion purement locale ne garantit pas toujours.",
      "Il repose largement sur le seul cas français, dont la centralisation administrative est particulièrement poussée par comparaison internationale.",
    ],
    evolution: [
      { p: 'XVIIᵉ siècle', f: "La monarchie absolue développe l'intendance, matrice de l'administration centralisée française." },
      { p: '1789–1799', f: "La Révolution reprend et systématise, selon Tocqueville, les instruments administratifs de la monarchie." },
      { p: '1856', f: "L'Ancien Régime documente cette continuité à partir des archives royales." },
    ],
  },
  'decentralisation': {
    detaille: [
      "La décentralisation est, pour Tocqueville, le principal antidote à la centralisation démocratique : confier aux communes et aux collectivités locales la gestion de leurs propres affaires, plutôt que de tout remonter vers un pouvoir central unique.",
      "Il en admire le modèle américain, la township de Nouvelle-Angleterre, où les habitants gèrent eux-mêmes routes, écoles et assistance publique, sans attendre d'instruction venue de plus haut — une pratique qu'il juge décisive, bien plus que la seule Constitution fédérale.",
      "Son efficacité tient à ce qu'elle rend visible, à l'échelle d'un village, le lien entre décision et conséquence : celui qui vote une dépense locale en ressent directement l'effet, ce qu'aucune décision prise à distance ne permet d'éprouver aussi clairement.",
    ],
    origine: {
      oeuvre: 'De la démocratie en Amérique, tome I',
      annee: '1835',
      contexte:
        "Tocqueville consacre les premiers chapitres du tome I à la commune américaine, qu'il présente comme le véritable berceau de la liberté politique, avant même d'aborder les institutions fédérales.",
    },
    exemples: [
      "Un conseil municipal qui décide seul de l'entretien de sa voirie, sans validation d'une autorité régionale ou nationale.",
      "Une école gérée par un comité de parents et d'habitants, plutôt que par une administration éloignée qui n'en connaît pas les besoins précis.",
    ],
    oeuvres: [
      { y: '1835', t: 'De la démocratie en Amérique, tome I' },
    ],
    associes: ['participation-citoyenne', 'associations', 'esprit-civique'],
    opposes: ['centralisation'],
    critiques: [
      "Le modèle de la commune américaine, très localisé, se transpose mal à des États dont l'histoire administrative est déjà fortement centralisée, comme la France.",
      "Une gestion trop décentralisée peut reproduire, à l'échelle locale, des inégalités entre communes riches et communes pauvres qu'une politique centrale corrigerait mieux.",
      "Tocqueville idéalise une Nouvelle-Angleterre homogène et puritaine, peu représentative de l'ensemble des États-Unis qu'il a traversés.",
    ],
    evolution: [
      { p: '1620–1640', f: "Les colonies puritaines de Nouvelle-Angleterre développent une tradition d'autogouvernement communal." },
      { p: '1835', f: "Tocqueville en fait le modèle décentralisé qui protège la liberté américaine de la centralisation." },
      { p: '1982', f: "Les lois françaises de décentralisation invoquent explicitement, un siècle et demi plus tard, cet héritage tocquevillien." },
    ],
  },
  'associations': {
    detaille: [
      "Les associations sont, pour Tocqueville, l'invention la plus originale des Américains : la capacité à se réunir librement, sans attendre l'initiative de l'État, pour poursuivre en commun n'importe quel but — commercial, moral, religieux ou politique.",
      "Il en fait un contrepoids essentiel à l'individualisme démocratique : l'association apprend à des individus isolés à coopérer, à négocier, à faire confiance à d'autres qu'eux-mêmes — un apprentissage que rien, dans la vie privée, ne procure aussi efficacement.",
      "Sa fonction dépasse le seul objet immédiat de chaque association : en s'associant pour une cause mineure, on acquiert « l'art de s'associer », transférable ensuite à des causes plus vastes, y compris proprement politiques.",
    ],
    origine: {
      oeuvre: 'De la démocratie en Amérique, tome II',
      annee: '1840',
      contexte:
        "Tocqueville est frappé par la profusion d'associations américaines de toute nature, qu'il met en rapport direct avec la vigueur de la vie politique locale, contrairement à une France où l'État a longtemps découragé ce type de regroupement.",
    },
    exemples: [
      "Un club de quartier fondé pour organiser une fête, dont les membres se retrouvent ensuite naturellement pour porter une revendication municipale.",
      "Une association de parents d'élèves qui, en apprenant à négocier avec une administration scolaire, se découvre capable d'interpeller d'autres pouvoirs publics.",
    ],
    oeuvres: [
      { y: '1840', t: 'De la démocratie en Amérique, tome II' },
    ],
    associes: ['corps-intermediaires', 'esprit-civique', 'decentralisation'],
    opposes: ['atomisation-sociale'],
    critiques: [
      "Toutes les associations ne servent pas la démocratie : certaines organisent au contraire l'exclusion ou la défense d'intérêts étroits et fermés.",
      "Le tableau américain de 1835 décrit une société encore largement homogène ; il dit peu de la capacité des associations à intégrer une société profondément divisée.",
      "Putnam, plus d'un siècle plus tard, documentera un net déclin de la vie associative américaine, contredisant l'optimisme initial de Tocqueville sur sa pérennité.",
    ],
    evolution: [
      { p: '1835–1840', f: "Tocqueville documente la profusion des associations américaines et leur rôle politique." },
      { p: '1893', f: "Durkheim, dans une veine proche, voit dans les groupements professionnels un remède possible à l'anomie." },
      { p: '2000', f: "Putnam, dans Bowling Alone, documente un déclin du capital social associatif américain que Tocqueville n'avait pas anticipé." },
    ],
  },
  'despotisme-democratique': {
    detaille: [
      "Le despotisme démocratique est une forme de pouvoir absolu propre aux sociétés d'égaux : non plus la tyrannie brutale d'un seul, mais une tutelle douce, prévoyante et détaillée, qui prend en charge le bonheur des citoyens au prix de leur autonomie.",
      "Tocqueville le décrit comme un pouvoir « immense et tutélaire » qui ne brise pas les volontés, il les amollit : il ne persécute pas, il gêne, comprime, énerve, éteint, hébète, jusqu'à réduire chaque nation à « un troupeau d'animaux timides et industrieux dont le gouvernement est le berger ».",
      "Ce despotisme trouve un terrain d'autant plus favorable que l'individualisme a déjà isolé les citoyens les uns des autres : chacun, trop occupé de son propre bien-être, en vient à accepter, voire à réclamer, une tutelle qui le dispense de s'occuper des affaires communes.",
    ],
    origine: {
      oeuvre: 'De la démocratie en Amérique, tome II',
      annee: '1840',
      contexte:
        "Tocqueville conclut le second tome par ce tableau saisissant, présenté comme un péril propre aux démocraties, distinct des despotismes anciens que l'histoire avait jusque-là connus.",
    },
    exemples: [
      "Une administration qui réglemente jusqu'aux détails de la vie quotidienne « pour le bien » des administrés, sans plus attendre d'eux qu'une obéissance tranquille.",
      "Une population qui en vient à préférer la sécurité offerte par une tutelle omniprésente à l'incertitude d'une liberté qu'il faudrait exercer soi-même.",
    ],
    oeuvres: [
      { y: '1840', t: 'De la démocratie en Amérique, tome II, quatrième partie' },
    ],
    associes: ['tyrannie-de-la-majorite', 'centralisation', 'passion-du-bien-etre'],
    opposes: ['corps-intermediaires'],
    critiques: [
      "Le tableau reste une anticipation spéculative en 1840 : Tocqueville ne peut l'illustrer par aucun régime réellement observé de son temps.",
      "Certains lecteurs du XXᵉ siècle l'ont rapproché des totalitarismes, alors que Tocqueville décrit précisément un pouvoir doux et non violent, d'une tout autre nature.",
      "Le concept explique mal les résistances et les mobilisations démocratiques bien réelles qui, depuis 1840, ont contredit ce scénario dans de nombreux pays.",
    ],
    evolution: [
      { p: '1840', f: "Tocqueville décrit le despotisme démocratique comme péril propre aux sociétés égalitaires." },
      { p: '1859', f: "Mill s'en inspire pour mettre en garde contre l'excès de réglementation étatique dans De la liberté." },
      { p: '1970–2000', f: "Le concept nourrit les critiques de l'État-providence bureaucratique et de sa dimension infantilisante." },
    ],
  },
  'passion-de-l-egalite': {
    detaille: [
      "La passion de l'égalité est, selon Tocqueville, le sentiment le plus puissant et le plus universel des sociétés démocratiques : plus fort encore que l'amour de la liberté, au point qu'un peuple peut renoncer à celle-ci sans jamais renoncer à celle-là.",
      "Sa formule la plus célèbre le résume : les hommes préfèrent l'égalité dans la servitude à l'inégalité dans la liberté — ils tolèrent un maître commun plus aisément qu'un privilège que d'autres détiendraient et pas eux.",
      "Cette passion ne s'apaise jamais tout à fait : plus l'égalité progresse, plus les inégalités qui subsistent, même minimes, deviennent insupportables — un mécanisme qui alimente une insatisfaction permanente au cœur même du progrès égalitaire.",
    ],
    origine: {
      oeuvre: 'De la démocratie en Amérique, tome II',
      annee: '1840',
      contexte:
        "Tocqueville ouvre le second tome par une analyse des passions démocratiques, pour expliquer pourquoi l'amour de l'égalité l'emporte si souvent, dans les choix politiques réels, sur l'amour de la liberté.",
    },
    exemples: [
      "Un régime autoritaire mais également répressif pour tous, jugé plus supportable qu'une démocratie où subsisteraient des privilèges visibles pour quelques-uns.",
      "Une réforme fiscale acceptée sans résistance dès lors qu'elle s'applique identiquement à tous, même si elle réduit la liberté de chacun d'en disposer.",
    ],
    oeuvres: [
      { y: '1840', t: 'De la démocratie en Amérique, tome II' },
    ],
    associes: ['egalisation-des-conditions', 'passion-du-bien-etre'],
    opposes: ['classe-sociale'],
    critiques: [
      "Marx objecterait qu'une telle « passion » n'est pas un sentiment psychologique autonome mais l'expression, dans la conscience, d'un rapport de classe bien réel qu'elle ne fait que traduire.",
      "La formule, frappante, reste difficile à vérifier empiriquement : comment mesurer la préférence collective entre deux passions à ce point abstraites ?",
      "Elle explique mal les révolutions et mouvements historiques où la revendication de liberté a précisément prévalu sur celle d'égalité, au moins temporairement.",
    ],
    evolution: [
      { p: '1840', f: "Tocqueville formule la passion de l'égalité comme sentiment dominant des sociétés démocratiques." },
      { p: '1966–1980', f: "Aron et Boudon en font une clé de lecture pour comprendre les révolutions et mouvements égalitaires du XXᵉ siècle." },
    ],
  },
  'passion-du-bien-etre': {
    detaille: [
      "La passion du bien-être est le goût, propre aux sociétés démocratiques, pour le confort matériel et la sécurité tranquille — un goût que l'égalité rend particulièrement puissant, en mettant à portée de presque tous des jouissances autrefois réservées à quelques-uns.",
      "Tocqueville n'y voit pas un vice en soi, mais un risque politique majeur : cette passion, si elle devient exclusive, détourne les citoyens des affaires publiques, jugées trop absorbantes ou trop incertaines au regard du confort tranquille qu'elles menaceraient.",
      "Elle nourrit ainsi, sans intention hostile de personne, le terrain sur lequel un despotisme démocratique peut s'installer : un peuple occupé de son seul bien-être privé finit par accepter, voire par réclamer, qu'une puissance tutélaire le débarrasse du souci des affaires communes.",
    ],
    origine: {
      oeuvre: 'De la démocratie en Amérique, tome II',
      annee: '1840',
      contexte:
        "Tocqueville observe chez les Américains un attachement intense au bien-être matériel, qu'il met directement en relation avec le risque, à ses yeux le plus sérieux, d'un désintérêt progressif pour la vie publique.",
    },
    exemples: [
      "Un citoyen qui renonce à assister à une réunion publique, jugée moins urgente qu'un projet domestique en cours.",
      "Une génération qui préfère investir son énergie dans le confort du foyer plutôt que dans un engagement associatif ou politique incertain.",
    ],
    oeuvres: [
      { y: '1840', t: 'De la démocratie en Amérique, tome II' },
    ],
    associes: ['individualisme', 'despotisme-democratique', 'passion-de-l-egalite'],
    opposes: ['esprit-civique'],
    critiques: [
      "Le diagnostic prête aux classes populaires un attachement au confort matériel qui reflète surtout une observation faite depuis une position sociale déjà aisée.",
      "Il néglige les cas, nombreux dans l'histoire, où la recherche du bien-être matériel a elle-même motivé un engagement politique actif, plutôt que son abandon.",
      "L'opposition entre bien-être privé et vie publique paraît aujourd'hui trop tranchée, alors que beaucoup de mobilisations contemporaines portent justement sur les conditions matérielles de vie.",
    ],
    evolution: [
      { p: '1840', f: "Tocqueville identifie la passion du bien-être comme moteur central des sociétés démocratiques modernes." },
      { p: '1950–1970', f: "La société de consommation d'après-guerre est souvent relue à la lumière de ce diagnostic." },
    ],
  },
  'moeurs': {
    detaille: [
      "Les mœurs désignent, chez Tocqueville, l'ensemble des habitudes, des croyances et des dispositions morales d'un peuple — ce que les lois écrites ne disent pas mais que la pratique quotidienne transmet, souvent sans que personne ne l'énonce comme une règle.",
      "Il en fait le facteur le plus décisif de la réussite démocratique américaine, avant même les institutions et les circonstances géographiques : une constitution recopiée à l'identique échouerait ailleurs si les mœurs qui la font vivre n'existaient pas.",
      "Les mœurs se transmettent lentement, par l'éducation, la religion et surtout la pratique répétée des affaires locales : c'est en participant, année après année, à la vie de sa commune qu'un citoyen finit par intérioriser des habitudes que nulle loi ne pourrait lui imposer de l'extérieur.",
    ],
    origine: {
      oeuvre: 'De la démocratie en Amérique, tome I',
      annee: '1835',
      contexte:
        "Tocqueville conclut le premier tome en classant, par ordre d'importance décroissante, les causes du maintien de la démocratie américaine : les circonstances physiques d'abord, les lois ensuite, et les mœurs enfin — mais c'est aux mœurs qu'il accorde le poids le plus déterminant.",
    },
    exemples: [
      "Une même loi électorale qui produit des résultats très différents selon que la population est habituée, ou non, à en débattre et à en contester l'application.",
      "Une tradition locale de bénévolat qui rend possible une gestion communale que des textes juridiques, seuls, ne suffiraient jamais à organiser.",
    ],
    oeuvres: [
      { y: '1835', t: 'De la démocratie en Amérique, tome I' },
    ],
    associes: ['esprit-civique', 'associations'],
    opposes: ['fait-social'],
    critiques: [
      "Durkheim objecterait qu'une explication par les mœurs, trop dépendante des dispositions individuelles intériorisées, manque la contrainte proprement collective et extérieure du fait social.",
      "Le concept, très englobant, risque d'expliquer après coup n'importe quel succès ou échec institutionnel par des mœurs jugées, rétrospectivement, favorables ou défavorables.",
      "Il repose sur une observation impressionniste des mœurs américaines, difficile à comparer systématiquement à celles d'autres pays.",
    ],
    evolution: [
      { p: '1835', f: "Tocqueville classe les mœurs au premier rang des causes du succès démocratique américain." },
      { p: '1893', f: "Durkheim déplace l'explication vers les faits sociaux, extérieurs et contraignants, plutôt que vers les mœurs intériorisées." },
    ],
  },
  'esprit-civique': {
    detaille: [
      "L'esprit civique est la disposition à s'intéresser activement aux affaires communes, à s'y sentir concerné et responsable, au-delà du seul cercle des intérêts privés — l'exact contrepoids de l'individualisme démocratique.",
      "Tocqueville insiste sur son origine pratique plutôt que morale : on ne l'enseigne pas d'abord par un discours sur le devoir civique, on l'acquiert en participant concrètement, dès l'échelle la plus locale, à une décision qui engage un collectif.",
      "C'est cet apprentissage progressif, de la commune vers des enjeux plus vastes, que Tocqueville juge irremplaçable : un citoyen qui n'a jamais eu à décider de rien à petite échelle n'apprend pas soudainement, à l'échelle nationale, à se sentir responsable du bien commun.",
    ],
    origine: {
      oeuvre: 'De la démocratie en Amérique, tome I',
      annee: '1835',
      contexte:
        "Tocqueville observe, dans la commune américaine, un attachement des habitants à leurs affaires locales qu'il attribue directement à leur participation réelle à la décision, et non à un sentiment abstrait de patriotisme.",
    },
    exemples: [
      "Un habitant qui suit de près une réunion de quartier sur un aménagement local, parce qu'il a lui-même contribué à la décision qui en a précédé le principe.",
      "Un jeune qui découvre, en participant à une association étudiante, un intérêt pour des enjeux collectifs qu'aucun cours théorique ne lui avait suscité.",
    ],
    oeuvres: [
      { y: '1835', t: 'De la démocratie en Amérique, tome I' },
    ],
    associes: ['participation-citoyenne', 'decentralisation', 'associations'],
    opposes: ['individualisme'],
    critiques: [
      "Le lien entre participation locale et engagement national reste plus affirmé que démontré : rien ne garantit qu'une compétence acquise à petite échelle se transfère automatiquement à une plus grande.",
      "Le concept néglige les obstacles matériels — temps, ressources, information — qui empêchent en pratique une part importante de la population de s'engager, quelle que soit sa bonne volonté civique.",
      "Il suppose des affaires locales suffisamment substantielles pour susciter un intérêt réel, ce qui n'est pas garanti dans toutes les configurations administratives.",
    ],
    evolution: [
      { p: '1835', f: "Tocqueville lie l'esprit civique à la pratique concrète des affaires locales, plus qu'à un sentiment abstrait." },
      { p: '1963', f: "Almond et Verba en feront, sous le nom de culture civique, un objet central de la science politique comparée." },
    ],
  },
  'participation-citoyenne': {
    detaille: [
      "La participation citoyenne est la pratique concrète par laquelle les habitants prennent eux-mêmes part aux affaires publiques locales — réunions communales, jurys, charges administratives bénévoles — plutôt que de simplement obéir à des décisions prises ailleurs.",
      "Tocqueville en fait la véritable école de la démocratie : c'est en participant, souvent à des affaires modestes, que les citoyens américains acquièrent une compétence politique qu'aucun cours théorique ni aucune constitution, à eux seuls, ne pourraient transmettre.",
      "Cette participation a un effet formateur qui dépasse son objet immédiat : elle apprend à négocier, à accepter une décision collective même défavorable, et à considérer les affaires communes comme siennes plutôt que comme celles d'une administration extérieure.",
    ],
    origine: {
      oeuvre: 'De la démocratie en Amérique, tome I',
      annee: '1835',
      contexte:
        "Tocqueville est frappé par l'ampleur des charges publiques exercées bénévolement par de simples citoyens américains — du jury au conseil municipal — et par l'apprentissage politique qu'elles procurent.",
    },
    exemples: [
      "Un habitant qui accepte une charge municipale non rémunérée, et qui en retire une compréhension concrète des contraintes budgétaires locales.",
      "Un juré qui, après avoir siégé une seule fois, s'intéresse durablement au fonctionnement de la justice qu'il ignorait jusque-là.",
    ],
    oeuvres: [
      { y: '1835', t: 'De la démocratie en Amérique, tome I' },
    ],
    associes: ['esprit-civique', 'decentralisation', 'majorite'],
    opposes: ['despotisme-democratique'],
    critiques: [
      "La participation bénévole aux affaires locales suppose un temps libre et des ressources que tous les citoyens ne possèdent pas également.",
      "Elle peut aussi reproduire, à l'échelle locale, l'exclusion de certains groupes — Tocqueville lui-même observe une Amérique dont la participation citoyenne exclut alors femmes, esclaves et populations autochtones.",
      "Le lien entre participation et compétence politique reste difficile à isoler d'autres facteurs — éducation, niveau de vie — qui favorisent également l'une et l'autre.",
    ],
    evolution: [
      { p: '1835', f: "Tocqueville documente la participation citoyenne américaine comme école pratique de la démocratie." },
      { p: '1963', f: "Almond et Verba mesurent empiriquement, dans The Civic Culture, ce que Tocqueville avait seulement observé." },
      { p: '1990–2010', f: "Les dispositifs de démocratie participative locale se réclament explicitement de cet héritage." },
    ],
  },
  'majorite': {
    detaille: [
      "La majorité est, dans une démocratie, la source ordinaire et légitime de la décision collective : ce que le plus grand nombre choisit l'emporte, faute d'un principe supérieur auquel en appeler pour trancher autrement.",
      "Tocqueville ne conteste jamais ce principe en tant que tel — il le tient pour la règle nécessaire de tout régime démocratique — mais il en souligne la puissance particulière : une fois formée, la majorité démocratique ne rencontre plus, comme un roi autrefois, de corps intermédiaires capables de lui résister.",
      "C'est cette absence de contre-pouvoir structurel, plus que le principe majoritaire lui-même, qui ouvre la voie à ses dérives possibles : la majorité, en démocratie, cumule à la fois la légitimité du nombre et une puissance qu'aucune force organisée n'égale plus face à elle.",
    ],
    origine: {
      oeuvre: 'De la démocratie en Amérique, tome I',
      annee: '1835',
      contexte:
        "Tocqueville analyse le principe majoritaire américain avant d'en tirer, dans le même volume, sa théorie de la tyrannie de la majorité — la majorité elle-même restant, à ses yeux, un principe nécessaire et légitime.",
    },
    exemples: [
      "Un vote local qui tranche un projet contesté, accepté par tous comme légitime malgré le désaccord de la minorité.",
      "Une décision d'assemblée qui engage l'ensemble d'un groupe, y compris ceux qui ont voté contre, au nom du principe majoritaire lui-même reconnu par tous.",
    ],
    oeuvres: [
      { y: '1835', t: 'De la démocratie en Amérique, tome I' },
    ],
    associes: ['participation-citoyenne', 'tyrannie-de-la-majorite'],
    opposes: ['corps-intermediaires'],
    critiques: [
      "Le principe majoritaire pose depuis Condorcet des difficultés logiques propres, que la seule légitimité procédurale ne suffit pas toujours à résoudre.",
      "Tocqueville distingue peu, dans son exposé initial, entre une majorité électorale précise et une majorité d'opinion plus diffuse, ce qui brouille parfois son propre raisonnement ultérieur.",
      "Le concept dit peu des mécanismes constitutionnels — Cour suprême, droits fondamentaux — que les démocraties ont depuis développés pour limiter le pouvoir de la majorité sans recréer de corps intermédiaires traditionnels.",
    ],
    evolution: [
      { p: '1787', f: 'La Constitution américaine organise déjà des freins au pouvoir majoritaire — bicamérisme, contrôle de constitutionnalité en germe.' },
      { p: '1835', f: "Tocqueville pose le principe majoritaire avant d'en tirer sa théorie de la tyrannie de la majorité." },
    ],
  },
  'corps-intermediaires': {
    detaille: [
      "Les corps intermédiaires sont les institutions qui, sous l'Ancien Régime, se plaçaient entre l'individu et le pouvoir royal : noblesse, corporations de métier, parlements provinciaux, états provinciaux — chacun disposant de privilèges et de prérogatives propres qu'aucun pouvoir central ne pouvait effacer d'un trait.",
      "Tocqueville leur reconnaît un mérite paradoxal : nés d'inégalités qu'il juge par ailleurs injustes, ils formaient malgré tout un rempart efficace contre l'arbitraire du pouvoir central, chaque corps défendant ses propres privilèges contre les empiétements de la monarchie.",
      "Leur disparition progressive, entamée par la monarchie absolue et achevée par la Révolution, a laissé l'individu directement exposé à l'État central, sans aucun relais collectif capable de faire écran entre les deux — le prix payé pour l'égalité obtenue.",
    ],
    origine: {
      oeuvre: "L'Ancien Régime et la Révolution",
      annee: '1856',
      contexte:
        "Tocqueville dépouille les archives administratives royales pour montrer que la centralisation, loin d'être une invention révolutionnaire, avait déjà rongé méthodiquement les corps intermédiaires de la France d'Ancien Régime.",
    },
    exemples: [
      "Une corporation de métier disparue, dont la disparition a laissé chaque artisan seul face à une réglementation nationale uniforme.",
      "Un parlement provincial d'Ancien Régime, capable de résister ponctuellement à un édit royal, qu'aucune institution locale équivalente n'a remplacé après sa suppression.",
    ],
    oeuvres: [
      { y: '1856', t: "L'Ancien Régime et la Révolution" },
    ],
    associes: ['associations', 'atomisation-sociale'],
    opposes: ['centralisation'],
    critiques: [
      "Défendre les corps intermédiaires de l'Ancien Régime revient à défendre, du même geste, des institutions fondées sur des privilèges de naissance que Tocqueville lui-même juge par ailleurs profondément injustes.",
      "Le tableau surestime peut-être l'efficacité réelle de ces corps face à une monarchie qui, dans les faits, avait déjà largement réussi à les contourner bien avant 1789.",
      "Le concept dit peu de ce que pourraient être des corps intermédiaires légitimes dans une société d'égaux, où le privilège de naissance n'a plus cours.",
    ],
    evolution: [
      { p: 'Moyen Âge–XVIIIᵉ s.', f: "Les corps intermédiaires — noblesse, corporations, parlements — structurent la société d'ordres de l'Ancien Régime." },
      { p: '1661–1789', f: "La monarchie absolue affaiblit méthodiquement leurs prérogatives, selon la thèse de Tocqueville." },
      { p: '1789–1791', f: "La Révolution supprime formellement corporations et privilèges provinciaux, achevant le mouvement." },
      { p: '1856', f: "L'Ancien Régime en retrace la généalogie complète, contre l'idée d'une rupture révolutionnaire." },
    ],
  },

  /* — Robert Castel — */
  'societe-salariale': {
    detaille: [
      "Castel refuse de voir dans le salariat un simple contrat d'échange entre un employeur et un employé. Au cours du XXᵉ siècle, l'emploi stable s'est chargé de droits sociaux — retraite, assurance maladie, indemnités — au point de devenir une véritable position sociale, protectrice bien au-delà du seul salaire versé chaque mois.",
      "Il forge, pour nommer cette accumulation de droits attachés au poste occupé, l'expression de propriété sociale : à défaut de posséder un patrimoine, un salarié protégé possède une créance sur la collectivité, garantie par son statut d'actif. Cette propriété d'un genre nouveau a fait, selon lui, ce que la propriété privée avait longtemps été seule à offrir : une sécurité face aux aléas de l'existence.",
      "La thèse éclaire, en creux, ce qui se joue quand ce socle se fissure : perdre un emploi stable, ce n'est pas seulement perdre un revenu, c'est perdre l'accès à toute une architecture de droits qui s'y trouvait attachée.",
    ],
    origine: {
      oeuvre: 'Les Métamorphoses de la question sociale',
      annee: '1995',
      contexte:
        "Castel écrit en pleine montée du chômage de masse et de la précarité en France, et cherche à comprendre pourquoi cette dégradation de l'emploi ébranle bien plus qu'un statut professionnel : il retrace pour cela l'histoire longue de l'assistance et du salariat, depuis l'Ancien Régime.",
    },
    exemples: [
      "Un intérimaire enchaînant les missions sans jamais accéder aux mêmes droits qu'un titulaire d'un poste stable, alors qu'il occupe parfois exactement le même poste.",
    ],
    oeuvres: [
      { y: '1995', t: 'Les Métamorphoses de la question sociale : une chronique du salariat' },
      { y: '2003', t: "L'Insécurité sociale : qu'est-ce qu'être protégé ?" },
      { y: '2009', t: 'La Montée des incertitudes' },
    ],
    associes: ['anomie', 'capital-social'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "Le concept a été élaboré à partir du cas français, où la protection sociale s'est historiquement adossée à l'emploi plus qu'ailleurs, ce qui en complique l'exportation telle quelle.",
      "Certains lui reprochent d'idéaliser rétrospectivement un âge d'or du salariat stable, qui a toujours coexisté avec des marges importantes de travail précaire ou informel.",
    ],
    evolution: [
      { p: 'Avant le XXᵉ siècle', f: "Le travail salarié reste largement instable et sans protection ; l'assistance aux pauvres relève surtout de la charité ou de la famille." },
      { p: '1930–1975', f: "La généralisation de la sécurité sociale et du droit du travail transforme l'emploi stable en statut protecteur à part entière." },
      { p: '1995', f: "Castel publie Les Métamorphoses de la question sociale et nomme rétrospectivement cette période « société salariale »." },
      { p: 'Depuis 1975', f: "La montée du chômage de masse et des contrats courts fragilise ce socle, sans qu'aucun modèle de remplacement ne se soit encore stabilisé." },
    ],
  },
  'zones-de-l-integration-sociale': {
    detaille: [
      "Plutôt que de traiter l'intégration comme une frontière unique — dedans ou dehors —, Castel la découpe en zones, définies par le croisement de deux axes : le rapport au travail (stable, précaire, absent) et la densité des liens sociaux et familiaux (solides, fragilisés, rompus).",
      "La zone d'intégration réunit un travail stable et des liens sociaux solides. La zone de désaffiliation cumule l'absence des deux. Entre les deux, Castel isole une zone de vulnérabilité, où l'un des deux piliers seulement se fragilise — la zone la plus peuplée, et la plus longtemps restée dans l'angle mort des politiques sociales, construites pour traiter soit l'emploi, soit l'exclusion, rarement l'entre-deux.",
      "La désaffiliation elle-même n'est donc jamais un point de départ : c'est un processus, en principe réversible, qui décrit comment on s'en éloigne ou s'en approche au fil d'une trajectoire, plutôt qu'un état auquel certains seraient d'emblée assignés.",
    ],
    origine: {
      oeuvre: 'Les Métamorphoses de la question sociale',
      annee: '1995',
      contexte:
        "Castel construit cette cartographie en réaction aux usages flous du mot exclusion dans le débat public français des années 1980-1990, qui traitait comme un bloc homogène des situations très différentes.",
    },
    exemples: [
      "Un cadre en poste stable mais isolé, sans famille ni amis proches, occupe lui aussi une zone de vulnérabilité — l'un des deux piliers seulement s'est fragilisé.",
    ],
    oeuvres: [
      { y: '1995', t: 'Les Métamorphoses de la question sociale : une chronique du salariat' },
      { y: '2003', t: "L'Insécurité sociale : qu'est-ce qu'être protégé ?" },
    ],
    associes: ['tension-anomique', 'capital-social'],
    opposes: ['meritocratie'],
    critiques: [
      "Une cartographie en trois zones qui, une fois popularisée, a parfois été appliquée de façon rigide, comme si chacun occupait une case fixe plutôt qu'une position mouvante.",
      "Le terme désaffiliation a connu le même succès, et le même risque de devenir un mot-valise, que l'exclusion qu'il visait pourtant à préciser.",
    ],
    evolution: [
      { p: '1974', f: "Lenoir popularise « l'exclusion » comme catégorie administrative globale, sans en distinguer les situations." },
      { p: '1995', f: "Castel lui substitue une cartographie en zones, avec la vulnérabilité comme charnière centrale." },
      { p: '1988–1990', f: "Le RMI, puis le débat sur l'insertion, s'appuient implicitement sur cette distinction entre accompagner une vulnérabilité et traiter une désaffiliation déjà installée." },
      { p: 'Depuis les années 2000', f: "Le cadre est repris bien au-delà de la sociologie du travail, jusque dans l'analyse du logement, de la santé ou du grand âge." },
    ],
  },
  'zone-de-vulnerabilite': {
    detaille: [
      "La zone de vulnérabilité est, dans la cartographie de Castel, la position intermédiaire où l'un des deux piliers de l'intégration — travail stable ou liens sociaux solides — s'est fragilisé, sans que l'autre ait encore cédé à son tour.",
      "Elle a longtemps échappé aux politiques sociales, construites pour traiter séparément l'emploi et l'exclusion : un intérimaire bien entouré ou un salarié isolé n'ont besoin ni d'un simple accompagnement vers l'emploi, ni d'une aide d'urgence, mais d'une réponse à cette fragilité à deux visages.",
      "Castel en fait la zone la plus peuplée des sociétés contemporaines, et la plus instable : on peut y entrer par une rupture professionnelle ou relationnelle, et il suffit d'une seconde rupture, sur l'autre pilier, pour glisser vers la désaffiliation.",
    ],
    origine: {
      oeuvre: 'Les Métamorphoses de la question sociale',
      annee: '1995',
      contexte:
        "Castel isole cette zone charnière pour corriger un débat public des années 1980-1990 qui traitait l'exclusion comme un bloc homogène, sans voir la position intermédiaire où se trouve la majorité des situations précaires.",
    },
    exemples: [
      "Un salarié en contrat court, financièrement autonome mais sans réseau familial ni amical sur lequel s'appuyer en cas de coup dur.",
      "Une personne bien entourée mais sans emploi stable depuis plusieurs années, dont les liens compensent, provisoirement, l'absence de revenu régulier.",
    ],
    oeuvres: [
      { y: '1995', t: 'Les Métamorphoses de la question sociale' },
    ],
    associes: ['zones-de-l-integration-sociale', 'zone-de-desaffiliation', 'precariat'],
    opposes: ['meritocratie'],
    critiques: [
      "La frontière entre vulnérabilité et intégration reste difficile à tracer précisément : à partir de quel degré de fragilité bascule-t-on d'une zone à l'autre ?",
      "Le concept dit peu de la durée : une vulnérabilité brève, vite résorbée, n'a pas les mêmes effets qu'une vulnérabilité qui s'installe sur plusieurs années.",
      "Il a été repris de façon si large, au-delà du travail, qu'il risque de désigner presque toute situation de vie ordinaire comportant une part d'incertitude.",
    ],
    evolution: [
      { p: '1995', f: "Castel nomme la zone de vulnérabilité et en fait la charnière de sa cartographie." },
      { p: '2000–2020', f: "Le concept est repris dans l'analyse du logement, de la santé et du vieillissement, bien au-delà du seul emploi." },
    ],
  },
  'zone-d-assistance': {
    detaille: [
      "La zone d'assistance regroupe ceux dont la subsistance dépend d'un secours extérieur — public ou privé — plutôt que d'un revenu du travail, sans pour autant relever de la désaffiliation la plus complète : des liens familiaux ou sociaux peuvent y subsister malgré l'absence d'emploi.",
      "Castel la relie à une histoire longue, celle de l'assistance aux pauvres sous l'Ancien Régime, retracée dans son travail sur les métamorphoses de la question sociale : bien avant le salariat protecteur, une société devait déjà décider quoi faire de ceux qui ne pouvaient subvenir seuls à leurs besoins.",
      "Il ne s'agit pas, chez Castel, d'une zone aussi centrale que la vulnérabilité ou la désaffiliation dans sa cartographie principale : elle apparaît surtout dans son analyse historique de l'assistance, puis dans sa lecture des minima sociaux contemporains comme un substitut incomplet à la protection par le travail.",
    ],
    origine: {
      oeuvre: "Les Métamorphoses de la question sociale",
      annee: '1995',
      contexte:
        "Castel retrace, sur plusieurs siècles, le passage d'une assistance discrétionnaire et souvent humiliante — l'aumône, la charité — à des droits sociaux universels attachés au statut de citoyen plutôt qu'à la seule pitié d'autrui.",
    },
    exemples: [
      "Un allocataire d'un minimum social, dont les ressources dépendent d'un dispositif d'aide plutôt que d'un salaire, mais qui garde un logement stable et un entourage présent.",
      "Une personne âgée sans pension suffisante, dont le maintien à domicile repose sur une aide sociale plutôt que sur des revenus d'activité.",
    ],
    oeuvres: [
      { y: '1995', t: 'Les Métamorphoses de la question sociale' },
    ],
    associes: ['zones-de-l-integration-sociale', 'protection-sociale'],
    opposes: ['capital-social'],
    critiques: [
      "L'assistance, censée pallier l'absence de travail, a été critiquée pour son caractère parfois stigmatisant, plus proche de l'ancienne charité que d'un droit pleinement reconnu.",
      "Le niveau des minima sociaux, souvent inférieur au seuil de pauvreté, questionne la capacité réelle de cette zone à garantir une intégration durable.",
      "Castel lui-même insiste moins sur cette zone que sur le couple vulnérabilité/désaffiliation, ce qui en fait une catégorie secondaire de son propre modèle.",
    ],
    evolution: [
      { p: 'Ancien Régime', f: "L'assistance aux pauvres relève de la charité chrétienne et de la famille, sans droit universel garanti." },
      { p: '1945–1988', f: "La sécurité sociale généralise des droits attachés au travail, laissant l'assistance pure comme filet résiduel." },
      { p: '1988', f: "Le RMI institutionnalise en France un minimum social non contributif, distinct des droits attachés à l'emploi." },
    ],
  },
  'zone-de-desaffiliation': {
    detaille: [
      "La zone de désaffiliation cumule l'absence de travail et la rupture des liens sociaux et familiaux : les deux piliers qui, ailleurs, se compensent au moins partiellement, cèdent ici en même temps, et chacune des deux ruptures aggrave l'autre.",
      "Castel insiste sur ce cumul plutôt que sur chaque manque pris isolément : un chômage de longue durée n'aboutit pas nécessairement à la désaffiliation tant que des liens tiennent encore ; c'est leur rupture conjointe, et non l'une ou l'autre seule, qui produit la situation la plus grave.",
      "Cette zone n'est cependant jamais, pour Castel, un point d'arrivée figé : c'est la position la plus reculée d'une trajectoire, dont il reste toujours possible, en principe, de se rapprocher à nouveau — même si les dispositifs de réinsertion peinent, en pratique, à inverser durablement le mouvement.",
    ],
    origine: {
      oeuvre: 'Les Métamorphoses de la question sociale',
      annee: '1995',
      contexte:
        "Castel construit cette zone comme le pôle le plus radical de sa cartographie, pour donner un contenu précis à ce que le débat public appelait alors, sans le préciser, la grande exclusion.",
    },
    exemples: [
      "Une personne sans domicile fixe, sans emploi et sans famille à contacter en cas de difficulté, cumulant les deux ruptures à la fois.",
      "Un chômeur de très longue durée dont l'isolement progressif a fini par couper les derniers liens qui auraient pu faciliter un retour à l'emploi.",
    ],
    oeuvres: [
      { y: '1995', t: 'Les Métamorphoses de la question sociale' },
      { y: '2003', t: "L'Insécurité sociale" },
    ],
    associes: ['zones-de-l-integration-sociale', 'zone-de-vulnerabilite', 'insecurite-sociale'],
    opposes: ['societe-salariale'],
    critiques: [
      "Le terme a connu un succès si large qu'il risque, comme l'exclusion avant lui, de devenir un mot-valise appliqué à des situations très différentes.",
      "Le modèle décrit bien l'état, mais moins bien les trajectoires de sortie, statistiquement rares une fois cette zone atteinte.",
      "Il reste construit sur le cas français, où le salariat a longtemps concentré l'essentiel de la protection sociale, ce qui en limite la portée comparative directe.",
    ],
    evolution: [
      { p: '1974', f: "Lenoir popularise l'exclusion comme catégorie globale, sans distinguer les situations qui la composent." },
      { p: '1995', f: "Castel nomme la désaffiliation et la distingue de la vulnérabilité, moins avancée." },
      { p: '2000–2020', f: "Le concept irrigue les politiques de lutte contre le sans-abrisme et la grande exclusion en France et en Europe." },
    ],
  },
  'propriete-sociale': {
    detaille: [
      "La propriété sociale est le nom que Castel donne à l'ensemble des droits — retraite, assurance maladie, indemnités — qui se sont accumulés autour de l'emploi stable au cours du XXᵉ siècle, jusqu'à former une créance sur la collectivité aussi réelle qu'un patrimoine, sans en avoir la forme.",
      "Il en fait un équivalent fonctionnel de la propriété privée classique : à défaut de posséder un bien transmissible, le salarié protégé possède un droit garanti, qui le met à l'abri des grands risques de l'existence — maladie, vieillesse, accident — presque autant qu'un patrimoine l'aurait fait pour les classes possédantes d'autrefois.",
      "Cette propriété d'un genre nouveau explique, selon Castel, pourquoi perdre un emploi stable ébranle bien plus qu'un revenu mensuel : c'est tout un édifice de droits accumulés, souvent sur plusieurs décennies, qui se trouve fragilisé d'un coup.",
    ],
    origine: {
      oeuvre: 'Les Métamorphoses de la question sociale',
      annee: '1995',
      contexte:
        "Castel forge le concept pour nommer ce que le vocabulaire du seul contrat de travail ne permettait pas de saisir : une sécurité comparable à celle qu'offrait, historiquement, la seule propriété privée aux classes qui la détenaient.",
    },
    exemples: [
      "Une pension de retraite constituée sur toute une carrière, qui vaut à son détenteur une sécurité comparable à celle d'un capital, sans qu'il en possède la forme.",
      "Une couverture maladie attachée à l'emploi, dont la perte expose brutalement à des risques qu'un patrimoine aurait, ailleurs, permis d'absorber.",
    ],
    oeuvres: [
      { y: '1995', t: 'Les Métamorphoses de la question sociale' },
    ],
    associes: ['societe-salariale', 'protection-sociale'],
    opposes: ['capital-economique'],
    critiques: [
      "L'analogie avec la propriété reste métaphorique : à la différence d'un bien réel, ces droits ne se transmettent pas et dépendent de décisions politiques toujours révisables.",
      "Le concept a été élaboré sur le cas français, où la protection s'est historiquement adossée à l'emploi bien plus qu'ailleurs, ce qui en limite la portée comparative.",
      "Il dit peu de ceux qui n'ont jamais accédé à cette propriété faute d'avoir occupé un emploi suffisamment stable pour l'accumuler.",
    ],
    evolution: [
      { p: '1930–1975', f: "La sécurité sociale et le droit du travail construisent, en pratique, l'architecture de droits que Castel nommera ensuite." },
      { p: '1995', f: "Castel forge le concept de propriété sociale dans Les Métamorphoses de la question sociale." },
      { p: 'Depuis 1975', f: "La fragilisation du salariat érode progressivement cette propriété pour une part croissante des actifs." },
    ],
  },
  'protection-sociale': {
    detaille: [
      "La protection sociale est, pour Castel, l'ensemble concret des dispositifs — assurances, prestations, services — par lesquels une société collectivise les grands risques de l'existence, plutôt que de les laisser peser sur le seul individu ou sur sa seule famille.",
      "Il en fait moins un supplément de générosité qu'une condition de possibilité de l'individu moderne : être protégé, c'est pouvoir prendre des risques — changer d'emploi, s'installer ailleurs, fonder une famille — sans que le moindre incident menace aussitôt l'existence tout entière.",
      "Cette protection s'est historiquement construite autour du travail salarié, ce qui explique sa fragilité actuelle : à mesure que l'emploi stable se raréfie, c'est tout le mode de collectivisation des risques hérité du XXᵉ siècle qui se trouve à son tour fragilisé.",
    ],
    origine: {
      oeuvre: "L'Insécurité sociale : qu'est-ce qu'être protégé ?",
      annee: '2003',
      contexte:
        "Castel prolonge, dans ce court essai, l'analyse des Métamorphoses de la question sociale pour poser directement la question de ce que signifie être protégé, et de ce que sa disparition partielle change concrètement à l'existence.",
    },
    exemples: [
      "Une assurance chômage qui permet de changer d'emploi sans craindre la ruine immédiate en cas d'échec.",
      "Un système de santé qui prend en charge une maladie grave sans faire peser son coût entier sur le seul patient.",
    ],
    oeuvres: [
      { y: '2003', t: "L'Insécurité sociale : qu'est-ce qu'être protégé ?" },
      { y: '1995', t: 'Les Métamorphoses de la question sociale' },
    ],
    associes: ['propriete-sociale', 'societe-salariale', 'insecurite-sociale'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "Le modèle reste centré sur la protection liée à l'emploi, et rend compte moins directement de sociétés où la protection passe davantage par la famille ou la communauté.",
      "Il peut sous-estimer les effets pervers de certaines protections, qui découragent parfois la prise même de risque qu'elles étaient censées permettre.",
      "Boudon objecterait qu'un système de protection, aussi généreux soit-il, produit ses propres effets de composition, parfois éloignés de ses intentions initiales.",
    ],
    evolution: [
      { p: '1945', f: "La sécurité sociale française institutionnalise une protection collective attachée au statut de salarié." },
      { p: '1995', f: "Castel relie explicitement cette protection à la propriété sociale et à la société salariale." },
      { p: '2003', f: "L'Insécurité sociale interroge directement ce que sa fragilisation change à la condition individuelle." },
    ],
  },
  'precariat': {
    detaille: [
      "Le précariat désigne une condition — et pour certains une classe sociale en formation — faite de travailleurs maintenus durablement hors de la stabilité de l'emploi : contrats courts, intérim, temps partiel subi, statut d'indépendant sans les protections du salariat.",
      "Castel documente longuement, sans employer systématiquement ce terme précis, la fragilisation progressive du salariat qui produit cette situation : une part croissante des actifs occupe des positions professionnelles qui ne donnent plus accès à la propriété sociale que le salariat stable garantissait autrefois.",
      "Le mot lui-même doit sa diffusion internationale à Guy Standing, qui en fait en 2011 le nom d'une nouvelle classe dangereuse, structurée par l'insécurité plutôt que par un rapport de production classique — une thèse qui prolonge, sans toujours le citer, le diagnostic de Castel sur la fragilisation du salariat.",
    ],
    origine: {
      oeuvre: 'Les Métamorphoses de la question sociale',
      annee: '1995',
      contexte:
        "Castel analyse, sans employer lui-même le mot précariat, le processus de fragilisation de l'emploi qui produit la condition que ce terme, popularisé plus tard, viendra désigner directement.",
    },
    exemples: [
      "Un livreur indépendant, juridiquement son propre patron, sans les protections qu'un salariat classique lui aurait garanties pour la même activité.",
      "Un enchaînement de contrats courts qui empêche toute projection à moyen terme — logement stable, crédit, projet familial.",
    ],
    oeuvres: [
      { y: '1995', t: 'Les Métamorphoses de la question sociale' },
      { y: '2011', t: 'Guy Standing, The Precariat: The New Dangerous Class' },
    ],
    associes: ['zone-de-vulnerabilite', 'fragilisation-du-salariat'],
    opposes: ['societe-salariale'],
    critiques: [
      "Standing forge le mot pour en faire une classe à part entière ; d'autres sociologues, dont Castel lui-même, préfèrent parler d'une zone ou d'un processus plutôt que d'une classe déjà constituée et consciente d'elle-même.",
      "Le concept regroupe des situations très diverses — indépendants choisis, contrats courts subis, intérim de longue durée — dont les vécus et les intérêts ne sont pas nécessairement les mêmes.",
      "Il dit peu des trajectoires de sortie, positives ou négatives, hors de cette condition, qu'il décrit surtout comme un état stabilisé.",
    ],
    evolution: [
      { p: '1975–1995', f: "La montée du chômage et des contrats courts fragilise progressivement le salariat stable en France." },
      { p: '1995', f: "Castel en documente le processus dans Les Métamorphoses de la question sociale, sans encore le nommer précariat." },
      { p: '2011', f: "Standing popularise internationalement le terme et en fait le nom d'une classe sociale nouvelle." },
    ],
  },
  'individu-par-defaut': {
    detaille: [
      "L'individu par défaut est, dans les travaux tardifs de Castel, celui que la dissolution des cadres collectifs a jeté dans l'autonomie individuelle sans lui en donner les moyens — ni patrimoine, ni réseau, ni qualification suffisamment reconnue pour transformer cette autonomie en véritable liberté.",
      "Castel l'oppose à l'individu par excès, celui qui dispose au contraire d'assez de ressources pour vivre l'individualisation comme une émancipation réelle, choisie plutôt que subie : deux visages d'un même processus, vécus de façon radicalement inégale.",
      "L'individu par défaut n'est donc pas moins autonome en droit que l'individu par excès : il l'est en principe tout autant, mais sans les ressources qui rendraient cette autonomie exerçable dans les faits — un individualisme qui isole sans jamais vraiment libérer.",
    ],
    origine: {
      oeuvre: 'La Montée des incertitudes',
      annee: '2009',
      contexte:
        "Castel prolonge, dans son dernier grand ouvrage, l'analyse de la fragilisation du salariat pour poser la question de ce que devient l'individu quand les protections collectives se retirent avant que de nouvelles ressources individuelles ne les remplacent.",
    },
    exemples: [
      "Un jeune sans diplôme reconnu ni réseau familial mobilisable, sommé de « construire son parcours » avec les mêmes attentes qu'un jeune bien doté des deux.",
      "Une personne isolée après une rupture professionnelle, censée rebondir seule faute de tout collectif — syndicat, entreprise, famille — sur lequel s'appuyer.",
    ],
    oeuvres: [
      { y: '2009', t: 'La Montée des incertitudes' },
    ],
    associes: ['individualisme', 'precariat'],
    opposes: ['ressources-sociales'],
    critiques: [
      "Le concept, très évocateur, reste peu opérationnalisé empiriquement : on manque d'indicateurs précis pour distinguer, dans une enquête, l'individu par défaut de l'individu par excès.",
      "Boudon objecterait qu'un manque de ressources n'empêche pas des choix rationnels sous contrainte, ce qui nuance l'image d'un individu simplement livré à lui-même sans recours.",
      "Il dit peu des trajectoires qui, sur la durée, permettent à certains individus par défaut d'acquérir progressivement les ressources qui leur manquaient.",
    ],
    evolution: [
      { p: '1995', f: "Les Métamorphoses de la question sociale posent déjà les bases de l'inégalité devant l'individualisation." },
      { p: '2009', f: "La Montée des incertitudes nomme explicitement l'individu par défaut et l'individu par excès." },
    ],
  },
  'insecurite-sociale': {
    detaille: [
      "L'insécurité sociale est, pour Castel, l'exposition nouvelle aux grands risques de l'existence — maladie, vieillesse, perte d'emploi — que produit l'effritement des protections collectives, indépendamment de toute question de délinquance ou de violence physique.",
      "Il la distingue explicitement de l'insécurité civile, celle des atteintes aux personnes et aux biens, qui occupe l'essentiel du débat public : la première touche potentiellement tout le monde, en silence, quand la seconde reste statistiquement concentrée et fait, elle, la une des journaux.",
      "Cette distinction n'est pas neutre politiquement : en déplaçant l'attention vers la seule insécurité civile, le débat public laisse dans l'ombre une insécurité sociale bien plus large, dont les effets sont diffus mais réels pour une part croissante de la population.",
    ],
    origine: {
      oeuvre: "L'Insécurité sociale : qu'est-ce qu'être protégé ?",
      annee: '2003',
      contexte:
        "Castel écrit ce court essai en réaction directe à un débat public français dominé par la seule question sécuritaire, pour rappeler qu'être protégé concerne d'abord et avant tout la protection sociale, non la seule sécurité physique.",
    },
    exemples: [
      "Une maladie grave qui, en l'absence de couverture suffisante, peut faire basculer une famille entière dans la précarité en quelques mois.",
      "Une perte d'emploi qui expose brutalement à des risques — logement, santé — qu'une protection plus solide aurait absorbés sans drame.",
    ],
    oeuvres: [
      { y: '2003', t: "L'Insécurité sociale : qu'est-ce qu'être protégé ?" },
    ],
    associes: ['protection-sociale', 'zone-de-desaffiliation', 'fragilisation-du-salariat'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "L'opposition entre insécurité sociale et insécurité civile, utile pour l'argumentation, tend à minorer les cas où les deux se cumulent et se renforcent réellement.",
      "Le concept, très large, risque d'englober sous un même mot des risques de nature très différente — santé, emploi, logement — dont les remèdes ne sont pas nécessairement les mêmes.",
      "Il dit peu des sociétés où la protection contre les risques sociaux n'a jamais reposé sur l'État, et où le concept se transpose donc plus difficilement.",
    ],
    evolution: [
      { p: '1995', f: "Les Métamorphoses de la question sociale posent les bases de l'analyse de la protection sociale." },
      { p: '2001–2002', f: "Le débat public français se polarise fortement sur la seule insécurité civile, dans un contexte électoral tendu." },
      { p: '2003', f: "Castel publie L'Insécurité sociale pour recentrer le débat sur la protection sociale." },
    ],
  },
  'fragilisation-du-salariat': {
    detaille: [
      "La fragilisation du salariat est le processus, engagé depuis le milieu des années 1970, par lequel l'emploi stable et protégé qui avait fait la société salariale du XXᵉ siècle se dérègle progressivement : chômage de masse, contrats courts, temps partiel subi, statut d'indépendant précaire.",
      "Castel insiste sur la nouveauté du phénomène : il ne s'agit pas d'un simple retour à une précarité ancienne, mais d'une dégradation d'un modèle qui avait justement réussi, pendant les Trente Glorieuses, à faire du salariat un statut protecteur à part entière.",
      "Cette fragilisation n'affecte pas uniformément l'ensemble des actifs : elle crée une ligne de fracture croissante entre ceux qui restent protégés par un emploi stable et ceux qui glissent, souvent durablement, vers des formes d'emploi qui ne donnent plus accès à la même propriété sociale.",
    ],
    origine: {
      oeuvre: 'Les Métamorphoses de la question sociale',
      annee: '1995',
      contexte:
        "Castel écrit en pleine montée du chômage de masse en France, et cherche à comprendre pourquoi cette dégradation de l'emploi ébranle bien plus qu'un simple indicateur économique parmi d'autres.",
    },
    exemples: [
      "Une entreprise qui remplace progressivement des postes en contrat stable par des missions d'intérim renouvelées indéfiniment.",
      "Un secteur entier où le contrat à durée indéterminée, la norme il y a une génération, devient l'exception plutôt que la règle.",
    ],
    oeuvres: [
      { y: '1995', t: 'Les Métamorphoses de la question sociale' },
      { y: '2009', t: 'La Montée des incertitudes' },
    ],
    associes: ['societe-salariale', 'precariat', 'zone-de-vulnerabilite'],
    opposes: ['propriete-sociale'],
    critiques: [
      "Le diagnostic reste centré sur le cas français et européen ; il transpose moins directement à des économies où le salariat stable n'a jamais occupé la même place centrale.",
      "Certains économistes objectent que la flexibilité accrue de l'emploi a aussi permis, pour une partie des actifs, un accès au marché du travail qu'une rigidité plus grande aurait empêché.",
      "Le concept dit peu des politiques publiques qui ont pu, localement et partiellement, ralentir ou compenser ce mouvement plutôt que le simplement subir.",
    ],
    evolution: [
      { p: '1945–1975', f: "Les Trente Glorieuses généralisent le salariat stable et la protection sociale qui lui est attachée." },
      { p: 'Depuis 1975', f: "Le chômage de masse et la multiplication des contrats courts fragilisent progressivement ce modèle." },
      { p: '1995', f: "Castel documente et nomme ce processus dans Les Métamorphoses de la question sociale." },
    ],
  },

  /* — Jürgen Habermas — */
  'espace-public': {
    detaille: [
      "Habermas retrace l'émergence, au XVIIIᵉ siècle européen, d'un espace intermédiaire entre l'État et la sphère privée : des citoyens s'y réunissent — cafés, salons, gazettes — pour discuter des affaires communes en simples particuliers, sans mandat ni titre, avec pour seule autorité la force de l'argument échangé.",
      "Cet espace public bourgeois n'a jamais été aussi ouvert qu'il le prétendait — il excluait de fait les femmes et les classes populaires — mais Habermas y voit malgré tout un acquis normatif réel : l'idée qu'un pouvoir doit se justifier devant une opinion formée par la discussion, et non l'imposer sans avoir à s'expliquer.",
    ],
    origine: {
      oeuvre: "L'Espace public : archéologie de la publicité comme dimension constitutive de la société bourgeoise",
      annee: '1962',
      contexte:
        "Thèse d'habilitation de Habermas, écrite dans l'Allemagne de l'après-guerre, qui cherche à comprendre les conditions historiques d'une opinion publique digne de ce nom, après l'expérience du nazisme.",
    },
    exemples: [
      "Une tribune de presse largement commentée et discutée en dehors de tout cadre officiel, qui finit par peser sur une décision publique sans qu'aucun de ses participants ne détienne le moindre mandat.",
    ],
    oeuvres: [
      { y: '1962', t: "L'Espace public" },
      { y: '1992', t: 'Droit et démocratie' },
    ],
    associes: ['theorie-critique-et-traditionnelle', 'agir-communicationnel'],
    opposes: ['industrie-culturelle'],
    critiques: [
      "L'espace public bourgeois décrit était en réalité très excluant — de genre, de classe, de race — ce qu'Habermas reconnaîtra lui-même dans des travaux ultérieurs.",
      "Le diagnostic d'un déclin de l'espace public sous l'effet des médias de masse a été jugé trop pessimiste face à la vitalité de nouveaux espaces de débat, notamment numériques.",
    ],
    evolution: [
      { p: '1962', f: "Habermas retrace l'émergence et le déclin annoncé de l'espace public bourgeois." },
      { p: '1990', f: "Une nouvelle préface reconnaît les angles morts de genre et de classe du modèle initial." },
      { p: '2000–2010', f: "Le concept est repris et débattu pour penser les espaces publics numériques, entre promesse d'ouverture et nouvelles fragmentations." },
    ],
  },
  'agir-communicationnel': {
    detaille: [
      "Habermas distingue l'agir stratégique, orienté vers le succès — obtenir ce qu'on veut, y compris en manipulant autrui — de l'agir communicationnel, orienté vers l'entente mutuelle : on cherche alors à se faire comprendre et à convaincre par de bonnes raisons, pas seulement à obtenir un résultat.",
      "Cette action suppose que chacun soulève, sans toujours le dire, des prétentions à la validité — que ce qu'il dit est vrai, que ce qu'il fait est juste, qu'il est sincère — que l'autre peut toujours mettre en question et exiger de voir justifiées par l'argument.",
    ],
    origine: {
      oeuvre: "Théorie de l'agir communicationnel",
      annee: '1981',
      contexte:
        "Habermas publie cette somme en réponse directe au pessimisme de ses aînés de l'École de Francfort, pour montrer que la raison garde, dans la structure même du langage, une ressource que la seule raison instrumentale ne peut épuiser.",
    },
    exemples: [
      "Un désaccord réglé par un compromis que chacun accepte parce qu'il en comprend et en admet les raisons, plutôt qu'un accord obtenu en lassant l'autre partie jusqu'à ce qu'elle cède.",
    ],
    oeuvres: [
      { y: '1981', t: "Théorie de l'agir communicationnel, tome I" },
      { y: '1976', t: 'Zur Rekonstruktion des historischen Materialismus' },
    ],
    associes: ['espace-public', 'rationalite-communicationnelle'],
    opposes: ['rationalite-instrumentale'],
    critiques: [
      "La distinction entre agir stratégique et communicationnel reste difficile à établir dans les faits, où les deux se mêlent souvent dans une même interaction.",
      "Le modèle suppose des interlocuteurs en position d'égalité suffisante pour argumenter librement, une condition rarement remplie dans les rapports sociaux réels.",
    ],
    evolution: [
      { p: '1976', f: "Habermas esquisse les prémisses de la théorie dans ses travaux sur le matérialisme historique." },
      { p: '1981', f: "Théorie de l'agir communicationnel systématise la distinction avec l'agir stratégique." },
      { p: '1992', f: "Droit et démocratie applique le cadre à la légitimité des normes juridiques et politiques." },
    ],
  },
  'monde-vecu': {
    detaille: [
      "Le monde vécu (Lebenswelt), notion empruntée à la phénoménologie de Husserl, désigne l'arrière-plan de significations, de savoirs et d'évidences partagées à partir duquel toute communication devient possible, sans jamais avoir besoin d'être entièrement explicité.",
      "Habermas en fait la ressource même de l'agir communicationnel : c'est parce que deux personnes partagent, sans le dire, tout un fond culturel commun qu'elles peuvent s'entendre rapidement sur ce qui reste à discuter, plutôt que de devoir tout redéfinir à chaque échange.",
    ],
    origine: {
      oeuvre: "Théorie de l'agir communicationnel",
      annee: '1981',
      contexte:
        "Habermas reprend et transforme la notion phénoménologique de Husserl et Schütz pour l'articuler à sa propre théorie de la communication et de la coordination sociale.",
    },
    exemples: [
      "Une expression familière, comprise instantanément par deux collègues d'un même service, qui demanderait de longues explications à quiconque n'en partage pas les codes.",
    ],
    oeuvres: [
      { y: '1981', t: "Théorie de l'agir communicationnel, tome II" },
    ],
    associes: ['agir-communicationnel', 'colonisation-du-monde-vecu'],
    opposes: ['systeme'],
    critiques: [
      "La frontière entre monde vécu et système reste difficile à tracer nettement, tant les deux logiques s'entremêlent en pratique dans une même institution.",
      "Le concept, très abstrait, peine à se prêter directement à l'enquête empirique sans un travail de traduction méthodologique important.",
    ],
    evolution: [
      { p: '1936', f: "Husserl formule la notion de monde de la vie dans ses derniers travaux de phénoménologie." },
      { p: '1932', f: "Schütz la retravaille pour la sociologie compréhensive, dans une filiation weberienne." },
      { p: '1981', f: "Habermas l'intègre à sa théorie de l'agir communicationnel, en tension avec le système." },
    ],
  },
  'systeme': {
    detaille: [
      "Reprenant et limitant le concept que Parsons puis Luhmann avaient généralisé à l'ensemble de la société, Habermas réserve le nom de système aux sphères coordonnées non par l'entente mutuelle mais par des médiums impersonnels — l'argent pour l'économie, le pouvoir administratif pour l'État.",
      "Ces médiums ont un avantage réel : ils permettent de coordonner des actions à très grande échelle, entre inconnus, sans qu'il soit besoin de négocier un accord explicite à chaque interaction — un gain d'efficacité que le seul agir communicationnel ne pourrait offrir à cette échelle.",
    ],
    origine: {
      oeuvre: "Théorie de l'agir communicationnel",
      annee: '1981',
      contexte:
        "Habermas discute et retravaille la théorie des systèmes de Talcott Parsons puis de Niklas Luhmann, pour en garder l'outil sans en adopter la prétention à expliquer l'ensemble de la vie sociale.",
    },
    exemples: [
      "Un marché financier où des milliers de transactions s'exécutent chaque seconde entre des parties qui ne se rencontrent jamais et n'ont besoin d'aucun accord de sens pour coordonner leurs actions.",
    ],
    oeuvres: [
      { y: '1981', t: "Théorie de l'agir communicationnel, tome II" },
    ],
    associes: ['systeme-social', 'colonisation-du-monde-vecu'],
    opposes: ['monde-vecu'],
    critiques: [
      "Réserver au seul argent et au pouvoir le statut de médium systémique reste une limitation contestée par certains disciples de Luhmann, qui l'étendent à d'autres sphères (le droit, la science).",
      "La séparation nette entre système et monde vécu peine à rendre compte de sphères hybrides, comme les organisations à but non lucratif, tiraillées entre les deux logiques.",
    ],
    evolution: [
      { p: '1951', f: "Parsons développe une théorie générale des systèmes sociaux, dont Habermas hérite le vocabulaire." },
      { p: '1970–1980', f: "Luhmann radicalise l'approche en une théorie des systèmes auto-référentiels, qu'Habermas juge trop englobante." },
      { p: '1981', f: "Habermas limite le concept de système à l'économie et à l'administration, en tension avec le monde vécu." },
    ],
  },
  'colonisation-du-monde-vecu': {
    detaille: [
      "Habermas constate que les médiums systémiques — l'argent, le pouvoir administratif — ne se contentent pas de coordonner efficacement l'économie et l'État : ils tendent à envahir des sphères qui devraient rester réglées par l'entente mutuelle — la famille, l'école, la culture, les soins.",
      "Cette colonisation ne s'impose pas par la force ouverte, mais par la généralisation discrète d'une logique de gestion, de calcul et de procédure là où une discussion authentique serait requise, ce qui appauvrit ces sphères sans que la contrainte ne soit toujours visible comme telle.",
    ],
    origine: {
      oeuvre: "Théorie de l'agir communicationnel",
      annee: '1981',
      contexte:
        "Habermas cherche à expliquer certains malaises sociaux contemporains — bureaucratisation de l'école, juridicisation croissante de la vie privée — sans revenir au diagnostic totalisant et sans issue de ses aînés de l'École de Francfort.",
    },
    exemples: [
      "Un accompagnement social soumis à des indicateurs de performance chiffrés, qui finissent par compter davantage, dans l'évaluation du travail accompli, que la qualité réelle de la relation nouée avec la personne suivie.",
    ],
    oeuvres: [
      { y: '1981', t: "Théorie de l'agir communicationnel, tome II" },
    ],
    associes: ['monde-vecu', 'systeme', 'societe-administree'],
    opposes: ['regimes-de-justification'],
    critiques: [
      "Le diagnostic suppose un monde vécu originellement préservé de toute logique systémique, une pureté que l'histoire ne vérifie pas nécessairement.",
      "Il reste difficile de tracer empiriquement la limite entre une gestion légitime, nécessaire à grande échelle, et une colonisation abusive du monde vécu.",
    ],
    evolution: [
      { p: '1981', f: "Habermas formule la thèse de la colonisation du monde vécu par le système." },
      { p: '1992', f: "Droit et démocratie applique l'analyse à la juridicisation croissante des rapports sociaux." },
      { p: '2000–2010', f: "Le concept est repris pour analyser la généralisation des indicateurs de performance dans les services publics et le travail social." },
    ],
  },
  'rationalite-communicationnelle': {
    detaille: [
      "La rationalité communicationnelle n'est ni celle du calcul des moyens (rationalité instrumentale) ni celle de la fidélité à une valeur quel qu'en soit le coût (rationalité en valeur) : c'est la capacité, propre à tout locuteur compétent, de justifier ce qu'il avance et de rester disposé à en changer si un meilleur argument survient.",
      "Habermas en fait une ressource universelle inscrite dans la structure même du langage : parler sérieusement à autrui, ce n'est jamais seulement émettre des sons, c'est implicitement s'engager à pouvoir justifier ce qu'on dit si on nous le demande.",
    ],
    origine: {
      oeuvre: "Théorie de l'agir communicationnel",
      annee: '1981',
      contexte:
        "Habermas développe le concept en dialogue critique avec la théorie wébérienne de la rationalisation, pour montrer qu'elle ne rend compte que d'une des formes possibles de la rationalité moderne.",
    },
    exemples: [
      "Un chercheur qui abandonne publiquement une hypothèse qu'il défendait, non parce qu'on l'y a contraint, mais parce qu'un contre-argument plus solide vient d'être présenté.",
    ],
    oeuvres: [
      { y: '1981', t: "Théorie de l'agir communicationnel, tome I" },
    ],
    associes: ['agir-communicationnel', 'ethique-de-la-discussion'],
    opposes: ['rationalite-instrumentale'],
    critiques: [
      "Le modèle suppose des interlocuteurs prêts à se laisser convaincre par le meilleur argument, une disposition que l'observation des échanges réels ne confirme pas toujours.",
      "Il reste flou sur la manière de départager, en pratique, ce qui constitue réellement le « meilleur » argument dans un désaccord de valeurs.",
    ],
    evolution: [
      { p: '1981', f: "Habermas distingue la rationalité communicationnelle des types wébériens de rationalité." },
      { p: '1983', f: "Le concept fonde l'éthique de la discussion, qui l'étend au domaine moral." },
    ],
  },
  'ethique-de-la-discussion': {
    detaille: [
      "L'éthique de la discussion (Diskursethik) pose qu'une norme n'est moralement valide que si elle pourrait recueillir l'assentiment de toutes les personnes concernées, au terme d'une discussion réelle menée sans contrainte ni exclusion.",
      "Cette exigence déplace la question morale : il ne s'agit plus de savoir quel contenu est juste dans l'absolu, mais quelle procédure de discussion permettrait à une norme d'être reconnue comme légitime par tous ceux qu'elle engage.",
    ],
    origine: {
      oeuvre: 'Morale et communication',
      annee: '1983',
      contexte:
        "Habermas développe cette éthique procédurale en prolongement direct de sa théorie de l'agir communicationnel, dans le sillage de l'universalisme moral kantien qu'il retravaille par le langage plutôt que par la seule raison individuelle.",
    },
    exemples: [
      "Une charte d'établissement scolaire réécrite après consultation des élèves, des parents et des enseignants concernés, plutôt qu'imposée sans discussion par la seule direction.",
    ],
    oeuvres: [
      { y: '1983', t: 'Morale et communication' },
      { y: '1991', t: 'De l\'éthique de la discussion' },
    ],
    associes: ['rationalite-communicationnelle', 'agir-communicationnel'],
    opposes: ['domination-legitime'],
    critiques: [
      "Le principe suppose une situation de discussion idéale, libre de toute contrainte et de toute inégalité de parole, que les conditions réelles ne réunissent presque jamais.",
      "Il reste peu opérant pour trancher entre des positions qui s'opposent malgré une discussion menée de bonne foi et dans des conditions équitables.",
    ],
    evolution: [
      { p: '1785', f: "Kant pose l'universalisme moral que Habermas retravaille, en le faisant reposer sur la discussion plutôt que sur la seule raison solitaire." },
      { p: '1983', f: "Habermas formule l'éthique de la discussion dans Morale et communication." },
      { p: '1991', f: "Apel développe en parallèle une fondation transcendantale voisine de l'éthique du discours." },
    ],
  },

  /* — Anthony Giddens — */
  'structuration': {
    detaille: [
      "La structuration est le processus par lequel les structures sociales — règles et ressources — sont à la fois le médium et le résultat des pratiques qu'elles organisent : un acteur puise dans des règles déjà là pour agir, et cet acte même reconduit, ou légèrement déplace, les règles dont il s'est servi.",
      "Giddens rompt ainsi avec l'idée d'une structure figée, extérieure à l'action, qui existerait indépendamment du moment où elle est mobilisée : une structure qui ne serait jamais instanciée dans aucune pratique n'existe tout simplement pas, elle n'est qu'une possibilité.",
      "Ce processus n'a ni auteur unique ni terme : chaque pratique quotidienne, aussi routinière soit-elle, participe à la structuration en cours, sans que personne n'en pilote l'ensemble ni n'en connaisse l'issue à l'avance.",
    ],
    origine: {
      oeuvre: 'La Constitution de la société',
      annee: '1984',
      contexte:
        "Giddens y systématise une théorie construite depuis une décennie, pour dépasser une opposition qu'il juge stérile entre sociologies de la structure et sociologies de l'action.",
    },
    exemples: [
      "Une langue qui n'existe que parce qu'on la parle, et que chaque phrase prononcée reconduit ou fait légèrement évoluer.",
      "Une file d'attente dont la règle implicite — respecter son tour — n'existe que parce que chacun continue de s'y plier, jour après jour.",
    ],
    oeuvres: [
      { y: '1979', t: 'Central Problems in Social Theory' },
      { y: '1984', t: 'La Constitution de la société' },
    ],
    associes: ['dualite-de-la-structure', 'agentivite'],
    opposes: ['systeme-social'],
    critiques: [
      "Archer objecte que fondre à ce point structure et action empêche d'étudier empiriquement comment l'une pèse sur l'autre dans le temps : à force de dualité, on perd toute prise analytique.",
      "Le concept reste très général et abstrait, ce qui rend difficile sa traduction en protocole d'enquête précis.",
      "Il dit peu des situations où la structuration échoue franchement : une règle qui ne parvient jamais à s'instaurer, ou qui se défait brutalement.",
    ],
    evolution: [
      { p: '1976', f: "New Rules of Sociological Method esquisse le programme d'une sociologie qui dépasse l'opposition structure/action." },
      { p: '1979', f: 'Central Problems in Social Theory pose les premiers éléments de la théorie de la structuration.' },
      { p: '1984', f: 'La Constitution de la société en donne l\'exposé systématique complet.' },
    ],
  },
  'dualite-de-la-structure': {
    detaille: [
      "La dualité de la structure est la thèse centrale de Giddens : la structure n'est jamais seulement une contrainte extérieure à l'acteur, elle est aussi ce qui rend son action possible — son médium autant que son résultat, jamais l'un sans l'autre.",
      "Giddens s'oppose ainsi à un dualisme classique en sociologie, qui traite structure et action comme deux ordres séparés, l'un contraignant l'autre de l'extérieur : dans sa théorie, il n'y a jamais de structure « en dehors » de l'action qui la mobilise à chaque instant.",
      "Cette dualité change le sens même de la contrainte : une règle grammaticale limite ce qu'on peut dire, mais c'est cette même règle qui rend la parole intelligible — sans elle, aucune communication ne serait seulement possible.",
    ],
    origine: {
      oeuvre: 'La Constitution de la société',
      annee: '1984',
      contexte:
        "Giddens forge cette formule pour marquer sa différence avec toute théorie qui réduirait la structure à un simple obstacle extérieur à l'action, structuralisme comme fonctionnalisme.",
    },
    exemples: [
      "Une règle de politesse qui limite ce qu'on peut dire, et sans laquelle on ne saurait même pas comment s'adresser à un inconnu.",
      "Un code de la route qui contraint la conduite, tout en étant la condition même qui rend la circulation possible sans accident généralisé.",
    ],
    oeuvres: [
      { y: '1984', t: 'La Constitution de la société' },
    ],
    associes: ['structuration', 'habitus'],
    opposes: ['fait-social'],
    critiques: [
      "Durkheim objecterait qu'un fait social garde une extériorité et une contrainte propres, qu'une dualité trop symétrique entre structure et action risque de dissoudre.",
      "Le concept ne dit pas toujours clairement à quel moment une structure cesse d'habiliter pour ne plus que contraindre, ni pour qui.",
      "La comparaison avec l'habitus de Bourdieu reste débattue : les deux notions se recoupent largement, sans que Giddens ni Bourdieu n'aient vraiment tranché ce qui les distingue.",
    ],
    evolution: [
      { p: '1972', f: "Bourdieu formule l'habitus, dont la dualité de la structure partage largement l'ambition théorique." },
      { p: '1984', f: "Giddens formalise la dualité de la structure dans La Constitution de la société." },
    ],
  },
  'agentivite': {
    detaille: [
      "L'agentivité est la capacité de tout acteur social à agir autrement qu'il ne le fait, à intervenir dans le cours des événements et à produire des effets — une capacité que Giddens tient pour irréductible, même dans les situations les plus contraintes.",
      "Elle ne se confond pas avec un libre arbitre absolu : un acteur agentif reste toujours pris dans des structures qui l'habilitent autant qu'elles le limitent, mais il conserve, à l'intérieur même de cette contrainte, une marge réelle de manœuvre.",
      "Giddens en tire ce qu'il appelle la dialectique du contrôle : même dans les rapports de domination les plus déséquilibrés, le dominé garde toujours quelques ressources pour peser, même modestement, sur la relation qui le contraint.",
    ],
    origine: {
      oeuvre: 'La Constitution de la société',
      annee: '1984',
      contexte:
        "Giddens développe ce concept pour éviter deux écueils symétriques : un acteur totalement libre, indépendant de toute structure, et un acteur totalement déterminé, simple exécutant de règles qui le dépasseraient entièrement.",
    },
    exemples: [
      "Un salarié sans réel pouvoir de décision qui trouve, malgré tout, dans le rythme de son propre travail, une marge d'action bien réelle.",
      "Un détenu qui, dans un cadre carcéral extrêmement contraint, conserve certaines marges — refuser un ordre secondaire, ralentir une tâche — que le règlement ne parvient jamais à éliminer complètement.",
    ],
    oeuvres: [
      { y: '1984', t: 'La Constitution de la société' },
    ],
    associes: ['structuration', 'reflexivite'],
    opposes: ['violence-symbolique'],
    critiques: [
      "Bourdieu objecterait que cette marge de manœuvre, souvent minime, ne suffit pas à contredire l'essentiel : la reproduction des rapports de domination bien plus que leur transformation.",
      "Le concept, en insistant sur la capacité d'agir de tous, risque de minimiser des situations où cette capacité est en réalité réduite à presque rien.",
      "Il dit peu de ce qui distingue une agentivité qui transforme réellement une structure d'une agentivité qui se contente, sans le savoir, de la reproduire à l'identique.",
    ],
    evolution: [
      { p: '1979', f: "Central Problems in Social Theory pose les bases de la théorie de l'action de Giddens." },
      { p: '1984', f: "La Constitution de la société formalise l'agentivité et la dialectique du contrôle." },
    ],
  },
  'reflexivite': {
    detaille: [
      "La réflexivité est la surveillance constante que tout acteur exerce sur sa propre conduite, sur les raisons qui la motivent et sur les conditions dans lesquelles elle se déroule — une compétence ordinaire, exercée en continu, rarement portée à un niveau de conscience explicite.",
      "Giddens en fait une propriété générale de l'action humaine, mais montre qu'elle s'intensifie fortement dans la modernité tardive : faute de tradition qui tranche à l'avance, chacun doit revoir en permanence ses propres pratiques à la lumière d'informations toujours renouvelées.",
      "Cette réflexivité ne s'arrête pas à l'individu : les institutions elles-mêmes deviennent réflexives, révisant sans cesse leurs propres règles à mesure que de nouvelles connaissances remettent en cause celles qui les avaient jusque-là fondées.",
    ],
    origine: {
      oeuvre: 'La Constitution de la société',
      annee: '1984',
      contexte:
        "Giddens distingue la surveillance réflexive de l'action de deux autres dimensions — la rationalisation et la motivation — pour donner un compte rendu précis de ce que fait un acteur en agissant, au-delà de la seule intention.",
    },
    exemples: [
      "Un parent qui réajuste en permanence sa manière d'éduquer à mesure que de nouveaux repères, souvent contradictoires, lui parviennent.",
      "Une entreprise qui révise chaque année son organisation interne à la lumière des dernières études sur le travail, plutôt que de la fixer une fois pour toutes.",
    ],
    oeuvres: [
      { y: '1984', t: 'La Constitution de la société' },
      { y: '1991', t: 'Modernity and Self-Identity' },
    ],
    associes: ['agentivite', 'modernite-reflexive'],
    opposes: ['moeurs'],
    critiques: [
      "Tocqueville objecterait que les mœurs, précisément parce qu'elles ne se discutent pas, offrent une stabilité que la réflexivité généralisée sacrifie sans toujours rien y gagner en retour.",
      "Le concept suppose des ressources — temps, information, formation — pour exercer cette surveillance réflexive, inégalement réparties selon la position sociale.",
      "Il dit peu des situations où la réflexivité elle-même devient source d'angoisse plutôt que de maîtrise, faute de repère stable auquel se rattacher.",
    ],
    evolution: [
      { p: '1984', f: "La Constitution de la société pose la réflexivité comme dimension permanente de toute action." },
      { p: '1991', f: "Modernity and Self-Identity en étend l'analyse à la construction réflexive de l'identité personnelle." },
      { p: '1994', f: "Reflexive Modernization en généralise le principe à l'échelle des institutions et de la société entière." },
    ],
  },
  'modernite-reflexive': {
    detaille: [
      "La modernité réflexive désigne une phase de la modernité où institutions et individus ne peuvent plus s'appuyer sur des certitudes transmises : ils doivent réviser en permanence leurs propres pratiques à la lumière de connaissances sans cesse renouvelées, elles-mêmes toujours provisoires.",
      "Giddens, Beck et Lash la distinguent d'une première modernité, dite « simple », qui avait pu prendre ses propres fondements pour acquis — le progrès, la science, la nation — sans les remettre sans cesse en question.",
      "Cette réflexivité généralisée produit un paradoxe : plus le savoir s'accumule, moins il offre de certitude définitive, chaque avancée ouvrant aussitôt de nouvelles questions plutôt que de clore le débat.",
    ],
    origine: {
      oeuvre: 'Reflexive Modernization',
      annee: '1994',
      contexte:
        "Giddens publie cet ouvrage collectif avec Ulrich Beck et Scott Lash pour formaliser une thèse déjà présente dans Les Conséquences de la modernité : la modernité avancée se caractérise par une réflexivité qui la retourne sans cesse sur elle-même.",
    },
    exemples: [
      "Un protocole médical réécrit chaque année à la lumière des dernières études, plutôt que fixé une fois pour toutes.",
      "Une politique climatique révisée en continu à mesure que de nouvelles données scientifiques en corrigent les hypothèses de départ.",
    ],
    oeuvres: [
      { y: '1990', t: 'Les Conséquences de la modernité' },
      { y: '1994', t: 'Reflexive Modernization (avec U. Beck et S. Lash)' },
    ],
    associes: ['reflexivite', 'detraditionalisation', 'desencastrement'],
    opposes: ['processus-de-civilisation'],
    critiques: [
      "Elias objecterait que les grandes transformations de longue durée qu'il décrit tiennent à des mécanismes largement non voulus et non maîtrisés, quand la réflexivité suppose au contraire une révision délibérée et consciente.",
      "Le concept prête à tous une capacité de révision réflexive que les ressources — temps, information, éducation — distribuent en réalité très inégalement.",
      "Certains critiques objectent que la thèse généralise à l'excès une expérience propre aux classes moyennes éduquées des pays riches.",
    ],
    evolution: [
      { p: '1990', f: "Les Conséquences de la modernité pose les bases de la réflexivité institutionnelle généralisée." },
      { p: '1994', f: "Reflexive Modernization en donne, avec Beck et Lash, la formulation la plus systématique." },
      { p: '1986', f: "Beck avait, de son côté, déjà posé les bases de la société du risque, sur laquelle s'appuie la thèse commune." },
    ],
  },
  'detraditionalisation': {
    detaille: [
      "La détraditionalisation est la perte progressive de l'autorité qu'exerçait la coutume sur la conduite : ce qui allait autrefois de soi, parce que « cela s'est toujours fait ainsi », doit désormais se justifier explicitement pour continuer d'exister.",
      "Giddens insiste sur un paradoxe : la tradition ne disparaît pas nécessairement, mais elle change de statut — on peut continuer de la suivre, mais seulement après l'avoir choisie et justifiée, ce qui la transforme déjà profondément, même sans y toucher en apparence.",
      "Cette érosion touche aussi bien les grandes institutions — religion, famille, nation — que les gestes les plus ordinaires, désormais soumis à un examen réflexif qu'aucune autorité transmise ne suffit plus à clore d'avance.",
    ],
    origine: {
      oeuvre: 'Beyond Left and Right',
      annee: '1994',
      contexte:
        "Giddens développe ce concept pour comprendre pourquoi les grands clivages politiques traditionnels, gauche et droite, perdent de leur évidence dans une société où la tradition elle-même a cessé de trancher les questions à l'avance.",
    },
    exemples: [
      "Un choix de vie familial qui doit aujourd'hui s'expliquer, là où il aurait autrefois semblé n'appeler aucune justification.",
      "Une pratique religieuse suivie non plus par simple héritage, mais après un examen personnel qui pourrait tout aussi bien conclure à l'abandonner.",
    ],
    oeuvres: [
      { y: '1994', t: 'Beyond Left and Right' },
      { y: '1994', t: 'Reflexive Modernization (avec U. Beck et S. Lash)' },
    ],
    associes: ['modernite-reflexive', 'reflexivite'],
    opposes: ['moeurs'],
    critiques: [
      "Tocqueville objecterait qu'une société entièrement détraditionalisée priverait ses membres du socle de mœurs communes sur lequel il fait pourtant reposer la démocratie elle-même.",
      "Le concept surestime peut-être l'ampleur réelle du phénomène : de nombreuses pratiques continuent d'être transmises sans jamais faire l'objet d'un véritable examen réflexif.",
      "Il dit peu des mouvements inverses, bien réels, de retraditionalisation volontaire que connaissent aussi certaines sociétés contemporaines.",
    ],
    evolution: [
      { p: '1990', f: "Les Conséquences de la modernité pose les bases de l'érosion de la tradition dans la modernité avancée." },
      { p: '1994', f: "Beyond Left and Right nomme et développe la détraditionalisation comme concept autonome." },
    ],
  },
  'distanciation-spatio-temporelle': {
    detaille: [
      "La distanciation spatio-temporelle est l'étirement des relations sociales au-delà de la coprésence locale : des techniques de coordination — l'horloge, la carte, l'imprimerie, puis les réseaux numériques — permettent de relier des personnes séparées par de grandes distances et de longs intervalles de temps.",
      "Giddens en fait un trait distinctif de la modernité : les sociétés traditionnelles organisaient l'essentiel de la vie sociale dans le cadre étroit du face-à-face local, quand la modernité rend possibles des relations aussi solides entre inconnus séparés par des milliers de kilomètres.",
      "Cette distanciation ne dissout pas le local, elle le recompose : chaque lieu reste habité par des relations directes, mais de plus en plus traversé, façonné et parfois bouleversé par des forces sociales qui prennent leur origine bien au-delà de lui.",
    ],
    origine: {
      oeuvre: 'Les Conséquences de la modernité',
      annee: '1990',
      contexte:
        "Giddens y systématise une réflexion déjà présente dans La Constitution de la société sur le rôle des techniques de coordination — horloge mécanique, imprimerie — dans l'étirement moderne des relations sociales.",
    },
    exemples: [
      "Une réunion de travail qui rassemble, au même instant, des personnes situées sur trois continents différents.",
      "Une correspondance entretenue sur plusieurs décennies entre deux personnes qui ne se rencontrent en personne que rarement, voire jamais.",
    ],
    oeuvres: [
      { y: '1984', t: 'La Constitution de la société' },
      { y: '1990', t: 'Les Conséquences de la modernité' },
    ],
    associes: ['desencastrement', 'modernite-reflexive'],
    opposes: ['interaction-en-face-a-face'],
    critiques: [
      "Goffman objecterait qu'une part irréductible de la vie sociale continue de se jouer dans l'ordre de l'interaction en face-à-face, que la seule distanciation ne suffit pas à expliquer.",
      "Le concept traite la distance comme un simple étirement technique, sans toujours dire ce qui se perd réellement dans le passage du face-à-face à la relation distante.",
      "Il dit peu des inégalités d'accès aux techniques de distanciation, qui restent réparties de façon très inégale selon les régions et les revenus.",
    ],
    evolution: [
      { p: 'XIVᵉ s.', f: "L'horloge mécanique introduit une mesure du temps détachée du rythme naturel des saisons et des jours." },
      { p: 'XVᵉ s.', f: "L'imprimerie permet une diffusion de l'écrit indépendante de la présence de son auteur." },
      { p: '1984–1990', f: "Giddens systématise le concept de distanciation spatio-temporelle comme trait central de la modernité." },
    ],
  },
  'desencastrement': {
    detaille: [
      "Le désencastrement est le détachement des relations sociales de leur contexte local immédiat, et leur restructuration à travers des étendues indéfinies d'espace et de temps — ce que Giddens appelle, en anglais, le disembedding.",
      "Il en identifie deux mécanismes principaux : les jetons symboliques, comme la monnaie, qui fonctionnent de façon identique quels que soient les individus concernés et le lieu de l'échange ; et les systèmes experts, ces savoirs techniques qui organisent une large part de notre environnement matériel et social sans que nous en maîtrisions nous-mêmes les principes.",
      "Ce détachement n'élimine jamais tout à fait le contexte local : Giddens parle de « réencastrement » pour désigner les moments où ces mécanismes désencastrés doivent malgré tout se réancrer localement, par exemple dans la confiance accordée à un professionnel précis plutôt qu'au seul système abstrait qu'il représente.",
    ],
    origine: {
      oeuvre: 'Les Conséquences de la modernité',
      annee: '1990',
      contexte:
        "Giddens y développe ce concept pour expliquer comment la modernité rend possible une coordination sociale à très grande échelle, sans dépendre des relations de confiance personnelle qui suffisaient aux sociétés traditionnelles.",
    },
    exemples: [
      "Un billet de banque qui vaut exactement la même chose, quel que soit l'inconnu qui le reçoit, sans qu'aucune relation personnelle ne l'ait garanti.",
      "Un passager d'avion qui fait confiance à un système technique entier — pilotage, maintenance, contrôle aérien — sans en connaître ni en maîtriser aucun des rouages.",
    ],
    oeuvres: [
      { y: '1990', t: 'Les Conséquences de la modernité' },
    ],
    associes: ['distanciation-spatio-temporelle', 'modernite-reflexive'],
    opposes: ['capital-economique'],
    critiques: [
      "Marx objecterait qu'un jeton symbolique comme la monnaie n'est jamais aussi neutre que le concept le suggère : elle reste porteuse de rapports de production et de classe bien concrets.",
      "Le concept insiste sur la confiance envers les systèmes experts, mais dit peu de ce qui se passe quand cette confiance se rompt largement, comme lors d'une crise financière ou sanitaire.",
      "Il repose sur une distinction entre local et désencastré qui reste parfois difficile à tracer précisément dans des situations concrètes très mêlées.",
    ],
    evolution: [
      { p: '1900', f: "Simmel analyse déjà l'économie monétaire comme une force qui distend les rapports personnels traditionnels." },
      { p: '1990', f: "Giddens formalise le désencastrement et ses deux mécanismes dans Les Conséquences de la modernité." },
    ],
  },

  /* — Michel Foucault — */
  'relations-de-pouvoir': {
    detaille: [
      "Foucault refuse de traiter le pouvoir comme une chose qu'un acteur détiendrait et qu'un autre subirait : il n'existe, dit-il, que dans son exercice, sous forme de relations mouvantes qui traversent tout le corps social, jamais concentrées en un point unique.",
      "Ces relations ne sont pas d'abord répressives : elles produisent autant qu'elles interdisent — des savoirs, des comportements, des désirs, des institutions entières. Le pouvoir, avant d'être une force qui dit non, est ce qui rend possible tout un ordre de choses.",
      "Là où il y a pouvoir, ajoute Foucault, il y a toujours résistance : non pas comme un dehors qui lui échapperait, mais comme son envers indissociable, présent dans chaque relation de pouvoir qui s'exerce.",
    ],
    origine: {
      oeuvre: 'Surveiller et punir',
      annee: '1975',
      contexte:
        "Foucault y rompt avec une tradition, de Machiavel à Marx, qui cherchait la source du pouvoir dans un lieu précis — le prince, l'État, la classe dominante — pour le décrire plutôt dans ses effets et ses techniques les plus concrets.",
    },
    exemples: [
      "Une salle de classe où le pouvoir ne descend pas seulement du professeur vers les élèves, mais circule aussi entre eux, dans les regards, les rangs, les comparaisons.",
      "Un mouvement de grève qui naît précisément à l'intérieur d'un rapport de pouvoir, sans lui être extérieur ni antérieur.",
    ],
    oeuvres: [
      { y: '1975', t: 'Surveiller et punir' },
      { y: '1976', t: 'La Volonté de savoir' },
    ],
    associes: ['micro-pouvoirs', 'savoir-pouvoir'],
    opposes: ['pouvoir'],
    critiques: [
      "Weber, dont la définition classique reste la plus citée en sociologie, objecterait qu'un pouvoir sans aucun sujet qui le détienne devient difficile à distinguer d'une simple description de l'ordre social tout entier.",
      "Habermas objecte que si le pouvoir est partout, on ne voit plus depuis quel point la critique elle-même pourrait légitimement parler.",
      "Le concept, très général, dit peu de ce qui distingue un rapport de pouvoir ordinaire d'une domination dure, stable et difficile à renverser.",
    ],
    evolution: [
      { p: '1922', f: "Weber définit le pouvoir comme la chance d'imposer sa volonté, même contre résistance — la définition que Foucault prend pour cible." },
      { p: '1975–1976', f: "Foucault déplace la question du qui-détient-le-pouvoir vers le comment-il-s'exerce, dans les pratiques et les savoirs plutôt que dans une source unique." },
    ],
  },
  'micro-pouvoirs': {
    detaille: [
      "Les micro-pouvoirs sont les innombrables points où le pouvoir s'exerce à petite échelle — dans l'atelier, l'école, la caserne, la famille — bien avant, et bien au-delà, de sa concentration dans les grands appareils d'État.",
      "Foucault en fait le véritable terrain d'enquête de sa sociologie du pouvoir : comprendre l'État suppose d'abord de comprendre ce réseau capillaire de relations locales, sans lequel aucun pouvoir centralisé ne pourrait fonctionner ni même se maintenir.",
      "Ces micro-pouvoirs ne descendent pas simplement du sommet vers la base : ils forment le socle sur lequel les pouvoirs plus visibles, ceux de l'État et du droit, viennent ensuite s'appuyer et se légitimer.",
    ],
    origine: {
      oeuvre: 'Surveiller et punir',
      annee: '1975',
      contexte:
        "Foucault y étudie les règlements d'atelier, d'école et de caserne du XVIIIᵉ siècle pour montrer qu'un pouvoir minutieux, bien plus fin que la loi, s'y exerçait déjà, indépendamment de toute décision prise au sommet de l'État.",
    },
    exemples: [
      "Un règlement intérieur d'entreprise qui organise plus finement la vie quotidienne des salariés qu'aucune loi nationale.",
      "Une salle d'attente dont l'agencement même — files, guichets, horaires — exerce un pouvoir sur les usagers sans qu'aucun agent n'ait besoin d'intervenir.",
    ],
    oeuvres: [
      { y: '1975', t: 'Surveiller et punir' },
    ],
    associes: ['relations-de-pouvoir', 'discipline'],
    opposes: ['domination-legitime'],
    critiques: [
      "Weber objecterait qu'une théorie du pouvoir qui se dilue à ce point dans le local perd la capacité à expliquer ce qui distingue un État d'un simple agrégat d'institutions locales.",
      "Le concept peine à rendre compte des moments où un pouvoir central impose, de haut en bas, une décision que rien au niveau local n'annonçait.",
      "Il dit peu de la coordination réelle entre ces différents micro-pouvoirs, qui semblent parfois converger comme par hasard vers les mêmes effets globaux.",
    ],
    evolution: [
      { p: '1975', f: "Surveiller et punir documente les micro-pouvoirs disciplinaires du XVIIIᵉ siècle." },
      { p: '1976–1979', f: "Les cours au Collège de France généralisent l'enquête aux dispositifs de sécurité et à la population." },
    ],
  },
  'discipline': {
    detaille: [
      "La discipline est une technique de pouvoir qui dresse les corps par un contrôle minutieux du temps, de l'espace, des gestes et des rythmes, pour produire des corps à la fois dociles et utiles — obéissants d'autant plus qu'ils sont devenus efficaces.",
      "Elle procède par des méthodes précises : le quadrillage de l'espace, l'emploi du temps découpé en tranches, la surveillance hiérarchique, l'examen qui compare et classe — un ensemble de procédés minuscules, sans grand spectacle, qui n'ont pas besoin de la loi pour agir.",
      "Foucault en fait la technique de pouvoir caractéristique de l'âge classique et moderne, née dans les monastères et les armées avant de se diffuser à l'école, à l'usine, à l'hôpital — partout où il s'agit de tirer d'un corps le maximum de force utile en minimisant sa force politique.",
    ],
    origine: {
      oeuvre: 'Surveiller et punir',
      annee: '1975',
      contexte:
        "Foucault construit ce concept en comparant le supplice public de l'Ancien Régime à la prison moderne, pour montrer qu'un même XVIIIᵉ siècle invente à la fois les droits de l'homme et une nouvelle technologie du dressage des corps.",
    },
    exemples: [
      "Un emploi du temps scolaire qui découpe la journée en tranches précises, chacune assignée à un exercice et à une posture.",
      "Un exercice militaire répété jusqu'à ce que le geste devienne automatique, sans plus avoir besoin d'être commandé.",
    ],
    oeuvres: [
      { y: '1975', t: 'Surveiller et punir' },
    ],
    associes: ['micro-pouvoirs', 'surveillance', 'normalisation'],
    opposes: ['autocontrole'],
    critiques: [
      "Elias, dont l'autocontrôle décrit une intériorisation progressive de la contrainte sur plusieurs siècles, objecterait que la discipline foucaldienne, plus institutionnelle et délibérée, ne rend pas compte de ce lent travail psychique.",
      "Le tableau, très sombre, laisse peu de place aux résistances et aux détournements que les enquêtes de terrain documentent pourtant à l'intérieur même des institutions disciplinaires.",
      "Certains historiens contestent la netteté de la rupture que Foucault dresse entre l'âge du supplice et l'âge de la discipline, plus progressive et plus poreuse qu'il ne le suggère.",
    ],
    evolution: [
      { p: 'XVIIᵉ–XVIIIᵉ s.', f: "Les monastères et les armées développent les premières techniques disciplinaires abouties." },
      { p: '1975', f: "Surveiller et punir généralise le concept à l'école, à l'usine et à l'hôpital." },
    ],
  },
  'surveillance': {
    detaille: [
      "La surveillance est le mécanisme d'observation continue, souvent asymétrique, qui rend la discipline efficace sans avoir besoin de recourir à la force : il suffit que chacun se sache — ou puisse se croire — observé pour ajuster spontanément sa conduite.",
      "Foucault en distingue plusieurs formes, de la surveillance hiérarchique directe — le contremaître qui observe l'atelier — à des dispositifs plus subtils, comme l'architecture elle-même, conçue pour rendre visible sans effort ce qui, ailleurs, exigerait une présence constante.",
      "Son efficacité tient à son économie : bien menée, la surveillance coûte moins cher que la répression, et finit par se passer presque entièrement de surveillants, chacun devenant le gardien de sa propre conduite.",
    ],
    origine: {
      oeuvre: 'Surveiller et punir',
      annee: '1975',
      contexte:
        "Foucault documente la généralisation, au XVIIIᵉ siècle, de dispositifs de surveillance dans les écoles, les hôpitaux et les casernes, bien avant que la prison n'en devienne le symbole le plus achevé.",
    },
    exemples: [
      "Un open space dont l'agencement permet à un responsable de voir tous les postes de travail d'un seul regard.",
      "Un carnet de correspondance scolaire qui rend visible aux parents, à distance, la conduite quotidienne d'un élève.",
    ],
    oeuvres: [
      { y: '1975', t: 'Surveiller et punir' },
    ],
    associes: ['discipline', 'panoptisme'],
    opposes: ['territoires-du-soi'],
    critiques: [
      "Goffman objecterait qu'aucune surveillance, même la plus systématique, n'élimine entièrement les territoires du soi que les individus continuent de défendre, même dans les institutions les plus contrôlées.",
      "Le concept, pensé pour des dispositifs architecturaux fixes, se transpose de façon parfois trop directe à la surveillance numérique contemporaine, dont les mécanismes techniques diffèrent sensiblement.",
      "Il dit peu de ce qui arrive quand la surveillance est découverte comme un leurre, et cesse alors de produire l'effet disciplinaire escompté.",
    ],
    evolution: [
      { p: 'XVIIIᵉ s.', f: "Les premiers dispositifs de surveillance hiérarchique se généralisent dans les institutions disciplinaires." },
      { p: '1975', f: "Surveiller et punir en fait l'un des trois grands instruments du pouvoir disciplinaire, avec la sanction normalisatrice et l'examen." },
      { p: '1990–2020', f: "Les technologies numériques relancent le débat sur une surveillance devenue continue, dispersée et largement volontaire." },
    ],
  },
  'panoptisme': {
    detaille: [
      "Le panoptisme est le principe que Foucault tire du Panoptique imaginé par Bentham : une architecture où un gardien central peut voir chaque cellule sans jamais être vu lui-même, si bien que chaque détenu, ignorant s'il est observé à cet instant précis, finit par se conduire comme s'il l'était toujours.",
      "Ce qui intéresse Foucault n'est pas le bâtiment lui-même, réalisé nulle part à l'identique, mais le principe qu'il incarne : un pouvoir qui n'a plus besoin de s'exercer effectivement pour produire ses effets, la seule possibilité d'être vu suffisant à discipliner.",
      "Foucault généralise ce principe bien au-delà de la prison : il y voit un diagramme du pouvoir moderne lui-même, à l'œuvre dans l'école, l'usine, l'hôpital — partout où la visibilité organisée tient lieu de contrainte permanente.",
    ],
    origine: {
      oeuvre: 'Surveiller et punir',
      annee: '1975',
      contexte:
        "Foucault reprend le projet architectural de Jeremy Bentham, conçu à la fin du XVIIIᵉ siècle pour les prisons mais aussi les usines et les écoles, et en fait le symbole théorique de toute une technologie du pouvoir.",
    },
    exemples: [
      "Une caméra factice, aussi dissuasive qu'une vraie, parce que personne ne peut savoir si elle fonctionne réellement.",
      "Un open space où la simple possibilité qu'un supérieur passe à tout moment suffit à maintenir chacun à son poste.",
    ],
    oeuvres: [
      { y: '1975', t: 'Surveiller et punir' },
    ],
    associes: ['surveillance', 'discipline'],
    opposes: ['institution-totale'],
    critiques: [
      "Goffman, dont l'institution totale reste circonscrite à des lieux fermés et bien délimités, objecterait que le panoptisme, en se généralisant à toute la société, perd en précision descriptive ce qu'il gagne en portée théorique.",
      "Le Panoptique de Bentham n'a presque jamais été construit tel quel : le principe reste, chez Foucault, plus théorique qu'attesté dans son application littérale.",
      "Le concept dit peu de ce qui se passe quand les surveillés savent pertinemment qu'ils ne sont pas observés, et agissent alors en conséquence sans que le mécanisme perde toute efficacité.",
    ],
    evolution: [
      { p: '1791', f: "Bentham conçoit le Panoptique comme un modèle architectural applicable aux prisons, aux usines et aux écoles." },
      { p: '1975', f: "Foucault en fait le diagramme théorique du pouvoir disciplinaire moderne." },
      { p: '1975', f: "Surveiller et punir consacre un chapitre entier, « Le panoptisme », à sa généralisation hors de la seule prison." },
    ],
  },
  'biopouvoir': {
    detaille: [
      "Le biopouvoir désigne, pour Foucault, une mutation historique majeure dans la nature même du pouvoir politique : d'un pouvoir souverain qui se définissait par le droit de « faire mourir ou laisser vivre », on passe à un pouvoir qui prend en charge la vie elle-même, selon la formule inverse « faire vivre et laisser mourir ».",
      "Ce nouveau pouvoir ne s'exerce plus seulement par la menace de la mort, mais par la gestion positive de la vie — sa santé, sa longévité, sa reproduction — devenue, à partir du XVIIIᵉ siècle, un objet politique à part entière.",
      "Foucault en distingue deux pôles complémentaires : l'anatomo-politique du corps individuel, qui relève de la discipline, et la biopolitique des populations, qui gère la vie collective à l'échelle statistique — les deux ensemble formant le biopouvoir.",
    ],
    origine: {
      oeuvre: 'La Volonté de savoir',
      annee: '1976',
      contexte:
        "Foucault y clôt son histoire de la sexualité par une thèse plus large sur la transformation du pouvoir occidental, qu'il développera ensuite dans ses cours au Collège de France sur la biopolitique et la gouvernementalité.",
    },
    exemples: [
      "Une campagne de vaccination obligatoire, qui gère la vie collective plutôt que de sanctionner une désobéissance individuelle.",
      "Un indicateur d'espérance de vie nationale, devenu un objet de politique publique à part entière, indépendamment de tout individu précis.",
    ],
    oeuvres: [
      { y: '1976', t: 'La Volonté de savoir' },
      { y: '1997', t: "« Il faut défendre la société » (cours 1975-1976)" },
    ],
    associes: ['biopolitique', 'gouvernementalite'],
    opposes: ['domination-legitime'],
    critiques: [
      "Weber, dont la typologie de la domination reste centrée sur la question de l'obéissance légitime, objecterait qu'un pouvoir qui gère la vie déplace la question politique classique sans vraiment y répondre.",
      "Le récit d'une rupture nette entre pouvoir souverain et biopouvoir a été critiqué comme trop tranché : le souverain classique se souciait déjà, au moins partiellement, de la prospérité de ses sujets.",
      "Des critiques féministes objectent que la notion, très générale, dit peu des inégalités de genre dans la manière dont la vie reproductive elle-même est prise en charge par le pouvoir.",
    ],
    evolution: [
      { p: 'XVIIIᵉ s.', f: "Les premières politiques de santé publique et de démographie annoncent le biopouvoir, selon Foucault." },
      { p: '1976', f: "La Volonté de savoir formule le concept et sa formule inversée, « faire vivre et laisser mourir »." },
      { p: '1975–1976', f: "Le cours « Il faut défendre la société » en approfondit l'articulation avec le racisme d'État." },
    ],
  },
  'biopolitique': {
    detaille: [
      "La biopolitique est le versant du biopouvoir qui prend la population, et non plus l'individu isolé, comme objet de gouvernement : natalité, mortalité, santé publique, longévité deviennent des variables à connaître, mesurer et gérer à l'échelle collective.",
      "Elle suppose des instruments spécifiques — statistiques démographiques, enquêtes épidémiologiques, dispositifs d'assurance — qui rendent visible et gouvernable une réalité, la population, que la seule addition des individus ne suffirait pas à décrire.",
      "Foucault y voit une rationalité politique à part entière, distincte du droit et de la discipline : elle ne dit pas ce qui est permis ou interdit, elle optimise un état de fait — le taux de natalité, l'espérance de vie — au nom du bien-être collectif.",
    ],
    origine: {
      oeuvre: 'Naissance de la biopolitique',
      annee: '1979',
      contexte:
        "Foucault développe ce concept dans ses cours au Collège de France, en étudiant notamment le libéralisme et l'ordolibéralisme allemand comme rationalités politiques centrées sur la gestion de la population.",
    },
    exemples: [
      "Une politique de santé publique qui vise le taux de mortalité infantile d'un pays, sans traiter aucun nourrisson en particulier.",
      "Un système d'assurance sociale qui répartit statistiquement un risque, sans jamais viser un assuré précis pris isolément.",
    ],
    oeuvres: [
      { y: '1976', t: 'La Volonté de savoir' },
      { y: '2004', t: 'Naissance de la biopolitique (cours 1978-1979)' },
    ],
    associes: ['biopouvoir', 'gouvernementalite'],
    opposes: ['systeme-social'],
    critiques: [
      "Parsons objecterait qu'une gestion strictement statistique de la population ne suffit pas à expliquer l'intégration normative que suppose tout système social durable.",
      "Le concept, développé surtout à partir de l'Europe des XIXᵉ et XXᵉ siècles, se transpose difficilement à des sociétés dont l'appareil statistique d'État est resté peu développé.",
      "Il dit peu des résistances collectives à la biopolitique, que les mouvements de santé publique contemporains rendent pourtant très visibles.",
    ],
    evolution: [
      { p: 'XVIIIᵉ s.', f: "Les premières statistiques démographiques nationales rendent la population visible comme objet de gouvernement." },
      { p: '1976', f: "La Volonté de savoir introduit la notion de biopolitique au sein du biopouvoir." },
      { p: '1978–1979', f: "Naissance de la biopolitique en étudie l'articulation avec le libéralisme économique." },
    ],
  },
  'gouvernementalite': {
    detaille: [
      "La gouvernementalité est l'art de conduire la conduite des autres — gouverner une population par le calcul, l'anticipation et la sécurité, plutôt que par le seul commandement souverain qui ordonne et sanctionne.",
      "Foucault en fait un processus historique précis : le moment où l'État occidental, à partir du XVIIIᵉ siècle, prend pour objet non plus seulement son territoire ou ses sujets, mais une population dont il faut connaître et gérer les régularités propres — économiques, démographiques, sanitaires.",
      "Cette rationalité de gouvernement se distingue nettement de la souveraineté classique et de la discipline : elle ne dit pas ce qu'il faut faire dans le détail, elle organise les conditions — sécurité, circulation, incitation — dans lesquelles les individus, laissés libres d'agir, se conduiront d'une manière prévisible et désirée.",
    ],
    origine: {
      oeuvre: 'Sécurité, territoire, population',
      annee: '1978',
      contexte:
        "Foucault développe ce concept dans ses cours au Collège de France de 1977-1978, en retraçant l'émergence, à partir du XVIᵉ siècle, d'un art de gouverner distinct à la fois de la souveraineté médiévale et de la discipline étudiée dans Surveiller et punir.",
    },
    exemples: [
      "Une campagne de prévention qui vise à faire adopter un comportement plutôt qu'à l'imposer par la contrainte.",
      "Un aménagement urbain pensé pour orienter les flux de circulation plutôt que pour les interdire par un règlement strict.",
    ],
    oeuvres: [
      { y: '2004', t: 'Sécurité, territoire, population (cours 1977-1978)' },
      { y: '2004', t: 'Naissance de la biopolitique (cours 1978-1979)' },
    ],
    associes: ['biopolitique', 'dispositif'],
    opposes: ['individualisme-methodologique'],
    critiques: [
      "Boudon objecterait qu'une rationalité de gouvernement aussi englobante laisse peu de place à la reconstruction des raisons précises que chaque acteur a de se conduire ainsi.",
      "Le concept, très large, en vient parfois à désigner presque toute forme d'action publique, ce qui affaiblit sa capacité à isoler ce qui est proprement moderne dans la gouvernementalité.",
      "Certains lecteurs objectent que la notion, développée dans des cours oraux publiés à titre posthume, reste moins stabilisée que les concepts formulés dans les livres achevés de Foucault.",
    ],
    evolution: [
      { p: 'XVIᵉ s.', f: "Les traités de gouvernement et de raison d'État posent les premiers jalons d'une pensée du gouvernement distincte de la souveraineté." },
      { p: '1977–1978', f: "Foucault formule la gouvernementalité dans son cours Sécurité, territoire, population." },
      { p: '1978–1979', f: "Naissance de la biopolitique en prolonge l'analyse jusqu'au libéralisme contemporain." },
    ],
  },
  'normalisation': {
    detaille: [
      "La normalisation est une technique de pouvoir qui compare, mesure, classe et hiérarchise les individus selon une norme, là où le droit classique se contente de dire ce qui est permis ou interdit sans jamais graduer entre les deux.",
      "Elle opère par un jugement continu plutôt que par une sanction ponctuelle : chaque conduite est rapportée à une moyenne, un écart-type, un rang, ce qui permet de repérer et de corriger l'anomalie bien avant qu'elle ne devienne une infraction au sens juridique.",
      "Cette logique normalisatrice ne se contente pas d'exclure ceux qui s'écartent trop de la norme : elle produit aussi, en creux, l'individu normal lui-même, dont l'existence suppose la mesure constante de tous les autres.",
    ],
    origine: {
      oeuvre: 'Surveiller et punir',
      annee: '1975',
      contexte:
        "Foucault y montre comment l'examen scolaire, l'inspection militaire ou le contrôle médical instaurent, aux côtés du droit, un pouvoir normalisateur qui juge en termes de conformité à une norme plutôt qu'en termes de légalité.",
    },
    exemples: [
      "Une notation scolaire qui classe chaque élève par rapport à la moyenne, indépendamment de toute règle qu'il aurait enfreinte.",
      "Une courbe de croissance qui situe un enfant par rapport à une norme statistique, sans qu'aucune loi n'ait jamais fixé cette norme comme obligatoire.",
    ],
    oeuvres: [
      { y: '1975', t: 'Surveiller et punir' },
    ],
    associes: ['discipline', 'assujettissement'],
    opposes: ['meritocratie'],
    critiques: [
      "Boudon objecterait qu'un classement selon une norme n'est pas nécessairement un mécanisme de pouvoir insidieux : il peut aussi servir une compétition ouverte et légitime entre des acteurs consentants.",
      "Le concept, en insistant sur la fonction de contrôle du classement, dit peu de son utilité informative réelle, que les individus classés peuvent eux-mêmes revendiquer.",
      "Canguilhem, dont Foucault reprend la distinction du normal et du pathologique, insistait davantage sur la normativité propre du vivant, que la seule normalisation sociale ne suffit pas à épuiser.",
    ],
    evolution: [
      { p: '1943', f: "Canguilhem distingue le normal et le pathologique dans Le Normal et le Pathologique, matrice du concept." },
      { p: '1975', f: "Surveiller et punir en fait l'un des trois grands instruments du pouvoir disciplinaire, avec la surveillance hiérarchique et l'examen." },
    ],
  },
  'dispositif': {
    detaille: [
      "Un dispositif est, chez Foucault, un ensemble résolument hétérogène — discours, institutions, lois, arrangements architecturaux, mesures administratives, énoncés scientifiques — organisé pour répondre à une urgence historique donnée, à un moment précis.",
      "Ce qui définit un dispositif n'est pas la nature de ses éléments, très divers, mais le réseau de relations qui peut s'établir entre eux : un même bâtiment, une même loi peuvent appartenir à des dispositifs différents selon la fonction stratégique qu'ils y remplissent.",
      "Un dispositif n'est jamais figé : il se transforme, se recompose, change de fonction dominante au fil du temps, sans qu'aucun de ses éléments d'origine ne soit nécessairement resté à sa place initiale.",
    ],
    origine: {
      oeuvre: 'La Volonté de savoir',
      annee: '1976',
      contexte:
        "Foucault y étudie le « dispositif de sexualité » — discours médicaux, aveu, pédagogie, démographie — pour montrer comment un ensemble hétérogène d'éléments a construit, plus qu'il ne l'a simplement réprimée, la sexualité moderne comme objet de savoir et de pouvoir.",
    },
    exemples: [
      "L'ensemble des lois, des campagnes, des tests et des services qui composent la lutte contre une épidémie, bien au-delà du seul vaccin.",
      "Un dispositif scolaire qui articule bâtiments, emplois du temps, examens et discours pédagogiques en un ensemble cohérent, sans qu'aucun de ces éléments n'ait été pensé seul.",
    ],
    oeuvres: [
      { y: '1976', t: 'La Volonté de savoir' },
      { y: '1977', t: 'Le Jeu de Michel Foucault (entretien)' },
    ],
    associes: ['savoir-pouvoir', 'biopouvoir'],
    opposes: ['configuration'],
    critiques: [
      "Elias, dont la configuration relie des personnes en interdépendance, objecterait qu'un dispositif, en mêlant discours, lois et bâtiments à des individus, brouille la distinction entre relations humaines et éléments matériels ou institutionnels.",
      "Le concept, très ouvert, risque de désigner presque n'importe quel ensemble d'éléments reliés par une fonction commune, ce qui le rend difficile à circonscrire précisément.",
      "Il dit peu de qui, concrètement, décide d'assembler ainsi des éléments hétérogènes en un dispositif cohérent, et selon quels intérêts.",
    ],
    evolution: [
      { p: '1975–1977', f: "Foucault précise la notion de dispositif dans des entretiens, en complément de Surveiller et punir." },
      { p: '1976', f: "La Volonté de savoir en donne l'application la plus développée, avec le dispositif de sexualité." },
      { p: '1990–2010', f: "Le concept se diffuse largement en sciences sociales pour analyser des ensembles techniques et institutionnels complexes." },
    ],
  },
  'savoir-pouvoir': {
    detaille: [
      "Le couple savoir-pouvoir désigne la thèse selon laquelle connaissance et pouvoir ne s'opposent jamais totalement : loin qu'un savoir pur puisse exister indépendamment de tout rapport de force, le pouvoir produit du savoir, et tout savoir porte en lui des effets de pouvoir.",
      "Foucault s'oppose ainsi à une image répandue du savoir comme vérité neutre, menacée ou faussée par le pouvoir qui l'instrumentaliserait de l'extérieur : pour lui, il n'y a pas de relation de pouvoir sans constitution corrélative d'un champ de savoir, ni de savoir qui ne présuppose des relations de pouvoir.",
      "Cette thèse déplace le rôle même de l'expert : psychiatre, médecin, pédagogue ne se contentent pas de décrire une réalité déjà là, ils participent, par leur savoir même, à constituer les catégories — le fou, le malade, le délinquant — sur lesquelles s'exerce ensuite le pouvoir.",
    ],
    origine: {
      oeuvre: 'Surveiller et punir',
      annee: '1975',
      contexte:
        "Foucault y montre comment la naissance de la prison moderne s'accompagne de la naissance de sciences humaines nouvelles — criminologie, psychologie — qui ne décrivent pas simplement le délinquant, mais contribuent à le produire comme objet de savoir.",
    },
    exemples: [
      "Un diagnostic médical qui, en nommant une pathologie, autorise aussitôt toute une série d'interventions sur celui qui la porte.",
      "Un test psychologique qui, en mesurant une aptitude, contribue lui-même à définir ce que cette aptitude signifie socialement.",
    ],
    oeuvres: [
      { y: '1975', t: 'Surveiller et punir' },
      { y: '1976', t: 'La Volonté de savoir' },
    ],
    associes: ['dispositif', 'relations-de-pouvoir'],
    opposes: ['ideal-type'],
    critiques: [
      "Weber, dont l'idéal-type suppose une neutralité axiologique du chercheur au moins méthodologiquement possible, objecterait qu'une science entièrement dissoute dans le pouvoir perd toute prétention à la connaissance objective.",
      "Le concept, poussé à l'extrême, semble rendre impossible toute distinction entre un savoir mieux établi et un savoir moins fondé, puisque les deux seraient également traversés par le pouvoir.",
      "Des critiques objectent que Foucault lui-même, en écrivant sur le pouvoir, produit un savoir qui échapperait alors difficilement à sa propre thèse.",
    ],
    evolution: [
      { p: '1963', f: "Naissance de la clinique esquisse déjà le lien entre regard médical et pouvoir institutionnel." },
      { p: '1975', f: "Surveiller et punir formule explicitement le couple savoir-pouvoir." },
      { p: '1976', f: "La Volonté de savoir l'applique au discours scientifique sur la sexualité." },
    ],
  },
  'subjectivation': {
    detaille: [
      "La subjectivation est le processus par lequel un individu se constitue lui-même comme sujet moral, à travers des pratiques de soi choisies plutôt qu'imposées de l'extérieur — la dimension la plus tardive et la moins connue de l'œuvre de Foucault.",
      "Elle suppose une marge d'invention : le sujet ne se contente pas de recevoir passivement une identité que le pouvoir lui assignerait, il travaille activement sur lui-même, selon des techniques héritées — souvent de l'Antiquité grecque et romaine — mais réappropriées et réinterprétées.",
      "Foucault y trouve, tard dans son œuvre, une possibilité de résistance et de liberté qu'il n'avait pas également mise en avant dans ses analyses antérieures du pouvoir disciplinaire : le rapport à soi comme espace, sinon extérieur au pouvoir, du moins irréductible à sa seule contrainte.",
    ],
    origine: {
      oeuvre: "L'Usage des plaisirs",
      annee: '1984',
      contexte:
        "Foucault opère, dans le deuxième tome de l'Histoire de la sexualité, un déplacement méthodologique vers l'éthique antique, pour étudier comment les Grecs et les Romains constituaient leur propre conduite en objet de souci et de travail personnel.",
    },
    exemples: [
      "Une personne qui tient un journal intime pour mieux se comprendre et orienter sa propre conduite.",
      "Un athlète qui suit un régime d'entraînement librement choisi pour se façonner selon un idéal qu'il s'est lui-même fixé.",
    ],
    oeuvres: [
      { y: '1984', t: "L'Usage des plaisirs" },
      { y: '1984', t: 'Le Souci de soi' },
    ],
    associes: ['technologies-de-soi', 'agentivite'],
    opposes: ['assujettissement'],
    critiques: [
      "Certains commentateurs objectent une rupture difficile à concilier avec l'œuvre antérieure : comment le même auteur qui insistait sur des corps entièrement dressés en vient-il à parler d'un sujet capable de se façonner librement ?",
      "Le tournant vers l'Antiquité grecque et romaine a été critiqué comme une évasion esthétisante, loin des analyses institutionnelles plus mordantes de Surveiller et punir.",
      "Le concept dit peu des inégalités d'accès à ces pratiques de soi, réservées dans l'Antiquité à une minorité d'hommes libres et cultivés.",
    ],
    evolution: [
      { p: '1975–1976', f: "Les analyses du pouvoir disciplinaire et du biopouvoir insistent surtout sur l'assujettissement du sujet." },
      { p: '1980–1984', f: "Foucault opère un tournant vers l'éthique de soi dans l'Antiquité grecque et romaine." },
      { p: '1984', f: "L'Usage des plaisirs et Le Souci de soi formulent pleinement la subjectivation comme pratique de liberté." },
    ],
  },
  'assujettissement': {
    detaille: [
      "L'assujettissement est le double mouvement, indissociable, par lequel le pouvoir soumet un individu tout en le constituant, dans le même geste, comme sujet doté d'une identité, d'une intériorité et d'une histoire personnelle à surveiller.",
      "Foucault joue ici sur le double sens du mot français : être assujetti, c'est être soumis à un pouvoir — mais c'est aussi, littéralement, devenir un sujet, acquérir cette forme d'existence individualisée sur laquelle le pouvoir moderne prend justement prise.",
      "Ce mécanisme explique pourquoi le pouvoir disciplinaire ne se contente jamais de réprimer de l'extérieur un sujet déjà formé : il produit lui-même, par ses techniques d'examen et d'individualisation, le sujet précis sur lequel il s'exerce ensuite.",
    ],
    origine: {
      oeuvre: 'Surveiller et punir',
      annee: '1975',
      contexte:
        "Foucault y montre que l'examen disciplinaire — scolaire, militaire, médical — ne se contente pas d'évaluer un individu déjà là : il l'individualise, le documente, le transforme en cas, en dossier, en identité désormais surveillable.",
    },
    exemples: [
      "Un dossier scolaire qui, en évaluant un élève, lui attribue du même coup une identité — « bon élève », « en difficulté » — qu'il devra désormais porter.",
      "Un diagnostic psychiatrique qui, en nommant un trouble, façonne aussi la manière dont la personne concernée en vient à se percevoir elle-même.",
    ],
    oeuvres: [
      { y: '1975', t: 'Surveiller et punir' },
      { y: '1976', t: 'La Volonté de savoir' },
    ],
    associes: ['normalisation', 'discipline'],
    opposes: ['subjectivation'],
    critiques: [
      "Le concept peine à expliquer comment un sujet ainsi constitué par le pouvoir peut malgré tout, comme Foucault le montrera plus tard, se réapproprier une marge de subjectivation autonome.",
      "Bourdieu objecterait qu'un mécanisme aussi général risque de sous-estimer les différences de degré entre assujettissements légers et dominations lourdes, également dissoutes dans le même concept.",
      "Il dit peu des cas où l'individualisation par le pouvoir échoue franchement à produire l'identité attendue.",
    ],
    evolution: [
      { p: '1975', f: "Surveiller et punir formule l'assujettissement à travers l'examen disciplinaire." },
      { p: '1980–1984', f: "Foucault reviendra sur cette notion pour la faire dialoguer avec la subjectivation, plus tardive." },
    ],
  },
  'technologies-de-soi': {
    detaille: [
      "Les technologies de soi sont les pratiques concrètes — examen de conscience, écriture, exercices, régimes de vie — par lesquelles un individu travaille sur lui-même, seul ou guidé, pour transformer son corps, son âme, ses pensées et sa conduite vers un état choisi.",
      "Foucault les distingue des technologies de pouvoir, qui déterminent la conduite des individus de l'extérieur : les technologies de soi supposent au contraire un travail actif de l'individu sur lui-même, même lorsqu'il s'inscrit dans une tradition ou sous la conduite d'un maître.",
      "Il les retrouve principalement dans l'Antiquité gréco-romaine, où le souci de soi précédait et conditionnait le souci des autres, avant qu'une tradition chrétienne puis moderne ne les réoriente vers le déchiffrement d'une vérité intérieure cachée, à confesser plutôt qu'à cultiver.",
    ],
    origine: {
      oeuvre: 'Le Souci de soi',
      annee: '1984',
      contexte:
        "Foucault développe ce concept dans le troisième tome de l'Histoire de la sexualité et dans des séminaires donnés aux États-Unis, en étudiant les exercices philosophiques stoïciens et épicuriens comme des techniques concrètes de transformation de soi.",
    },
    exemples: [
      "Un exercice de méditation quotidien suivi non pour obéir à une règle, mais pour se façonner soi-même.",
      "Un carnet de bord tenu chaque soir pour examiner ses propres actions de la journée et en tirer des résolutions pour le lendemain.",
    ],
    oeuvres: [
      { y: '1984', t: 'Le Souci de soi' },
      { y: '1988', t: 'Technologies of the Self (séminaire)' },
    ],
    associes: ['subjectivation', 'gouvernementalite'],
    opposes: ['institution-totale'],
    critiques: [
      "Goffman objecterait que l'institution totale, par sa mainmise sur l'ensemble de l'existence, réduit à presque rien la marge que suppose toute véritable technologie de soi.",
      "Le tournant vers l'Antiquité a été jugé par certains commentateurs trop optimiste sur la possibilité, dans les sociétés modernes très administrées, de retrouver un espace de travail sur soi réellement autonome.",
      "Le concept dit peu des technologies de soi les moins choisies, imposées sous couvert de développement personnel par des institutions qui y trouvent leur propre intérêt.",
    ],
    evolution: [
      { p: 'Antiquité grecque et romaine', f: "Les exercices stoïciens et épicuriens développent des techniques concrètes de transformation de soi." },
      { p: '1982', f: "Foucault expose la notion dans un séminaire à l'université du Vermont." },
      { p: '1984', f: "Le Souci de soi en donne le traitement le plus développé, à travers l'éthique gréco-romaine." },
    ],
  },
};
