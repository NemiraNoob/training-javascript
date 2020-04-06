/*function isModuloZero(a, b){
    if(b > a){
        console.log('Il y a une jolie erreur : ' + b + ' est plus grand que ' + a);
    }
    return(a % b == 0)?true:false;
}*/

function isModuloZero(a, b){
    return(b > a)?('Il y a une jolie erreur : ' + b + ' est plus grand que ' + a):(a % b == 0);
}