//Solicita al usuario ingresar la marca de un auto y utiliza una función flecha 
// para verificar y mostrar si el auto es de origen nacional o importado. 
// Considera que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de origen nacional.

const prompt=require("prompt-sync")();

const marcasNacionales = ["Chevrolet", "Ford" , "Fiat"];

let esNacional = marcasNacionales => {
    let marcaAuto = prompt("ingrese la marca de su vehiculo ");
    if(marcasNacionales.includes(marcaAuto)){
        console.log("su vehiculo es de origen nacional");
    }else{
        console.log("su vehiculo no es de origen nacional");
    }
}

esNacional(marcasNacionales);