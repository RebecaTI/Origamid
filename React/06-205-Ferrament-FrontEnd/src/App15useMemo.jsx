import React from 'react'

const App15useMemo = () => {
  const [contar, setContar] = React.useState(0)
  const valor = React.useMemo(() => {
    const localItem = window.localStorage.getItem('produto')
    console.log('Aconteceu o memo')
  }, [])
  console.log(valor)

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>
}

export default App15useMemo
