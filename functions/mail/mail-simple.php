<?php
include_once './config.php';
include_once './telegram.php';
?>

<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $usertel = $_POST['user-tel'];
  $social = $_POST['social'];

  $email_message = "Номер телефона: " . $usertel . "\n";
  $email_message .= "Мессенджер: " . $social . "\n";

  $headers = `From: ` . DOMEN_EMAIL . "\r\n";
  mail(TO_EMAIL, 'Новая заявка с сайта', $email_message, $headers);
  sendToTelegram($email_message);

  echo "Данные формы отправлены успешно!";
}
