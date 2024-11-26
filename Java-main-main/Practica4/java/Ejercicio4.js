var numero = prompt("Introduzca un numero")
numero = parseInt(numero)
while(numero < 100) {
    document.writeln(numero ++ + "<br>") 
}