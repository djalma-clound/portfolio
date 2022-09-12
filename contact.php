<?php   

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "djalmas@dj-techs.com";
    $headers = "From: ".$mailFrom;
    $txt = "you have recived an e-mail from ".$name.".\n\n".$message;

    mail($mailTo,$subject,$txt,$headers);
    header("Location: thanks.html?mailsend");
}
if (empty( ! $_POST["name"])) {
    $name_error = "name is required";
}



?>