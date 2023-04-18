<?php
$data=array();
$Inputfile = file("prod.txt");
foreach ($Inputfile as $line){
   $pieces = explode(";", $line);
   echo $pieces[0];
   echo $pieces[1];
   echo $pieces[2];
   echo $pieces[3];
//print_r($line);
}
?>