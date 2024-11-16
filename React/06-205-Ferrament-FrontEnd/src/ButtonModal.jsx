import React from 'react'

const ButtonModal = ({ setModal }) => {

  function secondHandleClick() {
    setModal((ativo) => !ativo);
  }

  return (
    <button onClick={secondHandleClick}>Abrir</button>
  )
}

export default ButtonModal
