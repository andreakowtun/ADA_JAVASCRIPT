//Crea una función declarada llamada calcularAreaTriangulo que reciba dos parámetros: 
// //la base y la altura de un triángulo. La función debe devolver el área del triángulo.

const prompt=require("prompt-sync")();
let base = parseFloat(prompt("ingrese la base del triangulo: "));
let altura = parseFloat(prompt("ingrese la altura del triangulo: "));

function calcularAreaTriangulo(base, altura){
    let area=(base*altura)/2
    return area 
}

console.log("el area del triangulo es: ", calcularAreaTriangulo(base, altura));