# fibroapp
A aplicação foi desenvolvida em duas partes, front-end e back-end

 ### Tec: Back-End
  - dokcer
  - express
  - sequelize
  - mariadb
  ### Tec: Front-End
  - react
  - Typescript
  - react router dom 
 
## Pré-requisitos para rodar está aplicação
 - node instalado > 16
 - dokcer e docker compose instalado na máquina 
   - [ linux ](https://docs.docker.com/engine/install/ubuntu/)
 - Insomia (para realizar a alimentação do banco de dados) 
  
 ## Insomnia
  - para visualizar a documentação da API
    - abra o terminal na pasta doc_api e rode o seguinte comando `npx server`  acesse o caminho que irá aparece no terminal
    
  ## Rodando a aplicação 
   ## Antes de rodar os comandos
   - abra o terminal na pasta do fibromialgia-app e rode o seuinte comando (npm install ou yarn ), caso não tenha yarn  isntalado  rode `npm install --global yarn`
   - Abra o terminal na pasta fibromialgiaApp e faça `npm install ou yarn `
   
   - Para rodar o projeto, abra o terminal na pasta fibromialgiaApp e rode os seguintes comandos
      - yarn dev:up
      - Com outro terminal aberto, na pasta de fibromialgiaApp rode no terminal
         - `npx sequelize db:migrate`
      - Acesse a aplicação http://localhost:3001
      - Caso não aparece as mensagens, será necessário cadastrá-las no banco utilizando o isomina 
      - abra o terminal na pasta doc_api e rode o seguinte comando `npx server`
      - Abra o insomia e faça as requisições de alimentaçao do banco de dados