<?php
include_once './../../helpers/includeSections.php';
?>
<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ААА Академия Андрея Андреевича Изосимова, создание и продвижение сайтов | Лендинг</title>
  <link rel="stylesheet" href="/dist/assets/libs/libs.css">
  <link rel="stylesheet" href="/dist/css/style.css">
  <script src="/dist/assets/libs/libs.js" type="module" defer></script>
  <script src="/dist/js/main.js" type="module" defer></script>
</head>

<body>
  <?php
  include './../../layout/header.php';
  ?>
  <main class="main">
    <div class="container">
      <h1>Лендинг</h1>
      <?php
      include './landing/content.php';
      ?>
      <?php
      include './landing/stages.php';
      ?>
      <?php
      include './landing/purpose.php';
      ?>
      <?php
      include './landing/site.php';
      ?>
      <?php
      include './landing/deadlines.php';
      ?>
      <a href="./../../../index.php#form" class="value-button">Заказать</a>
    </div>
  </main>
  <?php
  include './../../layout/footer.php';
  ?>
</body>

</html>