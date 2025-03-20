const net = require('net');

const options = {
    port:8080,
    host : '127.0.0.1'
}

const client = net.createConnection(options);
//manejo de eventos
client.on('connect', ()=>{
    console.log('conexion satisfactoria ');

    client.write('/home/user/documento.txt'); // Comando 1: Ruta absoluta
    client.write('documento.txt'); // Comando 2: Ruta relativa
    client.write('/another/path/to/file'); // Comando 3: Otra ruta absoluta
})

client.on('data', (data)=>{
    console.log(data.toString());
    client.end();  
})

client.on('end',()=>{
    console.log('desconectado del server');
})
