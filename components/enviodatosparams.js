const formulario = document.getElementById("formulario");
        const ngid = document.getElementById("ngid");
        const previewImage = document.getElementById("preview-image");
        const inputs = formulario.querySelectorAll(".form-control, .form-select, .form-textarea");
        const btnAceptar = document.getElementById("btn-aceptar");
        const btnActualizar = document.getElementById("btn-actualizar");
        const btnEliminar = document.getElementById("btn-eliminar");
        const selectbusqueda = document.getElementsByClassName("select-busqueda");
        const areapredio = document.getElementsByClassName("areapredio")

        const selectbusqueda2 = document.getElementsByClassName("select-busqiedaSec");


       //const entorno = document.getElementById('entorno').value;  // Aquí debería ser 'entorno' y no 'planparcial'

    
        let enModoEdicion = false;
        let bbox = [];
        let bboxValue = "";
        let centerLong = 0;
        let centerLat = 0;

        function toggleInputs(disabled) {
            inputs.forEach(input => {
                if (input.id !== "ngid") {
                    input.disabled = disabled;
                }
            });
        }

        function validarNGID() {
            return ngid.value && ngid.value.trim() !== "";
        }


        function ImprimirFormulario2() {
            // Obtener los valores de los inputs
            const urlimagen = document.getElementById('urlimagen').value;
            const planparcial = document.getElementById('planparcial').value;
            const claveusosuelo = document.getElementById('claveusosuelo').value;
            const usosuelo = document.getElementById('usosuelo').value;
            const entorno = document.getElementById('entorno').value;
            const restriccion = document.getElementById('restriccion').value;
            const longitud = document.getElementById('longitud').value;
            const latitud = document.getElementById('latitud').value;
            const x = document.getElementById('x').value;
            const y = document.getElementById('y').value;
            const vbbox = document.getElementById('vbbox').value;
            const ngid = document.getElementById('ngid').value;
            const impactogiro = document.getElementById('impactogiro').value;

            // Crear la URL con los datos. Aqui le pasas los parametros a la url  que se imprime en el archivo de pdfimpresion.htmljnjnckjr
            const url = new URL('http://localhost/mapa_urbano_licencias/pdfimpresion.html', window.location.origin);
            const params = new URLSearchParams({
                planparcial,
                claveusosuelo,
                usosuelo,
                longitud,
                latitud,
                x,
                y,
                urlimagen,
                impactogiro
                //entorno

            });

            // Redirigir a consulta.html con los parámetros
            window.location.href = `${url}?${params.toString()}`;
        }



        function ImprimirFormulario() {

            // Obtener los valores de los inputs
            const urlimagen = document.getElementById('urlimagen').value;
            const planparcial = document.getElementById('planparcial').value;
            const claveusosuelo = document.getElementById('claveusosuelo').value;
            const usosuelo = document.getElementById('usosuelo').value;
            const longitud = document.getElementById('longitud').value;
            const latitud = document.getElementById('latitud').value;
            const x = document.getElementById('x').value;
            const y = document.getElementById('y').value;
            const impactogiro = document.querySelector('.impactogiro')?.value;
            const factibilidaduso = document.querySelector('.factibilidaduso')?.value;
            const selectbusqueda = document.querySelector('.select2-selection__rendered')?.getAttribute("title"); //el id  original está oculto de la libreria select2
            const areapredio = document.querySelector('.areapredio')?.value;
            //const entorno = document.getElementById('entorno').value;  // Aquí debería ser 'entorno' y no 'planparcial'
                
            const selectbusqueda2 = document.querySelector('.select-busquedaSec')?.value; //el id  original está oculto de la libreria select2
            const areapredio2 = document.querySelector('.areapredio2')?.value;
            const impactogiro2 = document.querySelector('.impactogiro2')?.value;
            const factibilidaduso2 = document.querySelector('.factibilidaduso2')?.value;
            //validaciones de los datos que entran al pdf
         
            if (!selectbusqueda || selectbusqueda === "Escribe para buscar...") {
                alert("Seleccionar un giro en la barra de búsqueda.");
                return;
            }

              if(!areapredio){
                alert("El campo area predio es obligatorio");
                return;
            }

          
            // Crear los parámetros para enviar
            const params = new URLSearchParams({
                planparcial,
                claveusosuelo,
                usosuelo,
                longitud,
                latitud,
                x,
                y,
                urlimagen,
                impactogiro,
                factibilidaduso,
                selectbusqueda,
                areapredio,
                selectbusqueda2,
                impactogiro2,
                factibilidaduso2,

                //entorno
            });
       
            //limpiar el formulario
            // formulario.reset();

            // Abrir pdfimpresion.html en una nueva pestaña y pasar los parámetros
            const url = `pdfimpresion.html?${params.toString()}`;
            window.open(url, '_blank'); // '_blank' abre en una nueva pestaña
        }









        function cancelarFormulario() {
            formulario.reset();
            toggleInputs(true);
            previewImage.src = "./img/nomapa.png";
            btnAceptar.disabled = true;
            btnActualizar.disabled = false;
            enModoEdicion = false;
        }

        function deleteForm() {
            Swal.fire({
                title: '¿Estás seguro?',
                text: "¿Deseas eliminar los datos?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    formulario.reset();
                    toggleInputs(true);
                    previewImage.src = "./img/nomapa.png";
                    btnAceptar.disabled = true;
                    btnActualizar.disabled = false;
                    enModoEdicion = false;
                    Swal.fire('Eliminado', 'Los datos han sido eliminados', 'success');
                }
            });
        }

        btnActualizar.addEventListener("click", () => {
            if (!validarNGID()) {
                Swal.fire('Error', 'NGID es obligatorio.', 'error');
                return;
            }
            enModoEdicion = true;
            toggleInputs(false);
            btnActualizar.disabled = true;
            btnAceptar.disabled = false;
        });

        btnEliminar.addEventListener("click", deleteForm);

        window.onload = function () {
            bboxValue = document.getElementById("vbbox").value;

            console.log(bboxValue);


            if (bboxValue) {
                bbox = bboxValue.split(',').map(Number); // Convertir a números
            }

            centerLong = parseFloat(document.getElementById("longitud").value);
            centerLat = parseFloat(document.getElementById("latitud").value);

            if (isNaN(centerLong) || isNaN(centerLat)) {
                console.error("Las coordenadas de longitud o latitud no son válidas.");
                return;
            }
        }

        function adjustBbox(delta) {
            // Extraer las coordenadas actuales
            centerLong = parseFloat(document.getElementById("longitud").value);
            centerLat = parseFloat(document.getElementById("latitud").value);
            bboxValue = document.getElementById("vbbox").value;
            bboxValue = bboxValue.replace(/\[|\]/g, '').trim();
            bbox = bboxValue.split(',').map(coord => parseFloat(coord.trim()));

            const bboxWidth = bbox[2] - bbox[0];
            const bboxHeight = bbox[3] - bbox[1];
            const newWidth = bboxWidth + delta;
            const newHeight = bboxHeight + delta;

            bbox[0] = centerLong - newWidth / 2; // minx
            bbox[1] = centerLat - newHeight / 2; // miny
            bbox[2] = centerLong + newWidth / 2; // maxx
            bbox[3] = centerLat + newHeight / 2; // maxy

            console.log(bbox);

            updateMap(); // Actualizar la imagen después del ajuste
        }

        function updateMap() {
            const bboxStr = bbox.map(coord => coord.toFixed(10)).join(',');
            const urlx = `https://mapa.zapopan.gob.mx:8000/geoserver/geomatica/wms?service=WMS&version=1.1.0&request=GetMap&layers=geomatica%3AOSM-WMS,geomatica%3Appdu_zonificacion_manzana,geomatica%3APredios_PPDU,geomatica%3Appdu_zonificacion,geomatica%3Aubicacion&viewparams=longitud%3A${centerLong};latitud%3A${centerLat}&bbox=${bboxStr}&width=300&height=300&srs=EPSG%3A4326&format=image%2Fpng`;


            let url2 = `https://mapa.zapopan.gob.mx:8000/geoserver/geomatica/wms?service=WMS&version=1.1.0&request=GetMap&layers=
                geomatica%3Azpn_centros_urbanos_punto,
                geomatica%3Aarea_desarrollo_controlado,
                geomatica%3Azpn_centros_urbanos_punto,
                geomatica%3Azpn_e3_utilizacion_suelo,
                geomatica%3Azpn_e3_utilizacion_suelo_etiquetas,
                geomatica%3Azpn_arroyo_vehicular,
                geomatica%3Azpn_estructura_vial,
                geomatica%3Aarea_desarrollo_controlado,
                geomatica%3Azpn_ppe,
                geomatica%3Azpn_predios,
                geomatica%3Aubicacion&viewparams=longitud%3A${centerLong};latitud%3A${centerLat}&bbox=${bboxStr}&width=300&height=300&srs=EPSG%3A4326&format=image%2Fpng`;





            // Actualizar la imagen
            previewImage.src = url2;
            document.getElementById("urlimagen").value = url2;
            document.getElementById("vbbox").value = bboxStr;
        }




