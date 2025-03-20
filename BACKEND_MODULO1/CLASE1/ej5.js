//Escribe una función que reciba un nombre completo y devuelva las iniciales en mayúsculas.
//Usa el método split() para dividir el nombre.
//Usa un bucle for y métodos de string.

const prompt=require("prompt-sync")();

let nombre= prompt("ingrese un nombre: ");

function generarIniciales(nombre){
    // Divido el nombre completo en palabras usando el método split() 
    let palabras = nombre.split(" "); 
    //variable para guardar iniciales
    let iniciales = ""; 
    // Recorro cada palabra y agrago la primera letra en mayúsculas a las iniciales 
    for (let palabra of palabras) { 
        iniciales += palabra.charAt(0).toUpperCase(); 
    } return iniciales;
}

console.log(generarIniciales(nombre));