function calcular() {
    var precio = document.getElementById("precio").value;
    var iva = document.getElementById("iva").value;
    total = precio + (precio * iva / 100);
    document.getElementById("resultado").innerHTML = "El precio con IVA es: " + (total);
}