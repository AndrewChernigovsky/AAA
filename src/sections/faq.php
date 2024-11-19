<section class="faq" id="faq">
  <div class="container">
    <h2>вопросы-ответы</h2>
    <ol class="tabs-faq list-style-none">
      <li class="active">Какая информация нужна для расчета стоимости разработки сайта?</li>
      <li>Что влияет на цену создания сайта?</li>
      <li>Сколько времени занимает сама разработка?</li>
      <li>Почему вы не разрабатываете на Wordpress и Joomla?</li>
    </ol>
    <hr>
    <ol class="tabs-content list-style-none">
      <li class="active">Нужна максимально подробная информация по требованиям к сайту с Вашей стороны для составления
        подробного
        функционального и технического задания.</li>
      <li>Основной фактор, влияющий на итоговую стоимость сайта – количество затраченных на разработку часов. Цена сайта
        зависит от его типа и заложенного функционала. В редких случаях даже одностраничный лендинг может обойтись
        дороже корпоративного сайта, если существует необходимость размещения на этой странице сложных узконаправленных
        элементов и блоков, на разработку которых может уйти несколько рабочих дней.</li>
      <li>Точное количество рабочих часов наших специалистов рассчитывается в функциональном задании, которое мы
        формируем по результатам обработанной заявки или детального диалога. На разработку сайта может уйти как пара
        рабочих дней, так и три-четыре месяца. Все зависит от сложности проекта и Ваших требований к сайту.</li>
      <li>Слишком много мусорного кода, а это серьезно усложняет правильную разработку, оптимизацию и обслуживание таких
        сайтов.</li>
    </ol>
  </div>
  <style>
    .tabs-faq {
      display: grid;
      gap: 10px;
    }

    .tabs-faq li {
      text-transform: none;
      min-height: 30px;
    }

    .tabs-faq li.active {
      color: orange;
    }

    .tabs-content li {
      overflow: hidden;
      height: 0;
      text-transform: none;
    }

    .tabs-content li.active {
      height: auto;
    }
  </style>
  <script>
    const questions = document.querySelectorAll('.tabs-faq li');
    const answers = document.querySelectorAll('.tabs-content li');

    function clearQuestionAnswers() {
      questions.forEach((question, index) => {
        question.classList.remove('active');
        answers[index].classList.remove('active');
      })
    }

    questions.forEach((question, index) => question.addEventListener('click', () => {
      clearQuestionAnswers()
      question.classList.add('active')
      answers[index].classList.toggle('active')
    }));
  </script>
</section>