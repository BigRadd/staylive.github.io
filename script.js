function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.body.appendChild(heart);

    let size = Math.random() * 20 + 10; // Tamaño aleatorio
    heart.style.width = size + "px";
    heart.style.height = size + "px";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Velocidad aleatoria

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 200);

// Reproducir la canción cuando la página carga
document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("music");
    music.play().catch(() => {
        console.log("El navegador bloqueó la reproducción automática.");
    });
});
