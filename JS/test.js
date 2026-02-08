function startAnimation() {
  var box = document.querySelector('.box');
  box.classList.add('animate');  // Ajoute la classe pour démarrer l'animation
}

let box = document.getElementById('animated-box');
let position = 0;

function animate() {
  position += 2;  // Augmente la position de 2px à chaque frame
  box.style.transform = `translateX(${position}px)`;  // Applique la transformation CSS

  if (position < 300) {  // Condition d'arrêt
    requestAnimationFrame(animate);  // Appel récursif pour continuer l'animation
  }
}

animate();  // Lancer l'animation

