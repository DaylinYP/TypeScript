function esNumeroPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function verificarPrimo() {
    const numeroElement = document.getElementById('txtNumero');
    const numero = parseInt(numeroElement.value);

    const esPrimo = esNumeroPrimo(numero);

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.value = esPrimo ? "El número es primo" : "El número no es primo";
}

document.getElementById('btnPrimo').addEventListener('click', verificarPrimo);
