function calcularFactorial() {
    var numeroElement = document.getElementById('txtNumero');
    var numero = parseInt(numeroElement.value);

    var factorial = 1;
    for (var i = 2; i <= numero; i++) {
        factorial *= i;
    }

    var txtFactorialElement = document.getElementById('txtFactorial');
    txtFactorialElement.value = factorial.toString();
}

document.getElementById('btnFactorial').addEventListener('click', calcularFactorial);
