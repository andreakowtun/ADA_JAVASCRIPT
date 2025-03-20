//Crea un servidor TCP que actúe como un servidor de eco. 
// Cuando un cliente se conecte, el servidor debe recibir los datos enviados por el cliente 
// y devolverlos exactamente igual (hacer un "eco"). 
// Además, el servidor debe imprimir en la consola cada vez que un cliente se conecta, desconecta o envía datos.
//Requisitos:
//Usa el evento connection para detectar nuevas conexiones.
//Usa el evento data para recibir datos del cliente.
//Usa el método socket.write() para enviar los datos de vuelta al cliente.
//Usa los eventos end y close para manejar la desconexión del cliente.

const net =  require('net');

const server = net.createServer ((socket)=>{
    console.log('Un cliente se ha conectado al servidor');
    
    socket.on('data', (data)=>{
        console.log('datos recibidos del cliente '+ data.toString());
       
        socket.write(data); //repite los datos que le envio el cliente
    })
    
    //evento end
    socket.on('end', ()=>{
        console.log('El cliente ha cerrado la conexion');
    })

    //evento error
    socket.on('error', (err)=>{
        console.error('Se ha producido un error en la conexion con el cliente', err.message);
    })

    //evento close: cuando el socket se cierra ya sea abruptamente o no
    socket.on('close', ()=>{
        console.log('se ha cerrado la conexion con el cliente');
    })

});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000.');
});

