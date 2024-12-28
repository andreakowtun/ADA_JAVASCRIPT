//deberán ordenar primero la lista, de menor a mayor, utilizando bubble sort. Luego, respondan las siguientes preguntas:
// ¿Cuál es la posición del número 12?
// ¿Cuál es la posición del número 5?
// ¿Cuál es la posición del número 22?
// ¿Cuál es la posición del número 100?

const prompt=require("prompt-sync")();
let list = [12,3,5,7,1,22,47,100];

//orden Bubble sort
for (let i=0; i< list.length; i++){
    for (let j=0; j< list.length-1; j++){
        if (list[j] > list[j+1]){
            let temp = list[j];
            list[j]=list[j+1];
            list[j+1]=temp
        }
    }
}

console.log(list);


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

console.log("La posicion del numero 12 es ",busquedaBinaria(list, 12));
console.log("La posicion del numero 5 es ",busquedaBinaria(list, 5));
console.log("La posicion del numero 22 es ",busquedaBinaria(list, 22));
console.log("La posicion del numero 100 es ",busquedaBinaria(list, 100));
