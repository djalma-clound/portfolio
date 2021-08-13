<?php
//get data from form
$name = $_POST['name'];
$email=$_POST['email'];
$message= $_POST['message'];
$number= $_POST['mobile'];
$to = "djalmad841@gmail.com";
$subject = "mail from website";
$txt ="name = ". $name . "\r\nemail = ". $email . "\r\n message =". $message ."" \r\n Mobile number =". $number;
$header = "from:noreply@djalma-clound.github.io/slide-project/" . "\r\n" .
"cc: somebodyelse@exemple.com";
if($email l=NULL){
  null($to,$subject,$txt,$header);
}
//redirect
header("location:thankyou.html");
?>
}