<?php
include 'conexion.php'; 
$lon = $_GET["longitud"];
$lat = $_GET["latitud"];	
//$result = pg_query($db_conn, "  SELECT  * FROM inegi.manzanas_censo2020 ; ");
$result = pg_query($db_conn, "  SELECT  gid FROM gestion_vocacion_ppdu_2012.ppdu_zonificacion_manzana where ST_Intersects(geom,
        ST_Transform(ST_GeomFromText('POINT($lon $lat)',4326),32613)); ");


// select tipovial, nomvial,numext,tipoasen, nomasen, ST_X(geom) as x, ST_Y(geom) as y,  ST_GeomFromText(ST_Transform(geom,4326)) as coord  from inegi.num_exteriores where nomvial ilike '%hidalgo%' and numext ilike '%30%' and nomasen ilike '%lomas%'


if (!$result) {  
 echo "Error consulta.\n";  
 exit;  
}  

while ($row = pg_fetch_object($result)) {  
	
	echo json_encode($row);
	return ;
}  
	
?>



