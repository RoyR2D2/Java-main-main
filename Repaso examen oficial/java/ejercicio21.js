var numero1 = prompt("Introduzca el primer operador")
var operacion = prompt("Introduzca una operacion del tipo +, -, *, /")
var numero2 = prompt("Introduzca el segundo operador")
var resultadoSuma
var resultadoResta
var ressultadoMultiplicacion
var ressultadoDivision
numero1 = parseInt(numero1)
numero2 = parseInt(numero2)
if (isNaN(numero1) || isNaN(numero2)) {
    alert("porfavor introduzca un numero")
} else if (operacion == ("+")){
    resultadoSuma = numero1 + numero2
    document.writeln(resultadoSuma)
} else if (operacion == ("-")) {
    resultadoResta = numero1 - numero2
    document.writeln(resultadoResta)
} else if (operacion == ("*")) {
    ressultadoMultiplicacion = numero1 * numero2
    document.writeln(ressultadoMultiplicacion)
} else if (operacion == ("/")) {
    ressultadoDivision = numero1 / numero2
    document.writeln(ressultadoDivision)
}