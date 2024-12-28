//Crea un objeto literal que represente un estudiante. 
// El mismo debe tener las siguientes propiedades: nombre, edad y un array de notas (con 5 notas).
// Luego, escribe la función “procesarEstudiante” que tendrá como objetivo realizar las siguientes tareas:
// 1.Agregar una nueva nota al array de notas.
// 2.Eliminar la primera nota del array.
// 3.Calcular el promedio de las notas restantes.
// 4.Convertir el nombre del estudiante a mayúsculas. Para esto investiga sobre el método “toUpperCase()”
// 5.Devuelver un objeto con el nombre en mayúsculas y el promedio de las notas.

const prompt=require("prompt-sync")();

let estudiante = {
    nombre: "Julia",
    edad: 18,
    notas:[6,8,2,9,7],
};

let nuevaNota = parseInt(prompt("ingrese la nota a aniadir: "));

function procesarEstudiante (estudiante){
    estudiante.notas.push(nuevaNota);
    estudiante.notas.shift();
    console.log(estudiante);

    let suma = estudiante.notas.reduce(function (acum, nota) { 
        return acum + nota; 
    }); 
    let promedio = suma / estudiante.notas.length

    estudiante.nombre = estudiante.nombre.toUpperCase();

    let nombreMayusculas = estudiante.nombre;

    console.log(nombreMayusculas);
    let nombreYprom = {
        nombre: nombreMayusculas,
        promedio: promedio
    };
    return nombreYprom;
}

console.log(procesarEstudiante(estudiante));

