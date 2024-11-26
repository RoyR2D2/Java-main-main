var numero = prompt("Introduce un numero para mostrar su tabla de multiplicar:");
numero = parseInt(numero);

// Validar que la entrada sea un número
if (!isNaN(numero)) {
  document.write(" Tabla de multiplicar del " + numero );
  var multi = 1; 

  while (multi <= 10) {
    document.write(numero + " x " + multi + " = " + (numero * multi) + "<br>");
    multi++;
  }
} else {
  document.write("Por favor, introduce un número válido.");
}