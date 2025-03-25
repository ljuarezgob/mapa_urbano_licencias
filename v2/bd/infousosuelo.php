<?php

include 'conexion.php'; 
$lon = $_GET["lon"];
$lat = $_GET["lat"];	

/*
$result = pg_query($db_conn, " SELECT  gid as ngid,distrito,util_suelo,cve_util, ST_Extent(ST_Transform(ST_Buffer(ST_Transform(geom, 32613), 10), 4326)) AS extent,  $lon as longitud, $lat as latitud FROM gestion_ordenamiento_ppdu_2023.zpn_e3_utilizacion_suelo 
where ST_Intersects(ST_Transform(geom, 4326),ST_Transform(ST_GeomFromText('POINT($lon $lat)',4326),4326)) GROUP BY gid; ");
*/

$result = pg_query($db_conn, "SELECT * FROM gestion_ordenamiento_ppdu_2023.datos_ppdu2023_utm($lon, $lat);");






if (!$result) {  
 //echo "Error consulta.\n";  
 echo json_encode(["respuesta" => "vacio"]);  
 return;  
}  

while ($row = pg_fetch_object($result)) {  
	
	echo json_encode($row);
	return ;
}  
	
?>

