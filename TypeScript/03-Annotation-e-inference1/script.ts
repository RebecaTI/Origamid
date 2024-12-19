let produto: string = 'Livro'
let preco: number = 200

const carro: {
  marca: string
  portas: number
} = {
  marca: 'Audi',
  portas: 5
}

const barato: boolean | string = preco < 400 ? true : 'produto caro'

function somar(a: number, b: number) {
  return a + b
}

somar(4, 10)
