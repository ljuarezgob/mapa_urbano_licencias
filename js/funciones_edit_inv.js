
// Funciones para controlar controles para la edición de la tabla de inventario



function busquedaexpediente_edit(nivel) {
  var lyr;

  //TablaConsulta.innerHTML=TablaConsulta.oldHTML;    
  var inputExpediente = document.getElementById('nmexpediente').value;
  var inputExpediente = inputExpediente.toUpperCase();
  if (inputExpediente == '') {
    //  alert  ('Introducir número de expediente');
    Swal.fire('Introducir número de expediente. ', '', 'warning');
    return;
  }
  var tr_str = '';

  $(document).ready(function () {
    $.ajax({
      url: '../bd/query_no_expediente_tinventario.php?buscar=' + inputExpediente,
      type: 'POST',
      dataType: 'JSON',
      success: function (response) {
        var len = response.length;

        const noactivossel = document.getElementById('nactivosel');

        if (len == 0) {
          //alert  ('No existe el expediente en el inventario');
          Swal.fire({
            title: 'Aviso',
            //text: 'No existe el expediente: '+ inputExpediente + ' en el inventario', //data.mensaje,
            html: 'No existe el expediente: <br><br>' + inputExpediente + '<br><br> en el inventario',
            confirmButtonColor: '#a19d97',     // edb04a
            confirmButtonText: 'ACEPTAR',
          });
          limpia_busquedaexpediente_edit();
          return;
        }

        if (len == 1) {

          document.getElementById('tnactivosel').style.display = 'none'; 
          document.getElementById('nactivosel').style.display = 'none';


          document.getElementById('ngid').value = response[0].gid;
          document.getElementById('nexpediente').value = response[0].cpatrimonial;
          document.getElementById('nactivo').value = response[0].noactivo;

          document.getElementById('ntipo').value = response[0].tipo;
          document.getElementById('ncolonia').value = response[0].colonia;
          document.getElementById('nubicacion').value = response[0].ubicacion;
          document.getElementById('nuso').value = response[0].uso;

          document.getElementById('nnotario').value = response[0].notario;
          document.getElementById('nescritura').value = response[0].nescritura;
          document.getElementById('nfechae').value = response[0].fechaesc;
          document.getElementById('nrpp').value = response[0].rpp;
          document.getElementById('nactoj').value = response[0].actojuridico;
          document.getElementById('ncedente').value = response[0].cedente;

          document.getElementById('ncpredial').value = response[0].ccatastral;
          document.getElementById('nsuperficie').value = response[0].superficiet;//.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
          document.getElementById('nvalorte').value = response[0].vterreno;//.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
          document.getElementById('nsuperficiec').value = response[0].superficiec;//.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
          document.getElementById('nvalorc').value = response[0].vconstruccion;//.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
          document.getElementById('nvalort').value = response[0].vtotal;//.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
          document.getElementById('nfechavalor').value = response[0].fechaaltavalor;

          document.getElementById('nclasificacion').value = response[0].clasificacion;
          document.getElementById('nobservaciones').value = response[0].observaciones;
          document.getElementById('ntransparencia').value = response[0].transparencia;
          document.getElementById('ninvasion').value = response[0].invasion;
          document.getElementById('ncapitalizable').value = response[0].capitalizable;
          document.getElementById('nfechaaltasac').value = response[0].fechaaltasac;

          document.getElementById('btnaceptar').disabled = true;
          document.getElementById('btnmodificar').disabled = false;
          document.getElementById('btncancelar').disabled = true;
          
          if  (nivel  == 1) {  
          document.getElementById('btneliminar').disabled = false;
          }
          return;

          //gid,no,expediente,noactivo,tipo,colonia,ubicacion,clasificacion,nescritura,notario,cedente,superficiet,uso,ccatastral,vterreno,vconstruccion,vtotal,transparencia,invasion,vigente,fechamod,observaciones,fechaaltasac,rpp,fechabajasac,capitalizable,fechaesc,actojuridico,superficiec,fechaaltavalor




        }          



        // $(".leaflet-marker-icon").remove(); $(".leaflet-popup").remove();
        //  $(".leaflet-marker-shadow").remove(); $(".leaflet-popup").remove();  
        if (len >=2) {
          limpia_busquedaexpediente_edit ();
          while (noactivossel.hasChildNodes()) {
            noactivossel.removeChild(noactivossel.firstChild);
          }

          document.getElementById('nmexpediente').value = inputExpediente;
          document.getElementById('nactivosel').style.display = 'block';
          document.getElementById('tnactivosel').style.display = 'block';
          for (var i = 0; i < len; i++) {
         // document.getElementById('ngid').value = response[i].gid;
        //  document.getElementById('nexpediente').value = response[i].expediente;
        //  document.getElementById('nactivo').value = response[i].noactivo;
          //sel = sel + '<option value='.response[i].noactivo+'>'.response[i].noactivo+'</option>';
         // sel =  '<option value= \"HOLA\">\"HOLA\"</option>';
          //document.getElementById('nactivosel').style.visibility = "visible";
          let option = document.createElement("option");
          option.setAttribute('value', response[i].noactivo);
          let optionText = document.createTextNode(response[i].noactivo);
          option.appendChild(optionText);
          noactivossel.appendChild(option);
         //countriesDropDown.appendChild(option);  
         }
       //return;
       $('#nactivosel').change(function() {
        var activoseleccionado = $("#nactivosel option:selected").text();
        //alert(val);



        for (var i = 0; i < len; i++) {
          if  (response[i].noactivo === activoseleccionado ){
            document.getElementById('ngid').value = response[i].gid;
            document.getElementById('nexpediente').value = response[i].cpatrimonial;
            document.getElementById('nactivo').value = response[i].noactivo;

            document.getElementById('ntipo').value = response[i].tipo;
            document.getElementById('ncolonia').value = response[i].colonia;
            document.getElementById('nubicacion').value = response[i].ubicacion;
            document.getElementById('nuso').value = response[i].uso;

            document.getElementById('nnotario').value = response[i].notario;
            document.getElementById('nescritura').value = response[i].nescritura;
            document.getElementById('nfechae').value = response[i].fechaesc;
            document.getElementById('nrpp').value = response[i].rpp;
            document.getElementById('nactoj').value = response[i].actojuridico;
            document.getElementById('ncedente').value = response[i].cedente;

            document.getElementById('ncpredial').value = response[i].ccatastral;
            document.getElementById('nsuperficie').value = response[i].superficiet;//.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            document.getElementById('nvalorte').value = response[i].vterreno;//.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            document.getElementById('nsuperficiec').value = response[i].superficiec;//.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            document.getElementById('nvalorc').value = response[i].vconstruccion;//.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            document.getElementById('nvalort').value = response[i].vtotal;//.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            document.getElementById('nfechavalor').value = response[i].fechaaltavalor;

            document.getElementById('nclasificacion').value = response[i].clasificacion;
            document.getElementById('nobservaciones').value = response[i].observaciones;
            document.getElementById('ntransparencia').value = response[i].transparencia;
            document.getElementById('ninvasion').value = response[i].invasion;
            document.getElementById('ncapitalizable').value = response[i].capitalizable;
            document.getElementById('nfechaaltasac').value = response[i].fechaaltasac;
          }

        }

          document.getElementById('btnaceptar').disabled = true;
          document.getElementById('btnmodificar').disabled = false;
          document.getElementById('btncancelar').disabled = true;
          document.getElementById('btneliminar').disabled = false;








    });



       
          
        }
        
        
      }
    })
  })

};


