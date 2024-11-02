const steps = document.querySelector('.cost__steps p');
const line = document.querySelector('.cost__line');
const lineActive = document.querySelector('.cost__line--active');
const swiperCostSlides = document.querySelectorAll('.swiper-cost .swiper-slide');

const inputRange = document.getElementById("inputRange");
const activeColor = "#ff7300";
const inactiveColor = "#4b4747";
const rangeBar = document.getElementById('inputRange');
const valueDisplay = document.getElementById('total-cost');

rangeBar.addEventListener('input', function () {
  valueDisplay.value = this.value + 'Р';
});

function updatePrice() {
  const priceValue = inputRange.value;
  valueDisplay.value = priceValue;
  const ratio = (priceValue - inputRange.min) / (inputRange.max - inputRange.min) * 100;
  rangeBar.style.background = `linear-gradient(90deg, ${activeColor} ${ratio}%, ${inactiveColor} ${ratio}%)`;
}

rangeBar.addEventListener('input', updatePrice);

function changeStep() {
  steps.textContent = `Шаг ${swiperCost.realIndex + 1}/${swiperCostSlides.length}`;
  changeLineProgress();
}

function changeLineProgress() {
  const lineWidth = line.offsetWidth;
  const totalSlides = swiperCostSlides.length;

  if (swiperCost.realIndex === totalSlides - 1) {
    lineActive.style.width = '100%';
  } else if (swiperCost.realIndex > 0) {
    lineActive.style.width = (lineWidth / totalSlides) * swiperCost.realIndex + 'px';
    console.log(lineActive.style.width, 'width');
  } else {
    lineActive.style.width = '0px';
  }
}


export function initCost() {
  changeStep();
  updatePrice();

  swiperCost.on('slideChange', function () {
    changeStep();
    updatePrice();
  });
}