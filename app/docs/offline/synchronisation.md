# Synchronisation

**Sociologor ne synchronise rien.**

Il n'y a ni compte, ni serveur applicatif, ni sauvegarde distante. Ce n'est pas
une limitation temporaire : c'est le choix de conception qui permet à
l'application de n'exiger aucune donnée personnelle.

## Conséquences concrètes

| Question | Réponse |
|---|---|
| Mes fiches épinglées suivent-elles d'un appareil à l'autre ? | Non |
| Sont-elles sauvegardées quelque part ? | Non — uniquement dans ce navigateur |
| Y a-t-il une file d'attente d'opérations différées ? | Non : rien n'est envoyé |
| Y a-t-il des conflits à résoudre ? | Non |
| Puis-je restaurer mes données après un effacement ? | Non |

## Ce qui « se synchronise » malgré tout

Le **contenu** de l'application, dans un seul sens : du serveur vers votre
appareil, lors d'une mise à jour de version. Vos données ne remontent jamais.

```
serveur  ──── nouvelle version ────►  votre appareil
votre appareil  ──── rien ────►  serveur
```

## Transférer ses fiches épinglées sur un autre appareil

Il n'existe pas de fonction d'import/export de la liste. Deux contournements :

- Épingler à nouveau les fiches sur le second appareil.
- Exporter les fiches concernées en Markdown et les conserver dans vos notes.

## Voir aussi

- [Fiches épinglées](/documentation/features/favoris)
- [Stockage local](/documentation/data/stockage-local)
- [Limites connues](/documentation/reference/limites)
