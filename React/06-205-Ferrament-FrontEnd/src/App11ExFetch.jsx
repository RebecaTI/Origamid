import React from 'react'
import ProdutoEx from './exercicio-Fetch-3/ProdutoEx'

const App11ExFetch = () => {
  const [dados, setDados] = React.useState(null);

  async function handleClick(event) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    )
    const json = await response.json();
    setDados(json);
  }

  return (
    <div>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>Notebook</button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>Smartphone</button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>Tablet</button>
      {dados && <ProdutoEx dados={dados} />}
    </div>
  )
}

export default App11ExFetch
