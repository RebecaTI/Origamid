debugger;
function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach(element => {
      element.style.display = 'none';
    });
    console.log(this);
    return this;
  }

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial';
    });
    return this;
  }

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback);
    })
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className);
    })
    return this;
  }

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className);
    })
    return this;
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  }
}
const btns = $$('button');

btns.addClass('ativar');

// console.log(btns.hide().show());

// function handleClick(event) {
//   console.log(event.target);
//   btns.addClass('active');
// }

// btns.on('click', handleClick);