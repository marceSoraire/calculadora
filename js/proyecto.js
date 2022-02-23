let primerOpcion;
let segundaOpcion;
let operador;
let frase;
// function start
function comenzar() {
    
    encendido();
    
    let resultado = document.getElementById("resultado");
    let reset = document.getElementById("reset");
    let sumar = document.getElementById("sumar");
    let restar = document.getElementById("restar");
    let multiplicacion = document.getElementById("multiplicacion");
    let division = document.getElementById("division");
    let igual = document.getElementById("igual");
    let cero = document.getElementById("cero");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");    

    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick = function(e) {
        resetear();
    }
    
    // operadores
    sumar.onclick = function(e) {
        primerOpcion = resultado.textContent;
        operador = "+";
        limpiar();
    }
    restar.onclick = function(e) {
        primerOpcion = resultado.textContent;
        operador = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e) {
        primerOpcion = resultado.textContent;
        operador = "*";
        limpiar();
    }
    division.onclick = function(e) {
        primerOpcion = resultado.textContent;
        operador = "/";
        limpiar();
    }
    igual.onclick = function(e) {
        segundaOpcion = resultado.textContent;
        resolver();
    }
}

const encendido = () => {
    let nombre = prompt("ingresar nombre de usuario");
    alert(`bienvenido a mi primer calculadora  ${nombre}`);//backtich se usa con alt 96
}

function limpiar() {
    resultado.textContent = "";
}

function resetear () {
    resultado.textContent = "";
    primerOpcion = 0;
    segundaOpcion = 0;
    operador = "";
}

function resolver() {
    let res = 0;
    switch (operador) {
        case "+":
            res = parseFloat(primerOpcion) + parseFloat(segundaOpcion);
            break;
        case "-":
            res = parseFloat(primerOpcion) - parseFloat(segundaOpcion);
            break;
        case "*":
            res = parseFloat(primerOpcion) * parseFloat(segundaOpcion);
            break;
        case "/":
            res = parseFloat(primerOpcion) / parseFloat(segundaOpcion);
            break;
    }
    resetear();
    resultado.textContent = res;
}