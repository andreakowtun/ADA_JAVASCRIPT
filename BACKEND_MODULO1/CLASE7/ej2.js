//Crea un servidor TCP que cierre automáticamente la conexión 
// con un cliente si no recibe datos en un período de 10 segundos. 
// Si el cliente envía datos antes de que se cumpla el tiempo, el servidor debe reiniciar el contador de tiempo.
//Requisitos:
//Usa el método socket.setTimeout() para establecer un tiempo de espera.
//Usa el evento timeout para cerrar la conexión si se alcanza el tiempo límite.
//Usa el evento data para reiniciar el contador de tiempo cada vez que se reciben datos.

const net =  require('net');

const server = net.createServer ((socket)=>{
    console.log('Un cliente se ha conectado al servidor');

    socket.setTimeout(10000);

    socket.on('timeout', ()=>{
        console.log('Se ha alcanzado el tiempo de espera sin recibir datos');
        socket.end()
    })
    
    socket.on('data', (data)=>{
        console.log('datos recibidos del cliente '+ data.toString());
        socket.setTimeout(10000);
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