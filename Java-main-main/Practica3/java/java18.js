var nombreMes
nombreMes = prompt("Introduzca el nombre de un mes 2024 en minusculas");
switch (nombreMes) {
    case "enero":
    case "marzo":
    case "octubre":
    case "julio":
    case "mayo":
    case "agosto":
    case "diciembre":alert("El mes tiene 31 dias");
    break;
    
    case "febrero":alert("El mes tiene 28 dias")
    break;
    case "abril":
    case"junio":
    case"septiembre":
    case"noviembre":alert("El mes tiene 30 dias")
    break;
    default:document.writeln("El nombre debe ir en mayusculas")    
}
