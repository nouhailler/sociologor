# L'application n'est pas à jour

## Symptôme

Une correction ou un contenu attendu n'apparaît pas, ou la version affichée
dans **Paramètres → À propos** n'est pas la dernière.

## Causes possibles

1. Le bandeau **« Une nouvelle version est disponible »** n'a pas encore été
   validé : la mise à jour est téléchargée mais volontairement pas appliquée.
2. L'appareil n'a pas été connecté depuis la publication de la version.
3. Une autre fenêtre ou un autre onglet de l'application est resté ouvert : le
   nouveau service worker attend de pouvoir prendre la main.
4. Le cache du navigateur sert encore l'ancienne version.

## Diagnostic

1. Ouvrez **Paramètres → À propos** et notez la version et la date de build.
2. Connectez-vous à Internet, puis touchez **Forcer la mise à jour**.
3. Guettez le message qui suit, ou le bandeau de mise à jour en haut de
   l'écran.

## Solution

1. **Paramètres → À propos → Forcer la mise à jour** : une vérification
   immédiate, sans attendre le contrôle automatique du navigateur. Si une
   version plus récente existe, elle s'applique directement.
2. Si le message indique que la version installée est déjà la dernière,
   fermez **tous** les onglets et fenêtres de l'application, puis rouvrez-la
   en étant connecté — un service worker en attente, retenu par un autre
   onglet ouvert, se libère ainsi.
3. En dernier recours, effacez les données du site puis rechargez : vos fiches
   épinglées seront perdues, mais l'application repartira sur la dernière
   version.

## Si le problème persiste

Sur ordinateur : **Outils de développement → Application → Service Workers** →
*Update*, puis *Unregister* si nécessaire, et rechargez.

## Informations à fournir au support

Version et date de build affichées, plateforme, navigateur, et si le bandeau de
mise à jour apparaît.
