//Esta solucion pide al usuario que ingrese su peso en kilogramos los cuales convierte a libras y muestra el resultado por pantalla.

const prompt = require("prompt-sync")({ sigint: true });

let kg = parseFloat (prompt("Please, enter your wight in kg "));

let pounds = kg * 2.20462

console.log("your weight in pounds is: " + pounds);