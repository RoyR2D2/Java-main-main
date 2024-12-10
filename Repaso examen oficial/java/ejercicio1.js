var nombre = prompt("Introduzca su nombre")
var apellidos = prompt("Introduzca sus apellidos")
var curso = prompt("Introduzca el curso que cursa")
    if (isNaN(curso)) {
        alert("por favor introduzca el curso con numeros")
    } else {
    document.writeln("Nombre: " + nombre + "<br>" + "Apellidos: " + apellidos + "<br>" + "Curso: " + curso)
    }
