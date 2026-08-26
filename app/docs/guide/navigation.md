# Navigation générale

L'application affiche toujours la même ossature : une navigation principale,
un en-tête contextuel et le contenu de l'écran.

## Sur écran large (≥ 900 px)

Un **rail latéral** à gauche liste : Accueil, Graphe, Recherche, Mes fiches,
Documentation, et — en bas — Paramètres. L'entrée active est surlignée.
Sous le rail, un compteur rappelle le nombre de fiches disponibles hors
connexion.

## Sur mobile et tablette (< 900 px)

Le rail est remplacé par une **barre d'onglets** en bas de l'écran :
Accueil · Graphe · Chercher · Fiches · Aide. Les Paramètres s'ouvrent depuis
l'icône ⚙️ de l'en-tête de l'accueil.

## L'en-tête

| Élément | Rôle |
|---|---|
| Flèche **←** | Revient à l'écran précédent (affichée sur les écrans de détail) |
| Titre et sous-titre | Situent l'écran courant |
| 🔍 | Ouvre la recherche (accueil) |
| ⚙️ | Ouvre les paramètres (accueil) |
| ★ | Épingle ou retire la fiche (écran Fiche auteur) |
| Partage | Partage le lien de la fiche (écran Fiche auteur) |

## Adresses des écrans

Chaque écran a sa propre adresse : elle peut être mise en favori ou partagée.

| Écran | Adresse |
|---|---|
| Accueil | `/` |
| Domaine | `/d/<identifiant>` |
| Fiche auteur | `/a/<identifiant>` |
| Fiche concept | `/c/<identifiant>` |
| Graphe | `/graphe` |
| Graphe centré sur un auteur | `/graphe?focus=<identifiant>` |
| Recherche | `/recherche?q=<texte>&type=<filtre>` |
| Mes fiches | `/mes-fiches` |
| Paramètres | `/parametres` |
| Documentation | `/documentation` |

Une adresse inconnue affiche un écran « Introuvable » avec un retour vers
l'accueil et la recherche.

## Bandeaux d'état

- **Hors connexion** — apparaît dès que l'appareil perd le réseau ; rappelle
  que les 15 fiches restent consultables.
- **Nouvelle version disponible** — propose d'appliquer la mise à jour.

## Voir aussi

- [Écran Accueil](/documentation/guide/accueil)
- [Messages et états](/documentation/reference/erreurs)
