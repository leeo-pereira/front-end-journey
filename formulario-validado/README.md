# Formulário com validação por meio de JavaScript

Este é um formulário simples que verifica se algumas condições foram respeitadas para que o envio seja feito:

1. usuário preencheu nome?
2. usuário preencheu telefone?
3. usuário selecionou um curso?

Se todas as respostas forem afirmativas, o formulário é enviado. Caso contrário, o usuário recebe alertas para cada etapa não realizada.

## Como funciona?

1. O arquivo de scripts importa IDs de objetos relevantes: formulário, inputs de nome, telefone e o seletor de curso, além do botão.
2. Uma função com `if/else` verifica as condições acessando o valor (`.value`) dos elementos obtidos via `document.getElementById`:
    1. `=== ''` no caso dos campos de texto e número,
    2. `=== 0` no caso do campo seletor.
3. Se uma condição não for respeitada, a função dispara `window.alert` com um aviso específico para:
    1. preencher o nome,
    2. preencher o telefone,
    3. selecionar um curso.
4. Usando `document.getElementById(id).onclick = function()`, o botão:
    1. executa a função de verificação e, caso todas as condições sejam satisfeitas,
    2. exibe um alerta de confirmação,
    3. envia o formulário.

## Como testar
Acesse: https://leeo-pereira.github.io/front-end-journey/formulario-validado/
