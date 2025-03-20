//¿Quieres empezar de cero? 
// Es momento de eliminar tu archivo perfil.json. 
// Verifica que el archivo existe antes de intentar borrarlo.
//Usa fs.unlink para eliminar archivos

const fs = require ('fs');

if (fs.existsSync('./perfil.json', )){
    fs.unlink('./perfil.json', (err)=>{
        if (err){
            console.error('Ha ocurrido un error', err);
        }else{
            console.log('El perfil se ha eliminado exitosamente');
        }
    });
}else{
    console.log('El archivo buscado no existe');
};