// Variáveis globais
let aumentoPercentual = 0;  // Defina o aumento percentual aqui (exemplo: 10 para 10%)
const despesasFixas = 800;  // Valor padrão das despesas fixas

// Constantes dos modelos de portão separados por categorias
const modelosPETC = [
    { codigo: 'PETC001', valorMetro: 150.00 },
    { codigo: 'PETC002', valorMetro: 200.00 },
    { codigo: 'PETC003', valorMetro: 250.00 },
    { codigo: 'PETC004', valorMetro: 300.00 }
];

const modelosPET = [
    { codigo: 'PET001', valorMetro: 180.00 },
    { codigo: 'PET002', valorMetro: 230.00 }
];

const modelosPETT = [
    { codigo: 'PETT001', valorMetro: 210.00 },
    { codigo: 'PETT002', valorMetro: 260.00 }
];

const modelosPETM = [
    { codigo: 'PETM001', valorMetro: 190.00 },
    { codigo: 'PETM002', valorMetro: 240.00 }
];

// Função para carregar os modelos na lista de auto-complete
function carregarModelos() {
    const dataList = document.getElementById('modelosList');
    
    // Adiciona cada modelo como uma opção no datalist
    const todosModelos = [...modelosPETC, ...modelosPET, ...modelosPETT, ...modelosPETM];
    dataList.innerHTML = '';  // Limpa opções antigas
    todosModelos.forEach(modelo => {
        const option = document.createElement('option');
        option.value = modelo.codigo;
        dataList.appendChild(option);
    });
}

// Função para calcular o preço do portão
document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const codigo = document.getElementById('codigo').value.trim().toUpperCase(); // Converte para maiúsculas
    
    // Encontrar o modelo correspondente
    const todosModelos = [...modelosPETC, ...modelosPET, ...modelosPETT, ...modelosPETM];
    const modelo = todosModelos.find(m => m.codigo.toUpperCase() === codigo); // Converte os códigos para maiúsculas

    // Verifica se o modelo existe
    if (!modelo) {
        alert('Modelo não encontrado. Verifique o código e tente novamente.');
        return;
    }

    const valorMetroOriginal = modelo.valorMetro;
    const aumentoMultiplicador = 1 + aumentoPercentual / 100; // Calcula o fator de aumento
    const valorMetro = valorMetroOriginal * aumentoMultiplicador; // Aplica o aumento percentual
    const largura = parseFloat(document.getElementById('largura').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const lucro = parseFloat(document.getElementById('lucro').value);

    // Calcula a área
    const area = largura * altura;
    // Calcula o preço total com aumento percentual
    const precoSemLucro = area * valorMetro;
    // Calcula o preço com lucro
    const precoComLucro = precoSemLucro * (1 + lucro / 100);
    // Adiciona despesas fixas
    const precoFinal = precoComLucro + despesasFixas;

    // Cria uma nova linha na tabela com os dados calculados
    const tabela = document.getElementById('gateList');
    const novaLinha = tabela.insertRow();

    novaLinha.innerHTML = `
        <td>${codigo}</td>
        <td>R$ ${valorMetro.toFixed(2)}</td> <!-- Valor do metro quadrado com aumento percentual -->
        <td>${largura.toFixed(2)}</td>
        <td>${altura.toFixed(2)}</td>
        <td>${area.toFixed(2)}</td>
        <td>R$ ${precoFinal.toFixed(2)}</td>
    `;

    // Limpa o formulário
    //document.getElementById('calcForm').reset();

    const precoNormal = precoFinal * 1.065;
    const precoPIX = precoFinal;
    const preco12x = precoFinal * 1.129;

    // Atualizando os valores no HTML
    document.getElementById('precoNormal').textContent = precoNormal.toFixed(2);
    document.getElementById('precoPIX').textContent = precoPIX.toFixed(2);
    document.getElementById('preco12x').textContent = preco12x.toFixed(2);
});

// Carrega os modelos ao iniciar a página
window.onload = carregarModelos;
