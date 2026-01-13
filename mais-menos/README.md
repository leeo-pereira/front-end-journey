# Decremento e incremento com JavaScript

Interface com dois botões que diminuem ou aumentam o valor presente em um campo de texto.

## Como funciona?

1. Quando um dos botões é acionado, eles ativam uma função;
2. A função chama o valor do campo de texto usando `getElementById`;
3. Um `if` checa qual botão disparou o evento, com base no id recebido como parâmetro. Em caso positivo, a primeira ação é executada:
    1. recebe o valor do campo de texto e o converte em número (`parseInt(input.value)`),
    2. o valor extraído entra em operação matemática de subtração,
    3. o resultado aparece no campo de texto.
4. Caso a função não tenha sido acionada pelo primeiro botão (`decrementa`), um `else` então pula para a linha seguinte, que faz o mesmo que a operação anterior, mas com soma em vez de subtração.
7. Os botões usam `this.id` em uma operação com `onclick` para se identificarem na função.

## Refatoração

A primeira versão desse app funcionava com duas funções separadas que faziam a mesma coisa:
1. recebe o valor do campo de texto,
2. subtrai/soma,
3. imprime o resultado no próprio campo de texto.

```js
menos = function() {
    const inputResultado = document.getElementById('resultado');
    var valor = parseInt(inputResultado.value) - 1;
    document.getElementById('resultado').value = valor;
}

mais = function() {
    const inputResultado = document.getElementById('resultado');
    var valor = parseInt(inputResultado.value) + 1;
    document.getElementById('resultado').value = valor;
}

document.getElementById('decrementa').onclick = menos;
document.getElementById('incrementa').onclick = mais;
```

Resolvi tentar unir tudo em uma só função e, embora tenha conseguido, ainda enxergo algumas redundâncias que talvez poderiam ser eliminadas, como os botões usarem parâmetros quase idênticos, por exemplo.

Isso me ajudou a perceber padrões de duplicação de lógica e a importância de abstrações, mesmo em exemplos simples. Mas, por ora, resolvi parar por aqui até aprofundar meu conhecimento.

## Aprendizados

- Leitura e escrita de valores no DOM
- Uso de eventos e `onclick`
- Passagem de parâmetros via `this.id`
- Redução de duplicação de lógica por meio de refatoração

## Como testar

Acesse: https://leeo-pereira.github.io/front-end-journey/mais-menos/
