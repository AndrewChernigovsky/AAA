import "./../libs/libs.js";
import { toToggleMenu } from "./modules/menu-burger.js";
import { initTarifsTabs } from "./modules/tabs.js";
import { initSwiper } from "./modules/swiper.js";
import { initCost } from "./modules/cost.js";
import { addHeadingAnimation } from "./modules/heading.js";
import { initSubHeadingAnimation } from "./modules/subHeadingAnimation.js";
import { initIHereAnimation } from "./modules/IHereAnimation.js";
// import { myCaptcha } from "./modules/captcha.js";

initIHereAnimation();
toToggleMenu();
initTarifsTabs();
initSwiper();
initCost();
addHeadingAnimation();
initSubHeadingAnimation();
// myCaptcha();
