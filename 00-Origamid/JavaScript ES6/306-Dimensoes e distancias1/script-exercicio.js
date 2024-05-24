// Verifique a distância da primeira imagem
// em relação ao topo da página

let firstImage = document.querySelector('img');
const firstImageTop = firstImage.offsetTop;
console.log(firstImage.clientHeight);
console.log(firstImageTop);

// Retorne a soma da largura de todas as imagens

// let allImages = document.querySelectorAll('img');

// allImagesArray = Array.from(allImages);

// allImagesArray.forEach((item) => {
    
//     console.log(item.clientWidth)
// });

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// let allLinks = document.querySelectorAll('a[href]');

// allLinksArray = Array.from(allLinks);

// allLinksArray.forEach((item) =>{
//     const rectAllLinksArray = item.getBoundingClientRect();

//     if(rectAllLinksArray.height > 48) {
//         console.log('Possui o tamanha recomentado ') 
//         }else {
//             console.log('Não possui o tamanho adequado 48')
//     }

//     console.log(rectAllLinksArray.height);
// })

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menum

const small = window.matchMedia('(max-width: 820px)');

const menu = document.querySelector('.menu');

if(small.matches) {
    menu.classList.add('menu-mobile');
}