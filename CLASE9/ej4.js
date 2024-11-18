//Esta solucion pide al usuario que ingrese su nombre y verifica si el nombre ingresado es igual a tu nombre (autor del codigo).

const prompt = require("prompt-sync")({ sigint: true });

let name=prompt("what's your name? (Please, enter your the first letter in capital) ");
const myName="Andrea";

if (name == myName){
    console.log ("tocayasss <3");
}else {
    console.log ('not tocayas :(');
}
