//Solicita al usuario la cantidad de productos comprados y el precio unitario. 
//Usa una función flecha para calcular el total con descuento según la cantidad.

const prompt=require("prompt-sync")();

let precio = parseFloat(prompt("ingrese el precio del producto "));
let cantidad = parseInt(prompt("ingrese la cantidad "));

let descuento = (precio, cantidad) => {
    let resultado = 0
    if(cantidad>=3){
        resultado = (precio * cantidad) - 0.25;
    }else if(cantidad>=5){
        resultado = (precio *cantidad) - 0.35;
    }else if(cantidad>=10){
        resultado = (precio * cantidad) -0.45;
    }else{
        resultado = "no hay descuento";
    }
    return resultado;
}

console.log(descuento(precio, cantidad));