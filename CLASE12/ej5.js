//Ejercicio 5: Uso de Arrays y Condicionales
//Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. 
//Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. 
//(Pueden desglosar en pasos el código si eso les facilita su desarrollo)

const prompt=require("prompt-sync")();

let names  = [];

for(let i=0; i < 5; i++){ 
    names[i] = prompt("enter a name ");
}

let guess= prompt("enter the name you are looking for ");
let control=false;

for (let i = 0; i < 5; i++) {  
    if (names[i] === guess) {
        control=true;
        break;
    }
}

if(control){
    console.log("congrats!");
}else{
    console.log("the name hasn't been found");
}