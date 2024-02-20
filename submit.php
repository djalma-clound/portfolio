<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") 
  // Get the form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  // Send the email
  $to = "djalmas@dj-techs.com";
  $subject = "New message from contact form";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  $headers = "From: $email\r\n" .
             "Reply-To: $email\r\n" .
             "Content-Type: text/plain; charset=UTF-8\r\n";

 if (mail($to, $subject, $body, $headers)) {
     echo "<p>Thank you for your message!</p>";
    echo "<script>document.getElementById('myForm').style.visibility = 'hidden';</script>";
  } else {
     echo "Email sending failed.";
  }