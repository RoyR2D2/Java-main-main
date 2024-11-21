var hermanos;
var cantidad;
hermanos = prompt("Cuantos hermanos tienes");
cantidad = prompt("Introduzca una cantidad");
cantidad = parseInt(cantidad);
if (hermanos >= 3) {
    cantidad = cantidad - (cantidad * 0.15)
    document.writeln("15% de descuento " + cantidad)
} else if (hermanos < 3 && hermanos >= 1) {
    cantidad = cantidad - (cantidad * 0.05)
    document.writeln("5% de descuento " + cantidad)
} else if (hermanos == 0) {
    document.writeln("No hay descuento " + cantidad)
}