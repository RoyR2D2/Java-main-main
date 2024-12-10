var numero = prompt("Introduzca un numero para ver su tabla de multiplicar");
var multi = 1;
while (multi <=10) {
    var calculo = numero * multi;
    document.writeln(numero + " * " + multi + "=" + calculo +"<br>");
    multi ++;
}
