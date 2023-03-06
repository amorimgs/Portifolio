export default function initAnimaHeader() {
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
