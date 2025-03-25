<?php
include 'conexion.php'; 
$lon = $_GET["longitud"];
$lat = $_GET["latitud"];	
//$result = pg_query($db_conn, "  SELECT  * FROM inegi.manzanas_censo2020 ; ");
$result = pg_query($db_conn, "  SELECT  gid,cvegeo,cve_ent,cve_mun,cve_loc,cve_ageb,cve_mza,ambito,tipomza,ent,nom_ent,mun,nom_mun,loc,nom_loc,ageb,mza,pobtot,pobfem,pobmas,p_0a2,p_0a2_f,p_0a2_m,p_3ymas,p_3ymas_f,p_3ymas_m,p_5ymas,p_5ymas_f,p_5ymas_m,p_12ymas,p_12ymas_f,p_12ymas_m,p_15ymas FROM inegi.manzanas_censo2020 where ST_Intersects(geom,
        ST_Transform(ST_GeomFromText('POINT($lon $lat)',4326),32613)); ");
//$result = pg_query($db_conn, "  SELECT  cvegeo FROM inegi.manzanas_censo2020 where ST_Intersects(geom,
      //  ST_Transform(ST_GeomFromText('POINT($lon $lat)',4326),32613)); ");






if (!$result) {  
 echo "Error consulta.\n";  
 exit;  
}  

while ($row = pg_fetch_object($result)) {  
	
	echo json_encode($row);
	return ;
}  
	
?>



