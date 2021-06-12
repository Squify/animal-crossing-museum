# Projet
## Présentation
Animal Crossing - Museum est un site ayant pour public les joueurs du jeu Nintendo Switch sorti récemment : Animal Crossing New Horizons. <br>
Les joueurs peuvent y retrouver l'ensemble des insectes et poissons qui peuvent être capturés en jeu et de visualiser les informations les concernant : leur nom, localisation, leur prix, et bien d'autres.
Ils peuvent également trouver la liste des fossiles et oeuvres de Rounard du jeu.

## Pages
Le site est composé de 5 pages : la page d'accueil, et les pages qui listent les poissons, insectes, fossiles et oeuvres. Pour naviguer entre elles il suffit de cliquer dans la top-bar.
En cliquant sur le nom du site on est redirigé vers la page d'accueil.<br>
Dans les pages de listing, il est possible d'obtenir plus d'informations ou de voir l'image plus grande en cliquant sur un élément.<br><br>
Un module angular de traduction a été ajouté pour permettre dans le futur de proposer différentes langues aux utilisateurs. Actuellement tout le texte du site est traduit en français

## Démarrage
Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.<br>
Exécutez `ng serve` pour un serveur de développement. Accédez à `http: // localhost: 4200 /`.

# API
Ce site utilise l'API [ACNH API](http://acnhapi.com/) qui est libre d'utilisation.<br>
Pour la récupération des données, différents appels sont réalisés depuis les services. 