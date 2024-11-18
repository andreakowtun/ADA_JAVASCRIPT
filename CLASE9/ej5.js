//Esta solucion pide al usuario tres números y determina cuál es el mayor de los tres.

const prompt = require("prompt-sync")({ sigint: true });

let number1 = parseFloat (prompt("Please, insert the first number "));
let number2 = parseFloat (prompt("Please, insert the second number "));
let number3 = parseFloat (prompt("Please, insert the second number "));

if (number1  > number2){
    if(number1 > number3){
        console.log(number1 + " es el mayor");
    }else{
        console.log(number3 + " es el mayor");
    }
}else if (number1< number2){
    if(number2 > number3){
        console.log(number2 + " es el mayor");
    }else {
        console.log(number3 + " es el mayor");
    }
}else{
    console.log ("all three numbers are equal");
}