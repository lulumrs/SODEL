window.onscroll = function() {myFunction()};



var navbar = document.getElementById("navbar");
var topButton = document.getElementById("topButton");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.style.overflow = "visible";
    topButton.style.visibility = "visible";

  } else {
    navbar.classList.remove("sticky");
    navbar.style.overflow = "hidden";
    topButton.style.visibility = "hidden";

  }
}
