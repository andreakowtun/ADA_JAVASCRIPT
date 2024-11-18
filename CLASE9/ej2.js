//esta solucion pide al usuario que ingrese un número y verifica si está dentro del rango definido.

const prompt = require("prompt-sync")({ sigint: true });

const RANGO_MINIMO=10
const RANGO_MAXIMO=100

let numberUser= prompt("Please, insert a number ")

if (numberUser <= RANGO_MAXIMO && numberUser >= RANGO_MINIMO) {
    console.log("The number entered is within the range")
}else{
    console.log("The number entered is not within the range")
}
