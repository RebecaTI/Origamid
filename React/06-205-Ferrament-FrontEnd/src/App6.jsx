import React from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Form from './componentes/Form/Form'

const Teste = () => {
  const active = false;
  if (active) {
    return <p>teste</p>;
  } else {
    return null;
  }
}

const App6 = () => {
  return (
    <>
      <Teste />
      <Header />
      <Form />
      <Footer />
    </>
  );
}

export default App6;