var PotenciaNumero = /** @class */ (function () {
    function PotenciaNumero() {
        this.base = 0;
        this.exponente = 0;
        this.resultado = 0;
    }
    PotenciaNumero.prototype.asignarBase = function (base) {
        this.base = base;
    };
    PotenciaNumero.prototype.asignarExponente = function (exponente) {
        this.exponente = exponente;
    };
    PotenciaNumero.prototype.potencia = function () {
        this.resultado = (Math.pow(this.base, this.exponente));
        return "Resultado: " + this.resultado;
    };
    return PotenciaNumero;
}());
var potenciaNumero = new PotenciaNumero();
function obtenerPotencia() {
    potenciaNumero.asignarBase(parseFloat(document.getElementById('txtBase').value));
    potenciaNumero.asignarExponente(parseFloat(document.getElementById('txtExponente').value));
}
function potencia() {
    obtenerPotencia();
    console.log(potenciaNumero.potencia());
    var resultado = document.getElementById('resultado');
    resultado.value = potenciaNumero.potencia();
}
