<html>
    <head>
        <title>Donor Details</title>
        <link rel="stylesheet" href="FetchStyle.css" type="text/css">
    </head>
    <body>
        <br><br>
        <h1 align="center">Donor Details:</h1>
        <h2 align="center">List of Donors in your area are:</h2>
        <br>
        <?php 
            //$databaseHost = 'localhost:3306';
            $databaseHost = 'localhost:3308';
            $databaseName = 'project_db';
            $databaseUsername = 'root';
            $databasePassword = '';

            $con = mysqli_connect($databaseHost, $databaseUsername, $databasePassword, $databaseName); 
            if($con === false)
            {
                die("ERROR: Could not connect. ". mysqli_connect_error());
            }
            $mandal = $_POST['mandal'];
            $blood = $_POST['blood_grp'];

            $query = sprintf("SELECT name,mobile,gender,age FROM donors WHERE blood_group='%s' AND mandal='%s'",mysqli_real_escape_string($con,$blood),mysqli_real_escape_string($con,$mandal));
            $result = mysqli_query($con,$query);
            if (!$result) 
            {
                printf("Error: %s\n", mysqli_error($con));
                exit();
            }
            if(mysqli_num_rows($result)>0)
            {
                echo "<table align=center>";
                echo "<tr>";
                echo "<th> Name </th>";
                echo "<th> Mobile Number </th>";
                echo "<th> Gender </th>";
                echo "<th> Age </th>";
                echo "</tr>";
                while($donor_data = mysqli_fetch_array($result))
                {       
                    echo "<tr>";
                    echo "<td>".$donor_data['name']."</td>";
                    echo "<td>".$donor_data['mobile']."</td>";
                    echo "<td>".$donor_data['gender']."</td>";      
                    echo "<td>".$donor_data['age']."</td>";
                    echo "</tr>";
                }
            	echo "</table>";
            }
            else
            {
                header('Location:NoRecord.html');
            }
            mysqli_close($con); 
        ?>
    </body>
</html>
