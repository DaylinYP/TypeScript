function calcularArea() {
    // Obtiene los elementos de la base y la altura
    var numero1Element = document.getElementById('txtNumero1');
    var numero1 = parseFloat(numero1Element.value);
    var numero2Element = document.getElementById('txtNumero2');
    var numero2 = parseFloat(numero2Element.value);
    var area = (numero1 * numero2) / 2;
    document.getElementById('resultado').value = "El área es " + area.toFixed(2);
}
document.getElementById('btnArea').addEventListener('click', calcularArea);
