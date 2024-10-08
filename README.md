 ### <div align="center"> [Acesse aqui](https://random-user-js-murex.vercel.app)
https://github.com/user-attachments/assets/ddca455d-1111-42e0-9f5f-bdc325c6b819

# Random User Generator - Projeto Web com Integração MongoDB
Este projeto é uma aplicação web que gera e exibe informações de usuários aleatórios usando a API `randomuser.me`, com uma interface de usuário interativa. O projeto também integra o MongoDB para armazenamento e gerenciamento de dados. 

## Estrutura do Projeto

O projeto é composto pelas seguintes pastas e arquivos:

- **app/**: Contém o código da aplicação backend.
  - `controllers/`: Controladores que gerenciam a lógica da aplicação.
  - `models/`: Modelos de dados para interação com o MongoDB.
  - `routes/`: Definições das rotas da aplicação.
- **pages/**: Contém as páginas estáticas ou HTML da aplicação.
- **home/**: Diretório para arquivos relacionados à interface do usuário.
- `index.html`: Arquivo principal HTML para a interface do usuário.
- `js/app.js`: Arquivo JavaScript que controla a lógica do frontend.
- `css/style.css`: Arquivo CSS para estilos da aplicação.

## Configuração do Ambiente

### Requisitos

- **Node.js**: Versão 18.17.1 ou superior.
- **MongoDB**: Versão 7.0 ou superior.

### Instalação

1. **Clonar o Repositório**

   Primeiro, clone o repositório do projeto:
   ```sh
   git clone <URL-DO-REPOSITORIO>
   cd <NOME-DO-REPOSITORIO>
   ```

2. **Instalar Dependências**

   Navegue até o diretório do projeto e instale as dependências do Node.js:
   ```sh
   npm install
   ```

3. **Configurar MongoDB**

   Se você ainda não tem o MongoDB instalado, siga estas etapas:

   - **Baixar e Instalar MongoDB**:
     - Acesse o [site oficial do MongoDB](https://www.mongodb.com/try/download/community) e baixe a versão adequada para o seu sistema operacional.
     - Siga as instruções de instalação.

   - **Adicionar MongoDB ao PATH** (no Windows):
     1. **Abrir o PowerShell como Administrador**.
     2. **Adicionar o Caminho ao PATH Temporariamente**:
        ```powershell
        $env:Path += ";C:\Program Files\MongoDB\Server\7.0\bin"
        ```
     3. **Adicionar o Caminho Permanentemente**:
        ```powershell
        [System.Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Program Files\MongoDB\Server\7.0\bin", [System.EnvironmentVariableTarget]::Machine)
        ```
     4. **Reiniciar o PowerShell** e verificar a instalação:
        ```powershell
        mongod --version
        ```

4. **Configurar o Banco de Dados**

   - **Criar uma Base de Dados**: Você pode usar o MongoDB Shell para criar uma nova base de dados se necessário.

5. **Iniciar o Servidor**

   - **Iniciar o MongoDB**: Execute o seguinte comando para iniciar o servidor MongoDB:
     ```sh
     mongod
     ```
   - **Iniciar a Aplicação Node.js**:
     ```sh
     npm start
     ```

## Estrutura do Código

### `index.html`

Este é o arquivo HTML principal que define a estrutura da página. Inclui links para arquivos CSS e JS, além de uma estrutura básica de HTML para exibir as informações do usuário.

### `js/app.js`

Este arquivo JavaScript controla a lógica do frontend, incluindo a recuperação e exibição dos dados do usuário.

- **Funções Principais**:
  - `preloadImage(src)`: Carrega uma imagem de forma assíncrona.
  - `fetchUserData()`: Faz uma requisição para a API `randomuser.me` para obter dados do usuário.
  - `loadUserData()`: Atualiza a interface com os dados do usuário.

### `css/style.css`

Este arquivo CSS define os estilos para a aplicação, garantindo que a interface do usuário seja visualmente atraente e funcional.

### Arquitetura Backend

#### `app/controllers/`

Aqui estão os controladores responsáveis por lidar com as solicitações HTTP e interagir com os modelos de dados.

#### `app/models/`

Modelos de dados que definem como os dados são armazenados e recuperados do MongoDB.

#### `app/routes/`

Define as rotas da aplicação e como as solicitações são roteadas para os controladores apropriados.

## Comandos Úteis

- **Iniciar o MongoDB**:
  ```sh
  mongod
  ```

- **Iniciar a Aplicação Node.js**:
  ```sh
  npm start
  ```

- **Parar a Aplicação Node.js**:
  Pressione `Ctrl + C` no terminal onde a aplicação está em execução.

## Troubleshooting

- **Se `mongod` não for reconhecido**: Verifique se o MongoDB está corretamente instalado e se o caminho está adicionado ao PATH.
- **Se a aplicação Node.js não iniciar**: Verifique se todas as dependências estão instaladas e se o arquivo `app.js` está configurado corretamente.

## Links Úteis

- [Documentação do MongoDB](https://www.mongodb.com/docs/)
- [Documentação do Node.js](https://nodejs.org/en/docs/)
- [API randomuser.me](https://randomuser.me/)
