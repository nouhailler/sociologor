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
    associes: ['rationalisation', 'industrie-culturelle', 'alienation', 'rationalite-instrumentale'],
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
};
