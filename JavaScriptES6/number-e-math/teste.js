let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const letters = [...alfabeto]
let num = 20;
let lettersLength = alfabeto.length
if(num > alfabeto.length){
  console.log('Maior que a quantidade de letras')
} else {
  
  function letraAlf(num){
    return alfabeto[num];
  }
  console.log(letraAlf(...alfabeto[num]))
}