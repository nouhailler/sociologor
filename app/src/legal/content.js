/**
 * Source unique du contenu légal.
 *
 * Ce module est rendu à deux endroits — la modale du premier lancement et le
 * chapitre « Informations légales » de la documentation — par le même
 * composant (`LegalSections`). Ne jamais recopier un paragraphe dans un écran :
 * il n'existerait que là.
 *
 * Règles de rédaction :
 * - Aucune information juridique inventée. Ce qui n'est pas connu reste
 *   `A_COMPLETER` et s'affiche comme tel, en évidence.
 * - La politique de confidentialité décrit CE build, lu dans le code. Si un
 *   appel réseau, une clé de stockage ou une permission est ajouté, le
 *   paragraphe correspondant doit être mis à jour — `npm run doc:audit` compare
 *   les hôtes du code à ceux nommés ici et échoue sinon.
 * - Absence volontaire consignée : aucune clause d'âge minimum n'est prévue,
 *   l'application ne collectant aucune donnée et ne comportant aucun contenu
 *   réservé aux adultes.
 */

export const A_COMPLETER = '[À COMPLÉTER]';

export const LEGAL_NOTICE_VERSION = '1.0';

export const EDITEUR = {
  nom: 'Swinux',
  adresse: 'Canton de Vaud, Suisse',
  email: 'contact@swinux.ch',
  // Choix assumé : la responsabilité éditoriale est portée par la personne
  // morale, sans nommer de personne physique.
  directeurPublication: 'Swinux',
};

export const HEBERGEUR = {
  nom: 'Netlify, Inc.',
  role: "Hébergement des fichiers de l'application",
  // Adresse publique du siège de Netlify. À revérifier sur netlify.com si
  // l'entreprise déménage : rien dans le code ne le détectera.
  adresse: '512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis',
  domaine: 'sociologor.netlify.app',
};

/** Hôtes externes réellement joints par l'application — vérifiés par `npm run doc:audit`. */
export const HOTES_EXTERNES = ['fonts.googleapis.com', 'fonts.gstatic.com'];

/** Clés de stockage local réellement écrites — vérifiées par `npm run doc:audit`. */
export const CLES_STOCKAGE = [
  'sociologor.favs.v1',
  'sociologor.settings.v1',
  'legal_notice_acknowledged',
  'legal_notice_acknowledged_version',
];

export const legalNotice = {
  title: '⚠️ Information importante',
  shortWarning: [
    "Cette application est fournie à titre informatif et pratique. Malgré les précautions prises lors de son développement, elle peut contenir des erreurs, des imprécisions ou présenter des limitations techniques.",
    "L'utilisation de cette application se fait sous votre responsabilité. Les informations, résultats, données ou recommandations fournis par l'application ne doivent pas être considérés comme infaillibles.",
    "Pour toute information importante ou décision susceptible d'avoir des conséquences, vérifiez les données auprès de sources fiables et officielles ou auprès d'un professionnel compétent.",
    "En utilisant cette application, vous reconnaissez avoir pris connaissance de cet avertissement.",
  ],
  version: LEGAL_NOTICE_VERSION,
};

