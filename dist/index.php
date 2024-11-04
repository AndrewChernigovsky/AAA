<?php
include_once './php/helpers/includeSections.php';
?>

<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ААА Академия Андрея Андреевича Изосимова, создание и продвижение сайтов</title>
  <link rel="stylesheet" href="./css/libs.css">
  <link rel="stylesheet" href="./css/style.css">
  <script src="./js/main.js" defer type="module"></script>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>

<body>
  <?php
  $base_path = __DIR__ . '/php/layout';

  include $base_path . '/header.php';
  ?>
  <main class="main">
    <?php
    $files_to_include = [
      'php/sections/intro.php',
      'php/sections/advantages.php',
      'php/sections/prices.php',
      'php/sections/tarifs.php',
      'php/sections/about.php',
      'php/sections/reasons.php',
      'php/sections/cost/cost.php',
      'php/sections/form.php',
      'php/sections/reviews/reviews.php',
    ];

    $sectionLoader = new IncludeSections(__DIR__, $files_to_include);
    $sectionLoader->includeFiles();
    ?>

  </main>
  <?php
  $base_path = __DIR__ . '/php/layout';

  include $base_path . '/footer.php';

  $filesModal_to_include = [
    'php/sections/popups/modal-form.php',
  ];

  $sectionLoader = new IncludeSections(__DIR__, $filesModal_to_include);
  $sectionLoader->includeFiles();
  ?>
</body>

</html>