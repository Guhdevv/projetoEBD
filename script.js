const navMenu = document.getElementById('navMenu');
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');

// Abrir Menu
openBtn.addEventListener('click', () => {
    navMenu.style.width = "100%";
});

// Fechar Menu
closeBtn.addEventListener('click', () => {
    navMenu.style.width = "0";
});

// Função para os botões de dúvida
function askQuestion(tipo) {
    if(tipo === 'lição') {
        alert("Direcionando para o chat de dúvidas da Lição da Semana...");
    } else {
        alert("Abrindo formulário de dúvidas gerais...");
    }
}