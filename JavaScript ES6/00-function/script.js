// const perimetro = new Function('lado', 'return lado * 4');

// function somar(n1, n2) {
//   return n1 + n2;
// }
// console.log(somar.name)

// function darOi(nome, idade) {
//   console.log('Oi pra vc ' + nome + idade)
// }
// //darOi.call({}, 'Andre ', 28) Esse primeiro valor {}, é a 

// darOi.call({}, 'Andre ', 28)

// window.marca = 'Carro';
// window.ano = 288;

// function descricaoCarro (velocidade) {
//   console.log(this) 
//   console.log(this.marca + '' + this.ano + velocidade);
// }
//Seu eu coloco o call posso substituir por um novo objeto
//Importante o primeiro {} é o objeto novo, depois sao os parametros da função
// descricaoCarro.call({marca:'Honda', ano: 2015}, 100);

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['banana', 'uva', 'pera'];

// frutas.forEach.call(carros ,(item) => {
//   console.log(item)
// })

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe) {
//   console.log(this)
//   // this.element.classList.add(classe);
// }

// const li = {
//   element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(li, 'ativar');

// const ul = new Dom('ul');



// Dom.prototype.ativo();

// ul.ativo.call(li, 'ativar');
// ul.ativo('ativar');


const frutas = ['Uva', 'Maçã', 'Banana'];

// Array.prototype.mostrarThis = function() {
//   console.log(this)
// }

Array.prototype.pop.call(frutas); //é o mesmo que  frutas.pop();
frutas.pop();

const arrayLike = {
  0: 'item 1',
  1: 'item 2',
  2: 'item 3',
  length: 3 
}

const li = document.querySelectorAll('li');

// const filtro = Array.prototype.filter.call(li, (item) => {
//   console.log();
//   return item.classList.contains('ativo');
// });

// console.log(filtro)

const numeros = [33,223, 2, 33, 434, 54, 5424, 4]
// Math.max.call(null, 33,223, 2, 33, 434, 54, 5424, 4); //5424
// Math.max.call(null, numeros); //NaN
// Math.max.apply(null, numeros); //5424

// const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
// const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);

const filtro = Array.prototype.filter.bind(li, (item) => {
  return item.classList.contains('ativo');
})

console.log(filtro());

const $ = document.querySelectorAll.bind(document);

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo){
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}
const honda = {
  marca:'Honda',
}
const acelerarHonda = carro.acelerar.bind(honda)
console.log(acelerarHonda(300, 20))

console.log(carro)

// function descricaoCarro() {
//   console.log(this.marca + ' ' + this.ano);
// }

// descricaoCarro() // undefined undefined
// descricaoCarro.call() // undefined undefined
// descricaoCarro.call(carro) // Ford 2018

// argumentos comuns
function imc(altura, peso){
  return peso / (altura * altura)
}
const imc180 = imc.bind(null, 1.80);

imc(1.80, 70);
imc180(70)