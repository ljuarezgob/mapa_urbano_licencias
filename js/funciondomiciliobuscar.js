/* Busqueda por Expediednte*/
function funciondomiciliobuscar() {
    var lyr;
    TablaConsulta.innerHTML = TablaConsulta.oldHTML;
    var inputDomicliox = document.getElementById('txtDomicilio2').value;
    var inputDomiclio = inputDomicliox.toUpperCase();
    if (inputDomiclio == '') {
       //alert('Ingresar nombre de Colonia');
       Swal.fire({
        title: '¡Aviso!',
        text: 'Tiene que ingresar el nombre a Buscar.',
        icon: 'info',
        confirmButtonText: 'Cerrar'
    });
        return;
    }

    var tr_str = '';
    $.ajax({
        url: "./bd/query_nav.php?buscar=" + inputDomiclio,
        type: "POST",
        dataType: "JSON",
        success: function (response) {
          var len = response.length;
  
          // Recorrer los datos y agregarlos a la tabla
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
                      $('.leaflet-marker-icon').remove(); 
                      $('.leaflet-popup').remove();
                      map.flyTo([${latitud}, ${longitud}], 20);
  
                      var iconpuntero = L.icon({
                          iconUrl: './img/pin_busqueda.png',
                          iconSize: [40, 60],
                          iconAnchor: [19, 39],
                          popupAnchor: [0, -40]
                      });  
  
                      var marker = L.marker([${latitud}, ${longitud}],{icon:iconpuntero}).addTo(map);
                      "></i>
                  </td>
                  <td>${colonia}</td>
                  <td>${nombre}</td>
                  <td>${tipo}</td>
              </tr>
            `;
  
            // Añadir la fila a la tabla
            $("#tablaDom").append(tr_str);
          }
  
          // Llamar a la función de paginación después de que los datos estén cargados
          setTimeout(function() {
            // Ejecutar la paginación
            let options = {
              numberPerPage: 10,
              goBar: true,
              pageCounter: true,
            };
            let filterOptions = {
              el: '#searchBox'
            };
            paginate.init('.myTable', options, filterOptions);
          }, 200);
        },
      });

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





