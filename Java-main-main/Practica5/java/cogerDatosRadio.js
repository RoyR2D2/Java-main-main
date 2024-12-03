function escribeNombre() {
    var nombre = document.getElementById("nombre").value;
    document.getElementById("patata").innerHTML = nombre 
    //Me dice si ha clicado femenino o no
    
    var femeninoChecked = document.getElementById("cocina").checked;
    var masculinoChecked = document.getElementById("gym").checked;

    if(femeninoChecked == true) {
        alert("usted ha clicado femenino")
    }
    if(masculinoChecked == true) {
        alert("usted ha clicado masculino")
    }
    }

    