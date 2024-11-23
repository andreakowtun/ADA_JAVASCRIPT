//Esta solucion valida que nuestros encuestados sean de 18 años de edad mínima y 99 años de edad máxima.


const prompt = require("prompt-sync")();

const EDAD_MINIMA=18
const EDAD_MAXIMA=99
let EDAD= parseInt (prompt("enter your age "));

if (EDAD >= EDAD_MINIMA && EDAD <= EDAD_MAXIMA){
    console.log("You are within the allawed age reange");
}else{
    console.log("You aren't within the allawed age reange");
}
