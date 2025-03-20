//Crea un programa interactivo que pregunte al usuario su nombre y 
// lo use en un mensaje de despedida. Usa variables de entorno para personalizar el saludo inicial.
//Requisitos del programa:
//1.Usa una variable de entorno llamada START_MESSAGE para configurar el saludo inicial.
//2.Usa readline para preguntar el nombre del usuario.
//3.Despídete del usuario con un mensaje personalizado.

require('dotenv').config();

const readline = require('readline');

const start_message = process.env.START_MESSAGE || 'Hi ';
console.log(start_message);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



rl.question('whats your name? ', (name)=>{
    console.log('See you soon ' + name+' <3');
    rl.close();
});

rl.on('close', ()=>{
    console.log('Thank you for using the program <3');
    process.exit(0);
})

