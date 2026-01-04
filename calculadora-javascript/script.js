var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');

document.getElementById('somar').onclick = function() {
    var operacao = parseFloat(num1.value) + parseFloat(num2.value);
    document.getElementById('resultado').value = operacao;
}

document.getElementById('subtrair').onclick = function() {
    var operacao = parseFloat(num1.value) - parseFloat(num2.value);
    document.getElementById('resultado').value = operacao;
}

document.getElementById('multiplicar').onclick = function() {
    var operacao = parseFloat(num1.value) * parseFloat(num2.value);
    document.getElementById('resultado').value = operacao;
}

document.getElementById('dividir').onclick = function() {
    var operacao = parseFloat(num1.value) / parseFloat(num2.value);
    document.getElementById('resultado').value = operacao;
}