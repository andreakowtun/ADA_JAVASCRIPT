//Crea una función que reciba una cadena de texto y devuelva cuántas vocales contiene.
//Usa un bucle for y condicionales.
//Considera vocales mayúsculas y minúsculas (a, e, i, o, u).

let texto = "Andrea";

function contarVocales(texto) {
    let cantidad = 0;
    let vocales = "aeiouAEIOU";
    for (let letra of texto) {
        if (vocales.includes(letra)) {
            cantidad++;
        }
    }
    return cantidad;
}

console.log(contarVocales(texto));
