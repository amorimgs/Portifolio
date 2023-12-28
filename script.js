const initScrollSuave = () => {
  const ScrolToSection = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
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
        ScrolToSection(event);
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

const initAnimaLinks = () => {
  const animaLinks = () => {
    const linksInternos = document.querySelectorAll('a[href^="#"]');
    const tamanhoTela = window.innerHeight * .7;
    if (linksInternos.length > 0) {
      linksInternos.forEach((link)=>{
        if (link.hash !== '#home') {
          link.classList.remove('activeLink');
          const section = document.querySelector(link.hash);
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop > -tamanhoTela && sectionTop < 140) {
            link.classList.add('activeLink');
          } 
        }
      });
  
    }
  };
  window.addEventListener('scroll', animaLinks);
};

initAnimaLinks();
initScrollSuave();
initTitleAnimation();
initAnimaSobre();

