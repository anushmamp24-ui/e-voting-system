<?php
include("../config/db.php");
session_start();

$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$password = $data['password'];

$result = $conn->query("SELECT * FROM users WHERE email='$email'");
$user = $result->fetch_assoc();

if ($user && password_verify($password, $user['password'])) {
    $_SESSION['user'] = $user;
    echo json_encode(["role" => $user['role']]);
} else {
    echo json_encode(["error" => "Invalid login"]);
}
?>
