/**
 * Institutions sociales : comment un cadre concret — famille, école, État,
 * prison — produit des normes, des rôles, des statuts et des comportements.
 * Reliée à `fondamentaux.js` : les huit termes qui composent cette chaîne
 * (norme sociale, rôle social, statut social, socialisation, pouvoir,
 * contrôle social, reproduction sociale, déviance) y sont déjà décrits ;
 * cette rubrique ne les redéfinit pas, elle montre laquelle chaque
 * institution mobilise et comment.
 *
 * `fondamentaux` (ids de fondamentaux.js) et `concepts` (ids de
 * concepts.js) ne doivent jamais être vides — c'est le cœur de la rubrique.
 * `domaine` (id de domains.js) est optionnel : renseigné seulement quand un
 * domaine existant recoupe directement l'institution, pour approfondir côté
 * auteurs sans dupliquer son contenu.
 */

/** Catégories d'affichage, dans l'ordre de la liste. */
export const CATEGORIES_INSTITUTIONS = [
  {
    id: 'famille-et-education',
    t: 'Famille et éducation',
    d: "Les premiers cadres où l'on apprend qui on est censé être.",
  },
  {
    id: 'etat-et-pouvoir-politique',
    t: 'État et pouvoir politique',
    d: 'Qui décide, au nom de qui, et avec quels moyens de faire respecter la décision.',
  },
  {
    id: 'ordre-et-contrainte',
    t: 'Ordre et contrainte',
    d: "Les institutions qui tracent, au quotidien, la frontière entre le permis et le puni.",
  },
  {
    id: 'economie-et-travail',
    t: 'Économie et travail',
    d: 'Produire, échanger, et distribuer des positions selon ce que chacun y occupe.',
  },
  {
    id: 'savoir-et-soin',
    t: 'Savoir et soin',
    d: "Ce qu'une société tient pour vrai, et ce qu'elle fait des corps malades.",
  },
  {
    id: 'croyance-et-discours',
    t: 'Croyance et discours',
    d: "Ce qui se croit, se dit et se discute — et selon quelles règles.",
  },
];

