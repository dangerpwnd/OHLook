<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    $mailto = 'reric2012@gmail.com';
    $subject = 'OHLOOK a message from '.$name;
    
    $body = 'From: '.$name."\n";
    $body .= 'E-Mail: '.$email."\n";
    $body .= 'Phone: '.$phone."\n";
    $body .= 'Message: '.$message."/n";

    $headers = 'From: '.$email."\r\n";
    $headers .= 'Reply-To: '.$email."\r\n";

    $mail_status = mail($mail_to, $subject, $body, $headers);
}
//     if ($mail_status) { 
// 	<script language="javascript" type="text/javascript">
// 		alert('Thank you for the message. We will contact you shortly.');
// 		window.location = 'contact.html';
// 	</script>
// <?php
// }
// else { 
// 	<script language="javascript" type="text/javascript">
// 		alert('Message failed. Please, send an email to jlord@ohlookcreative.com');
// 		window.location = 'contact.html';
// 	</script>
// <?php
// }
?>
