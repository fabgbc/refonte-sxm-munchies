# Check Updates

Vérifie rapidement les mises à jour npm disponibles pour ce projet.

## Instructions

Exécute les commandes suivantes et affiche un résumé clair :

1. **Dépendances obsolètes** : `npm outdated`
2. **Audit sécurité** : `npm audit --audit-level=moderate`
3. **Version Node/npm** : Vérifie si les versions sont à jour

## Format de sortie attendu

Présente les résultats sous forme de tableau avec :
- Nom du package
- Version actuelle → Version disponible
- Type de mise à jour (patch/minor/major)
- Niveau de risque (sécurité)

## Actions suggérées

- **Patch/Minor** : Peut être mis à jour automatiquement via Dependabot
- **Major** : Vérifier le changelog avant mise à jour manuelle
- **Sécurité** : Priorité haute, mettre à jour immédiatement

Exécute `npm outdated --json` et `npm audit --json` pour des données structurées.
