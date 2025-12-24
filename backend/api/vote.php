<?php
include("../config/db.php");
session_start();

$user = $_SESSION['user'];

if ($user['has_voted']) {
    echo json_encode(["error" => "Already voted"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);
$candidate_id = $data['candidate_id'];

$conn->query("INSERT INTO votes(user_id,candidate_id) 
              VALUES ({$user['id']}, $candidate_id)");

$conn->query("UPDATE users SET has_voted=1 WHERE id={$user['id']}");

echo json_encode(["message" => "Vote submitted"]);
?>
