<?php
// Conexión a la base de datos
include 'conexiongirospg.php';
//  include 'conexion.php';

// Obtener el término de búsqueda enviado por AJAX
$buscar = $_GET["search"] ?? ''; // Si no hay parámetro, se deja vacío

// Limpiar el parámetro para evitar inyecciones SQL
$buscar = pg_escape_string($buscar);


// Arreglo para almacenar los resultados
$result_array = [];


$query = "
    SELECT  l.factibilidad_uso AS fact_uso, l.impacto_giro AS impact_uso 
    FROM licencias l
    WHERE l.id_giro  = $buscar
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
    $result_array[] = $row; // Formato requerido: [ { "id": ..., "text": ... } ]
}

// Devolver los resultados en formato JSON
echo json_encode($result_array);






?>


