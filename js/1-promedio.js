function calcularPromedio() {
    // Obtiene los elementos de los números
    // Convierte los valores de los elementos a números
    var numero1Element = document.getElementById('txtNumero1');
    var numero1 = parseFloat(numero1Element.value);
    var numero2Element = document.getElementById('txtNumero2');
    var numero2 = parseFloat(numero2Element.value);
    var numero3Element = document.getElementById('txtNumero3');
    var numero3 = parseFloat(numero3Element.value);
    var promedio = (numero1 + numero2 + numero3) / 3;
    // toFixed es para mostrar decimales
    document.getElementById('resultado').value = "El promedio es " + promedio.toFixed(2);
}
document.getElementById('btnPromedio').addEventListener('click', calcularPromedio);
