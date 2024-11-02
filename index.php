<?php
include_once './helpers/includeSections.php';
?>

<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ААА Академия Андрея Андреевича Изосимова, создание и продвижение сайтов</title>
  <link rel="stylesheet" href="./css/libs.css">
  <link rel="stylesheet" href="./css/style.css">
  <script src="./dist/js/main.js" defer type="module"></script>
</head>

<body>
  <?php
  $base_path = __DIR__ . '/layout';

  include $base_path . '/header.php';
  ?>
  <main class="main">
    <?php
    $files_to_include = [
      'sections/intro.php',
      'sections/advantages.php',
      'sections/prices.php',
      'sections/tarifs.php',
      'sections/about.php',
      'sections/reasons.php',
      'sections/cost/cost.php',
      'sections/form.php',
      'sections/reviews/reviews.php',
    ];

    $sectionLoader = new IncludeSections(__DIR__, $files_to_include);
    $sectionLoader->includeFiles();
    ?>

  </main>
  <?php
  $base_path = __DIR__ . '/layout';

  include $base_path . '/footer.php';

  $filesModal_to_include = [
    'sections/popups/modal-form.php',
  ];

  $sectionLoader = new IncludeSections(__DIR__, $filesModal_to_include);
  $sectionLoader->includeFiles();
  ?>
</body>

</html>