document.addEventListener("DOMContentLoaded", function () {
    const textoCambiante = document.getElementById("textoCambiante");
    const aumentarTextoBtn = document.getElementById("aumentarTexto");
    const disminuirTextoBtn = document.getElementById("disminuirTexto");
    let tamañoActual = 16; // Tamaño de fuente inicial en píxeles

    aumentarTextoBtn.addEventListener("click", function () {
        tamañoActual += 2; // Aumenta el tamaño en 2 píxeles
        textoCambiante.style.fontSize = tamañoActual + "px";
    });

    disminuirTextoBtn.addEventListener("click", function () {
        tamañoActual -= 2; // Disminuye el tamaño en 2 píxeles
        textoCambiante.style.fontSize = tamañoActual + "px";
    });
});
