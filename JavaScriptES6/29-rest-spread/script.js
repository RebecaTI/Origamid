// function perimetroForma(lado, totalLados = 4) {
//   //Estou definindo um valor padrao  de perimetroForma = 4
//   const argArray = Array.from(arguments);
//   argArray.forEach((arg) => {
//     console.log(arg)
//   })
//   console.log(arguments);
//   return lado * totalLados;
// }

// perimetroForma(10, 4); // 40
// perimetroForma(10); // NaN

// console.log(perimetroForma(10, 20, 30, 'Oi', 'Teste'));



// function perimetroForma(lado, totalLados, ...listaArgumentos) {
//   console.log(listaArgumentos);
//   console.log(arguments);
//   return lado * totalLados;
// }

// perimetroForma(10, 20, 30, 'Oi', 'Teste');



function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach(ganhador => {
    // console.log(ganhador + ' ganhou um ' + premio);
  })
}
const ganhadores = ['Pedro', 'Marta', 'Maria', 'Beto'];
anunciarGanhadores('Carro', ...ganhadores);



// const frutas = ['Banana', 'Uva', 'Morango'];
// const legumes = ['Cenoura', 'Batata'];

// const comidas = [...frutas, 'Pizza', ...legumes];

// console.log(comidas);



const todosOsNumeros = [3, 4, 5, 6, 12, 34, 5, 6, 5, 3];
const numeroMaximo = Math.max(...todosOsNumeros);

// console.log(numeroMaximo);

const btns = document.querySelectorAll('button');
console.log(btns)

const btnArray = Array.from(btns)
const btnArray2 = [...btns];

console.log(btnArray)
console.log(btnArray2)