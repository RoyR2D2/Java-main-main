var estudios;
var edad;
estudios = prompt("Donde has realizado tus estudios");
edad = prompt("Introduzca su edad");
edad = parseInt(edad);
if (estudios == "Zaragoza" && edad <= 18 && edad >= 15) {
    document.writeln("Puedes acceder a la universidad de zaragoza");
}else {
    document.writeln("No puedes acceder")
}
    
