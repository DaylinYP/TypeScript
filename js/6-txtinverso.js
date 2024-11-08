document.getElementById('mostradorTexto').addEventListener('click', function() {
    // Obtener el valor del input de texto
    const texto = document.getElementById('cadenaTexto').value;
    
    // Invertir el texto
    const textoInvertido = texto.split('').reverse().join('');
    
    // Mostrar el texto invertido en el input de resultado
    document.getElementById('resultado').value = textoInvertido;
});
