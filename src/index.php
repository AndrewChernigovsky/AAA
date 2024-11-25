<?php

$head_path = './php/layout/head.php';
$sections_path = './php/helpers/includeSections.php';
include_once $head_path;
include_once $sections_path;

$title = 'ААА Академия Андрея Андреевича Изосимова, создание и продвижение сайтов';
$script = './js/main.js';
$head = new Head($title, [], [$script]);

?>

<!DOCTYPE html>
<html lang="ru">
<?php
echo $head->setHead();
?>

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
      'php/sections/quality.php',
      'php/sections/cost/cost.php',
      'php/sections/examples/examples.php',
      'php/sections/form.php',
      'php/sections/reviews/reviews.php',
      'php/sections/faq.php',
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