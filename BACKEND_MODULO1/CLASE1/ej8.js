//Crea una función que reciba una cadena de texto y una letra, y devuelva cuántas veces aparece esa letra en la cadena.
//Usa un bucle for y condicionales.
//Haz que la búsqueda no distinga entre mayúsculas y minúsculas.
const prompt= require ("prompt-sync")();

let letra= prompt ("ingrese la letra que desea ver cuantas veces aparece en el texto: ")

let texto = "La academia se encontrara cerrada durante el mes de enero, desde ya, muchas gracias."
function cuantasVeces(cadena, letra){
    let cantidad = 0;
    for (let i=0; i< texto.length; i++){
        if (texto[i].toLowerCase() == letra){
            cantidad ++;
        }
    }return cantidad;
}

console.log(cuantasVeces(texto, letra));