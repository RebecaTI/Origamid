const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, array){
    // console.log(item, index, array)
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

// console.log(titulos);
// console.log(titulosArray);

titulosArray.forEach(function(item, index, array) {
    // console.log(item, index, array);
})

let i = 0;
// imgs.forEach(item => {
//     console.log(item);
// })

// imgs.forEach((item, index) => {
//     console.log(i++);
// })

// imgs.forEach((item) => console.log(i++));

imgs.forEach(() => console.log(i++));

