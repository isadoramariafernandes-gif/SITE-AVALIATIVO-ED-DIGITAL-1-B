
// 1. DADOS DAS MODALIDADES
const esportes = [
    { 
        titulo: "Futebol", 
        desc: "A técnica e a emoção do esporte mais popular do planeta.",
        img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500",
        alt: "Bola de futebol no campo"
    },
    { 
        titulo: "Basquete", 
        desc: "Alta performance e estratégia em cada arremesso.",
        img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500",
        alt: "Bola de basquete entrando na cesta"
    },
    { 
        titulo: "Vôlei", 
        desc: "Trabalho em equipe e precisão absoluta na rede.",
        img: "https://images.unsplash.com/photo-1592656670411-591e90ae8044?w=500",
        alt: "Partida de vôlei de praia"
    }
];

// 2. RENDERIZAÇÃO DINÂMICA
const grid = document.getElementById('grid-esportes');

function renderCards() {
    grid.innerHTML = esportes.map(item => `
        <article class="card reveal">
            <img src="${item.img}" alt="${item.alt}" class="card-img">
            <div class="card-content">
                <h3>${item.titulo}</h3>
                <p>${item.desc}</p>
            </div>
        </article>
    `).join('');
}

// 3. ACESSIBILIDADE E CONTROLES
const body = document.body;
let fontSize = 100;

// Fonte
document.getElementById('btn-font-up').addEventListener('click', () => {
    fontSize += 10;
    body.style.setProperty('--base-font-size', fontSize + '%');
});

document.getElementById('btn-font-down').addEventListener('click', () => {
    fontSize -= 10;
    body.style.setProperty('--base-font-size', fontSize + '%');
});

// Contraste
document.getElementById('btn-contrast').addEventListener('click', () => {
    body.classList.toggle('high-contrast');
});

// 4. ANIMAÇÃO AO ROLAR (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

// Inicialização
window.onload = () => {
    renderCards();
    // Observa os cards após serem criados
    document.querySelectorAll('.reveal').forEach(card => observer.observe(card));
};
