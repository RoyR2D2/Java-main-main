var palabra
while (palabra != "SALIR" && palabra != "salir"){
    palabra = prompt("introduzca palabras, si quiere parar el bucle escriba SALIR") 
    document.writeln(palabra)
}