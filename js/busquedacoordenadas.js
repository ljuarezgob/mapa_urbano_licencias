 $(document).ready(function(){

    
     
     
     $("#btnFindCoordenada").click(function(){

        var iconin = L.icon({
            iconUrl: 'img/pin_busqueda.png',
            iconSize:     [40, 60],
            iconAnchor:   [19, 39],
            popupAnchor:  [0, -40]
        });   

        var inputLng = document.getElementById('txtLongitud').value;
        var inputLat = document.getElementById('txtLatitud').value;
        var marker = L.marker([inputLat, inputLng],{icon:iconin}).addTo(mymap);
        mymap.flyTo([ inputLat, inputLng ],18);

// $(".leaflet-marker-icon").remove(); $(".leaflet-popup").remove();


     });
         
                           
 });


