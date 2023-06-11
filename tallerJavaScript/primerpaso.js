
//variables estrings

const saludoh2 = "<h2>Hola Coders</h2>";
let numeroCoder = "Coder1";
let motivacion = "¡Esfuerzáte y lo lograrás.";
let palabraAnimo = "Tú puedes!";
let unsaludo = "HOLA,";
let nombrecoder = "Raissa";
let cadenaTexto = (numeroCoder + ' '+  motivacion + ' '+  palabraAnimo);
console.log(cadenaTexto);
document.write(cadenaTexto);
//variables número
let numero = 200;
let numeroUno = 85;
let numeroTres =  100;

//boolena
let numeropositivo = true;
let numeronegativo = false;

//operaciones matemáticas
let resultadoMultipliacion = numeroTres/numeroUno;
let resultadoDivision = numeroTres * numeroUno;
let resultadoSuma = numero + numeroTres;
let resultaResta = numero - numeroTres;

console.log(resultadoMultipliacion);
console.log(resultadoSuma);

document.write(saludoh2);
document.write("Este es el resultado de la multiplicación" + resultadoMultipliacion + "<br>" + "Este es el resultado de la suma" + ' ' + resultadoSuma);
document.write("<br>" + "Este es el resultado de la división" + ' ' + resultadoDivision);

//Crear función que imprima por la pantalla del navegador y la consola el mensaje "Hola, nombre" con un parámetro para el nombre.

function imprimirSaludo(saludo, nombre) {
    return saludo + ' ' + nombre;
}


let saludoCompleto = imprimirSaludo(unsaludo, nombrecoder)
console.log(saludoCompleto);
document.write("<br>" + saludoCompleto);

//crear función que sume dos número y que la suma de ellos en pantalla y consola

let int = 1909;
let int2 = 2004;

function sumardosnumeros(a , b) {
    return  a + b;
}
let nuevasuma = sumardosnumeros(int, int2);
console.log(nuevasuma)
document.write("<br>" + nuevasuma);


//Crear función que determine si un número es par o impar. Imprimir consola y navegador

let numeronuevo = 50;

function paroImpar(int) {
    if(int % 2 == 0) {
        return "El numero " + ' ' + numeronuevo + ' ' + "es par";
    } else {
        return "El número" + ' ' + numeronuevo + ' ' +  "es impar";
    }
}


let parOImpar = paroImpar(numeronuevo);
console.log( parOImpar);
document.write("<br>" + parOImpar);



