<?php
include("../../config/db.php");

$sql = "SELECT c.name, COUNT(v.id) as votes
        FROM candidates c 
        LEFT JOIN votes v ON c.id = v.candidate_id
        GROUP BY c.id";

$result = $conn->query($sql);
$data = [];

while($row = $result->fetch_assoc()){
    $data[] = $row;
}
echo json_encode($data);
?>
