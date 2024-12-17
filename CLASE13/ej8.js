//Convertir grados Celsius a Fahrenheit (Ejercicio entrevista) 
//Crea una función expresada llamada convertirCelsiusAFahrenheit 
//que reciba una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.

const prompt=require("prompt-sync")();

let celsius = parseFloat(prompt("ingrese la temperatura en grados celsius "));
let convertirCelsiusAFahrenheit = function(gradosCelsius){
    return ((gradosCelsius*9/5)+32);
}

console.log(convertirCelsiusAFahrenheit(celsius));