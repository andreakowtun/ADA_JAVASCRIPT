//esta solucion determina si un número es par o impar

const prompt = require("prompt-sync")({ sigint: true });
let numero = prompt('Ingrese un numero: ');
let resto= numero % 2
if (resto = 0){
    console.log("el numero ingresado es par")
}else{
    console.log("el numero ingrasado es impar")
}
