// 1. GESTÃO DE DADOS (ARRAY DE OBJETOS)
const destinos = [
    { id: 1, nome: "Maldivas", desc: "Águas cristalinas e paz absoluta." },
    { id: 2, nome: "Machu Picchu", desc: "História e aventura nos Andes." },
    { id: 3, nome: "Tóquio", desc: "Onde o futuro encontra a tradição." }
];

// 2. RENDERIZAÇÃO DINÂMICA
const grid = document.getElementById('destinos-grid');

function carregarDestinos() {
    grid.innerHTML = destinos.map(local => `
        <article class="card">
            <h3>${local.nome}</h3>
            <p>${local.desc}</p>
            <button aria-label="Saber mais sobre ${local.nome}">Ver Detalhes</button>
        </article>
    `).join('');
}

// 3. ACESSIBILIDADE: TAMANHO DA FONTE
let currentFontSize = 100; // Porcentagem
function changeFontSize(action) {
    if(action === 'increase') currentFontSize += 10;
    else currentFontSize -= 10;
    document.body.style.fontSize = currentFontSize + "%";
}

// 4. ALTO CONTRASTE
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// 5. SCROLL REVEAL (VISÃO SISTÊMICA)
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

// INICIALIZAÇÃO
window.addEventListener("scroll", reveal);
window.onload = () => {
    carregarDestinos();
    reveal();
};
