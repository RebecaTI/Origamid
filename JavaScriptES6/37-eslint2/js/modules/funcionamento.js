export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana="1,2,3,4,5"]')
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)

  const dataAgora = new Date()
  const diaAgora = dataAgora.getDay()
  const horarioAgora = dataAgora.getHours()

  // const test = [1, 2, 3, 4, 5].indexOf(6)
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1

  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto')
  }
}
