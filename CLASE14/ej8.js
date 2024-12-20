//Creá la función backEnd() que recibirá 2 números como parámetros. 
// La función deberá imprimir por pantalla los números del 1 al 100, 
// pero teniendo en cuenta los siguientes criterios:
//Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá mostrar el string “Back” en lugar del número.
//Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá mostrar el string “End” en su lugar del número.
//Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string “Back End” en lugar del número.


function back(i,n1){
    if (i>=n1){
        if(i%n1 == 0){
            return true;
        }        
    }else{
        return false;
    }   
}

function end(i,n2){    
    if (i>=n2){
        if(i%n2 == 0){
            return true;
        }        
    }else{
        return false;
    }   
    
}

function backEnd(n1,n2){
    for (let i=1; i<=100; i++){
        if (back(i,n1) && end(i,n2)){
            console.log("Back End");
        }else if (back(i,n1)){
            console.log("Back");
        }else if(end(i,n2)){
            console.log("End");
        }else{
            console.log(i)
        }
    }   
}
 

console.log(backEnd(9,10))