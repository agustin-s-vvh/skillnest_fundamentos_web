function Resgistro(elemento) {
    if (elemento.innerText === "Iniciar sesión") {
        elemento.innerText = "Cerrar sesión";
    } else {
        elemento.innerText = "Iniciar sesión";
    }
}

function mostrarAlertaPerfil() {
    alert("¡Cargando el perfil del usuario!");
}


let botonLikeJavascript = document.getElementById("like-javascript");
let cantidadLikesJavascript = 12;

botonLikeJavascript.addEventListener("click", function() {
    cantidadLikesJavascript++;
    this.innerText = `${cantidadLikesJavascript} Me gustas`;
});


let botonLikeCss = document.getElementById("like-css");
let cantidadLikesCss = 30;

botonLikeCss.addEventListener("click", function() {
    cantidadLikesCss++;
    this.innerText = `${cantidadLikesCss} Me gustas`;
});