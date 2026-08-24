# Référence des paramètres

Tableau condensé des réglages exposés à l'utilisateur. Le détail figure dans
[Tous les paramètres](/documentation/settings/index).

| Paramètre | Identifiant | Type | Défaut | Valeurs | Description |
|---|---|---|---|---|---|
| Afficher les citations | `showCitations` | booléen | activé | activé / désactivé | Affiche la section Citations des fiches et l'inclut dans l'export Markdown |
| Écran de démarrage | `startView` | sélection | Accueil | `home`, `graph` | Écran ouvert au lancement de l'application |

## Stockage

Les deux réglages sont enregistrés ensemble dans `localStorage`, sous la clé
`sociologor.settings.v1` :

```
{"showCitations":true,"startView":"home"}
```

## Actions associées

| Action | Effet | Réversible |
|---|---|---|
| Effacer mes données locales | Supprime `sociologor.favs.v1` et `sociologor.settings.v1` | Non |

## Réglages absents

Thème (sombre uniquement), langue (français uniquement), taille du texte
(suit le navigateur), tri ou dossiers dans « Mes fiches », choix de la notion
du jour.
