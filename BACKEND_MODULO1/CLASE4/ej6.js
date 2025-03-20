//Es momento de planear tus metas. 
// Crea un archivo llamado metas.json con una lista vacía al principio. 
// Luego, agrega metas como: “Aprender Node.js” y “Viajar a Japón”. 
// Guarda la lista actualizada en el archivo.
//Pista: Usa fs.writeFile para crear el archivo y agregar elementos a la lista.
const prompt = require('prompt-sync')();
const fs = require('fs');

fs.writeFile('./metas.json', '[]', (err)=>{
    if (err){
        console.error(' ha ocurrido un error al crear el archivo ', err);
    }else{
        console.log('el archivo se ha creado con exito');
        let meta = prompt('Escribe una meta: ');
        fs.writeFile('./metas.json', JSON.stringify(meta, null,2),(err)=>{
            if (err){
                console.error(' ha ocurrido un error al crear el archivo ', err);
            }else{
                console.log('Se ha agregado una tarea con exito!');
                const metas = JSON.parse(meta);
                console.log(metas);
            }
        } )
    }
})