function calcular() {
    var precio = document.getElementById(precio).value;
    var iva = document.getElementById(iva).value;
    precio = parseInt(precio);
    iva = parseInt(iva);
    var total = + (precio * iva / 100);
    document.getElementById("resultado").innerHTML = "El precio con IVA es " + total 
}