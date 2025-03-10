// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p')

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador ,item) => {
  // console.log(item.innerText.length)
  return  acumulador + item.innerText.length
}, 0)
console.log(totalCaracteres)
console.log(paragrafos)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento
}

console.log(criarElemento('li', '', 'teste'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo')
const cursoJS = h1Titulo('Cursos de Javascript')
const cursoHTML = h1Titulo('Cursos de HTML')

console.log(cursoJS)



