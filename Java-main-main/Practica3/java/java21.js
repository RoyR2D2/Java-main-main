var numero1;
var numero2;
var operacion;
var resultadoSuma
var resultadoResta
var resultadoMulti
var resultadoDivi
numero1 = prompt("Introduzca el primer operador");
operacion = prompt("Introduzca una operacion del tipo", "+, -, *, /");
numero2 = prompt("Introduzca el segundo operador");
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
operacion = parseInt(operacion)
if (isNaN(numero1) || isNaN(numero2)) {
  alert("introduzca un numero");
} else if (operacion = "+" ) {
    resultadoSuma = numero1 + numero2 
    alert("el resultado es=" + resultadoSuma)
} else if (operacion = "-") {
    resultadoResta = numero1 - numero2
    alert("el resultado es=" + resultadoResta)
} else if (operacion = "*") {
    resultadoMulti = numero1 * numero2
    alert("el resultado es=" + resultadoMulti)
} else if (operacion = "/") {
   resultadoDivi = numero1 / numero2
   alert("el resultado es=" + resultadoDivi)
}