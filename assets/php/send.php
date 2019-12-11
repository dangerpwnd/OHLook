<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(TRUE);

/* Open the try/catch block. */
try { 
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPOptions = array(
    'ssl' => array(
    'verify_peer' => false,
    'verify_peer_name' => false,
    'allow_self_signed' => true
    )
    );
$mail->SMTPDebug = 1;
//Set the hostname of the mail server
$mail->Host = 'mail.ohlookperform.com';
//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;
//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = "site@ohlookperform.com";
//Password to use for SMTP authentication
$mail->Password = "MOREorLESSaPASS!";
$mail->isHTML(false);
//Set who the message is to be sent from
$mail->setFrom('site@ohlookperform.com', 'Eric Dangerstone');
//Set an alternative reply-to address
$mail->addReplyTo('site@ohlookperform.com', 'Eric Dangerstone');
//Set who the message is to be sent to
$mail->addAddress('reric2012@gmail.com', 'Eric Martin');
//Set the subject line
$mail->Subject = 'OHLOOK a message from ' . $_POST['name'];
$mail->Body = <<<EOT
Email: {$_POST['email']}
Name: {$_POST['name']}
Phone: {$_POST['phone']}
Message: {$_POST['message']}
EOT;

    /* Finally send the mail. */
    $mail->send();
    
 }
 catch (Exception $e)
 {
    /* PHPMailer exception. */
    echo $e->errorMessage();
 }
 catch (\Exception $e)
 {
    /* PHP exception (note the backslash to select the global namespace Exception class). */
    echo $e->getMessage();
 }

?>
