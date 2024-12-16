//Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo. 
//Luego, imprime la suma de todos los números ingresados.

const prompt=require("prompt-sync")();

let number=parseFloat(prompt("enter a number "));
let sum= 0;

while(number >=0){
    sum+=number;
    number=parseFloat(prompt("enter a number "));
}

console.log("the sum of all the numbers is: "+sum);