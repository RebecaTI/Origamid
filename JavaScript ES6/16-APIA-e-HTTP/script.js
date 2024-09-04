// fetch('https://pokeapi.co/api/v2/pokemon/')
//   .then(response => response.json())
//   .then(pokemon => {
//     console.log(pokemon)
//   })
const url = 'https://jsonplaceholder.typicode.com/users/1/posts';
const options = {
  method: 'POST',
  body: '{}'
}
//Dentro do body é do tipo JSON

fetch(url, options);