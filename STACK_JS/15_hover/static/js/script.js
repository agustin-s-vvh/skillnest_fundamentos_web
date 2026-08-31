const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    boton.style.backgroundColor = "blue";
});

boton.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
        boton.style.backgroundColor = "red";
});

// Tarea
/*
Crear dos botones con eventos onmouseover y onmouseout
- Cambia el texto de un botón
- Cambiar el color de fondo y color de texto del segundo botón 
*/

const galeria = document.getElementById("campo")

galeria.addEventListener("mouseover", function(){
galeria.src = "static/images/noche-estrellada-sobre-el-ródano.png"
})

galeria.addEventListener("mouseout", function(){
galeria.src = "static/images/campo-de-trigo-con-cipreses.png"
})