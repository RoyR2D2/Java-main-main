var numero = prompt("Introduzca un numero");
var numeroprincipio = 1;
numeroprincipio = parseInt(numeroprincipio);
numero = parseInt(numero);
if(isNaN(numero)){
    alert("Errror, introduzca un numero valido")
}else {

    while(numeroprincipio <= numero) {
        document.writeln(numeroprincipio);
        numeroprincipio++; 
    }
    while(numeroprincipio >= numero) {
        document.writeln(numero);
        numero++
    }
}