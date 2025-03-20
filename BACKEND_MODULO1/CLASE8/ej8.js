// Crea un cliente que:
// 1.Use client.unref() para permitir que Node.js termine si no hay otras tareas.
// 2.Luego, después de 5 segundos, use client.ref() para evitar que el proceso termine.
// Pistas
// •unref() hace que el socket no impida que Node.js termine.
// •ref() lo vuelve a mantener activo.

const net = require ('net');

const PORT = 5000;
const HOST = 'localhost';

const client=net.createConnection({port:PORT, host:HOST},()=>{
    client.connect();

    client.write('¿Sigues ahí, servidor?');
    
    
    setTimeout(()=>{
        console.log('Pausando la recepcion de datos');
        client.pause()
        client.unref();
        setTimeout(() => {
            console.log('Reanudando la recepcion de datos...');
            client.ref();
        }, 5000)
        
    },5000);
   
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
});
