// Función para crear puntitos de lluvia
function createDots() {
  const numDots = 100; // Número de puntitos
  const container = document.querySelector('.dots-container');

  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    positionDot(dot);
    container.appendChild(dot);
    dot.style.animationDuration = `${Math.random() * 5 + 3}s`; // Más lento
    dot.style.animationDelay = `${Math.random() * 2}s`; // Retraso aleatorio
  }
}

// Función para posicionar un puntito en una ubicación aleatoria
function positionDot(dot) {
  const x = Math.random() * window.innerWidth;
  dot.style.left = `${x}px`;
  dot.style.top = `${-10}px`; // Comienzan arriba de la pantalla
}

// Iniciar la generación de puntitos
createDots();

// Activar animación del logo cuando aparecen las palabras
const texts = document.querySelectorAll('.text');
texts.forEach((text, index) => {
  setTimeout(() => {
    text.classList.add('start');
  }, index * 1000); // 1s, 2s, 3s, etc.
});