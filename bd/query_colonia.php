<?php
include 'conexion_pg.php'; 
$buscar = $_GET["buscar"];
$buscar =  str_replace(" ", " ", $buscar);
$result_array = array();
//$result = pg_query($db_conn, ' SELECT gid,cpatrimonial,noactivo,ubicacion,colonia,longitud,latitud   FROM patrimonio_inmuebles_geo.v_inventario WHERE cpatrimonial like \'%'.$buscar.'%\' or noactivo like \'%'.$buscar.'%\'   order by cpatrimonial  asc  ');
//$result = pg_query($db_conn, ' SELECT gid,nombre,latitud,longitud  FROM servpub_aseo.colonias_vista WHERE nombre @@ to_tsquery(\''.$buscar.'\') order by nombre');
$result = pg_query($db_conn, ' SELECT gid,nombre,latitud,longitud  FROM servpub_aseo.colonias_vista WHERE nombre ilike \'%'.$buscar.'%\' order by nombre');  

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



