// 1. Controle do Preloader
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

// 4. ENVIO DO FORMULÁRIO SEM SAIR DA PÁGINA (NOVIDADE)
const form = document.getElementById('duvida-form');

form.onsubmit = async (e) => {
    e.preventDefault(); // Impede o redirecionamento para o site do Formspree

    const button = form.querySelector('.btn-enviar');
    const originalText = button.innerText;
    
    // Feedback visual de carregamento
    button.innerText = "Enviando...";
    button.disabled = true;

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // SUCESSO: O que você pediu acontece aqui
            button.innerText = "Enviado com Sucesso!";
            button.style.backgroundColor = "#28a745"; // Fica verde
            form.reset(); // Limpa o texto digitado

            // Espera 2 segundos e fecha o modal automaticamente
            setTimeout(() => {
                modal.style.display = "none";
                
                // Prepara o botão para a próxima vez que abrir
                button.innerText = originalText;
                button.disabled = false;
                button.style.backgroundColor = ""; 
            }, 4000);

        } else {
            throw new Error();
        }
    } catch (error) {
        // Caso algo dê errado (ex: sem internet)
        button.innerText = "Erro, verifique sua conexão!";
        button.style.backgroundColor = "#dc3545";
        button.disabled = false;
    }
};
