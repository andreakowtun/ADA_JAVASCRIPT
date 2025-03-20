//Escribe una función que reciba un array de números y devuelva el promedio.
//Usa un bucle for para sumar los números.
//Divide la suma total entre la cantidad de elementos del array.

let notas = [6,5,8,10,7];

function calcularPromedio(notas){
    let total = 0;
    for(let i=0; i < notas.length; i++){
        total += notas[i];        
    }
    let promedio = total / notas.length;
    return promedio;
}

console.log(calcularPromedio(notas));