function modificacion_expediente_edit(nivel) {

  if  (nivel  == 1) {  
  document.getElementById('btnnuevo').disabled = true;
  }
  document.getElementById('btnBuscar').disabled = true;
  document.getElementById('btnLimpiar').disabled = true;
// alert (nivel);
  if  (nivel  == 1) {  
  document.getElementById('nmexpediente').disabled = true;
  document.getElementById('ngid').disabled = true;
  document.getElementById('nexpediente').disabled = true;
  document.getElementById('nactivo').disabled = false;
  document.getElementById('ntipo').disabled = false;
  document.getElementById('ncolonia').disabled = false;
  document.getElementById('nubicacion').disabled = false;
  document.getElementById('nuso').disabled = false;

  document.getElementById('nnotario').disabled = false;
  document.getElementById('nescritura').disabled = false;
  document.getElementById('nfechae').disabled = false;
  document.getElementById('nrpp').disabled = false;
  document.getElementById('nactoj').disabled = false;
  document.getElementById('ncedente').disabled = false;

  document.getElementById('ncpredial').disabled = false;
  document.getElementById('nsuperficie').disabled = false;
  document.getElementById('nvalorte').disabled = false;
  document.getElementById('nsuperficiec').disabled = false;
  document.getElementById('nvalorc').disabled = false;
  document.getElementById('nvalort').disabled = false;
  document.getElementById('nfechavalor').disabled = false;

  document.getElementById('nclasificacion').disabled = false;
  document.getElementById('nobservaciones').disabled = false;
  document.getElementById('ntransparencia').disabled = false;
  document.getElementById('ninvasion').disabled = false;
  document.getElementById('ncapitalizable').disabled = false;
  document.getElementById('nfechaaltasac').disabled = false;
  }

  if  (nivel  == 4) {  
   /* document.getElementById('nmexpediente').disabled = true;
    document.getElementById('ngid').disabled = true;
    document.getElementById('nexpediente').disabled = true;
    document.getElementById('nactivo').disabled = false;
    document.getElementById('ntipo').disabled = false;
    document.getElementById('ncolonia').disabled = false;
    document.getElementById('nubicacion').disabled = false;
    document.getElementById('nuso').disabled = false;
  
    document.getElementById('nnotario').disabled = false;
    document.getElementById('nescritura').disabled = false;
    document.getElementById('nfechae').disabled = false;*/
    document.getElementById('nrpp').disabled = false;
    /*document.getElementById('nactoj').disabled = false;
    document.getElementById('ncedente').disabled = false;*/
  
    document.getElementById('ncpredial').disabled = false;
   /* document.getElementById('nsuperficie').disabled = false;
    document.getElementById('nvalorte').disabled = false;
    document.getElementById('nsuperficiec').disabled = false;
    document.getElementById('nvalorc').disabled = false;
    document.getElementById('nvalort').disabled = false;
    document.getElementById('nfechavalor').disabled = false;
  
    document.getElementById('nclasificacion').disabled = false;
    document.getElementById('nobservaciones').disabled = false;
    document.getElementById('ntransparencia').disabled = false;
    document.getElementById('ninvasion').disabled = false;
    document.getElementById('ncapitalizable').disabled = false;
    document.getElementById('nfechaaltasac').disabled = false;*/
    }
  



  document.getElementById('btnaceptar').disabled = false;
  document.getElementById('btnmodificar').disabled = true;
  document.getElementById('btncancelar').disabled = false;
  if  (nivel  == 1) {  
  document.getElementById('btneliminar').disabled = true;
  }


};



