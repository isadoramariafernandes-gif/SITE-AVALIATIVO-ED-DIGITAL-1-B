
// 1. GESTÃO DE DADOS (Simulando um Banco de Dados)
const sportsData = [
    { title: "Skate", desc: "Manobras urbanas e liberdade total." },
    { title: "Surf", desc: "A conexão perfeita entre o homem e o mar." },
    { title: "Escalada", desc: "Desafiando limites em paredes verticais." }
];

const faqData = [
    { q: "Quais equipamentos são necessários?", a: "Depende da modalidade, mas segurança sempre vem em primeiro lugar." },
    { q: "Onde praticar?", a: "Existem parques e picos específicos em todo o Brasil." }
];

// 2. FUNÇÕES DE RENDERIZAÇÃO
function initApp() {
    renderSports();
    renderFAQ();
    setupAccessibility();
    setupScrollReveal();
}

function renderSports() {
    const container = document.getElementById('sports-container');
    container.innerHTML = sportsData.map(sport => `
        <article class="sport-card">
            <h3>${sport.title}</h3>
            <p>${sport.desc}</p>
            <button class="btn-more">Saiba mais</button>
        </article>
    `).join('');
}

function renderFAQ() {
    const container = document.getElementById('accordion-group');
    container.innerHTML = faqData.map((item, index) => `
        <div class="accordion-item">
            <button class="accordion-header" aria-expanded="false" onclick="toggleAccordion(this)">
                ${item.q}
            </button>
            <div class="accordion-content" style="display:none; padding: 1rem;">
                <p>${item.a}</p>
            </div>
        </div>
    `).join('');
}

// 3. ACESSIBILIDADE E COMPONENTES
let fontSize = 16;

function setupAccessibility() {
    document.getElementById('btn-increase-font').addEventListener('click', () => {
        fontSize += 2;
        document.body.style.fontSize = fontSize + 'px';
    });

    document.getElementById('btn-decrease-font').addEventListener('click', () => {
        fontSize -= 2;
        document.body.style.fontSize = fontSize + 'px';
    });

    document.getElementById('btn-contrast').addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });
}

function toggleAccordion(btn) {
    const content = btn.nextElementSibling;
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    
    btn.setAttribute('aria-expanded', !isExpanded);
    content.style.display = isExpanded ? 'none' : 'block';
}

// 4. LOGICA DE SCROLL REVEAL (Simples)
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.sport-card').forEach(card => observer.observe(card));
}

window.onload = initApp;
