function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    document.body.appendChild(heart);

    let size = Math.random() * 20 + 10; // Tamaño aleatorio entre 10px y 30px
    heart.style.width = size + "px";
    heart.style.height = size + "px";
    heart.style.left = Math.random() * 100 + "vw"; // Posición horizontal aleatoria
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Duración aleatoria de caída

    // Remover corazones después de caer
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generar corazones cada 300 milisegundos
setInterval(createHeart, 300);

// Reproducir la canción automáticamente si es posible
document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("music");
    music.play().catch(() => {
        console.log("El navegador bloqueó la reproducción automática.");
    });
});
