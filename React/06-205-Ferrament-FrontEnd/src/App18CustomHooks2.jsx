import React from 'react'
import useLocalStorage from './CustomHooks1/useLocalStorage';
import useFetch from './18-CustomHooks2/useFetch';

const App18CustomHooks2 = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading } = useFetch();

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/')
  }, [])
  console.log(data)

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (loading) return <div> Carregando...</div>
  if (data === null) return null;

  return (
    <div>
      <p>Produto preferido: {produto}</p>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>

      {data.map((produto) => (
        <div key={produto.id}>
          <h1> {produto.nome} </h1>
        </div>
      ))}
    </div>
  )
}

export default App18CustomHooks2
