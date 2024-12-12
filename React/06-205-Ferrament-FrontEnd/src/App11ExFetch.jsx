import React from 'react'
import ProdutoEx from './exercicio-Fetch-3/ProdutoEx'

const App11ExFetch = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    )
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>Notebook</button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>Smartphone</button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>Tablet</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <ProdutoEx dados={dados} />}
    </div>
  )
}

export default App11ExFetch
