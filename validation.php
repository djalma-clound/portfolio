<php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$name_erro = "Name is required";
} else {
    $name = test_input($_POST["name"]);
}
}
if (empty($_POST["email"])) {
    $email_error = "Email is required";
}
?>