# Export Markdown

## Description

Le bouton **Exporter en Markdown**, en bas d'une fiche, télécharge cette fiche
sous forme de fichier texte `.md`.

## Objectif

Réutiliser le contenu ailleurs : notes de cours, Obsidian, Notion, traitement
de texte, dépôt Git.

## Prérequis

Un navigateur autorisant le téléchargement de fichiers.

## Comment l'utiliser

1. Ouvrez une fiche et faites défiler jusqu'en bas.
2. Touchez **Exporter en Markdown**.
3. Le fichier `sociologor-<nom-de-l-auteur>.md` est téléchargé — par exemple
   `sociologor-pierre-bourdieu.md`.
4. Le message « Fiche exportée en Markdown » confirme l'action.

## Options

| Option | Effet |
|---|---|
| Paramètre *Afficher les citations* | S'il est désactivé, la section **Citations** est absente du fichier exporté |

## Paramètres associés

Voir [Tous les paramètres](/documentation/settings/index).

## Données utilisées

Uniquement le contenu de la fiche affichée. Le fichier est composé dans le
navigateur ; rien ne transite par un serveur.

## Résultat

Un fichier Markdown structuré : titre, état civil, résumé, repères, concepts
(explication et exemple), filiation, œuvres, citations (optionnelles),
critiques, disciplines, bibliographie, et une ligne de provenance datée.

## Fonctionnement hors connexion

Disponible sans connexion : l'export est entièrement local.

## Fonctionnement en ligne

Identique.

## Limites

- Une fiche à la fois : pas d'export global du corpus.
- Format Markdown seul : ni PDF, ni Word, ni impression mise en page.
- Sur iOS, le fichier arrive selon les réglages du navigateur, souvent dans
  l'application **Fichiers** — comportement propre au système. *À vérifier sur
  appareil.*

## Erreurs possibles

| Cas | Comportement |
|---|---|
| Téléchargements bloqués par le navigateur | Aucun fichier n'apparaît malgré le message de confirmation |

## Dépannage

[L'export Markdown ne se télécharge pas](/documentation/troubleshooting/export-ne-se-telecharge-pas).

## FAQ

- *Puis-je exporter toutes les fiches d'un coup ?* Non, pas dans cette version.
