import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx';
// import App2 from './App2.jsx';
// import App3 from './App3.jsx';
// import App4 from './App4.jsx';
// import App5 from './App5.jsx';
// import App6 from './App6.jsx';
// import App7 from './App7.jsx';
// import App8Ex from './App8Ex.jsx';
// import App9 from './App9.jsx';
// import App10 from './App10.jsx';
// import App11ExFetch from './App11ExFetch.jsx';
// import App12useEffect from './App12useEffect';
import App13ExLocalStorage from './App13ExLocalStorage.jsx'


// createRoot(document.getElementById('root')).render(<App />)
// createRoot(document.getElementById('root-exercicio')).render(<App2 />);
// createRoot(document.getElementById('root-arrays')).render(<App3 />);
// createRoot(document.getElementById('root-exercicio-2')).render(<App4 />);
// createRoot(document.getElementById('root-eventos')).render(<App5 />);
// createRoot(document.getElementById('root-componentes')).render(<App6 />);
// createRoot(document.getElementById('root-propriedades')).render(<App7 />);
// createRoot(document.getElementById('root-exercicio-3')).render(<App8Ex />);
// createRoot(document.getElementById('root-Hooks-useState-1')).render(<App9 />);
// createRoot(document.getElementById('root-contador')).render(<App10 />)
// createRoot(document.getElementById('root-exercicio-4-Fetch')).render(<App11ExFetch />)
const rootElement = document.getElementById('root-exercicio-4-Fetch');
const rootElementEffect = document.getElementById('root-useEffect');
const rootElementEffectEx = document.getElementById('root-exercicio-5-Fetch');

//Criando os roots
const root = createRoot(rootElement);
const rootEffect = createRoot(rootElementEffect);
const rootEffectEx = createRoot(rootElementEffectEx);

//Renderizando os componentes nos respectivos roots
// root.render(
//   <StrictMode>
//     <App11ExFetch />
//   </StrictMode>
// );
// rootEffect.render(
//   <StrictMode>
//     <App12useEffect />
//   </StrictMode>
// )
rootEffectEx.render(
  <StrictMode>
    <App13ExLocalStorage />
  </StrictMode>
)
