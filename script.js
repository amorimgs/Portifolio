function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.links a[href^="#"]');
  const nextPage = document.querySelector('.nextpage a');
  if (linksInternos.length) {
    function ScrolToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      console.log(section);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    linksInternos.forEach((i) => {
      i.addEventListener('click', ScrolToSection);
    });
    nextPage.addEventListener('click', ScrolToSection);
  }
}
initScrollSuave();
