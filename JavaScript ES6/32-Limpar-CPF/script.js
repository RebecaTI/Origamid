const cpfs = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
  return elements.map(elements => elements.innerText);
}

const limparCPF = (cpf => {
  return cpf.replace(/\D/g, '');
})

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

const formatarCPFS = (cpfs) => {
  return cpfs.map(cpf => {
    return limparCPF(cpf);
  })
}

const resultado = elementsInnerText(cpfs);

console.log(formatarCPFS(resultado))