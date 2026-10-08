let nombre = "Luis miguel";
nombre = "SANCHO PANSA";
console.log(nombre);

// declaración de constantes
const apellido = "Caceres";
console.log(apellido);

// tipos de datos primitivos
let programa = "ADSO";
let ficha = 3233140;
let activa = true;
let nota = null;
let promedio;

console.log(typeof programa); // string
console.log(typeof ficha);    // number
console.log(typeof activa);   // boolean
console.log(typeof promedio); // undefined
console.log(typeof nota);     // object (null)

console.log("Hola, soy aprendiz del programa ADSO");
nombre = prompt("¿Cómo te llamas?");
ficha = prompt("¿Cuál es el número de ficha?");

alert(`¡Bienvenido a JavaScript, ${nombre} de la Ficha ${ficha}!`); // concatenar

console.log("El aprendiz es:", nombre);


