async function loadModule() {
  const { toToggleMenu } = await import("./modules/menu-burger.js");
  const { initTarifsTabs } = await import("./modules/tabs.js");
  const { initSwiper } = await import("./modules/swiper.js");
  const { initCost } = await import("./modules/cost.js");
  const { initSubHeadingAnimation } = await import("./modules/sub-heading-animation.js");
  const { initIHereAnimation } = await import("./modules/ihere-animation.js");
  const { initFormValidation } = await import("./modules/validation.js");

  toToggleMenu()
  initTarifsTabs()
  initSwiper();
  initCost();
  initSubHeadingAnimation();
  initIHereAnimation();
  initFormValidation();
}

document.addEventListener('DOMContentLoaded', loadModule)
