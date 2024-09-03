import initScrollSuave from './modules/scroll-suave.js'
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import init from './modules/tabnav.js';
// import { testando as nomeModificado, teste2 } from './modules/teste.js';

import * as teste from './modules/teste.js';
// O * significa tudo, caso n saiba oq tem no arquivo
teste.teste2() //acessando ele, como um objeto
console.log(teste.senha);

// teste2()
// nomeModificado();

console.log(this);

initScrollSuave();
initAnimacaoScroll();
initAccordion();
init();