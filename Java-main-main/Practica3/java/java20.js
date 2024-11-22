var numero
numero = prompt("Introduzca un numero")
numero = parseInt(numero)
if (isNaN(numero)) {
    alert("introduzca un numero")
} else if (numero % 2 == 0 && numero % 3 == 0 && numero % 5 == 0) {
        document.writeln("El numero es par es multiplo de 3 y de 5 ")
    } else{
        document.writeln("El numero no es par, multiplo de 3 y de 5 ")
}
