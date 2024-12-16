//Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos. 
//Luego, escribe un algoritmo para sumar todos los números en la matriz.

let matriz=[
    [10,3,2,1,4],
    [5,5,10,100,4],
    [5,125,10,35,4],
    [5,5,62,100,4]
];

let suma=0;

for (let i=0; i < matriz.length; i++){
    for(let j=0; j < matriz[i].length; j++){
        suma += matriz[i][j];
    }
}
console.log(suma)