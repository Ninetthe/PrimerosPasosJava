//crear array de 10 números.
let numerosArray = [15, 20, 30, 45, 50, 65, 70, 80, 97, 100];

//Crear una función que imprima en consola todos los números de un array (Investigar ciclo for)
function imprimirFor (imprimirArray) {

    for ( i = 0; i < imprimirArray.length; i++) {
        
        console.log(imprimirArray[i]);
        document.write("<br>" + `${imprimirArray[i]}`)
    }

}

imprimirFor(numerosArray);


//Crear una función que añada un número al array
numerosArray.push(110);
console.log(numerosArray);
document.write("<br>" + numerosArray);

// Crear una función que elimine los números pares de ese array.

let impArray = numerosArray.filter(function(impares){
    return impares % 2 == 1;
});
console.log(impArray);
document.write("<br>" + impArray);


//nuevo array con los numeros pares 
let parArray = numerosArray.filter(function(pares){
    return pares % 2 == 0;
});
console.log(parArray);
document.write("<br>" + parArray);


//Crear una función que devuelva el número mayor de un array.

let arrayMayor = Math.max(...numerosArray);

console.log(arrayMayor);
document.write("<br>" + arrayMayor);



//Crear una función que devuelva el número menor de un array.

let arrayMenor = Math.min(...numerosArray);

console.log(arrayMenor);
document.write("<br>" + arrayMenor +  "<br>");

//Crear un función que convierta en minúsculas todas las letras de un texto.
let cambiandotamaños = "Hola a todo el mundo, en especial a Rosa."

console.log(cambiandotamaños.toLocaleLowerCase());
document.write(cambiandotamaños.toLocaleLowerCase());

//Crear una función que convierta en mayúsculas todas las letras de un texto.
console.log(cambiandotamaños.toUpperCase());
document.write("<br>" + cambiandotamaños.toUpperCase());


//Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula.
let separadorDeLetras = cambiandotamaños.split();
let 


function mayusPrimeraLetra(primeraMayuscula) {
    let primeraMayuscula = cambiandotamaños.split(" ").map(primeraMayuscula => {
        return primeraMayuscula[0].toUpperCase() + primeraMayuscula.slice(1);
    })
    return primeraMayuscula.join(" ");
}

console.log(mayusPrimeraLetra);
//Estoy Aprendiendo A Codificar