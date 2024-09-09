// function createButton(text) {
//   function element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     return buttonElement;
//   }

//   return Object.freeze({
//     text,
//     element,
//   });
// }

// const btnComprar = createButton('Comprar');
// const btnVender = createButton('Vender');

// btnComprar.text = 'Novo Text';

// console.log(btnComprar, btnVender);

function Pessoa(nome) {
  if (!new.target)  //Essa é a nova forma do ES6
    //if (!(this instanceof Pessoa)) //Esses dois são a mesma coisa
    return new Pessoa()
  this.nome = nome;
}
/*  
if (!(this instanceof Pessoa)) verifica se this (o contexto de execução atual) não é uma instância de Pessoa.
Se for o caso (se this não for uma instância de Pessoa), a função cria uma nova instância de Pessoa usando new.
*/

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`
}

const designer = new Pessoa('André');

console.log(designer)
