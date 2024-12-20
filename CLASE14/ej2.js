//Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio.

const prompt=require("prompt-sync")();

let notas5 = []
function Notas(){
    for(let i=0; i<5; i++){
        let entrada = parseFloat(prompt("ingrese la nota del alumno "));
        notas5[i]=entrada; 
    }
}
Notas()
console.log(notas5)


let promedio = notas5 => {
    let suma=0
    for (let i=0; i<5 ; i++){
        suma += notas5[i]
    }
    return suma/5
}

console.log("el promedio del alumno es ", promedio(notas5));