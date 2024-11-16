import React from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App9 = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'André', idade: '30' });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui Faculdade' });
  }

  // Dicionando o MODAL
  const [modal, setModal] = React.useState(false);

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
      </div>
    </>

  );
}

export default App9;
