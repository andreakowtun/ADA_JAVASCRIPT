//Crea una función declarada llamada esPar que reciba un número y devuelva "Es par" si el número es par o "Es impar" si el número es impar. 
//Usa una variable local para guardar el resultado.


const prompt=require("prompt-sync")();

let numero = parseInt(prompt("ingrese un numero "));

function parImpar(num){
    let resultado;
    if(num % 2 ==0){
        resultado= num+' es par';
    }else{
        resultado=num+' es impar';
    }
    return resultado;
}

console.log(parImpar(numero));