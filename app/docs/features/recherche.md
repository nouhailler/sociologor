# Recherche

## Description

Une recherche locale et instantanée sur les 124 entrées du corpus : 15
auteurs, 38 concepts, 43 œuvres et 28 phénomènes sociaux.

## Objectif

Retrouver une notion dont on a le nom mais pas l'auteur, ou l'inverse.

## Prérequis

Aucun.

## Comment l'utiliser

1. Ouvrez l'onglet **Chercher**.
2. Tapez un mot : la liste se met à jour à chaque frappe.
3. Restreignez au besoin par **Auteurs**, **Concepts**, **Œuvres** ou
   **Phénomènes**.
4. Touchez un résultat pour ouvrir sa fiche.

## Options

| Option | Valeurs |
|---|---|
| Filtre de type | Tout (défaut), Auteurs, Concepts, Œuvres, Phénomènes |
| Paramètres d'adresse | `q` (texte cherché), `type` (filtre) |

## Paramètres associés

Aucun.

## Données utilisées

L'index est construit au chargement à partir des fiches embarquées. Les
requêtes ne sont ni enregistrées ni transmises : elles n'existent que dans
l'adresse de l'écran courant.

## Résultat

L'écran [Recherche](/documentation/guide/recherche).

## Fonctionnement hors connexion

Disponible sans connexion — la recherche n'interroge aucun serveur.

## Fonctionnement en ligne

Identique.

## Où mène un résultat

| Type de résultat | Destination |
|---|---|
| Auteur | La fiche de l'auteur |
| Concept | La [fiche du concept](/documentation/features/fiches-concepts) |
| Œuvre | La fiche de l'auteur qui l'a écrite |
| Phénomène | La [fiche du phénomène](/documentation/features/phenomenes-sociaux) |

## Limites

- 24 résultats maximum.
- Recherche par sous-chaîne, sans tolérance aux fautes de frappe : « bourdieux »
  ne trouve rien.
- Les domaines, courants, critiques et bibliographies ne sont pas indexés.

## Erreurs possibles

Aucune. L'absence de résultat affiche un message d'aide.

## Dépannage

Aucun cas connu.

## FAQ

- *La recherche tient-elle compte des accents ?* Non, et c'est voulu : « emile »
  trouve « Émile ».
