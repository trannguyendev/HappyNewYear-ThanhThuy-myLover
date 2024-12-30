// Khoi tao phao hoa
const container = document.querySelector('.fireworks')
const fireworks = new Fireworks(container, {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.025,
    friction: 0.99,
    gravity: 2,
    particles: 90,
    traceLength: 3,
    traceSpeed: 10,
    explosion: 10,
    intensity: 50,
    flickering: 70,
    lineStyle: 'round',
    hue: {
        min: 0,
        max: 360
    },
    delay: {
        min: 30,
        max: 60
    },
    rocketsPoint: {
        min: 50,
        max: 50
    },
    lineWidth: {
        explosion: {
            min: 3,
            max: 3
        },
        trace: {
            min: 2,
            max: 3
        }
    },
    brightness: {
        min: 50,
        max: 90
    },
    decay: {
        min: 0.015,
        max: 0.03
    },
    mouse: {
        click: false,
        move: false,
        max: 24
    },
    sound: {
        enabled: true,
        files: [
            './explosion0.mp3',
            './explosion1.mp3',
            './explosion2.mp3',
        ],
        volume: {
            min: 12,
            max: 50
        }
    }
})
document.getElementById("trigger-btn").addEventListener("click", () => {
    fireworks.start();
})
// Khoi tao hoa dao roi
function createFlowerRain() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.textContent = '🌺';
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 5000);
}

setInterval(createFlowerRain, 300);

const style = document.createElement('style');
style.textContent = `
    .flower {
        position: absolute;
        top: -50px;
        font-size: 5vh;
        text-shadow: 0 0 5px #ff69b4, 0 0 10px #ff69b4, 0 0 15px #ff69b4, 0 0 20px #ff69b4, 0 0 25px #ff69b4, 0 0 30px #ff69b4, 0 0 35px #ff69b4;
        transform: rotate(180deg);
        transition: 2s ease;
        animation: fall linear;
    }
    @keyframes fall {
        to {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(style);