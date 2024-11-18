//Esta solucion pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondiente. 
//Si el número no está dentro de ese rango, muestra un mensaje de error.

const prompt = require("prompt-sync")({ sigint: true });

let dia= prompt("enter a number ");

if (dia==1){
    console.log("Monday");
}else if (dia==2){
    console.log("Tuesday");
} else if (dia == 3){
    console.log("Wednesday");
}else if (dia == 4){
    console.log("Thursday");
}else if (dia == 5){
    console.log("Friday");
}else if (dia == 6){
    console.log("Saturday");
}else if (dia == 7){
    console.log("Sunday");
}else{
    console.log("Error")
}