//Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
// ¿Cuál es la posición del número 1?
// ¿Cuál es la posición del número 5?
// ¿Cuál es la posición del número 6?
// ¿Cuál es la posición del número 9?
// ¿Cuál es la posición del número 11?
// Sabemos que responder estas preguntas es extremadamente fácil, ya que 
// podemos leer el array, y determinar con un cálculo visual la posición de cada elemento, pero, 
// la propuesta que les hago es que codeen un algoritmo de búsqueda binaria, que “busque” ese número,
//  por ejemplo, el 6, y nos indique por consola la posición del mismo.
// El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir complejidad extra.
const prompt=require("prompt-sync")();
let list = [1,2,3,4,5,6,7,8,9,10,11];

const busquedaBinaria = (list, item) =>{
    let low = 0;
    let high = list.length -1;
    while (low <= high){
        const mid = Math.floor((low+high)/2)
        const adivinar = list [mid];
        if (adivinar === item){
            return mid
        }
        if(adivinar > item){
            high = mid -1;
        }else{
            low = mid +1;
        }

    }
    return null
}

console.log("La posicion del numero 1 es ",busquedaBinaria(list, 1));
console.log("La posicion del numero 5 es ",busquedaBinaria(list, 5));
console.log("La posicion del numero 6 es ",busquedaBinaria(list, 6));
console.log("La posicion del numero 9 es ",busquedaBinaria(list, 9));
console.log("La posicion del numero 11 es ",busquedaBinaria(list, 11));