window.onscroll = function() {myFunction()};



var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.style.overflow = "visible";
  } else {
    navbar.classList.remove("sticky");
    navbar.style.overflow = "hidden";

  }
}


function addTile(){
  document.getElementById('box').innerHTML += '<div id="box"><div class="tile"><div class="tile-inner"><div class="tile-front"><h3>Card 1</h3><p>Some text</p><p>Some text</p></div><div class="tile-back"><h3>Card 1 back</h3><p>Some new text</p><p>Some new text</p></div></div></div></div>';
}

