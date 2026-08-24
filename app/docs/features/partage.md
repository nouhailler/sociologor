# Partage

## Description

Le bouton de partage d'une fiche transmet son lien : par la feuille de partage
du système si le navigateur la propose, sinon par le presse-papiers.

## Objectif

Envoyer une fiche à quelqu'un, ou se l'envoyer à soi-même.

## Prérequis

- Contexte sécurisé (HTTPS) pour l'accès au presse-papiers.
- Sur ordinateur, la feuille de partage système n'existe généralement pas : le
  lien est alors copié.

## Comment l'utiliser

1. Ouvrez une fiche.
2. Touchez le bouton de partage dans l'en-tête.
3. Choisissez une application dans la feuille de partage, **ou** collez le
   lien copié là où vous le souhaitez.

## Options

Aucune.

## Paramètres associés

Aucun.

## Données utilisées

Le titre de la fiche, son résumé et son adresse (`…/a/<identifiant>`). Rien
d'autre n'est transmis, et l'application n'enregistre aucun partage.

## Résultat

| Situation | Ce qui se passe | Message |
|---|---|---|
| Web Share disponible | La feuille de partage du système s'ouvre | aucun |
| Partage annulé par l'utilisateur | Rien ne se passe | aucun |
| Web Share indisponible | Le lien est copié | « Lien copié dans le presse-papiers » |
| Presse-papiers refusé | Le lien est affiché pour copie manuelle | « Lien de la fiche : … » |

## Fonctionnement hors connexion

Le partage fonctionne hors connexion (copie du lien, feuille système). En
revanche, le destinataire aura besoin d'une connexion pour ouvrir le lien la
première fois.

## Fonctionnement en ligne

Identique.

## Limites

- Le lien pointe vers l'adresse d'où l'application est servie. Ouvert depuis un
  serveur local de développement, il ne sera pas accessible aux autres.
- Aucune prévisualisation enrichie du lien n'est fournie (pas de métadonnées
  Open Graph par fiche).

## Erreurs possibles

| Cas | Comportement |
|---|---|
| Presse-papiers refusé ou indisponible | Le lien complet est affiché dans un message |

## Dépannage

[Le partage ne fonctionne pas](/documentation/troubleshooting/partage-indisponible).

## FAQ

- *Le destinataire doit-il installer l'application ?* Non, le lien s'ouvre dans
  un navigateur.
