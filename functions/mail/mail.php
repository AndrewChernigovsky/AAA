<?php
include_once './config.php';
include_once './telegram.php';
?>

<?php

$selected_site_type = $_POST['type-of-site'];
$shere = $_POST['shere'];
$date = $_POST['date'];
$totalcost = $_POST['total-cost'];
$usertel = $_POST['user-tel'];
$social = $_POST['social'];

$email_message = "Выбранный тип сайта: " . $selected_site_type . "\n";
$email_message .= "Деятельность бизнеса: " . $shere . "\n";
$email_message .= "Как срочно нужен сайт: " . $date . "\n";
$email_message .= "Бюджет: " . $totalcost . "₽" . "\n";
$email_message .= "Номер телефона: " . $usertel . "\n";
$email_message .= "Мессенджер: " . $social . "\n";

$headers = `From: ` . DOMEN_EMAIL . "\r\n";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

  $recaptchaResponse = $_POST['g-recaptcha-response'];

  $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={SECRET_KEY}&response={$recaptchaResponse}");
  $responseKeys = json_decode($response, true);

  if (intval($responseKeys["success"]) !== 1) {
    echo "Проверка reCAPTCHA не пройдена. Пожалуйста, попробуйте еще раз.";
  } else {
    echo "Форма успешно отправлена!";

    mail(TO_EMAIL, 'Новая заявка с сайта', $email_message, $headers);
    sendToTelegram($email_message);
  }
}
