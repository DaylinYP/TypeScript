function numeroParOImpar() {
    const numeroElement = document.getElementById('txtNumero');
    const numero = parseFloat(numeroElement.value);
    const resultadoElement = document.getElementById('resultado');

    if (numero % 2 === 0) {
        resultadoElement.value = "El número es par";
    } else {
        resultadoElement.value = "El número es impar";
    }
}

document.getElementById('btnNumero').addEventListener('click', numeroParOImpar);
