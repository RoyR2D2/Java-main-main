var numeroaAdivinar = 6;
var intentosMaximos = 0;
var intentos = 0
var numero = prompt("Introduce un numero entre el uno al diez para adivinar el numero");
while(numero != numeroaAdivinar && intentosMaximos < 3) {
    alert("No es correcto intentelo de nuevo");
    if (numero < numeroaAdivinar) {
        alert("El numero que buscas es mayor");
    } else {
        alert("El numero que buscas es menor");
    }
    intentosMaximos++;
    intentos++;
    numero = prompt("Introzuca un numero entre el uno al diez para adivinar el numero");
}
if(numero == numeroaAdivinar){
    document.writeln("Has acertado en =" + intentos );
} else{
    document.writeln("game over");
}


