import React from 'react'
import useLocalStorage from './CustomHooks1/useLocalStorage';
import useFetch from './18-CustomHooks2/useFetch';

const App18CustomHooks2 = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading, error } = useFetch();
  // const { request: request2, data: data2 } = useFetch();

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produtos/');
  }, [])

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (loading) return <p> Carregando...</p>
  if (data)
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
    );
  else return null;
};

export default App18CustomHooks2
