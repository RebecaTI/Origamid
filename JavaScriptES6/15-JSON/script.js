fetch('./dados.json')
  .then((r) => r.text())
  .then((jsonText) => {
    const jsonFilal = JSON.parse(jsonText)
  })

const configuracoes = {
  player: 'Google',
  tempo: 25.5,
  aula: '2.1 JavaScript'
}

localStorage.config = JSON.stringify(configuracoes)

// const stringConfig = JSON.stringify(configuracoes);
console.log(JSON.parse(localStorage.config))
