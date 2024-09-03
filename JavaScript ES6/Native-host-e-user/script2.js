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



const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(fruta.includes(listaFrutas));
console.log(listaFrutas.includes(fruta))
console.log(fruta.startsWith('Ba'));
console.log(fruta.endsWith('na'));



const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3)); //Dep
console.log(transacao1.slice(5)); //Ele corta os 5 primeiros caracteres
console.log(transacao1.slice(-5)); //Retorna os ultimos 5 caracteres

console.log(fruta.indexOf('a')); //primeiro index
console.log(fruta.lastIndexOf('na')); //ultimo index




const preco = 'R$ 99,00';

preco.padStart(10) //A quantidade de caracteres e na falta preencher com espaço
preco.padStart(10, '-') //A quantidade de caracteres e na falta preencher com - no inicio

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item) => {
  console.log(item.padStart(10)) //P alinhar os preços
})

listaPrecos.forEach((item) => {
  console.log(item.padStart(10, '-'))
})



const frase3 = 'ta';

console.log(frase3.repeat(5));




let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
//listaItens = listaItens.replace('Camisas', 'Shirt')
//listaItens = listaItens.replace(' ', ', ') //Dessa forma ele muda apenas o primeiro espaço
listaItens = listaItens.replace(/[ ]+/g, ', ') //Para substituir todos os espaços, é necessário usar uma regular expression

console.log(listaItens);

//let preco = 'R$ 1200,43';
//preco = preco.replace(',', '.'); // 'R$ 1200.43'



const arrayLista = listaItens.split(', ');
const arrayLista2 = listaItens.split(''); //ele separa cada caracter,até os espaços
const arrayLista3 = listaItens.split();//retorna o item completo, item unico



const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section')

console.log(htmlText);
console.log(htmlArray);

const frutasArray = ['Banana', 'Melancia', 'Laranja'];

frutasArray.join('a');



const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true



const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'  ele n remove os espaços de dentro
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'
