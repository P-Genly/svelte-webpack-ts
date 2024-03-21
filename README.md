### Build du component
- Lancer la commande `npm run build-prod` ou `npm run build-dev` dans le projet svelte

### Intégration dans une appli Angular
- Créer un projet Angular simple `ng new angular-with-svelte`
- Importer dans le fichier `assets` du projet Angular les fichiers .js compilés via webpack et svelte loader (`bundle.js`, `bundle.css`)
- Ajouter dans `angular.json` l'accès au scripts injectés :
```
...
"styles": [
              ...
              "src/assets/bundle.css"
            ],
"scripts": [
              "src/assets/bundle.js"
            ],
...
```
- Ajouter dans le app.component.html : 
```
...
<div class="svelte"></div>
<script defer src='/build/bundle.js'></script>
...
```
- Démarrer l'application Angular
