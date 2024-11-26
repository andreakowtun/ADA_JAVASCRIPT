// Crea un programa que le pida al usuario un número positivo. 
// El programa deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola. 
// Usa un ciclo for para realizar la tarea.

const prompt=require("prompt-sync")();
let topNumber=parseInt(prompt("enter a positive number "));

for(let count=1; count <= topNumber; count++){
    console.log(count);
}

if (topNumber<= 0){
    console.log("please, enter a positive number");
}