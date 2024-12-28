//Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. 
// Verifica si "Sushi" está en la lista y muestra un mensaje que confirme si está o no.

let comidas = ["Pizza", "Hamburguesa", "Tacos"];

if (comidas.includes("Sushi")){
    console.log("el elemento se ha encontrado");
}else{
    console.log("el elemento no se ha encontrado");
}