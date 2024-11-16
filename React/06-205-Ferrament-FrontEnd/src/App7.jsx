import React from 'react'
import Form2 from './Form2/Form2'

const Titulo = ({ cor, texto, children }) => {
  return <h1 style={{ color: cor }} >{texto}, {children}</h1>
}

const App7 = ({ label }) => {
  return (
    <>
      <div>
        <Titulo cor="red" texto="Meu titulo 1" >
          Isso é um children
        </Titulo>
        <Titulo cor="blue" texto="Meu titulo 2" />
      </div>

      <div>
        <Form2 />
      </div>
    </>

  );
}

export default App7;