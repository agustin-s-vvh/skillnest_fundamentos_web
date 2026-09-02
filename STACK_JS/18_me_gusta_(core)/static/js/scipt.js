let boton1 = document.querySelector("#like1");
let contador1 = document.querySelector("#contador1");

boton1.addEventListener("click", function () {
    let contar = parseInt(contador1.innerText);
    contador1.innerText = contar + 1;
});


let boton2 = document.querySelector("#like2");
let contador2 = document.querySelector("#contador2");

boton2.addEventListener("click", function () {
    let contar = parseInt(contador2.innerText);
    contador2.innerText = contar + 1;
});


let boton3 = document.querySelector("#like3");
let contador3 = document.querySelector("#contador3");

boton3.addEventListener("click", function () {
    let contar = parseInt(contador3.innerText);
    contador3.innerText = contar + 1;
});
