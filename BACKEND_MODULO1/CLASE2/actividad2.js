let estudiante = {
    nombre : "Pablo Torres", 
    edad : 17, 
    curso : "5to 1ra", 
    notas: [5,6,8,10,8,2]
};

//Convierte este objeto a una cadena JSON usando JSON.stringify().
let estudianteJSON= JSON.stringify(estudiante);
//Muestra la cadena JSON en la consola.
console.log(estudianteJSON);
//Luego, convierte la cadena JSON de nuevo a un objeto utilizando JSON.parse() y muestra el objeto en la consola.
let volver = JSON.parse(estudianteJSON);
console.log(volver);