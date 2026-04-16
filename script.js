
// --- DADOS DO SITE (SISTEMA DE GESTÃO) ---
const destinos = [
    {
        titulo: "Bora Bora",
        img: "https://images.unsplash.com/photo-1500932334442-8761ee4810a7?auto=format&fit=crop&w=500&q=60",
        desc: "Bangalôs sobre águas turquesas e corais vivos."
    },
    {
        titulo: "Grécia (Santorini)",
        img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=500&q=60",
        desc: "O contraste perfeito entre o branco das vilas e o azul do mar."
    },
    {
        titulo: "Fernando de Noronha",
        img: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=500&q=60",
        desc: "O santuário ecológico mais preservado do Brasil."
    }
];

// --- RENDERIZADOR DE CARDS ---
function renderCards() {
    const container = document.getElementById('gallery-container');
    container.innerHTML = destinos.map(d => `
        <article class="card">
            <img src="${d.img}" alt="Paisagem de ${d.titulo}" class="card-img">
            <div class="card-info">
                <h3>${d.titulo}</h3>
                <p>${d.desc}</p>
            </div>
        </article>
    `).join('');
}

// --- ACESSIBILIDADE ---
let zoom = 100;
function changeFontSize(type) {
    zoom = type === 'inc' ? zoom + 10 : zoom - 10;
    document.body.style.fontSize = zoom + "%";
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// --- LÓGICA DE REVEAL (SCROLL) ---
function revealEffect() {
    const sections = document.querySelectorAll('.reveal');
    sections.forEach(s => {
        const top = s.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            s.classList.add('active');
        }
    });
}

// --- INICIALIZAÇÃO ---
window.addEventListener('scroll', revealEffect);
window.onload = () => {
    renderCards();
    revealEffect();
};
