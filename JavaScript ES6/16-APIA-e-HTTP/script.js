// fetch('https://pokeapi.co/api/v2/pokemon/')
//   .then(response => response.json())
//   .then(pokemon => {
//     console.log(pokemon)
//   })



// const url = 'https://jsonplaceholder.typicode.com/users/1/posts';
// const options = {
//   method: 'POST',
//   body: '{"title": "Javascript"}',
//   headers: {
//     "Content-Type": "application/json; charset=utf-8"
//   }
// }
// //Dentro do body é do tipo JSON

// fetch(url, options)
//   .then(response => {
//     console.log(response.headers.forEach(console.log));
//   })

//Methods
//GET 
//POST 
//PUT
//DELETE
//Link com os metodos https://www.origamid.com/slide/javascript-completo-es6/#/0605-api-e-http/5



const url = 'https://cors-anywhere.herokuapp.com/https://www.google.com/';
fetch(url)
  .then(response => response.text())
  .then(text => console.log(text));