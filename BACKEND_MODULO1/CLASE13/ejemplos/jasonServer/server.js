const fs = require('fs');
const http = require('http'); //para travajar con solicitudes del cliente

const PORT = 3000;

//paso 3: creamos el server
const server = http.createServer((req, res)=>{
    //leemos el archivos datos.json
    fs.readFile('datos.json', 'utf-8', (err, data)=>{
        if (err){
            //so hay un error mostramos un mensaje
            res.end('no se pudo leer el archivo json')
            return;
        }
        // enviamos el contenido del archivo json al navegador 
        res.setHeader('Content-Type', 'application/json'); //configuramos el tipo de contenido
        res.end(data); //enviamos el contenido del archivo json
    })
})

server.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
})

