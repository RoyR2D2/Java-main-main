function escribeNombre() {
    var nombre = document.getElementById("nombre").value;
    var numero = document.getElementById("numero").value;
    if (numero >= 18){
        alert("Su nombre es " + nombre + " y su edad es " + numero + " y es mayor de edad");
    }else {
        alert("Su nombre es " + nombre + " y su edad es " + numero + " y es menor de edad");
    }
}
