//Tienes una lista con varios números: [1, 2, 3, 4, 5, 6]. 
// Queremos separar y guardar únicamente los números pares en una nueva lista. 
// Los números pares son aquellos que se pueden dividir entre 2 sin dejar residuo. 
// Una vez que hayas creado la nueva lista, muéstrala en la consola.

let numeros = [1, 2, 3, 4, 5, 6];

let pares = numeros.filter(function(num){
    if (num%2 == 0){
        return num;
    }
})

console.log(pares);