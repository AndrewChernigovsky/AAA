import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';


const libraries = {
  Swiper: Swiper,
  Autoplay: Autoplay,
  Pagination: Pagination,
}

for (const [key, value] of Object.entries(libraries)) {
  window[key] = value;
}

export { Swiper, Autoplay, Pagination }; 