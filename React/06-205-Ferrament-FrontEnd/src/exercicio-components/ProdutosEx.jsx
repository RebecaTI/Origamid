import React from 'react'
import TituloEx from './Tituloex'
import ProdutoEx from './ProdutoEx';

const ProdutosEx = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <section>
      <TituloEx texto='Produtos' />
      {produtos.map(produto => (
        <ProdutoEx key={produto.nome} {...produto} />
      ))}
    </section>
  )
}

export default ProdutosEx;
