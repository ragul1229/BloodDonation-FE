<?php
    // Enter your host name, database username, password, and database name.
    $con = mysqli_connect("localhost:3308","root","","project_db");
    // $con = mysqli_connect("localhost:3306","root","","project_db");
    // Check connection
    if (mysqli_connect_errno())
	{
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
?>
