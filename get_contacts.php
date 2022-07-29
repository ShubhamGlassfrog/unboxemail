<?php
    $password = "UnboxZaid@123";
    
    if(isset($_GET['password']) && $_GET['password'] == $password) {
        $conn = new mysqli("localhost","zaid",$password,"marketing_unbox");
        $query = "SELECT * from contacts where unsubscribed='0'";
        $query_exec = mysqli_query($conn, $query);

        $contacts = array();

        while($row = mysqli_fetch_array($query_exec)) {
            $contacts[] = array(
                'id' => $row['id'],
                'password' => $row['password'],
                'first_name' => $row['first_name'],
                'last_name' => $row['last_name'],
                'email_1' => $row['email_1'],
                'email_2' => $row['email_2']
            );
        }

        echo json_encode($contacts);
    }

?>