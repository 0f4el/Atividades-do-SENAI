function boasvindas() {
    console.log("Bem-vindo(a) ao curso de JavaScript!");
}
boasvindas();

function saudacao(nome){
    console.log("Olá,", nome, "! Como você está hoje?")
}
nome = "Rafael";
saudacao(nome);
function soma(a, b) {
    console.log(a + b);
}
function verificarParOuImpar(x){
    if (x % 2 === 0) {
        console.log(x + " é um número par.");
    } else {
        console.log(x + " é um número ímpar.");
    }
}
verificarParOuImpar(7);
verificarParOuImpar(10);

function calcularMedia(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;
    console.log("A média de " + n1 + ", " + n2 + " e " + n3 + " é: " + media);
    if (media >= 7) {
        console.log("Aprovado");
    }
    else {
        console.log("Reprovado");
    }
    return media;
}
calcularMedia(8, 6, 7);

function converterParaCelsius(F){
    celsius = (F - 32) * 5/9;
    console.log(fahrenheit + "°F é igual a " + celsius + "°C");
}
fahrenheit = 100;
converterParaCelsius(fahrenheit);

function maiorNumero(a, b){
    if (a > b) {
        console.log(a + " é maior que " + b);
    } else {
        console.log(b + " é maior que " + a);
    }
}
maiorNumero(10, 20);

function fatorial(n) {
    n1 = n
    for (let i = n - 1; i >= 1; i--) {
        n = n*i;
    }
    console.log("O fatorial de " + n1 + " é: " + n);
}
fatorial(5);

function contarLetras(str){
    console.log("A palavra " + str + " tem " + str.length + " letras.");
}
contarLetras("JavaScript");

function quadrado(x){
    console.log ("O número "+ x +" ao quadrado é "+ x * x);
    return x * x;
}
quadrado(4);

function somaQuadrados(x, y){
    resultado = quadrado(x) + quadrado(y);
    console.log("Os números "+ x + " e " + y + " ao quadrado é " + resultado);
}
somaQuadrados(3, 4);




