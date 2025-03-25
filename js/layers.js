  /* ------------- Conexiones  ------------------ */
  var geoserver_url_wms_geom =
    "https://mapa.zapopan.gob.mx:8000/geoserver/geomatica/wms?"; //Geoserver Geomatica
  var geoserver_url_wfs_geom =
    "https://mapa.zapopan.gob.mx:8000/geoserver/geomatica/ows?"; //Geoserver Geomatica

/**************** LIMITE MUNICIPAL ****************/
var wmsLayerLimitemun;
wmsLayerLimitemun = L.tileLayer.wms(
  "https://mapa.zapopan.gob.mx:8000/geoserver/geomatica/wms?",
  {
    layers: "geomatica:ppdu_limite_municipal",
    format: "image/png",
    transparent: true,
  }
);

  /* ------------- Información General  ------------------ */
var l_LayerColonias = L.layerGroup();

var wmsLayerColonias = L.tileLayer
  .wms(geoserver_url_wms_geom, {
    layers: "geomatica:Colonias",
    minZoom: 10,
    maxZoom: 20,
    opacity: 0.6,
    format: "image/png",
    transparent: true,
  })
  .addTo(l_LayerColonias);
    
  /****************** Ortofotos Completa Zapopan *******************/
var l_zapopanfull = L.layerGroup();

