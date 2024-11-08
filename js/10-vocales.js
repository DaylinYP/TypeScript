function contarVocales() {
    const textoElement = document.getElementById('txtTexto');
    const texto = textoElement.value;
    const resultadoElement = document.getElementById('txtVocales');

    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let contador = 0;

    for (const char of texto) {
        if (vocales.includes(char)) {
            contador++;
        }
    }

    resultadoElement.value = contador.toString();
}

document.getElementById('btnContarVocales').addEventListener('click', contarVocales);
