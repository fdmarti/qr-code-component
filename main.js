import './style.css'

const createQrCode = () => {
    new QRCode(document.querySelector(".qr-code"), {
        text: `https://github.com/fdmarti`,
        width: 180,
        height: 180,
        colorDark : "#fff",
        colorLight : "#2b7dfa",
        correctLevel : QRCode.CorrectLevel.H
    });
}

window.addEventListener("load",createQrCode());

