let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    proxImage();
}, 5000)

function proxImage(){
    count++;
    if(count > 4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const header = document.querySelector("header");
    const travarBarra = nav.offsetTop;

    window.addEventListener("scroll", function () {
        if (window.scrollY >= travarBarra) {
            nav.classList.add("barra-fixa");
            header.style.marginBottom = `${nav.offsetHeight}px`;
        } else {
            nav.classList.remove("barra-fixa");
            header.style.marginBottom = "0";
        }
    });
});

function abrirQRCode() {
    const modal = document.getElementById("popQrCode");
    modal.style.display = "flex";

    window.onclick = function(event) {
        if (event.target === modal) {
            fecharQRCode();
        }
    }
}

function fecharQRCode() {
    document.getElementById("popQrCode").style.display = "none";
    window.onclick = null;
}