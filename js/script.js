
document.addEventListener("DOMContentLoaded", function(event) {

    //Le jeu           Ce commentaire va nous permettre de mettre tout le code lié au jeu au même endroit.
    //La classe va contenir tout ce qui va caractériser un objet. Dans ce cas-ci l'objet est le jeu.
    class Jeu{

        //Permet d'initialiser des variables ou de faire des fonctions directement. Il va être appeler directement et automatiquement.
        //Le tiret du bas nous permet de ne pas nous mélanger avec les variables.
        constructor(_idSvg, _idPointage){
            console.log("Création du jeu");

            this.s = Snap(_idSvg);

            this.sortiePointage = document.querySelector(_idPointage);

            this.grandeurCarre = 20;
            this.grandeurGrille = 15;
        }

        //Ici, il s'agit d'une méthode plutôt qu'une fonction puisqu'elle se trouve dans une classe.
        nouvellePartie() {

        }

        //Ici aussi, il s'agit d'une méthode plutôt qu'une fonction puisqu'elle se trouve dans une classe.
        finPartie() {

        }

        //Ici aussi, il s'agit d'une méthode plutôt qu'une fonction puisqu'elle se trouve dans une classe.
        affichagePointage() {

        }

    }

    //Le serpent           Ce commentaire va nous permettre de mettre tout le code lié au serpent au même endroit.
    class Serpent{

        //Permet d'initialiser des variables ou de faire des fonctions directement.
        constructor(){
            console.log("Création du serpent");
        }

    }

    //La pomme           Ce commentaire va nous permettre de mettre tout le code lié à la pomme au même endroit.
    class Pomme{

        //Permet d'initialiser des variables ou de faire des fonctions directement.
        constructor(){
            console.log("Création de la pomme");
        }

    }

    var unePartie = new Jeu("#jeu", "#pointage");     //En passant des paramètres à Jeu(), j'appelle le constructeur de la classe en question. Dans ce cas-ci, il s'agit de la classe Jeu().

});