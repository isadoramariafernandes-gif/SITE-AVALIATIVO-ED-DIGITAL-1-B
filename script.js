
// 1. Menu Mobile
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    // Alerta simples conforme solicitado
    alert("Menu lateral em desenvolvimento para mobile!");
    // Lógica de toggle poderia entrar aqui: navLinks.classList.toggle('active');
});

// 2. Simulação de Carrossel (Troca de Background)
const banner = document.querySelector('.slide');
const titles = ["A Emoção do Basquete", "Velocidade Máxima", "O Rei do Futebol"];
const imgs = [
    "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1530549387074-d56260b049c1?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1600"
];

let index = 0;

function changeBanner() {
    index = (index + 1) % imgs.length;
    banner.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${imgs[index]}')`;
    banner.querySelector('h1').innerText = titles[index];
}

// Troca a cada 5 segundos
setInterval(changeBanner, 5000);

// 3. Botão Ver Mais
const loadMoreBtn = document.getElementById('load-more');
const extraNews = document.querySelector('.extra-news');

loadMoreBtn.addEventListener('click', () => {
    extraNews.style.display = 'block';
    loadMoreBtn.innerText = "Não há mais notícias";
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.opacity = "0.5";
});

// 4. Interação nos botões de notícias
const newsButtons = document.querySelectorAll('.btn-news');
newsButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Você será redirecionado para a notícia completa em breve!");
    });
});
