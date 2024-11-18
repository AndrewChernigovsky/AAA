export const initSwiper = () => {
  const swiperReviewsDOM = document.querySelector('.swiper-reviews');
  const swiperCostDOM = document.querySelector('.swiper-cost');
  if (swiperReviewsDOM) {
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
    window.swiperReviews = swiperReviews;
  }
  if (swiperCostDOM) {
    const swiperCost = new Swiper('.swiper-cost', {
      slidesPerView: 1,
      spaceBetween: 10,
      touchEventsTarget: 'wrapper',
      allowTouchMove: false,
      noSwiping: true,
      noSwipingSelector: '.input-range',
      mousewheel: false,
      keyboard: false,
    });


    window.swiperCost = swiperCost;
  }


};