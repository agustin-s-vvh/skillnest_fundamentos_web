let totalCarrito = 0;

const botonLogin = document.getElementById('boton-login');

const campoCorreo = document.getElementById('correo');

const fotoComida = document.getElementById('foto-comida');

const cantidadCarrito = document.getElementById('cantidad-carrito');

const botonesAgregar = document.querySelectorAll('.boton-agregar');

const imagenOriginal = 'static/images/Imágenes-20260904T115517Z-1-001/Imágenes/comida-mexicana';

const imagenHover = 'static/images/Imágenes-20260904T115517Z-1-001/Imágenes/comida-mexicana2.jpg';


botonLogin.addEventListener('click', function () {

    alert("Bienvenido " + campoCorreo.value);

});


botonesAgregar.forEach(function (boton) {

    boton.addEventListener('click', function () {

        totalCarrito++;

        cantidadCarrito.innerText = totalCarrito;

    });

});


fotoComida.addEventListener('mouseover', function () {

    fotoComida.src = imagenHover;

});


fotoComida.addEventListener('mouseout', function () {

    fotoComida.src = imagenOriginal;

});
