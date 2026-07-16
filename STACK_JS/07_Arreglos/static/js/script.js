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
    //Mostar el resultado
    alert(listaTareas.join(" - "));
}

// ## Ejercicio 1

// Crear el siguiente arreglo.

// ```javascript
// let edades = [15,18,20,14,25];
// ```

// Mostrar:

// - Primera edad.
// - Última edad.
// - Cantidad de elementos.

function edad(){
    let edades = [15, 18, 20, 14, 25]
    let edad = edades[edades.length - 5];
    let edad1 = edades[edades.length - 1];
    alert(edad + "/" + edad1 + "/" + edades.length)
}

// ## Ejercicio 2

// Crear un arreglo con cinco nombres.

// Mostrar todos utilizando un ciclo `for`.

// ---

// ## Ejercicio 3

// Crear un arreglo con cinco notas.

// Calcular el promedio.

// Mostrar:

// ```text
// Promedio: X
// ```

// ---

// ## Ejercicio 4

// Crear el arreglo.

// ```javascript
// [18,20,15,22,19,25,17]
// ```

// Mostrar solamente las temperaturas mayores a 20.

// ---

// ## Ejercicio 5

// Crear un arreglo con diez números.

// Contar:

// - Cuántos son pares.
// - Cuántos son impares.

// ---

// ## Ejercicio 6

// Crear el siguiente arreglo.

// ```javascript
// [5000,12000,3000,4500,7000]
// ```

// Mostrar:

// - Venta mayor.
// - Venta menor.
// - Total vendido.

// ---

// ## Ejercicio 7

// Crear el siguiente arreglo.

// ```javascript
// ["Ana","Pedro","María","Juan","Camila","Tomás"]
// ```

// Mostrar únicamente los nombres con más de cuatro letras.

// ---

// ## Ejercicio 8

// Crear un arreglo con ocho números.

// Mostrar únicamente los múltiplos de 3.

// ---

// ## Ejercicio 9

// Crear el siguiente arreglo.

// ```javascript
// [15,16,17,18,17,16,19,20]
// ```

// Calcular:

// - Cantidad de mayores de edad.
// - Cantidad de menores de edad.

// ---

// ## Ejercicio 10 (Desafío)

// ```javascript
// let ventas = [12000,18000,5000,21000,9000,15000,8000];
// ```

// Mostrar:

// - Total de ventas.
// - Promedio.
// - Venta mayor.
// - Venta menor.
// - Cantidad de ventas mayores a $10.000.
// - Cantidad de ventas menores o iguales a $10.000.
// - Índice donde ocurrió la venta mayor.
// - Índice donde ocurrió la venta menor.

// ---

// # 🚀 Desafío Final

// Una empresa registra las ventas de sus vendedores.

// ```javascript
// let vendedores = ["Ana","Pedro","María","José","Camila"];

// let ventas = [350000,510000,420000,610000,480000];
// ```

// Desarrolla un programa que permita:

// 1. Mostrar cada vendedor con su venta.
// 2. Calcular el total vendido.
// 3. Calcular el promedio.
// 4. Mostrar el mejor vendedor.
// 5. Mostrar el vendedor con menor venta.
// 6. Mostrar los vendedores que vendieron más de $450.000.
// 7. Contar cuántos vendedores superaron el promedio.
// 8. Indicar si la empresa alcanzó una meta de **$2.300.000**.

// ### ⭐ Desafío Extra

// Permite que el usuario agregue nuevas ventas utilizando:

// - `push()`
// - `pop()`
// - `shift()`
// - `unshift()`

// y vuelve a calcular todas las estadísticas automáticamente.