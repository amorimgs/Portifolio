const initScrollSuave = () => {
  const ScrolToSection = (event, links) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    links.forEach((el)=>{
      el.classList.remove('activeLink');
      if(href === el.getAttribute('href') && href !== '#home') {
        el.classList.add('activeLink');
      }
    });
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const linksInternos = document.querySelectorAll('a[href^="#"]');
  if (linksInternos.length) {
    linksInternos.forEach((i) => {
      i.addEventListener('click', (event)=>{
        ScrolToSection(event, linksInternos);
      } );
    });
  }
};

const initTitleAnimation = () => {
  const titleAnimaiton = () => {
    const title = document.querySelector('h1');
    const frase = 'Desenvolvedor Full-Stack';
    const arr = frase.split('');
    title.innerText = '';
    arr.forEach((el, i) => {
      setTimeout(()=>{
        title.innerHTML += el;
      }, 80 * i);
    } );
  };
  titleAnimaiton();
  setInterval(()=>titleAnimaiton(),5000);
};

const initAnimaSobre = () => {
  const animaSobre = () =>{
    const tamanhoTela = window.innerHeight * .6;
    const sectionSobre = document.querySelector('#sobre');
    console.log(sectionSobre.getBoundingClientRect().top);
    const visibleSection = (sectionSobre.getBoundingClientRect().top - tamanhoTela) < 0;
    if (visibleSection) {
      sectionSobre.classList.add('activeSobre');
    } else {
      sectionSobre.classList.remove('activeSobre');
    }
  };
  animaSobre();
  window.addEventListener('scroll', animaSobre);
};

initScrollSuave();
initTitleAnimation();
initAnimaSobre();

