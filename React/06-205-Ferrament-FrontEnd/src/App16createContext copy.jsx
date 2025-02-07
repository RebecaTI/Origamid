import React from 'react';
import Produto from './createUserContext/Produto';
import { GlobalStorage } from "./createUserContext/GlobalContext";

const App16createContext = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  )
}

export default App16createContext

// Anotaçoes, todo elemento sempre tem as suas propriedades, o children.Caso eu abra e feche esse elemento, e o children representa tudo que tem ali dentro(<Produto />, div), oq estiver dentro de children