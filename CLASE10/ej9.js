// Escribe un programa que calcule el Índice de Masa Corporal (IMC).
// Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
// Pista 2: La fórmula puede representarse asi:let imc = peso / (altura * altura);

const prompt = require("prompt-sync")();

let weigh= parseFloat(prompt("enter your weight"));
let height= parseFloat(prompt("enter your height"));
let imc = weigh / (height * height);

console.log("your IMC is "+ imc);
