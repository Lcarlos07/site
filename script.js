// Validação do formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Limpar mensagens anteriores
            const messageDiv = document.getElementById('message');
            messageDiv.className = '';
            messageDiv.textContent = '';
            
            // Obter valores dos campos
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            
            // Validar campos
            let isValid = true;
            let errorMessage = '';
            
            if (!nome) {
                isValid = false;
                errorMessage = 'Por favor, informe seu nome.';
            } else if (!email) {
                isValid = false;
                errorMessage = 'Por favor, informe seu e-mail.';
            } else if (!isValidEmail(email)) {
                isValid = false;
                errorMessage = 'Por favor, informe um e-mail válido.';
            } else if (!mensagem) {
                isValid = false;
                errorMessage = 'Por favor, escreva sua mensagem.';
            }
            
            // Exibir mensagem de erro ou sucesso
            if (!isValid) {
                messageDiv.textContent = errorMessage;
                messageDiv.className = 'error';
            } else {
                messageDiv.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
                messageDiv.className = 'success';
                
                // Limpar o formulário
                contactForm.reset();
            }
        });
    }
});

// Função para validar e-mail
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
