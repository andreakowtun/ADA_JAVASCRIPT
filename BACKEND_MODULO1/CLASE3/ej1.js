//Debes crear un programa que permita registrar libros favoritos en un archivo JSON. Implementa las siguientes funciones:
//1. Agregar un libro: Se debe agregar un libro a la lista de favoritos. Para esto, el libro tendrá solo un campo: su nombre.
//2. Listar los libros: Muestra todos los libros registrados.
//Pistas:
//• Usa un archivo JSON para guardar los libros.
//• Si el archivo no existe, comienza con un arreglo vacío.
const fs = require('fs');
const filePath = './libros.json'

//leer libros
const leerLibros = () => {
    //si el arch no existe, creo un arch vacio con un arreglo
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]');
    }
    const contenido = fs.readFileSync(filePath,'utf-8');
    return JSON.parse(contenido) //convertimos contenido a un arreglo de libros
};

//escribir libros en el arhivo
const escribirArchivo = (libro)=>{
    fs.writeFileSync(filePath,JSON.stringify(libro, null, 2)); //escribo libros en el arch
};

//agrego libro
const agregarLibro = (nombreLibro)=>{
    const libros = leerLibros()
    libros.push({id: libros.lenght +1, nombre: nombreLibro});
    escribirArchivo(libros)
    console.log('Libro agregado: '+ nombreLibro);
};

const listar = () => {
    const libros = leerLibros();
    console.log('Mis favoritos')
    libros.forEach(libro =>{
        console.log(libro.id+" "+libro.nombre)
    })
}

agregarLibro('Harry potter y el prisionero de Azkaban');
listar();

