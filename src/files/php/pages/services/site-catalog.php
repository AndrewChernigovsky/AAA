<?php
$head_path = './../../layout/head.php';
include_once $head_path;

$title = 'ААА Академия Андрея Андреевича Изосимова, создание и продвижение сайтов | Сайт-Каталог';
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
      <h1>Сайт-каталог</h1>
      <?php
      include './site-catalog/content.php';
      ?>
      <?php
      include './site-catalog/stages.php';
      ?>
      <?php
      include './site-catalog/purpose.php';
      ?>
      <?php
      include './site-catalog/site.php';
      ?>
      <?php
      include './site-catalog/deadlines.php';
      ?>
      <a href="./../../../index.php#form" class="value-button">Заказать</a>
    </div>
  </main>
  <?php
  include './../../layout/footer.php';
  ?>
</body>

</html>