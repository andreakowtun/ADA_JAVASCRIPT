//Escribe un programa que le pida al usuario un número y determine si es par o impar. 
//Muestra un mensaje explicativo indicando qué significa cada caso.

const prompt=require("prompt-sync")();
let number=parseInt(prompt("enter a number please "));

let parity= (number % 2) == 0? "this number is even" : "this number is uneven"
console.log("parity: "+parity);
