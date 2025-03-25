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
      style: { color: "#ff0105", weight: 1, fillOpacity: 0.0 },
      onEachFeature: returne3uso,
    }
  )
  .addTo(l_utilizacion_suelo);

lyrutilizacion_suelo = L.geoJSON
  .ajax(
    geoserver_url_wfs_geom +
    "service=WFS&version=1.0.0&request=GetFeature&typeName=geomatica%3Azpn_clasificacion_areas&outputFormat=application%2Fjson",
    {
      style: { color: "#ff0105", weight: 1, fillOpacity: 0.0 },
      onEachFeature: returnclas_suelo,
    }
  )
  .addTo(l_clasificacion_areas);
/****************** Fin de Planes Parciales ************************/

/******************     Propiedades        *****************/

function returne3uso(json, lyr) {
  
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
