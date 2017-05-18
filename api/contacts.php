<?php
require('../config.php');

$q = "SELECT users.id, users.name FROM messages, users";
$q .= " WHERE messages.sender_id=1 ";
$q .= " AND users.id=messages.recipient_id";
$q .= " GROUP BY users.name";

$result = $con->query($q);
$contacts = $result->fetch_all(MYSQLI_ASSOC);

header('Content-type: application/json');
echo json_encode($contacts);