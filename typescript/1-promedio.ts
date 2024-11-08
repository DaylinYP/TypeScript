


function calcularPromedio(): void {
    // Obtiene los elementos de los números
    // Convierte los valores de los elementos a números

    const numero1Element = document.getElementById('txtNumero1') as HTMLInputElement;
    const numero1: number = parseFloat(numero1Element.value);


    const numero2Element = document.getElementById('txtNumero2') as HTMLInputElement;
    const numero2: number = parseFloat(numero2Element.value);

    const numero3Element = document.getElementById('txtNumero3') as HTMLInputElement;
    const numero3: number = parseFloat(numero3Element.value);


    const promedio: number = (numero1 + numero2 + numero3) / 3;
    // toFixed es para mostrar decimales
    document.getElementById('resultado').value = "El promedio es " + promedio.toFixed(2);
}

document.getElementById('btnPromedio').addEventListener('click', calcularPromedio);
