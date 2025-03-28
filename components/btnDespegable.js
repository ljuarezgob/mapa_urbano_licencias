document.getElementById("btn-despegable-giro").addEventListener("click", function () {
    const div = document.getElementById("despegable-giro"); 

     if (div.classList.contains("visible")) {
        div.classList.remove("visible");
        div.classList.add("oculto");
    } else {
        div.classList.remove("oculto");
        div.classList.add("visible");
    }
});