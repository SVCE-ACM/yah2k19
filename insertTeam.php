<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "svcehost_yah";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$teams_sql = "INSERT INTO teams (team_name, participant_count) VALUES (?, ?);";
$participants_sql = "INSERT INTO participants (team_name, participant_name, college, email, phone, github_url) VALUES (?,?,?,?,?,?);";
$abstracts_sql = "INSERT INTO abstracts (team_name, domain, abstract) VALUES (?, ?, ?)";

$teams_stmt = $conn->prepare($teams_sql);
$participants_stmt = $conn->prepare($participants_sql);
$abstracts_stmt = $conn->prepare($abstracts_sql);

$teams_stmt->bind_param("si", $_POST['team_name'], $_POST['participant_count']);
$teams_stmt->execute();

$participants_stmt->bind_param("ssssss", $_POST['team_name'], $_POST['name_0'], $_POST['college_0'], $_POST['email_0'], $_POST['phone_0'], $_POST['github_url_0']);
$participants_stmt->execute();
if ($_POST['participant_count'] > 1) {
	$participants_stmt->bind_param("ssssss", $_POST['team_name'], $_POST['name_1'], $_POST['college_1'], $_POST['email_1'], $_POST['phone_1'], $_POST['github_url_1']);
	$participants_stmt->execute();
} 
if ($_POST['participant_count'] > 2) {
	$participants_stmt->bind_param("ssssss", $_POST['team_name'], $_POST['name_2'], $_POST['college_2'], $_POST['email_2'], $_POST['phone_2'], $_POST['github_url_2']);
	$participants_stmt->execute();
} 
if ($_POST['participant_count'] > 3) {
	$participants_stmt->bind_param("ssssss", $_POST['team_name'], $_POST['name_3'], $_POST['college_3'], $_POST['email_3'], $_POST['phone_3'], $_POST['github_url_3']);
	$participants_stmt->execute();
}
if ($_POST['participant_count'] > 4) {
	$participants_stmt->bind_param("ssssss", $_POST['team_name'], $_POST['name_4'], $_POST['college_4'], $_POST['email_4'], $_POST['phone_4'], $_POST['github_url_4']);
	$participants_stmt->execute();
}

$abstracts_stmt->bind_param("sss", $_POST['team_name'], $_POST['domain'], $_POST['abstract']);
$abstracts_stmt->execute();

$conn->close();
header('Location: confirmation.html');
?>
