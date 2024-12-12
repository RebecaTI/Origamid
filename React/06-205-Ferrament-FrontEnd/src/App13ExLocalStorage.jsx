import React from 'react'
import App13ExProduto from './App13ExProduto';

const App13ExLocalStorage = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
    console.log(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }
  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{ marginRight: '1rem' }}>notebook</button>
      <button onClick={handleClick}>smarphone</button>
      <App13ExProduto produto={produto} />
    </div >
  )
}

export default App13ExLocalStorage
