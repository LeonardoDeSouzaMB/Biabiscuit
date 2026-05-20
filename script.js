// Número de telefone da Bia (DDD 21)
const numeroWhats = "5521996457245"; 

// Função para alternar entre as abas de Orçamento e Frete
function mudarAba(tipo) {
    const formOrcamento = document.getElementById('form-orcamento');
    const formFrete = document.getElementById('form-frete');
    const btnOrcamento = document.getElementById('btn-aba-orcamento');
    const btnFrete = document.getElementById('btn-aba-frete');

    if (tipo === 'orcamento') {
        formOrcamento.classList.remove('escondido');
        formFrete.classList.add('escondido');
        btnOrcamento.classList.add('ativa');
        btnFrete.classList.remove('ativa');
    } else {
        formOrcamento.classList.add('escondido');
        formFrete.classList.remove('escondido');
        btnOrcamento.classList.remove('ativa');
        btnFrete.classList.add('ativa');
    }
}

// Envio do Formulário de Orçamento
document.getElementById('form-orcamento').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome-orc').value;
    const insta = document.getElementById('insta-orc').value || "Não informado";
    const detalhes = document.getElementById('detalhes-orc').value;

    const texto = `Olá Bia! Gostaria de um *Orçamento de Biscuit*:\n\n👤 *Nome:* ${nome}\n📸 *Instagram:* ${insta}\n📝 *Detalhes do Pedido:* ${detalhes}`;
    window.open(`https://wa.me/${numeroWhats}?text=${encodeURIComponent(texto)}`, '_blank');
});

// Envio do Formulário de Frete
document.getElementById('form-frete').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome-frete').value;
    const endereco = document.getElementById('endereco-frete').value;
    const produto = document.getElementById('produto-frete').value || "Não especificado";

    const texto = `Olá Bia! Preciso calcular o *Valor do Frete/Entrega*:\n\n👤 *Nome:* ${nome}\n📍 *Endereço/CEP:* ${endereco}\n📦 *Produto de Interesse:* ${produto}`;
    window.open(`https://wa.me/${numeroWhats}?text=${encodeURIComponent(texto)}`, '_blank');
});
