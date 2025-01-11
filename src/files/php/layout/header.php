<?php
include_once __DIR__ . '/../helpers/classes/setVariables.php';

$initPath = new SetVariables();
$initPath->setVar();

$path = $initPath->getPathFileURL();

$link1 = $path . '#advantages';
$link2 = $path . '#quality';
$link3 = $path . '#tarifs';
$link4 = $path . '#prices';
$link5 = $path . '#reasons';
$link6 = $path . '#about';
$link2form = $path . '#form';

$logo = $path . 'assets/images/logo.avif';
$phone = '+7 953 232 21 12';
?>
<header class="header">
  <div class="container">
    <div class="header__wrapper">
      <div class="header__inner">
        <button class="header__menu-btn" type="button" id="btn-open-menu"><span class="visually-hidden">Открыть
            окно</span></button>
        <a class='tel' href="tel:<?php echo str_replace(' ', '', $phone) ?>"><?php echo $phone ?></a>
        <a href="<?= $initPath->getPathFileURLInner() ?>">
          <img src="<?php echo $logo; ?>" alt="логотип академии Андрея Андреевича Изосимова" width="50" height="50">
        </a>
      </div>

      <div class="header__intro">
        <span class="add-text">Хостинг на год в подарок</span>
        <div class="logo">
          <a href="<?= $initPath->getPathFileURLInner() ?>">
            <img src="<?php echo $logo; ?>" alt="логотип академии Андрея Андреевича Изосимова" width="100" height="100">
          </a>
          <a class="tel" href="tel:<?php echo str_replace(' ', '', $phone) ?>"><?php echo $phone ?></a>
          <nav class="nav">
            <ul class="nav__list list-style-none ">
              <li class="nav__item"><a href="<?php echo $link1 ?>">Преимущества</a></li>
              <li class="nav__item"><a href="<?php echo $link2 ?>">Гарантия</a></li>
              <li class="nav__item"><a href="<?php echo $link3 ?>">Обо мне</a></li>
              <li class="nav__item"><a href="<?php echo $link4 ?>">Тарифы</a></li>
              <li class="nav__item"><a href="<?php echo $link5 ?>">Цены</a></li>
              <li class="nav__item"><a href="<?php echo $link6 ?>">Почему Я</a></li>
            </ul>
          </nav>
        </div>
        <a href="<?php echo $link2form ?>" class="add-text">ЗАКАЗАТЬ САЙТ</a>
      </div>
    </div>
  </div>
</header>