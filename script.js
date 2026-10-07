const botao = document.querySelector(".botao");

const mensagem = document.querySelector(".mensagem");

function mostrarMensagem() {
    mensagem.textContent =
        "🚀 Curiosidade: JavaScript permite criar páginas interativas e dinâmicas!";
}

botao.addEventListener("click", mostrarMensagem);
