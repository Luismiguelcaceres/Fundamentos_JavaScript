
    //operadores logicos
    //AND (&&) DEVULVE TRUE SI AMBAS CONDICIONES SON VERDADERAS
    console.log(true && true); //true
    console.log(true && false); //false
    console.log(false && false); //false
    console.log(false && true); //false

let edad = 65;
let semanasCotizadas = 1400;
 console.log(edad >= 62 && semanasCotizadas >= 1300); //true

//operaqdor OR (||) DEVUELVE TRUE SI ALGUNA DE LAS CONDICIONES ES VERDADERA
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false 

let calificacion = 20;
let inasistencia = 5;

console.log(calificacion >= 70 || inasistencia <= 3); //false

//oporador NOT (!) DEVUELVE TRUE SI LA CONDICION ES FALSA Y FALSE SI LA CONDICION ES VERDADERA
console.log(!true); //false
console.log(!false); //true