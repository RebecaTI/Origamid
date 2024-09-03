const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

//O que importa é o tipo do dado, então dados[0] é uma string então dados[0].toLowerCase(), funciona.

//Para acessar um item dentro de uma array dados[1][1]  O resultado é 'Portas'

//Para acessar um objeto dentro de uma array que está dentro de outra array, dados[1][2].cor   ao fazer isso já é possivel ver as opções de cor ou preço pq vc esta acessando os dados dentro do objeto

//SEMPRE LEMBRAR = O que retorna é oq importa



const carros = new Array('Ford', 'Fiat', 'Honda');

carros[2] = 'Ferrari';
carros[3] = 'Kia';
//Criou espaços vazios
carros[20] = 'Kia';

// console.log(carros.length)



const li = document.querySelectorAll('li');

const arrayLi = Array.from(li)

const obj = {
  0: 'Andre',
  1: 'Rafael',
  2: 'Teste',
  length: 3,
}

//Tem q fazer na ordem 0, 1, 2, 3 pra n dar undefined


const objArray = Array.from(obj)
//P transformar um obj em array, TEM que ter a propriedade length

// console.log(li)
// console.log(arrayLi)
// console.log(obj)
// console.log(objArray)



//Pra identificar se é uma array
// console.log(Array.isArray(li))

//Sobre Array.of
// console.log(Array.of(10))
// console.log(Array.of('Teste', 'teste2'))
// console.log(new Array(5))//Vai criar uma array vazia com 5 itens
// console.log(Array(20))//Array vazia com 20 itens
// console.log(Array.of(10))


//[].length retorna o tamanho da array
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

// console.log(frutas.length)
// console.log(frutas[0].length)
// console.log(frutas[2].length)

const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
instrumentos2.sort //Organiza por ordem alfabetica
// console.log(instrumentos2)

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
// console.log(idades)



const carros2 = ['Ford', 'Fiat', 'VW'];
carros2.unshift('Kia', 'Ferrari'); 
//carros2; // ['Kia', 'Ferrari', 'Ford', 'Fiat', 'VW'];
const novaArrayCarros2 = carros2.push('Parati', 'Gol'); 
//carros; // ['Kia', 'Ferrari', 'Ford', 'Fiat', 'VW', 'Parati', 'Gol'];
// //console.log(novaArrayCarros2)
// console.log(carros2)
// //console.log(carros2.pop());//remove o ultimo item da array
// //console.log(carros2.shift());//remove o primeiro item da array
//console.log(carros2.reverse()); //inverter a ordem da array




// [].splice()
// console.log(carros2.splice(1, 0, 'Fusca'));
//Ele retrna apenas os [], ao colocar no console dnovo ele vai mostrar q adicionou 'Fusca' no index 1 e removel 0 itens
//Adicionou apartir do index 1 os itens acima
//O 0 é a quantidade de itens q desejo remover pra quando adicionar.
//carros2.splice(1, 2, 'Fusca') Fazendo dessa forma, iria retornar os 2 itens q foram removidos

// console.log(carros2)




// [].copyWithin()
//A partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa copia. Caso omita os valores de inicio e final, ele ira utilixar como inicio o 0 e final o valor total da array.

// console.log(['Item1', 'Item2', 'Item3', 'Item4', 'item5'].copyWithin(2, 0, 2));
// console.log(['Item1', 'Item2', 'Item3', 'Item4', 'item5'].copyWithin(-1));//Pode usar valores negativos, então ele copiou o ultimo item e substituiu o ultimo item



// [].fill()
console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana'));//vai preencher todos os itens com 'Banana'
console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1)); //Estou falando p ele, comece a preencher a partir do index 1
 


//Metodos os de acesso [].concat()
//Todos os metodos anteriores modificam a array original, o de acesso não muda a array
const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
[].concat(transporte1, transporte2, 'outros valores')  //Posso usar uma array vaziasds



const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5



// [].join()
// const linguagens = ['html', 'css', 'js', 'php', 'python'];
// linguagens.join(); // 'html,css,js,php,python'
// linguagens.join(' '); // 'html css js php python'
// linguagens.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Titulo Principal</h2>';
htmlString = htmlString.split('h2')
htmlString = htmlString.join('')
console.log(htmlString)



// [].slice()
// const linguagens = ['html', 'css', 'js', 'php', 'python'];
linguagens.slice(3); // ['php', 'python']
linguagens.slice(1, 4); // ['css', 'js', 'php']

//IMPORTANTE
linguagens.slice(); // ['html', 'css', 'js', 'php', 'python'];
linguagens; // ['html', 'css', 'js', 'php', 'python']
//Colocando os dois dentro do console.log, agora vem a perguta: Mas os dois não são a mesma coisa?
//Não. Por que imagina:
// -Clona essa array p mim, 
//const cloneLinguagens = linguagens; O leigo vai achar q fazendo isso, vai clonar linguagens mas na verdade é simplismente uma referencia a linguagens
//Se eu fizer isso  linguagens.pop(), o cloneLinguagens tbm vai ser alterado, então isso demonstra q ele não é uma clonagem e sim está apontado oq linguagens tem
//Dferente se eu fizer isso aqui:
//const cloneLinguagens = linguagen.slice();
//Porque agora estou falando q cloneLinguagens é igual ao resultado desse metodo aqui