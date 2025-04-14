$(document).ready(() => {
    $('.select-busqueda').select2(); // Activa Select2
    let ischanging = false;//caso base para evitar Uncaught RangeError: Maximum call stack size exceeded
    const select = document.querySelector('.select-busquedaSec'); // Selecciona el primer elemento con la clase 'select-busquedaSec'
    const emptyOptionExists = Array.from(select.options).some(option => option.value === ""); // Verificar si ya hay una opción vacía

    //le pasamos los parametros a la funcion para que haga la propia consulta a la base de datos
    // y se autocompleten los campos respectivos
    function handleSelectChange(selectClass, impactoClass, factibilidadClass, areaClass, factfuncts) {
        const selectbusqueda = document.querySelector('.select2-selection__rendered')?.getAttribute("title"); //el id  original está oculto de la libreria select2
        if (selectbusqueda) {
            document.getElementById("titulo-primario").textContent = "Seleccionar una opción";
        }
        let valor = $(selectClass).val();
        if (!valor || valor === "") {
            $(impactoClass).val(""); // Limpiar campo
            $(factibilidadClass).val("");
            $(areaClass).val("");
            factfuncts; //es el argumento  handelSelectChange2
            return;
        }

        $.ajax({
            url: 'bd/querygirosautocompletado.php',
            type: 'GET',
            dataType: 'json',
            data: { search: valor },
            success: function (response) {
                // console.log("Respuesta del servidor:", response);
                // console.log("Respuesta del servidor:", response[0]?.fact_uso);
                let fact = response[0]?.fact_uso || "";
                // console.log("Respuesta del servidor:", response[0]?.impact_uso);
                $(factibilidadClass).val(response[0]?.fact_uso || "");
                $(impactoClass).val(response[0]?.impact_uso || "");
                icons(fact, selectbusqueda)
            }
        });
    }

    function handleSelectChange2(selectClass, impactoClass, factibilidadClass) {

        if (ischanging) return; // ← Salida anticipada para evitar recursión

        let valor = $(selectClass).val();

        const selectbusqueda2 = document.querySelector('.select-busquedaSec'); //el id  original está oculto de la libreria select2
        const textoSeleccionado = select.options[select.selectedIndex]?.text || "";
        
        if (selectbusqueda2) {
            document.getElementById("titulo-secundario").textContent = "Seleccionar una opción";
        }

        if (!valor || valor === "") {
            ischanging = true; // ← Marcar como en proceso de cambiob 
            $(impactoClass).val(""); // Limpiar campo
            $(factibilidadClass).val("");
            document.getElementById("titulo-secundario").textContent = "Secundario";

            if (!emptyOptionExists) {
                const emptyOption = document.createElement("option");
                emptyOption.value = "";
                emptyOption.textContent = "Seleccionar una opción";
                select.insertBefore(emptyOption, select.firstChild); // Añadir al principio
            }

            $('.select-busquedaSec').val('').trigger('change'); // Establecer como seleccionada la opción vacía

            ischanging = false; //fin de la variable para evitar bucle infinito
            return;
        }


        $.ajax({
            url: 'bd/querygirosautocompletado2.php',
            type: 'GET',
            dataType: 'json',
            data: { search: valor },
            success: function (response) {
                // console.log("Respuesta del servidor:", response);
                // console.log("Respuesta del servidor:", response[0]?.fact_uso);
                // console.log("Respuesta del servidor:", response[0]?.impact_uso);
                let fact = response[0]?.fact_uso || "";
                $(factibilidadClass).val(response[0]?.fact_uso || "");
                $(impactoClass).val(response[0]?.impact_uso || "");
                icons2(fact, textoSeleccionado)

            }
        });
    }

    function icons(factParam, data) {

        if (factParam === "Compatible") {
            if (data) {
                document.getElementById("titulo-primario").textContent = "✅" + data;
            }

        }
        if (factParam === "Compatible condicionado") {
           
            if (data) {
                document.getElementById("titulo-primario").textContent = "📝" + data;
            }

        }
        if (factParam === "Incompatible") {

            if (data) {
                document.getElementById("titulo-primario").textContent = "🚫" + data;
            }
        }

    }

    function icons2(factParam, data) {

        if (factParam === "Compatible") {
            if (data) {
                document.getElementById("titulo-secundario").textContent = "✅" + data;
            }

        }
        if (factParam === "Compatible condicionado") {
           
            if (data) {
                document.getElementById("titulo-secundario").textContent = "📝" + data;
            }

        }
        if (factParam === "Incompatible") {

            if (data) {
                document.getElementById("titulo-secundario").textContent = "🚫" + data;
            }
        }

    }
    
    // Delegación de eventos para múltiples select
    $(document).on('change', '.select-busqueda', function () {
        handleSelectChange(this, '.impactogiro', '.factibilidaduso', '.areapredio', handleSelectChange2(this, '.impactogiro2', '.factibilidaduso2'));
    }); //giro1
    $(document).on('change', '.select-busquedaSec', function () {
        handleSelectChange2(this, '.impactogiro2', '.factibilidaduso2');
    }); // giro2 

});
