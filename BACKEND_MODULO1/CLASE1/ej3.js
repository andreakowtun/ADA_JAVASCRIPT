//Crea una función que reciba un array de números y 
// devuelva un nuevo array con los números ordenados de menor a mayor.
//Usa el método sort().

let numeros = [5, 2, 9, 1, 7];

function ordenarNumeros(numeros){
    return numeros.sort((a, b) => a - b);
};

console.log(ordenarNumeros(numeros));