const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;

const h2rect = primeiroh2.getBoundingClientRect();

console.log(h2rect.top);

if(h2rect.top < 0){
  console.log('passou do elemento');
}

console.log(
  window.innerWidth,  //width da janela
  window.innerHeight, //soma dev tools
  window.outerWidth,  //height da janela
  window.outerHeight, //soma a barra de endereço
  window.pageYOffset, //distancia total do scroll horizontal
  window.pageXOffset, //distancia total do scroll vertical
)

const small = window.matchMedia('(max-width:600px)').matches;

if(small){
  console.log('usuario mobile');
}

console.log(small);

