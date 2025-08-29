// script.js
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    // Limpar mensagens anteriores
    document.getElementById('mensagem-erro').textContent = '';
    document.getElementById('mensagem-sucesso').textContent = '';

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validar campos
    if (!nome || !email || !mensagem) {
        document.getElementById('mensagem-erro').textContent = 'Todos os campos são obrigatórios!';
        return;
    }

    // Validar formato de e-mail
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('mensagem-erro').textContent = 'Por favor, insira um e-mail válido!';
        return;
    }

    // Exibir mensagem de sucesso
    document.getElementById('mensagem-sucesso').textContent = 'Formulário enviado com sucesso!';

    // Limpar os campos após envio (opcional)
    document.getElementById('form-contato').reset();
});
