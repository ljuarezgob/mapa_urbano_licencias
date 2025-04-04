document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-sec");

    console.log(contenedor)
    // Obtener parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const impactogiro = params.get("impactogiro2");
    const factibilidaduso = params.get("factibilidaduso2");
    const giroSolicitado = params.get("selectbusqueda2");
    const checkboxEstado = params.get("checkboxEstado"); // Recibir el estado del checkbox

    console.log(impactogiro)
    console.log(factibilidaduso)


    
    // Ocultar si no hay giro solicitado o si el checkbox está desmarcado
    if (!giroSolicitado || giroSolicitado === "Escribe para buscar..." || 
        checkboxEstado === false  ||
        impactogiro === "" ||
        factibilidaduso === "") {
            
        contenedor.style.display = "none";
    }

});