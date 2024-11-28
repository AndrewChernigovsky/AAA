<?php
$head_path = './../../layout/head.php';
include_once $head_path;

$title = 'ААА Академия Андрея Андреевича Изосимова, создание и продвижение сайтов | Портфолио';
$script = '/js/main.js';
$head = new Head($title, [], [$script]);

?>

<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset='utf-8'>
  <?php echo $head->setHead(); ?>
  <style>
    .value-button {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      margin-top: 20px;
    }
  </style>
</head>

<body>
  <?php
  include './../../layout/header.php';
  ?>
  <main class="main">
    <div class="container">
      <h1>Сайт о еде, посвященный пицце</h1>
      <img src="/assets/images/portfolio/site-5/site-5.png"
        alt="сайт о еде, посвященный пицце, создание сайтов, продвижение сайтов">
      <a href="./../../../index.php#form" class="value-button">Заказать</a>
    </div>
  </main>
  <?php
  include './../../layout/footer.php';
  ?>
</body>

</html>

<?php

?>