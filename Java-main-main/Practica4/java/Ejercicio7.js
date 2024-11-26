var numero;
while (true) {
    numero = prompt("Introduzca un numero");
    numero = parseInt(numero)
    if (numero == 0){
        break;
    }
    document.writeln(numero + " ");
   
} 