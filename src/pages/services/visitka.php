<?php
include_once './../../helpers/includeSections.php';
?>

<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ААА Академия Андрея Андреевича Изосимова, создание и продвижение сайтов | Сайт-визитка</title>
  <link rel="stylesheet" href="/assets/libs/libs.css">
  <link rel="stylesheet" href="/css/style.css">
  <script src="/assets/libs/libs.js" type="module" defer></script>
  <script src="/js/main.js" type="module" defer></script>
</head>

<body>
  <?php
  include './../../layout/header.php';
  ?>
  <main class="main">
    <div class="container">
      <h1>Сайт-визитка</h1>
      <?php
      include './visitka/content.php';
      ?>
      <?php
      include './visitka/stages.php';
      ?>
      <?php
      include './visitka/purpose.php';
      ?>
      <?php
      include './visitka/site.php';
      ?>
      <?php
      include './visitka/deadlines.php';
      ?>
      <a href="./../../../index.php#form" class="value-button">Заказать</a>
    </div>
  </main>
  <?php
  include './../../layout/footer.php';
  ?>
</body>

</html>