export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    }) //Esse aqui coloca o elemento na minha view

    //Forma alternativa (Com essa forma ele precisa ver ql a distancia entre a section e o topo)
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top:topo,
    //   behavior:"smooth",
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}