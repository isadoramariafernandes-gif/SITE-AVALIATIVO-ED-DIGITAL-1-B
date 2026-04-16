
// 1. GESTÃO DE DADOS (Simulando um DB/API)
const destinos = [
    { nome: "Paris", desc: "A cidade luz e do romance.", img: "🗼" },
    { nome: "Tóquio", desc: "Tradição e tecnologia de ponta.", img: "🍣" },
    { nome: "Rio de Janeiro", desc: "Belezas naturais e energia.", img: "🏖️" }
];

const faqs = [
    { q: "Quais documentos preciso?", a: "Para a maioria dos destinos, passaporte válido por 6 meses." },
    { q: "Posso parcelar?", a: "Sim, em até 12x sem juros no cartão." }
];

// 2. RENDERIZAÇÃO DINÂMICA
function renderizarConteudo() {
    const grid = document.getElementById('grid-destinos');
    grid.innerHTML = destinos.map(dest => `
        <article class="card">
            <div style="font-size: 3rem">${dest.img}</div>
            <h3>${dest.nome}</h3>
            <p>${dest.desc}</p>
        </article>
    `).join('');

    const faqContainer = document.getElementById('faq-container');
    faqContainer.innerHTML = faqs.map((f, i) => `
        <div class="accordion-item">
            <button class="accordion-header" aria-expanded="false" onclick="toggleAccordion(${i})">
                ${f.q}
            </button>
            <div class="accordion-content" id="faq-${i}">${f.a}</div>
        </div>
    `).join('');
}

// 3. ACESSIBILIDADE: CONTROLE DE FONTE E CONTRASTE
let fontSize = 100;
document.getElementById('font-up').addEventListener('click', () => {
    fontSize += 10;
    document.documentElement.style.fontSize = `${fontSize}%`;
});

document.getElementById('font-down').addEventListener('click', () => {
    fontSize -= 10;
    document.documentElement.style.fontSize = `${fontSize}%`;
});

document.getElementById('btn-contrast').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// 4. COMPONENTE: ACORDEÃO
function toggleAccordion(index) {
    const contents = document.querySelectorAll('.accordion-content');
    const headers = document.querySelectorAll('.accordion-header');
    
    const isVisible = contents[index].classList.contains('active');
    
    // Fecha todos
    contents.forEach(c => c.classList.remove('active'));
    headers.forEach(h => h.setAttribute('aria-expanded', 'false'));

    // Abre o clicado
    if (!isVisible) {
        contents[index].classList.add('active');
        headers[index].setAttribute('aria-expanded', 'true');
    }
}

// 5. ANIMAÇÃO: SCROLL REVEAL (Observer API)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Inicialização
window.onload = () => {
    renderizarConteudo();
    document.querySelectorAll('.card').forEach(card => observer.observe(card));
};

// 6. CARROSSEL (Lógica Simplificada)
let currentSlide = 0;
document.querySelector('.next').addEventListener('click', () => {
    const track = document.getElementById('carousel-track');
    currentSlide = (currentSlide + 1) % 3; // Supondo 3 slides
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
});
