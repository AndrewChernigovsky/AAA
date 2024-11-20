<?php
include_once './../../helpers/includeSections.php';
?>

<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ААА Академия Андрея Андреевича Изосимова, создание и продвижение сайтов | Аудит</title>
  <link rel="stylesheet" href="/assets/libs/libs.css">
  <link rel="stylesheet" href="/css/style.css">
  <script src="/assets/libs/libs.js" type="module" defer></script>
  <script src="/js/main.js" type="module" defer></script>
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

<?php

?>