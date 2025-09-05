document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('mensagem').textContent = '';
    document.getElementById('mensagem').className = '';

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !mensagem) {
        document.getElementById('mensagem').textContent = 'Todos os campos são obrigatórios!';
        document.getElementById('mensagem').className = 'erro';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('mensagem').textContent = 'Por favor, insira um e-mail válido!';
        document.getElementById('mensagem').className = 'erro';
        return;
    }

    document.getElementById('mensagem').textContent = 'Mensagem enviada com sucesso!';
    document.getElementById('mensagem').className = 'sucesso';

    document.getElementById('form-contato').reset();
});
