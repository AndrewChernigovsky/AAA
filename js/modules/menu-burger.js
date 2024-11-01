const toggleMenuButton = document.querySelector('#btn-open-menu');
const wrapper = document.querySelector('.header__intro');

function toggleMenu() {
  wrapper.classList.toggle('active')
  toggleMenuButton.classList.toggle('active')
  document.querySelector('body').classList.toggle('overflow')
}

export function toToggleMenu() {
  if (toggleMenuButton && wrapper) {
    toggleMenuButton.addEventListener('click', toggleMenu)
  }
  return;
}