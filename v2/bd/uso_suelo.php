<?php
include '../bd/conexion.php'; 
$gid = $_GET["gid"];
//$lat = $_GET["latitud"];	
//$result = pg_query($db_conn, "  SELECT  * FROM inegi.manzanas_censo2020 ; ");
$result = pg_query($db_conn, "  SELECT  * FROM inegi.manzanas_censo2020 where ST_Intersects(geom,
        ST_Transform(ST_GeomFromText('POINT($lon $lat)',4326),32613)); ");

if (!$result) {  
 echo "Error consulta.\n";  
 exit;  
}  

while ($row = pg_fetch_object($result)) {  
	
	echo json_encode($row);
	return ;
}  
	
?>



