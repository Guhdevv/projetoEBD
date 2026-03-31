// 1. Controle do Preloader (3 segundos)
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.classList.add('fade-out');
        document.body.style.overflow = 'auto';
    }, 5000);
});

// 2. Controle do Menu Lateral
const navMenu = document.getElementById('navMenu');
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');

openBtn.onclick = () => navMenu.style.width = "100%";
closeBtn.onclick = () => navMenu.style.width = "0";

document.querySelectorAll('.nav-overlay a').forEach(link => {
    link.onclick = () => navMenu.style.width = "0";
});

// 3. Controle do Modal de Dúvidas
const modal = document.getElementById('modal-duvida');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const emailSubject = document.getElementById('email-subject');

function openModal(tipo) {
    modal.style.display = "flex";
    if(tipo === 'lição') {
        modalTitle.innerText = "Dúvida sobre a Lição";
        emailSubject.value = "EBD Florida - Dúvida da Lição";
    } else {
        modalTitle.innerText = "Outros Assuntos";
        emailSubject.value = "EBD Florida - Dúvida Geral";
    }
}

closeModal.onclick = () => modal.style.display = "none";

window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}
