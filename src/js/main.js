// Atualiza data e hora
function atualizarDataHora() {
    const agora = new Date();
    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('current-date').textContent = agora.toLocaleDateString('pt-BR', opcoes);
}

// Executa a função quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    atualizarDataHora();
    setInterval(atualizarDataHora, 1000); // Atualiza a cada segundo
});
