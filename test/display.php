<?php
$conn = new mysqli("localhost", "root", "", "assessment_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM assessments";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table><tr>
            <th>Name</th><th>Reg No</th><th>Date</th>
            <th>Assessment 1</th><th>Assessment 2</th>
          </tr>";

    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['name']}</td>
                <td>{$row['regno']}</td>
                <td>{$row['submission_date']}</td>
                <td>{$row['da1']}</td>
                <td>{$row['da2']}</td>
              </tr>";
    }

    echo "</table>";
} else {
    echo "No submissions found.";
}

$conn->close();
?>
