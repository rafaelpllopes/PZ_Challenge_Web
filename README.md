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

>> Inicio
1. Fiz o fork do projeto no github https://github.com/rafaelpllopes/PZ_Challenge_Web
2. Clonei o projeto PZ_Challenge_Web
3. Na pasta do projeto foi criado com o angular-cli a pasta onde sera criado os componentes do projeto, com o comando ng new app-pz-challenge.
4. Baixei a ultima versao do bootstrap "4" para utilizar no projeto como estilo. "npm install bootstrap@next --save"
5. Em styles.css foi importado o bootstrap para utilizar no projeto. "@import '~bootstrap/dist/css/bootstrap.min.css'".
6. Para desenvolvimento sera usado o ng server, que executa no localhost:4200 por padrao.
7. Criado o componente lista.

* Utilizei nodejs para obter o json devido ao cors (Cross-origin resource sharing) e ser o servidor;
* Para o frontend angular e estico com bootstrap 4;
* O frontend esta disponivel na pasta app-pz-challenge, as configuraçoes do nodejs estao na pasta server

>> Requisitos
* angular-cli
* nodejs

## Nodejs
>> servidor para buscar json pela internet solucionando o problema de cors 
>> dependencias
* express: 4.16.1 "npm install --save express"
* consign: 0.1.6 "npm install --save consign"
* body-parser: 1.18.2 "npm install --save body-parser"
* restify-clients: 1.5.2 "npm install --save restify-clients"
* cors: 2.8.4 "npm install --save cors"

>> server.js
arquivo que possui as configuracoes para que o servidor possa rodar.

>> pasta config
Pasta que contem as configurcoes do servidor

>> pasta app
Pasta que contem o arquivo para buscar o json

>> Como utilizar
1. Na pasta PZ Challenge WEB
2. Va em server
3. Instale as dependencias com o comando npm install
4. Suba o servidor com o comando npm start ou node server.js

## Aplicaçao (angular)
>> dependencias
* Iniciar o projeto na pasta PZ_Challenge_web, ng new app-pz-challenge
* bootstrap 4: npm install bootstrap@next --save "Em styles.css foi importado o bootstrap para utilizar no projeto. "@import '~bootstrap/dist/css/bootstrap.min.css'"
* Para desenvolvimento sera usado o ng server, que executa no localhost:4200 por padrao.
* Criado o componente lista com o comando ng g c lista

>> versao desenvolvimento

1. Start o servidor com o comando ng start
2. Abrir no navegador localhost:4200