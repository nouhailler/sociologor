# Mes fiches épinglées ont disparu

## Symptôme

L'écran **Mes fiches** est vide, ou le compteur est revenu à zéro, alors que
des fiches avaient été épinglées.

## Causes possibles

1. Les données de navigation ont été effacées (manuellement, par un nettoyeur,
   ou par une politique du navigateur).
2. Navigation privée : le stockage est vidé à la fermeture de la fenêtre.
3. Le stockage du site est bloqué dans les réglages du navigateur.
4. L'application a été ouverte depuis une **autre adresse**, un autre
   navigateur ou un autre appareil : le stockage n'est pas partagé.
5. Le bouton **Effacer mes données locales** a été utilisé.
6. Le système a récupéré de l'espace en supprimant les données de sites peu
   visités (iOS supprime les données des sites non ouverts depuis plusieurs
   semaines lorsqu'ils ne sont pas installés sur l'écran d'accueil).

## Diagnostic

1. Ouvrez **Paramètres**. Un bandeau signalant un stockage indisponible ?
   → causes 2 ou 3.
2. La section **Données locales** indique le nombre de fiches épinglées.
3. Épinglez une fiche, fermez complètement l'application, rouvrez-la : si la
   fiche a disparu, le stockage n'est pas persistant.

## Solution

- **Navigation privée** : utilisez une fenêtre normale.
- **Stockage bloqué** : autorisez les données de site pour cette adresse dans
  les réglages du navigateur.
- **Sur iOS** : installez l'application sur l'écran d'accueil, ce qui réduit le
  risque de purge automatique.
- **Autre appareil** : c'est le fonctionnement attendu, il n'y a pas de
  synchronisation — voir [Synchronisation](/documentation/offline/synchronisation).

## Si le problème persiste

Les fiches épinglées perdues ne sont pas récupérables : aucune sauvegarde
n'existe, ni localement ni à distance. Épinglez-les à nouveau — les 15 fiches
restent toutes disponibles.

## Informations à fournir au support

Appareil, système, navigateur, mode de navigation utilisé, application
installée sur l'écran d'accueil ou non, et si le bandeau de stockage
indisponible apparaît dans les Paramètres.
