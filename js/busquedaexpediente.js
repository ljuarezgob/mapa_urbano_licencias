$(document).ready(function(){

    var lyr;
    
    
    


    $("#btnLimpiarC").click(function(){ 


       // alert  ('limpia');

        TablaConsulta.innerHTML=TablaConsulta.oldHTML;

         document.getElementById('txtDomicilio2').value = ""; 
         

    
    }),
    

    $("#btnFindDomicilio2").click(function(){    


      //  alert  ('Busca');

    TablaConsulta.innerHTML=TablaConsulta.oldHTML;

     var inputDomicliox =  document.getElementById('txtDomicilio2').value; 

    
//alert  (inputDomicliox.length);

//var inputDomiclio = '';

//if (inputDomicliox == NULL  ||  inputDomicliox == '' || inputDomicliox.length == 0 ) {


  /*  if (inputDomicliox.length === 0) {
    //exit ();
    alert ('no hay');
    die ();
    return;
    
}
else{
    inputDomiclio = inputDomicliox;

    alert ('PUES QUE SI');
    die ();


}*/

/*if (busqueda_domicilio == '' )   { */

var inputDomiclio = inputDomicliox; 

var tr_str = '';

 
//busqueda_domicilio


$(document).ready(function(){

    function estoEsUnaPrueba() {
        console.log('Hola mundo! Me has pasado por argumento el número ' );
    } 


    $.ajax({
        url: './bd/query_no_expediente.php?buscar='+inputDomiclio,
        type: 'POST',
        dataType: 'JSON',
        success: function(response){
            var len = response.length;

            //$("#divtablaDom").setNumRows(0);
            // $("#tableId > tbody").empty();   

           /* $("#divtablaDom > tbody").empty();    
            $("#divtablaDom > tbody tr").empty();

            $("#tablaDom > tbody tr").empty();
            $("#tablaDom > tbody tr").empty();

            */
          //  $("#divtablaDom tr").remove();
           //  ---   $("#tablaDom tr").remove(); 

            //id="tablaDom

            //tr_str = " <tr class='table table-striped'>  <thead> <tr> <th>  </th> <th>Fuente</th> <th>Domicilio</th> <th>Colonia</th>  </tr> </thead> <tbody> </tbody> " ;

            $(".leaflet-marker-icon").remove(); $(".leaflet-popup").remove();
            $(".leaflet-marker-shadow").remove(); $(".leaflet-popup").remove();    


            //expediente,upinoact, upitipo, upicolonia, upiubicaci

            for(var i=0; i<len; i++){
                var expediente = response[i].expediente;
                var ubicacion = response[i].upiubicaci;
                var colonia = response[i].upicolonia;
                var longitud = response[i].longitud;
                var latitud = response[i].latitud;
             
                /*var quantita = response[i].quantita;
                var stato = response[i].stato;
                var note = response[i].note;  */


                 tr_str = "<tr class='table table-striped'> "+       
                    "<td><button class='btn btn-primary btn-block'  onclick =  mymap.flyTo(["+latitud+","+longitud+"],20);    > Ir </button> </td>"+         //var marker = L.marker(["+latitud+","+longitud+"],{}).addTo(mymap);
                   // "<td><button class='btn btn-primary btn-block'  onclick =  estoEsUnaPrueba(); > Ir </button> </td>"+         //var marker = L.marker(["+latitud+","+longitud+"],{}).addTo(mymap);
                    "<td style='width:100px'> <strong>" + expediente + "</strong></td>" +
                    "<td>" + ubicacion + "</td>" +
                    "<td>" + colonia + "</td>" +

                    "</tr>";

                $("#tablaDom").append(tr_str);    


                L.marker([latitud, longitud],{}).addTo(mymap);

               // alert ( tr_str ) ;
            }


            sc= "<script>" + 
                "let options = {"+
                "numberPerPage:5,"+
                "goBar:true,"+
                "pageCounter:true,"+
                "};"+
                  
                "let filterOptions = {"+
                "el:'#searchBox'"+
                "};"+
                "paginate.init('.myTable',options,filterOptions);"+
                "</script>";

            $("#tablaDom").append(sc);      


            mymap.setView([20.72767, -103.39045], 12);
  


        }

       



    });

      


});











    });


   


   

        
                          
});


