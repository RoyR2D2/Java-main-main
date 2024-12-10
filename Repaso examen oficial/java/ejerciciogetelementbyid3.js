function tomate() {
    var nombre = document.getElementById("nombre").value;
    var chekedSmr = document.getElementById("SMR").checked;
    var chekedDAW = document.getElementById("DAW").checked;
    var chekedDAM = document.getElementById("DAM").checked;
    var chekedASIR = document.getElementById("ASIR").checked;
    if (chekedSmr) {
        alert("Su nombre es " + nombre + " y usted estudia SMR" )
    } else if (chekedDAW) {
        alert("Su nombre es " + nombre + " y usted estudia DAW" )
    } else if (chekedDAM) {
        alert("Su nombre es " + nombre + " y usted estudia DAM" )
    } else if (chekedASIR) {
        alert("Su nombre es " + nombre + " y usted estudia ASIR" )
    }
}