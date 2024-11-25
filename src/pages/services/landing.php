<?php
$head_path = './../../layout/head.php';
include_once $head_path;

$title = 'ААА Академия Андрея Андреевича Изосимова, создание и продвижение сайтов | Лендинг';
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