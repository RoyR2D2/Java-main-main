var numero;
numero = prompt("Introduzca un numero"); // Convertir a número y asignar

if (isNaN (numero)) {
    document.writeln("escriba un numero");
} else if ((numero % 2) == 0){
    document.writeln("El numero es par");
} else{
    document.writeln("El numero es impar")
}

    