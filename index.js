let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const header = document.querySelector("header");
    const navOffset = nav.offsetTop;

    window.addEventListener("scroll", function () {
        if (window.scrollY >= navOffset) {
            nav.classList.add("fixed-nav");
            header.style.marginBottom = `${nav.offsetHeight}px`;
        } else {
            nav.classList.remove("fixed-nav");
            header.style.marginBottom = "0";
        }
    });
});

function abrirQRCode() {
    const modal = document.getElementById("qrCodeModal");
    modal.style.display = "flex";

    window.onclick = function(event) {
        if (event.target === modal) {
            fecharQRCode();
        }
    }
}

function fecharQRCode() {
    document.getElementById("qrCodeModal").style.display = "none";
    window.onclick = null;
}

