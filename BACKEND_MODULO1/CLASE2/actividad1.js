let libro = {
    titulo: "Vacaciones en un pueblito",
    autor: "Andrea Kowtun",
    anio: 1998,
    genero: ["biografia"]
};

console.log("Título:", libro.titulo);
console.log("Autor:", libro.autor);

// asigno anio más reciente
libro.anio = 2024;

// Añadir una nueva propiedad
libro.páginas = 500;

console.log("Objeto actualizado:", libro);
