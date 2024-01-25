<?php   

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "mobile@djdetailing.pro";
    $headers = "From: ".$mailFrom;
       $txt = "you have recived an e-mail from ".$name.$subject.".\n\n".$message;

    mail($mailTo,$subject,$txt,$headers);
    header("Location: thankyou.html?mailsend");
}




?>