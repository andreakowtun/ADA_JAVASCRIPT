//Crea una función que reciba una cadena de texto y devuelva otra cadena con las palabras en orden inverso.
//Usa el método split() para separar las palabras.
//Usa el método reverse() para invertir el array.
//Usa el método join() para unir las palabras en una nueva cadena.

let texto = "La academia se encontrara cerrada durante el mes de enero."

function enReverso(cadena){
    let texto1 = cadena.split(" ");
    let texto2 = texto1.reverse();
    let texto3 = texto2.join(" ");
    return texto3 
}

console.log(enReverso(texto));
