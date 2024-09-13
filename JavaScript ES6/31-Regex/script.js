// const regexCEP = /\d{5}[-\s]?\d{3}/g;
// const ceps = [
//   '00000-000',
//   '00000 000',
//   '00000000'
// ];

// for (cep of ceps) {
//   console.log(cep, cep.match(regexCEP));
// }


// const frase = 'JavaScript';
// const regexp = /J/
// const fraseNova = frase.replace(regexp, 'B');

// console.log(fraseNova);


// const regexp = /\w+/gi;

// const regextp1 = new RegExp('\\d+', 'gi');
// const frase = 'JavaScript Linguagem 101';
// console.log(frase.replace(regextp1, 'X'));



// const frase2 = 'JavaScript e Java Linguagem 101, Java';

// const regexp2 = /Java/g;

// // console.log(regexp2.test(frase2));

// let i = 1;
// while (regexp2.test(frase2)) {
//   console.log(i++, regexp2.lastIndex)
// }



const frase3 = 'JavaScript, TypeScript, CofeeScript, Java';
const regexp3 = /\w+/g;

let regexpResult;
while ((regexpResult = regexp3.exec(frase3)) !== null) {
  console.log(regexpResult[0]);
}