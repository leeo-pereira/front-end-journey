function calcula(objetoId) {
    const inputResultado = document.getElementById('resultado');

    if(objetoId == 'decrementa') {
    var menos = parseInt(inputResultado.value) - 1;
    document.getElementById('resultado').value = menos;
    } else {
    var mais = parseInt(inputResultado.value) + 1;
    document.getElementById('resultado').value = mais;
    }
}

document.getElementById('decrementa').onclick = function() {
    calcula(this.id);
}

document.getElementById('incrementa').onclick = function() {
    calcula(this.id);
}