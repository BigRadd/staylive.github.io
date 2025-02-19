// Obtener el elemento de audio y el mensaje
const backgroundMusic = document.getElementById('backgroundMusic');
const touchMessage = document.getElementById('touchMessage');

// Reproducir música en la primera interacción del usuario
document.addEventListener('click', () => {
    // Ocultar el mensaje
    touchMessage.style.display = 'none';

    // Reproducir la música
    backgroundMusic.play()
        .then(() => console.log("Música reproducida correctamente"))
        .catch((error) => console.error("Error al reproducir música:", error));

    // Iniciar la secuencia de palabras
    startTextSequence();

    // Iniciar la generación de puntitos
    createDots();
}, { once: true }); // Solo se ejecuta una vez

// Función para iniciar la secuencia de palabras
function startTextSequence() {
    const texts = document.querySelectorAll('.text');

    // Activar las animaciones CSS para cada palabra
    texts.forEach((text) => {
        text.style.animationPlayState = 'running'; // Iniciar la animación
    });
}

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