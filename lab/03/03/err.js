class LabError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "L'erreur est affichée en pop-up !"; // (2)
      }
}

function sum(a, b){
    if(isNaN(a+b)){
        throw new LabError("Le résultat est NaN, c'est triste !");
    }

    else{
        console.log(a + b);
    }
}

function callSum(a, b){
    try {
        sum(a, b);
    } catch(err){
        console.log(`Oh, non ! Une erreur : ${err.name}`);
        alert(`Oh, non ! Un erreur : ${err.message}`);
    } 
}