function limpia_busquedaexpediente_edit(nivel) {

  if  (nivel  == 1) {
    document.getElementById('btnnuevo').disabled = false; 
  }
  document.getElementById('btnBuscar').disabled = false;
  document.getElementById('btnLimpiar').disabled = false;

  document.getElementById('tnactivosel').style.display = 'block'; 
  document.getElementById('nactivosel').style.display = 'block';

  document.getElementById('nmexpediente').value = '';
  document.getElementById('ngid').value = '';
  document.getElementById('nexpediente').value = '';
  document.getElementById('nactivo').value = '';
  document.getElementById('ntipo').value = '';
  document.getElementById('ncolonia').value = '';
  document.getElementById('nubicacion').value = '';
  document.getElementById('nuso').value = '';

  document.getElementById('nnotario').value = '';
  document.getElementById('nescritura').value = '';
  document.getElementById('nfechae').value = '';
  document.getElementById('nrpp').value = '';
  document.getElementById('nactoj').value = '';
  document.getElementById('ncedente').value = '';

  document.getElementById('ncpredial').value = '';
  document.getElementById('nsuperficie').value = '';
  document.getElementById('nvalorte').value = '';
  document.getElementById('nsuperficiec').value = '';
  document.getElementById('nvalorc').value = '';
  document.getElementById('nvalort').value = '';
  document.getElementById('nfechavalor').value = '';

  document.getElementById('nclasificacion').value = '';
  document.getElementById('nobservaciones').value = '';
  document.getElementById('ntransparencia').value = '';
  document.getElementById('ninvasion').value = '';
  document.getElementById('ncapitalizable').value = '';
  document.getElementById('nfechaaltasac').value = '';


  document.getElementById('nmexpediente').disabled = false;
  document.getElementById('ngid').disabled = true;
  document.getElementById('nexpediente').disabled = true;
  document.getElementById('nactivo').disabled = true;
  document.getElementById('ntipo').disabled = true;
  document.getElementById('ncolonia').disabled = true;
  document.getElementById('nubicacion').disabled = true;
  document.getElementById('nuso').disabled = true;

  document.getElementById('nnotario').disabled = true;
  document.getElementById('nescritura').disabled = true;
  document.getElementById('nfechae').disabled = true;
  document.getElementById('nrpp').disabled = true;
  document.getElementById('nactoj').disabled = true;
  document.getElementById('ncedente').disabled = true;

  document.getElementById('ncpredial').disabled = true;
  document.getElementById('nsuperficie').disabled = true;
  document.getElementById('nvalorte').disabled = true;
  document.getElementById('nsuperficiec').disabled = true;
  document.getElementById('nvalorc').disabled = true;
  document.getElementById('nvalort').disabled = true;
  document.getElementById('nfechavalor').disabled = true;

  document.getElementById('nclasificacion').disabled = true;
  document.getElementById('nobservaciones').disabled = true;
  document.getElementById('ntransparencia').disabled = true;
  document.getElementById('ninvasion').disabled = true;
  document.getElementById('ncapitalizable').disabled = true;
  document.getElementById('nfechaaltasac').disabled = true;



  document.getElementById('btnaceptar').disabled = true;
  document.getElementById('btnmodificar').disabled = true;
  document.getElementById('btncancelar').disabled = true;
  if  (nivel  == 1) {  
    document.getElementById('btneliminar').disabled = true;
  }



};



// BOTON ACEPTAR  

function nuevo_expediente_edit() {

  document.getElementById('btnnuevo').disabled = true;
  document.getElementById('btnBuscar').disabled = true;
  document.getElementById('btnLimpiar').disabled = true;
  document.getElementById('btncancelar').disabled = false;

   document.getElementById('nmexpediente').value = '';
  document.getElementById('ngid').value = '';
  document.getElementById('nexpediente').value = '';
  document.getElementById('nactivo').value = '';
  document.getElementById('ntipo').value = '';
  document.getElementById('ncolonia').value = '';
  document.getElementById('nubicacion').value = '';
  document.getElementById('nuso').value = '';

  document.getElementById('nnotario').value = '';
  document.getElementById('nescritura').value = '';
  document.getElementById('nfechae').value = '';
  document.getElementById('nrpp').value = '';
  document.getElementById('nactoj').value = '';
  document.getElementById('ncedente').value = '';

  document.getElementById('ncpredial').value = '';
  document.getElementById('nsuperficie').value = '';
  document.getElementById('nvalorte').value = '';
  document.getElementById('nsuperficiec').value = '';
  document.getElementById('nvalorc').value = '';
  document.getElementById('nvalort').value = '';
  document.getElementById('nfechavalor').value = '';

  document.getElementById('nclasificacion').value = '';
  document.getElementById('nobservaciones').value = '';
  document.getElementById('ntransparencia').value = '';
  document.getElementById('ninvasion').value = '';
  document.getElementById('ncapitalizable').value = '';
  document.getElementById('nfechaaltasac').value = '';


  document.getElementById('nmexpediente').disabled = true;
  document.getElementById('ngid').disabled = true;
  document.getElementById('nexpediente').disabled = false;
  document.getElementById('nactivo').disabled = false;
  document.getElementById('ntipo').disabled = false;
  document.getElementById('ncolonia').disabled = false;
  document.getElementById('nubicacion').disabled = false;
  document.getElementById('nuso').disabled = false;

  document.getElementById('nnotario').disabled = false;
  document.getElementById('nescritura').disabled = false;
  document.getElementById('nfechae').disabled = false;
  document.getElementById('nrpp').disabled = false;
  document.getElementById('nactoj').disabled = false;
  document.getElementById('ncedente').disabled = false;

  document.getElementById('ncpredial').disabled = false;
  document.getElementById('nsuperficie').disabled = false;
  document.getElementById('nvalorte').disabled = false;
  document.getElementById('nsuperficiec').disabled = false;
  document.getElementById('nvalorc').disabled = false;
  document.getElementById('nvalort').disabled = false;
  document.getElementById('nfechavalor').disabled = false;

  document.getElementById('nclasificacion').disabled = false;
  document.getElementById('nobservaciones').disabled = false;
  document.getElementById('ntransparencia').disabled = false;
  document.getElementById('ninvasion').disabled = false;
  document.getElementById('ncapitalizable').disabled = false;
  document.getElementById('nfechaaltasac').disabled = false;




  //   document.getElementById('nexpediente').value = response[i].expediente;

  document.getElementById('btnaceptar').disabled = false;
  document.getElementById('btnmodificar').disabled = true;
  document.getElementById('btncancelar').disabled = false;
  document.getElementById('btneliminar').disabled = true;



};



