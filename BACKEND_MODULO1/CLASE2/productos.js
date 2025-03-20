const fs = require('fs');

//defino ruta del archivo json que vamos a manipular

const rutaArchivo = './productos.json'

//paso 1: leer

fs.readFile(rutaArchivo, 'utf-8', (err, data)=>{
    if (err){
        console.error('error al leer', err);
        return //detiene la ejecucion
    }

    const productos = JSON.parse(data);
    console.log('productos actuales', productos);
    //paso 2: agregamos prod al listado
    const nuevoProd= {
        id: productos.length +1,
        nombrre: "puerta",
        precio: 400
    }

    productos.push(nuevoProd);
    console.log('productos actualizados', productos);

    //paso 3: escribir al archivo json actualizado
    //converstimos de js a json
    
    const contenidoActualizado = JSON.stringify(productos, null, 2);

    //escribimos el contenido en el archivo, mostramos el error (si lo hay) por consola

    fs.writeFile(rutaArchivo, contenidoActualizado,(err)=>{
        if(err){
            console.error('error al escribir en el archivo', err);
            return;
        }
        console.log('archivo actualizado correctamente');
    })

})

