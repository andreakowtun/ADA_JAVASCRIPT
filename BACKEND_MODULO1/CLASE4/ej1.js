//Ejercicio 1: ¡Crea tu perfil digital!
//Imagina que acabas de unirte a una red social donde puedes crear tu perfil digital básico. Tu misión es:
//1.Crear un archivo llamado perfil.json.
//2.Dentro de este archivo, guarda información sobre ti: nombre, edad y tu ciudad favorita.
//3.Usa el módulo fs para escribir este archivo desde Node.js.
//Pista: Utiliza JSON.stringify para convertir tu información en un formato que pueda guardarse en el archivo.

const fs = require ('fs');

let datosPerfil = {
    nombre: 'Karina',
    apellido: 'Juarez',
    edad : 25,
    ciudadFav: 'Buenos Aires',
    mail: 'karijuarez@gmail.com'
};

const path = './perfil.json';

fs.writeFile(path, JSON.stringify(datosPerfil, null, 2), (err)=>{
    if(err){
        console.error('Hubo un error en la creacion del perfil.', err);
    }else{
        console.log('El perfil fue creado exitosamente.');
    }
});