export const INSTITUTIONS = [
  /* — Famille et éducation — */
  {
    id: 'famille',
    t: 'Famille',
    categorie: 'famille-et-education',
    d: "Le premier cadre où un individu apprend qui il est censé être, et comment se comporter avec autrui.",
    detail:
      "Avant l'école ou le travail, la famille transmet les premiers réflexes, le premier vocabulaire des émotions et les toutes premières attentes de rôle — fille, fils, aîné, cadet. Ce qu'elle transmet varie fortement selon le milieu social, sans que la plupart de ses membres n'en aient clairement conscience.",
    mecanismeSocial:
      "La famille socialise avant tout par imprégnation plutôt que par leçon : un enfant apprend un rapport au langage, à l'autorité et au corps bien avant de savoir qu'il apprend quoi que ce soit. Elle assigne des rôles selon l'âge et le rang dans la fratrie, distribue un statut hérité — nom, patrimoine, réseau — et exerce un contrôle social élémentaire, où l'affection elle-même sert de sanction. Bourdieu y voit surtout un relais discret de reproduction sociale : le capital culturel transmis à table ou dans les conversations compte, plus tard, autant que l'héritage matériel.",
    fondamentaux: ['socialisation', 'role-social', 'statut-social', 'reproduction-sociale', 'norme-sociale'],
    concepts: ['capital-culturel', 'habitus'],
    domaine: 'famille',
  },
  {
    id: 'ecole',
    t: 'École',
    categorie: 'famille-et-education',
    d: "L'institution qui promet l'égalité des chances par le mérite, et qui reconduit le plus souvent les inégalités qu'elle prétend corriger.",
    detail:
      "L'école socialise à grande échelle et selon un programme explicite, contrairement à la famille : elle enseigne un savoir commun, mais aussi une discipline du temps, du silence et de l'attente qui prépare, sans le dire, à d'autres institutions à venir.",
    mecanismeSocial:
      "Elle produit des normes écrites — un règlement, un emploi du temps — et des rôles clairs (élève, professeur, délégué), qu'elle sanctionne par la notation, la retenue ou l'exclusion temporaire. Bourdieu montre que ce contrôle en apparence neutre favorise en réalité les élèves déjà dotés d'un capital culturel proche de celui que l'école valorise, transformant une inégalité sociale de départ en inégalité scolaire qui semble, elle, ne devoir rien qu'au mérite. Foucault ajoute que la discipline scolaire — rangs, estrades, contrôles réguliers — dresse aussi les corps, bien avant de former les esprits.",
    fondamentaux: ['socialisation', 'role-social', 'norme-sociale', 'reproduction-sociale', 'controle-social'],
    concepts: ['capital-culturel', 'discipline'],
    domaine: 'education',
  },
  {
    id: 'universite',
    t: 'Université',
    categorie: 'famille-et-education',
    d: "Le lieu où un diplôme convertit officiellement un parcours d'études en position sociale reconnue.",
    detail:
      "Contrairement à l'école obligatoire, l'université sélectionne et hiérarchise plus ouvertement — filières, établissements, mentions — tout en socialisant à un rôle professionnel encore flou, appris par anticipation.",
    mecanismeSocial:
      "Elle institutionnalise le capital culturel acquis ailleurs, en le convertissant en titre officiellement négociable sur le marché du travail. Merton montre que ses membres s'y préparent souvent par socialisation anticipatrice : adopter par avance les manières du métier visé, avant même d'y accéder. Le contrôle social y passe surtout par l'évaluation continue — examens, jurys, comités — qui distribue statuts et positions bien au-delà du seul diplôme final.",
    fondamentaux: ['socialisation', 'statut-social', 'reproduction-sociale'],
    concepts: ['capital-culturel-institutionnalise', 'socialisation-anticipatrice'],
    domaine: 'education',
  },

  /* — État et pouvoir politique — */
  {
    id: 'etat',
    t: 'État',
    categorie: 'etat-et-pouvoir-politique',
    d: "L'institution qui revendique, avec succès la plupart du temps, le monopole légitime de la violence sur un territoire donné.",
    detail:
      "L'État ne se contente pas d'imposer des règles : il en garantit l'application par la force si nécessaire, tout en cherchant à faire croire que cette force n'a le plus souvent pas besoin de s'exercer, tant l'obéissance semble aller de soi.",
    mecanismeSocial:
      "Il produit des normes sous forme de lois, assigne des rôles civiques (citoyen, électeur, contribuable) et exerce un contrôle social à grande échelle par l'administration, la police et la justice qui en dépendent. Weber en fait le paradigme de la domination légale-rationnelle : on obéit à la fonction, pas à la personne qui l'occupe. Elias ajoute une lecture historique : cette autorité centrale résulte d'une longue compétition entre pouvoirs rivaux, jusqu'à ce qu'un seul finisse par concentrer la force armée et l'impôt.",
    fondamentaux: ['pouvoir', 'norme-sociale', 'controle-social', 'role-social'],
    concepts: ['domination-legale-rationnelle', 'monopole-de-la-violence'],
    domaine: 'politique',
  },
  {
    id: 'administration',
    t: 'Administration',
    categorie: 'etat-et-pouvoir-politique',
    d: "L'appareil de règles et de fonctionnaires par lequel l'État — et toute grande organisation — traduit ses décisions en actes routiniers.",
    detail:
      "Elle promet l'impartialité par la règle impersonnelle plutôt que par la faveur, au prix d'une lenteur et d'une rigidité qui deviennent, elles aussi, un objet d'étude à part entière.",
    mecanismeSocial:
      "L'administration produit des rôles très typés — le fonctionnaire, l'usager, le dossier — et un contrôle social par la procédure plutôt que par la contrainte directe. Weber y voit l'aboutissement de la rationalisation moderne ; Merton retourne l'outil contre son inventeur en montrant que la même règle, suivie à la lettre, produit un formalisme où respecter la procédure compte plus que remplir la mission. Crozier ajoute que ces règles laissent toujours des zones d'incertitude, que certains agents transforment en pouvoir informel bien réel.",
    fondamentaux: ['pouvoir', 'norme-sociale', 'role-social', 'controle-social'],
    concepts: ['bureaucratie', 'zone-d-incertitude', 'dysfonction'],
    domaine: 'organisations',
  },
  {
    id: 'parti-politique',
    t: 'Parti politique',
    categorie: 'etat-et-pouvoir-politique',
    d: "Un groupement organisé pour conquérir ou influencer le pouvoir, indépendamment de la position économique de ses membres.",
    detail:
      "Il traduit un ensemble d'intérêts et de valeurs disparates en un programme unifié, tout en devant se doter d'une organisation stable — chefs, militants, statuts — pour durer au-delà d'une seule campagne.",
    mecanismeSocial:
      "Il assigne des rôles internes (militant, cadre, candidat) et impose des normes de discipline de vote et de discours. Weber le définit précisément comme un groupement pour le pouvoir. Michels observe qu'un parti, même né démocratique, finit gouverné par une poignée de dirigeants professionnels — la loi d'airain de l'oligarchie — dès lors que l'organisation elle-même exige des compétences que la base ne partage pas toutes.",
    fondamentaux: ['pouvoir', 'role-social', 'norme-sociale'],
    concepts: ['parti', 'elitisme'],
    domaine: 'politique',
  },
  {
    id: 'justice',
    t: 'Justice',
    categorie: 'etat-et-pouvoir-politique',
    d: "L'institution chargée de dire le droit et de trancher les conflits, en s'appuyant sur des règles censées s'appliquer également à tous.",
    detail:
      "Elle prononce des jugements qui, en qualifiant officiellement une conduite d'infraction, ne se contentent pas de sanctionner : ils contribuent eux-mêmes à définir ce qu'une société tient pour déviant.",
    mecanismeSocial:
      "La justice fixe des normes en les codifiant, distribue des statuts (coupable, victime, partie civile) et exerce un contrôle social parmi les plus visibles d'une société. Foucault montre que sa fonction a historiquement glissé de la punition spectaculaire du corps vers une normalisation plus discrète, qui compare et classe les individus selon des savoirs experts plutôt que par le seul verdict.",
    fondamentaux: ['norme-sociale', 'deviance', 'controle-social', 'statut-social'],
    concepts: ['normalisation', 'savoir-pouvoir'],
    domaine: null,
  },

  /* — Ordre et contrainte — */
  {
    id: 'police',
    t: 'Police',
    categorie: 'ordre-et-contrainte',
    d: "L'institution chargée de faire respecter l'ordre au quotidien, souvent avant même qu'un juge n'intervienne.",
    detail:
      "Elle occupe une position particulière : dépositaire d'une part du monopole étatique de la force légitime, mais aussi premier filtre qui décide, dans les faits, quelles conduites seront réellement poursuivies.",
    mecanismeSocial:
      "Par ses contrôles, ses interpellations et son pouvoir d'appréciation, la police contribue directement à définir qui devient officiellement déviant — une conduite tolérée dans un quartier peut être sanctionnée dans un autre, selon qui l'observe. Becker rappelle que la déviance n'est jamais une propriété de l'acte seul, mais le produit d'une étiquette que certaines institutions ont le pouvoir d'imposer plus que d'autres.",
    fondamentaux: ['controle-social', 'deviance', 'pouvoir'],
    concepts: ['etiquetage', 'monopole-de-la-violence'],
    domaine: null,
  },
  {
    id: 'armee',
    t: 'Armée',
    categorie: 'ordre-et-contrainte',
    d: "L'institution qui organise et discipline la force armée d'une société, vers l'extérieur comme, potentiellement, vers l'intérieur.",
    detail:
      "Peu d'institutions imposent une discipline aussi totale sur le corps et le temps de ses membres, au nom d'un objectif — la défense — que la plupart d'entre eux n'auront jamais à réaliser concrètement.",
    mecanismeSocial:
      "L'armée resocialise entièrement la recrue par une rupture volontaire avec la vie civile — uniforme, grade, casernement — qui réassigne un statut et un rôle nouveaux dès les premiers jours. Foucault y voit un laboratoire historique de la discipline : dresser des corps dociles par un contrôle minutieux du temps, du geste et de l'espace, bien avant que cette même discipline ne se diffuse à l'école ou à l'usine.",
    fondamentaux: ['socialisation', 'role-social', 'controle-social', 'statut-social'],
    concepts: ['discipline', 'institution-totale'],
    domaine: null,
  },
  {
    id: 'prison',
    t: 'Prison',
    categorie: 'ordre-et-contrainte',
    d: "L'institution qui prive de liberté au nom de la loi, et qui prend en charge, ce faisant, la totalité de l'existence de ceux qu'elle enferme.",
    detail:
      "Loin de se limiter à punir, elle organise entièrement le temps, l'espace et les relations de ceux qui y vivent, au point de devenir l'exemple le plus souvent cité d'institution totale.",
    mecanismeSocial:
      "Goffman montre qu'entrer en prison dépouille d'abord l'identité antérieure — vêtements, objets, habitudes — avant que les détenus ne reconstruisent, malgré tout, un espace de dignité informel. Foucault ajoute que la surveillance carcérale, organisée sur le principe panoptique, cherche moins à punir par la douleur qu'à normaliser durablement la conduite ; le stigmate attaché au passage en prison, lui, continue de peser bien après la sortie.",
    fondamentaux: ['controle-social', 'deviance', 'statut-social'],
    concepts: ['institution-totale', 'panoptisme', 'stigmate'],
    domaine: null,
  },

  /* — Économie et travail — */
  {
    id: 'entreprise',
    t: 'Entreprise',
    categorie: 'economie-et-travail',
    d: "L'organisation qui coordonne travail et capital pour produire des biens ou des services, en général à but lucratif.",
    detail:
      "Sur son organigramme officiel se superpose toujours un fonctionnement réel plus informel, où le pouvoir circule aussi par les zones d'incertitude que chacun contrôle.",
    mecanismeSocial:
      "L'entreprise assigne des rôles (poste, fonction, hiérarchie) et des statuts précis, formalisés par un contrat et une fiche de paie. Weber en fait un cas d'école de la bureaucratie rationnelle-légale ; Crozier et Friedberg montrent que ses règles laissent toujours des marges d'incertitude que certains salariés transforment en pouvoir informel, souvent sans rapport avec leur position officielle. Le contrôle social y passe par l'évaluation, la promotion ou le licenciement, plus rarement par la contrainte directe.",
    fondamentaux: ['pouvoir', 'role-social', 'statut-social', 'norme-sociale'],
    concepts: ['bureaucratie', 'zone-d-incertitude'],
    domaine: 'organisations',
  },
  {
    id: 'marche',
    t: 'Marché',
    categorie: 'economie-et-travail',
    d: "Le mécanisme par lequel des échanges dispersés s'ajustent, en principe sans autorité centrale, par le seul jeu de l'offre et de la demande.",
    detail:
      "Aucune institution ne prétend moins imposer de normes que le marché, et pourtant il en produit sans cesse — des prix de référence, des standards de qualité, des attentes de comportement entre vendeurs et acheteurs.",
    mecanismeSocial:
      "Weber situe la classe — la position sur le marché — comme un axe de position sociale distinct du statut ou du parti, preuve que le marché distribue lui aussi des positions bien réelles. Sa régulation n'est jamais purement spontanée : elle s'appuie sur un droit du contrat, des autorités de la concurrence, une confiance minimale entre inconnus — autant de conditions sociales que le marché suppose sans jamais les produire lui-même.",
    fondamentaux: ['norme-sociale', 'statut-social'],
    concepts: ['classe', 'ethique-protestante'],
    domaine: 'economique',
  },
  {
    id: 'travail',
    t: 'Travail',
    categorie: 'economie-et-travail',
    d: "L'activité productive organisée socialement, rémunérée ou non, autour de laquelle se distribue une grande part des statuts d'une société.",
    detail:
      "Le travail n'est jamais qu'une affaire technique : la manière dont il est divisé façonne directement la manière dont une société tient ensemble.",
    mecanismeSocial:
      "Durkheim en fait la source même de la solidarité moderne : plus la division du travail se spécialise, plus chacun dépend d'autrui pour ce qu'il ne sait plus produire seul. Marx y voit d'abord un rapport de production qui distribue inégalement pouvoir et ressources entre ceux qui possèdent les moyens de produire et ceux qui n'ont que leur force de travail à vendre. Le contrôle social y passe par le contrat, la hiérarchie et l'évaluation de la performance.",
    fondamentaux: ['role-social', 'statut-social', 'pouvoir'],
    concepts: ['division-du-travail-social', 'forces-productives'],
    domaine: 'travail',
  },
  {
    id: 'syndicat',
    t: 'Syndicat',
    categorie: 'economie-et-travail',
    d: "L'organisation par laquelle des travailleurs se regroupent pour peser collectivement sur leurs conditions de travail.",
    detail:
      "Il transforme une somme de situations individuelles, souvent vécues séparément, en un rapport de force reconnu par l'employeur et par la loi.",
    mecanismeSocial:
      "Blumer montre que l'action collective naît d'un processus d'interprétation et d'ajustement mutuel entre participants, non de l'application automatique d'une norme déjà là — un mouvement se construit en marchant. Touraine ajoute qu'un syndicat, quand il devient un authentique mouvement social, ne défend plus seulement un intérêt catégoriel : il porte un enjeu qu'il situe au niveau de la société tout entière.",
    fondamentaux: ['pouvoir', 'role-social'],
    concepts: ['action-collective', 'mouvement-social'],
    domaine: null,
  },

  /* — Savoir et soin — */
  {
    id: 'science',
    t: 'Science',
    categorie: 'savoir-et-soin',
    d: "L'institution qui produit un savoir validé par les pairs, censé valoir indépendamment de qui l'énonce.",
    detail:
      "Elle revendique une neutralité que l'histoire de ses propres catégories dément souvent : ce qui compte comme un fait scientifique légitime a toujours été aussi une affaire de position sociale.",
    mecanismeSocial:
      "Haraway rappelle qu'aucun savoir ne surplombe réellement le monde depuis nulle part : tout savoir est situé, produit depuis un corps, un lieu et une histoire particuliers. Foucault ajoute que savoir et pouvoir se produisent mutuellement — une expertise scientifique oriente déjà, en la qualifiant, la décision qu'elle prétend seulement éclairer. La communauté scientifique impose néanmoins ses propres normes de validation, ses statuts (doctorant, titulaire, référent) et son contrôle par les pairs.",
    fondamentaux: ['norme-sociale', 'statut-social', 'controle-social'],
    concepts: ['savoirs-situes', 'savoir-pouvoir'],
    domaine: null,
  },
  {
    id: 'medecine',
    t: 'Médecine',
    categorie: 'savoir-et-soin',
    d: "L'institution qui définit, diagnostique et prend en charge ce qu'une société reconnaît comme une maladie.",
    detail:
      "Elle ne se contente pas de soigner : en qualifiant officiellement un état de pathologique, elle façonne aussi le rôle que la personne concernée est ensuite autorisée, ou tenue, de jouer.",
    mecanismeSocial:
      "Elle assigne un rôle de malade reconnu — avec ses droits (être excusé) et ses devoirs (chercher à guérir) — qui n'existe qu'une fois le diagnostic posé. Simmel note que la relation entre soignant et patient se règle sur un dosage précis de proximité et de distance, jamais sur la seule proximité. Foucault montre que la médecine moderne a aussi développé un pouvoir de normalisation qui dépasse le seul soin, en comparant chaque corps à des normes de santé de plus en plus fines.",
    fondamentaux: ['role-social', 'statut-social', 'controle-social'],
    concepts: ['distance-sociale', 'normalisation'],
    domaine: 'sante',
  },
  {
    id: 'hopital',
    t: 'Hôpital',
    categorie: 'savoir-et-soin',
    d: "L'institution qui concentre en un même lieu le soin, le diagnostic et, souvent, l'hébergement complet du patient.",
    detail:
      "Certains services hospitaliers, en particulier psychiatriques, poussent la prise en charge jusqu'à organiser la totalité de la vie quotidienne de leurs patients.",
    mecanismeSocial:
      "Goffman a précisément forgé le concept d'institution totale en observant un grand hôpital psychiatrique : le patient interné y est dépouillé de ses repères antérieurs — vêtements, objets, habitudes — avant d'apprendre un nouveau rôle et de reconstruire, malgré tout, un espace d'autonomie informelle. Un même service organise ainsi rôle, statut et contrôle social en une seule institution, ce que Luhmann relève comme un trait des sociétés modernes : chaque sous-système, y compris l'hôpital, obéit à sa logique propre, irréductible aux autres.",
    fondamentaux: ['controle-social', 'role-social', 'statut-social'],
    concepts: ['institution-totale', 'differenciation-fonctionnelle'],
    domaine: 'sante',
  },

  /* — Croyance et discours — */
  {
    id: 'religion',
    t: 'Religion',
    categorie: 'croyance-et-discours',
    d: "L'institution qui organise le rapport collectif au sacré, et qui produit, ce faisant, bien plus que de la seule croyance.",
    detail:
      "Durkheim la traite comme un fait social parmi d'autres : le sacré n'est pas d'abord affaire de dieux, mais la manière dont une collectivité se représente et se célèbre elle-même.",
    mecanismeSocial:
      "La religion fixe des normes rituelles précises et assigne des rôles (fidèle, officiant, converti) sanctionnés par l'appartenance ou l'exclusion de la communauté. Weber montre qu'elle produit aussi des effets qu'elle ne visait pas : l'éthique protestante, en valorisant le travail méthodique et l'épargne plutôt que la dépense, a involontairement fourni un terreau à l'esprit du capitalisme moderne.",
    fondamentaux: ['norme-sociale', 'role-social', 'controle-social'],
    concepts: ['religion-comme-fait-social', 'ethique-protestante'],
    domaine: 'religion',
  },
  {
    id: 'medias',
    t: 'Médias',
    categorie: 'croyance-et-discours',
    d: "L'ensemble des supports qui produisent et diffusent l'information à grande échelle, et qui façonnent, ce faisant, ce dont une société débat.",
    detail:
      "Ils ne se contentent pas de rapporter des faits : le choix de ce qui mérite d'être montré, et de la manière de le montrer, oriente déjà ce qu'une société tiendra pour un problème digne d'attention.",
    mecanismeSocial:
      "Habermas situe les médias au cœur de l'espace public : un espace de débat où l'opinion devrait se former par l'argument plutôt que par l'autorité — un idéal que la concentration économique des médias contemporains met sous tension. Le contrôle social qu'ils exercent est diffus : moins une censure directe qu'une hiérarchisation constante de ce qui compte comme information légitime, digne d'être discutée.",
    fondamentaux: ['controle-social', 'norme-sociale'],
    concepts: ['espace-public'],
    domaine: 'medias',
  },
];
