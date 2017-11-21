# PZ_Challenge_Web
Programming Challenge for Web Developers

# Photozig - Desafio de programação Web

## Instruções de entrega do desafio

1. Primeiro, faça um fork deste projeto para sua conta no Github (crie uma se você não possuir).
2. Em seguida, implemente o projeto tal qual descrito abaixo, em seu próprio fork.
3. Crie as instruções de instalação e execução do aplicativo em seu readme.md
4. Por fim, envie o link do seu repositório para avaliarmos seu código

## Requisitos do projeto

Carregar um json dinamicamente a partir da url `http://pbmedia.pepblast.com/pz_challenge/assets.json`, fazer o parse e criar uma interface (lista) com os objetos disponíveis no json. Na lista mostrar o nome ("name") e a imagem ("im") do objeto.

Quando selecionado algum item da lista, deve mostrar uma nova tela onde tocará o vídeo background ("bg") juntamente com o áudio ("sg"). O background deve tocar em looping até o áudio terminar.

Para os objetos que contenham textos ("txts"), a interface deve mostrar os textos centralizados em cima do vídeo background no tempo especificado ("time").

Bônus 1: ter uma opção de ir para o item próximo e anterior a partir dessa tela, sem ter que voltar para a lista e selecionar outro item.

Bônus 2: implementar usando o Canvas.

Para carregar os assets utilizar a url base do campo ("assetsLocation") + o nome do arquivo especificado em cada objeto.

## Avaliação

Seu projeto será avaliado conforme os critérios:

1. Atende funcionalmente o que foi pedido;
2. Interpretação dos requisitos e do json fornecido;
3. Documentar o que é necessário para configurar o ambiente e rodar sua aplicação na maquina do avaliador;
4. Boas práticas de programação;
5. Código bem escrito, fácil de entender e manter;
6. Interface e uso da aplicação pelo Usuário;


## Sobre o projeto

1. Fiz o fork do projeto no github https://github.com/rafaelpllopes/PZ_Challenge_Web
2. Clonei o projeto PZ_Challenge_Web
3. Na pasta do projeto foi criado com o angular-cli a pasta onde sera criado os componentes do projeto, com o comando ng new app-pz-challenge.
4. Baixei a ultima versao do bootstrap "4" para utilizar no projeto como estilo. "npm install bootstrap@next --save"
5. Em styles.css foi importado o bootstrap para utilizar no projeto. "@import '~bootstrap/dist/css/bootstrap.min.css'".
6. Para desenvolvimento sera usado o ng server, que executa no localhost:4200 por padrao.
7. Criado o componente lista.
