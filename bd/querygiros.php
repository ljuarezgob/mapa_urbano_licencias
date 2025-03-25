<?php
// Conexión a la base de datos
include 'conexion.php';

// Obtener el término de búsqueda enviado por AJAX
$buscar = $_GET["search"] ?? ''; // Si no hay parámetro, se deja vacío

// Limpiar el parámetro para evitar inyecciones SQL
$buscar = pg_escape_string($buscar);

// Arreglo para almacenar los resultados
$result_array = [];

// Consulta SQL con filtro dinámico
$query = "
    SELECT gid AS id, util_suelo AS text 
    FROM gestion_ordenamiento_ppdu_2023.zpn_e3_utilizacion_suelo 
    WHERE util_suelo ILIKE '%$buscar%' 
    LIMIT 50
";

// Ejecutar la consulta
$result = pg_query($db_conn, $query);

if (!$result) {
    echo json_encode([]); // En caso de error, devolver un arreglo vacío
    exit;
}

// Procesar los resultados
while ($row = pg_fetch_assoc($result)) {
    $result_array[] = $row; // Formato requerido: [ { "id": ..., "text": ... } ]
}

// Devolver los resultados en formato JSON
echo json_encode($result_array);
?>




<?php
/*
// querygiros.php 
include 'conexion.php'; 
$buscar = $_GET["buscar"];
$buscar =  str_replace(" ", "&", $buscar);





$result_array = array();

$result = pg_query($db_conn, ' select gid, util_suelo from gestion_ordenamiento_ppdu_2023.zpn_e3_utilizacion_suelo WHERE util_suelo ilike \'%'.$buscar.'\'%) ');



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
*/
?>


