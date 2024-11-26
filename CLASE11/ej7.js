//Crea un programa que le pida al usuario dos números y una operación matemática a realizar: 
//suma, resta, multiplicación o división. Según la operación ingresada, el programa deberá calcular y mostrar el resultado. 
//Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error. Usa switch para resolverlo.

const prompt=require("prompt-sync")();

let number1=parseInt(prompt("enter a number "));
let number2=parseInt(prompt("enter a number "));

let operation=prompt("enter the operation you want (addition, substraction, multiplication, division): ").toLocaleLowerCase();

switch (operation){
    case "addition":
        console.log(number1 + number2);
        break
    case "substraction":
        console.log(number1 - number2);
        break
    case "multiplication":
        console.log(number1 * number2);
        break
    case "division":
        if(number2 != 0){
            console.log(number1 / number2);
        }else{
            console.log("no number can be divided by zero");
        }
        break
    default:
        console.log("invalid entry");
}