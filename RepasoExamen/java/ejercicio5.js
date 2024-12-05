function calcular() {
    var precio = document.getElementById("precio").value;
    var iva = document.getElementById("iva").value;
    var descuento = document.getElementById("descuento").checked;
    precio = parseFloat(precio);
    iva = parseInt(iva);
    var total = precio + (precio * iva / 100);

    // Si hay descuento se lo aplico
    if(descuento == true){
        total = total * 0.9;
        document.getElementById("resultado").className = "rojo";
    }
    else{
        document.getElementById("resultado").className = "azul";
    }
    document.getElementById("resultado").innerHTML = "El precio con IVA es: " + total + "euros";
}