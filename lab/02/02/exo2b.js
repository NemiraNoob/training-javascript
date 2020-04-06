/*function isItWeekendYet(jour){
    switch(jour){
        case 'lundi' :
            console.log(" Hélas, non ! C'était hier ! ");
            break;
        
        case 'mardi' :
            console.log( "Hélas, non !" );
            break;
        
        case 'mercredi' :
            console.log( "Hélas, non ! Toujours pas !" );
            break;
        
        case 'jeudi' :
            console.log( "Hélas, non ! Mais bientôt !" );
            break;

        case 'vendredi' :
            console.log( "Oui !" );
            break;

        case 'samedi' :
            console.log( "Oui ! Profite bien !" );
            break;
        
        case 'dimanche' :
            console.log( "Oui ! Mais c'est la fin !" );
            break;
        
        default :
            console.log( "Hélas, non ! Tu es sûr que " + jour + " est un jour qui existe ?" );
    }
}*/

function isItWeekendYet(jour){
    var descrpiptionH = "Hélas, non !";
    var descriptionO = "Oui !";
    switch(jour){
        case 'lundi' :
            console.log( descrpiptionH + " C'était hier ! ");
            break;
        
        case 'mardi' :
            console.log( descrpiptionH );
            break;
        
        case 'mercredi' :
            console.log( descrpiptionH + " Toujours pas !" );
            break;
        
        case 'jeudi' :
            console.log( descrpiptionH + " Mais bientôt !" );
            break;

        case 'vendredi' :
            console.log( descriptionO );
            break;

        case 'samedi' :
            console.log( descriptionO + " Profite bien !" );
            break;
        
        case 'dimanche' :
            console.log( descriptionO + " Mais c'est la fin !" );
            break;
        
        default :
            console.log( descrpiptionH + " Tu es sûr que " + jour + " est un jour qui existe ?" );
    }
}