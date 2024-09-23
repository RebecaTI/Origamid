// const regexCEP = /\d{5}[-\s]?\d{3}/g;
// const ceps = [
//   '00000-000',
//   '00000 000',
//   '00000000'
// ];

// for (cep of ceps) {
//   console.log(cep, cep.match(regexCEP));
// }


// const frase = 'JavaScript';
// const regexp = /J/
// const fraseNova = frase.replace(regexp, 'B');

// console.log(fraseNova);


// const regexp = /\w+/gi;

// const regextp1 = new RegExp('\\d+', 'gi');
// const frase = 'JavaScript Linguagem 101';
// console.log(frase.replace(regextp1, 'X'));



// const frase2 = 'JavaScript e Java Linguagem 101, Java';

// const regexp2 = /Java/g;

// // console.log(regexp2.test(frase2));

// let i = 1;
// while (regexp2.test(frase2)) {
//   console.log(i++, regexp2.lastIndex)
// }



// const frase3 = 'JavaScript, TypeScript, CofeeScript, Java';
// const regexp3 = /\w+/g;

// let regexpResult;
// while ((regexpResult = regexp3.exec(frase3)) !== null) {
//   console.log(regexpResult[0]);
// }



// const frase4 = 'JavaScript, TypeScript, CofeeScript, Java';
// const regexp4 = /[0-9]+/;
// const regexp5 = /Script/g;

// // const resultados = frase4.match(regexp4);
// const resultados = frase4.split(regexp5);
// //O split vai remover tudo que ele der match e vai criar um novo item ed array apartir dele
// console.log(resultados);




// const tags = `
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>
// `;

// const regexp6 = /(?<=<\/?)\w+/g;
// //o nome é lookBehind

// const regexp7 = /<li/g;

// const resultado2 = tags.replace(regexp7, '$& class="ativa"');

// console.log(resultado2);



const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

const emailsErrados = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br
andre@origamid.com`

const regexp8 = /(\w+@)[\w.]+/g;
const regexp9 = /(\w+@)([\w.]+)/g;

// const resultado3 = emails.replace(regexp8, `$1gmail.com`);
const resultado3 = emails.replace(regexp8, function (...args) {
  // console.log(args);
  return '$1X';
});
// console.log(resultado3);

const resultado4 = emailsErrados.replace(regexp9, function (...args) {
  // console.log(args[2]);
  if (args[2] === 'homail.com.br') {
    return args[1] + 'hotmail.com.br'
  } else if (args[2] === 'ggmail.com.br') {
    return args[1] + 'gmail.com.br'
  } else if (args[2] === 'oulook.com.br') {
    return args[1] + 'outlook.com.br'
  } else {
    return args[0];
  }
});

console.log(resultado4)







