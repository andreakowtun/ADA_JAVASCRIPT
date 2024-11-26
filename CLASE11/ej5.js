//Escribe un programa que le pida al usuario dos números enteros (inicio y fin). 
//El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, incluyendo los límites si son pares. 
//Utiliza un ciclo for para recorrer los números entre el inicio y el fin. 
//Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos.

const prompt=require("prompt-sync")();

let begining=parseInt(prompt("enter the bottom number "));
let ending=parseInt(prompt("enter the top number "));

if(begining <= ending){
    console.log("these are the even numbers between "+begining +" and " +ending)

    for(let i=begining; i<=ending; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }

}else{
    console.log("The numbers you entered are invalid, the bottom number must be less than the top number ")
}