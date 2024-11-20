import React from 'react'
import App12Produto from './App12Produto';

const App12useEffect = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then(response => response.json())
      .then(json => setDados(json));
  }, [])

  //MODAL
  const [ativo, setAtivo] = React.useState(false);

  // React.useEffect(() => {
  //   console.log('Executou')
  // }, []);

  // const titulo = 'Total';
  // React.useEffect(() => {
  //   document.title = titulo + contar;
  // }, [contar]);

  return (
    <div>
      {dados && <div>
        <h1>{dados.nome}</h1>
        <p>R$ {dados.preco * contar}</p>
      </div>}

      <button onClick={() => setContar(contar + 1)}>
        {contar}
      </button>

      <div>
        <h1>MODAL</h1>
        {ativo && <App12Produto />}

        <button onClick={() => setAtivo(!ativo)}></button>
      </div>
    </div>

  )
}

export default App12useEffect
