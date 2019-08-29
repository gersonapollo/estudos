var CARD_CONTAINER = document.getElementsByClassName('card-container')[0];
var NOMES = ['Teste','Gerson','Marina','Jananina','Lucas','Julia','Eduardo','Cassia'];
var cards = [];
var ref = firebase.database().ref('card/');

function criarCard(){
    var card = {
        nome: NOMES[Math.floor(Math.random() * NOMES.length -1)],
        idade: Math.floor(Math.random() * 22 + 18),
        curtidas: 0
    };

    // ref.child(card.nome).set(card).then(() => {
    //     console.log("Adicionando: " + card.nome);
    //     adicionaCardTela(card);
    // });
    ref.push().set(card).then(() => {
        console.log("Adicionando: " + card.nome);
        adicionaCardTela(card);
    });
}

function deletar(id){

}

function curtir(id){

}

function descurtir(id){

}

document.addEventListener("DOMContentLoaded", function(){
    ref.once('value').then(snapshot => {
        console.log(snapshot.val());
        snapshot.forEach(value => {
            adicionaCardTela(value.val());
        })
    })

});

function adicionaCardTela(informação){
    let header = document.createElement('h2');
    header.innerText = informação.nome;
    header.classList.add('card-title');

    let content = document.createElement('p');
    content.classList.add('card-text');
    content.innerText = informação.idade + 'Anos';

    let inner = document.createElement('div');
    inner.classList.add('row');

    let button_add = document.createElement("button");
    button_add.classList.add('btn', 'btn-link', 'col-3')
    button_add.setAttribute('onClick', "Curtir('"+ informação.id + "')");
    button_add.innerText = '+';
    inner.appendChild(button_add);

    let counter = document.createElement('span');
    counter.innerHTML = informação.curtidas;
    counter.classList.add('col-3', 'text-center');
    inner.appendChild(counter);

    let button_sub = document.createElement('button');
    button_sub.classList.add('btn', 'btn-link', 'col-3')
    button_sub.setAttribute('onClick', "Descurtir('"+ informação.id + "')");
    button_sub.innerText = '-';
    inner.appendChild(button_sub);

    let button_del = document.createElement('button');
    button_del.classList.add('btn', 'btn-danger', 'col-3');
    button_del.setAttribute('onClick', "Deletar('"+ informação.id + "')");
    button_del.innerText = 'Apagar';
    inner.appendChild(button_del);

    let card = document.createElement('div');
    card.classList.add('card');
    card.id = informação.id;
    
    let card_body = document.createElement('div');
    card_body.classList.add('card-body');

    card_body.appendChild(header);
    card_body.appendChild(content);
    card_body.appendChild(inner);
    card.appendChild(card_body);

    CARD_CONTAINER.appendChild(card);


}