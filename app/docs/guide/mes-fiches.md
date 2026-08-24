# Écran Mes fiches

## Objectif

Rassembler les fiches que vous avez épinglées.

## Accès

- Onglet **Fiches**, ou entrée **Mes fiches** du rail.
- Adresse `/mes-fiches`.

## Éléments de l'interface

| Élément | Description |
|---|---|
| Titre et compteur | « N épinglée(s) », également visible dans le rail |
| Liste | Initiales, nom, dates et courant de chaque fiche épinglée |
| Message d'état vide | Explique comment épingler une fiche |

## Actions et résultats

| Action | Résultat |
|---|---|
| Toucher une fiche | Ouvre la fiche |
| Épingler / retirer | Se fait depuis l'étoile ★ de la fiche, pas depuis cet écran |

## Cas particuliers

- La liste est vide à la première utilisation.
- **Épingler ne conditionne pas la disponibilité hors ligne** : les 15 fiches
  sont déjà toutes disponibles hors connexion. L'épinglage sert à retrouver les
  vôtres.
- L'ordre est celui dans lequel les fiches ont été épinglées.

## Erreurs possibles

Si le stockage local est indisponible (navigation privée, site data bloqué),
les fiches épinglées disparaissent à la fermeture de l'onglet. Voir
[Mes fiches épinglées ont disparu](/documentation/troubleshooting/fiches-epinglees-perdues).

## Navigation

Mes fiches → fiche auteur.
