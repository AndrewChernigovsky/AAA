async function loadModule() {
  const { toToggleMenu } = await import("./modules/menu-burger.js");
  const { initTarifsTabs } = await import("./modules/tabs.js");
  const { initSwiper } = await import("./modules/swiper.js");
  const { initCost } = await import("./modules/cost.js");
  const { addHeadingAnimation } = await import("./modules/heading.js");
  const { initSubHeadingAnimation } = await import("./modules/sub-heading-animation.js");
  const { initTitleAnimation } = await import("./modules/title-animation.js");
  const { initIHereAnimation } = await import("./modules/ihere-animation.js");
  const { initFormSimple } = await import("./modules/simple-form.js");

  toToggleMenu()
  initTarifsTabs()
  initSwiper();
  initCost();
  initFormSimple();
  addHeadingAnimation();
  initSubHeadingAnimation();
  initTitleAnimation();
  initIHereAnimation();
}

loadModule()
