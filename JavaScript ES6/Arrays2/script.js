const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

//O que importa é o tipo do dado, então dados[0] é uma string então dados[0].toLowerCase(), funciona.

//Para acessar um item dentro de uma array dados[1][1]  O resultado é 'Portas'

//Para acessar um objeto dentro de uma array que está dentro de outra array, dados[1][2].cor   ao fazer isso já é possivel ver as opções de cor ou preço pq vc esta acessando os dados dentro do objeto

//SEMPRE LEMBRAR = O que retorna é oq importa



const carros = new Array('Ford', 'Fiat', 'Honda');

carros[2] = 'Ferrari';
carros[3] = 'Kia';
//Criou espaços vazios
carros[20] = 'Kia';

console.log(carros.length)



const li = document.querySelectorAll('li');

const arrayLi = Array.from(li)

const obj = {
  0: 'Andre',
  1: 'Rafael',
  2: 'Teste',
  length: 3,
}

//Tem q fazer na ordem 0 ~ 1 pra n dar undefined


const objArray = Array.from(obj)
//P transformar um obj em array, TEM que ter a propriedade length

console.log(li)
console.log(arrayLi)
console.log(obj)
console.log(objArray)



//Pra identificar se é uma array
console.log(Array.isArray(li))

//Sobre Array.of
console.log(Array.of(10))
console.log(Array.of('Teste', 'teste2'))
console.log(new Array(5))//Vai criar uma array vazia com 5 itens
console.log(Array(20))//Array vazia com 20 itens
console.log(Array.of(10))


//[].length retorna o tamanho da array
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

console.log(frutas.length)
console.log(frutas[3])