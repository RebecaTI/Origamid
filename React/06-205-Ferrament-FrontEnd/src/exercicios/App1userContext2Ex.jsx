import React from 'react';
import ProdutosEx from './exercApp1/Produtos/Produtos'
import { GlobalStorage } from './exercApp1/Produtos/GlobalContext'
import Limpar from './exercApp1/Produtos/Limpar'

const App1useContext2Ex = () => {
  return (
    <GlobalStorage>
      <ProdutosEx />
      <Limpar />
    </GlobalStorage>
  )
}

export default App1useContext2Ex
