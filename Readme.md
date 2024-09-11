Random User Generator - Projeto Web com Integração MongoDB
Este projeto é uma aplicação web que gera e exibe informações de usuários aleatórios usando a API randomuser.me, com uma interface de usuário interativa. O projeto também integra o MongoDB para armazenamento e gerenciamento de dados.

Estrutura do Projeto
O projeto é composto pelas seguintes pastas e arquivos:

app/: Contém o código da aplicação backend.
controllers/: Controladores que gerenciam a lógica da aplicação.
models/: Modelos de dados para interação com o MongoDB.
routes/: Definições das rotas da aplicação.
pages/: Contém as páginas estáticas ou HTML da aplicação.
home/: Diretório para arquivos relacionados à interface do usuário.
index.html: Arquivo principal HTML para a interface do usuário.
js/app.js: Arquivo JavaScript que controla a lógica do frontend.
css/style.css: Arquivo CSS para estilos da aplicação.
Configuração do Ambiente
Requisitos
Node.js: Versão 18.17.1 ou superior.
MongoDB: Versão 7.0 ou superior.
Instalação
Clonar o Repositório

Primeiro, clone o repositório do projeto:

sh
Copiar código
git clone <URL-DO-REPOSITORIO>
cd <NOME-DO-REPOSITORIO>
Instalar Dependências

Navegue até o diretório do projeto e instale as dependências do Node.js:

sh
Copiar código
npm install
Configurar MongoDB

Se você ainda não tem o MongoDB instalado, siga estas etapas:

Baixar e Instalar MongoDB:

Acesse o site oficial do MongoDB e baixe a versão adequada para o seu sistema operacional.
Siga as instruções de instalação.
Adicionar MongoDB ao PATH (no Windows):

Abrir o PowerShell como Administrador.
Adicionar o Caminho ao PATH Temporariamente:
powershell
Copiar código
$env:Path += ";C:\Program Files\MongoDB\Server\7.0\bin"
Adicionar o Caminho Permanentemente:
powershell
Copiar código
[System.Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Program Files\MongoDB\Server\7.0\bin", [System.EnvironmentVariableTarget]::Machine)
Reiniciar o PowerShell e verificar a instalação:
powershell
Copiar código
mongod --version
Configurar o Banco de Dados

Criar uma Base de Dados: Você pode usar o MongoDB Shell para criar uma nova base de dados se necessário.
Iniciar o Servidor

Iniciar o MongoDB: Execute o seguinte comando para iniciar o servidor MongoDB:
sh
Copiar código
mongod
Iniciar a Aplicação Node.js:
sh
Copiar código
npm start
Estrutura do Código
index.html
Este é o arquivo HTML principal que define a estrutura da página. Inclui links para arquivos CSS e JS, além de uma estrutura básica de HTML para exibir as informações do usuário.

js/app.js
Este arquivo JavaScript controla a lógica do frontend, incluindo a recuperação e exibição dos dados do usuário.

Funções Principais:
preloadImage(src): Carrega uma imagem de forma assíncrona.
fetchUserData(): Faz uma requisição para a API randomuser.me para obter dados do usuário.
loadUserData(): Atualiza a interface com os dados do usuário.
css/style.css
Este arquivo CSS define os estilos para a aplicação, garantindo que a interface do usuário seja visualmente atraente e funcional.

Arquitetura Backend
app/controllers/
Aqui estão os controladores responsáveis por lidar com as solicitações HTTP e interagir com os modelos de dados.

app/models/
Modelos de dados que definem como os dados são armazenados e recuperados do MongoDB.

app/routes/
Define as rotas da aplicação e como as solicitações são roteadas para os controladores apropriados.

Comandos Úteis
Iniciar o MongoDB:

sh
Copiar código
mongod
Iniciar a Aplicação Node.js:

sh
Copiar código
npm start
Parar a Aplicação Node.js: Pressione Ctrl + C no terminal onde a aplicação está em execução.

Troubleshooting
Se mongod não for reconhecido: Verifique se o MongoDB está corretamente instalado e se o caminho está adicionado ao PATH.
Se a aplicação Node.js não iniciar: Verifique se todas as dependências estão instaladas e se o arquivo app.js está configurado corretamente.
Links Úteis
Documentação do MongoDB
Documentação do Node.js
API randomuser.me
Este README cobre a configuração básica do projeto, a estrutura do código, e instruções para rodar e depurar a aplicação. Ajuste conforme necessário para refletir as especificidades do seu projeto. Se precisar de mais detalhes ou tiver questões específicas, sinta-se à vontade para perguntar!






