
// 1. Simulação de Notícias Dinâmicas
const newsData = [
    { title: "Brasil vence amistoso com gol no último minuto!", time: "Há 2 horas" },
    { title: "Novo recorde mundial na maratona de Boston.", time: "Há 5 horas" },
    { title: "Transferências: Astro do basquete muda de time.", time: "Há 8 horas" }
];

const newsContainer = document.getElementById('news-container');

function loadNews() {
    newsData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'news-item reveal';
        div.innerHTML = `
            <h4>${item.title}</h4>
            <small>${item.time}</small>
        `;
        newsContainer.appendChild(div);
    });
}

// 2. Menu Hamburguer
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 3. Troca de Tema (Dark/Light)
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌓';
});

// 4. Contador de Cliques
let count = 0;
const countBtn = document.getElementById('count-btn');
const counterDisplay = document.getElementById('click-counter');

countBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
    countBtn.style.transform = "scale(0.9)";
    setTimeout(() => countBtn.style.transform = "scale(1)", 100);
});

// 5. Animação de Scroll (Reveal)
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
window.onload = () => {
    loadNews();
    reveal(); // Inicia os elementos visíveis
};
