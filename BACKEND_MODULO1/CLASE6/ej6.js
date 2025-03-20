//Requisitos del programa:
// 1.Usa rl.setPrompt() para personalizar el mensaje que se muestra al usuario.
// 2.Usa el evento 'line' para procesar cada palabra que el usuario ingrese.
// 3.Si el usuario escribe "salir", el programa debe despedirse y finalizar.
// Indicaciones:
// 1.Crea un archivo llamado app.js para el código.
// 2.Configura la interfaz de readline y procesa las entradas del usuario.
// 3.Usa el evento 'line' para manejar cada palabra ingresada.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.setPrompt('Ingresa una palabra (o "salir" para acabar el programa) ');
rl.prompt();

rl.on('line', (input)=>{
    if(input.toLowerCase() != 'salir'){
        console.log('Has ingresado '+ input.toUpperCase());
        rl.prompt();
    }else{
        rl.close();
    }    
})

rl.on('close',()=>{
    console.log('Gracias por utilizar el programa');
    process.exit(0); 
})