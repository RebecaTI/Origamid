const comida = 'Pizza';
const agua = new String('agua');

console.log(comida.length);

const frase = 'A melhor comida';
console.log(frase[frase.length -1]);
console.log(frase.charAt(frase.length -1));
console.log(frase[frase.length]); //retorna undefined
console.log(frase.charAt(frase.length )); //retorna nada


const frase2 = 'A melhor comida é  ';
const linguagem = 'JavaScript';

const fraseFinal = frase + linguagem;
const fraseFinal2 = frase.concat(linguagem + '!!', 'ojifjid');