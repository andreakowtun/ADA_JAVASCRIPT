//Factorial de un número (Ejercicio entrevista) 
//Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial.

let calcularFactorial = function(num){
    let factorial = 1;
    for(let i=1; i<=num;i++){
        factorial *=i
    }
    return factorial;
}

console.log(calcularFactorial(3));