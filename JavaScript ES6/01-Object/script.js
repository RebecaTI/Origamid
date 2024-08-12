const pessoa = new Object({
  nome:'Andre'
});

console.log(pessoa.nome);

const carro = {
  marca: 'Marca',
  init(valor){
    this.marca = valor;
    return valor
  },
  acelerar() {
    return this.marca + ' acelerou'
  },
  buzinar() {
    return this.marca + ' buzinou'
  }
}

const honda = Object.create(carro);
honda.marca = 'Honda';