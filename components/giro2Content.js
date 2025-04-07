document.addEventListener("DOMContentLoaded", () => {
    // const contenedor = document.getElementById("contenedor-sec");

    // let allID = [...document.querySelectorAll('[id]')].filter(ids => ids.id === "contenedor-sec");
    // console.log(allID);

    // console.log(contenedor)
    // Obtener parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const impactogiro = params.get("impactogiro2");
    const factibilidaduso = params.get("factibilidaduso2");
    const giroSolicitado = params.get("selectbusqueda2");
    const checkboxEstado = params.get("checkboxEstado"); // Recibir el estado del checkbox

    // console.log(impactogiro, " impact giro 2 content");
    // console.log(factibilidaduso, " impact giro 2 content");


    let isChecked = checkboxEstado === "true";

    // Ocultar si no hay giro solicitado o si el checkbox está desmarcado
    if (!giroSolicitado || giroSolicitado === "Escribe para buscar..." ||
        !isChecked) {

        // contenedor.style.display = "none";
        // ocultamos los contenedores que permanezcan a ese nombre y no se envie
        //dependiendo si selecciono el giro 2
        document.querySelectorAll("#contenedor-sec").forEach(ids => {
            ids.style.display = "none";
        })
    }

});