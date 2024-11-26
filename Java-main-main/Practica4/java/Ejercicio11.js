var contador = 1;
var suma = 0;

while (contador <= 10) {
  var numero = prompt("Introduce el numero " + contador + ":");
  numero = parseInt(numero); 

  // Validar que la entrada sea un número
  if (!isNaN(numero)) {
    suma += numero;
    contador++;
  } else {
    alert("Por favor, introduce un número válido.");
  }
}

document.write("La suma de los 10 numeros es: " + suma);