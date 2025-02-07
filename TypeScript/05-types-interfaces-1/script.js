"use strict";
function preencherDados(dados) {
    document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.preco ? 'sim' : 'nao'}</p>
    </div>
  `;
}
preencherDados({
    nome: 'Computador',
    preco: 2000,
    teclado: true
});
preencherDados({
    nome: 'Notebook',
    preco: 2500,
    teclado: false
});
