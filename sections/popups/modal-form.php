<div class="popup">
  <div class="container">
    <h3>Данные успешно отправлены</h3>
    <p><?php
    $time = 3;

    while ($time >= 0) {
      echo `Окно закроется через $time секунд\n`;
      sleep(1);
      $time--;
    }
    ?>
    </p>
  </div>
</div>