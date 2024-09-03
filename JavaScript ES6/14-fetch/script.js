// fetch interna
//API Significa que é uma intervace de aplicação que conseguimos interagir com ela atravez de codigos.
// const doc = fetch('./doc.txt');

// doc
//   .then(r => r.text())
//   .then(body => {
//     const conteudo = document.querySelector('.conteudo');
//     conteudo.innerText = body;
//   });

// const style = fetch('./style.css');

// style
//   .then(r => r.text())
//   .then(body => {
//     const conteudo = document.querySelector('.conteudo');
//     const style = document.createElement('style');
//     style.innerHTML = body;
//     console.log(style);
//     conteudo.appendChild(style);
//   });

const sobre = fetch('./sobre.html');

const div = document.createElement('div');

sobre
  .then(r => r.text())
  .then(body => {
    div.innerHTML = body
    const titulo = div.querySelector('h1');
    document.querySelector('h1').innerText = titulo.innerText;
    console.log(titulo);
  });