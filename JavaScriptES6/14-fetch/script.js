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

// const sobre = fetch('./sobre.html');
// const div = document.createElement('div');
// sobre
//   .then(r => r.text())
//   .then(body => {
//     div.innerHTML = body
//     const titulo = div.querySelector('h1');
//     document.querySelector('h1').innerText = titulo.innerText;
//     console.log(titulo);
//   });

// const imagem = fetch("./imagem.jpg");
// imagem
//   .then(r => r.blob())
//   .then(body => {
//     const blobUrl = URL.createObjectURL(body);
//     const imagemDom = document.querySelector('img');
//     console.log(imagemDom)
//     imagemDom.src = blobUrl;
//   });

// const cep = fetch("https://viacep.com.br/ws/01001000/json/");
// cep
//   .then(r => {
//     const r2 = r.clone();
//     r.text().then((text) => {
//       console.log(text);
//     });
//     r2.json().then((json) => {
//       console.log(json);
//     });
//     console.log(r)
//   })
//   .then(body => {
//     console.log(body)
//   });

const imagem = fetch('https://www.google.com')
imagem.then((response) => {
  console.log(response.type)
  if (response.status === 404) {
    console.log('Página não existe')
  }
})
