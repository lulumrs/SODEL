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


var data = {
  "Cards":[{
      "Title":"Card 1 title",
      "Content1":"Here is the front",
      "Content2":"Here is the back",
    },

    {
      "Title":"Card 2 title",
      "Content1":"Here is the front",
      "Content2":"Here is the back",
    },

    {
      "Title":"Card 3 title",
      "Content1":"Here is the front",
      "Content2":"Here is the back",
    },

    {
      "Title":"Card 4 title",
      "Content1":"Here is the front",
      "Content2":"Here is the back",
    },

    {
      "Title":"Card 5 title",
      "Content1":"Here is the front",
      "Content2":"Here is the back",
    }]};

data.Cards.forEach(function(card) {
  console.log(card.Title);
  console.log(card.Content1);
  var block = '<div class="tile"><div class="tile-inner"><div class="tile-front"><h3>'+card.Title+'</h3><p>'+card.Content1+'</p></div><div class="tile-back"><p>'+card.Content2+'</p></div></div></div>';
  document.getElementById('box').innerHTML += block;
});



function addTile(){
  document.getElementById('box').innerHTML += '<div id="box"><div class="tile"><div class="tile-inner"><div class="tile-front"><h3>Card 1</h3><p>Some text</p><p>Some text</p></div><div class="tile-back"><h3>Card 1 back</h3><p>Some new text</p><p>Some new text</p></div></div></div></div>';
}

