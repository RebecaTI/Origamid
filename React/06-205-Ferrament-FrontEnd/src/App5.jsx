import React from 'react';

const App5 = () => {

  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener('scroll', handleScroll);
  return (
    <div style={{ height: '200vh' }}>
      <button onClick={(event) => console.log(event)}>Clique</button>
    </div>
  )
}

export default App5;