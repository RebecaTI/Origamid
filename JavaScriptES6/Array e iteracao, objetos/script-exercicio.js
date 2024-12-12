const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
let comidasPrimeiroDel = comidas.shift();
console.log(comidasPrimeiroDel)
// Remova o último valor de comidas e coloque em uma variável
let comidasUltimoDel = comidas.pop();
console.log(comidasUltimoDel)
// Adicione 'Arroz' ao final da array
comidas.push('Arroz')
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata')


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log('Ordem alfabetica');
console.log(estudantes.sort())
// Inverta a ordem dos estudantes
console.log('Ordem invertida');
console.log(estudantes.reverse())
// Verifique se Joana faz parte dos estudantes
console.log('Verificando se Joana existe');
console.log(estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log('Verificando se Juliana existe');
console.log(estudantes.includes('Juliana'));


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul').split('div').join('li')

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carros2 = [...carros];
const carros3 = carros.slice(); //tem o mesmo efeito de criar uma cópia superficial do array, mas é um pouco mais verboso em comparação com o operador de espalhamento.
carros.pop()