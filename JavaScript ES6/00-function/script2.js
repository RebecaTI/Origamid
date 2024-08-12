'use strict' //Ele faz restrições no codigo, quando n usados o use strict ele vai apontar p objeto mais global possivel
function thisBindExemplo() {
  // console.log(this);
}

const obj = {exemplo: "Exemplo"};

// thisBindExemplo = thisBindExemplo.bind(obj);
//O bind liga a uma nova função criada
thisBindExemplo();