// Crea un cliente donde la usuaria pueda escribir mensajes 
// en la consola y enviarlos al servidor.
// •Después de cada mensaje, la usuaria puede escribir otro.
// •Si escribe "salir", el cliente se desconecta.
// Pistas
// •Usa readline para capturar texto de la usuaria.
// •Si el mensaje es "salir", cierra la conexión con client.end().

const readline=require('readline');
const net = require ('net');

const PORT = 5000;
const HOST = 'localhost';

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.setPrompt('Ingrse un mensaje, si desea desconectarse ingrese "salir" ');
rl.prompt();
const client=net.createConnection({port:PORT, host:HOST},()=>{
    client.connect();

    rl.on('line', (mensaje)=>{
        if(mensaje.toLowerCase === salir){
            rl.close();
        }else{
            console.log('has ingresado '+mensaje);
            rl.prompt();
        }        
        
    });

    rl.on('close', ()=>{
        console.log('Coneccion cerrada');
        process.exit(0);
    })   
    
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
