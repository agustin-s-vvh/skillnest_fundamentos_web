console.log("Conexión con js exitosa...")

// Variable a lista

let nombre1 = "Ana";
let nombre2 = "Pedro";
let nombre3 = "María";
let nombre4 = "Carlos";

// Transofrmar en array y mostrar 

let Nombres = ["Ana", "Pedro", "María", "Carlos"]

// Mostrar a María en una alerta
console.log(nombres[2]); // Muestra a María
let compras = [5000, 2300, 12000, 4500, 3000];
let alumnos = ["Ana", "Pedro", "María", "Carlos"];
let datos = ["Carlos", 18, true];
let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];

// Desafío formar una oracióm con elementos
// de las distintas variables
// Pedro tiene 18 años, y compró una sandía a $2300
let mensaje = `${alumnos[1]} tiene ${datos[1]} años, y compró una ${frutas[3]} a $${compras[2]}.`;
alert(mensaje)

function Frutas(){
let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];
alert(frutas.length);
} 


let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];
let ultima = frutas[frutas.length - 1]
alert(ultima)
//variable.length -1 siempre trae el ultimo

//Desafio
//Del arreglo ["Hola", "a", "todos", "los", "Programadores!"]
//Mostrar el penultimo elemento y el ultimo

function Palabras(){
let palabras =["Hola", "a", "todos", "los", "Programadores!"]
let penultima = palabras[palabras.length - 2];
let ultima = palabras[palabras.length - 1];
alert(penultima + "" + ultima)
}

function ManipularArreglo(){
    let listaTareas = ["Barrer", "Cocinar", "Realizar compras"]
    //  Modificar un elemento del arreglo
    listaTareas[1] = "Construir";
    //añadir un elemento al final de la lista
    listaTareas.push("Cocinar");
    //Eliminar el ultimo elemento y mostralo
    let
    //Mostar el resultado
    alert(listaTareas.join(" - "));
} 