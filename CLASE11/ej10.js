// Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. 
// Luego, pide al usuario que adivine el número hasta 3 intentos. 
// Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. 
// Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio.

const prompt = require("prompt-sync")();

let correct=false;
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

console.log("welcome! I'm choosing a numer from 1 to 10 and you have to guess it in 3 attempts, are you ready?");
for(i=1; i<=3 ; i++){
    let guess=prompt("guess the nuember! ");
    
    if (guess==numeroSecreto){
        correct=true
        console.log("congratulations, you guessed it!");
        break;
    }else{
        console.log("try again, you have", 3-i, "attempts left");
    }

}
 
if (!correct){
    console.log("I'm sorry , the number was: ", numeroSecreto);
}