
const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "1234") {
        mensagem.textContent = "Login realizado com sucesso!";
        mensagem.style.color = "#4ade80";

        // Depois, vamos direcionar para o gerador QR Code.
    } else {
        mensagem.textContent = "Usuário ou senha incorretos.";
        mensagem.style.color = "#f87171";
    }
});