/** Mentions légales — les huit sections minimales du standard. */
export const MENTIONS_LEGALES = {
  title: 'Mentions légales',
  intro: `Éditeur : ${EDITEUR.nom} · ${EDITEUR.adresse} · ${EDITEUR.email}`,
  sections: [
    {
      id: 'editeur',
      title: "Éditeur de l'application",
      fields: [
        { k: 'Éditeur', v: EDITEUR.nom },
        { k: 'Adresse', v: EDITEUR.adresse },
        { k: 'Contact', v: EDITEUR.email },
        { k: 'Directeur de la publication', v: EDITEUR.directeurPublication },
        { k: 'Domaine de publication', v: HEBERGEUR.domaine },
      ],
    },
    {
      id: 'hebergeur',
      title: 'Hébergeur',
      fields: [
        { k: 'Hébergeur', v: HEBERGEUR.nom },
        { k: 'Rôle', v: HEBERGEUR.role },
        { k: 'Adresse', v: HEBERGEUR.adresse },
      ],
      body: [
        "L'hébergeur assure la mise à disposition des fichiers de l'application. Il n'a pas accès aux données que vous conservez sur votre appareil, celles-ci ne lui étant jamais transmises.",
      ],
    },
    {
      id: 'avertissement',
      title: 'Avertissement',
      body: legalNotice.shortWarning,
    },
    {
      id: 'limitation',
      title: 'Limitation de responsabilité',
      body: [
        "Cette application est proposée à titre informatif, documentaire, éducatif et/ou pratique selon sa finalité. Elle est destinée à fournir à l'utilisateur des informations, données, outils ou fonctionnalités destinés à faciliter son utilisation.",
        "L'éditeur s'efforce de fournir des informations aussi fiables, pertinentes et actualisées que possible. Toutefois, aucune garantie ne peut être donnée quant à l'exactitude, l'exhaustivité, l'actualité ou la pertinence des informations présentées.",
        "Certaines informations peuvent provenir de sources externes ou être générées, calculées ou interprétées automatiquement. Des erreurs, omissions, imprécisions ou incohérences peuvent donc subsister.",
        "L'utilisateur reconnaît utiliser l'application sous sa propre responsabilité et demeure seul responsable de l'utilisation qu'il fait des informations et fonctionnalités proposées.",
        "L'application ne doit pas être considérée comme une source unique ou définitive d'information lorsqu'une décision importante, professionnelle, financière, médicale, juridique, scientifique, géographique ou liée à la sécurité est concernée.",
        "Lorsque cela est nécessaire, l'utilisateur doit vérifier les informations auprès de sources officielles, de documents de référence ou d'un professionnel qualifié.",
        "Malgré les efforts déployés pour assurer le bon fonctionnement de l'application, l'éditeur ne garantit pas que celle-ci sera disponible en permanence, exempte d'erreurs ou compatible avec tous les appareils, systèmes d'exploitation, navigateurs, réseaux ou configurations.",
        "Des interruptions, ralentissements, pertes de connexion, erreurs techniques ou indisponibilités temporaires peuvent notamment survenir.",
        "Les résultats, calculs, estimations, localisations, statistiques, recommandations ou autres données produits par l'application sont fournis à titre indicatif, sauf indication contraire explicite.",
        "L'utilisateur doit apprécier leur pertinence en fonction de son propre contexte et procéder aux vérifications nécessaires avant toute utilisation susceptible d'entraîner des conséquences importantes.",
        "Dans les limites autorisées par la réglementation applicable, l'éditeur ne saurait être tenu responsable des dommages, pertes, préjudices ou conséquences résultant directement ou indirectement de l'utilisation, de l'impossibilité d'utiliser ou de l'interprétation des informations ou fonctionnalités proposées par l'application.",
        "Cette limitation concerne notamment, lorsque cela est applicable, les erreurs ou omissions dans les informations, les dysfonctionnements techniques, les interruptions de service, les pertes de données, les problèmes de connexion, les incompatibilités matérielles ou logicielles et les décisions prises par l'utilisateur sur la base des informations fournies.",
        "Lorsque l'application utilise ou référence des données provenant de sources externes, celles-ci peuvent évoluer, devenir indisponibles ou être modifiées indépendamment de l'éditeur. L'éditeur ne garantit donc pas la disponibilité permanente ni l'exactitude des contenus provenant de ces sources.",
        "Les fonctionnalités, contenus, données et services proposés par l'application peuvent être modifiés, mis à jour, suspendus ou supprimés à tout moment afin d'assurer son évolution et sa maintenance.",
        "L'utilisation de l'application implique que l'utilisateur a pris connaissance du présent avertissement et accepte les conditions d'utilisation applicables à l'application.",
      ],
    },
    {
      id: 'utilisation',
      title: "Utilisation de l'application",
      body: [
        "Sociologor est une application de consultation destinée à l'étude et à la culture générale. Elle ne requiert ni compte, ni inscription, ni transmission de données personnelles.",
        "Son usage est libre dans un cadre personnel ou pédagogique. La reprise du contenu suppose d'en citer la source et de respecter les droits rappelés à la section « Licences et crédits » de la documentation.",
      ],
    },
    {
      id: 'exactitude',
      title: 'Exactitude des informations',
      body: [
        "Les fiches proposées sont des synthèses pédagogiques : elles résument des pensées complexes en quelques paragraphes, au prix de simplifications assumées.",
        "Elles ne remplacent ni les textes des auteurs, ni les ouvrages de référence, ni un enseignement. Pour un travail universitaire, reportez-vous aux œuvres citées et à la bibliographie critique de chaque fiche.",
        "Les dates, titres et attributions ont été rassemblés avec soin, mais des erreurs restent possibles. Toute correction peut être signalée à l'éditeur.",
      ],
    },
    {
      id: 'disponibilite',
      title: 'Dysfonctionnements et disponibilité',
      body: [
        "L'application peut être indisponible lors d'une opération de maintenance, d'une mise à jour ou d'une défaillance de l'hébergeur.",
        "Une fois enregistrée sur votre appareil, elle reste consultable sans connexion : une indisponibilité du serveur n'empêche pas la lecture des fiches déjà mises en cache, mais empêche l'installation initiale et les mises à jour.",
      ],
    },
    {
      id: 'donnees',
      title: 'Données et résultats',
      body: [
        "L'application ne produit ni calcul, ni estimation, ni recommandation personnalisée. Elle affiche un contenu éditorial fixe, livré avec elle.",
        "La « notion du jour » est le seul élément variable : elle est choisie à partir de la date de votre appareil, sans qu'aucune donnée ne soit enregistrée ni transmise.",
        "Vos fiches épinglées et vos réglages sont conservés sur votre appareil et n'en sortent jamais. Voir la politique de confidentialité.",
      ],
    },
    {
      id: 'sources',
      title: 'Sources externes',
      body: [
        `L'application charge la police de caractères Inter depuis les serveurs de Google Fonts (${HOTES_EXTERNES.join(', ')}). Cette requête est émise par votre navigateur ; la police est ensuite conservée en cache. Si elle est indisponible, l'application reste lisible avec la police de votre système.`,
        "Aucune autre ressource externe n'est chargée : ni traceur, ni mesure d'audience, ni publicité, ni réseau social.",
        "Les ouvrages, citations et références bibliographiques mentionnés dans les fiches renvoient à des travaux publiés par leurs auteurs et éditeurs respectifs.",
      ],
    },
    {
      id: 'evolution',
      title: "Évolution de l'application",
      body: [
        "Les fonctionnalités, le contenu des fiches et la présente notice peuvent évoluer. Les mises à jour sont téléchargées lorsque l'appareil est connecté, et ne sont appliquées qu'après votre accord, signalé par un bandeau.",
        `Version de la présente notice : ${LEGAL_NOTICE_VERSION}.`,
      ],
    },
  ],
};

