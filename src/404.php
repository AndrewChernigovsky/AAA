<?php
include_once __DIR__ . '/files/php/helpers/classes/setVariables.php';
include_once __DIR__ . '/files/php/layout/head.php';
include_once __DIR__ . '/files/php/helpers/includeSections.php';

$title = 'Создание и продвижение сайтов | Академия Андрея Андреевича Изосимова';
$canonical = "<link rel='canonical' href='https://xn----7sbbihceda5ae9bf1bg0j.xn--p1ai/'";
$head = new Head($title, [], [$canonical]);


$initPath = new SetVariables();
$initPath->setVar();
$path = $initPath->getPathFileURL();
?>

<!DOCTYPE html>
<html lang="ru">
<?php echo $head->setHead();
?>

<body>
  <?php
  $base_path = __DIR__ . '/files/php/layout';

  include $base_path . '/header.php';
  ?>
  <main class="main" style="height: 100%; display: flex;">
    <div class="container" style="display: grid; align-content: center;">
      <h1 style="text-align: center; margin: 0 auto;">Вы не должны были попасть на эту страницу, желаете <a
          href="<?= $path ?>" style="color: orangered;">Вернуться на
          главную страницу?</a>
      </h1>
    </div>
  </main>
  <?php
  $base_path = __DIR__ . '/files/php/layout';

  include $base_path . '/footer.php';

  $filesModal_to_include = [
    'files/php/sections/popups/modal-form.php',
  ];

  $sectionLoader = new IncludeSections(__DIR__, $filesModal_to_include);
  $sectionLoader->includeFiles();
  ?>
</body>

</html>