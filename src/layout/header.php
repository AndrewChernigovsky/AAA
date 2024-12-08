<?php
$logoPath = '/assets/images';
?>

<header class="header">
  <div class="container">
    <div class="header__wrapper">
      <div class="header__inner">
        <button class="header__menu-btn" type="button" id="btn-open-menu"><span class="visually-hidden">Открыть
            окно</span></button>
        <a href="tel:+79532322112" class="tel">+7 953 232 21 12</a>
        <img src="<?php echo $logoPath . '/logo.png'; ?>" alt="логотип академии Андрея Андреевича Изосимова" width="50"
          height="50">
      </div>

      <div class="header__intro">
        <span class="add-text">Хостинг на год в подарок</span>
        <div class="logo">
          <img src="<?php echo $logoPath . '/logo.png'; ?>" alt="логотип академии Андрея Андреевича Изосимова"
            width="100" height="100">
          <a href="tel:+79532322112" class="tel">+7 953 232 21 12</a>
          <nav class="nav">
            <ul class="nav__list list-style-none ">
              <li class="nav__item"><a href="/dist/index.php#advantages">Преимущества</a></li>
              <li class="nav__item"><a href="/dist/index.php#quality">Гарантия</a></li>
              <li class="nav__item"><a href="/dist/index.php#about">Обо мне</a></li>
              <li class="nav__item"><a href="/dist/index.php#tarifs">Тарифы</a></li>
              <li class="nav__item"><a href="/dist/index.php#prices">Цены</a></li>
              <li class="nav__item"><a href="/dist/index.php#reasons">Почему Я</a></li>
            </ul>
          </nav>
        </div>
        <a href="/dist/index.php#form" class="add-text">ЗАКАЗАТЬ САЙТ</a>
      </div>
    </div>
  </div>
</header>