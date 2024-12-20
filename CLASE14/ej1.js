//Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una función flecha para calcular el precio final.

const prompt=require("prompt-sync")();

let precio = parseFloat(prompt("ingrese el precio del producto "));
let IVA= parseFloat(prompt("ingrese el porcentaje de IVA del producto "));

let preciofinal = (a,b) => (a*(b/100)+a); 

console.log(preciofinal(precio, IVA));
