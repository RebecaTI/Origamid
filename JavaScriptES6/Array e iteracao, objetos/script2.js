const carros = ['Fort', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//   //console.log(item.toLocaleUpperCase(), index, array)  //Ele mudou o primeiro item p uppercase, mas não alterou a array original
// })

// console.log(carros)




// Arrow Function
const li = document.querySelectorAll('li');
// li.forEach((i, index) => i.classList.add('ativa' + index));
//É o mesmo que:
// li.forEach(function(i, index) {
//    i.classList.add('ativa' + index);
// })



// Modificar a Array Original
//carros.forEach((item, index, array) => array[index] = 'Carro ' + item);
// console.log(carros)



// [].map()
//Dferença entre forEach e map
//forEach
//Propósito: Executa uma função em cada item de um array, mas não retorna um novo array.
// Uso: Ideal para executar efeitos colaterais (como logging ou modificações externas) sem a intenção de criar um novo array com base nos valores existentes.
// Retorno: undefined. Não é possível usar o valor retornado diretamente em uma variável, pois o forEach não cria um novo array.

// map:
// Propósito: Cria um novo array com os resultados da execução de uma função em cada item do array original.
// Uso: Ideal quando você deseja transformar os valores de um array e obter um novo array com esses valores transformados.
// Retorno: Um novo array com os resultados da função aplicada a cada item do array original.

const retornoForEach = li.forEach((item, index) => {
  item.classList.add('ativa' + index)
}) 
//console.log(retornoForEach) //retorno: undefined
//O forEach sempre retorna undefine. Pq o objetivo dele não é o retorno dele, mas sim oq vc vai fazer com o ele.
const novaArray = carros.map((item, index, array) => {
  //console.log(item.toUpperCase(), index, array)
})
//console.log(novaArray)// Está dando undefined, pq o valor dessa novaArray vai ser o valor do return de cada iteração q tem
//Função sem return, sempre o undefined será o retorno
const novaArray2 = carros.map((item, index, array) => {
  //console.log(item.toUpperCase(), index, array)
  return item.toUpperCase()
})
//console.log(novaArray2) //O map sempre retorna um novo array com a mesma quantidade de elementos do array original, mas com valores transformados de acordo com a função fornecida.

const numeros = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map(n =>  n * 2)
// console.log(numerosX2)

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);

function nomeAulas(aula) {
  return aula.nome
}
const arrayNomeAula = aulas.map(nomeAulas)
//Isso acima é a msma coisa que
const arrayNomeAula2 = aulas.map(function(aula) {
  return aula.nome
})
//Que é o mesmo que isso
const arrayNomeAula3 = aulas.map((aula) => aula.nome)
//Outra forma :
const nomeAulas2 = aula => aula.nome;
const arrayNomeAula4 = aulas.map(nomeAulas2);

//console.log(tempoAulas)



//[].reduce()
const aulas2 = [10, 25, 30];
const reduceAulas = aulas2.reduce((acumulador, item, index, array) => {
  // console.log(acumulador, item, index);
  return acumulador + item
},0)
//Vai retornar a soma dos valores, e o inicio é 0 ja q esta escrito ali no final. Poderia ser qlqr numero e isso diria ql o numero de contagem

// console.log(reduceAulas)

//Se retirar o 0 ali no final ele vai continuar fazendo a soma mas a forma q ele integiu foi dferente
const reduceAulas2 = aulas2.reduce((acumulador, item, index, array) => {
  // console.log(acumulador, item);
  return acumulador + item
})

// console.log(reduceAulas2)
//Ele pulou o primeiro console.log e vai tranformar o valor do primeiro no valor da iteração q é 10. Então ele começa com 10 de acumulador

const numeros2 = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros2.reduce((anterior, atual) => anterior > atual ? anterior : atual, 0)

// console.log(maiorNumero)




//[].some() 
//Se pelo menos um return da iteração for truthy, ele retorna true
const frutas = ['Banana', '', 'Pêra', 'Uva'];
const temUva = frutas.some((item) => {
  // console.log(item);
  return item === 'Uva';
})
// console.log(temUva)

//[].every()
// Se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.
const every = frutas.every((fruta) => {
  console.log(fruta)
  return fruta
})
console.log(every) //Se eu retornar pelo meno umas string vazia ele vai dar false pq string vazia é false assim como 0 tbm

const indexUva = frutas.findIndex(item => item === 'Uva')
console.log(indexUva);



const numeros3 = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros3.every(n => n >= 6);
console.log(maiorQue3)


const frutas2 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayFrutas = frutas2.filter((fruta) => {
  return fruta; 
}); // ['Banana', 'Uva', 'Maçã']

const numeros4 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros4.filter(x => x > 45); // [88, 101]



const aulasMaiores15 = aulas.filter(aula => aula.min > 15)
console.log(aulasMaiores15)