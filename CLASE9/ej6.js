//Esta solucion verifica si el usuario es mayor o menor de edad y muestra un mensaje personalizado según el caso.

const prompt = require("prompt-sync")({ sigint: true });

const oldEnough= 18;
let age = prompt("How old are you? ");

if (age>= oldEnough){
    console.log("Congrats! you can have a driver's licence and go to jail <3");
}else{
    console.log("Congrats! you can't go to jail yet <3");
}
