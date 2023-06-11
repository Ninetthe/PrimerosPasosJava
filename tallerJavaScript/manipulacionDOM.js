//MANIPULACIÓN DEL DOM
//● Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.
let boton = document.getElementById("bttn1");
boton.addEventListener("click", function() {
    alert("Haz click nuevamente en el botón");
}
)

//● Cambiar el contenido de un elemento HTML mediante JavaScript.
let quitarParrafo = document.getElementById("parrafo1").innerHTML="Soy el nuevo párrafo";


//● Ocultar y mostrar elementos HTML utilizando JavaScript.
//crear ------------MEJORAR-----------
let nuevoParrafo = document.createElement("p");
let textoNuevo = document.createTextNode("Párrafo creado en JavaScritp");
nuevoParrafo.appendChild(textoNuevo);
let elemetoPadre = document.getElementById("padreid");
elemetoPadre.appendChild(nuevoParrafo);

//borrar
let parrafoborrar = document.getElementById("borrame");
parrafoborrar.parentNode.removeChild(parrafoborrar);



//● Crear un array de 10 nombres.
let arraydeNombres = ["Magdalena", "Omar", "Santiago", "Rubí", "María", "Ruth", "Leticia", "Manuel", "Mario", "Oscar"];

//● Crear una función que imprima en pantalla una lista con los nombres del array de nombres.

function agregarElementos(listadoDeNombres){
    let ul = document.createElement("ul");
    for (let i = 0; i < listadoDeNombres.length; i++ ){

        let li = document.createElement("li");
        li.innerText = `${listadoDeNombres[i]}`;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}
agregarElementos(arraydeNombres);


//● Crear un array de números.
let arrayDeNumeros = [2, 4, 6, 8, 10, 13, 20, 50, 75, 99];

//● Crear una función que pinte en pantalla cuántos números tiene el array de números.

function imprimirTotalNumeros(total){
    let imprimirTotal = total.length;
    console.log(imprimirTotal)
    let crearParrafo = document.createElement("p");
    crearParrafo.innerText = `${imprimirTotal}`;
    document.body.appendChild(crearParrafo);

}
imprimirTotalNumeros(arrayDeNumeros);
//● Crea los nodos necesarios para imprimir un formulario.
function CreateForm() {

    let formulario = document.createElement("form");
    let titulo = document.createElement("label");
    titulo.textContent="Mi primer formulario";
    let texBox=document.createElement("input");
    texBox.type="password";
    formulario.appendChild(titulo);
    formulario.appendChild(texBox);
    document.body.appendChild(formulario)
}

CreateForm();

//● Crea los nodos necesarios para imprimir una tabla.


/*● Crea array de objetos 10 objetos con su respectivos key:value. Cada objeto deberá tener las siguientes
keys:
id, name, status, species, type, gender
El value de cada key lo asignas tú
*/



//● Imprime cada elemento del objeto dentro de la tabla que creaste anteriormente.