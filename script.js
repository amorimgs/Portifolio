function ScrolToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
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
      i.addEventListener('click', ScrolToSection);
    });
  }
}

initScrollSuave();

