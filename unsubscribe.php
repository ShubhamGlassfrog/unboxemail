<?php
    
    if(isset($_GET['id']) && isset($_GET['password'])) {
        $id = $_GET['id'];
        $password = $_GET['password'];
        $conn = new mysqli("localhost","zaid","UnboxZaid@123","marketing_unbox");
        $query = "UPDATE `contacts` SET `unsubscribed`='1' WHERE `id`='$id' AND `password`='$password'";
        $query_exec = mysqli_query($conn, $query);
    }

?>
<h3>You have been unsubscribed successfully</h3>