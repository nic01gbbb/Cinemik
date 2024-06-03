<h1>API cinemik</h1>

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/nic01gbbb/CinemikFrontend/blob/main/LICENSE)

Esta aplicação é a primeira parte do projeto de controle de usuário de um cinema.
Uma API Rest para controle de dados,ela armazena cadastro de usuários e acentos da sessão.

<h2>Funcionalidades</h2>

- Armazenar os dados da sessão do cinema
- Armazenar os dados dos usuários
- O usuário pode escolher seu acento de preferência, da cadeira "A" até a cadeira "M", e da fileira "0" até a "15"
- O usuário não pode escolher um acento que já esteja ocupado
- O usuário pode visualizar seu acento na tabela

 <h2>  Tecnologias utilizadas </h2>

  <div    justify:"space-between"  >
<img  src="https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png" width="100px"   />
<img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0TfiDi7n-zqrSDMcUPVBFv4SVKqzhIQzrg&s"  width="100px"   />
<img  src="https://media.licdn.com/dms/image/D5612AQH-HrWdn6BhYg/article-cover_image-shrink_720_1280/0/1677358366310?e=2147483647&v=beta&t=1Rn8YVto_7vIkYVWvNSR72E-jj7E8GHlC07ozVhhIZM" width="200px"   />
  </div>

<h2>Inicialização</h2>

Este projeto foi desenvolvido em ambiente windows utilizando as tecnologias citadas anteriormente.
A preparação consiste em instalar as tecnologias de acordo com seu sistema operacional.

<h2>Modo de configuração para uso</h2>

<p>
<p> O modo de uso consiste basicamente em criar um banco de dados e as tabelas de usuário e sessão,Para isso 
 siga todo o caminho abaixo.
</p>

Depois de instalado as tecnologias, crie uma conta em mysql workbench,ambiente para controle das tabelas "usuario" e "sessão".
Com as tecnologias instaladas o próximo passo é criar um banco de dados mysql,para isso configure os dados da conta do banco
criada no arquivo config.json, da pasta config.Assim que os dados forem configurados use o comando: "npx sequelize db:create" e
o banco será criado.
Terminado o banco, será necessário criar as tabelas,para isso primeiramente configure seus dados no arquivo connect.js
da pasta db, sobre a conta em mysql workbench,La passará o nome do host,nome do usuário,senha e dialect.
Com a configurações do arquivo connect.js pronto, dentro da pasta migrations, existem duas pastas com os nomes:"usuario" e "sessao" e
ambas com arquivos já criados.
Com o comando "npx sequelize migration:create --name=usuario" criará um novo arquivo na pasta usuário,copie todo o arquivo anterior  
da mesma pasta e troque todo o arquivo novo pelo arquivo copiado,use o comando: "npx sequelize db:migrate",assim a tabela
de usuários será criada no banco de dados.
Para criar a tabela de sessão,no arquivo .sequelizerc troque o nome:"usuário" dentro de "migrations-path" por "sessão" e
use o comando "npx sequelize migration:create --name=sessão.
Repita o mesmo processo da criação da tabela "usuário", copiando o arquivo anterior com o nome "sessao" e trocando o arquivo criado pelo copiado,
use novamente o comando:"npx sequelize db:migrate,assim será criado a tabela de sessão, e a aplicação estará pronta para ser rodada.

</p>

#Para rodar a aplicação use o comando "npm run dev"
