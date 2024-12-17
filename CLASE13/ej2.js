//Número mayor (función expresada) 
// Crea una función expresada llamada encontrarMayor que reciba dos números como parámetros y devuelva el número mayor.

let encontrarMayor = function(a,b){
    if(a > b){
        return 'el numero mayor es '+ a;
    }else if(b>a){
        return 'el numero mayor es '+ b;
    }else{
        return 'los nuemeros son iguales';
    }
}

console.log(encontrarMayor(5,6));