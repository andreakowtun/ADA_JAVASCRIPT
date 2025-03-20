const net = require('net');

const client = net.createConnection({puerto: 5000}, ()=>{
    console.log('conectando al server');
    client.write('Hola servidor!');  
});

//eventos

client.on('data', (data)=>{
    console.log('Mensaje recivido', data.toString);    
});

client.on('end',()=>{
    console.log('Server ha cerrado la conexion');
});

client.on('close', ()=>{
    console.log('Conexion cerrada');
});

client.on('error',(err)=>{
    console.log('error: ', err.message);   
});

//metodos
client.setTimeout(()=>{
    console.log('Pausando la recepcion de datos');
    client.pause();
},2000);

client.setTimeout(()=>{
    console.log('reanudando la recepcion de datos');
    client.resume();    
},2000)

client.setTimeout(()=>{
    console.log('Destruyendo la conexion');
    client.destroy();    
},4000);

