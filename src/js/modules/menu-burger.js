const toggleMenuButton = document.querySelector('#btn-open-menu');
const wrapper = document.querySelector('.header__intro');

export function toToggleMenu() {
  function toggleMenu() {
    wrapper.classList.toggle('active')
    toggleMenuButton.classList.toggle('active')
    document.querySelector('body').classList.toggle('overflow')
  }

  if (toggleMenuButton && wrapper) {
    toggleMenuButton.addEventListener('click', toggleMenu)
  }
  return;
}