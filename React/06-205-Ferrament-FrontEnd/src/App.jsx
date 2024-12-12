import React from 'react';

const titulo = <h1>Esse é um titulo</h1>

const App = () => {
  const random = Math.random();
  const ativo = true;

  function mostrarNome(sobrenome) {
    return 'Thiago' + sobrenome;
  }

  const carro = {
    marca: 'Ford',
    rodas: '4',
  }

  const estiloP = {
    color: 'blue',
    fontSize: '2rem',
  }

  return (
    <>
      {titulo}
      <p>
        {false ? 'ddfdfdf' : '52555'} - {10}
        {mostrarNome(' Oliveira')}
      </p>
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p className={ativo ? 'ativo' : 'inativo'}>{(random * 1000) / 50}</p>
    </>
  );
};

export default App
