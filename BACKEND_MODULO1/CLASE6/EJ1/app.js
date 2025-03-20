require('dotenv').config();

const greeting = process.env.GREETING || 'Hola ';
const name = process.argv[2] || ' Invitado';

console.log(greeting + name+'!');