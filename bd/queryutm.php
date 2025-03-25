<?php
include 'conexion.php'; 
$lon = $_GET["longitud"];
$lat = $_GET["latitud"];	

$result_array = array();  //se agrego
$result = pg_query($db_conn, " SELECT  st_x(ST_Transform(ST_GeomFromText('POINT($lon $lat)',32613),4326) ) as x, st_y(ST_Transform(ST_GeomFromText('POINT($lon $lat)',32613),4326) ) as y FROM gestion_vocacion_ppdu_2012.ppdu_distritos ");

//gid, $lon as x1, $lat as y2, st_x(ST_Transform(ST_GeomFromText('POINT($lon $lat)',32613),4326) ) as x
//$lon = 661394.769483989;
//$lat = 2287194.19263646;

//primera version
if (!$result) {  
 echo "Error consulta.\n";  
 exit;  
}  

while ($row = pg_fetch_object($result)) {  
	
	echo json_encode($row);
	return ;
}  

/*
///prueba 2
//$result_array = array();

//$result = pg_query($db_conn, ' SELECT gid,cve_mza,latitud,longitud  FROM catastro_2017.vista_manzanas WHERE cve_mza @@ to_tsquery(\''.$buscar.'\') ');


if (!$result) {  
 echo "Error consulta.\n";  
 exit;  
}  
if (pg_num_rows($result) > 0) {
      $item_array = array();
      while ($row = pg_fetch_object($result)) { 
      
            $result_array[]=$row;
      	//echo json_encode($row);
      	//return ;
      }  
}
echo json_encode($result_array);
return ;*/

?>