<?php
// Establish connection to MySQL database
$servername = "localhost"; // Assuming your MySQL server is running locally
$username = "root"; // MySQL username
$password = ""; // MySQL password
$dbname = "ecommerce_kisanseva"; // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$firstName = $_POST['firstname'];
$lastName = $_POST['lastname'];
$email = $_POST['email'];
$password = $_POST['password'];
$conpassword=$_POST['conpassword'];

$email = $_POST['email'];
if ($email!=="$email'.com'"){
echo"Invalid email";
}

// else {
//     echo ('<div id="email_input"><span id="resultval">Include a valid email address.</span></div>');
// }

// Check if passwords match
if ($password !== $conpassword) {
    echo "<script>
    alert('Password do not match !');</script>";
    exit;
}

// Prepare SQL statement to insert user registration data into the database
$sql = "INSERT INTO registration (firstname, lastname, email, password,confirmpassword) VALUES ('$firstName', '$lastName', '$email', '$password','$conpassword')";

if ($conn->query($sql) === TRUE) {
    // Redirect to success page or login page
    header("Location: Login.html");
} else {
    // Handle registration errors
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
