body {
    margin: 0;
    overflow: hidden;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial, sans-serif;
}

.container {
    position: relative;
}

/* Logo brillante y animado */
.logo {
    font-size: 150px;
    font-weight: bold;
    color: white;
    position: relative;
    z-index: 10;
    text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 40px #ff0000;
    animation: glow 2s infinite alternate, moveUpDown 3s infinite ease-in-out;
}

/* Efecto de brillo */
@keyframes glow {
    from {
        text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 40px #ff0000;
    }
    to {
        text-shadow: 0 0 20px #ff4500, 0 0 30px #ff4500, 0 0 60px #ff4500;
    }
}

/* Movimiento del logo */
@keyframes moveUpDown {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-15px);
    }
}

/* Corazones animados */
.heart {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: red;
    clip-path: polygon(
        50% 15%, 61% 5%, 75% 0, 89% 5%, 100% 20%, 95% 40%, 80% 60%, 
        50% 90%, 20% 60%, 5% 40%, 0 20%, 11% 5%, 25% 0, 39% 5%
    );
    animation: fall linear infinite, pulse 1.5s infinite ease-in-out;
    opacity: 0.8;
}

/* Animación de caída */
@keyframes fall {
    from {
        transform: translateY(-10vh);
        opacity: 1;
    }
    to {
        transform: translateY(110vh);
        opacity: 0;
    }
}

/* Animación de latido */
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
}
