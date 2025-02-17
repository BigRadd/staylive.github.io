function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.body.appendChild(heart);

    let size = Math.random() * 50 + 30; // Tamaño aleatorio entre 30px y 80px
    heart.style.width = size + "px";
    heart.style.height = size + "px";
    heart.style.left = Math.random() * 100 + "vw"; // Posición aleatoria en todo el ancho
    heart.style.animationDuration = Math.random() * 4 + 3 + "s"; // Duración entre 3 y 7s

    // Pequeño giro para más realismo
    heart.style.transform = `rotate(${Math.random() * 360}deg)`;

    // Remover corazones después de caer
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Generar corazones cada 200ms
setInterval(createHeart, 200);

// Reproducir la canción cuando la página carga
document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("music");
    music.play().catch(() => {
        console.log("El navegador bloqueó la reproducción automática.");
    });
});
