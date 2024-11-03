export const initSwiper = () => {
  const swiperReviews = new Swiper('.swiper-reviews', {
    loop: true,
    modules: [Autoplay, Pagination],
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    slidesPerView: '1',
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: '2',
      },
      1024: {
        slidesPerView: '3',
      },
      1440: {
        slidesPerView: '4',
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
  const swiperCost = new Swiper('.swiper-cost', {
    slidesPerView: '1',
    spaceBetween: 10,
    noSwipingSelector: '.input-range, mousewheel, keyboard',
    allowTouchMove: false,
    touchEventsTarget: 'container',
    simulateTouch: false,
  });

  window.swiperCost = swiperCost;
};