    let numGerado = null;
    let tentativas = 5;

    const gerarBtn = document.getElementById("gerarBtn");
    const adivinharBtn = document.getElementById("adivinharBtn");
    const inputNumero = document.getElementById("inputNumero");
    const mensagem = document.getElementById("mensagem");
    const mensagem2 = document.getElementById("mensagem2");
    const tentativasText = document.getElementById("tentativas");

    gerarBtn.addEventListener("click", () => {
      numGerado = Math.floor(Math.random() * 50) + 1; // 1 a 50
      tentativas = 5;
      mensagem.textContent = "";
      tentativasText.textContent = `Você tem ${tentativas} tentativas.`;
      inputNumero.value = "";
      console.log("Número gerado (não mostrado ao usuário):", numGerado);
    });

adivinharBtn.addEventListener("click", () => {
  if (numGerado === null) {
    mensagem.textContent = "Primeiro clique em 'Gerar Número'!";
    return;
  }

  const numeroInput = Number(inputNumero.value);

  if (numeroInput < 1 || numeroInput > 50 || isNaN(numeroInput)) {
    mensagem.textContent = "Digite um número válido entre 1 e 50!";
    return;
  }

  if (numeroInput === numGerado) {
    mensagem.textContent = "Parabéns! Você acertou";
    mensagem2.textContent = "";
    tentativasText.textContent = "";
    numGerado = null;
  } 
  else {
    if(numeroInput > numGerado){
      mensagem2.textContent = "Tente um número menor";
    }
    else if(numeroInput < numGerado){
      mensagem2.textContent = "Tente um número maior";
    }

    tentativas--;
    if (tentativas > 0) {
      mensagem.textContent = "Que pena! Não foi dessa vez.";
      tentativasText.textContent = `Você ainda tem ${tentativas} tentativas.`;
    } else {
      mensagem.textContent = `Que pena! Não foi dessa vez. O número era ${numGerado}.`;
      mensagem2.textContent = "";
      tentativasText.textContent = "";
      numGerado = null;
    }
  }

  inputNumero.value = "";
  inputNumero.focus();
});