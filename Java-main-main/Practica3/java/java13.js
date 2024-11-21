var edad;
edad = parseInt(edad);
edad = prompt("Introduzca su edad");
if (edad <= 5) {
    document.writeln("Debe estar en preescolar");
} else if (edad <= 11) {
    document.writeln("debe estar en primaria");
} else if (edad <= 16) {
    document.writeln("debe estar en la eso");
} else if (edad <= 21) {
    document.writeln("debe estar en bachiller o ciclos");
} else if (edad >= 21) {
    document.writeln("debe estar en la universidad");
}  