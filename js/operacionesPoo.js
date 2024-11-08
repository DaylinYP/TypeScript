var OperacionesPoo = /** @class */ (function () {
    function OperacionesPoo() {
        //atributos ( caracteristicas = variables )
        //cuando está en privado se puede usar adentro de la clase nada más osea está encapsulado
        this.numero1 = 0; //elemento numero1 que va a ser de tipo number y va a iniciar con 0
        this.numero2 = 0;
        this.resultado = 0;
    }
    //métodos ( funciones )
    OperacionesPoo.prototype.asignarNumero1 = function (valor) {
        //se le tiene que dar un valor de tipo numérico "valor:number"
        this.numero1 = valor; //metodo que permite asignar al valor al atributo numero1
    };
    OperacionesPoo.prototype.asignarNumero2 = function (valor) {
        this.numero2 = valor; //La palabra this me permite asignar valor a los atributos de esta clase, me da acceso a los private
    };
    OperacionesPoo.prototype.sumar = function () {
        this.resultado = this.numero1 + this.numero2;
        return "La suma es: " + this.resultado;
    };
    OperacionesPoo.prototype.restar = function () {
        this.resultado = this.numero1 - this.numero2;
        return "La resta es: " + this.resultado;
    };
    OperacionesPoo.prototype.multiplicar = function () {
        this.resultado = this.numero1 * this.numero2;
        return "La multiplicación es: " + this.resultado;
    };
    OperacionesPoo.prototype.dividir = function () {
        this.resultado = this.numero1 / this.numero2;
        return "La división es: " + this.resultado;
    };
    return OperacionesPoo;
}()); //FINALIZA CLASE
/*CÓMO LO VA A OPERAR*/
//crear un objeto de tipo OperacionesPoo = instanciar la clase OperacionesPoo
var operacionesPoo = new OperacionesPoo();
var divDatos = document.getElementById('datos');
function obtenerDatos() {
    //asignando a los atributos del objeto los valores de los controles del formulario
    operacionesPoo.asignarNumero1(parseFloat(document.getElementById("txtNumero1").value));
    operacionesPoo.asignarNumero2(parseFloat(document.getElementById("txtNumero2").value));
}
function sumar() {
    obtenerDatos();
    divDatos.textContent = operacionesPoo.sumar();
}
function restar() {
    obtenerDatos();
    divDatos.textContent = operacionesPoo.restar();
}
function multiplicar() {
    divDatos.textContent = operacionesPoo.multiplicar();
}
function dividir() {
    divDatos.textContent = operacionesPoo.dividir();
}
//CLASES SON LOS MOLDES
//METODOS SON ACCIONES
