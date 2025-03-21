// Crea un cliente TCP que:
// 1.Se conecte a un servidor en localhost:5000.
// 2.Cuando la conexión se establezca, envíe el mensaje: "¡Hola, servidor!".
// 3.Escuche los datos recibidos y los muestre en consola.
// Pistas
// •Usa net.createConnection() para conectar al servidor.
// •Maneja el evento 'connect' para saber cuándo la conexión está lista.
// •Usa client.write() para enviar el mensaje.
// •Captura los datos con el evento 'data'.

const net = require('net');

const PORT = 5000;
const HOST =  'localhost';

//coneccion al servidor
const client = net. createConnection({port: PORT, host: HOST}, ()=>{
   
    client.write('¡Hola, servidor!');
    client.connect()
    
})

client.on('connect', ()=>{
    console.log('conectado al servidor');
});

client.on('error', (err)=>{
    console.log('Error: ', err.message);
});