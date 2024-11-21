var numero;
var descuento;
numero = prompt("introduzca un numero");
if (numero >= 100 ) {
    // calcular el 15% de descuento
    descuento = numero - (numero * 15 / 100);
    document.writeln ("El numero con descuento del 15% es: " + descuento);
    }else if (numero >=50){
        descuento = numero - (numero * 5 / 100);
        document.writeln ("El numero con descuento del 5% es: " + descuento)
    }else {
        document.writeln ("no hay descuento")
}
