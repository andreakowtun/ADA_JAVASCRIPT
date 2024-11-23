// Este programa pide al usuario su nombre, su edad y su peso y luego muestra un mensaje personalizado que incluya toda esta información.

const prompt = require("prompt-sync")();


let name= prompt("enter your name ");
let age =prompt("enter your age ");
let weight=prompt("enter your weight ");

console.log("Welcome! " + name + ", you are " +age + " years old and weigh " + weight + " kg");