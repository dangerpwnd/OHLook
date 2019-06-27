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
    
    //send email
    $mail_status = mail($mail_to, $subject, $body, $headers);

    //redirect to success page
    if($mail_status){
        echo "success";
    }
    else{
        echo "invalid";
    }
}
?>
