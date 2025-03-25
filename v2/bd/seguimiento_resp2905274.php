<?php
include 'conexion_mysql_reporta.php';

/*$dsn = 'mysql:host=172.20.36.11;dbname=reportes_servicios;charset=utf8mb4';
$username = 'consultareporta';
$password = 'R3p0rt42024*C0nsul74';
*/
// Recibe el parámetro id_reporte enviado por la solicitud AJAX
$id_reporte = $_GET['id_reporte'];

try {
    // Conexión a la base de datos
  /*  $db_conn = new PDO($dsn, $username, $password);
    $db_conn->setAttribute(PDO::ATTR_TIMEOUT, 120);
    $db_conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
*/
    // Consulta obtener los seguimientos asociados al id_reporte
    $query = "SELECT  cra.id_reporte , cra.folio,cra.subcategoria, cra.estatus, sr.seguimiento, CONCAT('https://reporta.zapopan.gob.mx/uploads/evidencias/', sr.foto)  as foto, sr.created_at  as fecha  
              FROM SeguimientoReporte sr   join CaratulaReporte cra 
              WHERE  sr.id_reporte  = cra.id_reporte AND  sr.id_reporte = $id_reporte 
              ORDER BY sr.created_at ASC";



/*

select cra.id_reporte , cra.folio,cra.subcategoria, cra.estatus, sr.seguimiento, CONCAT('https://reporta.zapopan.gob.mx/uploads/evidencias/', sr.foto)  as foto, sr.created_at  from SeguimientoReporte sr 
join CaratulaReporte cra 
where sr.id_reporte  = cra.id_reporte AND  sr.id_reporte = 9989

*/
    $statement = $db_conn->query($query);
    $resultados = $statement->fetchAll(PDO::FETCH_ASSOC);

    // Devuelve los resultados como JSON
    header('Content-Type: application/json');
    echo json_encode($resultados);
} catch (PDOException $e) {
    // Errores
    echo json_encode(array('error' => 'Error al conectar a la base de datos o al ejecutar la consulta: ' . $e->getMessage()));
}
?>

