const steps = document.querySelector('.cost__steps p');
const line = document.querySelector('.cost__line');
const lineActive = document.querySelector('.cost__line--active');
const swiperCostSlides = document.querySelectorAll('.swiper-cost .swiper-slide');
const stepBack = document.querySelector('#step-back');
const costForm = document.querySelector('#cost')
const hiddenInput = document.querySelector('#password-hash');
const popup = document.querySelector('.popup');

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

function checkFormSlide() {
  const currentSlide = swiperCostSlides[swiperCost.realIndex];
  const inputs = currentSlide.querySelectorAll('input[type="radio"], input[type="checkbox"], input[type="range"]');

  inputs.forEach(input => {
    input.addEventListener('change', () => {
      if (input.type == 'range') {
        swiperCost.slideNext();
      }
      if (input.checked) {
        swiperCost.slideNext();
      }
    })
  })
}

function sendForm() {
  costForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (hiddenInput.value === '') {
      const formData = new FormData(this);
      fetch('./../../functions/mail/mail.php', {
        method: 'POST',
        body: formData
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        })
        .catch(error => console.error('Ошибка:', error));
    }
  })
}
// function sendForm() {
//   costForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const formData = new FormData(this);
//     fetch('./../../functions/mail/mail.php', {
//       method: 'POST',
//       body: formData
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         popup.classList.add('active');
//         popup.querySelector('p').textContent = `Окно закроется само через ${time} секунд`
//         setTimeout(
//           () => {
//             popup.classList.remove('active');
//           }, 3000)
//       })
//       .catch(error => console.error('Ошибка:', error));
//   });
// }

export function initCost() {
  changeStep();
  updatePrice();
  checkFormSlide();
  sendForm();

  stepBack.addEventListener('click', () => {
    swiperCost.slidePrev();
  })

  swiperCost.on('slideChange', function () {
    changeStep();
    updatePrice();
    checkFormSlide()
  });
}
