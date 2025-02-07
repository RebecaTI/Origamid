import React from 'react';
import useLocalStorage from './CustomHooks1/useLocalStorage';

const App17CustomHooks1 = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}> notebook </button>
      <button onClick={handleClick}> smartphone </button>
    </div>
  )
}

export default App17CustomHooks1
