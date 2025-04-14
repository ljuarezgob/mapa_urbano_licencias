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
        $('.select-busquedaSec').select2({
            placeholder: 'Ingresa subgiro',
            allowClear: true,
            minimumInputLength: 3,
            ajax: {
                url: 'bd/queryGirosSecu.php',
                dataType: 'json',
                type: 'GET',
                delay: 250, // Para evitar demasiadas peticiones mientras escribe
                data: function (params) {
                    return {
                        tap: params.term, // params.term es el texto que el usuario escribió
                        trans: selectedValue
                    };
                },
                processResults: function (data) {
                    // Suponiendo que `data` es un array de objetos con propiedad sub_giro
                    return {
                        results: data.map(function (item) {
                            return {
                                id: item.id,
                                text: item.sub_giro
                            };
                        })
                    };
                },
                cache: true
            },
            dropdownParent: $('body')
        });
        
        
    }

    // Inicializar select principal
    initSelectBusqueda();

    // Cuando cambia el select-busqueda, actualizar select-busquedaSec
    $('.select-busqueda').on('change', function () {
        let selectedValue = $(this).val();
        updateSelectBusquedaSec(selectedValue); // Cargar datos en el segundo select
    });


});
