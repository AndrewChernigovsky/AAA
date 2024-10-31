const toggleMenu = document.querySelector('#btn-open-menu');
const wrapper = document.querySelector('.header__intro');

toggleMenu.addEventListener('click', toToggleMenu)

export function toToggleMenu() {
  if (toggleMenu && wrapper) {
    wrapper.classList.toggle('active')
    toggleMenu.classList.toggle('active')
  }
  return;
}