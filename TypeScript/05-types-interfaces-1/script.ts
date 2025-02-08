type NumberOrString = string | number

let total: NumberOrString = 20
total = '30'

type Produto = {
  nome: string
  preco: number
  teclado: boolean
}

function preencherDados(dados: Produto) {
  document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.preco ? 'sim' : 'nao'}</p>
    </div>
  `
}

const computador: Produto = {
  nome: 'Computador',
  preco: 2000,
  teclado: true
}

preencherDados({
  nome: 'Computador',
  preco: 2000,
  teclado: true
})

preencherDados({
  nome: 'Notebook',
  preco: 2500,
  teclado: false
})

type Categorias = 'design' | 'codigo' | 'descod'

function pintarCategoria(Categoria: string) {
  console.log(Categoria)
}

pintarCategoria('teste')
