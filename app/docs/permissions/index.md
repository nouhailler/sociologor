# Permissions demandées

**Sociologor ne demande aucune permission système.**

Aucune autorisation n'est requise, ni au premier lancement, ni ensuite.

| Permission | Utilisée ? |
|---|---|
| Localisation | Non |
| Caméra | Non |
| Microphone | Non |
| Notifications | Non |
| Contacts | Non |
| Fichiers et médias | Non |
| Bluetooth, capteurs | Non |
| Presse-papiers (écriture) | Voir ci-dessous |

## Les deux capacités du navigateur réellement utilisées

Ce ne sont pas des permissions au sens du système d'exploitation : elles ne
déclenchent pas de fenêtre d'autorisation, et ne se règlent pas dans les
paramètres de l'appareil.

### Écriture dans le presse-papiers

- **Pourquoi** : copier le lien d'une fiche quand la feuille de partage du
  système n'est pas disponible.
- **Quand** : uniquement au moment où vous touchez le bouton de partage.
- **Obligatoire ?** Non.
- **En cas de refus** : le lien est affiché à l'écran pour être copié à la
  main.
- **Comment réactiver** : selon le navigateur, dans les autorisations du site.
  Le fonctionnement exige une page servie en HTTPS.

### Partage (Web Share API)

- **Pourquoi** : ouvrir la feuille de partage du système.
- **Quand** : au moment où vous touchez le bouton de partage.
- **Obligatoire ?** Non — l'application bascule alors sur le presse-papiers.
- **En cas de refus ou d'annulation** : rien ne se passe, aucune erreur.

## Stockage local

Le stockage du site (`localStorage`) n'est pas une permission demandée : il est
autorisé par défaut, et peut être bloqué dans les réglages du navigateur ou par
la navigation privée. Voir [Stockage local](/documentation/data/stockage-local).

## Voir aussi

- [Données utilisées](/documentation/data/donnees)
- [Politique de confidentialité](/documentation/legal/confidentialite)
