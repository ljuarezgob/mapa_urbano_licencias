$(document).ready(function () {



    function initSelectBusqueda() {
        $('.select-busqueda').select2({
            placeholder: 'Escribe para buscar...',
            allowClear: true,
            ajax: {
                url: 'bd/querygiros.php',
                type: 'GET',
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {
                        search: params.term, // Enviar término de búsqueda
                        trans: $('.select-busqueda').val() // Valor seleccionado
                    };
                },
                processResults: function (data) {
                    return {
                        results: data // [{ id: ..., text: ... }]
                    };
                },
                cache: true
            },
            minimumInputLength: 3,
            dropdownParent: $('body')
        });
    }

    function updateSelectBusquedaSec(selectedValue) {
        $.ajax({
            url: 'bd/queryGirosSecu.php', // Consulta para el segundo select
            type: 'GET',
            dataType: 'json',
            data: { trans: selectedValue }, // Enviar el valor de select-busqueda
            success: function (data) {
                // console.log(data, "data from second select");
                let $selectSec = $('.select-busquedaSec');
                $selectSec.empty().trigger('change'); // Limpiar opciones previas sin reescribir el HTML

                // Agregar nuevas opciones al select
                $selectSec.append(new Option('', '', true, true)); // Marcado como seleccionado

                $.each(data, function (index, item) {
                    console.log(item, "item from second select");
                    let newOption = new Option(item.sub_giro, item.id, false, false);
                    $selectSec.append(newOption);
                });


                $selectSec.trigger('change'); // Notificar a Select2 que se actualizaron los datos
            }
        });
        // console.log(selectedValue, "data")
    }

    // Inicializar select principal
    initSelectBusqueda();

    // Cuando cambia el select-busqueda, actualizar select-busquedaSec
    $('.select-busqueda').on('change', function () {
        let selectedValue = $(this).val();
        updateSelectBusquedaSec(selectedValue); // Cargar datos en el segundo select
    });


});
