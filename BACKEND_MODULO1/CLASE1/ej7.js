//Escribe una función que reciba un array de palabras y un número, y devuelva las palabras que tienen más caracteres que el número dado.
//Usa el método filter().
//Usa una función flecha para simplificar el código.

const prompt = require("prompt-sync")();

let num = prompt ("ingrese el numero minimo de caracteres: ");
let palabras =["silla", "mesa", "smart TV", "mesada", "mocroondas"];

function palabraMasLarga(palabras, num){
    let nuevoArray = [];
    for (i=0; i< palabras.length; i++){
        if (palabras[i].length > num){
            nuevoArray.push(palabras[i]);
        }
    }return nuevoArray;
}

console.log(palabraMasLarga(palabras,num));