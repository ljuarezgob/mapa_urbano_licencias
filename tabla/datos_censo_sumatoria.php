<?php

//include "../bd/querycenso.php"; 

include "../bd/conexion.php"; 
//$gid = $_GET["gid"];
$mapa = $_GET["mapa"];
$where = $_GET["where"];
$grafico = $_GET ["grafico"];
$ext = $where;
$dibujo=$where;

// Limpiar la Cadena para  crear el grafico en geoserver
if ($grafico == 'polygono') {
    $ext = str_replace("ST_Within(geom, ST_Transform(", "", $ext); 
    $ext = str_replace(",4326),32613))", ")", $ext);
    $dibujo  = $ext;
    // $ext = str_replace("))", ")", $ext);
    $geom = $ext ;
    $geom = str_replace(",","\,",$geom);
    
    
    
    
    

} else if ($grafico == 'circulo') {
   // ST_Intersects(geom, ST_Buffer(ST_Transform(ST_GeomFromText('POINT(-103.39171 20.72025 )',4326),32613),129.74387296385873))
    $ext = str_replace("ST_Within(geom, ST_Buffer(ST_Transform(ST_GeomFromText('POINT(", "ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromText('POINT(", $ext);  
    $ext = str_replace("))", "),4326)", $ext); 
    $dibujo  = $ext;
    $geom = $ext ;
    $geom = str_replace(",","\,",$geom);
  //echo $geom;  
   //exit;
}

// Consulta en postgres
//$consulta = 'select ST_Extent(ST_Transform(ST_Buffer(a.geom,30),4326)) as extent, count(*) as cantidad, sum(pobtot) as poblaciontotal, SUM(pobfem)as poblacionfem, SUM(pobmas)as poblacionmas, SUM(pnacent)as pobnacidaentidad, SUM(pnacent_f)as pobnacidaentidadf, SUM(pnacent_m)as pobnacidaentidadm, SUM(pnacoe)as pobnonacidaentidad, SUM(pnacoe_f)as pobnonacidaentidadf, SUM(pnacoe_m)as pobnonacidaentidadm, SUM(pcon_disc)as pobdiscapacidad, SUM(pcon_limi)as poblimitada,SUM(psind_lim)as pobsinlimitada,SUM(pea)as pobecoactiva, SUM(pea_f)as pobecoactivafem, SUM(pea_m)as pobecoactivamas, SUM(pe_inac)as pobnoecoactiva, SUM(pe_inac_f)as pobnoecoactivafem, SUM(pe_inac_m)as pobnoecoactivamas, SUM(pocupada)as pobocupada, SUM(pocupada_f)as pobocupadafem, SUM(pocupada_m)as pobocupadamas, SUM(tothog)as tothogares, SUM(hogjef_f)as tothogaresfem, SUM(hogjef_m)as tothogaresmas, SUM(pobhog)as pobhogares, SUM(phogjef_f)as pobhogaresfem, SUM(phogjef_m)as pobhogaresmas, SUM(vivtot)as viviendastotal, SUM(tvivpar)as viviendaspart from 
//(SELECT * FROM inegi.manzanas_censo2020 where ' .$where .' ) as a';

$consulta = 'select ST_Extent (ST_Transform (ST_Buffer(ST_Transform(st_setsrid('.$dibujo.',4326),32613),30),4326)) as extent, count(*) as cantidad, sum(pobtot) as poblaciontotal, SUM(pobfem)as poblacionfem, SUM(pobmas)as poblacionmas, SUM(pnacent)as pobnacidaentidad, SUM(pnacent_f)as pobnacidaentidadf, SUM(pnacent_m)as pobnacidaentidadm, SUM(pnacoe)as pobnonacidaentidad, SUM(pnacoe_f)as pobnonacidaentidadf, SUM(pnacoe_m)as pobnonacidaentidadm, SUM(pcon_disc)as pobdiscapacidad, SUM(pcon_limi)as poblimitada,SUM(psind_lim)as pobsinlimitada,SUM(pea)as pobecoactiva, SUM(pea_f)as pobecoactivafem, SUM(pea_m)as pobecoactivamas, SUM(pe_inac)as pobnoecoactiva, SUM(pe_inac_f)as pobnoecoactivafem, SUM(pe_inac_m)as pobnoecoactivamas, SUM(pocupada)as pobocupada, SUM(pocupada_f)as pobocupadafem, SUM(pocupada_m)as pobocupadamas, SUM(tothog)as tothogares, SUM(hogjef_f)as tothogaresfem, SUM(hogjef_m)as tothogaresmas, SUM(pobhog)as pobhogares, SUM(phogjef_f)as pobhogaresfem, SUM(phogjef_m)as pobhogaresmas, SUM(vivtot)as viviendastotal, SUM(tvivpar)as viviendaspart, SUM(pob0_14)as pob14 from 
(SELECT * FROM inegi.manzanas_censo2020 where ' .$where .' ) as a';


