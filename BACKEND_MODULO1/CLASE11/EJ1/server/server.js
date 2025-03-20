const net = require('net');
const path = require('path');

const server = net.createServer()

/*Manejo el evento connection 
que se emite cuando el cliente se conecta al server. 
Dentro del evento connection tenemos los tres
eventos basicos de un servidor*/
server.on('connection', (socket)=>{
    socket.on('data',(data)=>{
        const inputPath = data.toString().trim();
        const ruta = path.isAbsolute(inputPath);
        const response = ruta? 'la ruta es absoluta':'la ruta es relativa';

        socket.write(response);
    })

    socket.on('end',()=>{
        console.log('Ha finalizado la comunicacion');
    })
})

//puerto a escuchar
server.listen(8080, ()=>{
    console.log('servidor escuchando en el puerto ', server.address().port);
})