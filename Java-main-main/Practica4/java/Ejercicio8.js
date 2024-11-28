var palabra;
while (true) {
    palabra = prompt("Introduzca una palabra. Para salir del bucle escriba SALIR");
    if (palabra == "SALIR"){
        break;
    }
    document.writeln(palabra + " ");
  
} 