var wmszapopanfull = L.tileLayer
  .wms(geoserver_url_wms_geom, {
    layers: "geomatica:proteccion_civil_zapopancompleto",
    minZoom: 1,
    maxZoom: 25,
    opacity: 0.8,
    format: "image/png",
    transparent: true,
  })
  .addTo(l_zapopanfull);

  /******************  Planes Parciales *******************/
  var l_limite_distrito = L.layerGroup();
  var l_estructura_vial = L.layerGroup();
  var l_utilizacion_suelo = L.layerGroup();
  var l_clasificacion_areas = L.layerGroup();
  var l_zpn_division_politica = L.layerGroup();
  var l_zpn_LimiteMunicipal = L.layerGroup();
  var l_zpn_zpnauc = L.layerGroup();
  var l_zpn_centros_poblacion_rurales = L.layerGroup();
  var l_zpn_ciclovias = L.layerGroup();
  var l_zpn_corredor_urbano = L.layerGroup();
  var l_zpn_diag_espacios_verdes = L.layerGroup();
  var l_zpn_corredor_verde = L.layerGroup();
  var l_insta_especiales = L.layerGroup();
  var l_zpn_linea_drenaje = L.layerGroup();
  var l_zpn_proyecto_colector = L.layerGroup();
  var l_centros_urbanos_pol = L.layerGroup();
  var l_centros_urbanos_pto = L.layerGroup();
  var l_zpn_ppe = L.layerGroup();
  var l_zpn_arroyo_vehicular = L.layerGroup();
  var l_zpn_predios = L.layerGroup();
  var l_zpn_anp = L.layerGroup();
  var l_zpn_cuerpos_agua = L.layerGroup();
  var l_zpn_conservacion_eco = L.layerGroup();
  var l_zpn_relleno_picachos = L.layerGroup();
  var l_zpn_relleno_picachos = L.layerGroup();
  var l_zpn_relleno_picachospol = L.layerGroup();
  var l_zpn_relleno_picachospol500 = L.layerGroup();
  var l_zpn_subestacion_electrica = L.layerGroup();
  var l_zpn_planta_tratamiento = L.layerGroup();
  var l_zpn_cerro_tepopote = L.layerGroup();
  var l_zpn_reserva_urbana = L.layerGroup();
  var l_zpn_ru_consolidacion = L.layerGroup();
  var l_zpn_zonificacion_primaria = L.layerGroup();
  var l_area_desarrollo_controlado = L.layerGroup();


  var wmsLayerlimite_distrito = L.tileLayer.wms(geoserver_url_wms_geom, {
    layers: 'geomatica:zpn_limite_distrito', // Nombre de la capa en GeoServer
    minZoom: 1,                             // Zoom mínimo permitido
    maxZoom: 25,                            // Zoom máximo permitido
    format: 'image/png',                    // Formato de la capa (PNG soporta transparencia)
    transparent: true,                      // Fondo transparente
    tileSize: 800,                         // Define que se usará un solo mosaico (Single Tile)
    opacity: 0.8,                           // Transparencia de la capa
    //attribution: 'Datos de GeoServer',      // Fuente o créditos
  })
  .addTo(l_limite_distrito);

  var wmsLayerestructura_vial = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_estructura_vial",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_estructura_vial);

  var wmsLayerZutilizacion_suelo = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_e3_utilizacion_suelo",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.5,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_utilizacion_suelo);

  var wmsLayerclasificacion_areas = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_clasificacion_areas",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.5,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_clasificacion_areas);

  var wmsLayerdivision_politica = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_division_politica",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_division_politica);

  var wmsLayerLimiteMunicipal = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:LimiteMunicipal_MGJ2012_modificadoDecreto26837",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_LimiteMunicipal);

  var wmsLayerzpn_auc = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_auc",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_zpnauc);

  var wmsLayerl_zpn_centros_poblacion_rurales = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_centros_poblacion_rurales",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_centros_poblacion_rurales);

  var wmsLayerzpn_ciclovias = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_ciclovias",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_ciclovias);

  var wmsLayercorredor_urbano = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_corredor_urbano",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_corredor_urbano);

  var wmsLayerdiag_espacios_verdes = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_diag_espacios_verdes",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_diag_espacios_verdes);

  var wmsLayerzpn_corredor_verde = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_corredor_verde",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_corredor_verde);

  var wmsLayerinsta_especiales = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_base_aerea, 	geomatica:zpn_ri_rg_tepopote",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_insta_especiales);

  var wmsLayerzpn_linea_drenaje = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_linea_drenaje",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_linea_drenaje);

  var wmsLayerzpn_proyecto_colector = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_proyecto_colector ",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_proyecto_colector);

  var wmsLayercentros_urbanos_pol = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_centros_urbanos_poligonos",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_centros_urbanos_pol);

  var wmsLayercentros_urbanos_pto = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_centros_urbanos_punto",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_centros_urbanos_pto);

  var wmsLayerzpn_ppe = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_ppe",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_ppe);

  var wmsLayerzpn_arroyo_vehicular = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_arroyo_vehicular",
      minZoom: 14,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_arroyo_vehicular);

  var wmsLayerzpn_predios = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_predios",
      minZoom: 14,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_predios);

  var wmsLayerzpn_anp = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_anp",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_anp);

  var wmsLayerzpn_cuerpos_agua = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_cuerpos_agua",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_cuerpos_agua);

  var wmsLayerzpn_conservacion_eco = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers:
        "geomatica:zpn_bosque_centinela, geomatica:zpn_parque_metropolitano, geomatica:zpn_parque_eca_doqueiros",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_conservacion_eco);

  var wmsLayerzpn_relleno_picachospol500 = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_relleno_sanitario_picachos_500m",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_relleno_picachospol500);

  var wmsLayerzpn_relleno_picachos = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_planta_picacho",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_relleno_picachos);

  var wmsLayerzpn_relleno_picachospol = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_relleno_sanitario_picachos",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_relleno_picachospol);

  var wmsLayerzpn_subestacion_electrica = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_subestacion_electrica",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_subestacion_electrica);

  var wmsLayerzpn_planta_tratamiento = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_planta_tratamiento",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_planta_tratamiento);

  var wmsLayerzpn_planta_tratamiento = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_cerro_tepopote",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_cerro_tepopote);

  var wmsLayerzpn_reserva_urbana = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_reserva_urbana_municipal",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_reserva_urbana);

  var wmsLayerzpn_ru_consolidacion = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_ru_consolidacion",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_ru_consolidacion);

  var wmsLayerzpn_zonificacion_primaria = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:zpn_zonificacion_primaria",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_zpn_zonificacion_primaria);

    var wmsLayer_area_desarrollo_controlado = L.tileLayer
    .wms(geoserver_url_wms_geom, {
      layers: "geomatica:area_desarrollo_controlado",
      minZoom: 10,
      maxZoom: 25,
      opacity: 0.8,
      format: "image/png",
      transparent: true,
    })
    .addTo(l_area_desarrollo_controlado);

