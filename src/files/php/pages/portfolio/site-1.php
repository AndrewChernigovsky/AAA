<?php
$head_path = './../../layout/head.php';
include_once $head_path;

$title = 'ААА Академия Андрея Андреевича Изосимова, создание и продвижение сайтов | Портфолио';
$script = '/files/js/main.js';
$head = new Head($title, [], [$script]);

?>

<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset='utf-8'>
  <?php echo $head->setHead(true); ?>
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
      <h1>Сайт Аквафильтры</h1>
      <p><a href="https://aqualife.kg" rel="nofollow">https://aqualife.kg</a></p>
      <img src="./assets/images/portfolio/site-1/site-1.png"
        alt="сайт аквафильтры, создание сайтов, продвижение сайтов">
      <a href="./../../../index.php#form" class="value-button">Заказать</a>
    </div>
  </main>
  <?php
  include './../../layout/footer.php';
  ?>
</body>

</html>