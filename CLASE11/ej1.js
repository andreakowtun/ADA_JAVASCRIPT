// Escribe un programa que le pida al usuario un número cualquiera. 
// El programa deberá analizar si el número ingresado es positivo, negativo o cero. 
// Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.

const prompt=require("prompt-sync")();

let number=parseFloat(prompt("enter a number "));

let result1 = number > 0 ? "this number is a positive" : "this number is a negative";
let result2 = number == 0 ? "this number is zero" : result1;
console.log(result2);

//sino 
if (number > 0){
    console.log("this number is a positive");
}else if (number <0){
    console.log("this number is a negative");
}else{
    console.log("this number is zero");
}
