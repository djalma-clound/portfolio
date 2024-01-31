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
          
//   if (mail($to, $subject, $body, $headers)) {
//     // Email was sent successfully
//     echo '<p class="success-message">Thank you for contacting us. We will get back to you soon!!</p>';
//     echo '<button onclick="goBack()">Go Back</button>';
//   } else {
//     // Email failed to send
//     echo "There was an error sending your message. Please try again later.";
//   }
// } else {
//   echo "There was an error sending your message. Please try again later.";
// }
// ?>

// <script>
//   function goBack() {
//    window.location.href = "http://dj-techs.com/index.php"; 
//     //window.history.back();
//   }
// </script>
