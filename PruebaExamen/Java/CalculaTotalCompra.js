var precioArticulo;
precioArticulo 
while(precioArticulo != 0) {
    precioArticulo = prompt("Introduzca el precio del articulo:");
    alert(precioArticulo)
    if(isNaN(precioArticulo))
        alert("Ha habido un error introduzca un numero")
    if(precioArticulo < 0){
        alert("No se permiten numeros negativos")
    }
}
alert("El total de su compra ha sido:" + precioArticulo)
