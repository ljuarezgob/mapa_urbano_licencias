<?php
ini_set ('display_error',1);
$host = '10.10.23.78';
$port = '5432';
$dbname = 'zapopan_geo_pg';
$user = 'geo_wms_coneccion_r'; 
$password = 'g30matiK@*20i9';
$db_conn = pg_connect("host = $host port = $port dbname = $dbname user = $user password = $password");
if (!$db_conn) {
	echo "Error+++:  ". pg_error();
	exit;	
}	
?>


