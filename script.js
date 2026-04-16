
// --- GESTÃO DE DADOS ---
const destinosData = [
    { nome: "Ilhas Maldivas", desc: "Paraísos de águas cristalinas.", preco: "R$ 12.000" },
    { nome: "Patagônia", desc: "Aventuras geladas e paisagens épicas.", preco: "R$ 8.500" },
    { nome: "Tóquio", desc: "Onde o futuro encontra a tradição.", preco: "R$ 15.000" }
];

const faqData = [
    { q: "Preciso de visto?", a: "Depende do destino. Verifique a aba de suporte." },
    { q: "Quais as formas de pagamento?", a: "Aceitamos Pix, Cartão em 12x e Cripto." }
];

// --- RENDERIZAÇÃO DINÂMICA ---
function renderContent() {
    const grid = document.getElementById('grid-destinos');
    grid.innerHTML = destinosData.map(item => `
        <article class="card">
            <h3>${item.nome}</h3>
            <p>${item.desc}</p>
            <strong>${item.preco}</strong>
        </article>
    `).join('');

    const faqContainer = document.getElementById('faq-container');
    faqContainer.innerHTML = faqData.map((item, index) => `
        <div class="accordion-item">
            <button class="accordion-header" onclick="toggleAccordion(${index})" aria-expanded="false">
                ${item.q}
            </button>
            <div class="accordion-content" style="display:none; padding: 1rem;">
                <p>${item.a}</p>
            </div>
        </div>
    `).join('');
}

// --- ACESSIBILIDADE ---
let fontSize = 100;
function adjustFont(type) {
    fontSize = type === 'increase' ? fontSize + 10 : fontSize - 10;
    document.body.style.fontSize = fontSize + "%";
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// --- COMPONENTES (ACORDEÃO) ---
function toggleAccordion(index) {
    const contents = document.querySelectorAll('.accordion-content');
    const display = contents[index].style.display;
    contents[index].style.display = display === 'block' ? 'none' : 'block';
}

// --- ANIMAÇÃO SCROLL REVEAL ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// --- INICIALIZAÇÃO ---
window.onload = () => {
    renderContent();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};
