//En este ejercicio, trabajaremos con una lista de modelos de autos. 
// Implementa una función llamada ultimaAparicionModeloAuto(modelo) 
// que encuentre y muestre la última posición en la lista donde aparece el modelo específico de auto dado por modelo.

let modelosAutos = ["SUV","CROSSOVER","CONVERTIBLE","SEDAN","CONVERTIBLE","SUV"];
function ultimaAparicionModeloAuto(modelo) {
    let ultimaAparicion = 0;
    for (let i=0; i<= modelosAutos.length; i++){
        if(modelosAutos[i]=== modelo){
            ultimaAparicion = i + 1;
        }
    }
    if (ultimaAparicion == 0){
        console.log("El modelo que ud. busca no se encuentra registrado.");
    }else{
        console.log("el modelo " + modelo +" se encuentra en la pocision "+ultimaAparicion);
    }
}

ultimaAparicionModeloAuto("SUV");