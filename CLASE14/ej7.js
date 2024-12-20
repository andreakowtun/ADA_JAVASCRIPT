//Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
//título: una cadena con el título del libro.
//autor: una cadena con el nombre del autor del libro.
//anioPublicacion: un número con el año de publicación del libro.
//Luego, crea una función llamada mostrarLibro que tome un arreglo de libros como parámetro 
//y muestre por consola la información de cada libro en el formato especificado.

let libro1 ={
    titulo: "Mas alla del invierno",
    autor: "Isabel Allende",
    anioPublicacion: 2017
}

let libro2={
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J. K. Rowling",
    anioPublicacion: 1997
}



let libros =[libro1,libro2];
function mostrarLibro(libros) {
    for (let i = 0; i < libros.length; i++) {
        let libro = libros[i];
        console.log(`El libro ${libro.titulo}, escrito por ${libro.autor}, se publicó en ${libro.anioPublicacion}.`);
    }
}

mostrarLibro(libros);