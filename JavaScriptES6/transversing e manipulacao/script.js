/*     
  innerHTML coloca a tag dentro, ex:
  <h1>
    <p>Novo titulo  </p>
  </h1>
  outerHTML substitue a tag, oq antes era h1, mudou para p

  */

//const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');
// h1.innerHTML = "<p>Novo Titulo</p>"

// console.log(animaisLista.innerHTML);
//console.log(animaisLista.innerText); //Não tem textos nessa ul, já que são só imagens



// console.log(h1.outerHTML);

// h1.outerHTML = '<p>Novo Titulo </p>'
// console.log(animaisLista.innerHTML);

const lista = document.querySelector('.animais-lista');

// console.log(lista);
// console.log(lista.parentElement);
// console.log(lista.parentElement.parentElement);
// console.log(lista.nextElementSibling);
// console.log(lista.previousElementSibling);
// console.log(lista.children);
// console.log(lista);
// console.log(lista.children[0]);

// Pra acessar o ultimo item de um array
// console.log(lista.children[--lista.children.length ]); //ultimo filho

// console.log(lista.querySelector('li:last-child'));

// console.log(lista.childNodes);
// console.log(lista.previousSibling);

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa')
// animais.appendChild(titulo);
// contato.insertBefore(animais ,titulo);

// contato.removeChild(titulo);

//contato.replaceChild(lista ,titulo)
//Vou substituir titulo, ele é o segundo argumento
//O que quero substituir titulo por, ele é o segundo argumento
//n1.replaceChild(n2 ,n3)
//n1: Este é o elemento pai onde a substituição será feita. Ou seja, é o elemento que contém o nó que será substituído pelo novo nó.
// n2: Este é o novo nó que será inserido no lugar do nó antigo. Em outras palavras, é o nó que será adicionado ao elemento pai em vez do nó antigo.
// n3: Este é o nó antigo que será substituído pelo novo nó. É o nó que será removido do elemento pai.


//contato.insertBefore(animais, mapa);
//IMPORTANTE => o mapa tem que estar dentro de contato em resumo
//contato.insertBefore(animais, esseElemento);
//tem que ser filho
//elementoPai.insertBefore(animais, ElementoFilho); 
//contato.insertBefore(esseÉOElementoQEstaMovendo, mapa);

// const novoh1 = document.createElement('h1');
// novoh1.innerText = 'Novo titulo';
// novoh1.classList.add('titulo');

//Após p mapa colocar esse h1
//mapa.appendChild();

//console.log(novoh1);

//cloneNode(true) é uma propriedade e significa que ele vai clonar os filhos desse elemento, ou seja ele vai trazer esse elemento completo

//cloneNode(false) vai trazer so o elemento em si. Ou seja só a tag q envolve

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);
//Valor como true é q eu qro tudo q tem dentro de h1. Ou seja os filhos

// faq.appendChild(h1);
//Esse appendChild lembra muito uma fila. Varias pessoas na fila esperando, e um cara la na frente viu um amigo la atrás, então esse cara sai la da frente p ir ficar atras do amigo na fila (ui p ficar atras do amigo rs). E ai começa um lindo romance yaoi S2

cloneH1.classList.add('azul');
faq.appendChild(cloneH1);
//Pra que q serve esse cloneNode?
//Isso é útil em situações onde você precisa criar várias cópias de um elemento existente, sem ter que recriá-lo manualmente todas as vezes.

