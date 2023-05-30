//crear objeto carro
//Crea un objeto carro haciendo abstracción de sus atributos y un objeto anidado

let carro = {
    color: "rojo",
    numeropuertas: 7,
    marca: "Toyota",
    matricula: "p457p",
    asientos: 4,
    modelo: 2000,
    caracteristicas: ["Franjas rojas", "llantas", "ventanas"]
}
console.log(carro)
console.log(carro.caracteristicas[1]);

//crear función que devuelva la marca del carro

//let devolvermarca = a => console.log(marca);
function devolver(vehiculo){
    return vehiculo.marca
}
let devuelvemarcacarro = devolver(carro.marca);
console.log(devuelvemarcacarro);
document.write("<br>" + "El carro con marca" + ' ' + carro.marca);

//crea una función que devuelva la cantidad de puertas que tiene el carro

let cantidad = devolverpuertas => console.log(cantidad)
console.log(carro.numeropuertas)
document.write(' ' +  "tiene" + ' '+ carro.numeropuertas + ' ' + "puertas");

//crear ima función que devuelva objeto anidado
let objeto = anidar =>(objeto);
console.log()
document.write(' ' + "y una característica es que tiene" + ' ' + carro.caracteristicas[0]);