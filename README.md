<h1>Cinemik</h1>

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/nic01gbbb/Cinemik/blob/main/LICENSE)

Esta aplicação é um projeto full-stack de controle de usuário de um cinema.
no backend Uma API Rest para controle de dados,ela armazena cadastro de usuários e acentos da sessão.


<h2>Funcionalidades do projeto</h2>

- Armazenar os dados da sessão do cinema
- Armazenar os dados dos usuários
- O usuário pode escolher seu acento de preferência, da cadeira "A" até a cadeira "M", e da fileira "0" até a "15"
- O usuário não pode escolher um acento que já esteja ocupado
- O usuário pode visualizar seu acento na tabela

 <h2>  Tecnologias utilizadas </h2>

### Tecnologias usadas no backend 

 <div    justify:"space-between"  >
<img  src="https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png" width="100px" heigth="200px"  />
<img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0TfiDi7n-zqrSDMcUPVBFv4SVKqzhIQzrg&s"  width="100px" heigth="200px"  />
<img  src="https://static-00.iconduck.com/assets.00/sequelize-original-icon-885x1024-r8dswyvj.png" width="80px" heigth="200px"   />
  </div>

### Tecnologias usadas no frontend

 <div    justify:"space-between"  >
<img  src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-512.png" width="100px"   />
<img  src="https://user-images.githubusercontent.com/16843090/101181820-f3a63780-3612-11eb-9d3a-05452f2b0ad8.png" width="100px" heigth="200px"   />
<img  src="https://marketplacedesignoye.s3.ap-south-1.amazonaws.com/css-programming-language-icon-symbol-logo-vector-_627.png" width="100px" heigth="200px"   />
 </div>

## Como esta meu projeto 

![Captura de tela 2024-06-03 165757](https://github.com/nic01gbbb/Cinemik/assets/148110086/2723b097-0396-4c20-99be-17a39d8805de)

![Captura de tela 2024-06-03 170114](https://github.com/nic01gbbb/Cinemik/assets/148110086/35d41221-89bc-4354-9fca-e5cb95e77965)

![Captura de tela 2024-06-05 160745](https://github.com/nic01gbbb/Cinemik/assets/148110086/e84171cf-c91e-4d98-96ad-78eccb58947a)




<h2>Inicialização</h2>

Este projeto foi desenvolvido em ambiente windows utilizando as tecnologias citadas anteriormente e feito no "Visual Studio Code"<a> https://code.visualstudio.com/download<a/> programa bem eficiente que atende todos os 
requisitos da aplicação.A preparação consiste em instalar as tecnologias de acordo com seu sistema operacional.


<h2>Modo de configuração para uso</h2>

### Modo de configuração para o backend


 O modo de uso consiste basicamente em criar um banco de dados e as tabelas de usuário e sessão,para isso 
 primeiramente instale "mysql workebench",<a> https://dev.mysql.com/downloads/workbench</a>,
 ambiente próprio para criação e manipulação das tabelas,crie sua conta e após isso siga todo o caminho abaixo.

Depois de instalado as tecnologias necessárias,ainda no github,clique no link principal do projeto,em code faça o download de zip para clonar o projeto.
Depois de baixar a pasta,clique com o botão direito do mouse na mesma e extraia todo o arquivo,dentro da pasta extraida em terminal digite o comando:
"code.",para abrir o editor.
Dentro do Visual Studio Code clique com o botão direito do mouse na pasta: "backend",em seguida abra o terminal e instale as dependências com 
"npm install".
Com as dependências instaladas o próximo passo é criar um banco de dados mysql,para isso configure os dados da conta do banco
no arquivo config.json da pasta config,será requirido seu username,host,password,dialect e o nome do banco de sua escolha em database.
Assim que os dados forem configurados use o comando: "npx sequelize db:create" e o banco será criado.
Criado o banco, será necessário criar as tabelas,para isso primeiramente configure seus dados no arquivo connect.js
da pasta db, sobre a conta em mysql workbench,La passará o host,username,e password.
Com a configurações do arquivo connect.js pronto, dentro da pasta "db" e dentro da pasta "migrations",existem duas pastas com os nomes:"usuario" e "sessao" e
ambas com arquivos já criados.
Com o comando "npx sequelize migration:create --name=usuario",criará um novo arquivo na pasta usuário,copie todo o arquivo anterior da mesma pasta e 
troque todo o arquivo novo pelo arquivo copiado,use o comando: "npx sequelize db:migrate",assim a tabela
de usuários será criada no banco de dados.
Para criar a tabela de sessão,no arquivo .sequelizerc troque o nome "usuário" dentro de "migrations-path" por "sessão" e
use o comando "npx sequelize migration:create --name=sessão".
Repita o mesmo processo da criação da tabela "usuário", copiando o arquivo anterior com o nome "sessao" e trocando o arquivo criado pelo copiado,
use novamente o comando:"npx sequelize db:migrate,assim será criado a tabela de sessão, e a aplicação estará pronta para ser rodada.
Use o comando: "npm run dev",para rodar a API. 
</p>

### Modo de configuração para o frontend

<p>
Para configurar o frontend,dentro de Visual Studio Code,clique com o botão direito na pasta: "frontend",para acionar o terminal e
use o comando: "npm install"para baixar as dependèncias.
Após, basta digitar o comando: "npm run dev" e clicar no link que abrirá em alguns segundos.
</p>



