const canvas = document.getElementById("effectCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

const particles = [];
const MAX_PARTICLES = 40; // Efek cukup banyak tapi ringan

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

class Particle {
    constructor(type) {
        this.x = rand(0, canvas.width);
        this.y = rand(-100, -10);
        this.size = rand(20, 32);
        this.speed = rand(0.5, 1.4);
        this.rotateSpeed = rand(0.01, 0.04);
        this.rotation = rand(0, Math.PI * 2);
        this.type = type; // 'love' atau 'rose'
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.font = `${this.size}px serif`;

        if (this.type === "rose") ctx.fillText("🌹", -this.size / 2, this.size / 2);
        else ctx.fillText("❤️", -this.size / 2, this.size / 2);

        ctx.restore();
    }

    update() {
        this.y += this.speed;
        this.rotation += this.rotateSpeed;

        if (this.y > canvas.height + 60) {
            this.y = -50;
            this.x = rand(0, canvas.width);
        }
    }
}

function spawn() {
    if (particles.length < MAX_PARTICLES) {
        const type = Math.random() < 0.5 ? "love" : "rose";
        particles.push(new Particle(type));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    spawn();

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

animate();
