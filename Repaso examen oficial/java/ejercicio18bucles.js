var numero = prompt("Introduzca un numero del 1 al 10") 
var contador = 0
while (numero != 5 && contador < 4) {
    if (numero >5){
        alert("es un numero mas bajo")
    }else {
        alert("el numero es mas alto")
    }
    contador ++
    numero = prompt("has fallado intentalo de nuevo")
    
}
if (numero == 5){
    document.writeln("Has acertado el numero era 5 y te ha costdo " + contador + "intentos" )
} else{
    document.writeln("te has pasado de intentos game over")
}

