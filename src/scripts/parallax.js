import SimpleParallax from "simple-parallax-js/vanilla";

function parallax() {
    var image = document.querySelector('#fondo');
    new SimpleParallax(image);
}

export default parallax;