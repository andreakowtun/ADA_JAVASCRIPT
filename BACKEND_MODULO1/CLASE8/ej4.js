//Modifica el cliente para que:
// 1.Si ocurre un error (como un servidor no disponible), lo detecte y lo muestre con " Error: [mensaje]".
// 2.Si la conexión se cierra inesperadamente, muestre " Conexión cerrada inesperadamente".
// Pistas
// •Usa client.on('error', callback) para manejar errores.
// •Usa client.on('close', callback) para detectar cierres.

const net = require ('net');

const PORT = 5000;
const HOST = 'localhost';

const client=net.createConnection({port:PORT, host:HOST},()=>{
    console.log('Ya esta conectado al servidor');

    client.write('Hola servidor!');
    client.connect();
    
    setTimeout(()=>{
        console.log('Pausando la recepcion de datos');
        client.pause()

        setTimeout(()=>{
            console.log('Reanudando la recepcion de datos');
            client.resume();

            client.write('Otro mensaje...');
        },3000)
    },3000); 
    
    client.close();
    client.error();
    
});

client.on('close', ()=>{
    console.log('Conexión cerrada inesperadamente');
})

client.on('connect', ()=>{
    console.log('conectado al servidor');
});

client.on('error', (err)=>{
    console.log('Error: ', err.message);
});