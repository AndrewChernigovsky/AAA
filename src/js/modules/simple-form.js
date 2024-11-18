const formSimple = document.querySelector('#form');
const hiddenInput = document.querySelector('#password-hash');
const popup = document.querySelector('.popup');
const recaptchaField1 = document.getElementById('RecaptchaField1');
const recaptchaField2 = document.getElementById('RecaptchaField2');

var widgetId1;
var widgetId2;

var CaptchaCallback = function () {
  if (recaptchaField1 && recaptchaField2) {
    widgetId1 = grecaptcha.render(recaptchaField1, {
      'sitekey': '6LcXjXMqAAAAAOk-ZcPIIdan-9-WnbxIYv4Gbaav',
      'callback': function (response) {
        sendForm('cost', response);
      }
    });

    widgetId2 = grecaptcha.render(recaptchaField2, {
      'sitekey': '6LcXjXMqAAAAAOk-ZcPIIdan-9-WnbxIYv4Gbaav',
      'callback': function (response) {
        sendForm('form-simple', response);
      }
    });
  } else {
    console.error("reCAPTCHA fields not found");
  }
};

window.onload = function () {
  CaptchaCallback();
};

function sendForm(formId, recaptchaResponse) {
  const form = document.getElementById(formId);
  const phone = formSimple.querySelector("input[name='user-tel']");
  const messengers = formSimple.querySelectorAll("input[name='social']");

  function validation() {
    let isChecked = false;
    messengers.forEach(radio => {
      if (radio.checked) {
        isChecked = true;
      }
    });
    return {
      phoneValid: phone.value.length === 18,
      messengerValid: isChecked,
    };
  }

  formSimple.addEventListener('submit', function (event) {
    event.preventDefault();
    const validationResult = validation();

    if (hiddenInput.value.length === 0 && validationResult.phoneValid && validationResult.messengerValid) {
      if (!recaptchaResponse) {
        popup.classList.add('active');
        popup.querySelector('h3').textContent = "Нужно пройти капчу";
        setTimeout(() => popup.classList.remove('active'), 3000);
        return;
      } else {
        const formData = new FormData(form);
        formData.append('g-recaptcha-response', recaptchaResponse);
        const action = form === 'form-simple' ? './php/functions/mail/mail.php' : './php/functions/mail/mail-simple.php';
        console.log(action, 'ACTION');
        grecaptcha.reset(widgetId1);
        grecaptcha.reset(widgetId2);
        recaptchaResponse = undefined;
        fetch(action, {
          method: 'POST',
          body: formData
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            console.log(123123123);
            popup.classList.add('active');
            popup.querySelector('h3').textContent = 'Данные успешно отправлены!';
            popup.querySelector('p').textContent = 'Сообщение закроется через 3 секунды';
            setTimeout(() => popup.classList.remove('active'), 3000);
          })
          .catch(error => console.error('Ошибка:', error));
      }
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