var valorusuario = prompt("Introduzca un numero entre 0 y 10");
while (valorusuario < 0 || valorusuario > 10) {
    document.writeln("Vuelva a introducir el numero");
    prompt("Has introducido mal el numero introduce uno entre 0 y 10");
}
document.writeln("Has introducido el numero " + valorusuario);