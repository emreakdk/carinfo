
window.addEventListener('load', fg_load)

function fg_load() {
    document.getElementById('loading').style.display = 'none'
}

let mybutton = document.getElementById("button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.bottom = "32px";
  } else {
    button.style.bottom = "-100px";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
