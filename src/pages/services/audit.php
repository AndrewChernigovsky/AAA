<?php
$head_path = './../../layout/head.php';
include_once $head_path;

$title = 'ААА Академия Андрея Андреевича Изосимова, создание и продвижение сайтов | Аудит';
$script = '/js/main.js';
$head = new Head($title, [], [$script]);

?>

<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset='utf-8'>
  <?php echo $head->setHead(); ?>
</head>

<body>
  <?php
  include './../../layout/header.php';
  ?>
  <main class="main">
    <div class="container">
      <h1>Аудит, стоимость: от 3 000 Р</h1>
      <p>Аудит включен в любую услугу отличную от этой по умолчанию, в случае покупки услуги "Аудит", и покупки услуги
        "Лендинг" или любой другой, из стоимости будет вычтена стоимость услуги "Аудит".
        <?php
        include './audit/content.php';
        ?>
        <?php
        include './audit/stages.php';
        ?>
        <?php
        include './audit/purpose.php';
        ?>
        <a href="./../../../index.php#form" class="value-button">Заказать</a>
    </div>
  </main>
  <?php
  include './../../layout/footer.php';
  ?>
</body>

</html>