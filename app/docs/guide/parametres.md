# Écran Paramètres

## Objectif

Régler l'affichage, consulter et effacer les données locales, connaître la
version installée, ouvrir la documentation.

## Accès

- Entrée **Paramètres** en bas du rail (écran large), ou icône ⚙️ de l'en-tête
  de l'accueil (mobile).
- Adresse `/parametres`.

## Éléments de l'interface

| Section | Contenu |
|---|---|
| **Affichage** | *Afficher les citations* (case à cocher) et *Écran de démarrage* (Accueil / Graphe) |
| **Données locales** | Nombre de fiches épinglées, clés de stockage utilisées (réglages, fiches, avertissement légal), absence de compte et de télémétrie, bouton d'effacement |
| **À propos** | Version, date de build, contenu embarqué, état du réseau |
| Boutons | *📚 Aide & documentation*, *Informations légales* |

## Actions et résultats

| Action | Résultat |
|---|---|
| Cocher / décocher *Afficher les citations* | Effet immédiat sur les fiches et sur l'export Markdown |
| Choisir un écran de démarrage | S'applique au prochain lancement de l'application |
| **Effacer mes données locales** | Demande une confirmation, puis supprime les fiches épinglées et remet les réglages par défaut. Ne réaffiche pas l'avertissement légal |

L'effacement est **définitif et local** : il n'y a pas de sauvegarde ailleurs.

## Cas particuliers

Si le stockage local est indisponible, un bandeau le signale en haut de
l'écran : les réglages fonctionnent pour la session en cours mais ne seront pas
conservés.

## Erreurs possibles

Aucun message d'erreur bloquant. Voir [Messages et états](/documentation/reference/erreurs).

## Navigation

Paramètres → documentation, informations légales.

## Voir aussi

- [Tous les paramètres](/documentation/settings/index)
- [Référence des paramètres](/documentation/reference/parametres)
