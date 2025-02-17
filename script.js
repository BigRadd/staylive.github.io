// Función para crear un corazón más bonito
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = `
        <svg viewBox="0 0 32 29.6">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
            c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" fill="rgba(255, 107, 107, 0.7)" stroke="#ff6b6b" stroke-width="2"/>
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
            c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" fill="rgba(255, 255, 255, 0.5)" transform="scale(0.8) translate(4, 5)"/>
        </svg>
    `;
    return heart;
}

// Función para colocar los corazones en posiciones aleatorias
function placeHearts() {
    const numHearts = 8; // Menos corazones
    const container = document.body;

    for (let i = 0; i < numHearts; i++) {
        const heart = createHeart();
        positionHeart(heart);
        container.appendChild(heart);
        heart.style.animationDelay = `${Math.random() * 3}s`;

        // Rotación aleatoria para los corazones
        heart.style.transform = `rotate(${Math.random() * 360}deg)`;
    }
}

// Función para posicionar un corazón en una ubicación aleatoria
function positionHeart(heart) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
}

// Iniciar la generación de corazones
placeHearts();
