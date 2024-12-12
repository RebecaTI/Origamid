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

// var acumulador = {};
// acumulador.aula = 'sdfg';
const listaAulas = aulas.reduce((acumulador, aula, index) => {
  console.log(aula.nome)
  acumulador[index] = aula.nome;
  console.log(acumulador)
  return acumulador
}, {}) //Estou passando um objeto vazio q é o mesmo q 0
console.log(listaAulas)


//reduceright()
//Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.
const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva
