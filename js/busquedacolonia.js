/* Busqueda por Expediednte*/
function busquedacolonia() {
    var lyr;
    TablaConsulta.innerHTML = TablaConsulta.oldHTML;
    var inputDomicliox = document.getElementById('txtColonias').value;
    var inputDomiclio = inputDomicliox.toUpperCase();
    if (inputDomiclio == '') {
       //alert('Ingresar nombre de Colonia');
       Swal.fire({
        title: '¡Aviso!',
        text: 'Tiene que ingresar el nombre de Colonia.',
        icon: 'info',
        confirmButtonText: 'Cerrar'
    });
        return;
    }
    var tr_str = '';
    $(document).ready(function () {
        $.ajax({
            url: './bd/query_colonia.php?buscar=' + inputDomiclio,
            type: 'POST',
            dataType: 'JSON',
            success: function (response) {
                var len = response.length;
                if (len == 0) {
                    //alert('No existe la colonia en cartografía');
                    Swal.fire({
                        title: '¡Aviso!',
                        text: 'No existe la colonia en cartografía.',
                        icon: 'info',
                        confirmButtonText: 'Cerrar'
                    });



                    return;
                }

                var iconbus = L.icon({
                    iconUrl: 'img/pin_busqueda.png',
                    iconSize: [20, 30],
                    iconAnchor: [19, 39],
                    popupAnchor: [0, -40]
                });

                // $(".leaflet-marker-icon").remove(); $(".leaflet-popup").remove();
                //  $(".leaflet-marker-shadow").remove(); $(".leaflet-popup").remove();    
                for (var i = 0; i < len; i++) {
                    var nombre = response[i].nombre;
                    var longitud = response[i].longitud;
                    var latitud = response[i].latitud;
                    tr_str = "<tr class='table table-striped'> " +
                        "<td style='width:15%'><i class='fa fa-search'  onclick = map.flyTo([" + latitud + "," + longitud + "],17);  style='cursor: pointer;' /> </td>" + 
                        "<td style='width:100px'>" + nombre + "</td>" +
                        "</tr>";

                    $("#tablaDom").append(tr_str);
                   // L.marker([latitud, longitud], { icon: iconbus }).addTo(map);
                  // L.marker([latitud, longitud].addTo(map));

                    // alert ( tr_str ) ;
                }
                // let options = { numberPerPage:5, goBar:true, pageCounter:true, };       
                //  let filterOptions = { el:'#searchBox' };
                //  paginate.init('.myTable',options,filterOptions);

                /*sc=      "let options = {"+
                          "numberPerPage:5,"+
                          "goBar:true,"+
                          "pageCounter:true,"+
                          "};"+
                            
                          "let filterOptions = {"+
                          "el:'#searchBox'"+
                          "};"+
                          "paginate.init('.myTable',options,filterOptions);";
                  */

                // $("#tablaDom").append(sc);      
                map.setView([20.72767, -103.39045], 12);
            }
        })
    })

};


function limpia_busqueda_colonias() {
    var lyr;
    // alert  ('Entro a la tal FUNC');
    TablaConsulta.innerHTML = TablaConsulta.oldHTML;
    document.getElementById('txtDomicilio2').value = "";
    $(".leaflet-marker-icon").remove(); $(".leaflet-popup").remove();
    $(".leaflet-marker-shadow").remove(); $(".leaflet-popup").remove();
    // marker_lyrinventariop.addTo(map);
    //   marker_lyrinventariop
    
    //map.removeLayer(marker_lyrinventariop)
    //map.addLayer(marker_lyrinventariop)

    document.getElementById('tablaDom').value = "";
    //document.getElementById('tablaDom').empty ();
    $("#tablaDom").empty();
    $("#tablaDom").value = "";

    //map.removeLayer(layer)
    // alert  ('limpia');
};





