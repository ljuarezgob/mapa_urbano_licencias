$(document).ready(function () {
    $('.select-busqueda').select2();   // Asegura que Select2 esté activado

    // Inicializar Select2 con búsqueda dinámica
    $('.select-busqueda').select2({
        placeholder: 'Escribe para buscar...',
        allowClear: true,
        ajax: {
            url: 'bd/querygiros.php', // Archivo PHP que devuelve los datos
            type: 'GET',
            dataType: 'json',
            delay: 250, // Retraso para optimizar búsquedas
            data: function (params) {
                return {
                    search: params.term // Enviar término de búsqueda al servidor
                };
            },
            processResults: function (data) {
                // Transformar los datos para Select2
                return {
                    results: data // Formato esperado: [{ id: ..., text: ... }]
                };
            },
            cache: true
        },
        minimumInputLength: 3, // Mínimo de caracteres antes de buscar
        dropdownParent: $('body') // Renderizar en el body
    });
});