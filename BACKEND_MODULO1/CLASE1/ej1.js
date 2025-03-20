//Tienes un parque de diversiones que permite la entrada a personas mayores de 12 años y 
// menores de 60. Escribe una función que reciba una lista de edades y devuelva cuántas personas pueden entrar al parque.
//Usa un bucle for y condicionales.
//Usa un array como entrada de la función.
//Devuelve el número de personas que cumplen con los requisitos.

let edades = [12, 4, 52, 63, 48, 50, 18];

function cuantasPersonasIngresan(arreglo){
    let suma=0;
    for ( let i=0; i <= edades.length; i++){
        if (edades[i]>= 12 && edades[i]< 60){
            suma ++;
        }
    }return suma;
}

console.log("la cantidad de personas que ingresan al parque es de " + cuantasPersonasIngresan(edades));