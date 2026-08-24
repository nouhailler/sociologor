# L'export Markdown ne se télécharge pas

## Symptôme

Le message « Fiche exportée en Markdown » s'affiche, mais aucun fichier
n'apparaît.

## Causes possibles

1. Les téléchargements automatiques sont bloqués par le navigateur.
2. Le fichier a bien été enregistré, mais dans un dossier non consulté
   (Téléchargements, ou l'application **Fichiers** sur iOS).
3. Une extension ou une politique d'entreprise bloque les fichiers créés par
   une page (`blob:`).
4. L'espace de stockage de l'appareil est saturé.

## Diagnostic

1. Ouvrez le gestionnaire de téléchargements du navigateur et cherchez un
   fichier commençant par `sociologor-`.
2. Vérifiez la barre d'adresse : une icône de blocage de téléchargement y
   apparaît parfois.
3. Testez avec un autre navigateur.

## Solution

- Autorisez les téléchargements pour ce site.
- Sur iOS, ouvrez l'application **Fichiers** → *Téléchargements*.
- Libérez de l'espace si le stockage est plein.
- En dernier recours, le contenu reste lisible à l'écran : la fiche affichée
  contient exactement les mêmes sections que l'export.

## Si le problème persiste

Exportez depuis un ordinateur, où le comportement des téléchargements est plus
prévisible.

## Informations à fournir au support

Navigateur et version, système, nom du fichier attendu, présence ou non d'une
entrée dans le gestionnaire de téléchargements.
