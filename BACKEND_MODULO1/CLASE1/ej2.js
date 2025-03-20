//Escribe una función que reciba un objeto con platos y precios, y 
// devuelva los platos cuyo precio sea menor a $20.
//Usa un bucle for...in.
//Usa objetos y arrays.

let menu ={
    "carne": 20,
    "sopa": 15,
    "ensalada": 10,
    "pasta": 30
};

function platosMenorA20(menu){
    let platos =[];
    for (let plato in menu){
        if (menu[plato] < 20 ){
            platos.push(plato);
        }
    }return platos;
}

console.log(platosMenorA20(menu));