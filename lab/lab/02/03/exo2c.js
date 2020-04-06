function sequence(plage){
    let resultat = 0;
    
    for(let i = -plage; i < plage + 1; i++){
        if(i % 2 == 0){
            resultat = resultat + (i**4);
        }
    }

    console.log(resultat);
}