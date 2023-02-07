<?php

include("conexion.php");

if(!empty($_POST)){

$user = $_POST["usuario"];
$pass = $_POST["pass"];

$query= $pdo->prepare("SELECT * FROM acceso WHERE Username = '$user' AND Passw = MD5('$pass')");
$query->execute();


    if($query== true){

        while($row = $query->fetchAll(PDO::FETCH_ASSOC)){

            @session_start();
          //  $_SESSION["id"]=$row["Id_user"];
         echo true;
        }

    }else{

     echo false;

 }

}
?>