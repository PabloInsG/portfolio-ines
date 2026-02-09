window.addEventListener("scroll", function () {
    const cabecera = document.querySelector(".cabecera");
    const scrollY = window.scrollY;
    if(scrollY < cabecera.offsetHeight) {
        cabecera.style.opacity = 0.93 - scrollY / cabecera.offsetHeight;
    }
});