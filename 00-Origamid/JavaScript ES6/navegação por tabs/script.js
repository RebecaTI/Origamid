const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length) {
  // "Se tabMenu e tabContent existir, execute o codigo abaixo"
  tabContent[0].classList.add('ativo');
  
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }
  
  tabMenu.forEach((itemMenu, index) => {
    //Pelo index ser o segundo parametro não é possivel fazer uma chamada de callback. Ou seja criar uma function fora do addEventListener, então para pegar o index, uma function deve ser criada dentro de addEventListener 
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    })
  });
}
