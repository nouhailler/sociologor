# Stockage local

## Ce qui est stocké, et où

| Mécanisme | Contenu | Clé / nom | Effacé par |
|---|---|---|---|
| `localStorage` | Liste des fiches épinglées | `sociologor.favs.v1` | *Effacer mes données locales*, effacement des données du site, désinstallation |
| `localStorage` | Réglages d'affichage | `sociologor.settings.v1` | idem |
| `localStorage` | Lecture de l'avertissement légal | `legal_notice_acknowledged` | Effacement des données du site, désinstallation |
| `localStorage` | Version de l'avertissement lu | `legal_notice_acknowledged_version` | idem |
| Cache Storage | Application, styles, documentation, icônes | caches gérés par Workbox (`workbox-precache-*`) | Effacement des données du site, désinstallation, changement de version |
| Cache Storage | Police Inter (Google Fonts) | `sociologor-fonts` | idem ; expiration après 1 an ou 20 entrées |
| Service Worker | Script `sw.js` | — | Désinstallation, effacement des données du site, désenregistrement manuel |

**Ni IndexedDB, ni cookies, ni fichiers locaux** ne sont utilisés.

## Format des données stockées

```
sociologor.favs.v1                       ["bourdieu","goffman"]
sociologor.settings.v1                   {"showCitations":true,"startView":"home"}
legal_notice_acknowledged                true
legal_notice_acknowledged_version        "1.0"
```

**« Effacer mes données locales » ne touche pas aux deux dernières clés** :
l'avertissement légal ne serait pas réaffiché pour autant. Pour repartir de
zéro, effacez les données du site dans le navigateur.

Le suffixe `.v1` des deux premières clés permettra de faire évoluer le format sans écraser des données
d'une version antérieure.

## Volume

Quelques centaines d'octets pour vos données. L'application en cache pèse
environ 350 Ko (fiches et documentation comprises).

## Si le stockage est indisponible

Navigation privée, stockage plein, ou site data bloqué : les lectures et
écritures échouent silencieusement, **l'application continue de fonctionner**
pour la session en cours, et un bandeau le signale dans l'écran Paramètres. Vos
épinglages et réglages sont alors perdus à la fermeture.

## Ce qui se passe…

- **à la désinstallation** : le navigateur supprime le cache et le stockage du
  site. Rien ne subsiste ailleurs.
- **à l'effacement des données de navigation** : idem — l'application redevient
  neuve et devra être rechargée une fois en ligne.
- **au changement d'appareil ou de navigateur** : rien n'est transféré. Voir
  [Synchronisation](/documentation/offline/synchronisation).

## Voir aussi

- [Données utilisées](/documentation/data/donnees)
- [Mes fiches épinglées ont disparu](/documentation/troubleshooting/fiches-epinglees-perdues)
