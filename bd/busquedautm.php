<?php
include 'conexion.php'; 
$y = $_GET["y"];
$x = $_GET["x"];
//$buscar =  str_replace(" ", "&", $buscar);
$result_array = array();
$result = pg_query($db_conn, 'SELECT ST_y(ST_Transform(ST_SetSRID( ST_Point( '.$x.', '.$y.' ), 32613), 4326)) as latitud, ST_x(ST_Transform(ST_SetSRID( ST_Point('. $x.','. $y.' ), 32613), 4326)) as longitud');

if (!$result) {  
 echo "Error consulta.\n";  
 exit;  
}  
if (pg_num_rows($result) > 0) {
      $item_array = array();
      while ($row = pg_fetch_object($result)) { 
      
            $result_array[]=$row;


      }  
}
echo json_encode($result_array);
return ;	
?>