//echo ($consulta);
//exit;

$result = pg_query($db_conn, $consulta."; ");
//$result = pg_query($db_conn, $query."; ");
if (!$result) {  
 echo "Error consulta.\n";  
 exit;  
}  
$row = pg_fetch_assoc($result);

$imagen2 = "";
$box = $row['extent'];   

//echo $box;
//   exit ();

//   Limpia la cadena del extent 
$box = str_replace("BOX(", "", $box);
$box = str_replace("POLYGON((", "", $box);   
$box = str_replace("))", "", $box);
$box= str_replace(")", "", $box);
$box = str_replace(" ", ",", $box);
$box = str_replace(",", "%2C", $box);


if ($box == '') {  $wmsPNG = $imagen2; //echo ('No existe predio en la cartografía'); //die();
}
else{
    $wmsInegiPNG = "https://mapa.zapopan.gob.mx:8000/geoserver/geomatica/wms?service=WMS&version=1.1.0&request=GetMap&layers=geomatica%3Apoligono_manzanas_censo2020,geomatica%3AOSM-WMS,geomatica%3Acenso2021_area&viewparams=geometria%3A".$geom."&bbox=".$box."&width=450&height=400&srs=EPSG%3A4326&format=image%2Fpng";       


 
}

pg_close($db_conn);

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Zapopan / INEGI Censo 2020. </title>
    <link rel="icon" href="img/escudo_zapopan.ico" type="image/ico">
    <link rel="stylesheet" href="./css/paginate.css">
    <link rel="stylesheet" href="./css/ligne.css">
    <script type="text/javascript" src="./js/paginate.js"></script>


    <style>

            .estilo_imagen {
                width:auto;
                text-align:center;
            
            }
           img {
              margin-left: auto;
              margin-right: auto;
            }
}
</style>


<style>
    {
        font-family: sans-serif;
    }
</style>

<style>
    a:link, a:visited
     {
    background-color: #3eac3e;
    color: white;
    padding: 4px 4px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    }
    a:hover, a:active {
    background-color: green;
    }
</style>

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
    width: 100%;
    height: 100%;
    }
</style>

</head>


<body>


<?php   //  echo " Clave Geoestadística: " .$row['cvegeo']; 
if ($mapa == 's') 
    {  
    echo '<div class="container"  style="width:520px; height:400px; overflow:auto;"  >';    
   }  
   else {
    echo '<div class="container">'; 
   }
?>



          <!--<div class="input-group"> -->


    <div vertical-align: middle; >
        <h2 style="vertical-align: middle;" > 
            <img src="./img/logo_inegi.png" alt="Logo INEGI" width="100" height="40" >
            <img src="./img/cpv2020.png" alt="Logo Censo 2020" width="60" height="40" > 

        </h2>
	</div>
    
    
     <div class="body">
            <!-- Espacio para Imagen de  mapa -->
                  
                <table>
                  <tbody>
                    <tr>
                      <!--<td width="200" rowspan="5"><img alt="Imágen uso de suelo" src="./img/logo_inegi.png"  width="450" height="130"></td>-->
                      <td  class="estilo_imagen"> <p id="my-image"> <img alt="Imágen uso de suelo" src="<?php echo $wmsInegiPNG ?>"  style="width:50%;"  onclick="window.open(this.src, '_blank, width:100px ,height:100px');"    ></p></td>
                      

                    </tr>
                  </tbody>
          </table>
              
    </div>
  

    
    
       <!-- Filtro de Búsquedas -->
    <div class="panel">
<table width="496" border="0">
  <tbody>
    <tr>
      <td width="335"><div class="body">
            <div class="input-group">
                <label for="searchBox">Filtrar</label>
				<input type="search" id="searchBox" placeholder="Filtrar...">  			
		    	 <a href="datos_censo_sumatoria.php?where=<?php echo $where;?>&mapa=n&grafico=<?php echo $grafico;?>" target="_blank" >     Abrir en otra ventana.</a> 
            </div></td>
      <td width="151"><div vertical-align: middle; >
        <h2 style="vertical-align: middle;" > 
        <?php echo " Manzanas :  " .$row['cantidad']; ?>  
        </h2>
	</div></td>
    </tr>
  </tbody>
