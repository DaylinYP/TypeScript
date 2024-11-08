function numPerfecto(numero) {
    var sumaDivisores = 0;
    for (var i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    return sumaDivisores === numero;
}

function esNumPerfecto() {
    var numeroElement = document.getElementById('txtNumero');
    var numero = parseInt(numeroElement.value);

    var esPerfecto = numPerfecto(numero);

    var resultadoElement = document.getElementById('resultado');
    resultadoElement.value = esPerfecto ? "El número es perfecto" : "El número no es perfecto";
}

document.getElementById('btnPerfecto').addEventListener('click', esNumPerfecto);
