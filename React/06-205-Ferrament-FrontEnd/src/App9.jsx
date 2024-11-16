import React from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App9 = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'André', idade: '30' });
  const [items, setItems] = React.useState('Teste');

  console.log('Log')
  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui Faculdade' });
  }

  function secondHandleClick() {
    setItems('Outro');
  }

  // Dicionando o MODAL
  const [modal, setModal] = React.useState(true);

  return (
    <>
      <div>
        <p>{dados.nome}</p>
        <p>{dados.idade}</p>
        <p>{dados.faculdade}</p>
        <button onClick={handleClick}>
          {ativo ? 'Ativo' : 'Inativo'}
        </button>
      </div>

      {/* Importando o Button Modal */}
      <div>
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal} />

        {/* SECOND HANDLE CLICK */}
        <p>{items}</p>
        <button onClick={secondHandleClick}>Clicar</button>
      </div>
    </>

  );
}

export default App9;
