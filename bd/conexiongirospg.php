<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$host = 'localhost';
$port = '5432';
$dbname = 'urbano';
$user = 'postgres';
$password = 'postgres';

$db_conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

if (!$db_conn) {
    echo "Error de conexión: " . pg_last_error();
    exit;
}

// echo "Conexión exitosa a PostgreSQL!";
?>
