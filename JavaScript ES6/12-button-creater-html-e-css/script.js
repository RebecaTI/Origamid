const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange);

const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
}

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  // handleStyle.height(2)  
  handleStyle[name](value);  //Isso é o mesmo que o de cima
}