const cpfsList = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
  return elements.map(elements => elements.innerText);
}

const limparCPF = (cpf => {
  return cpf.replace(/\D/g, '');
})

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

//Essa se chama uma Function Expression
const formatarCPFS = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF);
}

const substituirCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCPFS(cpfs);

  cpfsElements.forEach((elements, index) => {
    elements.innerText = cpfsFormatados[index];
  })

  console.log(cpfsFormatados);
}

substituirCPFS(cpfsList);