var diam
diaMes = prompt("Introduce el número de días del mes:", "30");
diaMes = parseInt(diaMes);

if (isNaN(diaMes) ){
  alert("Debes introducir un número.");
} else {
  if (diaMes == 28) {
    alert("Febrero (en años no bisiestos)");
  } else if (diaMes == 29) {
    alert("Febrero (en años bisiestos)");
  } else if (diaMes == 30) {
    alert("Abril, Junio, Septiembre, Noviembre");
  } else if (diaMes == 31) {
    alert("Enero, Marzo, Mayo, Julio, Agosto, Octubre, Diciembre");
  } else {
    alert("Ningún mes tiene ese número de días.");
  }
}