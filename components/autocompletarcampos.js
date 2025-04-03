$(document).ready(() => {
    $('.select-busqueda').select2(); // Activa Select2

    //le pasamos los parametros a la funcion para que haga la propia consulta a la base de datos
    // y se autocompleten los campos respectivos
    function handleSelectChange(selectClass, impactoClass, factibilidadClass) {
        let valor = $(selectClass).val();
        console.log(valor, " valor de la variable");

        if (!valor || valor === "") {
            $(impactoClass).val(""); // Limpiar campo
            $(factibilidadClass).val("");
            return;
        }

        $.ajax({
            url: 'bd/querygirosautocompletado.php',
            type: 'GET',
            dataType: 'json',
            data: { search: valor },
            success: function (response) {
                console.log("Respuesta del servidor:", response);
                console.log("Respuesta del servidor:", response[0]?.fact_uso);
                console.log("Respuesta del servidor:", response[0]?.impact_uso);
                $(factibilidadClass).val(response[0]?.fact_uso || "");
                $(impactoClass).val(response[0]?.impact_uso || "");
            }
        });
    }

    //Envia la informacion a los giros secundarios
    function handleSelectChange2(selectClass, impactoClass, factibilidadClass) {
        let valor = $(selectClass).val();
        console.log(valor, " valor de la variable");

        if (!valor || valor === "") {
            $(impactoClass).val(""); // Limpiar campo
            $(factibilidadClass).val("");
            return;
        }

        $.ajax({
            url: 'bd/querygirosautocompletado2.php',
            type: 'GET',
            dataType: 'json',
            data: { search: valor },
            success: function (response) {
                console.log("Respuesta del servidor:", response);
                console.log("Respuesta del servidor:", response[0]?.fact_uso);
                console.log("Respuesta del servidor:", response[0]?.impact_uso);
                $(factibilidadClass).val(response[0]?.fact_uso || "");
                $(impactoClass).val(response[0]?.impact_uso || "");
            }
        });
    }

    // Delegación de eventos para múltiples select
    $(document).on('change', '.select-busqueda', function () {
        handleSelectChange(this, '.impactogiro', '.factibilidaduso');
    }); //giro1

    $(document).on('change', '.select-busquedaSec', function () {
        handleSelectChange2(this, '.impactogiro2', '.factibilidaduso2');
    }); // giro2 
});
