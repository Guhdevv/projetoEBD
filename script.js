// Gerenciamento do Preloader (Duração fixa de 3 segundos)
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    setTimeout(() => {
        preloader.classList.add('fade-out');
        document.body.style.overflow = 'auto'; // Libera o scroll
    }, 3000); // 3000ms = 3 segundos
});

// Seleção de elementos do Menu
const navMenu = document.getElementById('navMenu');
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');

// Funções do Menu
openBtn.onclick = () => navMenu.style.width = "100%";
closeBtn.onclick = () => navMenu.style.width = "0";

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll('.nav-overlay a').forEach(link => {
    link.onclick = () => navMenu.style.width = "0";
});

// Funções dos Botões de Dúvida
function askQuestion(tipo) {
    if(tipo === 'lição') {
        alert("Encaminhando para o setor Pedagógico da EBD...");
    } else {
        alert("Encaminhando para a Secretaria da Igreja...");
    }
}
