import React from 'react';
import { GlobalContext } from './GlobalContext';

const ProdutosEx = () => {
  const { dados } = React.useContext(GlobalContext)
  if (dados === null) return null
  return (
    <div>
      Produto: {dados.map(produto => <li key={produto.id}> {produto.nome} </li>)}
    </div>
  )
}

export default ProdutosEx
