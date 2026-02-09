import $ from "jquery";

$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $('.cabecera').fadeOut("fast");
  } else {
    $('.cabecera').fadeIn("fast");
  }
}); 