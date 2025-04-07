<?php
$conn = new mysqli("localhost", "root", "", "assessment_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$regno = $_POST['regno'];
$date = $_POST['submission_date'];
$da1 = $_POST['da1'];
$da2 = $_POST['da2'];

if ($da1 == "Yes" && $da2 == "Yes") {
    $sql = "INSERT INTO assessments (name, regno, submission_date, da1, da2)
            VALUES ('$name', '$regno', '$date', '$da1', '$da2')";

    if ($conn->query($sql) === TRUE) {
        echo "Data inserted successfully.";
    } else {
        echo "Error: " . $conn->error;
    }
} else {
    echo "Both assessments must be Yes.";
}

$conn->close();
?>
