
const formulario = document.getElementById("formulario");
const campoLink = document.getElementById("link");
const areaResultado = document.getElementById("resultado");
const areaQRCode = document.getElementById("qrcode");
const mensagem = document.getElementById("mensagem");
const botaoPNG = document.getElementById("baixarPNG");
const botaoJPEG = document.getElementById("baixarJPEG");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const link = campoLink.value.trim();

    if (!link) {
        mensagem.textContent = "Digite um link válido.";
        return;
    }

    if (typeof QRCode === "undefined") {
        mensagem.textContent =
            "Não foi possível carregar a biblioteca. Verifique sua conexão com a internet.";
        return;
    }

    areaQRCode.innerHTML = "";
    mensagem.textContent = "";

    new QRCode(areaQRCode, {
        text: link,
        width: 240,
        height: 240,
        correctLevel: QRCode.CorrectLevel.H
    });

    areaResultado.style.display = "block";
});

function baixarQRCode(formato) {
    const imagem =
        areaQRCode.querySelector("canvas") ||
        areaQRCode.querySelector("img");

    if (!imagem) {
        mensagem.textContent = "Gere um QR Code antes de baixar.";
        return;
    }

    let urlImagem;

    if (imagem.tagName.toLowerCase() === "canvas") {
        urlImagem = formato === "jpeg"
            ? imagem.toDataURL("image/jpeg", 1.0)
            : imagem.toDataURL("image/png");
    } else {
        urlImagem = imagem.src;
    }

    const linkDownload = document.createElement("a");

    linkDownload.href = urlImagem;
    linkDownload.download = `meu-qr-code.${formato}`;

    document.body.appendChild(linkDownload);
    linkDownload.click();
    linkDownload.remove();
}

botaoPNG.addEventListener("click", function () {
    baixarQRCode("png");
});

botaoJPEG.addEventListener("click", function () {
    baixarQRCode("jpeg");
});
