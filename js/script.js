const nome = document.getElementById("nome");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");

function calcularImc() {
    let imc = peso.value / (altura.value * altura.value);
    let msg = nome.value + ", seu IMC é de: " + imc.toFixed(1);
    alert(msg)
}