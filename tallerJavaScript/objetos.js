//crear objeto carro
//Crea un objeto carro haciendo abstracción de sus atributos y un objeto anidado

let carro = {
    color: "gris",
    numeropuertas: 7,
    marca: "Toyota",
    matricula: "p457p",
    asientos: 4,
    modelo: 2000,
    caracteristicas: ["Franjas rojas", "llantas", "ventanas"]
}

let camion = {
    color: "rojo",
    numeropuertas: 2,
    marca: "honda",
    matricula: "p457p",
    asientos: 4,
    modelo: 1994,
    caracteristicas: ["Franjas balncas", "llantas", "ventanas"]
}

let tractor = {
    color: "blanco",
    numeropuertas: 4,
    marca: "Hiunday",
    matricula: "p457p",
    asientos: 4,
    modelo: 1989,
    caracteristicas: ["Franjas negras", "llantas", "ventanas"]
}

console.log(carro)
console.log(carro.caracteristicas[1]);

//crear función que devuelva la marca del carro

function mostrarMarca(vehiculo){
    console.log(vehiculo.marca) //Imprime el parametro 'marca' del objeto que se pasa por la función

    document.write("<br>" + "El coche con la marca " + `${vehiculo.marca}`) //Se imprime en el HTML el parametro 'marca' del objeto 
}

//crea una función que devuelva la cantidad de puertas que tiene el carro

function cantidadPuertas (vehiculo){
    console.log(vehiculo.numeropuertas)
    document.write(' ' +  "tiene" + ' ' + `${vehiculo.numeropuertas}` + ' ' + "puertas");
}


//crear una función que devuelva objeto anidado
function devolveratributo (vehiculo){
    console.log(vehiculo.caracteristicas[0])
    document.write(' ' + "y una característica es que tiene" + ' ' + `${vehiculo.caracteristicas[0]}`);
}

function mostrarDatosCompletos(vehiculo){
    mostrarMarca(vehiculo);
    cantidadPuertas(vehiculo);
    devolveratributo(vehiculo);
}

mostrarDatosCompletos(carro);
mostrarDatosCompletos(camion);
mostrarDatosCompletos(tractor);

