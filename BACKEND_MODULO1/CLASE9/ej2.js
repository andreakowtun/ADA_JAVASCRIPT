// Simular un cliente que pausa la recepción de datos por 5 segundos y luego la reanuda.
// El cliente debe: Conectarse al servidor y enviar un mensaje inicial. 
// Escuchar el evento 'data' y mostrar los datos en consola. 
// Pausar la recepción de datos usando client.pause() a los 3 segundos. 
// Reanudar la recepción de datos con client.resume() a los 8 segundos. 
// Finalizar la conexión tras 15 segundos.

const net = require('net');

const PORT = 5000;
const HOST = 'localhost'

const client = net.createConnection({port: PORT, host: HOST}, ()=>{
    console.log('conectando al server');
    client.write('Hola servidor!');
    
    
});

client.on('connect',()=>{
    console.log('se encuentra conectado al servidor');
});

client.on('data',(data)=>{
    console.log('mensaje del servidor', data.toString);
});

setTimeout(() =>{
    client.pause();
    console.log('se ha pausado la receocion de datos');    
}, 3000);

setTimeout(() =>{
    client.resume();
    console.log('se ha reanudado la receocion de datos');    
}, 5000);

setTimeout(() =>{
    console.log('cerrando la conexion');
    client.end();
}, 15000);

client.on('error',(err)=>{
    console.log('Error: ', err.message);    
});