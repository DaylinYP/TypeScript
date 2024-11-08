var _a;
function ordenNumeros() {
    var numero1Element = document.getElementById('txtNumero1');
    var numero1 = parseFloat(numero1Element.value);
    var numero2Element = document.getElementById('txtNumero2');
    var numero2 = parseFloat(numero2Element.value);
    var numero3Element = document.getElementById('txtNumero3');
    var numero3 = parseFloat(numero3Element.value);
    var mayor, medio, menor;
    //SI 1 >= 2 Y 1>= 3 ENTONCES
    if (numero1 >= numero2 && numero1 >= numero3) {
        mayor = numero1;
        if (numero2 >= numero3) {
            medio = numero2;
            menor = numero3;
        }
        else {
            medio = numero3;
            menor = numero2;
        }
    }
    else if (numero2 >= numero1 && numero2 >= numero3) {
        mayor = numero2;
        if (numero1 >= numero3) {
            medio = numero1;
            menor = numero3;
        }
        else {
            medio = numero3;
            menor = numero1;
        }
    }
    else {
        mayor = numero3;
        if (numero1 >= numero2) {
            medio = numero1;
            menor = numero2;
        }
        else {
            medio = numero2;
            menor = numero1;
        }
    }
    var resultado = "Mayor: ".concat(mayor, ", Medio: ").concat(medio, ", Menor: ").concat(menor);
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.value = resultado;
}
(_a = document.getElementById('btnNumero')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
    event.preventDefault();
    ordenNumeros();
});
