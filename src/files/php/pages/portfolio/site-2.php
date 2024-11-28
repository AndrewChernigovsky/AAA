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

    p {
      font-family: 'Rubick', 'Arial', sans-serif;
    }

    p a {
      color: white;
      text-decoration: none;
      text-transform: none;
      font-weight: 400;
      font-family: 'Rubick', 'Arial', sans-serif;
    }
  </style>

</head>



<body>
  <?php
  include './../../layout/header.php';
  ?>
  <main class="main">
    <div class="container">
      <h1>Сайт BRUNT Демонтажная техника из Китая
      </h1>
      <p><a href="https://brunt-sz.ru" rel="nofollow">https://brunt-sz.ru</a></p>
      <img src="/assets/images/portfolio/site-2/site-2.png"
        alt="сайт Демонтажная техника из Китая, создание сайтов, продвижение сайтов">
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