function mudarHumor(tipo) {
  const emojiDiv = document.getElementById("emoji");
  const mensagemP = document.getElementById("mensagem");
  const corpo = document.body;

  if (tipo === "estudioso") {
    emojiDiv.textContent = "🤓";
    mensagemP.textContent = "Focado no código! Bug zero hoje!";
    corpo.style.backgroundColor = "#d1e7dd"; // Verde claro
  } else if (tipo === "cansado") {
    emojiDiv.textContent = "😴";
    mensagemP.textContent = "Precisando urgentemente de um café...";
    corpo.style.backgroundColor = "#f8d7da"; // Vermelho/Rosa claro
  } else if (tipo === "inspirado") {
    emojiDiv.textContent = "✨";
    mensagemP.textContent = "Criando coisas incríveis com HTML, CSS e JS!";
    corpo.style.backgroundColor = "#cfe2ff"; // Azul claro
  }
}
