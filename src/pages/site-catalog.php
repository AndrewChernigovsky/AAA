<?php
include_once './../helpers/includeSections.php';
?>
<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ААА Академия Андрея Андреевича Изосимова, создание и продвижение сайтов | Сайт-каталог</title>
  <link rel="stylesheet" href="./../css/libs.css">
  <link rel="stylesheet" href="./../css/style.css">
  <script src="./../dist/js/main.js"></script>
</head>

<body>
  <?php
  include './../layout/header.php';
  ?>
  <main class="main">
    <div class="container">
      <h1>Сайт-каталог</h1>
      <?php
  include './../sections/site-catalog/content.php';
  ?>
      <?php
  include './../sections/site-catalog/stages.php';
  ?>
      <?php
  include './../sections/site-catalog/purpose.php';
  ?>
      <?php
  include './../sections/site-catalog/site.php';
  ?>
      <?php
  include './../sections/site-catalog/deadlines.php';
  ?>
    </div>
  </main>
  <?php
  include './../layout/footer.php';
  ?>
</body>

</html>