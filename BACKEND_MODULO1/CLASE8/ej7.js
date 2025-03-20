// Crea un cliente que:
// 1.Se conecte al servidor.
// 2.Si hay un error en la conexión, use client.destroy() y 
// muestre " Conexión destruida".
// Pistas
// •client.destroy() libera los recursos del socket de inmediato.

const net = require ('net');

const PORT = 5000;
const HOST = 'localhost';

const client=net.createConnection({port:PORT, host:HOST},()=>{
    client.connect();

    client.write('¿Sigues ahí, servidor?');
    
    
    setTimeout(()=>{
        console.log('Pausando la recepcion de datos');
        client.pause()

        setTimeout(()=>{
            console.log('Reanudando la recepcion de datos');
            client.resume();

            client.write('Otro mensaje...');
        },3000)
    },3000); 
    
    client.end();
    client.error();
    
});

client.on('end', ()=>{
    console.log('Servidor cerró la conexión');
})

client.on('connect', ()=>{
    console.log('conectado al servidor');
});

client.on('error', (err)=>{
    console.log('Error: ', err.message);
    client.destroy();
});

client.on('destroy', ()=>{
    console.log('Conexión destruida');
});