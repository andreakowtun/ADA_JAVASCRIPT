// Escribe un programa que calcule el precio final de un producto después de aplicar un descuento. 
//Pide al usuario que ingrese el precio original y el porcentaje de descuento, y muestra el precio final.

const prompt=require ("prompt-sync")();
let price= parseFloat(prompt("enter the price of the item you want to buy "));
let discount= parseInt(prompt("enter the corresponding discount percentage "));
let finalPrice= price-(price*(discount/100));

console.log("the final price is $" +finalPrice);