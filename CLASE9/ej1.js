//esta solucion pise al usuario que ingrese dos números y muestra cuál es mayor o si son iguales.

const prompt = require("prompt-sync")({ sigint: true });

let number1=prompt("Please, insert the first number ");
let number2=prompt("Please, insert the second number ");

if (number1  > number2){
    console.log(number1 + " es mayor a " + number2);
}else if (number1<number2){
    console.log(number1 + " es menor a " + number2);
}else {
    console.log (number1 + " and " + number2 + "are equals");
}
