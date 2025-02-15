document.getElementById("showMore").addEventListener("click", function () {
    document.getElementById("hiddenMessage").classList.remove("hidden");
});

// Función para generar corazones flotantes
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Crear corazones cada 400ms
setInterval(createHeart, 400);
