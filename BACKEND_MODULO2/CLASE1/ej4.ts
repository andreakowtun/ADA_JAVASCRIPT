//Declara dos variables, una para almacenar un nombre y otra para almacenar una edad. 
// Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no proporcionada". 
// Si se asigna la edad, imprímela junto al nombre.

let name2: string= 'Andrea Kowtun';
let age2: number | undefined=27;

let myInfo1 : string;

if (age2 === undefined){
    console.log('Edad no proporcionada');
}else{
    myInfo1 = `My name is ${name2} and I am ${age2} years old.`;

}