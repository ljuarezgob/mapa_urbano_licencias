<?php
include 'conexiongirospg.php';


$trans = $_GET["trans"] ?? '';  // Recibe el valor del primer select (puede ser vacío)

// Evitar inyecciones SQL
$trans = pg_escape_string($trans);
$result_array = [];

$nombre_giro_query ="  
SELECT l.nombre_giro AS nombre  
FROM licencias l  
WHERE l.id_giro = $trans";

$result_nombre = pg_query($db_conn, $nombre_giro_query);

$row_nombre = pg_fetch_assoc($result_nombre); //
$nombre_giro = pg_escape_string($row_nombre['nombre']);


// echo "Se muestra el nombre     ".$nombre_giro;

$capt_first_name = explode(" ", $nombre_giro); // extraigo la prmera palabra hasta el espacio
$pos_first_name  = $capt_first_name[0];

$query = "
    SELECT  l.id_giro AS id,  l.nombre_giro AS text 
        FROM licencias l
        INNER   JOIN giro_secu gs 
        ON gs.id_giro_sec = l.id_giro
        WHERE l.nombre_giro <>   '$nombre_giro'
        AND l.nombre_giro LIKE '%$pos_first_name%'
        ORDER BY l.id_giro ASC;
";

// echo $query; 
$result = pg_query($db_conn, $query);


if (!$result) {
    echo json_encode([]); // En caso de error, devolver un arreglo vacío
    exit;
}


while($row = pg_fetch_assoc($result)){
    $result_array[] = [
        "id" => $row['id'],
        "text" => $row['text']
    ];
}

echo json_encode($result_array);

?>
