// LOVE + ROSE ICONS
const icons = ["💗", "🌹"];
const falling = document.getElementById("falling");

// CREATE FALLING ITEMS
function createFalling() {
    const item = document.createElement("span");

    item.textContent = icons[Math.floor(Math.random() * icons.length)];
    item.style.left = Math.random() * 100 + "%";
    item.style.fontSize = 22 + Math.random() * 12 + "px";
    item.style.animationDuration = 4 + Math.random() * 5 + "s";

    falling.appendChild(item);

    setTimeout(() => item.remove(), 9000);
}

// Bikin jatuh tiap 250ms
setInterval(createFalling, 250);


// CURSOR LOVE POP EFFECT
document.addEventListener("mousemove", (e) => {
    const love = document.createElement("div");
    love.classList.add("cursor-love");
    love.textContent = "💗";

    love.style.left = `${e.clientX}px`;
    love.style.top = `${e.clientY}px`;

    document.body.appendChild(love);

    setTimeout(() => love.remove(), 800);
});
