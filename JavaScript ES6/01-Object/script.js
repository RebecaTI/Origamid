// const pessoa = new Object({
//   nome:'Andre'
// });

// // console.log(pessoa.nome);

// const carro = {
//   marca: 'Marca',
//   init(valor){
//     this.marca = valor;
//     return this
//   },
//   acelerar() {
//     return this.marca + ' acelerou'
//   },
//   buzinar() {
//     return this.marca + ' buzinou'
//   }
// }

// const honda = Object.create(carro).init('Honda');
// console.log(honda.acelerar());

// const ferrari = Object.create(carro).init('Ferrari');

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// }

// const moto = {
//   rodas: 2,
//   capacete: true,
// }

// Object.assign(moto, funcaoAutomovel, carro);

// console.log(moto);

// const moto = {}

// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//     configurable: false, // impede deletar e mudança de valor
//     enumerable: true, // torna enumerável
//   },
//   capacete: {
//     value: true,
//     configurable: true,
//     enumerable: true,
//     writable: false, // impede mudança de valor
//   },  
//   quantidade:{
//     get(){
//       return this._quantidade; //O _quantidade é so p n entrar em conflito com o nome quantidade
//     },
//     set(valor){
//       this._quantidade = valor * 4 + ' motos disponiveis';
//     }
//   },
// });

// delete moto.rodas
// console.log(moto)

// // Object.entries(moto) ele da chave e valor
// //Object.getOwnPropertyNames(Array.prototype)  Ele da uma lista de todas as propriedades de array


// const frutas = ['Banana']
// console.log(Object.getPrototypeOf(frutas));
// console.log(Array.prototype);

// const frutas1 = ['Banana', 'Pêra'];
// const frutas2 = ['Banana', 'Pêra'];

// const novaFruta = frutas1; 

// Object.is(frutas1, frutas2) //false     
// //retorna false porque frutas1 e frutas2 são objetos distintos na memória, mesmo que seus conteúdos sejam iguais.
// Object.is(novaFruta, frutas1) //true


// // Object.freeze() impede qualquer mudança nas propriedades. 
// //Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. 
// //Object.preventExtensions() previne a adição de novas propriedades.

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }
// // Object.freeze(carro);
// // carro.marca = 'Honda';
// // Object.seal(carro);
// // carro.portas = 4;
// Object.preventExtensions(carro)
// delete carro.marca;
// console.log(carro);
// console.log(Object.isFrozen(carro));
// Object.isFrozen(carro)
// Object.isSealed(carro)
// Object.isExtensible(carro) //Se é possivel fazer adição de propriedade. Cuidado com a pegadinha

const frutas = ['Banana', 'Uva'];
const frase = 'Oi frase';
const somar = function (a, b) {
  return a + b;
}
const carro = {
  marca: 'ford',
}
console.log(carro.toString());

Object.prototype.toString.call(frutas);
console.log(Object.prototype.toString.call(frase));