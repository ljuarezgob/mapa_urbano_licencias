<?php
// Conexión a la base de datos
include 'conexiongirospg.php';
//  include 'conexion.php';
header("Content-Type: application/json");
// Obtener el término de búsqueda enviado por AJAX
$buscar = $_GET["search"] ?? ''; // Si no hay parámetro, se deja vacío
// Limpiar el parámetro para evitar inyecciones SQL
$buscar = pg_escape_string($buscar);


// Arreglo para almacenar los resultados
$result_array = [];

// echo $buscar;
$query = "
    SELECT gs.id_giro_sec AS ids, gs.nombre_giro_sec AS name, gs.factibilidad_uso_sec AS fact_uso2, gs.impacto_giro_sec AS impact_uso2
    FROM giro_secu gs 
    WHERE gs.id_giro_sec = '$buscar'
    LIMIT 50;
";


// Ejecutar la consulta
$result = pg_query($db_conn, $query);

if (!$result) {
    echo json_encode([]); // En caso de error, devolver un arreglo vacío
    exit;
}

// Procesar los resultados
while ($row = pg_fetch_assoc($result)) {
    $result_array[] = $row;
}

// Devolver los resultados en formato JSON
echo json_encode($result_array);


?>