/****************** Planes Parciales ************************/
lyrutilizacion_suelo = L.geoJSON
  .ajax(
    geoserver_url_wfs_geom +
    "service=WFS&version=1.0.0&request=GetFeature&typeName=geomatica%3Azpn_e3_utilizacion_suelo&outputFormat=application%2Fjson",
    {
      style: { color: "#ff0105", weight: 0, fillOpacity: 0.0 },
      onEachFeature: returne3uso,
    }
  )
  .addTo(l_utilizacion_suelo);

lyrutilizacion_suelo = L.geoJSON
  .ajax(
    geoserver_url_wfs_geom +
    "service=WFS&version=1.0.0&request=GetFeature&typeName=geomatica%3Azpn_clasificacion_areas&outputFormat=application%2Fjson",
    {
      style: { color: "#ff0105", weight: 0, fillOpacity: 0.0 },
      onEachFeature: returnclas_suelo,
    }
  )
  .addTo(l_clasificacion_areas);
/****************** Fin de Planes Parciales ************************/

/******************     Propiedades        *****************/

function returne3usoXX(json, lyr) {
  
  var url_base = "./imagenes/";
  var att = json.properties;

  // Elimina los espacios en el campo 'documento'
  var documentoSinEspacios = att.documento.replace(/\s+/g, "");
  
  // Genera la URL de la imagen basada en el contrato
  var imageUrl = url_base + documentoSinEspacios + ".png"; // Asume que la imagen es un archivo .PNG.
  var defaultImageUrl = url_base + "SIN_FOTO.png"; // URL de la imagen por defecto.
  //console.log(imageUrl);

 lyr.bindPopup(
    '<strong style="color: #e50695">DISTRITO: </strong>' +
      att.distrito +
      '<br/><strong style="color: #e50695">USO: </strong>' +
      att.util_suelo +
      '<br/><strong style="color: #e50695">CLAVE: </strong>' +
      att.cve_util +
      "<br>" +
      "<br>" +
      "<strong>Foto: </strong>" +
      "<br>" +
      '<a href="' +
      imageUrl +
      '" target="_blank">' +
      '<img src="' +
      imageUrl +
      '" alt="Imagen" style="width:100%;max-width:300px;" onerror="this.onerror=null;this.src=\'' +
      defaultImageUrl +
      "';\" />" +
      "</a>" +
      "<br>"
  );


} 



