const net = require('net');


const client = net.createConnection({port:3000}, ()=>{
    console.log('conexion satisfactoria ');
    client.write('Hola server')
});

client.on('data', (data)=>{
    console.log('el servidor dice: '+data.toString());
})

client.on('end',()=>{
    console.log('Desconectado del server');
})

// client.on('error',(err)=>{
//     console.log('Error: ', err.message);
// })

