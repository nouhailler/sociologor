# Écran Accueil

## Objectif

Point d'entrée de l'application : proposer une notion à lire tout de suite, et
donner accès aux 14 domaines.

## Accès

- Onglet **Accueil** (mobile) ou entrée **Accueil** du rail (écran large).
- Adresse `/` — ou `/accueil` si le démarrage sur le graphe est activé.

## Éléments de l'interface

| Élément | Description |
|---|---|
| Titre « La sociologie, reliée. » | Titre de l'application |
| Texte de présentation | Rappelle le contenu : 15 fiches, leurs concepts, leur filiation |
| Bloc **Notion du jour** | Un concept, son explication simple, un exemple concret, et un bouton vers la fiche de son auteur |
| **Les domaines** | Grille des 14 domaines, chacun avec son nombre d'auteurs |
| Bouton **Voir le graphe →** | Ouvre le graphe des filiations |
| Icône 🔍 | Ouvre la recherche |
| Icône ⚙️ | Ouvre les paramètres |

## Actions et résultats

| Action | Résultat |
|---|---|
| Toucher un domaine | Ouvre l'[écran Domaine](/documentation/guide/domaine) correspondant |
| Bouton « Ouvrir la fiche de… » | Ouvre la fiche de l'auteur de la notion du jour |
| « Voir le graphe → » | Ouvre l'[écran Graphe](/documentation/guide/graphe) |

## Cas particuliers

- La notion du jour **change chaque jour** et parcourt les 38 concepts du
  corpus. Voir [Notion du jour](/documentation/features/notion-du-jour).
- Si le démarrage sur le graphe est réglé dans les paramètres, l'adresse `/`
  ouvre le graphe : l'accueil reste accessible par l'onglet Accueil.

## Erreurs possibles

Aucune : l'écran ne dépend ni du réseau ni du stockage.

## Navigation

Depuis l'accueil : un domaine, la fiche du jour, le graphe, la recherche, les
paramètres.
