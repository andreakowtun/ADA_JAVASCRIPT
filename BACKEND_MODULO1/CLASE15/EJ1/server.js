//paso 1
const net = require('net'); //servidor
const fs = require('fs'); //archivos
const path = require('path'); //rutas

//paso 2
const rutaMensajes = path.join(__dirname, 'mensajes.json')

//paso 3: verificar si el archivo json existe y sino que se cree con un array vacio dentro
if (!fs.existsSync(rutaMensajes)){
    fs.writeFileSync(rutaMensajes, '[]', 'utf-8');
}

//paso 4: creamos el sever TCP
const server = net.createServer((socket)=>{
    console.log('cliente conectado');

    //manejamos datos recibidos del cliente
    socket.on('data', (data)=>{
        //convertimos los datos recibidos a una cadena de texto 
        const mensaje = data.toString().trim();

        //si el mensaje es igual a "/historial" entonces devuelvo todos los mensajes
        if(mensaje=== '/historial'){
            //leemos el contenido del mensaje.json
            const historial = fs.readFileSync(mensaje, 'utf-8');
            //enviamos el historial de todos los msjs
            socket.write('Historial de mensajes: \n '+historial);
        } else{
            //leemos el arch json , lo convertimos en un array de objetos
            const mensajes = JSON.parse(fs.readdirSync(rutaMensajes, 'utf-8') || '[]');
            //agregamos el nuevo mensaje con fecha y hora actual
            mensajes.push({fecha: new Date().toISOString(), mensaje});
            //guardamos el array ya actualizado en el arch mensajes.json
            fs.writeFileSync(rutaMensajes, JSON.stringify(mensajes, null, 2), 'utf-8');
            socket.write('Mensaje gurdado correctamente');
        }  
    })
    socket.on('end', ()=>{
        console.log('cliente desconectado');
    })
})

//puerto a escuchar
server.listen(3000, ()=>{
    console.log('servidor escuchando en el puerto 3000');
})