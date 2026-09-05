/**
 * Groupes sociaux : les grandes formes que prend un collectif — du groupe
 * primaire à la diaspora, de la classe sociale au réseau. Reliée à
 * `fondamentaux.js` (chaque type de groupe mobilise `groupe-social` et,
 * souvent, `identite-sociale`/`statut-social`/`pouvoir`) et à `concepts.js`.
 *
 * `auteurs`/`inspirateurs` suivent la convention de `methodes.js` : auteurs
 * du corpus (cliquables) et figures hors corpus (texte libre « Nom —
 * apport »), l'un des deux toujours renseigné. `fondamentaux` et `concepts`
 * ne doivent jamais être vides.
 *
 * Deux entrées — `communaute` et `organisation` — recoupent des fiches déjà
 * décrites au même niveau d'abstraction dans `fondamentaux.js` : elles
 * restent ici en version courte, renvoyant vers la fiche complète plutôt
 * que de la dupliquer (même règle que `fondamentaux.js` applique déjà face
 * aux concepts qu'il recoupe).
 */

/** Catégories d'affichage, dans l'ordre de la liste. */
export const CATEGORIES_GROUPES_SOCIAUX = [
  {
    id: 'taille-et-proximite',
    t: 'Taille et proximité',
    d: 'Ce qui change entre un cercle intime et une masse anonyme.',
  },
  {
    id: 'appartenance-et-identification',
    t: 'Appartenance et identification',
    d: "Le groupe qu'on habite, et celui auquel on aspire.",
  },
  {
    id: 'origine-et-culture',
    t: 'Origine et culture',
    d: "Ce qu'on partage avant même de s'être choisi.",
  },
  {
    id: 'travail-et-engagement',
    t: 'Travail et engagement',
    d: 'Se regrouper autour d’un métier ou d’une cause.',
  },
  {
    id: 'pouvoir-et-stratification',
    t: 'Pouvoir et stratification',
    d: 'Qui domine, qui est dominé, et selon quelle échelle.',
  },
  {
    id: 'structures-larges-et-reseaux',
    t: 'Structures larges et réseaux',
    d: 'Des collectifs trop grands pour se connaître tous, mais bien réels.',
  },
];

