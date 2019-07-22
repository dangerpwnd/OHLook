<?php

use PHPMailer\PHPMailer\PHPMailer;

require '../vendor/autoload.php';

$mail = new PHPMailer;
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 2;
//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';
//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;
//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = "reric2012@gmail.com";
//Password to use for SMTP authentication
$mail->Password = "1CFTL0ias";
$mail->isHTML(false);
//Set who the message is to be sent from
$mail->setFrom('reric2012@gmail.com', 'Eric Dangerstone');
//Set an alternative reply-to address
$mail->addReplyTo('reric2012@gmail.com', 'Eric Dangerstone');
//Set who the message is to be sent to
$mail->addAddress('emartin2012@yahoo.com', 'Eric Martin');
//Set the subject line
$mail->Subject = 'PHPMailer mail() test';
$mail->Body = <<<EOT
Email: {$_POST['email']}
Name: {$_POST['name']}
Phone: {$_POST['phone']}
Message: {$_POST['message']}
EOT;

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
    //Section 2: IMAP
    //Uncomment these to save your message in the 'Sent Mail' folder.
    #if (save_mail($mail)) {
    #    echo "Message saved!";
    #}
}
?>
