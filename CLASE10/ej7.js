// Declara dos variables con valores iniciales y luego intercambia sus valores. 
//Muestra los valores antes y después del intercambio en la consola. 

let one = 'I have no idea';
let two = 'I got it!';
console.log(`${one}  ${two}`);

console.log(`      -->   <--`);

let temporal = one;
one = two;
two = temporal;

console.log(`${one}  ${two}`);