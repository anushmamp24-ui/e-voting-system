<?php
include("../config/db.php");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["error" => "No input data received"]);
    exit;
}


$name = $data['name'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_DEFAULT);

if (empty($name) || empty($email) || empty($password)) {
    echo json_encode(["error" => "All fields are required"]);
    exit;
}

$sql = "INSERT INTO users(name,email,password,role) 
        VALUES ('$name','$email','$password','VOTER')";

if ($conn->query($sql)) {
    echo json_encode(["message" => "Registration successful"]);
} else {
    echo json_encode(["error" => "Email already exists"]);
}
?>
