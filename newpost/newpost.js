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



var previewPicture  = function (e) {

        // e.files contient un objet FileList
        const [picture] = e.files
        console.log(e.files)
}




// here is the code for the background
// Sélectionner le canvas
const canvas = document.getElementById("canvas");

// Définir la taille du canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Sélectionner le contexte de rendu 2D
const ctx = canvas.getContext("2d");

// Définir la classe Particle
class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  // Méthode pour dessiner la particule
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  // Méthode pour mettre à jour la position de la particule
  update() {
    // Vérifier si la particule est à l'intérieur du canvas
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }

    // Mettre à jour la position de la particule en fonction de la direction
    this.x += this.directionX;
    this.y += this.directionY;

    // Dessiner la particule mise à jour
    this.draw();
  }
  // Attraction vers une position donnée
  attract(mouseX, mouseY, radius) {
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < radius) {
      this.directionX += dx * 0.00005;
      this.directionY += dy * 0.00005;
    } else if (this.size > this.minSize) {
      this.size = Math.max(this.minSize, this.size - 0.1);
    }
  }
}

// Initialiser un tableau pour stocker les particules
let particlesArray = [];

// Fonction pour générer des particules
function init() {
  // Définir le nombre de particules à générer
  const numberOfParticles = Math.floor(window.innerWidth / 10);

  // Générer les particules avec des positions, des directions, des tailles et des couleurs aléatoires
  for (let i = 0; i < numberOfParticles; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const directionX = (Math.random() * 0.4) - 0.2;
    const directionY = (Math.random() * 0.4) - 0.2;
    const size = Math.random() * 5;
    const color = "#fff";

    particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
  }
}

// Fonction pour animer les particules
function animate() {
  // Effacer le canvas à chaque image
  ctx.fillStyle = 'rgba(33, 63, 119, 0.9)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Mettre à jour et dessiner chaque particule
  particlesArray.forEach(function (particle) {
    particle.update();
    particle.attract(mouse.x, mouse.y, 150)
  });

  // Relancer l'animation
  requestAnimationFrame(animate);
}
let mouse = {
  x: null,
  y: null,
}
window.addEventListener('mousemove', function(event) {
  mouse.x = event.x
  mouse.y = event.y
})

// Appeler la fonction pour générer les particules
init();

// Appeler la fonction pour animer les particules
animate();


resizeTimer = setTimeout(handleResize, 100);



function handleResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particlesArray = [];
  init();
}
// Redimensionner le canvas si la fenêtre est redimensionnée
window.addEventListener("resize", function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(handleResize, 100);
  // Réinitialiser les particules
});
