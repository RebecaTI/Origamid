const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');
menu.classList.toggle('azul');
menu.classList.toggle('azul');

if(menu.classList.contains('azul')) {
    menu.classList.add('possui-azul')
} else {
    menu.classList.add('nao-possui-azul');
}

menu.className += ' vermelho'
//menu.className = menu.className + ' vermelho'  funciona como o 
// 5 = 5 + 1   é o mesmo que
// 5 += 1
console.log(menu.className);


const animais = document.querySelector('.animais');
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');

const srcImg = img.getAttribute('alt');

img.setAttribute('alt', 'É uma raposa');

console.log(srcImg);