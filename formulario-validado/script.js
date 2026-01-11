const contato = document.getElementById('contato');
const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');
const curso = document.getElementById('curso');

function validar () {
    if(nome.value === "") {
        window.alert('Preencha o nome');
    } else if(telefone.value === "") {
        window.alert('Preencha o telefone');
    } else if(curso.value === '0') {
        window.alert('Selecione um curso');
    } else {
        window.alert('Formulário enviado');
        contato.submit();
    };
}

document.getElementById('enviar').onclick = validar;