function returne3uso(json, lyr) {
  
  var url_base = "./imagenes/";
  var att = json.properties;
  var documentoSinEspacios = att.documento.replace(/\s+/g, "");
  var imageUrl = url_base + documentoSinEspacios + ".png"; // Asume que la imagen es un archivo .PNG.
  //var defaultImageUrl = url_base + "SIN_FOTO.png"; // URL de la imagen por defecto.
  //var imageHTML = '<img src="' + imageUrl + '" alt="Imagen" style="width:100%;max-width:300px;" onerror="this.onerror=null;this.src=\'' + defaultImageUrl + '\';" />';
  var lat,lng;
  

  /*if (imageUrl === defaultImageUrl) {
    imageHTML = '<img src="' + defaultImageUrl + '" alt="Imagen no disponible" style="width:100%;max-width:300px;" />';
  }*/

   // Captura del evento de clic en el mapa para obtener las coordenadas
   lyr.on('click', function(e) {
    var latlng = e.latlng; // Obtenemos las coordenadas de latitud y longitud donde se hizo clic
    console.log('Coordenadas donde se hizo clic: ', latlng); // Muestra las coordenadas en la consola
    lat = latlng.lat.toFixed(6); // Latitud con 6 decimales
    lng = latlng.lng.toFixed(6); // Longitud con 6 decimales
    sidebar.close();
  
    // Aquí puedes hacer algo con las coordenadas, como mostrarlas en el popup o procesarlas de alguna manera
  });
 
 
lyr.bindPopup(
  '<div style="text-align: left;">' +
    '<strong style="color: #e50695">DISTRITO: </strong>' + att.distrito +
    '<br/><strong style="color: #e50695">USO: </strong>' + att.util_suelo +
    '<br/><strong style="color: #e50695">CLAVE: </strong>' + att.cve_util +
    "<br><br>" +
    '<div style="display: flex; justify-content: center; gap: 20px; align-items: center;">' +
      
      // Botón de Matriz con el comportamiento según la foto
      (documentoSinEspacios === 'sin_foto' ? 
        // Si la imagen es la de "SIN_FOTO.png", no abrir nada y cambiar el icono
        '<button style="text-align: center; padding: 10px 20px; text-decoration: none; background: none; color: black; border: 0 none; border-radius: 5px; display: flex; align-items: center;" title="Matriz de Compatibilidad">' +
          '<img src="./img/No-PNG-Photos.png" style="width: 40px; height: 40px; margin-right: 10px;" />' +
          'Matriz' +
        '</button>' :
        // Si hay una imagen válida, mostrar el icono y permitir abrir en nueva pestaña
        '<a href="' + imageUrl + '" target="_blank" style="text-align: center; padding: 10px 20px; text-decoration: none; color: black; border-radius: 5px; display: flex; align-items: center;" title="Matriz de Compatibilidad">' +
          '<img src="./img/ico_info.png" style="width: 40px; height: 40px; margin-right: 10px;" />' +
          'Matriz' +
        '</a>'
      ) +

      // Botón de Reporte con icono
      '<button id="btnReporte" style="text-align: center; padding: 10px 20px; text-decoration: none; background: none; color: black; border: 0 none; border-radius: 5px; display: flex; align-items: center;" title="Consulta de uso de Suelo">' +
        '<img src="./img/manual.png" style="width: 40px; height: 40px; margin-right: 10px;" />' +
        'Consulta' +
      '</button>' +

    '</div>' +
  '</div>'
);
  
  

// Usamos `popupopen` para delegar la asignación de eventos en todos los popups
lyr.on('popupopen', function(event) {
  const popup = event.popup; // Obtenemos el popup que se acaba de abrir

  // Verificamos si el botón está en el DOM del popup antes de añadir el evento
  const btnReporte = popup.getElement().querySelector('#btnReporte');
  
  if (btnReporte) {
    // Agregar el evento para cuando el botón sea presionado
    btnReporte.removeEventListener('click', handleClickReporte);
    btnReporte.addEventListener('click', handleClickReporte);
  }
});

// Función que maneja el evento del botón
function handleClickReporte2() {
  console.log("Botón de reporte presionado, haciendo AJAX...");
  console.log("Latitud: " + lat + ", Longitud: " + lng); // Mostrar las coordenadas

  //sidebar.open('consultaus');


  $.ajax({
    url: './bd/infousosuelo.php',
    type: 'GET',
    data: {
      lat: lat,
      lon: lng
    },
    success: function (result) {
      sidebar.close();
      // 4. Procesar la respuesta y mostrarla en el sidebar
      console.log('Respuesta del servidor:', result);
      // Limpiar el contenido previo
      //const dataList = $('#data-list');
      //dataList.empty(); 
      var data = JSON.parse(result);
      console.log(data);
      //if (data.gid >= 1) {
        sidebar.open('consultaus');

        document.getElementById('ngid').value = data.gid || '';

        document.getElementById('ngid').style.display = 'none';
        document.querySelector('[for="ngid"]').style.display = 'none';


        /* let imagen = "";
         $box = data.extent;   
         $box = str_replace("BOX(", "", $box);
         $box= str_replace(")", "", $box);
         $box = str_replace(" ", ",", $box);
         $box = str_replace(",", "%2C", $box);
         if ($box == '') { 
           $wmsPNG = $imagen2; //echo ('No existe predio en la cartografía'); //die();
         }
         else {*/

        // Suponiendo que `data.extent` contiene el valor de la extensión
        let box = data.extent_predio || '';  // Si no hay valor, asignamos una cadena vacía
        let boximg = data.extent_predio || '';


        box = box.replace("BOX(", "").replace(")", "").replace(/ /g, ",").replace(/,/g, "%2C");

        boximg = boximg.replace("BOX(", "").replace(")", "").replace(/ /g, ",").replace(/,/g, ",")
        boximg =  "["+ boximg+"]";
       

        //let bbox = [-103.395334732013, 20.7214375325918, -103.39418267082, 20.7225214178951];


        console.log(box);
        ///let imageUrl = "http://10.10.23.178:8000/geoserver/geomatica/wms?service=WMS&version=1.1.0&request=GetMap&layers=geomatica%3Avista_colonias_edit&bbox=" + box + "&width=600&height=768&srs=EPSG%3A4326&format=image%2Fpng&CQL_FILTER=gid=" + data.gid;
        ///console.log(imageUrl);
        // Asignar la URL a la etiqueta de imagen
        ///document.getElementById('preview-image').src = imageUrl;
        //}


        console.log(box);

// Obtener el contenedor específico donde está la imagen
const contenedor = document.getElementById('preview-image');  // Reemplaza 'miContenedor' por el ID del contenedor de la imagen

// Obtener las dimensiones del contenedor
const width = contenedor.offsetWidth;  // Ancho del contenedor
const height = contenedor.offsetHeight;  // Alto del contenedor

// Construir la URL del WMS con los parámetros dinámicos
let imageUrl2 = "http://10.10.23.178:8000/geoserver/geomatica/wms?service=WMS&version=1.1.0&request=GetMap&layers=geomatica%3Avista_colonias_edit&bbox=" + box + "&width=" + width + "&height=" + height + "&srs=EPSG%3A4326&format=image%2Fpng&CQL_FILTER=gid=" + data.gid;


let imageUrl3 = "https://mapa.zapopan.gob.mx:8000/geoserver/geomatica/wms?service=WMS&version=1.1.0&request=GetMap&layers=geomatica%3Azpn_e3_utilizacion_suelo,geomatica%3Azpn_clasificacion_areas,geomatica%3Azpn_e3_utilizacion_suelo_etiquetas,geomatica%geomatica%3Azpn_predios,geomatica%3Aubicacion&viewparams=longitud%3A-103.39066028594972;latitud%3A20.72335074390707&bbox="+ box + "&width=" + width + "&height=" + height + "&srs=EPSG%3A4326&format=image%2Fpng"



let imageUrl4 = "https://mapa.zapopan.gob.mx:8000/geoserver/geomatica/wms?service=WMS&version=1.1.0&request=GetMap&layers="+
"geomatica%3Azpn_centros_urbanos_punto,"+
"geomatica%3Aarea_desarrollo_controlado,"+
"geomatica%3Azpn_centros_urbanos_punto,"+
"geomatica%3Azpn_e3_utilizacion_suelo,"+
"geomatica%3Azpn_e3_utilizacion_suelo_etiquetas,"+
"geomatica%3Azpn_arroyo_vehicular,"+
"geomatica%3Azpn_estructura_vial,"+
"geomatica%3Aarea_desarrollo_controlado,"+
"geomatica%3Azpn_ppe,"+
//"geomatica%3Azpn_limite_distrito,"+
"geomatica%3Azpn_predios,"+
"geomatica%3Aubicacion&viewparams=longitud%3A"+ data.longitud_out+";latitud%3A" + data.latitud_out +"&bbox="+ box + "&width=" + width + "&height=" + height + "&srs=EPSG%3A4326&format=image%2Fpng"

let imageUrl = "https://mapa.zapopan.gob.mx:8000/geoserver/geomatica/wms?service=WMS&version=1.1.0&request=GetMap&layers="+
"geomatica%3Azpn_centros_urbanos_punto,"+
"geomatica%3Aarea_desarrollo_controlado,"+
"geomatica%3Azpn_centros_urbanos_punto,"+
"geomatica%3Azpn_e3_utilizacion_suelo,"+
"geomatica%3Azpn_e3_utilizacion_suelo_etiquetas,"+
"geomatica%3Azpn_arroyo_vehicular,"+
"geomatica%3Azpn_estructura_vial,"+
"geomatica%3Aarea_desarrollo_controlado,"+
"geomatica%3Azpn_ppe,"+
//"geomatica%3Azpn_limite_distrito,"+
"geomatica%3Azpn_predios,"+
"geomatica%3Aubicacion&viewparams=longitud%3A"+ data.longitud_out+";latitud%3A" + data.latitud_out +"&bbox="+ box + "&width=300&height=300&srs=EPSG%3A4326&format=image%2Fpng"



console.log(imageUrl);

// Asignar la URL a la etiqueta de imagen
const imageElement = document.getElementById('preview-image');
imageElement.src = imageUrl;

// Asegúrate de que la imagen se ajuste correctamente al contenedor sin deformarse
imageElement.style.width = "100%"; //650; //"100%"; // La imagen ocupa el 100% del ancho del contenedor
imageElement.style.height = "auto"; //300; //"auto"; // Mantiene la relación de aspecto de la imagen
imageElement.style.objectFit = "contain"; // Asegura que la imagen no se recorte ni deforme




        //                let imageUrl = "http://10.10.23.178:8000/geoserver/geomatica/wms?service=WMS&version=1.1.0&request=GetMap&layers=geomatica%3Avista_colonias_edit&bbox=-103.620600602706%2C20.5792307731686%2C-103.323168821484%2C20.9594146174057&width=600&height=768&srs=EPSG%3A4326&format=image%2Fpng&CQL_FILTER=gid="+data.gid;
        //                document.getElementById('preview-image').src = imageUrl;

        document.getElementById('urlimagen').value = imageUrl || '';

        document.getElementById('planparcial').value = data.distrito || '';
        document.getElementById('claveusosuelo').value =  data.util_suelo || ' ';
        document.getElementById('usosuelo').value =  data.cve_util || '';  
        document.getElementById('entorno').innerHTML  =  data.entorno || '';
        document.getElementById('restriccion').value =  data.restriccion || '';
        document.getElementById('longitud').value = data.longitud_out || '';
        document.getElementById('latitud').value = data.latitud_out || '';
        document.getElementById('x').value = data.x || '';
        document.getElementById('y').value = data.y || '';
        document.getElementById('vbbox').value =  boximg || '';
      

        

       /* document.getElementById('nombre').value = data.nombre || '';
        document.getElementById('distrito').value = data.distrito || '';
        document.getElementById('dependencia').value = data.dependenci || '';
        document.getElementById('expediente').value = data.expediente || '';
        document.getElementById('antecedentes').value = data.antecedent || '';
        document.getElementById('urlplano').value = data.url_plano || '';
        document.getElementById('vobomesa').value = data.vobo_mesa || '';
        document.getElementById('observaciones').value = data.observacio || '';*/

     // } else { sidebar.close(); }


      // Asumimos que la respuesta es un array o un objeto

    },
    error: function (xhr, status, error) {
      sidebar.close();
      console.error("Error en la consulta AJAX:", error);
    }
  });








  // Aquí iría tu lógica AJAX
  /*
  fetch('url-del-reporte', {
    method: 'GET',
    // Aquí puedes agregar headers si es necesario
  })
  .then(response => response.json())
  .then(data => {
    console.log('Datos del reporte:', data);
    // Aquí puedes manipular los datos recibidos
  })
  .catch(error => {
    console.error('Error en el reporte:', error);
  });
  */
}


// Función que maneja el evento del botón
function handleClickReporte() {
  console.log("Botón de reporte presionado, haciendo AJAX...");
  console.log("Latitud: " + lat + ", Longitud: " + lng); // Mostrar las coordenadas

  // Realizar la solicitud AJAX
  $.ajax({
    url: './bd/infousosuelo.php',
    type: 'GET',
    data: {
      lat: lat,
      lon: lng
    },
    success: function (result) {
      sidebar.close();
      console.log('Respuesta del servidor:', result);

      // Procesar la respuesta
      var data = JSON.parse(result);
      console.log(data);

      sidebar.open('consultaus');
      
      const iframe = document.getElementById('formacaptura-iframe');  
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;



      document.getElementById('ngid').value = data.gid || '';
      document.getElementById('ngid').style.display = 'none';
      document.querySelector('[for="ngid"]').style.display = 'none';

      // Procesar el bbox
      let box = data.extent_predio || '';
      let boximg = data.extent_predio || '';

      box = box.replace("BOX(", "").replace(")", "").replace(/ /g, ",").replace(/,/g, "%2C");
      boximg = boximg.replace("BOX(", "").replace(")", "").replace(/ /g, ",").replace(/,/g, ",");
      boximg = "[" + boximg + "]";

      console.log(box);

      // Obtener dimensiones del contenedor
      const contenedor = iframeDocument.getElementById('preview-image');
      const width = contenedor.offsetWidth;
      const height = contenedor.offsetHeight;

      // Construir URL para WMS
      let imageUrl = "https://mapa.zapopan.gob.mx:8000/geoserver/geomatica/wms?service=WMS&version=1.1.0&request=GetMap&layers=" +
        "geomatica%3Azpn_centros_urbanos_punto," +
        "geomatica%3Aarea_desarrollo_controlado," +
        "geomatica%3Azpn_centros_urbanos_punto," +
        "geomatica%3Azpn_e3_utilizacion_suelo," +
        "geomatica%3Azpn_e3_utilizacion_suelo_etiquetas," +
        "geomatica%3Azpn_arroyo_vehicular," +
        "geomatica%3Azpn_estructura_vial," +
        "geomatica%3Aarea_desarrollo_controlado," +
        "geomatica%3Azpn_ppe," +
        "geomatica%3Azpn_predios," +
        "geomatica%3Aubicacion&viewparams=longitud%3A" + data.longitud_out + ";latitud%3A" + data.latitud_out +
        "&bbox=" + box + "&width=" + width + "&height=" + height + "&srs=EPSG%3A4326&format=image%2Fpng";

      console.log(imageUrl);

      // Asignar URL al elemento de imagen
      const imageElement = iframeDocument.getElementById('preview-image');
      imageElement.src = imageUrl;
      imageElement.style.width = "100%";
      imageElement.style.height = "auto";
      imageElement.style.objectFit = "contain";

      // Asignar valores a otros elementos
      iframeDocument.getElementById('urlimagen').value = imageUrl || '';
      iframeDocument.getElementById('planparcial').value = data.distrito || '';
      iframeDocument.getElementById('claveusosuelo').value = data.util_suelo || ' ';
      iframeDocument.getElementById('usosuelo').value = data.cve_util || '';
      iframeDocument.getElementById('entorno').innerHTML = data.entorno || '';
      iframeDocument.getElementById('restriccion').value = data.restriccion || '';
      iframeDocument.getElementById('longitud').value = data.longitud_out || '';
      iframeDocument.getElementById('latitud').value = data.latitud_out || '';
      iframeDocument.getElementById('x').value = data.x || '';
      iframeDocument.getElementById('y').value = data.y || '';
      iframeDocument.getElementById('vbbox').value = boximg || '';
    },
    error: function (xhr, status, error) {
      sidebar.close();
      console.error("Error en la consulta AJAX:", error);
    }
  });
}








}









function returnclas_suelo2(json, lyr) {
  //console.log(i)
  var att = json.properties;

  lyr.bindPopup(
    '<strong style="color: #e50695">DISTRITO: </strong>' +
      att.distrito +
      '<br/><strong style="color: #e50695">USO: </strong>' +
      att.util_suelo +
      '<br/><strong style="color: #e50695">CLAVE: </strong>' +
      att.cve_util
  );
}


function returnclas_suelo(json, lyr) {
  //console.log(i)
  var att = json.properties;

  lyr.bindPopup(
    '<strong style="color: #e50695">DISTRITO: </strong>' +
      att.distrito +
      '<br/><strong style="color: #e50695">CLASIFICACION: </strong>' +
      att.c_areas +
      '<br/><strong style="color: #e50695">CLAVE: </strong>' +
      att.cve_clase
  );
}
