export default function initmenuMobile() {
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
