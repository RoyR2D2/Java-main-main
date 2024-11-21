var numero
numero = prompt("Introduzca un numero")
numero = parseInt(numero)
if (isNaN(numero)) {
    alert("introduzca un numero")
} else {
    if (numero % 2 == 0) {
        document.writeln("El numero es par ")
    } else{
        document.writeln("El numero no es par ")
    }
    if (numero % 3 == 0) {
        document.writeln("El numero es multiplo de 3 ")
    } else {
        document.writeln("El numero no es multiplo de 3 ")
    }
    if (numero % 5 == 0) {
        document.writeln("El numero es multiplo de 5 ")
    } else {
        document.writeln("El mumero no es multiplo de 5 ")
    }
}
