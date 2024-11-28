var precioArticulo = 1;
var suma = 0;
while(precioArticulo != 0) {
    precioArticulo = prompt("Introduzca el precio del articulo:");
    precioArticulo = parseInt(precioArticulo);
    alert(precioArticulo);
    if(isNaN(precioArticulo)) {
        alert("Ha habido un error introduzca un numero");
    }else if(precioArticulo < 0){
        alert("No se permiten numeros negativos");
    } else {
        suma = suma + precioArticulo;
    }    
}
document.writeln("El total de su compra ha sido:" + suma);
