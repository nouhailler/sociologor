/**
 * Pratiques sociales : ce que les individus font concrètement — consommer,
 * voter, lire, se déplacer — plutôt que les structures qui les entourent.
 * Chaque pratique varie selon une chaîne de facteurs déjà décrits ailleurs
 * dans l'application : classe sociale, genre, âge, territoire, capital
 * culturel, habitus, socialisation. `variablesSociales` fait vivre cette
 * chaîne au cas par cas — seuls les facteurs qui jouent vraiment pour cette
 * pratique précise, jamais les sept mécaniquement à chaque fois.
 *
 * Distincte de `phenomenes.js` : un phénomène (Chômage, Abstention
 * électorale…) regarde un fait social agrégé, souvent problématique ;
 * `pratiques.js` regarde le geste lui-même, au niveau de la personne qui
 * vote, lit ou pratique un sport — le même terrain, un autre angle.
 *
 * `fondamentaux` (ids de fondamentaux.js) et `concepts` (ids de
 * concepts.js) ne doivent jamais être vides. `groupesSociaux` (ids de
 * groupes-sociaux.js, optionnel) rend cliquable l'étape « classe sociale »
 * ou « génération » de la chaîne quand elle est pertinente. `auteurs`/
 * `inspirateurs` suivent la convention de `methodes.js` : l'un des deux
 * toujours renseigné. `domaine` (id de domains.js) est optionnel.
 */

/** Catégories d'affichage, dans l'ordre de la liste. */
export const CATEGORIES_PRATIQUES = [
  {
    id: 'quotidien-et-consommation',
    t: 'Quotidien et consommation',
    d: 'Les gestes répétés du quotidien — acheter, manger, se déplacer.',
  },
  {
    id: 'culture-et-loisirs',
    t: 'Culture et loisirs',
    d: 'Ce qui se lit, se regarde, se pratique une fois le travail fini.',
  },
  {
    id: 'numerique-et-sociabilite',
    t: 'Numérique et sociabilité',
    d: "Se relier aux autres, en ligne et en personne.",
  },
  {
    id: 'croyance-et-travail',
    t: 'Croyance et travail',
    d: 'Ce à quoi on croit, et ce pour quoi on travaille.',
  },
  {
    id: 'famille-et-education',
    t: 'Famille et éducation',
    d: "Fonder un foyer, et y transmettre une manière d'être.",
  },
  {
    id: 'politique-et-engagement',
    t: 'Politique et engagement',
    d: "Participer à la vie collective, ou s'en tenir à l'écart.",
  },
];

