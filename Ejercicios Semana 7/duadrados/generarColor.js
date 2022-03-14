const numeroDeCuadradosInicial = 9;

function generarNuevoColor() {
    var simbolos, color;
    simbolos = "0123456789ABCDEF";
    color = "#";

    for (var i = 0; i < 6; i++) {
        color = color + simbolos[Math.floor(Math.random() * 16)];
    }

    return color;
}

function generarCuadrado() {
    const grid = document.getElementById("grid");
    const cuadrado = document.createElement("div");
    cuadrado.className = "cuadrado";
    cuadrado.style.background = generarNuevoColor();
    grid.appendChild(cuadrado);
}

function generarGrid() {
    for (var i = 0; i < numeroDeCuadradosInicial; i++) {
        generarCuadrado();
    }
}

function incrementarCuadrado() {
    numeroDeCuadrados++;
}

function cambiarColores() {
    const cuadrados = Array.from(document.getElementsByClassName("cuadrado"));
    cuadrados.forEach(
        (cuadrado) => (cuadrado.style.background = generarNuevoColor())
    );
}

generarGrid();
setInterval(cambiarColores, 2000);
