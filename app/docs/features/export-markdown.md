# Export Markdown

## Description

Le bouton **Exporter en Markdown**, en bas d'une fiche auteur ou d'une fiche
concept, télécharge cette fiche sous forme de fichier texte `.md`.

## Objectif

Réutiliser le contenu ailleurs : notes de cours, Obsidian, Notion, traitement
de texte, dépôt Git.

## Prérequis

Un navigateur autorisant le téléchargement de fichiers.

## Comment l'utiliser

1. Ouvrez une fiche et faites défiler jusqu'en bas.
2. Touchez **Exporter en Markdown**.
3. Le fichier est téléchargé : `sociologor-<nom-de-l-auteur>.md` depuis une
   fiche auteur (par exemple `sociologor-pierre-bourdieu.md`), ou
   `sociologor-concept-<nom>.md` depuis une fiche concept (par exemple
   `sociologor-concept-habitus.md`).
4. Un message confirme l'action : « Fiche exportée en Markdown » ou « Concept
   exporté en Markdown ».

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
(explication et exemple), filiation — y compris les influences hors corpus —,
œuvres, citations (optionnelles), critiques, disciplines, bibliographie, et une
ligne de provenance datée.

Le portrait n'est pas exporté : le fichier reste un document texte, sans image
jointe.

Depuis une fiche concept, le fichier contient les dix rubriques de l'écran :
définition courte et détaillée, origine, exemples, œuvres, évolution
historique, critiques, et le voisinage — auteur associé, concepts associés,
concepts opposés.

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
