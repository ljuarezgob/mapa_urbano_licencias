<?php
include 'conexion.php'; 
$buscar = $_GET["buscar"];
$buscar =  str_replace(" ", "&", $buscar);





$result_array = array();

$result = pg_query($db_conn, ' SELECT gid,cve_mza,latitud,longitud  FROM catastro_2017.vista_manzanas WHERE cve_mza @@ to_tsquery(\''.$buscar.'\') ');



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



