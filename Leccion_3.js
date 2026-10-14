// AApromedio de notas

const nota1 = parseFloat(prompt("Ingrese la nota 1:"));
const nota2 = parseFloat(prompt("Ingrese la nota 2:"));
const nota3 = parseFloat(prompt("Ingrese la nota 3:"));

let promedio = ((nota1 + nota2 + nota3) / 3).toFixed(1);


let aprobo = promedio >= 3.0;


console.log(`El aprendiz obtiene un promedio de ${promedio}, ¿Aprobó?: ${aprobo}`);  


if (aprobo) {
    console.log("El aprendiz aprobó .");
}