const prompt = require('prompt-sync')();
//Importa el array desde estudiantes.js.
const estudiantes = require('./estudiantes.js')

//Muestra en la consola los nombres de todos los estudiantes.
estudiantes.forEach(est => console.log(`- ${est.nombre}`));

//Calcula y muestra el promedio de notas de un estudiante específico.
const calcularPromedio = notas => notas.reduce((acumulador, nota) => acumulador + nota, 0) / notas.length;

const nomEst = 'Pablo Torres';
const estudiante = estudiantes.find(est => est.nombre === nomEst);
if (estudiante) {
    const promedio = calcularPromedio(estudiante.notas);
    console.log(`El promedio de ${nomEst}  es de: ${promedio.toFixed(2)}`);
} else {
    console.log(`No se encontro al estudiante ${nomEst} .`);
}

//Agrega un nuevo estudiante al array y muestra el array actualizado en formato JSON.

estudiantes.push({ nombre: 'Andrea Kowtun', edad: 16, curso: "5to 1ra", notas: [7,6,8,7,8,6] });

console.log(JSON.stringify(estudiantes, null, 2));