debugger;
function contagem() {
  let total = 0;
  return function incremento() {
    total++;
    console.log(total);
  }
}
console.log(contagem());

const ativarIncremento = contagem();
ativarIncremento();