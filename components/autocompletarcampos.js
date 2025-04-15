$(document).ready(() => {
    $('.select-busqueda').select2(); // Activa Select2

    let isChanging = false; // Previene bucles infinitos

    const selectSecundario = document.querySelector('.select-busquedaSec');
    const emptyOptionExists = Array.from(selectSecundario.options).some(option => option.value === "");

    console.log(emptyOptionExists)
    function handlePrimarySelectChange(selectClass, impactoClass, factibilidadClass, areaClass) {
        const selectRendered = $(selectClass).next('.select2').find('.select2-selection__rendered').attr("title");
        if (selectRendered) {
            document.getElementById("titulo-primario").textContent = "Seleccionar una opción 1";
        }

        const valor = $(selectClass).val();
        if (!valor || valor === "") {
            $(impactoClass).val("");
            $(factibilidadClass).val("");
            $(areaClass).val("");
            $('.impactogiro2').val('');
            $('.factibilidaduso2').val('');
            $('#titulo-secundario').text("Secundario");;
            $('.select-busquedaSec').val('').trigger('change');  // Limpia selección visual Select2
            return;
        }

        $.ajax({
            url: 'bd/querygirosautocompletado.php',
            type: 'GET',
            dataType: 'json',
            data: { search: valor },
            success: function (response) {
                if (response && response.length > 0) {
                    const fact = response[0]?.fact_uso || "";
                    $(factibilidadClass).val(fact);
                    $(impactoClass).val(response[0]?.impact_uso || "");
                    icons(fact, selectRendered);
                }
            }
        });
    }

    function handleSecondarySelectChange(selectClass, impactoClass, factibilidadClass) {
        if (isChanging) return;
        
        
        const valor = $(selectClass).val();
        const selectElement = document.querySelector('.select-busquedaSec');
        const textoSeleccionado = selectElement?.options[selectElement.selectedIndex]?.text || "";
        
        if (selectElement) {
            document.getElementById("titulo-secundario").textContent = "Seleccionar una opción secu";
        }

        $.ajax({
            url: 'bd/querygirosautocompletado2.php',
            type: 'GET',
            dataType: 'json',
            data: { search: valor },
            success: function (response) {
                if (response && response.length > 0) {
                    const fact = response[0]?.fact_uso || "";
                    $(factibilidadClass).val(fact);
                    $(impactoClass).val(response[0]?.impact_uso || "");
                    icons2(fact, textoSeleccionado);
                }
            }
        });
    }

    function icons(factParam, label) {
        const title = document.getElementById("titulo-primario");
        if (!label) return;

        if (factParam === "Compatible") title.textContent = "✅" + label;
        else if (factParam === "Compatible condicionado") title.textContent = "📝" + label;
        else if (factParam === "Incompatible") title.textContent = "🚫" + label;
    }

    function icons2(factParam, label) {
        const title = document.getElementById("titulo-secundario");
        if (!label) return;

        if (factParam === "Compatible") title.textContent = "✅" + label;
        else if (factParam === "Compatible condicionado") title.textContent = "📝" + label;
        else if (factParam === "Incompatible") title.textContent = "🚫" + label;
    }

    // Eventos
    $(document).on('change', '.select-busqueda', function () {
        handlePrimarySelectChange(
            this,
            '.impactogiro',
            '.factibilidaduso',
            '.areapredio'
        );
    });

    $(document).on('change', '.select-busquedaSec', function () {
        handleSecondarySelectChange(this, '.impactogiro2', '.factibilidaduso2');
    });
});
