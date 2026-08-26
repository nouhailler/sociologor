# Données utilisées

## Principe

Sociologor fonctionne **entièrement sur l'appareil**. L'application n'a pas de
serveur applicatif, pas de base de données distante, pas de compte utilisateur
et aucune télémétrie.

## Tableau récapitulatif

| Donnée | Origine | Stockage | Transmission | Finalité |
|---|---|---|---|---|
| Les 15 fiches, les 32 domaines | Livrées avec l'application | Cache du service worker | Aucune | Afficher le contenu |
| Fiches épinglées | Vos appuis sur l'étoile ★ | `localStorage` | Aucune | Retrouver vos fiches |
| Réglages d'affichage | Vos choix dans Paramètres | `localStorage` | Aucune | Appliquer vos préférences |
| Lecture de l'avertissement légal | Votre appui sur « J'ai compris » | `localStorage` | Aucune | Ne pas réafficher l'avertissement |
| Requête de recherche | Votre saisie | Adresse de l'écran, en mémoire | Aucune | Filtrer les résultats |
| Notion du jour | Calculée depuis la date de l'appareil | Non stockée | Aucune | Choisir le concept mis en avant |

## Par catégorie

### Contenu éditorial (les fiches)

- **Origine** : rédigé et livré avec l'application.
- **Finalité** : consultation.
- **Stockage** : dans le bundle de l'application, mis en cache par le service
  worker.
- **Durée** : tant que l'application est installée ou en cache.
- **Transmission** : aucune.
- **Suppression** : en désinstallant l'application ou en effaçant les données
  du site.

### Données personnelles

- **Aucune donnée d'identification n'est collectée** : ni nom, ni adresse
  e-mail, ni identifiant publicitaire, ni adresse IP conservée par
  l'application.
- Les seules données que vous produisez sont vos fiches épinglées, vos deux
  réglages et le fait d'avoir lu l'avertissement légal. Elles restent sur
  l'appareil.

### Données transmises

Aucune donnée n'est envoyée par l'application. Les seules requêtes réseau sont :

1. Le téléchargement de l'application elle-même et de ses mises à jour, depuis
   le serveur qui l'héberge.
2. Le chargement de la police **Inter** depuis Google Fonts, mise en cache
   ensuite. Le serveur de polices reçoit alors une requête de votre navigateur,
   comme pour n'importe quel site utilisant ces polices. Sans cette police,
   l'application reste lisible avec la police système. *L'hébergeur de
   l'application et sa politique de journalisation sont hors du périmètre de
   l'application : à vérifier lors du déploiement.*

## Export et suppression

- **Exporter** : une fiche peut être exportée en Markdown. Les fiches épinglées
  et les réglages ne sont pas exportables.
- **Supprimer** : **Paramètres → Effacer mes données locales**, ou suppression
  des données du site dans le navigateur.

## Voir aussi

- [Stockage local](/documentation/data/stockage-local)
- [Politique de confidentialité](/documentation/legal/confidentialite)
