//Escribe una función que reciba un array de números y devuelva un nuevo array sin números repetidos.
//Usa el objeto Set para eliminar duplicados.
//Convierte el Set a un array usando el operador spread (...).

let numeros = [1, 2, 2, 3, 4, 4, 5, 5];

function eliminarDuplicados(array) {
    let conjuntoUnico = new Set(array);
    
    let arraySinDuplicados = [...conjuntoUnico];
    
    return arraySinDuplicados;
}

console.log(eliminarDuplicados(numeros)); 
