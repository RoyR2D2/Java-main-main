alert("Hola Mundo");

// Pida por teclado un numero entero (la edad)al usuario
// Declaramos la variable edad
var edad;
//Pidir por prompt la edad, ahora edad tendrá
// el valor que el usuario haya escrito
edad = prompt("Escriba su edad: ");

var nombre;
nombre = prompt ("Escriba su numbre");

alert ("Su nombre es " + nombre + "y su edad es " + edad);
// ojo edad es una bariable de tipo cadena porque el prmpt devuelve
// todo como cadena
edad = parseInt(edad) + 3;

alert ("Su edad dentro de 3 años será..." + edad);