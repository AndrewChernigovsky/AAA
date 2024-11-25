<?php
$head_path = './../../layout/head.php';
include_once $head_path;

$title = 'ААА Академия Андрея Андреевича Изосимова, создание и продвижение сайтов | Сайт-Визитка';
$script = '/js/main.js';
$head = new Head($title, [], [$script]);

?>

<!DOCTYPE html>
<html lang="ru">

<?php
$head->setHead()
  ?>

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