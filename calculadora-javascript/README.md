# Calculadora JavaScript

Esta é uma calculadora simples desenvolvida em HTML, CSS e JavaScript como exercício de lógica em JavaScript, com foco em entender eventos, funções e manipulação do DOM.

A calculadora recebe dois números do usuário e realiza uma operação escolhida entre quatro opções: somar, subtrair, multiplicar ou dividir.

## Como a calculadora funciona

O funcionamento da calculadora segue o seguinte fluxo:

- o usuário insere dois números em inputs, cujos valores são armazenados nas variáveis `num1` e `num2`;
- cada botão de operação (`somar`, `subtrair`, `multiplicar`, `dividiri` é selecionado no JavaScript usando `getElementById`;
- ao clicar em um botão (`onclickc`), um evento é disparado;
- esse evento aciona uma função que:
-   lê os valores dos inputs usando `parseFloat(num1.value)` e `parseFloat(num2.value)`;
-   executa a operação correspondente ao botão clicado;
- o resultado da operação é então exibido em um input identificado no documento pelo seu ID.

## Reflexões sobre as limitações da calculadora

Esta é uma aplicação bem básica, mas foi a primeira que desenvolvi praticamente sozinho e a primeira que consigo explicar com clareza como funciona.

Após revisar o código e conversar com IA, percebi que existem formas mais eficientes de estruturar essa lógica. Uma possibilidade seria centralizar todas as operações em uma única função, reduzindo repetição de código.

Mesmo assim, optei por manter a implementação atual, pois ela representa fielmente meu momento de aprendizado. Preferi não refatorar o código antes de compreender melhor conceitos que ainda estou estudando.

Quando eu voltar a este projeto no futuro, pretendo tornar o código mais eficiente para que a calculadora rode em menos linhas, aplicando abstrações e boas práticas que ainda estou aprendendo.

## Como rodar o projeto

Para testar a calculadora, visite https://leeo-pereira.github.io/front-end-journey/calculadora-javascript/
