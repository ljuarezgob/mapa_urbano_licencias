<?php
$dsn = 'mysql:host=172.20.36.11;dbname=reportes_servicios;charset=utf8mb4';
$username = 'consultareporta';
$password = 'R3p0rt42024*C0nsul74';

try {
    $db_conn = new PDO($dsn, $username, $password);
    $db_conn->setAttribute(PDO::ATTR_TIMEOUT, 120);
    $db_conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

   

   // $query = "SELECT id_reporte, lat, lng FROM CaratulaReporte where lat >20  limit 5000";
   //$query = "SELECT * FROM CaratulaReporte where lat >20 ";
   //$query = "SELECT id_reporte, lat, lng FROM CaratulaReporte where lat >20  ubicacion ilike 'zapopan' limit 5000";

   //$query = "SELECT * FROM CaratulaReporte WHERE lat > 20 AND ubicacion COLLATE utf8mb4_general_ci LIKE '%zapopan%' limit 100000";
   //$query = "SELECT count(*) FROM CaratulaReporte WHERE lat > 20 AND ubicacion COLLATE utf8mb4_general_ci LIKE '%zapopan%' ";


  //$query = "SELECT id_reporte, folio, id_subcategoria, subcategoria, descripcion, estatus, lat, lng, foto, created_at FROM CaratulaReporte WHERE lat > 20 AND ubicacion COLLATE utf8mb4_general_ci LIKE '%zapopan%' limit 39781 ";
  $query = "SELECT id_reporte, folio, id_subcategoria, subcategoria, descripcion, estatus, lat, lng, foto, created_at, fecha_enproceso FROM CaratulaReporte WHERE lat > 20 AND ubicacion COLLATE utf8mb4_general_ci LIKE '%zapopan%' and estatus LIKE 'en proceso' AND  YEAR(fecha_enproceso) = YEAR(NOW())";
    $statement = $db_conn->query($query);
    $resultados = $statement->fetchAll(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($resultados);
} catch (PDOException $e) {
    echo json_encode(array('error' => 'Error al conectar a la base de datos o al ejecutar la consulta: ' . $e->getMessage()));
}
?>
