<?php
include_once __DIR__ . '/../../data/examples.php';

$examples = new Examples();
?>

<section class="examples">
  <div class="container">
    <h2 class="secondary-title">Некоторые из работ</h2>
    <div class="swiper swiper-examples">
      <ul class="swiper-wrapper list-style-none">
        <?php foreach ($examples->examples as $example): ?>
          <li class="swiper-slide">
            <img class="examples__image" src="<?= $example['image']['src'] ?>" alt="<?= $example['image']['alt'] ?>"
              width="<?= $example['image']['width'] ?>" height="<?= $example['image']['height'] ?>">
            <h3 class="four-title"><?= $example['title'] ?></h3>
            <p><?= $example['desc'] ?></p>
            <a href="<?= $example['link'] ?>" class="value-button">Посмотреть</a>
          </li>
        <?php endforeach; ?>
      </ul>
      <div class="swiper-pagination"></div>

    </div>

  </div>
</section>