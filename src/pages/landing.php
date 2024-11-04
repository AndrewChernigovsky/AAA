<?php
include_once './../helpers/includeSections.php';
?>
<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ААА Академия Андрея Андреевича Изосимова, создание и продвижение сайтов | Лендинг</title>
  <link rel="stylesheet" href="/dist/css/libs.css">
  <link rel="stylesheet" href="/dist/css/style.css">
  <script src="/dist/js/main.js"></script>
</head>

<body>
  <?php
  include './../layout/header.php';
  ?>
  <main class="main">
    <div class="container">
      <h1>Лендинг</h1>
      <?php
      include './../sections/landing/content.php';
      ?>
      <?php
      include './../sections/landing/stages.php';
      ?>
      <?php
      include './../sections/landing/purpose.php';
      ?>
      <?php
      include './../sections/landing/site.php';
      ?>
      <?php
      include './../sections/landing/deadlines.php';
      ?>
    </div>
  </main>
  <?php
  include './../layout/footer.php';
  ?>
</body>

</html>