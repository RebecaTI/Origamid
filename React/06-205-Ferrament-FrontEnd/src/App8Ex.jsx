import React from 'react'
import HeaderEx from './exercicio-components/HeaderEx';
import HomeEx from './exercicio-components/HomeEx';
import ProdutosEx from './exercicio-components/ProdutosEx';

const App8Ex = () => {
  const { pathname } = window.location;
  let Page;
  if (pathname == '/produtos') {
    Page = ProdutosEx
  } else {
    Page = HomeEx
  }

  return (
    <>
      <section>
        <HeaderEx />
        <Page />
      </section>
    </>

  )
}

export default App8Ex;
