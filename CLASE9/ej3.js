/*Declara dos variables booleanas condicion1 y condicion2. 
Pide al usuario que ingrese dos valores booleanos (true o false) 
y muestra el resultado de diversas combinaciones lógicas.*/

const prompt = require("prompt-sync")({ sigint: true });

let married=prompt("Are you married? ");
let withKids=prompt("Do you have kids? ");

if (married==true) and (withKids==true);{
    console.log("woow! you are full of responsabilities");
}if (married==true) and (withKids==false); {
    console.log("Enjoy before having kids!");
}

/*if (married==true) or (withKids==true);{
    console.log("woow! you are full of responsabilities");
}*/




