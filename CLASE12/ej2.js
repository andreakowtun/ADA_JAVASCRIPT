//Ejercicio 2: Do While
//Escribe un programa que solicite al usuario ingresar una contraseña. 
//Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la correcta. La contraseña correcta es "1234".

const prompt=require("prompt-sync")();

const correct= 1234;
let password;

do {
    password=parseFloat(prompt("enter your password "));
}while (password!==correct);

console.log("correct password");