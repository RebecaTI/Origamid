const animaisLista = document.querySelector('.animais-descricao');

const lista = document.querySelector('.animais-lista');

const contato = document.querySelector('.contato');

const titulo = contato.querySelector('.titulo');

const animais = document.querySelector('.animais');
//appendChild coloca como ultimo elemento 
// lista.appendChild(titulo);

const mapa = document.querySelector('.mapa')

// contato.removeChild(titulo);
contato.replaceChild(lista ,titulo);


// contato.insertBefore(lista ,mapa); 
//Importantente ( , esse elemento) tm q ser filho desseElement.insertBefore( , )

const novoh1 = document.createElement('h1');
novoh1.innerText = 'Novo Titulo';
novoh1.classList.add('titulo');

mapa.appendChild(novoh1);

// console.log(novoh1);



//true se os elementos filhos do nó que está sendo clonado devem ser clonados juntos, ou false para clonar apenas o nó específico dispensando, assim, qualquer elemento DOM filho. 

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add('azul');

faq.appendChild(cloneH1);