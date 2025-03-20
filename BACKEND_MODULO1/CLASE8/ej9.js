// Crea un cliente que:
// 1.Si la conexión falla, reintente conectarse cada 3 segundos hasta que tenga éxito.
// Pistas
// •Usa setTimeout() para intentar de nuevo tras 3 segundos.
// •Llama a net.createConnection() dentro del reintento.

const net = require ('net');

const PORT = 5000;
const HOST = 'localhost';

const client=net.createConnection({port:PORT, host:HOST},()=>{
    client.connect();

    client.write('¿Sigues ahí, servidor?');
    
    
    if(err){
        setTimeout(()=>{
            net.createConnection()
    },3000);}     
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