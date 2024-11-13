<section class="form" id="form">
  <div class="container">
    <h2>Заказать сайт</h2>
    <form action="./../functions/mail/mail-simple.php" method="post">
      <div class="form-slide">
        <h3>Оставьте контактные данные </h3>
        <div class="chooses contact">
          <label class="choose-label">Ваш телефон:
            <input class='contact-input' type="tel" name="user-tel" required>
          </label>
          <p> Выберите на какой мессенджер написать нашему Менеджеру </p>
          <div class="chooses">
            <label class="choose-label choose-label-contact choose-label-whatsapp" required>whatsapp
              <input type="radio" name="social" value="whatsapp">
            </label>
            <label class="choose-label choose-label-contact choose-label-telegram" required>telegram
              <input type="radio" name="social" value="telegram">
            </label>
            <label class="choose-label choose-label-contact choose-label-viber" required>viber
              <input type="radio" name="social" value="viber">
            </label>
          </div>
          <p>Наш сотрудник подберет для вас наиболее удобное время, в которое вы созвонитесь или спишетесь (как
            комфортнее) и обсудите все детали по созданию сайта и его разработке! <strong>Внимание: в приватности, у
              вас должно быть разрешено писать сторонним лицам, иначе мы не сможем написать вам в сообщения</strong>
          </p>
          <button type="submit" class="primary-button value-button">Отправить Заявку</button>
        </div>
      </div>
    </form>
  </div>
</section>