# Tous les paramètres

Sociologor expose **deux réglages**, plus une action d'effacement. Ils se
trouvent dans **Paramètres** (icône ⚙️ sur mobile, entrée du rail sur écran
large).

Un tableau condensé figure dans la
[Référence des paramètres](/documentation/reference/parametres).

---

## Afficher les citations

- **Nom exact** : Afficher les citations
- **Identifiant interne** : `showCitations`
- **Description** : affiche ou masque la section **Citations** des fiches.
- **Type** : booléen (case à cocher)
- **Valeur par défaut** : activé
- **Valeurs possibles** : activé / désactivé
- **Effet** : quand il est désactivé, la section **Citations** disparaît des
  fiches **et** n'est plus incluse dans l'export Markdown.
- **Application** : immédiate
- **Stockage** : `localStorage`, clé `sociologor.settings.v1`
- **Interactions** : modifie le résultat de l'[export Markdown](/documentation/features/export-markdown)
- **Réinitialisation** : **Effacer mes données locales**, ou recocher la case

---

## Écran de démarrage

- **Nom exact** : Écran de démarrage
- **Identifiant interne** : `startView`
- **Description** : écran ouvert au lancement de l'application.
- **Type** : sélection (contrôle segmenté)
- **Valeur par défaut** : Accueil
- **Valeurs possibles** : `home` (Accueil) · `graph` (Graphe)
- **Effet** : l'adresse racine `/` affiche l'accueil ou redirige vers le
  graphe. L'accueil reste toujours accessible par l'onglet Accueil et par
  l'adresse `/accueil`.
- **Application** : au prochain affichage de la racine `/` — c'est-à-dire au
  prochain lancement de l'application
- **Stockage** : `localStorage`, clé `sociologor.settings.v1`
- **Interactions** : aucune
- **Réinitialisation** : **Effacer mes données locales**, ou choisir Accueil

---

## Effacer mes données locales

- **Nom exact** : Effacer mes données locales
- **Type** : action, avec confirmation en deux temps
- **Effet** : supprime les clés `sociologor.favs.v1` et
  `sociologor.settings.v1`, vide la liste des fiches épinglées et rétablit les
  réglages par défaut. Un message confirme : « Données locales effacées ».
- **Application** : immédiate
- **Réversibilité** : **aucune** — rien n'est sauvegardé ailleurs.

Cette action n'efface **ni** l'application mise en cache par le service worker,
**ni** la mémorisation de l'avertissement légal (`legal_notice_acknowledged`) :
pour tout remettre à zéro, supprimez les données du site dans le navigateur, ou
désinstallez l'application.

---

## Ce qui n'est pas réglable

- Le thème : l'interface est sombre, sans variante claire.
- La langue : français uniquement.
- La taille du texte : elle suit les réglages du navigateur et du système.
- Le contenu des fiches : il est livré avec l'application.

## Voir aussi

- [Écran Paramètres](/documentation/guide/parametres)
- [Stockage local](/documentation/data/stockage-local)
