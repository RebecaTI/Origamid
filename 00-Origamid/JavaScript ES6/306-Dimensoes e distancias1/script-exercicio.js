// Verifique a distância da primeira imagem
// em relação ao topo da página

let firstImage = document.querySelector('img');
const firstImageTop = firstImage.offsetTop;

console.log(firstImageTop);

// Retorne a soma da largura de todas as imagens

function somaImagens() {
    const allImages = document.querySelectorAll('img');
    let soma = 0;
    allImages.forEach((imagem) => {
        soma += imagem.offsetWidth; 
    });
    console.log(soma);

}
// allImages.forEach((imagem) => {
//     console.log(imagem.offsetWidth);
// });

window.onload = function () {
    somaImagens()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

let links = document.querySelectorAll('a[href]');


links.forEach((link) =>{
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkWidth >= 48 && linkHeight >= 48) {
        console.log(link , 'Possui boa acessibilidade.')
    } else {
        console.log(link, 'Não possui boa acessibilidade.')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menum

const small = window.matchMedia('(max-width: 820px)');

const menu = document.querySelector('.menu');

if(small.matches) {
    menu.classList.add('menu-mobile');
}