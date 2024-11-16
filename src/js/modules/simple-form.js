const formSimple = document.querySelector('#form')
const hiddenInput = document.querySelector('#password-hash');
const popup = document.querySelector('.popup');


function sendForm() {
  const phone = formSimple.querySelector("input[name='user-tel']")
  const messengers = formSimple.querySelectorAll("input[name='social']")

  function validation() {
    let isChecked = false;
    messengers.forEach(radio => {
      if (radio.checked) {
        isChecked = true;
      }
    });
    return {
      phoneValid: phone.value.length > 0,
      messengerValid: isChecked,
    };
  }

  formSimple.addEventListener('submit', function (event) {
    event.preventDefault();
    const recaptchaResponse = grecaptcha.getResponse();
    console.log(recaptchaResponse.length, 'length');
    if (recaptchaResponse.length === 0) {
      popup.classList.add('active');
      popup.querySelector('h3').textContent = "Нужно пройти капчу";
      setTimeout(() => popup.classList.remove('active'), 3000);
      return;
    }

    const validationResult = validation();

    if (hiddenInput.value.length === 0 && validationResult.phoneValid && validationResult.messengerValid) {
      const formData = new FormData(this);
      fetch('./php/functions/mail/mail-simple.php', {
        method: 'POST',
        body: formData
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          popup.classList.add('active');
          popup.querySelector('h3').textContent = 'Данные успешно отправлены!';
          popup.querySelector('p').textContent = 'Сообщение закроется через 3 секунды';
          setTimeout(() => popup.classList.remove('active'), 3000);
          grecaptcha.reset();
        })
        .catch(error => console.error('Ошибка:', error));
    } else {
      if (!validationResult.phoneValid) {
        popup.classList.add('active');
        popup.querySelector('h3').textContent = "Введите номер телефона";
        setTimeout(() => popup.classList.remove('active'), 3000);
      }
      if (!validationResult.messengerValid) {
        popup.classList.add('active');
        popup.querySelector('h3').textContent = "Выберите мессенджер";
        setTimeout(() => popup.classList.remove('active'), 3000);
      }
    }
  });
}

export function initFormSimple() {
  if (formSimple) {
    const phone = formSimple.querySelector("input[name='user-tel']");
    Inputmask({
      mask: '+7 (999) 999-99-99',
    }).mask(phone);
    sendForm();
  }
}
