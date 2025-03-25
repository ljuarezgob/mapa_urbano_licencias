<?php
ini_set ('display_error',1);

//$lon = $_GET["longitud"];
//$lat = $_GET["latitud"];	
      
$host = '10.10.23.78';
$port = '5433';
$dbname = 'mdm6data';
$user = 'geomatica_lectura'; // 
$password = 'G3omatic4$2018';

$db_conn = pg_connect("host = $host port = $port dbname = $dbname user = $user password = $password");


//$db_conn = pg_connect("host = $host port = $port dbname = $dbname user = $user password = $password");

if (!$db_conn) {
	echo "Error+++:  ". pg_error();
	exit;	
}



/*
//$result = pg_query($db_conn, ' SELECT * FROM buscador.geolocator WHERE spvector @@ to_tsquery(\'hidalgo&100\') order by tipo limit 10 ');
$result = pg_query($db_conn, ' SELECT * FROM buscador.geolocator WHERE spvector @@ to_tsquery(\'federalismo\') order by tipo limit 10 ');


if (!$result) {  
 echo "Error consulta.\n";  
 exit;  
}  

while ($row = pg_fetch_object($result)) {  
	
	echo $row->nombre. "<br />";
	//echo json_encode($row);
	//return ;
}  


*/


/*
if (!$db_conn) {
	echo "Error+++:  ". pg_error();
	echo json_encode(array('success' => 0));
	//exit;	
} else
	echo json_encode(array('success' => 1));
}
*/
	
?>



