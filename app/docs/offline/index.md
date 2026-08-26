# Fonctionnement hors connexion

Sociologor est conçue pour être utilisable **sans réseau**. Tout le contenu —
les 15 fiches, le graphe, la recherche et cette documentation — est embarqué
dans l'application.

## Comment ça marche

1. À la première visite **en ligne**, un service worker enregistre
   l'application dans le cache du navigateur (environ 350 Ko).
2. Aux visites suivantes, les fichiers sont servis depuis ce cache : le
   démarrage ne dépend plus du réseau.
3. Quand l'appareil est connecté, l'application vérifie s'il existe une
   nouvelle version, et vous propose de l'appliquer.

```
1re visite (en ligne)   →  mise en cache de l'application
                              ↓
visites suivantes       →  démarrage depuis le cache, réseau facultatif
                              ↓
retour du réseau        →  vérification de mise à jour → bandeau
```

## Ce qui fonctionne hors connexion

| Fonction | Hors ligne | En ligne | Synchronisation |
|---|:--:|:--:|:--:|
| Consulter une fiche | Oui | Oui | Sans objet |
| Parcourir les domaines | Oui | Oui | Sans objet |
| Consulter la carte des courants | Oui | Oui | Sans objet |
| Notion du jour | Oui | Oui | Sans objet |
| Graphe des filiations | Oui | Oui | Sans objet |
| Recherche | Oui | Oui | Sans objet |
| Épingler / retirer une fiche | Oui | Oui | Aucune |
| Export Markdown | Oui | Oui | Sans objet |
| Partage (copie du lien) | Oui | Oui | Sans objet |
| Documentation intégrée | Oui | Oui | Sans objet |
| **Première installation** | **Non** | Oui | Sans objet |
| **Mise à jour de l'application** | **Non** | Oui | Sans objet |
| **Police Inter (Google Fonts)** | Depuis le cache | Oui | Sans objet |

## Quand le réseau disparaît

Un bandeau apparaît en haut de l'écran : « Hors connexion — les 15 fiches
restent consultables. » Aucune action n'est interrompue ; rien n'est mis en
file d'attente, puisque rien n'est envoyé.

## Quand le réseau revient

Le bandeau disparaît. Si une nouvelle version existe, le bandeau de mise à jour
la propose.

## Ce qui ne marche pas hors connexion

- **La toute première visite** : sans réseau, il n'y a rien à mettre en cache.
- **Les mises à jour**.
- **L'ouverture d'un lien partagé sur un appareil qui n'a jamais visité
  l'application.**

## Voir aussi

- [Synchronisation](/documentation/offline/synchronisation)
- [L'application ne s'ouvre pas hors ligne](/documentation/troubleshooting/app-ne-souvre-pas-hors-ligne)