function acepta_expediente_edit(nivel) {

  if  (nivel  == 1) {  
  document.getElementById('btnnuevo').disabled = true;
  }
  document.getElementById('btnBuscar').disabled = true;
  document.getElementById('btnLimpiar').disabled = true;

  var valida = 0;

  var nmexpediente = document.getElementById('nmexpediente').value.toUpperCase();
  var ngid = document.getElementById('ngid').value;
  var nexpediente = document.getElementById('nexpediente').value.toUpperCase();
  var nactivo = document.getElementById('nactivo').value.toUpperCase();
  var ntipo = document.getElementById('ntipo').value.toUpperCase();
  var ncolonia = document.getElementById('ncolonia').value.toUpperCase();
  var nubicacion1 = document.getElementById('nubicacion').value.toUpperCase();
  var nuso1 = document.getElementById('nuso').value.toUpperCase();

  var nubicacion = nubicacion1.replace(/(\r\n|\n|\r)/gm, "");
  var nuso = nuso1.replace(/(\r\n|\n|\r)/gm, "");


  var nnotario = document.getElementById('nnotario').value.toUpperCase();
  var nescritura = document.getElementById('nescritura').value.toUpperCase();
  var nfechae = document.getElementById('nfechae').value.toUpperCase();
  var nrpp = document.getElementById('nrpp').value.toUpperCase();
  var nactoj = document.getElementById('nactoj').value.toUpperCase();
  var ncedente = document.getElementById('ncedente').value.toUpperCase();

  var ncpredial = document.getElementById('ncpredial').value.toUpperCase();
  var nsuperficie = document.getElementById('nsuperficie').value;
  var nvalorte = document.getElementById('nvalorte').value;
  var nsuperficiec = document.getElementById('nsuperficiec').value;
  var nvalorc = document.getElementById('nvalorc').value;
  var nvalort = document.getElementById('nvalort').value;
  var nfechavalor = document.getElementById('nfechavalor').value;

  var nclasificacion = document.getElementById('nclasificacion').value.toUpperCase();
  var nobservaciones = document.getElementById('nobservaciones').value.toUpperCase();
  var ntransparencia = document.getElementById('ntransparencia').value.toUpperCase();
  var ninvasion = document.getElementById('ninvasion').value.toUpperCase();
  var ncapitalizable = document.getElementById('ncapitalizable').value.toUpperCase();
  var nfechaaltasac = document.getElementById('nfechaaltasac').value.toUpperCase();


  /*var nsuperficie1 = document.getElementById('nsuperficie1').value;
  var nusoact = document.getElementById('nusoact').value.toUpperCase();
  var nccatastral = document.getElementById('nccatastral').value.toUpperCase();*/
  
 


  var opcion = '';
  // Validar que tenga numero de expediente 

  var dnmexpediente = '\"mexpediente\" : \"' + nmexpediente + '\"';
  var dngid = '\"gid\" : \"' + ngid + '\"';
  var dnexpediente = '\"expediente\" : \"' + nexpediente + '\"';
  var dnactivo = '\"activo\" : \"' + nactivo + '\"';
  var dntipo = '\"tipo\" : \"' + ntipo + '\"';
  var dncolonia = '\"colonia\" : \"' + ncolonia + '\"';
  var dnubicacion = '\"ubicacion\" : \"' + nubicacion + '\"';
  var dnuso = '\"uso\" : \"' + nuso + '\"';
 
  var dnnotario = '\"notario\" : \"' + nnotario + '\"';
  var dnescritura = '\"escritura\" : \"' + nescritura + '\"';
  var dnfechae = '\"fechae\" : \"' + nfechae + '\"';
  var dnrpp = '\"rpp\" : \"' + nrpp + '\"';
  var dnactoj = '\"actojuridico\" : \"' + nactoj + '\"';
  var dncedente = '\"cedente\" : \"' + ncedente + '\"';

  var dncpredial = '\"cpredial\" : \"' + ncpredial + '\"';
  var dnsuperficie = '\"superficie\" : \"' + nsuperficie + '\"';
  var dnvalorte = '\"valorte\" : \"' + nvalorte + '\"';
  var dnsuperficiec = '\"superficiec\" : \"' + nsuperficiec + '\"';
  var dnvalorc = '\"valorc\" : \"' + nvalorc + '\"';
  var dnvalort = '\"valort\" : \"' + nvalort + '\"';
  var dnfechavalor = '\"fechavalor\" : \"' + nfechavalor + '\"';

  var dnclasificacion = '\"clasificacion\" : \"' + nclasificacion + '\"';
  var dnobservaciones = '\"observaciones\" : \"' + nobservaciones + '\"';
  var dntransparencia = '\"transparencia\" : \"' + ntransparencia + '\"';
  var dninvasion = '\"invasion\" : \"' + ninvasion + '\"';
  var dncapitalizable = '\"capitalizable\" : \"' + ncapitalizable + '\"';
  var dnfechaaltasac = '\"fechaaltasac\" : \"' + nfechaaltasac + '\"';

  var dnfechabajasac = '\"fechabajasac\" : \"null\"';

  

  /*var dnsuperficie1 = '\"superficie1\" : \"' + nsuperficie1 + '\"';
  var dnusoact = '\"usoact\" : \"' + nusoact + '\"';
  var dnccatastral = '\"ccatastral\" : \"' + nccatastral + '\"';*/
  
    //var dnvigente = '\"vigente\" : \"'+ nvigente + '\"';  
  
  



  //  + ',' + dnactivo + ',' + dntipo  + ',' + dncolonia + ',' + dnubicacion + ',' +  dnclasificacion + ',' +  dnescritura + ',' +  dnnotario  + ',' + dnfechae + ',' + dnsuperficie  + ',' +  dnsuperficie1  + ',' + dnuso   + ',' + dnusoact   + ',' + dnccatastral   + ',' + dncpredial   + ',' + dnvalorte   + ',' + dnvalorc  + ',' + dnvalort    + ',' +  dnobservaciones   + ',' +  dntransparencia    + ',' +   dnvigente

  var datos = '{' + dngid + ',' + dnexpediente + ',' + dnmexpediente + ',' + dnactivo + ',' + dntipo + ',' + dncolonia + ',' + dnubicacion + ',' + dnclasificacion + ',' + dnescritura + ',' + dnrpp + ',' + dnnotario + ',' + dncedente + ',' + dnfechae + ',' + dnsuperficie + ',' +  dnuso + ',' + dncpredial + ',' + dnvalorte + ',' + dnvalorc + ',' + dnvalort + ',' + dnobservaciones + ',' + dntransparencia + ',' + dninvasion + ',' + dncapitalizable + ',' + dnfechaaltasac + ',' + dnfechabajasac + ',' + dnactoj + ',' +  dnsuperficiec + ',' + dnfechavalor +'}';

  //alert (nfechaaltasac);
  //return;

  //if (ngid == ''  && nexpediente == '' ) {
  //  opcion  = 'Debe Introducir número de expediente';
  //}else if (ngid == ''  && (nmexpediente == '' && nexpediente != '' ) ) {
  // Validar que no exista en el inventario
  //opcion  = 'INSERT';

  var existe = "";
  var accionvalida = "";

  $.ajax({
    type: "POST",
    url: "../bd/valida_actualiza_inventario.php/",
    data: JSON.parse(datos),
    async: false,
    success: function (result) {
      var data = JSON.parse(result);
      console.log(data);

      existe = data.mensaje;
    }
  });





  /*
  0  = Tiene que ingresar número de expediente
  1  = Ya existe el expediente
  -1 = Número Expediente Validado 
  */



  // if (data.validadat >= 1)
  // {
  // alert(data.mensaje);     //  alert(data.existe);  

  //alert (existe);
  //alert (ngid);


  if (existe == 0) { // if (data.mensaje ==0 ){
    $mensaje = 'Tiene que ingresar la Clave Patrimonial';
    Swal.fire({ title: 'Aviso', html: $mensaje, confirmButtonColor: '#a19d97', confirmButtonText: 'ACEPTAR', });
  } else if (existe == 1) {  //}else if (data.mensaje == 1 ){  
    $mensaje = 'Ya existe el expediente: ' + nexpediente + ' <br><br> Verifique los datos. <br><br> Si es correcta la clave patrimonial, tendrá que realizar una modificación de datos.';
    Swal.fire({ title: 'Aviso', html: $mensaje, confirmButtonColor: '#a19d97', confirmButtonText: 'ACEPTAR' });
  }
  else if (existe == -1) {    //else if  (data.mensaje == -1 ){    

    $mensaje = '¿Deseas agregar la Clave Patrimonial: ' + nexpediente + ' ?';
    // Swal.fire({  title: 'Aviso', html: $mensaje, confirmButtonColor: '#a19d97', confirmButtonText: 'ACEPTAR', });
    Swal.fire({
      title: 'Confirmar',
      html: $mensaje,
      showDenyButton: true,
      showCancelButton: true,
      cancelButtonText: 'CANCELAR', //confirmButtonText: 'Yes',
      confirmButtonColor: '#a19d97',
      confirmButtonText: 'ACEPTAR', //confirmButtonText: 'Yes',
      confirmButtonColor: '#a19d97',
      /*customClass: {
      actions: 'my-actions',
      cancelButton: 'order-1 right-gap',
      confirmButton: 'order-2',
      }*/
    }).then((result) => {
      if (result.dismiss !== 'cancel') {
        var dnaccion = '\"accion\" : \"insert\"';
        //var datos2 = '{'+ dngid + ',' + dnexpediente + ',' +  dnmexpediente   + ',' + dnactivo + ',' + dntipo  + ',' + dncolonia + ',' + dnubicacion + ',' +  dnclasificacion + ',' +  dnescritura + ',' +  dnnotario  + ',' +  dncedente  + ',' + dnfechae + ',' + dnsuperficie  + ',' +  dnsuperficie1  + ',' + dnuso   + ',' + dnusoact   + ',' + dnccatastral   + ',' + dncpredial   + ',' + dnvalorte   + ',' + dnvalorc + ',' + dnvalort    + ',' +  dnobservaciones   + ',' +  dntransparencia + ',' +   dnvigente  + ',' +   dnaccion  +'}';
        var datos2 = '{' + dngid + ',' + dnexpediente + ',' + dnmexpediente + ',' + dnactivo + ',' + dntipo + ',' + dncolonia + ',' + dnubicacion + ',' + dnclasificacion + ',' + dnescritura + ',' + dnrpp + ',' + dnnotario + ',' + dncedente + ',' + dnfechae + ',' + dnsuperficie + ',' + dnuso + ',' + dncpredial + ',' + dnvalorte + ',' + dnvalorc + ',' + dnvalort + ',' + dnobservaciones + ',' + dntransparencia + ',' + dnaccion + ',' + dninvasion + ',' + dncapitalizable + ',' + dnfechaaltasac + ',' + dnfechabajasac + ',' + dnactoj + ',' +  dnsuperficiec + ',' + dnfechavalor + '}';

        //alert (datos2);
        $.ajax({
          type: "POST",
          url: "../bd/nuevo_inventario.php/",
          data: JSON.parse(datos2),
          //dataType: 'JSON',
          async: false,
          success: function (result) {
            var data2 = JSON.parse(result);
            //console.log('HOLI');
            console.log(data2);
            console.log(data2.mensaje2);
            accionvalida = data2.mensaje2;
            //otroexiste = data.mensaje;
            // var  mensajeaccionf = 'ALGO ALGO ALGO';//data2.mensaje2;
          }

        });
        //alert (datos2);
        // $(document).ready(function(){
        // });

        //var mensajeaccion = funcinsert(datos2);
        //funcinsert(datos2);
        ///alert (mensajeaccion);
        if (accionvalida == '1') {
          Swal.fire('Clave Patrimonial guardada con exito. ', '', 'success');
          //limpia_busquedaexpediente_edit();
          //alert (nexpediente);
          var expn = nexpediente;
          limpia_busquedaexpediente_edit();
          location.reload();
          //document.getElementById('nmexpediente').value = expn;
          //busquedaexpediente_edit();
        }
        else {
          Swal.fire('No se guardo la Clave Patrimonial, verificar datos ', '', 'error');
        }
      } else if (result.dismiss == 'cancel') {
        Swal.fire('No se guardaron los datos', '', 'warning')
      }
    });
  } else if (existe == 2) {    //else if  (data.mensaje == -1 ){      // UPDATE  =  2  

    $mensaje = '¿ Deseas actualizar la Clave Patrimonial: ' + nexpediente + ' ?';
    // Swal.fire({  title: 'Aviso', html: $mensaje, confirmButtonColor: '#a19d97', confirmButtonText: 'ACEPTAR', });
    Swal.fire({
      title: 'Confirmar',
      html: $mensaje,
      showDenyButton: true,
      showCancelButton: true,
      cancelButtonText: 'CANCELAR', //confirmButtonText: 'Yes',
      confirmButtonColor: '#a19d97',
      confirmButtonText: 'ACEPTAR', //confirmButtonText: 'Yes',
      confirmButtonColor: '#a19d97',
      /*customClass: {
      actions: 'my-actions',
      cancelButton: 'order-1 right-gap',
      confirmButton: 'order-2',
      }*/
    }).then((result) => {
      if (result.dismiss !== 'cancel') {
        var dnaccion = '\"accion\" : \"update\"';
        //var datos2 = '{'+ dngid + ',' + dnexpediente + ',' +  dnmexpediente   + ',' + dnactivo + ',' + dntipo  + ',' + dncolonia + ',' + dnubicacion + ',' +  dnclasificacion + ',' +  dnescritura + ',' +  dnnotario  + ',' +  dncedente  + ',' + dnfechae + ',' + dnsuperficie  + ',' +  dnsuperficie1  + ',' + dnuso   + ',' + dnusoact   + ',' + dnccatastral   + ',' + dncpredial   + ',' + dnvalorte   + ',' + dnvalorc + ',' + dnvalort    + ',' +  dnobservaciones   + ',' +  dntransparencia + ',' +   dnvigente  + ',' +   dnaccion  +'}';
        var datos2 = '{' + dngid + ',' + dnexpediente + ',' + dnmexpediente + ',' + dnactivo + ',' + dntipo + ',' + dncolonia + ',' + dnubicacion + ',' + dnclasificacion + ',' + dnescritura + ',' + dnrpp + ',' + dnnotario + ',' + dncedente + ',' + dnfechae + ',' + dnsuperficie + ',' + dnuso + ','  +  dncpredial + ',' + dnvalorte + ',' + dnvalorc + ',' + dnvalort + ',' + dnobservaciones + ',' + dntransparencia + ',' + dnaccion + ',' + dninvasion + ',' + dncapitalizable + ',' + dnfechaaltasac + ',' + dnfechabajasac + ',' + dnactoj + ',' +  dnsuperficiec + ',' + dnfechavalor + '}';

        //alert (datos2);
        $.ajax({
          type: "POST",
          url: "../bd/nuevo_inventario.php/",
          data: JSON.parse(datos2),
          //dataType: 'JSON',
          async: false,
          success: function (result) {
            var data2 = JSON.parse(result);
            //console.log('HOLI');
            console.log(data2);
            console.log(data2.mensaje2);
            accionvalida = data2.mensaje2;
            //otroexiste = data.mensaje;
            // var  mensajeaccionf = 'ALGO ALGO ALGO';//data2.mensaje2;
          }

        });
        //alert (datos2);
        // $(document).ready(function(){
        // });

        //var mensajeaccion = funcinsert(datos2);
        //funcinsert(datos2);
        ///alert (mensajeaccion);
        if (accionvalida == '1') {
          Swal.fire('La Clave patrimonial se actualizado con exito. ', '', 'success');
          //limpia_busquedaexpediente_edit();
          //alert (nexpediente);
          var expn = nexpediente;
          limpia_busquedaexpediente_edit();
          document.getElementById('nmexpediente').value = expn;
          busquedaexpediente_edit();
        }
        else {
          Swal.fire('No se guardo la clave, verificar datos ', '', 'error');
        }
      } else if (result.dismiss == 'cancel') {
        Swal.fire('No se guardaron los datos', '', 'warning')
      }
    });
  }










  // Hasta aqui

  document.getElementById('btnaceptar').disabled = false;
  document.getElementById('btnmodificar').disabled = true;
  document.getElementById('btncancelar').disabled = false;
  if  (nivel  == 1) {  
    document.getElementById('btneliminar').disabled = true;
  }

};



