function ScrolToSection(event, links) {
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
}

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');
  if (linksInternos.length) {
    linksInternos.forEach((i) => {
      i.addEventListener('click', (event)=>{
        ScrolToSection(event, linksInternos);
      } );
    });
  }
}

initScrollSuave();

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
