const makes = [{
    name: 'Peugeot',
    models: [{
        name: '108',
        colors: ['Blanc', 'Bleu']
    }, {
        name: '208',
        colors: ['Blanc', 'Rouge', 'Noir', 'Orange']
    }, {
        name: '308',
        colors: ['Jaune', 'Vert', 'Noir']
    }, {
        name: '508',
        colors: ['Blanc', 'Jaune', 'Vert', 'Orange']
    }]
}, {
    name: 'Renault',
    models: [{
        name: 'Twingo',
        colors: ['Jaune', 'Vert', 'Noir']
    }, {
        name: 'Clio',
        colors: ['Blanc', 'Rouge', 'Noir', 'Orange']
    }, {
        name: 'Mégane',
        colors: ['Blanc', 'Bleu']
    }, {
        name: 'Talisman',
        colors: ['Blanc', 'Jaune', 'Orange']
    }]
}, {
    name: 'Citroën',
    models: [{
        name: 'C1',
        colors: ['Bleu', 'Rouge', 'Orange']
    }, {
        name: 'C3',
        colors: ['Blanc', 'Vert', 'Noir']
    }, {
        name: 'C4',
        colors: ['Rouge', 'Orange']
    }, {
        name: 'C5',
        colors: ['Blanc', 'Rouge', 'Noir']
    }]
}];

function tri(a,b){
    return (a.name > b.name)?1:-1;
}

function marques(){
    var marque = document.getElementById('makeSelect');
    marque.innerHTML = '<option>Marque</option>';

    for(let i=0;i < makes.length; i++){
        marque.innerHTML = marque.innerHTML + '<option value="'+ i + '">' + makes[i].name + '</option>';
    }
}

function models(){
    var modeles = document.getElementById('modelSelect');
    var marques = document.getElementById('makeSelect');
    var selMo = marques.options[marques.selectedIndex].value;

    while (modeles.options.length){
        modeles.remove(0);
    } 

    var voiture = makes[selMo].name;
    if(voiture){
        for(let i = 0; i < makes[selMo].models.length; i++){
            modeles.innerHTML = modeles.innerHTML + '<option value="'+ i + '">' + makes[selMo].models[i].name + '</option>';
        }
    }
}

function couleur(){
    var modele = document.getElementById('modelSelect');
    var couleur = document.getElementById('colorSelect');
    var marques = document.getElementById('makeSelect');
    var selModele = modele.options[modele.selectedIndex].value;
    var selMo = marques.options[marques.selectedIndex].value;
    
    while (couleur.options.length){
        couleur.remove(0);
    }

    var couleurChoisie = makes[selMo].models[selModele];
    if(couleurChoisie){
        for(let i = 0; i < makes[selMo].models[selModele].colors.length; i++){
            couleur.innerHTML = couleur.innerHTML + '<option value="'+ i + '">' + makes[selMo].models[selModele].colors[i] + '</option>';
        }
    }
}

function resultat(){
    var marque = document.getElementById('makeSelect');
    var marqueChoisie = marque.options[marque.selectedIndex].text;
    var marqueF = document.getElementById('makeResult');
    marqueF.innerHTML = marqueChoisie;


    var modele = document.getElementById('modelSelect');
    var modeleChoisi = modele.options[modele.selectedIndex].text;
    var modelF = document.getElementById('modelResult');
    modelF.innerHTML = modeleChoisi;

    var couleur = document.getElementById('colorSelect');
    var couleurChoisie = couleur.options[couleur.selectedIndex].text;
    var couleurF = document.getElementById('colorResult');
    couleurF.innerHTML = couleurChoisie;

    var choix = '';
    var option = document.getElementsByName('options');
    for(let i = 0; i < option.length; i++){
        if(option[i].checked == true){
            choix = choix + option[i].value + " ";
        }
    }

    var choixF = document.getElementById('optionsResult');
    choixF.innerHTML = choix;
}

function initForm() {
    makes.sort(tri);
    marques();
}