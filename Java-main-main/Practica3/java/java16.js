var nota1E;
var nota2E;
var nota1T;
var nota2T;
var resultadoExamen;
var restadoTrabajos;
var mediaFinal;

// Primero obtener los valores del usuario
nota1E = prompt("Nota del primer examen");
nota2E = prompt("Nota del segundo examen");
nota1T = prompt("Nota del primer trabajo");
nota2T = prompt("Nota del segundo trabajo");

// Luego convertir a enteros
nota1E = parseInt(nota1E);
nota2E = parseInt(nota2E);
nota1T = parseInt(nota1T);
nota2T = parseInt(nota2T);
mediaFinal = parseInt(mediaFinal);

// Calcular el resultado
resultadoExamen = ( (nota1E + nota2E) / 2);
restadoTrabajos = ( (nota1T + nota2T) /2);
mediaFinal = (resultadoExamen * 0.85 + restadoTrabajos * 0.15);
if (mediaFinal >=5  && resultadoExamen >= 4.5 && restadoTrabajos >= 4.5) {
    document.writeln("Has aprobado tu nota es= " + mediaFinal)
} else {
    document.writeln("has suspendido tu nota es= " + mediaFinal)
}

