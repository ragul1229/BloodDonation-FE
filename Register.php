<?php
	// Check If form submitted, insert form data into users table.
	if(isset($_POST['Register'])) 
	{
		$name = $_POST['name'];
		$mobile = $_POST['mobile'];
        $gen = $_POST['gender'];
        $age = $_POST['age_grp'];
        $blood = $_POST['blood_grp'];
        $state = $_POST['state'];
        $district = $_POST['district'];
        $division = $_POST['division'];
        $mandal = $_POST['mandal'];
	
		// include database connection file
		include_once("config.php");

        $sql_mob = sprintf("SELECT * FROM donors WHERE mobile='%s'",mysqli_real_escape_string($con,$mobile));
  	    $res_mob = mysqli_query($con, $sql_mob);

  	    if (mysqli_num_rows($res_mob) > 0) 
        {
            echo '<script>alert("Sorry! This mobile number is already registered...")</script>';
            header("Location: Failure.html");
            exit();
        }  
        else
        {
            $query = "INSERT into `donors` (name,mobile,gender,age,blood_group,state,district,division,mandal)
                     VALUES ('$name','$mobile','$gen','$age','$blood','$state','$district','$division','$mandal')";
            $result   = mysqli_query($con, $query);
  	    }

		if($result === FALSE)
        {
            echo("An error occured!!");
            die();
        }
        else
        {
            header("Location: Success.html");
        }
	}
?>