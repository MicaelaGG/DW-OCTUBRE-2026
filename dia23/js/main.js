// 1.1
const message1 = document.querySelector("#message1");
message1.textContent = "¡Hola, mundo!";

// 1.2
const message2 = document.querySelector("#message2");
message2.style.color = "blue";

//1.3 
const message3 = document.querySelector("#message3");
const btn_red = document.querySelector("#btn-red");
const btn_blue = document.querySelector("#btn-blue");

btn_red.addEventListener("click", function () {
    message3.style.color = "red";
})

btn_blue.addEventListener("click", function () {
    message3.style.color = "blue";
})