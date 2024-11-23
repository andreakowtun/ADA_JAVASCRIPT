//Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit. 
//Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.
// Pista 2: La fórmula puede representarse asi:

const prompt = require("prompt-sync")();

let celsius = parseFloat(prompt("enter the temperature in celsius"));

let fahrenheit = celsius * 9 / 5 + 32;

console.log("the termperature i fahrenheit degrees is " + fahrenheit);
