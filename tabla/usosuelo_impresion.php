<?php

//include "../bd/querycenso.php"; 

include "../bd/conexion.php"; 
$gid = $_GET["gid"];
$mapa = $_GET["mapa"];
$lon = $_GET["long"];
$lat = $_GET["lat"];


$result = pg_query($db_conn, " SELECT st_x(ST_Transform(ST_GeomFromText('POINT($lon $lat)',4326),32613) ) as x, st_y(ST_Transform(ST_GeomFromText('POINT($lon $lat)',4326),32613) ) as y, ST_Extent(st_transform (ST_Buffer(ST_Transform(ST_GeomFromText('POINT($lon $lat)',4326),32613),150::double precision) , 4326)) AS extent_ubicacion, ST_Extent(st_transform (ST_Buffer(ST_Transform(ST_GeomFromText('POINT($lon $lat)',4326),32613),80::double precision) , 4326)) AS extent_zonificacion  ,gid,distrito,sup2_m2,clas_area1,clav_cla_1,clas_area2,clav_cla_2,uso_suelo,clav_uso_s,intensidad,modalidad,clav_inten,densidad,densidad_n,zonif_prim,clav_final,area_urb,riesgo, simbologia
FROM gestion_vocacion_ppdu_2012.ppdu_zonificacion_manzana where gid = ".$gid."group by gid ; ");


if (!$result) {  
 echo "Error consulta.\n";  
 exit;  
}  
$row = pg_fetch_assoc($result);


// Nuevo Imagen

$imagen2 = "";
$box_u = $row['extent_ubicacion'];   
$box_u = str_replace("BOX(", "", $box_u);
$box_u= str_replace(")", "", $box_u);
$box_u = str_replace(" ", ",", $box_u);
$box_u = str_replace(",", "%2C", $box_u);

$box_z = $row['extent_zonificacion'];   
$box_z = str_replace("BOX(", "", $box_z);
$box_z= str_replace(")", "", $box_z);
$box_z = str_replace(" ", ",", $box_z);
$box_z = str_replace(",", "%2C", $box_z);




if ($box_z == '') {  $wmsPNG = $imagen2; //echo ('No existe predio en la cartografía'); //die();
}
else{
 // $wmsZonificacionPNG = "https://mapa.zapopan.gob.mx:8000/geoserver/geomatica/wms?service=WMS&version=1.1.0&request=GetMap&layers=geomatica%3AOSM-WMS,geomatica%3Appdu_distritos,geomatica%3Appdu_zonificacion_manzana,geomatica%3AColonias,geomatica%3APredios_PPDU,geomatica%3Appdu_zonificacion,geomatica%3Aubicacion&viewparams=longitud%3A".$lon.";latitud%3A".$lat."&bbox=".$box_z."&width=600&height=300&srs=EPSG%3A4326&format=image%2Fpng";
  $wmsZonificacionPNG = "https://mapa.zapopan.gob.mx:8000/geoserver/geomatica/wms?service=WMS&version=1.1.0&request=GetMap&layers=geomatica%3AOSM-WMS,geomatica%3Appdu_zonificacion_manzana,geomatica%3APredios_PPDU,geomatica%3Appdu_zonificacion,geomatica%3Aetiquetas_ppud,geomatica%3Aubicacion&viewparams=longitud%3A".$lon.";latitud%3A".$lat."&bbox=".$box_z."&width=600&height=300&srs=EPSG%3A4326&format=image%2Fpng";
 
  $mapabasePNG = "https://mapa.zapopan.gob.mx:8000/geoserver/geomatica/wms?service=WMS&version=1.1.0&request=GetMap&layers=geomatica%3AOSM-WMS,geomatica%3Aubicacion_usosuelo&viewparams=longitud%3A".$lon.";latitud%3A".$lat."&bbox=".$box_u."&width=1200&height=600&srs=EPSG%3A4326&format=image%2Fpng";

}


?>


<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Consulta de uso de suelo. </title>
    <link rel="icon" href="img/escudo_zapopan.ico" type="image/ico">
    <link rel="stylesheet" href="./css/paginate.css">
    <link rel="stylesheet" href="./css/ligne.css">
	<link rel="stylesheet" href="./css/tablas.css">
    <script type="text/javascript" src="./js/paginate.js"></script>
	
<!-- <style>
    {
        font-family: sans-serif;
    }
</style> -->

<!--<style>
    a:link, a:visited
     {
    /*background-color: #e39a12;*/
    color: black;
    padding: 4px 4px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    }
    a:hover, a:active {
    /*background-color: #b87a07;*/
    }
</style> -->

<style>
    iframe
    {
    margin: 0px !important;
    padding: 0px !important;
    background: blue; /* this is just to make the frames easier to see */
    border: 0px !important;
    }

    html, body
    {
    margin: 0px !important;
    padding: 0px !important;
    border: 0px !important;
    /*width: 100%;
    height: 100%;*/
    }
</style>




</head>


<body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.min.js"></script>
       
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">





<?php   //  echo " Clave Geoestadística: " .$row['cvegeo'];
if ($mapa == 's')
    {  
    echo '<div class="container"  style="width:520px; height:400px; overflow:auto;"  >';    
   }  
   else {
    echo '<div class="container">';
   }
?>






<div vertical-align: middle; id="ventanauso" >
  <!-- <h2 style="vertical-align: middle;" ><img src="./img/navega.png" alt="Logo Navega 2020" width="60" height="40" > -->
  <?//php echo " " .$row['clav_final']; ?>  
  <?//php echo " " .$lon; ?>
  <?//php echo " " .$lat; ?>  

  </h2>
   
	
<table class="greyGridTable" style='font-family: Verdana, Arial, Helvetica, sans-serif;'>
<tbody>
<tr>
<th width="14%"><span style="vertical-align: middle;"><img src="img/escudogriszap.png" alt="Logo Zapopan" width="69" height="85" ></span></th>
<th colspan="2"><span style="vertical-align: middle;"><h3> Planes Parciales de Desarrollo Urbano, Zapopan. Consulta de Uso de Suelo</h3> </span></th>
<!--<th width="18%"><span style="vertical-align: middle;"><img src="./img/escudopadron.png" alt="Logo Zapopan" width="161" height="60" ></span></th>-->
</tr>
</tbody>
</table>

<table class="greyGridTable" style='font-family: Verdana, Arial, Helvetica, sans-serif;'>
<thead>
<tr>
<td colspan="2"><strong><h1>Ubicación</h1></strong></td>
</tr>
</thead>

<tbody>
<tr>
<td width="45%" rowspan="4"><img alt="Imágen uso de suelo" src="<?php echo $mapabasePNG ?>"  width="600" height="300"></td>
<td width="30%"><strong>Latidud: <Br><?php echo $lat;?></strong></td>

</tr>
<tr>
<td><strong>Longitud: <Br><?php echo $lon;?></strong></td>

</tr>
<tr>
<td><strong>X: <Br><?php echo $row['x']; ?></strong></td>

</tr>
<tr>
<td><strong>Y: <Br><?php echo $row['y']; ?></strong></td>

</tr>
</tbody>
</table>


<table class="greyGridTable" style='font-family: Verdana, Arial, Helvetica, sans-serif;'>
<thead>
<tr>
<td colspan="2"><strong><h1>Distrito: <?php echo $row['distrito']; ?> 
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	Uso de Suelo: <?php echo $row['simbologia']; ?></h1></strong></td>
</tr>
</thead>

<tbody>
<tr>
<th width="45%" rowspan="4"><img alt="Imágen uso de suelo" src="<?php echo $wmsZonificacionPNG ?>"  width="600" height="300"></th>
<td width="30%"><strong>Clave de Zonificación: <Br><?php echo $row['clav_final']; ?></strong></td>

</tr>
<tr>
<td><strong>Densidad: <Br><?php echo $row['densidad_n']; ?>
	&nbsp; &nbsp;&nbsp;
	<?php echo $row['densidad']; ?>
	</strong></td>

</tr>
<tr>
<td><strong>Intensidad: <Br><?php echo $row['clav_inten']; ?>
&nbsp;&nbsp; &nbsp;
	<?php echo $row['intensidad']; ?>
	
	</strong></td>

</tr>
<tr>
<td><strong>Modalidad: <Br> <?php echo $row['modalidad']; ?></strong></td>

</tr>
</tbody>
</table>
	


	
<table class="greyGridTable" style='font-family: Verdana, Arial, Helvetica, sans-serif;'>
<thead>
<tr>
<td colspan="3"align="left"><strong><h1>Clasificación de área</h1></strong></td>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><strong>&nbsp;&nbsp;&nbsp;Area 1:</strong>   <?php echo $row['clav_cla_1']; ?></td>
<td colspan="2" align="left"><strong> &nbsp; </strong>   <?php echo $row['clas_area1']; ?></td>


</tr>
<tr>
<td align="left"><strong>&nbsp;&nbsp;&nbsp;Area 2:</strong> <?php echo $row['clav_cla_2']; ?></td>
<td colspan="2" align="left"><strong>&nbsp;</strong>  <?php echo $row['clas_area2']; ?></td>


</tr>


</tbody>
</table>

   
<table class="greyGridTable" style='font-family: Verdana, Arial, Helvetica, sans-serif;'>

<thead>
<tr>
</tr>
</thead>
	<tbody>
		<tr>
<td><strong><em>El presente hace referencia únicamente a una consulta del uso de suelo basada en el punto que se indicó en el mapa y las coordenadas señaladas. El cual tendrá que ser validado por el personal del Ayuntamiento de Zapopan.</em></strong></td>
<td></td>
<td></td>
</tr>
</tbody>

</table>	


	
	
          <script>

            let options = {
            numberPerPage:10, //Cantidad de datos por pagina
            goBar:true, //Barra donde puedes digitar el numero de la pagina al que quiere ir
            pageCounter:true, //Contador de paginas, en cual estas, de cuantas paginas
            };

            let filterOptions = {
            el:'#searchBox' //Caja de texto para filtrar, puede ser una clase o un ID
            };

          paginate.init('.myTable',options,filterOptions);
          </script>
</body>
    
  </div>







  


  <script>
  var doc = new jsPDF();

function saveDiv(divId, title) {
doc.fromHTML(`<html><head><title>${title}</title></head><body>` + document.getElementById(divId).innerHTML + `</body></html>`);
doc.save('div.pdf');
}

function printDiv(divId,
 title) {

 let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');

 mywindow.document.write(`<html><head><title>${title}</title>`);
 mywindow.document.write('</head><body >');
 mywindow.document.write(document.getElementById(divId).innerHTML);
 mywindow.document.write('</body></html>');

 mywindow.document.close(); // necessary for IE >= 10
 mywindow.focus(); // necessary for IE >= 10*/

 mywindow.print();
 mywindow.close();

 return true;
}

</script>

  


</html>











