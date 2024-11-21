function comprobarUsuario() {
    let edad = parseInt(prompt("Introduce tu edad:"));
    let localidad = prompt("Introduce tu localidad de residencia:");
  
    if (edad > 25 && localidad.toLowerCase() === "zaragoza") {
      alert("Enhorabuena");
    } else if (localidad.toLowerCase() === "zaragoza") {
      alert("Casi te doy la enhorabuena");
    }
  }
  
  comprobarUsuario();