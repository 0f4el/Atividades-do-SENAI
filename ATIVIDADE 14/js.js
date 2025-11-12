/* Botões que mudam a cor*/
document.getElementById("bAzul").onclick = function() {
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = "blue";
}
document.getElementById("bVerde").onclick = function() {
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = "green";
}
document.getElementById("bVermelho").onclick = function() {
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = "red";
}

/* Botões que mudam o contador*/
let contador = 0;

function aumentar() {
    contador++;
    atualizarContador();
}
function diminuir() {
    contador--;
    atualizarContador();
}
function atualizarContador() {
    const elementoContador = document.getElementById("contador");
    if (elementoContador) {
        elementoContador.textContent = contador;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaoMais").addEventListener("click", aumentar);
    document.getElementById("botaoMenos").addEventListener("click", diminuir);

    atualizarContador();
});


/* Input do Nome */
function enviarNome() {   
    let nome = document.getElementById("input");
    alert("Olá, " + nome.value + "! Seja bem-vindo(a)!");
}

/* Botão que muda o tema*/
let alternador = 0;

function mudarTema() {
    const botaoTema = document.getElementById("bTema");
    document.body.style.backgroundColor = "";
    if (alternador %2 === 0) {
        document.body.setAttribute("data-bs-theme", "light");
        document.body.style.transition = "background-color 0.5s ease";
    }
    else{
        document.body.setAttribute("data-bs-theme", "dark");
        document.body.style.transition = "background-color 0.5s ease";
    }
    alternador++
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("bTema").addEventListener("click", mudarTema);
});