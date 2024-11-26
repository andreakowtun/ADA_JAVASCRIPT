//Suma de dos números ingresados por el usuario

const prompt = require("prompt-sync")({ sigint: true });

let numero1 = parseFloat(prompt('Ingrese un numero: '));
let numero2 = parseFloat(prompt('Ingrese un numero: '));

let suma = numero1 + numero2;
console.log(suma);
