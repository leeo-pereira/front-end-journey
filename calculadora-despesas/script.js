// Converte os valores para o real brasileiro.
const formatar = (valor) =>
    valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

// Recebe valores dos inputs, aciona a função e exibe os resultados nos outputs.
document.getElementById('calcular').onclick = function() {
    const salario1 = parseFloat(document.getElementById('salario1').value);
    const salario2 = parseFloat(document.getElementById('salario2').value);
    const despesas = parseFloat(document.getElementById('despesas').value);

    // Previne campos inválidos.
    if (isNaN(salario1) || isNaN(salario2) || isNaN(despesas)) {
        alert ('Por favor, preencha todos os campos.');
        return;
    }

    const resultado = divisaoDasContas(salario1, salario2, despesas);

    // Exibe resultados nos outputs.
    document.getElementById('resultado1').textContent = formatar(resultado.parte1);
    document.getElementById('resultado2').textContent = formatar(resultado.parte2);
}

// Calcula divisão de contas de acordo com cada salário
function divisaoDasContas(salario1, salario2, despesas) {
    var rendaTotal = salario1 + salario2;

    // Evita Infinity/NaN caso os salários sejam 0
    if (rendaTotal === 0) {
        return { parte1: 0, parte2: 0};
    }

    var percentual1 = salario1 / rendaTotal;
    var percentual2 = salario2 / rendaTotal;

    return {
        parte1: despesas * percentual1,
        parte2: despesas * percentual2
    };
}