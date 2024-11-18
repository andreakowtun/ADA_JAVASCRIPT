//Esta soucion pide al usuario que ingrese el radio de un círculo y calcula su área y perímetro utilizando la constante PI.

const prompt = require("prompt-sync")({ sigint: true });

const pi=3.14159;
let radio=prompt("enter the circle's radio ");
let area= pi*radio**2;
let perimeter= pi*2*radio;

console.log("the circle's area is : " + area );
console.log("the circle's perimeter is " + perimeter );
