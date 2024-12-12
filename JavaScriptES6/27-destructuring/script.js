// const carro = {
//   marca: 'Honda',
//   ano: 2018
// }

// const { marca, ano, portas } = carro;

// console.log(marca, ano, portas);



// const cliente = {
//   nome: 'Andre',
//   compras: {
//     digitais: {
//       livros: ['Livro 1', 'Livro 2'],
//       videos: ['Videos JS', 'Video HTML']
//     },
//     fisicas: {
//       cadernos: ['Caderno 1']
//     }
//   }
// }

// // console.log(cliente.compras.digitais.livros);
// // console.log(cliente.compras.digitais.videos);

// const { digitais, fisicas, digitais: { livros, videos } } = cliente.compras;
// console.log(livros);
// console.log(fisicas);



// const cliente = {
//   nome: 'Andre',
//   compras: 10,
// }

// const { nome: nomeAlterado, email = 'email@gmail.com' } = cliente;
// //Eu quero dizer q essa propriedade na verdade utilize outro nome por ex 'nomeAndre'

// console.log(email)



// const frutas = ['Banana', 'Uva', 'Morango'];

// const [primeira, segunda, terceira] = frutas;

// console.log(frutas[0])



// Declarando varias variaveis com nomes parecidos
// const primeiro = 'Item 1';
// const segundo = 'Item 2';
// const terceira = 'Item 3';

// const [primeiroO, segundoO, terceiraO] = ['Item 1', 'Item 2', 'Item 3'];

function handleKeyboard({ key, keyCode }) {
  console.log(key, keyCode);
}

document.addEventListener('keyup', handleKeyboard);
