
// Funciones para controlar controles para la edición de la tabla de inventario


function busquedaexpediente_edit() {
  var lyr;
  
     //TablaConsulta.innerHTML=TablaConsulta.oldHTML;    
     var inputExpediente =  document.getElementById('nmexpediente').value; 
     var inputExpediente = inputExpediente.toUpperCase() ; 
     
     if (inputExpediente == '' ) 
     {
     //  alert  ('Introducir número de expediente');
      Swal.fire('Introducir número de expediente. ', '', 'warning'); 
       return;
     }
     var tr_str = '';
     
     $(document).ready(function(){
     $.ajax({
       url: '../bd/query_noactivo_expediente_tinventario.php?buscar='+inputExpediente,
       type: 'POST',
       dataType: 'JSON',
       success: function(response){
       var len = response.length;
     

   
      if (len ==0 ) 
     {
       //alert  ('No existe el expediente en el inventario');
       Swal.fire({
        title: 'Aviso',
        //text: 'No existe el expediente: '+ inputExpediente + ' en el inventario', //data.mensaje,
        html: 'No existe el expediente o número de activo: <br><br>' +  inputExpediente +  '<br><br> en el inventario',
        confirmButtonColor: '#a19d97',     // edb04a
        confirmButtonText: 'ACEPTAR',
      });
      limpia_busquedaexpediente_edit();
       return;
     }
 
    
 
      // $(".leaflet-marker-icon").remove(); $(".leaflet-popup").remove();
     //  $(".leaflet-marker-shadow").remove(); $(".leaflet-popup").remove();    
       for(var i=0; i<len; i++){

   /*     var gid = response[i].gid;
           var expediente = response[i].expediente;
           var noactivo = response[i].noactivo;
           var tipo = response[i].tipo;
           var colonia = response[i].colonia;
           var ubicacion = response[i].ubicacion;
           var clasificac = response[i].clasificac;
           var numeroesc = response[i].numeroesc;
           var notario = response[i].notario;
           var cedente = response[i].cedente;
           var fechaesc = response[i].fechaesc;
           var superficie = response[i].superficie;
           var superfic_1 = response[i].superfic_1;
           var usoreport = response[i].usoreport;
           var actualizac = response[i].actualizac;
           var clavecata = response[i].clavecata;
           var cuentacat = response[i].cuentacat;
           var valorte = response[i].valorte;
           var valorcons = response[i].valorcons;
           var valortota = response[i].valortota;
           var fechadea = response[i].fechadea;
           var transparen = response[i].transparen;
           var clasific_1 = response[i].clasific_1;
           var invasion = response[i].invasion;
           //var fechabaja = response[i].fechabaja;
           var estatus = response[i].estatus;
           //var vigente = response[i].vigente;
           var fecham = response[i].fecham;
           var fechamod = response[i].fechamod;
           var observaciones = response[i].observaciones;
      */  
          document.getElementById('ngid').value = response[i].gid;
          document.getElementById('nexpediente').value = response[i].expediente;
          document.getElementById('nactivo').value = response[i].noactivo;
          document.getElementById('nrpp').value = response[i].rpp;
          document.getElementById('ncpredial').value = response[i].cuentacat;
          
          

        document.getElementById('btnaceptar').disabled = true;
        document.getElementById('btnmodificar').disabled = false;
        document.getElementById('btncancelar').disabled = true;
       // document.getElementById('btneliminar').disabled = false;

 

          // $("#tablaDom").append(tr_str);    
        //   L.marker([latitud, longitud],{icon:iconbus}).addTo(map);
 
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
       //map.setView([20.72767, -103.39045], 12);  
       }
     })
     })
  
 };


 function modificacion_expediente_edit() {


  document.getElementById('btnBuscar').disabled = true; 
  document.getElementById('btnLimpiar').disabled = true; 
  
  document.getElementById('nmexpediente').disabled = true;
  document.getElementById('ngid').disabled = true;
  document.getElementById('nexpediente').disabled = true;
  document.getElementById('nactivo').disabled = true;
  document.getElementById('nrpp').disabled = false;
  document.getElementById('ncpredial').disabled = false;

  document.getElementById('btnaceptar').disabled = false;
  document.getElementById('btnmodificar').disabled = true;
  document.getElementById('btncancelar').disabled = false;


 
  
 };



 function limpia_busquedaexpediente_edit() {

  document.getElementById('btnBuscar').disabled = false; 
  document.getElementById('btnLimpiar').disabled = false;   
  
  document.getElementById('nmexpediente').value = '';  
  document.getElementById('ngid').value = ''; 
  document.getElementById('nexpediente').value = ''; 
  document.getElementById('nactivo').value = ''; 
  document.getElementById('nrpp').value = ''; 
  document.getElementById('ncpredial').value = ''; 

  document.getElementById('nmexpediente').disabled = false; 
  document.getElementById('ngid').disabled = true;
  document.getElementById('nexpediente').disabled = true;''; 
  document.getElementById('nactivo').disabled = true;
  document.getElementById('nrpp').disabled = true;
  document.getElementById('ncpredial').disabled = true;

  document.getElementById('btnaceptar').disabled = true;
  document.getElementById('btnmodificar').disabled = true;
  document.getElementById('btncancelar').disabled = true;
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
  document.getElementById('nclasificacion').value = ''; 
  document.getElementById('nescritura').value = ''; 
  document.getElementById('nrpp').value = ''; 
  document.getElementById('nnotario').value = ''; 
  document.getElementById('ncedente').value = ''; 
  document.getElementById('nfechae').value = ''; 
  document.getElementById('nsuperficie').value = ''; 
  document.getElementById('nsuperficie1').value = ''; 
  document.getElementById('nuso').value = ''; 
  document.getElementById('nusoact').value = ''; 
  document.getElementById('nccatastral').value = ''; 
  document.getElementById('ncpredial').value = ''; 
  document.getElementById('nvalorte').value = ''; 
  document.getElementById('nvalorc').value = ''; 
  document.getElementById('nvalort').value = ''; 
  document.getElementById('nobservaciones').value = ''; 
  document.getElementById('ntransparencia').value = ''; 
 // document.getElementById('nvigente').value = ''; 
  
  document.getElementById('ninvasion').value = '';  
  document.getElementById('nfechaaltasac').value = ''; 
 // document.getElementById('nfechabajasac').value = ''; 


  document.getElementById('nmexpediente').disabled = true;
  document.getElementById('ngid').disabled = true;
  document.getElementById('nexpediente').disabled = false;
  document.getElementById('nactivo').disabled = false;
  document.getElementById('ntipo').disabled = false;
  document.getElementById('ncolonia').disabled = false;
  document.getElementById('nubicacion').disabled = false;
  document.getElementById('nclasificacion').disabled = false;
  document.getElementById('nescritura').disabled = false;
  document.getElementById('nrpp').disabled = false;
  document.getElementById('nnotario').disabled = false;
  document.getElementById('ncedente').disabled = false;
  document.getElementById('nfechae').disabled = false;
  document.getElementById('nsuperficie').disabled = false;
  document.getElementById('nsuperficie1').disabled = false;
  document.getElementById('nuso').disabled = false;
  document.getElementById('nusoact').disabled = false;
  document.getElementById('nccatastral').disabled = false;
  document.getElementById('ncpredial').disabled = false;
  document.getElementById('nvalorte').disabled = false;
  document.getElementById('nvalorc').disabled = false;
  document.getElementById('nvalort').disabled = false;
  document.getElementById('nobservaciones').disabled = false;
  document.getElementById('ntransparencia').disabled = false;
  //document.getElementById('nvigente').disabled = false;

  document.getElementById('ninvasion').disabled = false;
  document.getElementById('nfechaaltasac').disabled = false;
 // document.getElementById('nfechabajasac').disabled = true; 



  //   document.getElementById('nexpediente').value = response[i].expediente;

  document.getElementById('btnaceptar').disabled = false;
  document.getElementById('btnmodificar').disabled = true;
  document.getElementById('btncancelar').disabled = false;
  document.getElementById('btneliminar').disabled = true;

 
  
 };

 

 function acepta_expediente_edit() {

 
  document.getElementById('btnBuscar').disabled = true; 
  document.getElementById('btnLimpiar').disabled = true; 
   
  var valida = 0;

  var nmexpediente =   document.getElementById('nmexpediente').value.toUpperCase();  
  var ngid = document.getElementById('ngid').value; 
  var nexpediente = document.getElementById('nexpediente').value.toUpperCase() ; 
  var nactivo = document.getElementById('nactivo').value.toUpperCase(); 
  var nrpp = document.getElementById('nrpp').value.toUpperCase() ; 
  var ncuentap = document.getElementById('ncpredial').value.toUpperCase() ; 
  
  // VALIDA qEU NO ESTEN VACION Y CUNTINUAR.

  if (nrpp == '' || ncuentap == '') {

    Swal.fire('Debe introducir el valor del RPP y cuenta predial. ', '', 'warning'); 
    return;
  }
  
  
  var opcion = '';
// Validar que tenga numero de expediente 

  var dngid = '\"gid\" : \"'+ ngid + '\"';
  var dnexpediente = '\"expediente\" : \"'+ nexpediente + '\"';
  var dnmexpediente = '\"mexpediente\" : \"'+ nmexpediente + '\"';
  var dnactivo = '\"activo\" : \"'+ nactivo + '\"';
  var dnrpp = '\"rpp\" : \"'+ nrpp + '\"';
  var dncuentap = '\"cuentacat\" : \"'+ ncuentap + '\"';
  
  var datos2 = '{'+ dngid + ',' + dnexpediente + ',' +  dnmexpediente   + ',' + dnactivo + ',' +dnrpp + ',' + dncuentap+ '}';                                                                                





    
   $mensaje =  '¿ Deseas Actualizar el RPP del expediente: ' + nexpediente + ' ?';
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
     // var datos2 = '{'+ dngid + ',' + dnexpediente + ',' +  dnmexpediente   + ',' + dnactivo + ',' + dntipo  + ',' + dncolonia + ',' + dnubicacion + ',' +  dnclasificacion + ',' +  dnescritura +  ',' +  dnrpp +  ',' + dnnotario  + ',' +  dncedente  + ',' + dnfechae + ',' + dnsuperficie  + ',' +  dnsuperficie1  + ',' + dnuso   + ',' + dnusoact   + ',' + dnccatastral   + ',' + dncpredial   + ',' + dnvalorte   + ',' + dnvalorc + ',' + dnvalort    + ',' +  dnobservaciones   + ',' +  dntransparencia + ',' +   dnaccion + ',' +  dninvasion  + ',' +   dnfechaaltasac + ',' +   dnfechabajasac +  '}'; 
      
      //alert (datos2);
      $.ajax({              
        type: "POST",
        url: "../bd/actualiza_rpp.php/",
        data:JSON.parse(datos2),
        //dataType: 'JSON',
        async:false,
        success: function(result){
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
        Swal.fire('RPP del expediente actualizado con exito. ', '', 'success'); 
        //limpia_busquedaexpediente_edit();
        //alert (nexpediente);
        var expn = nexpediente; 
        limpia_busquedaexpediente_edit();
        document.getElementById('nmexpediente').value = expn; 
        busquedaexpediente_edit();
      }
      else{
        Swal.fire('No se guardaron la actualización, verificar datos ', '', 'error');
      }  
      } else if (result.dismiss == 'cancel') {
        Swal.fire('No se guardaron los datos', '', 'warning')
      }
    }) ;
  



     
   





// Hasta aqui

  document.getElementById('btnaceptar').disabled = false;
  document.getElementById('btnmodificar').disabled = true;
  document.getElementById('btncancelar').disabled = false;


};