export const GROUPES_SOCIAUX = [
  /* — Taille et proximité — */
  {
    id: 'groupe-primaire',
    t: 'Groupe primaire',
    categorie: 'taille-et-proximite',
    d: "Un petit groupe où les membres se connaissent personnellement et entretiennent des liens affectifs étroits et durables.",
    detail:
      "Charles Horton Cooley a créé cette catégorie pour désigner les groupes — famille, groupe d'amis, voisinage proche — où la relation elle-même compte autant que ce qu'elle produit, et où chacun est traité comme une personne entière plutôt que comme le titulaire d'une seule fonction.",
    dynamiqueSociale:
      "C'est dans le groupe primaire que se joue la première socialisation : Cooley y voit le laboratoire du soi social, chacun se découvrant à travers le regard que les autres membres portent sur lui — ce qu'il nomme le « soi-miroir ». Mead prolonge cette intuition : c'est en interagissant d'abord avec des « autrui significatifs » proches qu'un enfant apprend à se représenter le point de vue d'autrui, condition de toute vie sociale ultérieure.",
    fondamentaux: ['groupe-social', 'socialisation', 'identite-sociale'],
    concepts: ['prise-de-role'],
    auteurs: ['mead'],
    inspirateurs: ['Charles Horton Cooley — la distinction entre groupe primaire et secondaire, et le concept de soi-miroir (1902)'],
    domaine: null,
  },
  {
    id: 'groupe-secondaire',
    t: 'Groupe secondaire',
    categorie: 'taille-et-proximite',
    d: "Un groupe plus vaste et impersonnel, fondé sur un but précis plutôt que sur l'affection, où chacun est traité selon la fonction qu'il occupe.",
    detail:
      "Une administration, une entreprise, une association de grande taille en sont des exemples typiques : on y entre pour un motif explicite, et les relations qu'on y noue restent, la plupart du temps, cantonnées à ce motif.",
    dynamiqueSociale:
      "Simmel montre que l'individu moderne appartient simultanément à plusieurs groupes secondaires indépendants — métier, association, club — et que c'est précisément le croisement unique de ces appartenances qui le distingue de tout autre, plutôt qu'une identité reçue d'un seul groupe. Tönnies range ce type de lien du côté de la Gesellschaft, la société d'échange contractuel, par contraste avec les liens organiques de la communauté.",
    fondamentaux: ['groupe-social', 'role-social', 'organisation'],
    concepts: ['croisement-des-cercles-sociaux'],
    auteurs: ['simmel'],
    inspirateurs: [
      'Charles Horton Cooley — la distinction entre groupe primaire et secondaire (1902)',
      'Ferdinand Tönnies — la Gesellschaft, la société d’échange, par contraste avec la communauté',
    ],
    domaine: null,
  },
  {
    id: 'foule',
    t: 'Foule',
    categorie: 'taille-et-proximite',
    d: "Un rassemblement temporaire et physiquement co-présent, capable d'agir de façon coordonnée sans organisation ni chef préalable.",
    detail:
      "Une manifestation, un mouvement de panique, un stade en liesse en sont des formes très différentes : ce qui les réunit sous une même catégorie n'est pas leur contenu, mais l'absence de structure établie à l'avance.",
    dynamiqueSociale:
      "Gustave Le Bon soutenait qu'une foule dissout le jugement individuel dans une contagion mentale collective, chacun devenant capable d'actes qu'il n'aurait jamais commis seul — une thèse aujourd'hui largement contestée. Blumer propose une lecture plus fine : l'action collective naît d'un processus d'interprétation et d'ajustement mutuel entre participants, non de l'application automatique d'une norme déjà là — la foule s'organise en marchant, sans qu'aucun chef n'ait besoin de la diriger.",
    fondamentaux: ['groupe-social', 'controle-social'],
    concepts: ['action-collective'],
    auteurs: ['blumer'],
    inspirateurs: ['Gustave Le Bon — Psychologie des foules (1895), la thèse controversée de la contagion mentale collective'],
    domaine: null,
  },

  /* — Appartenance et identification — */
  {
    id: 'groupe-de-reference',
    t: 'Groupe de référence',
    categorie: 'appartenance-et-identification',
    d: "Le groupe dont on adopte les normes et les valeurs comme mesure de comparaison, qu'on en soit membre ou non.",
    detail:
      "Un étudiant qui règle déjà son comportement sur celui du métier qu'il vise, avant même d'y accéder, se réfère à un groupe auquel il n'appartient pas encore — la référence n'exige jamais l'appartenance effective.",
    dynamiqueSociale:
      "Robert K. Merton formalise cette notion à partir de la socialisation anticipatrice : adopter par avance les manières du groupe visé augmente les chances d'y être un jour admis, mais expose aussi à un décalage durable avec le groupe d'origine, dont on adopte les normes de moins en moins. Le groupe de référence explique ainsi des comparaisons qui semblent irrationnelles de l'extérieur — se sentir pauvre avec un bon revenu, parce que l'échelle de comparaison choisie est plus haute que celle du voisinage immédiat.",
    fondamentaux: ['identite-sociale', 'mobilite-sociale', 'groupe-social'],
    concepts: ['socialisation-anticipatrice'],
    auteurs: ['merton'],
    inspirateurs: [],
    domaine: null,
  },
  {
    id: 'groupe-d-appartenance',
    t: "Groupe d'appartenance",
    categorie: 'appartenance-et-identification',
    d: "Le groupe auquel on appartient effectivement, par statut ou par fait, indépendamment de celui auquel on aspire à s'identifier.",
    detail:
      "Il se distingue du groupe de référence précisément par ce critère : on peut appartenir à un groupe sans s'y identifier, ou s'identifier à un groupe auquel on n'appartient pas — l'écart entre les deux est souvent la source d'une tension durable.",
    dynamiqueSociale:
      "Simmel montre qu'un individu moderne cumule toujours plusieurs groupes d'appartenance à la fois — famille, métier, quartier, association — sans que ces cercles ne se recoupent nécessairement. Cette multi-appartenance, loin d'affaiblir l'identité, est précisément ce qui la rend singulière : c'est la combinaison particulière de ces appartenances, jamais un seul groupe pris isolément, qui distingue chaque individu de tout autre.",
    fondamentaux: ['groupe-social', 'identite-sociale', 'statut-social'],
    concepts: ['croisement-des-cercles-sociaux'],
    auteurs: ['simmel'],
    inspirateurs: [],
    domaine: null,
  },
  {
    id: 'groupe-generationnel',
    t: 'Groupe générationnel',
    categorie: 'appartenance-et-identification',
    d: "Un ensemble de personnes qui, ayant vécu les mêmes événements historiques au même âge, partagent une sensibilité commune.",
    detail:
      "Ce n'est pas la seule date de naissance qui définit une génération sociologique, mais le fait d'avoir traversé, à un âge de formation comparable, les mêmes bouleversements — une crise économique, une guerre, une transformation technologique.",
    dynamiqueSociale:
      "Karl Mannheim a le premier théorisé cette idée : au sein d'une même classe d'âge, seuls certains groupes réellement marqués par un même événement formateur constituent une véritable « unité de génération », capable de se reconnaître et d'agir ensemble. Giddens ajoute que la modernité tardive intensifie ce phénomène : chaque génération doit réviser en permanence, de façon réflexive, les repères que la précédente tenait pour acquis, ce qui accentue l'écart ressenti entre elles.",
    fondamentaux: ['identite-sociale', 'socialisation', 'groupe-social'],
    concepts: ['modernite-reflexive'],
    auteurs: ['giddens'],
    inspirateurs: ['Karl Mannheim — Le problème des générations (1928), qui fonde la sociologie des générations'],
    domaine: null,
  },

  /* — Origine et culture — */
  {
    id: 'groupe-ethnique',
    t: 'Groupe ethnique',
    categorie: 'origine-et-culture',
    d: "Un groupe dont les membres partagent, ou croient partager, une origine, une langue ou une culture communes.",
    detail:
      "Ce qui compte n'est pas qu'une origine commune soit historiquement vérifiable, mais que le groupe et ceux qui l'entourent la tiennent collectivement pour réelle — une croyance qui produit des effets bien concrets sur l'appartenance et l'exclusion.",
    dynamiqueSociale:
      "Max Weber définit précisément le groupe ethnique par cette croyance subjective en une communauté d'origine, distincte de toute parenté biologique vérifiable. Fredrik Barth déplace ensuite l'attention des traits culturels eux-mêmes vers les frontières qui séparent un groupe d'un autre : ce sont ces frontières, sans cesse renégociées dans l'interaction, qui font et refont le groupe, bien plus qu'un contenu culturel figé une fois pour toutes.",
    fondamentaux: ['groupe-social', 'identite-sociale', 'integration', 'segregation'],
    concepts: ['ordres-sociaux'],
    auteurs: ['weber'],
    inspirateurs: ['Fredrik Barth — les frontières ethniques comme construction sociale, plus que comme héritage figé (1969)'],
    domaine: null,
  },
  {
    id: 'groupe-religieux',
    t: 'Groupe religieux',
    categorie: 'origine-et-culture',
    d: "Une communauté organisée autour d'une croyance et d'un rituel partagés, avec ses propres critères d'appartenance.",
    detail:
      "Il ne se réduit pas à une addition de croyants isolés : le rituel commun, célébré ensemble, produit un sentiment d'appartenance que la croyance individuelle seule ne suffirait pas à créer.",
    dynamiqueSociale:
      "Durkheim traite le religieux comme un fait social parmi d'autres : le sacré n'est pas d'abord affaire de dieux, mais la manière dont une collectivité se représente et se célèbre elle-même à travers ses rites. Ernst Troeltsch distingue deux formes d'appartenance bien différentes que ce terme recouvre : l'Église, ouverte et englobante, où l'on naît généralement croyant, et la secte, choisie et exigeante, qui trace une frontière stricte avec le reste de la société.",
    fondamentaux: ['groupe-social', 'norme-sociale', 'role-social'],
    concepts: ['religion-comme-fait-social'],
    auteurs: ['durkheim'],
    inspirateurs: ["Ernst Troeltsch — la distinction de l'Église et de la secte, deux formes d'appartenance religieuse"],
    domaine: 'religion',
  },
  {
    id: 'diaspora',
    t: 'Diaspora',
    categorie: 'origine-et-culture',
    d: "Une population dispersée hors de son territoire d'origine, qui maintient malgré la distance un lien collectif avec celui-ci.",
    detail:
      "Ce qui distingue une diaspora d'une simple communauté d'immigrés est cette conscience partagée d'appartenir à un même ensemble dispersé, entretenue par-delà les frontières, parfois pendant plusieurs générations sans retour effectif.",
    dynamiqueSociale:
      "Stéphane Dufoix distingue les usages du mot : tantôt descriptif d'une dispersion réelle, tantôt catégoriel, quand un État ou une organisation mobilise activement le terme pour constituer politiquement un groupe qui, sans cela, resterait plus diffus. Castells montre que les technologies de communication contemporaines transforment ce lien : une diaspora peut aujourd'hui entretenir des échanges quotidiens avec son pays d'origine, sans plus dépendre du seul courrier ou du retour physique.",
    fondamentaux: ['groupe-social', 'identite-sociale', 'acculturation'],
    concepts: ['societe-en-reseaux'],
    auteurs: ['castells'],
    inspirateurs: ['Stéphane Dufoix — Les diasporas (2003), qui distingue les usages descriptifs et catégoriels du mot'],
    domaine: null,
  },

  /* — Travail et engagement — */
  {
    id: 'groupe-professionnel',
    t: 'Groupe professionnel',
    categorie: 'travail-et-engagement',
    d: "Un ensemble de personnes exerçant un même métier, uni par une formation, un savoir et des règles d'accès communes.",
    detail:
      "Toutes les activités rémunérées ne produisent pas un groupe professionnel au sens fort : il y faut un savoir spécialisé, une formation contrôlée, et surtout le droit de dire qui a la légitimité de l'exercer.",
    dynamiqueSociale:
      "Weber fournit le cadre général — la profession comme une forme de domination fondée sur la compétence reconnue, non sur la tradition ou la force. Everett Hughes ajoute que ce statut s'accompagne toujours d'une licence tacite, y compris pour accomplir le « sale boulot » que d'autres refuseraient ; Andrew Abbott montre que chaque groupe professionnel vit des frontières qu'il dispute sans cesse aux groupes voisins. Boltanski observe enfin que cette reconnaissance ne va jamais de soi : elle se négocie et se justifie en continu, à mesure que de nouveaux métiers réclament un statut que d'autres défendent jalousement.",
    fondamentaux: ['groupe-social', 'role-social', 'statut-social'],
    concepts: ['ordres-sociaux'],
    auteurs: ['weber', 'boltanski'],
    inspirateurs: [
      'Everett Hughes — le sale boulot, et la licence que la profession se fait reconnaître',
      "Andrew Abbott — le système des professions : chacune vit des frontières qu'elle dispute aux autres",
    ],
    domaine: 'professions',
  },
  {
    id: 'professionnels',
    t: 'Professionnels',
    categorie: 'travail-et-engagement',
    d: "La catégorie statistique et sociale qui regroupe cadres et professions intellectuelles supérieures, définie par la position occupée plus que par un métier précis.",
    detail:
      "À la différence du groupe professionnel, défini par un métier partagé, « les professionnels » désignent une catégorie de position sociale qui traverse des métiers très différents — ingénieur, cadre commercial, médecin salarié — unis par un niveau de responsabilité et de rémunération comparable plutôt que par un même savoir-faire.",
    dynamiqueSociale:
      "Luc Boltanski a montré comment cette catégorie, aujourd'hui perçue comme allant de soi, a dû être activement construite : la formation du groupe des « cadres » en France a exigé, dans l'entre-deux-guerres, un travail de représentation collective — syndicats, associations, statistiques officielles — pour faire exister comme groupe unifié des positions professionnelles qui n'avaient, au départ, presque rien en commun.",
    fondamentaux: ['statut-social', 'position-sociale', 'groupe-social'],
    concepts: ['position-sociale', 'capital-culturel'],
    auteurs: ['boltanski'],
    inspirateurs: [],
    domaine: 'professions',
  },
  {
    id: 'groupe-militant',
    t: 'Groupe militant',
    categorie: 'travail-et-engagement',
    d: "Un groupe organisé autour d'une cause, qui agit collectivement pour la faire reconnaître au-delà de ses propres membres.",
    detail:
      "Il se distingue d'une simple foule rassemblée le temps d'un événement par sa durée et son organisation : un groupe militant se dote de porte-parole, de ressources et d'une stratégie qui dépassent une seule mobilisation ponctuelle.",
    dynamiqueSociale:
      "Blumer rappelle que l'engagement collectif ne procède presque jamais d'un simple calcul individuel isolé : il naît d'un processus d'interprétation partagée, construit et réajusté au fil de l'interaction entre participants. Touraine ajoute qu'un groupe militant devient un authentique mouvement social dès qu'il ne défend plus seulement un intérêt catégoriel, mais porte un enjeu qu'il situe au niveau de la société tout entière, face à un adversaire clairement désigné.",
    fondamentaux: ['groupe-social', 'pouvoir', 'integration'],
    concepts: ['mouvement-social', 'action-collective'],
    auteurs: ['touraine', 'blumer'],
    inspirateurs: [],
    domaine: null,
  },

  /* — Pouvoir et stratification — */
  {
    id: 'groupe-minoritaire',
    t: 'Groupe minoritaire',
    categorie: 'pouvoir-et-stratification',
    d: "Un groupe qui, indépendamment de son nombre, occupe une position subordonnée et fait l'objet d'un traitement différencié défavorable.",
    detail:
      "Le terme n'a jamais désigné une simple minorité numérique : un groupe peut être démographiquement majoritaire dans une société donnée et pourtant occuper, socialement et politiquement, une position minoritaire au sens sociologique.",
    dynamiqueSociale:
      "Louis Wirth a fixé cette définition classique dès 1945 : ce qui fait un groupe minoritaire, c'est la position qu'il occupe dans un rapport de pouvoir, non son poids numérique. Goffman montre comment cette position s'accompagne souvent d'un stigmate que ses membres doivent gérer en permanence dans leurs interactions ; Fraser ajoute que corriger cette situation exige une reconnaissance explicite — donner à un groupe dévalorisé le même statut que les autres dans les échanges sociaux — et pas seulement une redistribution économique.",
    fondamentaux: ['groupe-social', 'pouvoir', 'exclusion', 'statut-social'],
    concepts: ['reconnaissance', 'stigmate'],
    auteurs: ['fraser', 'goffman'],
    inspirateurs: ['Louis Wirth — la définition classique du groupe minoritaire par la position, non par le nombre (1945)'],
    domaine: null,
  },
  {
    id: 'groupe-majoritaire',
    t: 'Groupe majoritaire',
    categorie: 'pouvoir-et-stratification',
    d: "Le groupe qui, dans un rapport de domination donné, impose sa norme comme allant de soi et définit l'écart des autres par rapport à elle.",
    detail:
      "Sa position se remarque d'autant moins qu'elle est la mieux établie : un groupe majoritaire n'a en général pas besoin de se nommer comme tel, sa manière de faire passant simplement pour la norme neutre à laquelle les autres groupes seraient, eux, un écart à mesurer.",
    dynamiqueSociale:
      "Le groupe majoritaire est le pôle symétrique du groupe minoritaire dans la définition de Louis Wirth : une position de pouvoir dans un rapport donné, plutôt qu'un simple avantage numérique. Weber rappelle que cette position ne se maintient durablement que si elle parvient à se faire percevoir comme légitime — fondée sur la tradition, le charisme ou la règle — sans quoi elle doit recourir de plus en plus à la contrainte directe pour continuer à s'imposer.",
    fondamentaux: ['groupe-social', 'pouvoir', 'domination', 'norme-sociale'],
    concepts: ['ordres-sociaux'],
    auteurs: ['weber'],
    inspirateurs: ['Louis Wirth — la définition classique du groupe minoritaire, dont le groupe majoritaire est le pôle symétrique (1945)'],
    domaine: null,
  },
  {
    id: 'classe-sociale',
    t: 'Classe sociale',
    categorie: 'pouvoir-et-stratification',
    d: "Un ensemble de personnes occupant une position comparable dans la structure économique d'une société, avec des intérêts et des chances de vie proches.",
    detail:
      "Marx et Weber ne mesurent pas tout à fait la même chose sous ce mot : la place dans les rapports de production pour l'un, un faisceau de position économique, de statut et de pouvoir politique pour l'autre — deux lectures qui continuent d'organiser le débat sociologique sur la stratification.",
    dynamiqueSociale:
      "Pour Marx, la classe se définit par le rapport à la propriété des moyens de production, un clivage qui structure des intérêts objectivement opposés même quand les personnes concernées n'en ont pas conscience. Weber ajoute deux axes distincts et non réductibles l'un à l'autre — le statut, affaire d'honneur social, et le parti, affaire de pouvoir organisé — si bien qu'une classe économique élevée ne garantit ni le même statut ni la même influence politique. Bourdieu introduit un troisième axe, moins visible : le capital culturel, cette aisance avec la culture légitime qui se transmet sans jamais s'enseigner vraiment, et qui explique pourquoi la position sociale continue de peser lourd, bien après la disparition des ordres et des castes.",
    fondamentaux: ['groupe-social', 'position-sociale', 'statut-social', 'mobilite-sociale'],
    concepts: ['classe', 'classe-dominante'],
    auteurs: ['marx', 'weber', 'bourdieu'],
    inspirateurs: [],
    domaine: 'classes',
  },
  {
    id: 'elites',
    t: 'Élites',
    categorie: 'pouvoir-et-stratification',
    d: "Les groupes restreints qui concentrent, dans un domaine donné, le pouvoir de décision ou le prestige le plus élevé.",
    detail:
      "Le pluriel importe : il n'existe pas une élite unique, mais des élites plurielles — économique, politique, culturelle, administrative — qui se recoupent parfois sans jamais totalement se confondre.",
    dynamiqueSociale:
      "Vilfredo Pareto avance que l'histoire n'est jamais qu'une circulation des élites : une élite en remplace toujours une autre, plutôt que le pouvoir ne disparaissant jamais vraiment vers le grand nombre. Robert Michels observe un mécanisme voisin à l'intérieur même des organisations les plus démocratiques : la loi d'airain de l'oligarchie, par laquelle une poignée de dirigeants professionnels finit toujours par concentrer la décision. Bourdieu ajoute que l'appartenance à une élite se transmet aussi par des mécanismes culturels discrets — grandes écoles, réseaux, manières — qui la rendent plus difficile à ébranler qu'une seule fortune ou qu'un seul mandat.",
    fondamentaux: ['pouvoir', 'statut-social', 'groupe-social'],
    concepts: ['classe-dominante'],
    auteurs: ['bourdieu'],
    inspirateurs: [
      'Vilfredo Pareto — la circulation des élites, qui remplace une domination par une autre',
      "Robert Michels — la loi d'airain de l'oligarchie",
    ],
    domaine: null,
  },
  {
    id: 'classes-populaires',
    t: 'Classes populaires',
    categorie: 'pouvoir-et-stratification',
    d: "Les catégories sociales les moins dotées en capital économique et culturel, souvent définies en creux par leur distance à la norme légitime.",
    detail:
      "Le terme recouvre des situations très diverses — ouvriers, employés peu qualifiés, précaires — réunies moins par un même métier que par une position commune, éloignée des ressources et de la reconnaissance que la société valorise le plus.",
    dynamiqueSociale:
      "Richard Hoggart a montré, contre l'idée d'une culture populaire définie par le seul manque, qu'elle possède ses propres richesses, ses propres codes et sa propre dignité, trop souvent lus depuis l'extérieur comme une simple privation. Bourdieu ajoute que le capital culturel dominant se transmet inégalement selon le milieu d'origine, ce qui suffit à expliquer une bonne part des trajectoires scolaires et professionnelles des classes populaires, sans qu'aucun déterminisme biologique n'ait besoin d'être invoqué.",
    fondamentaux: ['groupe-social', 'position-sociale', 'statut-social'],
    concepts: ['habitus', 'capital-culturel'],
    auteurs: ['bourdieu'],
    inspirateurs: ['Richard Hoggart — La Culture du pauvre (1957), la culture populaire prise au sérieux plutôt que mesurée en manque'],
    domaine: null,
  },

  /* — Structures larges et réseaux — */
  {
    id: 'communaute',
    t: 'Communauté',
    categorie: 'structures-larges-et-reseaux',
    d: "Un groupe social fondé sur la proximité, la ressemblance ou l'attachement affectif entre ses membres — déjà décrit en détail dans les concepts fondamentaux.",
    detail:
      "Cette entrée reste volontairement courte : la Communauté est un concept fondamental à part entière (voir « Concepts fondamentaux »), auquel cette rubrique renvoie plutôt que de répéter sa définition.",
    dynamiqueSociale:
      "Ferdinand Tönnies oppose la communauté (Gemeinschaft), fondée sur des liens organiques et affectifs, à la société (Gesellschaft), fondée sur l'échange et le contrat — la distinction fondatrice de toute la sociologie des groupes. Durkheim en tire une version voisine avec la solidarité mécanique, propre aux sociétés peu différenciées, où l'on est lié parce qu'on se ressemble plutôt que parce qu'on dépend de fonctions différentes les unes des autres.",
    fondamentaux: ['communaute', 'groupe-social', 'solidarite'],
    concepts: ['religion-comme-fait-social'],
    auteurs: ['durkheim'],
    inspirateurs: ['Ferdinand Tönnies — Communauté et société (1887), qui a nommé et théorisé la distinction'],
    domaine: null,
  },
  {
    id: 'organisation',
    t: 'Organisation',
    categorie: 'structures-larges-et-reseaux',
    d: "Un groupe social durablement structuré autour d'un but explicite — déjà décrite en détail dans les concepts fondamentaux.",
    detail:
      "Cette entrée reste elle aussi volontairement courte : l'Organisation est un concept fondamental à part entière (voir « Concepts fondamentaux »), et une institution à part entière (voir « Institutions sociales », Entreprise et Administration), auxquels cette rubrique renvoie plutôt que de répéter leur contenu.",
    dynamiqueSociale:
      "Weber décrit la bureaucratie comme la forme la plus aboutie de l'organisation moderne — des règles impersonnelles plutôt que des faveurs, une compétence plutôt qu'un statut hérité. Crozier montre que ces mêmes règles laissent toujours des zones d'incertitude, que certains membres transforment en pouvoir informel bien réel, souvent sans rapport avec leur position officielle dans l'organigramme.",
    fondamentaux: ['organisation', 'groupe-social', 'pouvoir'],
    concepts: ['bureaucratie'],
    auteurs: ['weber', 'crozier'],
    inspirateurs: [],
    domaine: 'organisations',
  },
  {
    id: 'reseau-social',
    t: 'Réseau social',
    categorie: 'structures-larges-et-reseaux',
    d: "Un ensemble de personnes reliées par des liens directs ou indirects, dont la position dans le réseau compte autant que les attributs propres à chacune.",
    detail:
      "Contrairement à un groupe au sens classique, un réseau n'a pas de frontière nette ni de critère d'appartenance formel : on en fait partie par les liens qu'on entretient, non par une adhésion déclarée.",
    dynamiqueSociale:
      "Simmel pose la matrice théorique la plus ancienne : un individu moderne appartient toujours à plusieurs cercles sociaux qui se croisent sans se confondre, et c'est ce croisement singulier de liens qui le distingue. Castells actualise cette intuition à l'échelle globale : la société contemporaine s'organise autour de réseaux portés par les technologies de l'information, plus décisifs désormais que n'importe quelle organisation prise isolément ; le pouvoir, dans cette société en réseaux, s'exerce moins en commandant directement qu'en programmant les objectifs d'un réseau ou en connectant et déconnectant des réseaux entre eux.",
    fondamentaux: ['groupe-social', 'pouvoir'],
    concepts: ['societe-en-reseaux', 'pouvoir-des-reseaux'],
    auteurs: ['castells', 'simmel'],
    inspirateurs: [],
    domaine: null,
  },
];
