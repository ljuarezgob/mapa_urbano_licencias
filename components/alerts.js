window.addEventListener('storage', (event) => {
    if (event.key === 'selectbusquedals' && event.newValue === 'true') {
        lanzarAlerta(event.key);
        sessionStorage.removeItem('selectbusquedals');
    }
    if (event.key === 'areaPrediols' && event.newValue === 'true') {
      lanzarAlerta(event.key);
      sessionStorage.removeItem('areaPrediols');
    }
    if (event.key === 'checkBoxls' && event.newValue === 'true') {
        lanzarAlerta(event.key);
        sessionStorage.removeItem('checkBoxls');
      }
  });

  // Función de alerta (para el evento de storage)
  function lanzarAlerta(data) {
    if(data === "selectbusquedals"){

        Swal.fire({
            title: '¡Aviso!',
            text: "Seleccionar un giro en la barra de búsqueda.",
            icon: 'info',
            confirmButtonText: 'Cerrar',
            backdrop: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
        });
    }
    if(data === "areaPrediols"){
        Swal.fire({
            title: '¡Aviso!',
            text: "El campo 'Área del predio' es obligatorio",
            icon: 'info',
            confirmButtonText: 'Cerrar',
            backdrop: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
        });
    }
    if(data === "checkBoxls"){
        Swal.fire({
            title: '¡Aviso!',
            text: "Selecciona un sub giro",
            icon: 'info',
            confirmButtonText: 'Cerrar',
            backdrop: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
        });
    }
 
  }