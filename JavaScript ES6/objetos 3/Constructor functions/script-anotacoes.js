function Carro(marcaAtribuida, precoAtribuido){
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro('honda', 1000);
const fiat = new Carro('fiat', 2000);

function Carro2(marca, precoInicial){
  //Ele não tem acesso aos const
  //Somente tem acesso ao this
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  console.log(this);
  //EXEMPLO IMPORTANTE
  //this.taxa = 1.2;
  //const precoFinal = precoInicial * taxa;  Taxa não existe mais, pq n esta atribuida a uma variavel
  //O taxa só poderá sera acessado com o this.taxa exemplo:
  //const precoFinal = precoInicial * this.taxa;
  this.marca = marca;
  this.preco = precoFinal;
  
}

const mazda = new Carro2('mazda', 5000)