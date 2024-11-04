<?php
include_once './../helpers/includeSections.php';
?>

<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ААА Академия Андрея Андреевича Изосимова, создание и продвижение сайтов | Аудит</title>
  <link rel="stylesheet" href="/assets/libs/libs.css">
  <link rel="stylesheet" href="/dist/css/style.css">
  <script src="/assets/libs/libs.js" type="module" defer></script>
  <script src="/dist/js/main.js" type="module" defer></script>
</head>

<body>
  <?php
  include './../layout/header.php';
  ?>
  <main class="main">
    <div class="container">
      <h1>Аудит</h1>
      <?php
      include './../sections/audit/content.php';
      ?>
      <?php
      include './../sections/audit/stages.php';
      ?>
      <?php
      include './../sections/audit/purpose.php';
      ?>
      <?php
      include './../sections/audit/site.php';
      ?>
      <?php
      include './../sections/audit/deadlines.php';
      ?>
    </div>
  </main>
  <?php
  include './../layout/footer.php';
  ?>
</body>

</html>

<?php

?>