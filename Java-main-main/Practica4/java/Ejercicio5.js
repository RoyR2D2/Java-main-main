var numero 
var numeroprincipio = 1
numeroprincipio = parseInt(numeroprincipio)

while (true) {
    numero = prompt("Introduzca un numero positivo")
    numero = parseInt(numero)
    
    if(numero > 0) {
        break;
    } else {
        alert("Has introducido un numero negativo. Porfavor introduzca un numero positivo")
    }
}

while(numeroprincipio <= numero) {
    document.writeln(numeroprincipio ++)
}