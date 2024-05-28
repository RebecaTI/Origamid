/*     
  innerHTML coloca a tag dentro, ex:
  <h1>
    <p>Novo titulo  </p>
  </h1>
  outerHTML substitue a tag, oq antes era h1, mudou para p

  */

const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');

// console.log(h1.innerHTML);
// console.log(h1.outerHTML);

// h1.outerHTML = '<p>Novo Titulo </p>'
// console.log(animaisLista.innerHTML);

const lista = document.querySelector('.animais-lista');

// console.log(lista.parentElement.parentElement.parentElement);

// console.log(lista.nextElementSibling);

// console.log(lista.previousElementSibling);

// console.log(lista.children[--lista.children.length]);

console.log(lista.querySelector('li:last-child'));

// console.log(lista.childNodes);
console.log(lista.previousSibling);

