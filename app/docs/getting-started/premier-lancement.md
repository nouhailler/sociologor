# Premier lancement

Sociologor n'a ni inscription ni configuration obligatoire. Un seul écran
précède l'application : un avertissement à lire une fois.

```
Ouverture de l'application
        ↓
⚠️ Information importante  ──── « Voir les détails » ──► mentions complètes
        ↓ « J'ai compris »
Écran d'accueil (notion du jour + domaines)
        ↓
Mise en cache de l'application en arrière-plan
        ↓
L'application est utilisable hors connexion
```

## Étape par étape

| Étape | Ce qui est affiché | Ce que vous devez faire |
|---|---|---|
| 1 | La fenêtre **⚠️ Information importante** : l'application est fournie à titre informatif, son usage relève de votre responsabilité | Lire, puis toucher **J'ai compris** |
| 2 | L'écran **Accueil** : titre, notion du jour, grille des 14 domaines | Rien — l'application est prête |
| 3 | En arrière-plan, le service worker enregistre l'application | Rien, c'est automatique |
| 4 | Navigation par le rail latéral (écran large) ou la barre d'onglets (mobile) | Choisir un domaine, le graphe ou la recherche |

## L'avertissement du premier lancement

| Question | Réponse |
|---|---|
| Peut-on le refuser ? | Non : il informe, il ne demande pas de consentement à un traitement de données — il n'y en a aucun |
| Peut-on le passer ? | Non, mais il ne s'affiche qu'une fois |
| **Voir les détails** | Ouvre les mentions légales et la politique de confidentialité, dans la même fenêtre |
| Réapparaît-il ? | Non, sauf si les données du site sont effacées, ou en navigation privée |
| Où le relire ensuite ? | **Paramètres → Informations légales**, ou le chapitre [Informations légales](/documentation/legal/mentions-legales) |

Le fait que vous l'ayez lu est enregistré sur votre appareil, sous les clés
`legal_notice_acknowledged` et `legal_notice_acknowledged_version`. Voir
[Stockage local](/documentation/data/stockage-local).

## Aucune permission demandée

Aucune autorisation système n'est demandée au premier lancement, ni ensuite.
Voir [Permissions demandées](/documentation/permissions/index).

## Aucune configuration obligatoire

Deux réglages facultatifs existent (affichage des citations, écran de
démarrage) ; leurs valeurs par défaut conviennent à la plupart des usages. Voir
[Tous les paramètres](/documentation/settings/index).

## Quand l'application est-elle utilisable hors ligne ?

Dès que la première visite s'est terminée normalement, en ligne. Une visite
interrompue avant la fin de la mise en cache peut laisser l'application
partiellement enregistrée : rouvrez-la une fois connecté. Voir
[Fonctionnement hors connexion](/documentation/offline/index).

## Voir aussi

- [Navigation générale](/documentation/guide/navigation)
- [Écran Accueil](/documentation/guide/accueil)
