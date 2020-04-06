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

function initForm() {
    const makeSelect = document.getElementById('makeSelect');
    makes.sort(tri);
    return(makes);
}