<?php
include 'conexiongirospg.php';


$trans = $_GET["trans"] ?? '';  // Recibe el valor del primer select (puede ser vacío)
$tap = $_GET["tap"] ?? '';
// echo $tap . " es lo que se escribre";
// Evitar inyecciones SQL
$trans = pg_escape_string($trans);
$result_array = [];
// echo ($tap);
// echo $trans;
// $nombre_giro_query ="  
//     SELECT l.nombre_giro AS nombre  
//     FROM licencias l  
//     WHERE l.id_giro = '$trans'
// ";

// $result_nombre = pg_query($db_conn, $nombre_giro_query);

// // echo $result_nombre."nombre reuslt";


// $row_nombre = pg_fetch_assoc($result_nombre);
// // echo $row_nombre . " row nombre";
// $nombre_giro = pg_escape_string($row_nombre['nombre']);

$query = "
    SELECT  gs.id_giro_sec AS id,  gs.nombre_giro_sec AS nombre_subgiro
        FROM giro_secu gs 
        INNER JOIN licencias l 
        ON l.id_giro = gs.id_fk_licencias
        WHERE gs.id_fk_licencias  = '$trans'
        AND  gs.nombre_giro_sec    ILIKE  '%$tap%'
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
        "sub_giro" => $row['nombre_subgiro']
    ];
}

echo json_encode($result_array);

?>