</table>
    </div>
    
      <!-- Tabla de Contenido -->   
   <div> 
    <table class="myTable table hover">
        <tbody>
            <tr>
                   
                <td width=90><strong>Indicador</strong></td>
                <td width=400><strong>Descripción</strong></td>
                <td width=10><strong>Sumatoria</strong></td>
                <td width=50><strong>Eje</strong></td>
            </tr>
            <tr>
            <td>    Población total </td>
            <td>Total de personas que residen habitualmente en el país, la entidad federativa, el municipio o la demarcación territorial y la localidad. Incluye la estimación del número de personas en viviendas particulares sin información de ocupantes. Incluye a la población que no especificó su edad.</td>
            <td>  <strong>  <?php echo $row['poblaciontotal']; ?> </strong> </td>
            <td>    Población </td>
            </tr>
          
            
             <tr>
            <td>    Población femenina </td>
            <td>Total de mujeres que residen habitualmente en el país, la entidad federativa, el municipio o la demarcación<br>
            territorial y la localidad. Incluye la estimación del número de mujeres en viviendas particulares sin información de ocupantes. Incluye a la población que no especificó su edad.</td>
            <td>  <strong>   <?php echo $row['poblacionfem']; ?> </strong> </td>
            <td>    Población </td>
            </tr>
            
            <tr>
            <td>    Población masculina </td>
            <td>Total de hombres que residen habitualmente en el país, la entidad federativa, el municipio o la demarcación territorial y la localidad. Incluye la estimación del número de hombres en viviendas particulares sin información de ocupantes. Incluye a la población que no especificó su edad.</td>
            <td>  <strong>   <?php echo $row['poblacionmas']; ?> </strong> </td>
            <td>    Población </td>
             </tr>
             
            <tr>
            <td>    Población nacida en la entidad </td>
            <td>Personas nacidas en la misma entidad federativa.</td>
            <td>  <strong>   <?php echo $row['pobnacidaentidad']; ?> </strong> </td>
            <td>    Migración </td>
            </tr>
            
            <tr>
            <td>    Población femenina nacida en la entidad </td>
            <td>Mujeres nacidas en la misma entidad federativa.</td>
            <td>  <strong>   <?php echo $row['pobnacidaentidadf']; ?> </strong> </td>
            <td>    Migración </td>
            </tr>
            
            <tr>
            <td>    Población masculina nacida en
            la entidad </td>
            <td>Hombres nacidos en la misma entidad federativa.</td>
            <td>  <strong>   <?php echo $row['pobnacidaentidadm']; ?> </strong> </td>
            <td>    Migración </td>
            </tr>
            
             <tr>
            <td>    Población con discapacidad </td>
            <td>Personas que realizan con mucha dificultad o no pueden hacer al menos una de las siguientes actividades: ver, aun usando lentes; oír aun usando aparato auditivo; caminar, subir o bajar; recordar o concentrarse; bañarse, vestirse o comer; hablar o comunicarse.</td>
            <td>  <strong>   <?php echo $row['pobdiscapacidad']; ?> </strong> </td>
            <td>    Discapacidad </td>
            </tr>
            
            <tr> 
            <td>    Población con limitación </td>
            <td>Personas que realizan con poca dificultad al menos una de las siguientes actividades: ver, aun usando lentes; oír aun usando aparato auditivo; caminar, subir o bajar; recordar o concentrarse; bañarse, vestirse o comer; hablar o comunicarse.</td>
            <td> <strong>    <?php echo $row['poblimitada']; ?> </strong> </td>
            <td>    Discapacidad </td>
            </tr>
            
            <tr>
            <td>    Población sin discapacidad, limitación, problema o condición mental </td>
            <td>Personas que no tienen dificultad para realizar alguna actividad cotidiana como: ver, aun usando lentes; oír aun usando aparato auditivo; caminar, subir o bajar;<br>
            recordar o concentrarse; bañarse, vestirse o comer; hablar o comunicarse, ni tampoco tiene algún problema o condición mental.</td>
            <td>  <strong>   <?php echo $row['pobsinlimitada']; ?> </strong> </td>
            <td>    Discapacidad </td>
            </tr>  
                 
            <tr>
            <td>    Población de 0 a 14 años</td>
            <td>Personas de cero a 14 años de edad.</td>
            <td> <strong>    <?php echo $row['pob14']; ?> </strong> </td>
            <td>    Características Económicas </td>
            </tr>
                
            <tr>
            <td>    Población de 12 años y más económicamente activa</td>
            <td>Personas de 12 años y más que trabajaron, tenían trabajo pero no trabajaron o buscaron trabajo en la semana de referencia.</td>
            <td> <strong>    <?php echo $row['pobecoactiva']; ?> </strong> </td>
            <td>    Características Económicas </td>
            </tr>
            
            <tr>
            <td>Población femenina de 12 años y más<br>
            económicamente activa</td>
            <td>Mujeres de 12 años y más que trabajaron, tenían trabajo pero no trabajaron o buscaron trabajo en la semana de referencia.</td>
            <td>  <strong>   <?php echo $row['pobecoactivafem']; ?> </strong> </td>
            <td>    Características Económicas </td>
            </tr>
            
            <tr>
            <td>Población masculina de 12 años y más<br>
            económicamente activa</td>
            <td>Hombres de 12 años y más que trabajaron, tenían trabajo pero no trabajaron o buscaron trabajo en la semana de referencia</td>
            <td> <strong>    <?php echo $row['pobecoactivamas']; ?> </strong> </td>
            <td>    Características Económicas </td>
            </tr>
            
            <tr>
            <td>Población de 12 años y más no<br>
            económicamente activa</td>
            <td>Personas de 12 años y más pensionadas o jubiladas, estudiantes, dedicadas a los quehaceres del hogar; que tienen alguna limitación física o mental permanente que les impide trabajar; o realizan otras actividades no económicas.</td>
            <td>  <strong>   <?php echo $row['pobnoecoactiva']; ?> </strong> </td>
            <td>    Características Económicas </td>
                </tr>
            
            <tr> 
            <td>Población femenina de 12 años y más no<br>
            económicamente activa</td>
            <td>Mujeres de 12 años y más pensionadas o jubiladas, estudiantes, dedicadas a los quehaceres del hogar; que tienen alguna limitación física o mental permanente que les impide trabajar; o realizan otras actividades no económicas.</td>
            <td>  <strong>   <?php echo $row['pobnoecoactivafem']; ?> </strong> </td>
            <td>    Características Económicas </td>
            </tr>
            
            <tr>
            <td>Población masculina de 12 años y más no<br>
            económicamente activa</td>
            <td>Hombres de 12 años y más pensionados o jubilados, estudiantes, dedicados a los quehaceres del hogar; que tienen alguna limitación física o mental permanente que les impide trabajar; o realizan otras actividades no económicas.</td>
            <td>  <strong>   <?php echo $row['pobnoecoactivamas']; ?> </strong> </td>
            <td>    Características Económicas </td>
            </tr>
            
            <tr>
             <td>Población de 12 años y más ocupada</td>
            <td>Personas de 12 a 130 años de edad que trabajaron o que no trabajaron, pero sí tenían trabajo en la semana de referencia.</td>
            <td>  <strong>   <?php echo $row['pobocupada']; ?> </strong> </td>
            <td>    Características Económicas </td>
            </tr>
            
            <tr>
            <td>    Población femenina de 12 años y más ocupada</td>
            <td>Mujeres de 12 a 130 años de edad que trabajaron o que no trabajaron, pero sí tenían trabajo en la semana de referencia.</td>
            <td>  <strong>   <?php echo $row['pobocupadafem']; ?> </strong> </td>
            <td>    Características Económicas </td>
            </tr>
            
            <tr>
            <td>Población masculina de 12 años y más ocupada</td>
            <td>Hombres de 12 a 130 años de edad que trabajaron o que no trabajaron, pero sí tenían trabajo en la semana de referencia.</td>
            <td>  <strong>   <?php echo $row['pobocupadamas']; ?> </strong> </td>
            <td>    Características Económicas </td>
            </tr>
            
            <tr>
            <td>    Total de hogares censales </td>
            <td>Hogares en viviendas particulares habitadas. Se considera un hogar en cada vivienda particular. Incluye casa única en el terreno; casa que comparte terreno con otra(s); casa dúplex; departamento en edificio; vivienda en vecindad<br>
            o cuartería; vivienda en cuarto de azotea de un edificio; local no construido para habitación; vivienda móvil; refugio y no especificado de vivienda particular.</td>
            <td> <strong>    <?php echo $row['tothogares']; ?> </strong> </td>
            <td>    Hogares Censales </td>
             </tr>
            
            <tr>
             <td>    Hogares censales con jefatura femenina </td>
            <td>Hogares en viviendas particulares habitadas donde la persona de referencia es mujer. Se considera un hogar en cada vivienda particular. Incluye casa única en el terreno; casa que comparte terreno con otra(s); casa dúplex; departamento en edificio; vivienda en vecindad o cuartería; vivienda en cuarto de azotea; local no construido para habitación; vivienda móvil; refugio y no especificado de vivienda particular.</td>
            <td>  <strong>   <?php echo $row['tothogaresfem']; ?> </strong> </td>
            <td>    Hogares Censales </td>
             </tr>
            
            <tr>
            <td>    Hogares censales con jefatura masculina </td>
            <td>Hogares en viviendas particulares habitadas donde la persona de referencia es hombre. Se considera un hogar en cada vivienda particular. Incluye casa única en el terreno; casa que comparte terreno con otra(s); casa dúplex; departamento en edificio; vivienda en vecindad o cuartería; vivienda en cuarto de azotea; local no construido para habitación; vivienda móvil; refugio y no especificado de vivienda particular.</td>
            <td>  <strong>   <?php echo $row['tothogaresmas']; ?> </strong> </td>
            <td>    Hogares Censales </td>
            </tr>
            
            <tr>
            <td>    Población en hogares censales </td>
            <td>Personas en hogares censales. Se considera un hogar en cada vivienda particular. Incluye casa única en el terreno; casa que comparte terreno con otra(s); casa dúplex; departamento en edificio; vivienda en vecindad o cuartería; vivienda en cuarto de azotea; local no construido para habitación; vivienda móvil; refugio y no especificado de vivienda particular.</td>
            <td>  <strong>   <?php echo $row['pobhogares']; ?> </strong> </td>
            <td>    Hogares Censales </td>
            </tr>
            
            <tr>
            <td>    Población en hogares censales con jefatura femenina </td>
            <td>Personas en hogares censales donde la persona de referencia es mujer. Se considera un hogar en cada vivienda particular. Incluye casa única en el terreno; casa que comparte terreno con otra(s); casa dúplex; departamento en edificio; vivienda en vecindad o cuartería; vivienda en cuarto de azotea; local no construido para habitación; vivienda móvil; refugio y no especificado de vivienda particular.</td>
            <td>  <strong>   <?php echo $row['pobhogaresfem']; ?> </strong> </td>
            <td>    Hogares Censales </td>
            </tr>
            
            <tr>
            <td>    Población en hogares censales con jefatura masculina </td>
            <td>Personas en hogares censales donde la persona de referencia es hombre. Se considera un hogar en cada vivienda particular. Incluye casa única en el terreno; casa que comparte terreno con otra(s); casa dúplex; departamento en edificio; vivienda en vecindad o cuartería; vivienda en cuarto de azotea; local no construido para habitación; vivienda móvil; refugio y no especificado de vivienda particular.</td>
            <td>  <strong>   <?php echo $row['pobhogaresmas']; ?> </strong> </td>
            <td>    Hogares Censales </td>
            </tr>
            
            <tr>
            <td>    Total de viviendas </td>
            <td>Viviendas particulares habitadas, deshabitadas, de uso temporal y colectivas. Incluye a las viviendas sin información de ocupantes.</td>
            <td>  <strong>   <?php echo $row['viviendastotal']; ?> </strong> </td>
            <td>    Vivienda </td>
                </tr>
       
            <tr>    
            <td>    Total de viviendas particulares </td>
            <td>Viviendas particulares habitadas, deshabitadas y de uso temporal. Excluye a las viviendas sin información de ocupantes.</td>
            <td>  <strong>   <?php echo $row['viviendastotal']; ?> </strong> </td>
            <td>    Vivienda </td>
            </tr>
            
            <tr>
             <td>    Viviendas particulares habitadas </td>
            <td>Viviendas particulares habitadas de cualquier clase: casa única en el terreno; casa que comparte terreno con otra(s); casa dúplex; departamento en edificio; vivienda en vecindad o cuartería; vivienda en cuarto de azotea de un edificio; local no construido para habitación, vivienda móvil; refugio y no especificado de vivienda particular.<br>
            Excluye a las viviendas particulares sin información de ocupantes.</td>
            <td>  <strong>   <?php echo $row['viviendaspart']; ?> </strong> </td>
            <td>    Vivienda </td>
            </tr>
            
        </tbody>
    </table>
</div>

 



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
</html>








