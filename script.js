// Número de telefone da Bia (DDD 21)
const numeroWhats = "5521996457245"; 

// Tabela de Preços e Prazos do Frete (Base de cálculo saindo de Maricá)
const tabelaFretes = {
    "marica-centro": { nome: "Maricá (Centro)", valor: 10.00, prazo: "Entrega em até 1 dia após produção" },
    "marica-distante": { nome: "Maricá (Itaipuaçu / Distritos)", valor: 20.00, prazo: "Entrega em até 2 dias após produção" },
    "niteroi": { nome: "Niterói", valor: 35.00, prazo: "Entrega via portador ou correios (2 a 4 dias)" },
    "sao-goncalo": { nome: "São Gonçalo", valor: 35.00, prazo: "Entrega via portador ou correios (2 a 4 dias)" },
    "itaborai": { nome: "Itaboraí", valor: 40.00, prazo: "Entrega via correios (3 a 5 dias)" },
    "rio-capital": { nome: "Rio de Janeiro (Capital)", valor: 45.00, prazo: "Entrega via Sedex/Correios (2 a 3 dias)" },
    "outros": { nome: "Outras Regiões", valor: 0.00, prazo: "A combinar via Correios (PAC/Sedex)" }
};

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

// Mostra o valor calculado na tela em tempo real
function calcularFreteLocal() {
    const regiaoSelecionada = document.getElementById('regiao-frete').value;
    const caixaResultado = document.getElementById('resultado-frete-tela');
    const textoValor = document.getElementById('valor-frete-texto');
    const textoPrazo = document.getElementById('prazo-frete-texto');

    if (regiaoSelecionada && tabelaFretes[regiaoSelecionada]) {
        const dados = tabelaFretes[regiaoSelecionada];
        caixaResultado.classList.remove('escondido');
        
        if (regiaoSelecionada === 'outros') {
            textoValor.innerText = "Calculado no chat";
            textoPrazo.innerText = "Insira o CEP para calcular via Correios.";
        } else {
            textoValor.innerText = `R$ ${dados.valor.toFixed(2).replace('.', ',')}`;
            textoPrazo.innerText = dados.prazo;
        }
    } else {
        caixaResultado.classList.add('escondido');
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

// Envio do Formulário de Frete com o Cálculo Embutido
document.getElementById('form-frete').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome-frete').value;
    const regiaoKey = document.getElementById('regiao-frete').value;
    const endereco = document.getElementById('endereco-frete').value;

    const dadosFrete = tabelaFretes[regiaoKey];
    const valorTexto = regiaoKey === 'outros' ? "A combinar" : `R$ ${dadosFrete.valor.toFixed(2).replace('.', ',')}`;

    const texto = `Olá Bia! Usei o simulador do site para verificar o *Frete/Entrega*:\n\n👤 *Nome:* ${nome}\n🏙️ *Região:* ${dadosFrete.nome}\n📍 *Endereço Completo:* ${endereco}\n\n🚚 *Valor Estimado do Frete:* ${valorTexto}\n⏱️ *Previsão:* ${dadosFrete.prazo}`;
    
    window.open(`https://wa.me/${numeroWhats}?text=${encodeURIComponent(texto)}`, '_blank');
});
