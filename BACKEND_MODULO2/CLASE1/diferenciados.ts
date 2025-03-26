//1.any
let cualquiera:any = 'hi!'
console.log(cualquiera);

cualquiera = 25
console.log(cualquiera);

//2.unknown, requiere verificacion antes de su uso
let noSe : unknown = "Hola soy unknown"
console.log(noSe);

//3.void: se usa en funciones que no retornan valor
function logMessage(message: string): void{
    console.log(message);    
}
logMessage('que locura');

//4.never
function infiniteBucle():never{
    while (true){
        console.log('este bucle nunca termina');
        
    }
}

//infiniteBucle()

//5. null y undefined
let valorNulo: string | null = null;
console.log(valorNulo);

valorNulo = 'ahora si es un string';
console.log(valorNulo);
