//Usa un tipo literal para declarar una variable 
// que solo acepte uno de los valores: "Lunes", "Martes", "Miércoles". 
// Intenta asignar otros valores y observa el error en TypeScript.

type diasDeLaSemana = "Lunes" | "Martes" | "Miércoles";

let dia: diasDeLaSemana

//dia = "Domingo"

dia = 'Lunes';
console.log(dia);