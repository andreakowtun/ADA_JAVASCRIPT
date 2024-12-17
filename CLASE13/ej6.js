//Crea una función declarada llamada convertirHorasAMinutos 
//que reciba un número de horas como parámetro y devuelva el total en minutos.

const prompt=require("prompt-sync")();

let hora = parseInt(prompt("ingrese un nuemero de horas para convertirala a minutos "));

function convertirHorasAMinutos(horas){
    return horas*60 + " minutos";
}

console.log(convertirHorasAMinutos(hora));