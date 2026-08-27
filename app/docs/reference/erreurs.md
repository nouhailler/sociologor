# Messages et états

Sociologor n'utilise **pas de codes d'erreur**. L'application affiche des
messages en clair, sous trois formes : un bandeau en haut de l'écran, un
message éphémère en bas, ou un écran complet.

## Bandeaux

| Message | Quand | Que faire |
|---|---|---|
| Hors connexion — les 15 fiches restent consultables. | L'appareil perd le réseau | Rien : la consultation continue |
| Une nouvelle version est disponible. | Une mise à jour a été téléchargée | Toucher **Mettre à jour** |
| Le stockage local est indisponible… | Le navigateur refuse d'écrire (navigation privée, site data bloqué) | Voir [Stockage local](/documentation/data/stockage-local) |

## Messages éphémères

| Message | Quand |
|---|---|
| Épinglée — disponible hors connexion | Une fiche vient d'être épinglée |
| Retirée de vos fiches | Une fiche vient d'être retirée |
| Fiche exportée en Markdown | L'export d'une fiche auteur a été déclenché |
| Concept exporté en Markdown | L'export d'une fiche concept a été déclenché |
| Phénomène exporté en Markdown | L'export d'une fiche phénomène a été déclenché |
| Lien copié dans le presse-papiers | Partage d'une fiche auteur, sans Web Share API |
| Lien copié | Partage d'une fiche concept ou phénomène, sans Web Share API |
| Lien de la fiche : … | Le presse-papiers a été refusé — copier le lien à la main |
| Données locales effacées | L'effacement a été confirmé |
| Vérification de la dernière version… | **Forcer la mise à jour** vient d'être touché |
| Vous avez déjà la dernière version. | Aucune version plus récente trouvée après vérification forcée |
| Hors connexion : impossible de vérifier une mise à jour. | **Forcer la mise à jour** touché sans réseau |
| Rien à vérifier : le service worker n'est actif qu'en production. | **Forcer la mise à jour** touché en environnement de développement |

## Écrans complets

| Écran | Quand | Sorties proposées |
|---|---|---|
| ⚠️ Information importante | Première utilisation, avertissement légal | *J'ai compris*, *Voir les détails* |
| Introuvable — Cette page n'existe pas. | Adresse inconnue | Accueil, Recherche |
| Introuvable — Cette fiche n'existe pas. | `/a/<identifiant>` inconnu | Accueil, Recherche |
| Introuvable — Ce domaine n'existe pas. | `/d/<identifiant>` inconnu | Accueil, Recherche |
| Introuvable — Cette page de documentation n'existe pas. | Page de documentation inconnue | Accueil, Recherche |

## États sans message

| Situation | Comportement |
|---|---|
| Aucun résultat de recherche | Un texte propose d'essayer un auteur, un concept ou une œuvre |
| Aucune fiche épinglée | Un texte explique le rôle de l'étoile ★ |
| Filiation vide sur une fiche | « Aucune fiche liée dans ce corpus. » |
| Partage annulé par l'utilisateur | Aucun message : ce n'est pas une erreur |
| `?focus=` inconnu sur le graphe | Ignoré, graphe affiché normalement |

## Erreurs du navigateur

L'écran « Vous êtes hors ligne » du navigateur n'est pas produit par
l'application : il signifie qu'elle n'a jamais été mise en cache. Voir
[L'application ne s'ouvre pas hors ligne](/documentation/troubleshooting/app-ne-souvre-pas-hors-ligne).