/**
 * Politique de confidentialité — document distinct des mentions légales.
 * Chaque affirmation ci-dessous a été vérifiée dans le code de ce build.
 */
export const CONFIDENTIALITE = {
  title: 'Politique de confidentialité',
  intro:
    "Cette politique décrit le fonctionnement réel de cette version de l'application, établi par lecture de son code source.",
  sections: [
    {
      id: 'principe',
      title: 'Principe',
      body: [
        "Sociologor ne collecte aucune donnée personnelle. Il n'y a ni compte, ni inscription, ni identifiant, ni serveur applicatif recevant vos informations.",
        "Tout ce que vous produisez en utilisant l'application reste sur votre appareil.",
      ],
    },
    {
      id: 'stockage',
      title: 'Ce qui est enregistré sur votre appareil',
      body: [
        "L'application écrit quatre valeurs dans le stockage local (`localStorage`) de votre navigateur, et rien d'autre. Ni cookie, ni IndexedDB, ni fichier local.",
      ],
      fields: [
        { k: 'sociologor.favs.v1', v: 'La liste des fiches que vous avez épinglées (identifiants d\'auteurs).' },
        { k: 'sociologor.settings.v1', v: 'Vos deux réglages : affichage des citations, écran de démarrage.' },
        { k: 'legal_notice_acknowledged', v: "L'indication que cet avertissement a été lu." },
        { k: 'legal_notice_acknowledged_version', v: 'La version de la notice que vous avez lue.' },
      ],
    },
    {
      id: 'sortant',
      title: 'Ce qui sort de votre appareil',
      body: [
        `Une seule ressource externe est chargée : la police Inter, depuis ${HOTES_EXTERNES.join(' et ')}. Comme pour tout site utilisant ces polices, votre navigateur émet alors une requête vers ces serveurs, qui peuvent en conserver une trace technique (adresse IP, type de navigateur) selon la politique de Google. Cette requête ne contient aucune donnée de l'application.`,
        "S'y ajoute le téléchargement de l'application elle-même et de ses mises à jour depuis son hébergeur, qui journalise ces accès comme n'importe quel serveur web.",
        "Aucun autre appel réseau n'existe dans le code : ni mesure d'audience, ni traceur publicitaire, ni service tiers, ni intelligence artificielle. Vos recherches, vos fiches épinglées, vos réglages et vos exports ne sont transmis à personne.",
      ],
    },
    {
      id: 'garanties',
      title: 'Ce que le code garantit',
      body: [
        "Le texte que vous saisissez dans la recherche n'existe que dans l'adresse de l'écran courant : il n'est ni enregistré, ni transmis.",
        "L'export Markdown est composé dans votre navigateur ; le fichier ne transite par aucun serveur.",
        "Le partage transmet uniquement le titre, le résumé et l'adresse de la fiche, à l'application que vous choisissez dans la feuille de partage de votre système.",
        "La notion du jour est calculée à partir de la date de votre appareil, localement, sans stockage ni envoi.",
      ],
    },
    {
      id: 'permissions',
      title: 'Permissions',
      body: [
        "L'application ne demande aucune permission système : ni localisation, ni caméra, ni microphone, ni notifications, ni contacts, ni accès aux fichiers.",
        "Elle utilise, au moment où vous touchez le bouton de partage, la feuille de partage du système ou l'écriture dans le presse-papiers. Un refus n'a d'autre conséquence que l'affichage du lien à copier à la main.",
      ],
    },
    {
      id: 'conservation',
      title: 'Durée de conservation',
      body: [
        "Vos données locales sont conservées tant que vous ne les effacez pas. Elles disparaissent lorsque vous utilisez « Effacer mes données locales », lorsque vous supprimez les données du site dans votre navigateur, ou lorsque vous désinstallez l'application.",
        "Certains systèmes, notamment iOS, suppriment automatiquement les données des sites non consultés pendant plusieurs semaines lorsqu'ils ne sont pas installés sur l'écran d'accueil.",
      ],
    },
    {
      id: 'droits',
      title: 'Vos droits',
      body: [
        "Aucune donnée personnelle n'étant collectée ni transmise, il n'existe aucun fichier vous concernant chez l'éditeur : il n'y a donc rien à consulter, rectifier ou supprimer auprès de lui.",
        "Vos droits s'exercent directement sur votre appareil : consulter vos données dans l'écran Paramètres, les supprimer par « Effacer mes données locales ». L'export Markdown d'une fiche tient lieu de portabilité du contenu consulté.",
        `Pour toute question, écrivez à ${EDITEUR.email}.`,
      ],
    },
    {
      id: 'securite',
      title: 'Sécurité',
      body: [
        "L'application est servie en HTTPS et s'exécute dans le bac à sable de votre navigateur. Vos données locales sont accessibles aux seuls scripts de ce site, sur cet appareil.",
        "Elles ne sont pas chiffrées : quiconque a accès à votre appareil déverrouillé peut les lire. Elles ne contiennent toutefois que des identifiants d'auteurs et deux préférences d'affichage.",
      ],
    },
    {
      id: 'modifications',
      title: 'Modifications de cette politique',
      body: [
        "Cette politique décrit la version indiquée dans l'écran Paramètres. Toute évolution du fonctionnement — un nouvel appel réseau, une nouvelle donnée stockée — donnera lieu à sa mise à jour, publiée avec la version correspondante de l'application.",
        "Ce texte a été rédigé à partir du code de l'application. Sa qualification juridique et sa conformité à une réglementation donnée n'ont pas fait l'objet d'une validation par un professionnel du droit : une relecture juridique reste nécessaire avant publication.",
      ],
    },
  ],
};
