//esta solucion pide al usuario que ingrese las longitudes de los tres lados de un triángulo y determina que tipo de triángulo es.

const prompt = require("prompt-sync")({ sigint: true });

let sideA= prompt("enter one side of the triangle ");
let sideB= prompt("enter other side of the triangle ");
let sideC= prompt("enter the last side of the triangle ");

if (sideA == sideB) {
    if (sideB == sideC){
        console.log("This is an Equilateral triangle");
    }else{
        console.log("This is an Isosceles triangle");
    }
}else{
    if (sideB != sideC){
        if (sideA != sideC){
            console.log("This is an Scalene triangle");
        }
    }else {
        console.log("This is an Isosceles triangle");
    }
}