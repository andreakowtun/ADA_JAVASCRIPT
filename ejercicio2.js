//esta solucion verifica si un número es positivo, negativo o cero
const prompt = require("prompt-sync")({ sigint: true });
let numero = parseFloat(prompt('Ingrese un numero: '))
if (numero > 0){
    console.log('este numero es positivo')
}else if (numero < 0){
    console.log('este numero es negativo')
} else {
    console.log('este numero es = 0')
}
