# Mise à jour et désinstallation

## Comment les mises à jour arrivent

Sociologor se met à jour toute seule, mais **jamais sans vous prévenir** :

1. Au lancement, si l'appareil est connecté, l'application vérifie
   l'existence d'une nouvelle version.
2. Si une version est disponible, elle est téléchargée en arrière-plan.
3. Un bandeau **« Une nouvelle version est disponible »** apparaît en haut de
   l'écran, avec un bouton **Mettre à jour**.
4. La nouvelle version ne s'active qu'après un appui sur ce bouton. L'écran
   est alors rechargé.

Si vous ignorez le bandeau, l'ancienne version continue de fonctionner. La
mise à jour sera reproposée à la prochaine ouverture.

> Ce comportement est volontaire (`registerType: 'prompt'`) : une lecture en
> cours n'est jamais interrompue par un rechargement automatique.

## Vos données lors d'une mise à jour

Les fiches épinglées et les réglages sont conservés : ils sont stockés
séparément de l'application. Voir [Stockage local](/documentation/data/stockage-local).

## Vérifier la version installée

**Paramètres → À propos** affiche la version de l'application et sa date de
build.

## Désinstaller

| Plateforme | Procédure |
|---|---|
| Android | Appui long sur l'icône → *Désinstaller* |
| iOS / iPadOS | Appui long sur l'icône → *Supprimer l'app* |
| Chrome / Edge (ordinateur) | Dans la fenêtre de l'app : menu **⋮** → *Désinstaller* |
| Simple onglet | Fermer l'onglet ; pour tout effacer, supprimer les données du site |

**Ce que la désinstallation supprime** : l'application en cache, les fiches
épinglées et les réglages, s'ils étaient stockés par le navigateur pour ce
site. Aucune donnée ne subsiste ailleurs : rien n'est envoyé à un serveur.

## Voir aussi

- [L'application n'est pas à jour](/documentation/troubleshooting/mise-a-jour-bloquee)
- [Journal des versions](/documentation/versions/index)
