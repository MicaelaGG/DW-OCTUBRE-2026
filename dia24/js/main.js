// 1
let a = 12


// 2 
const input = document.querySelector ("#input");
const miboton = document.querySelector ("#miboton");
const parrafo = document.querySelector ("#parrafo");

miboton.addEventListener ("click", function () {
    parrafo.textContent = input.value;
});


// 3
const n1 = document.querySelector ("#n1");
const n2 = document.querySelector ("#n2");
const resultado = document.querySelector ("#resultado");

function sumarNumeros () {
    const valor1 = parseFloat(n1.value);
    const valor2 = parseFloat(n2.value);
    const suma = valor1 + valor2;
    resultado.textContent = "Resultado" + suma;
}

n1.addEventListener ("input", sumarNumeros)
n2.addEventListener ("input", sumarNumeros)