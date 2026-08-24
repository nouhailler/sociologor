# L'application ne s'ouvre pas hors ligne

## Symptôme

Sans connexion, l'application affiche une page d'erreur du navigateur
(« Vous êtes hors ligne », « Impossible d'accéder à ce site ») au lieu de
l'écran d'accueil.

## Causes possibles

1. La première visite n'a jamais abouti en ligne : rien n'a été mis en cache.
2. Les données du site ont été effacées depuis.
3. Le service worker ne s'est pas installé, parce que le site n'est pas servi
   en **HTTPS** (obligatoire, sauf sur `localhost`).
4. Le navigateur ne prend pas en charge les service workers, ou ils sont
   désactivés (certains modes de navigation privée).
5. L'adresse ouverte n'est pas celle qui a été mise en cache (autre domaine,
   autre sous-chemin).

## Diagnostic

1. Reconnectez-vous et ouvrez l'application : fonctionne-t-elle en ligne ?
2. Vérifiez que l'adresse commence par `https://`.
3. Sur ordinateur : **Outils de développement → Application → Service
   Workers**. Un worker « activated » doit être listé.
4. Toujours dans cet onglet, **Cache Storage** doit contenir des entrées de
   précache.

## Solution

1. Connectez-vous à Internet.
2. Ouvrez l'application et **laissez-la finir de charger** (quelques secondes).
3. Rechargez la page une fois.
4. Coupez le réseau et rouvrez : l'accueil doit s'afficher.
5. Installer l'application sur l'écran d'accueil rend l'étape plus fiable —
   voir [Installer Sociologor](/documentation/getting-started/installation).

## Si le problème persiste

- Effacez les données du site, puis rechargez en ligne pour repartir sur une
  installation propre.
- Essayez un autre navigateur pour distinguer un problème de navigateur d'un
  problème d'hébergement.
- Vérifiez que le mode « économiseur de données » ou une extension ne bloque
  pas les service workers.

## Informations à fournir au support

Version de l'application (Paramètres → À propos), appareil, système,
navigateur et version, adresse utilisée, message exact affiché, et si
l'application fonctionne en ligne.
