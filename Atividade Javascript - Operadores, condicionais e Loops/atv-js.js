/* Idade */
let idade = 24
console.log("Idade:"+ idade)
if (idade >= 18) {
    console.log("Maior de idade")
}
console.log("")

/* Contador */
console.log ("Contador de 1 a 20:")
for (let i = 1; i <= 20; i++) {
    console.log(i)
}
console.log("")
console.log ("Contador de 20 a 1:")
for (let i = 20; i >= 1; i--) {
    console.log(i)
}

/* Números Impares */
console.log("")
console.log ("Números Ímpares de 1 a 15:")
for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

/* Mês */
console.log("")
let numeroMes = 11
console.log("Mês correspondente ao número " + numeroMes + ":")
switch (numeroMes) {
    case 1:
        console.log("Janeiro")
        break
    case 2:
        console.log("Fevereiro")
        break
    case 3:
        console.log("Março")
        break
    case 4:
        console.log("Abril")
        break
    case 5:
        console.log("Maio")
        break
    case 6:
        console.log("Junho")
        break
    case 7:
        console.log("Julho")
        break
    case 8:
        console.log("Agosto")
        break
    case 9:
        console.log("Setembro")
        break
    case 10:
        console.log("Outubro")
        break
    case 11:
        console.log("Novembro")
        break
    case 12:
        console.log("Dezembro")
        break
}

/* Tabuada */
console.log("")
console.log("Tabuada")
let numTabuada = 5

for (let i = 1; i <= 10; i++) {
    console.log(numTabuada + " x " + i + " = " + (numTabuada * i))
}

/* Senha */
console.log("")
const senhaCorreta = "1234"
let tentativaSenha = 0
const maxTentativas = 3
let entradaSenha = null
acesso = true

while (tentativaSenha < maxTentativas) {
    entradaSenha = prompt("Digite a senha: ")
    tentativaSenha++
    if (entradaSenha === senhaCorreta) {
        console.log("Acesso Permitido")
        acesso = true
        break
    }
    else {
            console.log("Acesso Negado")
            acesso = false
        }
}
if (acesso == false) {
    document.write("Acesso Negado")
}
else {
    document.write("Acesso Permitido")
}


