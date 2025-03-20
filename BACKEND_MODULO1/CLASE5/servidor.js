//1
//Importa el módulo que te permite trabajar con servidores TCP (net).
const net = require ('net');

//Usa el método que crea un servidor.
//Pista: Este método necesita una función que se ejecuta cuando alguien se conecta.
const server = net.createServer((socket)=>{
//2. Objetivo: Mostrar en la consola cuando un cliente se conecta al servidor.
//Revisa la función que agregaste al crear el servidor.
//Pista: Esa función se ejecuta cada vez que un cliente se conecta.

//Dentro de esa función, agrega un mensaje en la consola que diga: "¡Un cliente se ha conectado!".
    console.log('¡Un cliente se ha conectado!');
});

//Configura el servidor para que escuche en el puerto 5000.
//Pista: Usa el método que pone al servidor "a escuchar".
//Agrega un mensaje en la consola para confirmar que el servidor está listo.
server.listen(5000, ()=>{
    console.log('Servidor esta escuchando en el puerto 5000');
});

//3. Objetivo: Mostrar en la consola cualquier mensaje que el cliente envíe al servidor.
//Usa el evento data para detectar cuando el cliente envía datos.
//Pista: El evento se llama en el socket que representa la conexión del cliente.
//En el callback del evento, convierte los datos recibidos (buffer) en texto usando .toString().
//Muestra el mensaje en la consola con un texto como: "Mensaje recibido del cliente: <mensaje>".

