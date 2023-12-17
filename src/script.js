function initAnimaHeader() {
  const header = document.querySelector('header');
  function scrollHeader() {
    if (this.scrollY > 0) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  }
  window.addEventListener('scroll', scrollHeader);
}

function initmenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const html = document.documentElement;
  const events = ['click', 'touchstart'];

  function openMenu() {
    menuButton.classList.toggle('active');
    menuList.classList.toggle('active');
    events.forEach((e) => {
      html.addEventListener(e, outsideClick);
    });
  }

  function outsideClick(event) {
    if (
      !menuList.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      menuButton.classList.remove('active');
      menuList.classList.remove('active');
      events.forEach((e) => {
        html.removeEventListener(e, outsideClick);
      });
    }
  }

  menuButton.addEventListener(events[0], openMenu);
  menuList.addEventListener(events[0], openMenu);
}

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
initmenuMobile();
initAnimaHeader();
