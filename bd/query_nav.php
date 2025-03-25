<?php
include 'conexion_nav.php'; 
$buscar = $_GET["buscar"];
//$lon = $_GET["longitud"];
//$lat = $_GET["latitud"];	
//$result = pg_query($db_conn, "  SELECT  * FROM inegi.manzanas_censo2020 ; ");
//$result = pg_query($db_conn, "  SELECT  gid,cvegeo,cve_ent,cve_mun,cve_loc,cve_ageb,cve_mza,ambito,tipomza,ent,nom_ent,mun,nom_mun,loc,nom_loc,ageb,mza,pobtot,pobfem,pobmas,p_0a2,p_0a2_f,p_0a2_m,p_3ymas,p_3ymas_f,p_3ymas_m,p_5ymas,p_5ymas_f,p_5ymas_m,p_12ymas,p_12ymas_f,p_12ymas_m,p_15ymas FROM inegi.manzanas_censo2020 where ST_Intersects(geom,
//        ST_Transform(ST_GeomFromText('POINT($lon $lat)',4326),32613)); ");
//$result = pg_query($db_conn, "  SELECT  cvegeo FROM inegi.manzanas_censo2020 where ST_Intersects(geom,
      //  ST_Transform(ST_GeomFromText('POINT($lon $lat)',4326),32613)); ");




$buscar =  str_replace(" ", "&", $buscar);





$result_array = array();
//$result = pg_query($db_conn, ' SELECT tipo, nombre, locacion,  substr (locacion,0, strpos(locacion,\',\')) as latitud, substr (locacion,strpos(locacion,\'-\'),length(locacion)) as longitud   FROM buscador.geolocator WHERE spvector @@ to_tsquery(\''.$buscar.'\')  and tipo <> \'Municipio\' order by nombre desc  limit 5 ');
$result = pg_query($db_conn, ' SELECT domicilio_inegi, colonia_geo, tipo,latitud, longitud   FROM buscador.geolocator_domicilio_colonia WHERE spvector @@ to_tsquery(\''.$buscar.'\')   order by domicilio_inegi  desc  ');
//$result = pg_query($db_conn, ' SELECT domicilio_inegi, colonia_geo, tipo,latitud, longitud   FROM buscador.geolocator_domicilio_colonia  order by domicilio_inegi  desc  ');


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
return ;
	
?>



