//Crea una función declarada llamada contarHasta que reciba un número y use un bucle para imprimir todos los números desde 1 hasta ese número.

const prompt=require("prompt-sync")();

let hasta = parseInt(prompt("ingrese un nuemero tope para la impresion "));

function contarHasta(num){
    for(let i=0; i<= num; i++){
        console.log(i);
    }
}

contarHasta(hasta);