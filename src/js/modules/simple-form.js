const formSimple = document.querySelector('#form');
const hiddenInput = document.querySelector('#password-hash');
const popup = document.querySelector('.popup');
const recaptchaField1 = document.querySelector('#RecaptchaField1')
const recaptchaField2 = document.querySelector('#RecaptchaField2')

var widgetId1;
var widgetId2;

var CaptchaCallback = function () {
  widgetId1 = grecaptcha.render(recaptchaField1, {
    'sitekey': '6LcXjXMqAAAAAOk-ZcPIIdan-9-WnbxIYv4Gbaav',
    'callback': function (response) {
      handleFormSubmission('cost', response);
    }
  });

  widgetId2 = grecaptcha.render(recaptchaField2, {
    'sitekey': '6LcXjXMqAAAAAOk-ZcPIIdan-9-WnbxIYv4Gbaav',
    'callback': function (response) {
      handleFormSubmission('form', response);
    }
  });
};
function handleFormSubmission(formId, recaptchaResponse) {
  const form = document.getElementById(formId);

  if (recaptchaResponse) {
    const formData = new FormData(form);
    formData.append('g-recaptcha-response', recaptchaResponse);

    fetch(form.action, {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          alert('Form submitted successfully!');
          grecaptcha.reset(formId === 'cost' ? widgetId1 : widgetId2);// Reset the appropriate captcha
        } else {
          alert('Error submitting form.');
        }
      })
      .catch(error => console.error('Error:', error));
  } else {
    alert('Please complete the CAPTCHA.');
  }
}

CaptchaCallback()
function sendForm(response) {
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
    // const recaptchaResponse = grecaptcha.getResponse(('#response2'));
    // console.log(recaptchaResponse.length, 'length');

    const validationResult = validation();

    if (hiddenInput.value.length === 0 && validationResult.phoneValid && validationResult.messengerValid) {
      if (!response) {
        popup.classList.add('active');
        popup.querySelector('h3').textContent = "Нужно пройти капчу";
        setTimeout(() => popup.classList.remove('active'), 3000);
        return;
      }
      const formData = new FormData(this);
      formData.append('g-recaptcha-response', response);
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