// ELIMIMAR EXPEDIENTE

  
function eliminar_expediente_edit() {

  
  var nmexpediente =   document.getElementById('nmexpediente').value.toUpperCase();  
  var ngid = document.getElementById('ngid').value; 
  var nexpediente = document.getElementById('nexpediente').value.toUpperCase() ; 
  var nactivo = document.getElementById('nactivo').value.toUpperCase(); 
  var ntipo = document.getElementById('ntipo').value.toUpperCase() ; 
  var ncolonia = document.getElementById('ncolonia').value.toUpperCase() ; 
  var nubicacion = document.getElementById('nubicacion').value.toUpperCase() ; 
  var nclasificacion = document.getElementById('nclasificacion').value.toUpperCase(); 
  var nescritura = document.getElementById('nescritura').value.toUpperCase() ; 
  var nrpp = document.getElementById('nrpp').value.toUpperCase() ; 
  var nnotario = document.getElementById('nnotario').value.toUpperCase() ; 
  var nfechae = document.getElementById('nfechae').value.toUpperCase() ; 
  var ncedente =  document.getElementById('ncedente').value.toUpperCase() ; 
  var nsuperficie = document.getElementById('nsuperficie').value ; 
  var nsuperficie1 = document.getElementById('nsuperficie1').value; 
  var nuso = document.getElementById('nuso').value.toUpperCase() ; 
  var nusoact = document.getElementById('nusoact').value.toUpperCase(); 
  var nccatastral = document.getElementById('nccatastral').value.toUpperCase() ; 
  var ncpredial = document.getElementById('ncpredial').value; 
  var nvalorte = document.getElementById('nvalorte').value ; 
  var nvalorc = document.getElementById('nvalorc').value ; 
  var nvalort = document.getElementById('nvalort').value ; 
  var nobservaciones = document.getElementById('nobservaciones').value.toUpperCase() ; 
  var ntransparencia = document.getElementById('ntransparencia').value.toUpperCase(); 
  //var nvigente = document.getElementById('nvigente').value.toUpperCase() ; 
  
  var ninvasion = document.getElementById('ninvasion').value.toUpperCase() ; 
  var nfechaaltasac = document.getElementById('nfechaaltasac').value.toUpperCase() ; 
 // var nfechabajasac = document.getElementById('nfechabajasac').value.toUpperCase() ; 





  var opcion = '';
// Validar que tenga numero de expediente 

  var dngid = '\"gid\" : \"'+ ngid + '\"';
  var dnexpediente = '\"expediente\" : \"'+ nexpediente + '\"';
  var dnmexpediente = '\"mexpediente\" : \"'+ nmexpediente + '\"';

  var dnactivo = '\"activo\" : \"'+ nactivo + '\"';
  var dntipo = '\"tipo\" : \"'+ ntipo + '\"';
  var dncolonia = '\"colonia\" : \"'+ ncolonia + '\"';
  var dnubicacion = '\"ubicacion\" : \"'+ nubicacion + '\"';
  var dnclasificacion = '\"clasificacion\" : \"'+ nclasificacion + '\"';
  var dnescritura = '\"escritura\" : \"'+ nescritura + '\"';
  var dnrpp = '\"rpp\" : \"'+ nrpp + '\"';
  var dnnotario = '\"notario\" : \"'+ nnotario + '\"';
  var dncedente = '\"cedente\" : \"'+ ncedente + '\"';
  var dnfechae = '\"fechae\" : \"'+ nfechae + '\"';
  var dnsuperficie = '\"superficie\" : \"'+ nsuperficie + '\"';
  var dnsuperficie1 = '\"superficie1\" : \"'+ nsuperficie1 + '\"';
  var dnuso = '\"uso\" : \"'+ nuso + '\"';
  var dnusoact = '\"usoact\" : \"'+ nusoact + '\"';
  var dnccatastral = '\"ccatastral\" : \"'+ nccatastral + '\"';
  var dncpredial = '\"cpredial\" : \"'+ ncpredial + '\"';
  var dnvalorte = '\"valorte\" : \"'+ nvalorte + '\"';
  var dnvalorc = '\"valorc\" : \"'+ nvalorc + '\"';
  var dnvalort = '\"valort\" : \"'+ nvalort + '\"';
  var dnobservaciones = '\"observaciones\" : \"'+ nobservaciones + '\"';
  var dntransparencia = '\"transparencia\" : \"'+ ntransparencia + '\"';
  //var dnvigente = '\"vigente\" : \"'+ nvigente + '\"';

  var dninvasion = '\"invasion\" : \"'+ ninvasion + '\"';
  var dnfechaaltasac = '\"fechaaltasac\" : \"'+ nfechaaltasac + '\"';

   var dnaccion = '\"accion\" : \"delete\"';
          
/*
0  = Tiene que ingresar número de expediente
1  = Ya existe el expediente
-1 = Número Expediente Validado 
*/


      $mensaje =  '<input  id="datetimepicker" autocomplete="off" class="datepicker " placeholder="" />' + '¿Deseas eliminar el expediente: ' + nexpediente + ' ?';
    

  var confirma = '';

      Swal.fire({
        title:'¿Deseas eliminar el expediente: ' + nexpediente + ' ?',
        type: 'question',
        html: '<p> Seleccionar fecha de baja SAC </p>  <input id="datepicker" readonly class="swal2-input">',
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
        onOpen:function(){
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
          }  
      }).then((result) => {
        confirma = '\'' + datepicker.value +'\'';
        fechas =  datepicker.value;
         // alert ('\'' + datepicker.value +'\'');
         //alert (confirma);

        if (result.dismiss !== 'cancel') {    // Aceptar
          if (confirma ==='\'\'') { 
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
                var dnfechabajasac = '\"fechabajasac\" : \"'+ fechas +'\"';
                var datos2 = '{'+ dngid + ',' + dnexpediente + ',' +  dnmexpediente   + ',' + dnactivo + ',' + dntipo  + ',' + dncolonia + ',' + dnubicacion + ',' +  dnclasificacion + ',' +  dnescritura + ',' + dnrpp + ',' +  dnnotario  + ',' +  dncedente  + ',' + dnfechae + ',' + dnsuperficie  + ',' +  dnsuperficie1  + ',' + dnuso   + ',' + dnusoact   + ',' + dnccatastral   + ',' + dncpredial   + ',' + dnvalorte   + ',' + dnvalorc + ',' + dnvalort    + ',' +  dnobservaciones   + ',' +  dntransparencia + ',' +   dnaccion + ',' +  dninvasion  + ',' +   dnfechaaltasac  + ',' +   dnfechabajasac + '}'; 
   
                $.ajax({              
                  type: "POST",
                  url: "../bd/nuevo_inventario.php/",
                  data:JSON.parse(datos2),
                  //dataType: 'JSON',
                  async:false,
                success: function(result){
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
                  Swal.fire('Expediente '+ nexpediente + ' fué eliminado del inventario. ', '', 'success'); 
                  limpia_busquedaexpediente_edit();
                    return;
                  }
                  else{
                    Swal.fire('Error al eliminar el expediente: '+ nexpediente , '', 'success'); 
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


  
    
  



 

 
  
 