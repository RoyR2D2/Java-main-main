var precioArticulo = 1;
var suma = 0;
suma = parseInt(suma);
while (precioArticulo != 0) {
    precioArticulo = prompt("Introduzca el precio de un articulo sucesivamente, cuando quiera salir introduzca 0");
    alert(precioArticulo);
    var suma = suma + precioArticulo;
}
document.writeln("La suma de los articulos es= " + suma);