export const PRATIQUES = [
  /* — Quotidien et consommation — */
  {
    id: 'consommation',
    t: 'Consommation',
    categorie: 'quotidien-et-consommation',
    d: "Acheter n'est jamais un geste purement économique : cela affiche, souvent sans le vouloir, une position sociale.",
    detail:
      "Choisir une marque, un quartier commerçant ou un mode de paiement relève autant du budget disponible que d'un rapport appris à ce qui « se fait » ou ne se fait pas. La consommation dit toujours quelque chose de qui achète, au-delà du seul objet acheté.",
    variablesSociales:
      "Bourdieu montre que le goût — pour un plat, un vêtement, un intérieur — n'est jamais un jugement individuel neutre : il reproduit un capital culturel et une position de classe, chacun consommant ce qui correspond à ce que son habitus lui rend spontanément désirable. Le même budget, selon le milieu, ne s'investit pas dans les mêmes biens : là où les classes populaires valorisent le concret et l'utile, les classes favorisées affichent une distance esthétique qui, elle aussi, coûte cher.",
    fondamentaux: ['identite-sociale', 'position-sociale'],
    concepts: ['habitus', 'capital-culturel', 'distinction'],
    groupesSociaux: ['classe-sociale'],
    auteurs: ['bourdieu'],
    inspirateurs: [],
    domaine: 'consommation',
  },
  {
    id: 'pratiques-alimentaires',
    t: 'Pratiques alimentaires',
    categorie: 'quotidien-et-consommation',
    d: "Manger obéit à des règles sociales aussi strictes que discrètes, bien avant d'obéir à la seule faim.",
    detail:
      "Composition des repas, horaires, ordre des plats, ce qui se mange ensemble ou séparément : chaque société, et chaque milieu à l'intérieur d'une même société, transforme un besoin biologique en un ensemble de conventions apprises dès l'enfance.",
    variablesSociales:
      "Bourdieu relève que le rapport à la nourriture distingue nettement les classes populaires, attachées à l'abondance et à la simplicité, des classes favorisées, qui valorisent la présentation et la rareté — une opposition de goût qui recoupe presque exactement la position sociale. Claude Fischler ajoute que ce rapport se transmet par la table familiale bien avant l'école : la socialisation alimentaire précoce façonne un habitus du goût si profond qu'il se vit ensuite comme une préférence purement personnelle.",
    fondamentaux: ['socialisation', 'position-sociale'],
    concepts: ['habitus', 'capital-culturel'],
    groupesSociaux: ['classe-sociale'],
    auteurs: ['bourdieu'],
    inspirateurs: ["Claude Fischler — L'Homnivore (1990), la table familiale comme premier lieu de la socialisation alimentaire"],
    domaine: 'sante',
  },
  {
    id: 'mobilite-quotidienne',
    t: 'Mobilité quotidienne',
    categorie: 'quotidien-et-consommation',
    d: "Se déplacer chaque jour n'est pas qu'une contrainte logistique : cela dessine, en creux, une carte des inégalités de territoire et de position.",
    detail:
      "Le temps de trajet domicile-travail, le choix du mode de transport et la distance parcourue varient fortement selon le lieu de résidence, souvent contraint par le prix du logement plus que par une préférence libre.",
    variablesSociales:
      "Jean-Yves Kaufmann introduit la notion de motilité pour désigner l'aptitude inégale à être mobile — un capital à part entière, distinct du seul revenu, que certains territoires et certains statuts sociaux permettent d'exercer bien plus que d'autres. Les classes populaires reléguées loin des centres subissent des trajets plus longs et plus contraints ; les classes favorisées, elles, peuvent souvent choisir de rapprocher leur logement de leur travail — la mobilité quotidienne devient alors un marqueur supplémentaire de position sociale et de territoire.",
    fondamentaux: ['position-sociale', 'exclusion'],
    concepts: ['capital-economique'],
    groupesSociaux: ['classe-sociale'],
    auteurs: [],
    inspirateurs: ['Jean-Yves Kaufmann — la motilité, l’aptitude inégale à être mobile (2004)'],
    domaine: 'mobilites',
  },

  /* — Culture et loisirs — */
  {
    id: 'lecture',
    t: 'Lecture',
    categorie: 'culture-et-loisirs',
    d: "Lire n'est jamais également réparti : le nombre de livres lus, mais surtout leur genre, reste un marqueur social très net.",
    detail:
      "Bandes dessinées, littérature classique, essais, romans de gare : la pratique de la lecture se divise moins entre lecteurs et non-lecteurs qu'entre des manières très différentes de lire, hiérarchisées socialement.",
    variablesSociales:
      "Bourdieu montre que la fréquentation de la littérature dite légitime — celle que l'école valorise — suit de très près le capital culturel hérité en famille, bien avant tout effort scolaire individuel. Le goût de lecture se transmet par imprégnation, dans les rayonnages du foyer d'origine, ce qui explique pourquoi deux élèves aussi appliqués l'un que l'autre n'abordent pas l'école avec les mêmes armes.",
    fondamentaux: ['socialisation', 'reproduction-sociale'],
    concepts: ['capital-culturel', 'legitimite-culturelle'],
    groupesSociaux: [],
    auteurs: ['bourdieu'],
    inspirateurs: [],
    domaine: 'culture',
  },
  {
    id: 'pratiques-culturelles',
    t: 'Pratiques culturelles',
    categorie: 'culture-et-loisirs',
    d: "Aller au musée, au concert ou au cinéma classe autant celui qui y va que l'œuvre elle-même.",
    detail:
      "Fréquenter tel lieu culturel plutôt qu'un autre, apprécier tel genre plutôt qu'un autre : la pratique culturelle fonctionne comme un signe de reconnaissance entre personnes de milieux comparables, souvent sans que personne n'en ait pleinement conscience.",
    variablesSociales:
      "Dans *La Distinction* (1979), Bourdieu montre que le goût culturel — pour la musique savante plutôt que la variété, l'art abstrait plutôt que figuratif — recoupe presque parfaitement la position sociale : les catégories les plus dotées en capital culturel et économique s'approprient les pratiques les plus légitimes, et affichent ce goût comme s'il relevait d'une sensibilité purement personnelle plutôt que d'un habitus de classe. Le territoire pèse aussi : l'offre culturelle elle-même est très inégalement répartie entre grandes villes et zones rurales.",
    fondamentaux: ['identite-sociale', 'position-sociale'],
    concepts: ['habitus', 'distinction', 'capital-culturel'],
    groupesSociaux: ['classe-sociale'],
    auteurs: ['bourdieu'],
    inspirateurs: [],
    domaine: 'culture',
  },
  {
    id: 'pratiques-sportives',
    t: 'Pratiques sportives',
    categorie: 'culture-et-loisirs',
    d: "Le sport pratiqué n'est jamais neutre : chaque discipline porte, socialement, un public et un prestige différents.",
    detail:
      "Football, golf, course à pied, arts martiaux : au-delà du seul effort physique, chaque sport véhicule un rapport au corps, à la compétition et à la distinction qui varie fortement d'un milieu social à l'autre.",
    variablesSociales:
      "Bourdieu montre, dans *Comment peut-on être sportif ?*, que le choix d'une discipline suit le même principe que les autres goûts culturels : les sports les plus coûteux ou les plus distinctifs — golf, tennis, équitation — restent concentrés dans les classes favorisées, tandis que les sports collectifs et peu coûteux dominent dans les classes populaires. Norbert Elias ajoute une lecture historique : le sport moderne naît d'une « civilisation des mœurs » qui canalise la violence physique dans des règles codifiées, un contrôle des pulsions inégalement intériorisé selon l'éducation reçue.",
    fondamentaux: ['socialisation', 'position-sociale'],
    concepts: ['habitus', 'distinction', 'interdependance'],
    groupesSociaux: ['classe-sociale'],
    auteurs: ['bourdieu', 'elias'],
    inspirateurs: [],
    domaine: 'loisirs',
  },
  {
    id: 'loisirs',
    t: 'Loisirs',
    categorie: 'culture-et-loisirs',
    d: "Le temps libre n'est libre qu'en apparence : la manière de l'occuper reste, elle aussi, socialement façonnée.",
    detail:
      "Voyager, bricoler, ne rien faire : ce qui compte comme un loisir légitime — et ce qui, au contraire, passe pour une perte de temps — varie fortement selon le milieu, l'âge et le territoire.",
    variablesSociales:
      "Thorstein Veblen note, dès la fin du XIXᵉ siècle, que les classes aisées affichent volontiers un loisir ostentatoire — voyager, collectionner, ne pas travailler visiblement — comme un signe de statut à part entière. Les classes populaires, à l'inverse, disposent historiquement de moins de temps libre et le consacrent davantage à des loisirs domestiques ou collectifs proches du quartier — une différence de territoire autant que de revenu.",
    fondamentaux: ['position-sociale', 'statut-social'],
    concepts: ['capital-economique'],
    groupesSociaux: ['classe-sociale'],
    auteurs: [],
    inspirateurs: ['Thorstein Veblen — Théorie de la classe de loisir (1899), le loisir ostentatoire comme signe de statut'],
    domaine: 'loisirs',
  },

  /* — Numérique et sociabilité — */
  {
    id: 'usage-du-numerique',
    t: 'Usage du numérique',
    categorie: 'numerique-et-sociabilite',
    d: "Avoir accès à internet ne garantit pas d'en faire le même usage : l'écart se déplace de l'accès vers la compétence.",
    detail:
      "Rechercher une information administrative, coder, ou seulement consommer du divertissement : au-delà de la simple connexion, la manière d'utiliser le numérique reproduit des écarts de capital culturel et scolaire déjà connus par ailleurs.",
    variablesSociales:
      "Manuel Castells montre que la société en réseaux ne supprime pas les inégalités antérieures : elle les redistribue selon un nouvel axe, celui de la capacité à programmer ou à naviguer un réseau plutôt qu'à seulement le subir. L'âge pèse fortement — les usages diffèrent nettement entre générations nées avec l'outil et celles qui l'ont appris plus tard — tout comme le territoire, l'accès au haut débit restant inégal entre zones urbaines et rurales.",
    fondamentaux: ['integration', 'exclusion'],
    concepts: ['capital-culturel'],
    groupesSociaux: ['groupe-generationnel'],
    auteurs: ['castells'],
    inspirateurs: [],
    domaine: 'numerique',
  },
  {
    id: 'usages-des-reseaux-sociaux',
    t: 'Usages des réseaux sociaux',
    categorie: 'numerique-et-sociabilite',
    d: "Publier, commenter ou seulement observer : les réseaux sociaux se pratiquent très différemment selon qui s'y trouve.",
    detail:
      "Le même réseau accueille des usages aussi différents que la veille professionnelle, l'entretien de liens familiaux à distance ou la construction publique d'une image de soi — rarement les trois à la fois pour une même personne.",
    variablesSociales:
      "danah boyd montre que les adolescents investissent les réseaux sociaux comme un espace public à part entière, où se rejoue la même gestion de l'image que Goffman décrivait pour l'interaction en face à face — sauf que la trace y devient permanente et le public, potentiellement illimité. Le genre pèse sur l'exposition reçue : les femmes, en particulier jeunes, y subissent un contrôle et un harcèlement plus systématiques que les hommes pour un usage comparable.",
    fondamentaux: ['identite-sociale', 'interaction-sociale'],
    concepts: ['mise-en-scene-de-soi'],
    groupesSociaux: ['groupe-generationnel', 'reseau-social'],
    auteurs: ['goffman'],
    inspirateurs: ["danah boyd — It's Complicated (2014), les adolescents et l'espace public des réseaux"],
    domaine: 'numerique',
  },
  {
    id: 'sociabilite',
    t: 'Sociabilité',
    categorie: 'numerique-et-sociabilite',
    d: "Voir des amis, recevoir, sortir : la fréquence et la forme des relations entretenues varient selon le milieu bien plus qu'on ne le croit.",
    detail:
      "Certains milieux cultivent une sociabilité de réseau étendu et peu intime ; d'autres, un cercle restreint mais très dense — deux manières d'habiter les liens sociaux, ni meilleure ni pire l'une que l'autre.",
    variablesSociales:
      "Simmel montre que l'individu moderne appartient simultanément à plusieurs cercles sociaux indépendants — famille, métier, loisirs — et que c'est le croisement singulier de ces cercles qui façonne une sociabilité propre à chacun. Goffman ajoute que chaque rencontre, même informelle, obéit à un ordre de l'interaction implicite — codes de politesse, distance physique, tours de parole — appris dès la socialisation primaire et variant selon le territoire et le milieu d'origine.",
    fondamentaux: ['interaction-sociale', 'socialisation'],
    concepts: ['croisement-des-cercles-sociaux', 'rituel-d-interaction'],
    groupesSociaux: ['groupe-primaire'],
    auteurs: ['simmel', 'goffman'],
    inspirateurs: [],
    domaine: 'interactions',
  },

  /* — Croyance et travail — */
  {
    id: 'pratiques-religieuses',
    t: 'Pratiques religieuses',
    categorie: 'croyance-et-travail',
    d: "Prier, jeûner ou célébrer un rite ne se réduit pas à une croyance intérieure : c'est aussi un comportement observable, socialement situé.",
    detail:
      "La pratique religieuse — assister à un office, respecter un jeûne, marquer un rite de passage — se distingue de la seule croyance déclarée : on peut croire sans pratiquer, ou pratiquer par conformisme social sans y croire pleinement.",
    variablesSociales:
      "Durkheim analyse le rite religieux comme un fait social qui resserre le lien collectif bien plus qu'il ne s'adresse à un dieu particulier — la pratique compte alors autant, sinon plus, que la croyance elle-même. Weber montre à l'inverse que certaines pratiques religieuses — l'ascèse protestante, en particulier — ont pu produire des effets économiques concrets, en légitimant l'accumulation méthodique plutôt que la dépense ostentatoire. La pratique décline nettement avec l'âge des générations les plus récentes, et varie fortement selon le territoire d'origine.",
    fondamentaux: ['norme-sociale', 'integration'],
    concepts: ['fait-social', 'ethique-protestante'],
    groupesSociaux: ['groupe-religieux'],
    auteurs: ['durkheim', 'weber'],
    inspirateurs: [],
    domaine: 'religion',
  },
  {
    id: 'travail',
    t: 'Travail',
    categorie: 'croyance-et-travail',
    d: "Travailler ne procure pas qu'un revenu : cela façonne aussi une identité, un rapport au temps et une place reconnue dans la société.",
    detail:
      "Le contenu concret d'un travail — répétitif ou varié, autonome ou surveillé, manuel ou intellectuel — pèse sur le rapport que chacun entretient avec lui, bien au-delà du seul niveau de salaire.",
    variablesSociales:
      "Durkheim voit dans la division du travail social le principal ressort de la solidarité organique des sociétés modernes : des tâches différenciées qui rendent les individus interdépendants plutôt que semblables. Marx analyse à l'inverse le travail salarié comme un rapport d'exploitation, où le travailleur ne possède pas les moyens de production et se trouve aliéné du produit de son propre effort — une aliénation vécue très différemment selon la position occupée dans l'entreprise.",
    fondamentaux: ['role-social', 'statut-social'],
    concepts: ['division-du-travail-social', 'exploitation', 'alienation'],
    groupesSociaux: ['classe-sociale'],
    auteurs: ['durkheim', 'marx'],
    inspirateurs: [],
    domaine: 'travail',
  },
  {
    id: 'pratiques-professionnelles',
    t: 'Pratiques professionnelles',
    categorie: 'croyance-et-travail',
    d: "Chaque métier transmet, au-delà de son savoir-faire technique, des manières de faire propres à un groupe professionnel.",
    detail:
      "Un même geste technique — soigner, juger, enseigner — s'accompagne toujours de règles informelles apprises sur le tas, que la formation initiale ne suffit jamais à transmettre entièrement.",
    variablesSociales:
      "Weber fait de la compétence reconnue le fondement même de l'autorité professionnelle moderne, par contraste avec une autorité fondée sur la seule tradition. Everett Hughes ajoute que la pratique d'un métier s'accompagne d'une licence tacite, y compris pour accomplir les tâches les moins valorisées que la profession délègue en silence à ses membres les plus jeunes ou les moins gradés.",
    fondamentaux: ['role-social', 'statut-social'],
    concepts: ['ordres-sociaux'],
    groupesSociaux: ['groupe-professionnel'],
    auteurs: ['weber'],
    inspirateurs: ['Everett Hughes — le sale boulot, et la licence tacite que la profession se fait reconnaître'],
    domaine: 'professions',
  },

  /* — Famille et éducation — */
  {
    id: 'mariage',
    t: 'Mariage',
    categorie: 'famille-et-education',
    d: "Se marier n'est jamais purement un choix du cœur : le futur conjoint se trouve, le plus souvent, dans un périmètre social très proche du sien.",
    detail:
      "Niveau d'études, origine sociale, lieu de résidence : ces critères, rarement énoncés comme tels par les intéressés, orientent fortement la rencontre amoureuse vers des personnes de milieu comparable.",
    variablesSociales:
      "Bourdieu montre que l'homogamie sociale — se marier avec quelqu'un de position sociale proche — n'a rien d'un hasard statistique : les lieux de rencontre eux-mêmes (études, milieu professionnel, cercle de loisirs) sont déjà socialement triés, si bien que le marché matrimonial reproduit la structure des classes bien avant que les intéressés n'aient conscience de choisir.",
    fondamentaux: ['reproduction-sociale', 'position-sociale'],
    concepts: ['habitus', 'capital-culturel'],
    groupesSociaux: ['classe-sociale'],
    auteurs: ['bourdieu'],
    inspirateurs: [],
    domaine: 'famille',
  },
  {
    id: 'parentalite',
    t: 'Parentalité',
    categorie: 'famille-et-education',
    d: "Devenir parent s'apprend socialement autant que biologiquement : les manières de porter, nourrir ou consoler un enfant varient fortement d'un milieu à l'autre.",
    detail:
      "Ce qui passe pour de « bonnes pratiques » parentales — allaitement, sommeil, discipline — n'a rien d'universel : ce sont des normes situées, transmises par la famille élargie, les pairs et, de plus en plus, des prescriptions expertes diffusées largement.",
    variablesSociales:
      "Berger et Luckmann montrent que la parentalité est le lieu même de la socialisation primaire : les parents transmettent, souvent sans le vouloir, une vision du monde qui se vit ensuite comme allant de soi pour l'enfant devenu adulte. Cette transmission varie selon le capital culturel des parents — le rapport au langage, à l'autorité et au temps scolaire diffère nettement d'un milieu à l'autre, avec des conséquences durables sur la trajectoire de l'enfant.",
    fondamentaux: ['socialisation', 'role-social'],
    concepts: ['capital-culturel'],
    groupesSociaux: [],
    auteurs: ['berger-luckmann'],
    inspirateurs: [],
    domaine: 'famille',
  },
  {
    id: 'education-des-enfants',
    t: 'Éducation des enfants',
    categorie: 'famille-et-education',
    d: "Éduquer un enfant, c'est déjà anticiper la place qu'on imagine pour lui dans la société — une anticipation qui varie selon celle qu'on y occupe soi-même.",
    detail:
      "Encourager l'autonomie ou l'obéissance, la curiosité ou la discipline : ces choix éducatifs, présentés comme de simples préférences personnelles, recoupent en réalité des styles éducatifs très corrélés à la position sociale des parents.",
    variablesSociales:
      "Bourdieu montre que l'éducation familiale transmet un capital culturel très inégal selon le milieu — vocabulaire, rapport à l'écrit, familiarité avec les codes scolaires — qui se convertit ensuite en réussite scolaire inégale, sans que l'école n'ait besoin d'être elle-même partiale pour reproduire cet écart. Durkheim ajoute que l'éducation vise, au-delà de la famille, à inculquer les normes communes qu'une société juge nécessaires à sa propre continuité.",
    fondamentaux: ['socialisation', 'reproduction-sociale'],
    concepts: ['capital-culturel', 'reproduction-scolaire'],
    groupesSociaux: ['classe-sociale'],
    auteurs: ['bourdieu', 'durkheim'],
    inspirateurs: [],
    domaine: 'education',
  },

  /* — Politique et engagement — */
  {
    id: 'vote',
    t: 'Vote',
    categorie: 'politique-et-engagement',
    d: "Voter n'est jamais un choix purement individuel : la position sociale, l'âge et le territoire orientent, statistiquement, le sens du bulletin.",
    detail:
      "Le vote agrège un jugement politique et une appartenance sociale : deux personnes aux opinions proches votent rarement de façon identique si leur position dans la société diffère fortement.",
    variablesSociales:
      "Weber distingue la légitimité de l'autorité politique elle-même de l'acte électoral qui, dans une démocratie, en renouvelle périodiquement la reconnaissance. Bourdieu ajoute que l'accès à un jugement politique jugé « compétent » — comprendre un programme, s'orienter parmi les enjeux — reste inégalement réparti selon le capital culturel, ce qui pèse sur la façon dont chacun s'approprie, ou non, l'acte de voter.",
    fondamentaux: ['legitimite', 'autorite'],
    concepts: ['capital-culturel'],
    groupesSociaux: ['classe-sociale'],
    auteurs: ['weber', 'bourdieu'],
    inspirateurs: [],
    domaine: 'politique',
  },
  {
    id: 'abstention',
    t: 'Abstention',
    categorie: 'politique-et-engagement',
    d: "Ne pas voter n'est pas toujours un désintérêt : c'est aussi, souvent, le signe d'un sentiment de ne compter pour rien dans le jeu politique.",
    detail:
      "Distincte du phénomène agrégé « Abstention électorale » (voir Phénomènes sociaux), qui mesure le taux global et ses évolutions, cette entrée regarde le geste individuel de ne pas se déplacer — ou de ne pas se sentir concerné.",
    variablesSociales:
      "L'abstention se concentre disproportionnellement chez les catégories les moins dotées en capital économique et culturel, et chez les plus jeunes générations, pour qui l'offre politique semble la plus éloignée de leurs préoccupations quotidiennes. Le territoire compte aussi : les zones rurales et les quartiers périphériques, souvent les moins bien représentés par les candidats en présence, affichent des taux d'abstention nettement supérieurs à la moyenne.",
    fondamentaux: ['exclusion', 'integration'],
    concepts: ['capital-economique'],
    groupesSociaux: ['classe-sociale', 'groupe-generationnel'],
    auteurs: [],
    inspirateurs: ['Céline Braconnier et Jean-Yves Dormagen — La Démocratie de l’abstention (2007), l’abstention comme position sociale plus que comme désintérêt'],
    domaine: 'politique',
  },
  {
    id: 'participation-politique',
    t: 'Participation politique',
    categorie: 'politique-et-engagement',
    d: "Au-delà du seul vote, participer à la vie politique suppose des ressources — temps, langage, réseau — inégalement réparties.",
    detail:
      "Signer une pétition, assister à un conseil municipal, interpeller un élu : ces formes de participation, moins visibles que le vote, restent elles aussi très concentrées dans les catégories déjà les plus dotées en capital culturel.",
    variablesSociales:
      "Habermas voit dans l'espace public le lieu où des citoyens informés débattent rationnellement des affaires communes — un idéal que l'accès inégal au temps libre et au langage légitime rend, en pratique, plus accessible à certains milieux qu'à d'autres. Tocqueville, avant lui, faisait de la participation associative et politique l'apprentissage concret de la démocratie, non un supplément facultatif à celle-ci.",
    fondamentaux: ['integration', 'pouvoir'],
    concepts: ['espace-public', 'participation-citoyenne'],
    groupesSociaux: ['classe-sociale'],
    auteurs: ['habermas', 'tocqueville'],
    inspirateurs: [],
    domaine: 'politique',
  },
  {
    id: 'engagement-associatif',
    t: 'Engagement associatif',
    categorie: 'politique-et-engagement',
    d: "S'investir dans une association tisse un lien social que ni le marché ni l'État ne produisent à eux seuls.",
    detail:
      "Club sportif, association de quartier, bénévolat caritatif : ces engagements, souvent non rémunérés, construisent une sociabilité et une confiance que Tocqueville jugeait essentielles à la vitalité démocratique elle-même.",
    variablesSociales:
      "Tocqueville voit dans la multiplication des associations volontaires le meilleur rempart contre l'isolement individuel que la démocratie moderne peut produire — un apprentissage concret de l'action collective, à l'échelle la plus locale. L'engagement associatif varie fortement selon l'âge — plus fréquent chez les retraités disposant de temps libre — et selon le territoire, les zones rurales conservant souvent un tissu associatif plus dense que certains quartiers urbains.",
    fondamentaux: ['integration', 'solidarite'],
    concepts: ['capital-social'],
    groupesSociaux: ['groupe-generationnel'],
    auteurs: ['tocqueville'],
    inspirateurs: [],
    domaine: 'mouvements-sociaux',
  },
  {
    id: 'engagement-militant',
    t: 'Engagement militant',
    categorie: 'politique-et-engagement',
    d: "Militer suppose de désigner un adversaire et de porter un enjeu qui dépasse le seul intérêt personnel de celui qui s'engage.",
    detail:
      "Manifester, adhérer à un syndicat ou à un mouvement, occuper un lieu symbolique : ces formes d'engagement se distinguent de l'association par leur dimension conflictuelle assumée, face à un pouvoir ou un ordre établi.",
    variablesSociales:
      "Touraine définit le mouvement social par la conjonction de trois éléments — une identité collective, un adversaire clairement désigné, et un enjeu jugé décisif pour la société tout entière, non pour la seule catégorie qui s'engage. L'engagement militant recrute historiquement de façon différenciée selon la classe sociale et la génération : chaque grande cause a ses générations militantes, marquées par un même événement fondateur au même âge de formation.",
    fondamentaux: ['pouvoir', 'conflit'],
    concepts: ['mouvement-social', 'action-collective'],
    groupesSociaux: ['groupe-militant', 'groupe-generationnel'],
    auteurs: ['touraine'],
    inspirateurs: [],
    domaine: 'mouvements-sociaux',
  },
];
