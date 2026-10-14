let evidencia = 2.6;

if (evidencia >= 3.5) {
    console.log("El resultado es aprobado");
} else {
    console.log("El resultado es bajo");
}

let edad = 7;

if (edad <= 12) {
    console.log("usted es un niño");
} else if (edad <= 18) {
    console.log("usted es un adolescente");
} else if (edad <= 60) {
    console.log("usted es un adulto");
} else {
    console.log("usted es una persona de la tercera edad");
}

let edadActual = 62;
let semanasCotizadas = 1300;
let genero = "Masculino";

if (genero === "Femenino") {
    if (edadActual >= 57) {
        if (semanasCotizadas >= 1250) {
            console.log("Usted es aceptado para la pensión de vejez");
        } else {
            console.log("No cumple las semanas cotizadas");
        }
    } else {
        console.log("No cumple la edad mínima");
    }
} else if (genero === "Masculino") {
    if (edadActual >= 62) {
        if (semanasCotizadas >= 1300) {
            console.log("Usted es aceptado para la pensión de vejez");
        } else {
            console.log("No cumple las semanas cotizadas");
        }
    } else {
        console.log("No cumple la edad mínima");
    }
} else {
    console.log("lo siento no puedo calcular la edad en este parametro");
}


// CONDICIONAL CON OPERADORES LOGICOS
// LOGIN
let correo = "luismijsss2";
let contrasena = "123456";

if (correo === "luismijsss2" && contrasena === "123456") {
    console.log("Bienvenido al sistema");
} else {
    console.log("Correo o contraseña incorrectos");
}


// CONDICION CON OPERADOR OR
// PROCESO DE CERTIFICACION SENA
let etapaElectiva = true;
let etapaPractica = true;

if (etapaElectiva || etapaPractica) {
    console.log("Usted puede certificarse");
} else {
    console.log("Lo sentimos, Usted no puede certificarse");
}

// OPERADOR TERNARIO (corregido: resuktado -> resultado)
let resultado = 3.5;
let resultado = nota >= 3.5 ? "Aprobado" : "No Aprobado";
console.log(resultado);

// SWITCH CASE DIA DE LA SEMANA
let dia = 4;
switch (dia) {
    case 1:
        console.log("Hoy es lunes");
        break;
    case 2:
        console.log("Hoy es martes");
        break;
    case 3:
        console.log("Hoy es miercoles");
        break;
    case 4:
        console.log("Hoy es jueves");
        break;
    case 5:
        console.log("Hoy es viernes");
        break;
    case 6:
        console.log("Hoy es sabado");
        break;
    case 7:
        console.log("Hoy es domingo");
        break;
    default:
        console.log("El dia no es valido");
}
//reto caculadora manejada por switch case
let numero1 = Number(prompt("Ingrese el  numero 1:"));
let numero2 = Number(prompt("Ingrese el  numero 2:"));
let opcion = Number(prompt("Ingrese el numero de la opcion que corresponda: 1. Suma 2. Resta 3. Multiplicar 4. Divi"));

switch (opcion) {
    case 1:
        console.log(`la suma entre  ${numero1} y ${numero2} es igual a: ${numero1 + numero2}`);
        break;
    case 2:
        console.log(`la resta entre  ${numero1} y ${numero2} es igual a: ${numero1 - numero2}`);
        break;
    case 3:
        console.log(`la multiplicacion entre  ${numero1} y ${numero2} es igual a: ${numero1 * numero2}`);
        break;
    case 4:
        console.log(`la division entre  ${numero1} y ${numero2} es igual a: ${numero1 / numero2}`);
        break;
    default:
        console.log("La opcion no es valida");
}
//ejercicio practico

let nota = Number(prompt("Ingrese la nota :"));
if (nota >= 0 && nota <= 5) {
    if (nota >= 4.5) {
        console.log(`La nota ${nota} es: Excelente`);
    } else if (nota >= 3.5) {
        console.log(`La nota ${nota} es: Bueno`);
    } else if (nota >= 3.0) {
        console.log(`La nota ${nota} es: aceptable`);
    } else {
        console.log(`La nota ${nota} es: debe reforzar`);
    }
} else {
    console.log("nota no válida");
}
let menu = prompt("Ingrese una opcion: 1.Ver horario 2.Consultar notas 3.Salir");

switch (menu) {
    case "1":
        console.log("Horario: lunes a viernes de 8:00 a 12:00");
        break;
    case "2":
        console.log(`Tu nota registrada es: ${nota}`);
        break;
    case "3":
        console.log("Saliendo del programa");
        break;
    default:
        console.log("La opcion no es valida");
}