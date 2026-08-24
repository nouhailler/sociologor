# Le partage ne fonctionne pas

## Symptôme

Le bouton de partage n'ouvre aucune feuille de partage, ou affiche un message
« Lien de la fiche : … » au lieu de copier le lien.

## Causes possibles

1. Le navigateur ne prend pas en charge la Web Share API — c'est le cas de la
   plupart des navigateurs sur ordinateur. L'application copie alors le lien :
   **c'est le fonctionnement normal**.
2. La page n'est pas servie en HTTPS : l'accès au presse-papiers est refusé.
3. Le navigateur refuse l'écriture dans le presse-papiers (réglage,
   extension, ou action jugée sans interaction utilisateur).
4. La feuille de partage a été ouverte puis fermée : aucune erreur n'est
   affichée, c'est volontaire.

## Diagnostic

Observez le message affiché après l'appui :

| Message | Interprétation |
|---|---|
| Aucun message, feuille du système ouverte | Fonctionnement nominal |
| « Lien copié dans le presse-papiers » | Fonctionnement nominal, sans Web Share |
| « Lien de la fiche : … » | Le presse-papiers a été refusé — copiez le lien à la main |

## Solution

1. Vérifiez que l'adresse commence par `https://`.
2. Copiez le lien affiché dans le message, ou l'adresse dans la barre du
   navigateur : elle identifie la fiche (`…/a/bourdieu`).
3. Sur mobile, utilisez le navigateur du système (Chrome sur Android, Safari
   sur iOS) pour disposer de la feuille de partage.

## Si le problème persiste

Le lien d'une fiche se reconstitue toujours à la main : adresse du site suivie
de `/a/` et de l'identifiant de l'auteur.

## Informations à fournir au support

Navigateur et version, système, adresse utilisée (HTTP ou HTTPS), message
affiché après l'appui.
