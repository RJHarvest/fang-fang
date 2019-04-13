<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once('PHPMailer/src/PHPMailer.php');
require_once('PHPMailer/src/Exception.php');
require_once('PHPMailer/src/SMTP.php');

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

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

  $newmessage = $message;
  $mail->setFrom($email, $name);
  $mail->addAddress('cgrghw@gmail.com');
  $mail->isHTML(true);
  $mail->Subject = 'Message for Fang Fang from ' .$name;
  $mail->Body    = $newmessage;
  $mail->Send();

  header("Location: http://localhost");
  die();
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
?>
