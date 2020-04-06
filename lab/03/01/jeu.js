// Return a random int from 1 to 10
function random() {
    return Math.ceil(Math.random() * 10)
}

let x = 0;
let y = 0;

var Joueur = {
    nom : " Nom du joueur à choisir ",
    positionX : x,
    positionY : y,
    compteur : 0,

    afficherNom : function(){
        console.log("Voici le joueur tant attendu : " + this.nom + "!");
    },

    seDeplace : function(){
        let ajout1 = random();
        let ajout2 = random();
        if( (x != 100) && (x < 100) ){
            if( x + ajout1 > 100 ){
                let enlever = (x + ajout1) - 100;
                x = 100 - enlever;
            }
            else{
                x = x + ajout1;
            }
        }

        if( (y != 100) && (y < 100) ){
            if( y + ajout2 > 100 ){
                let enlever = (y + ajout2) - 100;
                y = 100 - enlever;
            }
            else{
                y = y + ajout2;
            }
        }

        this.positionX = x;
        this.positionY = y;
        console.log(this.nom + " se déplace en (" + x + "," + y + ")");
    }
}

var premierJoueur = Object.create(Joueur);
premierJoueur.nom = "Gilbert";
premierJoueur.afficherNom();

var secondJoueur = Object.create(Joueur);
secondJoueur.nom = "Cécil";
secondJoueur.afficherNom();

var troisiemeJoueur = Object.create(Joueur);
troisiemeJoueur.nom = "Azdanyoff";
troisiemeJoueur.afficherNom();

function play() {
    if((premierJoueur.positionX == 100) && (premierJoueur.positionY == 100)){
        console.log("Le jeu est terminé, et le gagnant se trouve être : " + premierJoueur.nom + " ! Et il a gagné en " + premierJoueur.compteur + " coups !");
    }
    else if((secondJoueur.positionX == 100) && (secondJoueur.positionY == 100)){
        console.log("Le jeu est terminé, et le gagnant se trouve être : " + secondJoueur.nom+ " ! Et il a gagné en " + secondJoueur.compteur + " coups !");
    }
    else if((troisiemeJoueur.positionX == 100) && (troisiemeJoueur.positionY == 100)){
        console.log("Le jeu est terminé, et le gagnant se trouve être : " + troisiemeJoueur.nom + " ! Et il a gagné en " + troisiemeJoueur.compteur + " coups !");
    }

    else{
        premierJoueur.seDeplace();
        premierJoueur.compteur = premierJoueur.compteur + 1;
        secondJoueur.seDeplace();
        secondJoueur.compteur = secondJoueur.compteur + 1;
        troisiemeJoueur.seDeplace();
        troisiemeJoueur.compteur = troisiemeJoueur.compteur + 1;
    }
}