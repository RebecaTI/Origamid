import React from 'react'

const App14useRef = () => {
  // const [comentarios, setComentarios] = React.useState([]);
  // const [input, setInput] = React.useState('');
  // const inputElement = React.useRef();

  // function handleClick() {
  //   setComentarios([...comentarios, input]);
  //   setInput('');
  //   inputElement.current.focus();
  // }

  // O prof apagou o codigo acima eu achei melhor comentar p n perde o codigo

  // Abaixo seria o ecomerce q te o carrinho
  const [carrinho, setcarrinho] = React.useState(0);
  const [notificacao, setNoticacao] = React.useState(null);
  const timeoutRef = React.useRef();

  let referencia = 0;

  function handleClick() {
    setcarrinho(carrinho + 1);
    setNoticacao('item adicionado ao carrinho');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNoticacao(null);
      console.log('teste');
    }, 2000);
  }

  return (
    // <div>
    //   <ul>
    //     {comentarios.map((comentario) => (
    //       <li key={comentario}>{comentario}</li>
    //     ))}
    //   </ul>
    //   <input
    //     type="text"
    //     ref={inputElement}
    //     value={input}
    //     onChange={({ target }) => setInput(target.value)}
    //   />
    //   <br />
    //   <button onClick={handleClick}>Enviar</button>
    // </div>
    // O prof apagou o codigo acima eu achei melhor comentar p n perde o codigo

    // Abaixo seria o ecomerce q te o carrinho
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar carrinho {carrinho}</button>
    </div>

  )
}

export default App14useRef
