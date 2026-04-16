
/* =========================================
   GESTÃO DE DADOS (ARRAY DE OBJETOS)
   ========================================= */
const modalidades = [
    { titulo: "Ciclismo", desc: "Aerodinâmica e potência em dois canais." },
    { titulo: "Natação", desc: "Hidrodinâmica aplicada à performance olímpica." },
    { titulo: "Corrida", desc: "Biomecânica e amortecimento de última geração." }
];

const faqs = [
    { q: "Como a tecnologia ajuda?", a: "Através de sensores IoT e análise de dados em tempo real." },
    { q: "Quais equipamentos usar?", a: "Recomendamos tecidos inteligentes e wearables de alta precisão." }
];

/* =========================================
   RENDERIZAÇÃO DINÂMICA
   ========================================= */
function renderContent() {
    // Renderizar Cards de Modalidades
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = modalidades.map(item => `
        <article class="card">
            <h3>${item.titulo}</h3>
            <p>${item.desc}</p>
        </article>
    `).join('');

    // Renderizar Acordeões (FAQ)
    const accordionGroup = document.getElementById('accordion-group');
    accordionGroup.innerHTML = faqs.map((item, index) => `
        <div class="accordion-item">
            <button class="accordion-header" onclick="toggleAccordion(this)" aria-expanded="false">
                ${item.q} <span>+</span>
            </button>
            <div class="accordion-content">
                <p>${item.a}</p>
            </div>
        </div>
    `).join('');
}

/* =========================================
   LOGICA DE ACESSIBILIDADE
   ========================================= */
let currentFontSize = 100;

function changeFontSize(action) {
    currentFontSize += (action === 'increase' ? 10 : -10);
    document.documentElement.style.fontSize = `${currentFontSize}%`;
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

/* =========================================
   COMPONENTES (ACORDEÃO E REVEAL)
   ========================================= */
function toggleAccordion(btn) {
    const item = btn.parentElement;
    const isActive = item.classList.contains('active');
    
    // Fecha todos antes de abrir o novo (opcional)
    document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('active'));
    
    if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
    } else {
        btn.setAttribute('aria-expanded', 'false');
    }
}

// Scroll Reveal Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
