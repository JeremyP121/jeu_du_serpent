
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
            this.affichagePointage(1);

            this.pomme = new Pomme(this);

            this.serpent = new Serpent();

        }

        //Ici aussi, il s'agit d'une méthode plutôt qu'une fonction puisqu'elle se trouve dans une classe.
        finPartie() {
            if (this.pomme !== undefined) {
                this.pomme.supprimePomme();
                this.pomme = undefined;

            }

        }

        //Ici aussi, il s'agit d'une méthode plutôt qu'une fonction puisqu'elle se trouve dans une classe.
        affichagePointage(_lePointage) {
            this.sortiePointage.innerHTML = _lePointage;

        }

    }

    //Le serpent           Ce commentaire va nous permettre de mettre tout le code lié au serpent au même endroit.
    class Serpent{

        //Permet d'initialiser des variables ou de faire des fonctions directement.
        constructor(_leJeu){
            console.log("Création du serpent");

            this.leJeu = _leJeu;

            this.currentX = -1;
            this.currentY = 0;

            this.nextMoveX = 1;
            this.nextMoveY = 0;

            this.serpentLongueur = 1;
            this.tabCarreSerpent = [];

            this.touche = false;

            this.vitesse = 250;
            this.timing = setInterval(this.controleSerpent.bind(this), this.vitesse);

            document.addEventListener("keydown", this.verifTouche.bind(this))
        }

        verifTouche(_evt){
            var evt = _evt;

            console.log(evt.keyCode);

            this.deplacement(evt.keyCode);

        }

        deplacement(dirCode) {
            switch(dirCode) {
                case 37:
                    this.nextMoveX = -1;
                    this.nextMoveY = 0;
                    break;
                case 38:
                    this.nextMoveX = 0;
                    this.nextMoveY = -1;
                    break;
                case 39:
                    this.nextMoveX = 1;
                    this.nextMoveY = 0;
                    break;
                case 40:
                    this.nextMoveX = 0;
                    this.nextMoveY = 1;
                    break;

            }

            console.log(this.nextMoveX, this.nextMoveY);

        }

        controleSerpent() {
            var nextX = this.currentX + this.nextMoveX;
            var nextY = this.currentY + this.nextMoveY;

            if (nextY < 0 || nextX < 0 || nextY > this.leJeu.grandeurGrille-1 || nextX > this.leJeu.grandeurGrille-1) {
                console.log("Touche limite !");

                this.leJeu.finPartie();

                this.touche = true;

            }

            if (!this.touche) {
                this.dessineCarre(nextX, nextY);
                this.currentX = nextX;
                this.currentY = nextY;

            }

        }

        dessineCarre(x, y) {
            var unCarre = [this.leJeu.s.rect(x * this.leJeu.grandeurCarre, y * this.leJeu.grandeurCarre, this.leJeu.grandeurCarre, this.leJeu.grandeurCarre), x, y];

            this.tabCarreSerpent.push(unCarre);

            if (this.tabCarreSerpent.length > this.serpentLongueur) {
                this.tabCarreSerpent[0][0].remove();
                this.tabCarreSerpent.shift();

            }

        }

        supprimeSerpent() {

        }

    }

    //La pomme           Ce commentaire va nous permettre de mettre tout le code lié à la pomme au même endroit.
    class Pomme{

        //Permet d'initialiser des variables ou de faire des fonctions directement.
        constructor(_leJeu){
            console.log("Création de la pomme");

            this.leJeu = _leJeu;

            this.pomme = [];

            this.ajoutePomme();
        }

        ajoutePomme() {
            var posX = Math.floor( Math.random() * this.leJeu.grandeurGrille );

            var posY = Math.floor( Math.random() * this.leJeu.grandeurGrille );

            this.pomme = [this.leJeu.s.rect(posX * this.leJeu.grandeurCarre, posY * this.leJeu.grandeurCarre, this.leJeu.grandeurCarre, this.leJeu.grandeurCarre).attr({fill: 'red'}), posX, posY];

        }

        supprimePomme() {
            this.pomme[0].remove();

        }

    }

    var unePartie = new Jeu("#jeu", "#pointage");     //En passant des paramètres à Jeu(), j'appelle le constructeur de la classe en question. Dans ce cas-ci, il s'agit de la classe Jeu().

    var btnJouer = document.querySelector("#btnJouer");
    btnJouer.addEventListener("click", nouvellePartie)

    function nouvellePartie() {
        unePartie.nouvellePartie();
    }

    //this.nouvellePartie();
});