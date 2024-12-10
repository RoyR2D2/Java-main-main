var edad = prompt("Introduzca su edad");
var horario = prompt("Introduzca su horario: mañana, tarde o completo");
var descuentoMañana = 25 * 0.75;
var descuentoTarde = 45 * 0.75;
var descuentoCompleto = 55 * 0.75;

if (horario == "mañana" && edad >=65) {
    document.writeln("Su cuota con descuento por edad es: " + descuentoMañana);
} else if (horario == "mañana"){
    document.writeln("Su cuota es de 25 euros")
}
if (horario == "tarde" && edad >=65) {
    document.writeln("Su cuota con descuento por edad es: " + descuentoTarde); // Se corrigió "ddocument"
} else if (horario == "tarde") {
    document.writeln("Su costo es de 45 euros")
} 
if (horario == "completo" && edad >=65) {
    document.writeln("Su cuota con descuento por edad es: " + descuentoCompleto);
} else if (horario == "completo") {
    document.writeln("Su costo es de 55 euros")
} 