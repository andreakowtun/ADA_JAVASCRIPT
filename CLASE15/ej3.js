//Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", "Conejo"]. 
// Llega un "Hámster" que debe ser atendido primero. Agrega el "Hámster" al inicio de la lista. 
// Luego, atiende a la primera mascota de la fila y muéstrala. Finalmente, muestra la lista actualizada.

let turnos = ["Perro", "Gato", "Conejo"];

turnos.unshift("Hámster");

console.log(turnos);

turnos.shift()

turnos.shift()

console.log(turnos);
