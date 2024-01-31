<?php
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

if (empty($name) || empty($email) || empty($message)) {
  // One or more fields are empty
  echo 'Please fill in all the required fields and try again';
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  // Invalid email address
  echo 'Please enter a valid email address';
  exit;
}

// Submit the form
// ...
