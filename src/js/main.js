async function loadModule() {
  const { toToggleMenu } = await import("./modules/menu-burger.js");
  const { initTarifsTabs } = await import("./modules/tabs.js");
  const { initSwiper } = await import("./modules/swiper.js");
  const { initCost } = await import("./modules/cost.js");
  const { addHeadingAnimation } = await import("./modules/heading.js");
  const { initSubHeadingAnimation } = await import("./modules/subHeadingAnimation.js");

  toToggleMenu()
  initTarifsTabs()
  initSwiper();
  initCost();
  addHeadingAnimation();
  initSubHeadingAnimation();
}

loadModule()
