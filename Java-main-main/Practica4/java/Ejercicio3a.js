var numero = -100;
numero = parseInt(numero);
while (numero <= 100) {
  if (numero % 10 === 0) {
    document.writeln(numero + "<br>"); // Usamos <br> para el salto de línea en HTML
  } else {
    document.writeln(numero + " ");
  }
  numero++;
}