//Modifica el cliente del Ejercicio 1 para que:
//1. Si después de 5 segundos no ha recibido una respuesta, cierre la conexión.
//2. Muestre " Tiempo de espera agotado" en la consola antes de
//cerrar.
// Pistas
//• Usa client.setTimeout() con 5000 milisegundos.
//• Cuando el timeout ocurra, usa client.end() para cerrar la conexión.

const net = require('net');

const PORT = 5000;
const HOST =  'localhost';

//coneccion al servidor
const client = net. createConnection({port: PORT, host: HOST}, ()=>{
   
    client.write('¡Hola, servidor!');
    client.connect();

    setTimeout(()=>{
        console.log('Tiempo de espera agotado');
        client.end();
    },5000);
    
})

client.on('end', ()=>{
    log('Fin de la conexion');
})

client.on('connect', ()=>{
    console.log('conectado al servidor');
});

client.on('error', (err)=>{
    console.log('Error: ', err.message);
});

