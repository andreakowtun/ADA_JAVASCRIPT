//Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor.

const prompt=require("prompt-sync")();


let edad = prompt("ingrese su edad ");

let clasificacion = edad => { 
    if (edad < 12) { console.log('niño'); 
    } else if (edad < 18) { 
        console.log('adolescente'); 
    } else if (edad < 60) {
        console.log('adulto'); 
    } else { 
        console.log('adulto mayor'); 
    } 
}

clasificacion(edad);