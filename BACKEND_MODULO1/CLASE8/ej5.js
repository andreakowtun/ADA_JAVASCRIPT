// Crea un cliente que:
// 1.Se conecte y envíe "¿Sigues ahí, servidor?".
// 2.Cuando el servidor cierre la conexión, muestre 
// " Servidor cerró la conexión".
// Pistas
// •El evento 'end' se activa cuando el servidor 
// finaliza la conexión.

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
});