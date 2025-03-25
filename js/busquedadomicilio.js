$(document).ready(function () {

    var lyr;


    $("#btnFindDomicilio2").click(function () {

        TablaConsulta2.innerHTML = TablaConsulta.oldHTML;

        var inputDomicliox = document.getElementById('txtDomicilio2').value;

        var inputDomiclio = inputDomicliox;

        var tr_str = '';

        //busqueda_domicilio
        $(document).ready(function () {
            $.ajax({
                url: './bd/query_nav.php?buscar=' + inputDomiclio,
                type: 'POST',
                dataType: 'JSON',
                success: function (response) {

               var len = response.length;

                    for (var i = 0; i < len; i++) {
                        var tipo = response[i].tipo;
                        var nombre = response[i].domicilio_inegi;
                        var colonia = response[i].colonia_geo;
                        var longitud = response[i].longitud;
                        var latitud = response[i].latitud;

                        var tr_str = `
                <tr class='table table-striped'>
                    <td>
                        <i class='fa fa-search' onclick="
                        $('.leaflet-marker-icon').remove(); $('.leaflet-popup').remove();
                        map.flyTo([${latitud}, ${longitud}], 20);

                            var iconpuntero = L.icon({
                                iconUrl: './img/pin_busqueda.png',
                                iconSize: [40, 60],
                                iconAnchor: [19, 39],
                                popupAnchor: [0, -40]
                            });  
                            
                            var marker = L.marker([${latitud}, ${longitud}],{icon:iconpuntero}).addTo(map);
                        ">
                        </button>
                    </td>
                    <td>${colonia}</td>
                    <td>${nombre}</td>
                    <td>${tipo}</td>
                </tr>
            `;

                        // Append the new row to the table with id="tablaDom2"
                        $("#tablaDom2").append(tr_str);
                    }


                    sc = "<script>" +
                        "let options = {" +
                        "numberPerPage:10," +
                        "goBar:true," +
                        "pageCounter:true," +
                        "};" +

                        "let filterOptions = {" +
                        "el:'#searchBox'" +
                        "};" +
                        "paginate.init('.myTable',options,filterOptions);" +
                        "</script>";

                    $("#tablaDom2").append(sc);




                }
            });
        });

    });


});


function limpia_busqueda_domicilio() {
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

    document.getElementById('tablaDom2').value = "";
    //document.getElementById('tablaDom').empty ();
    $("#tablaDom2").empty();
    $("#tablaDom2").value = "";

    //map.removeLayer(layer)
    // alert  ('limpia');
};