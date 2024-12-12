//Desestruturação
// function handleMouse(event) {
//   const { clientX, clientY } = event;
//   console.log(clientX, clientY);
// }
// document.addEventListener('click', handleMouse);

// //Outra forma q faz a mesma coisa
// function handleMouse2(clientX, clientY) {
//   console.log(clientX, clientY);
// }

// document.addEventListener('click', handleMouse);

// // spead operator
// function showList(empresa, ...clientes) {
//   clientes.forEach((cliente) => {
//     console.log(cliente, empresa);
//   });
// }
// showList('Google', 'Andre', 'Rafel', 'Item2');

// P adicionar um novo item dentro do objeto
// const carro = {
//   cor: ' Azul',
//   portas: 4,
// }

// Ele esta adicionando um valor nesse novo objeto
// carroAno = { ...carro, ano: 2008 };

// console.log(carroAno);


fetch('https://ranekapi.origamid.dev/wp-json/api/produto')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });

function fetchProdutos(url) {
  const response = fetch(url);
  return response;
}

const produtos = fetchProdutos('https://ranekapi.origamid.dev/wp-json/api/produto');

console.log(produtos);