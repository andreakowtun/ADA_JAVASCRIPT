//Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. Realiza las siguientes acciones:
//1.Inicializa un array vacío para almacenar las flores favoritas.
//2.Pregunta al usuario por sus tres flores favoritas utilizando prompt y 
// agrega cada una al array manualmente (sin usar métodos como push).
//3.Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.
//4.Muestra por consola cuántas de las flores favoritas se mencionaron (esto debe hacerse manualmente).

const PromptSync = require("prompt-sync");

let floresFav =[];

const prompt=require("prompt-sync")();

let flor1 = prompt("ingrese su flor favorita ");
let flor2 = prompt("ingrese su flor favorita ");
let flor3 = prompt("ingrese su flor favorita ");

floresFav[0] = flor1;
floresFav[1] = flor2;
floresFav[2] = flor3;

let busqueda = prompt("Ingrese la flor que desea encontrar ");
let suma=0
for (let i=0; i<= floresFav.length; i++){
    if(floresFav[i]==busqueda){
        suma ++
    }
}

if(suma !== 0){
    console.log("la flor "+busqueda+" se encuentra "+suma+" vez(s)");
}else{
    console.log("la flor "+busqueda+" no se encuentra");
}

