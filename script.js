
// 1. GESTÃO DE DADOS (Não repetitivo)
const esportes = [
    { titulo: "Futebol", desc: "A paixão nacional e mundial." },
    { titulo: "Basquete", desc: "Dinâmica e estratégia em quadra." },
    { titulo: "Natação", desc: "Saúde e performance na água." }
];

const grid = document.getElementById('grid-esportes');

function renderCards() {
    grid.innerHTML = esportes.map(esp => `
        <article class="card reveal">
            <h3>${esp.titulo}</h3>
            <p>${esp.desc}</p>
        </article>
    `).join('');
}

// 2. ACESSIBILIDADE: CONTROLE DE FONTE
let currentFontSize = 100;
const body = document.body;

document.getElementById('btn-font-up').addEventListener('click', () => {
    currentFontSize += 10;
    body.style.setProperty('--base-font-size', `${currentFontSize}%`);
});

document.getElementById('btn-font-down').addEventListener('click', () => {
    currentFontSize -= 10;
    body.style.setProperty('--base-font-size', `${currentFontSize}%`);
});

// 3. MODO CONTRASTE
document.getElementById('btn-contrast').addEventListener('click', () => {
    body.classList.toggle('high-contrast');
});

// 4. SCROLL REVEAL (Observador de Interseção)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
});

// Inicialização
window.onload = () => {
    renderCards();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};
