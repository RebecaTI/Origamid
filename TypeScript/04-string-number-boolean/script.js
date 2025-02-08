"use strict";
const frase1 = new String('Front End');
const frase2 = String('Front End');
const frase3 = 'Front End';
// console.log(frase1)
// console.log(typeof frase1)
// console.log(typeof frase2)
// console.log(typeof frase3)
// Union Types
let total = 200;
total = '4000';
function isNumber(value) {
    if (typeof value === 'number') {
        return true;
    }
    else {
        return 'Não é um número';
    }
}
// if (isNumber('200')) {
//   console.log('É um número')
// }
// console.log(isNumber('200'))
const button = document.querySelector('button');
button?.click();
// Exercicio
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        return Number(value);
    }
    else {
        throw 'value deve ser um number | string';
    }
}
// console.log(toNumber(true))
console.log(Number(false));
