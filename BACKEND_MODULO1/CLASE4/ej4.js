//Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json existe. 
// Si no existe, crea uno nuevo con un perfil básico.
//Pista: Usa fs.existsSync para verificar la existencia del archivo.


const fs = require('fs');

if (fs.existsSync('perfil3.json')){
    console.log('tu perfil existe!');
}else{
    const perfilBasico = {
        nombre: 'Karina',
        apellido: 'Juarez',
        edad : 25,
        ciudadFav: 'Buenos Aires'
    }

    fs.writeFile('perfil3.json', JSON.stringify(perfilBasico),(err)=>{
        if (err){
            console.error('Ha ocurrido un error al creal el perfil ', err);
        }else{
            const perfil = JSON.parse(perfilBasico);
            console.log('Se ha creado con exito un nuevo perfil ', perfil);
        }
    } )

}