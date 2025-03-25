
/* Busqueda por coordenadas geograficas y utm*/

function busquedacoordenada(){
    var iconbus = L.icon({
        iconUrl: 'img/pin_busqueda.png',
        iconSize:     [20, 30],
        iconAnchor:   [19, 39],
        popupAnchor:  [0, -40]
    });   
    var inputLng = document.getElementById('txtLongitud').value;
    var inputLat = document.getElementById('txtLatitud').value;
    var marker = L.marker([inputLat, inputLng],{icon:iconbus}).addTo(map);
    map.flyTo([ inputLat, inputLng ],18);
};

function busquedacoordenadautm(){
    var iconbus = L.icon({
        iconUrl: 'img/pin_busqueda.png',
        iconSize:     [20, 30],
        iconAnchor:   [19, 39],
        popupAnchor:  [0, -40]
    });   

    var inpututmy = document.getElementById('txtutmy').value;
    var inpututmx = document.getElementById('txtutmx').value;
    var vlat;
    var vlong;
    $.ajax({
        url: "./bd/busquedautm.php?y="+inpututmy+"&x="+inpututmx,
        error:function(msg, string){ 
             alert( "Error !: " + string );
        },        
            success: function (result) {      
               //  $(".leaflet-marker-icon").remove(); $(".leaflet-popup").remove();  
              //  $(".leaflet-marker-shadow").remove(); $(".leaflet-popup").remove();  
                var data = JSON.parse(result);
                vlat = data[0].latitud;
                vlong = data[0].longitud;
               // console.log(vlat);
               // console.log(vlong);
                var marker = L.marker([vlat, vlong],{icon:iconbus}).addTo(map);
                map.flyTo([ vlat, vlong ],18);

           }
    })
};




    function   busquedacoordenasLimpiar () {

      $(".leaflet-marker-icon").remove(); $(".leaflet-popup").remove();  
      $(".leaflet-marker-shadow").remove(); $(".leaflet-popup").remove(); 
     // marker_lyrinventariop.addTo(map);
   //   marker_lyrinventariop
   // map.removeLayer(marker_lyrinventariop)
   // map.addLayer(marker_lyrinventariop)

   if (markerBusqueda_inicial) {
    map.removeLayer(markerBusqueda_inicial);
    markerBusqueda_inicial = null; // Limpiar la referencia
}


    };




        // Validación y función para cargar el mapa según los parámetros
        function obtenerParametrosURL() {
            const urlParams = new URLSearchParams(window.location.search);
            const lat = urlParams.get('latitud');
            const lng = urlParams.get('longitud');
            return { lat, lng };
        }

        function busquedacoordenada_inicial() {
            var iconbus = L.icon({
                iconUrl: 'img/pin_busqueda.png',
                iconSize: [20, 30],
                iconAnchor: [19, 39],
                popupAnchor: [0, -40]
            });

            // Obtener los parámetros de la URL
            var { lat, lng } = obtenerParametrosURL();
            if (lat && lng) {

                if (markerBusqueda_inicial) {
                    map.removeLayer(markerBusqueda_inicial);
                } markerBusqueda_inicial

         


                // Si existen los parámetros latitud y longitud
                markerBusqueda_inicial = L.marker([lat, lng], { icon: iconbus }).addTo(map);
                map.setView([20.72767, -103.39045], 9);
                map.flyTo([lat, lng], 19); // Volver al punto con un zoom de nivel 18
            } else {
                // Si no hay parámetros, centrar el mapa en la ubicación predeterminada
                map.setView([20.72767, -103.39045], 9); // Ubicación predeterminada (ejemplo)
                map.flyTo([20.72767, -103.39045], 13);  // Ejemplo: zoom 12
            }
        }
        // Llamada a la función cuando la página esté completamente cargada
      //  document.addEventListener('DOMContentLoaded', function() {
       //     busquedacoordenadax(); // Ejecuta la función que maneja los parámetros
       // });


