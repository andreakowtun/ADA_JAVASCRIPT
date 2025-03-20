//Crea un programa interactivo que permita convertir temperaturas de grados Celsius a Fahrenheit. 
// Este ejercicio te ayudará a practicar el uso del módulo readline para manejar entradas del usuario y aplicar cálculos básicos. 
// Además, incluye un mensaje personalizado de bienvenida configurado a través de variables de entorno.
//Requisitos del programa:
//1.Usa una variable de entorno llamada WELCOME_MESSAGE para mostrar un mensaje inicial. 
// Si no se define, usa "¡Bienvenido al conversor de temperaturas!" por defecto.
//2.Usa el módulo readline para solicitar al usuario una temperatura en grados Celsius.
//(Se pueden ayudar buscando como es la fórmula en código en internet)
//4.Muestra el resultado en la consola.
//5.Despídete del usuario al final.
//Indicaciones:
//1.Crea un archivo llamado app.js para el código.
//2.Usa dotenv para cargar el mensaje de bienvenida desde el archivo .env.
//3.Configura la interfaz con readline y calcula la conversión.
//4.Ejecuta el programa y prueba ingresando diferentes valores de temperatura.

require ('dotenv').config();

const readline = require('readline');

const welcome_message = process.env.WELCOME_MESSAGE || "¡Bienvenido al conversor de temperaturas!";

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(welcome_message)
rl.question('Ingrese temperatura en grados celcius ', (gradosCelcius)=>{
    const conversion = (gradosCelcius * 9/5) + 32;
    console.log('La temperatura en grados Farenheit es: '+conversion);
    rl.close()
});

rl.on('close', ()=>{
    console.log('Gracias por usar el programa <3');
    process.exit(0)
});