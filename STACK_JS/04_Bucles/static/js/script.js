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
    /* la lista es un tipo de dato */
    let usuarios = ["Ana", "Luis", "María"];

    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}

/* Ejemplo Bucle while */
function reproducirCancion() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción
        reproduciendo = false;
    }
}

function cargarDatos() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert(`Cargando datos... ${datosPendientes} de 5`);
        datosPendientes--;
    }
}

function validarContrasena() {
    let contraseñaCorrecta = false;
/* !variables = variable es distinta a verdadero - dentro de condición */
    while (!contraseñaCorrecta  ) {
        let intento = prompt("Ingresa tu contraseña:");
        if (intento === "1234") {
            contraseñaCorrecta = true;
            alert("Acceso concedido.");
            break; //Rompe el bucle.
            alert("no se ejecuta")
            alert("Contraseña incorrecta, intenta de nuevo.");
        }
    }
}

function as(){
while (true) {
    console.log("Este mensaje nunca dejará de mostrarse.");
}
}