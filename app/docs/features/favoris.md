# Fiches épinglées

## Description

L'étoile ★ d'une fiche l'ajoute à l'écran **Mes fiches**.

## Objectif

Se constituer une liste courte — les auteurs qu'on révise, ceux qu'on
enseigne — sans avoir à les rechercher à chaque fois.

## Prérequis

Le stockage local du navigateur, pour que la liste survive à la fermeture de
l'application. Sans lui, l'épinglage fonctionne le temps de la session.

## Comment l'utiliser

1. Ouvrez une fiche.
2. Touchez l'étoile ★ dans l'en-tête. Elle se remplit et un message confirme
   « Épinglée — disponible hors connexion ».
3. Retrouvez la fiche dans l'onglet **Fiches**.
4. Touchez à nouveau l'étoile pour la retirer.

## Options

Aucune : ni dossiers, ni étiquettes, ni tri manuel.

## Paramètres associés

Le bouton **Effacer mes données locales** des paramètres vide la liste.

## Données utilisées

| Donnée | Contenu | Stockage |
|---|---|---|
| Liste des fiches épinglées | Identifiants d'auteurs, par exemple `["bourdieu"]` | `localStorage`, clé `sociologor.favs.v1` |

Voir [Stockage local](/documentation/data/stockage-local).

## Résultat

L'écran [Mes fiches](/documentation/guide/mes-fiches).

## Fonctionnement hors connexion

Épingler et retirer fonctionnent sans connexion : l'écriture est locale.

## Fonctionnement en ligne

Identique. Rien n'est envoyé à un serveur.

## Limites

- **Pas de synchronisation** : la liste appartient à un navigateur et à un
  appareil. Voir [Synchronisation](/documentation/offline/synchronisation).
- Effacer les données du site supprime la liste.
- La liste ne peut pas être exportée ni importée.

## Erreurs possibles

| Cas | Comportement |
|---|---|
| Stockage indisponible | La liste fonctionne pour la session ; un bandeau le signale dans les paramètres |

## Dépannage

[Mes fiches épinglées ont disparu](/documentation/troubleshooting/fiches-epinglees-perdues).

## FAQ

- *Dois-je épingler une fiche pour la lire hors ligne ?* Non : les 15 fiches
  sont déjà disponibles hors connexion.
