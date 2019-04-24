<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once('PHPMailer/src/PHPMailer.php');
require_once('PHPMailer/src/Exception.php');
require_once('PHPMailer/src/SMTP.php');

$email = $_POST["email"];
$error = false;

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $error = true;
}

if ($error) {
  echo '<script language="javascript">';
  echo 'window.location.href="index.html";';
  echo 'alert("Please enter a valid email address");';
  echo '</script>';
}else {
  $mail = new PHPMailer(true);
  try {
    $mail->SMTPDebug = 2;
    $mail->isSMTP();
    $mail->Host = 'ssl://smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'cgrghw@gmail.com';
    $mail->Password = 'john54321';
    $mail->SMTPSecure = false;
    $mail->Port = 465;

    $mail->setFrom($email);
    $mail->addAddress('cgrghw@gmail.com');
    $mail->isHTML(true);
    $mail->Subject = 'New subscription from '.$email;
    $mail->Body    = 'You have a new subscription from '.$email;
    $mail->Send();

    header("Location: http://localhost");
    die();
  } catch (Exception $e) {
      echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
  }
}
?>
