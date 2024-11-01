<section class="cost">
  <div class="container">
    <h2>Рассчитать стоимость сайта</h2>
    <form action="" method="post" id="cost">
      <?php
      $base_path = __DIR__;

      $files_to_include = [
        'slide-1.php',
        'slide-2.php',
        'slide-3.php',
        'slide-4.php',
        'slide-5.php',
      ];

      foreach ($files_to_include as $file) {
        $file_path = $base_path . '/' . $file;

        if (file_exists($file_path)) {
          include $file_path;
        } else {
          echo "Файл $file не найден.<br>";
        }
      }
      ?>
    </form>
  </div>
</section>