document.querySelectorAll(".btn-despegable-giro").forEach((boton) => {
    boton.addEventListener("click", function () {
        const contenedor = this.closest(".contenedor");
        const div = contenedor.querySelector(".despegable-giro");
        div.classList.toggle("oculto");
    });
});