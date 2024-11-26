//Escribe un programa que le pida al usuario un número entero positivo y muestre todos los múltiplos de ese número entre 1 y 100. 
//Utiliza un ciclo for para resolverlo.

const prompt=require("prompt-sync")();

let positive=parseInt(prompt("enter a positive number please "));

if (positive <= 0){
    console.log("enter a positive number")
}
for(let i=1; i<=100; i++){
    if(i%positive === 0){
        console.log(i);
    }
}