// ELIMIMAR EXPEDIENTE


function eliminar_expediente_edit() {


  var nmexpediente = document.getElementById('nmexpediente').value.toUpperCase();
  var ngid = document.getElementById('ngid').value;
  var nexpediente = document.getElementById('nexpediente').value.toUpperCase();
  var nactivo = document.getElementById('nactivo').value.toUpperCase();
  /*
  var ntipo = document.getElementById('ntipo').value.toUpperCase();
  var ncolonia = document.getElementById('ncolonia').value.toUpperCase();
  var nubicacion = document.getElementById('nubicacion').value.toUpperCase();
  var nclasificacion = document.getElementById('nclasificacion').value.toUpperCase();
  var nescritura = document.getElementById('nescritura').value.toUpperCase();
  var nrpp = document.getElementById('nrpp').value.toUpperCase();
  var nnotario = document.getElementById('nnotario').value.toUpperCase();
  var nfechae = document.getElementById('nfechae').value.toUpperCase();
  var ncedente = document.getElementById('ncedente').value.toUpperCase();
  var nsuperficie = document.getElementById('nsuperficie').value;
  var nsuperficie1 = document.getElementById('nsuperficie1').value;
  var nuso = document.getElementById('nuso').value.toUpperCase();
  var nusoact = document.getElementById('nusoact').value.toUpperCase();
  var nccatastral = document.getElementById('nccatastral').value.toUpperCase();
  var ncpredial = document.getElementById('ncpredial').value;
  var nvalorte = document.getElementById('nvalorte').value;
  var nvalorc = document.getElementById('nvalorc').value;
  var nvalort = document.getElementById('nvalort').value;
  var nobservaciones = document.getElementById('nobservaciones').value.toUpperCase();
  var ntransparencia = document.getElementById('ntransparencia').value.toUpperCase();
  //var nvigente = document.getElementById('nvigente').value.toUpperCase() ; 

  var ncapitalizable = document.getElementById('ncapitalizable').value.toUpperCase();
  var ninvasion = document.getElementById('ninvasion').value.toUpperCase();
  var nfechaaltasac = document.getElementById('nfechaaltasac').value.toUpperCase();
  // var nfechabajasac = document.getElementById('nfechabajasac').value.toUpperCase() ; 
*/




  var opcion = '';
  // Validar que tenga numero de expediente 

  var dngid = '\"gid\" : \"' + ngid + '\"';
  var dnexpediente = '\"cpatrimonial\" : \"' + nexpediente + '\"';
  var dnmexpediente = '\"mexpediente\" : \"' + nmexpediente + '\"';
  var dnactivo = '\"activo\" : \"' + nactivo + '\"';
  /*
  var dntipo = '\"tipo\" : \"' + ntipo + '\"';
  var dncolonia = '\"colonia\" : \"' + ncolonia + '\"';
  var dnubicacion = '\"ubicacion\" : \"' + nubicacion + '\"';
  var dnclasificacion = '\"clasificacion\" : \"' + nclasificacion + '\"';
  var dnescritura = '\"escritura\" : \"' + nescritura + '\"';
  var dnrpp = '\"rpp\" : \"' + nrpp + '\"';
  var dnnotario = '\"notario\" : \"' + nnotario + '\"';
  var dncedente = '\"cedente\" : \"' + ncedente + '\"';
  var dnfechae = '\"fechae\" : \"' + nfechae + '\"';
  var dnsuperficie = '\"superficie\" : \"' + nsuperficie + '\"';
  var dnsuperficie1 = '\"superficie1\" : \"' + nsuperficie1 + '\"';
  var dnuso = '\"uso\" : \"' + nuso + '\"';
  var dnusoact = '\"usoact\" : \"' + nusoact + '\"';
  var dnccatastral = '\"ccatastral\" : \"' + nccatastral + '\"';
  var dncpredial = '\"cpredial\" : \"' + ncpredial + '\"';
  var dnvalorte = '\"valorte\" : \"' + nvalorte + '\"';
  var dnvalorc = '\"valorc\" : \"' + nvalorc + '\"';
  var dnvalort = '\"valort\" : \"' + nvalort + '\"';
  var dnobservaciones = '\"observaciones\" : \"' + nobservaciones + '\"';
  var dntransparencia = '\"transparencia\" : \"' + ntransparencia + '\"';
  //var dnvigente = '\"vigente\" : \"'+ nvigente + '\"';

  var dncapitalizable = '\"capitalizable\" : \"' + ncapitalizable + '\"';
  var dninvasion = '\"invasion\" : \"' + ninvasion + '\"';
  var dnfechaaltasac = '\"fechaaltasac\" : \"' + nfechaaltasac + '\"';
*/
  var dnaccion = '\"accion\" : \"delete\"';

  /*
  0  = Tiene que ingresar número de expediente
  1  = Ya existe el expediente
  -1 = Número Expediente Validado 
  */


  $mensaje = '<input  id="datetimepicker" autocomplete="off" class="datepicker " placeholder="" />' + '¿Deseas eliminar la clave patrimonial: ' + nexpediente + ' ?';


  


  var confirma = '';

  Swal.fire({
    title: '¿Deseas eliminar la clave patrimonial:  <br>' + nexpediente + ' ?',
    type: 'question',
    html: '<p> Seleccionar fecha de baja SAC </p>  <input id="datepicker" type="date"   >',  //   readonly class="swal2-input"
    customClass: 'swal2-overflow',
    showDenyButton: true,
    showCancelButton: true,
    cancelButtonText: 'CANCELAR', //confirmButtonText: 'Yes',
    confirmButtonColor: '#a19d97',
    confirmButtonText: 'ELIMINAR', //confirmButtonText: 'Yes',
    confirmButtonColor: '#a19d97',
    /*customClass: {
      actions: 'my-actions',
      cancelButton: 'order-1 right-gap',
      confirmButton: 'order-2',
 
    }*/
    /*onOpen: function () {
      $('#datepicker').datepicker({
        closeText: 'Cerrar',
        prevText: '<Ant',
        nextText: 'Sig>',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
        dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''

      });
    }*/
  }).then((result) => {
    confirma = '\'' + datepicker.value + '\'';
    fechas = datepicker.value;
    // alert ('\'' + datepicker.value +'\'');
    //alert (confirma);

    if (result.dismiss !== 'cancel') {    // Aceptar
      if (confirma === '\'\'') {
        Swal.fire('Debe seleccionar fecha de baja SAC', '', 'warning');
        return;
      }
      else {
        Swal.fire({
          title: 'Confirmar',
          html: '¿Esta Seguro?',
          showDenyButton: true,
          showCancelButton: true,
          cancelButtonText: 'CANCELAR', //confirmButtonText: 'Yes',
          confirmButtonColor: '#a19d97',
          confirmButtonText: 'ACEPTAR', //confirmButtonText: 'Yes',
          confirmButtonColor: '#a19d97',
          /*customClass: {
            actions: 'my-actions',
            cancelButton: 'order-1 right-gap',
            confirmButton: 'order-2',
    
          }*/
        }).then((result) => {
          if (result.dismiss !== 'cancel') {

            //alert (confirma);
            //return;

            //Ejecutar script
            var dnfechabajasac = '\"fechabajasac\" : \"' + fechas + '\"';
            //var datos2 = '{' + dngid + ',' + dnexpediente + ',' + dnmexpediente + ',' + dnactivo + ',' + dntipo + ',' + dncolonia + ',' + dnubicacion + ',' + dnclasificacion + ',' + dnescritura + ',' + dnrpp + ',' + dnnotario + ',' + dncedente + ',' + dnfechae + ',' + dnsuperficie + ',' + dnsuperficie1 + ',' + dnuso + ',' + dnusoact + ',' + dnccatastral + ',' + dncpredial + ',' + dnvalorte + ',' + dnvalorc + ',' + dnvalort + ',' + dnobservaciones + ',' + dntransparencia + ',' + dnaccion + ',' + dninvasion + ',' + dncapitalizable + ',' + dnfechaaltasac + ',' + dnfechabajasac + '}';
            var datos2 = '{' + dngid + ',' + dnexpediente + ',' + dnmexpediente + ',' + dnactivo +  ',' + dnaccion +  ',' +  dnfechabajasac + '}';

            $.ajax({
              type: "POST",
              url: "../bd/nuevo_inventario.php/",
              data: JSON.parse(datos2),
              //dataType: 'JSON',
              async: false,
              success: function (result) {
                var data2 = JSON.parse(result);
                //console.log('HOLI');
                console.log(data2);
                console.log(data2.mensaje2);
                accionvalida = data2.mensaje2;
                //otroexiste = data.mensaje;
                // var  mensajeaccionf = 'ALGO ALGO ALGO';//data2.mensaje2;

              }

            });

            if (accionvalida == '1') {
              Swal.fire('Expediente ' + nexpediente + ' fué eliminado del inventario. ', '', 'success');
              limpia_busquedaexpediente_edit();
              return;
            }
            else {
              Swal.fire('Error al eliminar el expediente: ' + nexpediente, '', 'success');
              return;
            }


          }
          else {
            Swal.fire('No se eliminó el registro', '', 'cancel');
            return;
          }
          // alert (datepicker.value );
        });

      }

    }

  });


}



//$(function() { 



  //$( "#nfechavalor" ).datepicker({dateFormat: 'yy'});

  /*
 $('#nfechavalorx').datepicker( {
    yearRange: "c-100:c",
    changeMonth: false,
    changeYear: true,
    showButtonPanel: true,
    closeText:'Seleccionar año',
    currentText: 'This year',
    onClose: function(dateText, inst) {
      var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
      $(this).val($.datepicker.formatDate('yy', new Date(year, 1, 1)));
    }
  }).focus(function () {
    $(".ui-datepicker-month").hide();
    $(".ui-datepicker-calendar").hide();
    $(".ui-datepicker-current").hide();
    $(".ui-datepicker-prev").hide();
    $(".ui-datepicker-next").hide();
    $("#ui-datepicker-div").position({
      my: "left top",
      at: "left bottom",
      of: $(this)
    });
  }).attr("readonly", false);
*/


  /*$('#nactivosel').change(function() {
    var val = $("#nactivosel option:selected").text();
    alert(val);






});*/



//});












