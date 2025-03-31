$(document).ready(() => {
    $('.select-busqueda').select2();   // Asegura que Select2 esté activado
    $('.select-busqueda').on('change', function () {

        let valor = $(this).val(); // Obtiene el valor seleccionad, osea el id del giro que pertenece a la base de datos.
        console.log(valor, " valor de la variable")
        if (!valor || valor === "") {
            // console.log("No se ha seleccionado ningún valor");
            $('.impactogiro').val(""); //limpiar el campo
            $('.factibilidaduso').val("");
            return;
        }
        $.ajax({
            url: 'bd/querygirosautocompletado.php',
            type: 'GET',
            dataType: 'json',
            data: { search: valor }, //Envia la variable al archivo php 
            success: function (response) {
                // console.log("Respuesta del servidor:", response);
                // Aquí puedes hacer algo con la respuesta, como mostrarla en un input
                $('.factibilidaduso').val(response[0].fact_uso || "");
                $('.impactogiro').val(response[0].impact_uso || "");
            },

        });
    });
});