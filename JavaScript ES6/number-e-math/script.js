console.log(Number.isNaN(NaN)) //true
console.log(Number.isNaN('fdfdf')) //false

console.log(Number.isInteger(10)) //true
console.log(Number.isInteger(10.456)) //false

let n1 = '10'
let n2 = '10.5'
console.log(+n2) //O + é pra passar uma string para Number

console.log(parseFloat('3456.346000'))
console.log(parseFloat('100.27 reais'))
console.log(parseInt('100.27 reais'))
console.log(parseInt(23.45, 10)) // esse ,10 esta falando de casas decimais

const preco = 2.273455
console.log(preco.toFixed(2)) //esta retornando uma string, com 2 casas decimais
console.log(+preco.toFixed(2)) //Esse + na frente de preco torna-o Number

//n.toString(radix), passando 10 está dizendo q esta passando numeros na casa decimal
preco.toString(10)
 

//n.toLocaleString(lang, option);
//Formata o numero de acordo com a lingua e opções passadas
//preco.toLocaleString('en-US', {style:'currency', currency:'USD'})  //currency que é moeda

let valor = 48.49;
valor = valor.toLocaleString('pt-BR', {style: 'currency',currency:'BRL'});

let valor2 = 48.49;
valor2 = valor2.toLocaleString('en-US', {style: 'currency',currency:'BRL'});

console.log(valor);
console.log(valor2);

Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2

Math.random(); // 0.XXX Numero aleatorio de 0 a 1
//Seu eu qro pegar um numero de 0 a 100 é so pegar o Mata.random() e multiplicar * por 100
Math.random() * 100;
const aleatorioFixed = (Math.random() * 10).toFixed(2);
const aleatorioFloor = Math.floor(Math.random() * 10);
const aleatorioCeil = Math.ceil(Math.random() * 10);
(Math.random() * 100).toFixed(0);
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
// Math.floor(Math.random() * (max - min + 1)) + min;

// Vamos supor temos um personagem de um jogo. 
//O assassino tem o dano minimo de 200 por hit
//o anel adiciona 50 de dano
//o colar adiciona 80 de dano
//Habilidade corporal é de 50

let laminas = 100;
let acessorios = {
  anel : 50,
  colar : 80,
}
let habilidade = 50;

let ataqueArmado = ((Math.random() * (acessorios.anel + acessorios.colar) + habilidade + (laminas * 2))).toFixed(2);
let ataqueDesarmado = (Math.random() * (acessorios.anel + acessorios.colar) + habilidade).toFixed(2);