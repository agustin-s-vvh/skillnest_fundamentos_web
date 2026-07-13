console.log("prueba de conexión js....")

/* Ejemplo bucle for */
function contarHasta2() {
    for (let i = 0; i < 3; i++) {
        alert(i);
    }
}
function cuentaRegresiva() {
    for (let i = 10; i > 0; i--) {
        alert(i);
    }
}
function recorrerLista() {
    // Lista es un tipo de dato (array/lista)
    // [] = ["nombre", 4, True, [2.4]]
    /* 
    let nombre = "Carlos";
    alert(nombre)
                        0         1
    let nombres = ["Carlos, María"]
    alert(nombre[0]) --> Imprime Carlos
    alert(nombres=[1]) --> Imprime María
    alert(nombres.length); --> 2 (largo nombres)
    */
    let usuarios = ["Ana", "Luis", "María"];

    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}
/* Ejemplo Bucle while */
